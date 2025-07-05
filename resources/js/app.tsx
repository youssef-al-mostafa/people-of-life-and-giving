import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const debugLog = (message: string, data?: any) => {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`, data || '');

    if (import.meta.env.PROD) {
        fetch('/api/debug-log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({
                level: 'debug',
                message,
                data: data || null,
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString()
            })
        }).catch(() => {});
    }
};

const errorLog = (error: Error, context?: string) => {
    const errorData = {
        message: error.message,
        stack: error.stack,
        context: context || 'unknown',
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
    };

    console.error(`[ERROR] ${context || 'Unknown context'}:`, errorData);

    if (import.meta.env.PROD) {
        fetch('/api/error-log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(errorData)
        }).catch(() => {}); 
    }
};

window.addEventListener('error', (event) => {
    errorLog(new Error(event.message), `Global error handler - ${event.filename}:${event.lineno}:${event.colno}`);
});

window.addEventListener('unhandledrejection', (event) => {
    errorLog(new Error(String(event.reason)), 'Unhandled promise rejection');
});

debugLog('Starting app initialization');
debugLog('Environment', {
    NODE_ENV: import.meta.env.MODE,
    PROD: import.meta.env.PROD,
    DEV: import.meta.env.DEV,
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME
});

debugLog('DOM state', {
    readyState: document.readyState,
    hasAppElement: !!document.getElementById('app'),
    bodyChildren: document.body.children.length
});

const waitForDOM = (): Promise<void> => {
    return new Promise((resolve) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => resolve());
        } else {
            resolve();
        }
    });
};

const initializeApp = async () => {
    try {
        debugLog('Waiting for DOM to be ready');
        await waitForDOM();

        debugLog('DOM ready, checking for app element');
        const appElement = document.getElementById('app');

        if (!appElement) {
            throw new Error('App element not found in DOM');
        }

        debugLog('App element found', {
            id: appElement.id,
            hasDataset: !!appElement.dataset,
            datasetKeys: Object.keys(appElement.dataset || {}),
            hasDataPage: !!appElement.dataset.page
        });

        if (!appElement.dataset.page) {
            throw new Error('App element missing data-page attribute');
        }

        let initialPage;
        try {
            initialPage = JSON.parse(appElement.dataset.page);
            debugLog('Successfully parsed initial page data', {
                component: initialPage.component,
                hasProps: !!initialPage.props,
                propsKeys: Object.keys(initialPage.props || {})
            });
        } catch (parseError) {
            throw new Error(`Failed to parse data-page JSON: ${parseError}`);
        }

        debugLog('Creating Inertia app');

        await createInertiaApp({
            title: (title) => `${title} - ${appName}`,
            resolve: async (name) => {
                debugLog(`Resolving component: ${name}`);

                try {
                    const component = await resolvePageComponent(
                        `./pages/admin/${name}.tsx`,
                        import.meta.glob('./pages/admin/**/*.tsx')
                    );
                    debugLog(`Successfully resolved admin component: ${name}`);
                    return component;
                } catch (error) {
                    debugLog(`Admin component not found: ${name}`, error);

                    try {
                        const component = await resolvePageComponent(
                            `./pages/website/${name}.tsx`,
                            import.meta.glob('./pages/website/**/*.tsx')
                        );
                        debugLog(`Successfully resolved website component: ${name}`);
                        return component;
                    } catch (secondError) {
                        const errorMsg = `Page component "${name}" not found in any directory`;
                        debugLog(errorMsg, { adminError: error, websiteError: secondError });
                        throw new Error(errorMsg);
                    }
                }
            },
            setup({ el, App, props }) {
                debugLog('Inertia setup called', {
                    hasElement: !!el,
                    elementId: el?.id,
                    hasApp: !!App,
                    hasProps: !!props
                });

                if (!el) {
                    throw new Error('Setup called without element');
                }

                try {
                    const root = createRoot(el);
                    debugLog('React root created successfully');

                    root.render(<App {...props} />);
                    debugLog('App rendered successfully');
                } catch (renderError) {
                    errorLog(renderError as Error, 'React render error');
                    throw renderError;
                }
            },
            progress: {
                color: '#4B5563',
            },
        });

        debugLog('Inertia app created successfully');

    } catch (error) {
        errorLog(error as Error, 'App initialization error');

        const appElement = document.getElementById('app');
        if (appElement) {
            appElement.innerHTML = `
                <div style="padding: 20px; text-align: center; font-family: sans-serif;">
                    <h1>Application Error</h1>
                    <p>The application failed to load. Please refresh the page or contact support.</p>
                    <details style="margin-top: 20px;">
                        <summary>Technical Details</summary>
                        <pre style="text-align: left; background: #f5f5f5; padding: 10px; margin-top: 10px;">${(error as Error).message}\n\n${(error as Error).stack}</pre>
                    </details>
                </div>
            `;
        }

        throw error;
    }
};

initializeApp().then(() => {
    debugLog('App initialization completed');
    initializeTheme();
}).catch((error) => {
    errorLog(error, 'Fatal app initialization error');
});

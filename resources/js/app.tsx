import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        if (name.startsWith('website/')) {
            try {
                return await resolvePageComponent(
                    `./pages/${name}.tsx`,
                    import.meta.glob('./pages/website/**/*.tsx')
                );
            } catch (error) {
                console.error(`Website page component "${name}" not found`);
                throw error;
            }
        }

        try {
            return await resolvePageComponent(
                `./pages/admin/${name}.tsx`,
                import.meta.glob('./pages/admin/**/*.tsx')
            );
        } catch (error) {
            console.error(`Admin page component "${name}" not found`);
            throw error;
        }
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();

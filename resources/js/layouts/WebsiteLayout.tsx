import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import NavBar from '@/components/website/navigation/NavBar';
import Footer from '@/components/website/navigation/Footer';
import { useGeneralData } from '@/hooks/useGeneralData';

interface WebsiteLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

const WebsiteLayout = ({ children, title, description }: WebsiteLayoutProps) => {

    return (
        <>
            <Head title={title}>
                {description && <meta name="description" content={description} />}
            </Head>

            <div className="min-h-screen flex flex-col">
                <NavBar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </div>
        </>
    );
};

export default WebsiteLayout;

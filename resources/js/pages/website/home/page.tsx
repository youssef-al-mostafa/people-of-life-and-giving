import Banner from '@/pages/website/home/Banner';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { usePage } from '@inertiajs/react';
import About from './About';
import Vision from './Vision';
import Contact from './Contact';
import Portfolio from './Media';

interface HomeProps {
    [key: string]: any;
    pageData: {
        attrs: Record<string, any>;
    };
}

export default function Home() {
    const { pageData } = usePage<HomeProps>().props;

    return (
        <WebsiteLayout title="Home" description="Welcome to our website">
            <Banner attrs={pageData.attrs} />
            <About />
            <Vision />
            <Portfolio />
            <Contact />
        </WebsiteLayout>
    );
}

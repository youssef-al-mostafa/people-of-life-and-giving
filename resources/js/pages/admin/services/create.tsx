import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Services',
        href: '/services/create',
    },
];

const create = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Services" />
            <div className="p-4">
                <Link href={route('services.index')}
                    className="btn btn-primary h-fit py-1
                      w-fit rounded-lg">
                    <ArrowLeft />
                    Back to Services
                </Link>
            </div>
        </AppLayout>
    )
}

export default create

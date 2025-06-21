import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/common/button';
import { PlusCircle } from 'lucide-react';
import { AdminsTable } from '../admins/adminsTable';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Services',
        href: route('services.index'),
    },
];

export default function Services() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Services" />
            <div className='p-4'>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">
                        Services
                    </h1>
                    <Button asChild>
                        <Link href={route('services.create')}>
                            <PlusCircle className="h-4 w-4 mr-2" />
                            <span>Create Service</span>
                        </Link>
                    </Button>
                </div>
                <AdminsTable />
            </div>
        </AppLayout>
    );
}

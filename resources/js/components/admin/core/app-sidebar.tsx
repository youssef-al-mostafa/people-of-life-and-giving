import { NavFooter } from '@/components/admin/core/nav-footer';
import { NavMain } from '@/components/admin/core/nav-main';
import { NavUser } from '@/components/admin/core/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/admin/core/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Frame, GalleryVerticalEnd, LayoutGrid, Package2, Users } from 'lucide-react';
import AppLogo from './app-logo';
import { usePermissionNavigation } from '@/hooks/usePermissionNavigation';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
        requiredPermission: 'Can Enter' // Basic permission everyone should have
    },
    {
        title: 'Admins',
        href: route('admin.all'),
        icon: Users,
        requiredPermission: 'Manage Admins'
    },
    {
        title: 'Pages',
        href: '/pages',
        icon: GalleryVerticalEnd,
        requiredPermission: 'Data Entry'
    },
    {
        title: 'Services',
        href: route('services.index'),
        icon: Package2,
        requiredPermission: 'Data Entry'
    },
    {
        title: 'General',
        href: route('general.index'),
        icon: Frame,
        requiredPermission: 'Data Entry'
    }
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    const { filterNavByPermissions } = usePermissionNavigation();

    const visibleMainNavItems = filterNavByPermissions(mainNavItems);
    const visibleFooterNavItems = filterNavByPermissions(footerNavItems);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={visibleMainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={visibleFooterNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

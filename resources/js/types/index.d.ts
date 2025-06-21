import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    requiredPermission?: string;
    requiredPermissions?: string[];
    anyOfPermissions?: string[];
    requiredRole?: string;
    anyOfRoles?: string[];
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    roles?: Role[];
    permissions?: Permission[];
    [key: string]: unknown;
}

export interface Admin {
    id: number;
    name: string;
    email: string;
    verified: boolean;
    created_at: string;
    updated_at: string;
}

export interface ContentItem {
    id: number;
    ref: string;
    status: string;
    attrs: Record<string, any>;
    created_at: string;
    updated_at: string;
}

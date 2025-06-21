import { usePage } from '@inertiajs/react';
import { SharedData, NavItem, User } from '@/types';

interface Permission {
    id: number;
    name: string;
    guard_name: string;
}

interface ExtendedSharedData extends SharedData {
    auth: {
        user: User;
    };
}

export function usePermissionNavigation() {
    const { auth } = usePage<ExtendedSharedData>().props;

    const debugLog = (message: string, data?: any) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`[PermissionNav] ${message}`, data || '');
        }
    };

    const getAllUserPermissions = (): string[] => {
        const user = auth.user;
        const allPermissions = new Set<string>();

        if (user.permissions) {
            user.permissions.forEach(perm => {
                allPermissions.add(perm.name);
                debugLog(`Added direct permission: ${perm.name}`);
            });
        }

        if (user.roles) {
            user.roles.forEach(role => {
                debugLog(`Checking role: ${role.name}`);
                if (role.permissions) {
                    role.permissions.forEach((perm: Permission) => {
                        allPermissions.add(perm.name);
                        debugLog(`Added permission from role ${role.name}: ${perm.name}`);
                    });
                }
            });
        }

        const permissionArray = Array.from(allPermissions);
        debugLog('All user permissions:', permissionArray);
        return permissionArray;
    };

    const getAllUserRoles = (): string[] => {
        const roles = auth.user.roles?.map(role => role.name) || [];
        debugLog('User roles:', roles);
        return roles;
    };

    const hasPermission = (permission: string): boolean => {
        debugLog(`Checking permission: ${permission}`);

        const allPermissions = getAllUserPermissions();
        const hasIt = allPermissions.includes(permission);

        debugLog(`Permission "${permission}" check result:`, hasIt);
        return hasIt;
    };

    const hasRole = (role: string): boolean => {
        debugLog(`Checking role: ${role}`);

        const roles = getAllUserRoles();
        const hasIt = roles.includes(role);

        debugLog(`Role "${role}" check result:`, hasIt);
        return hasIt;
    };

    const hasAnyRole = (roles: string[]): boolean => {
        debugLog(`Checking if user has any of these roles:`, roles);
        const result = roles.some(role => hasRole(role));
        debugLog(`Has any role result:`, result);
        return result;
    };

    const hasAnyPermission = (permissions: string[]): boolean => {
        debugLog(`Checking if user has any of these permissions:`, permissions);
        const result = permissions.some(permission => hasPermission(permission));
        debugLog(`Has any permission result:`, result);
        return result;
    };

    const hasAllPermissions = (permissions: string[]): boolean => {
        debugLog(`Checking if user has all of these permissions:`, permissions);
        const result = permissions.every(permission => hasPermission(permission));
        debugLog(`Has all permissions result:`, result);
        return result;
    };

    const filterNavByPermissions = (navItems: NavItem[]): NavItem[] => {
        debugLog('=== Starting Navigation Filter ===');
        debugLog('User info:', {
            id: auth.user.id,
            name: auth.user.name,
            roles: getAllUserRoles(),
            allPermissions: getAllUserPermissions()
        });

        const filtered = navItems.filter(item => {
            debugLog(`\nEvaluating nav item: "${item.title}"`);

            if (!item.requiredPermission &&
                !item.requiredPermissions &&
                !item.anyOfPermissions &&
                !item.requiredRole &&
                !item.anyOfRoles) {
                debugLog(`✓ No restrictions for "${item.title}" - ALLOWED`);
                return true;
            }

            if (item.requiredRole) {
                const hasRequiredRole = hasRole(item.requiredRole);
                debugLog(`Role requirement "${item.requiredRole}" for "${item.title}": ${hasRequiredRole ? 'PASSED' : 'FAILED'}`);
                if (!hasRequiredRole) return false;
            }

            if (item.anyOfRoles && item.anyOfRoles.length > 0) {
                const hasAnyRequiredRole = hasAnyRole(item.anyOfRoles);
                debugLog(`Any-of-roles requirement for "${item.title}": ${hasAnyRequiredRole ? 'PASSED' : 'FAILED'}`);
                if (!hasAnyRequiredRole) return false;
            }

            if (item.requiredPermission) {
                const hasRequiredPermission = hasPermission(item.requiredPermission);
                debugLog(`Permission requirement "${item.requiredPermission}" for "${item.title}": ${hasRequiredPermission ? 'PASSED' : 'FAILED'}`);
                return hasRequiredPermission;
            }

            if (item.requiredPermissions && item.requiredPermissions.length > 0) {
                const hasAll = hasAllPermissions(item.requiredPermissions);
                debugLog(`All-permissions requirement for "${item.title}": ${hasAll ? 'PASSED' : 'FAILED'}`);
                return hasAll;
            }

            if (item.anyOfPermissions && item.anyOfPermissions.length > 0) {
                const hasAny = hasAnyPermission(item.anyOfPermissions);
                debugLog(`Any-of-permissions requirement for "${item.title}": ${hasAny ? 'PASSED' : 'FAILED'}`);
                return hasAny;
            }

            debugLog(`✓ No failing conditions for "${item.title}" - ALLOWED`);
            return true;
        });

        debugLog('\n=== Navigation Filter Complete ===');
        debugLog('Visible items:', filtered.map(item => item.title));

        return filtered;
    };

    return {
        hasPermission,
        hasRole,
        hasAnyRole,
        hasAnyPermission,
        hasAllPermissions,
        filterNavByPermissions,
        userPermissions: getAllUserPermissions(),
        userRoles: getAllUserRoles(),
        debug: {
            allPermissions: getAllUserPermissions(),
            allRoles: getAllUserRoles(),
            user: auth.user
        }
    };
}

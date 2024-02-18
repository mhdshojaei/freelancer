import { useLocation } from 'react-router-dom';
import useUser from './useUser';

export default function useAuthorize() {
    const { isLoading, user } = useUser();
    const { pathname } = useLocation();

    let isAuthenticated = false;
    if (user) isAuthenticated = true;

    let isAuthorized = false;
    let isVerified = false;
    if (user && Number(user.status) == 2) isVerified = true;
    const Roles = {
        admin: 'ADMIN',
        freelancer: 'FREELANCER',
        owner: 'OWNER',
    };
    const desiredRole = pathname.split('/').at(1);
    if (Object.keys(Roles).includes(desiredRole)) {
        if (user && user.role == Roles[desiredRole]) isAuthorized = true;
    }
    return { isLoading, isAuthenticated, isAuthorized, user, isVerified };
}
import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { ToggleUserStatusApi } from '../../../services/authService';

export function useToggleUserStatus() {
    const { isPending: isUpdating, mutate: toggleUserStatus } = useMutation({
        mutationFn: ToggleUserStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (err) => {
            toast.error(err.response.data.message);
        },
    });
    return { isUpdating, toggleUserStatus };
}
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToggleProjectStatusApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export function useToggleProjectStatus() {
	const QueryClient = useQueryClient();
	const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
		mutationFn: ToggleProjectStatusApi,
		onSuccess: (data) => {
			toast.success(data.message);
			QueryClient.invalidateQueries({
				queryKey: ['owner-projects'],
			});
		},
		onError: (err) => {
			toast.error(err.response.data.message);
		},
	});
	return { isUpdating, toggleProjectStatus };
}

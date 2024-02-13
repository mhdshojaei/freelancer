import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProjectApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export function useRemoveProject() {
	const QueryClient = useQueryClient();
	const { mutate: removeProject, isPending: isDeleting } = useMutation({
		mutationFn: removeProjectApi,
		onSuccess: (data) => {
			toast.success('پروژه با موفقیت حذف شد');
			QueryClient.invalidateQueries({
				queryKey: ['owner-projects'],
			});
		},
		onError: (err) => {
			toast.error(err.response.data.message);
		},
	});
	return { removeProject, isDeleting };
}

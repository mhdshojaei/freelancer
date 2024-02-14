import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProjectApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export function useCreateProject() {
	const QueryClient = useQueryClient();
	const {
		data,
		isPending: isCreating,
		mutate: createProject,
	} = useMutation({
		mutationFn: createProjectApi,
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
	return { isCreating, createProject };
}

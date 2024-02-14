import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editProjectApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export function useEditProject() {
	const QueryClient = useQueryClient();
	const { isPending: isEditing, mutate: editProject } = useMutation({
		mutationFn: editProjectApi,
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
	return { isEditing, editProject };
}

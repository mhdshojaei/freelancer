import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToggleProposalStatusApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export function useToggleProposalStatus() {
	const { isPending: isUpdating, mutate: toggleProposalStatus } = useMutation({
		mutationFn: ToggleProposalStatusApi,
		onSuccess: (data) => {
			toast.success(data.message);
		},
		onError: (err) => {
			toast.error(err.response.data.message);
		},
	});
	return { isUpdating, toggleProposalStatus };
}

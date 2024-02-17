import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { createProposalApi } from '../../services/proposalsService';

export function useCreateProposal() {
    const QueryClient = useQueryClient();
    const {
        data,
        isPending: isCreating,
        mutate: createProposal,
    } = useMutation({
        mutationFn: createProposalApi,
        onSuccess: (data) => {
            toast.success(data.message);
            QueryClient.invalidateQueries({
                queryKey: ['proposals'],
            });
        },
        onError: (err) => {
            toast.error(err.response.data.message);
        },
    });
    return { isCreating, createProposal };
}
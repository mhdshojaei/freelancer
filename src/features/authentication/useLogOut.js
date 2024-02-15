import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogoutApi } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
	const QueryClient = useQueryClient();
	const navigate = useNavigate();
	const { isPending, mutate: logout } = useMutation({
		mutationFn: LogoutApi,
		onSuccess: (data) => {
			QueryClient.refetchQueries();
			navigate('/auth', { replace: true });
		},
	});
	return { isPending, logout };
}

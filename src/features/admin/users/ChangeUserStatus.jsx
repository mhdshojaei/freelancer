import { useQueryClient } from '@tanstack/react-query';
import Loading from '../../../ui/Loading';
import { useToggleUserStatus } from './useToggleUserStatus';
import { useForm } from 'react-hook-form';
import RHFSelect from '../../../ui/RHFSelect';

function ChangeUserStatus({ userId, onClose, userStatus }) {
	const { register, handleSubmit } = useForm();

	const options = [
		{
			label: 'رد شده',
			value: 0,
		},
		{
			label: 'در انتظار تایید',
			value: 1,
		},
		{
			label: 'تایید شده',
			value: 2,
		},
	];
	const { isUpdating, toggleUserStatus } = useToggleUserStatus();
	const QueryClient = useQueryClient();

	const onSubmit = (data) => {
		toggleUserStatus(
			{ userId, data },
			{
				onSuccess: () => {
					onClose();
					QueryClient.invalidateQueries({ queryKey: ['users'], userId });
				},
			},
		);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<RHFSelect
					name='status'
					label='تغییر وضعیت'
					register={register}
					required
					options={options}
					defaultOption={userStatus}
				/>
				<div className='!mt-8'>
					{isUpdating ? (
						<Loading />
					) : (
						<button
							type='submit'
							className='btn btn--primary w-full'>
							تایید
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default ChangeUserStatus;

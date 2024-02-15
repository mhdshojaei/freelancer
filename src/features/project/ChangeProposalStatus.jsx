import { useForm } from 'react-hook-form';
import RHFSelect from '../../ui/RHFSelect';
import { useToggleProposalStatus } from './useToggleProposalStatus';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../ui/Loading';

function ChangeProposalStatus({ proposalId, onClose, proposalStatus }) {
	const { id: projectId } = useParams();
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
	const { isUpdating, toggleProposalStatus } = useToggleProposalStatus();
	const QueryClient = useQueryClient();

	const onSubmit = (data) => {
		toggleProposalStatus(
			{ id: proposalId, data },
			{
				onSuccess: () => {
					onClose();
					QueryClient.invalidateQueries({ queryKey: ['project'], projectId });
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
					defaultOption={proposalStatus}
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

export default ChangeProposalStatus;

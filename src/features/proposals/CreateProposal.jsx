import { useForm } from 'react-hook-form';
import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';
import { useCreateProposal } from './useCreateProposal';

function CreateProposal({ onClose, projectId }) {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const { isCreating, createProposal } = useCreateProposal();
	const onSubmit = (data) => {
		const newProject = {
			...data,
			projectId,
		};

		createProposal(newProject, {
			onSuccess: () => {
				onClose();
				reset();
			},
		});
	};
	return (
		<div>
			<form
				className='space-y-8'
				onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label='توضیحات پروژه'
					name='description'
					register={register}
					required
					validationSchema={{
						required: 'توضیحات ضروری است',
						minLength: { value: 10, message: 'طول توضیحات نامعتبر است' },
					}}
					errors={errors}
				/>
				<TextField
					label='قیمت پروژه'
					name='price'
					type='number'
					register={register}
					required
					validationSchema={{
						required: 'توضیحات ضروری است',
					}}
					errors={errors}
				/>
				<TextField
					label='مدت زمان'
					name='duration'
					type='number'
					register={register}
					required
					validationSchema={{
						required: 'مدت زمان ضروری است',
					}}
					errors={errors}
				/>
				<div className='!mt-8'>
					{isCreating ? (
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
export default CreateProposal;

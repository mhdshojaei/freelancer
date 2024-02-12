import React, { useState } from 'react';
import TextField from '../../ui/TextField';
import RadioInput from '../../ui/RadioInput';
import { CompleteProfile } from '../../services/authService';
import Loading from '../../ui/Loading';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function CompleteProfileForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const { isPending, mutateAsync } = useMutation({
		mutationFn: CompleteProfile,
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email);
		try {
			const { message } = await mutateAsync({ name, email, role });
			toast.success(message);
			if (user.status !== 2) {
				navigate('/');
				toast('پروفایل شما در انتظار تایید است', { icon: '👍' });
				return;
			}

			if (user.role == 'OWNER') navigate('/owner');
			if (user.role == 'FREELANCER') navigate('freelancer');
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};
	return (
		<div className='flex justify-center pt-10'>
			<div className='w-full sm:max-w-sm'>
				<form
					onSubmit={handleSubmit}
					className='space-y-8'>
					<TextField
						label='نام و نام خانوادگی'
						name='name'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<TextField
						label='ایمیل'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<div className='flex items-center justify-center gap-x-8'>
						<RadioInput
							label='کارفرما'
							value='OWNER'
							onChange={(e) => setRole(e.target.value)}
							id='OWNER'
							name='role'
							checked={role == 'OWNER'}
						/>
						<RadioInput
							label='فریلنسر'
							value='FREELANCER'
							onChange={(e) => setRole(e.target.value)}
							id='FREELANCER'
							name='role'
							checked={role == 'FREELANCER'}
						/>
					</div>
					<div>
						{isPending ? (
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
		</div>
	);
}

export default CompleteProfileForm;

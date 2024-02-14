import React, { useState } from 'react';
import TextField from '../../ui/TextField';
import RadioInput from '../../ui/RadioInput';
import { CompleteProfile } from '../../services/authService';
import Loading from '../../ui/Loading';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import RadioInputGroup from '../../ui/RadioInputGroup';

function CompleteProfileForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const { isPending, mutateAsync } = useMutation({
		mutationFn: CompleteProfile,
	});
	const onSubmit = async (data) => {
		try {
			const { message } = await mutateAsync(data);
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
					onSubmit={handleSubmit(onSubmit)}
					className='space-y-8'>
					<TextField
						label='نام و نام خانوادگی'
						name='name'
						register={register}
						validationSchema={{
							required: 'نام و نام خانوادگی ضروری است',
						}}
						errors={errors}
					/>
					<TextField
						label='ایمیل'
						name='email'
						register={register}
						validationSchema={{
							required: 'ایمیل ضروری است',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'ایمیل نامعتبر است',
							},
						}}
						errors={errors}
					/>
					<RadioInputGroup
						register={register}
						errors={errors}
						watch={watch}
						configs={{
							name: 'role',
							validationSchema: {
								required: 'انتخاب نقش ضروری است',
							},
							options: [
								{
									value: 'OWNER',
									label: 'کارفرما',
								},
								{ value: 'FREELANCER', label: 'فریلنسر' },
							],
						}}
					/>
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

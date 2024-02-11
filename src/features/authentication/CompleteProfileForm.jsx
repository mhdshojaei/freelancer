import React, { useState } from 'react';
import TextField from '../../ui/TextField';

function CompleteProfileForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	return (
		<div className='flex justify-center pt-10'>
			<div className='w-full sm:max-w-sm'>
				<form className='space-y-8'>
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
						<div className='flex items-center gap-x-2 text-secondary-600'>
							<label htmlFor='OWNER'>کارفرما</label>
							<input
								className='cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900'
								type='radio'
								name='role'
								id='OWNER'
								value='OWNER'
							/>
						</div>
						<div className='flex items-center gap-x-2 text-secondary-600'>
							<label htmlFor='FREELANCER'>فریلنسر</label>
							<input
								className='cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900'
								type='radio'
								name='role'
								id='FREELANCER'
								value='FREELANCER'
							/>
						</div>
					</div>
					<button
						type='submit'
						className='btn btn--primary w-full'>
						تایید
					</button>
				</form>
			</div>
		</div>
	);
}

export default CompleteProfileForm;

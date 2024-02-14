import React from 'react';
import RadioInput from './RadioInput';

function RadioInputGroup({ errors, register, watch, configs }) {
	const { name, validationSchema = {}, options } = configs;

	return (
		<div>
			<div className='flex items-center justify-center gap-x-8'>
				{options.map(({ label, value }) => (
					<RadioInput
						key={value}
						name={name}
						value={value}
						label={label}
						register={register}
						id={value}
						watch={watch}
						validationSchema={validationSchema}
					/>
				))}
			</div>
			{errors && errors[name] && (
				<span className='text-error block text-sm mt-2'>
					{errors[name]?.message}
				</span>
			)}
		</div>
	);
}

export default RadioInputGroup;

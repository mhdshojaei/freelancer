import React from 'react';

function RHFSelect({ label, name, register, options, required }) {
	return (
		<div>
			<label
				htmlFor={name}
				className='mb-2 block to-secondary-700'>
				{label} {required && <span className='text-error'>*</span>}
			</label>
			<select
				{...register(name)}
				id={name}
				name={name}
				className='textField__input'>
				{options.map(({ value, label }) => (
					<option
						key={value}
						value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
}

export default RHFSelect;

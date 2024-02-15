import React from 'react';

function RHFSelect({
	label,
	name,
	register,
	options,
	required,
	defaultOption = 0,
}) {
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
				defaultValue={defaultOption}
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

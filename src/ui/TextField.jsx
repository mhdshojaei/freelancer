/** @format */

function TextField({ label, name, value, onChange }) {
	return (
		<div>
			<label
				htmlFor={name}
				className='block mb-2'>
				{label}
			</label>
			<input
				value={value}
				onChange={onChange}
				id={name}
				type='text'
				className='textField__input'
			/>
		</div>
	);
}

export default TextField;

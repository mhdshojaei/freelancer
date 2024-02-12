import TextField from '../../ui/TextField';

import Loading from '../../ui/Loading';

function SendOtpForm({
	isSendingOtp,
	onSubmit,
	setStep,
	phoneNumber,
	onChange,
}) {
	return (
		<div>
			<form
				className='space-y-8'
				onSubmit={onSubmit}>
				<TextField
					name='phoneNumber'
					value={phoneNumber}
					onChange={onChange}
					label='شماره موبایل'
				/>
				<div>
					{isSendingOtp ? (
						<Loading />
					) : (
						<button
							type='submit'
							className='btn btn--primary w-full'>
							ارسال کد تایید
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default SendOtpForm;

/** @format */

import { useState } from 'react';
import SendOtpForm from './SendOtpForm';
import CheckOtpForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';

function AuthContainer() {
	const {
		isPending: isSendingOtp,
		mutateAsync,
		data: optResponse,
	} = useMutation({
		mutationFn: getOtp,
	});
	const sendOtpHandler = async (e) => {
		e.preventDefault();
		try {
			console.log({ phoneNumber });
			const data = await mutateAsync({ phoneNumber });
			setStep(2);

			toast.success(data.message);
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};
	const [step, setStep] = useState(2);
	const [phoneNumber, setPhoneNumber] = useState('');
	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<SendOtpForm
						onSubmit={sendOtpHandler}
						setStep={setStep}
						isSendingOtp={isSendingOtp}
						phoneNumber={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				);
			case 2:
				return (
					<CheckOtpForm
						optResponse={optResponse}
						onResendOtp={sendOtpHandler}
						phoneNumber={phoneNumber}
						onBack={() => setStep(1)}
					/>
				);
			default:
				return null;
		}
	};
	return <div className='w-full sm:max-w-sm'>{renderStep()}</div>;
}

export default AuthContainer;

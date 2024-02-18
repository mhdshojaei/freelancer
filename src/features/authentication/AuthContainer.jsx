/** @format */

import { useEffect, useState } from 'react';
import SendOtpForm from './SendOtpForm';
import CheckOtpForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';

function AuthContainer() {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const { handleSubmit, register, getValues } = useForm();
	const { user } = useUser();
	useEffect(() => {
		if (user) {
			const param = '/' + user.role.toLowerCase() + '/dashboard';
			navigate(param, { replace: true });
		}
	}, [user]);
	const {
		isPending: isSendingOtp,
		mutateAsync,
		data: otpResponse,
	} = useMutation({
		mutationFn: getOtp,
	});
	const sendOtpHandler = async (e) => {
		try {
			const data = await mutateAsync(e);
			setStep(2);

			toast.success(data.message);
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<SendOtpForm
						onSubmit={handleSubmit(sendOtpHandler)}
						setStep={setStep}
						isSendingOtp={isSendingOtp}
						register={register}
					/>
				);
			case 2:
				return (
					<CheckOtpForm
						otpResponse={otpResponse}
						onResendOtp={sendOtpHandler}
						phoneNumber={getValues('phoneNumber')}
						onBack={() => setStep(1)}
					/>
				);
			default:
				return null;
		}
	};
	return <div className='w-full sm:max-w-sm mt-10'>{renderStep()}</div>;
}

export default AuthContainer;

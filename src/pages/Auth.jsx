/** @format */

import AuthContainer from '../features/authentication/AuthContainer';
import SendOtpForm from '../features/authentication/SendOtpForm';

function Auth() {
	return (
		<div className='container xl:max-w-screen-xl'>
			<div className='flex justify-center mt-10'>
				<AuthContainer />
			</div>
		</div>
	);
}

export default Auth;

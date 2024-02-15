import React from 'react';

import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';
import useUser from '../features/authentication/useUser';

function Header() {
	const { isLoading } = useUser();
	return (
		<div className='bg-secondary-0 py-4 px-8 border-secondary-200 border-b'>
			<div
				className={`flex container xl:w-screen-lg items-center justify-end gap-x-8
				${isLoading ? 'blur-sm opacity-50' : ''}`}>
				<UserAvatar />
				<HeaderMenu />
			</div>
		</div>
	);
}

export default Header;

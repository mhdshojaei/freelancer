import React from 'react';
import useUser from '../pages/useUser';

function Header() {
	const { data } = useUser();
	return <div className='bg-secondary-0 py-4 px-8'>app header</div>;
}

export default Header;

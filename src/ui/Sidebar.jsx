import React, { Children } from 'react';
import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<div className='bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4'>
			<ul className='flex flex-col gap-y-4'>
				<li>
					<CustomNavLink path='/owner/dashboard'>
						<HiHome />
						<span>داشبورد</span>
					</CustomNavLink>
				</li>
				<li>
					<CustomNavLink path='/owner/projects'>
						<HiCollection />
						<span>پروژه‌ها</span>
					</CustomNavLink>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
function CustomNavLink({ children, path }) {
	const navLinkClass =
		'flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  px-2 py-1.5 rounded-lg text-secondary-600 transition-all duration-300';

	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive
					? `bg-primary-100/50 text-primary-900 ${navLinkClass}`
					: navLinkClass
			}>
			{children}
		</NavLink>
	);
}

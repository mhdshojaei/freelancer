import React from 'react';
import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<div className='bg-secondary-0 row-start-1 row-span-2'>
			<ul className='flex flex-col gap-y-4'>
				<li>
					<NavLink
						to='/owner/dashboard'
						className='flex  items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  px-2 py-1.5 text-secondary-600 transition-all duration-300'>
						<HiHome />
						<span>خانه</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/owner/projects'
						className='flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  px-2 py-1.5 text-secondary-600 transition-all duration-300'>
						<HiCollection />
						<span>پروژه‌ها</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;

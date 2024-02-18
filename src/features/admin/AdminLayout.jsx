import {
	HiCollection,
	HiHome,
	HiOutlineViewGrid,
	HiUser,
} from 'react-icons/hi';
import AppLayout from '../../ui/AppLayout';
import CustomNavLink from '../../ui/CustomNavLink';
import Sidebar from '../../ui/Sidebar';

function AdminLayout() {
	return (
		<AppLayout>
			<Sidebar>
				<CustomNavLink path='dashboard'>
					<HiHome />
					<span>داشبورد</span>
				</CustomNavLink>
				<CustomNavLink path='users'>
					<HiUser />
					<span>کاربران</span>
				</CustomNavLink>
				<CustomNavLink path='projects'>
					<HiCollection />
					<span>پروژه‌ها</span>
				</CustomNavLink>
				<CustomNavLink path='proposals'>
					<HiOutlineViewGrid />
					<span>درخواست ها</span>
				</CustomNavLink>
			</Sidebar>
		</AppLayout>
	);
}
export default AdminLayout;

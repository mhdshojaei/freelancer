import { HiCollection, HiHome } from 'react-icons/hi';
import AppLayout from '../../ui/AppLayout';
import CustomNavLink from '../../ui/CustomNavLink';
import Sidebar from '../../ui/Sidebar';

function FreelancerLayout() {
	return (
		<AppLayout>
			<Sidebar>
				<CustomNavLink path='dashboard'>
					<HiHome />
					<span>داشبورد</span>
				</CustomNavLink>

				<CustomNavLink path='projects'>
					<HiCollection />
					<span>پروژه‌ها</span>
				</CustomNavLink>
				<CustomNavLink path='proposals'>
					<HiCollection />
					<span>درخواست ها</span>
				</CustomNavLink>
			</Sidebar>
		</AppLayout>
	);
}
export default FreelancerLayout;

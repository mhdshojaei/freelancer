import { HiCollection, HiHome } from 'react-icons/hi';
import AppLayout from '../../ui/AppLayout';
import CustomNavLink from '../../ui/CustomNavLink';
import Sidebar from '../../ui/Sidebar';

function OwnerLayout() {
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
			</Sidebar>
		</AppLayout>
	);
}
export default OwnerLayout;

import { HiCollection, HiOutlineViewGrid, HiUser } from 'react-icons/hi';
import Stat from '../../ui/Stat';

function Stats({ proposals, projects, users }) {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-x-8'>
			<Stat
				color='yellow'
				value={users}
				title='کاربران'
				icon={<HiUser className='w-20 h-20' />}
			/>
			<Stat
				color='primary'
				value={proposals}
				title='درخواست ها'
				icon={<HiOutlineViewGrid className='w-20 h-20' />}
			/>
			<Stat
				color='green'
				value={projects}
				title='پروژه ها'
				icon={<HiCollection className='w-20 h-20' />}
			/>
		</div>
	);
}
export default Stats;

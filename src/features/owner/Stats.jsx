import {
	HiCollection,
	HiCurrencyDollar,
	HiOutlineViewGrid,
} from 'react-icons/hi';
import Stat from './Stat';

function Stats({ projects }) {
	const numOfProjects = projects.length;
	const numOfAcceptedProjects = projects.filter((p) => p.status == 2).length;

	const numOfProposals = projects.reduce(
		(acc, curr) => curr.proposals.length + acc,
		0,
	);
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-x-8'>
			<Stat
				color='primary'
				value={numOfProjects}
				title='پروژه ها'
				icon={<HiOutlineViewGrid className='w-20 h-20' />}
			/>
			<Stat
				color='green'
				value={numOfAcceptedProjects}
				title='پروژه های واگذار شده'
				icon={<HiCurrencyDollar className='w-20 h-20' />}
			/>
			<Stat
				color='yellow'
				value={numOfProposals}
				title='درخواست ها'
				icon={<HiCollection className='w-20 h-20' />}
			/>
		</div>
	);
}
export default Stats;
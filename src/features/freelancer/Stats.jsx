import {
	HiCollection,
	HiCurrencyDollar,
	HiOutlineViewGrid,
} from 'react-icons/hi';
import Stat from '../../ui/Stat';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers';

function Stats({ proposals }) {
	const numOfProposals = proposals.length;
	const AcceptedProposals = proposals.filter((p) => p.status == 2);
	const balance = AcceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-x-8'>
			<Stat
				color='primary'
				value={numOfProposals}
				title='درخواست ها'
				icon={<HiOutlineViewGrid className='w-20 h-20' />}
			/>
			<Stat
				color='green'
				value={AcceptedProposals.length}
				title='درخواست های تایید شده'
				icon={<HiCurrencyDollar className='w-20 h-20' />}
			/>
			<Stat
				color='yellow'
				value={toPersianNumbersWithComma(balance)}
				title='کیف پول'
				icon={<HiCollection className='w-20 h-20' />}
			/>
		</div>
	);
}
export default Stats;

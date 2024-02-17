import Table from '../../ui/Table';
import {
	toPersianNumbers,
	toPersianNumbersWithComma,
} from '../../utils/toPersianNumbers';
import truncateText from '../../utils/truncateText';
const statusStyle = [
	{
		label: 'رد شده',
		className: 'badge--danger',
	},
	{
		label: 'در انتظار تایید',
		className: 'badge--secondary',
	},
	{
		label: 'تایید شده',
		className: 'badge--success',
	},
];
function ProposalRow({ proposal, index }) {
	return (
		<Table.Row key={proposal._id}>
			<td>{index + 1}</td>
			<td>{truncateText(proposal.description, 50)}</td>
			<td>{toPersianNumbers(proposal.duration)} روز</td>
			<td>{toPersianNumbersWithComma(proposal.price)}</td>
			<td>
				<span className={`badge ${statusStyle[proposal.status].className}`}>
					{statusStyle[proposal.status].label}
				</span>
			</td>
		</Table.Row>
	);
}
export default ProposalRow;

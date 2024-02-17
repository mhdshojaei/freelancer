import ProposalsTable from '../features/proposals/ProposalsTable';

function Proposals() {
	return (
		<div className='font-black text-secondary-700 text-xl mb-8'>
			<h1>پروپزال های شما</h1>
			<ProposalsTable />
		</div>
	);
}
export default Proposals;

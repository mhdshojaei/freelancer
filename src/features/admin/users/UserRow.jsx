import { useState } from 'react';
import Modal from '../../../ui/Modal';
import Table from '../../../ui/Table';
import ChangeUserStatus from './ChangeUserStatus';
const userStatus = [
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
function UserRow({ user, index }) {
	const [open, setOpen] = useState(false);
	const { status } = user;

	return (
		<Table.Row key={user._id}>
			<td>{index + 1}</td>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.phoneNumber}</td>
			<td>{user.role}</td>
			<td>
				<span className={`badge ${userStatus[status].className}`}>
					{userStatus[status].label}
				</span>
			</td>
			<td>
				<Modal
					onClose={() => setOpen(false)}
					open={open}
					title='تغییر وضعیت کاربر'>
					<ChangeUserStatus
						userId={user._id}
						userStatus={status}
						onClose={() => setOpen(false)}
					/>
				</Modal>
				<button onClick={() => setOpen(true)}>تغیر وضعیت</button>
			</td>
		</Table.Row>
	);
}
export default UserRow;

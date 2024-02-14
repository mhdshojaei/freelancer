import React, { useState } from 'react';
import Table from '../../ui/Table';
import truncateText from '../../utils/truncateText';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers';
import toLocalDateShort from '../../utils/toLocalDateShort';
import { HiEye, HiOutlineTrash } from 'react-icons/hi';
import { TbPencilMinus } from 'react-icons/tb';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useRemoveProject } from './useRemoveProject';
import CreateProjectForm from './CreateProjectForm';
import ToggleProjectStatus from './ToggleProjectStatus';
import { Link } from 'react-router-dom';

function ProjectRow({ project, index }) {
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);
	const { isDeleting, removeProject } = useRemoveProject();
	return (
		<Table.Row key={project._id}>
			<td>{index + 1}</td>
			<td>{truncateText(project.title, 30)}</td>
			<td>{project.category.title}</td>
			<td>{toPersianNumbersWithComma(project.budget)}</td>
			<td>{toLocalDateShort(project.deadline)}</td>
			<td>
				<div className='flex flex-wrap items-center gap-2 max-w-[200px]'>
					{project.tags.map((tag) => (
						<span
							className='badge badge--secondary'
							key={tag}>
							{tag}
						</span>
					))}
				</div>
			</td>
			<td>{project.freelancer?.name || '-'}</td>
			<td>
				<ToggleProjectStatus project={project} />
			</td>
			<td>
				<div className='flex items-center gap-x-4'>
					<button
						onClick={() => {
							setIsEditOpen(!isEditOpen);
						}}>
						<TbPencilMinus className='w-5 h-5 text-primary-900' />
					</button>
					<Modal
						title={`ویرایش ${project.title}`}
						open={isEditOpen}
						onClose={() => {
							setIsEditOpen(!isEditOpen);
						}}>
						<CreateProjectForm
							projectToEdit={project}
							onClose={() => {
								setIsEditOpen(!isEditOpen);
							}}
						/>
					</Modal>
					<button
						onClick={() => {
							setIsDeleteOpen(!isDeleteOpen);
						}}>
						<HiOutlineTrash className='w-5 h-5 text-error' />
					</button>
					<Modal
						title={`حذف ${project.title}`}
						open={isDeleteOpen}
						onClose={() => {
							setIsDeleteOpen(!isDeleteOpen);
						}}>
						<ConfirmDelete
							resourseName={project.title}
							onClose={() => {
								setIsDeleteOpen(!isDeleteOpen);
							}}
							onConfirm={() =>
								removeProject(project._id, {
									onSuccess: () => setIsDeleteOpen(false),
								})
							}
							disabled={false}
						/>
					</Modal>
				</div>
			</td>
			<td>
				<Link
					to={project._id}
					className=' justify-center flex items-center'>
					<HiEye className='w-5 h-5 text-primary-800' />
				</Link>
			</td>
		</Table.Row>
	);
}

export default ProjectRow;

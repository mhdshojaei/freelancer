import React, { useState } from 'react';
import TextField from './../../ui/TextField';
import { useForm } from 'react-hook-form';
import RHFSelect from '../../ui/RHFSelect';
import { TagsInput } from 'react-tag-input-component';
import DatePickerField from '../../ui/DatePickerField';
import useCategories from '../../hooks/useCategories';
import { useCreateProject } from './useCreateProject';
import Loading from '../../ui/Loading';
import { useEditProject } from './useEditProject';

function CreateProjectForm({ onClose, projectToEdit = {} }) {
	const { _id: editId } = projectToEdit;
	const isEditSession = Boolean(editId);
	const {
		title,
		description,
		budget,
		category,
		deadline,
		tags: prevTags,
	} = projectToEdit;
	let editValues = {};
	if (isEditSession) {
		editValues = {
			title,
			description,
			budget,
			category: category._id,
		};
	}
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ defaultValues: editValues });
	const [tags, setTags] = useState(prevTags || []);
	const [date, setDate] = useState(deadline || new Date());
	const { isCreating, createProject } = useCreateProject();
	const { isEditing, editProject } = useEditProject();
	const onSubmit = (data) => {
		const newProject = {
			...data,
			deadline: new Date(date).toISOString(),
			tags,
		};
		if (isEditSession) {
			editProject(
				{
					id: editId,
					newProject,
				},
				{
					onSuccess: () => {
						onClose();
						reset();
					},
				},
			);
		} else {
			createProject(newProject, {
				onSuccess: () => {
					onClose();
					reset();
				},
			});
		}
	};
	const { isLoading, categories, transformedCategories } = useCategories();
	return (
		<form
			className='space-y-8'
			onSubmit={handleSubmit(onSubmit)}>
			<TextField
				label='عنوان پروژه'
				name='title'
				register={register}
				required
				validationSchema={{
					required: 'عنوان ضروری است',
					minLength: { value: 10, message: 'طول عنوان نامعتبر است' },
				}}
				errors={errors}
			/>
			<TextField
				label='توضیحات پروژه'
				name='description'
				register={register}
				required
				validationSchema={{
					required: 'توضیحات ضروری است',
					minLength: { value: 15, message: 'طول توضیحات نامعتبر است' },
				}}
				errors={errors}
			/>
			<TextField
				label='بودجه پروژه'
				name='budget'
				register={register}
				required
				validationSchema={{
					required: 'بودجه ضروری است',
					minLength: { value: 5, message: 'طول مبلغ نامعتبر است' },
				}}
				type='number'
				errors={errors}
			/>
			<RHFSelect
				label='دسته بندی'
				name='category'
				register={register}
				options={categories}
				required
			/>
			<div>
				<label className='mb-2 text-secondary-700 block'>تگ پروژه</label>
				<TagsInput
					value={tags}
					onChange={setTags}
					name='tags'
				/>
			</div>
			<DatePickerField
				label='ددلاین'
				date={date}
				setDate={setDate}
			/>
			<div className='!mt-8'>
				{isCreating || isEditing ? (
					<Loading />
				) : (
					<button
						type='submit'
						className='btn btn--primary w-full'>
						تایید
					</button>
				)}
			</div>
		</form>
	);
}

export default CreateProjectForm;

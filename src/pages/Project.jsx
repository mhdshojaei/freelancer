import React from 'react';
import ProjectHeader from '../features/project/ProjectHeader';
import ProposalsTable from '../features/project/ProposalsTable';
import useProject from '../features/project/useProject';

function Project() {
	const { isLoading, project } = useProject();

	return (
		<div>
			<ProjectHeader project={project} />
			<ProposalsTable proposals={project} />
		</div>
	);
}

export default Project;

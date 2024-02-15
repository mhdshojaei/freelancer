import React from 'react';
import ProjectHeader from '../features/project/ProjectHeader';
import ProposalsTable from '../features/project/ProposalsTable';
import useProject from '../features/project/useProject';
import Loading from '../ui/Loading';

function Project() {
	const { isLoading, project } = useProject();

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<ProjectHeader project={project} />
					<ProposalsTable proposals={project.proposals} />
				</div>
			)}
		</div>
	);
}

export default Project;

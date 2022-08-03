import React from 'react';
import { cryptoDapp } from './projectData';
import ProjectDetails from './ProjectDetails';

const CryptoDapp = () => {
	return (
		<>
			<ProjectDetails
				title={cryptoDapp.title}
				description={cryptoDapp.description}
				tools={cryptoDapp.tools}
				github={cryptoDapp.github}
				url={cryptoDapp.url}
				image={cryptoDapp.image}
			/>
		</>
	);
};

export default CryptoDapp;

import React from 'react';
import { AboutMeHeader } from '../styled-components/Header';
import Colors from '../utils/Colors';
const AboutHeader: React.FC = () => {
	return (
		<div className="#aboutme_header">
			<AboutMeHeader
				color={Colors.darker_slate}
				size="30px"
				top="2rem"
				weight={700}
			>
				Welcome. I am Pravesh Kunwar.
			</AboutMeHeader>
		</div>
	);
};

export default AboutHeader;

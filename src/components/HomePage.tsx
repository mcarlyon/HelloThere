import React from "react";
import { Typography, Container, AccordionSummary, AccordionDetails, Accordion, Box, Tab } from "@mui/material";
import { ArrowDropDown, SchoolOutlined, StarOutline, WorkOutline } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const HomePage: React.FC = (): React.JSX.Element => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const TopBlock = (props: {date?: string, title?: string, subtitle?: string, description?: string, icon: React.ReactNode}): React.JSX.Element => {
		return (
			<Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					{props.icon}
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="body2" gutterBottom>{props.date}</Typography>
					<Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>	
						{props.title}
					</Typography>
					<Typography variant="h6" sx={{}} gutterBottom>	
						{props.subtitle}
					</Typography>
					<Typography variant="body1" gutterBottom>
						{props.description}
					</Typography>
				</Box>
			</Box>
		);
	};

	const SkillBlock = (props: {title: string, description?: string, icon: React.ReactNode}): React.JSX.Element => {
		return (
			<Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					{props.icon}
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>{props.title}</Typography>
					<Typography variant="body1" gutterBottom>
						{props.description}
					</Typography>
				</Box>
			</Box>
		);
	};

	return (
		<div>
			{/* Main Content Section */}
			<Container maxWidth="lg" sx={{ py: 4 }}>
				<Typography variant="h4" gutterBottom>
				Hello There
				</Typography>
				<Typography variant="h6" gutterBottom sx={{ pb: 4 }}>		
					My name’s Mitchell and I’m a Front-End Developer currently working for Formitize. 
					As much as I’d love to show off what I’ve done there, most of my work isn’t for public eyes. 
					Without a good portfolio to send you, I figured I’d putting a little something together to show and tell a little about myself.
				</Typography>

				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
						<TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth" centered>
							<Tab label="My Education" value="1" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} icon={<SchoolOutlined />} iconPosition="start"/>
							<Tab label="My Experience" value="2" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} icon={<WorkOutline />} iconPosition="start"/>
							<Tab label="My Skills" value="3" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} icon={<StarOutline />} iconPosition="start"/>
						</TabList>
					</Box>
					<TabPanel value="1">
						<Container>
							<TopBlock
								date="March 2018 - December 2020, Graduated April 2021"
								title="Western Sydney University, Campbelltown NSW"
								subtitle="Bachelor of Information, Communication and Technology"
								description="Graduated with Distinction and a GPA of 6.2. Achieved the Dean's Award 2020."
								icon={<SchoolOutlined fontSize="large" />}
							/>
							<TopBlock
								date="October 2016 - December 2017"
								title="KCP International Language School, Tokyo"
								subtitle="Japanese Language Studies"
								icon={<SchoolOutlined fontSize="large" />}
							/>
						</Container>
					</TabPanel>
					<TabPanel value="2">
						<Container>
							<TopBlock
								date="July 2012 - September 2016, April 2018 - Present"
								title="Greenhouse Creative > Formitize, Gregory Hills NSW"
								subtitle="Front-End Developer"
								icon={<WorkOutline fontSize="large" />}
							/>
							<Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} gutterBottom>
								Roles and Responsibilities
							</Typography>
							<Typography variant="body1" gutterBottom>
								Work in progress. To be filled in later.
							</Typography>
							{/* <Accordion>
								<AccordionSummary
									expandIcon={<ArrowDropDown />}
									aria-controls="panel1-content"
									id="panel1-header"
								>
									<Typography component="span">Web Development</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
										malesuada lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ArrowDropDown />}
									aria-controls="panel2-content"
									id="panel2-header"
								>
									<Typography component="span">Support and Maintenance</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
										malesuada lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ArrowDropDown />}
									aria-controls="panel2-content"
									id="panel2-header"
								>
									<Typography component="span">Collaboration and Communication</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
										malesuada lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ArrowDropDown />}
									aria-controls="panel2-content"
									id="panel2-header"
								>
									<Typography component="span">Continuous Learning and Improvement</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
										malesuada lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion> */}
						</Container>
					</TabPanel>
					<TabPanel value="3">
						<Container>
							<TopBlock
								title="Programming Languages"
								subtitle="HTML, CSS, JavaScript, TypeScript, PHP"
								icon={<StarOutline fontSize="large" />}
							/>
							<TopBlock
								title="Frameworks and Libraries"
								subtitle="React, Material UI, Tailwind CSS, Laravel"
								icon={<StarOutline fontSize="large" />}
							/>
							<TopBlock
								title="Tools and Technologies"
								subtitle="Git, GitHub, GitKraken, Docker, MySQL, Monday, Accelo"
								icon={<StarOutline fontSize="large" />}
							/>
						</Container>
					</TabPanel>
				</TabContext>

				{/* Cards Section */}
				{/* <Container maxWidth="lg">
					<Accordion>
						<AccordionSummary
							expandIcon={<ArrowDropDown />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<Typography component="span">My Education</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ArrowDropDown />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography component="span">My Experience</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Container> */}
			</Container>
		</div>
	);
};

export default HomePage;
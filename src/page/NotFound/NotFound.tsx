import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import lottie from 'lottie-web';
import NotFound404 from '../../config/json/404-notfound.json';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
	const container = React.useRef<any>(null);
	const history = useHistory();

	React.useEffect(() => {
		lottie.loadAnimation({
			container: container?.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: NotFound404,
		});
	}, []);

	const goBackBtn = () => {
		history.push('/');
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100%"
			justifyContent="center"
			alignItems="center"
		>
			<div ref={container}></div>
			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h4">PAGE NOT FOUND</Typography>
			</Box>
			<Box display="flex" flexDirection="column" alignItems="center" my={2}>
				<Typography variant="h6">THE PAGE YOU REQUEST COULD NOT FOUND</Typography>
			</Box>
			<Box display="flex" flexDirection="column" alignItems="center">
				<Button variant="outlined" color="primary" onClick={goBackBtn}>
					GO BACK
				</Button>
			</Box>
		</Box>
	);
};

export default NotFound;

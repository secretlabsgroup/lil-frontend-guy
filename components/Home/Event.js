import React, { Component } from 'react';
import { Query } from 'react-apollo';

import GridContainer from '../../styles/components/Grid/GridContainer';
import GridItem from '../../styles/components/Grid/GridItem';
import Card from '../../styles/components/Card/Card';
import CardHeader from '../../styles/components/Card/CardHeader';

const Event = ({ event, classes }) => {
	return (
		<GridItem xs={12} sm={4} md={4}>
			<Card blog>
				{' '}
				<CardHeader image>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img src={event.image_url} alt='...' />
					</a>
					<div
						className={classes.coloredShadow}
						style={{
							backgroundImage: `url(${event.image_url})`,
							opacity: '1',
						}}
					/>
				</CardHeader>
			</Card>
		</GridItem>
	);
};

export default Event;

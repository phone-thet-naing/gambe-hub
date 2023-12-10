import { Box, Card, CardBody, Heading, Image, Stack, Text, } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

const GameCard = ({ game }) => {
	return (
		<Card borderRadius={'0.625rem'} overflow='hidden'>
			<Image src={game.background_image} />
			<CardBody fontFamily={'Calibri'}>
				<Heading
					fontSize={'1.5rem'}
					fontWeight={'600'}
					fontFamily={'Arial Rounded MT'}
				>
					{game.name}
				</Heading>

				<PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
			</CardBody>
		</Card>
	);
};

export default GameCard;

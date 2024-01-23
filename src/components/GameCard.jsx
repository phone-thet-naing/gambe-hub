import { Badge, Box, Card, CardBody, HStack, Heading, Image, Stack, Text, VStack, } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';

const GameCard = ({ game }) => {
	return (
		<GameCardContainer>
			<Card cursor='pointer'>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody fontFamily="Varela Round" boxSizing='border-box' padding="0.5rem">

				<HStack justifyContent={"space-between"} marginBottom={2}>
					<PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>

				<Heading
					fontSize={'1.2rem'}
					fontWeight={'600'}
					fontFamily={"Varela Round"}
				>
					{game.name}
				</Heading>
			</CardBody>
		</Card>
		</GameCardContainer>
	);
};

export default GameCard;

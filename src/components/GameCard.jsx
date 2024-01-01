import { Badge, Box, Card, CardBody, HStack, Heading, Image, Stack, Text, VStack, } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';

const GameCard = ({ game }) => {
	return (
		<GameCardContainer>
			<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody fontFamily="Varela Round" boxSizing='border-box' padding="0.5rem">
				<HStack justifyContent="space-between">
					<Heading
						fontSize={'1.2rem'}
						fontWeight={'600'}
						fontFamily={"Varela Round"}
					>
						{game.name}
					</Heading>
				</HStack>

				<HStack justifyContent={"space-between"}>
					<PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
		</GameCardContainer>
	);
};

export default GameCard;

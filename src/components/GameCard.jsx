import { Badge, Box, Card, CardBody, HStack, Heading, Image, Stack, Text, VStack, } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

const GameCard = ({ game }) => {
	return (
		<Card borderRadius={'0.625rem'} overflow='hidden'>
			<Image src={game.background_image} />
			<CardBody fontFamily="Varela Round">
				<HStack justifyContent="space-between">
					<Heading
						fontSize={'1.5rem'}
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
	);
};

export default GameCard;

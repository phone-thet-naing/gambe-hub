import { Badge, Box, Card, CardBody, HStack, Heading, Image, Stack, Text, VStack, } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

const GameCard = ({ game }) => {
	return (
		<Card borderRadius={'0.625rem'} overflow='hidden'>
			<Image src={game.background_image} />
			<CardBody fontFamily={'Calibri'}>
				<HStack justifyContent="space-between">
					<Heading
						fontSize={'1.5rem'}
						fontWeight={'600'}
						fontFamily={'Arial Rounded MT'}
						>
						{game.name}
					</Heading>

				</HStack>

				<HStack justifyContent={"space-between"}>
					<PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
					<Badge fontSize="0.85rem" padding="0.3rem 0.5rem" borderRadius="25%"> {game.metacritic} </Badge>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;

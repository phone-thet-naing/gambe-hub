import { Button, HStack, Icon, Menu, MenuButton, MenuCommand, MenuIcon, MenuItem, MenuList, Select, Text } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms'
import { BsChevronDown } from 'react-icons/bs';
import { FaWindows, FaApple, FaLinux, FaPlaystation, FaXbox, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone, MdPhoneAndroid } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"

const PlatformSelector = ({ onOptionSelected }) => {
  const { data: platforms } = usePlatforms();

  function handleChange(id) {
    const [selectedPlatform] = platforms.filter((platform) => platform.id == id);
    // console.log("Selected Platform: ", selectedPlatform);
    onOptionSelected(selectedPlatform);
  }

  const iconMap = {
    pc: FaWindows,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => handleChange(platform.id)}>
            <HStack>
              <Text>{platform.name}</Text>
              <Icon aria-label={platform.slug} key={platform.id} color="gray.500" marginEnd="0.25rem" as={iconMap[platform.slug]} />
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector
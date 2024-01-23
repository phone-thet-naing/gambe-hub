import { Button, Menu, MenuButton, MenuCommand, MenuIcon, MenuItem, MenuList, Select } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms'
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = ({ onOptionSelected }) => {
  const { data: platforms } = usePlatforms();

  function handleChange(id) {
    const [selectedPlatform] = platforms.filter((platform) => platform.id == id);
    console.log("Selected Platform: ", selectedPlatform);
    onOptionSelected(selectedPlatform);
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => handleChange(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector
import { Button, Menu, MenuButton, MenuCommand, MenuIcon, Select } from '@chakra-ui/react'
import React from 'react'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = ({ onOptionSelected }) => {
    const { data: platforms } = usePlatforms();

    // console.log("Platforms: ", platforms);

    return (
        <>
            <Select placeholder='Select Platform' size="md" width="170px" onChange={(event) => onOptionSelected(event.target.value)}>
              {platforms.map(platform => (
                <option
                  key={platform.id}
                  value={platform.name}>
                  {platform.name}
                </option>))
              }
            </Select>
        </>
    )
}

export default PlatformSelector
import { HStack, useColorMode, Text } from "@chakra-ui/react"
import * as React from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { Switch } from "@chakra-ui/react";

function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
        <DarkModeSwitch 
            moonColor="white" 
            sunColor="black" 
            checked={colorMode === 'dark'}
            onChange={toggleColorMode} 
            size={30}
        />
        {/* <Switch colorScheme="green" size='md' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text>Dark Mode</Text> */}
    </HStack>
  )
}

export default ColorModeSwitch
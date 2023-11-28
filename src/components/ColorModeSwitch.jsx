import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { useState } from "react";

function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
        <DarkModeSwitch 
            moonColor="white" 
            sunColor="black" 
            checked={colorMode === 'dark'}
            onChange={toggleColorMode} 
            size={20}
        />
        {/* <Switch colorScheme="green" size='md' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text>Dark Mode</Text> */}
    </HStack>
  )
}

export default ColorModeSwitch
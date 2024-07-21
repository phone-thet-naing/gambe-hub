import { HStack, Heading, Image, VStack, useColorMode } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { useEffect } from "react";
// import logo from "../assets/breezy-high-resolution-logo-black-transparent.webp"
import { useState } from "react";
import React from "react";
import SearchInput from "./SearchInput";
import SearchableDropdown from "./SearchableDropdown";
import ColorModeSetting from "./ColorModeSetting";

function NavBar({ onSearchValueProvided, onPartialSearchValueProvided }) { 
  const { colorMode } = useColorMode();
  const [logo, setLogo] = useState("");
  
  useEffect(() => {
    setLogo(colorMode === "dark" ? "./src/assets/breezy-high-resolution-logo-transparent.webp" : "./src/assets/breezy-high-resolution-logo-black-transparent.webp");
  }, [colorMode])  

  return (
    <HStack padding="1rem 1rem 0 1rem" marginBottom={2}>        
        {/* <Image src={logo} height="30px" /> */}
        <Heading fontFamily="'Bungee Spice', sans-serif;" >GHub</Heading>
          <SearchInput 
            onEnterPress={(searchValue) => onSearchValueProvided(searchValue)} 
            onSearchInputChange={(partialSearchValue) => onPartialSearchValueProvided(partialSearchValue)} 
          />         
        <ColorModeSwitch />
        <ColorModeSetting />
    </HStack>
  ) 
}

export default NavBar
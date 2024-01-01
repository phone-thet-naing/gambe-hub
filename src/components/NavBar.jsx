import { HStack, Image, useColorMode } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { useEffect } from "react";
// import logo from "../assets/breezy-high-resolution-logo-black-transparent.webp"
import { useState } from "react";
import React from "react";

function NavBar() { 
  const { colorMode } = useColorMode();
  const [logo, setLogo] = useState("");
  
  useEffect(() => {
    setLogo(colorMode === "dark" ? "./src/assets/breezy-high-resolution-logo-transparent.webp" : "./src/assets/breezy-high-resolution-logo-black-transparent.webp");
  }, [colorMode])  

  return (
    <HStack justifyContent='space-between' padding="1rem 1rem 0 1rem">        
        <Image src={logo} height="30px" />
        <ColorModeSwitch />
    </HStack>
  ) 
}

export default NavBar
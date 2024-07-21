import { useColorMode, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { useState } from "react"

const ColorModeSetting = () => {
    const [displayMode, setDisplayMode] = useState("Menu")
    const { colorMode, toggleColorMode } = useColorMode();
    const modes = [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'system', label: 'System' },
    ]

    const handleMenuClick = (label, value) => {
        setDisplayMode(label)
        value !== colorMode && toggleColorMode()
    }

    return (
        <Menu>
            <MenuButton as={Button} paddingEnd={"25px"}>
                {displayMode}
            </MenuButton>

            <MenuList>
                {modes.map((mode, index) =>
                    <MenuItem onClick={() => handleMenuClick(mode.label, mode.value)} key={index}>{mode.label}</MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default ColorModeSetting 
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = ({ onEnterPress, onSearchInputChange }) => {
    const [inputValue, setInputValue] = useState("");

  return (
    <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input 
            placeholder='Search Games' 
            borderRadius={20} 
            variant="filled" 
            value={inputValue} 
            onChange={(event) => {
                setInputValue(event.target.value)
                onSearchInputChange(event.target.value)
            }} 
            onKeyDownCapture={(event) => event.key === "Enter" && onEnterPress(event.target.value)}
        />
    </InputGroup>
  )
}

export default SearchInput
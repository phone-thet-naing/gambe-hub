import React, { useState } from 'react'
import { Button, Menu, MenuButton, MenuCommand, MenuIcon, MenuItem, MenuList, Select } from '@chakra-ui/react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs';

const SortSelector = ({ onCategorySelect, filters }) => {
  const orderCategories = [
    { id: 0, value: "", label: "Relevance" },
    { id: 1, value: "-added", label: "Date added" },
    { id: 2, value: "name", label: "Name" },
    { id: 3, value: "-released", label: "Released date" },
    { id: 4, value: "-metacritic", label: "Popularity" },
    { id: 5, value: "-rating", label: "Rating" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Relevance");

  return (
    <Menu>
      <MenuButton key={new Date()} as={Button} rightIcon={<BsChevronDown />}>
        Order by {filters.sortingCategory ? selectedCategory : orderCategories[0].label}
      </MenuButton>
      <MenuList>
        {orderCategories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => {
              onCategorySelect(category.value);
              setSelectedCategory(category.label);
            }}
          >
            {category.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector
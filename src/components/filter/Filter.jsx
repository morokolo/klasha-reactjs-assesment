import * as React from 'react';
import { ArrowDownward, KeyboardArrowDown } from '@mui/icons-material'
import { Button, ButtonGroup, Popper } from '@mui/material'
import './filter.scss'
import { Box } from '@mui/system';



import { useContext, useState } from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'USD',
  'NN'
];

const Filter = () => {
  const {currency, handleSetCurrency} = useContext((NavigationContext))

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    handleSetCurrency(options[index])
    console.log(index)
    //setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='filter'>
      
<Button variant="text" className='day-filter active'>7 days</Button>
<Button variant="text" className='day-filter'>30 days</Button>

    
      <Button variant="outlined" className='currency-btn' endIcon={<KeyboardArrowDown fontSize="small"   onClick={handleClickListItem}/>}>{currency}</Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default Filter
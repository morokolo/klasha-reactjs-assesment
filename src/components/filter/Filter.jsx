import { ArrowDownward, KeyboardArrowDown } from '@mui/icons-material'
import { Button, ButtonGroup } from '@mui/material'
import './filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
      
<Button variant="text" className='day-filter active'>7 days</Button>
<Button variant="text" className='day-filter'>30 days</Button>
<Button variant="outlined" className='currency-btn' endIcon={<KeyboardArrowDown fontSize="small" />}>USD</Button>

    </div>
  )
}

export default Filter
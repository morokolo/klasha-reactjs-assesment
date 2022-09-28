import './navbar.scss'
import { LanguageOutlined, DarkModeOutlined, ChatBubbleOutlineOutlined, NotificationAddOutlined, FullscreenExitOutlined, ListOutlined, ArrowBackIos, ExpandMore} from '@mui/icons-material'
import moment from 'moment';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#EF2C5A',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#EF2C5A',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));



const Navbar = () => {

  const date = moment().format('DD MMMM,  YYYY');
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="today">
         <span> Today: {date}</span>
        </div>
        <div className="items">
          <div className="item">
            <FormGroup>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Live"
              />
            </FormGroup>
            <span className="separator"></span>
          </div>
          <div className="item">
            <Button variant="text" size="medium" endIcon={<ExpandMore fontSize="small" />}>Welcome back, Ada!</Button>
          </div>
          <div className="item">
            <Button variant="text" size="medium" endIcon={<ExpandMore fontSize="small" />}>En</Button>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
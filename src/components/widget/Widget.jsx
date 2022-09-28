import './widget.scss'
import {KeyboardArrowUp, PersonOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import Chart from '../chart/Chart';
export const Widget = ({type}) => {

 

  
  return (
    <div className="widget">
    <div className="bottom">
      <div className="info">
        <h5 >This week</h5>
        <h1 className='balance'>&#8358;1652.50</h1>
      </div>
    </div>
  </div>
  )
}

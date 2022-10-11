import './dashboard.scss';
import { ArrowDownward } from '@mui/icons-material';
import { Button } from '@mui/material';
import Earnings from '../../components/earnings/Earnings';
import Featured from '../../components/featured/Featured';
import Filter from '../../components/filter/Filter';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Widget } from '../../components/widget/Widget';

const Dashboard = () => {
    const featuredData = [
        {
            data: 4500 ,
            datum: '20 Aug'
        },
        {
            data: 15000,
            datum: '21 Aug'
        },
        {
            data: 5700,
            datum: '22 Aug'
        },
        {
            data: 3400,
            datum: '23 Aug'
        },
        {
            data: 7000,
            datum: '24 Aug'
        },
        {
            data: 5300,
            datum: '25 Aug'
        }

    ];

    const listOfSales = [
        {
            id:1,
            date: '24 Aug - 01 Sep 21',
            tile: 'This week',
            amount: 1652.50,
            showAxis: false,
            series: [
                { data: 100000 },
                {
                    data: 500000,
                },
                {
                    data: 500000,
                },
                {
                    data: 300000,
                },
                {
                    data: 300400,
                },
                {
                    data: 140000,
                },
                {
                    data: 55300,
                }
            ]
        },
        {
            id:2,
            date: '24 Aug - 01 Sep 21',
            tile: 'This month',
            amount: 1952.50,
            showAxis: false,
            series: [
                {
                    data: 5300,
                },
                { data: 4500 },
                {
                    data: 5000,
                },
                {
                    data: 5700,
                },
                {
                    data: 3400,
                },
                {
                    data: 7000,
                },
            ]
        },
        {
            id:3,
            date: '24 Aug - 01 Sep 21',
            tile: 'Last month',
            amount: 7652.50,
            showAxis: false,
            series: [
                { data: 70500 },
                {
                    data: 5000,
                },
                {
                    data: 5700,
                },
                {
                    data: 30400,
                },
                {
                    data: 59000,
                },
                {
                    data: 59000,
                }
            ]
        }
    ]
    return (
        <div className='home'>

            <div className="dashboard">
                <Navbar />
                <div className="grid">
                    <div className="info">
                        <h1 className='heading'>Sales overview</h1>
                    </div>
                    <div className="row__two">
                        <Widget/>
                        {
                            listOfSales.map((sale, index) =>
                                <Earnings key={index} aspect={2/1} data={sale.series} date={sale.date} title={sale.title} amount={sale.amount} showAxis={sale.showAxis}/>
                            )
                        }
                    </div>


                    <div className="filters">
                        <div className="left">
                            <div className="filter-group">
                                <div className="info">
                                    <h1 className='heading'>Sales </h1>
                                </div>
                                <Filter />
                            </div>
                            <div className="download-group">
                                <Button variant="outlined" className='download-btn' endIcon={<ArrowDownward fontSize="small" />}>Download report</Button>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="statistics">
                        <div className="left">
                            <Earnings aspect={4/1} showAxis={true} data={featuredData} showTooltip={true}/>
                        </div>
                        <div className="right">
                            <Featured />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
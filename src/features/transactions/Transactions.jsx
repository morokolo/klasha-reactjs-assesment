import './transactions.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TableList from '../../components/table/Table';

const Transactions = () => {
    return (
        <>
            <div className="transactions">
                <Sidebar />
                <Navbar />
                <div className="grid">
                    <div className="info">
                        <h1 className='heading'>Transaction history</h1>
                    </div>
                </div>

                <TableList />
            </div>
        </>
    )
}

export default Transactions
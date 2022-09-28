import './balances.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Balances = () => {
    return (
        <>
            <div className="balances">
                <Sidebar />
                <Navbar />
                <div className="grid">
                    <div className="info">
                        <h1 className='heading'>Exchange Rates</h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Balances
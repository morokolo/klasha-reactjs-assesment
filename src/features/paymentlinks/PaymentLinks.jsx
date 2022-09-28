import './paymentlinks.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const PaymentLinks = () => {
    return (
    <>
        <div className="paymentLinks">
            <Sidebar />
            <Navbar />
            <div className="grid">
                <div className="info">
                    <h1 className='heading'>Payment Links</h1>
                </div>
            </div>


        </div>
    </>
    )
}

export default PaymentLinks
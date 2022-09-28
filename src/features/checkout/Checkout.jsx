import './checkout.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Checkout = () => {
    return (
        <>
            <div className="checkout">
                <Sidebar />
                <Navbar />
                <div className="grid">
                    <div className="info">
                        <h1 className='heading'>Checkout</h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Checkout
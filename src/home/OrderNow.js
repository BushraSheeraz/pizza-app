import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";


function OrderNow() {
    const history = useHistory();

    return (
        <>
            <div className="orderDiv">
                <h1>Order Now</h1>
                <div className="buttonDiv">
                    <Button variant="dark" onClick={() => history.push('./placeOrder')}>Click here to Place order</Button>
                </div>
            </div>

        </>
    )
}

export default OrderNow;
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavComponent from './NavComponent';
import Home from '../home/Home';
import OrderingPage from './OrderingPage';
import ViewOrder from './ViewOrder';
import PizzaBackground from '../images/pizza1-bg.jpg';
import PlaceOrder from './PlaceOrder';
import CancelOrder from './CancelOrder';

function Main() {
    return (
        <>
            <div className="App"
                style={{
                    backgroundImage: "url(" + PizzaBackground + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                {/* <HomePage /> */}


                < Router >
                    <div>
                        <NavComponent />
                    </div>

                    <Switch>
                        <Route exact path="/">
                            {<Redirect to="/home" />}
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/orderingPage">
                            <OrderingPage />
                        </Route>
                        <Route exact path="/viewOrder">
                            <ViewOrder />
                        </Route>
                        <Route exact path="/placeOrder">
                            <PlaceOrder />
                        </Route>
                        <Route exact path="/cancelOrder">
                            <CancelOrder />
                        </Route>
                    </Switch>
                </Router >

            </div>
        </>
    )
}
export default Main;
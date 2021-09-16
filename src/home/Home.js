import React from 'react';
import SpectaclePizza from './SpectaclePizza';
import ItalianPizza from './ItalianPizza';
import Flavor from './Flavors';
import OrderNow from './OrderNow';



// import pizza from '../images/pizza-logo.jpg';
// import OrderingPage from './OrderingPage';
// import Main from './Main.js';



function Home() {

    // function handleClick(routeName) {
    //     // console.log("Hello")
    //     history.push('./orderingPage');

    // }
    return (
        <>
            <div className="home">

                <SpectaclePizza />
                <ItalianPizza />
                <Flavor />
                <OrderNow />
            </div>

        </>

    );
}

export default Home;
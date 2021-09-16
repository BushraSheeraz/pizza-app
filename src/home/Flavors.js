import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzaVeg from '../images/pizza1.jpg';
import PizzaIt from '../images/pizza3.jpg';
import PizzaOnion from '../images/pizza4.jpg';

function Flavor() {
    return (
        <>
            <div className="flavors">
                <div className="flavorHeading">
                    <h1>Our Flavours</h1>
                </div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={PizzaOnion} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={PizzaVeg} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={PizzaIt} roundedCircle />
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Flavor;
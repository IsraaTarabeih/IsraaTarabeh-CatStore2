import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Card, Button, Toast } from "react-bootstrap";

function Cart() {
    const { cart, removeFromCart, cartMessage, setCartMessage } = useContext(CartContext);

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Your Cart</h2>

            <Toast show={cartMessage !== ""} onClose={() => setCartMessage("")} delay={3000} autohide className="mb-3">
                <Toast.Body>{cartMessage}</Toast.Body>
            </Toast>
            
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <Row>
                    {cart.map((cat) => {
                        const imageUrl = cat.reference_image_id
                        ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
                        : "https://placecats.com/300/200";

                        return (        
                        <Col key={cat.id} md={4} className="mb-4">
                            <Card className="h-100 text-center shadow-sm">
                                <Card.Img variant="top" 
                                src={imageUrl} 
                                alt={cat.name} 
                                style={{ height: '180px', objectFit: 'cover' }}
                                onError={(event) => {
                                    event.target.src = "https://placecats.com/300/200";
                                }} />

                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{cat.name}</Card.Title>
                                    <Card.Text>{cat.origin}</Card.Text>
                                    <Button variant="danger" className="mt-auto" onClick={() => removeFromCart(cat.id)}>
                                        Remove from Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        );
                        })}
                </Row>
            )}
        </Container>
    );
}

export default Cart;
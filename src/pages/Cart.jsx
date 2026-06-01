import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Card, Button, Toast, Modal, Form, Alert } from "react-bootstrap";

function Cart() {
    const { cart, removeFromCart, clearCart, cartMessage, setCartMessage } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [orderMessage, setOrderMessage] = useState("");
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        email: "",
        address: ""
    });
    const { name, email, address } = customerInfo;

    function openOrderModal() {
        setShowModal(true);
    }
    

    function closeOrderModal() {
        setShowModal(false);
        setOrderMessage("");
    }

    function placeOrder() {
        if (name.trim() === "" || email.trim() === "" || address.trim() === "") {
            setOrderMessage("Please fill in all fields.");
            return;
        }
        
        const catNames = cart.map(cat => cat.name).join(", ");
        alert(`Thank you for your order, ${name}!\n\nOrdered cats: ${catNames}\n\nConfirmation sent to: ${email}\nShipping to: ${address}`);
        setShowModal(false);
        clearCart();
    }

    function handleCustomerInfoChange(event) {
        const { name, value } = event.target;

        setCustomerInfo({ ...customerInfo, [name]: value });
        setOrderMessage("");
    }
    

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Your Cart</h2>

            <Toast show={cartMessage !== ""} onClose={() => setCartMessage("")} delay={3000} autohide className="mb-3">
                <Toast.Body>{cartMessage}</Toast.Body>
            </Toast>
            
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
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
                <div className="text-center">
                    <Button variant="dark" onClick={openOrderModal}>
                        Place Order
                    </Button>
                </div>
                <Modal show={showModal} onHide={closeOrderModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Place Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {orderMessage && <Alert variant="danger">{orderMessage}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleCustomerInfoChange}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleCustomerInfoChange}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                            type="text"
                            name="address"
                            value={customerInfo.address}
                            onChange={handleCustomerInfoChange}
                        />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={placeOrder}>
                            Place Order
                        </Button>
                    </Modal.Footer>
                </Modal>
                </>
            )}
        </Container>
    );
}

export default Cart;
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Toast } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const API_URL = "https://api.thecatapi.com/v1/breeds?limit=30";
const CATS_PER_PAGE = 10;



function Cats () 
{
    const [allCats, setAllCats] = useState([]);
    const [filteredCats, setFilteredCats] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { addToCart, cartMessage, setCartMessage } = useContext(CartContext);

    const fetchCats = async () => {
    try {
        const response = await fetch(API_URL);

        const data = await response.json();

        setAllCats(data);
        setFilteredCats(data);
        setCurrentPage(1);

    } catch (error) {
        console.error("Error fetching cats:", error);
    }

} 

useEffect(() => {
    fetchCats();
}, []);


return (
    
    <Container className="mt-4">
        
        <Toast show={cartMessage !== ""} onClose={() => setCartMessage("")} delay={3000} autohide className="mb-3">
            <Toast.Body>{cartMessage}</Toast.Body>
        </Toast>
        <Row>
        {allCats.map(cat => {
            const imageUrl = cat.reference_image_id
            ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
            : "https://placecats.com/300/200";

        return (   
        <Col key={cat.id} md={3} className="mb-4">
            <Card className="h-100 text-center shadow-sm">
            <Card.Img 
            variant="top"
            src={imageUrl} 
            alt={cat.name} 
            style={{ height: "180px", objectFit: "cover" }}
            onError={(event) => { 
                event.target.src = "https://placecats.com/300/200";
            }}
            />

            <Card.Body className="d-flex flex-column">
            <Card.Title>{cat.name}</Card.Title>
            <Card.Text>🌍{cat.origin}</Card.Text>
            <Card.Text className="small"> For more information about {cat.name}, follow the link below:</Card.Text>
            <a href={`/cats/${cat.id}`} className="mt-auto">More Info</a>
            <Button variant="success" className="mt-2" onClick={() => addToCart(cat)}>
                Add to Cart 🛒
            </Button>
            </Card.Body>
            </Card>
        </Col>
        );
        })}
        </Row>
        </Container>
    );
}

export default Cats;
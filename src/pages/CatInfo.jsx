import { useParams, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function CatInfo() {
    const { id } = useParams();
    const [cat, setCat] = useState(null);

    useEffect(() => {
        const fetchCatInfo = async () => {
            try {
                const API_URL = `https://api.thecatapi.com/v1/breeds/${id}`;
                const response = await fetch(API_URL);
                const data = await response.json();
                setCat(data);
            } catch (error) 
            {
                console.error("Error fetching cat info:", error);
            }
        };
        fetchCatInfo();
    }, [id]);

    const imageUrl = cat?.reference_image_id
        ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
        : "https://placecats.com/300/200";

    return (
        <Container className="mt-4">
            <h1> {cat?.name} </h1>
            <img src={imageUrl} alt={cat?.name} className="img-fluid mb-3 rounded" style={{maxWidth: "300px"}} />
            <p><strong>🌍 Origin:</strong> {cat?.origin}</p>
            <p><strong>🐾 Temperament:</strong> {cat?.temperament}</p>
            <p><strong>📝 Description:</strong> {cat?.description}</p>
            <Button as={Link} to="/cats" variant="dark" className="mb-3">
                Back to Cats
            </Button>
        </Container>
    );
}


export default CatInfo;
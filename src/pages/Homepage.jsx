// Landing page that introduces the store and provides a link to browse available cats.

import catBackground from "../assets/cat-background.png";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <Container
    fluid
    className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center" 
    style={{ 
      backgroundImage: `url(${catBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>

      <div className="p-4 rounded shadow-sm"
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.9)" 
      }}>
      <h1>Welcome to CatStore</h1>
      <h5>We have the best cats in the world!</h5>

      <div className="d-flex flex-column align-items-center justify-content-center gap-3 mt-3">
      <p>Discover our adorable furry friends today</p>
      <Button as={Link} to="/cats" variant="dark" >
        Browse all Cats
      </Button>
      </div>
      </div>
    </Container>
    
  );
}


export default Homepage;
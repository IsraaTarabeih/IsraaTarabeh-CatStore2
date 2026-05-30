import catBackground from "../assets/cat-background.png";
import { Container } from "react-bootstrap";


function About() {
  return (
    <Container
      fluid
          className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center" 
          style={{ 
            backgroundImage: `url(${catBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

      <div className="p-4 mt-3 rounded shadow-sm"
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        width: "50%"
      }}>
        <h1>About CatStore</h1>
        <p className="mb-0">
          CatStore was founded in 2024 by one passionate cat lover.
        </p>
        <p className="mb-0">
          Our goal is to help cats find their forever homes.
        </p>
        <p>
          We carefully work with trusted breeders from around the world.
        </p>
      </div>

      <div className="p-4 mt-3 rounded shadow-sm"
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        width: "50%"
      }}>
        <h3>👤Owner</h3>
        <p>
          <strong>Name:</strong> Israa Tarabeih
        </p>
        <p>
          <strong>Email:</strong> israa@catstore.se
        </p>
        <p>
          <strong>Phone:</strong> 073-701 67 22
        </p>
        <p>
          <strong>Address:</strong> Cat Street 1, Stockholm
        </p>
      </div>

      <div className="p-4 mt-3 mb-3 rounded shadow-sm"
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        width: "50%"
      }}>
        <h3>📞Contact Us</h3>
        <p>
          If you have any questions or want to learn more about our cats, please don't hesitate to contact us. We are here to help you find your perfect feline companion!
        </p>
      </div>


    </Container>
  )
}

export default About;
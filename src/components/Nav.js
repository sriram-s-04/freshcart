import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { BsGeoAltFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <div className="nav_outer">
      <div className="nav_inner1">
        <Navbar expand="lg">
          <Container fluid>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30 "
              height="25 "
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <Navbar.Brand
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: 30,
              }}
            >
              FreshCart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form
                className="d-flex"
                style={{ width: "700px", height: "40px" }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search for products"
                  className="me-2"
                  aria-label="Search"
                />

                <Button variant="outline-success" className="btn_search">
                  <BsGeoAltFill />
                  Location
                </Button>
                {/* <div style={{display:'grid',justifyContent:'end'}}>  
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-clipboard2-heart" viewBox="0 0 16 16" >
                    <path d="M10.058.501a.5.5 0 0 0-.5-.501h-2.98c-.276 0-.5.225-.5.501A.5.5 0 0 1 5.582 1a.497.497 0 0 0-.497.497V2a.5.5 0 0 0 .5.5h4.968a.5.5 0 0 0 .5-.5v-.503A.497.497 0 0 0 10.555 1a.5.5 0 0 1-.497-.499"/>
                        <path d="M3.605 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h.5a.5.5 0 0 1 0 1z"/>
                        <path d="M8.068 6.482c1.656-1.673 5.795 1.254 0 5.018-5.795-3.764-1.656-6.69 0-5.018"/>
                        </svg>
                  </div>   */}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="nav_inner2">
        <Navbar>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Store">Store</Nav.Link>
              <Nav.Link href="/Pages">Pages</Nav.Link>
              <Nav.Link href="/Account">Account</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavScrollExample;

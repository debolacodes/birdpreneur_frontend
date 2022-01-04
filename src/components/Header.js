import React,{useContext} from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap';
import { mainFunctions } from "../providers/MainProvider";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {

  const {
    isAuthenticated,
    loggedInTrigger,
    setLoggedInTrigger
  } = useContext(mainFunctions);

    return (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container
    className="black-text"
    >
    <Navbar.Brand href="/">
    <img
      src="/birdpreneur_logo.png"
      width="150"
      className="d-inline-block align-top"
      alt=""
    /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        {!isAuthenticated &&
        <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">
          Register
        </Nav.Link>
        </>
        }
        {isAuthenticated === true &&
        <>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/farms">Farms</Nav.Link>
        <Nav.Link href="#" onClick={()=>{
          const auth = getAuth();
          signOut(auth).then(() => {
            setLoggedInTrigger(Number(loggedInTrigger) + 1);
          }).catch((error) => {
            // An error happened.
          });
        }}>Logout</Nav.Link>
        </>
        }
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
       
    )
}




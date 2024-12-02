import {Container, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
export default function NavBar() {

    const links = [
        {
            to: "",
            title: "Home"
        },
        {
            to: "users",
            title: "Users"
        }
    ];
    return(

        <NavBar>
            <Container>
                <LinkContainer to="/" style={{ cursor: 'pointer' }}>
                    <NavBar.Brand classname="fs-2">Name</NavBar.Brand>
                </LinkContainer>
                <Nav className="me-auto fs-4">
                    {links.map((link) => (
                        <LinkContainer to={`/${link.to}`} key={link.to}>
                            <Nav.Link>{link.title}</Nav.Link>
                        </LinkContainer>
                    ))}
                </Nav>
            </Container>
        </NavBar>
    );
}
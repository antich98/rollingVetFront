import { Navbar, Container, Nav , Button} from "react-bootstrap";
import { Link, NavLink, useNavigate} from 'react-router-dom';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();

  const logout = ()=>{
    sessionStorage.removeItem('usuario');
    setUsuarioLogueado({});
    navegacion('/');
  }
  return (
    <Navbar bg='danger' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to="/">RollingVet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to={'/'} className={'nav-item nav-link'}>Inicio</NavLink>
            <NavLink end to={"/registro"} className={'nav-item nav-link'}>Registro</NavLink>
            {
              (usuarioLogueado.nombreUsuario)?
              <>
              <NavLink end to={'/admin-turnos'} className={'nav-item nav-link'}>Administrar turnos</NavLink>
              <NavLink end to={'/admin-usuarios'} className={'nav-item nav-link'}>Administrar usuarios</NavLink>
              <NavLink end to={'/admin-pacientes'} className={'nav-item nav-link'}>Administrar pacientes</NavLink>
              <NavLink end to={'/admin-servicios'} className={'nav-item nav-link'}>Administrar servicios</NavLink>
              <Button variant='dark' onClick={logout}>Logout</Button>
              </>:<NavLink end to={'/login'} className={'nav-item nav-link'}>Login</NavLink>
            }
            <NavLink end to={'/nosotros'} className={'nav-item nav-link'}>Sobre nosotros</NavLink>
            <NavLink end to={'/contacto'} className={'nav-item nav-link'}>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacto = () => {
  return (
    <>
    
      <h1 className="text-center mt-4">Cuentanos, ¿en que te podemos <b>ayudar?</b></h1>
       
      <Container>
      <Form className='text-center'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='mt-4'><b>Correo:</b></Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label className='mt-3'><b>Descripción</b></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="danger" type="submit" className='mt-3'>
          Enviar
        </Button>
      </Form>
    </Container>


    </>
  )
}

export default Contacto 
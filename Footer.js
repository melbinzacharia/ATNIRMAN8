import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


var d = new Date();
var n = d.getFullYear();
const footer = () => {
    return (
        <footer className='bg-dark' >
            <Container  expand='lg'>
                <Row>
                    <Col className=' ft text-center  py-3' variant='dark'>
                        Copyrights &copy; {n} <span className='blue'>AT</span>Nirman
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}

export default footer

import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <div>
      <section className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>We Gurantee</h4>
                    <h2>30 Minutes Delivery!</h2>
                    <p>Craving a delicious burger? Don’t wait long! We guarantee hot and fresh delivery within 30 minutes, so you can enjoy your meal without the wait. Fast, fresh, and always on time!</p>
                    <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
                        Call : 078-8948818
                    </Link> 
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section7

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Pizza from "../../Assets/about/pizza.png";
import Salad from "../../Assets/about/salad.png";
import Delivery from "../../Assets/about/delivery-bike.png";

// Mock data cards
const mockData = [
    {
        image:Pizza,
        title: "Original",
        paragraph: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,`
    },
    {
        image:Salad,
        title: "Quality Foods",
        paragraph: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,`
    },
    {
        image:Delivery,
        title: "Faster Delivery",
        paragraph: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,`
    },

    // Add more mock data objects as needed

];


function Section2() {
  return (
    <div>
        <section className='about_section'>
            <Container>
                <Row>
                    <Col lg={{ span:8, offset: 2 }} className='text-center'>
                        <h2>The burger tastes better when you eat it with your familly</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Link to="/" className ="btn order_now btn_red" >
                            Explore Full Menu
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='about_wrapper'>
            <Container>
                <Row className='justify-content-md-center'>
                    {mockData.map((cardData, index) => (
                        <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                            <div className='about_box text-center '>
                                <div className='about_icon'>
                                    <img src={cardData.image} className='img-fluid' alt='icon' />
                                </div>
                                <h4>{cardData.title}</h4>
                                <p>{cardData.paragraph}</p>

                            </div>
                        </Col>

                    ))}
                </Row>
            </Container>
        </section>
    </div>
  );
}

export default Section2;

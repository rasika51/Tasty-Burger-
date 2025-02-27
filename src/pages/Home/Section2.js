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
        paragraph: `Our burgers are crafted with authentic recipes, ensuring every bite delivers the original taste you love. Freshly prepared to bring timeless flavor straight to you.`
    },
    {
        image:Salad,
        title: "Quality Foods",
        paragraph: `We believe in using only high-quality, fresh ingredients to serve you the best. Every burger is a perfect combination of premium taste and wholesome goodness.`
    },
    {
        image:Delivery,
        title: "Faster Delivery",
        paragraph: `Craving a burger? We’ve got you covered! Enjoy hot and fresh burgers delivered to your doorstep quickly, so you never have to wait long.`
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
                        <p>Nothing brings people together like a delicious burger. Enjoy the perfect bite with your loved ones – because every burger tastes better when shared with family, laughter, and unforgettable moments!</p>
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

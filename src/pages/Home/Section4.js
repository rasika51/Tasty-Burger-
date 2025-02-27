import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PromotionImage from "../../Assets/promotion/pro.png";

function Section4() {
  return (
    <div>
      <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                    <img src={PromotionImage} className='img-fluid' alt="Promotion" />
                </Col>
                <Col lg={6} className='px-5'>
                    <h2>Nothing brings people together like a good burger</h2>
                    <p>There are countless types of burgers out there, but none quite like ours! Each bite is packed with fresh ingredients and a whole lot of love. When you're craving something delicious, you know where to come! </p>
                    <ul>
                        <li>
                            <p>
                            Let’s face it, there’s something magical about a burger that brings people together. Whether you’re laughing, chatting, or just enjoying a meal, it’s the perfect way to connect with those around you.
                            </p>
                        </li>
                        <li>
                            <p>
                            A burger’s more than just food; it’s an experience! So gather your loved ones, grab a burger, and make some awesome memories together—because nothing beats good times with great people and great food!
                            </p>
                        </li>
                        <li>
                            <p>
                            It’s a fact: when you enjoy a burger with your friends and family, it’s not just about the food—it’s about the memories you make. A burger is always better when shared!
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </section>
      
      {/* BG Parallax Scroll */}
  
      <section className='bg_parallax_scroll'>

      </section>
    </div>
  )
}

export default Section4

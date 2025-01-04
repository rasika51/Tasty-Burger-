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
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, </p>
                    <ul>
                        <li>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </li>
                        <li>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </li>
                        <li>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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

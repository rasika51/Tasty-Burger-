import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User1 from "../../Assets/blog/review-author-1.jpg";
import User2 from "../../Assets/blog/review-author-2.jpg";
import User3 from "../../Assets/blog/review-author-3.jpg";
import User4 from "../../Assets/blog/review-author-4.jpg";

function Section6() {
  return (
    <div>
      <section className='blog_section'>
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                               <img src={User1} className='img-fluid' alt="user-1"/>                       
                            </div>
                            <p>My friends are jealous of my burger obsession. They can’t compete with this level of flavor. I’m officially a burger enthusiast for life!</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY Raveen Pushpa</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                               <img src={User2} className='img-fluid' alt="user-2"/>                       
                            </div>
                            <p>I never knew burgers could taste this good! My taste buds are doing a happy dance, and my stomach is thanking me. 10/10 would devour again!</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY Rasika Wedaarachchi</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                               <img src={User3} className='img-fluid' alt="user-3"/>                       
                            </div>
                            <p>Who needs a diet when you have these burgers? Every bite is like a mini celebration in my mouth. So worth the food coma!t</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY Chamila Shiromani</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                               <img src={User4} className='img-fluid' alt="user-4"/>                       
                            </div>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY ANELIE NEWlove</h5>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section6

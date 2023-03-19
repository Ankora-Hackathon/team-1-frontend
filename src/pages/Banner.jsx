import { useState, useEffect } from "react";
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import doktori_slika from "../components/assets/doktorii.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Link } from "react-router-dom";

    
export const Banner = () => {
 
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Great?", "Okay?", "Or not very well?" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
     setIndex(index)
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
}
  return (

   
   <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={`center ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
              <h1 className="title">{`How are you feeling today?`} <span className="txt-rotate" data-rotate='[ "Great?", "Okay?", "Or not well?" ]'><span className="wrap">{text}</span></span></h1>
              <h3 className="subtitle">AnkoraMed a day keeps the doctor away!</h3>
              <Link to='/patient' style={{textDecoration:'none'}}>
              <button className="connect-btn" >Let’s start <ArrowRightCircle size={25} /></button>
            </Link>
            </div>
            }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div  className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={doktori_slika} alt="Header Img"/>
                </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
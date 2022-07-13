import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Slide from './Slide';
import reviews from '../data.json';

const StyledCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em 2em;
  justify-content: center;
  align-items: center;
  width: 300px;
  @media (min-width: 450px) {
    width: auto;
    flex-wrap: nowrap;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #4c4c4c;
  border-radius: 20px;
  @media (min-width: 450px) {
    width: 300px;
  }
`;

const Carousel = () => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const moveSlide = (buttonType) => {
    const lastSlideIdx = reviews.length - 1;
    if (buttonType === "left")
      setActiveSlideIdx((current) =>
        current === lastSlideIdx ? 0 : current + 1
      );
    else
      setActiveSlideIdx((current) =>
        current === 0 ? lastSlideIdx : current - 1
      );
  }

  return (
    <StyledCarousel>
      <Button type="left" moveSlide={moveSlide} />
      <Container>
        {reviews.map(({ id, text, author }, idx) =>
          <Slide key={id} text={text} author={author} active={idx === activeSlideIdx} />)
        }
      </Container>
      <Button type="right" moveSlide={moveSlide} />
    </StyledCarousel>
  );
}

export default Carousel;

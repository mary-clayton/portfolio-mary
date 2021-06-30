import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am a software developer and designer located in Phoenix, AZ, currently seeking a career in Software Development, design, and cloud development. 
      I am AWS-certified as a Cloud Practioner and a systems Ops Associate. I currently am working towards a Bachelors in Computer Science in University 
      of the People and a certification in System Design and Solutions at DeVry University. I currently hold a Bachelors of Art in Digital Design from Grand 
      Canyon University. I am a technical and design-oriented person who enjoys creating and helping others achieve a common goal. I am a fast learner who is 
      able to pick up on skills and pick up multiple tasks at once with ease.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
        {TimeLineData.map((Item, index)=> (
          <CarouselMobileScrollNode key={index} final = {index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem
            index={index}
            id={`carousel__item- ${index}`}
            active={activeItem}
            onClick={(e)=> handleClick(e, index)}>
              <CarouselItemTitle>{Item.year}</CarouselItemTitle>
              <CarouselItemText>{Item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item,index)=> (
          <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e)=> handleClick(e, index)}
          type='button'
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider/>
    </Section>
  );
};

export default Timeline;

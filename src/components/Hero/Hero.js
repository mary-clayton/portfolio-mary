import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name is <br/>
        Mary Clayton
      </SectionTitle>
      <SectionText>
        I am an inspiring software developer, designer, and a lifelong learner. 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.github.com/mary-clayton'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
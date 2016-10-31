import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import { Section, SectionPictureBody } from './views/common/Section';
import { OurStory } from './views/wedding/WeddingOurStory';
import { WeddingHeader } from './views/wedding/WeddingHeader';

import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    <OurStory />
    <Section className="wedding_pic_section wedding_bestFriends"> Best Friends </Section>
    <Section className="wedding_sectionPicBody">
      <SectionPictureBody />
    </Section>
  </Container>
  ,document.getElementById('app'));
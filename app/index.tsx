import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/Container';
import { Section, SectionBody, SectionTitle, SectionPictureBody } from './views/Section';
import { WeddingHeader } from './views/WeddingHeader';

import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    <Section className="wedding_pic_section wedding_ourStory">
      <SectionBody className="wedding_ourStory--body">
          <div className="wedding_ourStory--body-name">
          Jose <br />
          <div className="wedding_ourStory--body-amp">&amp;</div>
          Mercedes <br />
          </div>
          <div className="wedding_ourStory--body-date">
          ~ Are Tieing the Knot ~ <br />
          11/4/2017
          </div>
      </SectionBody >
    </Section>
    <Section className="wedding_text_section">
      <SectionTitle>We met in college...</SectionTitle>
      <SectionBody>
           Our mutual friends Kylla and Miki set us up originally,
           thinking we'd be perfect for each other. After our first date,
           we both decided we weren't interested! But several months later
           we happened to go on the same group camping trip, and saw each other in a
           new light. We fell in love. And we can't wait to spend the rest of our
           lives together.
      </SectionBody>
    </Section>
    <Section className="wedding_pic_section wedding_bestFriends"> Best Friends </Section>
    <Section className="wedding_sectionPicBody">
      <SectionPictureBody />
    </Section>
  </Container>
  ,document.getElementById('app'));
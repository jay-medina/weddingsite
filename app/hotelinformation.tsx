import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import CoverPage from './views/wedding/CoverPage';
import WeddingHeader from './views/wedding/WeddingHeader';
import { SectionTitle, Section, SectionBody } from './views/common/Section';
import './index.css';

ReactDOM.render(
  <Container>
      <WeddingHeader />
      <CoverPage className="wedding_bestFriends" />
      <Section className="wedding_pic_section wedding_bestFriends"> Hotel Information </Section>
      <Section className="wedding_text_section">
        <SectionTitle>Hotel Information</SectionTitle>
        <SectionBody>
            Hotel Information
        </SectionBody>
      </Section>
    </Container>
  ,document.getElementById('app'));
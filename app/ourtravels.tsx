import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import WeddingHeader from './views/wedding/WeddingHeader';
import CoverPage from './views/wedding/CoverPage';
import {Section, SectionPictureBody, SectionTitle} from './views/common/Section';
import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    <CoverPage className="wedding_ourTravels" showOverlay>
      <SectionTitle className="wedding_title--our-travels">Our Travels</SectionTitle>
    </CoverPage>
    <Section className="wedding_sectionPicBody">
        <SectionPictureBody />
      </Section>
  </Container>
  ,document.getElementById('app'));

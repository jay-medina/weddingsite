import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import BetterTogether from './views/wedding/TheWedding';
import WeddingHeader from './views/wedding/WeddingHeader';
import CoverPage from './views/wedding/CoverPage';
import {Section, SectionPictureBody} from './views/common/Section';
import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    <CoverPage className="wedding_bestFriends">
      Our Travels
    </CoverPage>
    <Section className="wedding_sectionPicBody">
        <SectionPictureBody />
      </Section>
  </Container>
  ,document.getElementById('app'));
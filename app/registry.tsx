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
      <CoverPage className="wedding_registry">
        <SectionTitle className="wedding_registry--title">Coming Soon</SectionTitle>
      </CoverPage>
      <Section className="wedding_text_section">
        <SectionTitle></SectionTitle>
        <SectionBody>
            
        </SectionBody>
      </Section>
    </Container>
  ,document.getElementById('app'));
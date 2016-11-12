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
      <CoverPage className="wedding_registry" showOverlay={true}>
        <SectionTitle>Registry</SectionTitle>
      </CoverPage>
      <Section className="wedding_text_section">
        <SectionTitle>Registry</SectionTitle>
        <SectionBody>
            Registry Section
        </SectionBody>
      </Section>
    </Container>
  ,document.getElementById('app'));
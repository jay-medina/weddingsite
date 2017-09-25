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
    <CoverPage className="wedding_hotelInfo" showOverlay={true}>
      <SectionTitle className="wedding_title--hotel-info">Hotel Information</SectionTitle>
    </CoverPage>
    <Section className="wedding_text_section">
      <SectionTitle>Now Amber</SectionTitle>
      <SectionBody>
        <h3>Hotel Booking Information</h3>
        <p>
          Visit: <a href="http://www.nowresorts.com/amber" target="_blank">http://www.nowresorts.com/amber</a>
        </p>
        <p>
          The Now Amber Puerto Vallarta is the preferred hotel to book your stay during our wedding weekend.
        </p>
        <p>
          If you are not a guest of the Now Amber Resort, you will be responsible for a $120 resort admittance fee
          (per person) to attend the ceremony and reception.
        </p>
        <h3>Questions:</h3>
        <p>
          If you have any questions, feel free to reach out to either one of us: {' '}
          <a href="mailto:mjfiesta2forever@gmail.com?Subject=Wedding%20Questions" target="_top">mjfiesta2forever@gmail.com </a>
          ❤️
        </p>

      </SectionBody>
    </Section>
  </Container>
  , document.getElementById('app'));

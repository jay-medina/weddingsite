import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import WeddingHeader from './views/wedding/WeddingHeader';
import { SectionTitle, Section, SectionBody } from './views/common/Section';
import './index.css';

const HoneyFundWrapper: React.StatelessComponent<{src: string}> = ({ src }) => (
  <iframe className="wedding_registry--honeyfund" src={src}/>
);

ReactDOM.render(
  <Container>
      <WeddingHeader alreadyScrolled />
      <Section className="wedding_text_section">
      <SectionTitle>
      </SectionTitle>
      <SectionBody>
        <HoneyFundWrapper src="https://www.honeyfund.com/wedding/MJFiesta2Forever" />
      </SectionBody>
      </Section>
    </Container>
  ,document.getElementById('app'));

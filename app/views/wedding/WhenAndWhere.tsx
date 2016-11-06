import * as React from 'react';
import Container from '../common/Container';
import {Section, SectionTitle, SectionBody} from '../common/Section';

export function WhenAndWhere() {
  return (
    <Container id="thewedding">
      <Section className="wedding_savethedate--background">
        <img className="wedding_savethedate" src="images/savethedate.jpg" />
      </Section>
    </Container>
  );
}
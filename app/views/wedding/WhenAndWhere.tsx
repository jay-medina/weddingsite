import * as React from 'react';
import Container from '../common/Container';
import {Section, SectionTitle, SectionBody} from '../common/Section';

export function WhenAndWhere() {
  return (
    <Container>
      <Section className="wedding_savethedate--background">
        <img className="wedding_savethedate" src="images/savethedate.jpg" />
        <div className="wedding_flowers--container">
          <img className="wedding_flowers" src="images/flowers_without_bg.png" />
          <img className="wedding_flowers wedding_flowers--reverse" src="images/flowers_without_bg.png" />
        </div>
      </Section>
    </Container>
  );
}
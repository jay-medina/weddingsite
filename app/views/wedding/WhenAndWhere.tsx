import * as React from 'react';
import Container from '../common/Container';
import {Section, SectionTitle, SectionBody} from '../common/Section';

export function WhenAndWhere() {
  return (
    <Container id="thewedding">
      <Section className="wedding_pic_section wedding_bestFriends"> The Wedding </Section>
      <Section className="wedding_text_section">
        <SectionTitle>The Wedding</SectionTitle>
        <SectionBody>
            When And Where Section
        </SectionBody>
      </Section>
    </Container>
  );
}
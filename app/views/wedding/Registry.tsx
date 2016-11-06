import * as React from 'react';
import Container from '../common/Container';
import {Section, SectionTitle, SectionBody} from '../common/Section';

export function Registry() {
  return (
    <Container>
      <Section className="wedding_pic_section wedding_bestFriends"> Registry </Section>
      <Section className="wedding_text_section">
        <SectionTitle>Registry</SectionTitle>
        <SectionBody>
            Registry Section
        </SectionBody>
      </Section>
    </Container>
  );
}
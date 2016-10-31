import * as React from 'react';
import Container from '../common/Container';
import {Section, SectionTitle, SectionBody} from '../common/Section';

export function WhenAndWhere() {
  return (
    <Container id="whenandwhere">
      <Section className="wedding_pic_section wedding_bestFriends"> When And Where </Section>
      <Section className="wedding_text_section">
        <SectionTitle>When And Where</SectionTitle>
        <SectionBody>
            When And Where Section
        </SectionBody>
      </Section>
    </Container>
  );
}
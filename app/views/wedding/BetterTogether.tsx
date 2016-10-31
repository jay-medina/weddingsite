import * as React from 'react';
import Container from '../common/Container';
import {Section, SectionPictureBody} from '../common/Section';

export function BetterTogether() {
  return (
    <Container id="betterTogether">
      <Section className="wedding_pic_section wedding_bestFriends"> Better Together </Section>
      <Section className="wedding_sectionPicBody">
        <SectionPictureBody />
      </Section>
    </Container>
  );
}
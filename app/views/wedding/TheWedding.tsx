import * as React from 'react';
import {Section, SectionBody, SectionTitle} from '../common/Section';
import Overlay from '../common/Overlay';

export default function TheWedding() {
  return (
    <div>
      <Section className="wedding_pic_section wedding_ourStory">
        <Overlay />
        <SectionBody className="wedding_ourStory--body">
            <div className="wedding_ourStory--body-name title">
            Mercedes <br />
            <div className="wedding_ourStory--body-amp">&amp;</div>
            Jose <br />
            </div>
            <div className="wedding_ourStory--body-date">
            ~ Are Tying the Knot ~ <br />
            11/4/2017
            </div>
        </SectionBody >
      </Section>
      <Section className="wedding_text_section">
        <SectionTitle>Our Story</SectionTitle>
        <SectionBody>
            Our mutual friends Kylla and Miki set us up originally,
            thinking we'd be perfect for each other. After our first date,
            we both decided we weren't interested! But several months later
            we happened to go on the same group camping trip, and saw each other in a
            new light. We fell in love. And we can't wait to spend the rest of our
            lives together.
        </SectionBody>
      </Section>
    </div>
  );
}
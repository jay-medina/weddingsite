import * as React from 'react';
import {Section, SectionBody, SectionTitle} from '../common/Section';
import CoverPage from './CoverPage';

export default function TheWedding() {
  return (
    <div>
      <CoverPage className="wedding_ourStory">
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
      </CoverPage>
      <Section className="wedding_text_section">
        <SectionTitle>Our Story</SectionTitle>
        <SectionBody>
            After first meeting in college, Jose and Mercedes didn’t reconnect again until attending a welcome home celebration for a mutual friend.
            That night, Jose asked Mercedes out on a date (which freaked Mercedes out), but after giving it some thought, she said the first YES.
            Jose and Mercedes started dating long distance, with Jose living in Philadelphia and Mercedes living in NYC.
            Eventually Jose moved to NYC, (he said it was because he always wanted to live in NYC, but we all know it was really for Mercedes!) and after a few months, they both said YES to living together.
            Fast forward to November 23, 2015 when Jose popped the big question and Mercedes said the YES that brought you here.
            Now it’s time to celebrate their love as they say I Do in Puerto Vallarta, Mexico!
        </SectionBody>
      </Section>
    </div>
  );
}

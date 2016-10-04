import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './Container';
import { Section, SectionBody, SectionTitle } from './Section';
import { MenuOption, Menu, HeaderTitle, Header } from './Header';

import './index.css';


ReactDOM.render(
  <Container>
    <Header>
      <HeaderTitle>Jose &amp; Mercedes</HeaderTitle>
      <Menu>
        <MenuOption>Our Story</MenuOption>
        <MenuOption>When &amp; Where</MenuOption>
        <MenuOption>Registry</MenuOption>
        <MenuOption>RSVP</MenuOption>
      </Menu>
    </Header>
    <Section className="wedding_section wedding_ourStory"> Our Story </Section>
    <Section className="wedding_ourStoryText">
      <SectionTitle>We met in college...</SectionTitle>
      <SectionBody>
           Our mutual friends Kylla and Miki set us up originally,
           thinking we'd be perfect for each other. After our first date,
           we both decided we weren't interested! But several months later
           we happened to go on the same group camping trip, and saw each other in a
           new light. We fell in love. And we can't wait to spend the rest of our
           lives together.
      </SectionBody>
    </Section>
    <Section className="wedding_section wedding_bestFriends"> Best Friends </Section>
  </Container>
  ,document.getElementById('app'));
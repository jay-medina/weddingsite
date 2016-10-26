import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/Container';
import { Section, SectionBody, SectionTitle, SectionPictureBody } from './views/Section';
import { MenuOption, Menu, HeaderTitle, Header } from './views/Header';

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
    <Section className="wedding_pic_section wedding_ourStory"> Our Story </Section>
    <Section className="wedding_text_section">
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
    <Section className="wedding_pic_section wedding_bestFriends"> Best Friends </Section>
    <Section className="wedding_sectionPicBody">
      <SectionPictureBody urls={
        [
         'https://static1.squarespace.com/static/53d7e714e4b0cb1125a8185a/53dae35ee4b0cfc1a4b33312/53dbd623e4b0fef6abe1f009/1406916132870/img_0190.jpg?format=750w',
         'https://static1.squarespace.com/static/53d7e714e4b0cb1125a8185a/53dae35ee4b0cfc1a4b33312/53dbd624e4b0fef6abe1f00f/1406916134467/img_0346.jpg?format=750w',
         'https://static1.squarespace.com/static/53d7e714e4b0cb1125a8185a/53dae35ee4b0cfc1a4b33312/53dbd624e4b0fef6abe1f013/1406916190056/img_0436-edit.jpg?format=750w',
         'https://static1.squarespace.com/static/53d7e714e4b0cb1125a8185a/53dae35ee4b0cfc1a4b33312/53dbd623e4b0fef6abe1f009/1406916132870/img_0190.jpg?format=750w',
         'https://static1.squarespace.com/static/53d7e714e4b0cb1125a8185a/53dae35ee4b0cfc1a4b33312/53dbd624e4b0fef6abe1f00f/1406916134467/img_0346.jpg?format=750w',
         'https://static1.squarespace.com/static/53d7e714e4b0cb1125a8185a/53dae35ee4b0cfc1a4b33312/53dbd624e4b0fef6abe1f013/1406916190056/img_0436-edit.jpg?format=750w',
        ]
      }/>
    </Section>
    <Section className="wedding_pic_section wedding_ourStory">
      He Proposed
    </Section>
    <Section className="wedding_pic_section wedding_ourStory">
      She said yes
    </Section>
  </Container>
  ,document.getElementById('app'));
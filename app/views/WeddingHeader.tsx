import * as React from 'react';
import { MenuOption, Menu, HeaderTitle, Header } from './Header';

export function WeddingHeader() {
  return (
    <Header>
      <HeaderTitle>Jose &amp; Mercedes</HeaderTitle>
      <Menu>
        <MenuOption link="/" >Our Story</MenuOption>
        <MenuOption link="/whenandwhere" >When &amp; Where</MenuOption>
        <MenuOption link="/registry" >Registry</MenuOption>
        <MenuOption link="/rsvp" >RSVP</MenuOption>
      </Menu>
    </Header>
  );
}
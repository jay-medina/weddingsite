import * as React from 'react';
import * as $ from 'jquery';
import { MenuOption, Menu, Header } from './Header';

const SCROLL_OFFSET = 200;

function scrollHandler($el: JQuery) {
  const originalTop = $el.offset().top;

  $(window).off('scroll')
            .on('scroll', () => {
              const currentOffset = $el.offset();

              if(currentOffset.top >= originalTop + SCROLL_OFFSET) {
                $el.addClass('scrolled');
              }
              else {
                $el.removeClass('scrolled');
              }
  });
}

export class WeddingHeader extends React.Component<{},{}> {
  render() {
    return (
      <Header>
        <Menu>
          <MenuOption link="/" >Our Story</MenuOption>
          <MenuOption link="/whenandwhere" >When &amp; Where</MenuOption>
          <MenuOption link="/registry" >Registry</MenuOption>
          <MenuOption link="/rsvp" >RSVP</MenuOption>
        </Menu>
      </Header>
    );
  }
  componentDidMount() {
    const $header = $('.wedding_header');
    scrollHandler($header);
  }
}
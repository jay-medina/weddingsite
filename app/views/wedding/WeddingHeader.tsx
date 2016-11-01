import * as React from 'react';
import * as $ from 'jquery';
import { MenuOption, Menu, Header, MobileNav } from '../common/Header';

const SCROLL_OFFSET = 250;

function scrollHandler($el: JQuery) {

  $(window).off('scroll')
            .on('scroll', () => {
              const currentOffset = $el.offset();

              if(currentOffset.top >= SCROLL_OFFSET) {
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
        <MobileNav />
        <Menu>
          <MenuOption link="#ourStory" >Our Story</MenuOption>
          <MenuOption link="#thewedding">The Wedding</MenuOption>
          <MenuOption link="#betterTogether">Better Together</MenuOption>
          <MenuOption link="#registry">Registry</MenuOption>   
        </Menu>
      </Header>
    );
  }
  componentDidMount() {
    const $header = $('.wedding_header');
    scrollHandler($header);
  }
}
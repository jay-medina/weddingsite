import * as React from 'react';
import * as $ from 'jquery';
import { MenuOption, Menu, Header, MobileNav } from '../common/Header';

const SCROLL_OFFSET = 250;

function scrollHandler($el: JQuery) {

  $(window).off('scroll')
            .on('scroll', () => {
              const currentOffset = $el.offset();

              if(currentOffset.top >= SCROLL_OFFSET) {
                $el.addClass('wedding_header--scrolled');
              }
              else {
                $el.removeClass('wedding_header--scrolled');
              }
  });
}

export interface WeddingHeaderState {
  show?: boolean
}
export class WeddingHeader extends React.Component<{},WeddingHeaderState> {
  constructor(props) {
    super(props)
    this.state = { show: false };
  }
  onMobileClick() {
    this.setState({ show: !this.state.show });
  }
  getMobileMenuClassName() {
    if(this.state.show) {
      return 'wedding_menu--mobile-show';
    }
  }
  render() {
    return (
      <Header>
        <MobileNav onClick={this.onMobileClick.bind(this)}/>
        <Menu className={this.getMobileMenuClassName()}>
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
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
export default class WeddingHeader extends React.Component<{},WeddingHeaderState> {
  constructor(props) {
    super(props)
    this.state = { show: false };
  }
  onMobileClick() {
    this.setState({ show: !this.state.show });
  }
  onMenuItemClick() {
    this.setState({ show: false });
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
        <Menu className={this.getMobileMenuClassName()} onClick={this.onMenuItemClick.bind(this)}>
          <MenuOption link="#/" >The Wedding</MenuOption>
          <MenuOption link="/ourtravels">Our Travels</MenuOption>
          <MenuOption link="/hotel">Hotel Information</MenuOption>
          <MenuOption link="/registry">Registry</MenuOption>   
        </Menu>
      </Header>
    );
  }
  componentDidMount() {
    const $header = $('.wedding_header');
    scrollHandler($header);
  }
}
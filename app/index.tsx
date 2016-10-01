import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './Container';

import './index.css';

class MenuOption extends React.Component<{}, {}> {
  render() {
    return <li className="wedding_menu_item">{this.props.children}</li>
  }
}
class Menu extends React.Component<{}, {}> {
  render() {
    return <ul className="wedding_menu pull-right">{this.props.children}</ul>
  }
}

class HeaderTitle extends React.Component<{}, {}> {
  render() {
    return <h1 className="wedding_title pull-left">{this.props.children}</h1>
  }
}

class Header extends React.Component<{}, {}> {
  render() {
    return <Container className="wedding_header">{this.props.children}</Container>;
  }
}



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
    <Container className="mainContainer">
      Hello world
    </Container>
  </Container>
  , document.getElementById('app'));
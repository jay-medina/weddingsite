import * as React from 'react';
import Container from './Container';

export class MenuOption extends React.Component<{}, {}> {
  render() {
    return <li className="wedding_menu_item">{this.props.children}</li>
  }
}
export class Menu extends React.Component<{}, {}> {
  render() {
    return <ul className="wedding_menu pull-right">{this.props.children}</ul>
  }
}

export class HeaderTitle extends React.Component<{}, {}> {
  render() {
    return <h1 className="wedding_title pull-left">{this.props.children}</h1>
  }
}

export class Header extends React.Component<{}, {}> {
  render() {
    return <Container className="wedding_header">{this.props.children}</Container>;
  }
}
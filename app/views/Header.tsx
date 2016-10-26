import * as React from 'react';
import Container from './Container';

export interface MenuOptionProps {
  link: string
}

export class MenuOption extends React.Component<MenuOptionProps, {}> {
  render() {
    return <a className="wedding_menu_item" href={this.props.link}>{this.props.children}</a>
  }
}
export class Menu extends React.Component<{}, {}> {
  render() {
    return <div className="wedding_menu pull-right">{this.props.children}</div>
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
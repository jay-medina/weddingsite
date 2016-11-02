import * as React from 'react';
import Container from './Container';

interface MenuOptionProps {
  link: string
}

class MenuOption extends React.Component<MenuOptionProps, {}> {
  render() {
    return <a className="wedding_menu_item" href={this.props.link}>{this.props.children}</a>
  }
}

interface MenuProps {
  className?: string
}
class Menu extends React.Component<MenuProps, {}> {
  render() {
    const {className = ''} = this.props;
    return <Container className={`wedding_menu ${className}`}>{this.props.children}</Container>
  }
}

class Header extends React.Component<{}, {}> {
  render() {
    return <Container className="wedding_header">{this.props.children}</Container>;
  }
}

interface MobileNavProps {
  onClick?: () => void
}

class MobileNav extends React.Component<MobileNavProps, {}> {
  onClick() {
    this.props.onClick()
  }
  render() {
    return (
      <Container className="wedding_mobile-nav">
        <button className={'hamburger'} onClick={this.onClick.bind(this)}></button>
      </Container>);
  }
}

export {
  MobileNav, MobileNavProps,
  Header,
  Menu,
  MenuOption, MenuOptionProps
};
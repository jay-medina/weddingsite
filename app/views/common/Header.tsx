import * as React from 'react';
import Container from './Container';

interface MenuOptionProps {
  link: string
}

const MenuOption: React.StatelessComponent<MenuOptionProps> = ({ link, children }) => {
  return <a className="wedding_menu_item" href={link}>{children}</a>
}

interface MenuProps {
  className?: string,
  onClick: () => void
}

const Menu: React.StatelessComponent<MenuProps> = (props) => {
  const { className = '', children, onClick } = props;
  return <Container className={`wedding_menu ${className}`} onClick={onClick}>{children}</Container>
}

const Header: React.StatelessComponent = ({ children }) => {
  return <Container className="wedding_header">{children}</Container>;
}

interface MobileNavProps {
  onClick: () => void
}

const MobileNav: React.StatelessComponent<MobileNavProps> = (props) => {
  return (
    <Container className="wedding_mobile-nav">
      <button className={'hamburger'} onClick={props.onClick}></button>
    </Container>
  );
}

export {
  MobileNav, MobileNavProps,
  Header,
  Menu,
  MenuOption, MenuOptionProps
};

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class MenuOption extends React.Component<{}, {}> {
  render() {
    return <li>{this.props.children}</li>
  }
}
class Menu extends React.Component<{}, {}> {
  render() {
    return <ul>{this.props.children}</ul>
  }
}

class Container extends React.Component<{}, {}>{
  render() {
    return <div>{this.props.children}</div>
  }
}

class HeaderTitle extends React.Component<{}, {}> {
  render() {
    return <h1>{this.props.children}</h1>
  }
}

class Header extends React.Component<{}, {}> {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}



ReactDOM.render(
  <Container>
    <Header>
      <HeaderTitle>Jose &amp; Mercedes</HeaderTitle>
      <Menu>
        <MenuOption>One</MenuOption>
        <MenuOption>Two</MenuOption>
        <MenuOption>Three</MenuOption>
      </Menu>
    </Header>
  </Container>
  , document.getElementById('app'));
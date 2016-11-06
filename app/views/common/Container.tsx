import * as React from 'react';

interface IContainer {
  className?: string,
  onClick?: () => void
}

class Container extends React.Component<IContainer, {}>{
  render() {
    return <div {...this.props} >{this.props.children}</div>
  }
}

export default Container;
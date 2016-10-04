import * as React from 'react';
import Container from './Container';

export interface SectionProps {
  className? : string
}

export class SectionTitle extends React.Component<{}, {}> {
  render() {
    return (
      <div className="wedding_sectionTitle">{this.props.children}</div>
    )
  }
}

export class SectionBody extends React.Component<{}, {}> {
  render() {
    return (
      <div className="wedding_sectionBody">{this.props.children}</div>
    )
  }
}

export class Section extends React.Component<SectionProps, {}> {
  render() {
    return (
      <div className={`align-center ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

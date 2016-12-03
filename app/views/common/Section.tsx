import * as React from 'react';
import Container from './Container';

const images = require('../../images/images');

export interface SectionProps {
  className? : string
}

export class SectionTitle extends React.Component<SectionProps, {}> {
  render() {
    const { className = '', children} = this.props; 
    return (
      <div className={`wedding_sectionTitle title ${className}`}>{children}</div>
    )
  }
}

export class SectionBody extends React.Component<SectionProps, {}> {
  render() {
    return (
      <div className={`wedding_sectionBody ${this.props.className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export class Section extends React.Component<SectionProps, {}> {
  render() {
    const {className = ''} = this.props;

    return (
      <div className='section-wrapper'>
        <div className={`align-center ${className}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export class SectionPictureBody extends React.Component<{},{}> {
  renderImages() {
    return images.map(
      (url, index) => <img key={index} className="wedding_sectionImg" src={url} />

    )
  }
  render() {
    return (
      <div>{this.renderImages()}</div>
    )
  }
}

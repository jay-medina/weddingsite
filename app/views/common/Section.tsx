import * as React from 'react';

const images = require('../../images/images');

export interface SectionProps {
  className?: string
}

export const SectionTitle: React.StatelessComponent<SectionProps> = (props) => {
  const { className = '', children } = props;
  return (
    <div className={`wedding_sectionTitle title ${className}`}>{children}</div>
  )
}

export const SectionBody: React.StatelessComponent<SectionProps> = (props) => {
  return (
    <div className={`wedding_sectionBody ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

export const Section: React.StatelessComponent<SectionProps> = (props) => {
  const { className = '' } = props;

  return (
    <div className='section-wrapper'>
      <div className={`align-center ${className}`}>
        {props.children}
      </div>
    </div>
  );
}


export const SectionPictureBody: React.StatelessComponent = () => {
  function renderImages() {
    return images.map(
      (url: string, index: number) => <img key={index} className="wedding_sectionImg" src={url} />

    )
  }

  return (
    <div>{renderImages()}</div>
  )
}

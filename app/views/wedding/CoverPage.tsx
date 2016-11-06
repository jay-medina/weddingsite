import * as React from 'react';
import Container from '../common/Container';
import Overlay from '../common/Overlay';
import {Section, SectionPictureBody} from '../common/Section';

export interface CoverPageProps{
  title? : string,
  className?: string
}
export default class CoverPage extends React.Component<CoverPageProps, {}> {
  render() {
    const {className} = this.props || '';
    return (
      <Container>
        <Section className={`wedding_coverpage ${className}`}>
          <Overlay />
          { this.props.children }
        </Section>
      </Container>
    );
  }
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import { OurStory } from './views/wedding/OurStory';
import { WeddingHeader } from './views/wedding/WeddingHeader';
import { BetterTogether } from './views/wedding/BetterTogether';
import { WhenAndWhere } from './views/wedding/WhenAndWhere';
import { Registry } from './views/wedding/Registry';
import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    <OurStory />
    <BetterTogether />
    <WhenAndWhere />
    <Registry />
  </Container>
  ,document.getElementById('app'));
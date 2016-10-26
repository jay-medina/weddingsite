import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeddingHeader } from './views/WeddingHeader';
import Container from './views/Container';

import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    RSVP
  </Container>

,document.getElementById('app'));

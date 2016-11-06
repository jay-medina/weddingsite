import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './views/common/Container';
import TheWedding from './views/wedding/TheWedding';
import { WeddingHeader } from './views/wedding/WeddingHeader';
import { WhenAndWhere } from './views/wedding/WhenAndWhere';
import './index.css';

ReactDOM.render(
  <Container>
    <WeddingHeader />
    <TheWedding />
    <WhenAndWhere />
  </Container>
  ,document.getElementById('app'));
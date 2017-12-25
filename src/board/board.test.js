import React from 'react';
import { shallow } from 'enzyme';
import Board from './board';

it('renders without crashing', () => {
  shallow(<Board />)
});
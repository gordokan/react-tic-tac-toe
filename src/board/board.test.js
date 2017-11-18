import React from 'react';
import { shallow } from 'enzyme';
import Board from './board';

const fakeBoard = Array(9).fill(null);

it('renders without crashing', () => {
  shallow(<Board squares={fakeBoard}/>)
}) 
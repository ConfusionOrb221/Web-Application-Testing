import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard, {addBall, addStrike, addFoul, hitBall} from './components/Dashboard';

test('Balls stop at 4', () => {
  const state = {
    balls: 3,
    strikes: 0
  }
  const expected = {
    balls: 0,
    strikes: 0
  }
  const actual = addBall(state);
  
  expect(actual).toStrictEqual(expected);
})

test('Strikes Reset at 3', () => {
  const state = {
    balls: 0,
    strikes: 2
  }
  const expected = {
    balls: 0,
    strikes: 0
  }
  const actual = addStrike(state)

  expect(actual).toStrictEqual(expected);
})

test('balls and strikes reset to 0 when a hit is recorded', () =>{
  const state = {
    balls: 2,
    strikes: 2
  }
  const expected = {
    balls: 0,
    strikes: 0
  }
  const actual = hitBall()

  expect(actual).toStrictEqual(expected);
})

test('foul increases strikes up to 2 and stay at 2', () =>{
  const state = {
    balls: 0,
    strikes: 0
  }
  let expected = {
    balls: 0,
    strikes: 1
  }
  let actual = addFoul(state);

  expect(actual).toStrictEqual(expected);

  expected = {
    balls: 0,
    strikes: 2
  }
  
  actual = addFoul(actual);

  expect(actual).toStrictEqual(expected);

  actual = addFoul(actual);
  
  expect(actual).toStrictEqual(expected);
})


import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';
import { VoteProvider } from '../VoteProvider';

test('ensure unclicked component is not selected', async () => {
  render(
    <VoteProvider>
        <List  />
    </VoteProvider>
  );
  // Get the 2nd 'upVote' component via data-testid attribute
  const voteComponent1 = screen.getByTestId("1");
  
  // Ensure class 'selected' has not been added yet
  expect(voteComponent1.classList.contains("selected")).toBe(false);

});

test('selected class present after clicked', () => {
  
  render(
    <VoteProvider>
        <List  />
    </VoteProvider>
  );
   // Get the 2nd 'upVote' component via data-testid attribute
  const voteComponent1 = screen.getByTestId("1");
  fireEvent.click(voteComponent1);
  
  // ensure class is added after click
  expect(voteComponent1.classList.contains("selected")).toBe(true);

 
});
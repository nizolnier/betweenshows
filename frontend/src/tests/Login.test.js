import { render, screen } from '@testing-library/react';
import Login from './screens/Login';
import Router from './screens/Router';

import sampleUser from './sample_user.json'

test('renders login form', () => {
  render(<Login />);
  const element = screen.getByText(/Login/i);
  expect(element).toBeInTheDocument();
});

test('redirects on successful login')

test('errors on invalid username/password')

test('forgot password link works')

test('user remains logged in after navigating')

test('hides and shows password')

test('signup link redirects to signup')
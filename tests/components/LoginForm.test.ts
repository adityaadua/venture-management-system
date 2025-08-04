import { render } from '@testing-library/react';
import LoginForm from '../../src/components/LoginForm';

describe('LoginForm UI', () => {
  it('renders login button', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText(/login/i)).toBeDefined();
  });
});

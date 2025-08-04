import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/LoginForm';

describe('Login Form', () => {
  it('renders email and password fields', () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/email/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/password/i)).toBeDefined();
  });

  it('displays error on empty submit', async () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(await screen.findByText(/required/i)).toBeDefined();
  });
});

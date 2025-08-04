import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SignUpForm from '@/components/SignUpForm';

describe('Signup Form', () => {
  it('renders name and email fields', () => {
    render(<SignUpForm />);
    expect(screen.getByPlaceholderText(/first name/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/email/i)).toBeDefined();
  });
});

import { describe, expect, it } from 'vitest';

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

describe('Email Validator', () => {
  it('validates a correct email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('fails an invalid email', () => {
    expect(isValidEmail('user@nope')).toBe(false);
  });
});

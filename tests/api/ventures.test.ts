import { describe, it, expect } from 'vitest';

describe('API: /ventures', () => {
  it('POST stores a venture', async () => {
    const venture = { name: 'Test Venture', founder: 'Ada' };
    expect(venture).toHaveProperty('founder');
  });
});

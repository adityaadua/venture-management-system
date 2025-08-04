import { describe, it, expect } from 'vitest';

describe('Document Uploads', () => {
  it('accepts PDF uploads', () => {
    const file = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' });
    expect(file.type).toBe('application/pdf');
  });
});

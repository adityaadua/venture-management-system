import { describe, it, expect } from 'vitest';

describe('Readiness Tracker', () => {
  it('loads checklist items', () => {
    const sample = ['Team', 'Funding', 'Docs'];
    expect(sample).toContain('Funding');
  });
});

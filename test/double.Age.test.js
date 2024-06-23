import { describe, it, expect } from 'vitest';
import { doubleAge } from '../src/doubleAge';

describe('doubleAge', () => {
  it('should return 22 when the father is 36 and the son is 7', () => {
    expect(doubleAge(36, 7)).toBe(22);
  });

  it('should return 5 when the father is 55 and the son is 30', () => {
    expect(doubleAge(55, 30)).toBe(5);
  });

  it('should return 0 when the father is 42 and the son is 21', () => {
    expect(doubleAge(42, 21)).toBe(0);
  });
});




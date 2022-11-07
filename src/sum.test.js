import { sum } from './sum';

describe('sum integers', () => {
  it('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('add 1 + 4 to equal 5', () => {
    expect(sum(1, 4)).toBe(5);
  });
  it('add 1000 + 10  to equal 1010', () => {
    expect(sum(1000, 10)).toBe(1010);
  });
  it('add 0 + 255 to equal 255', () => {
    expect(sum(0, 255)).toBe(255);
  });
});

describe('sum float', () => {
  it('add 1.5 + 0 to equal 2', () => {
    expect(sum(1.5, 0)).toBe(2);
  });
  it('add 1.5 + 1.5 to equal 3', () => {
    expect(sum(1.5, 1.5)).toBe(3);
  });
  it('add 1 + 1.57 to equal 3', () => {
    expect(sum(1, 1.57)).toBe(3);
  });
});

import { kebabCase } from './kebabcase';

test('kebabCase', () => {
  expect(kebabCase('Foo Bar')).toBe('foo-bar');
  expect(kebabCase('fooBar')).toBe('foo-bar');
  expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
  expect(kebabCase('Oceans 13')).toBe('oceans-13');
  expect(kebabCase('Foo-Bar')).toBe('foo-bar');
  expect(kebabCase('')).toBe('');
  expect(kebabCase('foobar')).toBe('foobar');
  expect(kebabCase('foo_bar')).toBe('foo-bar');
});

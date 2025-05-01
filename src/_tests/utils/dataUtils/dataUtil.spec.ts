import { capitalizeFirstLetter } from '@app/appComponents/utils/dataUtils/dataUtil';

describe('capitalizeFirstLetter', () => {

  it('should capitalize the first letter of a lowercase word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('should capitalize the first letter and keep the rest as-is', () => {
    expect(capitalizeFirstLetter('javaScript')).toBe('JavaScript');
  });

  it('should return an empty string if input is empty', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('should not crash if input is a single character', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
  });

  it('should handle strings that start with spaces', () => {
    expect(capitalizeFirstLetter(' hello')).toBe(' hello');
  });

  it('should handle strings starting with special characters', () => {
    expect(capitalizeFirstLetter('!test')).toBe('!test');
  });

});

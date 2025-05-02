
import { decimalsCount, digitsCount, decimalsZeroPad, digitsZeroPad } from '@app/appComponents/utils/dataUtils/numberDataUtil';

describe('Numeric utility functions', () => {

  describe('decimalsCount', () => {
    it('should return 0 when there is no decimal', () => {
      expect(decimalsCount(42)).toBe(0);
    });

    it('should count decimals correctly', () => {
      expect(decimalsCount(42.1234)).toBe(4);
      expect(decimalsCount('123.4567')).toBe(4);
    });
  });

  describe('digitsCount', () => {
    it('should count integer digits correctly', () => {
      expect(digitsCount(1234)).toBe(4);
      expect(digitsCount('5678')).toBe(4);
      expect(digitsCount('9876.543')).toBe(4);
    });
  });

  describe('decimalsZeroPad', () => {
    it('should pad decimals with zeros to match currency value', () => {
      expect(decimalsZeroPad(12.1, 3)).toBe('12.100');
      expect(decimalsZeroPad('45', 2)).toBe('45.00');
    });

    it('should return original string if already has sufficient decimals', () => {
      expect(decimalsZeroPad('23.456', 3)).toBe('23.456');
    });
  });

  describe('digitsZeroPad', () => {
    it('should pad digits with leading zeros', () => {
      expect(digitsZeroPad('1.23', 3)).toBe('001.23');
      expect(digitsZeroPad('-5.4', 4)).toBe('-0005.4');
    });

    it('should return number unchanged if digits are enough', () => {
      expect(digitsZeroPad('12345.67', 5)).toBe('12345.67');
    });
  });
});

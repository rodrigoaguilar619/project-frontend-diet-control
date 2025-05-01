import {
  countDecimals,
  formatNumberSeparateComma,
  formatDecimalsLimit,
  formatZeroPad,
  formatAnswerData,
  formatNumberDecimal,
  formatCurrency,
} from '@app/appComponents/utils/formatUtils/formatNumericUtil';

describe('formatNumericUtil', () => {

  describe('countDecimals', () => {
    it('should return 0 if no decimal part exists', () => {
      expect(countDecimals(123)).toBe(0);
    });

    it('should return correct decimal count', () => {
      expect(countDecimals(123.456)).toBe(3);
    });
  });

  describe('formatNumberSeparateComma', () => {
    it('should format number with commas', () => {
      expect(formatNumberSeparateComma(1000000)).toBe('1,000,000');
      expect(formatNumberSeparateComma(12345.67)).toBe('12,345.67');
    });
  });

  describe('formatDecimalsLimit', () => {
    it('should limit decimal places', () => {
      expect(formatDecimalsLimit(123.45678, 2)).toBe('123.45');
      expect(formatDecimalsLimit(123.4, 0)).toBe('123');
    });
  });

  describe('formatZeroPad', () => {
    it('should add zeros to decimal part', () => {
      expect(formatZeroPad(12.1, 4)).toBe('12.1000');
      expect(formatZeroPad(12, 3)).toBe('12.000');
    });

    it('should not modify if already has enough decimals', () => {
      expect(formatZeroPad(12.3456, 3)).toBe('12.3456');
    });
  });

  describe('formatAnswerData', () => {
    it('should return "Yes" for truthy values', () => {
      expect(formatAnswerData(true)).toBe('Yes');
      expect(formatAnswerData(1)).toBe('Yes');
    });

    it('should return "No" for falsy values', () => {
      expect(formatAnswerData(false)).toBe('No');
      expect(formatAnswerData(null)).toBe('No');
    });
  });

  describe('formatNumberDecimal', () => {
    it('should format number with decimals, zero pad, and commas', () => {
      expect(formatNumberDecimal(1234.5, 3, true, true)).toBe('1,234.500');
    });

    it('should handle missing decimalSpaces gracefully', () => {
      expect(formatNumberDecimal(1234, undefined, false, false)).toBe(1234);
    });
  });

  describe('formatCurrency', () => {
    it('should format with currency symbol', () => {
      expect(formatCurrency(1000, 2, true, true, true)).toBe('$ 1,000.00');
    });

    it('should format with percentage symbol', () => {
      expect(formatCurrency(85, 0, false, false, false, true)).toBe('85 %');
    });

    it('should format with both symbols', () => {
      expect(formatCurrency(99.9, 1, true, true, true, true)).toBe('$ 99.9 %');
    });
  });

});

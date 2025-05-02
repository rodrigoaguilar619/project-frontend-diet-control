import { ruleOfThree } from '@app/appComponents/utils/dataUtils/calculatorFormulaUtil';

describe('ruleOfThree', () => {

  it('should correctly calculate the rule of three', () => {
    expect(ruleOfThree(2, 4, 6)).toBe(12); // (4*6)/2 = 12
    expect(ruleOfThree(5, 10, 2)).toBe(4); // (10*2)/5 = 4
    expect(ruleOfThree(1, 1, 1)).toBe(1); // (1*1)/1 = 1
  });

  it('should return 0 if c or b are 0', () => {
    expect(ruleOfThree(5, 0, 10)).toBe(0);
    expect(ruleOfThree(5, 10, 0)).toBe(0);
  });

});

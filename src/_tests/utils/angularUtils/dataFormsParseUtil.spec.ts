import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { buildJsonFromFormControls, buildJsonFromFormGroup, buildJsonFromFormArray } from '@app/appComponents/utils/angularUtils/dataFormsParseUtil';

describe('dataFormsUtil functions', () => {

  describe('buildJsonFromFormControls', () => {
    it('should build JSON from FormControlData array', () => {
      const mockData = [
        { key: 'name', control: new FormControl('John') },
        { key: 'age', control: new FormControl(30) },
      ];

      const result = buildJsonFromFormControls(mockData);

      expect(JSON.parse(result)).toEqual({
        name: 'John',
        age: 30
      });
    });

    it('should return empty object if input array is empty', () => {
      const result = buildJsonFromFormControls([]);
      expect(JSON.parse(result)).toEqual({});
    });
  });

  describe('buildJsonFromFormGroup', () => {
    it('should build JSON from FormGroup', () => {
      const formGroup = new FormGroup({
        username: new FormControl('admin'),
        password: new FormControl('secret')
      });

      const result = buildJsonFromFormGroup(formGroup);

      expect(JSON.parse(result)).toEqual({
        username: 'admin',
        password: 'secret'
      });
    });

    it('should return empty object if FormGroup has no controls', () => {
      const formGroup = new FormGroup({});
      const result = buildJsonFromFormGroup(formGroup);
      expect(JSON.parse(result)).toEqual({});
    });
  });

  describe('buildJsonFromFormArray', () => {
    it('should build JSON from FormArray of FormGroups', () => {
      const formArray = new FormArray([
        new FormGroup({
          firstName: new FormControl('Alice'),
          lastName: new FormControl('Smith')
        }),
        new FormGroup({
          firstName: new FormControl('Bob'),
          lastName: new FormControl('Johnson')
        })
      ]);

      const result = buildJsonFromFormArray(formArray);

      expect(JSON.parse(result)).toEqual([
        { firstName: 'Alice', lastName: 'Smith' },
        { firstName: 'Bob', lastName: 'Johnson' }
      ]);
    });

    it('should build JSON from FormArray of FormControls', () => {
      const formArray = new FormArray([
        new FormControl('Apple'),
        new FormControl('Banana')
      ]);

      const result = buildJsonFromFormArray(formArray);

      expect(JSON.parse(result)).toEqual(['Apple', 'Banana']);
    });

    it('should return empty array if FormArray is empty', () => {
      const formArray: any = new FormArray([]);
      const result = buildJsonFromFormArray(formArray);
      expect(JSON.parse(result)).toEqual([]);
    });
  });

});

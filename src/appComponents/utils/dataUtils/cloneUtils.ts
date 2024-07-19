export function deepClone(obj: any) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (obj instanceof Date) {
      return new Date(obj);
    }
  
    if (obj instanceof Array) {
      const arrCopy: any[] = [];
      obj.forEach((_, i) => {
        arrCopy[i] = deepClone(obj[i]);
      });
      return arrCopy;
    }
  
    if (obj instanceof Object) {
      const objCopy: any = {};
      Object.keys(obj).forEach(key => {
        objCopy[key] = deepClone(obj[key]);
      });
      return objCopy;
    }
  
    throw new Error("Unable to copy object! Its type isn't supported.");
  }
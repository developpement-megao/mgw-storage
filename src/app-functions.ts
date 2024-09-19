function isDataIsInterface<T>(data: unknown | null, keyValidators: Record<keyof T, 'string' | 'number' | 'boolean'>): data is T {
  if (typeof data === 'object' && data !== null) {
    const maybeA = data as T;
    for (const key of Object.keys(keyValidators) as Array<keyof T>) {
      if (typeof maybeA[key] !== keyValidators[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function valueIsEmpty<T>(value: T, emptyStringIsEmpty: boolean): boolean {
  if (value === null || value === undefined || (emptyStringIsEmpty && value === '')) {
    return true;
  }
  return false;
}

function valueIsNotEmptyString(value: unknown, emptyStringIsEmpty: boolean = true): value is string {
  if (!valueIsEmpty(value, emptyStringIsEmpty) && typeof value === 'string') {
    return true;
  }
  return false;
}

function valueIsNonNullable<T>(value: T): value is NonNullable<T> {
  if (value === null || value === undefined) {
    return false;
  }
  return true;
}

function numberValueIsOk(value: number, zeroNumberIsOk: boolean): boolean {
  if (!isNaN(value) && isFinite(value) && (zeroNumberIsOk || value !== 0)) {
    return true;
  }
  return false;
}

function valueIsNumber(value: unknown, zeroNumberIsOk: boolean): value is number {
  if (valueIsNonNullable(value) && typeof value === 'number' && numberValueIsOk(value, zeroNumberIsOk)) {
    return true;
  }
  return false;
}

function isValuePrimitive(value: unknown): value is string | number | boolean {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return true;
  }
  return false;
}

export class AppFunctions {
  static valueIsEmpty<T>(value: T, emptyStringIsEmpty: boolean = true): boolean {
    return valueIsEmpty(value, emptyStringIsEmpty);
  }

  static valueIsNonNullable<T>(value: T): value is NonNullable<T> {
    return valueIsNonNullable(value);
  }

  static numberValueIsOk(value: number, zeroNumberIsOk: boolean = true): boolean {
    return numberValueIsOk(value, zeroNumberIsOk);
  }

  static valueIsNumber(value: unknown, zeroNumberIsOk: boolean = true): value is number {
    return valueIsNumber(value, zeroNumberIsOk);
  }

  static valueIsNotEmptyString(value: unknown, emptyStringIsEmpty: boolean = true): value is string {
    return valueIsNotEmptyString(value, emptyStringIsEmpty);
  }

  static isDataIsInterface<T>(data: unknown | null, keyValidators: Record<keyof T, 'string' | 'number' | 'boolean'>): data is T {
    return isDataIsInterface(data, keyValidators);
  }

  static isValuePrimitive(value: unknown): value is string | number | boolean {
    return isValuePrimitive(value);
  }
}

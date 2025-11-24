// Courtesy: https://tkssharma.com/nestjs-playing-with-query-param-dto/

import * as moment from "moment";

interface ToNumberOptions {
  default?: number;
  min?: number;
  max?: number;
}

export function toLowerCase(value: string): string {
  // return value.toLowerCase();
  return value?.toLowerCase() ?? null;
}

export function trim(value: string): string {
  // return value.trim();
  return value?.trim() ?? null;
}

export function toDate(value: string): Date {
  return new Date(value);
}

export function toUnixTime(date: string): Number {
  return date ? moment(date).unix() : moment().unix();
}

export function toBoolean(value: string): boolean {
  // value = value.toLowerCase();
  value = value?.toLowerCase() ?? null;

  return value === 'true' || value === '1' ? true : false;
}

export function toNumber(value: string, opts: ToNumberOptions = {}): number {
  let newValue: number = Number.parseInt(value || String(opts.default), 10);

  if (Number.isNaN(newValue)) {
    newValue = opts.default;
  }

  if (opts.min) {
    if (newValue < opts.min) {
      newValue = opts.min;
    }

    if (newValue > opts.max) {
      newValue = opts.max;
    }
  }

  return newValue;
}

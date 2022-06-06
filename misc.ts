/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import getLocale from '../lang';
// @ts-nocheck
import LOCALE from '../locales';

export const fixed = (num: number, count = 3): number => {
	const multiplier = 10 ** count;
	return Math.floor(num * multiplier) / multiplier;
};

export const toSec = (timeInMs: number): string => fixed(timeInMs/1000, 1) + ' ' + getLocale(LOCALE.SECOND);
export const toSecRaw = (timeInMs: number): string => fixed(timeInMs/1000, 2);
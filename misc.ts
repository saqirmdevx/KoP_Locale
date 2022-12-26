/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import {  LOCALE } from '../locales'
// @ts-ignore
import getLocale from '../lang'

export const fixed = (num: number, count = 3): number => {
    const multiplier = 10 ** count
    return Math.round(num * multiplier) / multiplier
}

export const toSec = (timeInMs: number): string => fixed(timeInMs/1000, 1) + ' ' + getLocale(LOCALE.SECOND)
export const toSecRaw = (timeInMs: number): string => String(fixed(timeInMs/1000, 2))
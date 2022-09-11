/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LOCALE } from 'lang/locales';

export const initial_page: { [key in LOCALE]?: { [key in string]: string } } = {
    [LOCALE.LOGIN_AS_GUEST]: {
        en: 'Login as guest',
        ru: 'Войти как гость',
        cz: 'Přihlaste se jako host'
    },
    [LOCALE.SELECT_REGION]: {
        en: 'Select region',
        ru: 'Выбрать регион',
        cz: 'Vybrat region '
    },
    [LOCALE.SERVER]: {
        en: 'Server',
        ru: 'Сервер'
    },
    [LOCALE.PING]: {
        en: 'Ping',
        ru: 'Пинг'
    },
    [LOCALE.DISCORD]: {
        en: 'Discord',
        ru: 'Discord'
    },
    [LOCALE.TERMS_OF_SERVICES]: {
        en: 'Terms of service',
        ru: 'Условия использования',
        cz: 'Podmínky služby'
    },
    [LOCALE.PRIVACY_POLICY]: {
        en: 'Privacy policy',
        ru: 'Политика конфиденциальности',
        cz: 'Zásady ochrany'
    },
    [LOCALE.PARTNERS]: {
        en: 'Partners',
        ru: 'Партнёры',
        cz: 'Partneři'
    },
    [LOCALE.SOCIAL]: {
        en: 'Social',
        ru: 'Социальные сети'
    },
    [LOCALE.INFORMATIONS]: {
        en: 'Informations',
        ru: 'Информация',
        cz: 'Informace'
    },
    [LOCALE.LOGIN_AS]: {
        en: 'Login as',
        ru: 'Войти как',
        cz: 'Přihlásit se jako'
    },
    [LOCALE.RENAME_ERROR_ALREADY_EXISTS]: {
        en: 'This name already exists!',
        cz: 'Toto jméno již existuje!'
    },
    [LOCALE.RENAME_ERROR_INCORRECT_NAME]: {
        en: 'This name contains forbidden letters or is too short!',
        cz: 'Toto jméno obsahuje zakázaná písmena!'
    },
    [LOCALE.RENAME_ERROR_NO_CONNECTION]: {
        en: 'Can\'t connect with server',
    },
    [LOCALE.LOADING]: {
        en: 'Loading...',
        cz: 'Načítá se...',
    },
    [LOCALE.CONGRATULATION]: {
        en: 'Congratulations',
        cz: 'Gratuluji'
    }
};

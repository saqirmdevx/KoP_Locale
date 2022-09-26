/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LOCALE } from 'lang/locales';

export const home_page: { [key in LOCALE]?: { [key in string]: string } } = {
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
        ru: 'Это имя уже занято!',
        cz: 'Toto jméno již existuje!'
    },
    [LOCALE.RENAME_ERROR_INCORRECT_NAME]: {
        en: 'This name contains forbidden letters or is too short!',
        ru: 'Выбранное имя содержит запрещённые символы или слишком коротко!',
        cz: 'Toto jméno obsahuje zakázaná písmena!'
    },
    [LOCALE.RENAME_ERROR_NO_CONNECTION]: {
        en: 'Can\'t connect with server',
        ru: 'Нет соединения с сервером'
    },
    [LOCALE.LOADING]: {
        en: 'Loading...',
        ru: 'Загрузка...',
        cz: 'Načítá se...',
    },
    [LOCALE.CONGRATULATION]: {
        en: 'Congratulations',
        ru: 'Поздравляем',
        cz: 'Gratuluji'
    },
    [LOCALE.PLAY_PAGE_RANKED_DESCRIPTION]: {
        en: ' - Reward: experience, coins and ELO\n - <b>+20% experience and coins</b>\n - Rank based matchmaking\n - 2 vs 2 only',
        cz: ' - Odměna: zkušenosti, mince a ELO\n - <b>+20% více zkušeností a mincí</b>\n - Dohazování na základě hodnocení\n - Pouze 2 vs 2'
    },
    [LOCALE.PLAY_PAGE_UNRANKED_DESCRIPTION]: {
        en: ' - Reward: experience and coins\n - 1 vs 1 and 2 vs 2',
        cz: ' - Odměna: zkušenosti a mince\n - 1 vs 1 a 2 vs 2'
    },
    [LOCALE.PLAY_PAGE_2VAI_DESCRIPTION]: {
        en: ' - Reward: experience and coins\n - 2 Players vs 2 Hard AI\n - 50% less experience and coins',
        cz: ' - Odměna: zkušenosti a mince\n - 2 hráči vs 2 tvrdá umělá inteligence\n - o 50 % méně zkušeností a mincí'
    }
};

import LOCALE from "../locales";

const locale_data: { [key in LOCALE]: { [key in string]: string } } = {
    /** Hero section */
    [LOCALE.KUMIHU_NAME]: {
        en: "Kumihu",
        ru: "Кумиху",
        br: "The early bird catches the worm"
    },

    [LOCALE.BELLE_NAME]: {
        en: "Belle",
        ru: "Белла",
    },

    [LOCALE.ICEAT_NAME]: {
        en: "I'Ceat",
        ru: "Ай'сит",
    },

    [LOCALE.VEIL_NAME]: {
        en: "Veil",
        ru: "Вэйл",
    },

    [LOCALE.SPARROW_NAME]: {
        en: "Sparrow",
        ru: "Спарроу",
    },

    [LOCALE.BUNNINJA_NAME]: {
        en: "Bunninja",
        ru: "Банниндзя",
    },

    [LOCALE.KUMIHU_DESCRIPTION]: {
        en: "Kumihu is an evil spirit in the guise of a beautiful woman who is always hungry for new souls. But be careful: in the blink of an eye she can show her true form, destroying any chance to survive, since the Soul Sphere will catch even the most tenacious fools.",
        ru: "Кумиху - злой дух, принявший облик прекрасной женщины, жаждущий новых душ. Но будьте осторожны: в мгновение ока она может показать свою истинную форму, уничтожив любой шанс на выживание, поскольку Сфера души поймает даже самых упорных дураков.",
    },
    [LOCALE.ICEAT_DESCRIPTION]: {
        en: "Belonging to a colony of penguins in the arctic region of Civia, I'ceat stood out among the rest. Possessing magical powers, I'ceat can manifest ice and snow at the tip of his flippers. No one knows where his powers came from, but everyone embraces his uniqueness among the group. Waddling past the tall trees in the dense forest, I'ceat is determined to find the true meaning behind the powers he once used to protect his family.",
        ru: "Принадлежащий к колонии пингвинов в арктическом регионе Кливии, Ай'сит выделялся среди остальных. Обладая магическими способностями, Ай'сит может создавать лёд и снег на кончиках ласт. Никто не знает, откуда взялись его силы, но все в группе принимают его уникальность. Пробираясь мимо высоких деревьев в густом лесу, Ай'сит наполнен решимостью разыскать истинный смысл своих сил, которые он когда-то использовал для защиты своей семьи.",
    },
    [LOCALE.BUNNINJA_DESCRIPTION]: {
        en: "Coming from an underground laboratory in the heated war zone of Rotite, Bunninja fought for Etygia's guerilla force and partook in ambushes focused on the upper ranks of the enemy forces. He gained notoriety among allies and foes alike because of his unique style of killing. During a secret experiment gone wrong, the test subject blasted the laboratory wide open. Wanting to leave the hectic environment and hellish landscape, Bunninja dared to leave the guerilla force for good. Through the spray of bullets, he managed to swiftly make it past as he witnessed the loss of many lives in the chaos. For Bunninja, he wanted freedom, but at the cost of betraying the kingdom. Keeping a low profile and lurking in the shadows, it's only a matter of time. The hunter has become the hunted.",
        ru: "Выйдя из подземной лаборатории в жаркой зоне боевых действий Ротита, Банниндзя сражался на стороне партизан Этигии и участвовал в засадах, сосредоточенных на верхних званиях вражеских сил. Он получил известность как среди союзников, так и среди врагов из-за своего уникального стиля убийств. Во время секретного эксперимента, который закончился неудачей, испытуемый полностью взорвал лабораторию. Желая покинуть суету и адские пейзажи, Банниндзя осмелился навсегда покинуть партизанские отряды. Ему удалось быстро миновать осколки пуль, становясь свидетелем гибели многих людей в происходящем хаосе. Банниндзя просто хотел свободы, даже ценой предательства целого королевства. Незаметность и скрытность в тени - это лишь вопрос времени. Охотник превратился в добычу.",
    },
    [LOCALE.SPARROW_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
    },
    [LOCALE.BELLE_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
    },
    [LOCALE.VEIL_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
    },

    [LOCALE.DAMAGE_TYPE_NORMAL]: {
        en: "Normal",
        ru: "Физический",
    },

    [LOCALE.DAMAGE_TYPE_MAGICAL]: {
        en: "Magical",
        ru: "Магический",
    },

    [LOCALE.DAMAGE_TYPE_PURE]: {
        en: "Pure",
        ru: "Чистый",
    },

    [LOCALE.DAMAGE_TYPE_DASH]: {
        en: "Dash",
        ru: "Рывок",
    },

    [LOCALE.DAMAGE_TYPE_HEAL]: {
        en: "Heal",
        ru: "Исцеление",
    },

    [LOCALE.DAMAGE_TYPE_BUFF]: {
        en: "Buff",
        ru: "Усиление",
    },

    [LOCALE.COOLDOWN]: {
        en: "Cooldown",
        ru: "Перезарядка",
    },

    [LOCALE.LEVEL]: {
        en: "Level",
        ru: "Уровень",
    },

    [LOCALE.RED_TEAM]: {
        en: "Red Team",
        ru: "Красная команда",
    },

    [LOCALE.BLUE_TEAM]: {
        en: "Blue Team",
        ru: "Синяя команда",
    },

    [LOCALE.SECOND]: {
        en: "Seconds",
        ru: "сек.",
    },

    [LOCALE.WARNING_NOT_IN_BASE]: {
        en: "You can not buy items outside base!",
        ru: "Вы не можете покупать предметы вне своей базы!",
    },

    [LOCALE.WARNING_TOWER_ATTK]: {
        en: "Careful! You've been targeted by tower ! Fall back!",
        ru: "Осторожно! Вы были атакованы башней! Отступайте!",
    },

    [LOCALE.TRAINING_WELCOME]: {
        en: "Welcome to Kingdom of Pixels!",
        ru: "Добро пожаловать в Kingdom of Pixels!",
    },

    [LOCALE.TRAINING_GOAL_TARGET]: {
        en: "Your goal is to destroy the enemy's crystal! \n" +
            "Only your minions can damage it! You cannot destroy it with your attacks!\n" +
            "You need to push 4 minions in to win the game!" +
            "\n\n[Press space to continue!]",
        ru: "Ваша цель - уничтожить вражеский кристалл! \n" +
            "Только Ваши миньоны могут нанести ему урон! Своими силами его уничтожить не удастся!\n" +
            "Вам надо привести к нему 4 союзных миньона, чтобы победить!" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_TOWER]: {
        en: "But FIRST, you must destroy the enemy tower!\n" +
            "DO NOT ATTACK THE TOWER WITHOUT MINIONS! You need minions to tank the tower's damage! \n" +
            "Be careful! Attacking an enemy hero while inside the tower's range makes it target you!" +
            "\n\n[Press space to continue!]",
        ru: "Но СНАЧАЛА Вы должны уничтожить вражескую башню!\n" +
            "НЕ АТАКУЙТЕ БАШНЮ БЕЗ СОЮЗНЫХ МИНЬОНОВ! Вам они необходимы, чтобы заблокировать урон башни! \n" +
            "Будьте осторожны! Вражеская башня выберет Вас целью, если Вы начнёте атаковать вражеского героя в её радиусе!" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_MINIONS]: {
        en: "Those are your minions, they spawn every 20 seconds from your crystal!\n" +
            "Killing an enemy minion gives you additional gold!\n" +
            "Use these minions to tank tower damage and destroy the enemy crystal\n" +
            "Enemy minions can hurt you, so be careful of them also!" +
            "\n\n[Press space to continue!]",
        ru: "Это - ваши миньоны. Они появляются каждые 20 секунд!\n" +
            "Вы получаете дополнительное золото, убивая вражеских миньонов!\n" +
            "Используйте союзных миньонов, чтобы башня атаковала их, а также чтобы уничтожить вражеский кристалл\n" +
            "Вражеские миньоны могут нанести вам урон, поэтому будьте бдительны!" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_GOLD_RUNE]: {
        en: "At the top, you can find the Gold Rune! \n" +
            "Gold runes give you 50+ Gold as the game progresses!\n" +
            "First gold rune spawns at 00:00 in-game time!\n" +
            "\n\n[Press space to continue!]",
        ru: "Здесь Вы можете найти руну золота! \n" +
            "Руна золота даёт вам 60+ золота!\n" +
            "Первая руна золота появляется в 0:00 по времени матча!\n" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_POWER_RUNE]: {
        en: "At the bottom, you can find the Power Runes! \n" +
            "Here, you can find 4 different types of runes.\n" +
            "First power rune spawns at 01:00, and consecutive ones at each minute-mark!\n" +
            "\n\n[Press space to continue!]",
        ru: "Здесь Вы можете найти руну силы! \n" +
            "Она может иметь одну из 4 вариаций, каждая из которых обладает собственным эффектом\n" +
            "Первая руна силы появляется в 01:00, а каждая последующая - ровно в начале следующей минуты!\n" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_BUSHES]: {
        en: "You can hide from your enemies inside the bush! \n" +
            "They wont see you here as you're hidden, so you can ambush your enemies from bushes!\n" +
            "Hidden won't mean your invincible. Enemies can still hit you inside bushes, so take precaution!" +
            "\n\n[Press space to continue!]",
        ru: "Вы можете прятаться от противников в кустах! \n" +
            "Они не увидят Вас там, поэтому Вы с лёгкостью можете устраивать засады!\n" +
            "Но вы не получаете неуязвимость, прячась в кустах. Враги всё ещё могут попасть по вам даже если вы находитесь там, поэтому будьте осторожны!\n" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_ITEMS]: {
        en: "Control your mouse to buy items\n" +
            "Choose your items wisely! If you don't want the item, you can right-click and sell the item.\n" +
            "Selling an item 5 seconds after buying it will only refund 50% of its value!\n" +
            "Several items (Activable) can be used with the [1, 2, 3, 4] keybinds !\n" +
            "REMEMBER! You can only buy inside your base!" +
            "\n\n[Press space to continue!]",
        ru: "Используйте Вашу мышь для покупки предметов! Наведите на пустой слот, а затем ПКМ по желаемому предмету для покупки!\n" +
            "Покупайте предметы с умом! Вы можете нажать правой кнопкой мыши для продажи предмета.\n" +
            "Продажа предмета по истечению 5 секунд после покупки возвратит всего лишь 50% от изначальной стоимости!" +
            "Активные предметы можно использовать, нажав клавиши [1, 2, 3, 4], в соответствии с номером слота!" +
            "ЗАПОМНИТЕ! Вы можете покупать предметы только находясь на своей базе!" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_ABILITES]: {
        en: "At the bottom you can see your hero's abilites!\n" +
            "[J] [K] [L] are the keybinds for your attacks / abilities\n" +
            "[B] is Recall to teleport back to your base! It will take 5 seconds to finish the recall before you teleport.\n" +
            "You can hover your cursor over the abilities to see tooltips for more info!" +
            "\n\n[Press space to continue!]",
        ru: "Внизу Вы можете увидеть способности своего героя\n" +
            "[J] [K] [L] - горячие клавиши для использования\n" +
            "[B] - возвращение на базу!" +
            "Вы можете навести на любую из способностей, чтобы раскрыть её описание!" +
            "\n\n[Нажмите пробел для продолжения!]",
    },

    [LOCALE.TRAINING_PLAY]: {
        en: "Your objective now is to defeat the enemy bot! \n" +
            "Use the A and D keys to move left or right\n" +
            "Use W to JUMP and S to DROP DOWN from a platform\n" +
            "Good luck and have fun !",
        ru: "Теперь Вы должны одолеть вражеского бота! \n" +
            "Используйте клавиши A и D для движения влево/вправо\n" +
            "Используйте W для прыжка и S для спуска вниз\n" +
            "Удачи, герой! Повеселитесь как следует!",
    },

    [LOCALE.LOGOUT]: {
        en: "Logout",
        ru: "Выход",
    },
    [LOCALE.FLOATING_NUMBERS]: {
        en: "Floating Numbers",
        ru: "Всплывающие числа",
    },
    [LOCALE.FULL_SCREEN]: {
        en: "Toggle full screen",
        ru: "Полноэкранный режим",
    },
    [LOCALE.MOUSE_SUPPORT]: {
        en: "Mouse Support",
        ru: "Поддержка мыши",
    },
    [LOCALE.GLOBAL_CHAT]: {
        en: "Global Chat",
        ru: "Глобальный чат",

    },
    [LOCALE.HOME]: {
        en: "Home",
        ru: "Домой",
    },
    [LOCALE.PLAY]: {
        en: "Play",
        ru: "Играть",
    },
    [LOCALE.LEADERBOARD]: {
        en: "Leaderboard",
        ru: "Таблица лидеров",
    },
    [LOCALE.HEROES]: {
        en: "Heroes",
        ru: "Герои",
    },
    [LOCALE.HERO]: {
        en: "Hero",
        ru: "Герой",
    },
    [LOCALE.WAITING_FOR_OPPONENTS]: {
        en: "Waiting for opponents",
        ru: "Ожидание оппонентов",
    },
    [LOCALE.TIME_TO_BATTLE]: {
        en: "Time to battle",
        ru: "Времени до начала",
    },
    [LOCALE.RANDOM_PICK]: {
        en: "Random Pick",
        ru: "Случайный выбор",
    },
    [LOCALE.LOCKED_IN]: {
        en: "Locked In",
        ru: "Выбрано",
    },
    [LOCALE.PICK_HERO]: {
        en: "Pick Hero",
        ru: "Выбрать героя",

    },
    [LOCALE.ONLINE_PLAYERS]: {
        en: "Online Players",
        ru: "Игроков онлайн",

    },
    [LOCALE.RATING]: {
        en: "Rating",
        ru: "Рейтинг",
    },
    [LOCALE.MMR]: {
        en: "MMR",
        ru: "MMR",
    },
    [LOCALE.TOTAL_GAMES]: {
        en: "Total games",
        ru: "Всего игр",
    },
    [LOCALE.TOTAL_WINS]: {
        en: "Total wins",
        ru: "Всего побед",
    },
    [LOCALE.GAME_WINS]: {
        en: "Wins",
        ru: "Побед",
    },
    [LOCALE.GAME_LOSSES]: {
        en: "Losses",
        ru: "Поражений",

    },
    [LOCALE.RANK]: {
        en: "Rank",
        ru: "Ранг",
    },
    [LOCALE.PLAYER]: {
        en: "Player",
        ru: "Игрок",
    },
    [LOCALE.CHOOSE_HERO]: {
        en: "CHOOSE YOUR HERO",
        ru: "ВЫБЕРИТЕ ВАШЕГО ГЕРОЯ",
    },
    [LOCALE.TRAINING_MATCH]: {
        en: "Training Match (AI)",
        ru: "Тренировочный матч (ИИ)",
    },
    [LOCALE.PRACTICE_MATCH]: {
        en: "Test hero",
        ru: "Пробный герой",
    },
    [LOCALE.PLAY_NOW]: {
        en: "Play now!",
        ru: "Играй сейчас!",
    },
    [LOCALE.TIME]: {
        en: "Time",
        ru: "Время",
    },
    [LOCALE.TAG_MAGE]: {
        en: "MAGE",
        ru: "МАГ",
    },
    [LOCALE.TAG_ASSASSIN]: {
        en: "ASSASSIN",
        ru: "УБИЙЦА",
    },
    [LOCALE.TAG_TANK]: {
        en: "TANK",
        ru: "ТАНК",
    },
    [LOCALE.TAG_SUPPORT]: {
        en: "SUPPORT",
        ru: "ПОДДЕРЖКА",
    },
    [LOCALE.TAG_INITIATOR]: {
        en: "INITIATOR",
        ru: "ИНИЦИАТОР",
    },
    [LOCALE.TAG_CARRY]: {
        en: "CARRY",
        ru: "КЕРРИ",
    },
    [LOCALE.TAG_DISABLER]: {
        en: "DISABLER",
        ru: "КОНТРОЛЬ",
    },

    /** POST SCENE */
    [LOCALE.POST_KDA]: {
        en: "K/D/A",
        ru: "У/С/С",
    },

    [LOCALE.POST_HERO_DAMAGE]: {
        en: "Hero Damage",
        ru: "Урон по героям",
    },

    [LOCALE.POST_TOWER_DAMAGE]: {
        en: "Tower Damage",
        ru: "Урон по башне",
    },

    [LOCALE.POST_MINIONS_KILLED]: {
        en: "Last Hits",
        ru: "Миньонов убито",
    },

    [LOCALE.POST_TOTAL_NETWORTH]: {
        en: "Total Networth",
        ru: "Всего золота",
    },

    [LOCALE.POST_LEAVE_GAME]: {
        en: "Leave Game",
        ru: "Покинуть игру",
    },
    [LOCALE.POST_WIN_GAME]: {
        en: "You have Won!",
        ru: "Вы победили!",
    },
    [LOCALE.POST_LOSE_GAME]: {
        en: "You have Lost!",
        ru: "Вы проиграли!",
    },

    /** Chat */
    [LOCALE.CHAT_ALL]: {
        en: "ALL",
        ru: "ВСЕМ",
    },
    [LOCALE.CHAT_ALLIES]: {
        en: "ALLIES",
        ru: "СОЮЗНИКАМ",
    },
    [LOCALE.CHAT_GAMEMASTER]: {
        en: "GAMEMASTER",
        ru: "ИГРОВОЙ МАСТЕР",
    },

    /** Popups */
    [LOCALE.POPUP_SELECT_SEND]: {
        en: "Send",
        ru: "Отправить",
    },
    [LOCALE.POPUP_SELECT_ACCEPT]: {
        en: "Accept",
        ru: "Принять",
    },
    [LOCALE.POPUP_SELECT_REJECT]: {
        en: "Reject",
        ru: "Отклонить",
    },
    [LOCALE.POPUP_SELECT_CLOSE]: {
        en: "Close",
        ru: "Закрыть",
    },
    [LOCALE.POPUP_SELECT_NAME_TITLE]: {
        en: "Select your name! Be careful, name change is not free.",
        ru: "Выберите ваше имя! Будьте осторожны, изменение имени не бесплатно.",
    },
    [LOCALE.POPUP_SELECT_MESS_GUESTMODE]: {
        en: "You have limited access to game! Your stats lost when you exit browser...<br /> Connect your <b style='color: red'>G-Mail account</b> to access all features. and no ADS!",
        ru: "У вас ограниченный доступ к игре! Ваша статистика будет утерена, если вы закроете браузер...<br /> Подключите ваш <b style='color: red'>аккаунт G-Mail</b> для получения доступа ко всем функциям и чтобы убрать рекламу!",
    },
    [LOCALE.POPUP_SELECT_NAME_GUESTMODE]: {
        en: "GUEST MODE!",
        ru: "РЕЖИМ ГОСТЯ!",
    },
    [LOCALE.POPUP_SELECT_GUESTMODE_OPT]: {
        en: "Connect GMAIL Account",
        ru: "Подключить аккаунт G-Mail",
    },
    [LOCALE.POPUP_BATTLE_END]: {
        en: "Battle ended",
        ru: "Битва окончена",
    },
    [LOCALE.POPUP_BATTLE_FOUND]: {
        en: "Battle found !",
        ru: "Найдена битва!",
    },
    [LOCALE.POPUP_BATTLE_FOUND_MESS]: {
        en: "Time remaining",
        ru: "Времени осталось",
    },
    [LOCALE.POPUP_BATTLE_WAITING]: {
        en: "Waiting for players...",
        ru: "Ожидание игроков...",
    },
    [LOCALE.POPUP_BATTLE_LEFT]: {
        en: "Someone left...",
        ru: "Кто-то вышел...",
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING]: {
        en: "For the first time you must pass throu training otherwise you can not play against players!",
        ru: "Зайдя впервые, вам нужно пройти обучение, иначе вы не сможете играть против других игроков!",
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING_START]: {
        en: "Get me into a tutorial!",
        ru: "Начать обучение!",
    },
    [LOCALE.POPUP_SELECT_FAILED_QUEUE]: {
        en: "Failed to queue, try again!",
        ru: "Произошла ошибка во время попытки встать в очередь, попробуйте снова!",
    },
    [LOCALE.POPUP_SELECT_BANNED_QUEUE]: {
        en: "You are banned from queue for rejecting matches! try in ",
        ru: "Ваша возможность стать в очередь заблокирована, так как вы отклоняли слишком много матчей! Попробуйте снова через ",
    },
}
export default locale_data;
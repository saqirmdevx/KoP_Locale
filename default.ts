import LOCALE from "../locales";

const locale_data: { [key in LOCALE]: { [key in string]: string } } = {
    /** Hero section */
    [LOCALE.KUMIHU_NAME]: {
        en: "Kumihu",
    },

    [LOCALE.BELLE_NAME]: {
        en: "Belle",
    },

    [LOCALE.ICEAT_NAME]: {
        en: "I'Ceat",
    },

    [LOCALE.VEIL_NAME]: {
        en: "Veil",
    },

    [LOCALE.SPARROW_NAME]: {
        en: "Sparrow",
    },

    [LOCALE.BUNNINJA_NAME]: {
        en: "Bunninja",
    },

    [LOCALE.KUMIHU_DESCRIPTION]: {
        en: "Kumihu is an evil spirit in the guise of a beautiful woman who is always hungry for new souls. But be careful: in the blink of an eye she can show her true form, destroying any chance to survive, since the Soul Sphere will catch even the most tenacious fools.",
    },
    [LOCALE.ICEAT_DESCRIPTION]: {
        en: "Belonging to a colony of penguins in the arctic region of Civia, I'ceat stood out among the rest. Possessing magical powers, I'ceat can manifest ice and snow at the tip of his flippers. No one knows where his powers came from, but everyone embraces his uniqueness among the group. Waddling past the tall trees in the dense forest, I'ceat is determined to find the true meaning behind the powers he once used to protect his family.",
    },
    [LOCALE.BUNNINJA_DESCRIPTION]: {
        en: "Coming from an underground laboratory in the heated war zone of Rotite, Bunninja fought for Etygia's guerilla force and partook in ambushes focused on the upper ranks of the enemy forces. He gained notoriety among allies and foes alike because of his unique style of killing. During a secret experiment gone wrong, the test subject blasted the laboratory wide open. Wanting to leave the hectic environment and hellish landscape, Bunninja dared to leave the guerilla force for good. Through the spray of bullets, he managed to swiftly make it past as he witnessed the loss of many lives in the chaos. For Bunninja, he wanted freedom, but at the cost of betraying the kingdom. Keeping a low profile and lurking in the shadows, it's only a matter of time. The hunter has become the hunted.",
    },
    [LOCALE.SPARROW_DESCRIPTION]: {
        en: "Will be added soon!",
    },
    [LOCALE.BELLE_DESCRIPTION]: {
        en: "Will be added soon!",
    },
    [LOCALE.VEIL_DESCRIPTION]: {
        en: "Will be added soon!",
    },

    [LOCALE.DAMAGE_TYPE_NORMAL]: {
        en: "Normal",
    },

    [LOCALE.DAMAGE_TYPE_MAGICAL]: {
        en: "Magical",
    },

    [LOCALE.DAMAGE_TYPE_PURE]: {
        en: "Pure",
    },

    [LOCALE.DAMAGE_TYPE_DASH]: {
        en: "Dash",
    },

    [LOCALE.DAMAGE_TYPE_HEAL]: {
        en: "Heal",
    },

    [LOCALE.DAMAGE_TYPE_BUFF]: {
        en: "Buff",
    },

    [LOCALE.COOLDOWN]: {
        en: "Cooldown",
    },

    [LOCALE.LEVEL]: {
        en: "Level",
    },

    [LOCALE.RED_TEAM]: {
        en: "Red Team",
    },

    [LOCALE.BLUE_TEAM]: {
        en: "Blue Team",
    },

    [LOCALE.SECOND]: {
        en: "Seconds",
    },

    [LOCALE.WARNING_NOT_IN_BASE]: {
        en: "You can not buy items outside base!",
    },

    [LOCALE.WARNING_TOWER_ATTK]: {
        en: "Careful! You've been targeted by tower ! Fall back!",
    },

    [LOCALE.TRAINING_WELCOME]: {
        en: "Welcome to Kingdom of Pixels!",
    },

    [LOCALE.TRAINING_GOAL_TARGET]: {
        en: "Your goal is to destroy the enemy's crystal! \n" +
            "Only your minions can damage it! You cannot destroy it with your attacks!\n" +
            "You need to push 4 minions in to win the game!" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_TOWER]: {
        en: "But FIRST, you must destroy the enemy tower!\n" +
            "DO NOT ATTACK THE TOWER WITHOUT MINIONS! You need minions to tank the tower's damage! \n" +
            "Be careful! Attacking an enemy hero while inside the tower's range makes it target you!" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_MINIONS]: {
        en: "Those are your minions, they spawn every 20 seconds from your crystal!\n" +
            "Killing an enemy minion gives you additional gold!\n" +
            "Use these minions to tank tower damage and destroy the enemy crystal\n" +
            "Enemy minions can hurt you, so be careful of them also!" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_GOLD_RUNE]: {
        en: "At the top, you can find the Gold Rune! \n" +
            "Gold runes give you 50+ Gold as the game progresses!\n" +
            "First gold rune spawns at 00:00 in-game time!\n" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_POWER_RUNE]: {
        en: "At the bottom, you can find the Power Runes! \n" +
            "Here, you can find 4 different types of runes.\n" +
            "First power rune spawns at 01:00, and consecutive ones at each minute-mark!\n" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_BUSHES]: {
        en: "You can hide from your enemies inside the bush! \n" +
            "They wont see you here as you're hidden, so you can ambush your enemies from bushes!\n" +
            "Hidden won't mean your invincible. Enemies can still hit you inside bushes, so take precaution!" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_ITEMS]: {
        en: "Control your mouse to buy items\n" +
            "Choose your items wisely! If you don't want the item, you can right-click and sell the item.\n" +
            "Selling an item 5 seconds after buying it will only refund 50% of its value!\n" +
            "Several items (Activable) can be used with the [1, 2, 3, 4] keybinds !\n" +
            "REMEMBER! You can only buy inside your base!" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_ABILITES]: {
        en: "At the bottom you can see your hero's abilites!\n" +
            "[J] [K] [L] are the keybinds for your attacks / abilities\n" +
            "[B] is Recall to teleport back to your base! It will take 5 seconds to finish the recall before you teleport.\n" +
            "You can hover your cursor over the abilities to see tooltips for more info!" +
            "\n\n[Press space to continue!]",
    },

    [LOCALE.TRAINING_PLAY]: {
        en: "Your objective now is to defeat the enemy bot! \n" +
            "Use the A and D keys to move left or right\n" +
            "Use W to JUMP and S to DROP DOWN from a platform\n" +
            "Good luck and have fun !",
    },

    [LOCALE.LOGOUT]: {
        en: "Logout",
    },
    [LOCALE.FLOATING_NUMBERS]: {
        en: "Floating Numbers",
    },
    [LOCALE.FULL_SCREEN]: {
        en: "Toggle full screen",
    },
    [LOCALE.MOUSE_SUPPORT]: {
        en: "Mouse Support",
    },
    [LOCALE.GLOBAL_CHAT]: {
        en: "Global Chat",

    },
    [LOCALE.HOME]: {
        en: "Home",
    },
    [LOCALE.PLAY]: {
        en: "Play",
    },
    [LOCALE.LEADERBOARD]: {
        en: "Leaderboard",
    },
    [LOCALE.HEROES]: {
        en: "Heroes",
    },
    [LOCALE.HERO]: {
        en: "Hero",
    },
    [LOCALE.WAITING_FOR_OPPONENTS]: {
        en: "Waiting for opponents",
    },
    [LOCALE.TIME_TO_BATTLE]: {
        en: "Time to battle",
    },
    [LOCALE.RANDOM_PICK]: {
        en: "Random Pick",
    },
    [LOCALE.LOCKED_IN]: {
        en: "Locked In",
    },
    [LOCALE.PICK_HERO]: {
        en: "Pick Hero",

    },
    [LOCALE.ONLINE_PLAYERS]: {
        en: "Online Players",

    },
    [LOCALE.RATING]: {
        en: "Rating",
    },
    [LOCALE.MMR]: {
        en: "MMR",
    },
    [LOCALE.TOTAL_GAMES]: {
        en: "Total games",
    },
    [LOCALE.TOTAL_WINS]: {
        en: "Total wins",
    },
    [LOCALE.GAME_WINS]: {
        en: "Wins",
    },
    [LOCALE.GAME_LOSSES]: {
        en: "Losses",

    },
    [LOCALE.RANK]: {
        en: "Rank",
    },
    [LOCALE.PLAYER]: {
        en: "Player",
    },
    [LOCALE.CHOOSE_HERO]: {
        en: "CHOOSE YOUR HERO",
    },
    [LOCALE.TRAINING_MATCH]: {
        en: "Training Match (AI)",
    },
    [LOCALE.PRACTICE_MATCH]: {
        en: "Test hero",
    },
    [LOCALE.PLAY_NOW]: {
        en: "Play now!",
    },
    [LOCALE.TIME]: {
        en: "Time",
    },
    [LOCALE.TAG_MAGE]: {
        en: "MAGE",
    },
    [LOCALE.TAG_ASSASSIN]: {
        en: "ASSASSIN",
    },
    [LOCALE.TAG_TANK]: {
        en: "TANK",
    },
    [LOCALE.TAG_SUPPORT]: {
        en: "SUPPORT",
    },
    [LOCALE.TAG_INITIATOR]: {
        en: "INITIATOR",
    },
    [LOCALE.TAG_CARRY]: {
        en: "CARRY",
    },
    [LOCALE.TAG_DISABLER]: {
        en: "DISABLER",
    },

    /** POST SCENE */
    [LOCALE.POST_KDA]: {
        en: "K/D/A",
    },

    [LOCALE.POST_HERO_DAMAGE]: {
        en: "Hero Damage",
    },

    [LOCALE.POST_TOWER_DAMAGE]: {
        en: "Tower Damage",
    },

    [LOCALE.POST_MINIONS_KILLED]: {
        en: "Last Hits",
    },

    [LOCALE.POST_TOTAL_NETWORTH]: {
        en: "Total Networth",
    },

    [LOCALE.POST_LEAVE_GAME]: {
        en: "Leave Game",
    },
    [LOCALE.POST_WIN_GAME]: {
        en: "You have Won!",
    },
    [LOCALE.POST_LOSE_GAME]: {
        en: "You have Lost!",
    },

    /** Chat */
    [LOCALE.CHAT_ALL]: {
        en: "ALL",
    },
    [LOCALE.CHAT_ALLIES]: {
        en: "ALLIES",
    },
    [LOCALE.CHAT_GAMEMASTER]: {
        en: "GAMEMASTER",
    },

    /** Popups */
    [LOCALE.POPUP_SELECT_SEND]: {
        en: "Send",
    },
    [LOCALE.POPUP_SELECT_ACCEPT]: {
        en: "Accept",
    },
    [LOCALE.POPUP_SELECT_REJECT]: {
        en: "Reject",
    },
    [LOCALE.POPUP_SELECT_CLOSE]: {
        en: "Close",
    },
    [LOCALE.POPUP_SELECT_NAME_TITLE]: {
        en: "Select your name! Be careful, name change is not free.",
    },
    [LOCALE.POPUP_SELECT_MESS_GUESTMODE]: {
        en: "You have limited access to game! Your stats lost when you exit browser...<br /> Connect your <b style='color: red'>G-Mail account</b> to access all features. and no ADS!",
    },
    [LOCALE.POPUP_SELECT_NAME_GUESTMODE]: {
        en: "GUEST MODE!",
    },
    [LOCALE.POPUP_SELECT_GUESTMODE_OPT]: {
        en: "Connect GMAIL Account",
    },
    [LOCALE.POPUP_BATTLE_END]: {
        en: "Battle ended",
    },
    [LOCALE.POPUP_BATTLE_FOUND]: {
        en: "Battle found !",
    },
    [LOCALE.POPUP_BATTLE_FOUND_MESS]: {
        en: "Time remaining",
    },
    [LOCALE.POPUP_BATTLE_WAITING]: {
        en: "Waiting for players...",
    },
    [LOCALE.POPUP_BATTLE_LEFT]: {
        en: "Someone left...",
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING]: {
        en: "For the first time you must pass throu training otherwise you can not play against players!",
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING_START]: {
        en: "Get me into a tutorial!",
    },
    [LOCALE.POPUP_SELECT_FAILED_QUEUE]: {
        en: "Failed to queue, try again!",
    },
    [LOCALE.POPUP_SELECT_BANNED_QUEUE]: {
        en: "You are banned from queue for rejecting matches! try in ",
    },
}
export default locale_data;
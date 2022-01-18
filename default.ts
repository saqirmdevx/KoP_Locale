import LOCALE from "../locales";

const locale_data: { [key in LOCALE]: { [key in string]: string } } = {
    /** Hero section */
    [LOCALE.KUMIHU_NAME]: {
        en: "Kumihu",
        ru: "Кумиху",
        br: "Kumihu",
        cz: "Kumihu",
    },

    [LOCALE.BELLE_NAME]: {
        en: "Belle",
        ru: "Белла",
        br: "Belle",
        cz: "Belle",
    },

    [LOCALE.ICEAT_NAME]: {
        en: "I'Ceat",
        ru: "Ай'сит",
        br: "ICeat",
        cz: "I'Ceat",
    },

    [LOCALE.VEIL_NAME]: {
        en: "Veil",
        ru: "Вэйл",
        br: "Veil",
        cz: "Veil",
    },

    [LOCALE.SPARROW_NAME]: {
        en: "Sparrow",
        ru: "Спарроу",
        br: "Sparrow",
        cz: "Sparrow",
    },

    [LOCALE.THOMAS_NAME]: {
        en: "Thomas",
        ru: "Томас",
        br: "Thomas",
        cz: "Thomas",
    },

    [LOCALE.FLIN_NAME]: {
        en: "Flin",
        br: "Flin",
        cz: "Flin",
        ru: "Флин"
    },

    [LOCALE.KUMIHU_DESCRIPTION]: {
        en: "Kumihu is an evil spirit in the guise of a beautiful woman who is always hungry for new souls. But be careful: in the blink of an eye she can show her true form, destroying any chance to survive, since the Soul Sphere will catch even the most tenacious fools.",
        ru: "Кумиху - злой дух, принявший облик прекрасной женщины, жаждущий новых душ. Но будьте осторожны: в мгновение ока она может показать свою истинную форму, уничтожив любой шанс на выживание, поскольку Сфера души поймает даже самых упорных дураков.",
        br: "Kumihu é um Demônio que roubou o corpo de uma Bela mulher que está sempre faminta por almas. Mas tome cuidado, em um piscar de olhos ela pode mostrar sua verdadeira forma, destruindo qualquer chance de sua vítima sobreviver, encantando até as pessoas mais cautelosas.",
        cz: "Kumihu je zlý duch v převleku krásné ženy, která neustále touží po nových duších. Ale buďte opatrní: mrknutím oka může ukázat svou pravou podobu a zničit jakoukoli šanci na přežití, protože její sféra duše zachytí i ti nejhouževnatější blázni.",
    },
    [LOCALE.ICEAT_DESCRIPTION]: {
        en: "Belonging to a colony of penguins in the arctic region of Civia, I'ceat stood out among the rest. Possessing magical powers, I'ceat can manifest ice and snow at the tip of his flippers. No one knows where his powers came from, but everyone embraces his uniqueness among the group. Waddling past the tall trees in the dense forest, I'ceat is determined to find the true meaning behind the powers he once used to protect his family.",
        ru: "Принадлежащий к колонии пингвинов в арктическом регионе Кливии, Ай'сит выделялся среди остальных. Обладая магическими способностями, Ай'сит может создавать лёд и снег на кончиках ласт. Никто не знает, откуда взялись его силы, но все в группе принимают его уникальность. Пробираясь мимо высоких деревьев в густом лесу, Ай'сит наполнен решимостью разыскать истинный смысл своих сил, которые он когда-то использовал для защиты своей семьи.",
        br: "Pertencente a uma colônia de pinguins na região ártica de Civia, I'ceat se destacou entre os demais. Possuindo poderes mágicos que apenas demônios tem, I'ceat pode manifestar pedras de gelo e neve da ponta de suas nadadeiras. Ninguém sabe de onde veio seus poderes, mas todos o aceitam no grupo acreditando não ter ligação com os demônios. Passando pelas árvores altas da floresta das fadas, I'ceat está determinado a encontrar o verdadeiro significado por trás dos poderes que ele usou para proteger sua colônia.",
        cz: "I'ceat patřil ke kolonii tučňáků v arktické oblasti Civia, ale vždy vyčníval mezi ostatními. Díky magickým schopnostem dokáže I'ceat vztvořit led a sníh na špičce svých křidel. Nikdo neví, kde se jeho schopnosti vzaly , ale každý přijímá jeho jedinečnost ve kmenu. Kolébájíc se kolem vysokých stromů v hustém lese je I'ceat odhodlán najít skutečný význam za schopnostmi, které kdysi používal k ochraně své rodiny.",
    },
    [LOCALE.THOMAS_DESCRIPTION]: {
        en: "Coming from an underground laboratory in the heated war zone of Rotite, Thomas fought for Etygia's guerilla force and partook in ambushes focused on the upper ranks of the enemy forces. He gained notoriety among allies and foes alike because of his unique style of killing. During a secret experiment gone wrong, the test subject blasted the laboratory wide open. Wanting to leave the hectic environment and hellish landscape, Thomas dared to leave the guerilla force for good. Through the spray of bullets, he managed to swiftly make it past as he witnessed the loss of many lives in the chaos. For Thomas, he wanted freedom, but at the cost of betraying the kingdom. Keeping a low profile and lurking in the shadows, it's only a matter of time. The hunter has become the hunted.",
        ru: "Выйдя из подземной лаборатории в жаркой зоне боевых действий Ротита, Томас сражался на стороне партизан Этигии и участвовал в засадах, сосредоточенных на верхних званиях вражеских сил. Он получил известность как среди союзников, так и среди врагов из-за своего уникального стиля убийств. Во время секретного эксперимента, который закончился неудачей, испытуемый полностью взорвал лабораторию. Желая покинуть суету и адские пейзажи, Томас осмелился навсегда покинуть партизанские отряды. Ему удалось быстро миновать осколки пуль, становясь свидетелем гибели многих людей в происходящем хаосе. Томас просто хотел свободы, даже ценой предательства целого королевства. Незаметность и скрытность в тени - это лишь вопрос времени. Охотник превратился в добычу.",
        br: "Vindo de um laboratório subterrâneo na zona de guerra aquecida de Rotite, Thomas foi obrigado a lutar pelas forças de guerrilha de Etygia e sua especialidade era de emboscadas focadas nas fileiras superiores das forças inimigas. Ele ganhou notoriedade entre aliados e inimigos por causa de seu estilo único de luta com uma espada demoníaca. Durante um experimento secreto que deu errado, uma das cobaias explodiu um laboratório subterrâneo perto de onde ele patrulhava. Ele testemunhou a perda de muitas vidas no caos. Thomas aproveitou a oportunidade e se atreveu a deixar as forças de guerrilha, mas ao custo de trair o reino e virar um fugitivo.",
        cz: "Thomas, králík pocházející z podzemní laboratoře ve válečné zóně Rotite, bojoval za partyzánské síly Etygie a účastnil se přepadení zaměřených na vyšší řady nepřátelských sil. Díky svému jedinečnému stylu zabíjení si získal proslulost mezi spojenci i nepřáteli. Během tajného experimentu, který se pokazil, testovaný subjekt znicil laboratoř. Thomas chtěl opustit hektické prostředí a pekelnou krajinu a odvážil se navždy opustit partyzány. Přes spršku kulek se mu podařilo rychle uniknout, když byl svědkem ztráty mnoha životů v chaosu. Bunninju chtěl svobodu, ale za cenu zrady království. Držejic se nízko a číhat ve stínu, je to jen otázka času. Z lovce se stal lovený.",
    },
    [LOCALE.SPARROW_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
        br: "Será adicionado em breve!",
    },
    [LOCALE.BELLE_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
        br: "Será adicionado em breve!",
        cz: "Brzy bude přidáno!",
    },
    [LOCALE.VEIL_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
        br: "Será adicionado em breve!",
        cz: "Brzy bude přidáno!",
    },

    [LOCALE.FLIN_DESCRIPTION]: {
        en: "Will be added soon!",
        ru: "Скоро будет добавлено!",
        br: "Será adicionado em breve!",
        cz: "Brzy bude přidáno!",
    },

    [LOCALE.DAMAGE_TYPE_NORMAL]: {
        en: "Normal",
        ru: "Физический",
        br: "Normal",
        cz: "Normální",
    },

    [LOCALE.DAMAGE_TYPE_MAGICAL]: {
        en: "Magical",
        ru: "Магический",
        br: "Mágica",
        cz: "Magický",
    },

    [LOCALE.DAMAGE_TYPE_PURE]: {
        en: "Pure",
        ru: "Чистый",
        br: "Puro",
        cz: "čistý",
    },

    [LOCALE.DAMAGE_TYPE_DASH]: {
        en: "Dash",
        ru: "Рывок",
        br: "Dash",
        cz: "Skok",     // the closest to dash i could find is skok=jump
    },

    [LOCALE.DAMAGE_TYPE_HEAL]: {
        en: "Heal",
        ru: "Исцеление",
        br: "Cura",
        cz: "Léčení",
    },

    [LOCALE.DAMAGE_TYPE_BUFF]: {
        en: "Buff",
        ru: "Усиление",
        br: "Buff",
        cz: "Zesílení",
    },

    [LOCALE.COOLDOWN]: {
        en: "Cooldown",
        ru: "Перезарядка",
        br: "Recarga",
        cz: "Cooldown", // could not find a better translation, even most games that have CZ support just use 'cooldown'
    },

    [LOCALE.LEVEL]: {
        en: "Level",
        ru: "Уровень",
        br: "Nível",
        cz: "Úroveň",
    },

    [LOCALE.RED_TEAM]: {
        en: "Red Team",
        ru: "Красная команда",
        br: "Time Vermelho",
        cz: "Rudý tým",
    },

    [LOCALE.BLUE_TEAM]: {
        en: "Blue Team",
        ru: "Синяя команда",
        br: "Time Azul",
        cz: "Modrý tým",
    },

    [LOCALE.SECOND]: {
        en: "Seconds",
        ru: "сек.",
        br: "Segundos",
        cz: "Vteřin",
    },

    [LOCALE.WARNING_NOT_IN_BASE]: {
        en: "You can not buy items outside base!",
        ru: "Вы не можете покупать предметы вне своей базы!",
        br: "Você não pode comprar itens fora da base!",
        cz: "Nemůžete nakupovat předměty mimo základnu!",
    },

    [LOCALE.WARNING_TOWER_ATTK]: {
        en: "Careful! You've been targeted by tower ! Fall back!",
        ru: "Осторожно! Вы были атакованы башней! Отступайте!",
        br: "Cuidado! Você é alvo de uma torre.",
        cz: "Pozor! Byli jste zacílen věží! Ustupte!",
    },

    [LOCALE.TRAINING_WELCOME]: {
        en: "Welcome to Kingdom of Pixels!",
        ru: "Добро пожаловать в Kingdom of Pixels!",
        br: "Bem-vindo a Kingdom of Pixels!",
        cz: "Vítejte v království pixelů!",
    },

    [LOCALE.TRAINING_GOAL_TARGET]: {
        en: "Your goal is to destroy the enemy's crystal! \n" +
            "Only your minions can damage it! You cannot destroy it with your attacks!\n" +
            "You need to push 4 minions in to win the game!" +
            "\n\n[Press space to continue!]",
        ru: "Ваша цель - уничтожить вражеский кристалл! \n" +
            "Только Ваши миньоны могут нанести ему урон! Своими атаками его уничтожить не удастся!\n" +
            "Вам надо привести к нему 4 союзных миньона, чтобы победить!" +
            "\n\n[Нажмите пробел для продолжения!]",
        br: "Seu objetivo é destruir o Cristal na Base do inimigo! \n" +
            "Apenas seus Minions podem danificá-la! Você não pode destruí-la com seus ataques!\n" +
            "Você precisa levar 4 minions para ganhar o jogo!" +
            "\n\n[Pressione espaço para continuar!]",
        // minion = poskok in LoL, but i am going to call them pěšáci
        cz: "Vaším cílem je zničit nepřátelský krystal! \n" +
            "Pouze vaši pěšáci ho mohou poškodit! Nelze jej zničit vašimi útoky!\n" +
            "Abyste vyhráli hru, musíte udeřit čtyřmi pěšáky!" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
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
        br: "Mas primeiro, você deve destruir a torre inimiga!\n" +
            "NÃO ATAQUE A TORRE SEM MINIONS! Você precisa deles para controlar o dano da torre! \n" +
            "Tome cuidado! Atacar um herói inimigo dentro do alcance da torre, faz com que ela atinja você!" +
            "\n\n[Pressione espaço para continuar!]",
        cz: "Ale nejprve musíte zničit nepřátelskou věž!\n" +
            "NEÚTOČTE NA VĚŽ BEZ PĚŠÁKŮ! K tankování poškození věže potřebujete pěšáky!\n" +
            "Buďte opatrní! Když zaútočíte na nepřátelského hrdinu v dosahu věže, stanete se terčem vy!" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
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
        br: "Esses são seus Minions, eles surgem a cada 20 segundos do seu cristal!\n" +
            "Matar um Minion inimigo dá a você ouro adicional!\n" +
            "Use esses Minions para segurar o dano da torre inimiga para você conseguir destrui-la.\n" +
            "Minions inimigos podem te dar muito dano, então não tente matá-los sem ajuda." +
            "\n\n[Pressione espaço para continuar!]",
        cz: "To jsou tvoji pěšáci, líhnou se každých 20 vteřin krystalů!\n" +
            "Zabitím nepřátelského pěšáka získáte další zlato!\n" +
            "Použijte tyto pěšáky k poškození věže a zničení nepřátelského krystalu\n" +
            "Nepřátelští pěšáci ti mohou ublížit, tak si na ně také dej pozor!" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
    },

    [LOCALE.TRAINING_GOLD_RUNE]: {
        en: "At the top, you can find the Gold Rune! \n" +
            "Gold runes give you 50+ Gold as the game progresses!\n" +
            "First gold rune spawns at 00:00 in-game time!\n" +
            "\n\n[Press space to continue!]",
        ru: "Здесь Вы можете найти руну золота! \n" +
            "Руна золота даёт вам 50+ золота по ходу игры!\n" +
            "Первая руна золота появляется в 0:00 по времени матча!\n" +
            "\n\n[Нажмите пробел для продолжения!]",
        br: "No topo do mapa, você pode encontrar uma Runa amarela de Ouro! \n" +
            "Ela da 50+ ouro a você conforme o jogo avança!\n" +
            "A primeira runa de ouro surge às 00:00, hora do jogo!\n" +
            "\n\n[Pressione espaço para continuar!]",
        cz: "Nahoře najdete Zlatou runu! \n" +
            "Zlaté runy vám v průběhu hry dávají 50+ zlatých!\n" +
            "První zlatá runa se objeví 00:00 herniho casu!\n" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
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
        br: "Na parte inferior do mapa, há um altar com runas que contêm diferentes poderes. \n" +
            "Você pode encontrar 4 tipos diferentes de runas, elas reapacerem depois de um minuto depois de pegas.\n" +
            "Obtê-las pode ajudá-lo, mas sua duração é curta. A primeira runa de poder vai aparecer às 01:00.!\n" +
            "\n\n[Pressione espaço para continuar!]",
        cz: "Ve spodní části můžete najít Runy Moci! \n" +
            "Tady můžete najít 4 různé typy run.\n" +
            "První runa moci se objevi v 01:00, a další po každé minutě!\n" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
    },

    [LOCALE.TRAINING_BUSHES]: {
        en: "You can hide from your enemies inside the bush! \n" +
            "They wont see you here as you're hidden, so you can ambush your enemies from bushes!\n" +
            "Hidden won't mean your invincible. Enemies can still hit you inside bushes, so take precaution!" +
            "\n\n[Press space to continue!]",
        ru: "Вы можете прятаться от противников в кустах! \n" +
            "Они не увидят Вас там, поэтому Вы с лёгкостью можете устраивать засады!\n" +
            "Но вы не получаете неуязвимость, прячась в кустах. Враги всё ещё могут попасть по вам, даже если вы находитесь там, поэтому будьте осторожны!\n" +
            "\n\n[Нажмите пробел для продолжения!]",
        br: "Você pode se esconder de seus inimigos dentro de arbustos! \n" +
            "Você não pode ser visto por inimigos dentro de arbustos, então você pode fazer armadilhas!\n" +
            "Mas não significa que você fica invencível. Os inimigos ainda podem te atingir dentro de deles." +
            "\n\n[Pressione espaço para continuar!]",
        cz: "Můžeš se schovat před svými nepřáteli v keři! \n" +
            "Tady tě neuvidí, protože jsi schovaný, takže můžeš přepadnout své nepřátele ze zálohy!\n" +
            "Skrytý neznamená, že jste nepřemožitelní. Nepřátelé vás mohou stále zasáhnout uvnitř křoví, takže buďte opatrní!" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
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
            "Продажа предмета по истечению 5 секунд после покупки возвратит всего лишь 50% от изначальной стоимости!\n" +
            "Активные предметы можно использовать, нажав клавиши [1, 2, 3, 4], в соответствии с номером слота!\n" +
            "ЗАПОМНИТЕ! Вы можете покупать предметы только находясь на своей базе!" +
            "\n\n[Нажмите пробел для продолжения!]",
        br: "Use seu mouse para comprar itens, escolha seus itens com sabedoria!\n" +
            "Dependendo do item que escolher, poderá mudar sua forma de jogar.\n" +
            "Vender um item 5 segundos depois de comprá-lo, reembolsará apenas 50% do seu valor!\n" +
            "Vários itens (ativáveis) podem ser usados ​​com os números [1, 2, 3, 4] em seu teclado!\n" +
            "LEMBRE-SE! Você só pode comprar itens dentro da sua base!" +
            "\n\n[Pressione espaço para continuar!]",
        cz: "K nákupu předmětu použijte myš\n" +
            "Vybírejte své předměty moudře! Pokud jej nechcete, můžete kliknout pravým tlačítkem u myši a prodat.\n" +
            "Prodáte-li předmět 5 sekund po jeho zakoupení, vrátí se vam pouze 50 % jeho hodnoty!\n" +
            "S klávesovými zkratkami [1, 2, 3, 4] lze použít některé (Aktivovatelné) předměty!\n" +
            "PAMATUJTE! Nakupovat můžete pouze ve své základne!" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
    },

    [LOCALE.TRAINING_ABILITES]: {
        en: "At the bottom you can see your hero's abilites!\n" +
            "[J] [K] [L] are the keybinds for your attacks / abilities\n" +
            "[B] is Recall to teleport back to your base! It will take 5 seconds to finish the recall before you teleport.\n" +
            "You can hover your cursor over the abilities to see tooltips for more info!" +
            "\n\n[Press space to continue!]",
        ru: "Внизу Вы можете увидеть способности своего героя\n" +
            "[J] [K] [L] - горячие клавиши для использования\n" +
            "[B] - возвращение на базу! Возвращение занимает 5 секунд, прежде чем вы телепортируетесь.\n" +
            "Вы можете навести на любую из способностей, чтобы раскрыть её описание!" +
            "\n\n[Нажмите пробел для продолжения!]",
        br: "Na parte inferior, você pode ver as habilidades do seu personagem!\n" +
            "[J] [K] [L] são os atalhos de teclado para seus ataques / habilidades,\n" +
            "[B] é o Retorno, Você se teletransportar de volta para sua base! levará 5 segundos antes de você se teletransportar.\n" +
            "Você pode passar o cursor sobre as habilidades para ver dicas e obter mais informações!" +
            "\n\n[Pressione espaço para continuar!]",
        cz: "Ve spodní části okna vidíš schopnosti tvého hrdiny!\n" +
            "[J] [K] [L] jsou klávesy pro útoky / schopnosti\n" +
            "[B] je Odvolání pro teleportování zpět do vaši základny! Při použití bude trvat 5 vteřin, než se teleportujete.\n" +
            "Můžete najet kurzorem na schopnosti a zobrazit popisky pro více informací!" +
            "\n\n[Pokračujte stisknutím mezerníku!]",
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
        br: "Seu objetivo agora é derrotar o bot inimigo! (Kumihu) \n" +
            "Use as teclas A e D para mover para a ESQUERDA ou DIREITA;\n" +
            "Use W para PULAR e S para DESCER de uma plataforma;\n" +
            "Boa sorte e divirta-se!",
        cz: "Vaším cílem je nyní porazit nepřátelského bota! \n" +
            "K pohybu doleva nebo doprava použijte klávesy A a D\n" +
            "Pomocí klaves W skočíš a S sestoupíš z platformy\n" +
            "Hodně štěstí a bav se !",
    },

    [LOCALE.LOGOUT]: {
        en: "Logout",
        ru: "Выход",
        br: "Sair",
        cz: "Odhlásit se",
    },
    [LOCALE.FLOATING_NUMBERS]: {
        en: "Floating Numbers",
        ru: "Всплывающие числа",
        br: "Números Flutuantes",
        cz: "Plovoucí čísla",
    },
    [LOCALE.FULL_SCREEN]: {
        en: "Toggle full screen",
        ru: "Полноэкранный режим",
        br: "Tela cheia",
        cz: "Zapnout režim plné obrazovky",
    },
    [LOCALE.MOUSE_SUPPORT]: {
        en: "Mouse Support",
        ru: "Поддержка мыши",
        br: "Suporte para Mouse",
        cz: "Podpora Myši",
    },
    [LOCALE.GLOBAL_CHAT]: {
        en: "Global Chat",
        ru: "Глобальный чат",
        br: "Chat Global",
        cz: "Globální chat",
    },
    [LOCALE.HOME]: {
        en: "Home",
        ru: "Домой",
        br: "Inicio",
        cz: "Domů",
    },
    [LOCALE.PLAY]: {
        en: "Play",
        ru: "Играть",
        br: "Jogar",
        cz: "Hrát",
    },
    [LOCALE.LEADERBOARD]: {
        en: "Leaderboard",
        ru: "Таблица лидеров",
        br: "Placar",
        cz: "Žebříček",
    },
    [LOCALE.HEROES]: {
        en: "Heroes",
        ru: "Герои",
        br: "Personagens",
        cz: "Hrdinové",
    },
    [LOCALE.HERO]: {
        en: "Hero",
        ru: "Герой",
        br: "Personagem",
        cz: "Hrdina",
    },
    [LOCALE.WAITING_FOR_OPPONENTS]: {
        en: "Waiting for opponents",
        ru: "Ожидание оппонентов",
        br: "Esperando pelos oponentes",
        cz: "Čekání na soupeře",
    },
    [LOCALE.TIME_TO_BATTLE]: {
        en: "Time to battle",
        ru: "Времени до начала",
        br: "Tempo de escolha",
        cz: "Čas bojovat",
    },
    [LOCALE.RANDOM_PICK]: {
        en: "Random Pick",
        ru: "Случайный выбор",
        br: "Escolha aleatória",
        cz: "Náhodný Výběr",
    },
    [LOCALE.LOCKED_IN]: {
        en: "Locked In",
        ru: "Выбрано",
        br: "Escolhido",
        cz: "Vybráno",
    },
    [LOCALE.PICK_HERO]: {
        en: "Pick Hero",
        ru: "Выбрать героя",
        br: "Confirmar",
        cz: "Vyber Hrdinu",

    },
    [LOCALE.ONLINE_PLAYERS]: {
        en: "Online Players",
        ru: "Игроков онлайн",
        br: "Jogadores Online",
        cz: "Online hráči",

    },
    [LOCALE.RATING]: {
        en: "Rating",
        ru: "Рейтинг",
        br: "Pontos",
        cz: "Hodnocení",
    },
    [LOCALE.MMR]: {
        en: "MMR",
        ru: "MMR",
        br: "MMR",
        cz: "MMR",
    },
    [LOCALE.TOTAL_GAMES]: {
        en: "Total games",
        ru: "Всего игр",
        br: "Total de jogos",
        cz: "Celkově her",
    },
    [LOCALE.TOTAL_WINS]: {
        en: "Total wins",
        ru: "Всего побед",
        br: "Total de vitórias",
        cz: "Celkově výtězství",
    },
    [LOCALE.GAME_WINS]: {
        en: "Wins",
        ru: "Побед",
        br: "vitórias",
        cz: "Výtězství",
    },
    [LOCALE.GAME_LOSSES]: {
        en: "Losses",
        ru: "Поражений",
        br: "Derrotas",

        cz: "Prohry",
    },
    [LOCALE.RANK]: {
        en: "Rank",
        ru: "Ранг",
        br: "Rank",
        cz: "Hodnost",
    },
    [LOCALE.PLAYER]: {
        en: "Player",
        ru: "Игрок",
        br: "Jogador",
        cz: "Hráč",
    },
    [LOCALE.CHOOSE_HERO]: {
        en: "CHOOSE YOUR HERO",
        ru: "ВЫБЕРИТЕ ВАШЕГО ГЕРОЯ",
        br: "Escolha seu Personagem",
        cz: "VYBER HRDINU",
    },
    [LOCALE.TRAINING_MATCH]: {
        en: "Training Match (AI)",
        ru: "Тренировочный матч (ИИ)",
        br: "Partida de Tutorial (AI)",
        cz: "Tréninkový zápas (UI)",
    },
    [LOCALE.PRACTICE_MATCH]: {
        en: "Test hero",
        ru: "Тренировка",
        br: "Personagem de teste",
        cz: "Vyzkoušet hrdinu",
    },
    [LOCALE.PLAY_NOW]: {
        en: "Play now!",
        ru: "Сыграть сейчас!",
        br: "Jogar agora!",
        cz: "Hrát teď!",
    },
    [LOCALE.TIME]: {
        en: "Time",
        ru: "Время",
        br: "Tempo",
        cz: "Čas",
    },
    [LOCALE.TAG_MAGE]: {
        en: "MAGE",
        ru: "МАГ",
        br: "MAGO",
        cz: "MÁG",
    },
    [LOCALE.TAG_ASSASSIN]: {
        en: "ASSASSIN",
        ru: "УБИЙЦА",
        br: "ASSASSINO",
        cz: "ASSASSÍN",
    },
    [LOCALE.TAG_TANK]: {
        en: "TANK",
        ru: "ТАНК",
        br: "TANK",
        cz: "TANK",
    },
    [LOCALE.TAG_SUPPORT]: {
        en: "SUPPORT",
        ru: "ПОДДЕРЖКА",
        br: "SUPPORTE",
        cz: "SUPPORT",
    },
    [LOCALE.TAG_RANGE]: {
        en: "RANGED",
        ru: "ДАЛЬНИЙ БОЙ",
        br: "A DISTANCIA",
        fr: "À DISTANCE",
        cz: "NA DÁLKU",
    },

    /** POST SCENE */
    [LOCALE.POST_KDA]: {
        en: "K/D/A",
        ru: "У/С/С",
        br: "K/D/A",
        cz: "Z/U/A",    // Zabití/Úmrtí/Asistence
    },

    [LOCALE.POST_HERO_DAMAGE]: {
        en: "Hero Damage",
        ru: "Урон по героям",
        br: "Dano do Personagem",
        cz: "Poškození hrdinů",
    },

    [LOCALE.POST_TOWER_DAMAGE]: {
        en: "Tower Damage",
        ru: "Урон по башне",
        br: "Dano da Torre",
        cz: "Poškození vězí",
    },

    [LOCALE.POST_MINIONS_KILLED]: {
        en: "Last Hits",
        ru: "Миньонов убито",
        br: "Último Hit",
        cz: "Pěšáků zabito",
    },

    [LOCALE.POST_TOTAL_NETWORTH]: {
        en: "Total Networth",
        ru: "Всего золота",
        br: "Total de dano",
        cz: "Majetek",
    },

    [LOCALE.POST_LEAVE_GAME]: {
        en: "Leave Game",
        ru: "Покинуть игру",
        br: "Voltar ao inicio",
        cz: "Opustit Hru",
    },
    [LOCALE.POST_WIN_GAME]: {
        en: "You have Won!",
        ru: "Вы победили!",
        br: "Você ganhou essa partida!",
        cz: "Vyhrál jsi!",
    },
    [LOCALE.POST_LOSE_GAME]: {
        en: "You have Lost!",
        ru: "Вы проиграли!",
        br: "Você perdeu essa partida!",
        cz: "Prohrál jsi!",
    },

    /** Chat */
    [LOCALE.CHAT_ALL]: {
        en: "ALL",
        ru: "ВСЕМ",
        br: "Todos",
        cz: "VŠE",
    },
    [LOCALE.CHAT_ALLIES]: {
        en: "ALLIES",
        ru: "СОЮЗНИКАМ",
        br: "Grupo",
        cz: "SPOJENCI",
    },
    [LOCALE.CHAT_GAMEMASTER]: {
        en: "GAMEMASTER",
        ru: "ИГРОВОЙ МАСТЕР",
        br: "Administrador",
        cz: "GAMEMASTER",
    },

    /** Popups */
    [LOCALE.POPUP_SELECT_SEND]: {
        en: "Send",
        ru: "Отправить",
        br: "Mandar",
        cz: "Odeslat",
    },
    [LOCALE.POPUP_SELECT_ACCEPT]: {
        en: "Accept",
        ru: "Принять",
        br: "Aceitar",
        cz: "Příjmout",
    },
    [LOCALE.POPUP_SELECT_REJECT]: {
        en: "Reject",
        ru: "Отклонить",
        br: "Recusar",
        cz: "Zámítnout",
    },
    [LOCALE.POPUP_SELECT_CLOSE]: {
        en: "Close",
        ru: "Закрыть",
        br: "Fechar",
        cz: "Zavřít",
    },
    [LOCALE.POPUP_SELECT_NAME_TITLE]: {
        en: "Select your name! Be careful, name change is not free.",
        ru: "Выберите ваше имя! Будьте осторожны, изменение имени не бесплатно.",
        br: "Escolha seu nome! Você pode mudar depois mas a mudança não será gratuita.",
        cz: "Vyberte si svou prezdivku. Pozor, změna jména není zadarmo!",
    },
    [LOCALE.POPUP_SELECT_MESS_GUESTMODE]: {
        en: "You have limited access to game! Your stats lost when you exit browser...<br /> Connect your <b style='color: red'>account</b> to access all features.",
        ru: "У вас ограниченный доступ к игре! Ваша статистика будет утеряна, если вы закроете браузер...<br /> Подключите ваш <b style='color: red'>аккаунт</b> для получения доступа ко всем функциям.",
        br: "Você tem acesso limitado ao jogo! Suas estatísticas são perdidas quando você sai do navegador...<br /> Conecte-se a sua <b style='color: red'>Conta</b> para acessar todos os recursos",

        cz: "Máte omezený přístup ke hře! Vaš pokrok bude ztracen až ukončíte prohlížeč...<br /> Připojte svůj <b style='color: red'>účet</b> a získejte přístup ke všem funkcím.",
    },
    [LOCALE.POPUP_SELECT_NAME_GUESTMODE]: {
        en: "GUEST MODE!",
        ru: "РЕЖИМ ГОСТЯ!",
        br: "MODO CONVIDADO!",
        cz: "JSTE V REŽIME GUEST!",
    },
    [LOCALE.POPUP_SELECT_GUESTMODE_OPT]: {
        en: "Connect GMAIL Account",
        ru: "Подключить аккаунт G-Mail",
        br: "Conectar conta GMAIL",
        cz: "Připojit účet GMAIL",
    },
    [LOCALE.POPUP_BATTLE_END]: {
        en: "Battle ended",
        ru: "Битва окончена",
        br: "Jogo encerrado",
        cz: "Bitva je ukonce",
    },
    [LOCALE.POPUP_BATTLE_FOUND]: {
        en: "Battle found !",
        ru: "Найдена битва!",
        br: "Jogo encontrado",
        cz: "Nalezena bitva!",
    },
    [LOCALE.POPUP_BATTLE_FOUND_MESS]: {
        en: "Time remaining",
        ru: "Времени осталось",
        br: "Tempo restante",
        cz: "Zbýva času",
    },
    [LOCALE.POPUP_BATTLE_WAITING]: {
        en: "Waiting for players...",
        ru: "Ожидание игроков...",
        br: "Esperando por jogadores ...",
        cz: "Čekání na hráče...",
    },
    [LOCALE.POPUP_BATTLE_LEFT]: {
        en: "Someone left...",
        ru: "Кто-то вышел...",
        br: "Alguém saiu ...",
        cz: "Někdo opustil hru...",
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING]: {
        en: "For the first time you must pass throu training otherwise you can not play against players!",
        ru: "Зайдя впервые, вам нужно пройти обучение, иначе вы не сможете играть против других игроков!",
        br: "Como é sua primeira vez, você deve passar pelo treinamento, caso contrário você não poderá jogar contra outros jogadores!",

        cz: "Nejprve musíš projít tréninkem než budeš moct hrát proti hráčům!",
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING_START]: {
        en: "Get me into a tutorial!",
        ru: "Начать обучение!",
        br: "Iniciar Tutorial",
        cz: "Dostaň mě do tutoriálu!",
    },
    [LOCALE.POPUP_SELECT_FAILED_QUEUE]: {
        en: "Failed to queue, try again!",
        ru: "Произошла ошибка во время попытки встать в очередь, попробуйте снова!",
        br: "Falha ao entrar na fila, tente novamente!",
        cz: "Nepodařilo se zařadit do fronty, zkuste to znovu!",
    },
    [LOCALE.POPUP_SELECT_BANNED_QUEUE]: {
        en: "You are banned from queue for rejecting matches! try in ",
        ru: "Ваша возможность стать в очередь заблокирована, так как вы отклоняли слишком много матчей! Попробуйте снова через ",
        br: "Você foi banido da fila por rejeitar varias partidas! tente novamente mais tarde.",
        cz: "Máte zákaz vstupu do fronty za odmítnutí zápasů! Zkuste to za",
    },

    [LOCALE.AN_GOT_A]: {
        en: "got a ",
        ru: "получил ",
        cz: "dostal ",
    },
    [LOCALE.AN_IS_ON]: {
        en: "is on ",
        ru: " ",
        cz: "má ",
    },

    [LOCALE.AN_FIRST_BLOOD]: {
        en: "First blood",
        ru: "Первую кровь",
        cz: "První zabití",
    },

    [LOCALE.AN_DOUBLE_KILL]: {
        en: "Double kill",
        ru: "Даблкилл",
        cz: "Dvojité zabití",
    },
    [LOCALE.AN_TRIPLE_KILL]: {
        en: "TRIPLE KILL",
        ru: "ТРИПЛКИЛЛ",
        cz: "TROJITÝ ZÁSAH",
    },

    [LOCALE.AN_KILLING_SPREE]: {
        en: "Killing spree",
        ru: "получает серию убийств",
        cz: "Zabíjející řádění",
    },
    [LOCALE.AN_MEGA_KILL]: {
        en: "Mega kill",
        ru: "совершает мега-убийство",
        cz: "Mega zabít",
    },
    [LOCALE.AN_DOMINATING]: {
        en: "Dominating",
        ru: "доминирует",
        cz: "Dominujicí",
    },
    [LOCALE.AN_RAMPAGE]: {
        en: "Rampage",
        ru: "в ярости",
        cz: "Krveprolití",
    },
    [LOCALE.AN_OWNAGE]: {
        en: "OWNAGE!",
        ru: "ПРЕВОСХОДЕН!",
        cz: "OWNI!",
    },
    [LOCALE.AN_GODLIKE]: {
        en: "GODLIKE!",
        ru: "БОГОПОДОБЕН!",
        cz: "BOŽSKÝ!",
    },
    /** Runes */
    [LOCALE.HASTE_RUNE]: {
        en: "Haste Rune",
        ru: "Руна спешки",
        cz: "Runa rýchlosti"
    },
    [LOCALE.DAMAGE_RUNE]: {
        en: "Damage Rune",
        ru: "Руна урона",
        cz: "Runa poškození"
    },
    [LOCALE.ARCANE_RUNE]: {
        en: "Arcane Rune",
        ru: "Руна магии",
        cz: "Runa kouzel",
    },
    [LOCALE.HEALING_RUNE]: {
        en: "Healing Rune",
        ru: "Руна исцеления",
        cz: "Runa zdraví",
    },
    [LOCALE.BOUNTY_RUNE]: {
        en: "Bounty Rune",
        ru: "Руна золота",
        cz: "Runa zlata",
    },
    /** Stats */
    [LOCALE.ABILITY_POWER]: {
        en: "Ability Power",
        ru: "Сила умений",
        cz: "Síla kouzel"
    },
    [LOCALE.DAMAGE]: {
        en: "Damage",
        ru: "Урон",
        cz: "Zraněni"
    },
    [LOCALE.ATTACK_SPEED]: {
        en: "Attack Speed",
        ru: "Скорость атаки",
        cz: "Rýchlost útoku"
    },
    [LOCALE.CRITICAL_CHANCE]: {
        en: "Critical Chance",
        ru: "Шанс крита",
        cz: "Kritický zásah",
    },
    [LOCALE.COOLDOWN_REDUCTION]: {
        en: "Cooldown Reduction",
        ru: "Сокращение перезарядки",
        cz: "Redukce cooldownu",
    },
    [LOCALE.LIFESTEAL]: {
        en: "Lifesteal",
        ru: "Кража здоровья",
    },
    [LOCALE.MAGICAL_DEFENSE]: {
        en: "Magical Defense",
        ru: "Защита от магии",
        cz: "Magické brnění",
    },
    [LOCALE.ARMOR]: {
        en: "Armor",
        ru: "Броня",
        cz: "Brnění",
    },
    [LOCALE.HEALTH]: {
        en: "Health",
        ru: "Здоровье",
        cz: "Zdraví",
    },
    [LOCALE.HEALTH_REGEN]: {
        en: "Health Regen",
        ru: "Регенерация здоровья",
        cz: "Regenerace zdraví",
    },
    [LOCALE.MOVE_SPEED]: {
        en: "Movement Speed",
        ru: "Скорость передвижения",
        cz: "Rychlost pohybu",
    },
    [LOCALE.CONSUMABLE]: {
        en: "Consumable",
        ru: "Расходуемое",
        cz: "Spotrební",
    },

    [LOCALE.PICKUP]: {
        en: "pickup",
        ru: "подобрал",
        cz: "vzal",
        br: "pegou",
    },
    [LOCALE.POPUP_DISCONNECTED]: {
        en: "You've been disconected from the server, please refresh the page!",
        ru: "Потеряно соединение с сервером. Пожалуйста, обновите to перезагрузите!",
        cz: "Nebylo možné navázat spojení s hrou. Refreshnite webovu stránku.",
    },
    [LOCALE.POPUP_REFRESH]: {
        en: "refresh",
        ru: "обновит",
        cz: "refresh",
    },
    [LOCALE.YES]: {
        en: "yes",
        ru: "да",
        cz: "áno",
    },
    [LOCALE.NO]: {
        en: "no",
        ru: "нет",
        cz: "nie",
    },
    [LOCALE.POPUP_LOGOUT_TITLE]: {
        en: "Are you sure?",
        ru: "Уверены ли вы?",
        cz: "Jste si jisti?",
    },
    [LOCALE.MSAA]: {
        en: "Anti-aliasing",
        cz: "Vyhlazovaní",
        ru: "сглаживание",
    }
}
export default locale_data;

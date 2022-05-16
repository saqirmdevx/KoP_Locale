//@ts-ignore
import { calculateMagicDefense } from "@/misc/constant";
//@ts-ignore
import { toSec } from "@/misc/misc";
//@ts-ignore
import Shared, { fixed, ItemAbilityData } from "@/misc/shared";
//@ts-ignore
import { LANG } from "@/lang/lang";

const _getLocaleItemDescription = (itemId: number): { name: { [key in string]: string }, desc?: { [key in string]: string } } => {
    switch (itemId) {
        case Shared.ItemList.Wooden_Sword:
            return {
                name: {
                    en: "Wooden Sword",
                    ru: "Деревянный меч",
                    br: "Espada de Madeira",
                    cz: "Dřevěný Meč",
                    fr: "Épée en bois",
                    zh: "木劍",
                },
            }
        case Shared.ItemList.Wooden_Bow:
            return {
                name: {
                    en: "Wooden Bow",
                    ru: "Деревянный лук",
                    br: "Arco das Fadas",
                    cz: "Dřevěný Luk",
                    fr: "Arc en bois",
                    zh: "木弓",
                },
            }
        case Shared.ItemList.Novice_Staff:
            return {
                name: {
                    en: "Novice Staff",
                    ru: "Посох новичка",
                    br: "Graveto Mágico",
                    cz: "Učňova Hůl",
                    fr: "Bâton de novice",
                    zh: "木杖",
                },
            }
        case Shared.ItemList.Iron_Ring:
            return {
                name: {
                    en: "Iron Ring",
                    ru: "Железное кольцо",
                    br: "Anel olho da Floresta",
                    cz: "Železný Prsten",
                    fr: "Anneau de fer",
                    zh: "鐵環",
                },
            }
        case Shared.ItemList.Buckler:
            return {
                name: {
                    en: "Buckler",
                    ru: "Баклер",
                    br: "Escudo joia Fluorita",
                    cz: "Pukléř",
                    fr: "Bouclier",
                    zh: "盾牌",
                },
            }
        case Shared.ItemList.Shirt:
            return {
                name: {
                    en: "Shirt",
                    ru: "Рубаха",
                    br: "Armadura dos Caídos",
                    cz: "Svetr",
                    fr: "Chemise",
                    zh: "襯衫",
                },
            }
        case Shared.ItemList.Light_Slayer:
            return {
                name: {
                    en: "Light Slayer",
                    ru: "Губитель света",
                    br: "Espada Corta luz",
                    cz: "Kosič Světla",
                    fr: "Tueur de Lumière",
                    zh: "輕量殺手",
                },
            }
        case Shared.ItemList.Katana:
            return {
                name: {
                    en: "Katana",
                    ru: "Катана",
                    br: "Katana",
                    cz: "Katana",
                    fr: "Katana",
                    zh: "武士刀",
                },
            }
        case Shared.ItemList.Corrupted_Katana:
            return {
                name: {
                    en: "Corrupted Katana",
                    ru: "Искажённая катана",
                    br: "Katana Corrompida",
                    cz: "Zvrácená Katana",
                    fr: "Katana corrompu",
                    zh: "腐化的武士刀",
                },
            }
        case Shared.ItemList.Iron_Sword:
            return {
                name: {
                    en: "Iron Sword",
                    ru: "Железный меч",
                    br: "Espada dos Guerreiros de ferro",
                    cz: "Ocelový Meč",
                    fr: "Épée de fer",
                    zh: "鐵劍",
                },
            }
        case Shared.ItemList.Reckless_Longbow:
            return {
                name: {
                    en: "Reckless Longbow",
                    ru: "Безрассудный длинный лук",
                    br: "Besta dos Corajosos",
                    cz: "Hazardní Dlouhý Luk",
                    fr: "Arc long téméraire",
                    zh: "魯莽長弓",
                },
            }
        case Shared.ItemList.Rapids_Longbow:
            return {
                name: {
                    en: "Rapid Longbow",
                    ru: "Быстрый длинный лук",
                    br: "Besta da Velocidade",
                    cz: "Radpidní Dlouhý Luk",
                    fr: "Arc long rapide",
                    zh: "疾風長弓",
                },
            }
        case Shared.ItemList.Enduring_Shield:
            return {
                name: {
                    en: "Enduring Shield",
                    ru: "Стойкий щит",
                    br: "Escudo Real",
                    cz: "Odolný Štít",
                    fr: "Bouclier endurant",
                    zh: "耐久護盾",
                },
            }
        case Shared.ItemList.Iron_Buckler:
            return {
                name: {
                    en: "Iron Buckler",
                    ru: "Железный баклер",
                    br: "Escudo dos Guerreiros de ferro",
                    cz: "Železný Pukléř",
                    fr: "Bouclier de fer",
                    zh: "鐵圓盾",
                },
            }
        case Shared.ItemList.Magical_Shield:
            return {
                name: {
                    en: "Magical Shield",
                    ru: "Магический щит",
                    br: "Escudo Encantado",
                    cz: "Magický Štít",
                    fr: "Bouclier magique",
                    zh: "魔法護盾",
                },
            }
        case Shared.ItemList.Rod_Of_Nature:
            return {
                name: {
                    en: "Rod of Nature",
                    ru: "Жезл природы",
                    br: "Cajado das Fadas",
                    cz: "Prut Přírody",
                    fr: "Baguette naturelle",
                    zh: "大自然法棒",
                },
            }
        case Shared.ItemList.Wizard_Staff:
            return {
                name: {
                    en: "Wizard Staff",
                    ru: "Посох волшебника",
                    br: "Cajado do mago esquecido",
                    cz: "Hůl Kouzelníka",
                    fr: "Bâton du magicien",
                    zh: "巫師法棍",
                },
            }
        case Shared.ItemList.Ring_Of_Regeneration:
            return {
                name: {
                    en: "Ring of Regeneration",
                    ru: "Кольцо регенерации",
                    br: "Anel da Regeneração",
                    cz: "Prsten Regenerace",
                    fr: "Anneau de régénération",
                    zh: "再生手環",
                },
            }
        case Shared.ItemList.Ring_Of_Time:
            return {
                name: {
                    en: "Ring of Time",
                    ru: "Кольцо времени",
                    br: "Anel do Tempo",
                    cz: "Prsten Času",
                    fr: "Anneau du Temps",
                    zh: "時間手環",
                },
            }
        case Shared.ItemList.Leather_Armor:
            return {
                name: {
                    en: "Leather Armor",
                    ru: "Кожанная броня",
                    br: "Armadura de Aprendiz",
                    cz: "Kožená Zbroj",
                    fr: "Armure de cuir",
                    zh: "皮革裝甲",
                },
            }
        case Shared.ItemList.Iron_Armor:
            return {
                name: {
                    en: "Iron Armor",
                    ru: "Железная броня",
                    br: "Armadura dos Guerreiros de ferro",
                    cz: "Železná Zbroj",
                    fr: "Armure de fer",
                    zh: "鐵裝甲",
                },
            }
        case Shared.ItemList.Plate_Armor:
            return {
                name: {
                    en: "Plate Armor",
                    ru: "Латная броня",
                    br: "Armadura de Placas reforçadas",
                    cz: "Plátová Zbroj",
                    fr: "Armure à plaques",
                    zh: "金屬裝甲",
                },
                desc: {
                    en: `UNIQUE: Every time you kill minion (+1 stacks), enemy hero (+5 stacks) or you get assist (+2 stacks) you gain ${ItemAbilityData.PLATE_ARMOR_STACK_HP} max health (max ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS}). All stacks are lost upon death.`,
                    br: `[Único]: Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos) você ganha ${ItemAbilityData.PLATE_ARMOR_STACK_HP} máximo de vida (máximo ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                    ru: `УНИКАЛЬНО(Пассивно): Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает максимальное здоровье на ${ItemAbilityData.PLATE_ARMOR_STACK_HP} (Максимум зарядов: ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS}). Все заряды теряются после смерти.`,
                    zh: `特殊：每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${ItemAbilityData.PLATE_ARMOR_STACK_HP}最大生命值 (最大值 ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS})。所有疊加在死亡後歸零。`,
                }
            }
        case Shared.ItemList.Wizard_Shoes:
            return {
                name: {
                    en: "Wizard Shoes",
                    ru: "Башмаки волшебника",
                    br: "Sapatos do Mago esquecido",
                    cz: "Boty Kouzelníka",
                    fr: "Chaussures du magicien",
                    zh: "巫師魔鞋",
                },
            }
        case Shared.ItemList.Agility_Boots:
            return {
                name: {
                    en: "Agility Boots",
                    ru: "Ботинки ловкости",
                    br: "Botas de Velocidade",
                    cz: "Boty Obratnosti",
                    fr: "Bottes d'agilité",
                    zh: "敏捷之靴",
                },
            }
        case Shared.ItemList.Boots:
            return {
                name: {
                    en: "Boots",
                    ru: "Ботинки",
                    br: "Botas de Couro",
                    cz: "Boty",
                    fr: "Bottes",
                    zh: "靴子",
                },
            }
        case Shared.ItemList.Divine_Boots:
            return {
                name: {
                    en: "Divine Boots",
                    ru: "Божественные ботинки",
                    br: "Botas dos Guerreiros de ferro",
                    cz: "Svaté Sandále",
                    fr: "Bottes divines",
                    zh: "神聖之靴",
                },
            }
        case Shared.ItemList.Traveling_Boots:
            return {
                name: {
                    en: "Swift Boots",
                    ru: "Ботинки стремительности",
                    br: "Botas das Fadas",
                    cz: "Cestovní Obuv",
                    fr: "Bottes de vitesse",
                    zh: "神速之靴",
                },
            }
        case Shared.ItemList.Shadow_Slayer:
            return {
                name: {
                    en: "Shadow Slayer",
                    ru: "Губитель теней",
                    br: "Espada Consome luz",
                    cz: "Stínovrah",
                    fr: "Tueur d'Ombre",
                    zh: "闇影殺手",
                },
                desc: {
                    en: `UNIQUE: Your normal attack deals additional magic damage ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% of enemy max health`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят дополнительный магический урон по героям, который равен ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% от макс. здоровья цели`,
                    br: `[Único]: Seus ataques causam dano mágico adicional ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% de vida máxima do inimigo.`,
                    cz: `JEDINEČNÉ: Tvůj útok způsobí bonusové poškození o velikosti ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)} % protivníkova maximálního zdravý. `,
                    fr: `[UNIQUE]: Ton attaque J fait des dommages magiques additionnels de ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% des points de vie de l'enemie`,
                    zh: `特殊：你的一般攻擊對敵方造成血量最大值 ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% 的額外魔法傷害`,
                }
            }

        case Shared.ItemList.Divine_Sword:
            return {
                name: {
                    en: "Divine Sword",
                    ru: "Божественный меч",
                    br: "Espada Divina",
                    cz: "Božský meč",
                    zh: "聖劍",
                },
                desc: {
                    en: `[ACTIVE]: Divine Shield - Makes you immune to all effects for ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)} and reduce your attack damage by 50%. ${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)} cooldown`,
                    br: `[Ativo]: Escudo Divino - Torna você imune a todos os efeitos por${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)} e reduza seu dano de ataque em 50%. \n [Tempo de recarga: ${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)} seg.]`,
                    ru: `УНИКАЛЬНО(Активно): Вы становитесь неуязвимы к входящему урону и эффектам контроля на ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)}, а также ваша сила атаки становится равна 50%. При этом, вы не лишаетесь возможности атаковать, использовать способности или предметы. (Перезарядка: ${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)} сек.)`,
                    zh: `主動技：神聖護盾 - 使你 ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)}無視所有效果並將你受到的攻擊傷害降至為 50%。${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)}冷卻時間`,
                },
            }
        case Shared.ItemList.Divine_Katana:
            return {
                name: {
                    en: "Divine Katana",
                    ru: "Божественная катана",
                    br: "Katana Divina",
                    fr: "Katana divin",
                    zh: "神聖武士刀",
                },
                desc: {
                    // Require update
                    ru: `УНИКАЛЬНО(Активно): Вы бросаете фрагмент катаны перед собой, который при приземлении замедляет и накладывает немоту на всех ближайших вражеских героев в течение ${toSec(ItemAbilityData.DIVINE_KATANA_DURATION / 1000)} сек., а также раскрывает все невидимые цели вокруг себя в течение этого времени. (Перезарядка: ${(ItemAbilityData.DIVINE_KATANA_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    en: `[ACTIVE]: Throws a fragment of katana next to you, upon impact provide unobstructed vision, silence and slow all enemy heroes in distance. In addition it will reveal all invisible units in area. (${toSec(ItemAbilityData.DIVINE_KATANA_DURATION)} sec duration of fragment). (Cooldown: ${toSec(ItemAbilityData.DIVINE_KATANA_COOLDOWN)})`,
                    br: `[Ativo]: Joga a katana divina perto de você, no momento do impacto fornece visão desobstruída, silencia e desacelera todos os heróis inimigos na área. Além disso, revelará todas as unidades invisíveis na área. \n (${toSec(ItemAbilityData.DIVINE_KATANA_DURATION)} seg de duração da katana no chão).\n [Tempo de recarga: ${toSec(ItemAbilityData.DIVINE_KATANA_COOLDOWN)} seg.]`,
                    zh: `主動技：在你前方投擲片段武士刀，提供寬廣視野，沉默且減速在範圍內的敵方英雄。此外能揭發隱蔽單位 (${toSec(ItemAbilityData.DIVINE_KATANA_DURATION)}秒間斷性時長)。(冷卻時間：${toSec(ItemAbilityData.DIVINE_KATANA_COOLDOWN)})`,
                }
            }
        case Shared.ItemList.Iron_Basher:
            return {
                name: {
                    en: "Spiked Mace",
                    ru: "Шипастая булава",
                    br: "Maçã Cravada",
                    zh: "尖刺錘",
                },
                desc: {
                    en: `UNIQUE: Your normal attacks deal additional ${ItemAbilityData.SPIKED_MACE_DAMAGE} normal damage and apply griveous wound for ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)}. (Griveous wound reduces target's all healing and regeneration effects by 65%).`,
                    br: `[Único]: Seus ataques normais causam dano adicional ${ItemAbilityData.SPIKED_MACE_DAMAGE} dano normal e aplica um ferimento grave por ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)}.\n (Ferimento grave reduz todos os efeitos de cura e regeneração do alvo em 65%).`,
                    ru: `УНИКАЛЬНО (Пассивно): Ваши атаки наносят дополнительно ${ItemAbilityData.SPIKED_MACE_DAMAGE} физического урона и накладывают на цель эффект Страшных ран на ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)} сек. (Страшные раны уменьшают всё входящее исцеление и эффекты регенерации на 65%).`,
                    zh: `特殊：你的一般攻擊給予額外 ${ItemAbilityData.SPIKED_MACE_DAMAGE}點一般傷害並給予 ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)}創傷。(創傷降低目標物的所有治癒即回血效果 65%)。`,
                }
            }

        case Shared.ItemList.Cold_Sword:
            return {
                name: {
                    en: "Cold Sword",
                    ru: "Меч холода",
                    br: "Espada do Imperador Congelado",
                    fr: `Épée gelée`,
                    zh: "寒冰之劍",
                },
                desc: {
                    en: `UNIQUE: Your normal attacks lower enemy movement speed by ${ItemAbilityData.COLD_SWORD_SLOW} for 1 second`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают скорость передвижения цели на ${ItemAbilityData.COLD_SWORD_SLOW} на 1 сек.`,
                    br: `[Único]: Seus ataques reduzem o movimento do inimigo em ${ItemAbilityData.COLD_SWORD_SLOW} por 1 segundo.`,
                    cz: `JEDINEČNÉ: Útoky zpomalují nepřátele o ${ItemAbilityData.COLD_SWORD_SLOW} za vteřinu`,
                    fr: `[UNIQUE]: Tes attaques J réduisent la vitesse de déplacement de ton ennemie de ${ItemAbilityData.COLD_SWORD_SLOW} points de vitesse pendant 1 seconde`,
                    zh: `特殊：你的一般攻擊降低敵方 1秒移動速度值 ${ItemAbilityData.COLD_SWORD_SLOW}`,
                }
            }

        case Shared.ItemList.Demon_Sabre:
            return {
                name: {
                    en: "Demon Sabre",
                    ru: "Сабля демона",
                    br: "Sabre Demoníaco",
                    fr: `Sabre du démon`,
                    zh: "惡魔軍刀",
                },
                desc: {
                    en: `UNIQUE: Your normal attacks lower enemy armor by ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} for 4 seconds 
                        <br />
                        UNIQUE: Every time you kill minion (+1 stacks), enemy hero (+5 stacks) or you get assist (+2 stacks) you gain ${ItemAbilityData.DEMON_SABRE_STACK_DMG} damage (max ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS}). All stacks are lost upon death.`,
                    br: `[Único]: Seus ataques normais diminuem a armadura inimiga em ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} por 4 segundos.
                        <br />
                        [Único]: Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${ItemAbilityData.DEMON_SABRE_STACK_DMG} de dano (máximo ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую броню на ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} на 4 сек. 
                        <br />
                        УНИКАЛЬНО(Пассивно): Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает силу атаки на ${ItemAbilityData.DEMON_SABRE_STACK_DMG} (Максимум зарядов: ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS}). Все заряды теряются после смерти.`,
                    cz: `JEDINEČNÉ: Tvé útoky snižují zbroj o ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} na 4 vteřiny
                        <br />
                        JEDINEČNÉ: Pokud zabiješ nepřátelského miniona, hrdinu (+5) nebo assistujes (+2) dostaneš ${ItemAbilityData.DEMON_SABRE_STACK_DMG} zraneni permanentne, (max ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS}). Efekt sa zresetuje po smrti.`,
                    zh: `特殊：你的一般攻擊降低 4秒敵方裝甲值 ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION},
                        <br />
                        特殊：每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${ItemAbilityData.DEMON_SABRE_STACK_DMG}點攻擊傷害 (最大值 ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS})。所有疊加在死亡後歸零。`
                    // Need Update others
                    //     br: `[Único]: Seus ataques reduzem ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} da armadura inimiga por 4 segundos.`,
                    //     fr: `[UNIQUE]: Tes attaques J diminuent l'armure de l'ennemie de ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} pour 4 secondes`,
                }
            }
        case Shared.ItemList.Corrupted_Light_Slayer:
            return {
                name: {
                    en: "Corrupted Light Slayer",
                    ru: "Искажённый губитель света",
                    br: "Corta Luz corrompido",
                    fr: `Tueur de Lumière Corrompu`,
                    zh: "腐化的輕量殺手",
                },
                desc: {
                    en: `Active: Increases your lifesteal by ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% for ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Увеличивает ваш вампиризм на ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% на ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Aumenta sua regeneração de vida em ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% por ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} seg.]`,
                    cz: `AKTIVNÍ: Zvýší tvojí krádež zdravý o ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% na ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} vteřin`,
                    fr: `[ACTIVATION]: Augmente ton vol de vie de ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% pour ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération : ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} sec]`,
                    zh: `主動技：增加 ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)}秒你的吸血值 ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }
        /** Wooden Bow */
        case Shared.ItemList.Berserker_Bow:
            return {
                name: {
                    en: "Berserker Bow",
                    ru: "Лук берсерка",
                    br: "Besta Incontrolável",
                    fr: `Arc du Berserker`,
                    zh: "狂戰士之弓",
                },
                desc: {
                    en: `UNIQUE: Every time your normal attacks hit enemy hero, increases your attack speed by ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% for ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec. At 5th stack it heals you for 15% of max health and reset stacks`,
                    ru: `УНИКАЛЬНО(Пассивно): Попадая атаками по врагу, вы увеличиваете свою скорость атаки на ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% на ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} сек. Складывается до 5 раз. На 5 зарядах вы исцеляетесь на 15% от макс. здоровья и обнуляете количество зарядов`,
                    br: `[Único]: Cada vez que você atinge o personagem inimigo, aumenta sua velocidade de ataque em ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% por ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seg.\n No 5° acúmulo, ele cura você em 15% de vida máxima e reseta os acúmulos.`,
                    cz: `JEDINEČNÉ: Pokaždé když zasáhneš protivnika tak si zvýšís rychlost útoků o ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% na ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} vteřin. Při pátém útoku vás vyléčí o 15% maximálního zdravý a resetuje efekt`,
                    fr: `[UNIQUE]: Chaque attaque J réussie augmente ta vitesse d'attaque de ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% pour ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec. \n Lorsque tu atteins la 5e charge, tu es soigné pour 15% du maximum de tes points de vie et les charges sont remises à zéro.`,
                    zh: `特殊：每當你的一般攻擊擊中敵方英雄，增加 ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)}秒你的攻擊速度 ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}%。在第五次疊加時恢復你最大值 15%的血量並重置疊加`,
                }
            }
        case Shared.ItemList.Magical_Bow:
            return {
                name: {
                    en: "Magical Bow",
                    ru: "Волшебный лук",
                    br: "Arco das Almas perdidas",
                    fr: "Arc magique",
                    zh: "魔法之弓",
                },
                desc: {
                    en: "UNIQUE: Sucessful hit enemy hero with your magical attacks increases your movement speed by 10 for 1.5 sec <br /> <br />" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    ru: "УНИКАЛЬНО(Пассивно): Успешное попадание способностями увеличивает вашу скорость передвижения на 10 на 1.5 сек. <br /> <br />" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    br: "[Único]: Um golpe bem-sucedido com suas habilidades, aumenta sua velocidade de movimento em 10 por 1.5 seg. <br /> <br />" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    cz: "JEDINEČNÉ: Úspěšný zásah tvé schopnosti zvýší tvou rychlost o 10 na 1.5 vteřin <br /> <br />" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    fr: "[UNIQUE]: Chaque compétence K ou L réussie augmente ta vitesse de déplacement de 10 points de déplacement pour 1.5 sec. <br /> <br />" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    zh: "特殊：你的魔法攻擊成功擊中敵方英雄時，增加 1.5秒你的移動速度值 10 <br /> <br />" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                }
            }
        case Shared.ItemList.Poison_Bow:
            return {
                name: {
                    en: "Poison Bow",
                    ru: "Ядовитый лук",
                    br: "Arco de Veneno concentrado",
                    fr: "Arc empoisonné",
                    zh: "劇毒之弓",
                },
                desc: { en: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1) }
            }

        case Shared.ItemList.Corrupted_Longbow:
            return {
                name: {
                    en: "Corrupted Longbow",
                    ru: "Искажённый длинный лук",
                    br: "Arco Corrompido",
                    fr: "Arc long corrompu",
                    zh: "腐化的長弓",
                },
                desc: {
                    en: `Active: Empowers you and increases your attack speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% and movement speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} for ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.<br />` +
                        `Side effect of empower is lowered armor for ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} and ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}% magic resistance - ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} cooldown`
                        + "<br /> <br /><b class='ability-d'>" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    ru: `УНИКАЛЬНО(Активно): Увеличивает вашу скорость атаки на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% и скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} сек.<br />` +
                        `Во время этого эффекта ваша броня уменьшена на ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} и сопротивление магии на ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} сек.)`
                        + "<br /> <br /><b class='ability-d'>" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    br: `[Ativo]: Faz com que você aumente sua velocidade de ataque em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% e velocidade de movimento por ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} por ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} seg.<br />` +
                        `[Maldição]: O efeito colateral de usar esse item é reduzir sua armadura em ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} e ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}% da sua resistência mágica.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} seg.]`
                        + "<br /> <br /><b class='ability-d'>" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    fr: `[ACTIVATION]: Gain de puissance. Ta vitesse d'attaque est augmentée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% et ta vitesse de déplacement est améliorée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} pour ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.<br />` +  
                        `[MALÉDICTION]: Diminution de ton armure de ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} et de ta résistance magique de ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%. \n [Délai de récupération : ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} sec.]`
                        + "<br /> <br /><b class='ability-d'>" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                    zh: `主動技：賦予你增加 ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)}秒你的攻擊速度 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}%與移動速度值 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}。<br />` +
                        `副作用：賦予你降低裝甲值 ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR}與 ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%魔法抗性 - ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`
                        + "<br /> <br /><b class='ability-d'>" + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                }
            }
        case Shared.ItemList.Rapids_Longbow_T2:
            return {
                name: {
                    en: "Rapid Longbow",
                    ru: "Быстрый длинный лук",
                    br: "Besta da Velocidade encantada",
                    fr: "Arc long rapide",
                    zh: "疾風長弓",
                },
                desc: {
                    en: `UNIQUE - Active: Consume the item and gains permanent ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% attack speed bonus!`,
                    ru: `УНИКАЛЬНО(Активно): Вы поглощаете этот предмет, получая ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% скорости атаки навсегда!`,
                    br: `[Único]: Quando ativado, Consumirá o item ganhando permanente ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% de bônus de velocidade de ataque!`,
                    fr: `[ACTIVATION]: Consume l'objet en libérant un espace d'inventaire et en gagnant de façon permanente ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% de vitesse d'attaque !`,
                    zh: `特殊 - 主動：消耗物品以永久獲得 ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}%攻擊速度增量！`,
                }
            }
        /** Nowice staff */
        case Shared.ItemList.Burning_Rod:
            return {
                name: {
                    en: "Burning Rod",
                    ru: "Пылающий жезл",
                    br: "Cajado Incandescente",
                    fr: `Baguette brûlante`,
                    zh: "燃燒法棒",
                },
                desc: {
                    en: `UNIQUE: Your abilites ignites the enemy and deals additional damage of ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% max health per sec for ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности поджигают врага и он получает дополнительный урон в размере ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% от своего макс. здоровья в сек. в течение ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} сек.`,
                    br: `[Único]: Suas habilidades incineram os inimigo causando dano adicional de ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% vida máxima por seg, por ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} seg.`,
                    fr: `[UNIQUE]: Tes compétences K et L brûlent tes ennemies et font des dégâts additionnels pour ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% de leurs points de vie maximum pour ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec.`,
                    zh: `特殊：你的技能點燃敵方並額外給予 ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)}秒每秒最大血量 ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}%傷害`,
                }
            }
        case Shared.ItemList.Vampiric_Rod:
            return {
                name: {
                    en: "Vampiric Rod",
                    ru: "Вампирический жезл",
                    br: "Cajado Vampírico",
                    fr: `Baguette vampirique`,
                    zh: "吸血鬼法棒",
                },
                desc: {
                    en: `UNIQUE: When your magical attack hits the enemy hero, it will heal you for ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% of damage dealt.`,
                    br: `[Único]: Quando seu ataque mágico atinge um personagem inimigo, ele curará você em ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% de dano causado.`,
                    ru: `УНИКАЛЬНО(Пассивно): Попадая по врагу, ваши способности исцеляют вас на ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% от нанесённого урона.`,
                    zh: `特殊：當你的魔法攻擊擊中敵方英雄，從${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}%給予的傷害恢復自己生命值。`,
                    // OLD //
                    //ru: `УНИКАЛЬНО(Пассивно): Попадая по врагу, ваши способности похищают у цели ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% здоровья. (Перезарядка: ${fixed(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000, 1)} сек.)`,
                    // br: `[Único]: Quando sua habilidade atinge o personagem inimigo, ela rouba ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% de vida.\n [Tempo de recarga: ${fixed(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000, 1)} seg.]`,
                    // fr: `[UNIQUE]: Quand tes compétences K et L touchent l'ennemie, cela vole ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% points de vie. \n [Délai de récupération: ${fixed(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000, 1)} sec.]`,
                }
            }
        case Shared.ItemList.Kirin_Staff:
            return {
                name: {
                    en: "Kirin Staff",
                    ru: "Посох Кирина",
                    br: "Cajado de Kirin",
                    fr: `Bâton de Kirin`,
                    zh: "麒麟法棍",
                },
                desc: {
                    en: `UNIQUE: Your abilites penetrate target's magic resistance by ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%, this effect does not stack with other sources
                    <br />
                    UNIQUE: Every time you kill minion (+1 stacks), enemy hero (+5 stacks) or you get assist (+2 stacks) you gain ${ItemAbilityData.KIRIN_STAFF_STACK_AP} ability power (max ${ItemAbilityData.KIRIN_STAFF_STACK_AP * ItemAbilityData.KIRIN_STAFF_MAX_STACKS}). All stacks are lost upon death.`,
                    br: `[Único]: Suas habilidades penetram a resistência mágica do alvo em ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%, este efeito não se acumula com outras fontes.
                    <br />
                    [Único]: Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${ItemAbilityData.KIRIN_STAFF_STACK_AP} poder de habilidade (máximo ${ItemAbilityData.KIRIN_STAFF_STACK_AP * ItemAbilityData.KIRIN_STAFF_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают сопротивление магии цели на ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%. Этот эффект не складывается с другими источниками
                    <br />
                    УНИКАЛЬНО(Пассивно): Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает силу умений на ${ItemAbilityData.KIRIN_STAFF_STACK_AP} (Максимум зарядов: ${ItemAbilityData.KIRIN_STAFF_STACK_AP * ItemAbilityData.KIRIN_STAFF_MAX_STACKS}). Все заряды теряются после смерти.`,
                    zh: `特殊：你的技能拆穿目標物的魔法抗性 ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%，此效果將不會疊加於其他資源
                    <br />
                    特殊：每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${ItemAbilityData.KIRIN_STAFF_STACK_AP}點技能威力 (最大值 ${ItemAbilityData.KIRIN_STAFF_STACK_AP * ItemAbilityData.KIRIN_STAFF_MAX_STACKS})。所有疊加在死亡後歸零。`,

                    // Need Update
                    // br: `[Único]: Suas habilidades penetram a resistência mágica do alvo em ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% por 4 seg, este efeito não se acumula com outras fontes.`,
                    // fr: `[UNIQUE]: Tes compétences K et L pénétrent les résistances magiques de ta cible pour ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% pour 4 sec. Cet effet ne se cumule pas avec d'autres sources.`,
                }
            }
        case Shared.ItemList.Corrupted_Staff:
            return {
                name: {
                    en: "Corrupted Staff",
                    br: "Cajado corrompido",
                    ru: "Искажённый посох",
                    zh: "腐化的法棍",
                },
                desc: {
                    en: `UNIQUE: Provide additional ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}% ability power!`,
                    br: `[Único]: Fornece o adicional de ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}% de poder de habilidade!`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваша сила умений дополнительно увеличивается на ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%!`,
                    zh: `特殊：提供額外的 ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%技能威力！`,
                }
            }
        case Shared.ItemList.Frozen_Staff:
            return {
                name: {
                    en: "Frozen Staff",
                    ru: "Замёрзший посох",
                    br: "Cajado da Imperatriz Congelada",
                    fr: `Baguette gelée`,
                    zh: "冰結法棍",
                },
                desc: {
                    en: `UNIQUE: Your abilites lower enemy's movement speed by ${ItemAbilityData.FROZEN_STAFF_SLOW} and attack speed by ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}% for ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    br: `[Único]: Suas habilidades reduzem a velocidade de movimento do inimigo em ${ItemAbilityData.FROZEN_STAFF_SLOW} e velocidade de ataque por ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}% por ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают скорость передвижения цели на ${ItemAbilityData.FROZEN_STAFF_SLOW} и скорость атаки на ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}% на ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    zh: `特殊：你的技能降低 ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)}秒對手的移動速度值 ${ItemAbilityData.FROZEN_STAFF_SLOW}與 ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}%攻擊速度 - ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                    // NEED UPDATE
                    //ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают скорость передвижения цели на ${ItemAbilityData.FROZEN_STAFF_SLOW} на ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    //br: `[Único]: Suas habilidades reduzem ${ItemAbilityData.FROZEN_STAFF_SLOW} de velocidade de movimento por ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    //fr: `[UNIQUE]: Tes compétences K et L diminuent la vitesse de déplacement de ton ennemie de ${ItemAbilityData.FROZEN_STAFF_SLOW} points de vitesse pour ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} sec.\n [Délai de récupération: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Iron_Rod:
            return {
                name: {
                    en: "Iron Rod",
                    ru: "Железный жезл",
                    br: "Cajado dos Guerreiros de ferro",
                    fr: `Baguette de fer`,
                    zh: "鐵之法棒",
                },
                desc: {
                    en: `UNIQUE: When your magical attack hits enemy hero, your next normal attack deals bonus ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} normal damage to enemy hero`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} урона`,
                    br: `[Único]: Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} de dano.`,
                    fr: `[UNIQUE]: Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} dégâts supplémentaires.`,
                    zh: `特殊：當你的魔法攻擊擊中敵方英雄，你的下一個一般攻擊對敵方英雄造成額外 ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE}點一般傷害`,
                }
            }
        case Shared.ItemList.Magic_Harpoon:
            return {
                name: {
                    en: "Magic Harpoon",
                    ru: "Волшебный гарпун",
                    br: "Arpão Mágico",
                    fr: `Harpon magique`,
                    zh: "魔法叉戟",
                },
                desc: {
                    en: `UNIQUE: When your magical attack hits enemy hero, your next normal attack deals bonus ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} normal damage to enemy hero`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} урона`,
                    br: `[Único]: Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} de dano.`,
                    fr: `[UNIQUE]: Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} dégâts supplémentaires.`,
                    zh: `特殊：當你的魔法攻擊擊中敵方英雄，你的下一個一般攻擊對敵方英雄造成額外 ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE}點一般傷害`,
                }
            }
        case Shared.ItemList.Orchid_of_Malevolence:
            return {
                name: {
                    en: "Orchid of Malevolence",
                    ru: "Орхидея злобы",
                    br: "Cajado Orquídea da Malevolência",
                    fr: `Orchidée de Malveillance`,
                    zh: "惡毒蘭花",
                },
                desc: {
                    en: `Active: Releases dark arrow in your direction that pierce through enemies, silences them for ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec and at the end of silence, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% of the damage received while silenced is inflicted as bonus magical damage. - ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Выпускает тёмную стрелу в вашем направлении, которая пронзает несколько целей, накладывая на них немоту на ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. По окончании эффекта цели получают ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% от полученного урона за время действия немоты в виде магического урона. (Перезарядка: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Acumula maldade lançando na direção que seu personagem está olhando, perfurando os inimigos e os silenciando por ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seg, e no final do silênciar, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% de dano enquanto silenciado infligindo como dano mágico adicional.\n [Tempo de recarga: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Envoie une sombre flèche dans ta direction, qui traverse tes ennemies et les réduits au silence pour ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec. À la fin de ce délai, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% des dégâts reçus par l'ennemi sont infligés sous forme de dégâts magiques supplémentaires. \n [Délai de récupération : ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec.]`,
                    zh: `主動技：向前方釋放暗箭貫穿敵方，沉默 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)}秒所有敵方並在沉默結束後，期間造成的傷害 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}%追加為魔法傷害。 - ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }
        case Shared.ItemList.Divine_Staff_T2:
            return {
                name: {
                    en: "Divine Staff",
                    ru: "Божественный посох",
                    br: "Cajado da Deusa da floresta",
                    fr: `Baguette divine`,
                    zh: "神聖法棍",
                },
                desc: {
                    en: `Active: Heals all nearby units in ${ItemAbilityData.DIVINE_STAFF_RADIUS}px radius for ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, apply ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} bonus speed and remove all negative effects for ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} sec cd 
                        <br /> This effect has inner cooldown of 12 sec (Can not be reduced by cooldown reduction), during this time, this effect is fully ignored`,
                    ru: `УНИКАЛЬНО(Активно): Исцеляет ближайшим союзным целям в радиусе ${ItemAbilityData.DIVINE_STAFF_RADIUS} пикселей ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} здоровья, снимая все негативные эффекты, а также накладывая ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} бонусной скорости передвижения на ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} сек.) 
                        <br /> Этот эффект имеет внутреннюю перезарядку длительностью 12 сек. (Не может быть уменьшено сокращением перезарядки). В течение этого времени активный эффект этого предмета не работает на ранее задетых целях`,
                    br: `[Ativo]: Cura todas as unidades próximas de ${ItemAbilityData.DIVINE_STAFF_RADIUS}px raio por ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, aplica ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} velocidade de movimento bônus e remova todos os efeitos negativos por ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]
                        <br /> Este efeito tem o tempo de recarga de 12 segundos.(não pode ser reduzido pela redução de tempo de recarga), durante este tempo, este efeito é totalmente ignorado`,
                    fr: `[ACTIVATION]: Soigne toutes les unités dans un rayon de ${ItemAbilityData.DIVINE_STAFF_RADIUS}px pour ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}. Fournit ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} points de vitesse de déplacement et supprime tous les effets négatifs pour ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération : ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} sec.]
                        <br /> Cet effet a un délai de réduction interne de 12 sec qui ne peut pas être réduit. Pendant ce délai, l'effet est complétement ignoré.`,
                    zh: `主動技：治癒所有半徑 ${ItemAbilityData.DIVINE_STAFF_RADIUS}像素內的鄰近單位 ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}點生命值，給予 ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED}點額外速度 ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)}秒並移除所有負面效果 - ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)}秒冷卻時間
                        <br /> 此效果有內建 12秒冷卻時間 (無法透過縮短冷卻時間來減少)，在期間內，再次發動效果將被完全無試`,
                }
            }

        case Shared.ItemList.Vampiric_Shield:
            return {
                name: {
                    en: "Vampiric Shield",
                    ru: "Вампирический щит",
                    br: "Escudo Vampírico",
                    fr: `Bouclier vampirique`,
                    zh: "吸血鬼護盾",
                },
                desc: {
                    en: `UNIQUE: Whenever you take normal damage, you will be healed for ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL}`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении урона вы исцеляете себе ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} здоровья`,
                    br: `[Único]: Sempre que você sofrer dano, você será curado em ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} de vida.`,
                    fr: `[UNIQUE]: Pour chaque dégât reçu, tu es soigné de ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} points de vie.`,
                    zh: `特殊：每當你受到一般傷害，你將會被治癒 ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL}點生命值`,
                }
            }

        case Shared.ItemList.Divine_Shield:
            return {
                name: {
                    en: "Divine Shield",
                    ru: "Божественный щит",
                    br: "Escudo da Deusa da floresta",
                    fr: `Bouclier divin`,
                    zh: "神聖護盾",
                },
                desc: {
                    en: `Active: Gives additional ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} armor and ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% magic defense to all friendly units in close proximity ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Даёт дополнительные ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} брони и ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% сопротивления магии всем ближайшим союзным целям на ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Dá mais ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} de armadura e ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% defesa mágica para todas as unidades aliadas nas proximidades por ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Donne un supplément de ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} points d'armure et ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% de défense magique à toutes les unités alliées à proximité pour ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                    zh: `主動技：給予所有鄰近友好單位 ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)}秒額外 ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR}點裝甲值與 ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}%魔法抗性 - ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }

        case Shared.ItemList.Spike_Shield:
            return {
                name: {
                    en: "Spike Shield",
                    ru: "Шипастый щит",
                    br: "Escudo de Espinhos sombrio",
                    fr: `Bouclier piquant`,
                    zh: "尖刺護盾",
                },
                desc: {
                    en: `Active: When active, returns back 100% of received damage back to attacker (after reduction) for ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): После активации возвращает 100% полученного урона (с учётом брони) обратно противнику на протяжении ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Quando ativado, retorna 100% do dano recebido de volta ao atacante (após a redução) por ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Retourne 100% des dégâts reçus à l'attaquant (après réduction) pour ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                    zh: `主動技：發動 ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)}秒期間，回彈 100%接收到的傷害給攻擊者 (扣除防禦後) - ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }

        case Shared.ItemList.GarunsDefender:
            return {
                name: {
                    en: "Garun's Defender",
                    ru: "Защитник Гаруна",
                    br: "Defensor de Garun",
                    fr: `Bouclier de Garun`,
                    zh: "加侖的守護者",
                },
                desc: {
                    en: `Active: Smashes all enemies around you in small radius, deals ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} normal damage and stuns all enemies for ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Наносит ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} урона всем врагам вокруг, дополнительно оглушая цели на ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Destrói todos os inimigos ao redor do personagem em um pequeno raio, ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dano e atordoando todos os inimigos por ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Frappe tous les ennemis autour de ton héros à proximité étroite. Fait ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} dégâts et assome tous les ennemis pour ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} sec.]`,
                    zh: `主動技：潰擊所有在你四周小範圍內的敵方，給予 ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE}點一般傷害並給予所有敵方 ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)}秒暈眩 - ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }
        case Shared.ItemList.Plate_Shield:
            return {
                name: {
                    en: "Plate Shield",
                    ru: "Латный щит",
                    br: "Escudo de Placas reforçadas",
                    fr: `Bouclier à plaque`,
                    zh: "金屬護盾",
                },
                desc: {
                    en: `Active: Shockwaves travel through the air dealing ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} normal damage and reduce enemy's movement speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} for ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    br: `[Ativo]: Ondas de choque viajam pelo ar causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dano normal e reduzindo a velocidade de movimento do inimigo em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    ru: `УНИКАЛЬНО(Активно): Создаёт ударную волну, которая наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} урона и уменьшает скорость передвижения на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} у всех врагов на своём пути на ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    zh: `主動技：釋放衝擊波，給予 ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE}點一般傷害並降低 ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)}秒敵方的移動速度值 ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} - ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                    // need fix
                    //br: `[Ativo]: Ondas de choque viajam pelo ar causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dano e reduzindo a velocidade de movimento do inimigo em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} , torna todas as unidades afetadas visíveis por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    //fr: `[ACTIVATION]: Envoi une onde de choc qui se propage en faisant ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dégâts and en réduisant la vitesse de déplacement des ennemis de ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} points de vitesse. Toutes les unités affectés sont visible pour ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Kirins_Defender:
            return {
                name: {
                    en: "Kirin's Defender",
                    ru: "Защитник Кирина",
                    br: "Defensor de Kirin",
                    fr: `Bouclier de Kirin`,
                    zh: "麒麟的守護者",
                },
                desc: {
                    en: `UNIQUE: Kirin's Defender blocks next CC effect once every ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} sec, sucessful block provide ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}% magic resistance for ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec.`,
                    br: `[Único]: Defensor de Kirin bloqueia o próximo efeito de CC uma vez a cada ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seg, se o bloqueio for bem sucedido, fornecer ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}% de resistência mágica por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.`,
                    ru: `УНИКАЛЬНО (ПАССИВНО): Каждые ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} сек. Защитник Кирина блокирует следующий эффект контроля. Успешный блок повышает ваше сопротивление магии на  ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}% на ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} сек.`,
                    zh: `特殊：麒麟的守護者每次發動 ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()}秒內格擋下一個有冷卻時間效果的招式，成功格擋時提供 ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()}秒 ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}%的魔法抗性。`,
                    // UPDATE
                    //br: `[Único]: Quando você recebe dano mágico, o Kirin cria uma barreira ao seu redor, reduzindo a duração de todos os efeitos negativos em 75% e diminuindo ainda mais ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE)}% do dano mágico por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.\n [Tempo de recarga: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seg.]`,
                    //fr: `[UNIQUE]: Lorsque tu reçois des dégâts magiques, le Bouclier de Kirin créer une barrière autour de toi qui réduit la durée de tous les effets négatifs de 75% et diminue les dégâts magiques de ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE)}% pour ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec. \n [Délai de récupération: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} sec.]`,
                }
            }
        /** Rings */
        case Shared.ItemList.Demonic_Ring:
            return {
                name: {
                    en: "Demonic Ring",
                    ru: "Демоническое кольцо",
                    br: "Anel Demoníaco",
                    fr: `Anneau démonique`,
                    zh: "惡魔手環",
                },
                desc: {
                    en: `UNIQUE: Your normal attacks lower enemy armor by ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% for 4 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую броню на ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% на 4 сек.`,
                    br: `[Único]: Seus ataques reduzem a armadura inimiga por ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% por 4 segundos.`,
                    fr: `[UNIQUE]: Tes attaques diminuent l'armure de ton ennmi de ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% points d'armure pour 4 sec.`,
                    zh: `特殊：你的一般攻擊降低 4秒敵方裝甲值 ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}%`,
                }
            }
        case Shared.ItemList.Gold_Ring:
            return {
                name: {
                    en: "Gold Ring",
                    ru: "Золотое кольцо",
                    br: "Anel da Fortuna",
                    fr: "Anneau d'or",
                    zh: "黃金手環",
                },
                desc: {
                    en: "UNIQUE: Killing an enemy unit or assisting for hero kill gives additional 25 golds",
                    ru: "УНИКАЛЬНО(Пассивно): Убивая вражеских миньонов или получая содействия в убийстве вражеских героев, вы получаете дополнительно 25 золота",
                    br: "[Único]: Matar uma unidade inimiga ou personagem, faz com que você ganhe 25 ouros adicionais.",
                    zh: `特殊：殺死一個敵方單位或助攻殺死敵方英雄獲得額外25枚黃金`,
                }
            }

        case Shared.ItemList.Frost_Ring:
            return {
                name: {
                    en: "Frost Ring",
                    ru: "Морозное кольцо",
                    br: "Anel Congelado da Imperatriz",
                    zh: "冰霜手環",
                },
                desc: {
                    en: `Active: Create an frozen bolt that freeze target on impact for ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} sec and deals ${ItemAbilityData.FROST_RING_DAMAGE} magical damage - ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Создаёт ледяной снаряд, который замораживает цель при попадании на ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} сек. и наносит ей ${ItemAbilityData.FROST_RING_DAMAGE} магического урона. (Перезарядка: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: O anel cria um estilhaço de gelo que congela o alvo no impacto por ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} seg e dá ${ItemAbilityData.FROST_RING_DAMAGE} de dano.\n [Tempo de recarga: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    zh: `主動技：創造一個冰箭凍結目標物 ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)}秒並給予 ${ItemAbilityData.FROST_RING_DAMAGE}點魔法傷害 - ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }

        case Shared.ItemList.Chronos_Ring:
            return {
                name: {
                    en: "Chronos Ring",
                    br: "Anel do Mago do tempo",
                    ru: "Кольцо Хроноса",
                    zh: "時辰手環",
                },
                desc: {
                    en: `Active: Refresh all abilites and items cooldown - ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Активно): Сбрасывает перезарядку всех способностей и имеющихся предметов. (Перезарядка: ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Reseta o tempo de recarga de todas as habilidades e itens.\n [Tempo de recarga: ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    zh: `主動技：刷新所有技能與物品冷卻時間 - ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }
        case Shared.ItemList.Corrupted_Ring:
            return {
                name: {
                    en: "Corrupted Ring",
                    ru: "Искажённое кольцо",
                    br: "Anel Corrompido",
                    zh: "腐化的手環",
                },
                desc: {
                    en: `Active: Dashes you forward in your direction forward - ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Активно): Вы совершаете рывок в направлении своего движения. (Перезарядка: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Lança seu personagem para frente na direção que ele está olhando.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    zh: `主動技：朝你的前方向前衝刺 - ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }

        case Shared.ItemList.Berserker_Ring:
            return {
                name: {
                    en: "Berserker Ring",
                    br: "Anel do Lutador",
                    ru: "Кольцо берсерка",
                    zh: "狂戰士手環",
                },
                desc: {
                    en: `UNIQUE: Your attacks deal ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} more damage for each 10% HP you are missing.`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят на ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} ед. больше физического урона за каждые недостающие 10% вашего здоровья`,
                    br: `[Único]: Seus ataques dão ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} a mais de dano para cada 10% de vida que você tenha perdido.`,
                    zh: `特殊：每當你的總HP減少 10%，你的攻擊造成 ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG}點更多的傷害`,
                }
            }

        /** Armors */
        case Shared.ItemList.Frost_Armor:
            return {
                name: {
                    en: "Frost Armor",
                    ru: "Морозная броня",
                    br: "Armadura do Lorde congelado",
                    zh: "冰霜鎧甲",
                },
                desc: {
                    en: `UNIQUE: When you take normal damage, attacker will be cursed and his movement speed slows down by ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} and attack speed by ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении урона, скрость передвижения нападающего будет снижкна на ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION}, а скорость атаки - на ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                    br: `[Único]: Quando você recebe dano, o inimigo que está te atacando será amaldiçoado e sua velocidade de movimento diminuirá em ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} e velocidade de ataque por ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%.`,
                    zh: `特殊：當你受到一般傷害，攻擊者將受詛，降低移動速度值 ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION}與攻擊速度 ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                }
            }

        case Shared.ItemList.Void_Armor:
            return {
                name: {
                    en: "Void Armor",
                    ru: "Броня пустоты",
                    br: "Armadura do Abismo",
                    zh: "虛空鎧甲",
                },
                desc: {
                    en: `Active: Makes you invisible for ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} sec in addition increase your movement speed by ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} and normal damage by ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} - ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} sec cd\n (removes on attack or spell cast)`,
                    ru: `УНИКАЛЬНО(Активно): Вы получаете невидимость на ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} сек., а также дополнительно получаете ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} скорости передвижения и ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} атаки. (Перезарядка: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)\n (эффект пропадает при атаке или использовании способностей)`,
                    br: `[Ativo]: Torna você invisível por ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} seg, além disso, aumente sua velocidade de movimento em ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} e dano por ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} seg.\n (Acaba quando você usa algum ataque.)\n [Tempo de recarga: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    zh: `主動技：使你 ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)}秒隱蔽，額外增加你的移動速度值 ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}與一般傷害值 ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} - ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)}秒冷卻時間 (效果在攻擊或發動技能後移除)`,
                }
            }

        case Shared.ItemList.Titans_Armor:
            return {
                name: {
                    en: "Titan's Armor",
                    ru: "Броня титана",
                    br: "Armadura do Titan",
                    zh: "泰坦的鎧甲",
                },
                desc: {
                    en: `Active: Increase your health regen by ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove all negative effects and makes you immune to all incoming damage for ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} sec. You can't do any action during this effect!! - ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к регенерации здоровья в размере ${ItemAbilityData.TITAN_ARMOR_REGENERATION} на ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} сек. Вы не можете выполнять никакие действия, пока активен данный эффект! (Перезарядка: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Aumente sua regeneração de vida em ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove todos os efeitos negativos e o torna imune a todos os danos recebidos por ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} seg.\n (Você não pode fazer nenhuma ação durante este efeito.)\n [Tempo de recarga: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    zh: `主動技：增加你的回血速度 ${ItemAbilityData.TITAN_ARMOR_REGENERATION}點，移除所有負面效果並使你 ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)}秒內無視所有襲來的攻擊。效果期間你無法採取任何動作！ - ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                }
            }
        case Shared.ItemList.ChestOfMalevolence:
            return {
                name: {
                    en: "Chest of Malevolence",
                    br: "Armadura da Malevolência",
                    ru: "Нагрудник злобы",
                    zh: "惡毒胸甲",
                },
                desc: {
                    en: `UNIQUE: Whenever you take magical damage, attacker will be cursed and their ability power will by decreased by ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
                    br: `[Único]: Sempre que você sofrer dano mágico, o atacante será amaldiçoado e seu poder de habilidade será reduzido em ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
                    ru: `УНИКАЛЬНО(Пассивно): Всякий раз, когда вы получаете магический урон, атакующий будет проклят, а его Сила умений уменьшится на ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
                    zh: `特殊：每當你受到魔法傷害，攻擊者將會受到詛咒，其技能威力被降低 ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%。`,
                }
            }

        /** Consumables */
        case Shared.ItemList.Healing_Potion:
            return {
                name: {
                    en: "Healing Potion",
                    ru: "Исцеляющее зелье",
                    br: "Poção das fadas",
                    zh: "治癒藥水",
                },
                desc: {
                    en: `Active: Grants ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} health regeneration for ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} sec <br /> If you are attacked, the effect is lost!`,
                    ru: `Активно: Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} регенерации здоровья на ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} сек. <br /> Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
                    br: `[Ativo]: Beba a poção das fadas para receber regeneração de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} de vida por ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} seg.\n (Se você for atacado, o efeito será perdido!)`,
                    zh: `主動技：賜予 ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)}秒 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}點回血速度 <br /> 如果你遭受攻擊，將會失去效用！`,
                }
            }

        case Shared.ItemList.Observer_Ward:
            return {
                name: {
                    en: "Observer Ward",
                    ru: "Тотем-наблюдатель",
                    br: "Pedra do Observador da floresta",
                    zh: "偵查守衛",
                },
                desc: {
                    en: `[ACTIVE]: Plants an Observer Ward, an invisible watcher that gives obstructed vision in a ${ItemAbilityData.WARD_VISION} px radius to your team. Lasts ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} secs. If ward is visible to enemy team, they can destroy it!`,
                    br: `[Ativo]: Planta uma pedra Observadora invisível que dá visão obstruída em ${ItemAbilityData.WARD_VISION} px raio para sua equipe.\n Dura ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
                    ru: `Активно: Вы устанавливаете невидимый тотем, который раскрывает область вокруг себя в радиусе ${ItemAbilityData.WARD_VISION} пикселей в течение ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} сек. Если тотем видим для противников, они могут уничтожить его!`,
                    zh: `主動技：植入一個偵查守衛，一個隱蔽的觀察者賜予己方團隊半徑 ${ItemAbilityData.WARD_VISION}像素範圍內的受限視線。持續 ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)}。如果守衛能被敵隊看見，他們能摧毀它！`,
                }
            }
        case Shared.ItemList.Sentry_Ward:
            return {
                name: {
                    en: "Sentry Ward",
                    br: "Pedra do Observador corrompida",
                    ru: "Сторожевой тотем",
                    zh: "哨兵守衛",
                },
                desc: {
                    en: `[ACTIVE]: Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a radius. lasts for ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} sec. If ward is visible to enemy team, they can destroy it!`,
                    br: `[Ativo]: Planta uma pedra Observadora corrompida invisível que concede Visão Verdadeira, a habilidade de ver unidades e sentinelas inimigas invisíveis, para qualquer visão aliada existente dentro de um raio. dura por ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
                    ru: `Активно: Вы устанавливаете невидимый сторожевой тотем, раскрывающий невидимых противников и тотемы вокруг себя в радиусе ${ItemAbilityData.SENTRY_WARD_VISION} пикселей в течение ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} сек. Если тотем видим для противников, они могут уничтожить его!`,
                    zh: `主動技：植入一個哨兵守衛，一個隱蔽的觀察者賜予絕對視線，有能夠讓友軍在範圍內看見隱蔽敵方單位與守衛的能力。持續 ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)}秒。如果守衛能被敵隊看見，他們能摧毀它！`,
                }
            }
        case Shared.ItemList.Potion_Of_Magic:
            return {
                name: {
                    en: "Potion of Magic",
                    br: "Poção de Magia corrompida",
                    ru: "Зелье волшебства",
                    zh: "魔法藥水",
                },
                desc: {
                    en: `[ACTIVE]: Provide ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} ability power permanently, stacks up to 5 times!`,
                    br: `[Ativo]: Da a quem beber ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} de Poder de habilidade permanentemente, acumula até 5 vezes!\n Sabor uva da floresta.`,
                    ru: `Активно: Даёт вам ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} силы умений навсегда. Эффект складывается до 5 раз!`,
                    zh: `主動技：永久提供 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}點技能威力，疊加最多五次！`,
                }
            }
        case Shared.ItemList.Corrupted_Potion:
            return {
                name: {
                    en: "Corrupted Potion",
                    br: "Poção de força corrompida",
                    ru: "Искажённое зелье",
                    zh: "腐化的藥水",
                },
                desc: {
                    en: `[ACTIVE]: Provide ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} attack damage permanently, stacks up to 5 times!`,
                    br: `[Ativo]: Da a quem beber ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} de dano de ataque permanentemente, acumula até 5 vezes!\n Sabor cereja do campo.`,
                    ru: `Активно: Даёт вам ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} силы атаки навсегда. Эффект складывается до 5 раз!`,
                    zh: `主動技：永久提供 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}點攻擊傷害，疊加最多五次！`,
                }
            }
        default: return {
            name: { en: "" },
            desc: { en: "" }
        }
    }
}

const getPoisonBowDescription = (duration: number) => {
    const text: {[key: string]: string} = {
        en: `UNIQUE: Your normal attacks apply deadly poison on enemy hero slows target for ${ItemAbilityData.POISON_BOW_SLOW} and deals ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} damage per sec for ${(duration / 1000).toFixed(1)} sec. (This effect can stack up 5 times, every attack refresh duration)`,
        ru: `УНИКАЛЬНО(Пассивно): Ваши атаки накладывают смертельный яд на вражеских героев, замедляя их на ${ItemAbilityData.POISON_BOW_SLOW} и нанося ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} урона в секунду в течение ${(duration / 1000).toFixed(1)} сек. (Этот эффект может складываться до 5 раз. Каждая последующая атака обновляет длительность зарядов)`,
        br: `[Único]: Seus ataques aplicam veneno no personagem inimigo e retarda o alvo por ${ItemAbilityData.POISON_BOW_SLOW} e adiciona ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} de dano por seg, por ${(duration / 1000).toFixed(1)} seg.\n (Este efeito pode acumular 5 vezes, cada duração de atualização de ataque.)`,
        fr: `[UNIQUE]: Tes attaques J empoisonne ton ennemie pour ${(duration / 1000).toFixed(1)} sec. Pendant cette période, il est ralenti de ${ItemAbilityData.POISON_BOW_SLOW} et reçoit ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} dégâts supplémentaires. \n (Cet effet peut se cumuler jusqu'à 5 fois, le délai d'empoisennement est remis à zéro à chaque attaque)`,
        zh: `特殊：你的一般攻擊給予敵方英雄致命毒害，降低應目標物移動速度值 ${ItemAbilityData.POISON_BOW_SLOW}點並給予 ${(duration / 1000).toFixed(1)}秒 ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME}點傷害。(此效果能疊加五次，每次攻擊刷新時長)`,
    }
    
    return text[LANG.value] ? text[LANG.value] : text['en'];
}

export const getLocaleItemDescription = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    if (!result.desc)
        return "";

    return result.desc[LANG.value] ? result.desc[LANG.value] : result.desc['en'];
}

export const getLocaleItemName = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    return result.name[LANG.value] ? result.name[LANG.value] : result.name['en'];
}

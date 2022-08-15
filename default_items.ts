/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { Shared,  fixed, ItemAbilityData } from '../../misc/shared';
//@ts-ignore
import { calculateMagicDefense } from '../../misc/constant';
import { toSec } from './misc';
//@ts-ignore
import { LANG } from '../lang'; 

const _getLocaleItemDescription = (itemId: number): { name: { [key in string]: string }, desc?: { [key in string]: string } } => {
    switch (itemId) {
    case Shared.ItemList.Wooden_Sword:
        return {
            name: {
                en: 'Wooden Sword',
                ru: 'Деревянный меч',
                br: 'Espada de Madeira',
                cz: 'Dřevěný Meč',
                fr: 'Épée en bois',
                zh: '木劍',
            },
        };
    case Shared.ItemList.Wooden_Bow:
        return {
            name: {
                en: 'Wooden Bow',
                ru: 'Деревянный лук',
                br: 'Arco das Fadas',
                cz: 'Dřevěný Luk',
                fr: 'Arc en bois',
                zh: '木弓',
            },
        };
    case Shared.ItemList.Novice_Staff:
        return {
            name: {
                en: 'Novice Staff',
                ru: 'Посох новичка',
                br: 'Graveto Mágico',
                cz: 'Učňova Hůl',
                fr: 'Bâton de novice',
                zh: '木杖',
            },
        };
    case Shared.ItemList.Iron_Ring:
        return {
            name: {
                en: 'Wooden Ring',
                ru: 'Деревянное кольцо',
                br: 'Anel olho da Floresta',
                cz: 'Železný Prsten',
                fr: 'Anneau de fer',
                zh: '鐵環',
            },
        };
    case Shared.ItemList.Buckler:
        return {
            name: {
                en: 'Buckler',
                ru: 'Баклер',
                br: 'Escudo joia Fluorita',
                cz: 'Pukléř',
                fr: 'Bouclier',
                zh: '盾牌',
            },
        };
    case Shared.ItemList.Shirt:
        return {
            name: {
                en: 'Shirt',
                ru: 'Рубаха',
                br: 'Armadura dos Caídos',
                cz: 'Svetr',
                fr: 'Chemise',
                zh: '襯衫',
            },
        };
    case Shared.ItemList.Light_Slayer:
        return {
            name: {
                en: 'Light Slayer',
                ru: 'Губитель света',
                br: 'Espada Corta luz',
                cz: 'Kosič Světla',
                fr: 'Tueur de Lumière',
                zh: '輕量殺手',
            },
        };
    case Shared.ItemList.Katana:
        return {
            name: {
                en: 'Katana',
                ru: 'Катана',
                br: 'Katana',
                cz: 'Katana',
                fr: 'Katana',
                zh: '武士刀',
            },
        };
    case Shared.ItemList.Corrupted_Katana:
        return {
            name: {
                en: 'Corrupted Katana',
                ru: 'Искажённая катана',
                br: 'Katana Corrompida',
                cz: 'Zvrácená Katana',
                fr: 'Katana corrompu',
                zh: '腐化的武士刀',
            },
        };
    case Shared.ItemList.Iron_Sword:
        return {
            name: {
                en: 'Sword of Iron Warriors',
                ru: 'Меч железных воинов',
                br: 'Espada dos Guerreiros de ferro',
                cz: 'Ocelový Meč',
                fr: 'Épée de fer',
                zh: '鐵劍',
            },
        };
    case Shared.ItemList.Reckless_Longbow:
        return {
            name: {
                en: 'Reckless Longbow',
                ru: 'Безрассудный длинный лук',
                br: 'Besta dos Corajosos',
                cz: 'Hazardní Dlouhý Luk',
                fr: 'Arc long téméraire',
                zh: '魯莽長弓',
            },
        };
    case Shared.ItemList.Rapids_Longbow:
        return {
            name: {
                en: 'Rapid Longbow',
                ru: 'Быстрый длинный лук',
                br: 'Besta da Velocidade',
                cz: 'Radpidní Dlouhý Luk',
                fr: 'Arc long rapide',
                zh: '疾風長弓',
            },
        };
    case Shared.ItemList.Enduring_Shield:
        return {
            name: {
                en: 'Enduring Shield',
                ru: 'Стойкий щит',
                br: 'Escudo Real',
                cz: 'Odolný Štít',
                fr: 'Bouclier endurant',
                zh: '耐久護盾',
            },
        };
    case Shared.ItemList.Iron_Buckler:
        return {
            name: {
                en: 'Buckler of Iron Warriors',
                ru: 'Баклер железных воинов',
                br: 'Escudo dos Guerreiros de ferro',
                cz: 'Železný Pukléř',
                fr: 'Bouclier de fer',
                zh: '鐵圓盾',
            },
        };
    case Shared.ItemList.Magical_Shield:
        return {
            name: {
                en: 'Enchanted Shield',
                ru: 'Зачарованный щит',
                br: 'Escudo Encantado',
                cz: 'Magický Štít',
                fr: 'Bouclier magique',
                zh: '魔法護盾',
            },
        };
    case Shared.ItemList.Rod_Of_Nature:
        return {
            name: {
                en: 'Rod of Nature',
                ru: 'Жезл природы',
                br: 'Cajado das Fadas',
                cz: 'Prut Přírody',
                fr: 'Baguette naturelle',
                zh: '大自然法棒',
            },
        };
    case Shared.ItemList.Wizard_Staff:
        return {
            name: {
                en: 'Wizard Staff',
                ru: 'Посох волшебника',
                br: 'Cajado do mago esquecido',
                cz: 'Hůl Kouzelníka',
                fr: 'Bâton du magicien',
                zh: '巫師法棍',
            },
        };
    case Shared.ItemList.Ring_Of_Regeneration:
        return {
            name: {
                en: 'Ring of Regeneration',
                ru: 'Кольцо регенерации',
                br: 'Anel da Regeneração',
                cz: 'Prsten Regenerace',
                fr: 'Anneau de régénération',
                zh: '再生手環',
            },
        };
    case Shared.ItemList.Ring_Of_Time:
        return {
            name: {
                en: 'Ring of Time',
                ru: 'Кольцо времени',
                br: 'Anel do Tempo',
                cz: 'Prsten Času',
                fr: 'Anneau du Temps',
                zh: '時間手環',
            },
        };
    case Shared.ItemList.Leather_Armor:
        return {
            name: {
                en: 'Apprentice Armor',
                ru: 'Броня ученика',
                br: 'Armadura de Aprendiz',
                cz: 'Kožená Zbroj',
                fr: 'Armure de cuir',
                zh: '皮革裝甲',
            },
        };
    case Shared.ItemList.Iron_Armor:
        return {
            name: {
                en: 'Armor of Iron Warriors',
                ru: 'Доспех железных воинов',
                br: 'Armadura dos Guerreiros de ferro',
                cz: 'Železná Zbroj',
                fr: 'Armure de fer',
                zh: '鐵裝甲',
            },
        };
    case Shared.ItemList.Plate_Armor:
        return {
            name: {
                en: 'Plate Armor',
                ru: 'Латный доспех',
                br: 'Armadura de Placas reforçadas',
                cz: 'Plátová Zbroj',
                fr: 'Armure à plaques',
                zh: '金屬裝甲',
            },
            desc: {
                en: `UNIQUE: For every minion kill (+1 stack), hero kill (+5 stacks) or hero assist (+2 stacks) you gain ${ItemAbilityData.PLATE_ARMOR_STACK_HP} Health regeneration (Max: ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS} Health regeneration at 20 stacks). All stacks are lost upon death.`,
                br: `[Único]: Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos) você ganha ${ItemAbilityData.PLATE_ARMOR_STACK_HP} regeneración de la salud (máximo ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                ru: `УНИКАЛЬНО(Пассивно): Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает Регенерацию здоровья на ${ItemAbilityData.PLATE_ARMOR_STACK_HP} (Максимальная прибавка: ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS} Регенерации здоровья за 20 зарядов). Все заряды теряются после смерти.`,
                zh: `特殊：每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${ItemAbilityData.PLATE_ARMOR_STACK_HP}健康再生 (最大值 ${ItemAbilityData.PLATE_ARMOR_STACK_HP * ItemAbilityData.PLATE_ARMOR_MAX_STACKS})。所有疊加在死亡後歸零。`,
            }
        };
    case Shared.ItemList.Wizard_Shoes:
        return {
            name: {
                en: 'Wizard Shoes',
                ru: 'Башмаки волшебника',
                br: 'Sapatos do Mago esquecido',
                cz: 'Boty Kouzelníka',
                fr: 'Chaussures du magicien',
                zh: '巫師魔鞋',
            },
        };
    case Shared.ItemList.Agility_Boots:
        return {
            name: {
                en: 'Agility Boots',
                ru: 'Ботинки ловкости',
                br: 'Botas de Velocidade',
                cz: 'Boty Obratnosti',
                fr: 'Bottes d\'agilité',
                zh: '敏捷之靴',
            },
        };
    case Shared.ItemList.Boots:
        return {
            name: {
                en: 'Boots',
                ru: 'Ботинки',
                br: 'Botas de Couro',
                cz: 'Boty',
                fr: 'Bottes',
                zh: '靴子',
            },
        };
    case Shared.ItemList.Divine_Boots:
        return {
            name: {
                en: 'Boots of Iron Warriors',
                ru: 'Ботинки железных воинов',
                br: 'Botas dos Guerreiros de ferro',
                cz: 'Svaté Sandále',
                fr: 'Bottes divines',
                zh: '神聖之靴',
            },
        };
    case Shared.ItemList.Traveling_Boots:
        return {
            name: {
                en: 'Swift Boots',
                ru: 'Ботинки стремительности',
                br: 'Botas das Fadas',
                cz: 'Cestovní Obuv',
                fr: 'Bottes de vitesse',
                zh: '神速之靴',
            },
        };
    case Shared.ItemList.Shadow_Slayer:
        return {
            name: {
                en: 'Shadow Slayer',
                ru: 'Губитель теней',
                br: 'Espada Consome luz',
                cz: 'Stínovrah',
                fr: 'Tueur d\'Ombre',
                zh: '闇影殺手',
            },
            desc: {
                en: `UNIQUE: Your basic attacks do additional magic damage equal to ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% of enemy's max Health`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят дополнительный магический урон по героям, который равен ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% от макс. здоровья цели`,
                br: `[Único]: Seus ataques causam dano mágico adicional ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% de vida máxima do inimigo.`,
                cz: `JEDINEČNÉ: Tvůj útok způsobí bonusové poškození o velikosti ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)} % protivníkova maximálního zdravý. `,
                fr: `[UNIQUE]: Ton attaque J fait des dommages magiques additionnels de ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% des points de vie de l'enemie`,
                zh: `特殊：你的一般攻擊對敵方造成血量最大值 ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% 的額外魔法傷害`,
            }
        };

    case Shared.ItemList.Divine_Sword:
        return {
            name: {
                en: 'Divine Sword',
                ru: 'Божественный меч',
                br: 'Espada Divina',
                cz: 'Božský meč',
                zh: '聖劍',
            },
            desc: {
                en: `[ACTIVE]: Makes you immune to all incoming damage for ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)} and decreases your Attack Damage by 50%. (Cooldown: ${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)} seconds) `,
                br: `[Ativo]: Escudo Divino - Torna você imune a todos os efeitos por${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)} e reduza seu dano de ataque em 50%. \n [Tempo de recarga: ${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)} seg.]`,
                ru: `УНИКАЛЬНО(Активно): Вы становитесь неуязвимы к входящему урону и эффектам контроля на ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)}, а также ваша Сила атаки уменьшается на 50%. При этом, вы не лишаетесь возможности атаковать, использовать способности или предметы. (Перезарядка: ${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)} сек.)`,
                zh: `主動技：神聖護盾 - 使你 ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)}無視所有效果並將你受到的攻擊傷害降至為 50%。${toSec(ItemAbilityData.DIVINE_SWORD_COOLDOWN)}冷卻時間`,
            },
        };
    case Shared.ItemList.Divine_Katana:
        return {
            name: {
                en: 'Divine Katana',
                ru: 'Божественная катана',
                br: 'Katana Divina',
                fr: 'Katana divin',
                zh: '神聖武士刀',
            },
            desc: {
                // Require update
                ru: `УНИКАЛЬНО(Активно): Вы бросаете фрагмент катаны перед собой, который при приземлении замедляет и накладывает немоту на всех ближайших вражеских героев в течение ${toSec(ItemAbilityData.DIVINE_KATANA_DURATION / 1000)} сек., а также раскрывает все невидимые цели вокруг себя и даёт беспрепятственный обзор в течение этого времени. (Перезарядка: ${(ItemAbilityData.DIVINE_KATANA_COOLDOWN / 1000).toFixed(1)} сек.)`,
                en: `[ACTIVE]: Throws a fragment of the katana next to you for ${toSec(ItemAbilityData.DIVINE_KATANA_DURATION)} seconds. Upon impact with the ground, the katana slows enemies by and silences them while inside its radius, also providing unobstructed vision and revealing all invisible units. (Cooldown: ${toSec(ItemAbilityData.DIVINE_KATANA_COOLDOWN)} seconds)`,
                br: `[Ativo]: Joga a katana divina perto de você, no momento do impacto fornece visão desobstruída, silencia e desacelera todos os heróis inimigos na área. Além disso, revelará todas as unidades invisíveis na área. \n (${toSec(ItemAbilityData.DIVINE_KATANA_DURATION)} seg de duração da katana no chão).\n [Tempo de recarga: ${toSec(ItemAbilityData.DIVINE_KATANA_COOLDOWN)} seg.]`,
                zh: `主動技：在你前方投擲片段武士刀，提供寬廣視野，沉默且減速在範圍內的敵方英雄。此外能揭發隱蔽單位 (${toSec(ItemAbilityData.DIVINE_KATANA_DURATION)}秒間斷性時長)。(冷卻時間：${toSec(ItemAbilityData.DIVINE_KATANA_COOLDOWN)})`,
            }
        };
    case Shared.ItemList.Iron_Basher:
        return {
            name: {
                en: 'Spiked Mace',
                ru: 'Шипастая булава',
                br: 'Maçã Cravada',
                zh: '尖刺錘',
            },
            desc: {
                en: `UNIQUE: Your basic attacks deal additional ${ItemAbilityData.SPIKED_MACE_DAMAGE} physical damage and apply Griveous Wounds for ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)} seconds. (Griveous Wounds reduce all healing and regeneration effects applied on target by 60%).`,
                br: `[Único]: Seus ataques normais causam dano adicional ${ItemAbilityData.SPIKED_MACE_DAMAGE} dano normal e aplica um ferimento grave por ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)}.\n (Ferimento grave reduz todos os efeitos de cura e regeneração do alvo em 60%).`,
                ru: `УНИКАЛЬНО (Пассивно): Ваши атаки наносят дополнительно ${ItemAbilityData.SPIKED_MACE_DAMAGE} физического урона и накладывают на цель эффект Страшных ран на ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)} сек. (Страшные раны уменьшают всё входящее исцеление и эффекты регенерации на 60%).`,
                zh: `特殊：你的一般攻擊給予額外 ${ItemAbilityData.SPIKED_MACE_DAMAGE}點一般傷害並給予 ${toSec(ItemAbilityData.SPIKED_MACE_DURATION)}創傷。(創傷降低目標物的所有治癒即回血效果 60%)。`
            }
        };
    case Shared.ItemList.Plague_Ring:
        return {
            name: {
                en: 'Plague Ring',
                ru: 'Чумное кольцо',
            },
            desc: {
                en: `UNIQUE: Your abilites apply Plague on enemies for ${toSec(ItemAbilityData.PLAGUE_RING_DURATION)}. (Plague reduces all healing and regeneration effects applied on target by 35%).`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши способности накладывают эффект Чумы на вражеских героев на ${toSec(ItemAbilityData.PLAGUE_RING_DURATION)}. (Чума уменьшает всё входящее исцеление и эффекты регенерации на 35%).`,
            }
        };

    case Shared.ItemList.Cold_Sword:
        return {
            name: {
                en: 'Sword of the Frozen Emperor',
                ru: 'Меч Ледяного Императора',
                br: 'Espada do Imperador Congelado',
                fr: 'Épée gelée',
                zh: '寒冰之劍',
            },
            desc: {
                en: `UNIQUE: Your basic attacks slow enemy heroes by ${ItemAbilityData.COLD_SWORD_SLOW} Movement Speed for 1 second`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают Скорость передвижения цели на ${ItemAbilityData.COLD_SWORD_SLOW} на 1 сек.`,
                br: `[Único]: Seus ataques reduzem o movimento do inimigo em ${ItemAbilityData.COLD_SWORD_SLOW} por 1 segundo.`,
                cz: `JEDINEČNÉ: Útoky zpomalují nepřátele o ${ItemAbilityData.COLD_SWORD_SLOW} za vteřinu`,
                fr: `[UNIQUE]: Tes attaques J réduisent la vitesse de déplacement de ton ennemie de ${ItemAbilityData.COLD_SWORD_SLOW} points de vitesse pendant 1 seconde`,
                zh: `特殊：你的一般攻擊降低敵方 1秒移動速度值 ${ItemAbilityData.COLD_SWORD_SLOW}`,
            }
        };

    case Shared.ItemList.Demon_Sabre:
        return {
            name: {
                en: 'Demon Sabre',
                ru: 'Сабля демона',
                br: 'Sabre Demoníaco',
                fr: 'Sabre du démon',
                zh: '惡魔軍刀',
            },
            desc: {
                en: `UNIQUE: Your basic attacks reduce enemy armor by ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} for 4 seconds. 
                        <br />
                        UNIQUE: For every minion kill (+1 stack), hero kill (+5 stacks) or assist (+2 stacks) you gain ${ItemAbilityData.DEMON_SABRE_STACK_DMG} Attack Damage (Max: ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS} Attack Damage at 20 stacks). All stacks are lost upon death.`,
                br: `[Único]: Seus ataques normais diminuem a armadura inimiga em ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} por 4 segundos.
                        <br />
                        [Único]: Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${ItemAbilityData.DEMON_SABRE_STACK_DMG} de dano (máximo ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую Броню на ${ItemAbilityData.DEMON_SWORD_ARMOR_REDUCTION} на 4 сек. 
                        <br />
                        УНИКАЛЬНО(Пассивно): Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает Силу атаки на ${ItemAbilityData.DEMON_SABRE_STACK_DMG} (Максимальная прибавка: ${ItemAbilityData.DEMON_SABRE_STACK_DMG * ItemAbilityData.DEMON_SABRE_MAX_STACKS} Силы атаки за 20 зарядов). Все заряды теряются после смерти.`,
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
        };
    case Shared.ItemList.Corrupted_Light_Slayer:
        return {
            name: {
                en: 'Corrupted Light Slayer',
                ru: 'Искажённый губитель света',
                br: 'Corta Luz corrompido',
                fr: 'Tueur de Lumière Corrompu',
                zh: '腐化的輕量殺手',
            },
            desc: {
                en: `[ACTIVE]: Temporarily gives you additional ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% Lifesteal for ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} seconds (Cooldown: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Увеличивает ваш вампиризм на ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% на ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: Aumenta sua regeneração de vida em ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% por ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} seg.]`,
                cz: `AKTIVNÍ: Zvýší tvojí krádež zdravý o ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% na ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} vteřin`,
                fr: `[ACTIVATION]: Augmente ton vol de vie de ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% pour ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération : ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} sec]`,
                zh: `主動技：增加 ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)}秒你的吸血值 ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };
        /** Wooden Bow */
    case Shared.ItemList.Berserker_Bow:
        return {
            name: {
                en: 'Berserker\'s Bow',
                ru: 'Лук берсерка',
                br: 'Besta Incontrolável',
                fr: 'Arc du Berserker',
                zh: '狂戰士之弓',
            },
            desc: {
                en: `UNIQUE: Every time your basic attacks hit enemy heroes, you gain ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% bonus Attack Speed for ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seconds. Consecutive hits refresh the duration and add stacks, and at the 5th stack, you heal 15% of your Max Health, and it resets your stacks.`,
                ru: `УНИКАЛЬНО(Пассивно): Попадая атаками по врагу, вы увеличиваете свою Скорость атаки на ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% на ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} сек. Складывается до 5 раз. Получив 5 зарядов вы исцеляетесь на 15% от макс. Здоровья и обнуляете количество зарядов.`,
                br: `[Único]: Cada vez que você atinge o personagem inimigo, aumenta sua velocidade de ataque em ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% por ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seg.\n No 5° acúmulo, ele cura você em 15% de vida máxima e reseta os acúmulos.`,
                cz: `JEDINEČNÉ: Pokaždé když zasáhneš protivnika tak si zvýšís rychlost útoků o ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% na ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} vteřin. Při pátém útoku vás vyléčí o 15% maximálního zdravý a resetuje efekt`,
                fr: `[UNIQUE]: Chaque attaque J réussie augmente ta vitesse d'attaque de ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% pour ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec. \n Lorsque tu atteins la 5e charge, tu es soigné pour 15% du maximum de tes points de vie et les charges sont remises à zéro.`,
                zh: `特殊：每當你的一般攻擊擊中敵方英雄，增加 ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)}秒你的攻擊速度 ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}%。在第五次疊加時恢復你最大值 15%的血量並重置疊加`,
            }
        };
    case Shared.ItemList.Magical_Bow:
        return {
            name: {
                en: 'Bow of Lost Souls',
                ru: 'Лук потерянных душ',
                br: 'Arco das Almas perdidas',
                fr: 'Arc magique',
                zh: '魔法之弓',
            },
            desc: {
                en: 'UNIQUE: When you damage the enemy hero with an ability, you gain 10 bonus Movement Speed for 1.5 seconds. <br /> <br />' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                ru: 'УНИКАЛЬНО(Пассивно): Успешное нанесение урона способностями увеличивает вашу Скорость передвижения на 10 на 1.5 сек. <br /> <br />' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                br: '[Único]: Um golpe bem-sucedido com suas habilidades, aumenta sua velocidade de movimento em 10 por 1.5 seg. <br /> <br />' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                cz: 'JEDINEČNÉ: Úspěšný zásah tvé schopnosti zvýší tvou rychlost o 10 na 1.5 vteřin <br /> <br />' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                fr: '[UNIQUE]: Chaque compétence K ou L réussie augmente ta vitesse de déplacement de 10 points de déplacement pour 1.5 sec. <br /> <br />' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                zh: '特殊：你的魔法攻擊成功擊中敵方英雄時，增加 1.5秒你的移動速度值 10 <br /> <br />' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
            }
        };
    case Shared.ItemList.Poison_Bow:
        return {
            name: {
                en: 'Poison Bow',
                ru: 'Ядовитый лук',
                br: 'Arco de Veneno concentrado',
                fr: 'Arc empoisonné',
                zh: '劇毒之弓',
            },
            desc: { en: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1) }
        };

    case Shared.ItemList.Corrupted_Longbow:
        return {
            name: {
                en: 'Corrupted Longbow',
                ru: 'Искажённый длинный лук',
                br: 'Arco Corrompido',
                fr: 'Arc long corrompu',
                zh: '腐化的長弓',
            },
            desc: {
                en: `[ACTIVE]: Corrupts your blood and makes you powerful, giving you bonus ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% Attack Speed and ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} Movement Speed for ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} seconds.<br />` +
                        `This effect also reduces your Armor by ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} and Magic Resistance by ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}% (Cooldown: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} seconds)`
                        + '<br /> <br /><b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                ru: `УНИКАЛЬНО(Активно): Увеличивает вашу Скорость атаки на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% и Скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} сек.<br />` +
                        `Во время этого эффекта ваша Броня уменьшается на ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} и Сопротивление магии на ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} сек.)`
                        + '<br /> <br /><b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                br: `[Ativo]: Faz com que você aumente sua velocidade de ataque em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% e velocidade de movimento por ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} por ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} seg.<br />` +
                        `[Maldição]: O efeito colateral de usar esse item é reduzir sua armadura em ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} e ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}% da sua resistência mágica.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} seg.]`
                        + '<br /> <br /><b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                fr: `[ACTIVATION]: Gain de puissance. Ta vitesse d'attaque est augmentée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% et ta vitesse de déplacement est améliorée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} pour ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.<br />` +  
                        `[MALÉDICTION]: Diminution de ton armure de ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} et de ta résistance magique de ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%. \n [Délai de récupération : ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} sec.]`
                        + '<br /> <br /><b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                zh: `主動技：賦予你增加 ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)}秒你的攻擊速度 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}%與移動速度值 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}。<br />` +
                        `副作用：賦予你降低裝甲值 ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR}與 ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%魔法抗性 - ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`
                        + '<br /> <br /><b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
            }
        };
    case Shared.ItemList.Rapids_Longbow_T2:
        return {
            name: {
                en: 'Rapid Longbow',
                ru: 'Быстрый длинный лук',
                br: 'Besta da Velocidade encantada',
                fr: 'Arc long rapide',
                zh: '疾風長弓',
            },
            desc: {
                en: `UNIQUE - [ACTIVE]: Consume the item and get permanent ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% Attack Speed.`,
                ru: `УНИКАЛЬНО(Активно): Поглотите этот предмет и получите ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% Скорости атаки навсегда.`,
                br: `[Único]: Quando ativado, Consumirá o item ganhando permanente ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% de bônus de velocidade de ataque!`,
                fr: `[ACTIVATION]: Consume l'objet en libérant un espace d'inventaire et en gagnant de façon permanente ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% de vitesse d'attaque !`,
                zh: `特殊 - 主動：消耗物品以永久獲得 ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}%攻擊速度增量！`,
            }
        };
        /** Nowice staff */
    case Shared.ItemList.Burning_Rod:
        return {
            name: {
                en: 'Burning Rod',
                ru: 'Пылающий жезл',
                br: 'Cajado Incandescente',
                fr: 'Baguette brûlante',
                zh: '燃燒法棒',
            },
            desc: {
                en: `UNIQUE: Your abilites ignite the enemy hero and deal Magical Damage equal to ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% of their Max Health for ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши способности поджигают врага и он получает дополнительный Магический урон в размере ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% от своего макс. Здоровья в сек. в течение ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} сек.`,
                br: `[Único]: Suas habilidades incineram os inimigo causando dano adicional de ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% vida máxima por seg, por ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} seg.`,
                fr: `[UNIQUE]: Tes compétences K et L brûlent tes ennemies et font des dégâts additionnels pour ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% de leurs points de vie maximum pour ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec.`,
                zh: `特殊：你的技能點燃敵方並額外給予 ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)}秒每秒最大血量 ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}%傷害`,
            }
        };
    case Shared.ItemList.Vampiric_Rod:
        return {
            name: {
                en: 'Vampiric Rod',
                ru: 'Вампирический жезл',
                br: 'Cajado Vampírico',
                fr: 'Baguette vampirique',
                zh: '吸血鬼法棒',
            },
            desc: {
                en: `UNIQUE: Your abilities heal you for ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% of damage dealt.`,
                br: `[Único]: Quando seu ataque mágico atinge um personagem inimigo, ele curará você em ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% de dano causado.`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши способности исцеляют вас на ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% от нанесённого урона.`,
                zh: `特殊：當你的魔法攻擊擊中敵方英雄，從${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}%給予的傷害恢復自己生命值。`,
                // OLD //
                //ru: `УНИКАЛЬНО(Пассивно): Попадая по врагу, ваши способности похищают у цели ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% здоровья. (Перезарядка: ${fixed(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000, 1)} сек.)`,
                // br: `[Único]: Quando sua habilidade atinge o personagem inimigo, ela rouba ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% de vida.\n [Tempo de recarga: ${fixed(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000, 1)} seg.]`,
                // fr: `[UNIQUE]: Quand tes compétences K et L touchent l'ennemie, cela vole ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% points de vie. \n [Délai de récupération: ${fixed(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000, 1)} sec.]`,
            }
        };
    case Shared.ItemList.Kirin_Staff:
        return {
            name: {
                en: 'Kirin\'s Staff',
                ru: 'Посох Кирина',
                br: 'Cajado de Kirin',
                fr: 'Bâton de Kirin',
                zh: '麒麟法棍',
            },
            desc: {
                en: `UNIQUE: Your abilities lower the enemy's Magic Resistance by ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% for 4 seconds. This effect does not stack with other sources.`,
                br: `[Único]: Suas habilidades penetram a resistência mágica do alvo em ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%, este efeito não se acumula com outras fontes.`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают Сопротивление магии цели на ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% на 4 секунды. Этот эффект не складывается с другими источниками`,
                zh: `特殊：你的技能拆穿目標物的魔法抗性 ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%，此效果將不會疊加於其他資源`

                // Need Update
                // br: `[Único]: Suas habilidades penetram a resistência mágica do alvo em ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% por 4 seg, este efeito não se acumula com outras fontes.`,
                // fr: `[UNIQUE]: Tes compétences K et L pénétrent les résistances magiques de ta cible pour ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% pour 4 sec. Cet effet ne se cumule pas avec d'autres sources.`,
            }
        };
    case Shared.ItemList.Corrupted_Staff:
        return {
            name: {
                en: 'Corrupted Staff',
                br: 'Cajado corrompido',
                ru: 'Искажённый посох',
                zh: '腐化的法棍',
            },
            desc: {
                en: `UNIQUE: Increases your Ability Power by ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%.`,
                br: `[Único]: Fornece o adicional de ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}% de poder de habilidade!`,
                ru: `УНИКАЛЬНО(Пассивно): Повышает вашу Силу умений на ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%.`,
                zh: `特殊：提供額外的 ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%技能威力！`,
            }
        };
    case Shared.ItemList.Frozen_Staff:
        return {
            name: {
                en: 'Staff of the Frozen Empress',
                ru: 'Посох Ледяной Императрицы',
                br: 'Cajado da Imperatriz Congelada',
                fr: 'Baguette gelée',
                zh: '冰結法棍',
            },
            desc: {
                en: `UNIQUE: Your abilities slow enemies down by ${ItemAbilityData.FROZEN_STAFF_SLOW} Movement Speed and decrease Attack Speed by ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}% for ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} seconds (Cooldown: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} seconds)`,
                br: `[Único]: Suas habilidades reduzem a velocidade de movimento do inimigo em ${ItemAbilityData.FROZEN_STAFF_SLOW} e velocidade de ataque por ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}% por ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают Скорость передвижения цели на ${ItemAbilityData.FROZEN_STAFF_SLOW} и Скорость атаки на ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}% на ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} сек.)`,
                zh: `特殊：你的技能降低 ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)}秒對手的移動速度值 ${ItemAbilityData.FROZEN_STAFF_SLOW}與 ${fixed((ItemAbilityData.FROZEN_STAFF_SLOW_ATTACK * 100), 1)}%攻擊速度 - ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };
    case Shared.ItemList.Iron_Rod:
        return {
            name: {
                en: 'Staff of Iron Warriors',
                ru: 'Жезл железных воинов',
                br: 'Cajado dos Guerreiros de ferro',
                fr: 'Baguette de fer',
                zh: '鐵之法棒',
            },
            desc: { en: getIronRodDescription() }
        };
    case Shared.ItemList.Magic_Harpoon: {
        return {
            name: {
                en: 'Magic Harpoon',
                ru: 'Волшебный гарпун',
                br: 'Arpão Mágico',
                fr: 'Harpon magique',
                zh: '魔法叉戟',
            },
            desc: {
                en: `UNIQUE: When your abilities hit an enemy hero, your next basic attack deals bonus ${ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE} (+ ${fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1)}% Ability Power) Magic Damage.`,
                ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE} (+ ${fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1)}% Силы умений) магического урона.`,
                br: `[Único]: Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE} + ${fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1)}% de dano.`,
                fr: `[UNIQUE]: Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE} + ${fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1)}% dégâts supplémentaires.`,
                zh: `特殊：當你的魔法攻擊擊中敵方英雄，你的下一個一般攻擊對敵方英雄造成額外 ${ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE} + ${fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1)}% 點一般傷害`,
            }
        };
    }
    case Shared.ItemList.Orchid_of_Malevolence:
        return {
            name: {
                en: 'Orchid of Malevolence',
                ru: 'Орхидея злобы',
                br: 'Cajado Orquídea da Malevolência',
                fr: 'Orchidée de Malveillance',
                zh: '惡毒蘭花',
            },
            desc: {
                en: `[ACTIVE]: Shoots a dark arrow that pierces through enemies, silencing them for ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seconds. At the end of its duration, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% of the damage received by the enemy is inflicted as bonus Magic Damage. (Cooldown: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} seconds)` + '<br />' + getIronRodDescription(),
                ru: `УНИКАЛЬНО(Активно): Выпускает тёмную стрелу в вашем направлении, которая пронзает несколько целей, накладывая на них немоту на ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. По окончании эффекта цели получают ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% от полученного урона за время действия немоты в виде магического урона. (Перезарядка: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} сек.)` + '<br />' + getIronRodDescription(),
                br: `[Ativo]: Acumula maldade lançando na direção que seu personagem está olhando, perfurando os inimigos e os silenciando por ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seg, e no final do silênciar, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% de dano enquanto silenciado infligindo como dano mágico adicional.\n [Tempo de recarga: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} seg.]` + '<br />' + getIronRodDescription(),
                fr: `[ACTIVATION]: Envoie une sombre flèche dans ta direction, qui traverse tes ennemies et les réduits au silence pour ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec. À la fin de ce délai, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% des dégâts reçus par l'ennemi sont infligés sous forme de dégâts magiques supplémentaires. \n [Délai de récupération : ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec.]` + '<br />' + getIronRodDescription(),
                zh: `主動技：向前方釋放暗箭貫穿敵方，沉默 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)}秒所有敵方並在沉默結束後，期間造成的傷害 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}%追加為魔法傷害。 - ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };
    case Shared.ItemList.Divine_Staff_T2:
        return {
            name: {
                en: 'Divine Staff',
                ru: 'Божественный посох',
                br: 'Cajado da Deusa da floresta',
                fr: 'Baguette divine',
                zh: '神聖法棍',
            },
            desc: {
                en: `[ACTIVE]: Heals all ally units in ${ItemAbilityData.DIVINE_STAFF_RADIUS}px radius for ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} Health, grants bonus ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} Movement Speed for ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} and removes all negative effects. (Cooldown: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} seconds).
                        <br /> This effect has an inner cooldown of 12 seconds during which any additional or other activations will be ignored. (Can not be reduced by cooldown reduction)`,
                ru: `УНИКАЛЬНО(Активно): Исцеляет ближайшим союзным целям в радиусе ${ItemAbilityData.DIVINE_STAFF_RADIUS} пикселей ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} Здоровья, снимая все негативные эффекты, а также накладывая ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} бонусной Скорости передвижения на ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} сек.) 
                        <br /> Этот эффект имеет внутреннюю перезарядку длительностью 12 сек. В течение этого времени активный эффект этого предмета не работает на ранее задетых целях (Не может быть уменьшено Сокращением перезарядки)`,
                br: `[Ativo]: Cura todas as unidades próximas de ${ItemAbilityData.DIVINE_STAFF_RADIUS}px raio por ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, aplica ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} velocidade de movimento bônus e remova todos os efeitos negativos por ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]
                        <br /> Este efeito tem o tempo de recarga de 12 segundos.(não pode ser reduzido pela redução de tempo de recarga), durante este tempo, este efeito é totalmente ignorado`,
                fr: `[ACTIVATION]: Soigne toutes les unités dans un rayon de ${ItemAbilityData.DIVINE_STAFF_RADIUS}px pour ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}. Fournit ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} points de vitesse de déplacement et supprime tous les effets négatifs pour ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération : ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} sec.]
                        <br /> Cet effet a un délai de réduction interne de 12 sec qui ne peut pas être réduit. Pendant ce délai, l'effet est complétement ignoré.`,
                zh: `主動技：治癒所有半徑 ${ItemAbilityData.DIVINE_STAFF_RADIUS}像素內的鄰近單位 ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}點生命值，給予 ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED}點額外速度 ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)}秒並移除所有負面效果 - ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)}秒冷卻時間
                        <br /> 此效果有內建 12秒冷卻時間 (無法透過縮短冷卻時間來減少)，在期間內，再次發動效果將被完全無試`,
            }
        };

    case Shared.ItemList.Vampiric_Shield:
        return {
            name: {
                en: 'Vampiric Shield',
                ru: 'Вампирический щит',
                br: 'Escudo Vampírico',
                fr: 'Bouclier vampirique',
                zh: '吸血鬼護盾',
            },
            desc: {
                en: `UNIQUE: When you take damage and your health falls below ${fixed(ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100, 1)} Health, you remove all negative effects from yourself and receive ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN} Health Regeneration for ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)} seconds. (Cooldown: ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_COOLDOWN)} seconds) (Only triggers on player-based damage)`,
                ru: `УНИКАЛЬНО(Пассивно): При получении урона, при котором ваше здоровье опускается ниже ${fixed(ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100, 1)}, вы снимаете с себя все негативные эффекты и получаете ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN} Регенерации здоровья на ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)} сек. (Перезарядка: ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_COOLDOWN)}. (Срабатывает только при получении урона от вражеских героев)`,
            }
        };

    case Shared.ItemList.Divine_Shield:
        return {
            name: {
                en: 'Divine Shield',
                ru: 'Божественный щит',
                br: 'Escudo da Deusa da floresta',
                fr: 'Bouclier divin',
                zh: '神聖護盾',
            },
            desc: {
                en: `[ACTIVE]: Gives bonus ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} Armor and ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% Magic Resistance to all allies in close proximity ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} seconds. (Cooldown: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Даёт дополнительные ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} Брони и ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% Сопротивления магии всем ближайшим союзным целям на ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: Dá mais ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} de armadura e ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% defesa mágica para todas as unidades aliadas nas proximidades por ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                fr: `[ACTIVATION]: Donne un supplément de ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} points d'armure et ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}% de défense magique à toutes les unités alliées à proximité pour ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                zh: `主動技：給予所有鄰近友好單位 ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)}秒額外 ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR}點裝甲值與 ${calculateMagicDefense(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF)}%魔法抗性 - ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };

    case Shared.ItemList.Spike_Shield:
        return {
            name: {
                en: 'Spike Shield',
                ru: 'Шипастый щит',
                br: 'Escudo de Espinhos sombrio',
                fr: 'Bouclier piquant',
                zh: '尖刺護盾',
            },
            desc: {
                en: `[ACTIVE]: Creates a barrier that returns 100% of the received damage you take (after reduction) to the attacker for ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} seconds. (Cooldown: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Создаёт барьер, который возвращает 100% полученного урона (с учётом брони) обратно атакующему врагу в течение ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: Quando ativado, retorna 100% do dano recebido de volta ao atacante (após a redução) por ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                fr: `[ACTIVATION]: Retourne 100% des dégâts reçus à l'attaquant (après réduction) pour ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                zh: `主動技：發動 ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)}秒期間，回彈 100%接收到的傷害給攻擊者 (扣除防禦後) - ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };

    case Shared.ItemList.GarunsDefender:
        return {
            name: {
                en: 'Garun\'s Defender',
                ru: 'Защитник Гаруна',
                br: 'Defensor de Garun',
                fr: 'Bouclier de Garun',
                zh: '加侖的守護者',
            },
            desc: {
                en: `[ACTIVE]: Smashes the ground around you, dealing ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} physical damage and stunning enemies hit for ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} seconds. (Cooldown: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Наносит ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} урона всем врагам вокруг, дополнительно оглушая цели на ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: Destrói todos os inimigos ao redor do personagem em um pequeno raio, ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dano e atordoando todos os inimigos por ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} seg.]`,
                fr: `[ACTIVATION]: Frappe tous les ennemis autour de ton héros à proximité étroite. Fait ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} dégâts et assome tous les ennemis pour ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} sec.]`,
                zh: `主動技：潰擊所有在你四周小範圍內的敵方，給予 ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE}點一般傷害並給予所有敵方 ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)}秒暈眩 - ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };
    case Shared.ItemList.Plate_Shield:
        return {
            name: {
                en: 'Plate Shield',
                ru: 'Латный щит',
                br: 'Escudo de Placas reforçadas',
                fr: 'Bouclier à plaque',
                zh: '金屬護盾',
            },
            desc: {
                en: `[ACTIVE]: Releases shockwave which travels through the air, dealing bonus ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} physical damage to enemies and reducing enemies' Movement Speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} for ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seconds. (Cooldown: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)})`,
                br: `[Ativo]: Ondas de choque viajam pelo ar causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dano normal e reduzindo a velocidade de movimento do inimigo em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                ru: `УНИКАЛЬНО(Активно): Создаёт ударную волну, которая наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} урона и уменьшает скорость передвижения на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} у всех врагов на своём пути на ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                zh: `主動技：釋放衝擊波，給予 ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE}點一般傷害並降低 ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)}秒敵方的移動速度值 ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} - ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
                // need fix
                //br: `[Ativo]: Ondas de choque viajam pelo ar causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dano e reduzindo a velocidade de movimento do inimigo em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} , torna todas as unidades afetadas visíveis por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                //fr: `[ACTIVATION]: Envoi une onde de choc qui se propage en faisant ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dégâts and en réduisant la vitesse de déplacement des ennemis de ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} points de vitesse. Toutes les unités affectés sont visible pour ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
            }
        };
    case Shared.ItemList.Kirins_Defender:
        return {
            name: {
                en: 'Kirin\'s Defender',
                ru: 'Защитник Кирина',
                br: 'Defensor de Kirin',
                fr: 'Bouclier de Kirin',
                zh: '麒麟的守護者',
            },
            desc: {
                en: `UNIQUE: Absorbs any Crowd Control effect every ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seconds. Sucessful block provides you ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}% Magic Resistance for ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seconds.`,
                br: `[Único]: Defensor de Kirin bloqueia o próximo efeito de CC uma vez a cada ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seg, se o bloqueio for bem sucedido, fornecer ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}% de resistência mágica por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.`,
                ru: `УНИКАЛЬНО (ПАССИВНО): Блокирует любой эффект контроля каждые ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} сек. Успешный блок повышает ваше Сопротивление магии на  ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}% на ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} сек.`,
                zh: `特殊：麒麟的守護者每次發動 ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()}秒內格擋下一個有冷卻時間效果的招式，成功格擋時提供 ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()}秒 ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}%的魔法抗性。`,
                // UPDATE
                //br: `[Único]: Quando você recebe dano mágico, o Kirin cria uma barreira ao seu redor, reduzindo a duração de todos os efeitos negativos em 75% e diminuindo ainda mais ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE)}% do dano mágico por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.\n [Tempo de recarga: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seg.]`,
                //fr: `[UNIQUE]: Lorsque tu reçois des dégâts magiques, le Bouclier de Kirin créer une barrière autour de toi qui réduit la durée de tous les effets négatifs de 75% et diminue les dégâts magiques de ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE)}% pour ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec. \n [Délai de récupération: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} sec.]`,
            }
        };
        /** Rings */
    case Shared.ItemList.Demonic_Ring:
        return {
            name: {
                en: 'Demonic Ring',
                ru: 'Демоническое кольцо',
                br: 'Anel Demoníaco',
                fr: 'Anneau démonique',
                zh: '惡魔手環',
            },
            desc: {
                en: `UNIQUE: Your basic attacks lower the enemy's armor by ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% for 4 seconds`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую Броню на ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% на 4 сек.`,
                br: `[Único]: Seus ataques reduzem a armadura inimiga por ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% por 4 segundos.`,
                fr: `[UNIQUE]: Tes attaques diminuent l'armure de ton ennmi de ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% points d'armure pour 4 sec.`,
                zh: `特殊：你的一般攻擊降低 4秒敵方裝甲值 ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}%`,
            }
        };
    case Shared.ItemList.Gold_Ring:
        return {
            name: {
                en: 'Gold Ring',
                ru: 'Золотое кольцо',
                br: 'Anel da Fortuna',
                fr: 'Anneau d\'or',
                zh: '黃金手環',
            },
            desc: {
                en: 'UNIQUE: Killing an enemy unit or assisting for hero kill gives additional 25 golds',
                ru: 'УНИКАЛЬНО(Пассивно): Убивая вражеских миньонов или получая содействия в убийстве вражеских героев, вы получаете дополнительно 25 золота',
                br: '[Único]: Matar uma unidade inimiga ou personagem, faz com que você ganhe 25 ouros adicionais.',
                zh: '特殊：殺死一個敵方單位或助攻殺死敵方英雄獲得額外25枚黃金',
            }
        };

    case Shared.ItemList.Frost_Ring:
        return {
            name: {
                en: 'Ring of the Frozen Empress',
                ru: 'Кольцо Ледяной Императрицы',
                br: 'Anel Congelado da Imperatriz',
                zh: '冰霜手環',
            },
            desc: {
                en: `[ACTIVE]: Fires out a frozen bolt that freezes the enemy hit for ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} seconds and does ${ItemAbilityData.FROST_RING_DAMAGE} magic damage. (Cooldown: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Выпускает ледяной снаряд, который замораживает цель при попадании на ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} сек. и наносит ей ${ItemAbilityData.FROST_RING_DAMAGE} магического урона. (Перезарядка: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: O anel cria um estilhaço de gelo que congela o alvo no impacto por ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} seg e dá ${ItemAbilityData.FROST_RING_DAMAGE} de dano.\n [Tempo de recarga: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                zh: `主動技：創造一個冰箭凍結目標物 ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)}秒並給予 ${ItemAbilityData.FROST_RING_DAMAGE}點魔法傷害 - ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };

    case Shared.ItemList.Chronos_Ring:
        return {
            name: {
                en: 'Chronos Ring',
                br: 'Anel do Mago do tempo',
                ru: 'Кольцо Хроноса',
                zh: '時辰手環',
            },
            desc: {
                en: `[ACTIVE]: Increases your Cooldown Reduction by ${ItemAbilityData.CHRONOS_RING_CDR_ACTIVE} for ${toSec(ItemAbilityData.CHRONOS_RING_DURATION)} seconds. (Cooldown: ${toSec(ItemAbilityData.CHRONOS_RING_COOLDOWN)} seconds)
                    <br />
                    UNIQUE: For every minion kill (+1 stack), hero kill (+5 stacks) or hero assist (+2 stacks) you gain ${ItemAbilityData.CHRONOS_RING_STACK_AP} Ability Power (Max: ${ItemAbilityData.CHRONOS_RING_STACK_AP * ItemAbilityData.CHRONOS_RING_MAX_STACKS} Ability Power at 20 stacks). All stacks are lost upon death.`,
                ru: `УНИКАЛЬНО(Активно): Повышает Сокращение перезарядки на ${ItemAbilityData.CHRONOS_RING_CDR_ACTIVE} на ${toSec(ItemAbilityData.CHRONOS_RING_DURATION)} сек. (Перезарядка: ${toSec(ItemAbilityData.CHRONOS_RING_COOLDOWN)} сек.)
                    <br />
                    УНИКАЛЬНО(Пассивно): Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает Силу умений на ${ItemAbilityData.CHRONOS_RING_STACK_AP} (Максимумальная прибавка: ${ItemAbilityData.CHRONOS_RING_STACK_AP * ItemAbilityData.CHRONOS_RING_MAX_STACKS} Силы умений за 20 зарядов). Все заряды теряются после смерти.`,
                /* @NEED UPDATE br: `[Único]: Suas habilidades penetram a resistência mágica do alvo em ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%, este efeito não se acumula com outras fontes.
                        <br />
                        [Único]: Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${ItemAbilityData.CHRONOS_RING_STACK_AP} poder de habilidade (máximo ${ItemAbilityData.CHRONOS_RING_STACK_AP * ItemAbilityData.CHRONOS_RING_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                zh: `特殊：你的技能拆穿目標物的魔法抗性 ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%，此效果將不會疊加於其他資源
                        <br />
                        特殊：每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${ItemAbilityData.CHRONOS_RING_STACK_AP}點技能威力 (最大值 ${ItemAbilityData.CHRONOS_RING_STACK_AP * ItemAbilityData.CHRONOS_RING_MAX_STACKS})。所有疊加在死亡後歸零。`,
                */
            }
        };
    case Shared.ItemList.Corrupted_Ring:
        return {
            name: {
                en: 'Corrupted Ring',
                ru: 'Искажённое кольцо',
                br: 'Anel Corrompido',
                zh: '腐化的手環',
            },
            desc: {
                en: `[ACTIVE]: Dashes you forward in your direction. (Cooldown: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Вы совершаете рывок в направлении своего движения. (Перезарядка: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: Lança seu personagem para frente na direção que ele está olhando.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                zh: `主動技：朝你的前方向前衝刺 - ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };

    case Shared.ItemList.Berserker_Ring:
        return {
            name: {
                en: 'Berserker Ring',
                br: 'Anel do Lutador',
                ru: 'Кольцо берсерка',
                zh: '狂戰士手環',
            },
            desc: {
                en: `UNIQUE: Your attacks deal ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} more damage for each 10% HP you are missing.`,
                ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят на ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} ед. больше физического урона за каждые недостающие 10% вашего здоровья.`,
                br: `[Único]: Seus ataques dão ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} a mais de dano para cada 10% de vida que você tenha perdido.`,
                zh: `特殊：每當你的總HP減少 10%，你的攻擊造成 ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG}點更多的傷害`,
            }
        };

        /** Armors */
    case Shared.ItemList.Frost_Armor:
        return {
            name: {
                en: 'Armor of the Frozen Emperor',
                ru: 'Броня Ледяного Императора',
                br: 'Armadura do Lorde congelado',
                zh: '冰霜鎧甲',
            },
            desc: {
                en: `UNIQUE: When you take damage, the attacker gets cursed, reducing ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} Movement Speed and ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}% Attack Speed.`,
                ru: `УНИКАЛЬНО(Пассивно): При получении урона Скрость передвижения нападающего будет снижкна на ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION}, а Скорость атаки - на ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                br: `[Único]: Quando você recebe dano, o inimigo que está te atacando será amaldiçoado e sua velocidade de movimento diminuirá em ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} e velocidade de ataque por ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%.`,
                zh: `特殊：當你受到一般傷害，攻擊者將受詛，降低移動速度值 ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION}與攻擊速度 ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
            }
        };

    case Shared.ItemList.Void_Armor:
        return {
            name: {
                en: 'Void Armor',
                ru: 'Броня пустоты',
                br: 'Armadura do Abismo',
                zh: '虛空鎧甲',
            },
            desc: {
                en: `[ACTIVE]: Gives you invisibility for ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} seconds granting you additional ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Movement Speed and ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Attack Damage. (Cooldown: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} seconds) cd\n (removes on attack or spell cast)`,
                ru: `УНИКАЛЬНО(Активно): Вы получаете невидимость на ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} сек., а также ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Скорости передвижения и ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Силы атаки. (Перезарядка: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)\n (эффект пропадает при атаке или использовании способностей)`,
                br: `[Ativo]: Torna você invisível por ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} seg, além disso, aumente sua velocidade de movimento em ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} e dano por ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} seg.\n (Acaba quando você usa algum ataque.)\n [Tempo de recarga: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} seg.]`,
                zh: `主動技：使你 ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)}秒隱蔽，額外增加你的移動速度值 ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}與一般傷害值 ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} - ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)}秒冷卻時間 (效果在攻擊或發動技能後移除)`,
            }
        };

    case Shared.ItemList.Titans_Armor:
        return {
            name: {
                en: 'Titan\'s Armor',
                ru: 'Броня титана',
                br: 'Armadura do Titan',
                zh: '泰坦的鎧甲',
            },
            desc: {
                en: `[ACTIVE]: Makes you immune to all incoming damage for ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} seconds, giving you ${ItemAbilityData.TITAN_ARMOR_REGENERATION} Health Regeneration and removing all negative effects. However, you cannot move, attack, use abilities or items during its effect. (Cooldown: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} seconds)`,
                ru: `УНИКАЛЬНО(Активно): Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к Регенерации здоровья в размере ${ItemAbilityData.TITAN_ARMOR_REGENERATION} на ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} сек. Вы не можете выполнять никакие действия, пока активен данный эффект. (Перезарядка: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)`,
                br: `[Ativo]: Aumente sua regeneração de vida em ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove todos os efeitos negativos e o torna imune a todos os danos recebidos por ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} seg.\n (Você não pode fazer nenhuma ação durante este efeito.)\n [Tempo de recarga: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} seg.]`,
                zh: `主動技：增加你的回血速度 ${ItemAbilityData.TITAN_ARMOR_REGENERATION}點，移除所有負面效果並使你 ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)}秒內無視所有襲來的攻擊。效果期間你無法採取任何動作！ - ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)}秒冷卻時間`,
            }
        };
    case Shared.ItemList.ChestOfMalevolence:
        return {
            name: {
                en: 'Chest of Malevolence',
                br: 'Armadura da Malevolência',
                ru: 'Нагрудник злобы',
                zh: '惡毒胸甲',
            },
            desc: {
                en: `UNIQUE: When you take magic damage, the attacker will be cursed and their Ability Power will be reduced by ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
                br: `[Único]: Sempre que você sofrer dano mágico, o atacante será amaldiçoado e seu poder de habilidade será reduzido em ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
                ru: `УНИКАЛЬНО(Пассивно): Всякий раз, когда вы получаете магический урон, атакующий будет проклят, а его Сила умений уменьшится на ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
                zh: `特殊：每當你受到魔法傷害，攻擊者將會受到詛咒，其技能威力被降低 ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%。`,
            }
        };

        /** Consumables */
    case Shared.ItemList.Healing_Potion:
        return {
            name: {
                en: 'Healing Potion',
                ru: 'Исцеляющее зелье',
                br: 'Poção das fadas',
                zh: '治癒藥水',
            },
            desc: {
                en: `[ACTIVE]: Grants ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} health regeneration for ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} sec <br /> If you are attacked, the effect is lost!`,
                ru: `Активно: Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} Регенерации здоровья на ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} сек. <br /> Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
                br: `[Ativo]: Beba a poção das fadas para receber regeneração de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} de vida por ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} seg.\n (Se você for atacado, o efeito será perdido!)`,
                zh: `主動技：賜予 ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)}秒 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}點回血速度 <br /> 如果你遭受攻擊，將會失去效用！`,
            }
        };

    case Shared.ItemList.Observer_Ward:
        return {
            name: {
                en: 'Observer Ward',
                ru: 'Тотем-наблюдатель',
                br: 'Pedra do Observador da floresta',
                zh: '偵查守衛',
            },
            desc: {
                en: `[ACTIVE]: Plants an Observer Ward, an invisible watcher that gives obstructed vision in a ${ItemAbilityData.WARD_VISION} px radius to your team. Lasts ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} seconds. If ward is visible to enemy team, they can destroy it!`,
                br: `[Ativo]: Planta uma pedra Observadora invisível que dá visão obstruída em ${ItemAbilityData.WARD_VISION} px raio para sua equipe.\n Dura ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
                ru: `Активно: Вы устанавливаете невидимый тотем, который раскрывает область вокруг себя в радиусе ${ItemAbilityData.WARD_VISION} пикселей в течение ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} сек. Если тотем видим для врагов, они могут уничтожить его!`,
                zh: `主動技：植入一個偵查守衛，一個隱蔽的觀察者賜予己方團隊半徑 ${ItemAbilityData.WARD_VISION}像素範圍內的受限視線。持續 ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)}。如果守衛能被敵隊看見，他們能摧毀它！`,
            }
        };
    case Shared.ItemList.Sentry_Ward:
        return {
            name: {
                en: 'Sentry Ward',
                br: 'Pedra do Observador corrompida',
                ru: 'Сторожевой тотем',
                zh: '哨兵守衛',
            },
            desc: {
                en: `[ACTIVE]: Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a radius. lasts for ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} seconds. If ward is visible to enemy team, they can destroy it!`,
                br: `[Ativo]: Planta uma pedra Observadora corrompida invisível que concede Visão Verdadeira, a habilidade de ver unidades e sentinelas inimigas invisíveis, para qualquer visão aliada existente dentro de um raio. dura por ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
                ru: `Активно: Вы устанавливаете невидимый сторожевой тотем, раскрывающий невидимых врагов и тотемы вокруг себя в радиусе ${ItemAbilityData.SENTRY_WARD_VISION} пикселей в течение ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} сек. Если тотем видим для врагов, они могут уничтожить его!`,
                zh: `主動技：植入一個哨兵守衛，一個隱蔽的觀察者賜予絕對視線，有能夠讓友軍在範圍內看見隱蔽敵方單位與守衛的能力。持續 ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)}秒。如果守衛能被敵隊看見，他們能摧毀它！`,
            }
        };
    case Shared.ItemList.Potion_Of_Magic:
        return {
            name: {
                en: 'Potion of Magic',
                br: 'Poção de Magia corrompida',
                ru: 'Зелье волшебства',
                zh: '魔法藥水',
            },
            desc: {
                en: `[ACTIVE]: Provide ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} ability power permanently, stacks up to 5 times!`,
                br: `[Ativo]: Da a quem beber ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} de Poder de habilidade permanentemente, acumula até 5 vezes!\n Sabor uva da floresta.`,
                ru: `Активно: Даёт вам ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} Силы умений навсегда. Эффект складывается до 5 раз!`,
                zh: `主動技：永久提供 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}點技能威力，疊加最多五次！`,
            }
        };
    case Shared.ItemList.Corrupted_Potion:
        return {
            name: {
                en: 'Corrupted Potion',
                br: 'Poção de força corrompida',
                ru: 'Искажённое зелье',
                zh: '腐化的藥水',
            },
            desc: {
                en: `[ACTIVE]: Provide ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} attack damage permanently, stacks up to 5 times!`,
                br: `[Ativo]: Da a quem beber ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} de dano de ataque permanentemente, acumula até 5 vezes!\n Sabor cereja do campo.`,
                ru: `Активно: Даёт вам ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} Силы атаки навсегда. Эффект складывается до 5 раз!`,
                zh: `主動技：永久提供 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}點攻擊傷害，疊加最多五次！`,
            }
        };
    default: return {
        name: { en: '' },
        desc: { en: '' }
    };
    }
};

const getPoisonBowDescription = (duration: number) => {
    const text: {[key: string]: string} = {
        en: `UNIQUE: Your basic attacks apply a deadly poison on the enemy hero, slowing them for ${ItemAbilityData.POISON_BOW_SLOW} Movement Speed and dealing ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} magic damage per second for ${(duration / 1000).toFixed(1)} seconds. (This effect can stack up 5 times, and every basic attack refreshes the duration.)`,
        ru: `УНИКАЛЬНО(Пассивно): Ваши атаки накладывают смертельный яд на вражеских героев, замедляя их на ${ItemAbilityData.POISON_BOW_SLOW} и нанося ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} урона в секунду в течение ${(duration / 1000).toFixed(1)} сек. (Этот эффект может складываться до 5 раз, и каждая последующая атака обновляет их длительность.)`,
        br: `[Único]: Seus ataques aplicam veneno no personagem inimigo e retarda o alvo por ${ItemAbilityData.POISON_BOW_SLOW} e adiciona ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} de dano por seg, por ${(duration / 1000).toFixed(1)} seg.\n (Este efeito pode acumular 5 vezes, cada duração de atualização de ataque.)`,
        fr: `[UNIQUE]: Tes attaques J empoisonne ton ennemie pour ${(duration / 1000).toFixed(1)} sec. Pendant cette période, il est ralenti de ${ItemAbilityData.POISON_BOW_SLOW} et reçoit ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} dégâts supplémentaires. \n (Cet effet peut se cumuler jusqu'à 5 fois, le délai d'empoisennement est remis à zéro à chaque attaque)`,
        zh: `特殊：你的一般攻擊給予敵方英雄致命毒害，降低應目標物移動速度值 ${ItemAbilityData.POISON_BOW_SLOW}點並給予 ${(duration / 1000).toFixed(1)}秒 ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME}點傷害。(此效果能疊加五次，每次攻擊刷新時長)`,
    };
    
    return text[LANG.value] ? text[LANG.value] : text['en'];
};

const getIronRodDescription = () => {
    const text: {[key: string]: string} = {
        en: `UNIQUE: : When your abilities hit an enemy hero, your next basic attack deals bonus ${ItemAbilityData.IRON_ROD_BASE_DAMAGE} (+ ${fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)}% Ability Power) magic damage to enemy hero.`,
        ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.IRON_ROD_BASE_DAMAGE} (+ ${fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)}% Силы умений) магического урона.`,
        br: `[Único]: Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${ItemAbilityData.IRON_ROD_BASE_DAMAGE} + ${fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)}% de dano.`,
        fr: `[UNIQUE]: Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${ItemAbilityData.IRON_ROD_BASE_DAMAGE} + ${fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)}% dégâts supplémentaires.`,
        zh: `特殊：當你的魔法攻擊擊中敵方英雄，你的下一個一般攻擊對敵方英雄造成額外 ${ItemAbilityData.IRON_ROD_BASE_DAMAGE} + ${fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)}%  點一般傷害`,
    };

    return text[LANG.value] ? text[LANG.value] : text['en'];
};

export const getLocaleItemDescription = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    if (!result.desc)
        return '';

    return result.desc[LANG.value] ? result.desc[LANG.value] : result.desc['en'];
};

export const getLocaleItemName = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    return result.name[LANG.value] ? result.name[LANG.value] : result.name['en'];
};

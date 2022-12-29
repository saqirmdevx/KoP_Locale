/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { ItemList, fixed, ItemAbilityData, CRITICAL_DAMAGE_MOD_175 } from 'shared'
//@ts-ignore
import { calculateMagicDefense } from 'misc/constants'
import { toSec } from './misc'
//@ts-ignore
import { LANG } from '../lang'

const _getLocaleItemDescription = (itemId: number): { name: { [key in string]: string }, desc?: { [key in string]: string } } => {
    switch (itemId) {
    case ItemList.Wooden_Sword:
        return {
            name: {
                en: 'Wooden Sword',
                ru: 'Деревянный меч',
                br: 'Espada de Madeira',
                cz: 'Dřevěný Meč',
                fr: 'Épée en bois',
                zh: '木劍',
            },
        }
    case ItemList.Wooden_Bow:
        return {
            name: {
                en: 'Wooden Bow',
                ru: 'Деревянный лук',
                br: 'Arco das Fadas',
                cz: 'Dřevěný Luk',
                fr: 'Arc en bois',
                zh: '木弓',
            },
        }
    case ItemList.Novice_Staff:
        return {
            name: {
                en: 'Novice Staff',
                ru: 'Посох новичка',
                br: 'Graveto Mágico',
                cz: 'Učňova Hůl',
                fr: 'Bâton de novice',
                zh: '木杖',
            },
        }
    case ItemList.Iron_Ring:
        return {
            name: {
                en: 'Wooden Ring',
                ru: 'Деревянное кольцо',
                br: 'Anel olho da Floresta',
                cz: 'Železný Prsten',
                fr: 'Anneau de fer',
                zh: '鐵環',
            },
        }
    case ItemList.Buckler:
        return {
            name: {
                en: 'Buckler',
                ru: 'Баклер',
                br: 'Escudo joia Fluorita',
                cz: 'Pukléř',
                fr: 'Bouclier',
                zh: '盾牌',
            },
        }
    case ItemList.Shirt:
        return {
            name: {
                en: 'Shirt',
                ru: 'Рубаха',
                br: 'Armadura dos Caídos',
                cz: 'Svetr',
                fr: 'Chemise',
                zh: '襯衫',
            },
        }
    case ItemList.Light_Slayer:
        return {
            name: {
                en: 'Light Slayer',
                ru: 'Губитель света',
                br: 'Espada Corta luz',
                cz: 'Kosič Světla',
                fr: 'Tueur de Lumière',
                zh: '輕量殺手',
            },
        }
    case ItemList.Katana:
        return {
            name: {
                en: 'Katana',
                ru: 'Катана',
                br: 'Katana',
                cz: 'Katana',
                fr: 'Katana',
                zh: '武士刀',
            },
        }
    case ItemList.Corrupted_Katana:
        return {
            name: {
                en: 'Corrupted Katana',
                ru: 'Искажённая катана',
                br: 'Katana Corrompida',
                cz: 'Zvrácená Katana',
                fr: 'Katana corrompu',
                zh: '腐化的武士刀',
            },
            desc: {
                en: `Increase critical damage to ${fixed(CRITICAL_DAMAGE_MOD_175 * 100, 1)}%`,
                ru: `Увеличивает Критический урон до ${fixed(CRITICAL_DAMAGE_MOD_175 * 100, 1)}%`,
                cz: `Zvyši kritické poškození na ${fixed(CRITICAL_DAMAGE_MOD_175 * 100, 1)}%`,
                zh: `提高暴击伤害至 ${fixed(CRITICAL_DAMAGE_MOD_175 * 100, 1)}%`,
            }
        }
    case ItemList.Iron_Sword:
        return {
            name: {
                en: 'Sword of Iron Warriors',
                ru: 'Меч железных воинов',
                br: 'Espada dos Guerreiros de ferro',
                cz: 'Ocelový Meč',
                fr: 'Épée de fer',
                zh: '鐵劍',
            },
        }
    case ItemList.Reckless_Longbow:
        return {
            name: {
                en: 'Reckless Longbow',
                ru: 'Безрассудный длинный лук',
                br: 'Besta dos Corajosos',
                cz: 'Hazardní Dlouhý Luk',
                fr: 'Arc long téméraire',
                zh: '魯莽長弓',
            },
        }
    case ItemList.Sentinel_longbow:
        return {
            name: {
                en: 'Nimble Longbow',
                ru: 'Ловкий длинный лук',
                br: 'Besta da Resiliência encantada',
                fr: 'Arc long résistant',
                zh: '強靭長弓',
            },
            desc: {
                en: `Increase range of bullets by ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} and speed by ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`,
                ru: `Увеличивает дальность полёта снарядов на ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} пикселей и скорость их полёта на ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`,
                br: `Aumenta o alcance das balas em ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} e a velocidade em ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`,
                fr: `Augmente la portée des balles de ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} et la vitesse de ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`,
                zh: `增加${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}的子弹射程和${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%的子弹速度。`,
                cz: `Zvýší dolet střelby o ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} a rychlost o ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`
            }
        }
    case ItemList.Enduring_Shield:
        return {
            name: {
                en: 'Enduring Shield',
                ru: 'Стойкий щит',
                br: 'Escudo Real',
                cz: 'Odolný Štít',
                fr: 'Bouclier endurant',
                zh: '耐久護盾',
            },
        }
    case ItemList.Iron_Buckler:
        return {
            name: {
                en: 'Buckler of Iron Warriors',
                ru: 'Баклер железных воинов',
                br: 'Escudo dos Guerreiros de ferro',
                cz: 'Železný Pukléř',
                fr: 'Bouclier de fer',
                zh: '鐵圓盾',
            },
        }
    case ItemList.Magical_Shield:
        return {
            name: {
                en: 'Enchanted Shield',
                ru: 'Зачарованный щит',
                br: 'Escudo Encantado',
                cz: 'Magický Štít',
                fr: 'Bouclier magique',
                zh: '魔法護盾',
            },
        }
    case ItemList.Rod_Of_Nature:
        return {
            name: {
                en: 'Rod of Nature',
                ru: 'Жезл природы',
                br: 'Cajado das Fadas',
                cz: 'Prut Přírody',
                fr: 'Baguette naturelle',
                zh: '大自然法棒',
            },
        }
    case ItemList.Wizard_Staff:
        return {
            name: {
                en: 'Wizard Staff',
                ru: 'Посох волшебника',
                br: 'Cajado do mago esquecido',
                cz: 'Hůl Kouzelníka',
                fr: 'Bâton du magicien',
                zh: '巫師法棍',
            },
        }
    case ItemList.Ring_Of_Regeneration:
        return {
            name: {
                en: 'Ring of Regeneration',
                ru: 'Кольцо регенерации',
                br: 'Anel da Regeneração',
                cz: 'Prsten Regenerace',
                fr: 'Anneau de régénération',
                zh: '再生手環',
            },
        }
    case ItemList.Ring_Of_Time:
        return {
            name: {
                en: 'Ring of Time',
                ru: 'Кольцо времени',
                br: 'Anel do Tempo',
                cz: 'Prsten Času',
                fr: 'Anneau du Temps',
                zh: '時間手環',
            },
        }
    case ItemList.Leather_Armor:
        return {
            name: {
                en: 'Apprentice Armor',
                ru: 'Броня ученика',
                br: 'Armadura de Aprendiz',
                cz: 'Kožená Zbroj',
                fr: 'Armure de cuir',
                zh: '皮革裝甲',
            },
        }
    case ItemList.Iron_Armor:
        return {
            name: {
                en: 'Armor of Iron Warriors',
                ru: 'Доспех железных воинов',
                br: 'Armadura dos Guerreiros de ferro',
                cz: 'Železná Zbroj',
                fr: 'Armure de fer',
                zh: '鐵裝甲',
            },
        }
    case ItemList.Iron_Pendant:
        return {
            name: {
                en: 'Charming Pendant',
                br: 'Pingente encantador',
                fr: 'Pendentif charmant',
                zh: '迷人的吊坠',
                cz: 'Okouzlující přívěsek',
                ru: 'Очаровательная подвеска'
            }
        }
    case ItemList.Plate_Armor:
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
                en: `Amplify all healing and regeneration effects by ${Math.floor(ItemAbilityData.PLATE_ARMOR_HP_AMP * 100)}%`,
                ru: `Увеличивает эффективность входящего исцеления и эффектов регенерации на ${Math.floor(ItemAbilityData.PLATE_ARMOR_HP_AMP * 100)}%`,
            }
        }
    case ItemList.Wizard_Shoes:
        return {
            name: {
                en: 'Wizard Shoes',
                ru: 'Башмаки волшебника',
                br: 'Sapatos do Mago esquecido',
                cz: 'Boty Kouzelníka',
                fr: 'Chaussures du magicien',
                zh: '巫師魔鞋',
            },
        }
    case ItemList.Agility_Boots:
        return {
            name: {
                en: 'Agility Boots',
                ru: 'Ботинки ловкости',
                br: 'Botas de Velocidade',
                cz: 'Boty Obratnosti',
                fr: 'Bottes d\'agilité',
                zh: '敏捷之靴',
            },
        }
    case ItemList.Boots:
        return {
            name: {
                en: 'Boots',
                ru: 'Ботинки',
                br: 'Botas de Couro',
                cz: 'Boty',
                fr: 'Bottes',
                zh: '靴子',
            },
        }
    case ItemList.Divine_Boots:
        return {
            name: {
                en: 'Boots of Iron Warriors',
                ru: 'Ботинки железных воинов',
                br: 'Botas dos Guerreiros de ferro',
                cz: 'Svaté Sandále',
                fr: 'Bottes divines',
                zh: '神聖之靴',
            },
        }
    case ItemList.Traveling_Boots:
        return {
            name: {
                en: 'Swift Boots',
                ru: 'Ботинки стремительности',
                br: 'Botas das Fadas',
                cz: 'Cestovní Obuv',
                fr: 'Bottes de vitesse',
                zh: '神速之靴',
            },
        }
    case ItemList.Shadow_Slayer:
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
                en: `Your basic attacks do additional magic damage equal to ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% of enemy's max Health`,
                ru: `Ваши атаки наносят дополнительный магический урон по героям, который равен ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% от макс. здоровья цели`,
                br: `Seus ataques causam dano mágico adicional ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% de vida máxima do inimigo.`,
                cz: `Tvůj útok způsobí bonusové poškození o velikosti ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)} % protivníkova maximálního zdravý. `,
                fr: `Ton attaque J fait des dommages magiques additionnels de ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% des points de vie de l'enemie`,
                zh: `你的一般攻擊對敵方造成血量最大值 ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% 的額外魔法傷害`,
            }
        }

    case ItemList.Divine_Sword:
        return {
            name: {
                en: 'Divine Sword',
                ru: 'Божественный меч',
                br: 'Espada Divina',
                cz: 'Božský meč',
                zh: '聖劍',
            },
            desc: {
                en: `Makes you immune to all incoming damage for ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)} and decreases your Attack Damage by 90%.`,
                br: `Escudo Divino - Torna você imune a todos os efeitos por${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)} e reduza seu dano de ataque em 90%.`,
                ru: `Вы становитесь неуязвимы к входящему урону и эффектам контроля на ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)}, а также ваша Сила атаки уменьшается на 90%. При этом, вы не лишаетесь возможности атаковать, использовать способности или предметы.`,
                zh: `神聖護盾 - 使你 ${toSec(ItemAbilityData.DIVINE_SWORD_DURATION)}無視所有效果並將你受到的攻擊傷害降至為 90%。`,
            },
        }
    case ItemList.Divine_Katana:
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
                ru: 'Вы бросаете фрагмент катаны перед собой, который при приземлении замедляет и накладывает немоту на всех ближайших вражеских героев, а также раскрывает все невидимые цели вокруг себя и даёт беспрепятственный обзор, пока находится на земле.',
                en: 'Throws a fragment of the katana. Upon impact with the ground, the katana slows enemies by and silences them while inside its radius, also providing unobstructed vision and revealing all invisible units.',
                br: 'Joga a katana divina perto de você, no momento do impacto fornece visão desobstruída, silencia e desacelera todos os heróis inimigos na área. Além disso, revelará todas as unidades invisíveis na área.',
                zh: '在你前方投擲片段武士刀，提供寬廣視野，沉默且減速在範圍內的敵方英雄。此外能揭發隱蔽單位',
            }
        }
    case ItemList.Iron_Basher:
        return {
            name: {
                en: 'Spiked Mace',
                ru: 'Шипастая булава',
                br: 'Maçã Cravada',
                zh: '尖刺錘',
            },
            desc: {
                en: `Your normal attack instantly kills the enemy when the enemy's health is below ${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)}%`,
                ru: `Ваша атака мгновенно добивает врага, если у него меньше ${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)}% Здоровья.`,
                br: `Seu ataque normal instantaneamente mata o inimigo quando a saúde do inimigo está abaixo de ${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)}%`,
                fr: `Votre attaque normale tue instantanément l'ennemi lorsque la santé de l'ennemi est inférieure à ${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)}%`,
                zh: `当敌人的生命值低于${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)}%时，你的普通攻击会瞬间杀死敌人`,
                cz: `Tvůj normální útok okamžitě zabije nepřítele, když je zdraví nepřítele pod ${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)}%`
            }
        }
    case ItemList.Plague_Ring:
        return {
            name: {
                en: 'Plague Ring',
                ru: 'Чумное кольцо',
            },
            desc: {
                en: `Increase duration by ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)}% of all negative effects applied by your abilities.`,
                ru: `Увеличивает длительность всех накладываемых вами негативных эффектов на ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)}%.`,
                br: `Aumente a duração em ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)}% de todos os efeitos negativos aplicados pelas suas habilidades.`,
                fr: `Augmente la durée de ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)}% de tous les effets négatifs appliqués par vos capacités.`,
                zh: `增加 ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER)}% 所有负面效果应用于你的技能持续时间.`,
                cz: `Zvyšte dobu trvání o ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)}% všech negativních efektů, které vaše schopnosti aplikují.`,
            }
        }

    case ItemList.Cold_Sword:
        return {
            name: {
                en: 'Sword of the Frozen Emperor',
                ru: 'Меч Ледяного Императора',
                br: 'Espada do Imperador Congelado',
                fr: 'Épée gelée',
                zh: '寒冰之劍',
            },
            desc: {
                en: `Your basic attacks apply stacks on the enemy. Upon reaching ${ItemAbilityData.COLD_SWORD_STACKS} stacks, the enemy is inflicted with Frigid Curse - ${getFrigidCurseDescription()}`,
                ru: `Попадая обычной атакой по врагу, вы накладываете на него 1 заряд. При накоплении ${ItemAbilityData.COLD_SWORD_STACKS} зарядов, этот враг получает Морозное проклятие - ${getFrigidCurseDescription()}.`,
                br: `Seus ataques básicos aplicam pilhas no inimigo. Após atingir ${ItemAbilityData.COLD_SWORD_STACKS} pilhas, o inimigo é infectado com a Maldição Gelada - ${getFrigidCurseDescription()}`,
                fr: `Vos attaques de base appliquent des stacks à l'ennemi. Lorsqu'ils atteignent ${ItemAbilityData.COLD_SWORD_STACKS} stacks, l'ennemi est frappé de Malédiction glacée - ${getFrigidCurseDescription()}`,
                zh: `你的基本攻击会给敌人造成一层层的伤害。当敌人达到${ItemAbilityData.COLD_SWORD_STACKS}层伤害后，${getFrigidCurseDescription()}`,
                cz: `Vaše základní útoky na protivníka přidávají štíty. Po dosažení ${ItemAbilityData.COLD_SWORD_STACKS} štítů protivník trpí Zimní prokletím - ${getFrigidCurseDescription()}`
            }
        }
    case ItemList.Corrupted_Light_Slayer:
        return {
            name: {
                en: 'Corrupted Light Slayer',
                ru: 'Искажённый губитель света',
                br: 'Corta Luz corrompido',
                fr: 'Tueur de Lumière Corrompu',
                zh: '腐化的輕量殺手',
            },
            desc: {
                en: `Grants ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Lifesteal and ${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_HPREGEN} health regen to nearby allies.`,
                ru: `Увеличивает Кражу здоровья у всех ближайших союзников на ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Кражи здоровья и  Регенерацию здоровья на ${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_HPREGEN}.`,
                br: `Concede ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% de roubo de vida e ${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_HPREGEN} regeneração de vida para aliados próximos.`,
                fr: `Octroie ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% de récupération de vie et ${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_HPREGEN} de régénération de vie aux alliés proches.`,
                zh: `为附近的盟友提供${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}%的吸血和${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_HPREGEN}生命回复。`,
                cz: `Poskytuje ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Lifesteal a ${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_HPREGEN} regeneraci zdraví blízkým spojencům.`
            }
        }
        /** Wooden Bow */
    case ItemList.Berserker_Bow:
        return {
            name: {
                en: 'Berserker\'s Bow',
                ru: 'Лук берсерка',
                br: 'Besta Incontrolável',
                fr: 'Arc du Berserker',
                zh: '狂戰士之弓',
            },
            desc: {
                en: `Every time your basic attacks hit enemy heroes, you gain ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}% bonus Attack Speed for ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seconds.`,
                ru: `Попадая атаками по врагу, вы увеличиваете свою Скорость атаки на ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}% на ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} сек.`,
                br: `Cada vez que você atinge o personagem inimigo, aumenta sua velocidade de ataque em ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}% por ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seg.`,
                cz: `Pokaždé když zasáhneš protivnika tak si zvýšís rychlost útoků o ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}% na ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} vteřin.`,
                fr: `Chaque attaque J réussie augmente ta vitesse d'attaque de ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}% pour ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec.`,
                zh: `每當你的一般攻擊擊中敵方英雄，增加 ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)}秒你的攻擊速度 ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}%`,
            }
        }
    case ItemList.Magical_Bow:
        return {
            name: {
                en: 'Magical Bow',
                ru: 'Магический лук',
                br: 'Arco das Almas perdidas',
                fr: 'Arc magique',
                zh: '魔法之弓',
            },
            desc: {
                en: 'When you damage the enemy hero with an ability, you gain 10 bonus Movement Speed for 1.5 seconds. \n \n' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                ru: 'Успешное нанесение урона способностями увеличивает вашу Скорость передвижения на 10 на 1.5 сек. \n \n' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                br: 'Um golpe bem-sucedido com suas habilidades, aumenta sua velocidade de movimento em 10 por 1.5 seg. \n \n' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                cz: 'Úspěšný zásah tvé schopnosti zvýší tvou rychlost o 10 na 1.5 vteřin \n \n' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                fr: 'Chaque compétence K ou L réussie augmente ta vitesse de déplacement de 10 points de déplacement pour 1.5 sec. \n \n' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                zh: '你的魔法攻擊成功擊中敵方英雄時，增加 1.5秒你的移動速度值 10 \n \n' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
            }
        }
    case ItemList.Poison_Bow:
        return {
            name: {
                en: 'Poison Bow',
                ru: 'Ядовитый лук',
                br: 'Arco de Veneno concentrado',
                fr: 'Arc empoisonné',
                zh: '劇毒之弓',
            },
            desc: { en: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1) }
        }

    case ItemList.Corrupted_Longbow:
        return {
            name: {
                en: 'Corrupted Longbow',
                ru: 'Искажённый длинный лук',
                br: 'Arco Corrompido',
                fr: 'Arc long corrompu',
                zh: '腐化的長弓',
            },
            desc: {
                en: `Corrupts your blood and makes you powerful, giving you bonus ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% Attack Speed and ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} Movement Speed for ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} seconds.\n` +
                        `This effect also reduces your Armor by ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} and Magic Resistance by ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%`
                        + '\n \n<b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                ru: `Увеличивает вашу Скорость атаки на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% и Скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} сек.\n` +
                        `Во время этого эффекта ваша Броня уменьшается на ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} и Сопротивление магии на ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%.`
                        + '\n \n<b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                br: `Faz com que você aumente sua velocidade de ataque em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% e velocidade de movimento por ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} por ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} seg.\n` +
                        `[Maldição]: O efeito colateral de usar esse item é reduzir sua armadura em ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} e ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}% da sua resistência mágica.`
                        + '\n \n<b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                fr: `Gain de puissance. Ta vitesse d'attaque est augmentée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% et ta vitesse de déplacement est améliorée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} pour ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.\n` +
                        `[MALÉDICTION]: Diminution de ton armure de ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} et de ta résistance magique de ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%.`
                        + '\n \n<b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
                zh: `賦予你增加 ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)}秒你的攻擊速度 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}%與移動速度值 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}。\n` +
                        `副作用：賦予你降低裝甲值 ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR}與 ${calculateMagicDefense(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR)}%魔法抗性`
                        + '\n \n<b class=\'ability-d\'>' + getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
            }
        }
    case ItemList.Hunters_Longbow:
        return {
            name: {
                en: 'Hunter\'s Longbow',
                ru: 'Длинный лук охотника',
                br: 'Besta da Velocidade encantada',
                fr: 'Arc long de chasseur',
                zh: '獵人長弓',
            },
            desc: {
                en: `Increases the attack speed of all nearby friendly units by ${(ItemAbilityData.HUNTER_BOW_RADIUS_ATKSPED * 100).toFixed()}%.`,
                ru: `Увеличивает Скорость атаки у всех ближайших союзников на ${(ItemAbilityData.HUNTER_BOW_RADIUS_ATKSPED * 100).toFixed()}%`,
                br: `Aumenta ${(ItemAbilityData.HUNTER_BOW_RADIUS_ATKSPED * 100).toFixed()}% da velocidade de ataque de todas as unidades amigáveis ​​nas proximidades.`,
                fr: `Augmente la vitesse d'attaque de ${(ItemAbilityData.HUNTER_BOW_RADIUS_ATKSPED * 100).toFixed()}% de toutes les unités amies à proximité.`,
                zh: `增加附近所有友方单位的攻击速度${(ItemAbilityData.HUNTER_BOW_RADIUS_ATKSPED * 100).toFixed()}%。`,
                cz: `Zvýšení ${(ItemAbilityData.HUNTER_BOW_RADIUS_ATKSPED * 100).toFixed()}% rychlosti útoku pro všechny přátelské jednotky v okolí.`
            }
        }
        /** Nowice staff */
    case ItemList.Burning_Rod:
        return {
            name: {
                en: 'Burning Rod',
                ru: 'Пылающий жезл',
                br: 'Cajado Incandescente',
                fr: 'Baguette brûlante',
                zh: '燃燒法棒',
            },
            desc: {
                en: `Your abilites ignite the enemy hero and deal Magical Damage equal to ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% of their Max Health for ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec`,
                ru: `Ваши способности поджигают врага и он получает дополнительный Магический урон в размере ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% от своего макс. Здоровья в сек. в течение ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} сек.`,
                br: `Suas habilidades incineram os inimigo causando dano adicional de ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% vida máxima por seg, por ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} seg.`,
                fr: `Tes compétences K et L brûlent tes ennemies et font des dégâts additionnels pour ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}% de leurs points de vie maximum pour ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec.`,
                zh: `你的技能點燃敵方並額外給予 ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)}秒每秒最大血量 ${fixed((ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100), 1)}%傷害`,
            }
        }
    case ItemList.Vampiric_Rod:
        return {
            name: {
                en: 'Vampiric Rod',
                ru: 'Вампирический жезл',
                br: 'Cajado Vampírico',
                fr: 'Baguette vampirique',
                zh: '吸血鬼法棒',
            },
            desc: {
                en: `Your abilities heal you for ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% (65% weaker against minions) of damage dealt.`,
                br: `Quando seu ataque mágico atinge um personagem inimigo, ele curará você em ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% de dano causado.`,
                ru: `Ваши способности исцеляют вас на ${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}% (на 70% слабее против миньонов) от нанесённого урона.`,
                zh: `當你的魔法攻擊擊中敵方英雄，從${fixed((ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100), 1)}%給予的傷害恢復自己生命值。`,
            }
        }
    case ItemList.Kirin_Staff:
        return {
            name: {
                en: 'Kirin\'s Staff',
                ru: 'Посох Кирина',
                br: 'Cajado de Kirin',
                fr: 'Bâton de Kirin',
                zh: '麒麟法棍',
            },
            desc: {
                en: `Your abilities lower the enemy's Magic Resistance by ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% for 4 seconds. This effect does not stack with other sources.`,
                br: `Suas habilidades penetram a resistência mágica do alvo em ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%, este efeito não se acumula com outras fontes.`,
                ru: `Ваши способности уменьшают Сопротивление магии цели на ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}% на 4 секунды. Этот эффект не складывается с другими источниками`,
                zh: `你的技能拆穿目標物的魔法抗性 ${fixed((ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100), 1)}%，此效果將不會疊加於其他資源`
            }
        }
    case ItemList.Corrupted_Staff:
        return {
            name: {
                en: 'Corrupted Staff',
                br: 'Cajado corrompido',
                ru: 'Искажённый посох',
                zh: '腐化的法棍',
            },
            desc: {
                en: `Increases your Ability Power by ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%.`,
                br: `Fornece o adicional de ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}% de poder de habilidade!`,
                ru: `Повышает вашу Силу умений на ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%.`,
                zh: `提供額外的 ${fixed((ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100), 1)}%技能威力！`,
            }
        }
    case ItemList.Frozen_Staff:
        return {
            name: {
                en: 'Staff of the Frozen Empress',
                ru: 'Посох Ледяной Императрицы',
                br: 'Cajado da Imperatriz Congelada',
                fr: 'Baguette gelée',
                zh: '冰結法棍',
            },
            desc: {
                en: `Your abilities apply stacks on the enemy. Upon reaching ${ItemAbilityData.FROZEN_STAFF_STACKS} stacks, the enemy is inflicted with Frigid Curse - ${getFrigidCurseDescription()}`,
                ru: `Попадая способностями по врагу, вы накладываете на него 1 заряд. При накоплении ${ItemAbilityData.FROZEN_STAFF_STACKS} зарядов, этот враг получает Морозное проклятие - ${getFrigidCurseDescription()}`,
                br: `As suas habilidades aplicam pilhas no inimigo. Ao alcançar ${ItemAbilityData.FROZEN_STAFF_STACKS} pilhas, o inimigo é afetado pelo Mal de Gelo- ${getFrigidCurseDescription()}`,
                fr: `Vos capacités appliquent des stacks ennemis. Une fois que ${ItemAbilityData.FROZEN_STAFF_STACKS} s'empilent, l'ennemi est affecté par la Malédiction de Givre- ${getFrigidCurseDescription()}`,
                zh: `你的技能会给敌人造成层数。当敌人达到 ${ItemAbilityData.FROZEN_STAFF_STACKS} 层时，将会被冰封诅咒，- ${getFrigidCurseDescription()}`,
                cz: `Vaše schopnosti působí na nepřátele vrstvami. Po dosažení ${ItemAbilityData.FROZEN_STAFF_STACKS} vrstev je nepřítel postižen Zimní proklěti - ${getFrigidCurseDescription()}`,
            }
        }
    case ItemList.Iron_Rod:
        return {
            name: {
                en: 'Staff of Iron Warriors',
                ru: 'Жезл железных воинов',
                br: 'Cajado dos Guerreiros de ferro',
                fr: 'Baguette de fer',
                zh: '鐵之法棒',
            },
            desc: { en: getIronRodOrHarpoonDescription() }
        }
    case ItemList.Magic_Harpoon: {
        return {
            name: {
                en: 'Magic Harpoon',
                ru: 'Волшебный гарпун',
                br: 'Arpão Mágico',
                fr: 'Harpon magique',
                zh: '魔法叉戟',
            },
            desc: { en: getIronRodOrHarpoonDescription(true) }
        }
    }
    case ItemList.Orchid_of_Malevolence:
        return {
            name: {
                en: 'Orchid of Malevolence',
                ru: 'Орхидея злобы',
                br: 'Cajado Orquídea da Malevolência',
                fr: 'Orchidée de Malveillance',
                zh: '惡毒蘭花',
            },
            desc: {
                en: `Shoots a dark arrow that pierces through enemies, silencing them for ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seconds. At the end of its duration, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% of the damage received by the enemy is inflicted as bonus Magic Damage.` + '\n' + getIronRodOrHarpoonDescription(),
                ru: `Выпускает тёмную стрелу в вашем направлении, которая пронзает несколько целей, накладывая на них немоту на ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. По окончании эффекта цели получают ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% от полученного урона за время действия немоты в виде магического урона.` + '\n' + getIronRodOrHarpoonDescription(),
                br: `Acumula maldade lançando na direção que seu personagem está olhando, perfurando os inimigos e os silenciando por ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seg, e no final do silênciar, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% de dano enquanto silenciado infligindo como dano mágico adicional.` + '\n' + getIronRodOrHarpoonDescription(),
                fr: `Envoie une sombre flèche dans ta direction, qui traverse tes ennemies et les réduits au silence pour ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec. À la fin de ce délai, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% des dégâts reçus par l'ennemi sont infligés sous forme de dégâts magiques supplémentaires.` + '\n' + getIronRodOrHarpoonDescription(),
                zh: `向前方釋放暗箭貫穿敵方，沉默 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)}秒所有敵方並在沉默結束後，期間造成的傷害 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}%追加為魔法傷害。` + '\n' + getIronRodOrHarpoonDescription(),
            }
        }
    case ItemList.Divine_Staff_T2:
        return {
            name: {
                en: 'Divine Staff',
                ru: 'Божественный посох',
                br: 'Cajado da Deusa da floresta',
                fr: 'Baguette divine',
                zh: '神聖法棍',
            },
            desc: {
                en: `Heals all ally units in ${ItemAbilityData.ACTIVE_EFFECT_RADIUS}px radius for ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} Health, grants bonus ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} Movement Speed for ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)}.
                        \n This effect has an inner cooldown of 12 seconds during which any additional or other activations will be ignored. (Can not be reduced by cooldown reduction)`,
                ru: `Исцеляет ближайшим союзным целям в радиусе ${ItemAbilityData.ACTIVE_EFFECT_RADIUS} пикселей ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} Здоровья, накладывая ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} бонусной Скорости передвижения на ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} сек.
                        \n Этот эффект имеет внутреннюю перезарядку длительностью 12 сек. В течение этого времени активный эффект этого предмета не работает на ранее задетых целях (Не может быть уменьшено Сокращением перезарядки)`,
                br: `Cura todas as unidades próximas de ${ItemAbilityData.ACTIVE_EFFECT_RADIUS}px raio por ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, aplica ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} velocidade de movimento bônus por ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} seg.
                        \n Este efeito tem o tempo de recarga de 12 segundos.(não pode ser reduzido pela redução de tempo de recarga), durante este tempo, este efeito é totalmente ignorado`,
                fr: `Soigne toutes les unités dans un rayon de ${ItemAbilityData.ACTIVE_EFFECT_RADIUS}px pour ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}. Fournit ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} points de vitesse de déplacement pour ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec.
                        \n Cet effet a un délai de réduction interne de 12 sec qui ne peut pas être réduit. Pendant ce délai, l'effet est complétement ignoré.`,
                zh: `治癒所有半徑 ${ItemAbilityData.ACTIVE_EFFECT_RADIUS}像素內的鄰近單位 ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}點生命值，給予 ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED}點額外速度 ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)}秒並移除所有負面效果
                        \n 此效果有內建 12秒冷卻時間 (無法透過縮短冷卻時間來減少)，在期間內，再次發動效果將被完全無試`,
            }
        }

    case ItemList.Vampiric_Shield:
        return {
            name: {
                en: 'Vampiric Shield',
                ru: 'Вампирический щит',
                br: 'Escudo Vampírico',
                fr: 'Bouclier vampirique',
                zh: '吸血鬼護盾',
            },
            desc: {
                en: `When you take damage and your health falls below ${fixed(ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100, 1)}% Health, you remove all negative effects from yourself and receive ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN} Health Regeneration for ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)} seconds. (Only triggers on player-based damage)`,
                ru: `При получении урона, при котором ваше здоровье опускается ниже ${fixed(ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100, 1)}%, вы снимаете с себя все негативные эффекты и получаете ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN} Регенерации здоровья на ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)} (Срабатывает только при получении урона от вражеских героев)`,
            }
        }

    case ItemList.Divine_Shield:
        return {
            name: {
                en: 'Divine Shield',
                ru: 'Божественный щит',
                br: 'Escudo da Deusa da floresta',
                fr: 'Bouclier divin',
                zh: '神聖護盾',
            },
            desc: {
                en:  `Apply cleanse to all nearby allies which remove all negative effects and grants ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} Health regen for short duration.`,
                ru:  `Снимает все негативные эффекты с ближайших союзников и дополнительно даёт им ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} Регенерации здоровья на ${toSec(ItemAbilityData.DIVINE_SHIELD_DURATION)}.`,
                br:  `Aplique a purificação a todos os aliados próximos, removendo todos os efeitos negativos e concedendo ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regen de saúde por curto período de tempo.`,
                zh:  `将净化应用于所有附近的盟友，可消除所有负面效果并赋予${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR}短时间的恢复健康。`,
                cz:  `Aplikujte očištění všem blízkým spojencům, které odstraní všechny negativní účinky a poskytne ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} obnovu zdraví po krátkou dobu.`,
                fr:  `Appliquer le nettoyage à tous les alliés proches qui supprime tous les effets négatifs et accorde ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de régénération de santé pour une courte durée.`
            }
        }

    case ItemList.Shield_Of_Defiance:
        return {
            name: {
                en: 'Shield of Defiance',
                ru: 'Щит неповиновения',
                br: 'Escudo da Defesa',
                fr: 'Bouclier de Défiance',
                zh: '蔑视之盾',
                cz: 'Štít odporu',
            },
            desc: {
                en:  `Grants ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic resistance and ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Health regen to nearby allies.`,
                br:  `Concede aos aliados mais próximos ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de resistência mágica e ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de regeneração de vida.`,
                fr:  `Accorde à vos alliés voisins ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de résistance magique et ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de régénération de vie.`,
                zh:  `为附近的盟友提供${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR}魔法抗性和${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}生命回复。`,
                cz:  `Poskytuje sousedním spojencům ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} odolnost proti kouzlu a ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} regeneraci zdraví.`,
                ru:  `Увеличивает Сопротивление магии у всех ближайших союзников на ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} и Регенерацию здоровья на ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}.`,

            }
        }

    case ItemList.Spike_Shield: {
        const damage = ItemAbilityData.SPIKE_SHIELD_BASE_DAMAGE
        return {
            name: {
                en: 'Spike Shield',
                ru: 'Шипастый щит',
                br: 'Escudo de Espinhos sombrio',
                fr: 'Bouclier piquant',
                zh: '尖刺護盾',
            },
            desc: {
                en: `Deals ${damage} (+ ${ItemAbilityData.SPIKE_SHIELD_DAMAGE_PER_LEVEL}% * level) normal damage every second to all enemy units in the  short distance`,
                ru: `Каждую секунду наносит ${damage} (+ ${ItemAbilityData.SPIKE_SHIELD_DAMAGE_PER_LEVEL}% * уровень) физического урона всем врагам вокруг вас.`,
                br: `Causa ${damage} (+ ${ItemAbilityData.SPIKE_SHIELD_DAMAGE_PER_LEVEL}% * nível) dano normal a todas as unidades inimigas em curta distância a cada segundo`,
                cz: `Každou sekundu způsobuje ${damage} (+ ${ItemAbilityData.SPIKE_SHIELD_DAMAGE_PER_LEVEL}% * úroveň) normálního poškození všem nepřátelským jednotkám v krátké vzdálenosti`,
                zh: `每秒对短距离内的所有敌方单位造成 ${damage} (+ ${ItemAbilityData.SPIKE_SHIELD_DAMAGE_PER_LEVEL}% * 等级) 的正常伤害`
            }
        }
    }

    case ItemList.GarunsDefender:
        return {
            name: {
                en: 'Garun\'s Defender',
                ru: 'Защитник Гаруна',
                br: 'Defensor de Garun',
                fr: 'Bouclier de Garun',
                zh: '加侖的守護者',
            },
            desc: {
                en:  `If you take damage below ${fixed(ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,1)}% health you unleash a shockwave with 0.5sec delay that stuns all nearby enemies for ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)} and deals ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} normal damage. This effect cannot trigger more than once every ${toSec(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN)}.`,
                ru: `При получении урона, при котором ваше здоровье опускается ниже ${fixed(ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,1)}%, вы создаёте ударную волну с задержкой в 0,5 сек., которая оглушает всех ближайших врагов на ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)} и наносит ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} физического урона. (Перезарядка: ${toSec(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN)})`,
                br: `Se você tomar dano abaixo de ${fixed(ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,1)}% da saúde, você desencadeia uma onda de choque com um atraso de 0,5 segundos que atordoa todos os inimigos próximos por ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)} e causar ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dano normal. Este efeito não pode ser ativado mais de uma vez a cada ${toSec(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN)}.`,
                fr: `Si vous subissez des dégâts en dessous de ${fixed(ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,1)}% de vie, vous libérez une onde de choc avec un délai de 0,5 seconde qui assomme tous les ennemis à proximité pendant ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)} et inflige ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dégâts normaux. Cet effet ne peut se déclencher qu'une seule fois tous les ${toSec(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN)}.`,
                zh: `如果您的生命值低于${fixed(ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,1)}%时受到伤害，您将在0.5秒后释放一道冲击波，使附近所有敌人昏迷${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)}，并造成${ItemAbilityData.GARUNS_DEFENDER_DAMAGE}的常规伤害。此效果每${toSec(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN)}不能触发一次。`,
                cz: `Pokud utrpíte poškození pod ${fixed(ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,1)}% životů, spustíte vlnu šoku s 0,5sekundovým zpožděním, která ochromí všechny nepřátele v okolí na ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)} a způsobí ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} normálního poškození. Tento efekt nemůže být aktivován více než jednou za ${toSec(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN)}.`,
            }
        }
    case ItemList.Plate_Shield:
        return {
            name: {
                en: 'Plate Shield',
                ru: 'Латный щит',
                br: 'Escudo de Placas reforçadas',
                fr: 'Bouclier à plaque',
                zh: '金屬護盾',
            },
            desc: {
                en: `Releases shockwave which travels through the air, dealing bonus ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} physical damage to enemies and reducing enemies' Movement Speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} for ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seconds.`,
                br: `Ondas de choque viajam pelo ar causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dano normal e reduzindo a velocidade de movimento do inimigo em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.`,
                ru: `Создаёт ударную волну, которая наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} урона и уменьшает скорость передвижения на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} у всех врагов на своём пути на ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} сек.`,
                zh: `釋放衝擊波，給予 ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE}點一般傷害並降低 ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)}秒敵方的移動速度值 ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}`,
            }
        }
    case ItemList.Kirins_Defender:
        return {
            name: {
                en: 'Kirin\'s Defender',
                ru: 'Защитник Кирина',
                br: 'Defensor de Kirin',
                fr: 'Bouclier de Kirin',
                zh: '麒麟的守護者',
            },
            desc: {
                en: `Absorbs any Crowd Control effect every ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seconds. Sucessful block provides you ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)} Magic Resistance for ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seconds.`,
                br: `Defensor de Kirin bloqueia o próximo efeito de CC uma vez a cada ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seg, se o bloqueio for bem sucedido, fornecer ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)} de resistência mágica por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.`,
                ru: `Блокирует любой эффект контроля каждые ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} сек. Успешный блок повышает ваше Сопротивление магии на  ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)} на ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} сек.`,
                zh: `麒麟的守護者每次發動 ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()}秒內格擋下一個有冷卻時間效果的招式，成功格擋時提供 ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()}秒 ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}的魔法抗性。`,
            }
        }
        /** Rings */
    case ItemList.Demon_Sabre:
        return {
            name: {
                en: 'Demon Sabre',
                ru: 'Сабля демона',
                br: 'Sabre Demoníaco',
                fr: 'Sabre du démon',
                zh: '惡魔軍刀',
            },
            desc: {
                en: `Enemies hit by your Basic Attacks have their armor reduced by ${Math.floor(ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION * 100)}% per stack (max ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS}) for 4 seconds.`,
                br: `Seus ataques normais diminuem a armadura inimiga em ${Math.floor(ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION * 100)}% por 4 segundos.`,
                ru: `Ваши атаки уменьшают вражескую Броню на ${Math.floor(ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION * 100)}% на 4 сек (складывается до ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} раз).`,
                cz: `Tvé útoky snižují zbroj o ${Math.floor(ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION * 100)}% na 4 vteřiny.`,
                zh: `你的一般攻擊降低 4秒敵方裝甲值 ${Math.floor(ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION * 100)}%`,
            }
        }
    case ItemList.Demonic_Ring:
        return {
            name: {
                en: 'Demonic Ring',
                ru: 'Демоническое кольцо',
                br: 'Anel Demoníaco',
                fr: 'Anneau démonique',
                zh: '惡魔手環',
            },
            desc: {
                en: `Your basic attacks lower the enemy's armor by ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% for 4 seconds. \n
                     For every minion kill (+1 stack), hero kill (+5 stacks) or assist (+2 stacks) you gain ${ItemAbilityData.DEMON_RING_STACK_DMG} Attack Damage (Max: ${ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS} Attack Damage at 20 stacks). All stacks are lost upon death.`,
                ru: `Ваши атаки уменьшают вражескую Броню на ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% на 4 сек. \n
                     Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает Силу атаки на ${ItemAbilityData.DEMON_RING_STACK_DMG} (Максимальная прибавка: ${ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS} Силы атаки за 20 зарядов). Все заряды теряются после смерти.`,
                br: `Seus ataques reduzem a armadura inimiga por ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}% por 4 segundos. \n
                     Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${ItemAbilityData.DEMON_RING_STACK_DMG} de dano (máximo ${ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS}).\n Todas os acúmulos são perdidas após a morte.`,
                cz: `Tvé útoky snižují zbroj o ${Math.floor(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100)}% na 4 vteřiny.\n
                     Pokud zabiješ nepřátelského miniona, hrdinu (+5) nebo assistujes (+2) dostaneš ${ItemAbilityData.DEMON_RING_STACK_DMG} zraneni permanentne, (max ${ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS}). Efekt sa zresetuje po smrti.`,
                zh: `你的一般攻擊降低 4秒敵方裝甲值 ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}%\n
                     每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${ItemAbilityData.DEMON_RING_STACK_DMG}點攻擊傷害 (最大值 ${ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS})。所有疊加在死亡後歸零。`
            }
        }
    case ItemList.Divine_Ring: {
        const bonusHealing = fixed(ItemAbilityData.DIVINE_RING_BONUS_HEALING_EFFECT * 100, 1)
        return {
            name: {
                en: 'Divine Ring',
                ru: 'Божественное кольцо',
                br: 'Anel Divino',
                cz: 'Božský prsten',
                zh: '神圣戒指'
            },
            desc: {
                en: `Healing done temporarily increase ability power by ${ItemAbilityData.DIVINE_RING_BONUS_ABILITY_POWER} (stacks up to ${ItemAbilityData.DIVINE_RING_MAX_STACKS} times). \n \n Increase all healing done by ${bonusHealing}%.`,
                ru: `Исцеление себя или союзников повышает Силу умений на ${ItemAbilityData.DIVINE_RING_BONUS_ABILITY_POWER} (складывается до ${ItemAbilityData.DIVINE_RING_MAX_STACKS} раз). \n \n Увеличивает всё накладываемое исцеление на ${bonusHealing}%.`,
                br: `O curar feito temporariamente aumenta o poder de habilidade em ${ItemAbilityData.DIVINE_RING_BONUS_ABILITY_POWER} (acumulando até ${ItemAbilityData.DIVINE_RING_MAX_STACKS} vezes). \n \n Aumenta todo o curar feito em ${bonusHealing}%.`,
                cz: `Léčení dočasně zvýší schopnost síly o ${ItemAbilityData.DIVINE_RING_BONUS_ABILITY_POWER} (může být až ${ItemAbilityData.DIVINE_RING_MAX_STACKS}krát). \n \n Zvyšuje všechno léčení o ${bonusHealing}%.`,
                zh: `暂时性的治疗会使能力增加 ${ItemAbilityData.DIVINE_RING_BONUS_ABILITY_POWER}（最多叠加 ${ItemAbilityData.DIVINE_RING_MAX_STACKS} 次）。 \n \n 增加所有治疗量 ${bonusHealing}%。`
            }
        }
    }
    case ItemList.Frost_Ring: {
        return {
            name: {
                en: 'Ring of the Frozen Empress',
                ru: 'Кольцо Ледяной Императрицы',
                br: 'Anel Congelado da Imperatriz',
                zh: '冰霜手環',
            },
            desc: {
                en: `Emits a freezing wave that deals ${ItemAbilityData.FROST_RING_DAMAGE} magic damage to enemies and apply Frigid Curse - (${getFrigidCurseDescription()}). If target is affected by Frigid curse, it will freeze the enemy for ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} prevent from all movement.`,
                ru: `Излучает ледяную волну, наносящую ${ItemAbilityData.FROST_RING_DAMAGE} магического урона врагам и накладывая на них Морозное проклятие - (${getFrigidCurseDescription()}). Если на цель уже было наложено Морозное проклятие, волна заморозит врага на ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)}, обездвиживая его.`,
                br: `Emite uma onda congelante que causa ${ItemAbilityData.FROST_RING_DAMAGE} de dano mágico aos inimigos e aplica a Maldição do Frio - (${getFrigidCurseDescription()}). Se o alvo estiver afetado pela Maldição do Frio, ela o congelará por ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} impossibilitando-o de se mover.`,
                fr: `[Actif] : Emet une onde de gel qui inflige ${ItemAbilityData.FROST_RING_DAMAGE} de dégâts magiques aux ennemis et applique la Malédiction du froid - (${getFrigidCurseDescription()}). Si la cible est affectée par la Malédiction du froid, elle sera gelée pour ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} empêchant tout mouvement.`,
                zh: `[动作]:释放一道冰冻波动，对敌人造成${ItemAbilityData.FROST_RING_DAMAGE}魔法伤害，并施加冰冷诅咒-(${getFrigidCurseDescription()})。如果目标受到冰冷诅咒影响，将会冻结敌人${(ItemAbilityData.FROST_RING_ROOT_DURATION/1000).toFixed(1)}，阻止一切移动。`,
                cz: `[Aktivní]: Vyzařuje mrazivou vlnu, která způsobí ${ItemAbilityData.FROST_RING_DAMAGE} magického poškození nepřátelům a aplikuje Prokletí mrazu - (${getFrigidCurseDescription()}). Pokud je cíl ovlivněn Prokletím mrazu, zmrazí nepřítele na ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} a zabrání mu všem pohybům.`
            }
        }
    }

    case ItemList.Chronos_Ring:
        return {
            name: {
                en: 'Chronos Ring',
                br: 'Anel do Mago do tempo',
                ru: 'Кольцо Хроноса',
                zh: '時辰手環',
            },
            desc: {
                en: `Whenever you cast an ability, reduce all your cooldowns by ${toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)}.\nIf you receive a kill or assist on an enemy hero, your ability cooldowns will reset. (Reset does not work on items)`,
                br: `Sempre que você lançar uma habilidade, reduza todos os seus tempos de recarga por ${toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)}.\nSe você receber uma morte ou assistência em um herói inimigo, os tempos de recarga de suas habilidades serão redefinidos. (Redefinir não funciona em itens)`,
                fr: `Chaque fois que vous lancez une capacité, réduisez tous vos temps de recharge de ${toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)}.\nSi vous obtenez une mort ou une assistance sur un héros ennemi, vos temps de recharge de capacité seront réinitialisés. (La réinitialisation ne fonctionne pas sur les objets)`,
                zh: `每次施放技能时，所有冷却时间都会减少${toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)}。\n如果你在敌方英雄上获得击杀或助攻，你的技能冷却时间将会重置。（重置不适用于物品）`,
                cz: `Pokaždé, když použijete schopnost, sníží se všechny vaše časy načasování o ${toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)}。\nPokud získáte zabíjení nebo asistenci na nepřátelském hrdinovi, vaše časy pro schopnosti se resetují. (Resetování nefunguje na předměty)`,
                ru: `Каждый раз при применении способности перезарядка ваших способностей уменьшается на ${toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)} \n При убийстве врага или получении содействия, перезарядка ваших способностей сбрасывается. (Перезарядка предметов не сбрасывается)`
            },
        }
    case ItemList.Corrupted_Ring:
        return {
            name: {
                en: 'Corrupted Ring',
                ru: 'Искажённое кольцо',
                br: 'Anel Corrompido',
                zh: '腐化的手環',
            },
            desc: {
                en: 'Dashes you forward in your direction.',
                ru: 'Вы совершаете рывок в направлении своего движения.',
                br: 'Lança seu personagem para frente na direção que ele está olhando.',
                zh: '朝你的前方向前衝刺',
            }
        }

    case ItemList.Berserker_Ring:
        return {
            name: {
                en: 'Berserker Ring',
                br: 'Anel do Lutador',
                ru: 'Кольцо берсерка',
                zh: '狂戰士手環',
            },
            desc:  {
                en: `For each 3.33% HP you are missing. you gain ${Math.floor(ItemAbilityData.BERSERKER_RING_ATTACK_SPEED_PER_FRAG * 100)}% attack speed and ${ItemAbilityData.BERSERKER_RING_HEALTH_REGEN_PER_FRAG} health regen`,
                ru: `За каждые 3,33% отсутствующего Здоровья вы получаете ${Math.floor(ItemAbilityData.BERSERKER_RING_ATTACK_SPEED_PER_FRAG * 100)}% Скорости атаки и ${ItemAbilityData.BERSERKER_RING_HEALTH_REGEN_PER_FRAG} Регенерации здоровья.`,
                br: `Para cada 3,33% de HP que você está faltando, você ganha ${Math.floor(ItemAbilityData.BERSERKER_RING_ATTACK_SPEED_PER_FRAG * 100)}% de velocidade de ataque e ${ItemAbilityData.BERSERKER_RING_HEALTH_REGEN_PER_FRAG} de regeneração de saúde`,
                cz: `Za každých 3,33% chybějícího HP získáte ${Math.floor(ItemAbilityData.BERSERKER_RING_ATTACK_SPEED_PER_FRAG * 100)}% rychlost útoku a ${ItemAbilityData.BERSERKER_RING_HEALTH_REGEN_PER_FRAG} obnovení zdraví`,
                zh: `每缺少3.33％的HP，您将获得${Math.floor(ItemAbilityData.BERSERKER_RING_ATTACK_SPEED_PER_FRAG * 100)}％的攻击速度和${ItemAbilityData.BERSERKER_RING_HEALTH_REGEN_PER_FRAG}的生命恢复`
            }
        }

        /** Armors */
    case ItemList.Frost_Armor:
        return {
            name: {
                en: 'Armor of the Frozen Emperor',
                ru: 'Броня Ледяного Императора',
                br: 'Armadura do Lorde congelado',
                zh: '冰霜鎧甲',
            },
            desc: {
                en: `Reduces the attack speed of all nearby enemies by ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}% and all heals, regeneration and lifesteal by ${(ItemAbilityData.FROST_ARMOR_HPREDUC * 100).toFixed()}%.`,
                ru: `Скорость атаки ближайших к вам врагов уменьшается на ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%, а все эффекты входящего исцеления и регенерации на ${(ItemAbilityData.FROST_ARMOR_HPREDUC * 100).toFixed()}%.`,
                br: `Reduz a velocidade de ataque de todos os inimigos próximos em ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}% e todas as curas, regeneração e roubo de vida em ${(ItemAbilityData.FROST_ARMOR_HPREDUC * 100).toFixed()}%.`,
                fr: `Réduit la vitesse d'attaque de tous les ennemis à proximité de ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}% et toutes les soins, la régénération et le vol de vie de ${(ItemAbilityData.FROST_ARMOR_HPREDUC * 100).toFixed()}%.`,
                zh: `减少附近所有敌人的攻击速度${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%，所有治疗，再生和生命偷取${(ItemAbilityData.FROST_ARMOR_HPREDUC * 100).toFixed()}%。`,
                cz: `Snižuje rychlost útoku všech blízkých nepřátel o ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}% a všechny zotavení, regeneraci a životní sílu o ${(ItemAbilityData.FROST_ARMOR_HPREDUC * 100).toFixed()}%.`
            }
        }

    case ItemList.Void_Armor:
        return {
            name: {
                en: 'Void Armor',
                ru: 'Броня пустоты',
                br: 'Armadura do Abismo',
                zh: '虛空鎧甲',
            },
            desc: {
                en: `Gives you invisibility for ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} seconds granting you additional ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Movement Speed and ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Attack Damage. \n (removes on attack or spell cast)`,
                ru: `Вы получаете невидимость на ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} сек., а также ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Скорости передвижения и ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Силы атаки.\n (эффект пропадает при атаке или использовании способностей)`,
                br: `Torna você invisível por ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} seg, além disso, aumente sua velocidade de movimento em ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} e dano por ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} seg.\n (Acaba quando você usa algum ataque.)`,
                zh: `使你 ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)}秒隱蔽，額外增加你的移動速度值 ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}與一般傷害值 ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} (效果在攻擊或發動技能後移除)`,
            }
        }

    case ItemList.Titans_Armor:
        return {
            name: {
                en: 'Titan\'s Armor',
                ru: 'Броня титана',
                br: 'Armadura do Titan',
                zh: '泰坦的鎧甲',
            },
            desc: {
                en: `Makes you immune to all incoming damage for ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} seconds, giving you ${ItemAbilityData.TITAN_ARMOR_REGENERATION} Health Regeneration and removing all negative effects. However, you cannot move, attack, use abilities or items during its effect.`,
                ru: `Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к Регенерации здоровья в размере ${ItemAbilityData.TITAN_ARMOR_REGENERATION} на ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} сек. Вы не можете выполнять никакие действия, пока активен данный эффект.`,
                br: `Aumente sua regeneração de vida em ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove todos os efeitos negativos e o torna imune a todos os danos recebidos por ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} seg.\n (Você não pode fazer nenhuma ação durante este efeito.)`,
                zh: `增加你的回血速度 ${ItemAbilityData.TITAN_ARMOR_REGENERATION}點，移除所有負面效果並使你 ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)}秒內無視所有襲來的攻擊。效果期間你無法採取任何動作`,
            }
        }
    case ItemList.ChestOfMalevolence:
        return {
            name: {
                en: 'Chest of Malevolence',
                br: 'Armadura da Malevolência',
                ru: 'Нагрудник злобы',
                zh: '惡毒胸甲',
            },
            desc: {
                en: `When you take magic damage, curse on the caster will be applied, reducing movement speed by ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} and ability power by ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%. (Stacks up to ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} times)`,
                ru: `Всякий раз, когда вы получаете магический урон, атакующий будет проклят, а его Скорость передвижения будет уменьшена на ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} и Сила умений на ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%. (Складывается до ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} раз)`,
                br: `Quando você sofrer dano mágico, um feitiço será aplicado no lançador, reduzindo a velocidade de movimento em ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} e o poder de habilidade em ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%. (O feitiço pode ser acumulado até ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} vezes)`,
                fr: `Lorsque vous subissez des dégâts magiques, un sort est lancé sur le lanceur, réduisant sa vitesse de déplacement de ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} et sa puissance d'attaque de ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%. (Le sort peut s'accumuler jusqu'à ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} fois)`,
                zh: `当你受到魔法伤害时，施法者将被诅咒，减少移动速度${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS}和能力值${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}% 。(最多可堆叠${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}层)`,
                cz: `Když dostaneš magickou újmu, na kouzelníkovi se aplikuje prokletí, které snižuje rychlost pohybu o ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} a sílu zaklínání o ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%. (Prokletí se může nakumulovat až do ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} vrstev)`,
            }
        }

        /** Consumables */
    case ItemList.Healing_Potion:
        return {
            name: {
                en: 'Healing Potion',
                ru: 'Исцеляющее зелье',
                br: 'Poção das fadas',
                zh: '治癒藥水',
            },
            desc: {
                en: `Grants ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} health regeneration for ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} sec \n If you are attacked, the effect is lost!`,
                ru: `Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} Регенерации здоровья на ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} сек. \n Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
                br: `Beba a poção das fadas para receber regeneração de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} de vida por ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} seg.\n (Se você for atacado, o efeito será perdido!)`,
                zh: `賜予 ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)}秒 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}點回血速度 \n 如果你遭受攻擊，將會失去效用！`,
            }
        }

    case ItemList.Observer_Ward:
        return {
            name: {
                en: 'Observer Ward',
                ru: 'Тотем-наблюдатель',
                br: 'Pedra do Observador da floresta',
                zh: '偵查守衛',
            },
            desc: {
                en: `Plants an Observer Ward, an invisible watcher that gives obstructed vision in a ${ItemAbilityData.WARD_VISION} px radius to your team. Lasts ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} seconds. If ward is visible to enemy team, they can destroy it!`,
                br: `Planta uma pedra Observadora invisível que dá visão obstruída em ${ItemAbilityData.WARD_VISION} px raio para sua equipe.\n Dura ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
                ru: `Вы устанавливаете невидимый тотем, который раскрывает область и все невидимые вражеские цели вокруг себя в радиусе ${ItemAbilityData.WARD_VISION} пикселей в течение ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)} сек. Если тотем видим для врагов, они могут уничтожить его!`,
                zh: `植入一個偵查守衛，一個隱蔽的觀察者賜予己方團隊半徑 ${ItemAbilityData.WARD_VISION}像素範圍內的受限視線。持續 ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(1)}。如果守衛能被敵隊看見，他們能摧毀它！`,
            }
        }
    case ItemList.Sentry_Ward:
        return {
            name: {
                en: 'Sentry Ward',
                br: 'Pedra do Observador corrompida',
                ru: 'Сторожевой тотем',
                zh: '哨兵守衛',
            },
            desc: {
                en: `Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a radius. lasts for ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} seconds. If ward is visible to enemy team, they can destroy it!`,
                br: `Planta uma pedra Observadora corrompida invisível que concede Visão Verdadeira, a habilidade de ver unidades e sentinelas inimigas invisíveis, para qualquer visão aliada existente dentro de um raio. dura por ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
                ru: `Вы устанавливаете невидимый сторожевой тотем, раскрывающий невидимых врагов и тотемы вокруг себя в радиусе ${ItemAbilityData.SENTRY_WARD_VISION} пикселей в течение ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)} сек. Если тотем видим для врагов, они могут уничтожить его!`,
                zh: `植入一個哨兵守衛，一個隱蔽的觀察者賜予絕對視線，有能夠讓友軍在範圍內看見隱蔽敵方單位與守衛的能力。持續 ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(1)}秒。如果守衛能被敵隊看見，他們能摧毀它！`,
            }
        }
    case ItemList.Potion_Of_Magic:
        return {
            name: {
                en: 'Potion of Magic',
                br: 'Poção de Magia corrompida',
                ru: 'Зелье волшебства',
                zh: '魔法藥水',
            },
            desc: {
                en: `Provide ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} ability power permanently, stacks up to 5 times!`,
                br: `Da a quem beber ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} de Poder de habilidade permanentemente, acumula até 5 vezes!\n Sabor uva da floresta.`,
                ru: `Даёт вам ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} Силы умений навсегда. Эффект складывается до 5 раз!`,
                zh: `永久提供 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}點技能威力，疊加最多五次！`,
            }
        }
    case ItemList.Corrupted_Potion:
        return {
            name: {
                en: 'Corrupted Potion',
                br: 'Poção de força corrompida',
                ru: 'Искажённое зелье',
                zh: '腐化的藥水',
            },
            desc: {
                en: `Provide ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} attack damage permanently, stacks up to 5 times!`,
                br: `Da a quem beber ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} de dano de ataque permanentemente, acumula até 5 vezes!\n Sabor cereja do campo.`,
                ru: `Даёт вам ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} Силы атаки навсегда. Эффект складывается до 5 раз!`,
                zh: `永久提供 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}點攻擊傷害，疊加最多五次！`,
            }
        }
    case ItemList.Kirins_Bow: {
        const asAndMsReduction = fixed(ItemAbilityData.KIRINS_BOW_AS_AND_MR_REDUCTION *100, 1)
        return {
            name: {
                en: 'Kirin\'s Bow',
                zh: '麒麟之弓',
                cz: 'Kirinův luk',
                fr: 'Arc de Kirin',
                br: 'Arco de Kirin',
                ru: 'Лук Кирина'
            },
            desc: {
                en: `Your basic attacks apply magical poison that explode at ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} stack. Upon explosion deals ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE_OVER_TIME} magical damage, reduces ${asAndMsReduction}% magic resistance and ${asAndMsReduction}% attack speed for ${toSec(ItemAbilityData.KIRINS_BOW_DURATION)}`,
                zh: `你的基本攻击会施加魔法毒，抵达${ItemAbilityData.KIRINS_BOW_MAX_STACKS}层后爆炸，造成${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE_OVER_TIME}魔法伤害，减少${asAndMsReduction}%魔法抗性和${asAndMsReduction}%攻击速度，持续${toSec(ItemAbilityData.KIRINS_BOW_DURATION)}`,
                cz: `Vaše základní útoky aplikují magickou jed, která exploduje při ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} vrstvách. Při výbuchu způsobuje ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE_OVER_TIME} magické škody, snižuje ${asAndMsReduction}% odolnost vůči magii a ${asAndMsReduction}% rychlost útoku po dobu ${toSec(ItemAbilityData.KIRINS_BOW_DURATION)}`,
                fr: `Vos attaques de base appliquent un poison magique qui explose à ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} pile. Lors de l'explosion, il inflige ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE_OVER_TIME} dégâts magiques, réduit la résistance magique de ${asAndMsReduction}% et la vitesse d'attaque de ${asAndMsReduction}% pendant ${toSec(ItemAbilityData.KIRINS_BOW_DURATION)}`,
                br: `Seus ataques básicos aplicam veneno mágico que explodem em ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} pilhas. Ao explodir, causa ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE_OVER_TIME} dano mágico, reduz ${asAndMsReduction}% de resistência mágica e ${asAndMsReduction}% de velocidade de ataque por ${toSec(ItemAbilityData.KIRINS_BOW_DURATION)}`,
                ru: `Ваши базовые атаки накладывают волшебный яд, который взрывается при достижении  ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} зарядов. Взрыв наносит ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE_OVER_TIME} магического урона, уменьшает Сопротивление магии цели на ${asAndMsReduction}%, а также Скорость атаки на  ${asAndMsReduction}% на ${toSec(ItemAbilityData.KIRINS_BOW_DURATION)}`
            }
        }
    }
    case ItemList.Garuns_Charm: {
        return {
            name: {
                en: 'Garun\'s Charm',
                br: 'Encanto de Garun',
                fr: 'Charme de Garun',
                zh: '加伦的魅力',
                cz: 'Kouzlo Garunové',
                ru: 'Оберег Гаруна'
            },
            desc: {
                en: `Every ${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)} gains additional ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} armor (up to ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stacks). (Normal damage breaks 1 layer)\nGrants ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} armor to nearby allies`,
                br: `A cada ${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)} ganha +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} de armadura (até ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stacks). (Dano normal quebra 1 Stack)\nConcede ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} de armadura para aliados próximos`,
                fr: `Tous les ${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)} gagnez ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} armures supplémentaires (jusqu'à ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stacks). (Les dommages normaux brisent 1 stack)\nOctroie ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} armures aux alliés à proximité`,
                zh: `每隔${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)}获得额外${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}护甲（最多${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}层）。（正常伤害会打破1层）\n给附近的盟友提供${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR}护甲`,
                cz: `Každých ${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)} získáte dodatečnou ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} brnění (až ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stohy). (Normální poškození zlomí 1 vrstvu)\nPoskytuje blízkým spojencům ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} brnění`,
                ru: `Каждые ${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)} вы получаете ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Брони (складывается до ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} раз). (Получение физического урона забирает 1 заряд).\nДаёт ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Брони ближайшим союзникам.`
            }
        }
    }
    case ItemList.Wizard_Charm: {
        return {
            name: {
                en: 'Wizard Charm',
                br: 'Charm Wizard',
                fr: 'Charm Wizard',
                zh: '巫師魅力',
                cz: 'Kouzelníkův kouzlo',
                ru: 'Талисман волшебника'
            },
            desc: {
                en: `Grants ${ItemAbilityData.WIZARD_CHARM_AOE_AP} ability power and ${ItemAbilityData.WIZARD_CHARM_AOE_HASTE} ability haste to nearby alies`,
                br: `Concede ${ItemAbilityData.WIZARD_CHARM_AOE_AP} poder de habilidade e ${ItemAbilityData.WIZARD_CHARM_AOE_HASTE} pressa de habilidade a aliados próximos`,
                fr: `Accorde ${ItemAbilityData.WIZARD_CHARM_AOE_AP} puissance d'aptitude et ${ItemAbilityData.WIZARD_CHARM_AOE_HASTE} vitesse d'aptitude aux alliés à proximité`,
                zh: `給予附近的盟友${ItemAbilityData.WIZARD_CHARM_AOE_AP}的能力力量和${ItemAbilityData.WIZARD_CHARM_AOE_HASTE}的能力加速度`,
                cz: `Uděluje ${ItemAbilityData.WIZARD_CHARM_AOE_AP} sílu schopnosti a ${ItemAbilityData.WIZARD_CHARM_AOE_HASTE} rychlost schopnosti blízkým spojencům`,
                ru: `Даёт ${ItemAbilityData.WIZARD_CHARM_AOE_AP} Силы умений и ${ItemAbilityData.WIZARD_CHARM_AOE_HASTE} Сокращения перезарядки ближайшим союзникам.`
            }
        }
    }
    case ItemList.Corrupted_Locket: {
        return {
            name: {
                en: 'Corrupted Locket',
                br: 'Colar Corrompido',
                fr: 'Collier Corrompu',
                zh: '腐化墜飾',
                cz: 'Zkorumpovaný náhrdelník',
                ru: 'Искажённый медальон'
            },
            desc: {
                en: `Your critical hits against heroes provide additional ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_DAMAGE} damage and ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_MS} move speed for ${toSec(ItemAbilityData.CORRUPTED_LOCKET_DURATION)}. (Stacks up to ${ItemAbilityData.CORRUPTED_LOCKET_MAX_STACKS} times)`,
                br: `Seus ataques críticos contra heróis proporcionam dano adicional de ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_DAMAGE} e velocidade de movimento de ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_MS} por ${toSec(ItemAbilityData.CORRUPTED_LOCKET_DURATION)}. (Empilha até ${ItemAbilityData.CORRUPTED_LOCKET_MAX_STACKS} vezes)`,
                fr: `Vos coups critiques contre les héros procurent ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_DAMAGE} points de dégâts supplémentaires et ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_MS} de vitesse de déplacement pendant ${toSec(ItemAbilityData.CORRUPTED_LOCKET_DURATION)}. (empILABLE jusqu'à ${ItemAbilityData.CORRUPTED_LOCKET_MAX_STACKS} fois)`,
                zh: `您對英雄的暴擊將獲得額外的${ItemAbilityData.CORRUPTED_LOCKET_BONUS_DAMAGE}傷害和${ItemAbilityData.CORRUPTED_LOCKET_BONUS_MS}移動速度，持續時間為${toSec(ItemAbilityData.CORRUPTED_LOCKET_DURATION)}。 (最多可堆疊${ItemAbilityData.CORRUPTED_LOCKET_MAX_STACKS}次)`,
                cz: `Vaše kritické útoky proti hrdinům poskytují dodatečné poškození ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_DAMAGE} a rychlost pohybu ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_MS} po dobu ${toSec(ItemAbilityData.CORRUPTED_LOCKET_DURATION)}. (Nahromadí se až ${ItemAbilityData.CORRUPTED_LOCKET_MAX_STACKS}krát)`,
                ru: `Ваши критические удары наносят героям дополнительно ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_DAMAGE} урона и дают вам ${ItemAbilityData.CORRUPTED_LOCKET_BONUS_MS} Скорости передвижения на ${toSec(ItemAbilityData.CORRUPTED_LOCKET_DURATION)} (складывается до ${ItemAbilityData.CORRUPTED_LOCKET_MAX_STACKS} раз)`
            }
        }
    }
    default: return {
        name: { en: '' },
        desc: { en: '' }
    }
    }
}

const getPoisonBowDescription = (duration: number) => {
    const text: { [key: string]: string } = {
        en: `Enemies hit by your Basic Attacks will be infected by deadly poison, reducing their movement speed by ${ItemAbilityData.POISON_BOW_SLOW} and dealing ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} magic damage per second for ${(duration / 1000).toFixed(1)} seconds. (This effect stacks up 5 times.)`,
        ru: `Ваши атаки накладывают смертельный яд на вражеских героев, замедляя их на ${ItemAbilityData.POISON_BOW_SLOW} и нанося ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} урона в секунду в течение ${(duration / 1000).toFixed(1)} сек. (Этот эффект может складываться до 5 раз, и каждая последующая атака обновляет их длительность.)`,
        br: `Seus ataques aplicam veneno no personagem inimigo e retarda o alvo por ${ItemAbilityData.POISON_BOW_SLOW} e adiciona ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} de dano por seg, por ${(duration / 1000).toFixed(1)} seg.\n (Este efeito pode acumular 5 vezes, cada duração de atualização de ataque.)`,
        fr: `Tes attaques J empoisonne ton ennemie pour ${(duration / 1000).toFixed(1)} sec. Pendant cette période, il est ralenti de ${ItemAbilityData.POISON_BOW_SLOW} et reçoit ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} dégâts supplémentaires. \n (Cet effet peut se cumuler jusqu'à 5 fois, le délai d'empoisennement est remis à zéro à chaque attaque)`,
        zh: `你的一般攻擊給予敵方英雄致命毒害，降低應目標物移動速度值 ${ItemAbilityData.POISON_BOW_SLOW}點並給予 ${(duration / 1000).toFixed(1)}秒 ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME}點傷害。(此效果能疊加五次，每次攻擊刷新時長)`,
    }

    return text[LANG.value] ? text[LANG.value] : text['en']
}

const getIronRodOrHarpoonDescription = (tier2 = false) => {
    const baseDamage = tier2 ? ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE : ItemAbilityData.IRON_ROD_BASE_DAMAGE
    const bonusDamage = tier2 ? 
        fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1) : fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)

    const text: { [key: string]: string } = {
        en: `When your abilities hit an enemy hero, your next basic attack deals bonus ${baseDamage} (+ ${bonusDamage}% Ability Power) magic damage to enemy hero.`,
        ru: `Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${baseDamage} (+ ${bonusDamage}% Силы умений) магического урона.`,
        br: `Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${baseDamage} + ${bonusDamage}% de dano.`,
        fr: `Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${baseDamage} + ${bonusDamage}% dégâts supplémentaires.`,
        zh: `當你的魔法攻擊擊中敵方英雄，你的下一個一般攻擊對敵方英雄造成額外 ${baseDamage} + ${bonusDamage}%  點一般傷害`,
    }

    return text[LANG.value] ? text[LANG.value] : text['en']
}

export const getFrigidCurseDescription = () => {
    const text: { [key: string]: string } = {
        en:  `Reduce movement speed by ${ItemAbilityData.FRIGIT_CURSE_SLOW} and all healing and regeneration effects by ${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(1)}% for ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
        ru:  `Уменьшает Скорость передвижения цели на ${ItemAbilityData.FRIGIT_CURSE_SLOW} и всё входящее исцеление, а также эффекты регенерации ${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(1)}% в течение ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
        br:  `Reduz a velocidade de movimento em ${ItemAbilityData.FRIGIT_CURSE_SLOW} e todos os efeitos de cura e regeneração em ${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(1)}% por ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
        fr:  `Réduit la vitesse de déplacement de ${ItemAbilityData.FRIGIT_CURSE_SLOW} et tous les effets de soins et de régénération de ${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(1)}% pour ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
        zh:  `减少移动速度${ItemAbilityData.FRIGIT_CURSE_SLOW}和所有治疗和再生效果${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(1)}%为${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
        cz:  `Snížení rychlosti pohybu o ${ItemAbilityData.FRIGIT_CURSE_SLOW} a všech léčebných a regeneračních efektů o ${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(1)}% během ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
    }

    return text[LANG.value] ? text[LANG.value] : text['en']
}

export const getLocaleItemDescription = (itemId: number): {
    desc: string
    name: string
} => {
    const result = _getLocaleItemDescription(itemId)
    let description = ''
    if (result.desc) {
        description = result.desc[LANG.value] ? result.desc[LANG.value] : result.desc['en']
    }

    return {
        desc: description,
        name: result.name[LANG.value] ? result.name[LANG.value] : result.name['en']
    }
}
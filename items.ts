/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ItemList,
  fixed,
  ItemAbilityData,
  // @ts-ignore
} from 'shared'
// @ts-ignore
import { calculateMagicDefense } from 'misc/constants'
// @ts-ignore
import { toSec } from './misc'
// @ts-ignore
import { LANG } from '../lang'

const _getLocaleItemDescription = (
  itemId: number
): {
  name: { [key in string]: string }
  desc?: { [key in string]: string }
} => {
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
          en: `Increases your Critical Damage by ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          ru: `Увеличивает ваш урон от критических атак на ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          br: `Aumenta seu Dano Crítico em ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          cz: `Zvýší vaše kritické poškození o ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          fr: `Augmente vos dégâts critiques de ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          zh: `增加你的暴擊傷害 ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%。`,
        },
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
          en: `Increases projectile range by ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}px and projectile speed by ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
          ru: `Увеличивает дальность полёта снарядов на ${
            ItemAbilityData.RESILIENT_BOW_BULLET_RANGE
          } пикселей и скорость их полёта на ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`,
          br: `Aumenta o alcance das balas em ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} e a velocidade em ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
          fr: `Augmente la portée des balles de ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} et la vitesse de ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
          zh: `增加${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}的子弹射程和${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%的子弹速度。`,
          cz: `Zvýší dolet střelby o ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} a rychlost o ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
        },
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
          ru: 'Очаровательная подвеска',
        },
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
          en: `Amplifies all healing and regeneration effects by ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%.`,
          ru: `Увеличивает эффективность входящего исцеления и эффектов регенерации на ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%`,
          br: `Amplifica todos os efeitos de cura e regeneração em ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%.`,
          cz: `Zesiluje všechny léčebné a regenerační efekty o ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%.`,
          fr: `Amplifie tous les effets de guérison et de régénération de ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%.`,
          zh: `增強所有治療和再生效果 ${Math.floor(ItemAbilityData.PLATE_ARMOR_HP_AMP * 100)}%。`,
        },
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
          fr: "Bottes d'agilité",
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
          fr: "Tueur d'Ombre",
          zh: '闇影殺手',
        },
        desc: {
          en: `Each Basic Attack deals ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(
            1
          )}% of the enemy's max health as bonus magical damage. \n \n
          Shadow Curse: Basic attack prevents the enemy's Health Regeneration and deals (${
            ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100
          }% enemy Health Regeneration) Pure Damage per second for ${toSec(
            ItemAbilityData.SHADOW_SLAYER_DURATION
          )}. Can occur only once every ${toSec(ItemAbilityData.SHADOW_SLAYER_COOLDOWN)}`,
          ru: `Каждая базовая атака наносит ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(
            1
          )}% максимального здоровья врага в виде магического урона. \n \n
          Проклятие теней: базовая атака лишает врага Восстановление здоровья и наносит (${
            ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100
          }% Восстановления здоровья врага) Чистого урона в секунду на ${toSec(
            ItemAbilityData.SHADOW_SLAYER_DURATION
          )}. Может произойти только один раз каждые ${toSec(ItemAbilityData.SHADOW_SLAYER_COOLDOWN)}`,
          br: `Cada ataque básico causa ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(
            1
          )}% do máximo de vida do inimigo como dano mágico bônus. \n \n
          Maldição das Sombras: Ataque básico impede a Regeneração de Vida do inimigo e causa (${
            ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100
          }% Regeneração de Vida do inimigo) Dano Puro por segundo por ${toSec(
            ItemAbilityData.SHADOW_SLAYER_DURATION
          )}. Pode ocorrer apenas uma vez a cada ${toSec(ItemAbilityData.SHADOW_SLAYER_COOLDOWN)}`,
          cz: `Každý základní útok způsobí ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(
            1
          )}% maximálního zdraví nepřítele jako bonusové magické poškození. \n \n
          Stínová kletba: Základní útok brání regeneraci zdraví nepřítele a způsobuje (${
            ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100
          }% regenerace zdraví nepřítele) čisté poškození za sekundu po dobu ${toSec(
            ItemAbilityData.SHADOW_SLAYER_DURATION
          )}. Může nastat pouze jednou každých ${toSec(ItemAbilityData.SHADOW_SLAYER_COOLDOWN)}`,
          fr: `Chaque attaque de base inflige ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(
            1
          )}% des points de vie max de l'ennemi en dégâts magiques bonus. \n \n
          Malédiction des ombres: l'attaque de base empêche la régénération de santé de l'ennemi et inflige (${
            ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100
          }% de la régénération de santé de l'ennemi) Dégâts purs par seconde pendant ${toSec(
            ItemAbilityData.SHADOW_SLAYER_DURATION
          )}. Ne peut se produire qu'une fois toutes les ${toSec(ItemAbilityData.SHADOW_SLAYER_COOLDOWN)}`,
          zh: `每次基本攻擊造成敵人最大生命值的 ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(
            1
          )}% 作為額外魔法傷害。 \n \n
          暗影詛咒：基本攻擊阻止敵人的生命恢復，並造成（${
            ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100
          }% 敵人生命恢復）每秒純粹傷害，持續 ${toSec(
            ItemAbilityData.SHADOW_SLAYER_DURATION
          )}。每 ${toSec(ItemAbilityData.SHADOW_SLAYER_COOLDOWN)} 可發生一次`,
        },
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
          en: `Cleanses all negative effects. Decreases your Attack Damage by 75% and makes you immune to all incoming damage and negative effects for ${toSec(
            ItemAbilityData.DIVINE_SWORD_DURATION
          )}.`,
          br: `Escudo Divino - Torna você imune a todos os efeitos por${toSec(
            ItemAbilityData.DIVINE_SWORD_DURATION
          )} e reduza seu dano de ataque em 75%.`,
          ru: `Вы становитесь неуязвимы к входящему урону и эффектам контроля на ${toSec(
            ItemAbilityData.DIVINE_SWORD_DURATION
          )}, а также ваша Сила атаки уменьшается на 75%. При этом, вы не лишаетесь возможности атаковать, использовать способности или предметы.`,
          zh: `神聖護盾 - 使你 ${toSec(
            ItemAbilityData.DIVINE_SWORD_DURATION
          )}無視所有效果並將你受到的攻擊傷害降至為 75%。`,
          cz: `Očistí všechny negativní efekty. Sníží vaše útočné poškození o 75% a činí vás imunními vůči všem přicházejícím poškozením a negativním efektům po dobu ${toSec(
            ItemAbilityData.DIVINE_SWORD_DURATION
          )}.`,
          fr: `Nettoie tous les effets négatifs. Diminue vos dégâts d'attaque de 75% et vous rend immunisé contre tous les dégâts entrants et les effets négatifs pendant ${toSec(
            ItemAbilityData.DIVINE_SWORD_DURATION
          )}.`,
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
          en: 'Throws a fragment of the katana, which reduces the Movement Speed of enemies and silences enemies inside its radius. Provides unobstructed vision and reveals all invisible units in its radius.',
          ru: 'Вы бросаете фрагмент катаны перед собой, который при приземлении замедляет и накладывает немоту на всех ближайших вражеских героев, а также раскрывает все невидимые цели вокруг себя и даёт беспрепятственный обзор, пока находится на земле.',
          br: 'Joga a katana divina perto de você, no momento do impacto fornece visão desobstruída, silencia e desacelera todos os heróis inimigos na área. Além disso, revelará todas as unidades invisíveis na área.',
          zh: '在你前方投擲片段武士刀，提供寬廣視野，沉默且減速在範圍內的敵方英雄。此外能揭發隱蔽單位',
          cz: 'Vhodíte před sebe fragment katany, který zpomaluje a umlčuje všechny nepřátelské hrdiny v okolí. Navíc poskytuje neomezené vidění a odhaluje všechny neviditelné jednotky v okolí.',
          fr: 'Lance un fragment de la katana devant vous, qui ralentit et réduit au silence tous les héros ennemis à proximité. De plus, il fournit une vision dégagée et révèle toutes les unités invisibles à proximité.',
        },
      }
    case ItemList.Iron_Basher:
      return {
        name: {
          en: 'Spiked Mace',
          ru: 'Шипастая булава',
          br: 'Maçã Cravada',
          zh: '尖刺錘',
          fr: 'Masse à pointes',
          cz: 'Hrotatá palice',
        },
        desc: {
          en: `Your Basic Attack instantly kills enemies with less than ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}% remaining Health.`,
          ru: `Ваша атака мгновенно добивает врага, если у него меньше ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}% Здоровья.`,
          br: `Seu ataque normal instantaneamente mata o inimigo quando a saúde do inimigo está abaixo de ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}%`,
          fr: `Votre attaque normale tue instantanément l'ennemi lorsque la santé de l'ennemi est inférieure à ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}%`,
          zh: `当敌人的生命值低于${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(
            1
          )}%时，你的普通攻击会瞬间杀死敌人`,
          cz: `Tvůj normální útok okamžitě zabije nepřítele, když je zdraví nepřítele pod ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}%`,
        },
      }
    case ItemList.Plague_Ring:
      return {
        name: {
          en: 'Plague Ring',
          ru: 'Чумное кольцо',
          br: 'Anel da Praga',
          fr: 'Anneau de peste',
          zh: '瘟疫戒指',
          cz: 'Morový Prsten',
        },
        desc: {
          en: `Increases the duration of all negative effects applied by your Abilities by ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}%.`,
          ru: `Увеличивает длительность всех накладываемых вами негативных эффектов на ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}%.`,
          br: `Aumente a duração em ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}% de todos os efeitos negativos aplicados pelas suas habilidades.`,
          fr: `Augmente la durée de ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}% de tous les effets négatifs appliqués par vos capacités.`,
          zh: `增加 ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER)}% 所有负面效果应用于你的技能持续时间.`,
          cz: `Zvyšte dobu trvání o ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}% všech negativních efektů, které vaše schopnosti aplikují.`,
        },
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
          en: `Your Basic Attacks apply a stack of physical frost on the enemy, slowing them by ${
            ItemAbilityData.COLD_SWORD_SLOW_PER_STACK
          } per stack. At ${
            ItemAbilityData.COLD_SWORD_STACKS
          } stacks, the enemy is inflicted with Frigid Curse - ${getFrigidCurseDescription()}.`,
          ru: `Ваши атаки накладывают на врага физический мороз, замедляющий его на ${
            ItemAbilityData.COLD_SWORD_SLOW_PER_STACK
          } за каждый стак. При ${
            ItemAbilityData.COLD_SWORD_STACKS
          } стаках, врага поражает Ледяное Проклятие - ${getFrigidCurseDescription()}.`,
          br: `Seus ataques básicos aplicam uma pilha de gelo físico no inimigo, diminuindo a velocidade deles em ${
            ItemAbilityData.COLD_SWORD_SLOW_PER_STACK
          } por pilha. Em ${
            ItemAbilityData.COLD_SWORD_STACKS
          } pilhas, o inimigo é atingido pela Maldição Gélida - ${getFrigidCurseDescription()}.`,
          fr: `Vos attaques de base appliquent une pile de gel physique sur l'ennemi qui les ralentit de ${
            ItemAbilityData.COLD_SWORD_SLOW_PER_STACK
          } par pile. À ${
            ItemAbilityData.COLD_SWORD_STACKS
          } piles, l'ennemi est affecté par la Malédiction glaciale - ${getFrigidCurseDescription()}.`,
          zh: `你的基本攻击对敌人施加物理冰霜，每层减速 ${ItemAbilityData.COLD_SWORD_SLOW_PER_STACK}。在 ${
            ItemAbilityData.COLD_SWORD_STACKS
          } 层时，敌人会受到寒冷诅咒 - ${getFrigidCurseDescription()}`,
          cz: `Vaše základní útoky aplikují nepříteli fyzický mráz, který ho zpomaluje o ${
            ItemAbilityData.COLD_SWORD_SLOW_PER_STACK
          } za každý stack. Při ${
            ItemAbilityData.COLD_SWORD_STACKS
          } stackách je nepřítel postižen Ledovým prokletím - ${getFrigidCurseDescription()}.`,
        },
      }
    case ItemList.Corrupted_Light_Slayer:
      return {
        name: {
          en: 'Corrupted Light Slayer',
          ru: 'Искажённый губитель света',
          br: 'Corta Luz corrompido',
          fr: 'Tueur de Lumière Corrompu',
          zh: '腐化的輕量殺手',
          cz: 'Zkreslený světelný vrah',
        },
        desc: {
          en: `Grants ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Lifesteal and ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } Attack Damage to nearby allies.`,
          ru: `Увеличивает Кражу здоровья у всех ближайших союзников на ${(
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100
          ).toFixed(1)}% и Силу атаки на ${ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE}.`,
          br: `Concede ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Roubo de Vida e ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } Dano de Ataque aos aliados próximos.`,
          fr: `Accorde ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Vampirisme et ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } Dégâts d'Attaque aux alliés proches.`,
          zh: `提供 ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% 生命偷取和 ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } 攻击伤害给附近的盟友.`,
          cz: `Poskytuje ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(
            1
          )}% životodárného kradení a ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } bodů poškození útoku blízkým spojencům.`,
        },
      }
    /** Wooden Bow */
    case ItemList.Berserker_Bow:
      return {
        name: {
          en: "Berserker's Bow",
          ru: 'Лук берсерка',
          br: 'Besta Incontrolável',
          fr: 'Arc du Berserker',
          zh: '狂戰士之弓',
          cz: 'Luk Berserka',
        },
        desc: {
          en: `Whenever your Basic Attack hits an enemy, gain a stack of berserk, up to a maximum of ${ItemAbilityData.BERSERKER_BOW_MAXIMUM_STACKS} stacks. Each stack increases your Attack Speed by ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% for ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} Seconds.`,
          ru: `Попадая атаками по врагу, вы увеличиваете свою Скорость атаки на ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% на ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} сек.`,
          br: `Cada vez que você atinge o personagem inimigo, aumenta sua velocidade de ataque em ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% por ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seg.`,
          cz: `Pokaždé když zasáhneš protivnika tak si zvýšís rychlost útoků o ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% na ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} vteřin.`,
          fr: `Chaque attaque J réussie augmente ta vitesse d'attaque de ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% pour ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec.`,
          zh: `每當你的一般攻擊擊中敵方英雄，增加 ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(
            1
          )}秒你的攻擊速度 ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}%`,
        },
      }
    case ItemList.Magical_Bow:
      return {
        name: {
          en: 'Magical Bow',
          ru: 'Магический лук',
          br: 'Arco das Almas perdidas',
          fr: 'Arc magique',
          zh: '魔法之弓',
          cz: 'Magický Luk',
        },
        desc: {
          en:
            'Whenever your Abilities hit an enemy, your Movement Speed increases by 10 for 1.5 Seconds. Your abilites also applies a stack of poison \n \n' +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          ru:
            'Когда ваши способности попадают по врагу, ваша Скорость передвижения увеличивается на 10 на 1.5 сек. Ваши способности также накладывают стак яда \n \n' +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          br:
            'Sempre que suas habilidades atingem um inimigo, sua velocidade de movimento aumenta em 10 por 1,5 segundos. Suas habilidades também aplicam uma pilha de veneno \n \n' +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          fr:
            'Chaque fois que vos capacités touchent un ennemi, votre vitesse de déplacement augmente de 10 pendant 1,5 seconde. Vos capacités appliquent également une pile de poison \n \n' +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          zh:
            '每當你的技能擊中敵人時，你的移動速度將在1.5秒內增加10。 你的技能也會施加一層毒 \n \n' +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          cz:
            'Když vaše schopnosti zasáhnou nepřítele, vaše rychlost pohybu se po dobu 1,5 sekundy zvýší o 10. Vaše schopnosti také aplikují stack jedu \n \n' +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
        },
      }
    case ItemList.Poison_Bow:
      return {
        name: {
          en: 'Poison Bow',
          ru: 'Ядовитый лук',
          br: 'Arco de Veneno concentrado',
          fr: 'Arc empoisonné',
          zh: '劇毒之弓',
          cz: 'Jedovatý Luk',
        },
        desc: {
          en: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1),
          ru: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1),
          br: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1),
          fr: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1),
          zh: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1),
          cz: getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_1),
        },
      }

    case ItemList.Corrupted_Longbow:
      return {
        name: {
          en: 'Corrupted Longbow',
          ru: 'Искажённый длинный лук',
          br: 'Arco Corrompido',
          fr: 'Arc long corrompu',
          zh: '腐化的長弓',
          cz: 'Zkreslený dlouhý luk',
        },
        desc: {
          en:
            `Corrupts your blood and makes you swifter, increasing your Attack Speed by ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% and increasing your Movement Speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} for ${(
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            ).toFixed(1)} Seconds.\n` +
            `This effect prevents you from casting abilities.\n \n` +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          ru:
            `Искажает вашу кровь и делает вас быстрее, увеличивая Скорость атаки на ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% и увеличивая Скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } сек.\n` +
            `Этот эффект мешает вам использовать способности.\n \n` +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          br:
            `Corrompe seu sangue e o torna mais rápido, aumentando sua Velocidade de Ataque em ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% e aumentando sua Velocidade de Movimento em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} por ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } segundos.\n` +
            `Este efeito impede que você use habilidades.\n \n` +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          fr:
            `Corrompt votre sang et vous rend plus rapide, augmentant votre vitesse d'attaque de ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% et augmentant votre vitesse de déplacement de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} pour ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } secondes.\n` +
            `Cet effet vous empêche d'utiliser des capacités.\n \n` +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          zh:
            `腐化你的血液使你更快，增加你的攻擊速度 ${(
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            ).toFixed(1)}% 並增加你的移動速度 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} 在 ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } 秒。\n` +
            `這個效果會阻止你施放技能。\n \n` +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
          cz:
            `Zkresluje vaši krev a zrychluje vás, zvyšuje vaši rychlost útoku o ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% a zvyšuje vaši rychlost pohybu o ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} po dobu ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } sekund.\n` +
            `Tento efekt vám brání v používání schopností.\n \n` +
            getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2),
        },
      }
    case ItemList.Hunters_Longbow:
      return {
        name: {
          en: "Hunter's Longbow",
          ru: 'Длинный лук охотника',
          br: 'Besta da Velocidade encantada',
          fr: 'Arc long de chasseur',
          zh: '獵人長弓',
          cz: 'Dlouhý luk lovce',
        },
        desc: {
          en: `Attacking an enemy hero grants you a Hunter's Focus and increases movement speed by ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} for a duration of ${toSec(ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_DURATION)}`,
          ru: `Атака вражеского героя дарует вам Охотничий фокус и увеличивает скорость передвижения на ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} на ${toSec(
            ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_DURATION
          )} секунд`,
          br: `Atacar um herói inimigo concede a você um Foco de Caçador e aumenta a velocidade de movimento em ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} por uma duração de ${toSec(
            ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_DURATION
          )}`,
          fr: `Attaquer un héros ennemi vous accorde un Focus de chasseur et augmente la vitesse de déplacement de ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} pour une durée de ${toSec(
            ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_DURATION
          )}`,
          zh: `攻擊敵方英雄將獲得獵人的專注並增加移動速度 ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} 持續時間 ${toSec(
            ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_DURATION
          )}`,
          cz: `Útok na nepřátelského hrdinu vám poskytne Lovecký záměr a zvýší rychlost pohybu o ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} po dobu ${toSec(
            ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_DURATION
          )} sekund`,
        },
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
          cz: 'Hořící hůl',
        },
        desc: {
          en: `Your abilites ignite enemy heroes, dealing ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% of their Max Health as Magic Damage over ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(
            1
          )} Seconds.`,
          ru: `Ваши способности поджигают врага и он получает дополнительный Магический урон в размере ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% от своего макс. Здоровья в сек. в течение ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(
            1
          )} сек.`,
          br: `Suas habilidades incineram os inimigo causando dano adicional de ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% vida máxima por seg, por ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} seg.`,
          fr: `Tes compétences K et L brûlent tes ennemies et font des dégâts additionnels pour ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% de leurs points de vie maximum pour ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec.`,
          zh: `你的技能點燃敵方並額外給予 ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(
            1
          )}秒每秒最大血量 ${fixed(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100, 1)}%傷害`,
          cz: `Vaše schopnosti zapalují nepřátele, způsobují ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% jejich maximálního života jako magické poškození po dobu ${(
            ItemAbilityData.BURNING_ROD_DURATION / 1000
          ).toFixed(1)} sekund.`,
        },
      }
    case ItemList.Vampiric_Rod:
      return {
        name: {
          en: 'Vampiric Rod',
          ru: 'Вампирический жезл',
          br: 'Cajado Vampírico',
          fr: 'Baguette vampirique',
          zh: '吸血鬼法棒',
          cz: 'Vampýří hůl',
        },
        desc: {
          en: `Your Abilities heal you for ${fixed(
            ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100,
            1
          )}% (65% weaker against minions) of damage dealt.`,
          br: `Quando seu ataque mágico atinge um personagem inimigo, ele curará você em ${fixed(
            ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100,
            1
          )}% de dano causado.`,
          ru: `Ваши способности исцеляют вас на ${fixed(
            ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100,
            1
          )}% (на 70% слабее против миньонов) от нанесённого урона.`,
          zh: `當你的魔法攻擊擊中敵方英雄，從${fixed(
            ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100,
            1
          )}%給予的傷害恢復自己生命值。`,
          cz: `Vaše schopnosti vás léčí za ${fixed(
            ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100,
            1
          )}% (65% slabší proti minionům) způsobeného poškození.`,
          fr: `Vos compétences vous soignent pour ${fixed(
            ItemAbilityData.VAMPIRIC_ROD_HP_STEAL * 100,
            1
          )}% (65% plus faible contre les sbires) des dégâts infligés.`,
        },
      }
    case ItemList.Kirin_Staff:
      return {
        name: {
          en: "Kirin's Staff",
          ru: 'Посох Кирина',
          br: 'Cajado de Kirin',
          fr: 'Bâton de Kirin',
          zh: '麒麟法棍',
          cz: 'Kirinův hůl',
        },
        desc: {
          en: `Your Abilities reduce Magic Resistance by ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% for 4 Seconds.`,
          br: `Suas habilidades penetram a resistência mágica do alvo em ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}%, este efeito não se acumula com outras fontes.`,
          ru: `Ваши способности уменьшают Сопротивление магии цели на ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% на 4 секунды. Этот эффект не складывается с другими источниками`,
          zh: `你的技能拆穿目標物的魔法抗性 ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}%，此效果將不會疊加於其他資源`,
          cz: `Vaše schopnosti snižují magickou odolnost cíle o ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% po dobu 4 sekund.`,
          fr: `Vos compétences réduisent la résistance magique de la cible de ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% pendant 4 sec.`,
        },
      }
    case ItemList.Corrupted_Staff:
      return {
        name: {
          en: 'Corrupted Staff',
          br: 'Cajado corrompido',
          ru: 'Искажённый посох',
          zh: '腐化的法棍',
          cz: 'Zkreslený hůl',
          fr: 'Bâton corrompu',
        },
        desc: {
          en: `Increases your Ability Power by ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
          br: `Fornece o adicional de ${fixed(
            ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100,
            1
          )}% de poder de habilidade!`,
          ru: `Повышает вашу Силу умений на ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
          zh: `提供額外的 ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%技能威力！`,
          cz: `Zvyšuje vaši sílu schopností o ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
          fr: `Augmente votre puissance des compétences de ${fixed(
            ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100,
            1
          )}%.`,
        },
      }
    case ItemList.Frozen_Staff:
      return {
        name: {
          en: 'Staff of the Frozen Empress',
          ru: 'Посох Ледяной Императрицы',
          br: 'Cajado da Imperatriz Congelada',
          fr: 'Baguette gelée',
          zh: '冰結法棍',
          cz: 'Hůl Zmrzlé císařovny',
        },
        desc: {
          en: `Your Abilities apply a stack of magical frost on the enemy. At ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } stacks, the enemy is inflicted with Frigid Curse - ${getFrigidCurseDescription()}`,
          ru: `Попадая способностями по врагу, вы накладываете на него 1 заряд. При накоплении ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } зарядов, этот враг получает Морозное проклятие - ${getFrigidCurseDescription()}`,
          br: `As suas habilidades aplicam pilhas no inimigo. Ao alcançar ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } pilhas, o inimigo é afetado pelo Mal de Gelo- ${getFrigidCurseDescription()}`,
          fr: `Vos capacités appliquent des stacks ennemis. Une fois que ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } s'empilent, l'ennemi est affecté par la Malédiction de Givre- ${getFrigidCurseDescription()}`,
          zh: `你的技能会给敌人造成层数。当敌人达到 ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } 层时，将会被冰封诅咒，- ${getFrigidCurseDescription()}`,
          cz: `Vaše schopnosti působí na nepřátele vrstvami. Po dosažení ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } vrstev je nepřítel postižen Zimní proklěti - ${getFrigidCurseDescription()}`,
        },
      }
    case ItemList.Iron_Rod:
      return {
        name: {
          en: 'Staff of Iron Warriors',
          ru: 'Жезл железных воинов',
          br: 'Cajado dos Guerreiros de ferro',
          fr: 'Baguette de fer',
          zh: '鐵之法棒',
          cz: 'Hůl železných válečníků',
        },
        desc: { en: getIronRodOrHarpoonDescription() },
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
        desc: { en: getIronRodOrHarpoonDescription(true) },
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
          cz: 'Orchidej zloby',
        },
        desc: {
          en:
            `Shoots a piercing dark arrow, silencing all enemies hit for ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
            ).toFixed(1)} Seconds. At the end of its duration, inflicts ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}% of the damage received while silenced as bonus Magic Damage.` +
            '\n' +
            getIronRodOrHarpoonDescription(),
          ru:
            `Выпускает тёмную стрелу в вашем направлении, которая пронзает несколько целей, накладывая на них немоту на ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
            ).toFixed(1)} сек. По окончании эффекта цели получают ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}% от полученного урона за время действия немоты в виде магического урона.` +
            '\n' +
            getIronRodOrHarpoonDescription(),
          br:
            `Acumula maldade lançando na direção que seu personagem está olhando, perfurando os inimigos e os silenciando por ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
            ).toFixed(1)} seg, e no final do silênciar, ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}% de dano enquanto silenciado infligindo como dano mágico adicional.` +
            '\n' +
            getIronRodOrHarpoonDescription(),
          fr:
            `Envoie une sombre flèche dans ta direction, qui traverse tes ennemies et les réduits au silence pour ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
            ).toFixed(1)} sec. À la fin de ce délai, ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}% des dégâts reçus par l'ennemi sont infligés sous forme de dégâts magiques supplémentaires.` +
            '\n' +
            getIronRodOrHarpoonDescription(),
          zh:
            `向前方釋放暗箭貫穿敵方，沉默 ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(
              1
            )}秒所有敵方並在沉默結束後，期間造成的傷害 ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}%追加為魔法傷害。` +
            '\n' +
            getIronRodOrHarpoonDescription(),
          cz:
            `Vystřelí pronikavý temný šíp, který umlčí všechny nepřátele zasažené po dobu ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
            ).toFixed(1)} sekund. Na konci trvání způsobí ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}% poškození, které bylo způsobeno během umlčení jako bonusové magické poškození.` +
            '\n' +
            getIronRodOrHarpoonDescription(),
        },
      }
    case ItemList.Divine_Staff_T2:
      return {
        name: {
          en: 'Divine Staff',
          ru: 'Божественный посох',
          br: 'Cajado da Deusa da floresta',
          fr: 'Baguette divine',
          zh: '神聖法棍',
          cz: 'Božský hůl',
        },
        desc: {
          en: `Restores ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} Health for nearby allies and grants ${
            ItemAbilityData.DIVINE_STAFF_BONUS_SPEED
          } Movement Speed for ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(
            1
          )} Seconds to all allies in a ${ItemAbilityData.ACTIVE_EFFECT_RADIUS}px radius.
                        \n This effect has an inner cooldown which prevents any other activations for 12 Seconds. This inner cooldown cannot be reduced by Ability Haste.`,
          ru: `Исцеляет ближайшим союзным целям в радиусе ${ItemAbilityData.ACTIVE_EFFECT_RADIUS} пикселей ${
            ItemAbilityData.DIVINE_STAFF_HEAL_T2
          } Здоровья, накладывая ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} бонусной Скорости передвижения на ${(
            ItemAbilityData.DIVINE_STAFF_DURATION / 1000
          ).toFixed(1)} сек.
                        \n Этот эффект имеет внутреннюю перезарядку длительностью 12 сек. В течение этого времени активный эффект этого предмета не работает на ранее задетых целях (Не может быть уменьшено Сокращением перезарядки)`,
          br: `Cura todas as unidades próximas de ${
            ItemAbilityData.ACTIVE_EFFECT_RADIUS
          }px raio por ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, aplica ${
            ItemAbilityData.DIVINE_STAFF_BONUS_SPEED
          } velocidade de movimento bônus por ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} seg.
                        \n Este efeito tem o tempo de recarga de 12 segundos.(não pode ser reduzido pela redução de tempo de recarga), durante este tempo, este efeito é totalmente ignorado`,
          fr: `Soigne toutes les unités dans un rayon de ${
            ItemAbilityData.ACTIVE_EFFECT_RADIUS
          }px pour ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}. Fournit ${
            ItemAbilityData.DIVINE_STAFF_BONUS_SPEED
          } points de vitesse de déplacement pour ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec.
                        \n Cet effet a un délai de réduction interne de 12 sec qui ne peut pas être réduit. Pendant ce délai, l'effet est complétement ignoré.`,
          zh: `治癒所有半徑 ${ItemAbilityData.ACTIVE_EFFECT_RADIUS}像素內的鄰近單位 ${
            ItemAbilityData.DIVINE_STAFF_HEAL_T2
          }點生命值，給予 ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED}點額外速度 ${(
            ItemAbilityData.DIVINE_STAFF_DURATION / 1000
          ).toFixed(1)}秒並移除所有負面效果
                        \n 此效果有內建 12秒冷卻時間 (無法透過縮短冷卻時間來減少)，在期間內，再次發動效果將被完全無試`,
          cz: `Vyléčí všechny jednotky v okruhu ${
            ItemAbilityData.ACTIVE_EFFECT_RADIUS
          }px za ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} života, poskytuje ${
            ItemAbilityData.DIVINE_STAFF_BONUS_SPEED
          } rychlosti pohybu po dobu ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sekund.
                        \n Tento efekt má vnitřní dobu odpočinku trvající 12 sekund. Během této doby se tento efekt neaktivuje.`,
        },
      }

    case ItemList.Vampiric_Shield:
      return {
        name: {
          en: 'Vampiric Shield',
          ru: 'Вампирический щит',
          br: 'Escudo Vampírico',
          fr: 'Bouclier vampirique',
          zh: '吸血鬼護盾',
          cz: 'Vampýří štít',
        },
        desc: {
          en: `Upon taking player-based damage and falling below ${fixed(
            ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100,
            1
          )}% Health, cleanses all negative effects and increases Health Regeneration by ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } for ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}.`,
          ru: `При получении урона, при котором ваше здоровье опускается ниже ${fixed(
            ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100,
            1
          )}%, вы снимаете с себя все негативные эффекты и получаете ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } Регенерации здоровья на ${toSec(
            ItemAbilityData.VAMPIRIC_SHIELD_DURATION
          )} (Срабатывает только при получении урона от вражеских героев)`,
          br: `Ao receber dano e cair abaixo de ${fixed(
            ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100,
            1
          )}% de vida, remove todos os efeitos negativos e aumenta a regeneração de vida em ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } por ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}.`,
          fr: `Lorsque vous subissez des dégâts et que votre vie descend en dessous de ${fixed(
            ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100,
            1
          )}%, supprime tous les effets négatifs et augmente la régénération de santé de ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } pour ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}.`,
          zh: `當你受到傷害並掉到 ${fixed(
            ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100,
            1
          )}%生命以下時，清除所有負面效果並增加 ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          }生命回復，持續 ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}。`,
          cz: `Po přijetí hráčského poškození a poklesu pod ${fixed(
            ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100,
            1
          )}% zdraví, očistí všechny negativní účinky a zvýší Regeneraci zdraví o ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } po dobu ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}.`,
        },
      }

    case ItemList.Divine_Shield:
      return {
        name: {
          en: 'Divine Shield',
          ru: 'Божественный щит',
          br: 'Escudo da Deusa da floresta',
          fr: 'Bouclier divin',
          zh: '神聖護盾',
          cz: 'Božský štít',
        },
        desc: {
          en: `Cleanses all negative effects from nearby allies and grants ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} Health Regen to nearby allies for 4 Seconds.`,
          ru: `Снимает все негативные эффекты с ближайших союзников и дополнительно даёт им ${
            ItemAbilityData.DIVINE_SHIELD_BONUS_HPR
          } Регенерации здоровья на ${toSec(ItemAbilityData.DIVINE_SHIELD_DURATION)}.`,
          br: `Aplique a purificação a todos os aliados próximos, removendo todos os efeitos negativos e concedendo ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regen de saúde por curto período de tempo.`,
          zh: `将净化应用于所有附近的盟友，可消除所有负面效果并赋予${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR}短时间的恢复健康。`,
          cz: `Aplikujte očištění všem blízkým spojencům, které odstraní všechny negativní účinky a poskytne ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} obnovu zdraví po krátkou dobu.`,
          fr: `Appliquer le nettoyage à tous les alliés proches qui supprime tous les effets négatifs et accorde ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de régénération de santé pour une courte durée.`,
        },
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
          en: `Grants ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic Resistance and ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Health Regen to nearby allies.`,
          br: `Concede aos aliados mais próximos ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de resistência mágica e ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de regeneração de vida.`,
          fr: `Accorde à vos alliés voisins ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de résistance magique et ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de régénération de vie.`,
          zh: `为附近的盟友提供${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR}魔法抗性和${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}生命回复。`,
          cz: `Poskytuje sousedním spojencům ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} odolnost proti kouzlu a ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} regeneraci zdraví.`,
          ru: `Увеличивает Сопротивление магии у всех ближайших союзников на ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} и Регенерацию здоровья на ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}.`,
        },
      }

    case ItemList.Spike_Shield: {
      return {
        name: {
          en: 'Spike Shield',
          ru: 'Шипастый щит',
          br: 'Escudo de Espinhos sombrio',
          fr: 'Bouclier piquant',
          zh: '尖刺護盾',
          cz: 'Hrotový štít',
        },
        desc: {
          en: `For ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)}, carrier reflects ${(
            ItemAbilityData.SPIKE_SHIELD_REFLECT * 100
          ).toFixed(1)}% damage taken back to the attacker. Reflect damage is same damage type as received.`,
          ru: `На ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} сек. наносит врагу ${(
            ItemAbilityData.SPIKE_SHIELD_REFLECT * 100
          ).toFixed(1)}% урона, который был получен вами. Тип урона такой же, как и полученный.`,
          br: `Por ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} seg, reflete ${(
            ItemAbilityData.SPIKE_SHIELD_REFLECT * 100
          ).toFixed(1)}% do dano recebido de volta ao atacante. O dano refletido é do mesmo tipo que o recebido.`,
          fr: `Pendant ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} sec, le porteur réfléchit ${(
            ItemAbilityData.SPIKE_SHIELD_REFLECT * 100
          ).toFixed(1)}% des dégâts reçus à l'attaquant. Les dégâts réfléchis sont du même type que ceux reçus.`,
          zh: `在 ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} 秒内，反射 ${(
            ItemAbilityData.SPIKE_SHIELD_REFLECT * 100
          ).toFixed(1)}% 所受到的傷害給予攻擊者。反射傷害與所受到的傷害相同。`,
          cz: `Po dobu ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} sekund odrazí ${(
            ItemAbilityData.SPIKE_SHIELD_REFLECT * 100
          ).toFixed(1)}% poškození zpět na útočníka. Odražené poškození je stejného typu jako přijaté.`,
        },
      }
    }

    case ItemList.GarunsDefender:
      return {
        name: {
          en: "Garun's Defender",
          ru: 'Защитник Гаруна',
          br: 'Defensor de Garun',
          fr: 'Bouclier de Garun',
          zh: '加侖的守護者',
          cz: 'Garunův obránce',
        },
        desc: {
          en: `Upon receiving player-based damage and falling below ${fixed(
            ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,
            1
          )}% Health, unleash a shockwave after 0.5 Seconds, dealing ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } Normal Damage and stunning nearby enemies for ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)}.`,
          ru: `При получении урона, при котором ваше здоровье опускается ниже ${fixed(
            ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,
            1
          )}%, вы создаёте ударную волну с задержкой в 0,5 сек., которая оглушает всех ближайших врагов на ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )} и наносит ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} физического урона. (Перезарядка: ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_COOLDOWN
          )})`,
          br: `Se você tomar dano abaixo de ${fixed(
            ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,
            1
          )}% da saúde, você desencadeia uma onda de choque com um atraso de 0,5 segundos que atordoa todos os inimigos próximos por ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )} e causar ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } de dano normal. Este efeito não pode ser ativado mais de uma vez a cada ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_COOLDOWN
          )}.`,
          fr: `Si vous subissez des dégâts en dessous de ${fixed(
            ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,
            1
          )}% de vie, vous libérez une onde de choc avec un délai de 0,5 seconde qui assomme tous les ennemis à proximité pendant ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )} et inflige ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } de dégâts normaux. Cet effet ne peut se déclencher qu'une seule fois tous les ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_COOLDOWN
          )}.`,
          zh: `如果您的生命值低于${fixed(
            ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,
            1
          )}%时受到伤害，您将在0.5秒后释放一道冲击波，使附近所有敌人昏迷${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )}，并造成${ItemAbilityData.GARUNS_DEFENDER_DAMAGE}的常规伤害。此效果每${toSec(
            ItemAbilityData.GARUNS_DEFENDER_COOLDOWN
          )}不能触发一次。`,
          cz: `Pokud utrpíte poškození pod ${fixed(
            ItemAbilityData.GARUNS_DEFENDER_THRESHOLD * 100,
            1
          )}% životů, spustíte vlnu šoku s 0,5sekundovým zpožděním, která ochromí všechny nepřátele v okolí na ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )} a způsobí ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } normálního poškození. Tento efekt nemůže být aktivován více než jednou za ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_COOLDOWN
          )}.`,
        },
      }
    case ItemList.Plate_Shield:
      return {
        name: {
          en: 'Plate Shield',
          ru: 'Латный щит',
          br: 'Escudo de Placas reforçadas',
          fr: 'Bouclier à plaque',
          zh: '金屬護盾',
          cz: 'Štít z plátů',
        },
        desc: {
          en: `Releases a shockwave which travels through the air, revealing all enemies and dealing ${
            ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE
          } Normal Damage to all enemies hit and reducing their Movement Speed and Attack Speed by ${
            ItemAbilityData.PLATE_SHIELD_SLOW_AOE
          } for ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} Seconds.`,
          ru: `Выпускает ударную волну, которая пролетает в воздухе, обнаруживает всех врагов и наносит ${
            ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE
          } физического урона всем врагам, которых она задела, снижая их Скорость передвижения и Скорость атаки на ${
            ItemAbilityData.PLATE_SHIELD_SLOW_AOE
          } на ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} сек.`,
          br: `Libera uma onda de choque que viaja pelo ar, revelando todos os inimigos e causando ${
            ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE
          } de dano normal a todos os inimigos atingidos, reduzindo a velocidade de movimento e a velocidade de ataque em ${
            ItemAbilityData.PLATE_SHIELD_SLOW_AOE
          } por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.`,
          fr: `Libère une onde de choc qui traverse l'air, révélant tous les ennemis et infligeant ${
            ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE
          } de dégâts normaux à tous les ennemis touchés et réduisant leur vitesse de déplacement et leur vitesse d'attaque de ${
            ItemAbilityData.PLATE_SHIELD_SLOW_AOE
          } pendant ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec.`,
          zh: `释放一道穿过空气的冲击波，揭示所有敌人并对所有被击中的敌人造成 ${
            ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE
          } 常规伤害，降低他们的移动速度和攻击速度 ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}，持续 ${(
            ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000
          ).toFixed(1)} 秒。`,
          cz: `Uvolní šokovou vlnu, která letí vzduchem, odhaluje všechny nepřátele a způsobuje ${
            ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE
          } normální poškození všem zasaženým nepřátelům a snižuje jejich Rychlost pohybu a Rychlost útoku o ${
            ItemAbilityData.PLATE_SHIELD_SLOW_AOE
          } po dobu ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sekund.`,
        },
      }
    case ItemList.Kirins_Defender:
      return {
        name: {
          en: "Kirin's Defender",
          ru: 'Защитник Кирина',
          br: 'Defensor de Kirin',
          fr: 'Bouclier de Kirin',
          zh: '麒麟的守護者',
          cz: 'Kirinův obránce',
        },
        desc: {
          en: `Upon getting hit by any Crowd Control effect, block that effect. Successfully blocking increases Magic Resistance by ${calculateMagicDefense(
            ItemAbilityData.KIRINS_DEFENDER_BONUS_MR
          )} for ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} Seconds.`,
          br: `Defensor de Kirin bloqueia o próximo efeito de CC uma vez a cada ${(
            ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000
          ).toFixed()} seg, se o bloqueio for bem sucedido, fornecer ${calculateMagicDefense(
            ItemAbilityData.KIRINS_DEFENDER_BONUS_MR
          )} de resistência mágica por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.`,
          ru: `Блокирует любой эффект контроля каждые ${(
            ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000
          ).toFixed()} сек. Успешный блок повышает ваше Сопротивление магии на  ${calculateMagicDefense(
            ItemAbilityData.KIRINS_DEFENDER_BONUS_MR
          )} на ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} сек.`,
          zh: `麒麟的守護者每次發動 ${(
            ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000
          ).toFixed()}秒內格擋下一個有冷卻時間效果的招式，成功格擋時提供 ${(
            ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000
          ).toFixed()}秒 ${calculateMagicDefense(ItemAbilityData.KIRINS_DEFENDER_BONUS_MR)}的魔法抗性。`,
          cz: `Po zásahu jakýmkoli efektem kontroly davu blokuje tento efekt. Úspěšné blokování zvyšuje odolnost proti magii o ${calculateMagicDefense(
            ItemAbilityData.KIRINS_DEFENDER_BONUS_MR
          )} po dobu ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sekund.`,
          fr: `Bloque le prochain effet de contrôle de foule une fois toutes les ${(
            ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000
          ).toFixed()} sec. Si le blocage réussit, augmente la résistance magique de ${calculateMagicDefense(
            ItemAbilityData.KIRINS_DEFENDER_BONUS_MR
          )} pour ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec.`,
        },
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
          cz: 'Démoní sable',
        },
        desc: {
          en: `Your Basic Attacks apply a stack demonic weakening, up to a maximum of ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} stacks. Each stack decreases Armor by ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} for 4 Seconds`,
          br: `Seus ataques normais diminuem a armadura inimiga em ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} por 4 segundos.`,
          ru: `Ваши атаки уменьшают вражескую Броню на ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} на 4 сек (складывается до ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} раз).`,
          cz: `Tvé základní útoky snižují nepřátelskou zbroj o ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} na 4 sekundy.`,
          zh: `你的一般攻擊降低 4秒敵方裝甲值 ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}`,
          fr: `Vos attaques de base appliquent une pile d'affaiblissement démoniaque, jusqu'à un maximum de ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} piles. Chaque pile réduit l'armure de ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} pendant 4 secondes.`,
        },
      }
    case ItemList.Demonic_Ring:
      return {
        name: {
          en: 'Demonic Ring',
          ru: 'Демоническое кольцо',
          br: 'Anel Demoníaco',
          fr: 'Anneau démonique',
          zh: '惡魔手環',
          cz: 'Démonický prsten',
        },
        desc: {
          en: `Your Basic Attacks decrease Armor by ${fixed(
            ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100,
            1
          )}% for 4 Seconds. \n
                     Gain up to ${
                       ItemAbilityData.DEMON_RING_MAX_STACKS
                     } stacks of demonic power for every minion kill (+1 stack), hero kill (+5 stacks), or assist (+2 stacks). Each stack increases your Attack Damage by ${
                       ItemAbilityData.DEMON_RING_STACK_DMG
                     } (Max: ${
                       ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS
                     } Attack Damage at ${
                       ItemAbilityData.DEMON_RING_MAX_STACKS
                     } stacks). All stacks are removed upon death.`,
          ru: `Ваши атаки уменьшают вражескую Броню на ${fixed(
            ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100,
            1
          )}% на 4 сек. \n
                     Вы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает Силу атаки на ${
                       ItemAbilityData.DEMON_RING_STACK_DMG
                     } (Максимальная прибавка: ${
                       ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS
                     } Силы атаки за 20 зарядов). Все заряды теряются после смерти.`,
          br: `Seus ataques reduzem a armadura inimiga por ${fixed(
            ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100,
            1
          )}% por 4 segundos. \n
                     Toda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${
                       ItemAbilityData.DEMON_RING_STACK_DMG
                     } de dano (máximo ${
                       ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS
                     }).\n Todas os acúmulos são perdidas após a morte.`,
          cz: `Tvé útoky snižují zbroj o ${Math.floor(
            ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100
          )}% na 4 vteřiny.\n
                     Pokud zabiješ nepřátelského miniona, hrdinu (+5) nebo assistujes (+2) dostaneš ${
                       ItemAbilityData.DEMON_RING_STACK_DMG
                     } zraneni permanentne, (max ${
                       ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS
                     }). Efekt sa zresetuje po smrti.`,
          zh: `你的一般攻擊降低 4秒敵方裝甲值 ${fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)}%\n
                     每當你殺死小兵 (疊加 1)、敵方英雄 (疊加 5) 或是助攻 (疊加 2)，你獲得 ${
                       ItemAbilityData.DEMON_RING_STACK_DMG
                     }點攻擊傷害 (最大值 ${
                       ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS
                     })。所有疊加在死亡後歸零。`,
          fr: `Vos attaques de base réduisent l'armure de l'ennemi de ${fixed(
            ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100,
            1
          )}% pendant 4 secondes. \n
                     Gagnez jusqu'à ${
                       ItemAbilityData.DEMON_RING_MAX_STACKS
                     } piles de puissance démoniaque pour chaque minion tué (+1 pile), héros tué (+5 piles) ou assistance (+2 piles). Chaque pile augmente vos dégâts d'attaque de ${
                       ItemAbilityData.DEMON_RING_STACK_DMG
                     } (Max: ${
                       ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS
                     } dégâts d'attaque à ${
                       ItemAbilityData.DEMON_RING_MAX_STACKS
                     } piles). Toutes les piles sont supprimées à la mort.`,
        },
      }
    case ItemList.Divine_Ring: {
      const bonusHealing = fixed(ItemAbilityData.DIVINE_RING_BONUS_HEALING_EFFECT * 100, 1)
      return {
        name: {
          en: 'Divine Ring',
          ru: 'Божественное кольцо',
          br: 'Anel Divino',
          cz: 'Božský prsten',
          zh: '神圣戒指',
          fr: 'Anneau divin',
        },
        desc: {
          en: `Dashes you forward for a short distance.'. \n \n [PASSIVE]: Increases all healing done by ${bonusHealing}%.`,
          ru: `Дает вам короткое перемещение вперед. \n \n [ПАССИВ]: Увеличивает все исцеление на ${bonusHealing}%.`,
          br: `Te impulsiona para frente por uma curta distância. \n \n [PASSIVO]: Aumenta todo o dano de cura em ${bonusHealing}%.`,
          cz: `Vás posune vpřed na krátkou vzdálenost. \n \n [PASIVNÍ]: Zvyšuje veškeré léčení o ${bonusHealing}%.`,
          zh: `向前方短距離衝刺。 \n \n [被動]: 增加所有治療效果 ${bonusHealing}%.`,
          fr: `Vous propulse vers l'avant sur une courte distance. \n \n [PASSIF]: Augmente tout les soins de ${bonusHealing}%.`,
        },
      }
    }
    case ItemList.Frost_Ring: {
      return {
        name: {
          en: 'Ring of the Frozen Empress',
          ru: 'Кольцо Ледяной Императрицы',
          br: 'Anel Congelado da Imperatriz',
          zh: '冰霜手環',
          cz: 'Prsten zamrzlé císařovny',
          fr: "Anneau de l'impératrice gelée",
        },
        desc: {
          en: `Emits a freezing wave, dealing ${
            ItemAbilityData.FROST_RING_DAMAGE
          } Magic Damage to all enemies hit. If the enemy is not affected by Frigid Curse, the wave applies Frigid Curse - (${getFrigidCurseDescription()}). If the enemy is affected by Frigid Curse, the wave freezes that enemy for ${(
            ItemAbilityData.FROST_RING_ROOT_DURATION / 1000
          ).toFixed(1)} Seconds, preventing all forms of movement.`,
          ru: `Излучает ледяную волну, наносящую ${
            ItemAbilityData.FROST_RING_DAMAGE
          } магического урона врагам и накладывая на них Морозное проклятие - (${getFrigidCurseDescription()}). Если на цель уже было наложено Морозное проклятие, волна заморозит врага на ${(
            ItemAbilityData.FROST_RING_ROOT_DURATION / 1000
          ).toFixed(1)}, обездвиживая его.`,
          br: `Emite uma onda congelante que causa ${
            ItemAbilityData.FROST_RING_DAMAGE
          } de dano mágico aos inimigos e aplica a Maldição do Frio - (${getFrigidCurseDescription()}). Se o alvo estiver afetado pela Maldição do Frio, ela o congelará por ${(
            ItemAbilityData.FROST_RING_ROOT_DURATION / 1000
          ).toFixed(1)} impossibilitando-o de se mover.`,
          fr: `[Actif] : Emet une onde de gel qui inflige ${
            ItemAbilityData.FROST_RING_DAMAGE
          } de dégâts magiques aux ennemis et applique la Malédiction du froid - (${getFrigidCurseDescription()}). Si la cible est affectée par la Malédiction du froid, elle sera gelée pour ${(
            ItemAbilityData.FROST_RING_ROOT_DURATION / 1000
          ).toFixed(1)} empêchant tout mouvement.`,
          zh: `[动作]:释放一道冰冻波动，对敌人造成${
            ItemAbilityData.FROST_RING_DAMAGE
          }魔法伤害，并施加冰冷诅咒-(${getFrigidCurseDescription()})。如果目标受到冰冷诅咒影响，将会冻结敌人${(
            ItemAbilityData.FROST_RING_ROOT_DURATION / 1000
          ).toFixed(1)}，阻止一切移动。`,
          cz: `[Aktivní]: Vyzařuje mrazivou vlnu, která způsobí ${
            ItemAbilityData.FROST_RING_DAMAGE
          } magického poškození nepřátelům a aplikuje Prokletí mrazu - (${getFrigidCurseDescription()}). Pokud je cíl ovlivněn Prokletím mrazu, zmrazí nepřítele na ${(
            ItemAbilityData.FROST_RING_ROOT_DURATION / 1000
          ).toFixed(1)} a zabrání mu všem pohybům.`,
        },
      }
    }

    case ItemList.Chronos_Ring:
      return {
        name: {
          en: 'Chronos Ring',
          br: 'Anel do Mago do tempo',
          ru: 'Кольцо Хроноса',
          zh: '時辰手環',
          cz: 'Chronosovo prsten',
          fr: 'Anneau de Chronos',
        },
        desc: {
          en: `Whenever you cast an ability, all of your cooldowns decrease by ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}.\nUpon receiving a kill or assist, reset your Ability cooldowns (The Ability cooldown reset does not affect Item cooldowns).`,
          br: `Sempre que você lançar uma habilidade, reduza todos os seus tempos de recarga por ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}.\nSe você receber uma morte ou assistência em um herói inimigo, os tempos de recarga de suas habilidades serão redefinidos. (Redefinir não funciona em itens)`,
          fr: `Chaque fois que vous lancez une capacité, réduisez tous vos temps de recharge de ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}.\nSi vous obtenez une mort ou une assistance sur un héros ennemi, vos temps de recharge de capacité seront réinitialisés. (La réinitialisation ne fonctionne pas sur les objets)`,
          zh: `每次施放技能时，所有冷却时间都会减少${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}。\n如果你在敌方英雄上获得击杀或助攻，你的技能冷却时间将会重置。（重置不适用于物品）`,
          cz: `Pokaždé, když použijete schopnost, sníží se všechny vaše časy načasování o ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}。\nPokud získáte zabíjení nebo asistenci na nepřátelském hrdinovi, vaše časy pro schopnosti se resetují. (Resetování nefunguje na předměty)`,
          ru: `Каждый раз при применении способности перезарядка ваших способностей уменьшается на ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )} \n При убийстве врага или получении содействия, перезарядка ваших способностей сбрасывается. (Перезарядка предметов не сбрасывается)`,
        },
      }
    case ItemList.Corrupted_Ring:
      return {
        name: {
          en: 'Corrupted Ring',
          ru: 'Искажённое кольцо',
          br: 'Anel Corrompido',
          zh: '腐化的手環',
          cz: 'Korupční prsten',
          fr: 'Anneau corrompu',
        },
        desc: {
          en: `Increases projectile range by ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}px and projectile speed by ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
          ru: `Увеличивает дальность полёта снарядов на ${
            ItemAbilityData.RESILIENT_BOW_BULLET_RANGE
          } пикселей и скорость их полёта на ${(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100).toFixed(1)}%.`,
          br: `Aumenta o alcance das balas em ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} e a velocidade em ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
          fr: `Augmente la portée des balles de ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} et la vitesse de ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
          zh: `增加${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}的子弹射程和${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%的子弹速度。`,
          cz: `Zvýší dolet střelby o ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} a rychlost o ${(
            ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100
          ).toFixed(1)}%.`,
        },
      }

    case ItemList.Berserker_Ring:
      return {
        name: {
          en: 'Berserker Ring',
          br: 'Anel do Lutador',
          ru: 'Кольцо берсерка',
          zh: '狂戰士手環',
          cz: 'Prsten berserka',
          fr: 'Anneau de berserker',
        },
        desc: {
          en: `When you take a damage, you will gain a stack of Berserker's Endurance. For every stack you gain ${ItemAbilityData.BERSERKER_RING_BONUS_HEALTH_REGEN} health regen for ${(ItemAbilityData.BERSERKER_RING_DURATION / 1000).toFixed(1)} Seconds.
          \n Stacks up to ${ItemAbilityData.BERSERKER_RING_MAX_STACKS} times. This effect can occur only once per 100ms.`,
          ru: `При получении урона вы получаете стак берсеркерской выносливости. За каждый стак вы получаете ${ItemAbilityData.BERSERKER_RING_BONUS_HEALTH_REGEN} регенерации здоровья на ${(ItemAbilityData.BERSERKER_RING_DURATION / 1000).toFixed(1)} сек.
          \n Максимальное количество стаков: ${ItemAbilityData.BERSERKER_RING_MAX_STACKS}. Этот эффект может происходить только один раз в 100 мс.`,
          br: `Quando você sofre dano, você ganha uma pilha de Resistência do Lutador. Para cada pilha, você ganha ${ItemAbilityData.BERSERKER_RING_BONUS_HEALTH_REGEN} de regeneração de vida por ${(ItemAbilityData.BERSERKER_RING_DURATION / 1000).toFixed(1)} seg.
          \n Acumula até ${ItemAbilityData.BERSERKER_RING_MAX_STACKS} vezes. Este efeito só pode ocorrer uma vez a cada 100ms.`,
          fr: `Lorsque vous subissez des dégâts, vous gagnez une pile d'Endurance de berserker. Pour chaque pile, vous gagnez ${ItemAbilityData.BERSERKER_RING_BONUS_HEALTH_REGEN} de régénération de santé pendant ${(ItemAbilityData.BERSERKER_RING_DURATION / 1000).toFixed(1)} sec.
          \n Empile jusqu'à ${ItemAbilityData.BERSERKER_RING_MAX_STACKS} fois. Cet effet ne peut se produire qu'une fois toutes les 100ms.`,
          zh: `當你受到傷害時，你將獲得一層狂戰士的耐力。每層你將在 ${(ItemAbilityData.BERSERKER_RING_DURATION / 1000).toFixed(1)} 秒內獲得 ${ItemAbilityData.BERSERKER_RING_BONUS_HEALTH_REGEN} 的生命回復。
          \n 最多堆疊 ${ItemAbilityData.BERSERKER_RING_MAX_STACKS} 次。此效果每 100ms 只能發生一次。`,
          cz: `Když utrpíte poškození, získáte stack Berserkerovy vytrvalosti. Za každý stack získáte ${ItemAbilityData.BERSERKER_RING_BONUS_HEALTH_REGEN} regenerace zdraví po dobu ${(ItemAbilityData.BERSERKER_RING_DURATION / 1000).toFixed(1)} sekund.
          \n Stacks až ${ItemAbilityData.BERSERKER_RING_MAX_STACKS} krát. Tento efekt může nastat pouze jednou za 100 ms.`,
        },
      }

    /** Armors */
    case ItemList.Frost_Armor:
      return {
        name: {
          en: 'Armor of the Frozen Emperor',
          ru: 'Броня Ледяного Императора',
          br: 'Armadura do Lorde congelado',
          zh: '冰霜鎧甲',
          cz: 'Brnění zamrzlého císaře',
          fr: "Armure de l'empereur gelé",
        },
        desc: {
          en: `Reduces attack speed and effect of all heals, regeneration, and lifesteal for nearby enemies by ${(
            ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION_AND_ATTACK_SPEED * 100
          ).toFixed()}%.`,
          ru: `Снижает скорость атаки и эффект всех исцелений, регенерации и перехвата жизни для ближайших врагов на ${(
            ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION_AND_ATTACK_SPEED * 100
          ).toFixed()}%.`,
          br: `Reduz a velocidade de ataque e o efeito de todos os curativos, regeneração e roubo de vida para inimigos próximos em ${(
            ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION_AND_ATTACK_SPEED * 100
          ).toFixed()}%.`,
          zh: `降低附近敵人${(
            ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION_AND_ATTACK_SPEED * 100
          ).toFixed()}%的攻擊速度和所有治療、再生和吸血的效果。`,
          cz: `Sníží rychlost útoku a efekt všech léčení, regenerace a lifestealu pro blízké nepřátele o ${(
            ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION_AND_ATTACK_SPEED * 100
          ).toFixed()}%.`,
          fr: `Réduit la vitesse d'attaque et l'effet de tous les soins, régénérations et vol de vie des ennemis proches de ${(
            ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION_AND_ATTACK_SPEED * 100
          ).toFixed()}%.`,
        },
      }

    case ItemList.Void_Armor:
      return {
        name: {
          en: 'Void Armor',
          ru: 'Броня пустоты',
          br: 'Armadura do Abismo',
          zh: '虛空鎧甲',
          cz: 'Prázdnotové brnění',
          fr: 'Armure du vide',
        },
        desc: {
          en: `Grants you invisibility for ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(
            1
          )} Seconds and increases Movement Speed by ${
            ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS
          }. Upon casting an Ability or using a Basic Attack while invisible, remove your invisibility and bonus Movement Speed, and increase Attack Damage by ${
            ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE
          } for a short duration.`,
          ru: `Вы получаете невидимость на ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} сек., а также ${
            ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS
          } Скорости передвижения и ${
            ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE
          } Силы атаки.\n (эффект пропадает при атаке или использовании способностей)`,
          br: `Torna você invisível por ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(
            1
          )} seg, além disso, aumente sua velocidade de movimento em ${
            ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS
          } e dano por ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} seg.\n (Acaba quando você usa algum ataque.)`,
          zh: `使你 ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)}秒隱蔽，額外增加你的移動速度值 ${
            ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS
          }與一般傷害值 ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} (效果在攻擊或發動技能後移除)`,
          cz: `Dává vám neviditelnost na ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(
            1
          )} sekund a zvyšuje rychlost pohybu o ${
            ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS
          }. Po použití schopnosti nebo základního útoku během neviditelnosti, odstraňte neviditelnost a bonus rychlosti pohybu a zvyšte útočný poškození o ${
            ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE
          } po krátkou dobu.`,
          fr: `Vous rend invisible pendant ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(
            1
          )} secondes et augmente votre vitesse de déplacement de ${
            ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS
          }. Après avoir lancé une capacité ou utilisé une attaque de base tout en étant invisible, supprimez votre invisibilité et votre vitesse de déplacement bonus, et augmentez les dégâts d'attaque de ${
            ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE
          } pendant une courte durée.`,
        },
      }

    case ItemList.Titans_Armor:
      return {
        name: {
          en: "Titan's Armor",
          ru: 'Броня титана',
          br: 'Armadura do Titan',
          zh: '泰坦的鎧甲',
          cz: 'Titánovo brnění',
          fr: 'Armure du titan',
        },
        desc: {
          en: `Makes you immune to all incoming damage for ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(
            1
          )} Seconds, increases Health Regeneration by ${
            ItemAbilityData.TITAN_ARMOR_REGENERATION
          }, and cleanses all negative effects. During the effect, you cannot move or use Abilities, Basic Attacks, and Items.`,
          ru: `Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к Регенерации здоровья в размере ${
            ItemAbilityData.TITAN_ARMOR_REGENERATION
          } на ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(
            1
          )} сек. Вы не можете выполнять никакие действия, пока активен данный эффект.`,
          br: `Aumente sua regeneração de vida em ${
            ItemAbilityData.TITAN_ARMOR_REGENERATION
          }, remove todos os efeitos negativos e o torna imune a todos os danos recebidos por ${(
            ItemAbilityData.TITAN_ARMOR_DURATION / 1000
          ).toFixed(1)} seg.\n (Você não pode fazer nenhuma ação durante este efeito.)`,
          zh: `增加你的回血速度 ${ItemAbilityData.TITAN_ARMOR_REGENERATION}點，移除所有負面效果並使你 ${(
            ItemAbilityData.TITAN_ARMOR_DURATION / 1000
          ).toFixed(1)}秒內無視所有襲來的攻擊。效果期間你無法採取任何動作`,
          cz: `Zajišťuje ti imunitu proti veškerému příchozímu poškození po dobu ${(
            ItemAbilityData.TITAN_ARMOR_DURATION / 1000
          ).toFixed(1)} sekund, zvyšuje regeneraci zdraví o ${
            ItemAbilityData.TITAN_ARMOR_REGENERATION
          } a čistí všechny negativní efekty. Během efektu nemůžeš používat schopnosti, základní útoky a předměty.`,
          fr: `Vous rend immunisé contre tous les dégâts entrants pendant ${(
            ItemAbilityData.TITAN_ARMOR_DURATION / 1000
          ).toFixed(1)} secondes, augmente la régénération de santé de ${
            ItemAbilityData.TITAN_ARMOR_REGENERATION
          } et nettoie tous les effets négatifs. Pendant l'effet, vous ne pouvez pas bouger ou utiliser des capacités, des attaques de base et des objets.`,
        },
      }
    case ItemList.ChestOfMalevolence:
      return {
        name: {
          en: 'Chest of Malevolence',
          br: 'Armadura da Malevolência',
          ru: 'Нагрудник злобы',
          zh: '惡毒胸甲',
          cz: 'Přilba zla',
          fr: 'Plastron de malveillance',
        },
        desc: {
          en: `Upon receiving Magic Damage, apply a stack of malevolent curse on the caster, up to a maximum of ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS
          } stacks. Each stack reduces Movement Speed by ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS
          } and Ability Power by ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%.`,
          ru: `Всякий раз, когда вы получаете магический урон, атакующий будет проклят, а его Скорость передвижения будет уменьшена на ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS
          } и Сила умений на ${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}%. (Складывается до ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS
          } раз)`,
          br: `Quando você sofrer dano mágico, um feitiço será aplicado no lançador, reduzindo a velocidade de movimento em ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS
          } e o poder de habilidade em ${fixed(
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100,
            1
          )}%. (O feitiço pode ser acumulado até ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} vezes)`,
          fr: `Lorsque vous subissez des dégâts magiques, un sort est lancé sur le lanceur, réduisant sa vitesse de déplacement de ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS
          } et sa puissance d'attaque de ${fixed(
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100,
            1
          )}%. (Le sort peut s'accumuler jusqu'à ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} fois)`,
          zh: `当你受到魔法伤害时，施法者将被诅咒，减少移动速度${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS
          }和能力值${fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)}% 。(最多可堆叠${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS
          }层)`,
          cz: `Když dostaneš magickou újmu, na kouzelníkovi se aplikuje prokletí, které snižuje rychlost pohybu o ${
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS
          } a sílu zaklínání o ${fixed(
            ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100,
            1
          )}%. (Prokletí se může nakumulovat až do ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} vrstev)`,
        },
      }

    /** Consumables */
    case ItemList.Healing_Potion:
      return {
        name: {
          en: 'Healing Potion',
          ru: 'Исцеляющее зелье',
          br: 'Poção das fadas',
          zh: '治癒藥水',
          cz: 'Léčivé lektvary',
          fr: 'Potion de soin',
        },
        desc: {
          en: `Increases Health Regeneration by ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} for ${(
            ItemAbilityData.HEALING_POTION_DURATION / 1000
          ).toFixed(1)} Seconds. \n If you receive damage, the effect is lost!`,
          ru: `Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} Регенерации здоровья на ${(
            ItemAbilityData.HEALING_POTION_DURATION / 1000
          ).toFixed(1)} сек. \n Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
          br: `Beba a poção das fadas para receber regeneração de ${
            ItemAbilityData.HEALING_POTION_HEAL_PER_SEC
          } de vida por ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(
            1
          )} seg.\n (Se você for atacado, o efeito será perdido!)`,
          zh: `賜予 ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)}秒 ${
            ItemAbilityData.HEALING_POTION_HEAL_PER_SEC
          }點回血速度 \n 如果你遭受攻擊，將會失去效用！`,
          cz: `Zvyšuje regeneraci zdraví o ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} po dobu ${(
            ItemAbilityData.HEALING_POTION_DURATION / 1000
          ).toFixed(1)} sekund. \n Pokud dostaneš poškození, efekt je ztracen!`,
          fr: `Augmente la régénération de santé de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} pendant ${(
            ItemAbilityData.HEALING_POTION_DURATION / 1000
          ).toFixed(1)} secondes. \n Si vous subissez des dégâts, l'effet est perdu!`,
        },
      }

    case ItemList.Observer_Ward:
      return {
        name: {
          en: 'Observer Ward',
          ru: 'Тотем-наблюдатель',
          br: 'Pedra do Observador da floresta',
          zh: '偵查守衛',
          cz: 'Pozorovací totem',
          fr: "Ward de l'observateur",
        },
        desc: {
          en: getObserverWardDescription(),
        },
      }
    case ItemList.Sentry_Ward:
      return {
        name: {
          en: 'Sentry Ward',
          br: 'Pedra do Observador corrompida',
          ru: 'Сторожевой тотем',
          zh: '哨兵守衛',
          cz: 'Sentry Ward',
          fr: 'Ward sentinelle',
        },
        desc: {
          en: `Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a radius. lasts for ${(
            ItemAbilityData.SENTRY_WARD_DURATION / 1000
          ).toFixed(1)} Seconds. If ward is visible to enemy team, they can destroy it!`,
          br: `Planta uma pedra Observadora corrompida invisível que concede Visão Verdadeira, a habilidade de ver unidades e sentinelas inimigas invisíveis, para qualquer visão aliada existente dentro de um raio. dura por ${(
            ItemAbilityData.SENTRY_WARD_DURATION / 1000
          ).toFixed(1)} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
          ru: `Вы устанавливаете невидимый сторожевой тотем, раскрывающий невидимых врагов и тотемы вокруг себя в радиусе ${
            ItemAbilityData.SENTRY_WARD_VISION
          } пикселей в течение ${(ItemAbilityData.SENTRY_WARD_DURATION / 1000).toFixed(
            1
          )} сек. Если тотем видим для врагов, они могут уничтожить его!`,
          zh: `植入一個哨兵守衛，一個隱蔽的觀察者賜予絕對視線，有能夠讓友軍在範圍內看見隱蔽敵方單位與守衛的能力。持續 ${(
            ItemAbilityData.SENTRY_WARD_DURATION / 1000
          ).toFixed(1)}秒。如果守衛能被敵隊看見，他們能摧毀它！`,
          cz: `Nainstaluješ Sentry Ward, který poskytuje True Sight, schopnost vidět neviditelné nepřátelské jednotky a wardy, pro jakoukoliv existující spojeneckou viditelnost v poloměru. trvá ${(
            ItemAbilityData.SENTRY_WARD_DURATION / 1000
          ).toFixed(1)} sekund. Pokud je totem viditelný pro nepřátelský tým, mohou ho zničit!`,
          fr: `Plante un Ward sentinelle, un observateur invisible qui accorde la vision réelle, la capacité de voir les unités ennemies invisibles et les wards, à toute vision alliée existante dans un rayon. dure ${(
            ItemAbilityData.SENTRY_WARD_DURATION / 1000
          ).toFixed(1)} secondes. Si le ward est visible pour l'équipe ennemie, ils peuvent le détruire!`,
        },
      }
    case ItemList.Potion_Of_Magic:
      return {
        name: {
          en: 'Potion of Magic',
          br: 'Poção de Magia corrompida',
          ru: 'Зелье волшебства',
          zh: '魔法藥水',
          cz: 'Lektvar magie',
          fr: 'Potion de magie',
        },
        desc: {
          en: `Grants a permanent stack of magical strength, up to a maximum of 5 stacks. Each stack increases Ability Power by ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
          br: `Da a quem beber ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} de Poder de habilidade permanentemente, acumula até 5 vezes!\n Sabor uva da floresta.`,
          ru: `Даёт вам ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} Силы умений навсегда. Эффект складывается до 5 раз!`,
          zh: `永久提供 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}點技能威力，疊加最多五次！`,
          cz: `Dává ti trvalý stack magické síly, až do maxima 5 stacků. Každý stack zvyšuje Sílu útoků o ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
          fr: `Accorde une pile permanente de force magique, jusqu'à un maximum de 5 piles. Chaque pile augmente la puissance d'attaque de ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
        },
      }
    case ItemList.Corrupted_Potion:
      return {
        name: {
          en: 'Corrupted Potion',
          br: 'Poção de força corrompida',
          ru: 'Искажённое зелье',
          zh: '腐化的藥水',
          cz: 'Zkreslený lektvar',
          fr: 'Potion corrompue',
        },
        desc: {
          en: `Grants a permanent stack of physical strength, up to a maximum of 5 stacks. Each stack increases Attack Damage by ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
          br: `Da a quem beber ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} de dano de ataque permanentemente, acumula até 5 vezes!\n Sabor cereja do campo.`,
          ru: `Даёт вам ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} Силы атаки навсегда. Эффект складывается до 5 раз!`,
          zh: `永久提供 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}點攻擊傷害，疊加最多五次！`,
          cz: `Dává ti trvalý stack fyzické síly, až do maxima 5 stacků. Každý stack zvyšuje Útočnou sílu o ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
          fr: `Accorde une pile permanente de force physique, jusqu'à un maximum de 5 piles. Chaque pile augmente les dégâts d'attaque de ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
        },
      }
    case ItemList.Kirins_Bow: {
      return {
        name: {
          en: "Kirin's Bow",
          zh: '麒麟之弓',
          cz: 'Kirinův luk',
          fr: 'Arc de Kirin',
          br: 'Arco de Kirin',
          ru: 'Лук Кирина',
        },
        desc: {
          en: `Your Basic Attacks apply a stack of magical poison. At ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } stacks, the magical poison explodes, dealing ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } Magic Damage to all nearby enemies and apply maximum stacks of poison. \n \n ${getPoisonBowDescription(
            ItemAbilityData.POISON_BOW_DURATION_2
          )}`,
          zh: `你的基本攻擊會施加一層魔法毒素。當達到 ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } 層時，魔法毒素會爆炸，對所有附近敵人造成 ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } 魔法傷害並施加最大層數的毒素。 \n \n ${getPoisonBowDescription(ItemAbilityData.POISON_BOW_DURATION_2)}`,
          cz: `Vaše základní útoky aplikují vrstvu magického jedu. Při ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } vrstvách magický jed exploduje, způsobí ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } magického poškození všem nepřátelům v okolí a aplikuje maximální vrstvy jedu. \n \n ${getPoisonBowDescription(
            ItemAbilityData.POISON_BOW_DURATION_2
          )}`,
          fr: `Vos attaques de base appliquent une pile de poison magique. À ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } piles, le poison magique explose, infligeant ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } dégâts magiques à tous les ennemis proches et applique le maximum de piles de poison. \n \n ${getPoisonBowDescription(
            ItemAbilityData.POISON_BOW_DURATION_2
          )}`,
          br: `Seus ataques básicas aplicam uma pilha de veneno mágico. Em ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } pilhas, o veneno mágico explode, causando ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } de dano mágico a todos os inimigos próximos e aplicando o máximo de pilhas de veneno. \n \n ${getPoisonBowDescription(
            ItemAbilityData.POISON_BOW_DURATION_2
          )}`,
          ru: `Ваши базовые атаки накладывают слой магического яда. При ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } слоях магический яд взрывается, нанося ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } магического урона всем ближайшим врагам и накладывая максимальное количество слоёв яда. \n \n ${getPoisonBowDescription(
            ItemAbilityData.POISON_BOW_DURATION_2
          )}`,
        },
      }
    }
    case ItemList.Garuns_Charm: {
      return {
        name: {
          en: "Garun's Charm",
          br: 'Encanto de Garun',
          fr: 'Charme de Garun',
          zh: '加伦的魅力',
          cz: 'Kouzlo Garunové',
          ru: 'Оберег Гаруна',
        },
        desc: {
          en:
            `Every ${toSec(
              ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN
            )}, gain a stack of Garun's protection, up to ${
              ItemAbilityData.GARUNS_CHARM_MAX_STACKS
            } stacks. Receiving Normal Damage removes a stack. Each stack increases your Armor by ${
              ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK
            }.\n\n[AURA]: Grants ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor to nearby allies \n\n` +
            getObserverWardDescription(),
          br:
            `A cada ${toSec(
              ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN
            )}, ganhe uma pilha de Proteção de Garun, acumula até ${
              ItemAbilityData.GARUNS_CHARM_MAX_STACKS
            } pilhas. Receber Dano normal remove uma pilha. Cada pilha aumenta sua Armadura em ${
              ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK
            }.\n\n[AURA]: Concede ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} de Armadura para aliados próximos \n\n` +
            getObserverWardDescription(),
          fr:
            `Toutes les ${toSec(
              ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN
            )}, gagnez une pile de protection de Garun, jusqu'à ${
              ItemAbilityData.GARUNS_CHARM_MAX_STACKS
            } piles. Recevoir des dégâts normaux enlève une pile. Chaque pile augmente votre Armure de ${
              ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK
            }.\n\n[AURA]: Accorde ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armure aux alliés proches \n\n` +
            getObserverWardDescription(),
          zh:
            `每 ${toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)}，獲得一層加伦的保護，最多不超過 ${
              ItemAbilityData.GARUNS_CHARM_MAX_STACKS
            } 層。受到普通傷害會移除一層。每層增加你的護甲 ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}。\n\n[AURA]: 給予附近盟友 ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} 護甲 \n\n` +
            getObserverWardDescription(),
          cz:
            `Každých ${toSec(
              ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN
            )} získáš stack Garunovy ochrany, až do maxima ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stacků. Přijetí Normálního poškození odebere stack. Každý stack zvyšuje tvou Obranu o ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.
            \n\n[AURA]: Přidá ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Obrany všem spojencům v okolí \n\n` +
            getObserverWardDescription(),
        },
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
          ru: 'Талисман волшебника',
        },
        desc: {
          en:
            `Reduces Magic Resistance and positive aura durations by ${fixed(
              ItemAbilityData.WIZARD_CHARM_AOE_MR_AND_BUFF_REDUCTION * 100,
              1
            )}% for all nearby enemies \n\n` + getObserverWardDescription(),
          br:
            `Reduz a resistência mágica e a duração das auras positivas de todos os inimigos próximos em ${fixed(
              ItemAbilityData.WIZARD_CHARM_AOE_MR_AND_BUFF_REDUCTION * 100,
              1
            )}% \n\n` + getObserverWardDescription(),
          fr:
            `Réduit la résistance magique et la durée des auras positives de tous les ennemis à proximité de ${fixed(
              ItemAbilityData.WIZARD_CHARM_AOE_MR_AND_BUFF_REDUCTION * 100,
              1
            )}% \n\n` + getObserverWardDescription(),
          zh: `降低附近所有敵人的魔法抗性和正面光環持續時間${fixed(
            ItemAbilityData.WIZARD_CHARM_AOE_MR_AND_BUFF_REDUCTION * 100,
            1
          )}%。`,
          cz:
            `Sníží magickou odolnost a délku pozitivních efektů všech nepřátel v okolí o ${fixed(
              ItemAbilityData.WIZARD_CHARM_AOE_MR_AND_BUFF_REDUCTION * 100,
              1
            )}% \n\n` + getObserverWardDescription(),
          ru:
            `Уменьшает Сопротивление магии и длительность положительных эффектов у ближайших врагов на ${fixed(
              ItemAbilityData.WIZARD_CHARM_AOE_MR_AND_BUFF_REDUCTION * 100,
              1
            )}% \n\n` + getObserverWardDescription(),
        },
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
          ru: 'Искажённый медальон',
        },
        desc: {
          en:
            `Every ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} provide a stack of corrupted blessing making your next attack a critical hit. This effect can stacks up to 2 times.\n\n` +
            getObserverWardDescription(),
          br:
            `A cada ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} fornece uma pilha de benção corrompida, fazendo seu próximo ataque um acerto crítico. Este efeito pode acumular até 2 vezes.\n\n` +
            getObserverWardDescription(),
          fr:
            `Toutes les ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} fournissent une pile de bénédiction corrompue, rendant votre prochaine attaque un coup critique. Cet effet peut s'accumuler jusqu'à 2 fois.\n\n` +
            getObserverWardDescription(),
          zh:
            `每 ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} 提供一層腐化祝福，使你的下一次攻擊爲暴擊。此效果最多可疊加 2 次。\n\n` +
            getObserverWardDescription(),
          cz:
            `Každých ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} poskytne stack zkaženého požehnání, který způsobí, že tvůj další útok bude kritický zásah. Tento efekt může být naskládán až 2krát.\n\n` +
            getObserverWardDescription(),
          ru:
            `Каждые ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} предоставляют стекло искажённого благословения, делая ваше следующее нападение критическим. Этот эффект может накапливаться до 2 раз.\n\n` +
            getObserverWardDescription(),
        },
      }
    }
    default:
      return {
        name: { en: '' },
        desc: { en: '' },
      }
  }
}

const getPoisonBowDescription = (duration: number) => {
  const text: { [key: string]: string } = {
    en: `Your Basic Attacks apply a stack of deadly poison, up to a maximum of 5 stacks. Each stack reduces Movement Speed by ${
      ItemAbilityData.POISON_BOW_SLOW
    } and deals ${
      ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME
    } Magic Damage per second for ${(duration / 1000).toFixed(1)} Seconds. `,
    ru: `Ваши атаки накладывают смертельный яд на вражеских героев, замедляя их на ${
      ItemAbilityData.POISON_BOW_SLOW
    } и нанося ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} урона в секунду в течение ${(duration / 1000).toFixed(
      1
    )} сек. (Этот эффект может складываться до 5 раз, и каждая последующая атака обновляет их длительность.)`,
    br: `Seus ataques aplicam veneno no personagem inimigo e retarda o alvo por ${
      ItemAbilityData.POISON_BOW_SLOW
    } e adiciona ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} de dano por seg, por ${(duration / 1000).toFixed(
      1
    )} seg.\n (Este efeito pode acumular 5 vezes, cada duração de atualização de ataque.)`,
    fr: `Tes attaques J empoisonne ton ennemie pour ${(duration / 1000).toFixed(
      1
    )} sec. Pendant cette période, il est ralenti de ${ItemAbilityData.POISON_BOW_SLOW} et reçoit ${
      ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME
    } dégâts supplémentaires. \n (Cet effet peut se cumuler jusqu'à 5 fois, le délai d'empoisennement est remis à zéro à chaque attaque)`,
    zh: `你的一般攻擊給予敵方英雄致命毒害，降低應目標物移動速度值 ${
      ItemAbilityData.POISON_BOW_SLOW
    }點並給予 ${(duration / 1000).toFixed(1)}秒 ${
      ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME
    }點傷害。(此效果能疊加五次，每次攻擊刷新時長)`,
    cz: `Vaše základní útoky aplikují nepřátelským hrdinům smrtící jed, zpomalující je o ${
      ItemAbilityData.POISON_BOW_SLOW
    } a způsobující ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} magického poškození za sekundu po dobu ${(
      duration / 1000
    ).toFixed(1)} sek. (Tento efekt může být naskládán až 5krát a každý další útok obnovuje jejich trvání.)`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getIronRodOrHarpoonDescription = (tier2 = false) => {
  const baseDamage = tier2 ? ItemAbilityData.MAGIC_HARPOON_BASE_DAMAGE : ItemAbilityData.IRON_ROD_BASE_DAMAGE
  const bonusDamage = tier2
    ? fixed(ItemAbilityData.MAGIC_HARPOON_AP_MOD * 100, 1)
    : fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)

  const text: { [key: string]: string } = {
    en: `When your Abilities hit an enemy hero, your next Basic Attack deals ${baseDamage} (+ ${bonusDamage}% Ability Power) bonus Magic Damage to enemy heroes.`,
    ru: `Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${baseDamage} (+ ${bonusDamage}% Силы умений) магического урона.`,
    br: `Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${baseDamage} + ${bonusDamage}% de dano.`,
    fr: `Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${baseDamage} + ${bonusDamage}% dégâts supplémentaires.`,
    zh: `當你的魔法攻擊擊中敵方英雄，你的下一個一般攻擊對敵方英雄造成額外 ${baseDamage} + ${bonusDamage}%  點一般傷害`,
    cz: `Když tvé schopnosti zasáhnou nepřátelského hrdinu, tvůj další základní útok způsobí ${baseDamage} (+ ${bonusDamage}% Síly útoků) bonusové magické poškození nepřátelským hrdinům.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

export const getFrigidCurseDescription = () => {
  const text: { [key: string]: string } = {
    en: `Reduces Movement Speed by ${
      ItemAbilityData.FRIGIT_CURSE_SLOW
    } and reduces all healing and regeneration effects by ${(
      ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100
    ).toFixed(1)}% for ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}.`,
    ru: `Уменьшает Скорость передвижения цели на ${
      ItemAbilityData.FRIGIT_CURSE_SLOW
    } и всё входящее исцеление, а также эффекты регенерации ${(
      ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100
    ).toFixed(1)}% в течение ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
    br: `Reduz a velocidade de movimento em ${
      ItemAbilityData.FRIGIT_CURSE_SLOW
    } e todos os efeitos de cura e regeneração em ${(ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100).toFixed(
      1
    )}% por ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
    fr: `Réduit la vitesse de déplacement de ${
      ItemAbilityData.FRIGIT_CURSE_SLOW
    } et tous les effets de soins et de régénération de ${(
      ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100
    ).toFixed(1)}% pour ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
    zh: `减少移动速度${ItemAbilityData.FRIGIT_CURSE_SLOW}和所有治疗和再生效果${(
      ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100
    ).toFixed(1)}%为${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
    cz: `Snížení rychlosti pohybu o ${ItemAbilityData.FRIGIT_CURSE_SLOW} a všech léčebných a regeneračních efektů o ${(
      ItemAbilityData.FRIGIT_CURSE_HEALING_REDUCTION * 100
    ).toFixed(1)}% během ${toSec(ItemAbilityData.FRIGIT_CURSE_DURATION)}`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

export const getLocaleItemDescription = (
  itemId: number
): {
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
    name: result.name[LANG.value] ? result.name[LANG.value] : result.name['en'],
  }
}

export const getObserverWardDescription = () => {
  const text: { [key: string]: string } = {
    en: `Plants an Observer Ward, an invisible watcher that gives your team obstructed vision in a ${
      ItemAbilityData.WARD_VISION
    }px radius for up to ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(
      1
    )} Seconds. If the ward is visible to the enemy team, they can destroy it!`,
    br: `Planta uma pedra Observadora invisível que dá visão obstruída em ${
      ItemAbilityData.WARD_VISION
    } px raio para sua equipe.\n Dura ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(
      1
    )} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
    ru: `Вы устанавливаете невидимый тотем, который раскрывает область и все невидимые вражеские цели вокруг себя в радиусе ${
      ItemAbilityData.WARD_VISION
    } пикселей в течение ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(
      1
    )} сек. Если тотем видим для врагов, они могут уничтожить его!`,
    zh: `植入一個偵查守衛，一個隱蔽的觀察者賜予己方團隊半徑 ${ItemAbilityData.WARD_VISION}像素範圍內的受限視線。持續 ${(
      ItemAbilityData.WARD_DURATION / 1000
    ).toFixed(1)}。如果守衛能被敵隊看見，他們能摧毀它！`,
    cz: `Nainstaluješ Pozorovací totem, který ti poskytne týmu zablokovanou viditelnost v poloměru ${
      ItemAbilityData.WARD_VISION
    }px po dobu až ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(
      1
    )} sekund. Pokud je totem viditelný pro nepřátelský tým, mohou ho zničit!`,
    fr: `Plante un Ward de l'observateur, un observateur invisible qui donne à votre équipe une vision obstruée dans un rayon de ${
      ItemAbilityData.WARD_VISION
    }px pendant ${(ItemAbilityData.WARD_DURATION / 1000).toFixed(
      1
    )} secondes. Si le ward est visible pour l'équipe ennemie, ils peuvent le détruire!`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

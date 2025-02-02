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
import { toSec, toSecRaw } from './misc'
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
          vi: 'Gươm Gỗ',
          id: 'Pedang Kayu',
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
          vi: 'Cung Gỗ',
          id: 'Busur Kayu',
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
          zh: '新手法杖',
          vi: 'Gậy Tân Thủ',
          id: 'Tongkat Pemula',
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
          zh: '木環',
          vi: 'Nhẫn Gỗ',
          id: 'Cincin Kayu',
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
          vi: 'Khiên',
          id: 'Buckler',
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
          vi: 'Áo',
          id: 'Kemeja',
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
          vi: 'Kẻ Sát Ánh Sáng',
          id: 'Pembunuh Cahaya',
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
          vi: 'Katana',
          id: 'Katana',
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
          zh: '腐化武士刀',
          vi: 'Katana Bị Nhiễm',
          id: 'Katana Tercemar',
        },
        desc: {
          en: `Increases your Critical Damage by ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          ru: `Увеличивает ваш урон от критических атак на ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          br: `Aumenta seu Dano Crítico em ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          cz: `Zvýší vaše kritické poškození o ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          fr: `Augmente vos dégâts critiques de ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          zh: `增加你的暴擊傷害 ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%。`,
          vi: `Tăng Sát Thương Chí Mạng của bạn lên ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
          id: `Meningkatkan Kerusakan Kritis Anda sebesar ${fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)}%.`,
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
          zh: '鋼鐵勇者之劍',
          vi: 'Gươm của Chiến Binh Sắt',
          id: 'Pedang Para Pejuang Besi',
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
          vi: 'Cung Dài Liều Lĩnh',
          id: 'Busur Panjang Ceroboh',
        },
      }
    case ItemList.Sentinel_longbow: {
      const speed = fixed(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100, 1)
      return {
        name: {
          en: 'Nimble Longbow',
          ru: 'Ловкий длинный лук',
          br: 'Besta da Resiliência encantada',
          fr: 'Arc long résistant',
          zh: '敏捷長弓',
          vi: 'Cung Dài Linh Hoạt',
          id: 'Busur Panjang Tangkas',
        },
        desc: getNimbleBowDescription(),
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
          vi: 'Khiên Bền Bỉ',
          id: 'Perisai Tahan Lama',
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
          zh: '鋼鐵勇者之圓盾',
          vi: 'Khiên của Chiến Binh Sắt',
          id: 'Buckler Para Pejuang Besi',
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
          zh: '強化護盾',
          vi: 'Khiên Phù Thủy',
          id: 'Perisai Sihir',
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
          vi: 'Gậy của Thiên Nhiên',
          id: 'Tongkat Alam',
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
          vi: 'Gậy Phù Thủy',
          id: 'Tongkat Sihir',
        },
      }
    case ItemList.Ring_Of_Power:
      return {
        name: {
          en: 'Ring of Power',
          ru: 'Кольцо силы',
          br: 'Anel do Poder',
          cz: 'Prsten Moci',
          fr: 'Anneau de puissance',
          zh: '力量戒指',
          vi: 'Nhẫn Sức Mạnh',
          id: 'Cincin Kekuatan',
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
          vi: 'Nhẫn Thời Gian',
          id: 'Cincin Waktu',
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
          zh: '見習生裝甲',
          vi: 'Áo Giáp của Thực Tập Sinh',
          id: 'Baju Besi',
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
          zh: '鋼鐵勇者之裝甲',
          vi: 'Áo Giáp của Chiến Binh Sắt',
          id: 'Baju Besi',
        },
      }
    case ItemList.Iron_Pendant:
      return {
        name: {
          en: 'Charming Pendant',
          br: 'Pingente encantador',
          fr: 'Pendentif charmant',
          zh: '迷人的吊墜',
          cz: 'Okouzlující přívěsek',
          ru: 'Очаровательная подвеска',
          vi: 'Dây Chuyền Quyến Rũ',
          id: 'Kalung Menawan',
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
          vi: 'Áo Giáp Lam',
          id: 'Baju Besi',
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
          zh: `增強所有治癒和回血效果 ${Math.floor(ItemAbilityData.PLATE_ARMOR_HP_AMP * 100)}%。`,
          vi: `Tăng cường tất cả hiệu ứng hồi máu và tái sinh lên ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%.`,
          id: `Meningkatkan semua efek penyembuhan dan regenerasi sebesar ${Math.floor(
            ItemAbilityData.PLATE_ARMOR_HP_AMP * 100
          )}%.`,
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
          vi: 'Giày Phù Thủy',
          id: 'Sepatu Sihir',
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
          vi: 'Giày Nhanh Nhẹn',
          id: 'Sepatu Kecepatan',
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
          vi: 'Giày',
          id: 'Sepatu',
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
          zh: '鋼鐵勇者之靴',
          vi: 'Giày của Chiến Binh Sắt',
          id: 'Sepatu Para Pejuang Besi',
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
          vi: 'Giày Tốc Độ',
          id: 'Sepatu Cepat',
        },
      }
    case ItemList.Shadow_Slayer: {
      const damagePerHit = fixed(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100, 1)
      const hpRegenModifier = fixed(ItemAbilityData.SHADOW_SLAYER_HP_REGEN_MODIFIER * 100, 1)
      const duration = toSec(ItemAbilityData.SHADOW_SLAYER_DURATION)

      return {
        name: {
          en: 'Shadow Slayer',
          ru: 'Губитель теней',
          br: 'Espada Consome luz',
          cz: 'Stínovrah',
          fr: "Tueur d'Ombre",
          zh: '闇影殺手',
          vi: 'Kẻ Sát Bóng',
          id: 'Pembunuh Bayangan',
        },
        desc: {
          en: `Each Basic Attack deals ${damagePerHit}% of the enemy's max health as bonus magical damage. \n \n
          Shadow Curse: Prevents enemy from receiving any form of healing or health regeneration and deals (${hpRegenModifier}% enemy Health Regeneration) Pure Damage per second for ${duration}.`,
          ru: `Каждая базовая атака наносит ${damagePerHit}% от максимального здоровья врага в виде дополнительного магического урона. \n \n
          Проклятие теней: Препятствует врагу получать любую форму лечения или регенерации здоровья и наносит (${hpRegenModifier}% регенерации здоровья врага) Чистого урона в секунду на ${duration}.`,
          br: `Cada ataque básico causa ${damagePerHit}% da vida máxima do inimigo como dano mágico bônus. \n \n
          Maldição das Sombras: Impede o inimigo de receber qualquer forma de cura ou regeneração de vida e causa (${hpRegenModifier}% Regeneração de Vida do inimigo) Dano Puro por segundo por ${duration}.`,
          cz: `Každý základní útok způsobí ${damagePerHit}% maximálního zdraví nepřítele jako bonusové magické poškození. \n \n
          Stínové prokletí: Zabraňuje nepříteli v jakékoliv formě léčení nebo regenerace zdraví a způsobuje (${hpRegenModifier}% regenerace zdraví nepřítele) Čisté poškození za sekundu po dobu ${duration}.`,
          fr: `Chaque attaque de base inflige ${damagePerHit}% de la santé maximale de l'ennemi en dégâts magiques bonus. \n \n
          Malédiction des ombres: Empêche l'ennemi de recevoir toute forme de soins ou de régénération de santé et inflige des dégâts purs de (${hpRegenModifier}% Régénération de santé de l'ennemi) par seconde pendant ${duration}.`,
          zh: `每次基本攻击造成敌人最大生命值的 ${damagePerHit}% 作为额外魔法伤害。 \n \n
          暗影诅咒：阻止敌人接受任何形式的治疗或生命恢复，并在 ${duration} 内每秒造成 (${hpRegenModifier}% 敌人生命恢复) 纯净伤害。`,
          id: `Setiap Serangan Dasar menyebabkan ${damagePerHit}% dari maksimal kesehatan musuh sebagai kerusakan magis bonus. \n \n
          Kutukan Bayangan: Mencegah musuh menerima bentuk penyembuhan atau regenerasi kesehatan apa pun dan menyebabkan (${hpRegenModifier}% Regenerasi Kesehatan musuh) Kerusakan Murni per detik selama ${duration}.`,
          vi: `Mỗi đòn đánh cơ bản gây thêm sát thương phép bằng ${damagePerHit}% máu tối đa của kẻ địch. \n \n
          Lời Nguyền Bóng Tối: Ngăn kẻ địch nhận bất kỳ hình thức hồi máu hoặc hồi phục sức khỏe nào và gây sát thương chuẩn bằng (${hpRegenModifier}% hồi phục sức khỏe của kẻ địch) mỗi giây trong ${duration}.`,
        },
      }
    }

    case ItemList.Divine_Sword: {
      const duration = toSec(ItemAbilityData.DIVINE_SWORD_DURATION)
      const bonusMR = ItemAbilityData.DIVINE_SWORD_MAGIC_RESISTANCE
      return {
        name: {
          en: 'Divine Sword',
          ru: 'Божественный меч',
          br: 'Espada Divina',
          cz: 'Božský meč',
          zh: '聖劍',
          fr: 'Épée divine',
          vi: 'Gươm Thần Thánh',
          id: 'Pedang Suci',
        },
        desc: {
          en: `Cleanses all negative effects, make you immune to all slows, stuns and other crowd-control effects and provide bonus ${bonusMR} magic resistance for ${duration}.`,
          ru: `Очищает от всех негативных эффектов, делает вас невосприимчивым к замедлениям, оглушениям и другим эффектам контроля над толпой и предоставляет дополнительные ${bonusMR} магического сопротивления на ${duration}.`,
          br: `Limpa todos os efeitos negativos, torna você imune a todos os atrasos, atordoamentos e outros efeitos de controle de multidão e fornece ${bonusMR} de resistência mágica por ${duration}.`,
          cz: `Vyčistí všechny negativní efekty, zaručí imunitu proti všem zpomalením, omráčením a jiným efektům kontroly davu a poskytne bonusové ${bonusMR} odolnosti proti magii po dobu ${duration}.`,
          fr: `Nettoie tous les effets négatifs, vous rend immunisé contre tous les ralentissements, étourdissements et autres effets de contrôle de foule et fournit un bonus de ${bonusMR} de résistance magique pendant ${duration}.`,
          zh: `清除所有負面效果，使您免疫所有減速、暈眩和其他控制效果，並在 ${duration} 內提供額外 ${bonusMR} 魔法抗性。`,
          vi: `Làm sạch tất cả các hiệu ứng tiêu cực, khiến bạn miễn dịch với tất cả các chậm trễ, choáng và các hiệu ứng kiểm soát đám đông khác và cung cấp ${bonusMR} kháng phép cho ${duration}.`,
          id: `Membersihkan semua efek negatif, membuat Anda kebal terhadap semua perlambatan, kejut, dan efek kontrol kerumunan lainnya dan memberikan bonus ${bonusMR} resistensi sihir selama ${duration}.`,
        },
      }
    }
    case ItemList.Divine_Katana:
      return {
        name: {
          en: 'Divine Katana',
          ru: 'Божественная катана',
          br: 'Katana Divina',
          fr: 'Katana divin',
          zh: '神聖武士刀',
          cz: 'Božská Katana',
          vi: 'Katana Thần Thánh',
          id: 'Katana Suci',
        },
        desc: {
          // Require update
          en: 'Throws a fragment of the katana, which reduces the Movement Speed of enemies and silences enemies inside its radius. Provides unobstructed vision and reveals all invisible units in its radius.',
          ru: 'Вы бросаете фрагмент катаны перед собой, который при приземлении замедляет и накладывает немоту на всех ближайших вражеских героев, а также раскрывает все невидимые цели вокруг себя и даёт беспрепятственный обзор, пока находится на земле.',
          br: 'Joga a katana divina perto de você, no momento do impacto fornece visão desobstruída, silencia e desacelera todos os heróis inimigos na área. Além disso, revelará todas as unidades invisíveis na área.',
          zh: '在你前方投擲武士刀碎片，減緩範圍內的敵方英雄移動速度並且沉默他們。提供寬廣視野且揭發所有隱蔽單位。',
          cz: 'Vhodíte před sebe fragment katany, který zpomaluje a umlčuje všechny nepřátelské hrdiny v okolí. Navíc poskytuje neomezené vidění a odhaluje všechny neviditelné jednotky v okolí.',
          fr: 'Lance un fragment de la katana devant vous, qui ralentit et réduit au silence tous les héros ennemis à proximité. De plus, il fournit une vision dégagée et révèle toutes les unités invisibles à proximité.',
          vi: 'Ném một mảnh của katana phía trước, làm chậm lại và làm im lặng tất cả các anh hùng địch trong khu vực. Ngoài ra, cung cấp tầm nhìn không bị cản trở và tiết lộ tất cả các đơn vị vô hình trong khu vực.',
          id: 'Melemparkan sebagian dari katana, yang mengurangi Kecepatan Gerakan musuh dan membisu musuh di dalam radiusnya. Memberikan visi yang tidak terhalangi dan mengungkapkan semua unit tak terlihat di dalam radiusnya.',
        },
      }
    case ItemList.Iron_Basher:
      return {
        name: {
          en: 'Spiked Mace',
          ru: 'Шипастая булава',
          br: 'Maçã Cravada',
          zh: '尖刺鐵錘',
          fr: 'Masse à pointes',
          cz: 'Hrotatá palice',
          vi: 'Gậy Móc',
          id: 'Gada Berduri',
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
          zh: `當敵人生命值低於 ${(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(
            1
          )}%時，你的普通攻擊會立即殺死敵人。`,
          cz: `Tvůj normální útok okamžitě zabije nepřítele, když je zdraví nepřítele pod ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}%`,
          vi: `Đòn tấn công cơ bản của bạn sẽ giết ngay kẻ địch khi máu của kẻ địch dưới ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}%`,
          id: `Serangan Dasar Anda langsung membunuh musuh dengan kurang dari ${(
            ItemAbilityData.SPIKED_MACE_THRESHOLD * 100
          ).toFixed(1)}% Sisa Kesehatan.`,
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
          vi: 'Nhẫn Dịch Bệnh',
          id: 'Cincin Wabah',
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
          zh: `增加所有你技能的負面效果持續時間 ${Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER)}%。`,
          cz: `Zvyšte dobu trvání o ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}% všech negativních efektů, které vaše schopnosti aplikují.`,
          vi: `Tăng thời gian của tất cả các hiệu ứng tiêu cực được áp dụng bởi Kỹ năng của bạn lên ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}%.`,
          id: `Meningkatkan durasi semua efek negatif yang diterapkan oleh Kemampuan Anda sebesar ${Math.floor(
            ItemAbilityData.PLAGUE_RING_MODIFIER * 100
          )}%.`,
        },
      }

    case ItemList.Cold_Sword:
      return {
        name: {
          en: 'Sword of the Frozen Emperor',
          ru: 'Меч Ледяного Императора',
          br: 'Espada do Imperador Congelado',
          fr: 'Épée gelée',
          zh: '寒冰帝王之劍',
          cz: 'Meč Zmrzlého Císaře',
          vi: 'Gươm của Hoàng Đế Lạnh',
          id: 'Pedang Kaisar Beku',
        },
        desc: {
          en: `Your Basic Attacks applies a Frigid Curse on the enemy target - ${getFrigidCurseDescription()}.`,
          ru: `Ваши базовые атаки накладывают Ледяное Проклятие на цель - ${getFrigidCurseDescription()}.`,
          br: `Seus ataques básicos aplicam uma Maldição Gélida no alvo inimigo - ${getFrigidCurseDescription()}.`,
          fr: `Vos attaques de base appliquent une Malédiction glaciale à la cible ennemie - ${getFrigidCurseDescription()}.`,
          zh: `你的基本攻击对敌人目标施加了寒冷诅咒 - ${getFrigidCurseDescription()}.`,
          cz: `Tvoje základní útoky aplikují na cílový nepřítel Zmrzlou kletbu - ${getFrigidCurseDescription()}.`,
          vi: `Đòn đánh cơ bản của bạn áp dụng Lời Nguyền Lạnh lẽo lên mục tiêu địch - ${getFrigidCurseDescription()}.`,
          id: `Serangan Dasar Anda menerapkan Kutukan Dingin pada target musuh - ${getFrigidCurseDescription()}.`,
        },
      }
    case ItemList.Corrupted_Light_Slayer:
      return {
        name: {
          en: 'Corrupted Light Slayer',
          ru: 'Искажённый губитель света',
          br: 'Corta Luz corrompido',
          fr: 'Tueur de Lumière Corrompu',
          zh: '腐化輕量殺手',
          cz: 'Zkreslený světelný vrah',
          vi: 'Kẻ Sát Ánh Sáng Bị Nhiễm Độc',
          id: 'Pembunuh Cahaya Tercemar',
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
          } 攻擊傷害给附近的盟友。`,
          cz: `Poskytuje ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(
            1
          )}% životodárného kradení a ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } bodů poškození útoku blízkým spojencům.`,
          vi: `Cung cấp ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Hút Máu và ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } Sát Thương Tấn Công cho đồng minh gần.`,
          id: `Memberikan ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)}% Lifesteal dan ${
            ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
          } Serangan kepada sekutu di dekatnya.`,
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
          vi: 'Cung Cuồng Chiến',
          id: 'Busur Pembunuh',
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
          zh: `每當你的基本攻擊擊中敵方，疊加一層狂暴，最多可疊加 ${ItemAbilityData.BERSERKER_BOW_MAXIMUM_STACKS} 層。每層疊加增加 ${(
            ItemAbilityData.BERSERKER_BOW_DURATION / 1000
          ).toFixed(1)}秒你的攻擊速度 ${Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)}%`,
          vi: `Mỗi khi Đòn tấn công cơ bản của bạn trúng kẻ địch, tăng Tốc độ tấn công của bạn lên ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% trong ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} giây.`,
          id: `Setiap Serangan Dasar yang mengenai musuh, mendapatkan tumpukan gila, hingga maksimal ${ItemAbilityData.BERSERKER_BOW_MAXIMUM_STACKS} tumpukan. Setiap tumpukan meningkatkan Kecepatan Serangan Anda sebesar ${Math.floor(
            ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100
          )}% selama ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} Detik.`,
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
          vi: 'Cung Phép Thuật',
          id: 'Busur Ajaib',
        },
        desc: {
          en:
            'Whenever your Abilities hit an enemy, your Movement Speed increases by 10 for 1.5 Seconds. Your abilites also applies a stack of poison \n \n' +
            getPoisonBowDescription(false),
          ru:
            'Когда ваши способности попадают по врагу, ваша Скорость передвижения увеличивается на 10 на 1.5 сек. Ваши способности также накладывают стак яда \n \n' +
            getPoisonBowDescription(false),
          br:
            'Sempre que suas habilidades atingem um inimigo, sua velocidade de movimento aumenta em 10 por 1,5 segundos. Suas habilidades também aplicam uma pilha de veneno \n \n' +
            getPoisonBowDescription(false),
          fr:
            'Chaque fois que vos capacités touchent un ennemi, votre vitesse de déplacement augmente de 10 pendant 1,5 seconde. Vos capacités appliquent également une pile de poison \n \n' +
            getPoisonBowDescription(false),
          zh:
            '每當你的技能擊中敵人時，你的移動速度將在1.5秒內增加10，你的技能也會施加一層毒。 \n \n' +
            getPoisonBowDescription(false),
          cz:
            'Když vaše schopnosti zasáhnou nepřítele, vaše rychlost pohybu se po dobu 1,5 sekundy zvýší o 10. Vaše schopnosti také aplikují stack jedu \n \n' +
            getPoisonBowDescription(false),
          vi:
            'Mỗi khi Kỹ năng của bạn trúng kẻ địch, Tốc độ Di chuyển của bạn tăng 10 trong 1,5 giây. Kỹ năng của bạn cũng áp dụng một tấm độc \n \n' +
            getPoisonBowDescription(false),
          id:
            'Setiap kemampuan Anda mengenai musuh, Kecepatan Gerakan Anda meningkat sebesar 10 selama 1,5 Detik. Kemampuan Anda juga menerapkan tumpukan racun \n \n' +
            getPoisonBowDescription(false),
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
          vi: 'Cung Độc',
          id: 'Busur Racun',
        },
        desc: {
          en: getPoisonBowDescription(false),
        },
      }

    case ItemList.Corrupted_Longbow:
      return {
        name: {
          en: 'Corrupted Longbow',
          ru: 'Искажённый длинный лук',
          br: 'Arco Corrompido',
          fr: 'Arc long corrompu',
          zh: '腐化長弓',
          cz: 'Zkreslený dlouhý luk',
          vi: 'Cung Dài Bị Nhiễm Độc',
          id: 'Busur Panjang Tercemar',
        },
        desc: {
          en:
            `Corrupts your blood and makes you swifter, increasing your Attack Speed by ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% and increasing your Movement Speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} for ${(
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            ).toFixed(1)} Seconds.\n` +
            `This effect prevents you from casting abilities.\n \n` +
            getPoisonBowDescription(true),
          ru:
            `Искажает вашу кровь и делает вас быстрее, увеличивая Скорость атаки на ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% и увеличивая Скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } сек.\n` +
            `Этот эффект мешает вам использовать способности.\n \n` +
            getPoisonBowDescription(true),
          br:
            `Corrompe seu sangue e o torna mais rápido, aumentando sua Velocidade de Ataque em ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% e aumentando sua Velocidade de Movimento em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} por ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } segundos.\n` +
            `Este efeito impede que você use habilidades.\n \n` +
            getPoisonBowDescription(true),
          fr:
            `Corrompt votre sang et vous rend plus rapide, augmentant votre vitesse d'attaque de ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% et augmentant votre vitesse de déplacement de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} pour ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } secondes.\n` +
            `Cet effet vous empêche d'utiliser des capacités.\n \n` +
            getPoisonBowDescription(true),
          zh:
            `腐化你的血液使你更快，增加你的攻擊速度 ${(
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            ).toFixed(1)}% 並增加你 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}移動速度值 ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } 秒。\n` +
            `這個效果會阻止你施放技能。\n \n` +
            getPoisonBowDescription(true),
          cz:
            `Zkresluje vaši krev a zrychluje vás, zvyšuje vaši rychlost útoku o ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% a zvyšuje vaši rychlost pohybu o ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} po dobu ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } sekund.\n` +
            `Tento efekt vám brání v používání schopností.\n \n` +
            getPoisonBowDescription(true),
          vi:
            `Làm hỏng máu của bạn và khiến bạn nhanh hơn, tăng Tốc độ Tấn Công của bạn lên ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% và tăng Tốc độ Di chuyển của bạn lên ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} trong ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } Giây.\n` +
            `Hiệu ứng này ngăn bạn sử dụng kỹ năng.\n \n` +
            getPoisonBowDescription(true),
          id:
            `Membusukkan darah Anda dan membuat Anda lebih cepat, meningkatkan Kecepatan Serangan Anda sebesar ${
              ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100
            }% dan meningkatkan Kecepatan Gerakan Anda sebesar ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} untuk ${
              ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000
            } Detik.\n` +
            `Efek ini mencegah Anda menggunakan kemampuan.\n \n` +
            getPoisonBowDescription(true),
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
          vi: 'Cung Dài của Thợ Săn',
          id: 'Busur Panjang Pemburu',
        },
        desc: {
          en: `Attacking an enemy hero grants you a Hunter's Focus and increases movement speed by ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} and makes you immune to slow effects for a short duration`,
          ru: `Атака вражеского героя дарует вам Охотничий фокус и увеличивает скорость передвижения на ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} и делает вас невосприимчивым к замедляющим эффектам на короткое время`,
          br: `Atacar um herói inimigo concede a você um Foco de Caçador e aumenta a velocidade de movimento em ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} e torna você imune a efeitos de lentidão por um curto período`,
          fr: `Attaquer un héros ennemi vous accorde un Focus de chasseur et augmente la vitesse de déplacement de ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} et vous rend immunisé contre les effets de ralentissement pendant une courte durée`,
          zh: `攻擊敵方英雄會给予你獵人的專注，增加移動速度 ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} 並使你短時間內免疫减速效果。`,
          cz: `Útok na nepřátelského hrdinu vám poskytne Lovecký záměr a zvýší rychlost pohybu o ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} a na krátkou dobu vás zbaví zpomalení`,
          vi: `Tấn công một anh hùng địch mang lại cho bạn một Trọng tâm Thợ Săn và tăng tốc độ di chuyển lên ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} và khiến bạn miễn dịch với hiệu ứng làm chậm trong một khoảng thời gian ngắn`,
          id: `Menyerang pahlawan musuh memberi Anda Fokus Pemburu dan meningkatkan kecepatan gerakan sebesar ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} dan membuat Anda kebal terhadap efek pelambatan untuk jangka waktu yang singkat`,
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
          vi: 'Gậy Cháy',
          id: 'Tongkat Terbakar',
        },
        desc: {
          en: `Your abilites ignite all the enemy units, dealing ${fixed(
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
          zh: `你的技能點燃所有敵方單位，給予 ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(
            1
          )}秒每秒最大血量 ${fixed(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100, 1)}%的魔法傷害`,
          cz: `Vaše schopnosti zapalují nepřátele, způsobují ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% jejich maximálního života jako magické poškození po dobu ${(
            ItemAbilityData.BURNING_ROD_DURATION / 1000
          ).toFixed(1)} sekund.`,
          vi: `Kỹ năng của bạn làm cháy kẻ địch, gây ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% sức khỏe tối đa của họ dưới dạng Sát Thương Phép trong ${(
            ItemAbilityData.BURNING_ROD_DURATION / 1000
          ).toFixed(1)} Giây.`,
          id: `Kemampuan Anda membuat pahlawan musuh terbakar, memberikan ${fixed(
            ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100,
            1
          )}% dari Max Health mereka sebagai Kerusakan Sihir selama ${(
            ItemAbilityData.BURNING_ROD_DURATION / 1000
          ).toFixed(1)} Detik.`,
        },
      }
    case ItemList.Vampiric_Rod: {
      const leechValue = ItemAbilityData.VAMPIRIC_ROD_LEECH_BASE
      const leechMod = fixed(ItemAbilityData.VAMPIRIC_ROD_MODIFIER * 100, 1)

      return {
        name: {
          en: 'Vampiric Rod',
          ru: 'Вампирический жезл',
          br: 'Cajado Vampírico',
          fr: 'Baguette vampirique',
          zh: '吸血鬼法棒',
          cz: 'Vampýří hůl',
          vi: 'Gậy Hút Máu',
          id: 'Tongkat Vampir',
        },
        desc: {
          en: `On a spell hit, the Vampiric Rod deals extra ${leechValue} (+ ${leechMod}% of ability power) damage and heals the wielder for twice the amount.`,
          ru: `При попадании заклинанием вампирический жезл наносит дополнительный урон ${leechValue} (+ ${leechMod}% от силы способностей) и восстанавливает владельцу вдвое большее количество здоровья.`,
          br: `Ao acertar uma habilidade, o Cajado Vampírico causa dano extra de ${leechValue} (+ ${leechMod}% do poder de habilidade) e cura o portador pelo dobro do valor.`,
          fr: `Lorsqu'un sort touche, la Baguette vampirique inflige ${leechValue} (+ ${leechMod}% de la puissance des sorts) de dégâts supplémentaires et soigne le porteur pour le double du montant.`,
          zh: `法术命中时，吸血鬼法棒造成额外 ${leechValue} (+ ${leechMod}% 法术强度) 伤害，并为持有者恢复两倍的生命值。`,
          cz: `Při zásahu kouzlem způsobí Vampýří hůl extra poškození ${leechValue} (+ ${leechMod}% síly schopností) a vyléčí nositele na dvojnásobek této hodnoty.`,
          vi: `Khi đánh trúng bằng phép, Gậy Hút Máu gây thêm ${leechValue} (+ ${leechMod}% sức mạnh kỹ năng) sát thương và hồi máu cho người dùng gấp đôi số đó.`,
          id: `Saat mantra mengenai musuh, Tongkat Vampir memberikan tambahan ${leechValue} (+ ${leechMod}% dari kekuatan kemampuan) kerusakan dan menyembuhkan pengguna dua kali lipat dari jumlah tersebut.`,
        },
      }
    }
    case ItemList.Kirin_Staff:
      return {
        name: {
          en: "Kirin's Staff",
          ru: 'Посох Кирина',
          br: 'Cajado de Kirin',
          fr: 'Bâton de Kirin',
          zh: '麒麟的法棍',
          cz: 'Kirinův hůl',
          vi: 'Gậy Kirin',
          id: 'Tongkat Kirin',
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
          zh: `你的技能降低4秒鐘敵方魔法抗性 ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}%。`,
          cz: `Vaše schopnosti snižují magickou odolnost cíle o ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% po dobu 4 sekund.`,
          fr: `Vos compétences réduisent la résistance magique de la cible de ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% pendant 4 sec.`,
          vi: `Kỹ năng của bạn giảm Kháng phép của mục tiêu đi ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% trong 4 giây.`,
          id: `Kemampuan Anda mengurangi Ketahanan Sihir musuh sebesar ${fixed(
            ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100,
            1
          )}% selama 4 Detik.`,
        },
      }
    case ItemList.Corrupted_Staff:
      return {
        name: {
          en: 'Corrupted Staff',
          br: 'Cajado corrompido',
          ru: 'Искажённый посох',
          zh: '腐化法棍',
          cz: 'Zkreslený hůl',
          fr: 'Bâton corrompu',
          vi: 'Gậy Bị Nhiễm Độc',
          id: 'Tongkat Tercemar',
        },
        desc: {
          en: `Increases your Ability Power by ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
          br: `Fornece o adicional de ${fixed(
            ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100,
            1
          )}% de poder de habilidade!`,
          ru: `Повышает вашу Силу умений на ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
          zh: `增加你的技能威力 ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%。`,
          cz: `Zvyšuje vaši sílu schopností o ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
          fr: `Augmente votre puissance des compétences de ${fixed(
            ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100,
            1
          )}%.`,
          vi: `Tăng ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}% Sức Mạnh Kỹ Năng của bạn.`,
          id: `Meningkatkan Ability Power Anda sebesar ${fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)}%.`,
        },
      }
    case ItemList.Frozen_Staff:
      return {
        name: {
          en: 'Staff of the Frozen Empress',
          ru: 'Посох Ледяной Императрицы',
          br: 'Cajado da Imperatriz Congelada',
          fr: 'Baguette gelée',
          zh: '寒冰帝王之法棍',
          cz: 'Hůl Zmrzlé císařovny',
          vi: 'Gậy của Nữ Hoàng Băng Giá',
          id: 'Tongkat Ratu Beku',
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
          zh: `你的技能會給敵方疊加魔法冰霜。當達到 ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } 層時，敵方將會受到冰凍诅咒 - ${getFrigidCurseDescription()}`,
          cz: `Vaše schopnosti působí na nepřátele vrstvami. Po dosažení ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } vrstev je nepřítel postižen Zimní proklěti - ${getFrigidCurseDescription()}`,
          vi: `Kỹ năng của bạn áp dụng một tấm lớp lạnh phép lên kẻ địch. Khi đạt ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } lớp, kẻ địch sẽ bị Ám Ảnh Lạnh - ${getFrigidCurseDescription()}`,
          id: `Kemampuan Anda menerapkan tumpukan es magis pada musuh. Pada ${
            ItemAbilityData.FROZEN_STAFF_STACKS
          } tumpukan, musuh terkena Kutukan Beku - ${getFrigidCurseDescription()}`,
        },
      }
    case ItemList.Iron_Rod:
      return {
        name: {
          en: 'Staff of Iron Warriors',
          ru: 'Жезл железных воинов',
          br: 'Cajado dos Guerreiros de ferro',
          fr: 'Baguette de fer',
          zh: '鋼鐵勇者之法棒',
          cz: 'Hůl železných válečníků',
          vi: 'Gậy của Chiến Binh Sắt',
          id: 'Tongkat Prajurit Besi',
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
          cz: 'Magický harpun',
          vi: 'Móc Phép Thuật',
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
          vi: 'Hoa Lan Ác Ý',
          id: 'Anggrek Kebencian',
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
            )}秒所有敵方並在沉默結束後，期間內造成的傷害 ${(
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
          vi: `Bắn một mũi tên tối tăm, câm lặng tất cả kẻ địch bị trúng trong ${(
            ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
          ).toFixed(1)} Giây. Ở cuối thời gian, gây ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(
            1
          )}% sát thương nhận được trong khi câm lặng như Sát Thương Phép.`,
          id:
            `Menembakkan anak panah gelap yang menusuk, membisu semua musuh yang terkena selama ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000
            ).toFixed(1)} Detik. Pada akhir durasinya, memberikan ${(
              ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100
            ).toFixed(1)}% dari kerusakan yang diterima saat dibisukan sebagai Kerusakan Sihir tambahan.` +
            '\n' +
            getIronRodOrHarpoonDescription(),
        },
      }
    case ItemList.Divine_Staff_T2: {
      const radius = ItemAbilityData.ACTIVE_EFFECT_RADIUS
      const duration = fixed(ItemAbilityData.DIVINE_STAFF_DURATION / 1000, 1)
      const heal = ItemAbilityData.DIVINE_STAFF_HEAL_T2
      const speed = ItemAbilityData.DIVINE_STAFF_BONUS_SPEED

      return {
        name: {
          en: 'Divine Staff',
          ru: 'Божественный посох',
          br: 'Cajado da Deusa da floresta',
          fr: 'Baguette divine',
          zh: '神聖法棍',
          cz: 'Božský hůl',
          vi: 'Gậy Thần Thánh',
          id: 'Tongkat Ilahi',
        },
        desc: {
          en: `Restores ${heal} Health for nearby allies and grants ${speed} Movement Speed for ${duration} Seconds to all nearby allies.\n This effect has an inner cooldown which prevents any other activations for 12 Seconds. This inner cooldown cannot be reduced by Ability Haste.`,
          ru: `Восстанавливает ${heal} здоровья для ближайших союзников и дарует ${speed} скорости передвижения на ${duration} секунд всем ближайшим союзникам.\n Этот эффект имеет внутреннее время восстановления, которое предотвращает любые другие активации в течение 12 секунд. Это внутреннее время восстановления не может быть снижено с помощью Скорости действия.`,
          br: `Restaura ${heal} de Vida para os aliados próximos e concede ${speed} de Velocidade de Movimento por ${duration} Segundos para todos os aliados próximos.\n Este efeito tem um tempo de recarga interno que impede qualquer outra ativação por 12 Segundos. Este tempo de recarga interno não pode ser reduzido por Aceleração de Habilidade.`,
          fr: `Restaure ${heal} Santé pour les alliés proches et accorde ${speed} Vitesse de déplacement pendant ${duration} Secondes à tous les alliés proches.\n Cet effet a un temps de recharge interne qui empêche toute autre activation pendant 12 Secondes. Ce temps de recharge interne ne peut pas être réduit par la Vitesse d'habileté.`,
          zh: `為附近的盟友恢復 ${heal}生命值並為所有附近的盟友提供 ${duration}秒的 ${speed}移動速度。\n 這個效果有一個內部冷卻時間，防止在12秒內進行任何其他激活。這個內部冷卻時間不能通過技能冷卻加速減少。`,
          cz: `Obnovuje ${heal} zdraví pro blízké spojence a poskytuje ${speed} rychlosti pohybu po dobu ${duration} sekund všem blízkým spojencům.\n Tento efekt má vnitřní dobu odpočinku, která brání jakémukoli jinému spuštění po dobu 12 sekund. Tato vnitřní doba odpočinku nemůže být snížena pomocí schopnosti spěchu.`,
          vi: `Hồi ${heal} Máu cho đồng minh gần và tăng ${speed} Tốc Độ Di Chuyển trong ${duration} Giây cho tất cả đồng minh gần.\n Hiệu ứng này có một thời gian hồi nội bộ ngăn chặn bất kỳ kích hoạt nào khác trong 12 Giây. Thời gian hồi nội bộ này không thể giảm bởi Tăng Tốc Độ Kỹ Năng.`,
          id: `Mengembalikan ${heal} Kesehatan untuk sekutu terdekat dan memberikan ${speed} Kecepatan Gerak selama ${duration} Detik untuk semua sekutu terdekat.\n Efek ini memiliki cooldown dalam yang mencegah aktivasi lain selama 12 Detik. Cooldown dalam ini tidak dapat dikurangi oleh Ability Haste.`,
        },
      }
    }
    case ItemList.Vampiric_Shield: {
      const threshold = fixed(ItemAbilityData.VAMPIRIC_SHIELD_THRESHOLD * 100, 1)
      return {
        name: {
          en: 'Vampiric Shield',
          ru: 'Вампирический щит',
          br: 'Escudo Vampírico',
          fr: 'Bouclier vampirique',
          zh: '吸血鬼護盾',
          cz: 'Vampýří štít',
          vi: 'Khiên Hút Máu',
          id: 'Perisai Vampir',
        },
        desc: {
          en: `Upon taking player-based damage and falling below ${threshold}% Health, cleanses all negative effects and increases Health Regeneration by ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } for ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. During the effect, the owner is immune to all slow effects.`,
          ru: `Получив урон от игроков и упав ниже ${threshold}% здоровья, очищает все негативные эффекты и увеличивает Регенерацию здоровья на ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } на ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. Во время действия эффекта владелец невосприимчив к всем замедляющим эффектам.`,
          br: `Ao receber dano de jogadores e cair abaixo de ${threshold}% de Vida, limpa todos os efeitos negativos e aumenta a Regeneração de Vida em ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } por ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. Durante o efeito, o dono é imune a todos os efeitos de lentidão.`,
          fr: `Après avoir subi des dégâts de joueur et être tombé en dessous de ${threshold}% de Santé, nettoie tous les effets négatifs et augmente la Régénération de Santé de ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } pour ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. Pendant l'effet, le propriétaire est immunisé contre tous les effets de ralentissement.`,
          zh: `在承受玩家傷害並掉到 ${threshold}%以下的生命值時，清除所有負面效果並增加 ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          }回血速度，持續 ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}。在效果期間內，擁有者免疫所有減速效果。`,
          cz: `Po obdržení hráčského poškození a poklesu pod ${threshold}% zdraví, očistí všechny negativní účinky a zvýší Regeneraci zdraví o ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } na ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. Během efektu je majitel imunní vůči všem zpomalujícím efektům.`,
          vi: `Khi nhận sát thương từ người chơi và rơi dưới ${threshold}% Máu, làm sạch tất cả các hiệu ứng tiêu cực và tăng Hồi Máu lên ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } trong ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. Trong khi hiệu ứng, chủ sở hữu miễn dịch với tất cả các hiệu ứng làm chậm.`,
          id: `Setelah menerima kerusakan dari pemain dan jatuh di bawah ${threshold}% Kesehatan, membersihkan semua efek negatif dan meningkatkan Regenerasi Kesehatan sebesar ${
            ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN
          } selama ${toSec(ItemAbilityData.VAMPIRIC_SHIELD_DURATION)}. Selama efek, pemilik kebal terhadap semua efek perlambatan.`,
        },
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
          cz: 'Božský štít',
          vi: 'Khiên Thần Thánh',
          id: 'Perisai Ilahi',
        },
        desc: {
          en: `Cleanses all negative effects from nearby allies and grants ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} Health Regen to nearby allies for ${toSec(ItemAbilityData.DIVINE_SHIELD_DURATION)}.`,
          ru: `Снимает все негативные эффекты с ближайших союзников и дополнительно даёт им ${
            ItemAbilityData.DIVINE_SHIELD_BONUS_HPR
          } Регенерации здоровья на ${toSec(ItemAbilityData.DIVINE_SHIELD_DURATION)}.`,
          br: `Aplique a purificação a todos os aliados próximos, removendo todos os efeitos negativos e concedendo ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regen de saúde por curto período de tempo.`,
          zh: `替所有附近盟友清除所有負面效果，並且在 ${toSec(ItemAbilityData.DIVINE_SHIELD_DURATION)}秒內給予 ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR}回血加速。`,
          cz: `Aplikujte očištění všem blízkým spojencům, které odstraní všechny negativní účinky a poskytne ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} obnovu zdraví po krátkou dobu.`,
          fr: `Appliquer le nettoyage à tous les alliés proches qui supprime tous les effets négatifs et accorde ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de régénération de santé pour une courte durée.`,
          vi: `Áp dụng làm sạch cho tất cả đồng minh gần, loại bỏ tất cả các hiệu ứng tiêu cực và trao ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} hồi máu trong thời gian ngắn.`,
          id: `Berikan pembersihan ke semua sekutu terdekat, menghapus semua efek negatif dan memberikan ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regen kesehatan untuk jangka waktu singkat.`,
        },
      }

    case ItemList.Shield_Of_Defiance:
      return {
        name: {
          en: 'Shield of Defiance',
          ru: 'Щит неповиновения',
          br: 'Escudo da Defesa',
          fr: 'Bouclier de Défiance',
          zh: '蔑視之盾',
          cz: 'Štít odporu',
        },
        desc: {
          en: `Grants ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic Resistance and ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Health Regen to nearby allies.`,
          br: `Concede aos aliados mais próximos ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de resistência mágica e ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de regeneração de vida.`,
          fr: `Accorde à vos alliés voisins ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de résistance magique et ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de régénération de vie.`,
          zh: `為附近的盟友提供 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR}魔法抗性和 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}回血速度。`,
          cz: `Poskytuje sousedním spojencům ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} odolnost proti kouzlu a ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} regeneraci zdraví.`,
          ru: `Увеличивает Сопротивление магии у всех ближайших союзников на ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} и Регенерацию здоровья на ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}.`,
          vi: `Trao cho đồng minh gần ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Kháng phép và ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Hồi Máu.`,
          id: `Memberikan ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Ketahanan Sihir dan ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Regen Kese hatan kepada sekutu terdekat.`,
        },
      }

    case ItemList.Spike_Shield: {
      const value = fixed(ItemAbilityData.SPIKE_SHIELD_REFLECT * 100, 1)
      return {
        name: {
          en: 'Spike Shield',
          ru: 'Шипастый щит',
          br: 'Escudo de Espinhos sombrio',
          fr: 'Bouclier piquant',
          zh: '尖刺護盾',
          cz: 'Hrotový štít',
          vi: 'Khiên Gai',
          id: 'Perisai Duri',
        },
        desc: {
          en: `For ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)}, carrier reflects ${value}% damage taken back to the attacker. Reflect damage is same damage type as received.`,
          ru: `На ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} сек. наносит врагу ${value}% урона, который был получен вами. Тип урона такой же, как и полученный.`,
          br: `Por ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} seg, reflete ${value}% do dano recebido de volta ao atacante. O dano refletido é do mesmo tipo que o recebido.`,
          fr: `Pendant ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} sec, le porteur réfléchit ${value}% des dégâts reçus à l'attaquant. Les dégâts réfléchis sont du même type que ceux reçus.`,
          zh: `在 ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} 秒内，反射 ${value}% 受到的傷害給攻擊者。反射傷害與所受到的傷害類型相同。`,
          cz: `Po dobu ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)} sekund odrazí ${value}% poškození zpět na útočníka. Odražené poškození je stejného typu jako přijaté.`,
          vi: `Trong ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)}, người mang phản ánh ${value}% sát thương nhận được trở lại kẻ tấn công. Sát thương phản ánh là cùng loại sát thương nhận được.`,
          id: `Selama ${toSec(ItemAbilityData.SPIKE_SHIELD_DURATION)}, pembawa memantulkan ${value}% kerusakan yang diterima kembali ke penyerang. Kerusakan pantulan adalah jenis kerusakan yang sama dengan yang diterima.`,
        },
      }
    }

    case ItemList.GarunsDefender: {
      return {
        name: {
          en: "Garun's Defender",
          ru: 'Защитник Гаруна',
          br: 'Defensor de Garun',
          fr: 'Bouclier de Garun',
          zh: '加侖的守護者',
          cz: 'Garunův obránce',
          vi: 'Bảo Vệ của Garun',
          id: 'Pertahanan Garun',
        },
        desc: {
          en: `On activate, unleash a shockwave after a short delay, dealing ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } Normal Damage and stunning nearby enemies for ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)}.`,
          ru: `При активации выпускает ударную волну после короткой задержки, нанося ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } физического урона и оглушая ближайших врагов на ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)}.`,
          br: `Ao ativar, libera uma onda de choque após um curto atraso, causando ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } de dano normal e atordoando inimigos próximos por ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)}.`,
          fr: `À l'activation, libère une onde de choc après un court délai, infligeant ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } dégâts normaux et étourdissant les ennemis proches pendant ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )}.`,
          zh: `在激活後，經過短暫延遲後釋放衝擊波，造成 ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } 一般傷害並使附近敵人暈眩 ${toSec(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION)}。`,
          cz: `Po aktivaci uvolní šokovou vlnu po krátké prodlevě, způsobující ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } normální poškození a omráčení blízkých nepřátel po dobu ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )}.`,
          vi: `Khi kích hoạt, phóng sóng gió sau một thời gian chờ ngắn, gâ
            y ${
              ItemAbilityData.GARUNS_DEFENDER_DAMAGE
            } Sát Thương Phép và làm cho kẻ địch gần đó bị Choáng trong ${toSec(
              ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
            )}.`,
          id: `Pada saat diaktifkan, lepaskan gelombang kejut setelah jeda singkat, memberikan ${
            ItemAbilityData.GARUNS_DEFENDER_DAMAGE
          } Kerusakan Normal dan membius musuh di sekitar selama ${toSec(
            ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION
          )}.`,
        },
      }
    }
    case ItemList.Plate_Shield: {
      const duration = toSecRaw(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION)
      return {
        name: {
          en: 'Plate Shield',
          ru: 'Латный щит',
          br: 'Escudo de Placas reforçadas',
          fr: 'Bouclier à plaque',
          zh: '金屬護盾',
          cz: 'Štít z plátů',
          vi: 'Khiên Tấm',
          id: 'Perisai Plat',
        },
        desc: {
          en: `Releases a shockwave which travels through the air, revealing all enemies and dealing ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Normal Damage to all enemies hit and reducing their Movement Speed and Attack Speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} for ${duration} Seconds.`,
          ru: `Выпускает ударную волну, которая пролетает в воздухе, обнаруживает всех врагов и наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} физического урона всем врагам, которых она задела, снижая их Скорость передвижения и Скорость атаки на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} на ${duration} сек.`,
          br: `Libera uma onda de choque que viaja pelo ar, revelando todos os inimigos e causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dano normal a todos os inimigos atingidos, reduzindo a velocidade de movimento e a velocidade de ataque em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} por ${duration} seg.`,
          fr: `Libère une onde de choc qui traverse l'air, révélant tous les ennemis et infligeant ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dégâts normaux à tous les ennemis touchés et réduisant leur vitesse de déplacement et leur vitesse d'attaque de ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} pendant ${duration} sec.`,
          zh: `釋放一道穿過空氣的衝擊波，揭發所有敵人並對所有被擊中的敵人造成 ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} 一般傷害，降低他們 ${duration}秒的移動速度和攻擊速度 ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}。`,
          cz: `Uvolní šokovou vlnu, která letí vzduchem, odhaluje všechny nepřátele a způsobuje ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} normální poškození všem zasaženým nepřátelům a snižuje jejich Rychlost pohybu a Rychlost útoku o ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} po dobu ${duration} sekund.`,
          vi: `Phóng một sóng gió đi qua không khí, tiết lộ tất cả kẻ địch và gây ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Sát Thương Phép cho tất cả kẻ địch bị trúng, giảm Tốc Độ Di Chuyển và Tốc Độ Tấn Công của họ đi ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} trong ${duration} Giây.`,
          id: `Melepaskan gelombang kejut yang berjalan melalui udara, mengungkapkan semua musuh dan memberikan ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Kerusakan Normal kepada semua musuh yang terkena dan mengurangi Kecepatan Gerak dan Kecepatan Serangan mereka sebesar ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} selama ${duration} Detik.`,
        },
      }
    }
    case ItemList.Kirins_Defender: {
      const duration = toSecRaw(ItemAbilityData.KIRINS_DEFENDER_DURATION)

      return {
        name: {
          en: "Kirin's Defender",
          ru: 'Защитник Кирина',
          br: 'Defensor de Kirin',
          fr: 'Bouclier de Kirin',
          zh: '麒麟的守護者',
          cz: 'Kirinův obránce',
          vi: 'Bảo Vệ của Kirin',
          id: 'Pertahanan Kirin',
        },
        desc: {
          en: `Upon getting hit by any Crowd Control effect, fully blocks the crowd control effect and makes the carrier immune to all CCs for ${duration} Seconds.`,
          ru: `При получении урона от любого эффекта контроля толпы блокирует его и делает владельца невосприимчивым ко всем эффектам контроля толпы на ${duration} секунд.`,
          br: `Ao ser atingido por qualquer efeito de Controle de Multidão, bloqueia o efeito de controle de multidão e torna o portador imune a todos os Efeitos de Controle de Multidão por ${duration} seg.`,
          fr: `Lorsqu'il est touché par un effet de contrôle de foule, bloque complètement l'effet de contrôle de foule et rend le porteur immunisé contre tous les effets de contrôle de foule pendant ${duration} sec.`,
          zh: `受到任何群控效果的打擊時，完全阻止群控效果並使攜帶者對所有群控免疫 ${duration} 秒。`,
          cz: `Po zasažení jakýmkoli efektem kontroly davu plně blokuje tento efekt a činí nositele imunní vůči všem efektům kontroly davu po dobu ${duration} sekund.`,
          vi: `Khi bị bất kỳ hiệu ứng Kiểm Soát Đám Đông nào, hoàn toàn chặn hiệu ứng kiểm soát đám đông và khiến người mang miễn dịch với tất cả các hiệu ứng Kiểm Soát Đám Đông trong ${duration} Giây.`,
          id: `Setelah terkena efek Crowd Control apa pun, sepenuhnya memblokir efek crowd control dan membuat pemilik kebal terhadap semua Crowd Control selama ${duration} Detik.`,
        },
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
          cz: 'Démoní sable',
          vi: 'Kiếm Quỷ',
          id: 'Sabre Iblis',
        },
        desc: {
          en: `Your Basic Attacks apply a stack demonic weakening, up to a maximum of ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} stacks. Each stack decreases Armor by ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} for 4 Seconds`,
          br: `Seus ataques normais diminuem a armadura inimiga em ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} por 4 segundos.`,
          ru: `Ваши атаки уменьшают вражескую Броню на ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} на 4 сек (складывается до ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} раз).`,
          cz: `Tvé základní útoky snižují nepřátelskou zbroj o ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} na 4 sekundy.`,
          zh: `你的基本攻擊疊加邪惡的弱化，最多可疊加 ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS}層。每層疊加降低4秒敵方裝甲值 ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}。`,
          fr: `Vos attaques de base appliquent une pile d'affaiblissement démoniaque, jusqu'à un maximum de ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} piles. Chaque pile réduit l'armure de ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} pendant 4 secondes.`,
          vi: `Đòn tấn công cơ bản của bạn áp dụng một lớp yếu hơn quỷ, lên tới tối đa ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} lớp. Mỗi lớp giảm Arm bởi ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} trong 4 Giây.`,
          id: `Serangan Dasar Anda menerapkan tumpukan pelemahan setan, hingga maksimum ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} tumpukan. Setiap tumpukan mengurangi Armor sebesar ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} selama 4 Detik.`,
        },
      }
    case ItemList.Demonic_Ring: {
      const armorReduction = fixed(ItemAbilityData.DEMON_RING_ARMOR_REDUCTION * 100, 1)
      const maximumAD = ItemAbilityData.DEMON_RING_STACK_DMG * ItemAbilityData.DEMON_RING_MAX_STACKS

      return {
        name: {
          en: 'Demonic Ring',
          ru: 'Демоническое кольцо',
          br: 'Anel Demoníaco',
          fr: 'Anneau démonique',
          zh: '惡魔手環',
          cz: 'Démonický prsten',
          vi: 'Nhẫn Quỷ',
          id: 'Cincin Iblis',
        },
        desc: {
          en: `Your Basic Attacks decrease Armor by ${armorReduction}% for 4 Seconds. 
            \nGain up to ${ItemAbilityData.DEMON_RING_MAX_STACKS} stacks of demonic power for every minion kill (+1 stack), hero kill (+5 stacks), or assist (+2 stacks). Each stack increases your Attack Damage by ${ItemAbilityData.DEMON_RING_STACK_DMG} (Max: ${maximumAD} Attack Damage at ${ItemAbilityData.DEMON_RING_MAX_STACKS} stacks). All stacks are removed upon death.`,
          ru: `Ваши атаки уменьшают вражескую Броню на ${armorReduction}% на 4 сек. 
            \nВы получаете +1 заряд за убийство миньона, +5 зарядов за убийство героя и +2 заряда за содействие в убийстве. Каждый заряд увеличивает Силу атаки на ${ItemAbilityData.DEMON_RING_STACK_DMG} (Максимальная прибавка: ${maximumAD} Силы атаки за 20 зарядов). Все заряды теряются после смерти.`,
          br: `Seus ataques reduzem a armadura inimiga por ${armorReduction}% por 4 segundos. 
            \nToda vez que você mata um minion (+1 acúmulos), personagem inimigo (+5 acúmulos) ou recebe assistência (+2 acúmulos), você ganha ${ItemAbilityData.DEMON_RING_STACK_DMG} de dano (máximo ${maximumAD}).\n Todas os acúmulos são perdidas após a morte.`,
          cz: `Tvé útoky snižují zbroj o ${armorReduction}% na 4 vteřiny.
            \nPokud zabiješ nepřátelského miniona, hrdinu (+5) nebo assistujes (+2) dostaneš ${ItemAbilityData.DEMON_RING_STACK_DMG} zraneni permanentne, (max ${maximumAD}). Efekt sa zresetuje po smrti.`,
          zh: `你的基本攻擊降低4秒敵方裝甲值 ${armorReduction}%
            \n每當你殺死小兵（疊加1）、敵方英雄（疊加5）或是助攻（疊加2），你獲得 ${ItemAbilityData.DEMON_RING_STACK_DMG}點攻擊傷害 (最大值 ${maximumAD})。所有疊加在死亡後歸零。`,
          fr: `Vos attaques de base réduisent l'armure de l'ennemi de ${armorReduction}% pendant 4 secondes. 
            \nGagnez jusqu'à ${ItemAbilityData.DEMON_RING_MAX_STACKS} piles de puissance démoniaque pour chaque minion tué (+1 pile), héros tué (+5 piles) ou assistance (+2 piles). Chaque pile augmente vos dégâts d'attaque de ${ItemAbilityData.DEMON_RING_STACK_DMG} (Max: ${maximumAD} dégâts d'attaque à ${ItemAbilityData.DEMON_RING_MAX_STACKS} piles). Toutes les piles sont supprimées à la mort.`,
          vi: `Đòn tấn công cơ bản của bạn giảm Arm của kẻ địch bởi ${armorReduction}% trong 4 Giây.
            \nNhận lên đến ${ItemAbilityData.DEMON_RING_MAX_STACKS} tấm sức mạnh quỷ cho mỗi lần giết lính (+1 tấm), giết anh hùng (+5 tấm) hoặc hỗ trợ (+2 tấm). Mỗi tấm tăng Sát Thương Tấn Công của bạn lên ${ItemAbilityData.DEMON_RING_STACK_DMG} (Tối đa: ${maximumAD} Sát Thương Tấn Công tại ${ItemAbilityData.DEMON_RING_MAX_STACKS} tấm). Tất cả tấm sức mạnh sẽ bị xóa khi chết.`,
          id: `Serangan Dasar Anda mengurangi Armor musuh sebesar ${armorReduction}% selama 4 Detik.
            \nDapatkan hingga ${ItemAbilityData.DEMON_RING_MAX_STACKS} tumpukan kekuatan setan untuk setiap pembunuhan minion (+1 tumpukan), hero (+5 tumpukan), atau bantuan (+2 tumpukan). Setiap tumpukan meningkatkan Serangan Anda sebesar ${ItemAbilityData.DEMON_RING_STACK_DMG} (Maks: ${maximumAD} Serangan pada ${ItemAbilityData.DEMON_RING_MAX_STACKS} tumpukan). Semua tumpukan dihapus setelah mati.`,
        },
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
          zh: '神聖戒指',
          fr: 'Anneau divin',
          vi: 'Nhẫn Thần Thánh',
          id: 'Cincin Ilahi',
        },
        desc: {
          en: `Dashes you forward for a short distance.'. \n \n [PASSIVE]: Increases all healing done by ${bonusHealing}%.`,
          ru: `Дает вам короткое перемещение вперед. \n \n [ПАССИВ]: Увеличивает все исцеление на ${bonusHealing}%.`,
          br: `Te impulsiona para frente por uma curta distância. \n \n [PASSIVO]: Aumenta todo o dano de cura em ${bonusHealing}%.`,
          cz: `Vás posune vpřed na krátkou vzdálenost. \n \n [PASIVNÍ]: Zvyšuje veškeré léčení o ${bonusHealing}%.`,
          zh: `向前方短距離衝刺。 \n \n [被動]：增加所有治癒效果 ${bonusHealing}%.`,
          fr: `Vous propulse vers l'avant sur une courte distance. \n \n [PASSIF]: Augmente tout les soins de ${bonusHealing}%.`,
          vi: `Đẩy bạn về phía trước một khoảng ngắn. \n \n [PASSIVE]: Tăng tất cả hồi máu lên ${bonusHealing}%.`,
          id: `Mendorong Anda maju untuk jarak pendek. \n \n [PASSIVE]: Meningkatkan semua penyembuhan sebesar ${bonusHealing}%.`,
        },
      }
    }
    case ItemList.Frost_Ring: {
      const frigidCurseDesc = getFrigidCurseDescription()
      const duration = fixed(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000, 1)
      return {
        name: {
          en: 'Ring of the Frozen Empress',
          ru: 'Кольцо Ледяной Императрицы',
          br: 'Anel Congelado da Imperatriz',
          zh: '寒冰帝王之手環',
          cz: 'Prsten zamrzlé císařovny',
          fr: "Anneau de l'impératrice gelée",
          vi: 'Nhẫn của Nữ Hoàng Băng Giá',
          id: 'Cincin Ratu Beku',
        },
        desc: {
          en: `Emits a freezing wave, dealing ${ItemAbilityData.FROST_RING_DAMAGE} Magic Damage to all enemies hit. If the enemy is not affected by Frigid Curse, the wave applies Frigid Curse - (${frigidCurseDesc}). If the enemy is affected by Frigid Curse, the wave freezes that enemy for ${duration} Seconds, preventing all forms of movement.`,
          ru: `Излучает ледяную волну, наносящую ${ItemAbilityData.FROST_RING_DAMAGE} магического урона врагам и накладывая на них Морозное проклятие - (${frigidCurseDesc}). Если на цель уже было наложено Морозное проклятие, волна заморозит врага на ${duration}, обездвиживая его.`,
          br: `Emite uma onda congelante que causa ${ItemAbilityData.FROST_RING_DAMAGE} de dano mágico aos inimigos e aplica a Maldição do Frio - (${frigidCurseDesc}). Se o alvo estiver afetado pela Maldição do Frio, ela o congelará por ${duration} impossibilitando-o de se mover.`,
          fr: `[Actif] : Emet une onde de gel qui inflige ${ItemAbilityData.FROST_RING_DAMAGE} de dégâts magiques aux ennemis et applique la Malédiction du froid - (${frigidCurseDesc}). Si la cible est affectée par la Malédiction du froid, elle sera gelée pour ${duration} empêchant tout mouvement.`,
          zh: `發出一道寒冰波動，對所有敵方造成 ${ItemAbilityData.FROST_RING_DAMAGE}魔法傷害。如果敵方沒有受到冰冷詛咒影響，則波動造成冰冷詛咒 - (${frigidCurseDesc})。如果敵方已受到冰冷詛咒影響，波動會結凍敵人 ${duration}秒，阻止所有形式的移動。`,
          cz: `[Aktivní]: Vyzařuje mrazivou vlnu, která způsobí ${ItemAbilityData.FROST_RING_DAMAGE} magického poškození nepřátelům a aplikuje Prokletí mrazu - (${frigidCurseDesc}). Pokud je cíl ovlivněn Prokletím mrazu, zmrazí nepřítele na ${duration} a zabrání mu všem pohybům.`,
          vi: `Phát ra một làn sóng lạnh, gây ${ItemAbilityData.FROST_RING_DAMAGE} Sát Thương Phép cho tất cả kẻ địch và áp dụng Lời Nguyền Lạnh - (${frigidCurseDesc}). Nếu kẻ địch bị ảnh hưởng bởi Lời Nguyền Lạnh, sóng sẽ đóng băng kẻ địch đó trong ${duration} Giây, ngăn mọi hình thức di chuyển.`,
          id: `Mengeluarkan gelombang pembekuan, memberikan ${ItemAbilityData.FROST_RING_DAMAGE} Kerusakan Sihir kepada semua musuh dan menerapkan Kutukan Beku - (${frigidCurseDesc}). Jika musuh terkena Kutukan Beku, gelombang membekukan musuh tersebut selama ${duration} Detik, mencegah semua bentuk pergerakan.`,
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
          vi: 'Nhẫn Thời Gian',
          id: 'Cincin Kronos',
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
          zh: `每次施放技能時，所有冷卻時間減少 ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}。\n如果你在敵方英雄上獲得擊殺或助攻，你的技能冷卻時間會重置。（重置不適用於物品的冷卻時間）`,
          cz: `Pokaždé, když použijete schopnost, sníží se všechny vaše časy načasování o ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}。\nPokud získáte zabíjení nebo asistenci na nepřátelském hrdinovi, vaše časy pro schopnosti se resetují. (Resetování nefunguje na předměty)`,
          ru: `Каждый раз при применении способности перезарядка ваших способностей уменьшается на ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )} \n При убийстве врага или получении содействия, перезарядка ваших способностей сбрасывается. (Перезарядка предметов не сбрасывается)`,
          vi: `Mỗi khi bạn sử dụng một kỹ năng, tất cả thời gian hồi của bạn giảm đi ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}.\nKhi giết hoặc hỗ trợ một kẻ địch, đặt lại thời gian hồi của Kỹ năng của bạn. (Thời gian hồi của Vật phẩm không bị ảnh hưởng)`,
          id: `Setiap kali Anda melemparkan kemampuan, semua waktu dingin Anda berkurang sebesar ${toSec(
            ItemAbilityData.CHRONOS_RING_CD_REDUCTION
          )}.\nSetelah menerima kill atau assist, reset cooldown Ability Anda (Reset cooldown tidak mempengaruhi cooldown Item).`,
        },
      }
    case ItemList.Corrupted_Ring: {
      return {
        name: {
          en: 'Corrupted Ring',
          ru: 'Искажённое кольцо',
          br: 'Anel Corrompido',
          zh: '腐化手環',
          cz: 'Korupční prsten',
          fr: 'Anneau corrompu',
          vi: 'Nhẫn Bị Nhiễm',
          id: 'Cincin Korup',
        },
        desc: getNimbleBowDescription(),
      }
    }
    case ItemList.Tenacity_Ring: {
      const reductionTime = fixed(ItemAbilityData.TENACITY_RING_CC_REDUCTION * 100, 1)
      return {
        name: {
          en: 'Tenacity Ring',
          ru: 'Кольцо стойкости',
          br: 'Anel da Tenacidade',
          zh: '韌性戒指',
          cz: 'Prsten odolnosti',
          fr: 'Anneau de ténacité',
          vi: 'Nhẫn Sức Mạnh',
          id: 'Cincin Kekuatan',
        },
        desc: {
          en: `Reduce duration of all negative effects by ${reductionTime}%.`,
          ru: `Уменьшает длительность всех негативных эффектов на ${reductionTime}%.`,
          br: `Reduz a duração de todos os efeitos negativos em ${reductionTime}%.`,
          zh: `減少所有負面效果的持續時間 ${reductionTime}%。`,
          cz: `Sníží dobu trvání všech negativních efektů o ${reductionTime}%.`,
          fr: `Réduit la durée de tous les effets négatifs de ${reductionTime}%.`,
          vi: `Giảm thời gian của tất cả các hiệu ứng tiêu cực đi ${reductionTime}%.`,
          id: `Mengurangi durasi semua efek negatif sebesar ${reductionTime}%.`,
        },
      }
    }
    /** Armors */
    case ItemList.Frost_Armor: {
      const reduction = fixed(ItemAbilityData.FROST_ARMOR_HEALING_REDUCTION * 100, 1)
      const attackSpeedReduction = fixed(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100, 1)
      return {
        name: {
          en: 'Armor of the Frozen Emperor',
          ru: 'Броня Ледяного Императора',
          br: 'Armadura do Lorde congelado',
          zh: '寒冰帝王之鎧甲',
          cz: 'Brnění zamrzlého císaře',
          fr: "Armure de l'empereur gelé",
          vi: 'Bộ Giáp của Hoàng Đế Băng Giá',
          id: 'Baju Zirah Kaisar Beku',
        },
        desc: {
          en: `[AURA] Reduces attack speed by ${attackSpeedReduction}% and effect of all heals, regeneration, and lifesteal for nearby enemies by ${reduction}%.`,
          ru: `[АУРА] Уменьшает скорость атаки на ${attackSpeedReduction}% и эффект всех исцелений, регенерации и высасывания жизни для ближайших врагов на ${reduction}%.`,
          br: `[AURA] Reduz a velocidade de ataque em ${attackSpeedReduction}% e o efeito de todas as curas, regenerações e roubo de vida para inimigos próximos em ${reduction}%.`,
          zh: `[光環] 減少附近敵人的攻擊速度 ${attackSpeedReduction}% 和所有治療、再生和生命偷取效果 ${reduction}%.`,
          cz: `[AURA] Sníží rychlost útoku o ${attackSpeedReduction}% a efekt všech léčení, regenerace a životního odsávání pro blízké nepřátele o ${reduction}%.`,
          fr: `[AURA] Réduit la vitesse d'attaque de ${attackSpeedReduction}% et l'effet de tous les soins, régénérations et vol de vie pour les ennemis proches de ${reduction}%.`,
          vi: `[AURA] Giảm tốc độ tấn công ${attackSpeedReduction}% và hiệu ứng của tất cả các hồi máu, tái sinh và hút máu cho kẻ địch gần đó ${reduction}%.`,
          id: `[AURA] Mengurangi kecepatan serangan sebesar ${attackSpeedReduction}% dan efek semua penyembuhan, regenerasi, dan lifesteal untuk musuh di sekitar sebesar ${reduction}%.`,
        },
      }
    }

    case ItemList.Void_Armor: {
      const duration = toSecRaw(ItemAbilityData.VOID_ARMOR_DURATION)

      return {
        name: {
          en: 'Void Armor',
          ru: 'Броня пустоты',
          br: 'Armadura do Abismo',
          zh: '虛空鎧甲',
          cz: 'Prázdnotové brnění',
          fr: 'Armure du vide',
          vi: 'Bộ Giáp Hư Vô',
          id: 'Baju Zirah Void',
        },
        desc: {
          en: `Grants you invisibility for ${duration} Seconds and increases Movement Speed by ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}. Upon casting an Ability or using a Basic Attack while invisible, remove your invisibility and bonus Movement Speed, and increase Attack Damage by ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} for a short duration.`,
          ru: `Вы получаете невидимость на ${duration} сек., а также ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Скорости передвижения и ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Силы атаки.\n (эффект пропадает при атаке или использовании способностей)`,
          br: `Torna você invisível por ${duration} seg, além disso, aumente sua velocidade de movimento em ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} e dano por ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} seg.\n (Acaba quando você usa algum ataque.)`,
          zh: `使你 ${duration}秒隱蔽並增加移動速度值 ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}。當隱蔽狀態施放一個技能或使用基本攻擊時，移除你的隱蔽與額外移動速度，並在短時間內增加攻擊傷害 ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE}。`,
          cz: `Dává vám neviditelnost na ${duration} sekund a zvyšuje rychlost pohybu o ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}. Po použití schopnosti nebo základního útoku během neviditelnosti, odstraňte neviditelnost a bonus rychlosti pohybu a zvyšte útočný poškození o ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} po krátkou dobu.`,
          fr: `Vous rend invisible pendant ${duration} secondes et augmente votre vitesse de déplacement de ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}. Après avoir lancé une capacité ou utilisé une attaque de base tout en étant invisible, supprimez votre invisibilité et votre vitesse de déplacement bonus, et augmentez les dégâts d'attaque de ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} pendant une courte durée.`,
          vi: `Cho bạn vô hình trong ${duration} Giây và tăng Tốc Độ Di Chuyển thêm ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}. Khi sử dụng kỹ năng hoặc tấn công cơ bản trong thời gian vô hình, gỡ bỏ vô hình và tốc độ di chuyển thêm, và tăng Sát Thương Tấn Công thêm ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} trong một thời gian ngắn.`,
          id: `Memberikan kamu kekebalan selama ${duration} Detik dan meningkatkan Kecepatan Gerak sebesar ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS}. Setelah menggunakan kemampuan atau menyerang dasar saat tak terlihat, hilangkan kekebalan dan kecepatan gerak bonus, dan tingkatkan Serangan sebesar ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} untuk waktu yang singkat.`,
        },
      }
    }

    case ItemList.Titans_Armor: {
      const duration = toSecRaw(ItemAbilityData.TITAN_ARMOR_DURATION)
      return {
        name: {
          en: "Titan's Armor",
          ru: 'Броня титана',
          br: 'Armadura do Titan',
          zh: '泰坦的鎧甲',
          cz: 'Titánovo brnění',
          fr: 'Armure du titan',
          vi: 'Bộ Giáp của Người Khổng Lồ',
          id: 'Baju Zirah Titan',
        },
        desc: {
          en: `Makes you immune to all incoming damage for ${duration} Seconds, increases Health Regeneration by ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, and cleanses all negative effects. During the effect, you cannot move or use Abilities, Basic Attacks, and Items.`,
          ru: `Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к Регенерации здоровья в размере ${ItemAbilityData.TITAN_ARMOR_REGENERATION} на ${duration} сек. Вы не можете выполнять никакие действия, пока активен данный эффект.`,
          br: `Aumente sua regeneração de vida em ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove todos os efeitos negativos e o torna imune a todos os danos recebidos por ${duration} seg.\n (Você não pode fazer nenhuma ação durante este efeito.)`,
          zh: `使你 ${duration}秒內無視所有襲來的攻擊，增加回血速度 ${ItemAbilityData.TITAN_ARMOR_REGENERATION}點並移除所有負面效果。發動效果期間你無法移動或使用技能、基本攻擊和道具。`,
          cz: `Zajišťuje ti imunitu proti veškerému příchozímu poškození po dobu ${duration} sekund, zvyšuje regeneraci zdraví o ${ItemAbilityData.TITAN_ARMOR_REGENERATION} a čistí všechny negativní efekty. Během efektu nemůžeš používat schopnosti, základní útoky a předměty.`,
          fr: `Vous rend immunisé contre tous les dégâts entrants pendant ${duration} secondes, augmente la régénération de santé de ${ItemAbilityData.TITAN_ARMOR_REGENERATION} et nettoie tous les effets négatifs. Pendant l'effet, vous ne pouvez pas bouger ou utiliser des capacités, des attaques de base et des objets.`,
          vi: `Cho bạn miễn nhiễm với tất cả sát thương trong ${duration} Giây, tăng Hồi Máu thêm ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, và làm sạch tất cả các hiệu ứng tiêu cực. Trong thời gian này, bạn không thể di chuyển hoặc sử dụng Kỹ Năng, Tấn Công Cơ Bản, và Vật Phẩm.`,
          id: `Membuat kamu kebal terhadap semua kerusakan selama ${duration} Detik, meningkatkan Regenerasi Kesehatan sebesar ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, dan membersihkan semua efek negatif. Selama efek, kamu tidak bisa bergerak atau menggunakan Kemampuan, Serangan Dasar, dan Item.`,
        },
      }
    }
    case ItemList.ChestOfMalevolence: {
      const apReduction = fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)

      return {
        name: {
          en: 'Chest of Malevolence',
          br: 'Armadura da Malevolência',
          ru: 'Нагрудник злобы',
          zh: '惡毒胸甲',
          cz: 'Přilba zla',
          fr: 'Plastron de malveillance',
          vi: 'Áo Giáp của Ác Ý',
          id: 'Baju Zirah Keburukan',
        },
        desc: {
          en: `Upon receiving Magic Damage, apply a stack of malevolent curse on the caster, up to a maximum of ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} stacks. Each stack reduces Movement Speed by ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} and Ability Power by ${apReduction}%.`,
          ru: `Всякий раз, когда вы получаете магический урон, атакующий будет проклят, а его Скорость передвижения будет уменьшена на ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} и Сила умений на ${apReduction}%. (Складывается до ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} раз)`,
          br: `Quando você sofrer dano mágico, um feitiço será aplicado no lançador, reduzindo a velocidade de movimento em ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} e o poder de habilidade em ${apReduction}%. (O feitiço pode ser acumulado até ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} vezes)`,
          fr: `Lorsque vous subissez des dégâts magiques, un sort est lancé sur le lanceur, réduisant sa vitesse de déplacement de ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} et sa puissance d'attaque de ${apReduction}%. (Le sort peut s'accumuler jusqu'à ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} fois)`,
          zh: `當受到魔法傷害時，對施放者施加惡毒詛咒，最多可疊加 ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}層。每層疊加降低移動速度 ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS}和技能威力 ${apReduction}%。`,
          cz: `Když dostaneš magickou újmu, na kouzelníkovi se aplikuje prokletí, které snižuje rychlost pohybu o ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} a sílu zaklínání o ${apReduction}%. (Prokletí se může nakumulovat až do ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} vrstev)`,
          vi: `Khi nhận Sát Thương Phép, áp dụng một tấm lớp ác ý lên người gây sát thương, tối đa ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} tấm. Mỗi tấm giảm Tốc Độ Di Chuyển đi ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} và Sức Mạnh Kỹ Năng đi ${apReduction}%.`,
          id: `Setiap menerima Kerusakan Sihir, terapkan tumpukan kutukan jahat pada penyerang, hingga maksimal ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} tumpukan. Setiap tumpukan mengurangi Kecepatan Gerak sebesar ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} dan Daya Kemampuan sebesar ${apReduction}%.`,
        },
      }
    }
    /** Consumables */
    case ItemList.Healing_Potion: {
      const duration = toSecRaw(ItemAbilityData.HEALING_POTION_DURATION)
      return {
        name: {
          en: 'Healing Potion',
          ru: 'Исцеляющее зелье',
          br: 'Poção das fadas',
          zh: '治癒藥水',
          cz: 'Léčivé lektvary',
          fr: 'Potion de soin',
          vi: 'Thuốc Hồi Phục',
          id: 'Potion Penyembuh',
        },
        desc: {
          en: `Increases Health Regeneration by ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} for ${duration} Seconds. \n If you receive damage, the effect is lost!`,
          ru: `Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} Регенерации здоровья на ${duration} сек. \n Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
          br: `Beba a poção das fadas para receber regeneração de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} de vida por ${duration} seg.\n (Se você for atacado, o efeito será perdido!)`,
          zh: `賜予 ${duration}秒 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}點回血速度 \n 如果你遭受攻擊，將會失去效用！`,
          cz: `Zvyšuje regeneraci zdraví o ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} po dobu ${duration} sekund. \n Pokud dostaneš poškození, efekt je ztracen!`,
          fr: `Augmente la régénération de santé de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} pendant ${duration} secondes. \n Si vous subissez des dégâts, l'effet est perdu!`,
          vi: `Tăng Hồi Máu thêm ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} trong ${duration} Giây. \n Nếu bạn nhận sát thương, hiệu ứng sẽ mất!`,
          id: `Meningkatkan Regenerasi Kesehatan sebesar ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} selama ${duration} Detik. \n Jika kamu menerima kerusakan, efeknya akan hilang!`,
        },
      }
    }

    case ItemList.VileFlask: {
      const duration = toSecRaw(ItemAbilityData.VILE_FLASK_DURATION)
      return {
        name: {
          en: 'Vile Flask',
          ru: 'Мерзкая склянка',
          br: 'Frasco de veneno',
          zh: '惡毒瓶',
          cz: 'Ohavná láhev',
          fr: 'Flasque vile',
          vi: 'Bình Độc Hại',
          id: 'Botol Beracun',
        },
        desc: {
          en: `Throws a Vile Flask that breaks after it hits the ground, affecting all nearby enemies with a debuff that reduces their Movement Speed by ${ItemAbilityData.VILE_FLASK_SLOW} and deals ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} damage per second for ${duration} Seconds.`,
          ru: `Вы бросаете мерзкую склянку, которая при соприкосновении с землёй разбивается и накладывает на задетых врагов эффект, уменьшающий их Скорость передвижения на ${ItemAbilityData.VILE_FLASK_SLOW} и наносящий ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} урона в секунду в течение ${duration} сек.`,
          br: `Jogue um frasco de veneno que quebra ao atingir o chão, afetando todos os inimigos próximos com um debuff que reduz a velocidade de movimento em ${ItemAbilityData.VILE_FLASK_SLOW} e causa ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} de dano por segundo por ${duration} seg.`,
          zh: `投擲惡毒瓶，瓶子破碎後影響所有附近敵人，降低他們 ${ItemAbilityData.VILE_FLASK_SLOW}移動速度並造成 ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC}點傷害，持續 ${duration}秒。`,
          cz: `Hodí Ohavnou láhev, která se rozbije po dopadu na zem a ovlivní všechny blízké nepřátele debuffem, který snižuje jejich rychlost pohybu o ${ItemAbilityData.VILE_FLASK_SLOW} a způsobuje ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} poškození za sekundu po dobu ${duration} sekund.`,
          fr: `Lance une flasque vile qui se brise après avoir touché le sol, affectant tous les ennemis proches avec un debuff qui réduit leur vitesse de déplacement de ${ItemAbilityData.VILE_FLASK_SLOW} et inflige ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} dégâts par seconde pendant ${duration} secondes.`,
          vi: `Ném một Bình Độc Hại rơi xuống đất, ảnh hưởng tất cả kẻ địch gần đó với một debuff giảm Tốc Độ Di Chuyển đi ${ItemAbilityData.VILE_FLASK_SLOW} và
          g ây ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} sát thương mỗi giây trong ${duration} Giây.`,
          id: `Melempar Botol Beracun yang pecah setelah mengenai tanah, mempengaruhi semua musuh di sekitar dengan debuff yang mengurangi Kecepatan Gerak sebesar ${ItemAbilityData.VILE_FLASK_SLOW} dan memberikan ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} kerusakan per detik selama ${duration} Detik.`,
        },
      }
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
          vi: 'Nhẫn Thời Gian',
          id: 'Cincin Kronos',
        },
        desc: {
          en: getObserverWardDescription(),
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
          vi: 'Thuốc Phép',
          id: 'Potion Sihir',
        },
        desc: {
          en: `Grants a permanent stack of magical strength, up to a maximum of 5 stacks. Each stack increases Ability Power by ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
          br: `Da a quem beber ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} de Poder de habilidade permanentemente, acumula até 5 vezes!\n Sabor uva da floresta.`,
          ru: `Даёт вам ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} Силы умений навсегда. Эффект складывается до 5 раз!`,
          zh: `永久提供魔法力量，最多可疊加五層。每層疊加增加 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}點技能威力。`,
          cz: `Dává ti trvalý stack magické síly, až do maxima 5 stacků. Každý stack zvyšuje Sílu útoků o ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
          fr: `Accorde une pile permanente de force magique, jusqu'à un maximum de 5 piles. Chaque pile augmente la puissance d'attaque de ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
          vi: `Cung cấp một điểm sức mạnh ma thuật vĩnh viễn, tối đa là 5 điểm. Mỗi điểm tăng Sức mạnh Kỹ năng lên ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
          id: `Memberikan tumpukan kekuatan ajaib permanen, hingga maksimum 5 tumpukan. Setiap tumpukan meningkatkan Kekuatan Kemampuan sebesar ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}!`,
        },
      }
    case ItemList.Corrupted_Potion:
      return {
        name: {
          en: 'Corrupted Potion',
          br: 'Poção de força corrompida',
          ru: 'Искажённое зелье',
          zh: '腐化藥水',
          cz: 'Zkreslený lektvar',
          fr: 'Potion corrompue',
          vi: 'Thuốc Sức Mạnh',
          id: 'Potion Korup',
        },
        desc: {
          en: `Grants a permanent stack of physical strength, up to a maximum of 5 stacks. Each stack increases Attack Damage by ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
          br: `Da a quem beber ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} de dano de ataque permanentemente, acumula até 5 vezes!\n Sabor cereja do campo.`,
          ru: `Даёт вам ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} Силы атаки навсегда. Эффект складывается до 5 раз!`,
          zh: `永久提供物理力量，最多可疊加五層。每層疊加增加 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}點攻擊傷害。`,
          cz: `Dává ti trvalý stack fyzické síly, až do maxima 5 stacků. Každý stack zvyšuje Útočnou sílu o ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
          fr: `Accorde une pile permanente de force physique, jusqu'à un maximum de 5 piles. Chaque pile augmente les dégâts d'attaque de ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
          vi: `Cung cấp một điểm sức mạnh vật lý vĩnh viễn, tối đa là 5 điểm. Mỗi điểm tăng Sát Thương Tấn Công lên ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
          id: `Memberikan tumpukan kekuatan fisik permanen, hingga maksimum 5 tumpukan. Setiap tumpukan meningkatkan Serangan sebesar ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}!`,
        },
      }
    case ItemList.Kirins_Bow: {
      const magicResistanceReduction = fixed(ItemAbilityData.KIRINS_BOW_MAGIC_RESISTANCE_REDUCTION * 100, 1)

      return {
        name: {
          en: "Kirin's Bow",
          zh: '麒麟之弓',
          cz: 'Kirinův luk',
          fr: 'Arc de Kirin',
          br: 'Arco de Kirin',
          ru: 'Лук Кирина',
          vi: 'Cung Kirin',
          id: 'Busur Kirin',
        },
        desc: {
          en: `Your Basic Attacks apply a stack of kirin's poison. At ${
            ItemAbilityData.KIRINS_BOW_MAX_STACKS
          } stacks, the magical kirin's explodes, reduce target's magic resistance by ${magicResistanceReduction} and dealing ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } Magic Damage to all nearby enemies and apply maximum stacks of poison. \n \n ${getPoisonBowDescription(
            false
          )}`,
          zh: `你的基本攻擊會疊加麒麟之毒，到第 ${ItemAbilityData.KIRINS_BOW_MAX_STACKS}層時，魔法麒麟會爆炸，降低目標魔法抗性 ${magicResistanceReduction}並對所有附近敵人造成 ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          }點魔法傷害並使他們得到最高層疊加的中毒。 \n \n ${getPoisonBowDescription(true)}`,
          cz: `Tvoje základní útoky aplikují stack jedu Kirina. Při ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} stacků se magický Kirin vybuchne, sníží magickou odolnost cíle o ${magicResistanceReduction} a způsobí ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } magického poškození všem nepřátelům v okolí a aplikuje maximální počet stacků jedu. \n \n ${getPoisonBowDescription(
            false
          )}`,
          fr: `Vos attaques de base appliquent une pile de poison de Kirin. À ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} piles, le kirin magique explose, réduit la résistance magique de la cible de ${magicResistanceReduction} et inflige ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } dégâts magiques à tous les ennemis à proximité et applique le maximum de piles de poison. \n \n ${getPoisonBowDescription(
            false
          )}`,
          br: `Seus ataques básicas aplicam uma pilha de veneno de Kirin. Em ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} pilhas, o kirin mágico explode, reduz a resistência mágica do alvo em ${magicResistanceReduction} e causa ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } de dano mágico a todos os inimigos próximos e aplica o máximo de pilhas de veneno. \n \n ${getPoisonBowDescription(
            false
          )}`,
          ru: `Твои базовые атаки накладывают яд Кирина. При ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} стаках магический Кирин взрывается, снижает магическое сопротивление цели на ${magicResistanceReduction} и наносит ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } магического урона всем ближайшим врагам и накладывает максимальное количество стаков яда. \n \n ${getPoisonBowDescription(
            false
          )}`,
          vi: `Các Đòn Tấn Công Cơ Bản của bạn áp dụng một tấm độc của Kirin. Khi đạt ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} tấm, Kirin phép thuật nổ tung, giảm kháng phép của mục tiêu đi ${magicResistanceReduction} và gây ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } Sát Thương Phép cho tất cả kẻ địch xung quanh và áp dụng tối đa tấm độc. \n \n ${getPoisonBowDescription(
            false
          )}`,
          id: `Serangan Dasar kamu memberikan stack racun Kirin. Pada ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} stack, Kirin sihir meledak, mengurangi ketahanan sihir target sebesar ${magicResistanceReduction} dan memberikan ${
            ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE
          } Kerusakan Sihir kepada semua musuh di sekitar dan memberikan stack racun maksimal. \n \n ${getPoisonBowDescription(
            false
          )}`,
        },
      }
    }
    case ItemList.Garuns_Charm: {
      const cooldown = toSec(ItemAbilityData.GARUNS_CHARM_REPLENISH_COOLDOWN)

      return {
        name: {
          en: "Garun's Charm",
          br: 'Encanto de Garun',
          fr: 'Charme de Garun',
          zh: '加侖的魅力',
          cz: 'Kouzlo Garunové',
          ru: 'Оберег Гаруна',
          vi: 'Bùa của Garun',
          id: 'Pesona Garun',
        },
        desc: {
          en:
            `Every ${cooldown}, gain a stack of Garun's protection, up to ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stacks. Receiving Normal Damage removes a stack. Each stack increases your Armor by ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.\n\n[AURA]: Grants ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor to nearby allies \n\n` +
            getObserverWardDescription(),
          br:
            `A cada ${cooldown}, ganhe uma pilha de Proteção de Garun, acumula até ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} pilhas. Receber Dano normal remove uma pilha. Cada pilha aumenta sua Armadura em ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.\n\n[AURA]: Concede ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} de Armadura para aliados próximos \n\n` +
            getObserverWardDescription(),
          fr:
            `Toutes les ${cooldown}, gagnez une pile de protection de Garun, jusqu'à ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} piles. Recevoir des dégâts normaux enlève une pile. Chaque pile augmente votre Armure de ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.\n\n[AURA]: Accorde ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armure aux alliés proches \n\n` +
            getObserverWardDescription(),
          zh:
            `每 ${cooldown}，獲得一層加侖的守護，最多疊加到 ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}層。受到普通傷害會移除一層。每層增加你的裝甲值 ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}。\n\n[AURA]: 給予附近盟友 ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR}裝甲值 \n\n` +
            getObserverWardDescription(),
          cz:
            `Každých ${cooldown} získáš stack Garunovy ochrany, až do maxima ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} stacků. Přijetí Normálního poškození odebere stack. Každý stack zvyšuje tvou Obranu o ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.
            \n\n[AURA]: Přidá ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Obrany všem spojencům v okolí \n\n` +
            getObserverWardDescription(),
          ru:
            `Каждые ${cooldown} получай стек Оберега Гаруна, до ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} стеков. Получение Обычного урона убирает стек. Каждый стек увеличивает твою Броню на ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.
            \n\n[AURA]: Предоставляет ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Брони ближайшим союзникам \n\n` +
            getObserverWardDescription(),
          vi:
            `Mỗi ${cooldown}, nhận một tấm bảo vệ của Garun, tối đa ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} tấm. Nhận Sát Thương Thường xóa một tấm. Mỗi tấm tăng Giáp của bạn lên ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.
          \n\n[AURA]: Cung cấp ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Giáp cho đồng minh xung quanh \n\n` +
            getObserverWardDescription(),
          id:
            `Setiap ${cooldown}, dapatkan tumpukan perlindungan Garun, hingga ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} tumpukan. Menerima Kerusakan Normal menghapus satu tumpukan. Setiap tumpukan meningkatkan Armor kamu sebesar ${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}.
          \n\n[AURA]: Memberikan ${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor untuk sekutu di sekitar \n\n` +
            getObserverWardDescription(),
        },
      }
    }
    case ItemList.Wizard_Charm:
      return {
        name: {
          en: 'Wizard Charm',
          br: 'Encanto de Mago',
          fr: 'Charme de Sorcier',
          zh: '巫师咒符',
          cz: 'Kouzlo Čaroděje',
          ru: 'Талисман Волшебника',
          vi: 'Bùa Phù Thủy',
          id: 'Pesona Penyihir',
        },
        desc: {
          en:
            `On ability hit, applies Wizard's Curse that prevents the enemy from receiving any healing or health regeneration and removes all positive effects. \n\n` +
            getObserverWardDescription(),
          br:
            `Ao acertar uma habilidade, aplica a Maldição do Mago, que impede o inimigo de receber qualquer tipo de cura ou regeneração de vida e remove todos os efeitos positivos. \n\n` +
            getObserverWardDescription(),
          fr:
            `Lorsqu'une compétence touche, applique la Malédiction du Sorcier, empêchant l'ennemi de recevoir toute forme de soin ou de régénération de santé et supprime tous les effets positifs. \n\n` +
            getObserverWardDescription(),
          zh:
            `技能命中时，施加巫师的诅咒，使敌人无法获得任何治疗或生命恢复效果，并移除所有正面效果。 \n\n` +
            getObserverWardDescription(),
          cz:
            `Při zásahu schopností aplikuje Kletbu Kouzelníka, která zabrání nepříteli získat jakékoli léčení nebo regeneraci zdraví a odstraní všechny pozitivní efekty. \n\n` +
            getObserverWardDescription(),
          ru:
            `При попадании способностью накладывает Проклятие Волшебника, которое запрещает врагу получать любое исцеление или восстановление здоровья и снимает все положительные эффекты. \n\n` +
            getObserverWardDescription(),
          vi:
            `Khi đánh trúng bằng kỹ năng, áp dụng Lời Nguyền Phù Thủy ngăn kẻ địch nhận bất kỳ hồi máu hoặc tái tạo sinh lực và loại bỏ tất cả các hiệu ứng có lợi. \n\n` +
            getObserverWardDescription(),
          id:
            `Saat terkena kemampuan, menerapkan Kutukan Penyihir yang mencegah musuh menerima penyembuhan atau regenerasi kesehatan dalam bentuk apapun dan menghapus semua efek positif. \n\n` +
            getObserverWardDescription(),
        },
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
          vi: 'Huy Hiệu Sứ Mệnh',
          id: 'Locket Korup',
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
            `每 ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)}提供一層腐化祝福，使你的下一次攻擊爲暴擊。此效果最多可疊加2次。\n\n` +
            getObserverWardDescription(),
          cz:
            `Každých ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} poskytne stack zkaženého požehnání, který způsobí, že tvůj další útok bude kritický zásah. Tento efekt může být naskládán až 2krát.\n\n` +
            getObserverWardDescription(),
          ru:
            `Каждые ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} предоставляют стекло искажённого благословения, делая ваше следующее нападение критическим. Этот эффект может накапливаться до 2 раз.\n\n` +
            getObserverWardDescription(),
          vi:
            `Mỗi ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} cung cấp một tấm phúc lợi bị sứt, khiến cho đòn tấn công tiếp theo của bạn trở thành một đòn chí mạng. Hiệu ứng này có thể chồng lên đến 2 lần.\n\n` +
            getObserverWardDescription(),
          id:
            `Setiap ${toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)} memberikan tumpukan berkat yang tercemar membuat serangan berikutnya Anda menjadi serangan kritis. Efek ini dapat menumpuk hingga 2 kali.\n\n` +
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

const getPoisonBowDescription = (isUpgraded: boolean) => {
  const duration = toSecRaw(isUpgraded ? ItemAbilityData.POISON_BOW_DURATION_2 : ItemAbilityData.POISON_BOW_DURATION_1)
  const damageOverTime = isUpgraded
    ? ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME_2
    : ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME

  const text: { [key: string]: string } = {
    en: `Your Basic Attacks apply a stack of deadly poison, up to a maximum of ${ItemAbilityData.POISON_BOW_MAX_STACKS} stacks. Each stack reduces Movement Speed by ${ItemAbilityData.POISON_BOW_SLOW} and deals ${damageOverTime} Magic Damage per second for ${duration} Seconds. `,
    ru: `Ваши базовые атаки накладывают стек смертельного яда, до максимума ${ItemAbilityData.POISON_BOW_MAX_STACKS} стеков. Каждый стек уменьшает Скорость передвижения на ${ItemAbilityData.POISON_BOW_SLOW} и наносит ${damageOverTime} магического урона в секунду в течение ${duration} секунд.`,
    br: `Seus ataques básicos aplicam uma pilha de veneno mortal, até um máximo de ${ItemAbilityData.POISON_BOW_MAX_STACKS} pilhas. Cada pilha reduz a Velocidade de Movimento em ${ItemAbilityData.POISON_BOW_SLOW} e causa ${damageOverTime} de Dano Mágico por segundo por ${duration} segundos.`,
    fr: `Vos attaques de base appliquent une pile de poison mortel, jusqu'à un maximum de ${ItemAbilityData.POISON_BOW_MAX_STACKS} piles. Chaque pile réduit la vitesse de déplacement de ${ItemAbilityData.POISON_BOW_SLOW} et inflige ${damageOverTime} de dégâts magiques par seconde pendant ${duration} secondes.`,
    zh: `你的基本攻擊會施加一層致命毒素，最多疊加到 ${ItemAbilityData.POISON_BOW_MAX_STACKS}層。每層降低移動速度 ${ItemAbilityData.POISON_BOW_SLOW}並在 ${duration}秒內每秒造成 ${damageOverTime}點魔法傷害。`,
    cz: `Tvé základní útoky aplikují stack smrtícího jedu, až do maxima ${ItemAbilityData.POISON_BOW_MAX_STACKS} stacků. Každý stack snižuje rychlost pohybu o ${ItemAbilityData.POISON_BOW_SLOW} a způsobuje ${damageOverTime} magického poškození za sekundu po dobu ${duration} sekund.`,
    vi: `Các Đòn Tấn Công Cơ Bản của bạn áp dụng một tấm độc chết người, tối đa là ${ItemAbilityData.POISON_BOW_MAX_STACKS} tấm. Mỗi tấm giảm Tốc Độ Di Chuyển đi ${ItemAbilityData.POISON_BOW_SLOW} và gây ${damageOverTime} Sát Thương Phép mỗi giây trong ${duration} Giây.`,
    id: `Serangan Dasar kamu memberikan tumpukan racun mematikan, hingga maksimal ${ItemAbilityData.POISON_BOW_MAX_STACKS} tumpukan. Setiap tumpukan mengurangi Kecepatan Gerak sebesar ${ItemAbilityData.POISON_BOW_SLOW} dan memberikan ${damageOverTime} Kerusakan Sihir per detik selama ${duration} Detik.`,
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
    zh: `當你的技能擊中敵方英雄，你的下一個基本攻擊對敵方英雄造成額外 ${baseDamage}（+ ${bonusDamage}%技能威力）點魔法傷害。`,
    cz: `Když tvé schopnosti zasáhnou nepřátelského hrdinu, tvůj další základní útok způsobí ${baseDamage} (+ ${bonusDamage}% Síly útoků) bonusové magické poškození nepřátelským hrdinům.`,
    vi: `Khi Kỹ Năng của bạn trúng mục tiêu kẻ địch, Đòn Tấn Công Cơ Bản tiếp theo của bạn gây thêm ${baseDamage} (+ ${bonusDamage}% Sức Mạnh Kỹ Năng) Sát Thương Phép cho kẻ địch.`,
    id: `Ketika kemampuanmu mengenai pahlawan musuh, serangan dasar berikutnya kamu memberikan ${baseDamage} (+ ${bonusDamage}% Kekuatan Kemampuan) Kerusakan Sihir tambahan kepada pahlawan musuh.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getFrigidCurseDescription = () => {
  const healingReduction = fixed(ItemAbilityData.FRIGID_CURSE_HEALING_REDUCTION * 100, 1)
  const duration = toSec(ItemAbilityData.FRIGID_CURSE_DURATION)

  const text: { [key: string]: string } = {
    en: `Reduces Movement Speed by ${ItemAbilityData.FRIGID_CURSE_SLOW} and reduces all healing and regeneration effects by ${healingReduction}% for ${duration}.`,
    ru: `Уменьшает Скорость передвижения цели на ${ItemAbilityData.FRIGID_CURSE_SLOW} и всё входящее исцеление, а также эффекты регенерации ${healingReduction}% в течение ${duration}`,
    br: `Reduz a velocidade de movimento em ${ItemAbilityData.FRIGID_CURSE_SLOW} e todos os efeitos de cura e regeneração em ${healingReduction}% por ${duration}`,
    fr: `Réduit la vitesse de déplacement de ${ItemAbilityData.FRIGID_CURSE_SLOW} et tous les effets de soins et de régénération de ${healingReduction}% pour ${duration}`,
    zh: `降低移動速度 ${ItemAbilityData.FRIGID_CURSE_SLOW}和所有治癒和回血效果 ${healingReduction}% 持續${duration}。`,
    cz: `Snížení rychlosti pohybu o ${ItemAbilityData.FRIGID_CURSE_SLOW} a všech léčebných a regeneračních efektů o ${healingReduction}% během ${duration}`,
    vi: `Giảm Tốc Độ Di Chuyển bởi ${ItemAbilityData.FRIGID_CURSE_SLOW} và giảm tất cả hiệu ứng hồi máu và tái tạo bởi ${healingReduction}% trong ${duration}`,
    id: `Mengurangi Kecepatan Gerak sebesar ${ItemAbilityData.FRIGID_CURSE_SLOW} dan mengurangi semua efek penyembuhan dan regenerasi sebesar ${healingReduction}% selama ${duration}`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getObserverWardDescription = () => {
  const duration = toSecRaw(ItemAbilityData.WARD_DURATION)

  const text: { [key: string]: string } = {
    en: `Plants an Observer Ward, an invisible watcher that gives your team obstructed vision in a ${ItemAbilityData.WARD_VISION}px radius for up to ${duration} Seconds. If the ward is visible to the enemy team, they can destroy it!`,
    br: `Planta uma pedra Observadora invisível que dá visão obstruída em ${ItemAbilityData.WARD_VISION} px raio para sua equipe.\n Dura ${duration} seg. Se ela estiver visível para a equipe inimiga, eles podem destruí-la!`,
    ru: `Вы устанавливаете невидимый тотем, который раскрывает область и все невидимые вражеские цели вокруг себя в радиусе ${ItemAbilityData.WARD_VISION} пикселей в течение ${duration} сек. Если тотем видим для врагов, они могут уничтожить его!`,
    zh: `植入一個偵查守衛，一個隱蔽的觀察者，賜予 ${duration}秒己方團隊半徑 ${ItemAbilityData.WARD_VISION}像素範圍內的觀察視線。如果守衛能被敵隊看見，他們能摧毀它！`,
    cz: `Nainstaluješ Pozorovací totem, který ti poskytne týmu zablokovanou viditelnost v poloměru ${ItemAbilityData.WARD_VISION}px po dobu až ${duration} sekund. Pokud je totem viditelný pro nepřátelský tým, mohou ho zničit!`,
    fr: `Plante un Ward de l'observateur, un observateur invisible qui donne à votre équipe une vision obstruée dans un rayon de ${ItemAbilityData.WARD_VISION}px pendant ${duration} secondes. Si le ward est visible pour l'équipe ennemie, ils peuvent le détruire!`,
    vi: `Trồng một Chiến Binh Quan Sát, một người quan sát vô hình mang lại tầm nhìn bị cản trở cho đội của bạn trong bán kính ${ItemAbilityData.WARD_VISION} px trong tối đa ${duration} Giây. Nếu Chiến Binh Quan Sát có thể nhìn thấy bởi đội địch, họ có thể phá hủy nó!`,
    id: `Menanam Observer Ward, pengamat tak terlihat yang memberikan visi terhalang untuk tim Anda dalam radius ${ItemAbilityData.WARD_VISION} px selama ${duration} Detik. Jika ward terlihat oleh tim musuh, mereka dapat menghancurkannya!`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getNimbleBowDescription = () => {
  const speed = fixed(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100, 1)

  return {
    en: `Increases projectile range and area of effect radius by ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}px and projectile speed by ${speed}%.`,
    br: `Aumenta o alcance do projétil e o raio de efeito em ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px e a velocidade do projétil em ${speed}%.`,
    ru: `Увеличивает дальность полёта снаряда и радиус зоны поражения на ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} пикселей и скорость полёта снаряда на ${speed}%.`,
    zh: `增加射程和範圍 ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}像素和射速 ${speed}%.`,
    cz: `Zvyšuje dosah střely a poloměr účinku o ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px a rychlost střely o ${speed}%.`,
    fr: `Augmente la portée du projectile et le rayon d'effet de ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px et la vitesse du projectile de ${speed}%.`,
    vi: `Tăng cường tầm bắn và bán kính vùng tác động bởi ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px và tốc độ đạn bởi ${speed}%.`,
    id: `Meningkatkan jangkauan proyektil dan radius area efek sebesar ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px dan kecepatan proyektil sebesar ${speed}%.`,
  }
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

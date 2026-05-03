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
          vi: 'Kiếm Gỗ',
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
          vi: 'Gộc Tân Thủ',
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
          vi: 'Kiếm Sắt',
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
    case ItemList.Corrupted_Katana: {
      const critDamage = fixed(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE * 100, 1)

      return {
        name: {
          en: 'Corrupted Katana',
          ru: 'Искажённая катана',
          br: 'Katana Corrompida',
          cz: 'Zvrácená Katana',
          fr: 'Katana corrompu',
          zh: '腐化武士刀',
          vi: 'Katana Tà Đạo',
          id: 'Katana Tercemar',
        },
        desc: {
          en: `Increases Critical Damage by ${critDamage}%.`,
          ru: `Увеличивает урон критических атак на ${critDamage}%.`,
          br: `Aumenta o Dano Crítico em ${critDamage}%.`,
          cz: `Zvyšuje kritické poškození o ${critDamage}%.`,
          fr: `Augmente les dégâts critiques de ${critDamage}%.`,
          zh: `提高暴擊傷害 ${critDamage}%。`,
          vi: `Tăng sát thương chí mạng lên ${critDamage}%.`,
          id: `Meningkatkan Critical Damage sebesar ${critDamage}%.`,
        },
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
          zh: '鋼鐵勇者之劍',
          vi: 'Kiếm của Chiến Binh Sắt',
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
          vi: 'Cung Sắt',
          id: 'Busur Panjang Ceroboh',
        },
      }
    case ItemList.Nimble_Longbow: {
      return {
        name: {
          en: 'Nimble Longbow',
          ru: 'Ловкий длинный лук',
          br: 'Besta da Resiliência encantada',
          fr: 'Arc long résistant',
          zh: '敏捷長弓',
          vi: 'Cung Sắt Tầm Xa',
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
          vi: 'Khiên Hồi Máu',
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
    case ItemList.Enchanted_Shield:
      return {
        name: {
          en: 'Enchanted Shield',
          ru: 'Зачарованный щит',
          br: 'Escudo Encantado',
          cz: 'Magický Štít',
          fr: 'Bouclier magique',
          zh: '強化護盾',
          vi: 'Khiên Phù Phép',
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
          vi: 'Gộc Thiên Nhiên',
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
          vi: 'Gộc Phù Thủy',
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
          fr: 'Anneau de pouvoir',
          zh: '力量手環',
          vi: 'Nhẫn Quyền Lực',
          id: 'Cincin Daya',
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
          vi: 'Áo Giáp Tân Thủ',
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
    case ItemList.Plate_Armor: {
      const healingAmp = Math.floor(ItemAbilityData.PLATE_ARMOR_HP_AMP * 100)
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
          en: `Increases healing received and Health Regeneration by ${healingAmp}% on the carrier.`,
          ru: `Увеличивает получаемое лечение и регенерацию здоровья на ${healingAmp}% у владельца.`,
          br: `Aumenta a cura recebida e a regeneração de Vida em ${healingAmp}% no portador.`,
          fr: `Augmente les soins reçus et la régénération de santé de ${healingAmp}% sur le porteur.`,
          zh: `提高持有者受到的治療效果和生命恢復 ${healingAmp}%。`,
          cz: `Zvyšuje přijaté léčení a regeneraci zdraví o ${healingAmp}% u nositele.`,
          vi: `Tăng hiệu quả hồi máu nhận vào và hồi máu theo thời gian thêm ${healingAmp}% cho bản thân.`,
          id: `Meningkatkan penyembuhan yang diterima dan regenerasi Health sebesar ${healingAmp}% pada pengguna.`,
        },
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
          vi: 'Giày Phù Thủy',
          id: 'Sepatu Sihir',
        },
        desc: {
          en: `Ability Haste reduces Ability cooldowns and speeds up casting animations.`,
          ru: `Скорость умений уменьшает время перезарядки способностей и ускоряет анимации применения.`,
          br: `Aceleração de Habilidade reduz o tempo de recarga das habilidades e acelera as animações de conjuração.`,
          fr: `La hâte des compétences réduit les temps de recharge et accélère les animations de lancement.`,
          zh: `技能急速會縮短技能冷卻時間並加快施放動畫。`,
          cz: `Zrychlení schopností snižuje cooldowny a zrychluje animační čas sesílání.`,
          vi: `Hồi chiêu kỹ năng giảm thời gian hồi và tăng tốc hoạt ảnh thi triển.`,
          id: `Ability Haste mengurangi cooldown Kemampuan dan mempercepat animasi penggunaan.`,
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
    case ItemList.Kirins_Boots:
      return {
        name: {
          en: "Kirin's Boots",
          ru: 'Ботинки Кирина',
          br: 'Botas de Kirin',
          cz: 'Svaté Sandále',
          fr: 'Bottes de Kirin',
          zh: '神龍之靴',
          vi: 'Giày Kirin',
          id: 'Sepatu Kirin',
        },
        desc: {
          en: `Tenacity reduces the duration of crowd control effects (stuns, slows, roots, silences).`,
          ru: `Стойкость снижает длительность эффектов контроля (оглушение, замедление, обездвиживание, немота).`,
          br: `Tenacidade reduz a duração dos efeitos de controle (atordoamento, lentidão, enraizamento, silêncio).`,
          fr: `La ténacité réduit la durée des effets de contrôle (étourdissement, ralentissement, enracinement, silence).`,
          zh: `韧性会减少控制效果的持续时间（眩晕、减速、定身、沉默）。`,
          cz: `Houževnatost snižuje dobu trvání efektů kontroly (omráčení, zpomalení, zakořenění, umlčení).`,
          vi: `Kháng hiệu ứng giảm thời gian của các hiệu ứng khống chế (choáng, làm chậm, trói chân, câm lặng).`,
          id: `Tenacity mengurangi durasi efek crowd control (stun, slow, root, silence).`,
        },
      }
    case ItemList.Swift_Boots:
      return {
        name: {
          en: 'Swift Boots',
          ru: 'Ботинки стремительности',
          br: 'Botas das Fadas',
          cz: 'Cestovní Obuv',
          fr: 'Bottes de vitesse',
          zh: '神速之靴',
          vi: 'Giày Tốc Hành',
          id: 'Sepatu Cepat',
        },
      }
    case ItemList.Shadow_Slayer: {
      const damagePerHit = fixed(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100, 1)

      return {
        name: {
          en: 'Shadow Slayer',
          ru: 'Губитель теней',
          br: 'Espada Consome luz',
          cz: 'Stínovrah',
          fr: "Tueur d'Ombre",
          zh: '闇影殺手',
          vi: 'Kiếm Bóng Đêm',
          id: 'Pembunuh Bayangan',
        },
        desc: {
          en: `Attacks deal ${damagePerHit}% of max health as magical damage.\n\nShadow Curse: Prevents healing and deals pure damage based on the enemy's Health Regeneration.`,
          ru: `Атаки наносят ${damagePerHit}% от максимального здоровья в виде магического урона.\n\nПроклятие теней: Блокирует лечение и наносит чистый урон в зависимости от регенерации здоровья врага.`,
          br: `Ataques causam ${damagePerHit}% da vida máxima como dano mágico.\n\nMaldição das Sombras: Impede cura e causa dano puro baseado na regeneração de vida do inimigo.`,
          cz: `Útoky způsobují ${damagePerHit}% maximálního zdraví jako magické poškození.\n\nStínové prokletí: Zabraňuje léčení a způsobuje čisté poškození podle regenerace zdraví nepřítele.`,
          fr: `Les attaques infligent ${damagePerHit}% des points de vie maximum en dégâts magiques.\n\nMalédiction des ombres : Empêche les soins et inflige des dégâts purs en fonction de la régénération de vie de l'ennemi.`,
          zh: `攻擊造成相當於最大生命值 ${damagePerHit}% 的魔法傷害。\n\n暗影詛咒：阻止治療，並根據敵人的生命恢復造成純粹傷害。`,
          id: `Serangan menghasilkan ${damagePerHit}% dari Health maksimum sebagai damage sihir.\n\nKutukan Bayangan: Mencegah penyembuhan dan memberikan damage murni berdasarkan regenerasi Health musuh.`,
          vi: `Đòn đánh gây ${damagePerHit}% máu tối đa dưới dạng sát thương phép.\n\nLời Nguyền Bóng Tối: Ngăn hồi máu và gây sát thương chuẩn dựa trên hồi phục của kẻ địch.`,
        },
      }
    }

    case ItemList.Divine_Sword: {
      const bonusMR = ItemAbilityData.DIVINE_SWORD_MAGIC_RESISTANCE
      return {
        name: {
          en: 'Divine Sword',
          ru: 'Божественный меч',
          br: 'Espada Divina',
          cz: 'Božský meč',
          zh: '聖劍',
          fr: 'Épée divine',
          vi: 'Kiếm Thần Thánh',
          id: 'Pedang Suci',
        },
        desc: {
          en: `Cleanses negative effects. Grants immunity to crowd control and +${bonusMR} Magic Resistance.`,
          ru: `Снимает негативные эффекты. Даёт иммунитет к эффектам контроля и +${bonusMR} к сопротивлению магии.`,
          br: `Remove efeitos negativos. Concede imunidade a controle de grupo e +${bonusMR} de resistência mágica.`,
          cz: `Odstraní negativní efekty. Poskytne imunitu vůči efektům kontroly a +${bonusMR} odolnosti proti magii.`,
          fr: `Supprime les effets négatifs. Confère une immunité aux effets de contrôle et +${bonusMR} de résistance magique.`,
          zh: `清除負面效果。免疫控制效果並獲得 +${bonusMR} 魔法抗性。`,
          vi: `Loại bỏ hiệu ứng xấu. Miễn nhiễm khống chế và nhận +${bonusMR} kháng phép.`,
          id: `Menghapus efek negatif. Memberikan kekebalan terhadap efek kontrol dan +${bonusMR} Magic Resistance.`,
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
          en: `Throws a katana on the ground. Nearby enemies are slowed and silenced. Reveals invisible units.`,
          ru: `Бросает катану на землю. Ближайшие враги замедляются и получают немоту. Раскрывает невидимые цели.`,
          br: `Lança uma katana no chão. Inimigos próximos são desacelerados e silenciados. Revela unidades invisíveis.`,
          zh: `將武士刀投擲到地面。附近敵人被減速並沉默。揭露隱形單位。`,
          cz: `Hodí katanu na zem. Blízcí nepřátelé jsou zpomaleni a umlčeni. Odhaluje neviditelné jednotky.`,
          fr: `Lance une katana au sol. Les ennemis proches sont ralentis et réduits au silence. Révèle les unités invisibles.`,
          vi: `Ném katana xuống đất. Kẻ địch gần đó bị làm chậm và câm lặng. Phát hiện đơn vị tàng hình.`,
          id: `Melemparkan katana ke tanah. Musuh di sekitar diperlambat dan dibungkam. Mengungkap unit tak terlihat.`,
        },
      }
    case ItemList.Spiked_Mace: {
      const threshold = (ItemAbilityData.SPIKED_MACE_THRESHOLD * 100).toFixed(1)
      return {
        name: {
          en: 'Spiked Mace',
          ru: 'Шипастая булава',
          br: 'Maçã Cravada',
          zh: '尖刺鐵錘',
          fr: 'Masse à pointes',
          cz: 'Hrotatá palice',
          vi: 'Gộc Móc',
          id: 'Gada Berduri',
        },
        desc: {
          en: `Attacks instantly execute enemies below ${threshold}% Health.`,
          ru: `Атаки мгновенно добивают врагов с уровнем здоровья ниже ${threshold}%.`,
          br: `Ataques executam instantaneamente inimigos com menos de ${threshold}% de vida.`,
          fr: `Les attaques exécutent instantanément les ennemis ayant moins de ${threshold}% de vie.`,
          zh: `攻擊會瞬間斬殺生命值低於 ${threshold}% 的敵人。`,
          cz: `Útoky okamžitě dorazí nepřátele pod ${threshold}% zdraví.`,
          vi: `Đòn đánh lập tức kết liễu kẻ địch dưới ${threshold}% máu.`,
          id: `Serangan langsung mengeksekusi musuh di bawah ${threshold}% Health.`,
        },
      }
    }
    case ItemList.Plague_Ring: {
      const duration = Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)
      return {
        name: {
          en: 'Plague Ring',
          ru: 'Чумное кольцо',
          br: 'Anel da Praga',
          fr: 'Anneau de peste',
          zh: '瘟疫戒指',
          cz: 'Morový Prsten',
          vi: 'Nhẫn Độc',
          id: 'Cincin Wabah',
        },
        desc: {
          en: `Increases the duration of all negative effects by ${duration}%.`,
          ru: `Увеличивает длительность всех негативных эффектов на ${duration}%.`,
          br: `Aumenta a duração de todos os efeitos negativos em ${duration}%.`,
          fr: `Augmente la durée de tous les effets négatifs de ${duration}%.`,
          zh: `增加所有負面效果的持續時間 ${duration}%。`,
          cz: `Zvyšuje dobu trvání všech negativních efektů o ${duration}%.`,
          vi: `Tăng thời gian của tất cả hiệu ứng tiêu cực thêm ${duration}%.`,
          id: `Meningkatkan durasi semua efek negatif sebesar ${duration}%.`,
        },
      }
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
          vi: 'Gươm của Hoàng Đế Băng Giá',
          id: 'Pedang Kaisar Beku',
        },
        desc: {
          en: `Attacks apply ${getFrigidCurseDescription()}.`,
          ru: `Атаки накладывают ${getFrigidCurseDescription()}.`,
          br: `Ataques aplicam ${getFrigidCurseDescription()}.`,
          fr: `Les attaques appliquent ${getFrigidCurseDescription()}.`,
          zh: `攻擊會施加 ${getFrigidCurseDescription()}。`,
          cz: `Útoky aplikují ${getFrigidCurseDescription()}.`,
          vi: `Đòn đánh gây ${getFrigidCurseDescription()}.`,
          id: `Serangan memberikan ${getFrigidCurseDescription()}.`,
        },
      }
    case ItemList.Corrupted_Light_Slayer: {
      const lifesteal = (ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100).toFixed(1)
      const attackDamage = ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
      return {
        name: {
          en: 'Corrupted Light Slayer',
          ru: 'Искажённый губитель света',
          br: 'Corta Luz corrompido',
          fr: 'Tueur de Lumière Corrompu',
          zh: '腐化輕量殺手',
          cz: 'Zkreslený světelný vrah',
          vi: 'Tà Kiếm',
          id: 'Pembunuh Cahaya Tercemar',
        },
        desc: {
          en: `Aura: You and nearby allies gain ${lifesteal}% Lifesteal and ${attackDamage} Attack Damage.`,
          ru: `Аура: Вы и ближайшие союзники получаете ${lifesteal}% к краже здоровья и ${attackDamage} к силе атаки.`,
          br: `Aura: Você e aliados próximos recebem ${lifesteal}% de roubo de vida e ${attackDamage} de dano de ataque.`,
          fr: `Aura : Vous et les alliés proches gagnez ${lifesteal}% de vol de vie et ${attackDamage} dégâts d'attaque.`,
          zh: `光環：你和附近盟友獲得 ${lifesteal}% 生命偷取和 ${attackDamage} 攻擊傷害。`,
          cz: `Aura: Ty a blízcí spojenci získáte ${lifesteal}% lifestealu a ${attackDamage} útočného poškození.`,
          vi: `Hào quang: Bạn và đồng minh gần đó nhận ${lifesteal}% hút máu và ${attackDamage} sát thương vật lý.`,
          id: `Aura: Anda dan sekutu di sekitar mendapatkan ${lifesteal}% Lifesteal dan ${attackDamage} Attack Damage.`,
        },
      }
    }
    /** Wooden Bow */
    case ItemList.Berserker_Bow: {
      const attackSpeed = Math.floor(ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100)
      const maxStacks = ItemAbilityData.BERSERKER_BOW_MAXIMUM_STACKS

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
          en: `Attacks grant Berserk, stacking up to ${maxStacks} times. Each stack increases Attack Speed by ${attackSpeed}%.`,
          ru: `Атаки дают эффект Берсерка, суммируется до ${maxStacks} раз. Каждый эффект увеличивает скорость атаки на ${attackSpeed}%.`,
          br: `Ataques concedem Berserk, acumulando até ${maxStacks} vezes. Cada acúmulo aumenta a Velocidade de Ataque em ${attackSpeed}%.`,
          cz: `Útoky dávají Berserk, který se může naskládat až ${maxStacks}×. Každý stack zvyšuje rychlost útoku o ${attackSpeed}%.`,
          fr: `Les attaques appliquent Berserk, cumulable jusqu'à ${maxStacks} fois. Chaque cumul augmente la vitesse d'attaque de ${attackSpeed}%.`,
          zh: `攻擊會獲得狂暴效果，最多可疊加 ${maxStacks} 層。每層提高 ${attackSpeed}% 攻擊速度。`,
          vi: `Đòn đánh cho hiệu ứng Berserk, cộng dồn tối đa ${maxStacks} lần. Mỗi cộng dồn tăng ${attackSpeed}% tốc độ đánh.`,
          id: `Serangan memberikan efek Berserk, dapat ditumpuk hingga ${maxStacks} kali. Setiap tumpukan meningkatkan Attack Speed sebesar ${attackSpeed}%.`,
        },
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
          cz: 'Magický Luk',
          vi: 'Cung Phép Thuật',
          id: 'Busur Ajaib',
        },
        desc: {
          en:
            'Dealing magical damage grants 10 Movement Speed and applies Poison.\n\n' + getPoisonBowDescription(false),
          ru:
            'Нанесение магического урона даёт 10 скорости передвижения и накладывает Яд.\n\n' +
            getPoisonBowDescription(false),
          br:
            'Causar dano mágico concede 10 de Velocidade de Movimento e aplica Veneno.\n\n' +
            getPoisonBowDescription(false),
          fr:
            'Infliger des dégâts magiques confère 10 de vitesse de déplacement et applique Poison.\n\n' +
            getPoisonBowDescription(false),
          zh: '造成魔法傷害會獲得 10 移動速度並施加中毒效果。\n\n' + getPoisonBowDescription(false),
          cz:
            'Způsobení magického poškození poskytuje 10 rychlosti pohybu a aplikuje Jed.\n\n' +
            getPoisonBowDescription(false),
          vi:
            'Gây sát thương phép sẽ nhận 10 tốc độ di chuyển và gây hiệu ứng Độc.\n\n' + getPoisonBowDescription(false),
          id:
            'Memberikan damage sihir memberi 10 Movement Speed dan memberikan Racun.\n\n' +
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

    case ItemList.Corrupted_Longbow: {
      const attackSpeed = fixed(ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100, 1)
      return {
        name: {
          en: 'Corrupted Longbow',
          ru: 'Искажённый длинный лук',
          br: 'Arco Corrompido',
          fr: 'Arc long corrompu',
          zh: '腐化長弓',
          cz: 'Zkreslený dlouhý luk',
          vi: 'Cung Tà Đạo',
          id: 'Busur Panjang Tercemar',
        },
        desc: {
          en:
            `Enhance carrier: Gain ${attackSpeed}% Attack Speed and ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} Movement Speed. Prevents casting abilities.\n\n` +
            getPoisonBowDescription(true),
          ru:
            `Усиливает носителя: увеличивает скорость атаки на ${attackSpeed}% и скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}. Запрещает использовать способности.\n\n` +
            getPoisonBowDescription(true),
          br:
            `Aprimora o portador: aumenta a Velocidade de Ataque em ${attackSpeed}% e a Velocidade de Movimento em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}. Impede o uso de habilidades.\n\n` +
            getPoisonBowDescription(true),
          fr:
            `Améliore le porteur : augmente la vitesse d'attaque de ${attackSpeed}% et la vitesse de déplacement de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}. Empêche d'utiliser des compétences.\n\n` +
            getPoisonBowDescription(true),
          zh:
            `強化持有者：提高 ${attackSpeed}% 攻擊速度和 ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} 移動速度。無法施放技能。\n\n` +
            getPoisonBowDescription(true),
          cz:
            `Posiluje nositele: zvyšuje rychlost útoku o ${attackSpeed}% a rychlost pohybu o ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}. Znemožňuje používat schopnosti.\n\n` +
            getPoisonBowDescription(true),
          vi:
            `Cường hóa bản thân: tăng ${attackSpeed}% tốc độ đánh và ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} tốc độ di chuyển. Không thể sử dụng kỹ năng.\n\n` +
            getPoisonBowDescription(true),
          id:
            `Memperkuat pengguna: meningkatkan Attack Speed sebesar ${attackSpeed}% dan Movement Speed sebesar ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED}. Tidak dapat menggunakan kemampuan.\n\n` +
            getPoisonBowDescription(true),
        },
      }
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
          vi: 'Cung Thợ Săn',
          id: 'Busur Panjang Pemburu',
        },
        desc: {
          en: `Attacks grant Hunter's Focus. Gain ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} Movement Speed and immunity to slow effects.`,
          ru: `Атаки дают эффект Охотничьего фокуса. Увеличивает скорость передвижения на ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} и даёт иммунитет к замедлениям.`,
          br: `Ataques concedem Foco do Caçador. Aumenta a Velocidade de Movimento em ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} e concede imunidade a lentidão.`,
          fr: `Les attaques confèrent Focus du chasseur. Augmente la vitesse de déplacement de ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} et accorde une immunité aux ralentissements.`,
          zh: `攻擊會獲得獵人專注。提高 ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} 移動速度並免疫減速效果。`,
          cz: `Útoky dávají Lovecké soustředění. Zvyšuje rychlost pohybu o ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} a poskytuje imunitu vůči zpomalení.`,
          vi: `Đòn đánh cho hiệu ứng Tập Trung Thợ Săn. Tăng ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} tốc độ di chuyển và miễn nhiễm làm chậm.`,
          id: `Serangan memberikan Fokus Pemburu. Meningkatkan Movement Speed sebesar ${ItemAbilityData.HUNTERS_BOW_MOVE_SPEED_BONUS} dan memberikan kekebalan terhadap efek slow.`,
        },
      }
    /** Nowice staff */
    case ItemList.Burning_Rod: {
      const damageOverTime = fixed(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100, 1)
      return {
        name: {
          en: 'Burning Rod',
          ru: 'Пылающий жезл',
          br: 'Cajado Incandescente',
          fr: 'Baguette brûlante',
          zh: '燃燒法棒',
          cz: 'Hořící hůl',
          vi: 'Gộc Lửa',
          id: 'Tongkat Terbakar',
        },
        desc: {
          en: `Abilities apply burn that deals ${damageOverTime}% of max health as magical damage per second.`,
          ru: `Способности накладывают горение, наносящее ${damageOverTime}% от максимального здоровья в виде магического урона в секунду.`,
          br: `Suas habilidades aplicam queimadura que causa ${damageOverTime}% da vida máxima como dano mágico por segundo.`,
          fr: `Les compétences appliquent une brûlure infligeant ${damageOverTime}% des points de vie maximum en dégâts magiques par seconde.`,
          zh: `你的技能會施加燃燒效果，每秒造成相當於最大生命值 ${damageOverTime}% 的魔法傷害。`,
          cz: `Schopnosti aplikují hoření, které způsobuje ${damageOverTime} % maximálního zdraví jako magické poškození za sekundu.`,
          vi: `Kỹ năng gây hiệu ứng thiêu đốt, gây ${damageOverTime}% máu tối đa dưới dạng sát thương phép mỗi giây.`,
          id: `Kemampuan memberikan efek terbakar yang menyebabkan ${damageOverTime}% dari Health maksimum sebagai damage sihir per detik.`,
        },
      }
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
          vi: 'Gộc Hút Máu',
          id: 'Tongkat Vampir',
        },
        desc: {
          en: `Abilities deal ${leechValue} (+ ${leechMod}% Ability Power) bonus Magic Damage and heal for twice the amount.`,
          ru: `Способности наносят ${leechValue} (+ ${leechMod}% силы умений) дополнительного магического урона и восстанавливают здоровье в двойном размере.`,
          br: `Habilidades causam ${leechValue} (+ ${leechMod}% de Poder de Habilidade) de dano mágico bônus e curam o dobro do valor.`,
          fr: `Les compétences infligent ${leechValue} (+ ${leechMod}% de puissance des compétences) de dégâts magiques bonus et soignent du double du montant.`,
          zh: `技能造成 ${leechValue}（+ ${leechMod}% 技能強度）額外魔法傷害，並恢復兩倍數值的生命值。`,
          cz: `Schopnosti způsobují ${leechValue} (+ ${leechMod}% síly schopností) bonusového magického poškození a léčí za dvojnásobek.`,
          vi: `Kỹ năng gây ${leechValue} (+ ${leechMod}% sức mạnh kỹ năng) sát thương phép cộng thêm và hồi máu gấp đôi lượng đó.`,
          id: `Kemampuan memberikan ${leechValue} (+ ${leechMod}% Ability Power) bonus Magic Damage dan menyembuhkan dua kali jumlah tersebut.`,
        },
      }
    }
    case ItemList.Kirin_Staff: {
      const resistanceReduction = fixed(ItemAbilityData.KIRIN_STAFF_MAGIC_RESISTANCE_REDUCTION * 100, 1)
      return {
        name: {
          en: "Kirin's Staff",
          ru: 'Посох Кирина',
          br: 'Cajado de Kirin',
          fr: 'Bâton de Kirin',
          zh: '麒麟的法棍',
          cz: 'Kirinův hůl',
          vi: 'Gộc Kirin',
          id: 'Tongkat Kirin',
        },
        desc: {
          en: `Abilities reduce Magic Resistance by ${resistanceReduction}%.`,
          br: `Habilidades reduzem a Resistência Mágica em ${resistanceReduction}%.`,
          ru: `Способности снижают сопротивление магии на ${resistanceReduction}%.`,
          zh: `技能降低 ${resistanceReduction}% 魔法抗性。`,
          cz: `Schopnosti snižují magickou odolnost o ${resistanceReduction}%.`,
          fr: `Les compétences réduisent la résistance magique de ${resistanceReduction}%.`,
          vi: `Kỹ năng giảm ${resistanceReduction}% kháng phép.`,
          id: `Kemampuan mengurangi Magic Resistance sebesar ${resistanceReduction}%.`,
        },
      }
    }
    case ItemList.Corrupted_Staff: {
      const bonusAp = fixed(ItemAbilityData.CORRUPTED_STAFF_BONUS_AP * 100, 1)
      return {
        name: {
          en: 'Corrupted Staff',
          br: 'Cajado corrompido',
          ru: 'Искажённый посох',
          zh: '腐化法棍',
          cz: 'Zkreslený hůl',
          fr: 'Bâton corrompu',
          vi: 'Gộc Tà Đạo',
          id: 'Tongkat Tercemar',
        },
        desc: {
          en: `Increases Ability Power by ${bonusAp}%.`,
          br: `Aumenta o Poder de Habilidade em ${bonusAp}%.`,
          ru: `Повышает силу умений на ${bonusAp}%.`,
          zh: `增加 ${bonusAp}% 技能強度。`,
          cz: `Zvyšuje sílu schopností o ${bonusAp}%.`,
          fr: `Augmente la puissance des compétences de ${bonusAp}%.`,
          vi: `Tăng ${bonusAp}% sức mạnh kỹ năng.`,
          id: `Meningkatkan Ability Power sebesar ${bonusAp}%.`,
        },
      }
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
          vi: 'Gộc của Nữ Hoàng Băng Giá',
          id: 'Tongkat Ratu Beku',
        },
        desc: {
          en: `Abilities apply Magical Frost (max ${ItemAbilityData.FROZEN_STAFF_STACKS} stacks). At max stacks, applies Frigid Curse.\n\n${getFrigidCurseDescription()}`,
          ru: `Способности накладывают Магический холод (макс. ${ItemAbilityData.FROZEN_STAFF_STACKS} стаков). При максимуме накладывается Морозное проклятие.\n\n${getFrigidCurseDescription()}`,
          br: `Habilidades aplicam Gelo Mágico (máx. ${ItemAbilityData.FROZEN_STAFF_STACKS} acúmulos). No máximo, aplica Maldição Gélida.\n\n${getFrigidCurseDescription()}`,
          fr: `Les compétences appliquent Givre magique (max ${ItemAbilityData.FROZEN_STAFF_STACKS} cumuls). Au maximum, applique Malédiction glaciale.\n\n${getFrigidCurseDescription()}`,
          zh: `技能會施加魔法冰霜（最多 ${ItemAbilityData.FROZEN_STAFF_STACKS} 層）。達到最大層數時施加寒冷詛咒。\n\n${getFrigidCurseDescription()}`,
          cz: `Schopnosti aplikují Magický mráz (max ${ItemAbilityData.FROZEN_STAFF_STACKS} stacků). Při maximu aplikuje Zmrzlou kletbu.\n\n${getFrigidCurseDescription()}`,
          vi: `Kỹ năng gây Băng Giá Ma Thuật (tối đa ${ItemAbilityData.FROZEN_STAFF_STACKS} cộng dồn). Khi đạt tối đa, gây Lời Nguyền Lạnh Giá.\n\n${getFrigidCurseDescription()}`,
          id: `Kemampuan memberikan Es Magis (maks ${ItemAbilityData.FROZEN_STAFF_STACKS} tumpukan). Pada maksimum, memberikan Kutukan Dingin.\n\n${getFrigidCurseDescription()}`,
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
          vi: 'Gộc của Chiến Binh Sắt',
          id: 'Tongkat Prajurit Besi',
        },
        desc: { en: getIronRodDescription() },
      }
    case ItemList.Enchanted_Spear: {
      const executionThreshold = (ItemAbilityData.ENCHANTED_SPEAR_THRESHOLD * 100).toFixed(0) // Converte para porcentagem inteira
      return {
        name: {
          en: 'Enchanted Spear',
          ru: 'Зачарованное копьё',
          br: 'Lança Encantada',
          fr: 'Lance enchantée',
          zh: '魔法矛',
          cz: 'Okouzlené kopí',
          vi: 'Giáo Phép Thuật',
          id: 'Tombak Ajaib',
        },
        desc: {
          en:
            `Dealing magical damage instantly executes enemies below ${executionThreshold}% Health.\n\n` +
            getIronRodDescription(),
          ru:
            `Нанесение магического урона мгновенно казнит врагов с уровнем здоровья ниже ${executionThreshold}%.\n\n` +
            getIronRodDescription(),
          br:
            `Causar dano mágico executa instantaneamente inimigos abaixo de ${executionThreshold}% de Vida.\n\n` +
            getIronRodDescription(),
          fr:
            `Infliger des dégâts magiques exécute instantanément les ennemis en dessous de ${executionThreshold}% de santé.\n\n` +
            getIronRodDescription(),
          zh: `造成魔法傷害會立即處決生命值低於 ${executionThreshold}% 的敵人。\n\n` + getIronRodDescription(),
          cz:
            `Způsobení magického poškození okamžitě popraví nepřátele pod ${executionThreshold}% zdraví.\n\n` +
            getIronRodDescription(),
          vi:
            `Gây sát thương phép sẽ kết liễu ngay lập tức kẻ địch dưới ${executionThreshold}% Máu.\n\n` +
            getIronRodDescription(),
          id:
            `Memberikan damage sihir akan langsung mengeksekusi musuh di bawah ${executionThreshold}% Health.\n\n` +
            getIronRodDescription(),
        },
      }
    }
    case ItemList.Magic_Harpoon: {
      const movementSpeedSlow = ItemAbilityData.MAGICAL_HARPOON_SLOW
      const attackSpeedSlow = fixed(ItemAbilityData.MAGICAL_HARPOON_ATTACK_SPEED * 100, 1)

      return {
        name: {
          en: 'Magic Harpoon',
          ru: 'Волшебный гарпун',
          br: 'Arpão Mágico',
          fr: 'Harpon magique',
          zh: '魔法叉戟',
          cz: 'Magický harpun',
          vi: 'Lao Phép Thuật',
        },
        desc: {
          en:
            `Attacks while Enhanced apply ${movementSpeedSlow} Movement Speed slow and ${attackSpeedSlow}% Attack Speed reduction.\n\n` +
            getIronRodDescription(),
          ru:
            `Атаки во время усиления накладывают замедление скорости передвижения (${movementSpeedSlow}) и снижают скорость атаки на ${attackSpeedSlow}%.\n\n` +
            getIronRodDescription(),
          br:
            `Ataques enquanto aprimorado aplicam redução de Velocidade de Movimento (${movementSpeedSlow}) e reduzem a Velocidade de Ataque em ${attackSpeedSlow}%.\n\n` +
            getIronRodDescription(),
          fr:
            `Les attaques pendant l'effet amélioré appliquent un ralentissement de vitesse de déplacement (${movementSpeedSlow}) et réduisent la vitesse d'attaque de ${attackSpeedSlow}%.\n\n` +
            getIronRodDescription(),
          zh:
            `強化期間的攻擊會降低 ${movementSpeedSlow} 移動速度並降低 ${attackSpeedSlow}% 攻擊速度。\n\n` +
            getIronRodDescription(),
          cz:
            `Útoky během posílení snižují rychlost pohybu (${movementSpeedSlow}) a rychlost útoku o ${attackSpeedSlow}%.\n\n` +
            getIronRodDescription(),
          vi:
            `Đòn đánh khi được cường hóa sẽ giảm ${movementSpeedSlow} tốc độ di chuyển và giảm ${attackSpeedSlow}% tốc độ đánh.\n\n` +
            getIronRodDescription(),
        },
      }
    }
    case ItemList.Orchid_of_Malevolence: {
      const damagePerc = fixed(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100, 1)

      return {
        name: {
          en: 'Orchid of Malevolence',
          ru: 'Орхидея злобы',
          br: 'Cajado Orquídea da Malevolência',
          fr: 'Orchidée de Malveillance',
          zh: '惡毒蘭花',
          cz: 'Orchidej zloby',
          vi: 'Hoa Lan Ác Độc',
          id: 'Anggrek Kebencian',
        },
        desc: {
          en:
            `Fires a dark arrow that silences enemies.\n` +
            `After silence ends, deals ${damagePerc}% of damage taken during silence as Magic Damage.\n\n` +
            getIronRodDescription(),
          ru:
            `Выпускает тёмную стрелу, накладывающую немоту.\n` +
            `После окончания немоты наносит ${damagePerc}% полученного урона как дополнительный магический урон.\n\n` +
            getIronRodDescription(),
          br:
            `Dispara uma flecha sombria que silencia inimigos.\n` +
            `Após o fim do silêncio, causa ${damagePerc}% do dano recebido como dano mágico bônus.\n\n` +
            getIronRodDescription(),
          fr:
            `Tire une flèche sombre qui réduit au silence.\n` +
            `À la fin, inflige ${damagePerc}% des dégâts subis en dégâts magiques supplémentaires.\n\n` +
            getIronRodDescription(),
          zh:
            `發射暗影箭，使敵人沉默。\n` +
            `沉默結束後，造成期間內所受傷害 ${damagePerc}% 的額外魔法傷害。\n\n` +
            getIronRodDescription(),
          cz:
            `Vystřelí temný šíp, který umlčí nepřátele.\n` +
            `Po skončení umlčení způsobí ${damagePerc}% obdrženého poškození jako bonusové magické poškození.\n\n` +
            getIronRodDescription(),
          vi:
            `Bắn mũi tên bóng tối, gây câm lặng.\n` +
            `Sau khi kết thúc, gây ${damagePerc}% sát thương đã nhận dưới dạng sát thương phép.\n\n` +
            getIronRodDescription(),
          id:
            `Menembakkan panah gelap yang membisukan musuh.\n` +
            `Setelah efek berakhir, memberikan ${damagePerc}% dari damage yang diterima sebagai damage sihir tambahan.\n\n` +
            getIronRodDescription(),
        },
      }
    }
    case ItemList.Divine_Staff_T2: {
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
          vi: 'Gộc Thần Thánh',
          id: 'Tongkat Ilahi',
        },
        desc: {
          en: `Heals ${heal} Health and grants ${speed} Movement Speed to the carrier and nearby allies.`,
          ru: `Лечит на ${heal} здоровья и даёт ${speed} скорости передвижения владельцу и ближайшим союзникам.`,
          br: `Cura ${heal} de Vida e concede ${speed} de Velocidade de Movimento ao portador e aliados próximos.`,
          fr: `Soigne ${heal} Santé et accorde ${speed} Vitesse de déplacement au porteur et aux alliés proches.`,
          zh: `治療 ${heal} 生命值並為持有者和附近盟友提供 ${speed} 移動速度。`,
          cz: `Léčí ${heal} zdraví a poskytuje ${speed} rychlosti pohybu nositeli a blízkým spojencům.`,
          vi: `Hồi ${heal} máu và tăng ${speed} Tốc Độ Di Chuyển cho bản thân và đồng minh gần.`,
          id: `Memulihkan ${heal} Health dan memberikan ${speed} Movement Speed kepada pengguna dan sekutu di dekatnya.`,
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
          en: `Taking damage from an enemy hero that brings you below ${threshold}% Health increases Health Regeneration by ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Grants immunity to slow effects.`,
          ru: `Получение урона от вражеского героя, снижающего здоровье ниже ${threshold}%, увеличивает регенерацию здоровья на ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Даёт иммунитет к замедлениям.`,
          br: `Receber dano de um herói inimigo que reduz sua Vida abaixo de ${threshold}% aumenta a Regeneração de Vida em ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Concede imunidade a lentidão.`,
          fr: `Subir des dégâts d’un héros ennemi qui vous fait passer sous ${threshold}% de santé augmente la régénération de santé de ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Confère une immunité aux ralentissements.`,
          zh: `當受到敵方英雄傷害使生命值低於 ${threshold}% 時，提高 ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN} 生命恢復。免疫減速效果。`,
          cz: `Po obdržení poškození od nepřátelského hrdiny, které tě sníží pod ${threshold}% zdraví, zvýší regeneraci zdraví o ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Poskytuje imunitu vůči zpomalení.`,
          vi: `Khi nhận sát thương từ tướng địch khiến Máu giảm xuống dưới ${threshold}%, tăng hồi máu thêm ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Miễn nhiễm làm chậm.`,
          id: `Saat menerima damage dari hero musuh yang membuat Health turun di bawah ${threshold}%, meningkatkan Regenerasi Health sebesar ${ItemAbilityData.VAMPIRIC_SHIELD_HEALTH_REGEN}. Memberikan kekebalan terhadap efek slow.`,
        },
      }
    }

    case ItemList.Divine_Armor: {
      const damageReduction = fixed(ItemAbilityData.DIVINE_ARMOR_DAMAGE_REDUCTION * 100, 1)

      return {
        name: {
          en: 'Divine Armor',
          ru: 'Божественная броня',
          br: 'Armadura Divina',
          zh: '神聖鎧甲',
          cz: 'Božské brnění',
          fr: 'Armure Divine',
          vi: 'Giáp Thần Thánh',
          id: 'Baju Zirah Ilahi',
        },
        desc: {
          en: `Grants a holy shield to the carrier and nearby allies, reducing all damage taken by ${damageReduction}%.`,
          ru: `Даёт священный щит владельцу и ближайшим союзникам, снижая весь получаемый урон на ${damageReduction}%.`,
          br: `Concede um escudo sagrado ao portador e aos aliados próximos, reduzindo todo o dano recebido em ${damageReduction}%.`,
          fr: `Confère un bouclier sacré au porteur et aux alliés proches, réduisant tous les dégâts subis de ${damageReduction}%.`,
          zh: `為持有者和附近盟友賦予神聖護盾，使其所受所有傷害減少 ${damageReduction}%。`,
          cz: `Poskytuje svatý štít nositeli a blízkým spojencům, který snižuje veškeré přijaté poškození o ${damageReduction}%.`,
          vi: `Ban cho bản thân và đồng minh gần một lá chắn thần thánh, giảm ${damageReduction}% sát thương nhận vào.`,
          id: `Memberikan perisai suci kepada pengguna dan sekutu di dekatnya, mengurangi semua kerusakan yang diterima sebesar ${damageReduction}%.`,
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
          en: `Cleanses all negative effects from the carrier and nearby allies. Grants ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} Health Regeneration.`,
          ru: `Снимает все негативные эффекты с владельца и ближайших союзников. Даёт ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} регенерации здоровья.`,
          br: `Remove todos os efeitos negativos do portador e dos aliados próximos. Concede ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de Regeneração de Vida.`,
          zh: `清除持有者和附近盟友的所有負面效果。提供 ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} 生命恢復。`,
          cz: `Odstraňuje všechny negativní efekty z nositele a blízkých spojenců. Poskytuje ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regeneraci zdraví.`,
          fr: `Supprime tous les effets négatifs du porteur et des alliés proches. Accorde ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de régénération de santé.`,
          vi: `Loại bỏ tất cả hiệu ứng tiêu cực khỏi bản thân và đồng minh gần. Cung cấp ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} hồi máu.`,
          id: `Menghapus semua efek negatif dari pengguna dan sekutu di dekatnya. Memberikan ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regenerasi Health.`,
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
          en: `Aura: Grants ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic Resistance and ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Health Regeneration to the carrier and nearby allies.`,
          br: `Aura: Concede ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de Resistência Mágica e ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de Regeneração de Vida ao portador e aliados próximos.`,
          fr: `Aura : Accorde ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de résistance magique et ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de régénération de santé au porteur et aux alliés proches.`,
          zh: `光環：為持有者和附近的盟友提供 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} 魔法抗性和 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} 生命恢復。`,
          cz: `Aura: Poskytuje ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} odolnosti proti magii a ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} regenerace zdraví nositeli a blízkým spojencům.`,
          ru: `Аура: даёт ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} сопротивления магии и ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} регенерации здоровья владельцу и ближайшим союзникам.`,
          vi: `Hào quang: Cung cấp ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Kháng phép và ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Hồi máu cho bản thân và đồng minh gần.`,
          id: `Aura: Memberikan ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic Resistance dan ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Regenerasi Health kepada pengguna dan sekutu di dekatnya.`,
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
          en: `Taking damage reflects ${value}% of it back to the attacker as the same damage type.`,
          ru: `Получение урона отражает ${value}% обратно атакующему тем же типом урона.`,
          br: `Receber dano reflete ${value}% de volta ao atacante como o mesmo tipo de dano.`,
          fr: `Subir des dégâts en renvoie ${value}% à l'attaquant sous le même type de dégâts.`,
          zh: `受到傷害時，將 ${value}% 反射給攻擊者，且為相同傷害類型。`,
          cz: `Při obdržení poškození se ${value}% odrazí zpět na útočníka jako stejný typ poškození.`,
          vi: `Nhận sát thương sẽ phản lại ${value}% về kẻ tấn công với cùng loại sát thương.`,
          id: `Menerima damage memantulkan ${value}% kembali ke penyerang dengan jenis damage yang sama.`,
        },
      }
    }

    case ItemList.Garuns_Defender: {
      return {
        name: {
          en: "Garun's Defender",
          ru: 'Защитник Гаруна',
          br: 'Defensor de Garun',
          fr: 'Bouclier de Garun',
          zh: '加侖的守護者',
          cz: 'Garunův obránce',
          vi: 'Khiên Garun',
          id: 'Pertahanan Garun',
        },
        desc: {
          en: `Unleashes a shockwave after a short delay, dealing ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} Physical Damage and stunning nearby enemies.`,
          ru: `Выпускает ударную волну после короткой задержки, нанося ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} физического урона и оглушая ближайших врагов.`,
          br: `Libera uma onda de choque após um curto atraso, causando ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dano físico e atordoando inimigos próximos.`,
          fr: `Libère une onde de choc après un court délai, infligeant ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} dégâts physiques et étourdissant les ennemis proches.`,
          zh: `延遲後釋放衝擊波，造成 ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} 物理傷害並使附近敵人暈眩。`,
          cz: `Po krátké prodlevě uvolní šokovou vlnu, která způsobí ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} fyzického poškození a omráčí blízké nepřátele.`,
          vi: `Sau một khoảng trễ ngắn, phóng ra sóng xung kích gây ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} sát thương vật lý và làm choáng kẻ địch gần đó.`,
          id: `Melepaskan gelombang kejut setelah jeda singkat, memberikan ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} Physical Damage dan membuat musuh di sekitar terkena stun.`,
        },
      }
    }
    case ItemList.Plate_Shield: {
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
          en: `Release a shockwave that reveals enemies, deals ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Physical Damage, and reduces Movement Speed and Attack Speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}%.`,
          ru: `Выпускает ударную волну, которая раскрывает врагов, наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} физического урона и снижает скорость передвижения и атаки на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}%.`,
          br: `Libera uma onda de choque que revela inimigos, causa ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dano físico e reduz a Velocidade de Movimento e de Ataque em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}%.`,
          fr: `Libère une onde de choc qui révèle les ennemis, inflige ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dégâts physiques et réduit la vitesse de déplacement et d'attaque de ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}%.`,
          zh: `釋放衝擊波，揭露敵人，造成 ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} 物理傷害，並降低 ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}% 移動速度和攻擊速度。`,
          cz: `Uvolní šokovou vlnu, která odhalí nepřátele, způsobí ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} fyzického poškození a sníží rychlost pohybu a útoku o ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}%.`,
          vi: `Phóng sóng xung kích, phát hiện kẻ địch, gây ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} sát thương vật lý và giảm ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}% tốc độ di chuyển và tốc độ đánh.`,
          id: `Melepaskan gelombang kejut yang mengungkap musuh, memberikan ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Physical Damage dan mengurangi Movement Speed serta Attack Speed sebesar ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE}%.`,
        },
      }
    }
    case ItemList.Kirins_Defender: {
      return {
        name: {
          en: "Kirin's Defender",
          ru: 'Защитник Кирина',
          br: 'Defensor de Kirin',
          fr: 'Bouclier de Kirin',
          zh: '麒麟的守護者',
          cz: 'Kirinův obránce',
          vi: 'Khiên Kirin',
          id: 'Pertahanan Kirin',
        },
        desc: {
          en: `Blocks the next crowd control effect and grants immunity to crowd control.`,
          ru: `Блокирует следующий эффект контроля и даёт иммунитет к контролю.`,
          br: `Bloqueia o próximo efeito de controle de grupo e concede imunidade a controle.`,
          fr: `Bloque le prochain effet de contrôle et confère une immunité au contrôle.`,
          zh: `阻擋下一次控制效果並免疫控制。`,
          cz: `Blokuje další efekt kontroly a poskytuje imunitu vůči kontrole.`,
          vi: `Chặn hiệu ứng khống chế tiếp theo và miễn nhiễm khống chế.`,
          id: `Memblokir efek crowd control berikutnya dan memberikan kekebalan terhadap crowd control.`,
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
          vi: 'Quỷ Kiếm Sabre',
          id: 'Sabre Iblis',
        },
        desc: {
          en: `Basic Attacks apply Demonic Weakening, stacking up to ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} times. Each stack reduces Armor by ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}.`,
          ru: `Базовые атаки накладывают Демоническое ослабление, суммируется до ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} раз. Каждый эффект снижает броню на ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}.`,
          br: `Ataques básicos aplicam Enfraquecimento Demoníaco, acumulando até ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} vezes. Cada acúmulo reduz a Armadura em ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}.`,
          cz: `Základní útoky aplikují Démonické oslabení, které se může naskládat až ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS}×. Každý stack snižuje brnění o ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}.`,
          fr: `Les attaques de base appliquent Affaiblissement démoniaque, cumulable jusqu'à ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} fois. Chaque cumul réduit l'armure de ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}.`,
          zh: `普通攻擊會施加惡魔削弱效果，最多可疊加 ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} 層。每層降低 ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} 點護甲。`,
          vi: `Đòn đánh thường áp dụng hiệu ứng Suy Yếu Quỷ, cộng dồn tối đa ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} lần. Mỗi cộng dồn giảm ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} giáp.`,
          id: `Serangan dasar memberikan efek Pelemahan Iblis, dapat ditumpuk hingga ${ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS} kali. Setiap tumpukan mengurangi Armor sebesar ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION}.`,
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
          en:
            `Attacks reduce Armor by ${armorReduction}%.\n\n` +
            `Gain demonic power stacks on kills and assists (Minion +1, Hero +5, Assist +2), up to ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Each stack grants +${ItemAbilityData.DEMON_RING_STACK_DMG} Attack Damage (Max: ${maximumAD}).\n` +
            `Stacks are lost on death.`,

          ru:
            `Атаки снижают броню на ${armorReduction}%.\n\n` +
            `Получаете заряды демонической силы за убийства и ассисты (Миньон +1, Герой +5, Ассист +2), до ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Каждый заряд даёт +${ItemAbilityData.DEMON_RING_STACK_DMG} к силе атаки (Макс: ${maximumAD}).\n` +
            `Все заряды теряются при смерти.`,

          br:
            `Ataques reduzem a Armadura em ${armorReduction}%.\n\n` +
            `Ganhe acúmulos de poder demoníaco ao eliminar ou assistir (Minion +1, Herói +5, Assistência +2), até ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Cada acúmulo concede +${ItemAbilityData.DEMON_RING_STACK_DMG} de Dano de Ataque (Máx: ${maximumAD}).\n` +
            `Todos os acúmulos são perdidos ao morrer.`,

          fr:
            `Les attaques réduisent l'armure de ${armorReduction}%.\n\n` +
            `Gagne des charges de puissance démoniaque lors des éliminations et assistances (Sbire +1, Héros +5, Assistance +2), jusqu'à ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Chaque charge confère +${ItemAbilityData.DEMON_RING_STACK_DMG} dégâts d'attaque (Max : ${maximumAD}).\n` +
            `Les charges sont perdues à la mort.`,

          zh:
            `攻擊降低 ${armorReduction}% 護甲。\n\n` +
            `擊殺與助攻獲得惡魔之力層數（小兵 +1、英雄 +5、助攻 +2），最多 ${ItemAbilityData.DEMON_RING_MAX_STACKS} 層。\n` +
            `每層提供 +${ItemAbilityData.DEMON_RING_STACK_DMG} 攻擊傷害（最大 ${maximumAD}）。\n` +
            `死亡時失去所有層數。`,

          cz:
            `Útoky snižují brnění o ${armorReduction}%.\n\n` +
            `Získáš stacky démonické síly za zabití a asistence (Minion +1, Hrdina +5, Asistence +2), až do ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Každý stack dává +${ItemAbilityData.DEMON_RING_STACK_DMG} poškození útoku (Max: ${maximumAD}).\n` +
            `Stacky se ztratí při smrti.`,

          vi:
            `Đòn đánh giảm ${armorReduction}% Giáp.\n\n` +
            `Nhận cộng dồn sức mạnh quỷ khi hạ gục hoặc hỗ trợ (Lính +1, Tướng +5, Hỗ trợ +2), tối đa ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Mỗi cộng dồn tăng +${ItemAbilityData.DEMON_RING_STACK_DMG} Sát Thương Vật Lý (Tối đa: ${maximumAD}).\n` +
            `Mất toàn bộ cộng dồn khi chết.`,

          id:
            `Serangan mengurangi Armor sebesar ${armorReduction}%.\n\n` +
            `Dapatkan stack kekuatan iblis dari kill dan assist (Minion +1, Hero +5, Assist +2), hingga ${ItemAbilityData.DEMON_RING_MAX_STACKS}.\n` +
            `Setiap stack memberikan +${ItemAbilityData.DEMON_RING_STACK_DMG} Attack Damage (Maks: ${maximumAD}).\n` +
            `Semua stack hilang saat mati.`,
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
          en: `Dash forward on activation.\n\nPassive: Increases all healing by ${bonusHealing}%.`,
          ru: `При активации совершает рывок вперёд.\n\nПассивно: увеличивает всё исцеление на ${bonusHealing}%.`,
          br: `Avança para frente ao ativar.\n\nPassivo: Aumenta toda a cura em ${bonusHealing}%.`,
          cz: `Při aktivaci dash vpřed.\n\nPasivně: zvyšuje veškeré léčení o ${bonusHealing}%.`,
          zh: `激活時向前衝刺。\n\n被動：提高所有治療效果 ${bonusHealing}%。`,
          fr: `Fonce vers l'avant à l'activation.\n\nPassif : augmente tous les soins de ${bonusHealing}%.`,
          vi: `Lướt về phía trước khi kích hoạt.\n\nNội tại: Tăng tất cả hiệu quả hồi máu thêm ${bonusHealing}%.`,
          id: `Dash ke depan saat diaktifkan.\n\nPasif: Meningkatkan semua penyembuhan sebesar ${bonusHealing}%.`,
        },
      }
    }
    case ItemList.Frost_Ring: {
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
          en: `Release a freezing wave, dealing ${ItemAbilityData.FROST_RING_DAMAGE} Magic Damage.\n\nApplies Frigid Curse if the target is not affected.\nFreezes the target if already affected.`,
          ru: `Выпускает ледяную волну, наносящую ${ItemAbilityData.FROST_RING_DAMAGE} магического урона.\n\nНакладывает Морозное проклятие, если цель не под эффектом.\nЗамораживает цель, если эффект уже есть.`,
          br: `Libera uma onda congelante, causando ${ItemAbilityData.FROST_RING_DAMAGE} de dano mágico.\n\nAplica Maldição do Gelo se o alvo não estiver afetado.\nCongela o alvo se já estiver afetado.`,
          fr: `Libère une onde glaciale, inflige ${ItemAbilityData.FROST_RING_DAMAGE} dégâts magiques.\n\nApplique Malédiction glaciale si la cible n'est pas affectée.\nGèle la cible si elle est déjà affectée.`,
          zh: `釋放寒冰波動，造成 ${ItemAbilityData.FROST_RING_DAMAGE} 魔法傷害。\n\n若目標未受寒冷詛咒影響，則施加詛咒。\n若已受影響，則凍結目標。`,
          cz: `Uvolní mrazivou vlnu, která způsobí ${ItemAbilityData.FROST_RING_DAMAGE} magického poškození.\n\nAplikuje Zmrzlou kletbu, pokud cíl není ovlivněn.\nZmrazí cíl, pokud již ovlivněn je.`,
          vi: `Phóng sóng băng giá, gây ${ItemAbilityData.FROST_RING_DAMAGE} sát thương phép.\n\nÁp dụng Lời Nguyền Lạnh Giá nếu mục tiêu chưa bị ảnh hưởng.\nĐóng băng mục tiêu nếu đã bị ảnh hưởng.`,
          id: `Melepaskan gelombang beku, memberikan ${ItemAbilityData.FROST_RING_DAMAGE} Magic Damage.\n\nMemberikan Frigid Curse jika target belum terkena.\nMembekukan target jika sudah terkena.`,
        },
      }
    }

    case ItemList.Chronos_Ring: {
      const cdReduction = toSec(ItemAbilityData.CHRONOS_RING_CD_REDUCTION)
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
          en:
            `Abilities reduce all cooldowns by ${cdReduction}.\n\n` +
            `Kills or assists reset Ability cooldowns (does not affect Item cooldowns).`,
          br:
            `Habilidades reduzem todos os tempos de recarga em ${cdReduction}.\n\n` +
            `Eliminações ou assistências resetam o tempo de recarga das habilidades (não afeta itens).`,
          fr:
            `Les compétences réduisent tous les temps de recharge de ${cdReduction}.\n\n` +
            `Les éliminations ou assistances réinitialisent les temps de recharge des compétences (n'affecte pas les objets).`,
          zh: `技能使所有冷卻時間減少 ${cdReduction}。\n\n` + `擊殺或助攻會重置技能冷卻（不影響物品冷卻）。`,
          cz:
            `Schopnosti snižují všechny cooldowny o ${cdReduction}.\n\n` +
            `Zabití nebo asistence resetují cooldowny schopností (neovlivňuje předměty).`,
          ru:
            `Способности уменьшают перезарядку на ${cdReduction}.\n\n` +
            `Убийства или ассисты сбрасывают перезарядку способностей (не влияет на предметы).`,
          vi:
            `Kỹ năng giảm tất cả thời gian hồi chiêu ${cdReduction}.\n\n` +
            `Hạ gục hoặc hỗ trợ sẽ đặt lại hồi chiêu kỹ năng (không ảnh hưởng đến trang bị).`,
          id:
            `Kemampuan mengurangi semua cooldown sebesar ${cdReduction}.\n\n` +
            `Kill atau assist mereset cooldown Ability (tidak mempengaruhi Item).`,
        },
      }
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
          vi: 'Nhẫn Tà Đạo',
          id: 'Cincin Korup',
        },
        desc: getNimbleBowDescription(),
      }
    }
    case ItemList.Tenacity_Ring: {
      const tenacity = fixed(ItemAbilityData.TENACITY_RING_BONUS_TENACITY * 100, 0)
      return {
        name: {
          en: 'Tenacity Ring',
          ru: 'Кольцо стойкости',
          br: 'Anel da Tenacidade',
          zh: '韌性戒指',
          cz: 'Prsten odolnosti',
          fr: 'Anneau de ténacité',
          vi: 'Nhẫn Kháng Khống Chế',
          id: 'Cincin Kekuatan',
        },
        desc: {
          en: `Aura: Grants +${tenacity}% Tenacity and +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} Movement Speed to the carrier and nearby allies.`,
          ru: `Аура: даёт +${tenacity}% стойкости и +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} скорости передвижения владельцу и ближайшим союзникам.`,
          br: `Aura: Concede +${tenacity}% de Tenacidade e +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} de Velocidade de Movimento ao portador e aliados próximos.`,
          zh: `光環：為持有者和附近盟友提供 +${tenacity}% 韌性和 +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} 移動速度。`,
          cz: `Aura: Poskytuje +${tenacity}% houževnatosti a +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} rychlosti pohybu nositeli a blízkým spojencům.`,
          fr: `Aura : Accorde +${tenacity}% de ténacité et +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} de vitesse de déplacement au porteur et aux alliés proches.`,
          vi: `Hào quang: Cung cấp +${tenacity}% kháng khống chế và +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} tốc độ di chuyển cho bản thân và đồng minh gần.`,
          id: `Aura: Memberikan +${tenacity}% Tenacity dan +${ItemAbilityData.TENACITY_RING_BONUS_MOVESPEED} Movement Speed kepada pengguna dan sekutu di dekatnya.`,
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
          vi: 'Giáp của Hoàng Đế Băng Giá',
          id: 'Baju Zirah Kaisar Beku',
        },
        desc: {
          en: `Aura: Reduces Attack Speed of nearby enemies by ${attackSpeedReduction}% and reduces healing, regeneration, and lifesteal effects by ${reduction}%.`,
          ru: `Аура: снижает скорость атаки ближайших врагов на ${attackSpeedReduction}% и уменьшает эффекты лечения, регенерации и вампиризма на ${reduction}%.`,
          br: `Aura: Reduz a Velocidade de Ataque dos inimigos próximos em ${attackSpeedReduction}% e reduz os efeitos de cura, regeneração e roubo de vida em ${reduction}%.`,
          fr: `Aura : réduit la vitesse d'attaque des ennemis proches de ${attackSpeedReduction}% et réduit les effets de soins, régénération et vol de vie de ${reduction}%.`,
          zh: `光環：降低附近敵人的攻擊速度 ${attackSpeedReduction}% 並降低治療、生命恢復與吸血效果 ${reduction}%。`,
          cz: `Aura: Snižuje rychlost útoku blízkých nepřátel o ${attackSpeedReduction}% a snižuje účinnost léčení, regenerace a lifestealu o ${reduction}%.`,
          vi: `Hào quang: Giảm Tốc Độ Đánh của kẻ địch gần đó ${attackSpeedReduction}% và giảm hiệu quả hồi máu, hồi phục và hút máu ${reduction}%.`,
          id: `Aura: Mengurangi Attack Speed musuh di sekitar sebesar ${attackSpeedReduction}% dan mengurangi efek penyembuhan, regenerasi, dan lifesteal sebesar ${reduction}%.`,
        },
      }
    }

    case ItemList.Void_Armor: {
      return {
        name: {
          en: 'Void Armor',
          ru: 'Броня пустоты',
          br: 'Armadura do Abismo',
          zh: '虛空鎧甲',
          cz: 'Prázdnotové brnění',
          fr: 'Armure du vide',
          vi: 'Giáp Hư Vô',
          id: 'Baju Zirah Void',
        },
        desc: {
          en: `Grants invisibility and +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Movement Speed.\n\nCasting an Ability or attacking breaks invisibility and removes the Movement Speed bonus, granting +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Attack Damage.`,
          ru: `Даёт невидимость и +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} к скорости передвижения.\n\nПрименение способности или атака снимает невидимость и бонус скорости передвижения, давая +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} силы атаки.`,
          br: `Concede invisibilidade e +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} de Velocidade de Movimento.\n\nUsar habilidades ou atacar remove a invisibilidade e o bônus de velocidade, concedendo +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} de Dano de Ataque.`,
          fr: `Confère l'invisibilité et +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} de vitesse de déplacement.\n\nLancer une capacité ou attaquer supprime l'invisibilité et le bonus de vitesse, accordant +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} de dégâts d'attaque.`,
          zh: `獲得隱身並提高 ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} 移動速度。\n\n施放技能或攻擊會解除隱身並移除移動速度加成，並獲得 ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} 攻擊力。`,
          cz: `Získáš neviditelnost a +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} rychlosti pohybu.\n\nPoužití schopnosti nebo útok zruší neviditelnost a bonus rychlosti pohybu a poskytne +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} poškození útoku.`,
          vi: `Nhận trạng thái tàng hình và +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Tốc Độ Di Chuyển.\n\nDùng kỹ năng hoặc tấn công sẽ hủy tàng hình và tốc độ di chuyển, đồng thời nhận +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Sát Thương Tấn Công.`,
          id: `Memberikan invisibilitas dan +${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} Kecepatan Gerak.\n\nMenggunakan kemampuan atau menyerang akan menghilangkan invisibilitas dan bonus kecepatan, serta memberikan +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Damage.`,
        },
      }
    }

    case ItemList.Vampiric_Armor: {
      const value = fixed(ItemAbilityData.VAMPIRIC_ARMOR_ABSORPTION * 100, 1)

      return {
        name: {
          en: 'Vampiric Armor',
          ru: 'Вампирическая броня',
          br: 'Armadura Vampírica',
          fr: 'Armure vampirique',
          zh: '吸血護甲',
          cz: 'Vampírní zbroj',
          vi: 'Giáp Ma Cà Rồng',
          id: 'Perisai Vampir',
        },
        desc: {
          en: `Upon activation, cleanse all negative effects and for the duration restore ${value}% of damage dealt as Health.`,
          ru: `При активации снимает все негативные эффекты и на время эффекта восстанавливает ${value}% от нанесённого урона в виде здоровья.`,
          br: `Ao ativar, remove todos os efeitos negativos e durante o efeito restaura ${value}% do dano causado como Vida.`,
          fr: `À l'activation, supprime tous les effets négatifs et pendant la durée restaure ${value}% des dégâts infligés sous forme de santé.`,
          zh: `啟動時清除所有負面效果，並在持續期間將造成傷害的 ${value}% 轉化為生命值。`,
          cz: `Po aktivaci odstraní všechny negativní efekty a po dobu efektu obnovuje ${value}% způsobeného poškození jako zdraví.`,
          vi: `Khi kích hoạt, loại bỏ tất cả hiệu ứng xấu và trong thời gian hiệu lực hồi lại ${value}% sát thương gây ra thành Máu.`,
          id: `Saat diaktifkan, menghapus semua efek negatif dan selama durasi memulihkan ${value}% dari damage yang diberikan sebagai Health.`,
        },
      }
    }

    case ItemList.Titans_Armor: {
      return {
        name: {
          en: "Titan's Armor",
          ru: 'Броня титана',
          br: 'Armadura do Titan',
          zh: '泰坦的鎧甲',
          cz: 'Titánovo brnění',
          fr: 'Armure du titan',
          vi: 'Giáp của Khổng Lồ',
          id: 'Baju Zirah Titan',
        },
        desc: {
          en:
            `Become immune to all damage and cleanse all negative effects.\n\n` +
            `Gain +${ItemAbilityData.TITAN_ARMOR_REGENERATION} Health Regeneration.\n\n` +
            `Cannot move or use Abilities, Attacks, or Items during the effect.`,
          ru:
            `Становитесь неуязвимы и снимаете все негативные эффекты.\n\n` +
            `Получаете +${ItemAbilityData.TITAN_ARMOR_REGENERATION} регенерации здоровья.\n\n` +
            `Не можете двигаться или использовать способности, атаки и предметы во время действия.`,

          br:
            `Torna-se imune a todo dano e remove todos os efeitos negativos.\n\n` +
            `Ganha +${ItemAbilityData.TITAN_ARMOR_REGENERATION} de Regeneração de Vida.\n\n` +
            `Não pode se mover ou usar Habilidades, Ataques ou Itens durante o efeito.`,

          fr:
            `Devient immunisé à tous les dégâts et supprime tous les effets négatifs.\n\n` +
            `Gagne +${ItemAbilityData.TITAN_ARMOR_REGENERATION} de régénération de santé.\n\n` +
            `Ne peut pas bouger ni utiliser des capacités, attaques ou objets pendant l'effet.`,

          zh:
            `免疫所有傷害並移除所有負面效果。\n\n` +
            `獲得 +${ItemAbilityData.TITAN_ARMOR_REGENERATION} 生命恢復。\n\n` +
            `效果期間無法移動或使用技能、攻擊或道具。`,

          cz:
            `Staneš se imunní vůči veškerému poškození a odstraníš všechny negativní efekty.\n\n` +
            `Získáš +${ItemAbilityData.TITAN_ARMOR_REGENERATION} regenerace zdraví.\n\n` +
            `Během efektu se nemůžeš pohybovat ani používat schopnosti, útoky ani předměty.`,

          vi:
            `Miễn nhiễm mọi sát thương và loại bỏ tất cả hiệu ứng xấu.\n\n` +
            `Nhận +${ItemAbilityData.TITAN_ARMOR_REGENERATION} Hồi Máu.\n\n` +
            `Không thể di chuyển hoặc sử dụng Kỹ năng, Đòn đánh hay Trang bị trong thời gian hiệu lực.`,

          id:
            `Menjadi kebal terhadap semua kerusakan dan menghapus semua efek negatif.\n\n` +
            `Mendapatkan +${ItemAbilityData.TITAN_ARMOR_REGENERATION} Regenerasi Health.\n\n` +
            `Tidak dapat bergerak atau menggunakan Kemampuan, Serangan, atau Item selama efek.`,
        },
      }
    }
    case ItemList.Chest_Of_Malevolence: {
      const apReduction = fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_AP * 100, 1)

      return {
        name: {
          en: 'Chest of Malevolence',
          br: 'Armadura da Malevolência',
          ru: 'Нагрудник злобы',
          zh: '惡毒胸甲',
          cz: 'Přilba zla',
          fr: 'Plastron de malveillance',
          vi: 'Áo Giáp Ác Độc',
          id: 'Baju Zirah Keburukan',
        },
        desc: {
          en: `Taking Magic Damage applies a stack of Magic Curse to the enemy, up to ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nEach stack reduces Movement Speed by ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} and Ability Power by ${apReduction}%.`,
          ru: `Получение магического урона накладывает заряд Магического проклятия на врага, до ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nКаждый заряд снижает скорость передвижения на ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} и силу умений на ${apReduction}%.`,
          br: `Receber Dano Mágico aplica um acúmulo de Maldição Mágica ao inimigo, até ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nCada acúmulo reduz a Velocidade de Movimento em ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} e o Poder de Habilidade em ${apReduction}%.`,
          fr: `Subir des dégâts magiques applique une charge de Malédiction magique à l'ennemi, jusqu'à ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nChaque charge réduit la vitesse de déplacement de ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} et la puissance des compétences de ${apReduction}%.`,
          zh: `受到魔法傷害時，對敵人施加一層魔法詛咒，最多 ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS} 層。\n每層降低移動速度 ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} 並降低技能威力 ${apReduction}%。`,
          cz: `Přijetí magického poškození aplikuje stack Magické kletby na nepřítele, až do ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nKaždý stack snižuje rychlost pohybu o ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} a sílu schopností o ${apReduction}%.`,
          vi: `Nhận Sát Thương Phép sẽ áp dụng một cộng dồn Lời Nguyền Ma Thuật lên kẻ địch, tối đa ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nMỗi cộng dồn giảm Tốc Độ Di Chuyển ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} và Sát Thương Phép ${apReduction}%.`,
          id: `Menerima Kerusakan Sihir memberikan satu tumpukan Kutukan Sihir kepada musuh, hingga ${ItemAbilityData.CHEST_OF_MALEVOLENCE_MAX_STACKS}.\nSetiap tumpukan mengurangi Kecepatan Gerak sebesar ${ItemAbilityData.CHEST_OF_MALEVOLENCE_REDUCE_MS} dan Ability Power sebesar ${apReduction}%.`,
        },
      }
    }
    /** Consumables */
    case ItemList.Healing_Potion: {
      return {
        name: {
          en: 'Healing Potion',
          ru: 'Исцеляющее зелье',
          br: 'Poção das fadas',
          zh: '治癒藥水',
          cz: 'Léčivé lektvary',
          fr: 'Potion de soin',
          vi: 'Bình Máu',
          id: 'Potion Penyembuh',
        },
        desc: {
          en: `Consume a healing potion. Increases Health Regeneration by ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Effect is lost when taking damage.`,
          ru: `Выпейте зелье лечения. Увеличивает регенерацию здоровья на ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Эффект пропадает при получении урона.`,
          br: `Consuma uma poção de cura. Aumenta a Regeneração de Vida em ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. O efeito é perdido ao receber dano.`,
          zh: `飲用治療藥水。提高 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} 生命恢復。受到傷害時效果消失。`,
          cz: `Vypij léčivý lektvar. Zvyšuje regeneraci zdraví o ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Efekt se ztratí při obdržení poškození.`,
          fr: `Consomme une potion de soin. Augmente la régénération de santé de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. L'effet est perdu en cas de dégâts.`,
          vi: `Uống bình hồi máu. Tăng hồi phục ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Hiệu ứng mất khi nhận sát thương.`,
          id: `Minum ramuan penyembuhan. Meningkatkan Regenerasi Kesehatan sebesar ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Efek hilang saat menerima damage.`,
        },
      }
    }

    case ItemList.Vile_Flask: {
      return {
        name: {
          en: 'Vile Flask',
          ru: 'Мерзкая склянка',
          br: 'Frasco de veneno',
          zh: '惡毒瓶',
          cz: 'Ohavná láhev',
          fr: 'Flasque vile',
          vi: 'Bom Độc',
          id: 'Botol Beracun',
        },
        desc: {
          en: `Throw a Vile Flask that explodes on impact. Affected enemies are slowed by ${ItemAbilityData.VILE_FLASK_SLOW} and take ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} damage per second.`,
          ru: `Бросает мерзкую склянку, которая взрывается при падении. Задетые враги замедляются на ${ItemAbilityData.VILE_FLASK_SLOW} и получают ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} урона в секунду.`,
          br: `Arremessa um Frasco Vile que explode ao atingir o chão. Inimigos afetados são desacelerados em ${ItemAbilityData.VILE_FLASK_SLOW} e recebem ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} de dano por segundo.`,
          zh: `投擲惡毒瓶，落地時爆炸。受影響的敵人被減速 ${ItemAbilityData.VILE_FLASK_SLOW}，並每秒受到 ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} 傷害。`,
          cz: `Hodí Ohavnou láhev, která exploduje při dopadu. Zasažení nepřátelé jsou zpomaleni o ${ItemAbilityData.VILE_FLASK_SLOW} a utrpí ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} poškození za sekundu.`,
          fr: `Lance une flasque vile qui explose à l'impact. Les ennemis affectés sont ralentis de ${ItemAbilityData.VILE_FLASK_SLOW} et subissent ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} dégâts par seconde.`,
          vi: `Ném Bom Độc phát nổ khi chạm đất. Kẻ địch bị ảnh hưởng bị giảm ${ItemAbilityData.VILE_FLASK_SLOW} tốc độ di chuyển và nhận ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} sát thương mỗi giây.`,
          id: `Melempar Botol Beracun yang meledak saat menyentuh tanah. Musuh yang terkena diperlambat sebesar ${ItemAbilityData.VILE_FLASK_SLOW} dan menerima ${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} damage per detik.`,
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
          vi: 'Mắt Xăm Soi',
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
          en: `Consume a magical potion. Grants a permanent stack (max 5). Each stack increases Ability Power by ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
          ru: `Выпейте магическое зелье. Даёт постоянный эффект (макс. 5). Каждый эффект увеличивает силу умений на ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
          br: `Consuma uma poção mágica. Concede um acúmulo permanente (máx. 5). Cada acúmulo aumenta o Poder de Habilidade em ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
          zh: `飲用魔法藥水。獲得永久層數（最多 5 層）。每層增加 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} 技能強度。`,
          cz: `Vypij magický lektvar. Získáš trvalý stack (max 5). Každý stack zvyšuje sílu schopností o ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
          fr: `Consomme une potion magique. Accorde un cumul permanent (max 5). Chaque cumul augmente la puissance des compétences de ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
          vi: `Uống bình thuốc phép. Nhận cộng dồn vĩnh viễn (tối đa 5). Mỗi cộng dồn tăng sức mạnh kỹ năng thêm ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
          id: `Minum ramuan sihir. Memberikan tumpukan permanen (maks 5). Setiap tumpukan meningkatkan Ability Power sebesar ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}.`,
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
          en: `Consume a corrupted potion. Grants a permanent stack (max 5). Each stack increases Attack Damage by ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
          ru: `Выпейте искажённое зелье. Даёт постоянный эффект (макс. 5). Каждый эффект увеличивает силу атаки на ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
          br: `Consuma uma poção corrompida. Concede um acúmulo permanente (máx. 5). Cada acúmulo aumenta o Dano de Ataque em ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
          zh: `飲用腐化藥水。獲得永久層數（最多 5 層）。每層增加 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} 攻擊傷害。`,
          cz: `Vypij zkažený lektvar. Získáš trvalý stack (max 5). Každý stack zvyšuje poškození útoku o ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
          fr: `Consomme une potion corrompue. Accorde un cumul permanent (max 5). Chaque cumul augmente les dégâts d'attaque de ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
          vi: `Uống bình thuốc bị biến chất. Nhận cộng dồn vĩnh viễn (tối đa 5). Mỗi cộng dồn tăng sát thương đòn đánh thêm ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
          id: `Minum ramuan terkorupsi. Memberikan tumpukan permanen (maks 5). Setiap tumpukan meningkatkan Attack Damage sebesar ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}.`,
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
          en: `Attacks apply Kirin's Poison (max ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} stacks). At max stacks, it explodes, reducing Magic Resistance by ${magicResistanceReduction} and dealing ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} magical damage to nearby enemies. Applies maximum Poison stacks.\n\n${getPoisonBowDescription(false)}`,
          zh: `攻擊會施加麒麟之毒（最多 ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} 層）。達到最大層數時會爆炸，降低 ${magicResistanceReduction} 魔法抗性並對附近敵人造成 ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} 點魔法傷害，並施加最大中毒層數。\n\n${getPoisonBowDescription(true)}`,
          cz: `Útoky aplikují Kirinův jed (max ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} stacků). Při maximálním počtu stacků exploduje, sníží magickou odolnost o ${magicResistanceReduction} a způsobí ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} magického poškození blízkým nepřátelům. Aplikuje maximální počet stacků jedu.\n\n${getPoisonBowDescription(false)}`,
          fr: `Les attaques appliquent Poison du Kirin (max ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} cumuls). Au maximum, il explose, réduit la résistance magique de ${magicResistanceReduction} et inflige ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} dégâts magiques aux ennemis proches. Applique le maximum de cumuls.\n\n${getPoisonBowDescription(false)}`,
          br: `Ataques aplicam Veneno do Kirin (máx. ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} acúmulos). No máximo, ele explode, reduz a resistência mágica em ${magicResistanceReduction} e causa ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} de dano mágico aos inimigos próximos. Aplica o máximo de acúmulos.\n\n${getPoisonBowDescription(false)}`,
          ru: `Атаки накладывают яд Кирина (макс. ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} стаков). При максимуме взрывается, снижает магическое сопротивление на ${magicResistanceReduction} и наносит ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} магического урона ближайшим врагам. Накладывает максимальное количество стаков.\n\n${getPoisonBowDescription(false)}`,
          vi: `Đòn đánh gây hiệu ứng Độc Kirin (tối đa ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} cộng dồn). Khi đạt tối đa, phát nổ, giảm ${magicResistanceReduction} kháng phép và gây ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} sát thương phép lên kẻ địch gần đó. Áp dụng tối đa cộng dồn độc.\n\n${getPoisonBowDescription(false)}`,
          id: `Serangan memberikan Racun Kirin (maks ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} tumpukan). Pada maksimum, akan meledak, mengurangi Magic Resistance sebesar ${magicResistanceReduction} dan memberikan ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} damage sihir ke musuh di sekitar. Memberikan tumpukan maksimum.\n\n${getPoisonBowDescription(false)}`,
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
          vi: 'Bùa Garun',
          id: 'Pesona Garun',
        },
        desc: {
          en:
            `Every ${cooldown}, gain a stack of Garun's Protection, up to ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Taking Normal Damage removes a stack.\n` +
            `Each stack grants +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Armor.\n\n` +
            `Aura: Grants +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor to the carrier and nearby allies.`,
          ru:
            `Каждые ${cooldown} даёт заряд Защиты Гаруна, до ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Получение обычного урона снимает заряд.\n` +
            `Каждый заряд даёт +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} брони.\n\n` +
            `Аура: даёт +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} брони владельцу и ближайшим союзникам.`,

          br:
            `A cada ${cooldown}, ganha um acúmulo de Proteção de Garun, até ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Receber Dano Normal remove um acúmulo.\n` +
            `Cada acúmulo concede +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} de Armadura.\n\n` +
            `Aura: Concede +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} de Armadura ao portador e aliados próximos.`,

          fr:
            `Toutes les ${cooldown}, gagne une charge de Protection de Garun, jusqu'à ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Subir des dégâts normaux retire une charge.\n` +
            `Chaque charge confère +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} d'armure.\n\n` +
            `Aura : accorde +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} d'armure au porteur et aux alliés proches.`,

          zh:
            `每 ${cooldown} 獲得一層加侖守護，最多 ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} 層。\n` +
            `受到普通傷害會移除一層。\n` +
            `每層提供 +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} 護甲。\n\n` +
            `光環：為持有者和附近盟友提供 +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} 護甲。`,

          cz:
            `Každých ${cooldown} získáš stack Garunovy ochrany, až do ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Přijetí normálního poškození odebere stack.\n` +
            `Každý stack dává +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} brnění.\n\n` +
            `Aura: Dává +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} brnění nositeli a blízkým spojencům.`,

          vi:
            `Mỗi ${cooldown} nhận một cộng dồn Bảo Vệ Garun, tối đa ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Nhận Sát Thương Thường sẽ mất một cộng dồn.\n` +
            `Mỗi cộng dồn tăng +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Giáp.\n\n` +
            `Hào quang: Cung cấp +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Giáp cho bản thân và đồng minh gần.`,

          id:
            `Setiap ${cooldown}, mendapatkan stack Perlindungan Garun hingga ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\n` +
            `Menerima Kerusakan Normal menghapus satu stack.\n` +
            `Setiap stack memberikan +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Armor.\n\n` +
            `Aura: Memberikan +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor kepada pengguna dan sekutu di dekatnya.`,
        },
      }
    }
    case ItemList.Wizard_Charm: {
      const percDmg = fixed(ItemAbilityData.WIZARD_CHARM_PERC_DMG * 100, 1)

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
          en: `Abilities deal ${percDmg}% of the enemy's Max Health as bonus Magic Damage.\n\nApply Wizard's Curse, preventing healing and regeneration.`,
          br: `Habilidades causam ${percDmg}% da Vida Máxima do inimigo como dano mágico bônus.\n\nAplicam Maldição do Mago, impedindo cura e regeneração.`,
          fr: `Les compétences infligent ${percDmg}% de la santé maximale de l'ennemi en dégâts magiques bonus.\n\nAppliquent Malédiction du Sorcier, empêchant les soins et la régénération.`,
          zh: `技能造成敵人最大生命值的 ${percDmg}% 額外魔法傷害。\n\n施加巫師詛咒，阻止治療與生命恢復。`,
          cz: `Schopnosti způsobují ${percDmg}% maximálního zdraví nepřítele jako bonusové magické poškození.\n\nAplikují Kletbu Kouzelníka, která zabrání léčení a regeneraci.`,
          ru: `Способности наносят ${percDmg}% от максимального здоровья врага в виде дополнительного магического урона.\n\nНакладывают Проклятие Волшебника, запрещающее лечение и регенерацию.`,
          vi: `Kỹ năng gây ${percDmg}% máu tối đa của kẻ địch dưới dạng sát thương phép bổ sung.\n\nÁp dụng Lời Nguyền Phù Thủy, ngăn hồi máu và hồi phục.`,
          id: `Kemampuan memberikan ${percDmg}% dari Health maksimum musuh sebagai bonus Magic Damage.\n\nMenerapkan Kutukan Penyihir, mencegah penyembuhan dan regenerasi.`,
        },
      }
    }

    case ItemList.Corrupted_Locket: {
      const cooldown = toSec(ItemAbilityData.CORRUPTED_LOCKET_COOLDOWN)
      return {
        name: {
          en: 'Corrupted Locket',
          br: 'Colar Corrompido',
          fr: 'Collier Corrompu',
          zh: '腐化墜飾',
          cz: 'Zkorumpovaný náhrdelník',
          ru: 'Искажённый медальон',
          vi: 'Huy Hiệu Tà Đạo',
          id: 'Locket Korup',
        },
        desc: {
          en: `Every ${cooldown}, gain a stack of Corrupted Blessing, causing the next Attack to critically strike. Stacks up to 2 times.`,
          br: `A cada ${cooldown}, ganha um acúmulo de Bênção Corrompida, fazendo com que o próximo ataque seja crítico. Acumula até 2 vezes.`,
          fr: `Toutes les ${cooldown}, gagne une charge de Bénédiction corrompue, faisant que la prochaine attaque est un coup critique. Cumulable jusqu'à 2 fois.`,
          zh: `每 ${cooldown} 獲得一層腐化祝福，使下一次攻擊造成暴擊。最多可疊加 2 層。`,
          cz: `Každých ${cooldown} získáš stack Zkaženého požehnání, který způsobí, že další útok bude kritický zásah. Lze naskládat až 2krát.`,
          ru: `Каждые ${cooldown} даёт заряд Искажённого благословения, делая следующую атаку критической. Складывается до 2 раз.`,
          vi: `Mỗi ${cooldown} nhận một cộng dồn Phước Lành Tha Hóa, khiến đòn đánh tiếp theo gây chí mạng. Cộng dồn tối đa 2 lần.`,
          id: `Setiap ${cooldown} mendapatkan tumpukan Berkat Tercemar, membuat serangan berikutnya menjadi serangan kritis. Maksimal 2 tumpukan.`,
        },
      }
    }

    case ItemList.Molten_Shield: {
      const damageOverTimePercent = fixed(ItemAbilityData.MOLTEN_SHIELD_DAMAGE_OVER_TIME_PERC * 100, 2)
      const resistanceReduction = fixed(ItemAbilityData.MOLTEN_SHIELD_MAGIC_RESISTANCE_REDUCTION * 100, 2)
      const baseDamage = ItemAbilityData.MOLTEN_SHIELD_BASE_DAMAGE
      return {
        name: {
          en: 'Molten Shield',
          ru: 'Огненный щит',
          br: 'Escudo Derretido',
          cz: 'Tavený štít',
          zh: '炽热之盾',
          fr: 'Bouclier en fusion',
          vi: 'Khiên Dung Nham',
          id: 'Perisai Meleleh',
        },
        desc: {
          en: `Unleashes a molten explosion, dealing ${baseDamage} + ${damageOverTimePercent}% of maximum Health as magical damage to nearby enemies and reducing Magic Resistance by ${resistanceReduction}%.`,
          ru: `Выпускает взрыв расплавленного металла, нанося ${baseDamage} + ${damageOverTimePercent}% от максимального здоровья в виде магического урона ближайшим врагам и снижая магическое сопротивление на ${resistanceReduction}%.`,
          br: `Libera uma explosão fundida, causando ${baseDamage} + ${damageOverTimePercent}% da Vida máxima como dano mágico aos inimigos próximos e reduzindo a Resistência Mágica em ${resistanceReduction}%.`,
          cz: `Uvolní explozi roztaveného kovu, která způsobí ${baseDamage} + ${damageOverTimePercent}% maximálního zdraví jako magické poškození blízkým nepřátelům a sníží magickou odolnost o ${resistanceReduction}%.`,
          zh: `釋放熔岩爆炸，對附近敵人造成 ${baseDamage} + ${damageOverTimePercent}% 最大生命值的魔法傷害，並降低 ${resistanceReduction}% 魔法抗性。`,
          fr: `Libère une explosion en fusion, inflige ${baseDamage} + ${damageOverTimePercent}% de la santé maximale en dégâts magiques aux ennemis proches et réduit la résistance magique de ${resistanceReduction}%.`,
          vi: `Phóng ra vụ nổ nóng chảy, gây ${baseDamage} + ${damageOverTimePercent}% Máu tối đa dưới dạng sát thương phép lên kẻ địch gần đó và giảm ${resistanceReduction}% kháng phép.`,
          id: `Melepaskan ledakan cair, memberikan ${baseDamage} + ${damageOverTimePercent}% dari Health maksimum sebagai damage sihir ke musuh di sekitar dan mengurangi Magic Resistance sebesar ${resistanceReduction}%.`,
        },
      }
    }

    case ItemList.Kirins_Shield: {
      const healthThreshold = fixed(ItemAbilityData.KIRINS_SHIELD_DAMAGE_TREHSHOLD * 100, 2)

      return {
        name: {
          en: "Kirin's Shield",
          ru: 'Щит Кирина',
          br: 'Escudo de Kirin',
          cz: 'Kirinův štít',
          zh: '麒麟之盾',
          fr: 'Bouclier de Kirin',
          vi: 'Khiên của Kirin',
          id: 'Perisai Kirin',
        },
        desc: {
          en: `Damage from an enemy hero that exceeds ${healthThreshold}% of your current Health is negated.`,
          ru: `Урон от вражеского героя, превышающий ${healthThreshold}% от текущего здоровья, полностью блокируется.`,
          br: `Dano de um herói inimigo que excede ${healthThreshold}% da sua Vida atual é totalmente negado.`,
          fr: `Les dégâts d’un héros ennemi dépassant ${healthThreshold}% de votre santé actuelle sont entièrement annulés.`,
          zh: `來自敵方英雄且超過當前生命值 ${healthThreshold}% 的傷害會被完全抵消。`,
          cz: `Poškození od nepřátelského hrdiny, které přesáhne ${healthThreshold}% tvého aktuálního zdraví, je zcela zrušeno.`,
          vi: `Sát thương từ tướng địch vượt quá ${healthThreshold}% Máu hiện tại sẽ bị chặn hoàn toàn.`,
          id: `Kerusakan dari hero musuh yang melebihi ${healthThreshold}% dari Health saat ini akan sepenuhnya dinegasikan.`,
        },
      }
    }

    case ItemList.Void_Sword: {
      const movespeed = ItemAbilityData.VOID_SWORD_MOVESPEED
      const attackspeed = ItemAbilityData.VOID_SWORD_ATTACKSPEED

      return {
        name: {
          en: 'Void Sword',
          ru: 'Меч Пустоты',
          br: 'Espada do Vazio',
          cz: 'Meč prázdnoty',
          zh: '虚空之剑',
          fr: 'Épée du Néant',
          vi: 'Kiếm Hư Vô',
          id: 'Pedang Void',
        },
        desc: {
          en: `Drops a sword that follows the carrier. Nearby allies gain +${movespeed} Movement Speed and +${attackspeed} Attack Speed. Nearby enemies lose the same stats.`,
          ru: `Бросает меч, который следует за носителем. Ближайшие союзники получают +${movespeed} к скорости передвижения и +${attackspeed} к скорости атаки. Ближайшие враги теряют эти же характеристики.`,
          br: `Solta uma espada que segue o portador. Aliados próximos recebem +${movespeed} de Velocidade de Movimento e +${attackspeed} de Velocidade de Ataque. Inimigos próximos perdem os mesmos atributos.`,
          cz: `Položí meč, který následuje nositele. Blízcí spojenci získají +${movespeed} k rychlosti pohybu a +${attackspeed} k rychlosti útoku. Blízcí nepřátelé ztratí stejné hodnoty.`,
          zh: `放下一把會跟隨持有者的劍。附近盟友獲得 +${movespeed} 移動速度和 +${attackspeed} 攻擊速度。附近敵人失去相同屬性。`,
          fr: `Dépose une épée qui suit le porteur. Les alliés proches gagnent +${movespeed} en vitesse de déplacement et +${attackspeed} en vitesse d'attaque. Les ennemis proches perdent ces mêmes stats.`,
          vi: `Thả một thanh kiếm đi theo người mang. Đồng minh gần đó nhận +${movespeed} tốc độ di chuyển và +${attackspeed} tốc độ đánh. Kẻ địch gần đó bị giảm các chỉ số tương tự.`,
          id: `Menjatuhkan pedang yang mengikuti pembawa. Sekutu di sekitar mendapatkan +${movespeed} Movement Speed dan +${attackspeed} Attack Speed. Musuh di sekitar kehilangan stat yang sama.`,
        },
      }
    }

    case ItemList.Kirins_Sword: {
      const attackSpeed = fixed(ItemAbilityData.KIRINS_SWORD_ATTACK_SPEED * 100, 1)
      const moveSpeed = ItemAbilityData.KIRINS_SWORD_MOVE_SPEED

      return {
        name: {
          en: 'Kirins Sword',
          ru: 'Меч Киры',
          br: 'Espada de Kirin',
          cz: 'Meč Kirin',
          zh: '基尔之剑',
          fr: 'Épée de Kirin',
          vi: 'Kiếm Kirin',
          id: 'Pedang Kirin',
        },
        desc: {
          en: `Dash forward. Gain ${attackSpeed}% Attack Speed and ${moveSpeed} Movement Speed.`,
          ru: `Рывок вперёд. Увеличивает скорость атаки на ${attackSpeed}% и скорость передвижения на ${moveSpeed}.`,
          br: `Avança para frente. Aumenta a Velocidade de Ataque em ${attackSpeed}% e a Velocidade de Movimento em ${moveSpeed}.`,
          cz: `Dash vpřed. Zvyšuje rychlost útoku o ${attackSpeed}% a rychlost pohybu o ${moveSpeed}.`,
          fr: `Fonce vers l'avant. Augmente la vitesse d'attaque de ${attackSpeed}% et la vitesse de déplacement de ${moveSpeed}.`,
          zh: `向前衝刺。提高 ${attackSpeed}% 攻擊速度和 ${moveSpeed} 移動速度。`,
          vi: `Lướt về phía trước. Tăng ${attackSpeed}% tốc độ đánh và ${moveSpeed} tốc độ di chuyển.`,
          id: `Dash ke depan. Meningkatkan Attack Speed sebesar ${attackSpeed}% dan Movement Speed sebesar ${moveSpeed}.`,
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
  const damageOverTime = isUpgraded
    ? ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME_2
    : ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME

  const text: { [key: string]: string } = {
    en: `Attacks apply non-lethal Poison (max ${ItemAbilityData.POISON_BOW_MAX_STACKS} stacks). Each stack reduces Movement Speed by ${ItemAbilityData.POISON_BOW_SLOW} and deals ${damageOverTime} magical damage per second.`,
    ru: `Атаки накладывают несмертельный Яд (макс. ${ItemAbilityData.POISON_BOW_MAX_STACKS} стаков). Каждый эффект снижает скорость передвижения на ${ItemAbilityData.POISON_BOW_SLOW} и наносит ${damageOverTime} магического урона в секунду.`,
    br: `Ataques aplicam Veneno não letal (máx. ${ItemAbilityData.POISON_BOW_MAX_STACKS} acúmulos). Cada acúmulo reduz a Velocidade de Movimento em ${ItemAbilityData.POISON_BOW_SLOW} e causa ${damageOverTime} de dano mágico por segundo.`,
    fr: `Les attaques appliquent Poison non létal (max ${ItemAbilityData.POISON_BOW_MAX_STACKS} cumuls). Chaque cumul réduit la vitesse de déplacement de ${ItemAbilityData.POISON_BOW_SLOW} et inflige ${damageOverTime} dégâts magiques par seconde.`,
    zh: `攻擊會施加無法致死的中毒效果（最多 ${ItemAbilityData.POISON_BOW_MAX_STACKS} 層）。每層降低 ${ItemAbilityData.POISON_BOW_SLOW} 移動速度，並每秒造成 ${damageOverTime} 點魔法傷害。`,
    cz: `Útoky aplikují nesmrtící Jed (max ${ItemAbilityData.POISON_BOW_MAX_STACKS} stacků). Každý stack snižuje rychlost pohybu o ${ItemAbilityData.POISON_BOW_SLOW} a způsobuje ${damageOverTime} magického poškození za sekundu.`,
    vi: `Đòn đánh gây hiệu ứng Độc không gây kết liễu (tối đa ${ItemAbilityData.POISON_BOW_MAX_STACKS} cộng dồn). Mỗi cộng dồn giảm ${ItemAbilityData.POISON_BOW_SLOW} tốc độ di chuyển và gây ${damageOverTime} sát thương phép mỗi giây.`,
    id: `Serangan memberikan Racun tidak mematikan (maks ${ItemAbilityData.POISON_BOW_MAX_STACKS} tumpukan). Setiap tumpukan mengurangi Movement Speed sebesar ${ItemAbilityData.POISON_BOW_SLOW} dan memberikan ${damageOverTime} damage sihir per detik.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getIronRodDescription = () => {
  const baseDamage = ItemAbilityData.IRON_ROD_BASE_DAMAGE
  const bonusDamage = fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)

  const text: { [key: string]: string } = {
    en: `Abilities hitting an enemy grant a buff. The next attack deals ${baseDamage} (+${bonusDamage}% Ability Power) bonus magical damage.`,
    ru: `Попадание способностями по врагу даёт эффект. Следующая атака наносит ${baseDamage} (+${bonusDamage}% силы умений) дополнительного магического урона.`,
    br: `Habilidades ao atingir um inimigo concedem um efeito. O próximo ataque causa ${baseDamage} (+${bonusDamage}% Poder de Habilidade) de dano mágico adicional.`,
    fr: `Les compétences touchant un ennemi confèrent un effet. La prochaine attaque inflige ${baseDamage} (+${bonusDamage}% puissance) dégâts magiques supplémentaires.`,
    zh: `技能命中敵人時獲得增益。下一次攻擊造成 ${baseDamage}（+${bonusDamage}% 技能強度）的額外魔法傷害。`,
    cz: `Zásah schopností udělí efekt. Další útok způsobí ${baseDamage} (+${bonusDamage}% síly schopností) bonusové magické poškození.`,
    vi: `Kỹ năng trúng mục tiêu sẽ nhận hiệu ứng. Đòn đánh tiếp theo gây ${baseDamage} (+${bonusDamage}% sức mạnh kỹ năng) sát thương phép bổ sung.`,
    id: `Kemampuan yang mengenai musuh memberikan efek. Serangan berikutnya menghasilkan ${baseDamage} (+${bonusDamage}% Ability Power) damage sihir tambahan.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getFrigidCurseDescription = () => {
  const slow = ItemAbilityData.FRIGID_CURSE_SLOW
  const attackSpeed = fixed(ItemAbilityData.FRIGID_CURSE_ATTACK_SPEED_REDUCTION * 100, 1)
  const healingReduction = fixed(ItemAbilityData.FRIGID_CURSE_HEALING_REDUCTION * 100, 1)

  const text: { [key: string]: string } = {
    en: `Frigid Curse: reduces Movement Speed by ${slow}, Attack Speed by ${attackSpeed}%, and healing by ${healingReduction}%`,
    ru: `Морозное проклятие: снижает скорость передвижения на ${slow}, скорость атаки на ${attackSpeed}% и лечение на ${healingReduction}%`,
    br: `Maldição Gélida: reduz a Velocidade de Movimento em ${slow}, a Velocidade de Ataque em ${attackSpeed}% e a cura em ${healingReduction}%`,
    fr: `Malédiction glaciale : réduit la vitesse de déplacement de ${slow}, la vitesse d'attaque de ${attackSpeed}% et les soins de ${healingReduction}%`,
    zh: `寒冷詛咒：降低移動速度 ${slow}、攻擊速度 ${attackSpeed}%，並降低 ${healingReduction}% 治療效果`,
    cz: `Zmrzlá kletba: snižuje rychlost pohybu o ${slow}, rychlost útoku o ${attackSpeed}% a léčení o ${healingReduction}%`,
    vi: `Lời Nguyền Lạnh Giá: giảm tốc độ di chuyển ${slow}, tốc độ đánh ${attackSpeed}% và hồi máu ${healingReduction}%`,
    id: `Kutukan Dingin: mengurangi Movement Speed sebesar ${slow}, Attack Speed sebesar ${attackSpeed}%, dan penyembuhan sebesar ${healingReduction}%`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getObserverWardDescription = () => {
  const text: { [key: string]: string } = {
    en: `Places an Observer Ward. Grants vision and reveals invisible units. Invisible to enemies. Destroyed if revealed.`,
    ru: `Устанавливает Наблюдательный тотем. Даёт обзор и раскрывает невидимые цели. Невидим для врагов. Уничтожается при обнаружении.`,
    br: `Coloca um Observer Ward. Concede visão e revela unidades invisíveis. Invisível para inimigos. É destruído ao ser revelado.`,
    zh: `放置一個偵查守衛。提供視野並揭露隱形單位。對敵人隱形，被發現後會被摧毀。`,
    cz: `Umístí pozorovací totem. Poskytuje vidění a odhaluje neviditelné jednotky. Je neviditelný pro nepřátele. Je zničen při odhalení.`,
    fr: `Place une Ward d'observation. Accorde de la vision et révèle les unités invisibles. Invisible pour les ennemis. Détruite si révélée.`,
    vi: `Đặt một Mắt Quan Sát. Cung cấp tầm nhìn và phát hiện đơn vị tàng hình. Vô hình với kẻ địch. Bị phá hủy khi bị phát hiện.`,
    id: `Menempatkan Observer Ward. Memberikan visi dan mengungkap unit tak terlihat. Tidak terlihat oleh musuh. Dihancurkan jika terungkap.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getNimbleBowDescription = () => {
  const speed = fixed(ItemAbilityData.RESILIENT_BOW_BULLET_SPEED * 100, 1)

  return {
    en: `Increases projectile range and area radius by ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}px and projectile speed by ${speed}%.`,
    ru: `Увеличивает дальность снаряда и радиус области на ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} пикселей, а также скорость снаряда на ${speed}%.`,
    br: `Aumenta o alcance do projétil e o raio da área em ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}px, e a velocidade do projétil em ${speed}%.`,
    zh: `提高射程和範圍半徑 ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} 像素，並提高射彈速度 ${speed}%。`,
    cz: `Zvyšuje dosah střely a poloměr oblasti o ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px a rychlost střely o ${speed}%.`,
    fr: `Augmente la portée du projectile et le rayon de zone de ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px, ainsi que la vitesse du projectile de ${speed}%.`,
    vi: `Tăng tầm bắn và bán kính vùng ảnh hưởng thêm ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE} px, và tăng tốc độ đạn ${speed}%.`,
    id: `Meningkatkan jangkauan proyektil dan radius area sebesar ${ItemAbilityData.RESILIENT_BOW_BULLET_RANGE}px, serta kecepatan proyektil sebesar ${speed}%.`,
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

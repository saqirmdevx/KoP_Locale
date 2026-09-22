/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ItemList,
  fixed,
  ItemAbilityData,
  // @ts-ignore
} from 'shared'
// @ts-ignore
import { toSec, toSecRaw } from './misc'
// @ts-ignore
import { LANG } from '../lang'

const _getLocaleItemDescription = (
  itemId: number
): {
  name: { [key in string]: string }
  /** The [ACTIVE] block - items whose effect is triggered by the player using them. */
  descActive?: { [key in string]: string }
  /** The [PASSIVE] blocks, one per entry in the item's `procTypes` and in the same order. */
  descPassive?: { [key in string]: string }
  descPassive2?: { [key in string]: string }
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
          kr: `나무 검`,
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
          kr: `나무 활`,
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
          kr: `초보자의 지팡이`,
        },
      }
    case ItemList.Wooden_Ring:
      return {
        name: {
          en: 'Wooden Ring',
          ru: 'Деревянное кольцо',
          br: 'Anel olho da Floresta',
          cz: 'Dřevěný Prsten',
          fr: 'Anneau en bois',
          zh: '木環',
          vi: 'Nhẫn Gỗ',
          id: 'Cincin Kayu',
          kr: `나무 반지`,
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
          id: 'Perisai Kecil',
          kr: `버클러`,
        },
      }
    case ItemList.Shirt:
      return {
        name: {
          en: 'Shirt',
          ru: 'Рубаха',
          br: 'Armadura dos Caídos',
          cz: 'Košile',
          fr: 'Chemise',
          zh: '襯衫',
          vi: 'Áo',
          id: 'Kemeja',
          kr: `셔츠`,
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
          vi: 'Kiếm Diệt Ánh Sáng',
          id: 'Pembunuh Cahaya',
          kr: `빛의 학살자`,
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
          kr: `카타나`,
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
          kr: `타락한 카타나`,
        },
        descPassive: {
          en: `<c:bonus>Increases Critical Damage by ${critDamage}%</c:bonus>.`,
          ru: `<c:bonus>Увеличивает урон критических атак на ${critDamage}%</c:bonus>.`,
          br: `<c:bonus>Aumenta o Dano Crítico em ${critDamage}%</c:bonus>.`,
          cz: `<c:bonus>Zvyšuje kritické poškození o ${critDamage}%</c:bonus>.`,
          fr: `<c:bonus>Augmente les dégâts critiques de ${critDamage}%</c:bonus>.`,
          zh: `<c:bonus>提高暴擊傷害 ${critDamage}%</c:bonus>。`,
          vi: `<c:bonus>Tăng sát thương chí mạng lên ${critDamage}%</c:bonus>.`,
          id: `<c:bonus>Meningkatkan Critical Damage sebesar ${critDamage}%</c:bonus>.`,
          kr: `<c:bonus>치명타 피해를 ${critDamage}% 증가시킵니다</c:bonus>.`,
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
          kr: `강철 전사의 검`,
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
          vi: 'Trường Cung Liều Lĩnh',
          id: 'Busur Panjang Ceroboh',
          kr: `무모한 장궁`,
        },
      }
    case ItemList.Nimble_Longbow: {
      return {
        name: {
          en: 'Nimble Longbow',
          ru: 'Ловкий длинный лук',
          br: 'Besta da Resiliência encantada',
          cz: 'Hbitý Dlouhý Luk',
          fr: 'Arc long agile',
          zh: '敏捷長弓',
          vi: 'Trường Cung Nhanh Nhẹn',
          id: 'Busur Panjang Tangkas',
          kr: `날렵한 장궁`,
        },
        descPassive: getNimbleBowDescription(),
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
          kr: `인내의 방패`,
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
          kr: `강철 전사의 버클러`,
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
          kr: `마법이 깃든 방패`,
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
          kr: `자연의 지팡이`,
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
          kr: `마법사의 지팡이`,
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
          kr: `힘의 반지`,
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
          kr: `시간의 반지`,
        },
      }
    case ItemList.Apprentice_Armor:
      return {
        name: {
          en: 'Apprentice Armor',
          ru: 'Броня ученика',
          br: 'Armadura de Aprendiz',
          cz: 'Učňovská Zbroj',
          fr: "Armure d'apprenti",
          zh: '見習生裝甲',
          vi: 'Áo Giáp Tân Thủ',
          id: 'Baju Zirah Magang',
          kr: `견습생의 갑옷`,
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
          id: 'Baju Zirah Para Pejuang Besi',
          kr: `강철 전사의 갑옷`,
        },
      }
    case ItemList.Charming_Pendant:
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
          kr: `매혹의 목걸이`,
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
          vi: 'Áo Giáp Tấm',
          id: 'Baju Zirah Plat',
          kr: `판금 갑옷`,
        },
        descPassive: {
          en: `<c:heal>Increases healing received, Health Regeneration and Shield effectiveness by ${healingAmp}% on the carrier</c:heal>.`,
          ru: `<c:heal>Увеличивает получаемое лечение, регенерацию здоровья и эффективность щитов на ${healingAmp}% у владельца</c:heal>.`,
          br: `<c:heal>Aumenta a cura recebida, a regeneração de Vida e a eficácia de escudos em ${healingAmp}% no portador</c:heal>.`,
          fr: `<c:heal>Augmente les soins reçus, la régénération de santé et l'efficacité des boucliers de ${healingAmp}% sur le porteur</c:heal>.`,
          zh: `<c:heal>提高持有者受到的治療效果、生命恢復和護盾效果 ${healingAmp}%</c:heal>。`,
          cz: `<c:heal>Zvyšuje přijaté léčení, regeneraci zdraví a účinnost štítů o ${healingAmp}% u nositele</c:heal>.`,
          vi: `<c:heal>Tăng hiệu quả hồi máu nhận vào, hồi máu theo thời gian và hiệu quả khiên thêm ${healingAmp}% cho bản thân</c:heal>.`,
          id: `<c:heal>Meningkatkan penyembuhan yang diterima, regenerasi Health, dan efektivitas Shield sebesar ${healingAmp}% pada pengguna</c:heal>.`,
          kr: `<c:heal>착용자가 받는 치유량, 체력 재생, 보호막 효과를 ${healingAmp}% 증가시킵니다</c:heal>.`,
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
          kr: `마법사의 신발`,
        },
        descPassive: {
          en: `<c:cooldown>Ability Haste reduces Ability cooldowns and speeds up casting animations</c:cooldown>.`,
          ru: `<c:cooldown>Скорость умений уменьшает время перезарядки способностей и ускоряет анимации применения</c:cooldown>.`,
          br: `<c:cooldown>Aceleração de Habilidade reduz o tempo de recarga das habilidades e acelera as animações de conjuração</c:cooldown>.`,
          fr: `<c:cooldown>La hâte des compétences réduit les temps de recharge et accélère les animations de lancement</c:cooldown>.`,
          zh: `<c:cooldown>技能急速會縮短技能冷卻時間並加快施放動畫</c:cooldown>。`,
          cz: `<c:cooldown>Zrychlení schopností zkracuje dobu obnovení schopností a zrychluje animace sesílání</c:cooldown>.`,
          vi: `<c:cooldown>Hồi chiêu kỹ năng giảm thời gian hồi và tăng tốc hoạt ảnh thi triển</c:cooldown>.`,
          id: `<c:cooldown>Ability Haste mengurangi cooldown Kemampuan dan mempercepat animasi penggunaan</c:cooldown>.`,
          kr: `<c:cooldown>스킬 가속은 스킬 재사용 대기시간을 줄이고 시전 애니메이션 속도를 높입니다</c:cooldown>.`,
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
          kr: `민첩의 신발`,
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
          kr: `신발`,
        },
      }
    case ItemList.Divine_Boots:
      return {
        name: {
          en: 'Boots of Iron Warriors',
          ru: 'Ботинки железных воинов',
          br: 'Botas dos Guerreiros de ferro',
          cz: 'Boty železných válečníků',
          fr: 'Bottes des guerriers de fer',
          zh: '鋼鐵勇者之靴',
          vi: 'Giày của Chiến Binh Sắt',
          id: 'Sepatu Para Pejuang Besi',
          kr: `강철 전사의 신발`,
        },
      }
    case ItemList.Kirins_Boots:
      return {
        name: {
          en: "Kirin's Boots",
          ru: 'Ботинки Кирина',
          br: 'Botas de Kirin',
          cz: 'Kirinovy boty',
          fr: 'Bottes de Kirin',
          zh: '神龍之靴',
          vi: 'Giày Kirin',
          id: 'Sepatu Kirin',
          kr: `키린의 신발`,
        },
        descPassive: {
          en: `Tenacity reduces the duration of <c:root>crowd control effects (stuns, slows, roots, silences)</c:root>.`,
          ru: `Стойкость снижает длительность <c:root>эффектов контроля (оглушение, замедление, обездвиживание, немота)</c:root>.`,
          br: `Tenacidade reduz a duração dos <c:root>efeitos de controle (atordoamento, lentidão, enraizamento, silêncio)</c:root>.`,
          fr: `La ténacité réduit la durée des <c:root>effets de contrôle (étourdissement, ralentissement, enracinement, silence)</c:root>.`,
          zh: `韌性會減少<c:root>控制效果（暈眩、減速、定身、沉默）</c:root>的持續時間。`,
          cz: `Houževnatost snižuje dobu trvání <c:root>efektů kontroly (omráčení, zpomalení, zakořenění, umlčení)</c:root>.`,
          vi: `Kháng hiệu ứng giảm thời gian của <c:root>các hiệu ứng khống chế (choáng, làm chậm, trói chân, câm lặng)</c:root>.`,
          id: `Tenacity mengurangi durasi <c:root>efek crowd control (stun, slow, root, silence)</c:root>.`,
          kr: `강인함은 <c:root>군중 제어 효과(기절, 둔화, 속박, 침묵)</c:root>의 지속시간을 감소시킵니다.`,
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
          kr: `신속의 신발`,
        },
      }
    case ItemList.Shadow_Slayer: {
      const damagePerHit = fixed(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100, 1) + '%'

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
          kr: `그림자 학살자`,
        },
        descPassive: {
          en: `Deals <c:magical>${damagePerHit} of max health as magical damage</c:magical>.`,
          ru: `Наносит <c:magical>${damagePerHit} от максимального здоровья в виде магического урона</c:magical>.`,
          br: `Causa <c:magical>${damagePerHit} da vida máxima como dano mágico</c:magical>.`,
          fr: `Inflige <c:magical>${damagePerHit} des points de vie maximum en dégâts magiques</c:magical>.`,
          zh: `造成相當於最大生命值 <c:magical>${damagePerHit} 的魔法傷害</c:magical>。`,
          cz: `Způsobuje <c:magical>${damagePerHit} maximálního zdraví jako magické poškození</c:magical>.`,
          vi: `Gây <c:magical>${damagePerHit} máu tối đa dưới dạng sát thương phép</c:magical>.`,
          id: `Memberikan <c:magical>${damagePerHit} dari Health maksimum sebagai damage sihir</c:magical>.`,
          kr: `최대 체력의 <c:magical>${damagePerHit}에 해당하는 마법 피해</c:magical>를 입힙니다.`,
        },
        descPassive2: {
          en: `Shadow Curse: <c:healingreduction>Reduces the target's Healing, Health Regeneration and Shield effectiveness by ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, and deals <c:pure>pure damage</c:pure> based on the enemy's Health Regeneration.`,
          ru: `Проклятие теней: <c:healingreduction>Снижает лечение, регенерацию здоровья и эффективность щитов цели на ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction> и наносит <c:pure>чистый урон</c:pure> в зависимости от регенерации здоровья врага.`,
          br: `Maldição das Sombras: <c:healingreduction>Reduz a cura, a regeneração de vida e a eficácia de escudos do alvo em ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, e causa <c:pure>dano puro</c:pure> baseado na regeneração de vida do inimigo.`,
          fr: `Malédiction des ombres : <c:healingreduction>Réduit les soins, la régénération de vie et l'efficacité des boucliers de la cible de ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, et inflige des <c:pure>dégâts purs</c:pure> en fonction de la régénération de vie de l'ennemi.`,
          zh: `暗影詛咒：<c:healingreduction>使目標的治療、生命恢復和護盾效果降低 ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>，並根據敵人的生命恢復造成<c:pure>純粹傷害</c:pure>。`,
          cz: `Stínové prokletí: <c:healingreduction>Snižuje léčení, regeneraci zdraví a účinnost štítů cíle o ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction> a způsobuje <c:pure>čisté poškození</c:pure> podle regenerace zdraví nepřítele.`,
          vi: `Lời Nguyền Bóng Tối: <c:healingreduction>Giảm ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}% hồi máu, hồi phục máu và hiệu quả khiên của mục tiêu</c:healingreduction>, đồng thời gây <c:pure>sát thương chuẩn</c:pure> dựa trên hồi phục của kẻ địch.`,
          id: `Kutukan Bayangan: <c:healingreduction>Mengurangi penyembuhan, regenerasi Health, dan efektivitas Shield target sebesar ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, dan memberikan <c:pure>damage murni</c:pure> berdasarkan regenerasi Health musuh.`,
          kr: `그림자의 저주: <c:healingreduction>대상의 회복, 체력 재생, 보호막 효과를 ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}% 감소시킵니다</c:healingreduction>. 적의 체력 재생에 비례한 <c:pure>고정 피해</c:pure>를 입힙니다.`,
        },
      }
    }

    case ItemList.Divine_Sword: {
      const shieldBase = ItemAbilityData.DIVINE_SWORD_SHIELD_BASE
      const shieldAdPercent = fixed(ItemAbilityData.DIVINE_SWORD_SHIELD_AD_PERCENT * 100, 0)
      const stacksRequired = ItemAbilityData.DIVINE_SWORD_SHIELD_STACKS_REQUIRED
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
          kr: `신성한 검`,
        },
        descPassive: {
          en: `Every ${stacksRequired} successful attacks grant a shield that <c:shield>absorbs ${shieldBase} + ${shieldAdPercent}% of Attack Damage</c:shield>.`,
          ru: `Каждые ${stacksRequired} успешных атак дают щит, <c:shield>поглощающий ${shieldBase} + ${shieldAdPercent}% от силы атаки</c:shield>.`,
          br: `A cada ${stacksRequired} ataques bem-sucedidos, concede um escudo que <c:shield>absorve ${shieldBase} + ${shieldAdPercent}% do Dano de Ataque</c:shield>.`,
          cz: `Každých ${stacksRequired} úspěšných útoků udělí štít, který <c:shield>pohltí ${shieldBase} + ${shieldAdPercent}% síly útoku</c:shield>.`,
          fr: `Toutes les ${stacksRequired} attaques réussies accordent un bouclier <c:shield>absorbant ${shieldBase} + ${shieldAdPercent}% des dégâts d'attaque</c:shield>.`,
          zh: `每 ${stacksRequired} 次成功攻擊會獲得一個護盾，<c:shield>吸收 ${shieldBase} + ${shieldAdPercent}% 攻擊力的傷害</c:shield>。`,
          id: `Setiap ${stacksRequired} serangan berhasil memberikan Shield yang <c:shield>menyerap ${shieldBase} + ${shieldAdPercent}% Attack Damage</c:shield>.`,
          vi: `Mỗi ${stacksRequired} đòn đánh trúng liên tiếp sẽ tạo một khiên <c:shield>hấp thụ ${shieldBase} + ${shieldAdPercent}% Sát Thương Đánh</c:shield>.`,
          kr: `공격이 ${stacksRequired}회 적중할 때마다 <c:shield>${shieldBase} + 공격력의 ${shieldAdPercent}%만큼 흡수</c:shield>하는 보호막을 얻습니다.`,
        },
      }
    }
    case ItemList.Divine_Katana: {
      const slow = fixed(ItemAbilityData.DIVINE_KATANA_SLOW * 100, 1)

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
          kr: `신성한 카타나`,
        },
        descActive: {
          en: `Throws a katana on the ground. Nearby enemies have <c:slow>reduced Movement Speed by ${slow}%</c:slow> and are <c:silence>silenced</c:silence>.\nAlso <c:vision>reveals invisible units</c:vision>.`,
          ru: `Бросает катану на землю. Ближайшие враги получают <c:slow>снижение скорости передвижения на ${slow}%</c:slow> и <c:silence>немоту</c:silence>.\nТакже <c:vision>раскрывает невидимые цели</c:vision>.`,
          br: `Lança uma katana no chão. Inimigos próximos têm a <c:slow>Velocidade de Movimento reduzida em ${slow}%</c:slow> e são <c:silence>silenciados</c:silence>.\nTambém <c:vision>revela unidades invisíveis</c:vision>.`,
          zh: `將武士刀投擲到地面。附近敵人的<c:slow>移動速度降低 ${slow}%</c:slow>並被<c:silence>沉默</c:silence>。\n同時<c:vision>揭露隱形單位</c:vision>。`,
          cz: `Hodí katanu na zem. Blízcí nepřátelé mají <c:slow>sníženou rychlost pohybu o ${slow}%</c:slow> a jsou <c:silence>umlčeni</c:silence>.\nTaké <c:vision>odhaluje neviditelné jednotky</c:vision>.`,
          fr: `Lance une katana au sol. Les ennemis proches ont leur <c:slow>vitesse de déplacement réduite de ${slow}%</c:slow> et sont réduits au <c:silence>silence</c:silence>.\nRévèle également les <c:vision>unités invisibles</c:vision>.`,
          vi: `Ném katana xuống đất. Kẻ địch gần đó bị <c:slow>giảm ${slow}% tốc độ di chuyển</c:slow> và <c:silence>câm lặng</c:silence>.\nĐồng thời <c:vision>phát hiện đơn vị tàng hình</c:vision>.`,
          id: `Melemparkan katana ke tanah. Musuh di sekitar mendapat <c:slow>pengurangan Movement Speed sebesar ${slow}%</c:slow> dan <c:silence>dibungkam</c:silence>.\nJuga <c:vision>mengungkap unit tak terlihat</c:vision>.`,
          kr: `땅에 카타나를 던집니다. 주변 적은 <c:slow>이동 속도가 ${slow}% 감소</c:slow>하고 <c:silence>침묵</c:silence>에 걸립니다.\n또한 <c:vision>보이지 않는 유닛을 드러냅니다</c:vision>.`,
        },
      }
    }
    case ItemList.Spiked_Mace: {
      const threshold = fixed(ItemAbilityData.SPIKED_MACE_THRESHOLD * 100, 1)
      const killMoveSpeed = fixed(ItemAbilityData.SPIKED_MACE_KILL_MOVE_SPEED * 100, 0)
      return {
        name: {
          en: 'Spiked Mace',
          ru: 'Шипастая булава',
          br: 'Maça Cravada',
          zh: '尖刺鐵錘',
          fr: 'Masse à pointes',
          cz: 'Hrotatá palice',
          vi: 'Chùy Gai',
          id: 'Gada Berduri',
          kr: `가시 철퇴`,
        },
        descPassive: {
          en: `Instantly executes enemies below <c:health>${threshold}% Health</c:health>.`,
          ru: `Мгновенно добивает врагов с уровнем <c:health>здоровья ниже ${threshold}%</c:health>.`,
          br: `Executa instantaneamente inimigos com <c:health>menos de ${threshold}% de vida</c:health>.`,
          fr: `Exécute instantanément les ennemis ayant <c:health>moins de ${threshold}% de vie</c:health>.`,
          zh: `瞬間斬殺<c:health>生命值低於 ${threshold}%</c:health> 的敵人。`,
          cz: `Okamžitě dorazí nepřátele <c:health>pod ${threshold}% zdraví</c:health>.`,
          vi: `Lập tức kết liễu kẻ địch <c:health>dưới ${threshold}% máu</c:health>.`,
          id: `Langsung mengeksekusi musuh <c:health>di bawah ${threshold}% Health</c:health>.`,
          kr: `<c:health>체력이 ${threshold}% 이하</c:health>인 적을 즉시 처형합니다.`,
        },
        descPassive2: {
          en: `Grants <c:movespeed>${killMoveSpeed}% Movement Speed</c:movespeed> when killing an enemy hero.`,
          ru: `Убийство героя противника даёт <c:movespeed>${killMoveSpeed}% скорости передвижения</c:movespeed>.`,
          br: `Eliminar um herói inimigo concede <c:movespeed>${killMoveSpeed}% de Velocidade de Movimento</c:movespeed>.`,
          fr: `Éliminer un héros ennemi accorde <c:movespeed>${killMoveSpeed}% de vitesse de déplacement</c:movespeed>.`,
          zh: `擊殺敵方英雄可獲得 <c:movespeed>${killMoveSpeed}% 移動速度</c:movespeed>。`,
          cz: `Zabití nepřátelského hrdiny udělí <c:movespeed>${killMoveSpeed}% rychlosti pohybu</c:movespeed>.`,
          vi: `Hạ gục tướng địch nhận <c:movespeed>${killMoveSpeed}% tốc độ di chuyển</c:movespeed>.`,
          id: `Membunuh hero musuh memberikan <c:movespeed>${killMoveSpeed}% Movement Speed</c:movespeed>.`,
          kr: `적 영웅을 처치하면 <c:movespeed>이동 속도 ${killMoveSpeed}%</c:movespeed>를 얻습니다.`,
        },
      }
    }
    case ItemList.Plague_Ring: {
      const duration = Math.floor(ItemAbilityData.PLAGUE_RING_MODIFIER * 100)
      const tenacity = fixed(ItemAbilityData.PLAGUE_RING_TENACITY_REDUCTION * 100, 0)
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
          kr: `역병의 반지`,
        },
        descPassive: {
          en: `<c:bonus>Increases the duration of all negative effects by ${duration}%</c:bonus>.`,
          ru: `<c:bonus>Увеличивает длительность всех негативных эффектов на ${duration}%</c:bonus>.`,
          br: `<c:bonus>Aumenta a duração de todos os efeitos negativos em ${duration}%</c:bonus>.`,
          fr: `<c:bonus>Augmente la durée de tous les effets négatifs de ${duration}%</c:bonus>.`,
          zh: `<c:bonus>增加所有負面效果的持續時間 ${duration}%</c:bonus>。`,
          cz: `<c:bonus>Zvyšuje dobu trvání všech negativních efektů o ${duration}%</c:bonus>.`,
          vi: `<c:bonus>Tăng thời gian của tất cả hiệu ứng tiêu cực thêm ${duration}%</c:bonus>.`,
          id: `<c:bonus>Meningkatkan durasi semua efek negatif sebesar ${duration}%</c:bonus>.`,
          kr: `<c:bonus>모든 부정적인 효과의 지속시간을 ${duration}% 증가시킵니다</c:bonus>.`,
        },
        descPassive2: {
          en: `Dealing <c:magical>Magic Damage</c:magical> to an enemy Hero <c:tenacityreduction>reduces their Tenacity by ${tenacity}%</c:tenacityreduction>.`,
          ru: `Нанесение <c:magical>магического урона</c:magical> герою врага <c:tenacityreduction>снижает его стойкость на ${tenacity}%</c:tenacityreduction>.`,
          br: `Causar <c:magical>Dano Mágico</c:magical> a um Herói inimigo <c:tenacityreduction>reduz sua Tenacidade em ${tenacity}%</c:tenacityreduction>.`,
          fr: `Infliger des <c:magical>dégâts magiques</c:magical> à un héros ennemi <c:tenacityreduction>réduit sa ténacité de ${tenacity}%</c:tenacityreduction>.`,
          zh: `對敵方英雄造成<c:magical>魔法傷害</c:magical>時，<c:tenacityreduction>降低其韌性 ${tenacity}%</c:tenacityreduction>。`,
          cz: `Způsobení <c:magical>magického poškození</c:magical> nepřátelskému hrdinovi <c:tenacityreduction>snižuje jeho houževnatost o ${tenacity}%</c:tenacityreduction>.`,
          vi: `Gây <c:magical>Sát Thương Phép</c:magical> lên Tướng địch sẽ <c:tenacityreduction>giảm ${tenacity}% kháng khống chế của chúng</c:tenacityreduction>.`,
          id: `Memberikan <c:magical>Damage Sihir</c:magical> kepada Hero musuh <c:tenacityreduction>mengurangi Tenacity mereka sebesar ${tenacity}%</c:tenacityreduction>.`,
          kr: `적 영웅에게 <c:magical>마법 피해</c:magical>를 입히면 <c:tenacityreduction>대상의 강인함이 ${tenacity}% 감소</c:tenacityreduction>합니다.`,
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
          kr: `얼어붙은 황제의 검`,
        },
        descPassive: {
          en: `Applies ${getFrigidCurseDescription()}.`,
          ru: `Атаки накладывают ${getFrigidCurseDescription()}.`,
          br: `Ataques aplicam ${getFrigidCurseDescription()}.`,
          fr: `Les attaques appliquent ${getFrigidCurseDescription()}.`,
          zh: `攻擊會施加 ${getFrigidCurseDescription()}。`,
          cz: `Útoky aplikují ${getFrigidCurseDescription()}.`,
          vi: `Đòn đánh gây ${getFrigidCurseDescription()}.`,
          id: `Serangan memberikan ${getFrigidCurseDescription()}.`,
          kr: `공격은 ${getFrigidCurseDescription()}을(를) 적용합니다.`,
        },
      }
    case ItemList.Corrupted_Light_Slayer: {
      const lifesteal = fixed(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100, 1) + '%'
      const attackDamage = ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DAMAGE
      return {
        name: {
          en: 'Corrupted Light Slayer',
          ru: 'Искажённый губитель света',
          br: 'Corta Luz corrompido',
          fr: 'Tueur de Lumière Corrompu',
          zh: '腐化輕量殺手',
          cz: 'Zkažený kosič světla',
          vi: 'Kiếm Diệt Ánh Sáng Tà Đạo',
          id: 'Pembunuh Cahaya Tercemar',
          kr: `타락한 빛의 학살자`,
        },
        descPassive: {
          en: `You and nearby allies <c:lifesteal>gain ${lifesteal} Lifesteal</c:lifesteal> and <c:bonus>${attackDamage} Attack Damage</c:bonus>.`,
          ru: `Вы и ближайшие союзники <c:lifesteal>получаете ${lifesteal} к краже здоровья</c:lifesteal> и <c:bonus>${attackDamage} к силе атаки</c:bonus>.`,
          br: `Você e aliados próximos <c:lifesteal>recebem ${lifesteal} de roubo de vida</c:lifesteal> e <c:bonus>${attackDamage} de dano de ataque</c:bonus>.`,
          fr: `Vous et les alliés proches <c:lifesteal>gagnez ${lifesteal} de vol de vie</c:lifesteal> et <c:bonus>${attackDamage} dégâts d'attaque</c:bonus>.`,
          zh: `你和附近盟友<c:lifesteal>獲得 ${lifesteal} 生命偷取</c:lifesteal>和<c:bonus>${attackDamage} 攻擊傷害</c:bonus>。`,
          cz: `Ty a blízcí spojenci <c:lifesteal>získáte ${lifesteal} vysávání života</c:lifesteal> a <c:bonus>${attackDamage} útočného poškození</c:bonus>.`,
          vi: `Bạn và đồng minh gần đó <c:lifesteal>nhận ${lifesteal} hút máu</c:lifesteal> và <c:bonus>${attackDamage} sát thương vật lý</c:bonus>.`,
          id: `Anda dan sekutu di sekitar <c:lifesteal>mendapatkan ${lifesteal} Lifesteal</c:lifesteal> dan <c:bonus>${attackDamage} Attack Damage</c:bonus>.`,
          kr: `당신과 주변 아군이 <c:lifesteal>흡혈 ${lifesteal}</c:lifesteal>와 <c:bonus>공격력 ${attackDamage}</c:bonus>을 얻습니다.`,
        },
      }
    }
    /** Wooden Bow */
    case ItemList.Berserkers_Bow: {
      const attackSpeed = Math.floor(ItemAbilityData.BERSERKERS_BOW_BONUS_ATTACK_SPEED * 100)
      const maxStacks = ItemAbilityData.BERSERKERS_BOW_MAXIMUM_STACKS
      const maxAttackSpeed = fixed(attackSpeed * maxStacks, 0)
      const maxStacksLifesteal = Math.floor(ItemAbilityData.BERSERKERS_BOW_MAX_STACKS_LIFESTEAL * 100)

      return {
        name: {
          en: "Berserker's Bow",
          ru: 'Лук берсерка',
          br: 'Besta Incontrolável',
          fr: 'Arc du Berserker',
          zh: '狂戰士之弓',
          cz: 'Luk Berserka',
          vi: 'Cung Cuồng Chiến',
          id: 'Busur Berserker',
          kr: `광전사의 활`,
        },
        descPassive: {
          en: `Grants Berserk, stacking up to ${maxStacks} times. Each stack <c:attackspeed>increases Attack Speed by ${attackSpeed}%</c:attackspeed> <c:attackspeed>(max ${maxAttackSpeed}% Attack Speed)</c:attackspeed>. At ${maxStacks} stacks it also grants <c:lifesteal>${maxStacksLifesteal}% Lifesteal</c:lifesteal>.`,
          ru: `Даёт эффект Берсерка, суммируется до ${maxStacks} раз. Каждый эффект <c:attackspeed>увеличивает скорость атаки на ${attackSpeed}%</c:attackspeed> <c:attackspeed>(макс. ${maxAttackSpeed}% скорости атаки)</c:attackspeed>. При ${maxStacks} зарядах также даёт <c:lifesteal>${maxStacksLifesteal}% вампиризма</c:lifesteal>.`,
          br: `Concede Berserk, acumulando até ${maxStacks} vezes. Cada acúmulo <c:attackspeed>aumenta a Velocidade de Ataque em ${attackSpeed}%</c:attackspeed> <c:attackspeed>(máx. ${maxAttackSpeed}% de Velocidade de Ataque)</c:attackspeed>. Com ${maxStacks} acúmulos também concede <c:lifesteal>${maxStacksLifesteal}% de Roubo de Vida</c:lifesteal>.`,
          cz: `Uděluje Běsnění, které se může vrstvit až ${maxStacks}×. Každá vrstva <c:attackspeed>zvyšuje rychlost útoku o ${attackSpeed}%</c:attackspeed> <c:attackspeed>(max. ${maxAttackSpeed}% rychlosti útoku)</c:attackspeed>. Při ${maxStacks} vrstvách navíc uděluje <c:lifesteal>${maxStacksLifesteal}% vysávání života</c:lifesteal>.`,
          fr: `Applique Berserk, cumulable jusqu'à ${maxStacks} fois. Chaque cumul <c:attackspeed>augmente la vitesse d'attaque de ${attackSpeed}%</c:attackspeed> <c:attackspeed>(max. ${maxAttackSpeed}% de vitesse d'attaque)</c:attackspeed>. À ${maxStacks} cumuls, accorde aussi <c:lifesteal>${maxStacksLifesteal}% de vol de vie</c:lifesteal>.`,
          zh: `獲得狂暴效果，最多可疊加 ${maxStacks} 層。每層<c:attackspeed>提高 ${attackSpeed}% 攻擊速度</c:attackspeed><c:attackspeed>（最多 ${maxAttackSpeed}% 攻擊速度）</c:attackspeed>。達到 ${maxStacks} 層時額外獲得<c:lifesteal>${maxStacksLifesteal}% 生命偷取</c:lifesteal>。`,
          vi: `Cho hiệu ứng Cuồng Nộ, cộng dồn tối đa ${maxStacks} lần. Mỗi cộng dồn <c:attackspeed>tăng ${attackSpeed}% tốc độ đánh</c:attackspeed> <c:attackspeed>(tối đa ${maxAttackSpeed}% tốc độ đánh)</c:attackspeed>. Ở ${maxStacks} cộng dồn còn cho <c:lifesteal>${maxStacksLifesteal}% hút máu</c:lifesteal>.`,
          id: `Memberikan efek Berserk, dapat ditumpuk hingga ${maxStacks} kali. Setiap tumpukan <c:attackspeed>meningkatkan Attack Speed sebesar ${attackSpeed}%</c:attackspeed> <c:attackspeed>(maks. ${maxAttackSpeed}% Attack Speed)</c:attackspeed>. Pada ${maxStacks} tumpukan juga memberikan <c:lifesteal>${maxStacksLifesteal}% Lifesteal</c:lifesteal>.`,
          kr: `광폭화를 얻으며, 최대 ${maxStacks}회까지 중첩됩니다. 중첩당 <c:attackspeed>공격 속도가 ${attackSpeed}% 증가</c:attackspeed>합니다 <c:attackspeed>(최대 공격 속도 ${maxAttackSpeed}%)</c:attackspeed>. ${maxStacks}중첩에서는 <c:lifesteal>흡혈 ${maxStacksLifesteal}%</c:lifesteal>도 함께 얻습니다.`,
        },
      }
    }
    case ItemList.Magical_Bow: {
      const moveSpeed = fixed(ItemAbilityData.MAGICAL_BOW_BONUS_SPEED * 100, 1)

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
          kr: `마법의 활`,
        },
        descPassive: {
          en:
            `Dealing <c:magical>magical damage</c:magical> <c:movespeed>grants ${moveSpeed}% Movement Speed</c:movespeed> and applies Poison.\n\n` +
            getPoisonBowDescription(true),
          ru:
            `Нанесение <c:magical>магического урона</c:magical> <c:movespeed>даёт ${moveSpeed}% скорости передвижения</c:movespeed> и накладывает Яд.\n\n` +
            getPoisonBowDescription(true),
          br:
            `Causar <c:magical>dano mágico</c:magical> <c:movespeed>concede ${moveSpeed}% de Velocidade de Movimento</c:movespeed> e aplica Veneno.\n\n` +
            getPoisonBowDescription(true),
          fr:
            `Infliger des <c:magical>dégâts magiques</c:magical> <c:movespeed>confère ${moveSpeed}% de vitesse de déplacement</c:movespeed> et applique Poison.\n\n` +
            getPoisonBowDescription(true),
          zh:
            `造成<c:magical>魔法傷害</c:magical>會<c:movespeed>獲得 ${moveSpeed}% 移動速度</c:movespeed>並施加中毒效果。\n\n` +
            getPoisonBowDescription(true),
          cz:
            `Způsobení <c:magical>magického poškození</c:magical> poskytuje ${moveSpeed}% rychlosti pohybu a aplikuje Jed.\n\n` +
            getPoisonBowDescription(true),
          vi:
            `Gây <c:magical>sát thương phép</c:magical> sẽ nhận ${moveSpeed}% tốc độ di chuyển và gây hiệu ứng Độc.\n\n` +
            getPoisonBowDescription(true),
          id:
            `Memberikan <c:magical>damage sihir</c:magical> memberi ${moveSpeed}% Movement Speed dan memberikan Racun.\n\n` +
            getPoisonBowDescription(true),
          kr:
            `<c:magical>마법 피해</c:magical>를 입히면 이동 속도 ${moveSpeed}%을 얻고 중독을 적용합니다.\n\n` +
            getPoisonBowDescription(true),
        },
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
          cz: 'Jedovatý Luk',
          vi: 'Cung Độc',
          id: 'Busur Racun',
          kr: `독의 활`,
        },
        descPassive: {
          en: getPoisonBowDescription(false),
        },
      }

    case ItemList.Corrupted_Longbow: {
      const attackSpeed = fixed(ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100, 1)
      const moveSpeed = fixed(ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED * 100, 1)
      return {
        name: {
          en: 'Corrupted Longbow',
          ru: 'Искажённый длинный лук',
          br: 'Arco Corrompido',
          fr: 'Arc long corrompu',
          zh: '腐化長弓',
          cz: 'Zkažený dlouhý luk',
          vi: 'Cung Tà Đạo',
          id: 'Busur Panjang Tercemar',
          kr: `타락한 장궁`,
        },
        descActive: {
          en: `Enhance carrier: <c:attackspeed>Gain ${attackSpeed}% Attack Speed</c:attackspeed> and <c:movespeed>${moveSpeed}% Movement Speed</c:movespeed>. Prevents casting abilities.`,
          ru: `Усиливает носителя: <c:attackspeed>увеличивает скорость атаки на ${attackSpeed}%</c:attackspeed> и <c:movespeed>скорость передвижения на ${moveSpeed}%</c:movespeed>. Запрещает использовать способности.`,
          br: `Aprimora o portador: <c:attackspeed>aumenta a Velocidade de Ataque em ${attackSpeed}%</c:attackspeed> e a <c:movespeed>Velocidade de Movimento em ${moveSpeed}%</c:movespeed>. Impede o uso de habilidades.`,
          fr: `Améliore le porteur : <c:attackspeed>augmente la vitesse d'attaque de ${attackSpeed}%</c:attackspeed> et la <c:movespeed>vitesse de déplacement de ${moveSpeed}%</c:movespeed>. Empêche d'utiliser des compétences.`,
          zh: `強化持有者：<c:attackspeed>提高 ${attackSpeed}% 攻擊速度</c:attackspeed>和<c:movespeed>${moveSpeed}% 移動速度</c:movespeed>。無法施放技能。`,
          cz: `Posiluje nositele: <c:attackspeed>zvyšuje rychlost útoku o ${attackSpeed}%</c:attackspeed> a <c:movespeed>rychlost pohybu o ${moveSpeed}%</c:movespeed>. Znemožňuje používat schopnosti.`,
          vi: `Cường hóa bản thân: <c:attackspeed>tăng ${attackSpeed}% tốc độ đánh</c:attackspeed> và <c:movespeed>${moveSpeed}% tốc độ di chuyển</c:movespeed>. Không thể sử dụng kỹ năng.`,
          id: `Memperkuat pengguna: <c:attackspeed>meningkatkan Attack Speed sebesar ${attackSpeed}%</c:attackspeed> dan <c:movespeed>Movement Speed sebesar ${moveSpeed}%</c:movespeed>. Tidak dapat menggunakan kemampuan.`,
          kr: `착용자 강화: <c:attackspeed>공격 속도 ${attackSpeed}%</c:attackspeed>와 <c:movespeed>이동 속도 ${moveSpeed}%</c:movespeed>을 얻습니다. 스킬을 사용할 수 없습니다.`,
        },
        descPassive: { en: getPoisonBowDescription(true) },
      }
    }
    case ItemList.Hunters_Longbow: {
      const moveSpeed = fixed(ItemAbilityData.HUNTERS_LONGBOW_MOVE_SPEED_BONUS * 100, 1)
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
          kr: `사냥꾼의 장궁`,
        },
        descPassive: {
          en: `Grants Hunter's Focus. <c:movespeed>Gain ${moveSpeed}% Movement Speed</c:movespeed> and <c:dispel>immunity to slow effects</c:dispel>.`,
          ru: `Даёт эффект Охотничьего фокуса. <c:movespeed>Увеличивает скорость передвижения на ${moveSpeed}%</c:movespeed> и даёт <c:dispel>иммунитет к замедлениям</c:dispel>.`,
          br: `Concede Foco do Caçador. <c:movespeed>Aumenta a Velocidade de Movimento em ${moveSpeed}%</c:movespeed> e concede <c:dispel>imunidade a lentidão</c:dispel>.`,
          fr: `Confère Focus du chasseur. <c:movespeed>Augmente la vitesse de déplacement de ${moveSpeed}%</c:movespeed> et accorde une <c:dispel>immunité aux ralentissements</c:dispel>.`,
          zh: `獲得獵人專注。<c:movespeed>提高 ${moveSpeed}% 移動速度</c:movespeed>並<c:dispel>免疫減速效果</c:dispel>。`,
          cz: `Dává Lovecké soustředění. <c:movespeed>Zvyšuje rychlost pohybu o ${moveSpeed}%</c:movespeed> a poskytuje <c:dispel>imunitu vůči zpomalení</c:dispel>.`,
          vi: `Cho hiệu ứng Tập Trung Thợ Săn. <c:movespeed>Tăng ${moveSpeed}% tốc độ di chuyển</c:movespeed> và <c:dispel>miễn nhiễm làm chậm</c:dispel>.`,
          id: `Memberikan Fokus Pemburu. <c:movespeed>Meningkatkan Movement Speed sebesar ${moveSpeed}%</c:movespeed> dan memberikan <c:dispel>kekebalan terhadap efek slow</c:dispel>.`,
          kr: `사냥꾼의 집중을 얻습니다. <c:movespeed>이동 속도 ${moveSpeed}%</c:movespeed>을 얻고 <c:dispel>둔화 효과에 면역</c:dispel>이 됩니다.`,
        },
      }
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
          kr: `불타는 지팡이`,
        },
        descPassive: {
          en: `Abilities apply burn that deals <c:magical>${damageOverTime}% of max health as magical damage</c:magical> per second.`,
          ru: `Способности накладывают горение, наносящее <c:magical>${damageOverTime}% от максимального здоровья в виде магического урона</c:magical> в секунду.`,
          br: `Suas habilidades aplicam queimadura que causa <c:magical>${damageOverTime}% da vida máxima como dano mágico</c:magical> por segundo.`,
          fr: `Les compétences appliquent une brûlure infligeant <c:magical>${damageOverTime}% des points de vie maximum en dégâts magiques</c:magical> par seconde.`,
          zh: `你的技能會施加燃燒效果，每秒造成相當於最大生命值 <c:magical>${damageOverTime}% 的魔法傷害</c:magical>。`,
          cz: `Schopnosti aplikují hoření, které způsobuje <c:magical>${damageOverTime} % maximálního zdraví jako magické poškození</c:magical> za sekundu.`,
          vi: `Kỹ năng gây hiệu ứng thiêu đốt, gây <c:magical>${damageOverTime}% máu tối đa dưới dạng sát thương phép</c:magical> mỗi giây.`,
          id: `Kemampuan memberikan efek terbakar yang menyebabkan <c:magical>${damageOverTime}% dari Health maksimum sebagai damage sihir</c:magical> per detik.`,
          kr: `스킬은 화상을 적용하며, 초당 최대 체력의 <c:magical>${damageOverTime}%에 해당하는 마법 피해</c:magical>를 입힙니다.`,
        },
      }
    }
    case ItemList.Vampiric_Staff: {
      const leechValue = ItemAbilityData.VAMPIRIC_STAFF_LEECH_BASE
      const leechMod = fixed(ItemAbilityData.VAMPIRIC_STAFF_MODIFIER * 100, 1)

      return {
        name: {
          en: 'Vampiric Staff',
          ru: 'Вампирический посох',
          br: 'Cajado Vampírico',
          fr: 'Bâton vampirique',
          zh: '吸血鬼法棍',
          cz: 'Vampýří hůl',
          vi: 'Gộc Hút Máu',
          id: 'Tongkat Vampir',
          kr: `흡혈의 지팡이`,
        },
        descPassive: {
          en: `Deals <c:magical>${leechValue} (+ ${leechMod}% Ability Power) bonus Magic Damage</c:magical> and heal for twice the amount.`,
          ru: `Способности наносят <c:magical>${leechValue} (+ ${leechMod}% силы умений) дополнительного магического урона</c:magical> и восстанавливают здоровье в двойном размере.`,
          br: `Habilidades causam <c:magical>${leechValue} (+ ${leechMod}% de Poder de Habilidade) de dano mágico</c:magical> bônus e curam o dobro do valor.`,
          fr: `Les compétences infligent <c:magical>${leechValue} (+ ${leechMod}% de puissance des compétences) de dégâts magiques</c:magical> bonus et soignent du double du montant.`,
          zh: `技能造成 <c:magical>${leechValue}（+ ${leechMod}% 技能強度）額外魔法傷害</c:magical>，並恢復兩倍數值的生命值。`,
          cz: `Schopnosti způsobují <c:magical>${leechValue} (+ ${leechMod}% síly schopností) bonusového magického poškození</c:magical> a léčí za dvojnásobek.`,
          vi: `Kỹ năng gây <c:magical>${leechValue} (+ ${leechMod}% sức mạnh kỹ năng) sát thương phép</c:magical> cộng thêm và hồi máu gấp đôi lượng đó.`,
          id: `Kemampuan memberikan <c:magical>${leechValue} (+ ${leechMod}% Ability Power) bonus Magic Damage</c:magical> dan menyembuhkan dua kali jumlah tersebut.`,
          kr: `스킬은 <c:magical>${leechValue}(+주문력의 ${leechMod}%)만큼 추가 마법 피해</c:magical>를 입히고 그 두 배에 해당하는 양을 회복합니다.`,
        },
      }
    }
    case ItemList.Kirins_Staff: {
      const resistanceReduction = fixed(ItemAbilityData.KIRINS_STAFF_MAGIC_RESISTANCE_REDUCTION * 100, 1)
      return {
        name: {
          en: "Kirin's Staff",
          ru: 'Посох Кирина',
          br: 'Cajado de Kirin',
          fr: 'Bâton de Kirin',
          zh: '麒麟的法棍',
          cz: 'Kirinova hůl',
          vi: 'Gộc Kirin',
          id: 'Tongkat Kirin',
          kr: `키린의 지팡이`,
        },
        descPassive: {
          en: `<c:magical>Reduces Magic Resistance by ${resistanceReduction}%</c:magical>.`,
          br: `Habilidades <c:magical>reduzem a Resistência Mágica em ${resistanceReduction}%</c:magical>.`,
          ru: `Способности <c:magical>снижают сопротивление магии на ${resistanceReduction}%</c:magical>.`,
          zh: `技能降低 ${resistanceReduction}% 魔法抗性。`,
          cz: `Schopnosti snižují magickou odolnost o ${resistanceReduction}%.`,
          fr: `Les compétences <c:magical>réduisent la résistance magique de ${resistanceReduction}%</c:magical>.`,
          vi: `Kỹ năng <c:magical>giảm ${resistanceReduction}% kháng phép</c:magical>.`,
          id: `Kemampuan <c:magical>mengurangi Magic Resistance sebesar ${resistanceReduction}%</c:magical>.`,
          kr: `스킬은 <c:magical>마법 저항력을 ${resistanceReduction}% 감소</c:magical>시킵니다.`,
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
          cz: 'Zkažená hůl',
          fr: 'Bâton corrompu',
          vi: 'Gộc Tà Đạo',
          id: 'Tongkat Tercemar',
          kr: `타락한 지팡이`,
        },
        descPassive: {
          en: `<c:abilitypower>Increases Ability Power by ${bonusAp}%</c:abilitypower>.`,
          br: `<c:abilitypower>Aumenta o Poder de Habilidade em ${bonusAp}%</c:abilitypower>.`,
          ru: `<c:abilitypower>Повышает силу умений на ${bonusAp}%</c:abilitypower>.`,
          zh: `<c:abilitypower>增加 ${bonusAp}% 技能強度</c:abilitypower>。`,
          cz: `<c:abilitypower>Zvyšuje sílu schopností o ${bonusAp}%</c:abilitypower>.`,
          fr: `<c:abilitypower>Augmente la puissance des compétences de ${bonusAp}%</c:abilitypower>.`,
          vi: `<c:abilitypower>Tăng ${bonusAp}% sức mạnh kỹ năng</c:abilitypower>.`,
          id: `<c:abilitypower>Meningkatkan Ability Power sebesar ${bonusAp}%</c:abilitypower>.`,
          kr: `<c:abilitypower>주문력을 ${bonusAp}% 증가</c:abilitypower>시킵니다.`,
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
          kr: `얼어붙은 황후의 지팡이`,
        },
        descPassive: {
          en: `Abilities apply Magical Frost (max ${ItemAbilityData.FROZEN_STAFF_STACKS} stacks). At max stacks, applies Frigid Curse.\n\n${getFrigidCurseDescription()}`,
          ru: `Способности накладывают Магический холод (макс. ${ItemAbilityData.FROZEN_STAFF_STACKS} стаков). При максимуме накладывается Морозное проклятие.\n\n${getFrigidCurseDescription()}`,
          br: `Habilidades aplicam <c:control>Gelo</c:control> Mágico (máx. ${ItemAbilityData.FROZEN_STAFF_STACKS} acúmulos). No máximo, aplica Maldição Gélida.\n\n${getFrigidCurseDescription()}`,
          fr: `Les compétences appliquent Givre magique (max ${ItemAbilityData.FROZEN_STAFF_STACKS} cumuls). Au maximum, applique Malédiction glaciale.\n\n${getFrigidCurseDescription()}`,
          zh: `技能會施加魔法冰霜（最多 ${ItemAbilityData.FROZEN_STAFF_STACKS} 層）。達到最大層數時施加寒冷詛咒。\n\n${getFrigidCurseDescription()}`,
          cz: `Schopnosti aplikují Magický mráz (max ${ItemAbilityData.FROZEN_STAFF_STACKS} vrstev). Při maximu aplikuje Zmrzlou kletbu.\n\n${getFrigidCurseDescription()}`,
          vi: `Kỹ năng gây Băng Giá Ma Thuật (tối đa ${ItemAbilityData.FROZEN_STAFF_STACKS} cộng dồn). Khi đạt tối đa, gây Lời Nguyền Lạnh Giá.\n\n${getFrigidCurseDescription()}`,
          id: `Kemampuan memberikan Es Magis (maks ${ItemAbilityData.FROZEN_STAFF_STACKS} tumpukan). Pada maksimum, memberikan Kutukan Dingin.\n\n${getFrigidCurseDescription()}`,
          kr: `스킬은 마법의 서리를 적용하며, 최대 ${ItemAbilityData.FROZEN_STAFF_STACKS}중첩까지 쌓입니다. 최대 중첩에 도달하면 혹한의 저주를 적용합니다.\n\n${getFrigidCurseDescription()}`,
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
          kr: `강철 전사의 지팡이`,
        },
        descPassive: { en: getIronRodDescription() },
      }
    case ItemList.Enchanted_Spear: {
      const magicResistReduction = ItemAbilityData.ENCHANTED_SPEAR_MAGIC_RESISTANCE_REDUCTION
      const magicResistMaxStacks = ItemAbilityData.ENCHANTED_SPEAR_MAGIC_RESISTANCE_MAX_STACKS
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
          kr: `마법이 깃든 창`,
        },
        descPassive: {
          en: `<c:magical>Reduces the target's Magic Resistance by ${magicResistReduction}</c:magical> (up to ${magicResistMaxStacks} stacks).`,
          ru: `<c:magical>Снижает сопротивление магии цели на ${magicResistReduction}</c:magical> (до ${magicResistMaxStacks} зарядов).`,
          br: `<c:magical>Reduz a Resistência Mágica do alvo em ${magicResistReduction}</c:magical> (até ${magicResistMaxStacks} acúmulos).`,
          fr: `<c:magical>Réduit la résistance magique de la cible de ${magicResistReduction}</c:magical> (jusqu'à ${magicResistMaxStacks} cumuls).`,
          zh: `<c:magical>降低目標 ${magicResistReduction} 點魔法抗性</c:magical>（最多疊加 ${magicResistMaxStacks} 層）。`,
          cz: `<c:magical>Sníží magickou odolnost cíle o ${magicResistReduction}</c:magical> (až ${magicResistMaxStacks} vrstev).`,
          vi: `<c:magical>Giảm ${magicResistReduction} kháng phép của mục tiêu</c:magical> (tối đa ${magicResistMaxStacks} lần cộng dồn).`,
          id: `<c:magical>Mengurangi Magic Resistance target sebesar ${magicResistReduction}</c:magical> (hingga ${magicResistMaxStacks} stack).`,
          kr: `<c:magical>대상의 마법 저항력을 ${magicResistReduction}만큼 감소</c:magical>시킵니다 (최대 ${magicResistMaxStacks}중첩).`,
        },
        descPassive2: { en: getIronRodDescription() },
      }
    }
    case ItemList.Magic_Harpoon: {
      const movementSpeedSlow = fixed(ItemAbilityData.MAGIC_HARPOON_SLOW * 100, 1)
      const attackSpeedSlow = fixed(ItemAbilityData.MAGIC_HARPOON_ATTACK_SPEED * 100, 1)

      return {
        name: {
          en: 'Magic Harpoon',
          ru: 'Волшебный гарпун',
          br: 'Arpão Mágico',
          fr: 'Harpon magique',
          zh: '魔法叉戟',
          cz: 'Magická harpuna',
          vi: 'Lao Phép Thuật',
          id: 'Harpoon Ajaib',
          kr: `마법의 작살`,
        },
        descPassive: {
          en:
            `Attacks while Enhanced <c:slow>reduce Movement Speed by ${movementSpeedSlow}%</c:slow> and <c:attackslow>Attack Speed by ${attackSpeedSlow}%</c:attackslow>.\n\n` +
            getIronRodDescription(),
          ru:
            `Атаки во время усиления <c:slow>снижают скорость передвижения на ${movementSpeedSlow}%</c:slow> и <c:attackslow>скорость атаки на ${attackSpeedSlow}%</c:attackslow>.\n\n` +
            getIronRodDescription(),
          br:
            `Ataques enquanto aprimorado <c:slow>reduzem a Velocidade de Movimento em ${movementSpeedSlow}%</c:slow> e a <c:attackslow>Velocidade de Ataque em ${attackSpeedSlow}%</c:attackslow>.\n\n` +
            getIronRodDescription(),
          fr:
            `Les attaques pendant l'effet amélioré <c:slow>réduisent la vitesse de déplacement de ${movementSpeedSlow}%</c:slow> et la <c:attackslow>vitesse d'attaque de ${attackSpeedSlow}%</c:attackslow>.\n\n` +
            getIronRodDescription(),
          zh:
            `強化期間的攻擊會<c:slow>降低 ${movementSpeedSlow}% 移動速度</c:slow>並<c:attackslow>降低 ${attackSpeedSlow}% 攻擊速度</c:attackslow>。\n\n` +
            getIronRodDescription(),
          cz:
            `Útoky během posílení <c:slow>snižují rychlost pohybu o ${movementSpeedSlow}%</c:slow> a <c:attackslow>rychlost útoku o ${attackSpeedSlow}%</c:attackslow>.\n\n` +
            getIronRodDescription(),
          vi:
            `Đòn đánh khi được cường hóa sẽ <c:slow>giảm ${movementSpeedSlow}% tốc độ di chuyển</c:slow> và <c:attackslow>giảm ${attackSpeedSlow}% tốc độ đánh</c:attackslow>.\n\n` +
            getIronRodDescription(),
          id:
            `Serangan saat diperkuat <c:slow>mengurangi Movement Speed sebesar ${movementSpeedSlow}%</c:slow> dan <c:attackslow>Attack Speed sebesar ${attackSpeedSlow}%</c:attackslow>.\n\n` +
            getIronRodDescription(),
          kr:
            `강화 상태일 때 공격은 <c:slow>이동 속도를 ${movementSpeedSlow}%</c:slow>, <c:attackslow>공격 속도를 ${attackSpeedSlow}%</c:attackslow> 감소시킵니다.\n\n` +
            getIronRodDescription(),
        },
      }
    }
    case ItemList.Orchid_Of_Malevolence: {
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
          kr: `악의의 난초`,
        },
        descActive: {
          en:
            `Fires a dark arrow that <c:silence>silences</c:silence> enemies.\n` +
            `After silence ends, deals <c:magical>${damagePerc}% of damage taken during silence as Magic Damage</c:magical>.`,
          ru:
            `Выпускает тёмную стрелу, накладывающую <c:silence>немоту</c:silence>.\n` +
            `После окончания немоты наносит <c:magical>${damagePerc}% полученного урона как дополнительный магический урон</c:magical>.`,
          br:
            `Dispara uma flecha sombria que <c:silence>silencia</c:silence> inimigos.\n` +
            `Após o fim do silêncio, causa <c:magical>${damagePerc}% do dano recebido como dano mágico bônus</c:magical>.`,
          fr:
            `Tire une flèche sombre qui réduit au <c:silence>silence</c:silence>.\n` +
            `À la fin, inflige <c:magical>${damagePerc}% des dégâts subis en dégâts magiques supplémentaires</c:magical>.`,
          zh:
            `發射暗影箭，使敵人<c:silence>沉默</c:silence>。\n` +
            `沉默結束後，造成<c:magical>期間內所受傷害 ${damagePerc}% 的額外魔法傷害</c:magical>。`,
          cz:
            `Vystřelí temný šíp, který <c:silence>umlčí</c:silence> nepřátele.\n` +
            `Po skončení umlčení způsobí <c:magical>${damagePerc}% obdrženého poškození jako bonusové magické poškození</c:magical>.`,
          vi:
            `Bắn mũi tên bóng tối, gây <c:silence>câm lặng</c:silence>.\n` +
            `Sau khi kết thúc, gây <c:magical>${damagePerc}% sát thương đã nhận dưới dạng sát thương phép</c:magical>.`,
          id:
            `Menembakkan panah <c:silence>gelap</c:silence> yang <c:silence>membisukan</c:silence> musuh.\n` +
            `Setelah efek berakhir, memberikan <c:magical>${damagePerc}% dari damage yang diterima sebagai damage sihir tambahan</c:magical>.`,
          kr:
            `어둠의 화살을 발사하여 적을 <c:silence>침묵</c:silence>시킵니다.\n` +
            `침묵이 끝나면 침묵 동안 <c:magical>받은 피해의 ${damagePerc}%를 추가 마법 피해</c:magical>로 입힙니다.`,
        },
        descPassive: { en: getIronRodDescription() },
      }
    }
    case ItemList.Divine_Staff: {
      const heal = ItemAbilityData.DIVINE_STAFF_HEAL_T2
      const speed = fixed(ItemAbilityData.DIVINE_STAFF_BONUS_SPEED * 100, 1)

      return {
        name: {
          en: 'Divine Staff',
          ru: 'Божественный посох',
          br: 'Cajado da Deusa da floresta',
          fr: 'Baguette divine',
          zh: '神聖法棍',
          cz: 'Božská hůl',
          vi: 'Gộc Thần Thánh',
          id: 'Tongkat Ilahi',
          kr: `신성한 지팡이`,
        },
        descActive: {
          en: `<c:heal>Heals ${heal} Health</c:heal> and <c:movespeed>grants ${speed}% Movement Speed</c:movespeed> to the carrier and nearby allies.\n\n${getItemEffectPreventionDescription()}`,
          ru: `<c:heal>Лечит на ${heal} здоровья</c:heal> и <c:movespeed>даёт ${speed}% скорости передвижения</c:movespeed> владельцу и ближайшим союзникам.\n\n${getItemEffectPreventionDescription()}`,
          br: `<c:heal>Cura ${heal} de Vida</c:heal> e <c:movespeed>concede ${speed}% de Velocidade de Movimento</c:movespeed> ao portador e aliados próximos.\n\n${getItemEffectPreventionDescription()}`,
          fr: `<c:heal>Soigne ${heal} Santé</c:heal> et <c:movespeed>accorde ${speed}% Vitesse de déplacement</c:movespeed> au porteur et aux alliés proches.\n\n${getItemEffectPreventionDescription()}`,
          zh: `<c:heal>治療 ${heal} 生命值</c:heal>並為持有者和附近盟友<c:movespeed>提供 ${speed}% 移動速度</c:movespeed>。\n\n${getItemEffectPreventionDescription()}`,
          cz: `<c:heal>Léčí ${heal} zdraví</c:heal> a <c:movespeed>poskytuje ${speed}% rychlosti pohybu</c:movespeed> nositeli a blízkým spojencům.\n\n${getItemEffectPreventionDescription()}`,
          vi: `<c:heal>Hồi ${heal} máu</c:heal> và <c:movespeed>tăng ${speed}% Tốc Độ Di Chuyển</c:movespeed> cho bản thân và đồng minh gần.\n\n${getItemEffectPreventionDescription()}`,
          id: `<c:heal>Memulihkan ${heal} Health</c:heal> dan <c:movespeed>memberikan ${speed}% Movement Speed</c:movespeed> kepada pengguna dan sekutu di dekatnya.\n\n${getItemEffectPreventionDescription()}`,
          kr: `소지자와 주변 아군의 <c:heal>체력을 ${heal}만큼 회복</c:heal>시키고 <c:movespeed>이동 속도를 ${speed}%</c:movespeed> 증가시킵니다.\n\n${getItemEffectPreventionDescription()}`,
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
          kr: `흡혈의 방패`,
        },
        descPassive: {
          en: `Taking damage from an enemy hero that brings you <c:health>below ${threshold}% Health</c:health> grants a shield <c:shield>absorbing ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} damage</c:shield>. When the shield ends, heal for the amount that was absorbed.`,
          ru: `Получение урона от вражеского героя, снижающего <c:health>здоровье ниже ${threshold}%</c:health>, даёт щит, <c:shield>поглощающий ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} урона</c:shield>. Когда щит исчезает, вы исцеляетесь на поглощённое количество.`,
          br: `Receber dano de um herói inimigo que reduz sua <c:health>Vida abaixo de ${threshold}%</c:health> concede um escudo que <c:shield>absorve ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} de dano</c:shield>. Quando o escudo termina, cura pela quantidade absorvida.`,
          fr: `Subir des dégâts d'un héros ennemi qui vous fait passer <c:health>sous ${threshold}% de santé</c:health> accorde un bouclier <c:shield>absorbant ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} dégâts</c:shield>. À la fin du bouclier, soigne du montant absorbé.`,
          zh: `當受到敵方英雄傷害使<c:health>生命值低於 ${threshold}%</c:health> 時，獲得可<c:shield>吸收 ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} 點傷害</c:shield>的護盾。護盾結束時，依吸收的傷害量回復生命。`,
          cz: `Po obdržení poškození od nepřátelského hrdiny, které tě sníží <c:health>pod ${threshold}% zdraví</c:health>, získáš štít <c:shield>pohlcující ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} poškození</c:shield>. Když štít skončí, vyléčíš se o pohlcené množství.`,
          vi: `Khi nhận sát thương từ tướng địch khiến <c:health>Máu giảm xuống dưới ${threshold}%</c:health>, nhận một lá chắn <c:shield>hấp thụ ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} sát thương</c:shield>. Khi lá chắn kết thúc, hồi máu bằng lượng đã hấp thụ.`,
          id: `Saat menerima damage dari hero musuh yang membuat <c:health>Health turun di bawah ${threshold}%</c:health>, mendapatkan perisai yang <c:shield>menyerap ${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION} kerusakan</c:shield>. Saat perisai berakhir, pulihkan Health sebesar jumlah yang diserap.`,
          kr: `적 영웅에게 피해를 받아 <c:health>체력이 ${threshold}% 미만으로</c:health> 떨어지면 <c:shield>${ItemAbilityData.VAMPIRIC_SHIELD_ABSORPTION}의 피해를 흡수</c:shield>하는 보호막을 얻습니다. 보호막이 끝나면 흡수한 만큼 체력을 회복합니다.`,
        },
      }
    }

    case ItemList.Divine_Armor: {
      const absorption = ItemAbilityData.DIVINE_ARMOR_ABSORPTION
      const tenacity = fixed(ItemAbilityData.DIVINE_ARMOR_TENACITY * 100, 1)

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
          kr: `신성한 갑옷`,
        },
        descActive: {
          en: `Grants a holy shield to the carrier and nearby allies, <c:shield>absorbing the next ${absorption} damage taken</c:shield> and <c:tenacity>granting ${tenacity}% Tenacity</c:tenacity> while it lasts.\n\n${getItemEffectPreventionDescription()}`,
          ru: `Даёт священный щит владельцу и ближайшим союзникам, <c:shield>поглощающий следующие ${absorption} получаемого урона</c:shield> и <c:tenacity>дающий ${tenacity}% стойкости</c:tenacity>, пока щит активен.\n\n${getItemEffectPreventionDescription()}`,
          br: `Concede um escudo sagrado ao portador e aos aliados próximos, <c:shield>absorvendo os próximos ${absorption} de dano recebido</c:shield> e <c:tenacity>concedendo ${tenacity}% de Tenacidade</c:tenacity> enquanto durar.\n\n${getItemEffectPreventionDescription()}`,
          fr: `Confère un bouclier sacré au porteur et aux alliés proches, <c:shield>absorbant les ${absorption} prochains dégâts subis</c:shield> et <c:tenacity>accordant ${tenacity}% de Ténacité</c:tenacity> tant qu'il dure.\n\n${getItemEffectPreventionDescription()}`,
          zh: `為持有者和附近盟友賦予神聖護盾，<c:shield>吸收接下來受到的 ${absorption} 點傷害</c:shield>，並在持續期間<c:tenacity>提供 ${tenacity}% 韌性</c:tenacity>。\n\n${getItemEffectPreventionDescription()}`,
          cz: `Poskytuje svatý štít nositeli a blízkým spojencům, který <c:shield>pohltí následujících ${absorption} přijatého poškození</c:shield> a po dobu trvání <c:tenacity>poskytuje ${tenacity}% houževnatosti</c:tenacity>.\n\n${getItemEffectPreventionDescription()}`,
          vi: `Ban cho bản thân và đồng minh gần một lá chắn thần thánh, <c:shield>hấp thụ ${absorption} sát thương nhận vào tiếp theo</c:shield> và <c:tenacity>cung cấp ${tenacity}% Sự Bền Bỉ</c:tenacity> trong thời gian tồn tại.\n\n${getItemEffectPreventionDescription()}`,
          id: `Memberikan perisai suci kepada pengguna dan sekutu di dekatnya, <c:shield>menyerap ${absorption} kerusakan berikutnya yang diterima</c:shield> dan <c:tenacity>memberikan ${tenacity}% Tenacity</c:tenacity> selama perisai bertahan.\n\n${getItemEffectPreventionDescription()}`,
          kr: `소지자와 주변 아군에게 신성한 보호막을 부여하여 <c:shield>다음에 받는 피해 ${absorption}을(를) 흡수</c:shield>하고, 지속되는 동안 <c:tenacity>강인함 ${tenacity}%</c:tenacity>를 부여합니다.\n\n${getItemEffectPreventionDescription()}`,
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
          kr: `신성한 방패`,
        },
        descActive: {
          en: `<c:dispel>Cleanses all negative effects</c:dispel> from the carrier and nearby allies. <c:heal>Grants ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} Health Regeneration</c:heal>.`,
          ru: `<c:dispel>Снимает все негативные эффекты</c:dispel> с владельца и ближайших союзников. <c:heal>Даёт ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} регенерации здоровья</c:heal>.`,
          br: `<c:dispel>Remove todos os efeitos negativos</c:dispel> do portador e dos aliados próximos. <c:heal>Concede ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de Regeneração de Vida</c:heal>.`,
          zh: `<c:dispel>清除持有者和附近盟友的所有負面效果</c:dispel>。<c:heal>提供 ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} 生命恢復</c:heal>。`,
          cz: `<c:dispel>Odstraňuje všechny negativní efekty</c:dispel> z nositele a blízkých spojenců. <c:heal>Poskytuje ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regeneraci zdraví</c:heal>.`,
          fr: `<c:dispel>Supprime tous les effets négatifs</c:dispel> du porteur et des alliés proches. <c:heal>Accorde ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} de régénération de santé</c:heal>.`,
          vi: `<c:dispel>Loại bỏ tất cả hiệu ứng tiêu cực</c:dispel> khỏi bản thân và đồng minh gần. <c:heal>Cung cấp ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} hồi máu</c:heal>.`,
          id: `<c:dispel>Menghapus semua efek negatif</c:dispel> dari pengguna dan sekutu di dekatnya. <c:heal>Memberikan ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR} regenerasi Health</c:heal>.`,
          kr: `소지자와 주변 아군에게 걸린 <c:dispel>모든 부정적 효과를 정화</c:dispel>합니다. <c:heal>체력 재생을 ${ItemAbilityData.DIVINE_SHIELD_BONUS_HPR}만큼</c:heal> 부여합니다.`,
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
          vi: 'Khiên Bất Khuất',
          id: 'Perisai Pembangkang',
          kr: `저항의 방패`,
        },
        descPassive: {
          en: `<c:bonus>Grants ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic Resistance</c:bonus> and <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Health Regeneration</c:heal> to the carrier and nearby allies.`,
          br: `<c:bonus>Concede ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de Resistência Mágica</c:bonus> e <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de Regeneração de Vida</c:heal> ao portador e aliados próximos.`,
          fr: `<c:bonus>Accorde ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} de résistance magique</c:bonus> et <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} de régénération de santé</c:heal> au porteur et aux alliés proches.`,
          zh: `為持有者和附近的盟友<c:bonus>提供 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} 魔法抗性</c:bonus>和<c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} 生命恢復</c:heal>。`,
          cz: `<c:bonus>Poskytuje ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} odolnosti proti magii</c:bonus> a <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} regenerace zdraví</c:heal> nositeli a blízkým spojencům.`,
          ru: `<c:bonus>даёт ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} сопротивления магии</c:bonus> и <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} регенерации здоровья</c:heal> владельцу и ближайшим союзникам.`,
          vi: `<c:bonus>Cung cấp ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Kháng phép</c:bonus> và <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Hồi máu</c:heal> cho bản thân và đồng minh gần.`,
          id: `<c:bonus>Memberikan ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR} Magic Resistance</c:bonus> dan <c:heal>${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR} Regenerasi Health</c:heal> kepada pengguna dan sekutu di dekatnya.`,
          kr: `소지자와 주변 아군에게 <c:bonus>마법 저항력 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_MR}</c:bonus>과 <c:heal>체력 재생 ${ItemAbilityData.SHIELD_OF_DEFIANCE_BONUS_HPR}</c:heal>을 부여합니다.`,
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
          kr: `가시 방패`,
        },
        descActive: {
          en: `Taking damage <c:physical>reflects ${value}%</c:physical> of it back to the attacker as the same damage type.`,
          ru: `Получение урона <c:physical>отражает ${value}%</c:physical> обратно атакующему тем же типом урона.`,
          br: `Receber dano <c:physical>reflete ${value}%</c:physical> de volta ao atacante como o mesmo tipo de dano.`,
          fr: `Subir des dégâts en <c:physical>renvoie ${value}%</c:physical> à l'attaquant sous le même type de dégâts.`,
          zh: `受到傷害時，<c:physical>將 ${value}% 反射</c:physical>給攻擊者，且為相同傷害類型。`,
          cz: `Při obdržení poškození se <c:physical>${value}% odrazí</c:physical> zpět na útočníka jako stejný typ poškození.`,
          vi: `Nhận sát thương sẽ <c:physical>phản lại ${value}%</c:physical> về kẻ tấn công với cùng loại sát thương.`,
          id: `Menerima damage <c:physical>memantulkan ${value}%</c:physical> kembali ke penyerang dengan jenis damage yang sama.`,
          kr: `피해를 받으면 받은 피해의 <c:physical>${value}%</c:physical>를 동일한 피해 유형으로 공격자에게 반사합니다.`,
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
          id: 'Pelindung Garun',
          kr: `가룬의 수호자`,
        },
        descActive: {
          en: `Unleashes a shockwave after a short delay, dealing <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} Physical Damage</c:physical> and <c:stun>stunning</c:stun> nearby enemies.`,
          ru: `Выпускает ударную волну после короткой задержки, нанося <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} физического урона</c:physical> и <c:stun>оглушая</c:stun> ближайших врагов.`,
          br: `Libera uma onda de choque após um curto atraso, causando <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dano físico</c:physical> e <c:stun>atordoando</c:stun> inimigos próximos.`,
          fr: `Libère une onde de choc après un court délai, infligeant <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} dégâts physiques</c:physical> et <c:stun>étourdissant</c:stun> les ennemis proches.`,
          zh: `延遲後釋放衝擊波，造成 <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} 物理傷害</c:physical>並使附近敵人暈眩。`,
          cz: `Po krátké prodlevě uvolní šokovou vlnu, která způsobí <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} fyzického poškození</c:physical> a <c:stun>omráčí</c:stun> blízké nepřátele.`,
          vi: `Sau một khoảng trễ ngắn, phóng ra sóng xung kích gây <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} sát thương vật lý</c:physical> và làm <c:stun>choáng</c:stun> kẻ địch gần đó.`,
          id: `Melepaskan <c:control>gelombang</c:control> kejut setelah jeda singkat, memberikan <c:physical>${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} Physical Damage</c:physical> dan membuat musuh di sekitar terkena <c:stun>stun</c:stun>.`,
          kr: `짧은 지연 후 충격파를 발생시켜 주변 적에게 <c:physical>물리 피해</c:physical> ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE}를 입히고 기절시킵니다.`,
        },
      }
    }
    case ItemList.Plate_Shield: {
      const moveSpeedSlow = fixed(ItemAbilityData.PLATE_SHIELD_SLOW_AOE * 100, 1)
      const attackSpeedSlow = fixed(ItemAbilityData.PLATE_SHIELD_ATTACK_SPEED_REDUCTION * 100, 1)
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
          kr: `판금 방패`,
        },
        descActive: {
          en: `Release a shockwave that reveals enemies, deals <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Physical Damage</c:physical>, and <c:slow>reduces Movement Speed by ${moveSpeedSlow}%</c:slow> and <c:attackslow>Attack Speed by ${attackSpeedSlow}%</c:attackslow>.`,
          ru: `Выпускает ударную волну, которая раскрывает врагов, наносит <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} физического урона</c:physical> и <c:slow>снижает скорость передвижения на ${moveSpeedSlow}%</c:slow> и <c:attackslow>скорость атаки на ${attackSpeedSlow}%</c:attackslow>.`,
          br: `Libera uma onda de choque que revela inimigos, causa <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dano físico</c:physical> e <c:slow>reduz a Velocidade de Movimento em ${moveSpeedSlow}%</c:slow> e a <c:attackslow>Velocidade de Ataque em ${attackSpeedSlow}%</c:attackslow>.`,
          fr: `Libère une onde de choc qui révèle les ennemis, inflige <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dégâts physiques</c:physical> et <c:slow>réduit la vitesse de déplacement de ${moveSpeedSlow}%</c:slow> et la <c:attackslow>vitesse d'attaque de ${attackSpeedSlow}%</c:attackslow>.`,
          zh: `釋放衝擊波，揭露敵人，造成 <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} 物理傷害</c:physical>，並<c:slow>降低 ${moveSpeedSlow}% 移動速度</c:slow>和<c:attackslow>${attackSpeedSlow}% 攻擊速度</c:attackslow>。`,
          cz: `Uvolní šokovou vlnu, která odhalí nepřátele, způsobí <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} fyzického poškození</c:physical> a <c:slow>sníží rychlost pohybu o ${moveSpeedSlow}%</c:slow> a <c:attackslow>rychlost útoku o ${attackSpeedSlow}%</c:attackslow>.`,
          vi: `Phóng sóng xung kích, phát hiện kẻ địch, gây <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} sát thương vật lý</c:physical>, <c:slow>giảm ${moveSpeedSlow}% tốc độ di chuyển</c:slow> và <c:attackslow>${attackSpeedSlow}% tốc độ đánh</c:attackslow>.`,
          id: `Melepaskan <c:control>gelombang</c:control> kejut yang mengungkap musuh, memberikan <c:physical>${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} Physical Damage</c:physical>, <c:slow>mengurangi Movement Speed sebesar ${moveSpeedSlow}%</c:slow> dan <c:attackslow>Attack Speed sebesar ${attackSpeedSlow}%</c:attackslow>.`,
          kr: `충격파를 발생시켜 적을 드러내고, <c:physical>물리 피해</c:physical> ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE}를 입히며, <c:slow>이동 속도를 ${moveSpeedSlow}%</c:slow>, <c:attackslow>공격 속도를 ${attackSpeedSlow}%</c:attackslow>만큼 감소시킵니다.`,
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
          id: 'Pelindung Kirin',
          kr: `기린의 수호자`,
        },
        descPassive: {
          en: `<c:bonus>Blocks the next crowd control effect and grants immunity to crowd control</c:bonus>.`,
          ru: `<c:bonus>Блокирует следующий эффект контроля и даёт иммунитет к контролю</c:bonus>.`,
          br: `<c:bonus>Bloqueia o próximo efeito de controle de grupo e concede imunidade a controle</c:bonus>.`,
          fr: `<c:bonus>Bloque le prochain effet de contrôle et confère une immunité au contrôle</c:bonus>.`,
          zh: `<c:bonus>阻擋下一次控制效果並免疫控制</c:bonus>。`,
          cz: `<c:bonus>Blokuje další efekt kontroly a poskytuje imunitu vůči kontrole</c:bonus>.`,
          vi: `<c:bonus>Chặn hiệu ứng khống chế tiếp theo và miễn nhiễm khống chế</c:bonus>.`,
          id: `<c:bonus>Memblokir efek crowd control berikutnya dan memberikan kekebalan terhadap crowd control</c:bonus>.`,
          kr: `<c:bonus>다음 군중 제어 효과를 차단하고 군중 제어에 면역</c:bonus>이 됩니다.`,
        },
      }
    }
    /** Rings */
    case ItemList.Demon_Sabre: {
      const maxStacks = ItemAbilityData.DEMON_SABRE_ARP_MAX_STACKS
      const armorReduction = ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION
      const maxArmorReduction = fixed(armorReduction * maxStacks, 1)

      return {
        name: {
          en: 'Demon Sabre',
          ru: 'Сабля демона',
          br: 'Sabre Demoníaco',
          fr: 'Sabre du démon',
          zh: '惡魔軍刀',
          cz: 'Démonská šavle',
          vi: 'Đao Quỷ',
          id: 'Sabre Iblis',
          kr: `악마의 군도`,
        },
        descPassive: {
          en: `Applies Demonic Weakening, stacking up to ${maxStacks} times. Each stack <c:physical>reduces Armor by ${armorReduction}</c:physical> <c:physical>(Max ${maxArmorReduction} Armor)</c:physical>.`,
          ru: `Накладывает Демоническое ослабление, суммируется до ${maxStacks} раз. Каждый эффект <c:physical>снижает броню на ${armorReduction}</c:physical> <c:physical>(макс. ${maxArmorReduction} брони)</c:physical>.`,
          br: `Aplica Enfraquecimento Demoníaco, acumulando até ${maxStacks} vezes. Cada acúmulo <c:physical>reduz a Armadura em ${armorReduction}</c:physical> <c:physical>(máx. ${maxArmorReduction} de Armadura)</c:physical>.`,
          cz: `Aplikuje Démonické oslabení, které se může vrstvit až ${maxStacks}×. Každá vrstva <c:physical>snižuje brnění o ${armorReduction}</c:physical> <c:physical>(max. ${maxArmorReduction} brnění)</c:physical>.`,
          fr: `Applique Affaiblissement démoniaque, cumulable jusqu'à ${maxStacks} fois. Chaque cumul <c:physical>réduit l'armure de ${armorReduction}</c:physical> <c:physical>(max. ${maxArmorReduction} d'armure)</c:physical>.`,
          zh: `施加惡魔削弱效果，最多可疊加 ${maxStacks} 層。每層<c:physical>降低 ${armorReduction} 點護甲</c:physical><c:physical>（最多 ${maxArmorReduction} 點護甲）</c:physical>。`,
          vi: `Áp dụng hiệu ứng Suy Yếu Quỷ, cộng dồn tối đa ${maxStacks} lần. Mỗi cộng dồn <c:physical>giảm ${armorReduction} giáp</c:physical> <c:physical>(tối đa ${maxArmorReduction} giáp)</c:physical>.`,
          id: `Memberikan efek Pelemahan Iblis, dapat ditumpuk hingga ${maxStacks} kali. Setiap tumpukan <c:physical>mengurangi Armor sebesar ${armorReduction}</c:physical> <c:physical>(maks. ${maxArmorReduction} Armor)</c:physical>.`,
          kr: `악마의 쇠약 효과를 적용하며, 최대 ${maxStacks}회까지 중첩됩니다. 중첩당 <c:physical>방어력을 ${armorReduction}만큼 감소</c:physical>시킵니다 <c:physical>(최대 방어력 ${maxArmorReduction})</c:physical>.`,
        },
      }
    }
    case ItemList.Void_Band: {
      const executionThreshold = fixed(ItemAbilityData.VOID_BAND_EXECUTE_THRESHOLD * 100, 0)
      const killAbilityHaste = ItemAbilityData.VOID_BAND_KILL_ABILITY_HASTE

      return {
        name: {
          en: 'Void Band',
          ru: 'Перстень пустоты',
          br: 'Faixa do Vazio',
          fr: 'Bande du néant',
          zh: '虛空指環',
          cz: 'Prsten prázdnoty',
          vi: 'Nhẫn Hư Vô',
          id: 'Cincin Kehampaan',
          kr: `공허의 반지`,
        },
        descPassive: {
          en: `Dealing <c:magical>magical damage</c:magical> instantly executes enemies below <c:health>${executionThreshold}% Health</c:health>.`,
          ru: `Нанесение <c:magical>магического урона</c:magical> мгновенно казнит врагов с уровнем <c:health>здоровья ниже ${executionThreshold}%</c:health>.`,
          br: `Causar <c:magical>dano mágico</c:magical> executa instantaneamente inimigos <c:health>abaixo de ${executionThreshold}% de Vida</c:health>.`,
          fr: `Infliger des <c:magical>dégâts magiques</c:magical> exécute instantanément les ennemis <c:health>en dessous de ${executionThreshold}% de santé</c:health>.`,
          zh: `造成<c:magical>魔法傷害</c:magical>會立即處決<c:health>生命值低於 ${executionThreshold}%</c:health> 的敵人。`,
          cz: `Způsobení <c:magical>magického poškození</c:magical> okamžitě popraví nepřátele <c:health>pod ${executionThreshold}% zdraví</c:health>.`,
          vi: `Gây <c:magical>sát thương phép</c:magical> sẽ kết liễu ngay lập tức kẻ địch <c:health>dưới ${executionThreshold}% Máu</c:health>.`,
          id: `Memberikan <c:magical>damage sihir</c:magical> akan langsung mengeksekusi musuh <c:health>di bawah ${executionThreshold}% Health</c:health>.`,
          kr: `<c:magical>마법 피해</c:magical>를 입히면 <c:health>체력이 ${executionThreshold}% 이하</c:health>인 적을 즉시 처형합니다.`,
        },
        descPassive2: {
          en: `Grants <c:cooldown>${killAbilityHaste} Ability Haste</c:cooldown> when killing an enemy hero.`,
          ru: `Убийство героя противника даёт <c:cooldown>${killAbilityHaste} ускорения умений</c:cooldown>.`,
          br: `Eliminar um herói inimigo concede <c:cooldown>${killAbilityHaste} de Aceleração de Habilidade</c:cooldown>.`,
          fr: `Éliminer un héros ennemi accorde <c:cooldown>${killAbilityHaste} d'accélération de compétence</c:cooldown>.`,
          zh: `擊殺敵方英雄可獲得 <c:cooldown>${killAbilityHaste} 技能急速</c:cooldown>。`,
          cz: `Zabití nepřátelského hrdiny udělí <c:cooldown>${killAbilityHaste} zrychlení schopností</c:cooldown>.`,
          vi: `Hạ gục tướng địch nhận <c:cooldown>${killAbilityHaste} Tăng Tốc Kỹ Năng</c:cooldown>.`,
          id: `Membunuh hero musuh memberikan <c:cooldown>${killAbilityHaste} Ability Haste</c:cooldown>.`,
          kr: `적 영웅을 처치하면 <c:cooldown>스킬 가속 ${killAbilityHaste}</c:cooldown>을 얻습니다.`,
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
          kr: `신성한 반지`,
        },
        descActive: {
          en: `<c:dash>Dash</c:dash> forward on activation.`,
          ru: `При активации совершает <c:dash>рывок</c:dash> вперёд.`,
          br: `<c:dash>Avança</c:dash> para frente ao ativar.`,
          fr: `<c:dash>Fonce</c:dash> vers l'avant à l'activation.`,
          zh: `激活時向前<c:dash>衝刺</c:dash>。`,
          cz: `Při aktivaci <c:dash>dash</c:dash> vpřed.`,
          vi: `<c:dash>Lướt</c:dash> về phía trước khi kích hoạt.`,
          id: `<c:dash>Dash</c:dash> ke depan saat diaktifkan.`,
          kr: `활성화 시 앞으로 <c:dash>돌진</c:dash>합니다.`,
        },
        descPassive: {
          en: `<c:heal>Increases all healing by ${bonusHealing}%</c:heal>.`,
          ru: `<c:heal>увеличивает всё исцеление на ${bonusHealing}%</c:heal>.`,
          br: `<c:heal>Aumenta toda a cura em ${bonusHealing}%</c:heal>.`,
          fr: `<c:heal>augmente tous les soins de ${bonusHealing}%</c:heal>.`,
          zh: `<c:heal>提高所有治療效果 ${bonusHealing}%</c:heal>。`,
          cz: `<c:heal>zvyšuje veškeré léčení o ${bonusHealing}%</c:heal>.`,
          vi: `<c:heal>Tăng tất cả hiệu quả hồi máu thêm ${bonusHealing}%</c:heal>.`,
          id: `<c:heal>Meningkatkan semua penyembuhan sebesar ${bonusHealing}%</c:heal>.`,
          kr: `<c:heal>모든 치유량을 ${bonusHealing}%만큼 증가시킵니다</c:heal>.`,
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
          kr: `얼어붙은 여제의 반지`,
        },
        descActive: {
          en: `Release a freezing wave, dealing <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} Magic Damage</c:magical>.\n\nApplies Frigid Curse if the target is not affected.\n<c:freeze>Freezes</c:freeze> the target if already affected.`,
          ru: `Выпускает ледяную волну, наносящую <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} магического урона</c:magical>.\n\nНакладывает Морозное проклятие, если цель не под эффектом.\nЗамораживает цель, если эффект уже есть.`,
          br: `Libera uma onda <c:freeze>congelante</c:freeze>, causando <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} de dano mágico</c:magical>.\n\nAplica Maldição do <c:freeze>Gelo</c:freeze> se o alvo não estiver afetado.\n<c:freeze>Congela</c:freeze> o alvo se já estiver afetado.`,
          fr: `Libère une onde glaciale, inflige <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} dégâts magiques</c:magical>.\n\nApplique Malédiction glaciale si la cible n'est pas affectée.\nGèle la cible si elle est déjà affectée.`,
          zh: `釋放寒冰波動，造成 <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} 魔法傷害</c:magical>。\n\n若目標未受寒冷詛咒影響，則施加詛咒。\n若已受影響，則凍結目標。`,
          cz: `Uvolní mrazivou vlnu, která způsobí <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} magického poškození</c:magical>.\n\nAplikuje Zmrzlou kletbu, pokud cíl není ovlivněn.\n<c:freeze>Zmrazí</c:freeze> cíl, pokud již ovlivněn je.`,
          vi: `Phóng sóng băng giá, gây <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} sát thương phép</c:magical>.\n\nÁp dụng Lời Nguyền Lạnh Giá nếu mục tiêu chưa bị ảnh hưởng.\n<c:freeze>Đóng băng</c:freeze> mục tiêu nếu đã bị ảnh hưởng.`,
          id: `Melepaskan <c:freeze>gelombang</c:freeze> beku, memberikan <c:magical>${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE} Magic Damage</c:magical>.\n\nMemberikan Frigid Curse jika target belum terkena.\nMembekukan target jika sudah terkena.`,
          kr: `냉기 파동을 방출하여 <c:magical>마법 피해</c:magical> ${ItemAbilityData.RING_OF_THE_FROZEN_EMPRESS_DAMAGE}를 입힙니다.\n\n대상이 걸려 있지 않다면 혹한의 저주를 적용합니다.\n이미 걸려 있다면 대상을 얼립니다.`,
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
          cz: 'Chronosův prsten',
          fr: 'Anneau de Chronos',
          vi: 'Nhẫn Thời Gian',
          id: 'Cincin Kronos',
          kr: `크로노스의 반지`,
        },
        descPassive: {
          en: `<c:cooldown>Reduces all cooldowns by ${cdReduction}</c:cooldown>.`,
          ru: `<c:cooldown>Уменьшает все перезарядки на ${cdReduction}</c:cooldown>.`,
          br: `<c:cooldown>Reduz todos os tempos de recarga em ${cdReduction}</c:cooldown>.`,
          fr: `<c:cooldown>Réduit tous les temps de recharge de ${cdReduction}</c:cooldown>.`,
          zh: `<c:cooldown>使所有冷卻時間減少 ${cdReduction}</c:cooldown>。`,
          cz: `<c:cooldown>Zkracuje všechny doby obnovení o ${cdReduction}</c:cooldown>.`,
          vi: `<c:cooldown>Giảm tất cả thời gian hồi chiêu ${cdReduction}</c:cooldown>.`,
          id: `<c:cooldown>Mengurangi semua cooldown sebesar ${cdReduction}</c:cooldown>.`,
          kr: `<c:cooldown>모든 재사용 대기시간을 ${cdReduction}만큼 감소</c:cooldown>시킵니다.`,
        },
        descPassive2: {
          en: `Resets Ability cooldowns (does not affect Item cooldowns).`,
          ru: `Убийства или ассисты сбрасывают перезарядку способностей (не влияет на предметы).`,
          br: `Eliminações ou assistências resetam o tempo de recarga das habilidades (não afeta itens).`,
          fr: `Les éliminations ou assistances réinitialisent les temps de recharge des compétences (n'affecte pas les objets).`,
          zh: `擊殺或助攻會重置技能冷卻（不影響物品冷卻）。`,
          cz: `Zabití nebo asistence obnoví schopnosti (neovlivňuje předměty).`,
          vi: `Hạ gục hoặc hỗ trợ sẽ đặt lại hồi chiêu kỹ năng (không ảnh hưởng đến trang bị).`,
          id: `Kill atau assist mereset cooldown Ability (tidak mempengaruhi Item).`,
          kr: `처치 또는 어시스트 시 스킬의 재사용 대기시간이 초기화됩니다 (아이템 재사용 대기시간에는 영향을 미치지 않습니다).`,
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
          cz: 'Zkažený prsten',
          fr: 'Anneau corrompu',
          vi: 'Nhẫn Tà Đạo',
          id: 'Cincin Korup',
          kr: `타락한 반지`,
        },
        descPassive: getNimbleBowDescription(),
      }
    }
    case ItemList.Ring_Of_Inner_Fire: {
      const burn = fixed(ItemAbilityData.RING_OF_INNER_FIRE_BURN_PERCENT * 100, 0)
      const magicResistance = fixed(ItemAbilityData.RING_OF_INNER_FIRE_MAGIC_RESISTANCE_REDUCTION * 100, 0)
      const burnDuration = toSecRaw(ItemAbilityData.RING_OF_INNER_FIRE_BURN_DURATION)
      return {
        name: {
          en: 'Ring of Inner Fire',
          ru: 'Кольцо внутреннего огня',
          br: 'Anel do Fogo Interior',
          zh: '內焰之戒',
          cz: 'Prsten vnitřního ohně',
          fr: 'Anneau du feu intérieur',
          vi: 'Nhẫn Nội Hỏa',
          id: 'Cincin Api Batin',
          kr: `내면의 불꽃 반지`,
        },
        descPassive: {
          en: `Slow Burn: Dealing <c:magical>Magic Damage</c:magical> to an enemy Hero <c:magical>burns them for ${burn}% of that damage over ${burnDuration} seconds</c:magical> and <c:magical>reduces their Magic Resistance by ${magicResistance}%</c:magical>. The cooldown applies per target.`,
          ru: `Медленное горение: нанесение <c:magical>магического урона</c:magical> герою врага <c:magical>поджигает его на ${burn}% этого урона за ${burnDuration} сек.</c:magical> и <c:magical>снижает его магическую защиту на ${magicResistance}%</c:magical>. Перезарядка отдельная для каждой цели.`,
          br: `Queima Lenta: Causar <c:magical>Dano Mágico</c:magical> a um Herói inimigo <c:magical>o queima por ${burn}% desse dano ao longo de ${burnDuration} segundos</c:magical> e <c:magical>reduz sua Resistência Mágica em ${magicResistance}%</c:magical>. O tempo de recarga é por alvo.`,
          fr: `Combustion lente : infliger des <c:magical>dégâts magiques</c:magical> à un héros ennemi <c:magical>le brûle pour ${burn}% de ces dégâts sur ${burnDuration} secondes</c:magical> et <c:magical>réduit sa résistance magique de ${magicResistance}%</c:magical>. Le temps de recharge s'applique par cible.`,
          zh: `緩燃：對敵方英雄造成<c:magical>魔法傷害</c:magical>時，<c:magical>在 ${burnDuration} 秒內灼燒其該次傷害的 ${burn}%</c:magical>，並<c:magical>降低其魔法抗性 ${magicResistance}%</c:magical>。冷卻時間依目標分別計算。`,
          cz: `Pomalé hoření: Způsobení <c:magical>magického poškození</c:magical> nepřátelskému hrdinovi <c:magical>ho zapálí za ${burn}% tohoto poškození po dobu ${burnDuration} sekund</c:magical> a <c:magical>sníží jeho magickou odolnost o ${magicResistance}%</c:magical>. Doba obnovení platí zvlášť pro každý cíl.`,
          vi: `Cháy Âm Ỉ: Gây <c:magical>Sát Thương Phép</c:magical> lên Tướng địch sẽ <c:magical>thiêu đốt chúng ${burn}% lượng sát thương đó trong ${burnDuration} giây</c:magical> và <c:magical>giảm ${magicResistance}% Kháng Phép của chúng</c:magical>. Thời gian hồi tính riêng cho từng mục tiêu.`,
          id: `Slow Burn: Memberikan <c:magical>Damage Sihir</c:magical> kepada Hero musuh <c:magical>membakar mereka sebesar ${burn}% dari damage tersebut selama ${burnDuration} detik</c:magical> dan <c:magical>mengurangi Magic Resistance mereka sebesar ${magicResistance}%</c:magical>. Cooldown berlaku per target.`,
          kr: `느린 발화: 적 영웅에게 <c:magical>마법 피해</c:magical>를 입히면 <c:magical>${burnDuration}초 동안 해당 피해량의 ${burn}%만큼 화상</c:magical>을 입히고 <c:magical>마법 저항력을 ${magicResistance}% 감소</c:magical>시킵니다. 재사용 대기시간은 대상별로 적용됩니다.`,
        },
      }
    }
    /** Armors */
    case ItemList.Frost_Armor: {
      const reduction = fixed(ItemAbilityData.ARMOR_OF_THE_FROZEN_EMPEROR_HEALING_REDUCTION * 100, 1)
      const attackSpeedReduction = fixed(ItemAbilityData.ARMOR_OF_THE_FROZEN_EMPEROR_ATTACK_SPEED_REDUCTION * 100, 1)
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
          kr: `얼어붙은 황제의 갑옷`,
        },
        descPassive: {
          en: `<c:attackslow>Reduces Attack Speed of nearby enemies by ${attackSpeedReduction}%</c:attackslow> and <c:healingreduction>reduces healing, regeneration, and lifesteal effects by ${reduction}%</c:healingreduction>.`,
          ru: `<c:attackslow>Снижает скорость атаки ближайших врагов на ${attackSpeedReduction}%</c:attackslow> и <c:healingreduction>уменьшает эффекты лечения, регенерации и вампиризма на ${reduction}%</c:healingreduction>.`,
          br: `<c:attackslow>Reduz a Velocidade de Ataque dos inimigos próximos em ${attackSpeedReduction}%</c:attackslow> e <c:healingreduction>reduz os efeitos de cura, regeneração e roubo de vida em ${reduction}%</c:healingreduction>.`,
          fr: `<c:attackslow>Réduit la vitesse d'attaque des ennemis proches de ${attackSpeedReduction}%</c:attackslow> et <c:healingreduction>réduit les effets de soins, régénération et vol de vie de ${reduction}%</c:healingreduction>.`,
          zh: `<c:attackslow>降低附近敵人的攻擊速度 ${attackSpeedReduction}%</c:attackslow>並<c:healingreduction>降低治療、生命恢復與吸血效果 ${reduction}%</c:healingreduction>。`,
          cz: `<c:attackslow>Snižuje rychlost útoku blízkých nepřátel o ${attackSpeedReduction}%</c:attackslow> a <c:healingreduction>snižuje účinnost léčení, regenerace a vysávání života o ${reduction}%</c:healingreduction>.`,
          vi: `<c:attackslow>Giảm Tốc Độ Đánh của kẻ địch gần đó ${attackSpeedReduction}%</c:attackslow> và <c:healingreduction>giảm hiệu quả hồi máu, hồi phục và hút máu ${reduction}%</c:healingreduction>.`,
          id: `<c:attackslow>Mengurangi Attack Speed musuh di sekitar sebesar ${attackSpeedReduction}%</c:attackslow> dan <c:healingreduction>mengurangi efek penyembuhan, regenerasi, dan lifesteal sebesar ${reduction}%</c:healingreduction>.`,
          kr: `<c:attackslow>주변 적의 공격 속도를 ${attackSpeedReduction}%만큼 감소</c:attackslow>시키고, <c:healingreduction>회복, 재생, 흡혈 효과를 ${reduction}%만큼 감소</c:healingreduction>시킵니다.`,
        },
      }
    }

    case ItemList.Void_Armor: {
      const moveSpeed = fixed(ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS * 100, 1)

      return {
        name: {
          en: 'Void Armor',
          ru: 'Броня пустоты',
          br: 'Armadura do Abismo',
          zh: '虛空鎧甲',
          cz: 'Prázdnotové brnění',
          fr: 'Armure du vide',
          vi: 'Giáp Hư Vô',
          id: 'Baju Zirah Kehampaan',
          kr: `공허의 갑옷`,
        },
        descActive: {
          en: `Grants <c:bonus>invisibility</c:bonus> and <c:movespeed>+${moveSpeed}% Movement Speed</c:movespeed>.\n\nCasting an Ability or attacking breaks invisibility and grants an additional <c:armor>+${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Attack Damage</c:armor>, while the <c:movespeed>Movement Speed bonus</c:movespeed> is maintained.`,
          ru: `Даёт <c:bonus>невидимость</c:bonus> и <c:movespeed>+${moveSpeed}% к скорости передвижения</c:movespeed>.\n\nПрименение способности или атака снимает невидимость и даёт дополнительно <c:armor>+${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} силы атаки</c:armor>, при этом <c:movespeed>бонус скорости передвижения</c:movespeed> сохраняется.`,
          br: `Concede <c:bonus>invisibilidade</c:bonus> e <c:movespeed>+${moveSpeed}% de Velocidade de Movimento</c:movespeed>.\n\nUsar habilidades ou atacar remove a invisibilidade e concede adicionalmente <c:armor>+${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} de Dano de Ataque</c:armor>, mantendo o <c:movespeed>bônus de Velocidade de Movimento</c:movespeed>.`,
          fr: `Confère <c:bonus>l'invisibilité</c:bonus> et <c:movespeed>+${moveSpeed}% de vitesse de déplacement</c:movespeed>.\n\nLancer une capacité ou attaquer supprime l'invisibilité et accorde en plus <c:armor>+${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} de dégâts d'attaque</c:armor>, tandis que le <c:movespeed>bonus de vitesse de déplacement</c:movespeed> est conservé.`,
          zh: `獲得<c:bonus>隱身</c:bonus>並<c:movespeed>提高 ${moveSpeed}% 移動速度</c:movespeed>。\n\n施放技能或攻擊會解除隱身，並額外獲得 <c:armor>${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} 攻擊力</c:armor>，<c:movespeed>移動速度加成</c:movespeed>則會保留。`,
          cz: `Získáš <c:bonus>neviditelnost</c:bonus> a <c:movespeed>+${moveSpeed}% rychlosti pohybu</c:movespeed>.\n\nPoužití schopnosti nebo útok zruší neviditelnost a navíc poskytne <c:armor>+${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} poškození útoku</c:armor>, zatímco <c:movespeed>bonus rychlosti pohybu</c:movespeed> zůstává zachován.`,
          vi: `Nhận <c:bonus>trạng thái tàng hình</c:bonus> và <c:movespeed>+${moveSpeed}% Tốc Độ Di Chuyển</c:movespeed>.\n\nDùng kỹ năng hoặc tấn công sẽ hủy tàng hình và nhận thêm +<c:armor>${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Sát Thương Vật Lý</c:armor>, trong khi <c:movespeed>bonus Tốc Độ Di Chuyển</c:movespeed> vẫn được duy trì.`,
          id: `Memberikan <c:bonus>invisibilitas</c:bonus> dan <c:movespeed>+${moveSpeed}% Kecepatan Gerak</c:movespeed>.\n\nMenggunakan kemampuan atau menyerang akan menghilangkan invisibilitas dan memberikan tambahan <c:armor>+${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} Damage</c:armor>, sementara <c:movespeed>bonus Kecepatan Gerak</c:movespeed> tetap bertahan.`,
          kr: `<c:bonus>은신</c:bonus> 상태가 되며 <c:movespeed>이동 속도 +${moveSpeed}%</c:movespeed>를 얻습니다.\n\n스킬을 시전하거나 공격하면 은신이 해제되고 추가로 <c:armor>공격력 +${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE}</c:armor>를 얻으며, <c:movespeed>이동 속도 증가 효과</c:movespeed>는 유지됩니다.`,
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
          id: 'Baju Zirah Vampir',
          kr: `흡혈의 갑옷`,
        },
        descActive: {
          en: `Upon activation, <c:dispel>cleanse all negative effects</c:dispel> and for the duration <c:heal>restore ${value}% of damage dealt as Health</c:heal>.`,
          ru: `При активации <c:dispel>снимает все негативные эффекты</c:dispel> и на время эффекта <c:heal>восстанавливает ${value}% от нанесённого урона в виде здоровья</c:heal>.`,
          br: `Ao ativar, <c:dispel>remove todos os efeitos negativos</c:dispel> e durante o efeito <c:heal>restaura ${value}% do dano causado como Vida</c:heal>.`,
          fr: `À l'activation, <c:dispel>supprime tous les effets négatifs</c:dispel> et pendant la durée <c:heal>restaure ${value}% des dégâts infligés sous forme de santé</c:heal>.`,
          zh: `啟動時<c:dispel>清除所有負面效果</c:dispel>，並在持續期間<c:heal>將造成傷害的 ${value}% 轉化為生命值</c:heal>。`,
          cz: `Po aktivaci <c:dispel>odstraní všechny negativní efekty</c:dispel> a po dobu efektu <c:heal>obnovuje ${value}% způsobeného poškození jako zdraví</c:heal>.`,
          vi: `Khi kích hoạt, <c:dispel>loại bỏ tất cả hiệu ứng xấu</c:dispel> và trong thời gian hiệu lực <c:heal>hồi lại ${value}% sát thương gây ra thành Máu</c:heal>.`,
          id: `Saat diaktifkan, <c:dispel>menghapus semua efek negatif</c:dispel> dan selama durasi <c:heal>memulihkan ${value}% dari damage yang diberikan sebagai Health</c:heal>.`,
          kr: `활성화 시 <c:dispel>모든 부정적 효과를 정화</c:dispel>하고, 지속시간 동안 <c:heal>입힌 피해의 ${value}%를 체력으로 회복</c:heal>합니다.`,
        },
      }
    }

    case ItemList.Hunters_Cloak:
      return {
        name: {
          en: "Hunter's Cloak",
          ru: 'Плащ охотника',
          br: 'Manto do Caçador',
          fr: 'Cape du chasseur',
          zh: '獵人斗篷',
          cz: 'Lovcův plášť',
          vi: 'Áo Choàng Thợ Săn',
          id: 'Jubah Pemburu',
          kr: `사냥꾼의 망토`,
        },
      }

    case ItemList.Cloak_Of_Nature: {
      const magicResistPerStack = ItemAbilityData.CLOAK_OF_NATURE_MAGIC_RESIST_PER_STACK
      const hpRegenPerStack = ItemAbilityData.CLOAK_OF_NATURE_HP_REGEN_PER_STACK
      const maxStacks = ItemAbilityData.CLOAK_OF_NATURE_MAX_STACKS
      const maxStackMoveSpeed = fixed(ItemAbilityData.CLOAK_OF_NATURE_MAX_STACK_MOVE_SPEED * 100, 0)
      const maxStackAttackSpeed = fixed(ItemAbilityData.CLOAK_OF_NATURE_MAX_STACK_ATTACK_SPEED * 100, 0)

      return {
        name: {
          en: 'Cloak of Nature',
          ru: 'Плащ природы',
          br: 'Manto da Natureza',
          fr: 'Cape de la nature',
          zh: '自然斗篷',
          cz: 'Plášť přírody',
          vi: 'Áo Choàng Thiên Nhiên',
          id: 'Jubah Alam',
          kr: `자연의 망토`,
        },
        descPassive: {
          en: `Taking any damage <c:bonus>grants +${magicResistPerStack} Magic Resistance</c:bonus> and <c:heal>+${hpRegenPerStack} HP Regeneration</c:heal>, stacking up to ${maxStacks} times. At max stacks, also grants <c:movespeed>+${maxStackMoveSpeed}% Movement Speed</c:movespeed> and <c:attackspeed>+${maxStackAttackSpeed}% Attack Speed</c:attackspeed>.`,
          ru: `Получение любого урона <c:bonus>даёт +${magicResistPerStack} к сопротивлению магии</c:bonus> и <c:heal>+${hpRegenPerStack} к регенерации здоровья</c:heal>, суммируется до ${maxStacks} раз. При максимуме зарядов также даёт <c:movespeed>+${maxStackMoveSpeed}% скорости передвижения</c:movespeed> и <c:attackspeed>+${maxStackAttackSpeed}% скорости атаки</c:attackspeed>.`,
          br: `Receber qualquer dano <c:bonus>concede +${magicResistPerStack} de Resistência Mágica</c:bonus> e <c:heal>+${hpRegenPerStack} de Regeneração de Vida</c:heal>, acumulando até ${maxStacks} vezes. No máximo de acúmulos, também concede <c:movespeed>+${maxStackMoveSpeed}% de Velocidade de Movimento</c:movespeed> e <c:attackspeed>+${maxStackAttackSpeed}% de Velocidade de Ataque</c:attackspeed>.`,
          fr: `Subir n'importe quels dégâts <c:bonus>accorde +${magicResistPerStack} de résistance magique</c:bonus> et <c:heal>+${hpRegenPerStack} de régénération de vie</c:heal>, cumulable jusqu'à ${maxStacks} fois. Au maximum de cumuls, accorde aussi <c:movespeed>+${maxStackMoveSpeed}% de vitesse de déplacement</c:movespeed> et <c:attackspeed>+${maxStackAttackSpeed}% de vitesse d'attaque</c:attackspeed>.`,
          zh: `每次受到任何傷害時<c:bonus>獲得 +${magicResistPerStack} 魔法抗性</c:bonus>和<c:heal>+${hpRegenPerStack} 生命恢復</c:heal>，最多疊加 ${maxStacks} 層。達到最大層數時，額外獲得 <c:movespeed>+${maxStackMoveSpeed}% 移動速度</c:movespeed>和<c:attackspeed>+${maxStackAttackSpeed}% 攻擊速度</c:attackspeed>。`,
          cz: `Přijetí jakéhokoli poškození <c:bonus>udělí +${magicResistPerStack} magické odolnosti</c:bonus> a <c:heal>+${hpRegenPerStack} regenerace zdraví</c:heal>, vrství se až ${maxStacks}×. Při maximálním počtu vrstev navíc udělí <c:movespeed>+${maxStackMoveSpeed}% rychlosti pohybu</c:movespeed> a <c:attackspeed>+${maxStackAttackSpeed}% rychlosti útoku</c:attackspeed>.`,
          vi: `Mỗi lần chịu bất kỳ sát thương nào <c:bonus>nhận +${magicResistPerStack} kháng phép</c:bonus> và <c:heal>+${hpRegenPerStack} hồi máu</c:heal>, cộng dồn tối đa ${maxStacks} lần. Khi đạt tối đa cộng dồn, còn nhận thêm <c:movespeed>+${maxStackMoveSpeed}% tốc độ di chuyển</c:movespeed> và <c:attackspeed>+${maxStackAttackSpeed}% tốc độ đánh</c:attackspeed>.`,
          id: `Setiap menerima kerusakan apa pun <c:bonus>memberikan +${magicResistPerStack} Magic Resistance</c:bonus> dan <c:heal>+${hpRegenPerStack} HP Regeneration</c:heal>, menumpuk hingga ${maxStacks} kali. Pada tumpukan maksimum, juga memberikan <c:movespeed>+${maxStackMoveSpeed}% Movement Speed</c:movespeed> dan <c:attackspeed>+${maxStackAttackSpeed}% Attack Speed</c:attackspeed>.`,
          kr: `피해를 받을 때마다 <c:bonus>마법 저항력 +${magicResistPerStack}</c:bonus>과 <c:heal>체력 재생 +${hpRegenPerStack}</c:heal>을 얻으며, 최대 ${maxStacks}회까지 중첩됩니다. 최대 중첩 시 <c:movespeed>이동 속도 +${maxStackMoveSpeed}%</c:movespeed>와 <c:attackspeed>공격 속도 +${maxStackAttackSpeed}%</c:attackspeed>를 추가로 얻습니다.`,
        },
      }
    }

    case ItemList.Cloak_Of_Light:
      return {
        name: {
          en: 'Cloak of Light',
          ru: 'Плащ света',
          br: 'Manto da Luz',
          fr: 'Cape de lumière',
          zh: '光之斗篷',
          cz: 'Plášť světla',
          vi: 'Áo Choàng Ánh Sáng',
          id: 'Jubah Cahaya',
          kr: `빛의 망토`,
        },
        descActive: {
          en: getObserverWardDescription(),
        },
        descPassive: {
          en: `Grants <c:vision>True Sight</c:vision>, revealing invisible units within your vision.`,
          ru: `Даёт <c:vision>истинное зрение</c:vision>, раскрывая невидимые цели в пределах вашего обзора.`,
          br: `Concede <c:vision>Visão Verdadeira</c:vision>, revelando unidades invisíveis dentro da sua visão.`,
          fr: `Accorde la <c:vision>Vision Véritable</c:vision>, révélant les unités invisibles dans votre champ de vision.`,
          zh: `獲得<c:vision>真實視野</c:vision>，揭露視野範圍內的隱形單位。`,
          cz: `Poskytuje <c:vision>pravé vidění</c:vision> a odhaluje neviditelné jednotky v dosahu tvého vidění.`,
          vi: `Nhận <c:vision>Thị Giác Thật</c:vision>, phát hiện đơn vị tàng hình trong tầm nhìn của bạn.`,
          id: `Memberikan <c:vision>True Sight</c:vision>, mengungkap unit tak terlihat dalam jangkauan penglihatanmu.`,
          kr: `<c:vision>진실의 시야</c:vision>를 얻어 시야 범위 내의 보이지 않는 유닛을 드러냅니다.`,
        },
      }

    case ItemList.Antimagic_Cape: {
      const totalMagicResistance = ItemAbilityData.ANTIMAGIC_CAPE_BONUS_MAGIC_RESISTANCE

      return {
        name: {
          en: 'Antimagic Cape',
          ru: 'Антимагический плащ',
          br: 'Manto Antimagia',
          fr: 'Cape antimagie',
          zh: '反魔斗篷',
          cz: 'Antimagický plášť',
          vi: 'Áo Choàng Kháng Phép',
          id: 'Jubah Antisihir',
          kr: `반마법 망토`,
        },
        descActive: {
          en: `<c:dispel>Cleanses all negative effects</c:dispel>. Grants immunity to crowd control and <c:bonus>+${totalMagicResistance} Magic Resistance</c:bonus>.`,
          ru: `<c:dispel>Снимает все негативные эффекты</c:dispel>. Даёт иммунитет к эффектам контроля и <c:bonus>+${totalMagicResistance} к сопротивлению магии</c:bonus>.`,
          br: `<c:dispel>Remove todos os efeitos negativos</c:dispel>. Concede imunidade a controle de grupo e <c:bonus>+${totalMagicResistance} de resistência mágica</c:bonus>.`,
          fr: `<c:dispel>Supprime tous les effets négatifs</c:dispel>. Confère une immunité aux effets de contrôle et <c:bonus>+${totalMagicResistance} de résistance magique</c:bonus>.`,
          zh: `<c:dispel>清除所有負面效果</c:dispel>。免疫控制效果並獲得 <c:bonus>+${totalMagicResistance} 魔法抗性</c:bonus>。`,
          cz: `<c:dispel>Odstraní všechny negativní efekty</c:dispel>. Poskytne imunitu vůči efektům kontroly a <c:bonus>+${totalMagicResistance} odolnosti proti magii</c:bonus>.`,
          vi: `<c:dispel>Loại bỏ tất cả hiệu ứng xấu</c:dispel>. Miễn nhiễm khống chế và nhận <c:bonus>+${totalMagicResistance} kháng phép</c:bonus>.`,
          id: `<c:dispel>Menghapus semua efek negatif</c:dispel>. Memberikan kekebalan terhadap efek kontrol dan <c:bonus>+${totalMagicResistance} Magic Resistance</c:bonus>.`,
          kr: `<c:dispel>모든 부정적 효과를 정화</c:dispel>합니다. 군중 제어에 면역이 되며 <c:bonus>마법 저항력 +${totalMagicResistance}</c:bonus>을 얻습니다.`,
        },
      }
    }

    case ItemList.Bloodweaver_Cloak: {
      const sacrifice = fixed(ItemAbilityData.BLOODWEAVER_CLOAK_HEALTH_SACRIFICE_PERCENT * 100, 0)
      const amplification = fixed(ItemAbilityData.BLOODWEAVER_CLOAK_DAMAGE_AMPLIFICATION * 100, 0)
      const abilityPower = ItemAbilityData.BLOODWEAVER_CLOAK_AURA_ABILITY_POWER

      return {
        name: {
          en: 'Bloodweaver Cloak',
          ru: 'Плащ кровопряда',
          br: 'Manto do Tecelão de Sangue',
          fr: 'Cape du tisseur de sang',
          zh: '織血斗篷',
          cz: 'Plášť krvopředce',
          vi: 'Áo Choàng Dệt Huyết',
          id: 'Jubah Penenun Darah',
          kr: `피를 엮는 망토`,
        },
        descPassive: {
          en: `Blood Pact: Hitting an enemy with an Ability <c:health>sacrifices ${sacrifice}% of your current Health</c:health> and <c:bonus>increases your Ability damage by ${amplification}%</c:bonus>.`,
          ru: `Кровавый пакт: попадание способностью по врагу <c:health>отнимает ${sacrifice}% текущего здоровья</c:health> и <c:bonus>увеличивает урон ваших умений на ${amplification}%</c:bonus>.`,
          br: `Pacto de Sangue: Acertar um inimigo com uma Habilidade <c:health>sacrifica ${sacrifice}% da sua Vida atual</c:health> e <c:bonus>aumenta o dano das suas Habilidades em ${amplification}%</c:bonus>.`,
          fr: `Pacte de sang : toucher un ennemi avec une compétence <c:health>sacrifie ${sacrifice}% de vos points de vie actuels</c:health> et <c:bonus>augmente les dégâts de vos compétences de ${amplification}%</c:bonus>.`,
          zh: `血之契約：以技能命中敵人時，<c:health>犧牲目前 ${sacrifice}% 的生命值</c:health>並<c:bonus>提高技能傷害 ${amplification}%</c:bonus>。`,
          cz: `Krvavá smlouva: Zasažení nepřítele schopností <c:health>obětuje ${sacrifice}% tvého aktuálního zdraví</c:health> a <c:bonus>zvýší poškození tvých schopností o ${amplification}%</c:bonus>.`,
          vi: `Khế Ước Máu: Đánh trúng kẻ địch bằng Kỹ Năng sẽ <c:health>hy sinh ${sacrifice}% Máu hiện tại</c:health> và <c:bonus>tăng ${amplification}% sát thương Kỹ Năng của bạn</c:bonus>.`,
          id: `Blood Pact: Mengenai musuh dengan Kemampuan <c:health>mengorbankan ${sacrifice}% Health saat ini</c:health> dan <c:bonus>meningkatkan damage Kemampuan Anda sebesar ${amplification}%</c:bonus>.`,
          kr: `피의 계약: 스킬로 적을 맞히면 <c:health>현재 체력의 ${sacrifice}%를 희생</c:health>하고 <c:bonus>스킬 피해량이 ${amplification}% 증가</c:bonus>합니다.`,
        },
        descPassive2: {
          en: `<c:abilitypower>Grants +${abilityPower} Ability Power to the carrier and nearby allies</c:abilitypower>.`,
          ru: `<c:abilitypower>Даёт +${abilityPower} силы умений владельцу и ближайшим союзникам</c:abilitypower>.`,
          br: `<c:abilitypower>Concede +${abilityPower} de Poder de Habilidade ao portador e aliados próximos</c:abilitypower>.`,
          fr: `<c:abilitypower>Accorde +${abilityPower} de puissance des compétences au porteur et aux alliés proches</c:abilitypower>.`,
          zh: `<c:abilitypower>為持有者和附近盟友提供 +${abilityPower} 技能威力</c:abilitypower>。`,
          cz: `<c:abilitypower>Poskytuje +${abilityPower} síly schopností nositeli a blízkým spojencům</c:abilitypower>.`,
          vi: `<c:abilitypower>Cung cấp +${abilityPower} Sức Mạnh Kỹ Năng cho bản thân và đồng minh gần</c:abilitypower>.`,
          id: `<c:abilitypower>Memberikan +${abilityPower} Ability Power kepada pengguna dan sekutu di dekatnya</c:abilitypower>.`,
          kr: `<c:abilitypower>소지자와 주변 아군에게 주문력 +${abilityPower}을 부여합니다</c:abilitypower>.`,
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
          kr: `타이탄의 갑옷`,
        },
        descActive: {
          en:
            `Become <c:immune>immune to all damage</c:immune> and <c:dispel>cleanse all negative effects</c:dispel>.\n\n` +
            `<c:heal>Gain +${ItemAbilityData.TITANS_ARMOR_REGENERATION} Health Regeneration</c:heal>.\n\n` +
            `Cannot move or use Abilities, Attacks, or Items during the effect.`,
          ru:
            `Становитесь <c:immune>неуязвимы</c:immune> и <c:dispel>снимаете все негативные эффекты</c:dispel>.\n\n` +
            `<c:heal>Получаете +${ItemAbilityData.TITANS_ARMOR_REGENERATION} регенерации здоровья</c:heal>.\n\n` +
            `Не можете двигаться или использовать способности, атаки и предметы во время действия.`,

          br:
            `Torna-se <c:immune>imune a todo dano</c:immune> e <c:dispel>remove todos os efeitos negativos</c:dispel>.\n\n` +
            `<c:heal>Ganha +${ItemAbilityData.TITANS_ARMOR_REGENERATION} de Regeneração de Vida</c:heal>.\n\n` +
            `Não pode se mover ou usar Habilidades, Ataques ou Itens durante o efeito.`,

          fr:
            `Devient <c:immune>immunisé à tous les dégâts</c:immune> et <c:dispel>supprime tous les effets négatifs</c:dispel>.\n\n` +
            `<c:heal>Gagne +${ItemAbilityData.TITANS_ARMOR_REGENERATION} de régénération de santé</c:heal>.\n\n` +
            `Ne peut pas bouger ni utiliser des capacités, attaques ou objets pendant l'effet.`,

          zh:
            `<c:immune>免疫所有傷害</c:immune>並<c:dispel>移除所有負面效果</c:dispel>。\n\n` +
            `<c:heal>獲得 +${ItemAbilityData.TITANS_ARMOR_REGENERATION} 生命恢復</c:heal>。\n\n` +
            `效果期間無法移動或使用技能、攻擊或道具。`,

          cz:
            `Staneš se <c:immune>imunní vůči veškerému poškození</c:immune> a <c:dispel>odstraníš všechny negativní efekty</c:dispel>.\n\n` +
            `<c:heal>Získáš +${ItemAbilityData.TITANS_ARMOR_REGENERATION} regenerace zdraví</c:heal>.\n\n` +
            `Během efektu se nemůžeš pohybovat ani používat schopnosti, útoky ani předměty.`,

          vi:
            `<c:immune>Miễn nhiễm mọi sát thương</c:immune> và <c:dispel>loại bỏ tất cả hiệu ứng xấu</c:dispel>.\n\n` +
            `<c:heal>Nhận +${ItemAbilityData.TITANS_ARMOR_REGENERATION} Hồi Máu</c:heal>.\n\n` +
            `Không thể di chuyển hoặc sử dụng Kỹ năng, Đòn đánh hay Trang bị trong thời gian hiệu lực.`,

          id:
            `Menjadi <c:immune>kebal terhadap semua kerusakan</c:immune> dan <c:dispel>menghapus semua efek negatif</c:dispel>.\n\n` +
            `<c:heal>Mendapatkan +${ItemAbilityData.TITANS_ARMOR_REGENERATION} Regenerasi Health</c:heal>.\n\n` +
            `Tidak dapat bergerak atau menggunakan Kemampuan, Serangan, atau Item selama efek.`,
          kr:
            `<c:immune>모든 피해에 면역</c:immune>이 되고 <c:dispel>모든 부정적 효과를 정화</c:dispel>합니다.\n\n` +
            `<c:heal>체력 재생 +${ItemAbilityData.TITANS_ARMOR_REGENERATION}</c:heal>을 얻습니다.\n\n` +
            `효과 지속 중에는 이동하거나 스킬, 공격, 아이템을 사용할 수 없습니다.`,
        },
      }
    }
    case ItemList.Chest_Of_Malevolence: {
      const tenacity = fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_AURA_BONUS_TENACITY * 100, 0)
      const moveSpeed = fixed(ItemAbilityData.CHEST_OF_MALEVOLENCE_AURA_BONUS_MOVESPEED * 100, 1)

      return {
        name: {
          en: 'Chest of Malevolence',
          br: 'Armadura da Malevolência',
          ru: 'Нагрудник злобы',
          zh: '惡毒胸甲',
          cz: 'Náprsník zloby',
          fr: 'Plastron de malveillance',
          vi: 'Áo Giáp Ác Độc',
          id: 'Baju Zirah Keburukan',
          kr: `악의의 흉갑`,
        },
        descPassive: {
          en: `<c:movespeed>Grants +${tenacity}% Tenacity and +${moveSpeed}% Movement Speed to the carrier and nearby allies</c:movespeed>.`,
          ru: `<c:movespeed>Даёт +${tenacity}% стойкости и +${moveSpeed}% скорости передвижения владельцу и ближайшим союзникам</c:movespeed>.`,
          br: `<c:movespeed>Concede +${tenacity}% de Tenacidade e +${moveSpeed}% de Velocidade de Movimento ao portador e aliados próximos</c:movespeed>.`,
          fr: `<c:movespeed>Accorde +${tenacity}% de ténacité et +${moveSpeed}% de vitesse de déplacement au porteur et aux alliés proches</c:movespeed>.`,
          zh: `<c:movespeed>為持有者和附近盟友提供 +${tenacity}% 韌性和 +${moveSpeed}% 移動速度</c:movespeed>。`,
          cz: `<c:movespeed>Poskytuje +${tenacity}% houževnatosti a +${moveSpeed}% rychlosti pohybu nositeli a blízkým spojencům</c:movespeed>.`,
          vi: `<c:movespeed>Cung cấp +${tenacity}% kháng khống chế và +${moveSpeed}% tốc độ di chuyển cho bản thân và đồng minh gần</c:movespeed>.`,
          id: `<c:movespeed>Memberikan +${tenacity}% Tenacity dan +${moveSpeed}% Movement Speed kepada pengguna dan sekutu di dekatnya</c:movespeed>.`,
          kr: `<c:movespeed>소지자와 주변 아군에게 강인함 +${tenacity}%와 이동 속도 +${moveSpeed}%를 부여합니다</c:movespeed>.`,
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
          cz: 'Léčivý lektvar',
          fr: 'Potion de soin',
          vi: 'Bình Máu',
          id: 'Ramuan Penyembuh',
          kr: `치유의 물약`,
        },
        descActive: {
          en: `Consume a healing potion. <c:heal>Increases Health Regeneration by ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}</c:heal>. Effect is lost when taking damage.`,
          ru: `Выпейте зелье лечения. <c:heal>Увеличивает регенерацию здоровья на ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}</c:heal>. Эффект пропадает при получении урона.`,
          br: `Consuma uma poção de cura. Aumenta a Regeneração de Vida em ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. O efeito é perdido ao receber dano.`,
          zh: `飲用治療藥水。提高 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} 生命恢復。受到傷害時效果消失。`,
          cz: `Vypij léčivý lektvar. Zvyšuje regeneraci zdraví o ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Efekt se ztratí při obdržení poškození.`,
          fr: `Consomme une potion de soin. Augmente la régénération de santé de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. L'effet est perdu en cas de dégâts.`,
          vi: `Uống bình hồi máu. Tăng hồi phục ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Hiệu ứng mất khi nhận sát thương.`,
          id: `Minum ramuan penyembuhan. Meningkatkan Regenerasi Kesehatan sebesar ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}. Efek hilang saat menerima damage.`,
          kr: `치유의 물약을 마십니다. 체력 재생을 ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC}만큼 증가시킵니다. 피해를 받으면 효과가 사라집니다.`,
        },
      }
    }

    case ItemList.Vile_Flask: {
      const slow = fixed(ItemAbilityData.VILE_FLASK_SLOW * 100, 1)

      return {
        name: {
          en: 'Vile Flask',
          ru: 'Мерзкая склянка',
          br: 'Frasco de veneno',
          zh: '惡毒瓶',
          cz: 'Ohavná láhev',
          fr: 'Flasque vile',
          vi: 'Bình Độc',
          id: 'Botol Beracun',
          kr: `맹독 플라스크`,
        },
        descActive: {
          en: `Throw a Vile Flask that explodes on impact. Affected enemies have their <c:slow>Movement Speed reduced by ${slow}%</c:slow> and take <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} magical damage</c:magical> per second.`,
          ru: `Бросает мерзкую склянку, которая взрывается при падении. Задетым врагам <c:slow>снижается скорость передвижения на ${slow}%</c:slow>, и они получают <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} магического урона</c:magical> в секунду.`,
          br: `Arremessa um Frasco Vile que explode ao atingir o chão. Inimigos afetados têm a <c:slow>Velocidade de Movimento reduzida em ${slow}%</c:slow> e recebem <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} de dano mágico</c:magical> por segundo.`,
          zh: `投擲惡毒瓶，落地時爆炸。受影響的敵人<c:slow>降低 ${slow}% 移動速度</c:slow>，並每秒受到 <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} 魔法傷害</c:magical>。`,
          cz: `Hodí Ohavnou láhev, která exploduje při dopadu. Zasaženým nepřátelům se <c:slow>sníží rychlost pohybu o ${slow}%</c:slow> a utrpí <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} magického poškození</c:magical> za sekundu.`,
          fr: `Lance une flasque vile qui explose à l'impact. Les ennemis affectés voient leur <c:slow>vitesse de déplacement réduite de ${slow}%</c:slow> et subissent <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} dégâts magiques</c:magical> par seconde.`,
          vi: `Ném Bình Độc phát nổ khi chạm đất. Kẻ địch bị ảnh hưởng bị <c:slow>giảm ${slow}% tốc độ di chuyển</c:slow> và nhận <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} sát thương phép</c:magical> mỗi giây.`,
          id: `Melempar Botol Beracun yang meledak saat menyentuh tanah. Musuh yang terkena <c:slow>Movement Speed-nya berkurang ${slow}%</c:slow> dan menerima <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC} damage sihir</c:magical> per detik.`,
          kr: `맹독 플라스크를 던져 명중 시 폭발시킵니다. 영향을 받은 적은 <c:slow>이동 속도가 ${slow}%</c:slow> 감소하며 초당 <c:magical>${ItemAbilityData.VILE_FLASK_DAMAGE_PER_SEC}의 마법 피해</c:magical>를 입습니다.`,
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
          vi: 'Mắt Quan Sát',
          id: 'Ward Pengamat',
          kr: `감시 와드`,
        },
        descActive: {
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
          id: 'Ramuan Sihir',
          kr: `마법의 물약`,
        },
        descActive: {
          en: `Consume a magical potion. Grants a <c:bonus>permanent</c:bonus> stack (max 5). Each stack <c:abilitypower>increases Ability Power by ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          ru: `Выпейте магическое зелье. Даёт <c:bonus>постоянный</c:bonus> эффект (макс. 5). Каждый эффект <c:abilitypower>увеличивает силу умений на ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          br: `Consuma uma poção mágica. Concede um acúmulo <c:bonus>permanente</c:bonus> (máx. 5). Cada acúmulo <c:abilitypower>aumenta o Poder de Habilidade em ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          zh: `飲用魔法藥水。獲得<c:bonus>永久</c:bonus>層數（最多 5 層）。每層<c:abilitypower>增加 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER} 技能強度</c:abilitypower>。`,
          cz: `Vypij magický lektvar. Získáš <c:bonus>trvalou</c:bonus> vrstvu (max 5). Každá vrstva <c:abilitypower>zvyšuje sílu schopností o ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          fr: `Consomme une potion magique. Accorde un cumul <c:bonus>permanent</c:bonus> (max 5). Chaque cumul <c:abilitypower>augmente la puissance des compétences de ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          vi: `Uống bình thuốc phép. Nhận cộng dồn <c:bonus>vĩnh viễn</c:bonus> (tối đa 5). Mỗi cộng dồn <c:abilitypower>tăng sức mạnh kỹ năng thêm ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          id: `Minum ramuan sihir. Memberikan tumpukan <c:bonus>permanen</c:bonus> (maks 5). Setiap tumpukan <c:abilitypower>meningkatkan Ability Power sebesar ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}</c:abilitypower>.`,
          kr: `마법의 물약을 마십니다. <c:bonus>영구</c:bonus> 중첩을 얻습니다 (최대 5). 중첩당 <c:abilitypower>주문력을 ${ItemAbilityData.POTION_OF_MAGIC_ABILITY_POWER}만큼</c:abilitypower> 증가시킵니다.`,
        },
      }
    case ItemList.Corrupted_Potion:
      return {
        name: {
          en: 'Corrupted Potion',
          br: 'Poção de força corrompida',
          ru: 'Искажённое зелье',
          zh: '腐化藥水',
          cz: 'Zkažený lektvar',
          fr: 'Potion corrompue',
          vi: 'Thuốc Tà Đạo',
          id: 'Ramuan Tercemar',
          kr: `타락한 물약`,
        },
        descActive: {
          en: `Consume a corrupted potion. Grants a <c:bonus>permanent</c:bonus> stack (max 5). Each stack <c:bonus>increases Attack Damage by ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          ru: `Выпейте искажённое зелье. Даёт <c:bonus>постоянный</c:bonus> эффект (макс. 5). Каждый эффект <c:bonus>увеличивает силу атаки на ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          br: `Consuma uma poção corrompida. Concede um acúmulo <c:bonus>permanente</c:bonus> (máx. 5). Cada acúmulo <c:bonus>aumenta o Dano de Ataque em ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          zh: `飲用腐化藥水。獲得<c:bonus>永久</c:bonus>層數（最多 5 層）。每層<c:bonus>增加 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE} 攻擊傷害</c:bonus>。`,
          cz: `Vypij zkažený lektvar. Získáš <c:bonus>trvalou</c:bonus> vrstvu (max 5). Každá vrstva <c:bonus>zvyšuje poškození útoku o ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          fr: `Consomme une potion corrompue. Accorde un cumul <c:bonus>permanent</c:bonus> (max 5). Chaque cumul <c:bonus>augmente les dégâts d'attaque de ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          vi: `Uống bình thuốc bị biến chất. Nhận cộng dồn <c:bonus>vĩnh viễn</c:bonus> (tối đa 5). Mỗi cộng dồn <c:bonus>tăng sát thương đòn đánh thêm ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          id: `Minum ramuan terkorupsi. Memberikan tumpukan <c:bonus>permanen</c:bonus> (maks 5). Setiap tumpukan <c:bonus>meningkatkan Attack Damage sebesar ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}</c:bonus>.`,
          kr: `타락한 물약을 마십니다. <c:bonus>영구</c:bonus> 중첩을 얻습니다 (최대 5). 중첩당 <c:bonus>공격력을 ${ItemAbilityData.CORRUPTED_POTION_DAMAGE}만큼</c:bonus> 증가시킵니다.`,
        },
      }
    case ItemList.Potion_Of_Vitality:
      return {
        name: {
          en: 'Potion of Vitality',
          br: 'Poção de Vitalidade',
          ru: 'Зелье жизненной силы',
          zh: '活力藥水',
          cz: 'Lektvar vitality',
          fr: 'Potion de vitalité',
          vi: 'Thuốc Sinh Lực',
          id: 'Ramuan Vitalitas',
          kr: `활력의 물약`,
        },
        descActive: {
          en: `Consume a potion of vitality. Grants a <c:bonus>permanent</c:bonus> stack (max 5). Each stack <c:bonus>increases max Health by ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          ru: `Выпейте зелье жизненной силы. Даёт <c:bonus>постоянный</c:bonus> эффект (макс. 5). Каждый эффект <c:bonus>увеличивает максимальное здоровье на ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          br: `Consuma uma poção de vitalidade. Concede um acúmulo <c:bonus>permanente</c:bonus> (máx. 5). Cada acúmulo <c:bonus>aumenta a Vida máxima em ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          zh: `飲用活力藥水。獲得<c:bonus>永久</c:bonus>層數（最多 5 層）。每層<c:bonus>增加 ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH} 最大生命值</c:bonus>。`,
          cz: `Vypij lektvar vitality. Získáš <c:bonus>trvalou</c:bonus> vrstvu (max 5). Každá vrstva <c:bonus>zvyšuje maximální zdraví o ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          fr: `Consomme une potion de vitalité. Accorde un cumul <c:bonus>permanent</c:bonus> (max 5). Chaque cumul <c:bonus>augmente les Points de vie max de ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          vi: `Uống bình thuốc sinh lực. Nhận cộng dồn <c:bonus>vĩnh viễn</c:bonus> (tối đa 5). Mỗi cộng dồn <c:bonus>tăng Máu tối đa thêm ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          id: `Minum ramuan vitalitas. Memberikan tumpukan <c:bonus>permanen</c:bonus> (maks 5). Setiap tumpukan <c:bonus>meningkatkan Health maksimum sebesar ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}</c:bonus>.`,
          kr: `활력의 물약을 마십니다. <c:bonus>영구</c:bonus> 중첩을 얻습니다 (최대 5). 중첩당 <c:bonus>최대 체력을 ${ItemAbilityData.POTION_OF_VITALITY_MAX_HEALTH}만큼</c:bonus> 증가시킵니다.`,
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
          kr: `기린의 활`,
        },
        descPassive: {
          en: `Applies Kirin's Poison (max ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} stacks). At max stacks, it explodes, <c:magical>reducing Magic Resistance by ${magicResistanceReduction}%</c:magical> and dealing <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} magical damage</c:magical> to nearby enemies. Applies maximum Poison stacks.`,
          ru: `Атаки накладывают яд Кирина (макс. ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} стаков). При максимуме взрывается, снижает магическое сопротивление на ${magicResistanceReduction}% и наносит <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} магического урона</c:magical> ближайшим врагам. Накладывает максимальное количество стаков.`,
          br: `Ataques aplicam Veneno do Kirin (máx. ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} acúmulos). No máximo, ele explode, <c:magical>reduz a resistência mágica em ${magicResistanceReduction}%</c:magical> e causa <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} de dano mágico</c:magical> aos inimigos próximos. Aplica o máximo de acúmulos.`,
          fr: `Les attaques appliquent Poison du Kirin (max ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} cumuls). Au maximum, il explose, <c:magical>réduit la résistance magique de ${magicResistanceReduction}%</c:magical> et inflige <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} dégâts magiques</c:magical> aux ennemis proches. Applique le maximum de cumuls.`,
          zh: `攻擊會施加麒麟之毒（最多 ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} 層）。達到最大層數時會爆炸，降低 ${magicResistanceReduction}% 魔法抗性並對附近敵人造成 <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} 點魔法傷害</c:magical>，並施加最大中毒層數。`,
          cz: `Útoky aplikují Kirinův jed (max ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} vrstev). Při maximálním počtu vrstev exploduje, <c:magical>sníží magickou odolnost o ${magicResistanceReduction}%</c:magical> a způsobí <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} magického poškození</c:magical> blízkým nepřátelům. Aplikuje maximální počet vrstev jedu.`,
          vi: `Đòn đánh gây hiệu ứng Độc Kirin (tối đa ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} cộng dồn). Khi đạt tối đa, phát nổ, <c:magical>giảm ${magicResistanceReduction}% kháng phép</c:magical> và gây <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} sát thương phép</c:magical> lên kẻ địch gần đó. Áp dụng tối đa cộng dồn độc.`,
          id: `Serangan memberikan Racun Kirin (maks ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} tumpukan). Pada maksimum, akan meledak, <c:magical>mengurangi Magic Resistance sebesar ${magicResistanceReduction}%</c:magical> dan memberikan <c:magical>${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE} damage sihir</c:magical> ke musuh di sekitar. Memberikan tumpukan maksimum.`,
          kr: `공격 시 기린의 독을 적용합니다 (최대 ${ItemAbilityData.KIRINS_BOW_MAX_STACKS} 중첩). 최대 중첩에 도달하면 폭발하여 마법 저항력을 <c:magical>${magicResistanceReduction}%만큼 감소시키고 주변 적에게 마법 피해</c:magical> ${ItemAbilityData.KIRINS_BOW_TRIGGER_DAMAGE}를 입힙니다. 최대 독 중첩을 적용합니다.`,
        },
        descPassive2: {
          en: `${getPoisonBowDescription(true)}`,
          ru: `${getPoisonBowDescription(true)}`,
          br: `${getPoisonBowDescription(true)}`,
          fr: `${getPoisonBowDescription(true)}`,
          zh: `${getPoisonBowDescription(true)}`,
          cz: `${getPoisonBowDescription(true)}`,
          vi: `${getPoisonBowDescription(true)}`,
          id: `${getPoisonBowDescription(true)}`,
          kr: `${getPoisonBowDescription(true)}`,
        },
      }
    }
    case ItemList.Iron_Arbalest:
      return {
        name: {
          en: 'Iron Arbalest',
          ru: 'Железный арбалет',
          br: 'Besta de Ferro',
          fr: 'Arbalète de fer',
          zh: '鋼鐵弩弓',
          cz: 'Železná kuše',
          vi: 'Nỏ Sắt',
          id: 'Arbalest Besi',
          kr: `강철 쇠뇌`,
        },
      }

    case ItemList.Burning_Arbalest: {
      const dotPercent = fixed(ItemAbilityData.BURNING_ARBALEST_DOT_PERCENT_MAX_HEALTH * 100, 1)

      return {
        name: {
          en: 'Burning Arbalest',
          ru: 'Пылающий арбалет',
          br: 'Besta Incandescente',
          fr: 'Arbalète brûlante',
          zh: '燃燒弩弓',
          cz: 'Hořící kuše',
          vi: 'Nỏ Lửa',
          id: 'Arbalest Terbakar',
          kr: `불타는 쇠뇌`,
        },
        descPassive: {
          en: `Applies a burning debuff, dealing <c:magical>${dotPercent}% of the target's max Health as magical damage</c:magical> per second.`,
          ru: `Накладывает горение, наносящее <c:magical>${dotPercent}% от максимального здоровья цели в виде магического урона</c:magical> в секунду.`,
          br: `Aplica uma queimadura, causando <c:magical>${dotPercent}% da Vida máxima do alvo como dano mágico</c:magical> por segundo.`,
          fr: `Applique une brûlure infligeant ${dotPercent}% des points de vie maximum de la cible en <c:magical>dégâts magiques</c:magical> par seconde.`,
          zh: `施加燃燒效果，每秒造成相當於目標最大生命值 <c:magical>${dotPercent}% 的魔法傷害</c:magical>。`,
          cz: `Aplikuje hoření, které způsobuje <c:magical>${dotPercent}% maximálního zdraví cíle jako magické poškození</c:magical> za sekundu.`,
          vi: `Gây hiệu ứng thiêu đốt, gây <c:magical>${dotPercent}% máu tối đa của mục tiêu dưới dạng sát thương phép</c:magical> mỗi giây.`,
          id: `Memberikan efek terbakar, memberikan ${dotPercent}% dari Health maksimum milik target sebagai <c:magical>damage sihir</c:magical> per detik.`,
          kr: `화상 효과를 적용하여, 대상의 최대 체력의 <c:magical>${dotPercent}%에 해당하는 마법 피해</c:magical>를 초당 입힙니다.`,
        },
      }
    }

    case ItemList.Divine_Arbalest: {
      const critSlow = fixed(ItemAbilityData.DIVINE_ARBALEST_CRIT_SLOW * 100, 0)
      const auraAttackSpeed = fixed(ItemAbilityData.DIVINE_ARBALEST_AURA_ATTACK_SPEED * 100, 0)

      return {
        name: {
          en: 'Divine Arbalest',
          ru: 'Божественный арбалет',
          br: 'Besta Divina',
          fr: 'Arbalète divine',
          zh: '聖弩',
          cz: 'Božská kuše',
          vi: 'Nỏ Thần Thánh',
          id: 'Arbalest Suci',
          kr: `신성한 쇠뇌`,
        },
        descPassive: {
          en: `<c:slow>Reduces the target's Movement Speed by ${critSlow}%</c:slow>.`,
          ru: `<c:slow>Снижает скорость передвижения цели на ${critSlow}%</c:slow>.`,
          br: `<c:slow>Reduz a Velocidade de Movimento do alvo em ${critSlow}%</c:slow>.`,
          fr: `<c:slow>Réduit la vitesse de déplacement de la cible de ${critSlow}%</c:slow>.`,
          zh: `<c:slow>使目標移動速度降低 ${critSlow}%</c:slow>。`,
          cz: `<c:slow>Snižuje rychlost pohybu cíle o ${critSlow}%</c:slow>.`,
          vi: `<c:slow>Giảm ${critSlow}% tốc độ di chuyển của mục tiêu</c:slow>.`,
          id: `<c:slow>Mengurangi Movement Speed target sebesar ${critSlow}%</c:slow>.`,
          kr: `<c:slow>대상의 이동 속도를 ${critSlow}% 감소</c:slow>시킵니다.`,
        },
        descPassive2: {
          en: `<c:attackspeed>Increases Attack Speed by ${auraAttackSpeed}%</c:attackspeed> for nearby allies.`,
          ru: `<c:attackspeed>Увеличивает скорость атаки на ${auraAttackSpeed}%</c:attackspeed> ближайшим союзникам.`,
          br: `<c:attackspeed>Aumenta a Velocidade de Ataque em ${auraAttackSpeed}%</c:attackspeed> para aliados próximos.`,
          fr: `<c:attackspeed>Augmente la vitesse d'attaque de ${auraAttackSpeed}%</c:attackspeed> pour les alliés proches.`,
          zh: `使附近友軍<c:attackspeed>攻擊速度提高 ${auraAttackSpeed}%</c:attackspeed>。`,
          cz: `<c:attackspeed>Zvyšuje rychlost útoku o ${auraAttackSpeed}%</c:attackspeed> blízkým spojencům.`,
          vi: `<c:attackspeed>Tăng ${auraAttackSpeed}% tốc độ đánh</c:attackspeed> cho đồng minh gần đó.`,
          id: `<c:attackspeed>Meningkatkan Attack Speed sebesar ${auraAttackSpeed}%</c:attackspeed> untuk sekutu di sekitar.`,
          kr: `주변 아군의 <c:attackspeed>공격 속도를 ${auraAttackSpeed}% 증가</c:attackspeed>시킵니다.`,
        },
      }
    }

    case ItemList.Plague_Arbalest: {
      const armorReductionPerStack = fixed(ItemAbilityData.PLAGUE_ARBALEST_ARMOR_REDUCTION_PER_STACK * 100, 0)
      const maxStacks = ItemAbilityData.PLAGUE_ARBALEST_MAX_STACKS
      const procChance = fixed(ItemAbilityData.PLAGUE_ARBALEST_PROC_CHANCE * 100, 0)
      const procDamage = ItemAbilityData.PLAGUE_ARBALEST_PROC_DAMAGE

      return {
        name: {
          en: 'Plague Arbalest',
          ru: 'Чумной арбалет',
          br: 'Besta da Praga',
          fr: 'Arbalète de la peste',
          zh: '瘟疫弩弓',
          cz: 'Morová kuše',
          vi: 'Nỏ Ôn Dịch',
          id: 'Arbalest Wabah',
          kr: `역병 쇠뇌`,
        },
        descPassive: {
          en: `Applies stacking <c:physical>Armor Penetration (${armorReductionPerStack}% per stack, up to ${maxStacks} stacks)</c:physical>.\nEach attack has a <c:physical>${procChance}% chance</c:physical> to spread Corrosive Haze, dealing <c:physical>${procDamage} physical damage</c:physical> to nearby enemies.`,
          ru: `Атаки накладывают <c:physical>стакающееся пробитие брони (${armorReductionPerStack}% за стак, до ${maxStacks} стаков)</c:physical>.\nКаждая атака с <c:physical>шансом ${procChance}%</c:physical> распространяет Разъедающую дымку, нанося <c:physical>${procDamage} физического урона</c:physical> ближайшим врагам.`,
          br: `Ataques aplicam <c:physical>Penetração de Armadura acumulativa (${armorReductionPerStack}% por acúmulo, até ${maxStacks} acúmulos)</c:physical>.\nCada ataque tem <c:physical>${procChance}% de chance</c:physical> de espalhar a Névoa Corrosiva, causando <c:physical>${procDamage} de dano físico</c:physical> aos inimigos próximos.`,
          fr: `Les attaques appliquent une <c:physical>pénétration d'armure cumulable (${armorReductionPerStack}% par cumul, jusqu'à ${maxStacks} cumuls)</c:physical>.\nChaque attaque a <c:physical>${procChance}% de chance</c:physical> de propager la Brume corrosive, infligeant <c:physical>${procDamage} dégâts physiques</c:physical> aux ennemis proches.`,
          zh: `攻擊會施加<c:physical>可疊加的護甲穿透效果（每層 ${armorReductionPerStack}%，最多疊加 ${maxStacks} 層）</c:physical>。\n每次攻擊有 <c:physical>${procChance}% 機率</c:physical>擴散腐蝕迷霧，對附近敵人造成 <c:physical>${procDamage} 點物理傷害</c:physical>。`,
          cz: `Útoky aplikují <c:physical>vrstvitelný průnik brnění (${armorReductionPerStack}% za vrstvu, až ${maxStacks} vrstev)</c:physical>.\nKaždý útok má <c:physical>${procChance}% šanci</c:physical> rozšířit Žíravou mlhu, způsobující <c:physical>${procDamage} fyzického poškození</c:physical> blízkým nepřátelům.`,
          vi: `Đòn đánh gây <c:physical>hiệu ứng Xuyên Giáp cộng dồn (${armorReductionPerStack}% mỗi lần, tối đa ${maxStacks} lần)</c:physical>.\nMỗi đòn đánh có <c:physical>${procChance}% cơ hội</c:physical> lan tỏa Sương Mù Ăn Mòn, gây <c:physical>${procDamage} sát thương vật lý</c:physical> lên kẻ địch gần đó.`,
          id: `Serangan memberikan <c:physical>efek Armor Penetration bertumpuk (${armorReductionPerStack}% per stack, hingga ${maxStacks} stack)</c:physical>.\nSetiap serangan memiliki <c:physical>${procChance}% peluang</c:physical> menyebarkan Kabut Korosif, memberikan <c:physical>${procDamage} damage fisik</c:physical> ke musuh di sekitar.`,
          kr: `공격 시 <c:physical>중첩되는 방어구 관통 효과 (중첩당 ${armorReductionPerStack}%, 최대 ${maxStacks}중첩)</c:physical>를 적용합니다.\n공격마다 <c:physical>${procChance}% 확률</c:physical>로 부식의 안개가 퍼져 주변 적에게 <c:physical>${procDamage}의 물리 피해</c:physical>를 입힙니다.`,
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
          cz: 'Garunův amulet',
          ru: 'Оберег Гаруна',
          vi: 'Bùa Garun',
          id: 'Pesona Garun',
          kr: `가룬의 부적`,
        },
        descPassive: {
          en: `Every ${cooldown}, gain a stack of Garun's Protection, up to ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nTaking Normal Damage removes a stack.\nEach stack <c:armor>grants +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Armor</c:armor>.`,
          ru: `Каждые ${cooldown} даёт заряд Защиты Гаруна, до ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nПолучение обычного урона снимает заряд.\nКаждый заряд <c:armor>даёт +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} брони</c:armor>.`,
          br: `A cada ${cooldown}, ganha um acúmulo de Proteção de Garun, até ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nReceber Dano Normal remove um acúmulo.\nCada acúmulo <c:armor>concede +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} de Armadura</c:armor>.`,
          fr: `Toutes les ${cooldown}, gagne une charge de Protection de Garun, jusqu'à ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nSubir des dégâts normaux retire une charge.\nChaque charge confère +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} d'armure.`,
          zh: `每 ${cooldown} 獲得一層加侖守護，最多 ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS} 層。\n受到普通傷害會移除一層。\n每層提供 +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} 護甲。`,
          cz: `Každých ${cooldown} získáš vrstvu Garunovy ochrany, až do ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nPřijetí normálního poškození odebere vrstvu.\nKaždá vrstva dává +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} brnění.`,
          vi: `Mỗi ${cooldown} nhận một cộng dồn Bảo Vệ Garun, tối đa ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nNhận Sát Thương Thường sẽ mất một cộng dồn.\nMỗi cộng dồn tăng +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Giáp.`,
          id: `Setiap ${cooldown}, mendapatkan stack Perlindungan Garun hingga ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}.\nMenerima Kerusakan Normal menghapus satu stack.\nSetiap stack memberikan +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK} Armor.`,
          kr: `${cooldown}마다 가룬의 보호 중첩을 얻으며, 최대 ${ItemAbilityData.GARUNS_CHARM_MAX_STACKS}까지 중첩됩니다.\n일반 피해를 받으면 중첩이 하나 사라집니다.\n중첩당 방어력 +${ItemAbilityData.GARUNS_CHARM_BONUS_ARMOR_STACK}을 부여합니다.`,
        },
        descPassive2: {
          en: `<c:armor>Grants +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor</c:armor> to the carrier and nearby allies.`,
          ru: `<c:armor>даёт +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} брони</c:armor> владельцу и ближайшим союзникам.`,
          br: `<c:armor>Concede +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} de Armadura</c:armor> ao portador e aliados próximos.`,
          fr: `<c:armor>accorde +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} d'armure</c:armor> au porteur et aux alliés proches.`,
          zh: `為持有者和附近盟友提供 +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} 護甲。`,
          cz: `Dává +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} brnění nositeli a blízkým spojencům.`,
          vi: `Cung cấp +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Giáp cho bản thân và đồng minh gần.`,
          id: `Memberikan +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR} Armor kepada pengguna dan sekutu di dekatnya.`,
          kr: `소지자와 주변 아군에게 방어력 +${ItemAbilityData.GARUNS_CHARM_AOE_ARMOR}을 부여합니다.`,
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
          kr: `마법사의 부적`,
        },
        descPassive: {
          en: `Deals <c:magical>${percDmg}% of the enemy's Max Health as bonus Magic Damage</c:magical>.`,
          ru: `Наносит <c:magical>${percDmg}% от максимального здоровья врага в виде дополнительного магического урона</c:magical>.`,
          br: `Causa <c:magical>${percDmg}% da Vida Máxima do inimigo como dano mágico bônus</c:magical>.`,
          fr: `Inflige <c:magical>${percDmg}% de la santé maximale de l'ennemi en dégâts magiques bonus</c:magical>.`,
          zh: `造成敵人最大生命值的 <c:magical>${percDmg}% 額外魔法傷害</c:magical>。`,
          cz: `Způsobuje <c:magical>${percDmg}% maximálního zdraví nepřítele jako bonusové magické poškození</c:magical>.`,
          vi: `Gây <c:magical>${percDmg}% máu tối đa của kẻ địch dưới dạng sát thương phép bổ sung</c:magical>.`,
          id: `Memberikan <c:magical>${percDmg}% dari Health maksimum musuh sebagai bonus Magic Damage</c:magical>.`,
          kr: `적 최대 체력의 <c:magical>${percDmg}%를 추가 마법 피해</c:magical>로 입힙니다.`,
        },
        descPassive2: {
          en: `Wizard's Curse: <c:healingreduction>Reduces the target's Healing, Health Regeneration and Shield effectiveness by ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, and deals <c:pure>pure damage</c:pure> based on the enemy's Health Regeneration.`,
          ru: `Проклятие Волшебника: <c:healingreduction>Снижает лечение, регенерацию здоровья и эффективность щитов цели на ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction> и наносит <c:pure>чистый урон</c:pure> в зависимости от регенерации здоровья врага.`,
          br: `Maldição do Mago: <c:healingreduction>Reduz a cura, a regeneração de vida e a eficácia de escudos do alvo em ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, e causa <c:pure>dano puro</c:pure> baseado na regeneração de vida do inimigo.`,
          fr: `Malédiction du Sorcier : <c:healingreduction>Réduit les soins, la régénération de vie et l'efficacité des boucliers de la cible de ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, et inflige des <c:pure>dégâts purs</c:pure> en fonction de la régénération de vie de l'ennemi.`,
          zh: `巫師詛咒：<c:healingreduction>使目標的治療、生命恢復和護盾效果降低 ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>，並根據敵人的生命恢復造成<c:pure>純粹傷害</c:pure>。`,
          cz: `Kletba Kouzelníka: <c:healingreduction>Snižuje léčení, regeneraci zdraví a účinnost štítů cíle o ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction> a způsobuje <c:pure>čisté poškození</c:pure> podle regenerace zdraví nepřítele.`,
          vi: `Lời Nguyền Phù Thủy: <c:healingreduction>Giảm ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}% hồi máu, hồi phục máu và hiệu quả khiên của mục tiêu</c:healingreduction>, đồng thời gây <c:pure>sát thương chuẩn</c:pure> dựa trên hồi phục của kẻ địch.`,
          id: `Kutukan Penyihir: <c:healingreduction>Mengurangi penyembuhan, regenerasi Health, dan efektivitas Shield target sebesar ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}%</c:healingreduction>, dan memberikan <c:pure>damage murni</c:pure> berdasarkan regenerasi Health musuh.`,
          kr: `마법사의 저주: <c:healingreduction>대상의 회복, 체력 재생, 보호막 효과를 ${fixed(ItemAbilityData.GRIVEOUS_WOUND_65 * 100, 0)}% 감소시킵니다</c:healingreduction>. 적의 체력 재생에 비례한 <c:pure>고정 피해</c:pure>를 입힙니다.`,
        },
      }
    }

    case ItemList.Corrupted_Locket: {
      const spreadPercent = fixed(ItemAbilityData.CORRUPTED_LOCKET_SPREAD_PERCENT * 100, 0)
      const spreadFlat = ItemAbilityData.CORRUPTED_LOCKET_SPREAD_FLAT
      const spreadRadius = ItemAbilityData.CORRUPTED_LOCKET_SPREAD_RADIUS
      const spreadSlow = fixed(ItemAbilityData.CORRUPTED_LOCKET_SPREAD_SLOW * 100, 0)
      return {
        name: {
          en: 'Corrupted Locket',
          br: 'Colar Corrompido',
          fr: 'Collier Corrompu',
          zh: '腐化墜飾',
          cz: 'Zkorumpovaný náhrdelník',
          ru: 'Искажённый медальон',
          vi: 'Mặt Dây Tà Đạo',
          id: 'Locket Korup',
          kr: `타락한 목걸이`,
        },
        descPassive: {
          en: `Dealing damage with your abilities spreads it in a ${spreadRadius} radius, dealing <c:magical>${spreadPercent}% + ${spreadFlat} magical damage</c:magical> and <c:slow>reducing Movement Speed by ${spreadSlow}%</c:slow> to nearby enemies.`,
          br: `Causar dano com suas habilidades o espalha em um raio de ${spreadRadius}, causando <c:magical>${spreadPercent}% + ${spreadFlat} de dano mágico</c:magical> e <c:slow>reduzindo a Velocidade de Movimento em ${spreadSlow}%</c:slow> a inimigos próximos.`,
          fr: `Infliger des dégâts avec vos compétences les propage dans un rayon de ${spreadRadius}, infligeant <c:magical>${spreadPercent}% + ${spreadFlat} dégâts magiques</c:magical> et <c:slow>réduisant la vitesse de déplacement de ${spreadSlow}%</c:slow> aux ennemis proches.`,
          zh: `你的技能造成傷害時，會在 ${spreadRadius} 範圍內擴散，對附近敵人造成 <c:magical>${spreadPercent}% + ${spreadFlat} 魔法傷害</c:magical>並<c:slow>降低 ${spreadSlow}% 移動速度</c:slow>。`,
          cz: `Způsobení poškození vašimi schopnostmi jej rozšíří v okruhu ${spreadRadius}, způsobí <c:magical>${spreadPercent}% + ${spreadFlat} magického poškození</c:magical> a <c:slow>sníží rychlost pohybu o ${spreadSlow}%</c:slow> blízkým nepřátelům.`,
          ru: `Урон от ваших способностей распространяется в радиусе ${spreadRadius}, нанося <c:magical>${spreadPercent}% + ${spreadFlat} магического урона</c:magical> и <c:slow>снижая скорость передвижения на ${spreadSlow}%</c:slow> ближайшим врагам.`,
          vi: `Gây sát thương bằng kỹ năng sẽ lan tỏa trong bán kính ${spreadRadius}, gây <c:magical>${spreadPercent}% + ${spreadFlat} sát thương phép</c:magical> và <c:slow>giảm ${spreadSlow}% tốc độ di chuyển</c:slow> lên kẻ địch gần đó.`,
          id: `Memberikan damage dengan kemampuan Anda akan menyebar dalam radius ${spreadRadius}, memberikan <c:magical>${spreadPercent}% + ${spreadFlat} damage sihir</c:magical> dan <c:slow>mengurangi Movement Speed sebesar ${spreadSlow}%</c:slow> ke musuh di sekitar.`,
          kr: `스킬로 피해를 입히면 반경 ${spreadRadius} 내로 피해가 퍼져, 주변 적에게 <c:magical>${spreadPercent}% + ${spreadFlat}의 마법 피해</c:magical>를 입히고 <c:slow>이동 속도를 ${spreadSlow}%</c:slow> 감소시킵니다.`,
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
          kr: `용암 방패`,
        },
        descActive: {
          en: `Unleashes a molten explosion, dealing <c:magical>${baseDamage} + ${damageOverTimePercent}% of maximum Health as magical damage</c:magical> to nearby enemies and <c:magical>reducing Magic Resistance by ${resistanceReduction}%</c:magical>.`,
          ru: `Выпускает взрыв расплавленного металла, нанося <c:magical>${baseDamage} + ${damageOverTimePercent}% от максимального здоровья в виде магического урона</c:magical> ближайшим врагам и <c:magical>снижая магическое сопротивление на ${resistanceReduction}%</c:magical>.`,
          br: `Libera uma explosão fundida, causando <c:magical>${baseDamage} + ${damageOverTimePercent}% da Vida máxima como dano mágico</c:magical> aos inimigos próximos e <c:magical>reduzindo a Resistência Mágica em ${resistanceReduction}%</c:magical>.`,
          cz: `Uvolní explozi roztaveného kovu, která způsobí <c:magical>${baseDamage} + ${damageOverTimePercent}% maximálního zdraví jako magické poškození</c:magical> blízkým nepřátelům a <c:magical>sníží magickou odolnost o ${resistanceReduction}%</c:magical>.`,
          zh: `釋放熔岩爆炸，對附近敵人造成 <c:magical>${baseDamage} + ${damageOverTimePercent}% 最大生命值的魔法傷害</c:magical>，並<c:magical>降低 ${resistanceReduction}% 魔法抗性</c:magical>。`,
          fr: `Libère une explosion en fusion, inflige <c:magical>${baseDamage} + ${damageOverTimePercent}% de la santé maximale en dégâts magiques</c:magical> aux ennemis proches et <c:magical>réduit la résistance magique de ${resistanceReduction}%</c:magical>.`,
          vi: `Phóng ra vụ nổ nóng chảy, gây <c:magical>${baseDamage} + ${damageOverTimePercent}% Máu tối đa dưới dạng sát thương phép</c:magical> lên kẻ địch gần đó và <c:magical>giảm ${resistanceReduction}% kháng phép</c:magical>.`,
          id: `Melepaskan ledakan cair, memberikan <c:magical>${baseDamage} + ${damageOverTimePercent}% dari Health maksimum sebagai damage sihir</c:magical> ke musuh di sekitar dan <c:magical>mengurangi Magic Resistance sebesar ${resistanceReduction}%</c:magical>.`,
          kr: `용암 폭발을 일으켜 주변 적에게 <c:magical>${baseDamage} + 최대 체력의 ${damageOverTimePercent}%에 해당하는 마법 피해</c:magical>를 입히고 <c:magical>마법 저항력을 ${resistanceReduction}%만큼 감소</c:magical>시킵니다.`,
        },
      }
    }

    case ItemList.Titans_Shield: {
      const healthThreshold = fixed(ItemAbilityData.TITANS_SHIELD_HEALTH_THRESHOLD * 100, 0)

      return {
        name: {
          en: "Titan's Shield",
          ru: 'Щит титана',
          br: 'Escudo do Titan',
          cz: 'Titánův štít',
          zh: '泰坦之盾',
          fr: 'Bouclier du titan',
          vi: 'Khiên của Khổng Lồ',
          id: 'Perisai Titan',
          kr: `타이탄의 방패`,
        },
        descPassive: {
          en: `Damage from an enemy hero that would reduce your <c:health>Health below ${healthThreshold}%</c:health> is negated. You <c:dispel>remove all negative effects</c:dispel> and become <c:immune>immune to all damage</c:immune>, but are unable to attack or cast abilities during the immunity.`,
          ru: `Урон от вражеского героя, который опустил бы ваше <c:health>здоровье ниже ${healthThreshold}%</c:health>, блокируется. Вы <c:dispel>снимаете все негативные эффекты</c:dispel> и получаете <c:immune>иммунитет ко всему урону</c:immune>, но на время иммунитета не можете атаковать и применять способности.`,
          br: `Dano de um herói inimigo que reduziria sua <c:health>Vida abaixo de ${healthThreshold}%</c:health> é negado. Você <c:dispel>remove todos os efeitos negativos</c:dispel> e fica <c:immune>imune a todo dano</c:immune>, mas não pode atacar nem conjurar habilidades durante a imunidade.`,
          fr: `Les dégâts d’un héros ennemi qui feraient passer votre <c:health>santé sous ${healthThreshold}%</c:health> sont annulés. Vous <c:dispel>supprimez tous les effets négatifs</c:dispel> et devenez <c:immune>immunisé contre tous les dégâts</c:immune>, mais ne pouvez ni attaquer ni lancer de compétences pendant l’immunité.`,
          zh: `敵方英雄造成、會使你的<c:health>生命值降至 ${healthThreshold}% 以下</c:health>的傷害會被抵消。你會<c:dispel>清除所有負面效果</c:dispel>並<c:immune>免疫所有傷害</c:immune>，但免疫期間無法攻擊或施放技能。`,
          cz: `Poškození od nepřátelského hrdiny, které by snížilo tvé <c:health>zdraví pod ${healthThreshold}%</c:health>, je zrušeno. <c:dispel>Odstraníš všechny negativní efekty</c:dispel> a získáš <c:immune>imunitu vůči veškerému poškození</c:immune>, ale během ní nemůžeš útočit ani používat schopnosti.`,
          vi: `Sát thương từ tướng địch khiến <c:health>Máu của bạn giảm xuống dưới ${healthThreshold}%</c:health> sẽ bị chặn. Bạn <c:dispel>loại bỏ mọi hiệu ứng xấu</c:dispel> và <c:immune>miễn nhiễm toàn bộ sát thương</c:immune>, nhưng không thể tấn công hoặc dùng kỹ năng trong thời gian này.`,
          id: `Damage dari hero musuh yang akan menurunkan <c:health>Health kamu di bawah ${healthThreshold}%</c:health> akan dinegasikan. Kamu <c:dispel>menghapus semua efek negatif</c:dispel> dan menjadi <c:immune>kebal terhadap semua damage</c:immune>, tetapi tidak dapat menyerang atau menggunakan ability selama kebal.`,
          kr: `<c:health>체력을 ${healthThreshold}% 미만으로</c:health> 떨어뜨리는 적 영웅의 피해가 무효화됩니다. <c:dispel>모든 부정적 효과를 제거</c:dispel>하고 <c:immune>모든 피해에 면역</c:immune>이 되지만, 그 동안 공격하거나 스킬을 사용할 수 없습니다.`,
        },
      }
    }

    case ItemList.Void_Sword: {
      const movespeed = fixed(ItemAbilityData.VOID_SWORD_MOVESPEED * 100, 0)
      // Both are bonusStats multipliers (0.35 = 35%), same as the stat block renders them.
      const attackspeed = fixed(ItemAbilityData.VOID_SWORD_ATTACKSPEED * 100, 0) + '%'

      return {
        name: {
          en: 'Void Sword',
          ru: 'Меч Пустоты',
          br: 'Espada do Vazio',
          cz: 'Meč prázdnoty',
          zh: '虚空之剑',
          fr: 'Épée du Néant',
          vi: 'Kiếm Hư Vô',
          id: 'Pedang Kehampaan',
          kr: `공허의 검`,
        },
        descActive: {
          en: `Drops a sword that follows the carrier.\nNearby allies gain <c:movespeed>+${movespeed}% Movement Speed</c:movespeed> and <c:attackspeed>+${attackspeed} Attack Speed</c:attackspeed>.\nEnemies in radius have <c:slow>${movespeed}% reduced Movement Speed</c:slow> and <c:attackslow>${attackspeed} reduced Attack Speed</c:attackslow>.`,
          ru: `Бросает меч, который следует за носителем.\nБлижайшие союзники получают <c:movespeed>+${movespeed}% к скорости передвижения</c:movespeed> и <c:attackspeed>+${attackspeed} к скорости атаки</c:attackspeed>.\nВраги в радиусе получают <c:slow>-${movespeed}% к скорости передвижения</c:slow> и <c:attackslow>-${attackspeed} к скорости атаки</c:attackslow>.`,
          br: `Solta uma espada que segue o portador.\nAliados próximos recebem <c:movespeed>+${movespeed}% de Velocidade de Movimento</c:movespeed> e <c:attackspeed>+${attackspeed} de Velocidade de Ataque</c:attackspeed>.\nInimigos no raio têm <c:slow>${movespeed}% de Velocidade de Movimento reduzida</c:slow> e <c:attackslow>${attackspeed} de Velocidade de Ataque reduzida</c:attackslow>.`,
          cz: `Položí meč, který následuje nositele.\nBlízcí spojenci získají <c:movespeed>+${movespeed}% k rychlosti pohybu</c:movespeed> a <c:attackspeed>+${attackspeed} k rychlosti útoku</c:attackspeed>.\nNepřátelé v okolí mají <c:slow>o ${movespeed}% nižší rychlost pohybu</c:slow> a <c:attackslow>o ${attackspeed} nižší rychlost útoku</c:attackslow>.`,
          zh: `放下一把會跟隨持有者的劍。\n附近盟友獲得 <c:movespeed>+${movespeed}% 移動速度</c:movespeed>和<c:attackspeed>+${attackspeed} 攻擊速度</c:attackspeed>。\n範圍內的敵人<c:slow>移動速度降低 ${movespeed}%</c:slow>，<c:attackslow>攻擊速度降低 ${attackspeed}</c:attackslow>。`,
          fr: `Dépose une épée qui suit le porteur.\nLes alliés proches gagnent <c:movespeed>+${movespeed}% en vitesse de déplacement</c:movespeed> et <c:attackspeed>+${attackspeed} en vitesse d'attaque</c:attackspeed>.\nLes ennemis dans le rayon ont <c:slow>${movespeed}% de vitesse de déplacement en moins</c:slow> et <c:attackslow>${attackspeed} de vitesse d'attaque en moins</c:attackslow>.`,
          vi: `Thả một thanh kiếm đi theo người mang.\nĐồng minh gần đó nhận <c:movespeed>+${movespeed}% tốc độ di chuyển</c:movespeed> và <c:attackspeed>+${attackspeed} tốc độ đánh</c:attackspeed>.\nKẻ địch trong phạm vi bị <c:slow>giảm ${movespeed}% tốc độ di chuyển</c:slow> và <c:attackslow>giảm ${attackspeed} tốc độ đánh</c:attackslow>.`,
          id: `Menjatuhkan pedang yang mengikuti pembawa.\nSekutu di sekitar mendapatkan <c:movespeed>+${movespeed}% Movement Speed</c:movespeed> dan <c:attackspeed>+${attackspeed} Attack Speed</c:attackspeed>.\nMusuh dalam radius mendapat <c:slow>pengurangan ${movespeed}% Movement Speed</c:slow> dan <c:attackslow>pengurangan ${attackspeed} Attack Speed</c:attackslow>.`,
          kr: `소지자를 따라다니는 검을 소환합니다.\n주변 아군은 <c:movespeed>이동 속도 +${movespeed}%</c:movespeed>와 <c:attackspeed>공격 속도 +${attackspeed}</c:attackspeed>를 얻습니다.\n범위 내 적은 <c:slow>이동 속도가 ${movespeed}% 감소</c:slow>하고 <c:attackslow>공격 속도가 ${attackspeed} 감소</c:attackslow>합니다.`,
        },
      }
    }

    case ItemList.Kirins_Sword: {
      const attackSpeed = fixed(ItemAbilityData.KIRINS_SWORD_ATTACK_SPEED * 100, 1)
      const moveSpeed = fixed(ItemAbilityData.KIRINS_SWORD_MOVE_SPEED * 100, 1)

      return {
        name: {
          en: "Kirin's Sword",
          ru: 'Меч Кирина',
          br: 'Espada de Kirin',
          cz: 'Meč Kirin',
          zh: '麒麟之劍',
          fr: 'Épée de Kirin',
          vi: 'Kiếm Kirin',
          id: 'Pedang Kirin',
          kr: `기린의 검`,
        },
        descActive: {
          en: `<c:dash>Dash</c:dash> forward. <c:attackspeed>Gain ${attackSpeed}% Attack Speed</c:attackspeed> and <c:movespeed>${moveSpeed}% Movement Speed</c:movespeed>.`,
          ru: `<c:dash>Рывок</c:dash> вперёд. <c:attackspeed>Увеличивает скорость атаки на ${attackSpeed}%</c:attackspeed> и <c:movespeed>скорость передвижения на ${moveSpeed}%</c:movespeed>.`,
          br: `<c:dash>Avança</c:dash> para frente. <c:attackspeed>Aumenta a Velocidade de Ataque em ${attackSpeed}%</c:attackspeed> e a <c:movespeed>Velocidade de Movimento em ${moveSpeed}%</c:movespeed>.`,
          cz: `<c:dash>Vyrazí</c:dash> vpřed. <c:attackspeed>Zvyšuje rychlost útoku o ${attackSpeed}%</c:attackspeed> a <c:movespeed>rychlost pohybu o ${moveSpeed}%</c:movespeed>.`,
          fr: `<c:dash>Fonce</c:dash> vers l'avant. <c:attackspeed>Augmente la vitesse d'attaque de ${attackSpeed}%</c:attackspeed> et la <c:movespeed>vitesse de déplacement de ${moveSpeed}%</c:movespeed>.`,
          zh: `向前<c:dash>衝刺</c:dash>。<c:attackspeed>提高 ${attackSpeed}% 攻擊速度</c:attackspeed>和<c:movespeed>${moveSpeed}% 移動速度</c:movespeed>。`,
          vi: `<c:dash>Lướt</c:dash> về phía trước. <c:attackspeed>Tăng ${attackSpeed}% tốc độ đánh</c:attackspeed> và <c:movespeed>${moveSpeed}% tốc độ di chuyển</c:movespeed>.`,
          id: `<c:dash>Dash</c:dash> ke depan. <c:attackspeed>Meningkatkan Attack Speed sebesar ${attackSpeed}%</c:attackspeed> dan <c:movespeed>Movement Speed sebesar ${moveSpeed}%</c:movespeed>.`,
          kr: `앞으로 <c:dash>돌진</c:dash>합니다. <c:attackspeed>공격 속도 ${attackSpeed}%</c:attackspeed>와 <c:movespeed>이동 속도 ${moveSpeed}%</c:movespeed>를 얻습니다.`,
        },
      }
    }

    case ItemList.Consumable_Placeholder:
      return {
        name: { en: 'Consumables' },
      }

    default:
      return {
        name: { en: '' },
      }
  }
}

const getPoisonBowDescription = (isUpgraded: boolean) => {
  const damageOverTime = isUpgraded
    ? ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME_2
    : ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME
  const slow = fixed(ItemAbilityData.POISON_BOW_SLOW * 100, 1) + '%'
  const maxStacks = ItemAbilityData.POISON_BOW_MAX_STACKS

  const text: { [key: string]: string } = {
    en: `Applies non-lethal Poison (max ${maxStacks} stacks). Each stack <c:slow>reduces Movement Speed by ${slow}</c:slow> and deals <c:magical>${damageOverTime} magical damage</c:magical> per second.`,
    ru: `Накладывает несмертельный Яд (макс. ${maxStacks} стаков). Каждый эффект <c:slow>снижает скорость передвижения на ${slow}</c:slow> и наносит <c:magical>${damageOverTime} магического урона</c:magical> в секунду.`,
    br: `Aplica Veneno não letal (máx. ${maxStacks} acúmulos). Cada acúmulo <c:slow>reduz a Velocidade de Movimento em ${slow}</c:slow> e causa <c:magical>${damageOverTime} de dano mágico</c:magical> por segundo.`,
    fr: `Applique Poison non létal (max ${maxStacks} cumuls). Chaque cumul <c:slow>réduit la vitesse de déplacement de ${slow}</c:slow> et inflige <c:magical>${damageOverTime} dégâts magiques</c:magical> par seconde.`,
    zh: `施加無法致死的中毒效果（最多 ${maxStacks} 層）。每層<c:slow>降低 ${slow} 移動速度</c:slow>，並每秒造成 <c:magical>${damageOverTime} 點魔法傷害</c:magical>。`,
    cz: `Aplikuje nesmrtící Jed (max ${maxStacks} vrstev). Každá vrstva <c:slow>snižuje rychlost pohybu o ${slow}</c:slow> a způsobuje <c:magical>${damageOverTime} magického poškození</c:magical> za sekundu.`,
    vi: `Gây hiệu ứng Độc không gây kết liễu (tối đa ${maxStacks} cộng dồn). Mỗi cộng dồn <c:slow>giảm ${slow} tốc độ di chuyển</c:slow> và gây <c:magical>${damageOverTime} sát thương phép</c:magical> mỗi giây.`,
    id: `Memberikan Racun tidak mematikan (maks ${maxStacks} tumpukan). Setiap tumpukan <c:slow>mengurangi Movement Speed sebesar ${slow}</c:slow> dan memberikan <c:magical>${damageOverTime} damage sihir</c:magical> per detik.`,
    kr: `죽음에 이르지 않는 독을 적용합니다 (최대 ${maxStacks} 중첩). 중첩당 <c:slow>이동 속도를 ${slow} 감소</c:slow>시키고 초당 <c:magical>${damageOverTime}의 마법 피해</c:magical>를 입힙니다.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getIronRodDescription = () => {
  const baseDamage = ItemAbilityData.IRON_ROD_BASE_DAMAGE
  const bonusDamage = fixed(ItemAbilityData.IRON_ROD_AP_MOD * 100, 1)

  const text: { [key: string]: string } = {
    en: `Grants a buff. The next attack deals <c:magical>${baseDamage} (+${bonusDamage}% Ability Power) bonus magical damage</c:magical>.`,
    ru: `Попадание способностями по врагу даёт эффект. Следующая атака наносит <c:magical>${baseDamage} (+${bonusDamage}% силы умений) дополнительного магического урона</c:magical>.`,
    br: `Habilidades ao atingir um inimigo concedem um efeito. O próximo ataque causa <c:magical>${baseDamage} (+${bonusDamage}% Poder de Habilidade) de dano mágico</c:magical> adicional.`,
    fr: `Les compétences touchant un ennemi confèrent un effet. La prochaine attaque inflige <c:magical>${baseDamage} (+${bonusDamage}% puissance) dégâts magiques</c:magical> supplémentaires.`,
    zh: `技能命中敵人時獲得增益。下一次攻擊造成 <c:magical>${baseDamage}（+${bonusDamage}% 技能強度）的額外魔法傷害</c:magical>。`,
    cz: `Zásah schopností udělí efekt. Další útok způsobí <c:magical>${baseDamage} (+${bonusDamage}% síly schopností) bonusové magické poškození</c:magical>.`,
    vi: `Kỹ năng trúng mục tiêu sẽ nhận hiệu ứng. Đòn đánh tiếp theo gây <c:magical>${baseDamage} (+${bonusDamage}% sức mạnh kỹ năng) sát thương phép</c:magical> bổ sung.`,
    id: `Kemampuan yang mengenai musuh memberikan efek. Serangan berikutnya menghasilkan <c:magical>${baseDamage} (+${bonusDamage}% Ability Power) damage sihir</c:magical> tambahan.`,
    kr: `스킬이 적을 적중시키면 버프를 얻습니다. 다음 공격이 <c:magical>${baseDamage} (+${bonusDamage}% 주문력)의 추가 마법 피해</c:magical>를 입힙니다.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getItemEffectPreventionDescription = () => {
  const duration = toSecRaw(ItemAbilityData.ITEM_EFFECT_PREVENTION_DURATION)

  const text: { [key: string]: string } = {
    en: `This effect cannot trigger again for ${duration} seconds.`,
    ru: `Этот эффект не может сработать снова в течение ${duration} сек.`,
    br: `Este efeito não pode ser ativado novamente por ${duration}s.`,
    fr: `Cet effet ne peut pas se déclencher à nouveau pendant ${duration} s.`,
    zh: `此效果在 ${duration} 秒內無法再次觸發。`,
    cz: `Tento efekt se nemůže znovu spustit po dobu ${duration} s.`,
    vi: `Hiệu ứng này không thể kích hoạt lại trong ${duration} giây.`,
    id: `Efek ini tidak dapat aktif lagi selama ${duration} detik.`,
    kr: `이 효과는 ${duration}초 동안 다시 발동할 수 없습니다.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getFrigidCurseDescription = () => {
  const slow = fixed(ItemAbilityData.FRIGID_CURSE_SLOW * 100, 1) + '%'
  const attackSpeed = fixed(ItemAbilityData.FRIGID_CURSE_ATTACK_SPEED_REDUCTION * 100, 1)
  const healingReduction = fixed(ItemAbilityData.FRIGID_CURSE_HEALING_REDUCTION * 100, 1)

  const text: { [key: string]: string } = {
    en: `<c:slow>Frigid Curse: reduces Movement Speed by ${slow}, Attack Speed by ${attackSpeed}%, and healing by ${healingReduction}%</c:slow>`,
    ru: `<c:slow>Морозное проклятие: снижает скорость передвижения на ${slow}, скорость атаки на ${attackSpeed}% и лечение на ${healingReduction}%</c:slow>`,
    br: `<c:slow>Maldição Gélida: reduz a Velocidade de Movimento em ${slow}, a Velocidade de Ataque em ${attackSpeed}% e a cura em ${healingReduction}%</c:slow>`,
    fr: `<c:slow>Malédiction glaciale : réduit la vitesse de déplacement de ${slow}, la vitesse d'attaque de ${attackSpeed}% et les soins de ${healingReduction}%</c:slow>`,
    zh: `<c:slow>寒冷詛咒：降低移動速度 ${slow}、攻擊速度 ${attackSpeed}%，並降低 ${healingReduction}% 治療效果</c:slow>`,
    cz: `<c:slow>Zmrzlá kletba: snižuje rychlost pohybu o ${slow}, rychlost útoku o ${attackSpeed}% a léčení o ${healingReduction}%</c:slow>`,
    vi: `<c:slow>Lời Nguyền Lạnh Giá: giảm tốc độ di chuyển ${slow}, tốc độ đánh ${attackSpeed}% và hồi máu ${healingReduction}%</c:slow>`,
    id: `<c:slow>Kutukan Dingin: mengurangi Movement Speed sebesar ${slow}, Attack Speed sebesar ${attackSpeed}%, dan penyembuhan sebesar ${healingReduction}%</c:slow>`,
    kr: `<c:slow>혹한의 저주: 이동 속도를 ${slow}만큼, 공격 속도를 ${attackSpeed}%만큼, 회복 효과를 ${healingReduction}%만큼 감소시킵니다</c:slow>`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getObserverWardDescription = () => {
  const text: { [key: string]: string } = {
    en: `Places an Observer Ward. <c:vision>Grants vision</c:vision> and <c:vision>reveals invisible units</c:vision>. Invisible to enemies. Destroyed if revealed.`,
    ru: `Устанавливает Наблюдательный тотем. <c:vision>Даёт обзор</c:vision> и <c:vision>раскрывает невидимые цели</c:vision>. Невидим для врагов. Уничтожается при обнаружении.`,
    br: `Coloca um Observer Ward. <c:vision>Concede visão</c:vision> e <c:vision>revela unidades invisíveis</c:vision>. Invisível para inimigos. É destruído ao ser revelado.`,
    zh: `放置一個偵查守衛。提供<c:vision>視野</c:vision>並<c:vision>揭露隱形單位</c:vision>。對敵人隱形，被發現後會被摧毀。`,
    cz: `Umístí pozorovací totem. <c:vision>Poskytuje vidění</c:vision> a <c:vision>odhaluje neviditelné jednotky</c:vision>. Je neviditelný pro nepřátele. Je zničen při odhalení.`,
    fr: `Place une Ward d'observation. Accorde de la <c:vision>vision</c:vision> et <c:vision>révèle les unités invisibles</c:vision>. Invisible pour les ennemis. Détruite si révélée.`,
    vi: `Đặt một Mắt Quan Sát. <c:vision>Cung cấp tầm nhìn</c:vision> và <c:vision>phát hiện đơn vị tàng hình</c:vision>. Vô hình với kẻ địch. Bị phá hủy khi bị phát hiện.`,
    id: `Menempatkan Observer Ward. <c:vision>Memberikan visi</c:vision> dan <c:vision>mengungkap unit tak terlihat</c:vision>. Tidak terlihat oleh musuh. Dihancurkan jika terungkap.`,
    kr: `감시 와드를 설치합니다. <c:vision>시야</c:vision>를 제공하고 <c:vision>보이지 않는 유닛을 드러냅니다</c:vision>. 적에게는 보이지 않습니다. 발각되면 파괴됩니다.`,
  }

  return text[LANG.value] ? text[LANG.value] : text['en']
}

const getNimbleBowDescription = () => {
  const speed = fixed(ItemAbilityData.NIMBLE_LONGBOW_BULLET_SPEED * 100, 1) + '%'
  const range = ItemAbilityData.NIMBLE_LONGBOW_BULLET_RANGE

  return {
    en: `<c:bonus>Increases projectile range and area of effect by ${range}px and projectile speed by ${speed}</c:bonus>.`,
    ru: `<c:bonus>Увеличивает дальность снаряда и радиус области на ${range} пикселей, а также скорость снаряда на ${speed}</c:bonus>.`,
    br: `<c:bonus>Aumenta o alcance do projétil e a área de efeito em ${range}px, e a velocidade do projétil em ${speed}</c:bonus>.`,
    zh: `<c:bonus>提高射程和作用範圍 ${range} 像素，並提高射彈速度 ${speed}</c:bonus>。`,
    cz: `<c:bonus>Zvyšuje dosah střely a oblast působení o ${range} px a rychlost střely o ${speed}</c:bonus>.`,
    fr: `<c:bonus>Augmente la portée du projectile et la zone d'effet de ${range} px, ainsi que la vitesse du projectile de ${speed}</c:bonus>.`,
    vi: `<c:bonus>Tăng tầm bắn và vùng ảnh hưởng thêm ${range} px, và tăng tốc độ đạn ${speed}</c:bonus>.`,
    id: `<c:bonus>Meningkatkan jangkauan proyektil dan area efek sebesar ${range}px, serta kecepatan proyektil sebesar ${speed}</c:bonus>.`,
    kr: `<c:bonus>투사체 사거리와 효과 범위를 ${range}px만큼, 투사체 속도를 ${speed}만큼 증가시킵니다</c:bonus>.`,
  }
}

/** Picks the active language out of a per-language block, falling back to English. */
const pickLang = (block?: { [key in string]: string }): string | undefined => {
  if (!block) {
    return undefined
  }

  return block[LANG.value] ? block[LANG.value] : block['en']
}

export const getLocaleItemDescription = (
  itemId: number
): {
  name: string
  descActive?: string
  descPassive?: string
  descPassive2?: string
} => {
  const result = _getLocaleItemDescription(itemId)

  return {
    name: pickLang(result.name) ?? '',
    descActive: pickLang(result.descActive),
    descPassive: pickLang(result.descPassive),
    descPassive2: pickLang(result.descPassive2),
  }
}

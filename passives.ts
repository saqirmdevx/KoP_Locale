// @ts-ignore
import {
  Shared,
  AlvarAbilityData,
  ArelAbilityData,
  BelleAbilityData,
  FoxyAbilityData,
  HazelAbilityData,
  FlinAbilityData,
  ICeatAbilityData,
  KarickAbilityData,
  KumihuAbilityData,
  MagdaleneAbilityData,
  PatroklosAbilityData,
  PrimAbilityData,
  PuppeteerAbilityData,
  SeerAbilityData,
  SparrowAbilityData,
  ThomasAbilityData,
  VeilAbilityData,
} from 'shared'
import { LANG } from 'lang/lang'
import { fixed } from './misc'
// @ts-ignore
import type { IAbilityTooltipsDataFinal } from '../abilityLangData'
// @ts-ignore
import {
  colorize,
  getBuffValue,
  getControlDuration,
  getDamage,
  getDuration,
  getMovementSpeedDuration,
  getStunDuration,
} from '../abilityLangData'

type LocaleText = { [key in string]: string }

export type PassiveDescriptionInput = IAbilityTooltipsDataFinal & {
  hasTalent: (flag: Shared.TALENT, tier: number) => boolean
}

export type PassiveLocale = {
  name: string
  description: string
}

const PLACEHOLDER_NAME: LocaleText = { en: '' }
const PLACEHOLDER_DESCRIPTION: LocaleText = { en: 'TO BE ADDED SOON' }

const resolve = (text: LocaleText): string => text[LANG.value] ?? text.en

export const appendSentence = (base: LocaleText, sentence: LocaleText, condition: boolean): LocaleText => {
  if (!condition) {
    return base
  }

  const result: LocaleText = {}
  for (const key in base) {
    result[key] = base[key] + (sentence[key] ?? sentence.en)
  }

  return result
}

const _getPassiveNameLang = (hero: Shared.HEROES): LocaleText => {
  switch (hero) {
    case Shared.HEROES.HAZEL:
      return {
        en: 'Stone Skin',
        ru: 'Каменная кожа',
        cz: 'Kamenná kůže',
        zh: '石膚',
        fr: 'Peau de pierre',
        br: 'Pele de Pedra',
        vi: 'Da Đá',
        id: 'Kulit Batu',
        kr: '돌 피부',
      }

    case Shared.HEROES.FOXY:
      return {
        en: 'Guns Blazing',
        ru: 'Шквальный огонь',
        cz: 'Palba ze všech hlavní',
        zh: '火力全開',
        fr: 'Feu nourri',
        br: 'Fogo Cerrado',
        vi: 'Súng Rực Lửa',
        id: 'Tembakan Membara',
        kr: '불타는 총구',
      }

    case Shared.HEROES.MAGDALENE:
      return {
        en: 'Soul Catcher',
        ru: 'Ловец душ',
        cz: 'Lapačka duší',
        zh: '靈魂捕手',
        fr: "Attrapeuse d'âmes",
        br: 'Caçadora de Almas',
        vi: 'Kẻ Bắt Hồn',
        id: 'Penangkap Jiwa',
        kr: '영혼 수집가',
      }

    case Shared.HEROES.PRIM:
      return {
        en: 'Ball Protection',
        ru: 'Защита шара',
        cz: 'Ochrana míče',
        zh: '球的守護',
        fr: 'Protection de la balle',
        br: 'Proteção da Bola',
        vi: 'Cầu Bảo Vệ',
        id: 'Proteksi Bola',
        kr: '공 보호',
      }

    case Shared.HEROES.SEER:
      return {
        en: 'Malevolent Curse',
        ru: 'Злобное проклятье',
        cz: 'Zlomyslné prokletí',
        zh: '邪恶诅咒',
        fr: 'Malédiction maléfique',
        br: 'Maldição Malévola',
        vi: 'Lời Nguyền Ác Độc',
        id: 'Kutukan Jahat',
        kr: '악의의 저주',
      }

    case Shared.HEROES.BELLE:
      return {
        en: 'Floral Rejuvenation',
        ru: 'Цветочное оздоровление',
        cz: 'Květinová obnova',
        zh: '療育鮮花',
        fr: 'Rajeunissement floral',
        br: 'Rejuvenescimento Floral',
        vi: 'Thiên Nhiên Tái Sinh',
        id: 'Pemulihan Floral',
        kr: '꽃의 회복',
      }

    case Shared.HEROES.THOMAS:
      return {
        en: 'Bleed Attack',
        ru: 'Кровоточащая атака',
        cz: 'Krvácející útok',
        zh: '流血攻擊',
        fr: 'Attaque sanglante',
        br: 'Ataque Sangrento',
        vi: 'Đòn Chảy Máu',
        id: 'Serangan Berdarah',
        kr: '출혈 공격',
      }

    case Shared.HEROES.VEIL:
      return {
        en: 'Enhanced State',
        ru: 'Усиленное состояние',
        cz: 'Posílený stav',
        zh: '強化狀態',
        fr: 'État amélioré',
        br: 'Estado Aprimorado',
        vi: 'Trạng thái Thức tỉnh',
        id: 'Keadaan Ditingkatkan',
        kr: '강화 상태',
      }

    case Shared.HEROES.KIRA:
      return {
        en: 'Enhanced State',
        ru: 'Усиленное состояние',
        cz: 'Posílený stav',
        zh: '強化狀態',
        fr: 'État amélioré',
        br: 'Estado Aprimorado',
        vi: 'Trạng thái Cường hóa',
        id: 'Keadaan Ditingkatkan',
        kr: '강화 상태',
      }

    case Shared.HEROES.KARICK:
      return {
        en: 'Verdant Mark',
        ru: 'Verdant Mark',
        cz: 'Verdant Mark',
        zh: 'Verdant Mark',
        fr: 'Verdant Mark',
        br: 'Verdant Mark',
        vi: 'Verdant Mark',
        id: 'Verdant Mark',
        kr: '초록의 인장',
      }

    case Shared.HEROES.FLIN:
      return {
        en: 'Eagle Eye',
        ru: 'Орлиный глаз',
        cz: 'Orlí zrak',
        zh: '鷹眼',
        fr: "Œil d'aigle",
        br: 'Olho de Águia',
        vi: 'Mắt Đại Bàng',
        id: 'Mata Elang',
        kr: '독수리의 눈',
      }

    case Shared.HEROES.PUPPETEER:
      return {
        en: 'Tension',
        ru: 'Натяжение',
        cz: 'Napětí',
        zh: '張力',
        fr: 'Tension',
        br: 'Tensão',
        vi: 'Sức Căng',
        id: 'Tegangan',
        kr: '긴장',
      }

    case Shared.HEROES.PATROKLOS:
      return {
        en: 'Heavens Fall',
        ru: 'Падение Небес',
        cz: 'Pád nebes',
        zh: '天罰',
        fr: 'Chute des Cieux',
        br: 'Queda dos Céus',
        vi: 'Thiên Phạt',
        id: 'Heavens Fall',
        kr: '천벌',
      }

    default:
      return PLACEHOLDER_NAME
  }
}

const _getPassiveDescriptionLang = (hero: Shared.HEROES, unitStats: PassiveDescriptionInput): LocaleText => {
  const { damage, abilityPower, level, hasTalent } = unitStats

  switch (hero) {
    case Shared.HEROES.KUMIHU: {
      const enhancedDamage = getDamage(
        KumihuAbilityData.ENH_ATTACK_MOD_DAMAGE * abilityPower,
        Shared.DamageTypes.MAGICAL,
        KumihuAbilityData.ENH_ATTACK_BASE_DAMAGE + KumihuAbilityData.ENH_ATTACK_DAMAGE_PER_LEVEL * (level - 1)
      )
      const charmDuration = getControlDuration(KumihuAbilityData.ENH_CHARM_DURATION, 'Charm')

      return {
        en: `After using Arcane <c:dash>Dash</c:dash>, Kumihu's next Basic Attack deals a bonus ${enhancedDamage} and applies <c:charm>Charm</c:charm> on target for ${charmDuration}.`,
        ru: `После использования Тайного <c:dash>рывка</c:dash> следующая базовая атака Кумиху нанесёт дополнительно ${enhancedDamage} и наложит <c:charm>очарование</c:charm> на цель на ${charmDuration}.`,
        cz: `Po použití Tajemného <c:dash>skoku</c:dash> způsobí další základní útok Kumihu bonusových ${enhancedDamage} a <c:charm>očaruje</c:charm> cíl na ${charmDuration}.`,
        zh: `使用奧術<c:dash>衝刺</c:dash>後，庫咪戶的下一次基本攻擊額外造成 ${enhancedDamage}，並對目標施加<c:charm>魅惑</c:charm> ${charmDuration}。`,
        fr: `Après avoir utilisé la Ruée arcanique, la prochaine attaque de base de Kumihu inflige un bonus de ${enhancedDamage} et applique <c:charm>Charme</c:charm> à la cible pendant ${charmDuration}.`,
        br: `Após usar o <c:dash>Avanço</c:dash> Arcano, o próximo ataque básico de Kumihu causa um bônus de ${enhancedDamage} e aplica <c:charm>Encanto</c:charm> no alvo por ${charmDuration}.`,
        vi: `Sau khi sử dụng Phi Thân Ma Pháp, đòn đánh thường tiếp theo của Kumihu gây thêm ${enhancedDamage} và áp dụng <c:charm>Quyến Rũ</c:charm> lên mục tiêu trong ${charmDuration}.`,
        id: `Setelah menggunakan Arcane <c:dash>Dash</c:dash>, Serangan Dasar berikutnya Kumihu memberikan bonus ${enhancedDamage} dan menerapkan <c:charm>Charm</c:charm> pada target selama ${charmDuration}.`,
        kr: `비전 <c:dash>돌진</c:dash>을 사용한 후 쿠미후의 다음 기본 공격은 추가로 ${enhancedDamage}의 피해를 입히고 대상에게 ${charmDuration} 동안 <c:charm>매혹</c:charm>을 적용합니다.`,
      }
    }

    case Shared.HEROES.SPARROW: {
      const knockUpDuration = getStunDuration(
        SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION +
          (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)
            ? SparrowAbilityData.TALENT_T2_RIGHT_ENHANCED_ATTACK_KNOCKBACK_DURATION
            : 0),
        'Knock Up'
      )
      const damageModifier =
        SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER +
        (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? SparrowAbilityData.TALENT_T2_LEFT_ENHANCED_ATTACK_DMG_MODIFIER : 0)
      const enhancedDamage = getDamage(
        fixed(damageModifier * damage, 1),
        Shared.DamageTypes.PHYSICAL,
        SparrowAbilityData.ENHANCED_ATTACK_BASE_DAMAGE
      )

      return {
        en: `Using an ability charges Sparrow's sword. Her next basic attack is replaced with a shockwave attack, <c:knockup>knocking up</c:knockup> enemies for ${knockUpDuration} and dealing ${enhancedDamage}.`,
        ru: `Использование способности зачаровывает меч Спарроу. Её следующая базовая атака заменяется ударной волной, которая <c:knockup>подбрасывает</c:knockup> врагов на ${knockUpDuration} и наносит ${enhancedDamage}.`,
        cz: `Použití schopnosti nabije meč Sparrow. Její další základní útok je nahrazen tlakovou vlnou, která <c:knockup>vyhodí</c:knockup> nepřátele do vzduchu na ${knockUpDuration} a způsobí ${enhancedDamage}.`,
        zh: `使用技能會為史佩羅的劍充能。她的下一次基本攻擊將變為衝擊波攻擊，<c:knockup>擊飛</c:knockup>敵人 ${knockUpDuration}，並造成 ${enhancedDamage}。`,
        fr: `L'utilisation d'une compétence charge l'épée de Sparrow. Sa prochaine attaque de base est remplacée par une onde de choc qui <c:knockup>projette les ennemis en l'air</c:knockup> pendant ${knockUpDuration} et inflige ${enhancedDamage}.`,
        br: `Usar uma habilidade carrega a espada de Sparrow. Seu próximo ataque básico é substituído por uma onda de choque que <c:knockup>arremessa</c:knockup> os inimigos para o ar por ${knockUpDuration} e causa ${enhancedDamage}.`,
        vi: `Sử dụng một kỹ năng sẽ tích năng lượng cho kiếm của Sparrow. Đòn đánh thường tiếp theo của cô được thay thế bằng sóng kiếm, <c:knockup>hất tung</c:knockup> kẻ địch trong ${knockUpDuration} và gây ${enhancedDamage}.`,
        id: `Menggunakan kemampuan mengisi pedang Sparrow. Serangan dasar berikutnya digantikan dengan serangan gelombang kejut yang <c:knockup>melontarkan</c:knockup> musuh ke udara selama ${knockUpDuration} dan memberikan ${enhancedDamage}.`,
        kr: `스킬을 사용하면 스패로우의 검에 기운이 충전됩니다. 다음 기본 공격이 충격파 공격으로 대체되어 적을 ${knockUpDuration} 동안 <c:knockup>공중으로 띄워 올리고</c:knockup> ${enhancedDamage}의 피해를 입힙니다.`,
      }
    }

    case Shared.HEROES.BELLE: {
      const healPercentage = fixed(
        (BelleAbilityData.FLORAL_AMBUSH_HEAL +
          (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0) ? BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_HEAL : 0)) *
          100
      )

      return {
        en: `Floral Ambush's explosion <c:heal>heals nearby allies for ${healPercentage}% of its damage</c:heal>.`,
        ru: `Взрыв Цветочной ловушки <c:heal>лечит ближайших союзников на ${healPercentage}% от нанесённого урона</c:heal>.`,
        cz: `Exploze Květinového útoku <c:heal>léčí nedaleké spojence za ${healPercentage}% způsobeného poškození</c:heal>.`,
        zh: `鮮花伏擊的爆炸<c:heal>為附近盟友治癒其傷害的 ${healPercentage}%</c:heal>。`,
        fr: `L'explosion de l'Embuscade florale <c:heal>soigne les alliés proches à hauteur de ${healPercentage}% de ses dégâts</c:heal>.`,
        br: `A explosão da Emboscada Floral <c:heal>cura os aliados próximos em ${healPercentage}% do seu dano</c:heal>.`,
        vi: `Vụ nổ của Hoa Phục Kích <c:heal>hồi máu cho đồng minh gần đó bằng ${healPercentage}% sát thương của nó</c:heal>.`,
        id: `Ledakan Emboscada Floral <c:heal>menyembuhkan sekutu terdekat sebesar ${healPercentage}% dari kerusakannya</c:heal>.`,
        kr: `꽃의 매복 폭발이 <c:heal>주변 아군을 피해량의 ${healPercentage}%만큼 회복</c:heal>시킵니다.`,
      }
    }

    case Shared.HEROES.ICEAT: {
      const movementSpeedSlow = fixed(ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED * 100, 1)
      const attackSpeedSlow = fixed(ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100, 1)
      const slowDuration = getMovementSpeedDuration(ICeatAbilityData.AUTOATTACK_SLOW_DURATION)

      return {
        en: `I'Ceat's basic attacks <c:slow>reduce enemy Movement Speed by ${movementSpeedSlow}% and Attack Speed by ${attackSpeedSlow}%</c:slow> for ${slowDuration}.`,
        ru: `Базовые атаки Ай'сита <c:slow>снижают скорость передвижения врагов на ${movementSpeedSlow}% и скорость атаки на ${attackSpeedSlow}%</c:slow> на ${slowDuration}.`,
        cz: `Základní útoky I'Ceata <c:slow>sníží rychlost pohybu nepřátel o ${movementSpeedSlow}% a rychlost útoku o ${attackSpeedSlow}%</c:slow> na ${slowDuration}.`,
        zh: `艾希特的基本攻擊<c:slow>降低敵人移動速度 ${movementSpeedSlow}% 與攻擊速度 ${attackSpeedSlow}%</c:slow>，持續 ${slowDuration}。`,
        fr: `Les attaques de base d'I'Ceat <c:slow>réduisent la vitesse de déplacement des ennemis de ${movementSpeedSlow}% et leur vitesse d'attaque de ${attackSpeedSlow}%</c:slow> pendant ${slowDuration}.`,
        br: `Os ataques básicos de I'Ceat <c:slow>reduzem a Velocidade de Movimento do inimigo em ${movementSpeedSlow}% e a Velocidade de Ataque em ${attackSpeedSlow}%</c:slow> por ${slowDuration}.`,
        vi: `Đòn đánh thường của I'Ceat <c:slow>giảm ${movementSpeedSlow}% Tốc độ Di chuyển và ${attackSpeedSlow}% Tốc độ Tấn công của kẻ địch</c:slow> trong ${slowDuration}.`,
        id: `Serangan dasar I'Ceat <c:slow>mengurangi Kecepatan Gerakan musuh sebesar ${movementSpeedSlow}% dan Kecepatan Serangan sebesar ${attackSpeedSlow}%</c:slow> selama ${slowDuration}.`,
        kr: `아이싯의 기본 공격은 ${slowDuration} 동안 <c:slow>적의 이동 속도를 ${movementSpeedSlow}%, 공격 속도를 ${attackSpeedSlow}%</c:slow>만큼 감소시킵니다.`,
      }
    }

    case Shared.HEROES.THOMAS: {
      const bleedAttackCount = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? ThomasAbilityData.TALENT_T2_LEFT_BLEED_ATTACK_COUNT
        : ThomasAbilityData.BLEED_ATTACK_COUNT
      const bleedDamageModifier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? ThomasAbilityData.TALENT_T1_LEFT_BLEED_DAMAGE
        : ThomasAbilityData.BLEED_DAMAGE
      const bleedDamage = getDamage(bleedDamageModifier * damage, Shared.DamageTypes.PHYSICAL)
      const bleedDuration = getDuration(ThomasAbilityData.BLEED_DAMAGE_DURATION)
      const armorReduction = colorize(ThomasAbilityData.BLEED_ARMOR_REDUCTION)

      return {
        en: `Landing ${bleedAttackCount} basic attacks on the same enemy hero causes them to bleed, dealing ${bleedDamage} over ${bleedDuration} and <c:armor>reducing their Armor by ${armorReduction}</c:armor> for the duration.`,
        ru: `Попадание ${bleedAttackCount} базовыми атаками по одному вражескому герою вызывает у него кровотечение, наносящее ${bleedDamage} в течение ${bleedDuration} и <c:armor>снижающее его броню на ${armorReduction}</c:armor> на это время.`,
        cz: `Zasažení stejného nepřátelského hrdiny ${bleedAttackCount} základními útoky způsobí krvácení, které udělí ${bleedDamage} po dobu ${bleedDuration} a <c:armor>sníží jeho obranu o ${armorReduction}</c:armor> po dobu trvání.`,
        zh: `對同一敵方英雄命中 ${bleedAttackCount} 次基本攻擊會使其流血，在 ${bleedDuration} 內造成 ${bleedDamage}，並在持續期間<c:armor>減少其 ${armorReduction} 護甲</c:armor>。`,
        fr: `Toucher le même héros ennemi avec ${bleedAttackCount} attaques de base le fait saigner, infligeant ${bleedDamage} sur ${bleedDuration} et <c:armor>réduisant son armure de ${armorReduction}</c:armor> pendant la durée.`,
        br: `Acertar ${bleedAttackCount} ataques básicos no mesmo herói inimigo faz com que ele sangre, causando ${bleedDamage} ao longo de ${bleedDuration} e <c:armor>reduzindo sua Armadura em ${armorReduction}</c:armor> durante esse período.`,
        vi: `Trúng ${bleedAttackCount} đòn đánh thường lên cùng một tướng địch khiến mục tiêu chảy máu, gây ${bleedDamage} trong ${bleedDuration} và <c:armor>giảm ${armorReduction} Giáp</c:armor> của mục tiêu trong thời gian đó.`,
        id: `Mengenai hero musuh yang sama dengan ${bleedAttackCount} serangan dasar membuatnya berdarah, memberikan ${bleedDamage} selama ${bleedDuration} dan <c:armor>mengurangi Armor-nya sebesar ${armorReduction}</c:armor> selama durasi tersebut.`,
        kr: `같은 적 영웅에게 기본 공격을 ${bleedAttackCount}회 명중시키면 출혈을 일으켜 ${bleedDuration}에 걸쳐 ${bleedDamage}의 피해를 입히고, 지속시간 동안 <c:armor>방어력을 ${armorReduction}만큼 감소</c:armor>시킵니다.`,
      }
    }

    case Shared.HEROES.VEIL: {
      const modifier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1
      const enhancedDamage = getDamage(
        fixed(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier, 1),
        Shared.DamageTypes.MAGICAL,
        (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) *
          modifier,
        'AbilityPower'
      )

      return {
        en: `Hitting an enemy hero with Astral Blades makes Veil Enhanced. Her next basic attack uses her astral spirit to deal a bonus ${enhancedDamage}, removing her enhanced state.`,
        ru: `Попадание Астральными клинками по вражескому герою даёт Вэйл усиление. Её следующая базовая атака использует астральный дух, нанося дополнительно ${enhancedDamage} и снимая усиленное состояние.`,
        cz: `Zasažení nepřátelského hrdiny Astrálními čepelemi Veil posílí. Její další základní útok využije astrálního ducha a udělí bonusových ${enhancedDamage}, čímž odstraní její posílený stav.`,
        zh: `星光刀刃命中敵方英雄時，維爾進入強化狀態。她的下一次基本攻擊將利用星光魂魄額外造成 ${enhancedDamage}，並移除她的強化狀態。`,
        fr: `Toucher un héros ennemi avec les Lames astrales rend Veil améliorée. Sa prochaine attaque de base utilise son esprit astral pour infliger un bonus de ${enhancedDamage}, supprimant son état amélioré.`,
        br: `Atingir um herói inimigo com as Lâminas Astrais torna Veil Aprimorada. Seu próximo ataque básico usa seu espírito astral para causar um bônus de ${enhancedDamage}, removendo seu estado aprimorado.`,
        vi: `Trúng tướng địch bằng Tinh Kiếm khiến Veil bước vào trạng thái thức tỉnh. Đòn đánh thường tiếp theo của cô sử dụng linh hồn thần bí để gây thêm ${enhancedDamage}, loại bỏ trạng thái thức tỉnh.`,
        id: `Mengenai hero musuh dengan Astral Blades membuat Veil Ditingkatkan. Serangan dasar berikutnya menggunakan roh astralnya untuk memberikan bonus ${enhancedDamage}, menghapus keadaan ditingkatkan.`,
        kr: `성계의 칼날이 적 영웅에게 명중하면 베일이 강화 상태가 됩니다. 다음 기본 공격이 성계의 정령을 사용해 추가로 ${enhancedDamage}의 피해를 입히고 강화 상태를 해제합니다.`,
      }
    }

    case Shared.HEROES.KIRA:
      return {
        en: `Casting an ability makes Kira Enhanced, empowering her next basic attack or ability with an additional effect.`,
        ru: `Использование способности даёт Кире усиление, наделяя её следующую базовую атаку или способность дополнительным эффектом.`,
        cz: `Použití schopnosti Kiru posílí a její další základní útok nebo schopnost získá dodatečný efekt.`,
        zh: `施放技能會使奇菈進入強化狀態，令她的下一次基本攻擊或技能獲得額外效果。`,
        fr: `Lancer une compétence rend Kira améliorée, conférant un effet supplémentaire à sa prochaine attaque de base ou compétence.`,
        br: `Conjurar uma habilidade torna Kira Aprimorada, concedendo um efeito adicional ao seu próximo ataque básico ou habilidade.`,
        vi: `Sử dụng một kỹ năng khiến Kira bước vào trạng thái cường hóa, giúp đòn đánh thường hoặc kỹ năng tiếp theo của cô nhận thêm hiệu ứng.`,
        id: `Menggunakan kemampuan membuat Kira Ditingkatkan, memberikan efek tambahan pada serangan dasar atau kemampuan berikutnya.`,
        kr: `스킬을 사용하면 키라가 강화 상태가 되어 다음 기본 공격이나 스킬에 추가 효과가 부여됩니다.`,
      }

    case Shared.HEROES.HAZEL: {
      const tenacity = getBuffValue(`${fixed(HazelAbilityData.STONE_SKIN_TENACITY * 100, 1)}%`, 'Tenacity Buff')
      const bonusTenacity = getBuffValue(`${fixed(HazelAbilityData.STONE_SKIN_CC_BONUS_TENACITY * 100, 1)}%`, 'Tenacity Buff')
      const bonusDuration = getDuration(HazelAbilityData.STONE_SKIN_CC_BONUS_DURATION)
      const movementSpeed = getBuffValue(
        `${fixed(HazelAbilityData.TALENT_T1_RIGHT_STONE_SKIN_MOVEMENT_SPEED * 100, 1)}%`
      , 'Movement Speed Buff')

      return appendSentence(
        {
          en: `Hazel has ${tenacity} Tenacity. Whenever she is crowd-controlled (stunned, frozen, rooted, charmed, feared, knocked up or silenced) she gains an additional ${bonusTenacity} Tenacity for ${bonusDuration}.`,
          ru: `Хейзел обладает ${tenacity} Упорства. Всякий раз, когда на неё действует эффект контроля (оглушение, заморозка, обездвиживание, очарование, страх, подбрасывание или молчание), она дополнительно получает ${bonusTenacity} Упорства на ${bonusDuration}.`,
          cz: `Hazel má ${tenacity} houževnatosti. Kdykoli je pod efektem kontroly (omráčení, zmrazení, zakořenění, očarování, strach, vyhození do vzduchu nebo umlčení), získá navíc ${bonusTenacity} houževnatosti na ${bonusDuration}.`,
          zh: `哈傑爾擁有 ${tenacity} 韌性。每當她受到控制效果（暈眩、凍結、禁錮、魅惑、恐懼、擊飛或沉默）時，額外獲得 ${bonusTenacity} 韌性，持續 ${bonusDuration}。`,
          fr: `Hazel possède ${tenacity} de ténacité. Chaque fois qu'elle subit un effet de contrôle (étourdissement, gel, enracinement, charme, peur, projection en l'air ou silence), elle gagne ${bonusTenacity} de ténacité supplémentaire pendant ${bonusDuration}.`,
          br: `Hazel possui ${tenacity} de Tenacidade. Sempre que ela sofre um efeito de controle (atordoamento, congelamento, enraizamento, encanto, medo, arremesso ou silêncio), ela ganha ${bonusTenacity} de Tenacidade adicional por ${bonusDuration}.`,
          vi: `Hazel có ${tenacity} Kháng Khống Chế. Mỗi khi bị khống chế (choáng, đóng băng, trói chân, quyến rũ, sợ hãi, hất tung hoặc câm lặng), cô nhận thêm ${bonusTenacity} Kháng Khống Chế trong ${bonusDuration}.`,
          id: `Hazel memiliki ${tenacity} Ketekunan. Setiap kali ia terkena crowd control (stun, beku, root, charm, takut, terlontar, atau bungkam), ia mendapatkan tambahan ${bonusTenacity} Ketekunan selama ${bonusDuration}.`,
          kr: `헤이즐은 ${tenacity}의 강인함을 보유합니다. 군중 제어(기절, 빙결, 속박, 매혹, 공포, 공중으로 띄우기 또는 침묵)에 걸릴 때마다 ${bonusDuration} 동안 추가로 ${bonusTenacity}의 강인함을 얻습니다.`,
        },
        {
          en: ` Stone Skin also grants ${movementSpeed} <c:movespeed>Movement Speed</c:movespeed>.`,
          ru: ` Каменная кожа также даёт ${movementSpeed} <c:movespeed>скорости передвижения</c:movespeed>.`,
          cz: ` Kamenná kůže navíc poskytuje ${movementSpeed} <c:movespeed>rychlosti pohybu</c:movespeed>.`,
          zh: `石膚額外提供 ${movementSpeed} <c:movespeed>移動速度</c:movespeed>。`,
          fr: ` La Peau de pierre accorde aussi ${movementSpeed} de <c:movespeed>vitesse de déplacement</c:movespeed>.`,
          br: ` Pele de Pedra também concede ${movementSpeed} de <c:movespeed>Velocidade de Movimento</c:movespeed>.`,
          vi: ` Da Đá còn cấp thêm ${movementSpeed} <c:movespeed>Tốc độ Di chuyển</c:movespeed>.`,
          id: ` Kulit Batu juga memberikan ${movementSpeed} <c:movespeed>Kecepatan Gerak</c:movespeed>.`,
          kr: ` 돌 피부는 ${movementSpeed}의 <c:movespeed>이동 속도</c:movespeed>도 부여합니다.`,
        },
        hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0)
      )
    }

    case Shared.HEROES.AREL: {
      const enhancedDamageModifier =
        ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD +
        (hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ? ArelAbilityData.TALENT_T1_LEFT_ENH_DAMAGE_MOD : 0)
      const enhancedDamage = getDamage(enhancedDamageModifier * damage)

      return {
        en: `Whenever Arel uses an ability, he loads another bullet in his gun. His next Basic Attack fires that additional bullet, dealing a bonus ${enhancedDamage}.`,
        ru: `Всякий раз, когда Арел использует способность, он заряжает в оружие ещё одну пулю. Его следующая базовая атака выпускает эту дополнительную пулю, нанося дополнительно ${enhancedDamage}.`,
        cz: `Kdykoli Arel použije schopnost, nabije do své zbraně další kulku. Jeho další základní útok tuto kulku vystřelí a způsobí bonusových ${enhancedDamage}.`,
        zh: `每當艾瑞爾發動技能後，他會在槍中裝填另一發子彈。他的下一次基本攻擊會多射出這發子彈，額外造成 ${enhancedDamage}。`,
        fr: `Chaque fois qu'Arel utilise une compétence, il charge une balle supplémentaire dans son pistolet. Sa prochaine attaque de base tire cette balle, infligeant un bonus de ${enhancedDamage}.`,
        br: `Sempre que Arel usa uma habilidade, ele carrega outra bala em sua arma. Seu próximo ataque básico dispara essa bala adicional, causando um bônus de ${enhancedDamage}.`,
        vi: `Mỗi khi Arel sử dụng một kỹ năng, anh nạp thêm một viên đạn vào súng. Đòn đánh thường tiếp theo của anh bắn thêm viên đạn đó, gây thêm ${enhancedDamage}.`,
        id: `Setiap kali Arel menggunakan kemampuan, ia memuat peluru tambahan ke senjatanya. Serangan Dasar berikutnya menembakkan peluru tambahan itu, memberikan bonus ${enhancedDamage}.`,
        kr: `아렐이 스킬을 사용할 때마다 총에 총알을 하나 더 장전합니다. 다음 기본 공격이 그 추가 총알을 발사하여 추가로 ${enhancedDamage}의 피해를 입힙니다.`,
      }
    }

    case Shared.HEROES.ALVAR: {
      const markDuration = getDuration(AlvarAbilityData.MARK_DURATION)
      const markStacks = AlvarAbilityData.MARK_STACKS

      return {
        en: `Alvar's Basic Attacks apply a stack of Divine Impact on enemy heroes, which lasts for ${markDuration}. At ${markStacks} stacks, the enemy receives a Divine Mark.`,
        ru: `Базовые атаки Алвара накладывают на вражеских героев заряд Божественного удара на ${markDuration}. При ${markStacks} зарядах враг получает Божественную метку.`,
        cz: `Základní útoky Alvara aplikují na nepřátelské hrdiny stack Božského úderu, který trvá ${markDuration}. Při ${markStacks} stacích nepřítel obdrží Božskou značku.`,
        zh: `阿爾瓦的基本攻擊會對敵方英雄疊加一層神聖衝擊，持續 ${markDuration}。疊加至 ${markStacks} 層時，敵人將獲得神聖印記。`,
        fr: `Les attaques de base d'Alvar appliquent une pile d'Impact divin sur les héros ennemis pendant ${markDuration}. À ${markStacks} piles, l'ennemi reçoit une Marque divine.`,
        br: `Os ataques básicos de Alvar aplicam um acúmulo de Impacto Divino nos heróis inimigos, que dura ${markDuration}. Com ${markStacks} acúmulos, o inimigo recebe uma Marca Divina.`,
        vi: `Đòn đánh thường của Alvar cộng dồn Thần Kích lên tướng địch, kéo dài ${markDuration}. Khi đạt ${markStacks} cộng dồn, kẻ địch nhận Thần Ấn.`,
        id: `Serangan Dasar Alvar memberikan tumpukan Dampak Ilahi pada hero musuh, yang berlangsung selama ${markDuration}. Pada ${markStacks} tumpukan, musuh menerima Tanda Ilahi.`,
        kr: `알바르의 기본 공격은 적 영웅에게 ${markDuration} 동안 지속되는 신성 충격 중첩을 적용합니다. ${markStacks}중첩이 되면 적은 신성의 인장을 받습니다.`,
      }
    }

    case Shared.HEROES.FOXY: {
      const cooldownReduction = getDuration(
        FoxyAbilityData.GUNS_BLAZING_COOLDOWN_REDUCTION +
          (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
            ? FoxyAbilityData.TALENT_T2_LEFT_GUNS_BLAZING_COOLDOWN_REDUCTION
            : 0)
      )

      return {
        en: `Basic Attacks and Rapid Fire hits against enemy heroes reduce Rapid Fire's and Explosive Grenade's cooldowns by ${cooldownReduction}.`,
        ru: `Попадания базовыми атаками и Беглым огнём по вражеским героям сокращают перезарядку Беглого огня и Взрывной гранаты на ${cooldownReduction}.`,
        cz: `Zásahy základními útoky a Rapid Fire do nepřátelských hrdinů zkrátí obnovení Rapid Fire a Explosive Grenade o ${cooldownReduction}.`,
        zh: `基本攻擊和極速射擊命中敵方英雄時，極速射擊與爆裂手榴彈的冷卻時間減少 ${cooldownReduction}。`,
        fr: `Les attaques de base et les tirs de Feu Rapide qui touchent des héros ennemis réduisent les temps de recharge de Feu Rapide et de Grenade explosive de ${cooldownReduction}.`,
        br: `Ataques básicos e acertos de Fogo Rápido em heróis inimigos reduzem a recarga de Fogo Rápido e da Granada Explosiva em ${cooldownReduction}.`,
        vi: `Đòn đánh thường và Tốc Xạ trúng tướng địch giảm thời gian hồi chiêu của Tốc Xạ và Lựu Đạn Nổ đi ${cooldownReduction}.`,
        id: `Serangan Dasar dan tembakan Rapid Fire yang mengenai hero musuh mengurangi cooldown Rapid Fire dan Explosive Grenade sebesar ${cooldownReduction}.`,
        kr: `적 영웅에게 기본 공격과 속사를 명중시키면 속사와 폭발 수류탄의 재사용 대기시간이 ${cooldownReduction} 감소합니다.`,
      }
    }

    case Shared.HEROES.MAGDALENE: {
      const heroKillSouls = getBuffValue(MagdaleneAbilityData.MAGDALENE_PASSIVE_HERO_KILL_STACKS)
      const assistSouls = getBuffValue(MagdaleneAbilityData.MAGDALENE_PASSIVE_HERO_KILL_STACKS / 2)
      const minionKillSouls = getBuffValue(1)
      const maxSouls = getBuffValue(
        MagdaleneAbilityData.MAGDALENE_PASSIVE_MAXIMUM_STACKS +
          MagdaleneAbilityData.MAGDALENE_PASSIVE_MAXIMUM_STACKS_PER_LEVEL * level +
          (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0) ? MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS : 0)
      )
      const abilityPowerPerSoul = getBuffValue(1, 'Ability Power Buff')
      const soulDamage = getDamage(
        0,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.MAGDALENE_PASSIVE_DAMAGE_PER_STACK_ON_DEATH
      )

      return {
        en: `Magdalene catches the souls of her victims: ${heroKillSouls} for a hero kill, ${assistSouls} for an assist and ${minionKillSouls} for a minion kill, storing up to ${maxSouls} souls. Each soul grants her ${abilityPowerPerSoul} Ability Power. When Magdalene dies, she releases a wave of souls in a small radius, dealing ${soulDamage} per soul to enemies and applying <c:fear>Fear</c:fear> for a short duration, and keeps half of her souls.`,
        ru: `Магдалина собирает души своих жертв: ${heroKillSouls} за убийство героя, ${assistSouls} за содействие и ${minionKillSouls} за убийство миньона, храня до ${maxSouls} душ. Каждая душа даёт ей ${abilityPowerPerSoul} Силы умений. Когда Магдалина умирает, она высвобождает волну душ в небольшом радиусе, нанося ${soulDamage} за каждую душу врагам и накладывая <c:fear>страх</c:fear> на короткое время, при этом сохраняя половину своих душ.`,
        cz: `Magdalena sbírá duše svých obětí: ${heroKillSouls} za zabití hrdiny, ${assistSouls} za asistenci a ${minionKillSouls} za zabití miniona, až do ${maxSouls} duší. Každá duše jí dává ${abilityPowerPerSoul} síly kouzel. Když Magdalena zemře, uvolní vlnu duší v malém okruhu, která způsobí ${soulDamage} za duši nepřátelům a na krátkou dobu je <c:fear>vyděsí</c:fear>, a polovinu svých duší si ponechá.`,
        zh: `瑪格達琳收集受害者的靈魂：擊殺英雄獲得 ${heroKillSouls} 個、助攻獲得 ${assistSouls} 個、擊殺小兵獲得 ${minionKillSouls} 個，最多儲存 ${maxSouls} 個靈魂。每個靈魂提供 ${abilityPowerPerSoul} 點技能威力。瑪格達琳死亡時，會在小範圍內釋放靈魂之波，對敵人每個靈魂造成 ${soulDamage}，並使其<c:fear>恐懼</c:fear>一小段時間，同時保留一半的靈魂。`,
        fr: `Magdalene capture les âmes de ses victimes : ${heroKillSouls} pour un héros tué, ${assistSouls} pour une assistance et ${minionKillSouls} pour un sbire tué, jusqu'à ${maxSouls} âmes. Chaque âme lui accorde ${abilityPowerPerSoul} de puissance des compétences. Lorsque Magdalene meurt, elle libère une vague d'âmes dans un petit rayon, infligeant ${soulDamage} par âme aux ennemis et leur appliquant <c:fear>Peur</c:fear> pendant une courte durée, et conserve la moitié de ses âmes.`,
        br: `Magdalene captura as almas de suas vítimas: ${heroKillSouls} por um abate de herói, ${assistSouls} por uma assistência e ${minionKillSouls} por um abate de súdito, armazenando até ${maxSouls} almas. Cada alma concede ${abilityPowerPerSoul} de Poder de Habilidade. Quando Magdalene morre, ela libera uma onda de almas em uma pequena área, causando ${soulDamage} por alma aos inimigos e aplicando <c:fear>Medo</c:fear> por um curto período, e mantém metade de suas almas.`,
        vi: `Magdalene thu giữ linh hồn của nạn nhân: ${heroKillSouls} khi hạ gục tướng, ${assistSouls} khi hỗ trợ và ${minionKillSouls} khi hạ gục lính, lưu trữ tối đa ${maxSouls} linh hồn. Mỗi linh hồn cấp ${abilityPowerPerSoul} Sức mạnh Phép Thuật. Khi Magdalene chết, cô giải phóng một làn sóng linh hồn trong phạm vi nhỏ, gây ${soulDamage} cho kẻ địch với mỗi linh hồn và khiến chúng <c:fear>sợ hãi</c:fear> trong thời gian ngắn, đồng thời giữ lại một nửa số linh hồn.`,
        id: `Magdalene menangkap jiwa korbannya: ${heroKillSouls} untuk membunuh hero, ${assistSouls} untuk assist, dan ${minionKillSouls} untuk membunuh minion, menyimpan hingga ${maxSouls} jiwa. Setiap jiwa memberinya ${abilityPowerPerSoul} Ability Power. Saat Magdalene mati, ia melepaskan gelombang jiwa dalam radius kecil, memberikan ${soulDamage} per jiwa kepada musuh dan membuat mereka <c:fear>takut</c:fear> untuk waktu singkat, serta mempertahankan setengah jiwanya.`,
        kr: `마그달렌은 희생자의 영혼을 거둡니다. 영웅 처치 시 ${heroKillSouls}개, 어시스트 시 ${assistSouls}개, 미니언 처치 시 ${minionKillSouls}개를 얻으며 최대 ${maxSouls}개까지 저장합니다. 영혼 하나당 주문력이 ${abilityPowerPerSoul} 증가합니다. 마그달렌이 사망하면 좁은 범위에 영혼의 파동을 방출하여 적에게 영혼 하나당 ${soulDamage}의 피해를 입히고 짧은 시간 동안 <c:fear>공포</c:fear>를 적용하며, 영혼의 절반을 유지합니다.`,
      }
    }

    case Shared.HEROES.PRIM: {
      const hasEnhancedProtection = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
      const movementSpeedModifier =
        PrimAbilityData.PRIM_BALL_ATTACHED_BONUS_MOVEMENT_SPEED +
        (hasEnhancedProtection ? PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED : 0)
      const bonusMovementSpeed = getBuffValue(`${fixed(movementSpeedModifier * 100, 1)}%`, 'Movement Speed Buff')
      const bonusArmor = getBuffValue(
        PrimAbilityData.PRIM_BALL_ATTACHED_BONUS_ARMOR +
          (hasEnhancedProtection ? PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR : 0)
      , 'Armor Buff')

      return {
        en: `While Prim's Ball is attached to her, she gains ${bonusMovementSpeed} <c:movespeed>bonus Movement Speed</c:movespeed> and ${bonusArmor} <c:armor>bonus Armor</c:armor>.`,
        ru: `Пока шар Прим прикреплён к ней, она получает ${bonusMovementSpeed} <c:movespeed>бонуса к скорости передвижения</c:movespeed> и ${bonusArmor} <c:armor>бонуса к броне</c:armor>.`,
        cz: `Když je Primin míč připojen k Prim, získá ${bonusMovementSpeed} <c:movespeed>bonus k rychlosti pohybu</c:movespeed> a ${bonusArmor} <c:armor>bonus k brnění</c:armor>.`,
        zh: `當普琳姆的球附著在她身上時，她獲得 ${bonusMovementSpeed} <c:movespeed>額外移動速度</c:movespeed>和 ${bonusArmor} <c:armor>額外護甲</c:armor>。`,
        fr: `Lorsque la balle de Prim est attachée à elle, elle gagne ${bonusMovementSpeed} de <c:movespeed>vitesse de déplacement bonus</c:movespeed> et ${bonusArmor} d'<c:armor>armure bonus</c:armor>.`,
        br: `Enquanto a Bola de Prim está anexada a ela, ela ganha ${bonusMovementSpeed} de <c:movespeed>Velocidade de Movimento bônus</c:movespeed> e ${bonusArmor} de <c:armor>Armadura bônus</c:armor>.`,
        vi: `Khi Quả Cầu của Prim gắn vào cô, cô nhận ${bonusMovementSpeed} <c:movespeed>Tốc độ Di chuyển cộng thêm</c:movespeed> và ${bonusArmor} <c:armor>Giáp cộng thêm</c:armor>.`,
        id: `Saat Bola Prim terpasang padanya, ia mendapatkan ${bonusMovementSpeed} <c:movespeed>bonus Kecepatan Gerak</c:movespeed> dan ${bonusArmor} <c:armor>bonus Armor</c:armor>.`,
        kr: `프림의 공이 프림에게 부착되어 있는 동안 ${bonusMovementSpeed}의 <c:movespeed>추가 이동 속도</c:movespeed>와 ${bonusArmor}의 <c:armor>추가 방어력</c:armor>을 얻습니다.`,
      }
    }

    case Shared.HEROES.SEER: {
      const curseDelay = getDuration(
        SeerAbilityData.MALEVOLENT_CURSE_DELAY -
          (hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
            ? SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_DELAY_REDUCTION
            : 0)
      )
      const curseDamage = getDamage(
        SeerAbilityData.MALEVOLENT_CURSE_DAMAGE_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        SeerAbilityData.MALEVOLENT_CURSE_BASE_DAMAGE
      )

      return {
        en: `Basic Attacks against enemy heroes apply a curse that explodes after ${curseDelay}, dealing ${curseDamage}. A cursed target cannot be cursed again until the current curse explodes.`,
        ru: `Базовые атаки по вражеским героям накладывают проклятье, которое взрывается через ${curseDelay}, нанося ${curseDamage}. Проклятую цель нельзя проклясть повторно, пока текущее проклятье не взорвётся.`,
        cz: `Základní útoky na nepřátelské hrdiny aplikují prokletí, které po ${curseDelay} vybuchne a způsobí ${curseDamage}. Prokletý cíl nelze proklít znovu, dokud stávající prokletí nevybuchne.`,
        zh: `对敌方英雄的基本攻击会施加诅咒，在 ${curseDelay}后爆炸，造成 ${curseDamage}。被诅咒的目标在当前诅咒爆炸前无法再次被诅咒。`,
        fr: `Les attaques de base contre les héros ennemis appliquent une malédiction qui explose après ${curseDelay}, infligeant ${curseDamage}. Une cible maudite ne peut pas être maudite à nouveau tant que la malédiction actuelle n'a pas explosé.`,
        br: `Ataques básicos contra heróis inimigos aplicam uma maldição que explode após ${curseDelay}, causando ${curseDamage}. Um alvo amaldiçoado não pode ser amaldiçoado novamente até que a maldição atual exploda.`,
        vi: `Đòn đánh thường lên tướng địch áp dụng lời nguyền, phát nổ sau ${curseDelay} và gây ${curseDamage}. Mục tiêu đã bị nguyền không thể bị nguyền lại cho đến khi lời nguyền hiện tại phát nổ.`,
        id: `Serangan Dasar terhadap hero musuh menerapkan kutukan yang meledak setelah ${curseDelay}, memberikan ${curseDamage}. Target yang terkutuk tidak dapat dikutuk lagi sampai kutukan saat ini meledak.`,
        kr: `적 영웅에게 기본 공격을 명중시키면 저주를 걸며, ${curseDelay} 후 폭발하여 ${curseDamage}의 피해를 입힙니다. 저주에 걸린 대상은 현재 저주가 폭발하기 전까지 다시 저주에 걸리지 않습니다.`,
      }
    }

    case Shared.HEROES.KARICK: {
      const stackDuration = getDuration(KarickAbilityData.VERDANT_MARK_STACK_DURATION)
      const maxStacks = KarickAbilityData.VERDANT_MARK_MAX_STACKS
      const tenacityPerStack = fixed(KarickAbilityData.VERDANT_MARK_TENACITY_REDUCTION_PER_STACK * 100, 0)
      const tenacityMax = fixed(KarickAbilityData.VERDANT_MARK_TENACITY_REDUCTION_PER_STACK * 100 * maxStacks, 0)
      const groveMarkStacks = KarickAbilityData.GROVE_MARK_STACKS

      return {
        en: `Hero hits apply a stack of Verdant Mark for ${stackDuration}, up to ${maxStacks} stacks. Each stack reduces the target's Tenacity by ${tenacityPerStack}% (up to ${tenacityMax}%). Negative Tenacity increases Crowd Control duration instead. Bramble Snap and Wrath of the Grove also apply ${groveMarkStacks} stack before they hit.`,
        ru: `Попадания по героям накладывают заряд Verdant Mark на ${stackDuration}, до ${maxStacks} зарядов. Каждый заряд снижает Упорство цели на ${tenacityPerStack}% (до ${tenacityMax}%). Отрицательное Упорство, наоборот, увеличивает длительность эффектов контроля. Bramble Snap и Wrath of the Grove также накладывают ${groveMarkStacks} заряд перед попаданием.`,
        cz: `Zásahy hrdinů aplikují stack Verdant Mark na ${stackDuration}, až do ${maxStacks} stacků. Každý stack snižuje houževnatost cíle o ${tenacityPerStack}% (maximálně ${tenacityMax}%). Záporná houževnatost naopak zvyšuje dobu trvání efektů kontroly. Bramble Snap a Wrath of the Grove také aplikují ${groveMarkStacks} stack před zásahem.`,
        zh: `命中英雄会施加一层 Verdant Mark，持续 ${stackDuration}，最多叠加 ${maxStacks} 层。每层使目标韌性降低 ${tenacityPerStack}%（最多降低 ${tenacityMax}%）。负韌性反而会增加控制效果的持续时间。Bramble Snap 与 Wrath of the Grove 也会在命中前施加 ${groveMarkStacks} 层。`,
        fr: `Les coups portés aux héros appliquent un cumul de Verdant Mark pendant ${stackDuration}, jusqu'à ${maxStacks} cumuls. Chaque cumul réduit la ténacité de la cible de ${tenacityPerStack}% (jusqu'à ${tenacityMax}%). Une ténacité négative augmente au contraire la durée des effets de contrôle. Bramble Snap et Wrath of the Grove appliquent aussi ${groveMarkStacks} cumul avant de toucher.`,
        br: `Acertos em heróis aplicam um acúmulo de Verdant Mark por ${stackDuration}, até ${maxStacks} acúmulos. Cada acúmulo reduz a Tenacidade do alvo em ${tenacityPerStack}% (até ${tenacityMax}%). Tenacidade negativa aumenta a duração dos efeitos de controle. Bramble Snap e Wrath of the Grove também aplicam ${groveMarkStacks} acúmulo antes de acertar.`,
        vi: `Đòn đánh trúng tướng áp dụng 1 cộng dồn Verdant Mark trong ${stackDuration}, tối đa ${maxStacks} cộng dồn. Mỗi cộng dồn giảm ${tenacityPerStack}% Kháng Khống Chế của mục tiêu (tối đa ${tenacityMax}%). Kháng Khống Chế âm sẽ làm tăng thời gian khống chế. Bramble Snap và Wrath of the Grove cũng áp dụng ${groveMarkStacks} cộng dồn trước khi đánh trúng.`,
        id: `Serangan yang mengenai hero menerapkan 1 stack Verdant Mark selama ${stackDuration}, hingga ${maxStacks} stack. Setiap stack mengurangi Ketekunan target sebesar ${tenacityPerStack}% (hingga ${tenacityMax}%). Ketekunan negatif justru akan meningkatkan durasi crowd control. Bramble Snap dan Wrath of the Grove juga menerapkan ${groveMarkStacks} stack sebelum mengenai.`,
        kr: `영웅을 명중시키면 ${stackDuration} 동안 지속되는 초록의 인장 중첩을 적용하며, 최대 ${maxStacks}중첩까지 쌓입니다. 중첩마다 대상의 강인함을 ${tenacityPerStack}%만큼 감소시킵니다(최대 ${tenacityMax}%). 강인함이 음수가 되면 오히려 군중 제어 지속시간이 증가합니다. 가시덩굴 올가미와 숲의 분노도 명중 전에 ${groveMarkStacks}중첩을 적용합니다.`,
      }
    }

    case Shared.HEROES.FLIN: {
      const rangePerLevel = getBuffValue(FlinAbilityData.ATTACK_RANGE_PER_LEVEL, 'Attack Range Buff')
      const currentRange = getBuffValue(FlinAbilityData.ATTACK_RANGE_PER_LEVEL * level, 'Attack Range Buff')

      return {
        en: `Flin gains ${rangePerLevel} Attack Range per level, extending his Basic Attack, Precise Shot and Backstep arrows. Current bonus: ${currentRange} range.`,
        ru: `Флин получает ${rangePerLevel} к дальности атаки за каждый уровень, увеличивая дальность базовой атаки, Меткого выстрела и стрел Отскока. Текущий бонус: ${currentRange} дальности.`,
        cz: `Flin získá ${rangePerLevel} dosahu útoku za každou úroveň, což prodlouží jeho základní útok, Přesnou střelu i šípy Úkroku vzad. Aktuální bonus: ${currentRange} dosahu.`,
        zh: `弗林每升一級便獲得 ${rangePerLevel} 攻擊射程，延伸基本攻擊、精準射擊與躍退箭矢的距離。目前加成：${currentRange} 射程。`,
        fr: `Flin gagne ${rangePerLevel} de portée d'attaque par niveau, ce qui allonge son attaque de base, Tir de précision et les flèches de Pas en arrière. Bonus actuel : ${currentRange} de portée.`,
        br: `Flin ganha ${rangePerLevel} de Alcance de Ataque por nível, estendendo seu ataque básico, Tiro Preciso e as flechas do Passo Atrás. Bônus atual: ${currentRange} de alcance.`,
        vi: `Flin nhận ${rangePerLevel} Tầm đánh mỗi cấp, kéo dài đòn đánh thường, Phát Bắn Chính Xác và mũi tên Bước Lùi. Hiện tại: ${currentRange} tầm đánh.`,
        id: `Flin memperoleh ${rangePerLevel} Jangkauan Serangan per level, memperpanjang Serangan Dasar, Precise Shot, dan panah Langkah Mundur. Bonus saat ini: ${currentRange} jangkauan.`,
        kr: `플린은 레벨마다 공격 사거리를 ${rangePerLevel} 얻어 기본 공격과 정밀 사격, 백스텝 화살의 사거리가 늘어납니다. 현재 보너스: 사거리 ${currentRange}.`,
      }
    }

    case Shared.HEROES.PUPPETEER: {
      const attackSpeedPerStep = getBuffValue(`${fixed(PuppeteerAbilityData.TENSION_ATTACK_SPEED_PER_STACK * 100, 0)}%`, 'Attack Speed Buff')
      const distanceStep = PuppeteerAbilityData.TENSION_DISTANCE_STEP
      const maxAttackSpeed = getBuffValue(
        `${fixed(PuppeteerAbilityData.TENSION_ATTACK_SPEED_PER_STACK * PuppeteerAbilityData.TENSION_MAX_STACKS * 100, 0)}%`
      , 'Attack Speed Buff')

      return {
        en: `The Puppet gains ${attackSpeedPerStep} <c:attackspeed>Attack Speed</c:attackspeed> for every ${distanceStep} px between it and Puppeteer while fixated on a target, up to ${maxAttackSpeed}.`,
        ru: `Пока Кукла фиксирована на цели, она получает ${attackSpeedPerStep} <c:attackspeed>скорости атаки</c:attackspeed> за каждые ${distanceStep} px расстояния между ней и Кукловодом, до ${maxAttackSpeed}.`,
        cz: `Zatímco je Loutka fixována na cíl, získává ${attackSpeedPerStep} <c:attackspeed>rychlosti útoku</c:attackspeed> za každých ${distanceStep} px vzdálenosti mezi ní a Loutkářem, až do ${maxAttackSpeed}.`,
        zh: `木偶固定於目標時，每與木偶師相距 ${distanceStep} px 即獲得 ${attackSpeedPerStep} <c:attackspeed>攻擊速度</c:attackspeed>，最多 ${maxAttackSpeed}。`,
        fr: `Tant qu'elle est fixée sur une cible, la Marionnette gagne ${attackSpeedPerStep} de <c:attackspeed>vitesse d'attaque</c:attackspeed> tous les ${distanceStep} px de distance entre elle et le Marionnettiste, jusqu'à ${maxAttackSpeed}.`,
        br: `Enquanto fixada em um alvo, a Marionete ganha ${attackSpeedPerStep} de <c:attackspeed>Velocidade de Ataque</c:attackspeed> a cada ${distanceStep} px de distância entre ela e o Marionetista, até ${maxAttackSpeed}.`,
        vi: `Khi đang cố định vào mục tiêu, Con Rối nhận ${attackSpeedPerStep} <c:attackspeed>Tốc độ Đánh</c:attackspeed> cho mỗi ${distanceStep} px khoảng cách giữa nó và Puppeteer, tối đa ${maxAttackSpeed}.`,
        id: `Saat terpaku pada target, Boneka mendapatkan ${attackSpeedPerStep} <c:attackspeed>Kecepatan Serang</c:attackspeed> untuk setiap ${distanceStep} px jarak antara Boneka dan Puppeteer, hingga ${maxAttackSpeed}.`,
        kr: `인형이 대상에게 고정된 동안 인형술사와의 거리 ${distanceStep} px마다 ${attackSpeedPerStep}의 <c:attackspeed>공격 속도</c:attackspeed>를 얻으며, 최대 ${maxAttackSpeed}까지 증가합니다.`,
      }
    }

    case Shared.HEROES.PATROKLOS: {
      const maxStacks = PatroklosAbilityData.HEAVENS_FALL_MAX_STACKS
      const refreshWindow = getDuration(PatroklosAbilityData.HEAVENS_FALL_REFRESH_WINDOW)

      return {
        en: `Hits apply a stack of Heavens Fall to the enemy hero, up to ${maxStacks} stacks. If not refreshed within ${refreshWindow}, all stacks are removed.`,
        ru: `Попадания накладывают заряд Падения Небес на вражеского героя, до ${maxStacks} зарядов. Если не обновить в течение ${refreshWindow}, все заряды снимаются.`,
        cz: `Zásahy aplikují stack Pádu nebes na nepřátelského hrdinu, až do ${maxStacks} stacků. Pokud není obnoven do ${refreshWindow}, všechny stacky zmizí.`,
        zh: `命中會對敵方英雄施加一層天罰，最多疊加 ${maxStacks} 層。若在 ${refreshWindow} 內未被刷新，所有層數將被移除。`,
        fr: `Les coups appliquent un cumul de Chute des Cieux sur le héros ennemi, jusqu'à ${maxStacks} cumuls. Si non renouvelé sous ${refreshWindow}, tous les cumuls sont retirés.`,
        br: `Acertos aplicam um acúmulo de Queda dos Céus no herói inimigo, até ${maxStacks} acúmulos. Se não for renovado em ${refreshWindow}, todos os acúmulos são removidos.`,
        vi: `Đòn đánh trúng áp dụng 1 cộng dồn Thiên Phạt lên tướng địch, tối đa ${maxStacks} cộng dồn. Nếu không được làm mới trong ${refreshWindow}, toàn bộ cộng dồn sẽ bị xóa.`,
        id: `Serangan yang mengenai menerapkan 1 stack Heavens Fall pada hero musuh, hingga ${maxStacks} stack. Jika tidak diperbarui dalam ${refreshWindow}, semua stack akan hilang.`,
        kr: `명중 시 적 영웅에게 천벌 중첩을 적용하며, 최대 ${maxStacks}중첩까지 쌓입니다. ${refreshWindow} 이내에 갱신되지 않으면 모든 중첩이 사라집니다.`,
      }
    }

    default:
      return PLACEHOLDER_DESCRIPTION
  }
}

export const getPassiveLocale = (hero: Shared.HEROES, unitStats: PassiveDescriptionInput): PassiveLocale => ({
  name: resolve(_getPassiveNameLang(hero)),
  description: resolve(_getPassiveDescriptionLang(hero, unitStats)),
})

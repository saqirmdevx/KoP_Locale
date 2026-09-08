/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import {
  Shared,
  BelleAbilityData,
  ThomasAbilityData,
  ICeatAbilityData,
  KumihuAbilityData,
  SparrowAbilityData,
  VeilAbilityData,
  FlinAbilityData,
  KiraAbilityData,
  HazelAbilityData,
  ArelAbilityData,
  AlvarAbilityData,
  FoxyAbilityData,
  MagdaleneAbilityData,
  PrimAbilityData,
  SeerAbilityData,
  KarickAbilityData,
  PuppeteerAbilityData,
  PatroklosAbilityData,
  //@ts-ignore
} from 'shared'
import { toSecRaw, toSec, fixed } from './misc'
// @ts-ignore
import { colorizeTooltipKeywords } from '../abilityLangData'

interface ITalentProps {
  title: { [key in string]: string }
  description?: { [key in string]: string }
}

interface ILocaleHeroTalent {
  tier1_left: ITalentProps
  tier1_right: ITalentProps
  tier2_left: ITalentProps
  tier2_right: ITalentProps
}

const colorizeTalentKeywordsDeep = (value: ILocaleHeroTalent): ILocaleHeroTalent => {
  const colorizeMap = (entries: { [key in string]: string }) => {
    const coloredEntries: { [key in string]: string } = {}

    for (const key in entries) {
      coloredEntries[key] = colorizeTooltipKeywords(entries[key])
    }

    return coloredEntries
  }

  return {
    tier1_left: {
      title: value.tier1_left.title,
      description: value.tier1_left.description ? colorizeMap(value.tier1_left.description) : undefined,
    },
    tier1_right: {
      title: value.tier1_right.title,
      description: value.tier1_right.description ? colorizeMap(value.tier1_right.description) : undefined,
    },
    tier2_left: {
      title: value.tier2_left.title,
      description: value.tier2_left.description ? colorizeMap(value.tier2_left.description) : undefined,
    },
    tier2_right: {
      title: value.tier2_right.title,
      description: value.tier2_right.description ? colorizeMap(value.tier2_right.description) : undefined,
    },
  }
}

const getHeroTalents = (hero: Shared.HEROES): ILocaleHeroTalent => {
  switch (hero) {
    case Shared.HEROES.KUMIHU: {
      const blindDuration = toSec(KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION)
      const magicalOrbCd = '-' + toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)
      const charmCooldown = '-' + toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)
      return {
        tier1_left: {
          title: {
            en: `Magical Orb Cooldown  ${magicalOrbCd}s`,
            ru: `${magicalOrbCd} сек. перезарядки Волшебной сферы`,
            cz: `Magická koule obnovení ${magicalOrbCd}s`,
            zh: `魔幻寶珠冷却 ${magicalOrbCd}秒`,
            fr: `Orbe magique recharge ${magicalOrbCd}s`,
            br: `Orbe mágico recarga ${magicalOrbCd}s`,
            vi: `Hồi chiêu Quả Cầu Phép Thuật ${magicalOrbCd}s`,
            id: `Cooldown bola ajaib ${magicalOrbCd}s`,
            kr: `마법 구슬 재사용 대기시간 ${magicalOrbCd}초`,
          },
        },
        tier1_right: {
          title: {
            en: `Charm cooldown ${charmCooldown}s`,
            ru: `${charmCooldown} сек. перезарядки Мистического рывка`,
            cz: `Očarování obnovení ${charmCooldown}s`,
            zh: `魅惑冷却 ${charmCooldown}秒`,
            fr: `Charme recharge ${charmCooldown}s`,
            br: `Encanto recarga ${charmCooldown}s`,
            vi: `Hồi chiêu Quyến Rũ ${charmCooldown}s`,
            id: `Cooldown Pesona ${charmCooldown}s`,
            kr: `매혹 재사용 대기시간 ${charmCooldown}초`,
          },
        },
        tier2_left: {
          title: {
            en: `Enhanced attack pierces units`,
            ru: 'Усиленная атака проходит сквозь цели',
            cz: 'Zlepšený útok prostupuje jednotkami',
            zh: '強化後攻擊貫穿單位',
            fr: `L'attaque améliorée traverse les unités`,
            br: `Ataque aprimorado atravessa unidades`,
            vi: `Quyến Rũ xuyên qua đơn vị`,
            id: `Serangan ditingkatkan menembus unit`,
            kr: `강화 공격 유닛 관통`,
          },
        },
        tier2_right: {
          title: {
            en: `Magical orb blind`,
            ru: 'Волшебная сфера ослепляет',
            cz: 'Magická koule oslepí',
            zh: '魔幻寶珠附加盲眼狀態',
            fr: `Orbe magique aveugle`,
            br: `Orbe mágico cega`,
            vi: `Cầu Phép Mù`,
            id: `Bola ajaib buta`,
            kr: `마법 구슬 실명`,
          },
          description: {
            en: `Magical orb blinds enemy heroes it passes through. Blinded heroes have reduced <c:vision>vision</c:vision> and do not share <c:vision>vision</c:vision> with their team for <c:control>${blindDuration}</c:control>`,
            ru: `Волшебная сфера ослепляет вражеских героев, через которых проходит. Ослеплённые герои имеют уменьшенный <c:vision>обзор</c:vision> и не передают <c:vision>обзор</c:vision> своей команде в течение <c:control>${blindDuration}</c:control>`,
            cz: `Magická koule oslepí nepřátelské hrdiny, kterými projde. Oslepení hrdinové mají snížené <c:vision>vidění</c:vision> a nesdílí <c:vision>vidění</c:vision> se svým týmem po dobu <c:control>${blindDuration}</c:control>`,
            zh: `魔法寶珠會致盲其穿過的敵方英雄。被致盲的英雄將降低<c:vision>視野</c:vision>，並且在<c:control>${blindDuration}</c:control>內無法與隊友共享<c:vision>視野</c:vision>`,
            fr: `L'orbe magique aveugle les héros ennemis qu'il traverse. Les héros aveuglés ont une <c:vision>vision</c:vision> réduite et ne partagent plus leur <c:vision>vision</c:vision> avec leur équipe pendant <c:control>${blindDuration}</c:control>`,
            br: `O orbe mágico cega os heróis inimigos pelos quais passa. Heróis cegados têm <c:vision>visão</c:vision> reduzida e não compartilham <c:vision>visão</c:vision> com sua equipe por <c:control>${blindDuration}</c:control>`,
            vi: `Quả Cầu Phép Thuật sẽ làm mù những tướng địch mà nó bay xuyên qua. Tướng bị làm mù sẽ bị <c:vision>giảm tầm nhìn</c:vision> và không chia sẻ <c:vision>tầm nhìn</c:vision> với đồng đội trong <c:control>${blindDuration}</c:control>`,
            id: `Bola ajaib membutakan hero musuh yang dilewatinya. Hero yang dibutakan memiliki <c:vision>penglihatan</c:vision> berkurang dan tidak membagikan <c:vision>vision</c:vision> kepada timnya selama <c:control>${blindDuration}</c:control>`,
            kr: `마법 구슬이 통과하는 적 영웅을 실명시킵니다. 실명된 영웅은 <c:vision>시야</c:vision>가 감소하며 <c:control>${blindDuration}</c:control> 동안 팀과 <c:vision>시야</c:vision>를 공유하지 않습니다.`,
          },
        },
      }
    }

    case Shared.HEROES.SPARROW: {
      const groundSlamDamage = fixed(SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100, 1)
      const dashCooldown = '-' + toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)
      return {
        tier1_left: {
          title: {
            en: `Demonic Wrath Damage +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            ru: `+${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE} к урону от Демонического гнева`,
            cz: `Démonický hněv poškození +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            zh: `惡魔之怒傷害 +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            fr: `Dégâts de la colère démoniaque +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            br: `Dano da Ira Demoníaca +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            vi: `Sức mạnh của Quỷ Nộ +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            id: `Kerusakan Kemarahan Iblis +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            kr: `악마의 분노 피해 +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
          },
        },
        tier1_right: {
          title: {
            en: `Corrupted Wind Range +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            ru: `+${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE} к дальности Проклятого ветра`,
            cz: `Zkažený vítr dosah +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            zh: `腐壞之風射程 +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}像素`,
            fr: `Portée du vent corrompu +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            br: `Alcance do Vento Corrompido +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            vi: `Tầm của Tà Phong +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            id: `Jarak Angin Tercemar +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            kr: `타락한 바람 사거리 +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
          },
        },
        tier2_left: {
          title: {
            en: `Demonic Wrath Pure / +${groundSlamDamage}%`,
            ru: `Демонический гнев чистый / +${groundSlamDamage}%`,
            cz: `Démonický hněv čistý / +${groundSlamDamage}%`,
            zh: `惡魔之怒純傷害 / +${groundSlamDamage}%`,
            fr: `Colère démoniaque pure / +${groundSlamDamage}%`,
            br: `Ira Demoníaca Pura / +${groundSlamDamage}%`,
            vi: `Quỷ Nộ xuyên giáp / +${groundSlamDamage}%`,
            id: `Kemarahan Iblis Murni / +${groundSlamDamage}%`,
            kr: `악마의 분노 고정 피해 / +${groundSlamDamage}%`,
          },
          description: {
            en: `Demonic Wrath deals <c:pure>pure damage</c:pure>, bypassing both Armor and Magic Resistance, and deals <c:bonus>${groundSlamDamage}% bonus damage</c:bonus>.`,
            ru: `Демонический гнев будет наносить <c:pure>чистый урон</c:pure>, а процентный урон от недостающего здоровья цели <c:bonus>увеличится на ${groundSlamDamage}%</c:bonus>`,
            cz: `Démonický hněv nyní způsobuje <c:pure>čisté poškození</c:pure>, které obchází jak obranu, tak magický odpor, a způsobuje <c:bonus>${groundSlamDamage}% bonusového poškození</c:bonus>.`,
            zh: `惡魔之怒造成<c:pure>純傷害</c:pure>，無視裝甲值和魔法抗性，造成 <c:bonus>${groundSlamDamage}% 額外傷害</c:bonus>。`,
            fr: `La colère démoniaque inflige des <c:pure>dégâts purs</c:pure>, contournant à la fois l'armure et la résistance magique, et inflige <c:bonus>${groundSlamDamage}% de dégâts bonus</c:bonus>.`,
            br: `Ira Demoníaca causa <c:pure>dano puro</c:pure>, ignorando tanto a Armadura quanto a Resistência Mágica, e causa <c:bonus>${groundSlamDamage}% de dano bônus</c:bonus>.`,
            vi: `Qủy Nộ gây <c:pure>sát thương thuần</c:pure>, bỏ qua giáp và kháng phép, và gây thêm <c:bonus>${groundSlamDamage}% sát thương</c:bonus>.`,
            id: `Kemarahan Iblis memberikan <c:pure>kerusakan murni</c:pure>, melewati kedua Armor dan Magic Resistance, dan memberikan <c:bonus>${groundSlamDamage}% kerusakan bonus</c:bonus>.`,
            kr: `악마의 분노가 방어력과 마법 저항력을 모두 무시하는 <c:pure>고정 피해</c:pure>를 입히며, <c:bonus>${groundSlamDamage}%의 추가 피해</c:bonus>를 입힙니다.`,
          },
        },
        tier2_right: {
          title: {
            en: `Corrupted Wind Cooldown ${dashCooldown}`,
            ru: `${dashCooldown} сек. перезарядки Проклятого ветра`,
            cz: `Zkažený vítr obnovení ${dashCooldown}`,
            zh: `腐壞之風冷卻 ${dashCooldown}`,
            fr: `Recharge du vent corrompu ${dashCooldown}`,
            br: `Recarga do Vento Corrompido ${dashCooldown}`,
            vi: `Hồi chiêu Tà Phong ${dashCooldown}`,
            id: `Cooldown Angin Tercemar ${dashCooldown}`,
            kr: `타락한 바람 재사용 대기시간 ${dashCooldown}`,
          },
        },
      }
    }

    case Shared.HEROES.ICEAT: {
      const attackSpeedSlow = fixed(ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100, 1)
      const movementSpeedSlow = fixed(ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED * 100, 1)
      const icicleFreezeDuration = toSecRaw(ICeatAbilityData.TALENT_T2_LEFT_ICICLE_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: 'Basic Attack Slow',
            ru: 'Атаки становятся замедляющими',
            cz: 'Základní útok zpomalí',
            zh: '基礎攻擊減速',
            fr: 'Ralentissement des attaques de base',
            br: 'Ataque Básico Lento',
            vi: 'Cầu tuyết băng giá',
            id: 'Perlambatan Serangan Dasar',
            kr: `기본 공격 둔화`,
          },
          description: {
            en: `Your Basic Attacks <c:slow>reduce enemy Movement Speed by ${movementSpeedSlow}%</c:slow> and <c:slow>enemy Attack Speed by ${attackSpeedSlow}%</c:slow>`,
            ru: `Ваши атаки <c:slow>снижают скорость передвижения целей на ${movementSpeedSlow}%</c:slow> и <c:slow>их скорость атаки на ${attackSpeedSlow}%</c:slow>`,
            cz: `Vaše základní útoky <c:slow>sníží rychlost pohybu nepřátel o ${movementSpeedSlow}%</c:slow> a <c:slow>rychlost útoku o ${attackSpeedSlow}%</c:slow>`,
            zh: `你的基礎攻擊<c:slow>降低敵人移動速度 ${movementSpeedSlow}%</c:slow>並<c:slow>降低敵人攻擊速度 ${attackSpeedSlow}%</c:slow>`,
            fr: `Vos attaques de base <c:slow>réduisent la vitesse de déplacement des ennemis de ${movementSpeedSlow}%</c:slow> et <c:slow>leur vitesse d'attaque de ${attackSpeedSlow}%</c:slow>`,
            br: `Seus ataques básicos <c:slow>reduzem a Velocidade de Movimento do inimigo em ${movementSpeedSlow}%</c:slow> e <c:slow>a Velocidade de Ataque em ${attackSpeedSlow}%</c:slow>`,
            vi: `Các đòn đánh thường của bạn <c:slow>giảm ${movementSpeedSlow}% Tốc độ Di chuyển</c:slow> và <c:slow>giảm ${attackSpeedSlow}% Tốc độ Tấn công</c:slow> của kẻ địch`,
            id: `Serangan Dasar Anda <c:slow>mengurangi Kecepatan Gerakan musuh sebesar ${movementSpeedSlow}%</c:slow> dan <c:slow>Kecepatan Serangan sebesar ${attackSpeedSlow}%</c:slow>`,
            kr: `당신의 기본 공격은 <c:slow>적의 이동 속도를 ${movementSpeedSlow}%</c:slow>, <c:slow>공격 속도를 ${attackSpeedSlow}%</c:slow>만큼 감소시킵니다`,
          },
        },
        tier1_right: {
          title: {
            en: `Cold Embrace Movement Speed +${fixed(ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100, 1)}%`,
            ru: `+${fixed(
              ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100,
              1
            )}% к скорости передвижения во время действия Объятий холода`,
            cz: `Zimní objetí rychlost pohybu +${fixed(ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100, 1)}%`,
            zh: `冰冷懷抱移動速度 +${fixed(ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100, 1)}%`,
            fr: `Vitesse de déplacement de l'étreinte froide +${fixed(
              ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100,
              1
            )}%`,
            br: `Velocidade de Movimento do Abraço Frio +${fixed(
              ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100,
              1
            )}%`,
            vi: `Tốc độ di chuyển của Hàn Ủng +${fixed(ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100, 1)}%`,
            id: `Kecepatan Gerakan Pelukan Dingin +${fixed(
              ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100,
              1
            )}%`,
            kr: `차가운 포옹 이동 속도 +${fixed(ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS * 100, 1)}%`,
          },
        },
        tier2_left: {
          title: {
            en: `Icicle Bolt freeze +${icicleFreezeDuration}s`,
            ru: `+${icicleFreezeDuration} сек. к обездвиживанию Сосулек`,
            cz: `Icicle Bolt zmrazení +${icicleFreezeDuration}s`,
            zh: `寒冰飛箭凍結 +${icicleFreezeDuration}秒`,
            fr: `Gel de glace +${icicleFreezeDuration}s`,
            br: `Gelo do Pico +${icicleFreezeDuration}s`,
            vi: `Mảnh Băng Tiễn +${icicleFreezeDuration}s`,
            id: `Icicle Bolt membekukan +${icicleFreezeDuration}s`,
            kr: `고드름 화살 빙결 +${icicleFreezeDuration}초`,
          },
        },
        tier2_right: {
          title: {
            en: `Cold Embrace Duration +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            ru: `+${toSecRaw(
              ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION
            )} сек. к длительности Объятий холода`,
            cz: `Zimní objetí trvání +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            zh: `冰冷懷抱持續時間 +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            fr: `Durée de l'étreinte froide +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            br: `Duração do Abraço Frio +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            vi: `Thời gian Hàn Ủng +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            id: `Durasi Pelukan Dingin +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            kr: `차가운 포옹 지속시간 +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}초`,
          },
        },
      }
    }

    case Shared.HEROES.VEIL: {
      const astralStepCooldown = toSec(VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN)
      const astralstepSlow = toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)
      const astralBladesCooldown = '-' + toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)
      return {
        tier1_left: {
          title: {
            en: `Astral Step Slow Duration +${astralstepSlow}s`,
            ru: `+${astralstepSlow} сек. к замедлению от Астрального шага`,
            cz: `Astral Step zpomalení trvání +${astralstepSlow}s`,
            zh: `星光飛躍減速持續時間 +${astralstepSlow}秒`,
            fr: `Durée du ralentissement de l'Astral Step +${astralstepSlow}s`,
            br: `Duração da desaceleração do Passo Astral +${astralstepSlow}s`,
            vi: `Thời gian làm chậm của Tinh Bộ +${astralstepSlow}s`,
            id: `Durasi Pelambatan Langkah Astral +${astralstepSlow}s`,
            kr: `성계의 발걸음 둔화 지속시간 +${astralstepSlow}초`,
          },
        },
        tier1_right: {
          title: {
            en: `Astral Blades Cooldown ${astralBladesCooldown}s`,
            ru: `${astralBladesCooldown} сек. перезарядки Астральных клинков`,
            cz: `Astral Blades obnovení ${astralBladesCooldown}s`,
            zh: `星光刀刃冷卻 ${astralBladesCooldown}秒`,
            fr: `Recharge des lames astrales ${astralBladesCooldown}s`,
            br: `Recarga das Lâminas Astrais ${astralBladesCooldown}s`,
            vi: `Hồi chiêu Tinh Kiếm ${astralBladesCooldown}s`,
            id: `Cooldown Astral Blades ${astralBladesCooldown}s`,
            kr: `성계의 칼날 재사용 대기시간 ${astralBladesCooldown}초`,
          },
        },
        tier2_left: {
          title: {
            en: `Enhanced Damage +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            ru: `+${fixed(
              (VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100,
              1
            )}% к урону от усиленных атак или Астрального шага`,
            cz: `Zlepšené poškození +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            zh: `強化後傷害 +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            fr: `Dégâts améliorés +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            br: `Dano Aprimorado +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            vi: `Sức mạnh Thức Tỉnh +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            id: `Kerusakan Ditingkatkan +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            kr: `강화된 피해 +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
          },
        },
        tier2_right: {
          title: {
            en: 'Fused Astral Step',
            ru: 'Астральное мастерство',
            cz: 'Sloučený Astrální krok',
            zh: '融合星光飛躍',
            fr: 'Pas astral fusionné',
            br: 'Passo Astral Fundido',
            vi: 'Tinh Bộ Hợp Nhất',
            id: 'Langkah Astral Digabungkan',
            kr: `융합된 성계의 발걸음`,
          },
          description: {
            en:
              `Reduces the cooldown of Astral Step by ${astralStepCooldown} \n` +
              'Enhanced Astral Step resets its cooldown even if no enemy is hit.',
            ru:
              `Перезарядка Астрального шага снижается на ${astralStepCooldown} \n` +
              'Больше нет необходимости попадать по врагу усиленным Астральным шагом, чтобы сбросить его перезарядку',
            cz:
              `Sníží obnovení Astrálního kroku o ${astralStepCooldown} \n` +
              'Zlepšený Astrální krok resetuje své obnovení i když nezasáhne žádného nepřítele.',
            zh: `減少星光飛躍冷卻時間 ${astralStepCooldown} \n` + '即使沒擊中敵人也會重置強化後星光飛躍的冷卻時間。',
            fr:
              `Réduit le temps de recharge du Pas astral de ${astralStepCooldown} \n` +
              "Le Pas astral amélioré réinitialise son temps de recharge même si aucun ennemi n'est touché.",
            br:
              `Reduz o tempo de recarga do Passo Astral em ${astralStepCooldown} \n` +
              'O Passo Astral aprimorado reseta seu tempo de recarga mesmo que nenhum inimigo seja atingido.',
            vi:
              `Giảm thời gian hồi chiêu của Tinh Bộ bởi ${astralStepCooldown} \n` +
              'Tinh Bộ hợp nhất sẽ đặt lại thời gian hồi chiêu ngay cả khi không đánh trúng kẻ địch nào.',
            id:
              `Mengurangi cooldown Langkah Astral sebesar ${astralStepCooldown} \n` +
              'Langkah Astral yang Ditingkatkan mengatur ulang cooldown-nya bahkan jika tidak ada musuh yang terkena.',
            kr:
              `성계의 발걸음의 재사용 대기시간을 ${astralStepCooldown} 감소시킵니다. 
` + `강화된 성계의 발걸음은 적을 명중시키지 못해도 재사용 대기시간이 초기화됩니다.`,
          },
        },
      }
    }

    case Shared.HEROES.BELLE: {
      const floralAmbushHeal = fixed(BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100)
      const pricklyVineStunBonus = toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)
      const pricklyAttachDuration = toSecRaw(BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION)
      const floralAmbushSlow = '-' + fixed(BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW * 100, 1)
      return {
        tier1_left: {
          title: {
            en: `Prickly Vine Duration +${pricklyVineStunBonus}s`,
            ru: `+${pricklyVineStunBonus} сек. оглушения от Колючей лозы`,
            cz: `Trnitý vinný trn trvání +${pricklyVineStunBonus}s`,
            zh: `荊棘藤蔓持續時間 +${pricklyVineStunBonus}秒`,
            fr: `Durée de la vigne épineuse +${pricklyVineStunBonus}s`,
            br: `Duração da Videira Espinhosa +${pricklyVineStunBonus}s`,
            vi: `Thời lượng choáng của Cức Đằng +${pricklyVineStunBonus}s`,
            id: `Durasi Ranting Berduri +${pricklyVineStunBonus}s`,
            kr: `가시 덩굴 지속시간 +${pricklyVineStunBonus}초`,
          },
        },
        tier1_right: {
          title: {
            en: `Floral Ambush ${floralAmbushSlow}% Movement Speed`,
            ru: `Цветочная ловушка снижает скорость передвижения врагов на ${floralAmbushSlow}%`,
            cz: `Květinový útok ${floralAmbushSlow}% rychlost pohybu`,
            zh: `鮮花伏擊 ${floralAmbushSlow}% 移動速度`,
            fr: `Embûche florale ${floralAmbushSlow}% Vitesse de déplacement`,
            br: `Emboscada Floral ${floralAmbushSlow}% Velocidade de Movimento`,
            vi: `Hoa Phục Kích ${floralAmbushSlow}% Tốc độ Di chuyển`,
            id: `Emboscada Floral ${floralAmbushSlow}% Kecepatan Gerakan`,
            kr: `꽃의 매복 ${floralAmbushSlow}% 이동 속도`,
          },
        },
        tier2_left: {
          title: {
            en: 'Floral Rejuvenation',
            ru: 'Цветочное оздоровление',
            cz: 'Květinová obnova',
            zh: '療育鮮花',
            fr: 'Rajeunissement floral',
            br: 'Rejuvenescimento Floral',
            vi: 'Thiên Nhiên Tái Sinh',
            id: 'Pemulihan Floral',
            kr: `꽃의 회복`,
          },
          description: {
            en: `Explosion of Floral Ambush <c:heal>heals all nearby allies for ${floralAmbushHeal}% of the damage</c:heal>.`,
            ru: `Взрыв Цветочной ловушки <c:heal>лечит всех ближайших союзников на ${floralAmbushHeal}% от нанесённого урона</c:heal>`,
            cz: `Exploze Květinového útoku <c:heal>léčí všechny nedaleké spojence za ${floralAmbushHeal}% poškození</c:heal>`,
            zh: `鮮花伏擊的爆炸<c:heal>為所有附近盟友治癒 ${floralAmbushHeal}% 傷害</c:heal>`,
            fr: `L'explosion de l'embuscade florale <c:heal>soigne tous les alliés proches pour ${floralAmbushHeal}% des dégâts</c:heal>`,
            br: `A explosão da Emboscada Floral <c:heal>cura todos os aliados próximos em ${floralAmbushHeal}% do dano</c:heal>`,
            vi: `Vụ nổ của Hoa Phục Kích <c:heal>hồi máu tất cả đồng minh gần đó ${floralAmbushHeal}% sát thương</c:heal>`,
            id: `Ledakan Emboscada Floral <c:heal>menyembuhkan semua sekutu terdekat sebesar ${floralAmbushHeal}% dari kerusakan</c:heal>`,
            kr: `꽃의 매복 폭발이 <c:heal>주변 모든 아군을 피해량의 ${floralAmbushHeal}%만큼 회복</c:heal>시킵니다.`,
          },
        },
        tier2_right: {
          title: {
            en: `Prickly Vine attach delay -${pricklyAttachDuration}s`,
            ru: `Колючая лоза прикрепляется быстрее на ${pricklyAttachDuration} сек.`,
            cz: `Trnitý vinný trn se připevní o ${pricklyAttachDuration}s rychleji`,
            zh: `荊棘藤蔓附著延遲 -${pricklyAttachDuration}秒`,
            fr: `Délai de fixation de la vigne épineuse -${pricklyAttachDuration}s`,
            br: `Atraso de fixação da Videira Espinhosa -${pricklyAttachDuration}s`,
            vi: `Độ trễ của Cức Đằng -${pricklyAttachDuration}s`,
            id: `Keterlambatan pemasangan Ranting Berduri -${pricklyAttachDuration}s`,
            kr: `가시 덩굴 결속 지연 -${pricklyAttachDuration}초`,
          },
        },
      }
    }
    case Shared.HEROES.FLIN: {
      const preciseShotCooldown = '-' + toSecRaw(FlinAbilityData.TALENT_T1_LEFT_PRECISESHOT_COOLDOWN)
      const preciseShotDamage = fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100, 1)
      return {
        tier1_left: {
          title: {
            en: `Precise Shot Cooldown ${preciseShotCooldown}s`,
            ru: `Перезарядка Меткого выстрела ${preciseShotCooldown} сек.`,
            cz: `Přesná střela obnovení ${preciseShotCooldown}s`,
            zh: `精準射擊冷卻 ${preciseShotCooldown}秒`,
            fr: `Recharge de Tir de précision ${preciseShotCooldown}s`,
            br: `Recarga do Tiro Preciso ${preciseShotCooldown}s`,
            vi: `Hồi chiêu Phát Bắn Chính Xác ${preciseShotCooldown}s`,
            id: `Cooldown Precise Shot ${preciseShotCooldown}s`,
            kr: `정밀 사격 재사용 대기시간 ${preciseShotCooldown}초`,
          },
        },
        tier1_right: {
          title: {
            en: `Marksmanship +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} stacks`,
            ru: `+${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} зарядов Меткой стрельбы`,
            cz: `Míření +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} zásob`,
            zh: `精通箭術 +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} 發`,
            fr: `Tir de précision +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} charges`,
            br: `Precisão +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} cargas`,
            vi: `Xạ Thủ Lão Luyện +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} lần`,
            id: `Menembak +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} tumpukan`,
            kr: `명사수 +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS}중첩`,
          },
        },
        tier2_left: {
          title: {
            en: `Precise Shot +${preciseShotDamage}% Damage & Range`,
            ru: `Меткий выстрел: +${preciseShotDamage}% урона и дальности`,
            cz: `Přesný výstřel +${preciseShotDamage}% poškození a dosahu`,
            zh: `精準射擊 +${preciseShotDamage}% 傷害和射程`,
            fr: `Tir précis +${preciseShotDamage}% de dégâts et de portée`,
            br: `Tiro Preciso +${preciseShotDamage}% de Dano e Alcance`,
            vi: `Phát Bắn Chính Xác +${preciseShotDamage}% Sát thương & Tầm bắn`,
            id: `Tembakan Tepat +${preciseShotDamage}% Kerusakan & Jangkauan`,
            kr: `정밀 사격 +${preciseShotDamage}% 피해 및 사거리`,
          },
        },
        tier2_right: {
          title: {
            en: `Attack Range +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
            ru: `+${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE} дальности атаки`,
            cz: `Dosah útoku +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
            zh: `攻擊射程 +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}像素`,
            fr: `Portée d'attaque +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
            br: `Alcance do Ataque +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
            vi: `Tầm đánh +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
            id: `Jangkauan Serangan +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
            kr: `공격 사거리 +${FlinAbilityData.TALENT_T2_RIGHT_ATTACK_RANGE}px`,
          },
        },
      }
    }

    case Shared.HEROES.THOMAS: {
      const carrotStun = toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)
      const bleedDamage = fixed(ThomasAbilityData.TALENT_T2_LEFT_BLEED_DAMAGE * 100, 1) + '%'
      const bleedDuration = toSec(ThomasAbilityData.TALENT_T2_LEFT_BLEED_DAMAGE_DURATION)
      const bleedCooldown = toSec(ThomasAbilityData.TALENT_T2_LEFT_BLEED_COOLDOWN)
      const shurrikenTossCooldown = '-' + toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)
      return {
        tier1_left: {
          title: {
            en: `Shadow Carrot +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Damage`,
            ru: `+${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} к урону от Теневой моркови`,
            cz: `Stínová mrkev +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} poškození`,
            zh: `闇影蘿蔔 +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} 傷害`,
            fr: `Carotte d'ombre +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} dégâts`,
            br: `Cenoura Sombria +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} de Dano`,
            vi: `Hắc Dạ Hồ La Bặc +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Sát thương`,
            id: `Wortel Bayangan +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Kerusakan`,
            kr: `그림자 당근 +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} 피해`,
          },
        },
        tier2_left: {
          title: {
            en: 'Bleed Attack',
            ru: 'Режущая атака',
            cz: 'Krvácející útok',
            zh: '流血攻擊',
            fr: 'Attaque sanguinolente',
            br: 'Ataque Sangrento',
            vi: 'Đòn đánh thường cộng dồn',
            id: 'Serangan Berdarah',
            kr: `출혈 공격`,
          },
          description: {
            en: `Thomas' Basic Attacks apply a Bleed effect, dealing <c:physical>${bleedDamage} of his Attack Damage</c:physical> over ${bleedDuration} and <c:physical>reduce armor by ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}</c:physical>. 
            \nThis effect can occur once every ${bleedCooldown}.`,
            ru: `Атаки Томаса накладывают эффект Кровотечения на врага, наносящий <c:physical>${bleedDamage} от его силы атаки</c:physical> в течение ${bleedDuration} и <c:physical>снижающий броню на ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}</c:physical>.
            \nЭтот эффект может происходить один раз в ${bleedCooldown}`,
            cz: `Základní útoky Thomase aplikují efekt Krvácení, který způsobí <c:physical>${bleedDamage} jeho útoku</c:physical> po
            dobu ${bleedDuration} a <c:physical>sníží obranu o ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}</c:physical>.
            \nTento efekt může nastat jednou za ${bleedCooldown}.`,
            zh: `湯瑪士的基本攻擊造成流血效果，持續 ${bleedDuration}，造成 <c:physical>${bleedDamage}攻擊傷害</c:physical>，<c:physical>減少 ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION} 裝甲值</c:physical>。
            \n此效果每${bleedCooldown}可發動一次。`,
            fr: `Les attaques de base de Thomas appliquent un effet de saignement, infligeant <c:physical>${bleedDamage} de ses dégâts d'attaque</c:physical> sur ${bleedDuration} et <c:physical>réduisant l'armure de ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}</c:physical>.
            \nCet effet peut se produire une fois toutes les ${bleedCooldown}.`,
            br: `Os Ataques Básicos de Thomas aplicam um efeito de Sangramento, causando <c:physical>${bleedDamage} de seu Dano de Ataque</c:physical> ao longo de ${bleedDuration} e <c:physical>reduzindo a armadura em ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}</c:physical>.
            \nEste efeito pode ocorrer uma vez a cada ${bleedCooldown}.`,
            vi: `Các đòn đánh thường của Thomas áp dụng hiệu ứng Chảy máu, gây <c:physical>${bleedDamage} Sát thương Tấn công</c:physical> trong ${bleedDuration} và <c:physical>giảm ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION} giáp</c:physical>.
            \nHiệu ứng này có thể xảy ra mỗi ${bleedCooldown}.`,
            id: `Serangan Dasar Thomas menerapkan efek Pendarahan, memberikan <c:physical>${bleedDamage} Kerusakan Serangannya</c:physical> selama ${bleedDuration} dan <c:physical>mengurangi armor sebesar ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}</c:physical>.
            \nEfek ini dapat terjadi sekali setiap ${bleedCooldown}.`,
            kr: `토마스의 기본 공격은 출혈 효과를 적용하여 ${bleedDuration}에 걸쳐 <c:physical>공격력의 ${bleedDamage}만큼 피해</c:physical>를 입히고, <c:physical>방어력을 ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}만큼 감소</c:physical>시킵니다. 
            \n이 효과는 ${bleedCooldown}마다 한 번씩 발생할 수 있습니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `Shuriken Toss Cooldown ${shurrikenTossCooldown}`,
            ru: `${shurrikenTossCooldown} сек. перезарядки Броска сюрикена`,
            cz: `Shuriken Toss obnovení ${shurrikenTossCooldown}`,
            zh: `手裏劍投擲冷卻 ${shurrikenTossCooldown}`,
            fr: `Recharge du lancer de shuriken ${shurrikenTossCooldown}`,
            br: `Recarga do Arremesso de Shuriken ${shurrikenTossCooldown}`,
            vi: `Hồi chiêu Shuriken ${shurrikenTossCooldown}`,
            id: `Cooldown Shuriken Toss ${shurrikenTossCooldown}`,
            kr: `표창 던지기 재사용 대기시간 ${shurrikenTossCooldown}`,
          },
        },
        tier2_right: {
          title: {
            en: `Shadow Carrot Stun ${carrotStun}s`,
            ru: `Теневая морковь при повторной активации оглушает врага на ${carrotStun} сек.`,
            cz: `Stínová mrkev omráčí nepřítele na ${carrotStun}s`,
            zh: `闇影蘿蔔暈眩 ${carrotStun}秒`,
            fr: `Carotte d'ombre Étourdissement ${carrotStun}s`,
            br: `Cenoura Sombria Atordoamento ${carrotStun}s`,
            vi: `Hắc Dạ Hồ La Bặc Choáng ${carrotStun}s`,
            id: `Wortel Bayangan Stun ${carrotStun}s`,
            kr: `그림자 당근 기절 ${carrotStun}초`,
          },
        },
      }
    }

    case Shared.HEROES.ALVAR: {
      const furiousKickLifesteal = fixed(AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100, 1)
      const heavenlyKickCooldown = '-' + toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)
      return {
        tier1_left: {
          title: {
            en: `Furious Kick +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} damage`,
            ru: `Яростный удар даёт +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} урона`,
            cz: `Furious Kick +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} poškození`,
            zh: `憤怒之踢 +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} 傷害`,
            fr: `Furious Kick +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} dégâts`,
            br: `Furious Kick +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} de dano`,
            vi: `Nộ Cước +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} sát thương`,
            id: `Furious Kick +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} damage`,
            kr: `분노의 발차기 +${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} 피해량`,
          },
          description: {
            en: `Furious Kick bonus in addition also <c:physical>increases attack damage by ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            ru: `Усиление от Яростного удара также даёт <c:physical>+${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE} урона</c:physical>`,
            cz: `Furious Kick bonus navíc <c:physical>zvyšuje poškození o ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            zh: `憤怒之踢額外<c:physical>增加傷害 ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            fr: `Le bonus de Furious Kick augmente également les <c:physical>dégâts de ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            br: `O bônus do Furious Kick também <c:physical>aumenta o dano em ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            vi: `Nộ Cước <c:physical>tăng sát thương thêm ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            id: `Bonus Furious Kick juga <c:physical>meningkatkan damage sebesar ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}</c:physical>`,
            kr: `분노의 발차기의 추가 효과가 <c:physical>피해량도 ${AlvarAbilityData.TALENT_T1_LEFT_FURIOUS_KICK_BONUS_DAMAGE}만큼 증가</c:physical>시킵니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `Furious Kick +${furiousKickLifesteal}% lifesteal`,
            ru: `Яростный удар даёт +${furiousKickLifesteal}% Кражи здоровья`,
            cz: `Furious Kick +${furiousKickLifesteal}% životů`,
            zh: `憤怒之踢 +${furiousKickLifesteal}% 生命偷取`,
            fr: `Furious Kick +${furiousKickLifesteal}% vol de vie`,
            br: `Furious Kick +${furiousKickLifesteal}% Roubo de Vida`,
            vi: `Nộ Cước +${furiousKickLifesteal}% hút máu`,
            id: `Furious Kick +${furiousKickLifesteal}% lifesteal`,
            kr: `분노의 발차기 +${furiousKickLifesteal}% 흡혈`,
          },
          description: {
            en: `Furious Kick bonus in addition also <c:lifesteal>increase lifesteal by ${furiousKickLifesteal}%</c:lifesteal>`,
            ru: `Усиление от Яростного удара также даёт <c:lifesteal>+${furiousKickLifesteal}% Кражи здоровья</c:lifesteal>`,
            cz: `Furious Kick bonus navíc <c:lifesteal>zvyšuje vysávání života o ${furiousKickLifesteal}%</c:lifesteal>`,
            zh: `憤怒之踢額外<c:lifesteal>增加生命偷取 ${furiousKickLifesteal}%</c:lifesteal>`,
            fr: `Le bonus de Furious Kick augmente également le <c:lifesteal>vol de vie de ${furiousKickLifesteal}%</c:lifesteal>`,
            br: `O bônus do Furious Kick também <c:lifesteal>aumenta o roubo de vida em ${furiousKickLifesteal}%</c:lifesteal>`,
            vi: `Nộ Cước <c:lifesteal>tăng hút máu thêm ${furiousKickLifesteal}%</c:lifesteal>`,
            id: `Bonus Furious Kick juga <c:lifesteal>meningkatkan lifesteal sebesar ${furiousKickLifesteal}%</c:lifesteal>`,
            kr: `분노의 발차기의 추가 효과가 <c:lifesteal>흡혈량도 ${furiousKickLifesteal}%만큼 증가</c:lifesteal>시킵니다.`,
          },
        },
        tier2_left: {
          title: {
            en: `Furious Kick Stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            ru: `+${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)} сек. оглушения от Яростного удара`,
            cz: `Furious Kick omráčení +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            zh: `憤怒之踢暈眩 +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}秒`,
            fr: `Étourdissement de Furious Kick +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            br: `Furious Kick Atordoamento +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            vi: `Nộ Cước Choáng +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            id: `Furious Kick Stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            kr: `분노의 발차기 기절 +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}초`,
          },
        },
        tier2_right: {
          title: {
            en: `Heavenly Kick Cooldown ${heavenlyKickCooldown}s`,
            ru: `${heavenlyKickCooldown} сек. перезарядки Небесного удара`,
            cz: `Heavenly Kick obnovení ${heavenlyKickCooldown}s`,
            zh: `天堂之踢冷卻 ${heavenlyKickCooldown}秒`,
            fr: `Recharge de Heavenly Kick ${heavenlyKickCooldown}s`,
            br: `Recarga do Chute Celestial ${heavenlyKickCooldown}s`,
            vi: `Thiên Cước giảm hồi chiêu ${heavenlyKickCooldown}s`,
            id: `Cooldown Heavenly Kick ${heavenlyKickCooldown}s`,
            kr: `천상의 발차기 재사용 대기시간 ${heavenlyKickCooldown}초`,
          },
        },
      }
    }
    case Shared.HEROES.AREL: {
      const tickingBombDamage = fixed(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)
      const freezingTrapDuration = toSec(ArelAbilityData.FREEZING_TRAP_DURATION)
      const freezingTrapFreezeDuration = toSec(ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: `Ticking Bomb +${tickingBombDamage}% Trigger Damage`,
            ru: `+${tickingBombDamage}% к урону активированной Часовой бомбы`,
            cz: `Ticking Bomb +${tickingBombDamage}% spouštěcí poškození`,
            zh: `定時炸彈 +${tickingBombDamage}% 引爆傷害`,
            fr: `Ticking Bomb +${tickingBombDamage}% Dégâts de déclenchement`,
            br: `Ticking Bomb +${tickingBombDamage}% Dano de Gatilho`,
            vi: `Bom hẹn giờ +${tickingBombDamage}% Sát thương Kích hoạt`,
            id: `Ticking Bomb +${tickingBombDamage}% Pemicu Kerusakan`,
            kr: `시한폭탄 +${tickingBombDamage}% 발동 피해`,
          },
        },
        tier1_right: {
          title: {
            en: `Basic Attack Range +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            ru: `+${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE} к дальности атаки`,
            cz: `Základní útok Dosah +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            zh: `基礎攻擊射程 +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}像素`,
            fr: `Portée d'attaque de base +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            br: `Alcance do Ataque Básico +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            vi: `Tầm Đánh Thường +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            id: `Jarak Serangan Dasar +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            kr: `기본 공격 사거리 +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
          },
        },
        tier2_left: {
          title: {
            en: `Ticking Bomb Stun +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}s`,
            ru: `+${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)} сек. к оглушению Часовой бомбы`,
            cz: `Ticking Bomb omráčení +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}s`,
            zh: `定時炸彈暈眩 +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}秒`,
            fr: `Ticking Bomb Étourdissement +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}s`,
            br: `Ticking Bomb Atordoamento +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}s`,
            vi: `Choáng của Bom Hẹn Giờ +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}s`,
            id: `Ticking Bomb Stun +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}s`,
            kr: `시한폭탄 기절 +${toSecRaw(ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN)}초`,
          },
        },
        tier2_right: {
          title: {
            en: 'Tumble - Freezing Trap',
            ru: 'Кувырок создаёт Замораживающую ловушку',
            cz: 'Tumble - Zmrazující past',
            zh: '翻跟斗 - 凍結陷阱',
            fr: 'Tumble - Piège de glace',
            br: 'Tumble - Armadilha Congelante',
            vi: 'Nhào Lộn - Bẫy Đóng Băng',
            id: 'Tumble - Perangkap Pembekuan',
            kr: `구르기 - 결빙 함정`,
          },
          description: {
            en:
              `Tumble creates a freezing trap at Arel's position. When an enemy unit steps on the trap, they will be <c:control>frozen for ${freezingTrapFreezeDuration}</c:control>, preventing all forms of movement.` +
              `<br/> The trap lasts for ${freezingTrapDuration} and <c:vision>provides vision</c:vision> in a small radius.`,
            ru:
              `Кувырок  создаст Замораживающую ловушку на позиции Арела, которая <c:control>обездвижит</c:control> наступившего в неё врага на <c:control>${freezingTrapFreezeDuration}</c:control>` +
              `<br/> Замораживающая ловушка существует ${freezingTrapDuration} и <c:vision>даёт небольшой обзор</c:vision> вокруг себя`,
            cz:
              `Tumble vytvoří <c:control>zmrazující</c:control> past na pozici Arela. Když na past vstoupí nepřátelská jednotka, bude <c:control>zmrazena po dobu ${freezingTrapFreezeDuration}</c:control>, což zamezí veškerému pohybu.` +
              `<br/> Past trvá ${freezingTrapDuration} a <c:vision>poskytuje viditelnost</c:vision> v malém poloměru.`,
            zh:
              `艾瑞爾在翻跟斗處設置一個凍結陷阱。當敵方單位踩到陷阱時，他們將被<c:control>凍結 ${freezingTrapFreezeDuration}</c:control>，阻止所有形式的移動。` +
              `<br/> 陷阱持續 ${freezingTrapDuration} 並在小範圍內<c:vision>提供視野</c:vision>。`,
            fr:
              `Tumble crée un piège de glace à la position d'Arel. Lorsqu'une unité ennemie marche sur le piège, elle est <c:control>gelée pendant ${freezingTrapFreezeDuration}</c:control>, empêchant tout mouvement.` +
              `<br/> Le piège dure ${freezingTrapDuration} et <c:vision>fournit une vision</c:vision> dans un petit rayon.`,
            br:
              `Tumble cria uma armadilha <c:control>congelante</c:control> na posição de Arel. Quando uma unidade inimiga pisa na armadilha, ela é <c:control>congelada por ${freezingTrapFreezeDuration}</c:control>, impedindo qualquer forma de movimento.` +
              `<br/> A armadilha dura ${freezingTrapDuration} e <c:vision>fornece visão</c:vision> em um pequeno raio.`,
            vi:
              `Nhào Lộn đặt ra một bẫy <c:control>đóng băng</c:control> tại vị trí của Arel. Khi một đơn vị địch bước vào bẫy, họ sẽ bị <c:control>đóng băng trong ${freezingTrapFreezeDuration}</c:control>, ngăn mọi hình thức di chuyển.` +
              `<br/> Bẫy tồn tại trong ${freezingTrapDuration} và <c:vision>cung cấp tầm nhìn</c:vision> trong bán kính nhỏ.`,
            id:
              `Tumble membuat perangkap pembekuan di posisi Arel. Ketika unit musuh melangkah di perangkap, mereka akan <c:control>membeku selama ${freezingTrapFreezeDuration}</c:control>, mencegah semua bentuk pergerakan.` +
              `<br/> Perangkap bertahan selama ${freezingTrapDuration} dan <c:vision>memberikan visi</c:vision> dalam radius kecil.`,
            kr:
              `구르기가 아렐의 위치에 결빙 함정을 생성합니다. 적 유닛이 함정을 밟으면 <c:control>${freezingTrapFreezeDuration} 동안 얼어붙어</c:control> 모든 형태의 이동이 불가능해집니다.` +
              `<br/> 함정은 ${freezingTrapDuration} 동안 유지되며 작은 반경의 <c:vision>시야를 제공</c:vision>합니다.`,
          },
        },
      }
    }

    case Shared.HEROES.HAZEL:
      return {
        tier1_left: {
          title: {
            en: `Triumphant Shield`,
            ru: `Триумфальный щит`,
            cz: `Triumfální štít`,
            br: `Escudo Triunfante`,
            zh: `勝利之盾`,
            fr: `Bouclier triomphant`,
            vi: `Khải Hoàn Khiên`,
            id: `Perisai Triumphant`,
            kr: `승리의 방패`,
          },
          description: {
            en: `Triumphant Upheaval grants Hazel a <c:heal>shield for ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% of the damage dealt</c:heal>, lasting ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}.`,
            ru: `Триумфальный переворот даёт Хейзел <c:heal>щит на ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% от нанесённого урона</c:heal> длительностью ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}`,
            cz: `Triumfální Povstání dá Hazel <c:heal>štít o ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% způsobeného poškození</c:heal> na ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}.`,
            zh: `勝利的動盪為哈傑爾提供<c:heal>相當於造成傷害 ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% 的護盾</c:heal>，持續 ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}。`,
            fr: `Le Soulèvement triomphant accorde à Hazel un <c:heal>bouclier pour ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% des dégâts infligés</c:heal>, pendant ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}.`,
            br: `O Levante Triunfante concede a Hazel um <c:heal>escudo de ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% do dano causado</c:heal>, durando ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}.`,
            vi: `Triumphant Upheaval cấp cho Hazel một <c:heal>lá chắn bằng ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% sát thương gây ra</c:heal>, kéo dài ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}.`,
            id: `Triumphant Upheaval memberikan Hazel <c:heal>perisai sebesar ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}% dari kerusakan yang diberikan</c:heal>, bertahan selama ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)}.`,
            kr: `승리의 격변이 <c:heal>입힌 피해량의 ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD * 100}%에 해당하는 보호막</c:heal>을 ${toSec(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_SHIELD_DURATION)} 동안 부여합니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Damage`,
            ru: `+${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} к урону от Гнева правосудия`,
            cz: `Hnev spravodlivosti +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} poškození`,
            br: `Ira da Justiça +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} de Dano`,
            fr: `Colère de la Justice +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} dégâts`,
            zh: `正義之怒 +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} 傷害`,
            vi: `Sức Mạnh Công Lý +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Sát thương`,
            id: `Kemarahan Keadilan +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Kerusakan`,
            kr: `정의의 분노 +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} 피해`,
          },
        },
        tier2_left: {
          title: {
            en: `Justice's Wrath Stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            ru: `+${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)} сек. оглушения от Гнева правосудия`,
            cz: `Hnev spravodlivosti omráčení +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            br: `Ira da Justiça Atordoamento +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            zh: `正義之怒暈眩 +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}秒`,
            fr: `Colère de la Justice Étourdissement +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            vi: `Sức Mạnh Công Lý Choáng +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            id: `Kemarahan Keadilan Stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            kr: `정의의 분노 기절 +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}초`,
          },
        },
        tier2_right: {
          title: {
            en: `Enhanced Triumphant Upheaval`,
            cz: `Vylepšené Triumfální Povstání`,
            br: `Levante Triunfante Aumentado`,
            zh: `增強的勝利的動盪`,
            fr: `Soulèvement triomphant augmenté`,
            ru: `Усиленное Триумфальное Восстание`,
            vi: `Khải Hoàn Chấn Động Tăng Cường`,
            id: `Triumphant Upheaval Ditingkatkan`,
            kr: `강화된 승리의 격변`,
          },
          description: {
            en: `Triumphant Upheaval deals an additional <c:physical>${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% of Hazel's max Health as damage</c:physical>.`,
            ru: `Триумфальный переворот наносит <c:physical>дополнительный урон, равный ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% от максимального здоровья Хейзел</c:physical>.`,
            cz: `Triumfální Povstání způsobí <c:physical>dodatečné poškození ve výši ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% max. zdraví Hazel</c:physical>.`,
            br: `O Levante Triunfante causa <c:physical>dano adicional igual a ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% da Vida máxima de Hazel</c:physical>.`,
            zh: `勝利的動盪額外造成<c:physical>相當於哈傑爾最大生命值 ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% 的傷害</c:physical>。`,
            fr: `Le Soulèvement triomphant inflige des <c:physical>dégâts supplémentaires égaux à ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% de la santé max de Hazel</c:physical>.`,
            vi: `Khải Hoàn Chấn Động gây <c:physical>thêm sát thương bằng ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% Máu tối đa của Hazel</c:physical>.`,
            id: `Triumphant Upheaval memberikan <c:physical>kerusakan tambahan sebesar ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}% dari Health maksimum Hazel</c:physical>.`,
            kr: `승리의 격변이 <c:physical>헤이즐 최대 체력의 ${HazelAbilityData.TALENT_T2_RIGHT_SHOCKWAVE_BONUS_DAMAGE_HP * 100}%에 해당하는 추가 피해</c:physical>를 입힙니다.`,
          },
        },
      }

    case Shared.HEROES.KIRA:
      return {
        tier1_left: {
          title: {
            en: `Lightning Shock Duration +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            ru: `+${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)} сек. к длительности Удара молнии`,
            cz: `Úder blesku trvání +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            zh: `閃電衝擊持續時間 +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}秒`,
            fr: `Durée de l'impact de foudre +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            br: `Duração do Choque de Raios +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            vi: `Thời lượng Choáng Sét +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            id: `Durasi Pukulan Petir +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            kr: `번개 충격 지속시간 +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}초`,
          },
        },
        tier1_right: {
          title: {
            en: `Rain of Spark applies slow`,
            ru: `Дождь искр замедляет`,
            cz: `Déšť jisker zpomaluje`,
            zh: `電光雷雨減速`,
            fr: `Pluie d'étincelles ralentit`,
            br: `Relâmpago do Abismo reduz`,
            vi: `Điện Hỏa Vũ gây chậm`,
            id: `Hujan Spark lambat`,
            kr: `스파크의 비 둔화 적용`,
          },
        },
        tier2_left: {
          title: {
            en: `Rain of Spark +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} spark`,
            // Translate also the name of spell
            ru: `+${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} искр у Дождя искр`,
            cz: `Déšť jisker +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} jiskra`,
            zh: `電光雷雨 +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} 電光`,
            fr: `Pluie d'étincelles +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} étincelle`,
            br: `Relâmpago do Abismo +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} faísca`,
            vi: `Điện Hỏa Vũ +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} tia lửa điện`,
            id: `Hujan Spark +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} percikan`,
            kr: `스파크의 비 +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT}개`,
          },
        },
        tier2_right: {
          title: {
            en: `Chain lightning`,
            ru: `Цепная молния`,
            cz: `Řetězová blesk`,
            zh: `連鎖閃電`,
            fr: `Chaîne d'éclair`,
            br: `Raio em Cadeia`,
            vi: `Liên Hoàn Sét`,
            id: `Rantai petir`,
            kr: `연쇄 번개`,
          },
          description: {
            en: `Lightning shock now chain to closest unit, can be enemy or friendly and apply the Lightning Shock effect with <c:bonus>25% less effect per chain</c:bonus>.`,
            ru: `Удар молнии теперь перепрыгивает на ближайшую цель, которая может быть врагом или союзником, и накладывает эффект Удара молнии с <c:bonus>уменьшением эффекта на 25%</c:bonus> за каждое перепрыгивание.`,
            cz: `Úder blesku se nyní řetí k nejbližší jednotce, může to být nepřítel nebo spojenec a aplikuje efekt Úder
            blesku s <c:bonus>25% menším efektem</c:bonus> za řetěz.`,
            zh: `閃電衝擊現在連鎖到最近的單位，可以是敵人或友軍，每次連鎖<c:bonus>減少 25% 的效果</c:bonus>。`,
            fr: `L'impact de foudre se chaîne désormais à l'unité la plus proche, qu'il s'agisse d'un ennemi ou d'un allié, et applique l'effet de choc de foudre avec <c:bonus>25% d'effet en moins</c:bonus> par chaîne.`,
            br: `O Choque de Raios agora encadeia para a unidade mais próxima, podendo ser inimiga ou aliada, e aplica o efeito de Choque de Raios com <c:bonus>25% menos efeito</c:bonus> por encadeamento.`,
            vi: `Sét giờ có thể chuỗi đến đơn vị gần nhất, có thể là địch hoặc đồng minh và áp dụng hiệu ứng Sét với <c:bonus>hiệu ứng giảm 25%</c:bonus> mỗi lần.`,
            id: `Petir sekarang berantai ke unit terdekat, bisa musuh atau teman dan menerapkan efek Petir dengan <c:bonus>efek 25% lebih sedikit</c:bonus> per rantai.`,
            kr: `이제 번개 충격이 가장 가까운 유닛(아군 또는 적군)에게 연쇄되며, 연쇄될 때마다 <c:bonus>효과가 25%씩 감소</c:bonus>한 번개 충격 효과를 적용합니다.`,
          },
        },
      }

    case Shared.HEROES.FOXY: {
      const incendiaryGrenadeDamage = fixed(FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100)
      const freezingGrenadeDuration = toSec(FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: 'Incendiary Grenade',
            ru: 'Зажигательная граната',
            cz: 'Zápalná granát',
            zh: '烈火燃燒彈',
            fr: 'Grenade incendiaire',
            br: 'Granada Incendiária',
            vi: 'Lựu Đạn Lửa',
            id: 'Granat Penyala',
            kr: `소이 수류탄`,
          },
          description: {
            en: `Explosive Grenade ignites enemies, dealing <c:magical>${incendiaryGrenadeDamage}% of target's max health as bonus Magic Damage</c:magical> per second for a short duration.`,
            ru: `Взрывная граната поджигает задетых врагов, нанося <c:magical>${incendiaryGrenadeDamage}% от макс. здоровья цели дополнительным магическим уроном</c:magical> в секунду.`,
            cz: `Explozivní granát zapaluje nepřátele, způsobuje <c:magical>${incendiaryGrenadeDamage}% maximálního zdraví cíle jako bonusové magické poškození</c:magical> za sekundu po krátkou dobu.`,
            zh: `手榴彈爆炸後點燃敵人，短時間造成每秒目標最大生命值的額外<c:magical>魔法傷害</c:magical> ${incendiaryGrenadeDamage}%。`,
            fr: `La grenade explosive enflamme les ennemis, infligeant <c:magical>${incendiaryGrenadeDamage}% des PV max de la cible en dégâts magiques</c:magical> bonus par seconde pendant une courte durée.`,
            br: `Granada Explosiva inflama inimigos, causando <c:magical>${incendiaryGrenadeDamage}% da vida máxima do alvo como Dano Mágico</c:magical> bônus por segundo por um curto período.`,
            vi: `Lựu Đạn châm ngòi kẻ thù, gây <c:magical>${incendiaryGrenadeDamage}% máu tối đa của mục tiêu dưới dạng Sát thương Phép</c:magical> mỗi giây trong một thời gian ngắn.`,
            id: `Granat Peledak menyulut musuh, memberikan <c:magical>${incendiaryGrenadeDamage}% dari Health maksimum target sebagai Damage Sihir bonus</c:magical> per detik untuk jangka waktu singkat.`,
            kr: `폭발 수류탄이 적을 발화시켜 짧은 시간 동안 매초 대상 최대 체력의 <c:magical>${incendiaryGrenadeDamage}%만큼 추가 마법 피해</c:magical>를 입힙니다.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Freezing Grenade',
            ru: 'Замораживающая граната',
            cz: 'Mrazící granát',
            zh: '冰凍手榴彈',
            fr: 'Grenade de congélation',
            br: 'Granada Congelante',
            vi: 'Lựu Đạn Băng',
            id: 'Granat Pembeku',
            kr: `냉동 수류탄`,
          },
          description: {
            en: `Explosive Grenade <c:control>freezes enemies for up to ${freezingGrenadeDuration}</c:control>, preventing all forms of movement`,
            ru: `Взрывная граната <c:control>замораживает задетых врагов на ${freezingGrenadeDuration}</c:control>`,
            cz: `Explozivní granát <c:control>zmrazuje nepřátele až na ${freezingGrenadeDuration}</c:control>, což zabraňuje veškerému pohybu`,
            zh: `手榴彈爆炸後<c:control>凍結敵人最多 ${freezingGrenadeDuration}</c:control>，阻止所有形式的移動`,
            fr: `La grenade explosive <c:control>gèle les ennemis pendant ${freezingGrenadeDuration}</c:control>, empêchant tout mouvement`,
            br: `Granada Explosiva <c:control>congela inimigos por até ${freezingGrenadeDuration}</c:control>, impedindo qualquer forma de movimento`,
            vi: `Lựu Đạn <c:control>đóng băng kẻ thù lên đến ${freezingGrenadeDuration}</c:control>, ngăn mọi hình thức di chuyển`,
            id: `Granat Peledak <c:control>membekukan musuh hingga ${freezingGrenadeDuration}</c:control>, mencegah semua bentuk pergerakan`,
            kr: `폭발 수류탄이 <c:control>적을 최대 ${freezingGrenadeDuration} 동안 얼려</c:control> 모든 형태의 이동을 막습니다`,
          },
        },
        tier2_left: {
          title: {
            en: `Grenade radius +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}% к радиусу Взрывной гранаты`,
            cz: `Poloměr granátu +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            zh: `手榴彈半徑 +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            fr: `Rayon de la grenade +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            br: `Raio da granada +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            vi: `Bán kính lựu đạn +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            id: `Radius Granat +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            kr: `수류탄 반경 +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
          },
        },
        tier2_right: {
          title: {
            en: `Rapid Fire Damage +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}% к урону Беглого огня`,
            cz: `Rapid Fire Poškození +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            zh: `極速射擊傷害 +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            fr: `Dégâts de Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            br: `Dano do Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            vi: `Sát Thương Tốc Xạ +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            id: `Kerusakan Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            kr: `속사 피해 +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
          },
        },
      }
    }

    case Shared.HEROES.MAGDALENE: {
      const hauntedGhostsHealing = fixed(MagdaleneAbilityData.TALENT_T1_LEFT_HAUNTED_GHOST_HEAL_ON_EXPIRE * 100)
      return {
        tier1_left: {
          title: {
            en: `Haunted Ghosts Heal`,
            ru: `Одержимый призрак исцеляет`,
            cz: `Léčba Strašidelných duchů`,
            zh: `作祟治癒幽魂`,
            fr: `Soins des Fantômes hantés`,
            br: `Cura dos Fantasmas Assombrados`,
            vi: `U Hồn Ám Ảnh hồi máu`,
            id: `Hantu Menyembuhkan`,
            kr: `홀린 유령 회복`,
          },
          description: {
            en: `Haunted Ghosts returns to the owner and <c:heal>heals for ${hauntedGhostsHealing}% of the damage dealt</c:heal>.`,
            ru: `По возвращению Одержимого призрака к Магдалине, она <c:heal>восстанавливает себе здоровье в размере ${hauntedGhostsHealing}% от нанесенного урона</c:heal>.`,
            cz: `Strašidelné duchy se vrátí majiteli a <c:heal>vyléčí za ${hauntedGhostsHealing}% způsobeného poškození</c:heal>.`,
            zh: `幽靈返回主人時<c:heal>治癒造成傷害的 ${hauntedGhostsHealing}%</c:heal>。`,
            fr: `Les Fantômes hantés retournent au propriétaire et <c:heal>soignent pour ${hauntedGhostsHealing}% des dégâts infligés</c:heal>.`,
            br: `Os Fantasmas Assombrados retornam ao dono e <c:heal>curam ${hauntedGhostsHealing}% do dano causado</c:heal>.`,
            vi: `Hồn Ma trở lại chủ nhân và <c:heal>hồi phục ${hauntedGhostsHealing}% sát thương gây ra</c:heal>.`,
            id: `Hantu kembali ke pemilik dan <c:heal>menyembuhkan ${hauntedGhostsHealing}% dari kerusakan yang diberikan</c:heal>.`,
            kr: `홀린 유령이 주인에게 돌아오면 <c:heal>입힌 피해량의 ${hauntedGhostsHealing}%만큼 회복</c:heal>시킵니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} max stolen souls`,
            ru: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} макс. украденных душ`,
            cz: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} max ukradených duší`,
            zh: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} 最大奪取靈魂數`,
            fr: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} âmes volées max`,
            br: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} almas roubadas máx`,
            vi: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} linh hồn tối đa bị đánh cắp`,
            id: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} jumlah maksimum jiwa yang dicuri`,
            kr: `최대 훔친 영혼 +${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS}개`,
          },
        },
        tier2_left: {
          title: {
            en: `Haunted Ghosts pierce ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} targets`,
            ru: `Одержимые призраки пробивают ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} целей`,
            cz: `Strašidelné duchy probíjí ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} cílů`,
            zh: `作祟幽魂穿透 ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} 個目標`,
            fr: `Les Fantômes hantés pénètrent ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} cibles`,
            br: `Os Fantasmas Assombrados perfuram ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} alvos`,
            vi: `Hồn Ma xuyên ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS} mục tiêu`,
            kr: `홀린 유령 관통 대상 ${MagdaleneAbilityData.TALENT_T2_LEFT_HAUNTED_GHOST_PIERCE_TARGETS}개`,
          },
        },
        tier2_right: {
          title: {
            en: `+${fixed(MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100, 1)}% movement speed per stack`,
            ru: `+${fixed(
              MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100,
              1
            )}% к скорости передвижения за каждый заряд`,
            cz: `+${fixed(MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100, 1)}% rychlost pohybu za každý stack`,
            zh: `+${fixed(MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100, 1)}% 每層移動速度`,
            fr: `+${fixed(
              MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100,
              1
            )}% de vitesse de déplacement par stack`,
            br: `+${fixed(
              MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100,
              1
            )}% de velocidade de movimento por stack`,
            vi: `+${fixed(
              MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100,
              1
            )}% tốc độ di chuyển cho mỗi linh hồn`,
            kr: `중첩당 이동 속도 +${fixed(MagdaleneAbilityData.TALENT_T2_RIGHT_MOVEMENT_SPEED_PER_STACK * 100, 1)}%`,
          },
        },
      }
    }

    case Shared.HEROES.PRIM: {
      const primBonusMovementSpeed = fixed(PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED * 100, 1)
      const primBonusArmor = PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR
      const gravitationalPullBonus = fixed(
        PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100,
        1
      )
      return {
        tier1_left: {
          title: {
            en: 'Enhanced Ball protection',
            ru: 'Шар: защита',
            cz: 'Vylepšená ochrana míče',
            zh: '強化球的守護',
            fr: 'Protection améliorée de la balle',
            br: 'Proteção aprimorada da bola',
            vi: 'Cầu Bảo Vệ Thức Tỉnh',
            id: 'Proteksi Bola Ditingkatkan',
            kr: `강화된 공 보호`,
          },
          description: {
            en: `Enhanced Ball protection provides an additional <c:bonus>${primBonusMovementSpeed}% Movement Speed</c:bonus> and <c:bonus>${primBonusArmor} Armor</c:bonus> while the Ball is attached to a hero.`,
            ru: `Улучшенная защита мяча даёт дополнительно <c:bonus>${primBonusMovementSpeed}% скорости передвижения</c:bonus> и <c:bonus>${primBonusArmor} брони</c:bonus>, когда мяч прикреплён к герою.`,
            cz: `Vylepšená ochrana míče poskytuje navíc <c:bonus>${primBonusMovementSpeed}% rychlosti pohybu</c:bonus> a <c:bonus>${primBonusArmor} brnění</c:bonus>, když je míč připojen k hrdinovi.`,
            zh: `當球附著在英雄身上時，強化球的守護提供英雄 <c:bonus>${primBonusMovementSpeed}% 額外移動速度</c:bonus>和<c:bonus>${primBonusArmor} 裝甲值</c:bonus>。`,
            fr: `La protection améliorée de la balle fournit <c:bonus>${primBonusMovementSpeed}% de vitesse de déplacement</c:bonus> et <c:bonus>${primBonusArmor} d'armure</c:bonus> supplémentaires, lorsque la balle est attachée à un héros.`,
            br: `A proteção aprimorada da bola fornece <c:bonus>${primBonusMovementSpeed}% de Velocidade de Movimento</c:bonus> e <c:bonus>${primBonusArmor} de Armadura</c:bonus> adicionais, quando a bola está anexada a um herói.`,
            vi: `Cầu Thức Tỉnh cung cấp thêm <c:bonus>${primBonusMovementSpeed}% tốc độ di chuyển</c:bonus> và <c:bonus>${primBonusArmor} giáp</c:bonus>, khi cầu ở gần Prim.`,
            id: `Proteksi Bola yang Ditingkatkan memberikan tambahan <c:bonus>${primBonusMovementSpeed}% Kecepatan Gerak</c:bonus> dan <c:bonus>${primBonusArmor} Armor</c:bonus>, ketika bola terpasang pada pahlawan.`,
            kr: `강화된 공 보호는 공이 영웅에게 부착되어 있는 동안 추가로 <c:bonus>이동 속도 ${primBonusMovementSpeed}%</c:bonus>와 <c:bonus>방어력 ${primBonusArmor}</c:bonus>을 제공합니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `Ball max-range +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            ru: `+${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE} к максимальной дальности шара`,
            cz: `Maximální dosah míče +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            zh: `球最大範圍 +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}像素`,
            fr: `Portée maximale de la balle +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            br: `Alcance máximo da bola +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            vi: `Khoảng cách tối đa của Cầu +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            id: `Jarak maksimum bola +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            kr: `공 최대 사거리 +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
          },
        },
        tier2_right: {
          title: {
            en: 'Enhanced Gravitational Pull',
            ru: 'Сильное притяжение',
            cz: 'Vylepšené Gravitační tahání',
            zh: '重力牽引加強版',
            fr: 'Gravitational Pull amélioré',
            br: 'Puxão Gravitacional aprimorado',
            vi: 'Lực Hấp Dẫn Thức Tỉnh',
            id: 'Tarik Gravitasi Ditingkatkan',
            kr: `강화된 중력 견인`,
          },
          description: {
            en: `Increase Gravitational Pull <c:magical>damage</c:magical> and <c:stun>Stun Duration</c:stun> by <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            ru: `Увеличивает <c:magical>урон</c:magical> и <c:stun>длительность оглушения</c:stun> Гравитационного притяжения на <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            cz: `Zvyšuje <c:magical>poškození</c:magical> a <c:stun>dobu omráčení</c:stun> Gravitačního tahání o <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            zh: `增加重力牽引的<c:magical>傷害</c:magical>和<c:stun>暈眩持續時間</c:stun> <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            fr: `Augmente les <c:magical>dégâts</c:magical> et la <c:stun>durée d'étourdissement</c:stun> de la traction gravitationnelle de <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            br: `Aumenta o <c:magical>dano</c:magical> e a <c:stun>duração do atordoamento</c:stun> do Puxão Gravitacional em <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            vi: `Tăng <c:magical>Sát thương</c:magical> và <c:stun>thời gian Choáng</c:stun> của Lực Hấp Dẫn lên <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            id: `Meningkatkan <c:magical>kerusakan</c:magical> dan <c:stun>durasi stun</c:stun> Gravitasi Tarik sebesar <c:bonus>${gravitationalPullBonus}%</c:bonus>`,
            kr: `중력 견인의 <c:magical>피해량</c:magical>과 <c:stun>기절 지속시간</c:stun>을 <c:bonus>${gravitationalPullBonus}%</c:bonus>만큼 증가시킵니다`,
          },
        },
        tier2_left: {
          title: {
            en: `Gravitational Pull Radius + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            ru: `+ ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS} к радиусу Гравитационного притяжения`,
            cz: `Poloměr Gravitačního tahání + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            zh: `重力牽引半徑 + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}像素`,
            fr: `Rayon de la traction gravitationnelle + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            br: `Raio do Puxão Gravitacional + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            vi: `Bán kính của Lực Hấp Dẫn + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            id: `Radius Tarik Gravitasi + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            kr: `중력 견인 반경 + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
          },
        },
      }
    }
    case Shared.HEROES.SEER: {
      const curseDelay = toSec(SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_DELAY)
      const curseDamage = SeerAbilityData.MALEVOLENT_CURSE_BASE_DAMAGE
      const curseApPercent = fixed(SeerAbilityData.MALEVOLENT_CURSE_DAMAGE_MODIFIER * 100, 0)
      const shiftCdReduction = toSecRaw(-SeerAbilityData.TALENT_T1_RIGHT_MALEVOLENT_SHIFT_COOLDOWN_REDUCTION)
      const recastDelay = toSec(SeerAbilityData.DARK_CLONE_RECAST_EXPLODE_DELAY)
      const clawsRoot = toSec(SeerAbilityData.TALENT_T2_RIGHT_MALEVOLENT_CLAWS_ROOT_DURATION)
      const mirrorDamageReduction = fixed(SeerAbilityData.TALENT_T2_LEFT_MALEVOLENT_MIRROR_DAMAGE_REDUCTION * 100, 0)

      return {
        tier1_left: {
          title: {
            en: 'Malevolent Curse',
            ru: 'Злобное проклятье',
            cz: 'Zlomyslné prokletí',
            zh: '邪恶诅咒',
            fr: 'Malédiction maléfique',
            br: 'Maldição Malévola',
            vi: 'Lời Nguyền Ác Độc',
            id: 'Kutukan Jahat',
            kr: `악의의 저주`,
          },
          description: {
            en: `Attack applies a curse that explodes after ${curseDelay}, dealing <c:magical>${curseDamage} + ${curseApPercent}% Ability Power damage</c:magical>. Attacking a cursed target again does not reapply or trigger it early.`,
            ru: `Атака накладывает проклятье, которое взрывается через ${curseDelay}, нанося <c:magical>${curseDamage} + ${curseApPercent}% силы способностей урона</c:magical>. Повторная атака по проклятой цели не обновляет и не ускоряет взрыв.`,
            cz: `Útok aplikuje prokletí, které vybuchne po ${curseDelay} a způsobí <c:magical>${curseDamage} + ${curseApPercent}% síly schopností poškození</c:magical>. Opětovný útok na prokletý cíl jej neobnoví ani nespustí dříve.`,
            zh: `攻击施加一个诅咒，在 ${curseDelay}后爆炸，造成 <c:magical>${curseDamage} + ${curseApPercent}% 法術強度傷害</c:magical>。再次攻击被诅咒的目标不会重新施加或提前触发。`,
            fr: `L'attaque applique une malédiction qui explose après ${curseDelay}, infligeant <c:magical>${curseDamage} + ${curseApPercent}% de la puissance des sorts en dégâts</c:magical>. Attaquer à nouveau une cible maudite ne la réapplique pas et ne la déclenche pas plus tôt.`,
            br: `O Ataque aplica uma maldição que explode após ${curseDelay}, causando <c:magical>${curseDamage} + ${curseApPercent}% de Poder de Habilidade em dano</c:magical>. Atacar novamente um alvo amaldiçoado não reaplica nem antecipa a explosão.`,
            vi: `Đòn đánh áp dụng lời nguyền, phát nổ sau ${curseDelay}, gây <c:magical>${curseDamage} + ${curseApPercent}% Sức mạnh Phép thuật</c:magical>. Đánh lại mục tiêu đã bị nguyền không làm mới hay kích hoạt sớm hơn.`,
            id: `Serangan menerapkan kutukan yang meledak setelah ${curseDelay}, memberikan <c:magical>${curseDamage} + ${curseApPercent}% Ability Power kerusakan</c:magical>. Menyerang lagi target yang terkutuk tidak akan menerapkan ulang atau memicunya lebih awal.`,
            kr: `공격 시 저주를 걸며, ${curseDelay} 후 폭발하여 <c:magical>${curseDamage} + 주문력의 ${curseApPercent}%만큼 피해</c:magical>를 입힙니다. 저주에 걸린 대상을 다시 공격해도 저주가 재적용되거나 조기에 발동되지 않습니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `Malevolent Shift Cooldown ${shiftCdReduction}s`,
            ru: `${shiftCdReduction} сек. перезарядки Злобного сдвига`,
            cz: `Zlomyslný přesun obnovení ${shiftCdReduction}s`,
            zh: `邪恶偏移冷却 ${shiftCdReduction}秒`,
            fr: `Malevolent Shift recharge ${shiftCdReduction}s`,
            br: `Malevolent Shift recarga ${shiftCdReduction}s`,
            vi: `Hồi chiêu Dịch Chuyển Ác Ý ${shiftCdReduction}s`,
            id: `Cooldown Malevolent Shift ${shiftCdReduction}s`,
            kr: `악의의 이동 재사용 대기시간 ${shiftCdReduction}초`,
          },
        },
        tier2_left: {
          title: {
            en: 'Malevolent Mirror',
            ru: 'Злобное отражение',
            cz: 'Zlomyslné zrcadlo',
            zh: '邪恶之镜',
            fr: 'Miroir maléfique',
            br: 'Espelho Malévolo',
            vi: 'Gương Ác Độc',
            id: 'Cermin Jahat',
            kr: `악의의 거울`,
          },
          description: {
            en: `Malevolent Shift leaves a Dark Clone at your previous position (as the Dark Clone ability, but dealing <c:bonus>${mirrorDamageReduction}% less damage</c:bonus>). Recast Malevolent Shift to swap places with it, detonating it ${recastDelay} later.`,
            ru: `Злобный сдвиг оставляет Тёмного двойника на вашей прежней позиции (как способность Тёмный двойник, но нанося <c:bonus>на ${mirrorDamageReduction}% меньше урона</c:bonus>). Повторное применение Злобного сдвига меняет вас местами с двойником, подрывая его через ${recastDelay}`,
            cz: `Zlomyslný přesun zanechá Temného klona na vaší předchozí pozici (stejně jako schopnost Temný klon, ale způsobí <c:bonus>o ${mirrorDamageReduction}% méně poškození</c:bonus>). Opětovným sesláním Zlomyslného přesunu si s klonem vyměníte místa a ten po ${recastDelay} vybuchne.`,
            zh: `邪恶偏移会在你原来的位置留下一个暗影分身（效果与暗影分身技能相同，但<c:bonus>造成的伤害减少 ${mirrorDamageReduction}%</c:bonus>）。再次施放邪恶偏移可与分身交换位置，并在 ${recastDelay}后引爆它。`,
            fr: `Malevolent Shift laisse un Clone Sombre à votre position précédente (comme la compétence Dark Clone, mais infligeant <c:bonus>${mirrorDamageReduction}% de dégâts en moins</c:bonus>). Relancez Malevolent Shift pour échanger votre place avec lui, qui détone ${recastDelay} plus tard.`,
            br: `Malevolent Shift deixa um Clone Sombrio em sua posição anterior (como a habilidade Dark Clone, mas causando <c:bonus>${mirrorDamageReduction}% menos dano</c:bonus>). Reative Malevolent Shift para trocar de lugar com ele, detonando-o ${recastDelay} depois.`,
            vi: `Dịch Chuyển Ác Ý để lại một Bản Sao Bóng Tối tại vị trí cũ của bạn (giống kỹ năng Bản Sao Bóng Tối, nhưng gây <c:bonus>ít hơn ${mirrorDamageReduction}% sát thương</c:bonus>). Dùng lại Dịch Chuyển Ác Ý để hoán đổi vị trí với nó, kích nổ sau ${recastDelay}.`,
            id: `Malevolent Shift meninggalkan Dark Clone di posisi sebelumnya (seperti kemampuan Dark Clone, tetapi memberikan <c:bonus>kerusakan ${mirrorDamageReduction}% lebih sedikit</c:bonus>). Gunakan lagi Malevolent Shift untuk bertukar posisi dengannya, meledakkannya ${recastDelay} kemudian.`,
            kr: `악의의 이동이 이전 위치에 어둠의 분신을 남깁니다 (어둠의 분신 스킬과 동일하지만 <c:bonus>피해량이 ${mirrorDamageReduction}%만큼 감소</c:bonus>합니다). 악의의 이동을 다시 시전하면 분신과 위치를 교환하며, ${recastDelay} 후 분신이 폭발합니다.`,
          },
        },
        tier2_right: {
          title: {
            en: 'Malevolent Claws',
            ru: 'Злобные когти',
            cz: 'Zlomyslné drápy',
            zh: '邪恶之爪',
            fr: 'Griffes maléfiques',
            br: 'Garras Malévolas',
            vi: 'Móng Vuốt Ác Độc',
            id: 'Cakar Jahat',
            kr: `악의의 발톱`,
          },
          description: {
            en: `Malevolent Shift also <c:control>roots all enemy heroes hit for ${clawsRoot}</c:control>.`,
            ru: `Злобный сдвиг также <c:control>обездвиживает всех задетых героев противника на ${clawsRoot}</c:control>`,
            cz: `Zlomyslný přesun také <c:control>zakoření všechny zasažené nepřátelské hrdiny na ${clawsRoot}</c:control>.`,
            zh: `邪恶偏移还会<c:control>将击中的所有敌方英雄禁锢 ${clawsRoot}</c:control>。`,
            fr: `Malevolent Shift <c:control>enracine aussi tous les héros ennemis touchés pendant ${clawsRoot}</c:control>.`,
            br: `Malevolent Shift também <c:control>enraíza todos os heróis inimigos atingidos por ${clawsRoot}</c:control>.`,
            vi: `Dịch Chuyển Ác Ý còn <c:control>trói chân tất cả tướng địch trúng đòn trong ${clawsRoot}</c:control>.`,
            id: `Malevolent Shift juga <c:control>me-root semua hero musuh yang terkena selama ${clawsRoot}</c:control>.`,
            kr: `악의의 이동이 <c:control>적중한 모든 적 영웅을 ${clawsRoot} 동안 속박</c:control>시킵니다.`,
          },
        },
      }
    }

    case Shared.HEROES.KARICK: {
      const seedOfLifeThreshold = fixed(KarickAbilityData.TALENT_T1_LEFT_SEED_OF_LIFE_TRIGGER_THRESHOLD * 100, 0)
      const seedOfLifeHeal = fixed(KarickAbilityData.TALENT_T1_LEFT_SEED_OF_LIFE_HEAL_MOD * 100, 0)
      const seedOfLifeDuration = toSec(KarickAbilityData.TALENT_T1_LEFT_SEED_OF_LIFE_DURATION)
      const seedOfLifeCooldown = toSec(KarickAbilityData.TALENT_T1_LEFT_SEED_OF_LIFE_COOLDOWN)

      const groveMarkStacks = KarickAbilityData.TALENT_T1_RIGHT_GROVE_MARK_STACKS
      const brambleSnapRootBonus = toSecRaw(KarickAbilityData.TALENT_T2_LEFT_BRAMBLE_SNAP_ROOT_BONUS)

      const additionalWrathDelay = toSec(KarickAbilityData.TALENT_T2_RIGHT_ADDITIONAL_WRATH_DELAY)
      const additionalWrathMod = fixed(KarickAbilityData.TALENT_T2_RIGHT_ADDITIONAL_WRATH_MOD * 100, 0)

      return {
        tier1_left: {
          title: {
            en: 'Seed of Life',
            ru: 'Семя жизни',
            cz: 'Semeno života',
            br: 'Semente da Vida',
            zh: '生命之种',
            fr: 'Graine de Vie',
            vi: 'Hạt Giống Sự Sống',
            id: 'Benih Kehidupan',
            kr: `생명의 씨앗`,
          },
          description: {
            en: `Taking damage greater than <c:health>${seedOfLifeThreshold}% of current Health</c:health> plants a healing seed, <c:heal>restoring ${seedOfLifeHeal}% of the damage taken</c:heal> over ${seedOfLifeDuration} and <c:dispel>dispelling</c:dispel> all negative effects. Cooldown: ${seedOfLifeCooldown}.`,
            ru: `Получение урона более <c:health>${seedOfLifeThreshold}% от текущего здоровья</c:health> сажает исцеляющее семя, <c:heal>восстанавливающее ${seedOfLifeHeal}% полученного урона</c:heal> в течение ${seedOfLifeDuration} и <c:dispel>снимающее все отрицательные эффекты</c:dispel>. Перезарядка: ${seedOfLifeCooldown}`,
            cz: `Utržení poškození vyššího než <c:health>${seedOfLifeThreshold}% aktuálního zdraví</c:health> zasadí léčivé semeno, které během ${seedOfLifeDuration} <c:heal>obnoví ${seedOfLifeHeal}% utrženého poškození</c:heal> a <c:dispel>odstraní všechny negativní efekty</c:dispel>. Obnovení: ${seedOfLifeCooldown}.`,
            br: `Receber dano maior que <c:health>${seedOfLifeThreshold}% da Vida atual</c:health> planta uma semente curativa, <c:heal>restaurando ${seedOfLifeHeal}% do dano recebido</c:heal> ao longo de ${seedOfLifeDuration} e <c:dispel>removendo todos os efeitos negativos</c:dispel>. Recarga: ${seedOfLifeCooldown}.`,
            zh: `受到超過<c:health>當前生命值 ${seedOfLifeThreshold}%</c:health> 的傷害時，会种下一颗治疗种子，在 ${seedOfLifeDuration}內<c:heal>恢復所受傷害的 ${seedOfLifeHeal}%</c:heal>並<c:dispel>清除所有负面效果</c:dispel>。冷却时间：${seedOfLifeCooldown}。`,
            fr: `Subir des dégâts supérieurs à <c:health>${seedOfLifeThreshold}% de la santé actuelle</c:health> plante une graine curative, <c:heal>restaurant ${seedOfLifeHeal}% des dégâts subis</c:heal> en ${seedOfLifeDuration} et <c:dispel>dissipant</c:dispel> tous les effets négatifs. Temps de recharge : ${seedOfLifeCooldown}.`,
            vi: `Nhận sát thương lớn hơn <c:health>${seedOfLifeThreshold}% Máu hiện tại</c:health> sẽ gieo một hạt giống hồi phục, <c:heal>hồi lại ${seedOfLifeHeal}% sát thương đã nhận</c:heal> trong ${seedOfLifeDuration} và <c:dispel>loại bỏ mọi hiệu ứng bất lợi</c:dispel>. Hồi chiêu: ${seedOfLifeCooldown}.`,
            id: `Menerima damage lebih dari <c:health>${seedOfLifeThreshold}% Health saat ini</c:health> akan menanam benih penyembuh, <c:heal>memulihkan ${seedOfLifeHeal}% dari damage yang diterima</c:heal> selama ${seedOfLifeDuration} serta <c:dispel>menghapus semua efek negatif</c:dispel>. Cooldown: ${seedOfLifeCooldown}.`,
            kr: `<c:health>현재 체력의 ${seedOfLifeThreshold}%</c:health>를 초과하는 피해를 받으면 회복의 씨앗이 심어져, ${seedOfLifeDuration}에 걸쳐 <c:heal>받은 피해량의 ${seedOfLifeHeal}%를 회복</c:heal>시키고 <c:dispel>모든 부정적 효과를 해제</c:dispel>합니다. 재사용 대기시간: ${seedOfLifeCooldown}.`,
          },
        },

        tier1_right: {
          title: {
            en: 'Grove Mark',
            ru: 'Метка рощи',
            cz: 'Znamení háje',
            br: 'Marca do Bosque',
            zh: '林地印记',
            fr: 'Marque du Bosquet',
            vi: 'Dấu Ấn Khu Rừng',
            id: 'Tanda Rimba',
            kr: `숲의 표식`,
          },
          description: {
            en: `Bramble Snap and Wrath of the Grove also apply ${groveMarkStacks} Verdant Mark stack.`,
            ru: `Bramble Snap и Wrath of the Grove также накладывают ${groveMarkStacks} заряд Verdant Mark.`,
            cz: `Bramble Snap a Wrath of the Grove nyní také aplikují ${groveMarkStacks} stack Verdant Mark.`,
            br: `Bramble Snap e Wrath of the Grove também aplicam ${groveMarkStacks} acúmulo de Verdant Mark.`,
            zh: `Bramble Snap 与 Wrath of the Grove 现在也会施加 ${groveMarkStacks} 层 Verdant Mark。`,
            fr: `Bramble Snap et Wrath of the Grove appliquent aussi ${groveMarkStacks} cumul de Verdant Mark.`,
            vi: `Bramble Snap và Wrath of the Grove giờ cũng áp dụng ${groveMarkStacks} cộng dồn Verdant Mark.`,
            id: `Bramble Snap dan Wrath of the Grove kini juga menerapkan ${groveMarkStacks} stack Verdant Mark.`,
            kr: `가시덩굴 올가미와 숲의 분노는 ${groveMarkStacks}중첩의 숲의 표식도 적용합니다.`,
          },
        },

        tier2_left: {
          title: {
            en: `Bramble Snap Root +${brambleSnapRootBonus}s`,
            ru: `Bramble Snap: обездвиживание +${brambleSnapRootBonus}с`,
            cz: `Bramble Snap: zakořenění +${brambleSnapRootBonus}s`,
            br: `Bramble Snap: enraizamento +${brambleSnapRootBonus}s`,
            zh: `Bramble Snap 禁锢 +${brambleSnapRootBonus}秒`,
            fr: `Bramble Snap : enracinement +${brambleSnapRootBonus}s`,
            vi: `Bramble Snap: trói +${brambleSnapRootBonus}s`,
            id: `Bramble Snap: root +${brambleSnapRootBonus}s`,
            kr: `가시덩굴 올가미 속박 +${brambleSnapRootBonus}초`,
          },
        },

        tier2_right: {
          title: {
            en: 'Second Grove',
            ru: 'Вторая чаща',
            cz: 'Druhý háj',
            br: 'Segundo Bosque',
            zh: '第二林地',
            fr: 'Second Bosquet',
            vi: 'Khu Rừng Thứ Hai',
            id: 'Rimba Kedua',
            kr: `두 번째 숲`,
          },
          description: {
            en: `Wrath of the Grove summons a second seed after ${additionalWrathDelay}. The second eruption deals <c:magical>${additionalWrathMod}% damage</c:magical> and applies the same <c:stun>Stun</c:stun>.`,
            ru: `Wrath of the Grove призывает второе семя через ${additionalWrathDelay} Второй взрыв наносит <c:magical>${additionalWrathMod}% урона</c:magical> и накладывает то же <c:stun>оглушение</c:stun>.`,
            cz: `Wrath of the Grove vyvolá druhé semeno po ${additionalWrathDelay}. Druhá exploze způsobí <c:magical>${additionalWrathMod}% poškození</c:magical> a stejné <c:stun>omráčení</c:stun>.`,
            br: `Wrath of the Grove conjura uma segunda semente após ${additionalWrathDelay}. A segunda explosão causa <c:magical>${additionalWrathMod}% de dano</c:magical> e o mesmo <c:stun>atordoamento</c:stun>.`,
            zh: `Wrath of the Grove 在 ${additionalWrathDelay}后召唤第二颗种子。第二次爆發造成 <c:magical>${additionalWrathMod}% 傷害</c:magical>和相同的<c:stun>暈眩</c:stun>效果。`,
            fr: `Wrath of the Grove invoque une seconde graine après ${additionalWrathDelay}. La seconde explosion inflige <c:magical>${additionalWrathMod}% de dégâts</c:magical> et le même <c:stun>étourdissement</c:stun>.`,
            vi: `Wrath of the Grove triệu hồi hạt giống thứ hai sau ${additionalWrathDelay}. Lần bùng nổ thứ hai gây <c:magical>${additionalWrathMod}% sát thương</c:magical> và cùng hiệu ứng <c:stun>choáng</c:stun>.`,
            id: `Wrath of the Grove memanggil benih kedua setelah ${additionalWrathDelay}. Ledakan kedua memberikan <c:magical>${additionalWrathMod}% damage</c:magical> dan efek <c:stun>stun</c:stun> yang sama.`,
            kr: `숲의 분노가 ${additionalWrathDelay} 후 두 번째 씨앗을 소환합니다. 두 번째 폭발은 <c:magical>${additionalWrathMod}%의 피해</c:magical>를 입히며 동일한 <c:stun>기절</c:stun>을 적용합니다.`,
          },
        },
      }
    }

    case Shared.HEROES.PUPPETEER: {
      const dashSlowBonus = toSecRaw(PuppeteerAbilityData.TALENT_T1_LEFT_PUPPET_DASH_SLOW_DURATION)
      const shredderArmorPerStack = PuppeteerAbilityData.TALENT_T1_RIGHT_SHREDDER_ARMOR_REDUCTION_PER_STACK
      const shredderMaxStacks = PuppeteerAbilityData.TALENT_T1_RIGHT_SHREDDER_MAX_STACKS
      const shredderMaxArmor = fixed(shredderArmorPerStack * shredderMaxStacks)
      const shredderDuration = toSec(PuppeteerAbilityData.TALENT_T1_RIGHT_SHREDDER_DURATION)
      const fixateBonus = toSecRaw(PuppeteerAbilityData.TALENT_T2_LEFT_FIXATE_DURATION_BONUS)
      const staticDurationBonus = toSec(PuppeteerAbilityData.TALENT_T2_RIGHT_BINDING_THREAD_STATIC_DURATION_BONUS)
      const stunDurationBonus = toSec(PuppeteerAbilityData.TALENT_T2_RIGHT_BINDING_THREAD_STUN_DURATION_BONUS)

      return {
        tier1_left: {
          title: {
            en: `Puppet Dash Slow +${dashSlowBonus}s`,
            ru: `Рывок Куклы: замедление +${dashSlowBonus}с`,
            cz: `Výpad Loutky: zpomalení +${dashSlowBonus}s`,
            zh: `木偶衝刺 減速 +${dashSlowBonus}秒`,
            fr: `Ruée de la Marionnette : ralentissement +${dashSlowBonus}s`,
            br: `Investida da Marionete: lentidão +${dashSlowBonus}s`,
            vi: `Con Rối Lao Tới: làm chậm +${dashSlowBonus}s`,
            id: `Puppet Dash: perlambatan +${dashSlowBonus}s`,
            kr: `꼭두각시 돌진 둔화 +${dashSlowBonus}초`,
          },
        },
        tier1_right: {
          title: {
            en: 'Shredder',
            ru: 'Разрушитель',
            cz: 'Drtič',
            zh: '碎甲者',
            fr: 'Déchiqueteur',
            br: 'Destruidor',
            vi: 'Kẻ Hủy Giáp',
            id: 'Perobek',
            kr: `파쇄자`,
          },
          description: {
            en: `Command Strike <c:physical>reduces the target's armor by ${shredderArmorPerStack} per stack</c:physical> (up to ${shredderMaxStacks} stacks, ${shredderMaxArmor} max) for ${shredderDuration}.`,
            ru: `Командный удар <c:physical>снижает броню цели на ${shredderArmorPerStack} за стак</c:physical> (до ${shredderMaxStacks} стаков, максимум ${shredderMaxArmor}) на ${shredderDuration}`,
            cz: `Command Strike <c:physical>sníží obranu cíle o ${shredderArmorPerStack} za stack</c:physical> (max. ${shredderMaxStacks} stacků, max. ${shredderMaxArmor}) na ${shredderDuration}.`,
            zh: `指揮打擊<c:physical>使目標護甲降低 ${shredderArmorPerStack}（每層）</c:physical>，最多疊加 ${shredderMaxStacks} 層（最多降低 ${shredderMaxArmor}），持續 ${shredderDuration}。`,
            fr: `Frappe de Commandement <c:physical>réduit l'armure de la cible de ${shredderArmorPerStack} par charge</c:physical> (jusqu'à ${shredderMaxStacks} charges, ${shredderMaxArmor} max) pendant ${shredderDuration}.`,
            br: `Golpe de Comando <c:physical>reduz a armadura do alvo em ${shredderArmorPerStack} por stack</c:physical> (até ${shredderMaxStacks} stacks, ${shredderMaxArmor} no máximo) por ${shredderDuration}.`,
            vi: `Command Strike <c:physical>giảm ${shredderArmorPerStack} giáp mục tiêu mỗi lớp</c:physical> (tối đa ${shredderMaxStacks} lớp, ${shredderMaxArmor} tối đa) trong ${shredderDuration}.`,
            id: `Command Strike <c:physical>mengurangi armor target sebesar ${shredderArmorPerStack} per stack</c:physical> (maks. ${shredderMaxStacks} stack, ${shredderMaxArmor} maks.) selama ${shredderDuration}.`,
            kr: `명령 타격이 <c:physical>대상의 방어력을 중첩당 ${shredderArmorPerStack}만큼 감소</c:physical>시키며(최대 ${shredderMaxStacks}중첩, 최대 ${shredderMaxArmor}), 효과는 ${shredderDuration} 동안 지속됩니다.`,
          },
        },
        tier2_left: {
          title: {
            en: `Fixation Duration +${fixateBonus}s`,
            ru: `Длительность фиксации +${fixateBonus}с`,
            cz: `Délka fixace +${fixateBonus}s`,
            zh: `固定持續時間 +${fixateBonus}秒`,
            fr: `Durée de fixation +${fixateBonus}s`,
            br: `Duração da Fixação +${fixateBonus}s`,
            vi: `Thời gian Cố định +${fixateBonus}s`,
            id: `Durasi Fiksasi +${fixateBonus}s`,
            kr: `고정 지속시간 +${fixateBonus}초`,
          },
        },
        tier2_right: {
          title: {
            en: 'Reinforced Thread',
            ru: 'Усиленная нить',
            cz: 'Zesílené vlákno',
            zh: '強化絲線',
            fr: 'Fil renforcé',
            br: 'Fio Reforçado',
            vi: 'Sợi Chỉ Gia Cố',
            id: 'Benang Diperkuat',
            kr: `강화된 실`,
          },
          description: {
            en: `Binding Thread's tether lasts ${staticDurationBonus} longer and its <c:stun>stun is ${stunDurationBonus} longer</c:stun>.`,
            ru: `Длительность привязи Связующей нити увеличена на ${staticDurationBonus}, а её <c:stun>оглушение — на ${stunDurationBonus}</c:stun>`,
            cz: `Uvázání Binding Thread trvá o ${staticDurationBonus} déle a jeho <c:stun>omráčení o ${stunDurationBonus} déle</c:stun>.`,
            zh: `束縛絲線的束縛持續時間增加 ${staticDurationBonus}，<c:stun>暈眩時間增加 ${stunDurationBonus}</c:stun>。`,
            fr: `L'attache du Fil Liant dure ${staticDurationBonus} de plus et son <c:stun>étourdissement dure ${stunDurationBonus} de plus</c:stun>.`,
            br: `A amarração do Fio Amarrador dura ${staticDurationBonus} a mais e seu <c:stun>atordoamento dura ${stunDurationBonus} a mais</c:stun>.`,
            vi: `Sợi dây <c:control>trói</c:control> của Binding Thread kéo dài thêm ${staticDurationBonus} và <c:stun>choáng thêm ${stunDurationBonus}</c:stun>.`,
            id: `Ikatan Binding Thread bertahan ${staticDurationBonus} lebih lama dan <c:stun>stun-nya ${stunDurationBonus} lebih lama</c:stun>.`,
            kr: `결속의 실의 결속 지속시간이 ${staticDurationBonus} 늘어나고, <c:stun>기절 지속시간이 ${stunDurationBonus}</c:stun> 늘어납니다.`,
          },
        },
      }
    }

    case Shared.HEROES.PATROKLOS: {
      const crushingAdvanceSlow = fixed(PatroklosAbilityData.TALENT_T1_LEFT_CRUSHING_ADVANCE_SLOW_MOD * 100, 0)
      const crushingAdvanceDuration = toSec(PatroklosAbilityData.VANGUARD_SHIELD_DURATION)
      const crushingAdvanceBonusStacks = PatroklosAbilityData.TALENT_T1_LEFT_CRUSHING_ADVANCE_BONUS_STACKS

      const vanguardShieldBonus = fixed(PatroklosAbilityData.TALENT_T1_RIGHT_VANGUARD_SHIELD_BONUS * 100, 0)
      const vanguardAllySpeed = fixed(PatroklosAbilityData.TALENT_T1_RIGHT_VANGUARD_ALLY_SPEED_MOD * 100, 0)
      const vanguardAllyAttackSpeed = fixed(
        PatroklosAbilityData.TALENT_T1_RIGHT_VANGUARD_ALLY_ATTACK_SPEED_MOD * 100,
        0
      )
      const vanguardAllyDuration = toSec(PatroklosAbilityData.VANGUARD_SHIELD_DURATION)

      const lastJudgementMaxStacks = PatroklosAbilityData.HEAVENS_FALL_MAX_STACKS
      const lastJudgementBonusStun = toSec(PatroklosAbilityData.TALENT_T2_RIGHT_LAST_JUDGEMENT_BONUS_STUN)
      const lastJudgementTotalStun = toSec(
        PatroklosAbilityData.DIVINE_RECKONING_STUN_PER_STACK * lastJudgementMaxStacks +
          PatroklosAbilityData.TALENT_T2_RIGHT_LAST_JUDGEMENT_BONUS_STUN
      )
      const lastJudgementMaxHealthDamage = fixed(
        PatroklosAbilityData.TALENT_T2_RIGHT_LAST_JUDGEMENT_MAX_HEALTH_DAMAGE_MOD * 100,
        0
      )

      return {
        tier1_left: {
          title: {
            en: 'Crushing Advance',
            ru: 'Сокрушающий натиск',
            cz: 'Drtivý postup',
            br: 'Avanço Esmagador',
            zh: '碾壓推進',
            fr: 'Avancée Écrasante',
            vi: 'Tiến Công Nghiền Nát',
            id: 'Crushing Advance',
            kr: `분쇄의 진격`,
          },
          description: {
            en: `Vanguard also <c:slow>reduces the Movement Speed and Attack Speed of enemies hit by ${crushingAdvanceSlow}%</c:slow> for ${crushingAdvanceDuration}, and applies ${crushingAdvanceBonusStacks} additional stack of Heavens Fall.`,
            ru: `Vanguard также <c:slow>снижает скорость передвижения и атаки задетых врагов на ${crushingAdvanceSlow}%</c:slow> на ${crushingAdvanceDuration} и накладывает ${crushingAdvanceBonusStacks} дополнительный заряд Падения Небес.`,
            cz: `Vanguard nyní také <c:slow>sníží rychlost pohybu a útoku zasažených nepřátel o ${crushingAdvanceSlow}%</c:slow> na ${crushingAdvanceDuration} a aplikuje ${crushingAdvanceBonusStacks} další stack Pádu nebes.`,
            br: `Vanguard também <c:slow>reduz a Velocidade de Movimento e de Ataque dos inimigos atingidos em ${crushingAdvanceSlow}%</c:slow> por ${crushingAdvanceDuration}, e aplica ${crushingAdvanceBonusStacks} acúmulo adicional de Queda dos Céus.`,
            zh: `先鋒現在也會<c:slow>使被擊中的敵人移動速度與攻擊速度降低 ${crushingAdvanceSlow}%</c:slow>，持續 ${crushingAdvanceDuration}，並額外施加 ${crushingAdvanceBonusStacks} 層天罰。`,
            fr: `Avant-garde <c:slow>réduit aussi la vitesse de déplacement et d'attaque des ennemis touchés de ${crushingAdvanceSlow}%</c:slow> pendant ${crushingAdvanceDuration}, et applique ${crushingAdvanceBonusStacks} cumul supplémentaire de Chute des Cieux.`,
            vi: `Tiên Phong giờ cũng <c:slow>giảm ${crushingAdvanceSlow}% tốc độ di chuyển và tốc độ đánh của kẻ địch trúng đòn</c:slow> trong ${crushingAdvanceDuration}, và áp dụng thêm ${crushingAdvanceBonusStacks} cộng dồn Thiên Phạt.`,
            id: `Vanguard kini juga <c:slow>mengurangi Kecepatan Gerak dan Kecepatan Serang musuh yang terkena sebesar ${crushingAdvanceSlow}%</c:slow> selama ${crushingAdvanceDuration}, serta menerapkan ${crushingAdvanceBonusStacks} stack tambahan Heavens Fall.`,
            kr: `선봉은 ${crushingAdvanceDuration} 동안 <c:slow>명중한 적의 이동 속도와 공격 속도를 ${crushingAdvanceSlow}% 감소</c:slow>시키고, 천벌 중첩을 ${crushingAdvanceBonusStacks}회 추가로 적용합니다.`,
          },
        },

        tier1_right: {
          title: {
            en: 'Divine Vanguard',
            ru: 'Божественный авангард',
            cz: 'Božský předvoj',
            br: 'Vanguarda Divina',
            zh: '神聖先鋒',
            fr: 'Avant-garde Divine',
            vi: 'Tiên Phong Thần Thánh',
            id: 'Divine Vanguard',
            kr: `신성한 선봉`,
          },
          description: {
            en: `Vanguard's <c:heal>shield is ${vanguardShieldBonus}% stronger</c:heal>, and grants allies passed through (including Patroklos himself) <c:bonus>${vanguardAllySpeed}% Movement Speed</c:bonus> and <c:bonus>${vanguardAllyAttackSpeed}% Attack Speed</c:bonus> for ${vanguardAllyDuration}.`,
            ru: `Щит Vanguard <c:heal>становится сильнее на ${vanguardShieldBonus}%</c:heal>, а союзники, через которых он проходит (включая самого Патрокла), получают <c:bonus>${vanguardAllySpeed}% скорости передвижения</c:bonus> и <c:bonus>${vanguardAllyAttackSpeed}% скорости атаки</c:bonus> на ${vanguardAllyDuration}`,
            cz: `Štít Vanguard je <c:heal>o ${vanguardShieldBonus}% silnější</c:heal> a spojenci, kterými proletí (včetně samotného Patrokla), získají <c:bonus>${vanguardAllySpeed}% rychlosti pohybu</c:bonus> a <c:bonus>${vanguardAllyAttackSpeed}% rychlosti útoku</c:bonus> na ${vanguardAllyDuration}.`,
            br: `O escudo de Vanguard fica <c:heal>${vanguardShieldBonus}% mais forte</c:heal>, e concede aos aliados atravessados (incluindo o próprio Patroklos) <c:bonus>${vanguardAllySpeed}% de Velocidade de Movimento</c:bonus> e <c:bonus>${vanguardAllyAttackSpeed}% de Velocidade de Ataque</c:bonus> por ${vanguardAllyDuration}.`,
            zh: `先鋒的<c:heal>護盾強度提升 ${vanguardShieldBonus}%</c:heal>，並為被穿過的友軍（包含 Patroklos 自己）提供 <c:bonus>${vanguardAllySpeed}% 移動速度</c:bonus>與<c:bonus>${vanguardAllyAttackSpeed}% 攻擊速度</c:bonus>，持續 ${vanguardAllyDuration}。`,
            fr: `Le bouclier d'Avant-garde est <c:heal>${vanguardShieldBonus}% plus puissant</c:heal>, et accorde aux alliés traversés (y compris Patroklos lui-même) <c:bonus>${vanguardAllySpeed}% de vitesse de déplacement</c:bonus> et <c:bonus>${vanguardAllyAttackSpeed}% de vitesse d'attaque</c:bonus> pendant ${vanguardAllyDuration}.`,
            vi: `Khiên của Tiên Phong <c:heal>mạnh hơn ${vanguardShieldBonus}%</c:heal>, và ban cho đồng minh bị xuyên qua (kể cả bản thân Patroklos) <c:bonus>${vanguardAllySpeed}% tốc độ di chuyển</c:bonus> và <c:bonus>${vanguardAllyAttackSpeed}% tốc độ đánh</c:bonus> trong ${vanguardAllyDuration}.`,
            id: `Perisai Vanguard menjadi <c:heal>${vanguardShieldBonus}% lebih kuat</c:heal>, serta memberikan sekutu yang dilewati (termasuk Patroklos sendiri) <c:bonus>${vanguardAllySpeed}% Kecepatan Gerak</c:bonus> dan <c:bonus>${vanguardAllyAttackSpeed}% Kecepatan Serang</c:bonus> selama ${vanguardAllyDuration}.`,
            kr: `선봉의 <c:heal>보호막이 ${vanguardShieldBonus}% 더 강해지며</c:heal>, 통과한 아군(파트로클로스 자신 포함)에게 ${vanguardAllyDuration} 동안 <c:bonus>이동 속도 ${vanguardAllySpeed}%</c:bonus>와 <c:bonus>공격 속도 ${vanguardAllyAttackSpeed}%</c:bonus>를 부여합니다.`,
          },
        },

        tier2_left: {
          title: {
            en: 'Reinforcement',
            ru: 'Подкрепление',
            cz: 'Posílení',
            br: 'Reforço',
            zh: '增援',
            fr: 'Renforcement',
            vi: 'Tiếp Viện',
            id: 'Reinforcement',
            kr: `증원`,
          },
          description: {
            en: `Divine Reckoning resets the cooldown of Vanguard.`,
            ru: `Divine Reckoning сбрасывает перезарядку Vanguard.`,
            cz: `Divine Reckoning obnoví dobu obnovení Vanguard.`,
            br: `Divine Reckoning reinicia a recarga de Vanguard.`,
            zh: `神聖清算會重置先鋒的冷卻時間。`,
            fr: `Jugement Divin réinitialise le temps de recharge d'Avant-garde.`,
            vi: `Thiên Phán đặt lại thời gian hồi chiêu của Tiên Phong.`,
            id: `Divine Reckoning mereset cooldown Vanguard.`,
            kr: `신성한 심판은 선봉의 재사용 대기시간을 초기화합니다.`,
          },
        },

        tier2_right: {
          title: {
            en: 'Last Judgement',
            ru: 'Последний суд',
            cz: 'Poslední soud',
            br: 'Julgamento Final',
            zh: '最終審判',
            fr: 'Jugement Dernier',
            vi: 'Phán Quyết Cuối Cùng',
            id: 'Last Judgement',
            kr: `최후의 심판`,
          },
          description: {
            en: `Targets hit by Divine Reckoning with the maximum ${lastJudgementMaxStacks} stacks are <c:stun>stunned for ${lastJudgementBonusStun} longer</c:stun> (${lastJudgementTotalStun} total) and take <c:pure>${lastJudgementMaxHealthDamage}% of their max health as bonus pure damage</c:pure>.`,
            ru: `Цели, поражённые Divine Reckoning с максимальными ${lastJudgementMaxStacks} зарядами, <c:stun>оглушаются</c:stun> на ${lastJudgementBonusStun} дольше (всего ${lastJudgementTotalStun}) и получают ${lastJudgementMaxHealthDamage}% от максимального здоровья дополнительным <c:pure>чистым уроном</c:pure>.`,
            cz: `Cíle zasažené Divine Reckoning s maximálními ${lastJudgementMaxStacks} stacky jsou <c:stun>omráčeny</c:stun> o ${lastJudgementBonusStun} déle (celkem ${lastJudgementTotalStun}) a utrpí ${lastJudgementMaxHealthDamage}% svého maximálního zdraví jako bonusové <c:pure>čisté poškození</c:pure>.`,
            br: `Alvos atingidos por Divine Reckoning com o máximo de ${lastJudgementMaxStacks} acúmulos ficam <c:stun>atordoados</c:stun> por ${lastJudgementBonusStun} a mais (${lastJudgementTotalStun} no total) e sofrem <c:pure>${lastJudgementMaxHealthDamage}% de sua vida máxima como dano puro</c:pure> adicional.`,
            zh: `被神聖清算擊中且擁有最大 ${lastJudgementMaxStacks} 層的目標將<c:stun>額外暈眩 ${lastJudgementBonusStun}</c:stun>（總計 ${lastJudgementTotalStun}），並受到<c:pure>其最大生命值 ${lastJudgementMaxHealthDamage}% 的額外真實傷害</c:pure>。`,
            fr: `Les cibles touchées par Jugement Divin avec le maximum de ${lastJudgementMaxStacks} cumuls sont <c:stun>étourdies</c:stun> ${lastJudgementBonusStun} de plus (${lastJudgementTotalStun} au total) et subissent <c:pure>${lastJudgementMaxHealthDamage}% de leur santé maximale en dégâts purs</c:pure> bonus.`,
            vi: `Mục tiêu trúng Thiên Phán với tối đa ${lastJudgementMaxStacks} cộng dồn bị <c:stun>choáng</c:stun> lâu hơn ${lastJudgementBonusStun} (tổng ${lastJudgementTotalStun}) và chịu thêm <c:pure>${lastJudgementMaxHealthDamage}% máu tối đa dưới dạng sát thương thuần túy</c:pure>.`,
            id: `Target yang terkena Divine Reckoning dengan stack maksimal ${lastJudgementMaxStacks} akan <c:stun>stun</c:stun> ${lastJudgementBonusStun} lebih lama (total ${lastJudgementTotalStun}) dan menerima <c:pure>${lastJudgementMaxHealthDamage}% dari HP maksimalnya sebagai bonus pure damage</c:pure>.`,
            kr: `신성한 심판에 최대 ${lastJudgementMaxStacks}중첩으로 명중한 대상은 <c:stun>${lastJudgementBonusStun} 더 길게 기절</c:stun>하며(총 ${lastJudgementTotalStun}), 최대 체력의 <c:pure>${lastJudgementMaxHealthDamage}%만큼 추가 고정 피해</c:pure>를 받습니다.`,
          },
        },
      }
    }

    default:
      return {
        tier1_left: {
          title: {
            en: 'Unknown',
          },
        },
        tier1_right: {
          title: {
            en: 'Unknown',
          },
        },
        tier2_left: {
          title: {
            en: 'Unknown',
          },
        },
        tier2_right: {
          title: {
            en: 'Unknown',
          },
        },
      }
  }
}

export const getDamage = (
  damage: number,
  type: Shared.DamageTypes = Shared.DamageTypes.PHYSICAL,
  baseDamage = 0,
  isPercentage = false
): string => {
  damage = Math.floor(damage)
  baseDamage = fixed(baseDamage, 1)
  const valueSuffix = isPercentage ? '%' : ''

  return `<span class=${
    type === Shared.DamageTypes.PHYSICAL ? 'physical-d' : type === Shared.DamageTypes.PURE ? 'pure-d' : 'ability-d'
  }>${baseDamage > 0 ? baseDamage + (damage > 0 ? '(+' + damage + valueSuffix + ')' : '') : damage > 0 ? damage + valueSuffix : ''}</span>`
}

const getColorizedHeroTalents = (hero: Shared.HEROES): ILocaleHeroTalent =>
  colorizeTalentKeywordsDeep(getHeroTalents(hero))

export default getColorizedHeroTalents

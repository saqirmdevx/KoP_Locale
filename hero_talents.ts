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
      const magicalOrbDoubleHitBonus = fixed(KumihuAbilityData.TALENT_T1_RIGHT_MAGICAL_ORB_DOUBLE_HIT_BONUS * 100, 1)
      const magicalOrbMarkDuration = toSec(KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_DURATION)
      const dashCharges = KumihuAbilityData.TALENT_T2_LEFT_DASH_MAX_CHARGES
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
            en: `Magical Orb Double Hit +${magicalOrbDoubleHitBonus}%`,
            ru: `+${magicalOrbDoubleHitBonus}% к урону Волшебной сферы за двойное попадание`,
            cz: `Magická koule dvojitý zásah +${magicalOrbDoubleHitBonus}%`,
            zh: `魔幻寶珠雙重命中 +${magicalOrbDoubleHitBonus}%`,
            fr: `Double coup de l'Orbe magique +${magicalOrbDoubleHitBonus}%`,
            br: `Acerto Duplo do Orbe Mágico +${magicalOrbDoubleHitBonus}%`,
            vi: `Quả Cầu Phép Thuật trúng hai lần +${magicalOrbDoubleHitBonus}%`,
            id: `Pukulan Ganda Bola Ajaib +${magicalOrbDoubleHitBonus}%`,
            kr: `마법 구슬 이중 명중 +${magicalOrbDoubleHitBonus}%`,
          },
          description: {
            en: `Hitting the same target twice with Magical Orb within ${magicalOrbMarkDuration} deals an extra <c:bonus>${magicalOrbDoubleHitBonus}% bonus damage</c:bonus>.`,
            ru: `Попадание Волшебной сферой по одной цели дважды в течение ${magicalOrbMarkDuration} наносит дополнительно <c:bonus>${magicalOrbDoubleHitBonus}% бонусного урона</c:bonus>.`,
            cz: `Zásah stejného cíle Magickou koulí dvakrát během ${magicalOrbMarkDuration} způsobí navíc <c:bonus>${magicalOrbDoubleHitBonus}% bonusového poškození</c:bonus>.`,
            zh: `在 ${magicalOrbMarkDuration}內以魔幻寶珠擊中同一目標兩次，將額外造成 <c:bonus>${magicalOrbDoubleHitBonus}% 額外傷害</c:bonus>。`,
            fr: `Toucher la même cible deux fois avec l'Orbe magique en ${magicalOrbMarkDuration} inflige <c:bonus>${magicalOrbDoubleHitBonus}% de dégâts bonus</c:bonus> supplémentaires.`,
            br: `Atingir o mesmo alvo duas vezes com o Orbe Mágico em ${magicalOrbMarkDuration} causa <c:bonus>${magicalOrbDoubleHitBonus}% de dano bônus</c:bonus> adicional.`,
            vi: `Trúng cùng một mục tiêu hai lần bằng Quả Cầu Phép Thuật trong ${magicalOrbMarkDuration} gây thêm <c:bonus>${magicalOrbDoubleHitBonus}% sát thương cộng thêm</c:bonus>.`,
            id: `Mengenai target yang sama dua kali dengan Bola Ajaib dalam ${magicalOrbMarkDuration} memberikan tambahan <c:bonus>${magicalOrbDoubleHitBonus}% kerusakan bonus</c:bonus>.`,
            kr: `${magicalOrbMarkDuration} 내에 마법 구슬로 같은 대상을 두 번 명중시키면 <c:bonus>${magicalOrbDoubleHitBonus}%의 추가 피해</c:bonus>를 더 입힙니다.`,
          },
        },
        tier2_left: {
          title: {
            en: `Arcane Dash ${dashCharges} Charges`,
            ru: `Тайный рывок: ${dashCharges} заряда`,
            cz: `Tajemný skok: ${dashCharges} nabití`,
            zh: `奧術衝刺 ${dashCharges} 層充能`,
            fr: `Ruée arcanique : ${dashCharges} charges`,
            br: `Avanço Arcano: ${dashCharges} Cargas`,
            vi: `Phi Thân Ma Pháp ${dashCharges} lượt`,
            id: `Arcane Dash ${dashCharges} Charge`,
            kr: `비전 돌진 충전 ${dashCharges}회`,
          },
          description: {
            en: `Arcane <c:dash>Dash</c:dash> stores ${dashCharges} charges that recharge one at a time.`,
            ru: `Тайный <c:dash>рывок</c:dash> имеет ${dashCharges} заряда, которые восстанавливаются по одному.`,
            cz: `Tajemný <c:dash>skok</c:dash> má ${dashCharges} nabití, která se obnovují postupně po jednom.`,
            zh: `奧術<c:dash>衝刺</c:dash>擁有 ${dashCharges} 層充能，依序逐一恢復。`,
            fr: `La Ruée arcanique possède ${dashCharges} charges qui se rechargent une à la fois.`,
            br: `O <c:dash>Avanço</c:dash> Arcano possui ${dashCharges} cargas que recarregam uma de cada vez.`,
            vi: `Phi Thân Ma Pháp có ${dashCharges} lượt dùng, hồi lại lần lượt từng lượt một.`,
            id: `Arcane <c:dash>Dash</c:dash> memiliki ${dashCharges} charge yang terisi ulang satu per satu.`,
            kr: `비전 <c:dash>돌진</c:dash>은 ${dashCharges}개의 충전을 보유하며 한 번에 하나씩 재충전됩니다.`,
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
      const missingHealthBonus = fixed(SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_MISSING_HP_DMG * 100, 1)
      const corruptedWindCooldown = '-' + toSecRaw(SparrowAbilityData.TALENT_T1_RIGHT_DASH_COOLDOWN)
      const baseEnhancedAttackDamage = fixed(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * 100, 1)
      const enhancedAttackDamage = fixed(
        (SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER +
          SparrowAbilityData.TALENT_T2_LEFT_ENHANCED_ATTACK_DMG_MODIFIER) *
          100,
        1
      )
      const knockUpBonus = toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_ENHANCED_ATTACK_KNOCKBACK_DURATION)
      const baseKnockUpDuration = toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)
      const knockUpDuration = toSec(
        SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION +
          SparrowAbilityData.TALENT_T2_RIGHT_ENHANCED_ATTACK_KNOCKBACK_DURATION
      )
      return {
        tier1_left: {
          title: {
            en: `Demonic Wrath Execution +${missingHealthBonus}%`,
            ru: `Казнь Демонического гнева +${missingHealthBonus}%`,
            cz: `Démonický hněv poprava +${missingHealthBonus}%`,
            zh: `惡魔之怒處決 +${missingHealthBonus}%`,
            fr: `Exécution de la Colère démoniaque +${missingHealthBonus}%`,
            br: `Execução da Ira Demoníaca +${missingHealthBonus}%`,
            vi: `Quỷ Nộ kết liễu +${missingHealthBonus}%`,
            id: `Eksekusi Kemarahan Iblis +${missingHealthBonus}%`,
            kr: `악마의 분노 처형 +${missingHealthBonus}%`,
          },
          description: {
            en: `Demonic Wrath deals an additional <c:bonus>${missingHealthBonus}% of the target's missing health</c:bonus> as damage.`,
            ru: `Демонический гнев дополнительно наносит <c:bonus>${missingHealthBonus}% от потерянного здоровья цели</c:bonus> в виде урона.`,
            cz: `Démonický hněv způsobí navíc <c:bonus>${missingHealthBonus}% ztraceného zdraví cíle</c:bonus> jako poškození.`,
            zh: `惡魔之怒額外造成<c:bonus>目標已損失生命值的 ${missingHealthBonus}%</c:bonus> 傷害。`,
            fr: `La Colère démoniaque inflige en plus <c:bonus>${missingHealthBonus}% de la vie manquante de la cible</c:bonus> en dégâts.`,
            br: `A Ira Demoníaca causa adicionalmente <c:bonus>${missingHealthBonus}% da vida perdida do alvo</c:bonus> como dano.`,
            vi: `Quỷ Nộ gây thêm <c:bonus>${missingHealthBonus}% lượng máu đã mất của mục tiêu</c:bonus> thành sát thương.`,
            id: `Kemarahan Iblis memberikan tambahan <c:bonus>${missingHealthBonus}% dari kesehatan yang hilang target</c:bonus> sebagai kerusakan.`,
            kr: `악마의 분노가 <c:bonus>대상이 잃은 체력의 ${missingHealthBonus}%</c:bonus>만큼 추가 피해를 입힙니다.`,
          },
        },
        tier1_right: {
          title: {
            en: `Corrupted Wind Cooldown ${corruptedWindCooldown}s`,
            ru: `${corruptedWindCooldown} сек. перезарядки Проклятого ветра`,
            cz: `Zkažený vítr obnovení ${corruptedWindCooldown}s`,
            zh: `腐壞之風冷卻 ${corruptedWindCooldown}秒`,
            fr: `Recharge du vent corrompu ${corruptedWindCooldown}s`,
            br: `Recarga do Vento Corrompido ${corruptedWindCooldown}s`,
            vi: `Hồi chiêu Tà Phong ${corruptedWindCooldown}s`,
            id: `Cooldown Angin Tercemar ${corruptedWindCooldown}s`,
            kr: `타락한 바람 재사용 대기시간 ${corruptedWindCooldown}초`,
          },
        },
        tier2_left: {
          title: {
            en: `Enhanced Attack Damage ${enhancedAttackDamage}%`,
            ru: `Урон усиленной атаки ${enhancedAttackDamage}%`,
            cz: `Poškození posíleného útoku ${enhancedAttackDamage}%`,
            zh: `強化攻擊傷害 ${enhancedAttackDamage}%`,
            fr: `Dégâts de l'attaque améliorée ${enhancedAttackDamage}%`,
            br: `Dano do Ataque Aprimorado ${enhancedAttackDamage}%`,
            vi: `Sức mạnh đòn đánh cường hóa ${enhancedAttackDamage}%`,
            id: `Kerusakan Serangan Ditingkatkan ${enhancedAttackDamage}%`,
            kr: `강화 공격 피해 ${enhancedAttackDamage}%`,
          },
          description: {
            en: `Sparrow's enhanced attack deals <c:bonus>${enhancedAttackDamage}% Attack Damage</c:bonus> instead of ${baseEnhancedAttackDamage}%.`,
            ru: `Усиленная атака Спарроу наносит <c:bonus>${enhancedAttackDamage}% от силы атаки</c:bonus> вместо ${baseEnhancedAttackDamage}%.`,
            cz: `Posílený útok Sparrow způsobí <c:bonus>${enhancedAttackDamage}% síly útoku</c:bonus> místo ${baseEnhancedAttackDamage}%.`,
            zh: `史佩羅的強化攻擊造成 <c:bonus>${enhancedAttackDamage}% 攻擊力</c:bonus>的傷害，取代原本的 ${baseEnhancedAttackDamage}%。`,
            fr: `L'attaque améliorée de Sparrow inflige <c:bonus>${enhancedAttackDamage}% des dégâts d'attaque</c:bonus> au lieu de ${baseEnhancedAttackDamage}%.`,
            br: `O ataque aprimorado de Sparrow causa <c:bonus>${enhancedAttackDamage}% do Dano de Ataque</c:bonus> em vez de ${baseEnhancedAttackDamage}%.`,
            vi: `Đòn đánh cường hóa của Sparrow gây <c:bonus>${enhancedAttackDamage}% Sức mạnh Công kích</c:bonus> thay cho ${baseEnhancedAttackDamage}%.`,
            id: `Serangan ditingkatkan Sparrow memberikan <c:bonus>${enhancedAttackDamage}% Attack Damage</c:bonus> alih-alih ${baseEnhancedAttackDamage}%.`,
            kr: `스패로우의 강화 공격이 ${baseEnhancedAttackDamage}% 대신 <c:bonus>공격력의 ${enhancedAttackDamage}%</c:bonus>만큼 피해를 입힙니다.`,
          },
        },
        tier2_right: {
          title: {
            en: `Enhanced Attack Knock-up +${knockUpBonus}s`,
            ru: `Подбрасывание усиленной атаки +${knockUpBonus} сек.`,
            cz: `Vyhození posíleného útoku +${knockUpBonus}s`,
            zh: `強化攻擊擊飛 +${knockUpBonus}秒`,
            fr: `Projection de l'attaque améliorée +${knockUpBonus}s`,
            br: `Arremesso do Ataque Aprimorado +${knockUpBonus}s`,
            vi: `Hất tung đòn đánh cường hóa +${knockUpBonus}s`,
            id: `Lontaran Serangan Ditingkatkan +${knockUpBonus}s`,
            kr: `강화 공격 띄우기 +${knockUpBonus}초`,
          },
          description: {
            en: `Sparrow's enhanced attack <c:stun>knocks up</c:stun> enemies for ${knockUpDuration} instead of ${baseKnockUpDuration}.`,
            ru: `Усиленная атака Спарроу <c:stun>подбрасывает</c:stun> врагов на ${knockUpDuration} вместо ${baseKnockUpDuration}.`,
            cz: `Posílený útok Sparrow <c:stun>vyhodí</c:stun> nepřátele do vzduchu na ${knockUpDuration} místo ${baseKnockUpDuration}.`,
            zh: `史佩羅的強化攻擊<c:stun>擊飛</c:stun>敵人 ${knockUpDuration}，取代原本的 ${baseKnockUpDuration}。`,
            fr: `L'attaque améliorée de Sparrow <c:stun>projette les ennemis en l'air</c:stun> pendant ${knockUpDuration} au lieu de ${baseKnockUpDuration}.`,
            br: `O ataque aprimorado de Sparrow <c:stun>arremessa</c:stun> os inimigos para o ar por ${knockUpDuration} em vez de ${baseKnockUpDuration}.`,
            vi: `Đòn đánh cường hóa của Sparrow <c:stun>hất tung</c:stun> kẻ địch trong ${knockUpDuration} thay cho ${baseKnockUpDuration}.`,
            id: `Serangan ditingkatkan Sparrow <c:stun>melontarkan</c:stun> musuh ke udara selama ${knockUpDuration} alih-alih ${baseKnockUpDuration}.`,
            kr: `스패로우의 강화 공격이 적을 ${baseKnockUpDuration} 대신 ${knockUpDuration} 동안 <c:stun>공중으로 띄워 올립니다</c:stun>.`,
          },
        },
      }
    }

    case Shared.HEROES.ICEAT: {
      const icicleFreezeDuration = toSecRaw(ICeatAbilityData.TALENT_T1_LEFT_ICICLE_FREEZE_DURATION)
      const frozenAttackBonusDamage = fixed(ICeatAbilityData.TALENT_T2_LEFT_FROZEN_ATTACK_BONUS_DAMAGE_MOD * 100, 1)
      const deepFrostStacks = ICeatAbilityData.TALENT_T2_RIGHT_DEEP_FROST_STACKS_TO_FREEZE
      const deepFrostFreezeDuration = toSec(ICeatAbilityData.TALENT_T2_RIGHT_DEEP_FROST_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: `Icicle Bolt Freeze +${icicleFreezeDuration}s`,
            ru: `+${icicleFreezeDuration} сек. к заморозке Сосулек`,
            cz: `Icicle Bolt zmrazení +${icicleFreezeDuration}s`,
            zh: `寒冰飛箭凍結 +${icicleFreezeDuration}秒`,
            fr: `Gel du Trait de glace +${icicleFreezeDuration}s`,
            br: `Congelamento do Gelo do Pico +${icicleFreezeDuration}s`,
            vi: `Đóng băng của Mảnh Băng Tiễn +${icicleFreezeDuration}s`,
            id: `Pembekuan Icicle Bolt +${icicleFreezeDuration}s`,
            kr: `고드름 화살 빙결 +${icicleFreezeDuration}초`,
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
            en: `Frozen Strike +${frozenAttackBonusDamage}% AP`,
            ru: `Ледяной удар +${frozenAttackBonusDamage}% от силы умений`,
            cz: `Mrazivý úder +${frozenAttackBonusDamage}% AP`,
            zh: `凍結打擊 +${frozenAttackBonusDamage}% 法術強度`,
            fr: `Frappe gelée +${frozenAttackBonusDamage}% PA`,
            br: `Golpe Congelado +${frozenAttackBonusDamage}% PH`,
            vi: `Đòn Băng Giá +${frozenAttackBonusDamage}% SMPT`,
            id: `Serangan Beku +${frozenAttackBonusDamage}% AP`,
            kr: `빙결 강타 +${frozenAttackBonusDamage}% 주문력`,
          },
          description: {
            en: `I'Ceat's basic attacks against <c:control>Frozen</c:control> targets deal a bonus <c:magical>${frozenAttackBonusDamage}% of Ability Power as Magical Damage</c:magical>.`,
            ru: `Базовые атаки Ай'сита по <c:control>замороженным</c:control> целям наносят дополнительно <c:magical>${frozenAttackBonusDamage}% от силы умений магическим уроном</c:magical>.`,
            cz: `Základní útoky I'Ceata proti <c:control>zmrazeným</c:control> cílům způsobí bonusových <c:magical>${frozenAttackBonusDamage}% síly schopností jako magické poškození</c:magical>.`,
            zh: `艾希特對<c:control>凍結</c:control>目標的基本攻擊額外造成<c:magical>法術強度 ${frozenAttackBonusDamage}% 的魔法傷害</c:magical>。`,
            fr: `Les attaques de base d'I'Ceat contre des cibles <c:control>gelées</c:control> infligent un bonus de <c:magical>${frozenAttackBonusDamage}% de la puissance des compétences en dégâts magiques</c:magical>.`,
            br: `Os ataques básicos de I'Ceat contra alvos <c:control>congelados</c:control> causam um bônus de <c:magical>${frozenAttackBonusDamage}% do Poder de Habilidade como Dano Mágico</c:magical>.`,
            vi: `Đòn đánh thường của I'Ceat lên mục tiêu bị <c:control>đóng băng</c:control> gây thêm <c:magical>${frozenAttackBonusDamage}% Sức mạnh Phép thuật dưới dạng Sát thương Phép</c:magical>.`,
            id: `Serangan dasar I'Ceat terhadap target yang <c:control>membeku</c:control> memberikan bonus <c:magical>${frozenAttackBonusDamage}% Ability Power sebagai Kerusakan Sihir</c:magical>.`,
            kr: `<c:control>빙결</c:control>된 대상에 대한 아이싯의 기본 공격이 추가로 <c:magical>주문력의 ${frozenAttackBonusDamage}%만큼 마법 피해</c:magical>를 입힙니다.`,
          },
        },
        tier2_right: {
          title: {
            en: 'Deep Frost',
            ru: 'Глубокая стужа',
            cz: 'Hluboký mráz',
            zh: '深層冰霜',
            fr: 'Givre profond',
            br: 'Geada Profunda',
            vi: 'Hàn Băng Thâm Sâu',
            id: 'Embun Beku Dalam',
            kr: `깊은 서리`,
          },
          description: {
            en: `Enemies that stay on the Cold Embrace trail for ${deepFrostStacks} damage ticks are <c:control>frozen</c:control> for ${deepFrostFreezeDuration} on the next tick.`,
            ru: `Враги, остающиеся на ледяном следе Объятий холода в течение ${deepFrostStacks} тиков урона, <c:control>замораживаются</c:control> на ${deepFrostFreezeDuration} со следующим тиком.`,
            cz: `Nepřátelé, kteří zůstanou na ledové stopě Zimního objetí po ${deepFrostStacks} ticích poškození, jsou při dalším ticku <c:control>zmrazeni</c:control> na ${deepFrostFreezeDuration}.`,
            zh: `在冰冷懷抱的冰霜軌跡上停留 ${deepFrostStacks} 次傷害間隔的敵人，會在下一次間隔被<c:control>凍結</c:control> ${deepFrostFreezeDuration}。`,
            fr: `Les ennemis qui restent sur la traînée de l'Étreinte froide pendant ${deepFrostStacks} ticks de dégâts sont <c:control>gelés</c:control> pendant ${deepFrostFreezeDuration} au tick suivant.`,
            br: `Inimigos que permanecem na trilha do Abraço Frio por ${deepFrostStacks} ticks de dano são <c:control>congelados</c:control> por ${deepFrostFreezeDuration} no tick seguinte.`,
            vi: `Kẻ địch đứng trên vệt băng của Hàn Ủng trong ${deepFrostStacks} nhịp sát thương sẽ bị <c:control>đóng băng</c:control> trong ${deepFrostFreezeDuration} ở nhịp tiếp theo.`,
            id: `Musuh yang tetap berada di jejak Pelukan Dingin selama ${deepFrostStacks} tick kerusakan akan <c:control>membeku</c:control> selama ${deepFrostFreezeDuration} pada tick berikutnya.`,
            kr: `차가운 포옹의 얼음 자취 위에 ${deepFrostStacks}회의 피해 틱 동안 머무른 적은 다음 틱에 ${deepFrostFreezeDuration} 동안 <c:control>빙결</c:control>됩니다.`,
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
              `Reduces the recharge time of Astral Step by ${astralStepCooldown} \n` +
              'Enhanced Astral Step no longer consumes her enhanced state.',
            ru:
              `Перезарядка Астрального шага снижается на ${astralStepCooldown} \n` +
              'Усиленный Астральный шаг больше не снимает усиленное состояние.',
            cz:
              `Sníží obnovení Astrálního kroku o ${astralStepCooldown} \n` +
              'Posílený Astrální krok již nespotřebuje posílený stav.',
            zh: `減少星光飛躍冷卻時間 ${astralStepCooldown} \n` + '強化後的星光飛躍不再移除強化狀態。',
            fr:
              `Réduit le temps de recharge du Pas astral de ${astralStepCooldown} \n` +
              "Le Pas astral amélioré ne consomme plus l'état amélioré.",
            br:
              `Reduz o tempo de recarga do Passo Astral em ${astralStepCooldown} \n` +
              'O Passo Astral aprimorado não consome mais o estado aprimorado.',
            vi:
              `Giảm thời gian hồi chiêu của Tinh Bộ bởi ${astralStepCooldown} \n` +
              'Tinh Bộ cường hóa không còn tiêu hao trạng thái cường hóa.',
            id:
              `Mengurangi cooldown Langkah Astral sebesar ${astralStepCooldown} \n` +
              'Langkah Astral yang Ditingkatkan tidak lagi menghapus status enhanced.',
            kr:
              `성계의 발걸음의 재사용 대기시간을 ${astralStepCooldown} 감소시킵니다. \n` +
              '강화된 성계의 발걸음은 더 이상 강화 상태를 소모하지 않습니다.',
          },
        },
      }
    }

    case Shared.HEROES.BELLE: {
      const floralRejuvenationHealBonus = fixed(BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_HEAL * 100)
      const pricklyVineStunBonus = toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)
      const pricklyAttachDuration = toSecRaw(BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION)
      const floralAmbushDurationBonus = toSecRaw(BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_DOT_DURATION)
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
            en: `Floral Rejuvenation Healing +${floralRejuvenationHealBonus}%`,
            ru: `Лечение Цветочного оздоровления +${floralRejuvenationHealBonus}%`,
            cz: `Květinová obnova léčení +${floralRejuvenationHealBonus}%`,
            zh: `療育鮮花治療 +${floralRejuvenationHealBonus}%`,
            fr: `Soins du Rajeunissement floral +${floralRejuvenationHealBonus}%`,
            br: `Cura do Rejuvenescimento Floral +${floralRejuvenationHealBonus}%`,
            vi: `Hồi máu Thiên Nhiên Tái Sinh +${floralRejuvenationHealBonus}%`,
            id: `Penyembuhan Pemulihan Floral +${floralRejuvenationHealBonus}%`,
            kr: `꽃의 회복 치유량 +${floralRejuvenationHealBonus}%`,
          },
          description: {
            en: `Floral Rejuvenation <c:heal>heals nearby allies for an additional ${floralRejuvenationHealBonus}% of Floral Ambush's damage</c:heal>.`,
            ru: `Цветочное оздоровление <c:heal>лечит ближайших союзников дополнительно на ${floralRejuvenationHealBonus}% от урона Цветочной ловушки</c:heal>.`,
            cz: `Květinová obnova <c:heal>léčí nedaleké spojence navíc za ${floralRejuvenationHealBonus}% poškození Květinového útoku</c:heal>.`,
            zh: `療育鮮花<c:heal>額外為附近盟友治癒鮮花伏擊傷害的 ${floralRejuvenationHealBonus}%</c:heal>。`,
            fr: `Le Rajeunissement floral <c:heal>soigne les alliés proches de ${floralRejuvenationHealBonus}% supplémentaires des dégâts de l'Embuscade florale</c:heal>.`,
            br: `O Rejuvenescimento Floral <c:heal>cura os aliados próximos em ${floralRejuvenationHealBonus}% adicionais do dano da Emboscada Floral</c:heal>.`,
            vi: `Thiên Nhiên Tái Sinh <c:heal>hồi máu thêm cho đồng minh gần đó ${floralRejuvenationHealBonus}% sát thương của Hoa Phục Kích</c:heal>.`,
            id: `Pemulihan Floral <c:heal>menyembuhkan sekutu terdekat tambahan ${floralRejuvenationHealBonus}% dari kerusakan Emboscada Floral</c:heal>.`,
            kr: `꽃의 회복이 <c:heal>주변 아군을 꽃의 매복 피해량의 ${floralRejuvenationHealBonus}%만큼 추가로 회복</c:heal>시킵니다.`,
          },
        },
        tier2_left: {
          title: {
            en: `Floral Ambush Duration +${floralAmbushDurationBonus}s`,
            ru: `Длительность Цветочной ловушки +${floralAmbushDurationBonus} сек.`,
            cz: `Květinový útok trvání +${floralAmbushDurationBonus}s`,
            zh: `鮮花伏擊持續時間 +${floralAmbushDurationBonus}秒`,
            fr: `Durée de l'Embuscade florale +${floralAmbushDurationBonus}s`,
            br: `Duração da Emboscada Floral +${floralAmbushDurationBonus}s`,
            vi: `Thời lượng Hoa Phục Kích +${floralAmbushDurationBonus}s`,
            id: `Durasi Emboscada Floral +${floralAmbushDurationBonus}s`,
            kr: `꽃의 매복 지속시간 +${floralAmbushDurationBonus}초`,
          },
          description: {
            en: `Floral Ambush's seed bombs last ${floralAmbushDurationBonus}s longer, dealing their damage over time for longer and <c:bonus>increasing the total damage</c:bonus>.`,
            ru: `Цветочные бомбы Цветочной ловушки держатся на ${floralAmbushDurationBonus} сек. дольше, дольше нанося периодический урон и <c:bonus>увеличивая общий урон</c:bonus>.`,
            cz: `Semenné bomby Květinového útoku vydrží o ${floralAmbushDurationBonus}s déle, déle způsobují postupné poškození a <c:bonus>zvyšují celkové poškození</c:bonus>.`,
            zh: `鮮花伏擊的種子炸彈持續時間延長 ${floralAmbushDurationBonus}秒，持續傷害時間更長，<c:bonus>提高總傷害</c:bonus>。`,
            fr: `Les bombes de graines de l'Embuscade florale durent ${floralAmbushDurationBonus}s de plus, infligeant leurs dégâts sur la durée plus longtemps et <c:bonus>augmentant les dégâts totaux</c:bonus>.`,
            br: `As bombas de semente da Emboscada Floral duram ${floralAmbushDurationBonus}s a mais, causando dano ao longo do tempo por mais tempo e <c:bonus>aumentando o dano total</c:bonus>.`,
            vi: `Bom hạt của Hoa Phục Kích tồn tại lâu hơn ${floralAmbushDurationBonus}s, gây sát thương theo thời gian lâu hơn và <c:bonus>tăng tổng sát thương</c:bonus>.`,
            id: `Bom benih Emboscada Floral bertahan ${floralAmbushDurationBonus}s lebih lama, memberikan kerusakan berkelanjutan lebih lama dan <c:bonus>meningkatkan total kerusakan</c:bonus>.`,
            kr: `꽃의 매복 씨앗 폭탄이 ${floralAmbushDurationBonus}초 더 오래 지속되어 지속 피해를 더 길게 입히고 <c:bonus>총 피해량이 증가</c:bonus>합니다.`,
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
      const preciseShotRange = fixed(FlinAbilityData.TALENT_T1_LEFT_PRECISE_SHOT_RANGE * 100)
      const sharpshooterPerStep = fixed(FlinAbilityData.TALENT_T1_RIGHT_DISTANCE_DAMAGE_PER_STEP * 100)
      const sharpshooterStep = FlinAbilityData.TALENT_T1_RIGHT_DISTANCE_DAMAGE_STEP
      const sharpshooterMax = fixed(FlinAbilityData.TALENT_T1_RIGHT_DISTANCE_DAMAGE_MAX * 100)
      const deadeyeBase = fixed(FlinAbilityData.PRECISE_SHOT_DAMAGE_SCALE_MAX * 100)
      const deadeyeMax = fixed(
        (FlinAbilityData.PRECISE_SHOT_DAMAGE_SCALE_MAX + FlinAbilityData.TALENT_T2_LEFT_PRECISE_SHOT_DAMAGE_SCALE_MAX) *
          100
      )
      const backstepCharges = FlinAbilityData.TALENT_T2_RIGHT_BACKSTEP_MAX_CHARGES
      return {
        tier1_left: {
          title: {
            en: `Precise Shot Range +${preciseShotRange}%`,
            ru: `Дальность Меткого выстрела +${preciseShotRange}%`,
            cz: `Dosah Přesné střely +${preciseShotRange}%`,
            zh: `精準射擊射程 +${preciseShotRange}%`,
            fr: `Portée de Tir de précision +${preciseShotRange}%`,
            br: `Alcance do Tiro Preciso +${preciseShotRange}%`,
            vi: `Tầm của Phát Bắn Chính Xác +${preciseShotRange}%`,
            id: `Jangkauan Precise Shot +${preciseShotRange}%`,
            kr: `정밀 사격 사거리 +${preciseShotRange}%`,
          },
          description: {
            en: `Precise Shot's arrow flies <c:bonus>${preciseShotRange}% further</c:bonus>.`,
            ru: `Стрела Меткого выстрела летит <c:bonus>на ${preciseShotRange}% дальше</c:bonus>.`,
            cz: `Šíp Přesné střely letí <c:bonus>o ${preciseShotRange}% dál</c:bonus>.`,
            zh: `精準射擊的箭矢飛行距離<c:bonus>增加 ${preciseShotRange}%</c:bonus>。`,
            fr: `La flèche de Tir de précision vole <c:bonus>${preciseShotRange}% plus loin</c:bonus>.`,
            br: `A flecha do Tiro Preciso voa <c:bonus>${preciseShotRange}% mais longe</c:bonus>.`,
            vi: `Mũi tên của Phát Bắn Chính Xác bay <c:bonus>xa hơn ${preciseShotRange}%</c:bonus>.`,
            id: `Panah Precise Shot terbang <c:bonus>${preciseShotRange}% lebih jauh</c:bonus>.`,
            kr: `정밀 사격의 화살이 <c:bonus>${preciseShotRange}% 더 멀리</c:bonus> 날아갑니다.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Sharpshooter',
            ru: 'Снайпер',
            cz: 'Ostrostřelec',
            zh: '神射手',
            fr: "Tireur d'élite",
            br: 'Atirador de Elite',
            vi: 'Thiện Xạ',
            id: 'Penembak Jitu',
            kr: '명사수',
          },
          description: {
            en: `Flin's Basic Attacks deal <c:bonus>${sharpshooterPerStep}% more damage per ${sharpshooterStep}px</c:bonus> of horizontal distance to the target, up to <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            ru: `Базовые атаки Флина наносят <c:bonus>на ${sharpshooterPerStep}% больше урона за каждые ${sharpshooterStep} пикселей</c:bonus> горизонтального расстояния до цели, максимум <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            cz: `Základní útoky Flina způsobí <c:bonus>o ${sharpshooterPerStep}% vyšší poškození za každých ${sharpshooterStep}px</c:bonus> vodorovné vzdálenosti k cíli, až <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            zh: `弗林的基本攻擊每拉開 ${sharpshooterStep} 像素水平距離便<c:bonus>提高 ${sharpshooterPerStep}% 傷害</c:bonus>，最多 <c:bonus>${sharpshooterMax}%</c:bonus>。`,
            fr: `Les attaques de base de Flin infligent <c:bonus>${sharpshooterPerStep}% de dégâts en plus par ${sharpshooterStep}px</c:bonus> de distance horizontale jusqu'à la cible, jusqu'à <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            br: `Os ataques básicos de Flin causam <c:bonus>${sharpshooterPerStep}% mais dano a cada ${sharpshooterStep}px</c:bonus> de distância horizontal até o alvo, até <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            vi: `Đòn đánh thường của Flin gây <c:bonus>thêm ${sharpshooterPerStep}% sát thương mỗi ${sharpshooterStep}px</c:bonus> khoảng cách ngang tới mục tiêu, tối đa <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            id: `Serangan Dasar Flin memberikan <c:bonus>${sharpshooterPerStep}% kerusakan lebih besar per ${sharpshooterStep}px</c:bonus> jarak horizontal ke target, hingga <c:bonus>${sharpshooterMax}%</c:bonus>.`,
            kr: `플린의 기본 공격이 대상과의 수평 거리 ${sharpshooterStep}px마다 <c:bonus>${sharpshooterPerStep}%의 추가 피해</c:bonus>를 입히며, 최대 <c:bonus>${sharpshooterMax}%</c:bonus>까지 증가합니다.`,
          },
        },
        tier2_left: {
          title: {
            en: 'Deadeye',
            ru: 'Верный глаз',
            cz: 'Sokolí oko',
            zh: '鷹眼射手',
            fr: 'Œil de lynx',
            br: 'Olho de Águia',
            vi: 'Mắt Diều Hâu',
            id: 'Mata Elang',
            kr: '매의 눈',
          },
          description: {
            en: `Precise Shot's maximum distance bonus rises from <c:bonus>${deadeyeBase}%</c:bonus> to <c:bonus>${deadeyeMax}%</c:bonus>.`,
            ru: `Максимальный бонус Меткого выстрела за дистанцию возрастает с <c:bonus>${deadeyeBase}%</c:bonus> до <c:bonus>${deadeyeMax}%</c:bonus>.`,
            cz: `Maximální bonus Přesné střely za vzdálenost roste z <c:bonus>${deadeyeBase}%</c:bonus> na <c:bonus>${deadeyeMax}%</c:bonus>.`,
            zh: `精準射擊的最大距離加成由 <c:bonus>${deadeyeBase}%</c:bonus> 提升至 <c:bonus>${deadeyeMax}%</c:bonus>。`,
            fr: `Le bonus de distance maximal de Tir de précision passe de <c:bonus>${deadeyeBase}%</c:bonus> à <c:bonus>${deadeyeMax}%</c:bonus>.`,
            br: `O bônus máximo de distância do Tiro Preciso aumenta de <c:bonus>${deadeyeBase}%</c:bonus> para <c:bonus>${deadeyeMax}%</c:bonus>.`,
            vi: `Hệ số tối đa theo khoảng cách của Phát Bắn Chính Xác tăng từ <c:bonus>${deadeyeBase}%</c:bonus> lên <c:bonus>${deadeyeMax}%</c:bonus>.`,
            id: `Bonus jarak maksimum Precise Shot naik dari <c:bonus>${deadeyeBase}%</c:bonus> menjadi <c:bonus>${deadeyeMax}%</c:bonus>.`,
            kr: `정밀 사격의 최대 거리 보너스가 <c:bonus>${deadeyeBase}%</c:bonus>에서 <c:bonus>${deadeyeMax}%</c:bonus>로 증가합니다.`,
          },
        },
        tier2_right: {
          title: {
            en: `Backstep ${backstepCharges} Charges`,
            ru: `Отскок: ${backstepCharges} заряда`,
            cz: `Úkrok vzad ${backstepCharges} nabití`,
            zh: `躍退 ${backstepCharges} 次充能`,
            fr: `Pas en arrière ${backstepCharges} charges`,
            br: `Passo Atrás ${backstepCharges} cargas`,
            vi: `Bước Lùi ${backstepCharges} lần dùng`,
            id: `Langkah Mundur ${backstepCharges} Charge`,
            kr: `백스텝 ${backstepCharges}회 충전`,
          },
          description: {
            en: `Backstep stores ${backstepCharges} charges that recharge one at a time.`,
            ru: `Отскок хранит ${backstepCharges} заряда, которые восстанавливаются по очереди.`,
            cz: `Úkrok vzad uchovává ${backstepCharges} nabití, která se obnovují postupně.`,
            zh: `躍退可儲存 ${backstepCharges} 次充能，並逐一回復。`,
            fr: `Pas en arrière stocke ${backstepCharges} charges qui se rechargent une à une.`,
            br: `Passo Atrás armazena ${backstepCharges} cargas que recarregam uma de cada vez.`,
            vi: `Bước Lùi tích trữ ${backstepCharges} lần dùng, hồi lại lần lượt từng lần một.`,
            id: `Langkah Mundur menyimpan ${backstepCharges} charge yang terisi ulang satu per satu.`,
            kr: `백스텝은 ${backstepCharges}개의 충전을 보유하며 한 번에 하나씩 재충전됩니다.`,
          },
        },
      }
    }

    case Shared.HEROES.THOMAS: {
      const carrotStun = toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)
      const bleedDamage = fixed(ThomasAbilityData.TALENT_T1_LEFT_BLEED_DAMAGE * 100, 1)
      const bleedAttackCount = ThomasAbilityData.TALENT_T2_LEFT_BLEED_ATTACK_COUNT
      const baseBleedAttackCount = ThomasAbilityData.BLEED_ATTACK_COUNT
      return {
        tier1_left: {
          title: {
            en: `Bleed Attack Damage ${bleedDamage}%`,
            ru: `Урон Кровоточащей атаки ${bleedDamage}%`,
            cz: `Poškození Krvácejícího útoku ${bleedDamage}%`,
            zh: `流血攻擊傷害 ${bleedDamage}%`,
            fr: `Dégâts de l'Attaque sanglante ${bleedDamage}%`,
            br: `Dano do Ataque Sangrento ${bleedDamage}%`,
            vi: `Sát thương Đòn Chảy Máu ${bleedDamage}%`,
            id: `Kerusakan Serangan Berdarah ${bleedDamage}%`,
            kr: `출혈 공격 피해 ${bleedDamage}%`,
          },
          description: {
            en: `Bleed Attack deals <c:physical>${bleedDamage}% of Thomas' Attack Damage</c:physical> over its duration.`,
            ru: `Кровоточащая атака наносит <c:physical>${bleedDamage}% от силы атаки Томаса</c:physical> за время своего действия.`,
            cz: `Krvácející útok způsobí <c:physical>${bleedDamage}% Thomasova útoku</c:physical> po dobu svého trvání.`,
            zh: `流血攻擊在持續時間內造成<c:physical>湯瑪士攻擊力 ${bleedDamage}% 的傷害</c:physical>。`,
            fr: `L'Attaque sanglante inflige <c:physical>${bleedDamage}% des dégâts d'attaque de Thomas</c:physical> sur sa durée.`,
            br: `O Ataque Sangrento causa <c:physical>${bleedDamage}% do Dano de Ataque de Thomas</c:physical> ao longo de sua duração.`,
            vi: `Đòn Chảy Máu gây <c:physical>${bleedDamage}% Sát thương Tấn công của Thomas</c:physical> trong suốt thời gian hiệu lực.`,
            id: `Serangan Berdarah memberikan <c:physical>${bleedDamage}% Kerusakan Serangan Thomas</c:physical> selama durasinya.`,
            kr: `출혈 공격이 지속시간 동안 <c:physical>토마스 공격력의 ${bleedDamage}%</c:physical>만큼 피해를 입힙니다.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Shuriken Toss Bleed',
            ru: 'Кровоточащий бросок сюрикена',
            cz: 'Krvácející hod shurikenem',
            zh: '手裏劍投擲流血',
            fr: 'Lancer de shuriken sanglant',
            br: 'Sangramento do Arremesso de Shuriken',
            vi: 'Shuriken Chảy Máu',
            id: 'Pendarahan Shuriken Toss',
            kr: `표창 던지기 출혈`,
          },
          description: {
            en: `Each Shuriken Toss pass that hits an enemy hero adds one Bleed Attack stack.`,
            ru: `Каждый пролёт Броска сюрикена, попавший по вражескому герою, добавляет один заряд Кровоточащей атаки.`,
            cz: `Každý průlet Hodu shurikenem, který zasáhne nepřátelského hrdinu, přidá jeden stack Krvácejícího útoku.`,
            zh: `手裏劍投擲每次經過命中敵方英雄時，疊加一層流血攻擊。`,
            fr: `Chaque passage du Lancer de shuriken qui touche un héros ennemi ajoute un cumul d'Attaque sanglante.`,
            br: `Cada passagem do Arremesso de Shuriken que atinge um herói inimigo adiciona um acúmulo de Ataque Sangrento.`,
            vi: `Mỗi lượt Shuriken bay qua trúng tướng địch sẽ cộng thêm một điểm cộng dồn Đòn Chảy Máu.`,
            id: `Setiap lintasan Shuriken Toss yang mengenai hero musuh menambahkan satu stack Serangan Berdarah.`,
            kr: `표창 던지기가 적 영웅에게 명중할 때마다(던질 때와 돌아올 때 각각) 출혈 공격 중첩이 1 추가됩니다.`,
          },
        },
        tier2_left: {
          title: {
            en: 'Deep Wounds',
            ru: 'Глубокие раны',
            cz: 'Hluboké rány',
            zh: '深度創傷',
            fr: 'Blessures profondes',
            br: 'Feridas Profundas',
            vi: 'Vết Thương Sâu',
            id: 'Luka Dalam',
            kr: `깊은 상처`,
          },
          description: {
            en: `Bleed Attack triggers after ${bleedAttackCount} basic attacks instead of ${baseBleedAttackCount}.`,
            ru: `Кровоточащая атака срабатывает после ${bleedAttackCount} базовых атак вместо ${baseBleedAttackCount}.`,
            cz: `Krvácející útok se spustí po ${bleedAttackCount} základních útocích místo ${baseBleedAttackCount}.`,
            zh: `流血攻擊在 ${bleedAttackCount} 次基本攻擊後觸發，而非 ${baseBleedAttackCount} 次。`,
            fr: `L'Attaque sanglante se déclenche après ${bleedAttackCount} attaques de base au lieu de ${baseBleedAttackCount}.`,
            br: `O Ataque Sangrento é acionado após ${bleedAttackCount} ataques básicos em vez de ${baseBleedAttackCount}.`,
            vi: `Đòn Chảy Máu kích hoạt sau ${bleedAttackCount} đòn đánh thường thay vì ${baseBleedAttackCount}.`,
            id: `Serangan Berdarah terpicu setelah ${bleedAttackCount} serangan dasar alih-alih ${baseBleedAttackCount}.`,
            kr: `출혈 공격이 기본 공격 ${baseBleedAttackCount}회가 아닌 ${bleedAttackCount}회 후에 발동합니다.`,
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
      const secondBulletBonusDamage = fixed(ArelAbilityData.TALENT_T1_LEFT_ENH_DAMAGE_MOD * 100)
      const secondBulletDamage = fixed(ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD * 100)
      const secondBulletUpgradedDamage = fixed(
        (ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD + ArelAbilityData.TALENT_T1_LEFT_ENH_DAMAGE_MOD) * 100
      )
      const tumbleCharges = ArelAbilityData.TALENT_T2_LEFT_TUMBLE_MAX_CHARGES
      const freezingTrapDuration = toSec(ArelAbilityData.FREEZING_TRAP_DURATION)
      const freezingTrapFreezeDuration = toSec(ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: `Second Bullet Damage +${secondBulletBonusDamage}%`,
            ru: `+${secondBulletBonusDamage}% к урону второй пули`,
            cz: `Poškození druhé kulky +${secondBulletBonusDamage}%`,
            zh: `第二發子彈傷害 +${secondBulletBonusDamage}%`,
            fr: `Dégâts de la seconde balle +${secondBulletBonusDamage}%`,
            br: `Dano da Segunda Bala +${secondBulletBonusDamage}%`,
            vi: `Sát thương Viên Đạn Thứ Hai +${secondBulletBonusDamage}%`,
            id: `Kerusakan Peluru Kedua +${secondBulletBonusDamage}%`,
            kr: `두 번째 총알 피해 +${secondBulletBonusDamage}%`,
          },
          description: {
            en: `The loaded bullet deals <c:bonus>${secondBulletUpgradedDamage}% Attack Damage</c:bonus> instead of ${secondBulletDamage}%.`,
            ru: `Заряженная пуля наносит <c:bonus>${secondBulletUpgradedDamage}% силы атаки</c:bonus> вместо ${secondBulletDamage}%.`,
            cz: `Nabitá kulka způsobí <c:bonus>${secondBulletUpgradedDamage}% útočného poškození</c:bonus> místo ${secondBulletDamage}%.`,
            zh: `裝填的子彈造成 <c:bonus>${secondBulletUpgradedDamage}% 攻擊力</c:bonus>的傷害，而非 ${secondBulletDamage}%。`,
            fr: `La balle chargée inflige <c:bonus>${secondBulletUpgradedDamage}% des dégâts d'attaque</c:bonus> au lieu de ${secondBulletDamage}%.`,
            br: `A bala carregada causa <c:bonus>${secondBulletUpgradedDamage}% de Dano de Ataque</c:bonus> em vez de ${secondBulletDamage}%.`,
            vi: `Viên đạn được nạp gây <c:bonus>${secondBulletUpgradedDamage}% Sát thương Tấn công</c:bonus> thay vì ${secondBulletDamage}%.`,
            id: `Peluru yang dimuat memberikan <c:bonus>${secondBulletUpgradedDamage}% Attack Damage</c:bonus> alih-alih ${secondBulletDamage}%.`,
            kr: `장전된 총알이 ${secondBulletDamage}% 대신 <c:bonus>공격력의 ${secondBulletUpgradedDamage}%</c:bonus>에 해당하는 피해를 입힙니다.`,
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
            en: `Tumble ${tumbleCharges} Charges`,
            ru: `Кувырок: ${tumbleCharges} заряда`,
            cz: `Tumble: ${tumbleCharges} nabití`,
            zh: `翻跟斗 ${tumbleCharges} 層充能`,
            fr: `Tumble : ${tumbleCharges} charges`,
            br: `Tumble: ${tumbleCharges} Cargas`,
            vi: `Nhào Lộn ${tumbleCharges} lượt`,
            id: `Tumble ${tumbleCharges} Charge`,
            kr: `구르기 충전 ${tumbleCharges}회`,
          },
          description: {
            en: `Tumble stores ${tumbleCharges} charges that recharge one at a time.`,
            ru: `Кувырок имеет ${tumbleCharges} заряда, которые восстанавливаются по одному.`,
            cz: `Tumble má ${tumbleCharges} nabití, která se obnovují postupně po jednom.`,
            zh: `翻跟斗擁有 ${tumbleCharges} 層充能，依序逐一恢復。`,
            fr: `Tumble possède ${tumbleCharges} charges qui se rechargent une à la fois.`,
            br: `Tumble possui ${tumbleCharges} cargas que recarregam uma de cada vez.`,
            vi: `Nhào Lộn có ${tumbleCharges} lượt dùng, hồi lại lần lượt từng lượt một.`,
            id: `Tumble memiliki ${tumbleCharges} charge yang terisi ulang satu per satu.`,
            kr: `구르기는 ${tumbleCharges}개의 충전을 보유하며 한 번에 하나씩 재충전됩니다.`,
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

    case Shared.HEROES.HAZEL: {
      const stoneSkinMovementSpeed = fixed(HazelAbilityData.TALENT_T1_RIGHT_STONE_SKIN_MOVEMENT_SPEED * 100, 1)
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
            en: `Stone Skin Movement Speed +${stoneSkinMovementSpeed}%`,
            ru: `+${stoneSkinMovementSpeed}% к скорости передвижения от Каменной кожи`,
            cz: `Kamenná kůže rychlost pohybu +${stoneSkinMovementSpeed}%`,
            br: `Velocidade de Movimento da Pele de Pedra +${stoneSkinMovementSpeed}%`,
            fr: `Vitesse de déplacement de Peau de pierre +${stoneSkinMovementSpeed}%`,
            zh: `石膚移動速度 +${stoneSkinMovementSpeed}%`,
            vi: `Tốc độ Di chuyển Da Đá +${stoneSkinMovementSpeed}%`,
            id: `Kecepatan Gerak Kulit Batu +${stoneSkinMovementSpeed}%`,
            kr: `돌 피부 이동 속도 +${stoneSkinMovementSpeed}%`,
          },
          description: {
            en: `Stone Skin also grants <c:bonus>${stoneSkinMovementSpeed}% Movement Speed</c:bonus>.`,
            ru: `Каменная кожа также даёт <c:bonus>${stoneSkinMovementSpeed}% скорости передвижения</c:bonus>.`,
            cz: `Kamenná kůže navíc poskytuje <c:bonus>${stoneSkinMovementSpeed}% rychlosti pohybu</c:bonus>.`,
            br: `Pele de Pedra também concede <c:bonus>${stoneSkinMovementSpeed}% de Velocidade de Movimento</c:bonus>.`,
            fr: `La Peau de pierre accorde aussi <c:bonus>${stoneSkinMovementSpeed}% de vitesse de déplacement</c:bonus>.`,
            zh: `石膚額外提供 <c:bonus>${stoneSkinMovementSpeed}% 移動速度</c:bonus>。`,
            vi: `Da Đá còn cấp thêm <c:bonus>${stoneSkinMovementSpeed}% Tốc độ Di chuyển</c:bonus>.`,
            id: `Kulit Batu juga memberikan <c:bonus>${stoneSkinMovementSpeed}% Kecepatan Gerak</c:bonus>.`,
            kr: `돌 피부는 <c:bonus>${stoneSkinMovementSpeed}%의 이동 속도</c:bonus>도 부여합니다.`,
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
      const rapidFireMovementSpeed = fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_MOVEMENT_SPEED * 100)
      const gunsBlazingBaseReduction = toSecRaw(FoxyAbilityData.GUNS_BLAZING_COOLDOWN_REDUCTION)
      const gunsBlazingTalentReduction = toSecRaw(FoxyAbilityData.TALENT_T2_LEFT_GUNS_BLAZING_COOLDOWN_REDUCTION)
      const gunsBlazingTotalReduction = toSecRaw(
        FoxyAbilityData.GUNS_BLAZING_COOLDOWN_REDUCTION + FoxyAbilityData.TALENT_T2_LEFT_GUNS_BLAZING_COOLDOWN_REDUCTION
      )
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
            en: `Guns Blazing +${gunsBlazingTalentReduction}s`,
            ru: `Шквальный огонь +${gunsBlazingTalentReduction}с`,
            cz: `Palba ze všech hlavní +${gunsBlazingTalentReduction}s`,
            zh: `火力全開 +${gunsBlazingTalentReduction}秒`,
            fr: `Feu nourri +${gunsBlazingTalentReduction}s`,
            br: `Fogo Cerrado +${gunsBlazingTalentReduction}s`,
            vi: `Súng Rực Lửa +${gunsBlazingTalentReduction}s`,
            id: `Tembakan Membara +${gunsBlazingTalentReduction}s`,
            kr: `불타는 총구 +${gunsBlazingTalentReduction}초`,
          },
          description: {
            en: `Guns Blazing reduces both cooldowns by ${gunsBlazingTotalReduction}s instead of ${gunsBlazingBaseReduction}s.`,
            ru: `Шквальный огонь сокращает обе перезарядки на ${gunsBlazingTotalReduction}с вместо ${gunsBlazingBaseReduction}с.`,
            cz: `Palba ze všech hlavní zkracuje obě obnovení o ${gunsBlazingTotalReduction}s místo ${gunsBlazingBaseReduction}s.`,
            zh: `火力全開改為減少兩個技能 ${gunsBlazingTotalReduction} 秒冷卻時間，而非 ${gunsBlazingBaseReduction} 秒。`,
            fr: `Feu nourri réduit les deux temps de recharge de ${gunsBlazingTotalReduction}s au lieu de ${gunsBlazingBaseReduction}s.`,
            br: `Fogo Cerrado reduz as duas recargas em ${gunsBlazingTotalReduction}s em vez de ${gunsBlazingBaseReduction}s.`,
            vi: `Súng Rực Lửa giảm cả hai thời gian hồi chiêu ${gunsBlazingTotalReduction}s thay vì ${gunsBlazingBaseReduction}s.`,
            id: `Tembakan Membara mengurangi kedua cooldown sebesar ${gunsBlazingTotalReduction}s alih-alih ${gunsBlazingBaseReduction}s.`,
            kr: `불타는 총구가 두 재사용 대기시간을 ${gunsBlazingBaseReduction}초 대신 ${gunsBlazingTotalReduction}초 감소시킵니다.`,
          },
        },
        tier2_right: {
          title: {
            en: 'Rapid Fire Mobility',
            ru: 'Мобильный Беглый огонь',
            cz: 'Mobilní Rapid Fire',
            zh: '極速射擊機動',
            fr: 'Mobilité de Feu Rapide',
            br: 'Mobilidade do Fogo Rápido',
            vi: 'Tốc Xạ Cơ Động',
            id: 'Mobilitas Rapid Fire',
            kr: `속사 기동성`,
          },
          description: {
            en: `Foxy is no longer slowed while firing Rapid Fire and instead gains <c:bonus>${rapidFireMovementSpeed}% Movement Speed</c:bonus> during it.`,
            ru: `Фокси больше не замедляется во время Беглого огня и вместо этого получает <c:bonus>${rapidFireMovementSpeed}% скорости передвижения</c:bonus> на его время.`,
            cz: `Foxy již není během Rapid Fire zpomalen a místo toho po jeho dobu získá <c:bonus>${rapidFireMovementSpeed}% rychlosti pohybu</c:bonus>.`,
            zh: `弗克西在極速射擊期間不再被減速，並改為獲得 <c:bonus>${rapidFireMovementSpeed}% 移動速度</c:bonus>。`,
            fr: `Foxy n'est plus ralenti pendant Feu Rapide et gagne à la place <c:bonus>${rapidFireMovementSpeed}% de vitesse de déplacement</c:bonus> pendant sa durée.`,
            br: `Foxy não é mais desacelerado enquanto usa Fogo Rápido e, em vez disso, ganha <c:bonus>${rapidFireMovementSpeed}% de Velocidade de Movimento</c:bonus> durante ele.`,
            vi: `Foxy không còn bị làm chậm khi dùng Tốc Xạ mà thay vào đó nhận <c:bonus>${rapidFireMovementSpeed}% Tốc độ Di chuyển</c:bonus> trong lúc đó.`,
            id: `Foxy tidak lagi diperlambat saat menembakkan Rapid Fire dan sebagai gantinya mendapatkan <c:bonus>${rapidFireMovementSpeed}% Kecepatan Gerak</c:bonus> selama itu.`,
            kr: `폭시는 속사 중 더 이상 둔화되지 않으며 대신 속사 동안 <c:bonus>${rapidFireMovementSpeed}%의 이동 속도</c:bonus>를 얻습니다.`,
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
      const ballPickupShield = fixed(PrimAbilityData.TALENT_T2_LEFT_BALL_PICKUP_SHIELD * 100, 1)
      const ballPickupShieldDuration = toSec(PrimAbilityData.TALENT_T2_LEFT_BALL_PICKUP_SHIELD_DURATION)
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
            en: 'Ball Pickup Shield',
            ru: 'Щит при подборе шара',
            cz: 'Štít při sebrání míče',
            zh: '拾球護盾',
            fr: 'Bouclier de ramassage de la balle',
            br: 'Escudo ao Pegar a Bola',
            vi: 'Khiên Nhặt Cầu',
            id: 'Perisai Pengambilan Bola',
            kr: `공 회수 보호막`,
          },
          description: {
            en: `Picking up the Ball grants Prim a <c:heal>shield for ${ballPickupShield}% of her max Health</c:heal> for ${ballPickupShieldDuration}.`,
            ru: `Подбор шара даёт Прим <c:heal>щит на ${ballPickupShield}% от её максимального здоровья</c:heal> на ${ballPickupShieldDuration}.`,
            cz: `Sebrání míče dá Prim <c:heal>štít o ${ballPickupShield}% jejího max. zdraví</c:heal> na ${ballPickupShieldDuration}.`,
            zh: `撿起球時，普琳姆獲得<c:heal>相當於最大生命值 ${ballPickupShield}% 的護盾</c:heal>，持續 ${ballPickupShieldDuration}。`,
            fr: `Ramasser la balle accorde à Prim un <c:heal>bouclier de ${ballPickupShield}% de ses PV max</c:heal> pendant ${ballPickupShieldDuration}.`,
            br: `Pegar a Bola concede a Prim um <c:heal>escudo de ${ballPickupShield}% de sua Vida máxima</c:heal> por ${ballPickupShieldDuration}.`,
            vi: `Nhặt Cầu cấp cho Prim một <c:heal>lá chắn bằng ${ballPickupShield}% Máu tối đa</c:heal> trong ${ballPickupShieldDuration}.`,
            id: `Mengambil Bola memberikan Prim <c:heal>perisai sebesar ${ballPickupShield}% dari Health maksimumnya</c:heal> selama ${ballPickupShieldDuration}.`,
            kr: `공을 회수하면 프림이 ${ballPickupShieldDuration} 동안 <c:heal>최대 체력의 ${ballPickupShield}%에 해당하는 보호막</c:heal>을 얻습니다.`,
          },
        },
      }
    }
    case Shared.HEROES.SEER: {
      const curseDelay = toSec(SeerAbilityData.MALEVOLENT_CURSE_DELAY)
      const hastyCurseDelay = toSec(
        SeerAbilityData.MALEVOLENT_CURSE_DELAY - SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_DELAY_REDUCTION
      )
      const mirrorDamage = fixed(SeerAbilityData.TALENT_T1_RIGHT_MALEVOLENT_MIRROR_DAMAGE_MODIFIER * 100, 0)
      const shiftCharges = SeerAbilityData.TALENT_T2_LEFT_MALEVOLENT_SHIFT_MAX_CHARGES
      const clawsRoot = toSec(SeerAbilityData.TALENT_T2_RIGHT_MALEVOLENT_CLAWS_ROOT_DURATION)

      return {
        tier1_left: {
          title: {
            en: 'Hasty Curse',
            ru: 'Скорое проклятье',
            cz: 'Rychlé prokletí',
            zh: '急速诅咒',
            fr: 'Malédiction hâtive',
            br: 'Maldição Apressada',
            vi: 'Lời Nguyền Vội Vã',
            id: 'Kutukan Cepat',
            kr: `성급한 저주`,
          },
          description: {
            en: `Malevolent Curse explodes after ${hastyCurseDelay} instead of ${curseDelay}.`,
            ru: `Злобное проклятье взрывается через ${hastyCurseDelay} вместо ${curseDelay}.`,
            cz: `Zlomyslné prokletí vybuchne po ${hastyCurseDelay} místo po ${curseDelay}.`,
            zh: `邪恶诅咒在 ${hastyCurseDelay}后爆炸，而非 ${curseDelay}。`,
            fr: `La Malédiction maléfique explose après ${hastyCurseDelay} au lieu de ${curseDelay}.`,
            br: `Maldição Malévola explode após ${hastyCurseDelay} em vez de ${curseDelay}.`,
            vi: `Lời Nguyền Ác Độc phát nổ sau ${hastyCurseDelay} thay vì ${curseDelay}.`,
            id: `Kutukan Jahat meledak setelah ${hastyCurseDelay} alih-alih ${curseDelay}.`,
            kr: `악의의 저주가 ${curseDelay} 대신 ${hastyCurseDelay} 후에 폭발합니다.`,
          },
        },
        tier1_right: {
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
            en: `Malevolent Shift leaves a Dark Clone at Seer's previous position that deals <c:bonus>${mirrorDamage}% of Dark Clone's damage</c:bonus>.`,
            ru: `Злобный сдвиг оставляет Тёмного двойника на прежней позиции Провидца, который наносит <c:bonus>${mirrorDamage}% урона Тёмного двойника</c:bonus>.`,
            cz: `Zlomyslný přesun zanechá na předchozí pozici Proroka Temného klona, který způsobí <c:bonus>${mirrorDamage}% poškození Temného klona</c:bonus>.`,
            zh: `邪恶偏移会在先知原来的位置留下一个暗影分身，造成<c:bonus>暗影分身 ${mirrorDamage}% 的伤害</c:bonus>。`,
            fr: `Malevolent Shift laisse un Clone Sombre à la position précédente du Voyant, qui inflige <c:bonus>${mirrorDamage}% des dégâts du Clone Sombre</c:bonus>.`,
            br: `Malevolent Shift deixa um Clone Sombrio na posição anterior de Seer, que causa <c:bonus>${mirrorDamage}% do dano do Clone Sombrio</c:bonus>.`,
            vi: `Dịch Chuyển Ác Ý để lại một Bản Sao Bóng Tối tại vị trí cũ của Seer, gây <c:bonus>${mirrorDamage}% sát thương của Bản Sao Bóng Tối</c:bonus>.`,
            id: `Malevolent Shift meninggalkan Dark Clone di posisi Seer sebelumnya yang memberikan <c:bonus>${mirrorDamage}% kerusakan Dark Clone</c:bonus>.`,
            kr: `악의의 이동이 시어의 이전 위치에 <c:bonus>어둠의 분신 피해량의 ${mirrorDamage}%</c:bonus>를 입히는 어둠의 분신을 남깁니다.`,
          },
        },
        tier2_left: {
          title: {
            en: `Malevolent Shift ${shiftCharges} Charges`,
            ru: `Злобный сдвиг: ${shiftCharges} заряда`,
            cz: `Zlomyslný přesun: ${shiftCharges} nabití`,
            zh: `邪恶偏移 ${shiftCharges} 层充能`,
            fr: `Malevolent Shift : ${shiftCharges} charges`,
            br: `Malevolent Shift: ${shiftCharges} Cargas`,
            vi: `Dịch Chuyển Ác Ý ${shiftCharges} lượt`,
            id: `Malevolent Shift ${shiftCharges} Charge`,
            kr: `악의의 이동 충전 ${shiftCharges}회`,
          },
          description: {
            en: `Malevolent Shift stores ${shiftCharges} charges that recharge one at a time.`,
            ru: `Злобный сдвиг имеет ${shiftCharges} заряда, которые восстанавливаются по одному.`,
            cz: `Zlomyslný přesun má ${shiftCharges} nabití, která se obnovují postupně po jednom.`,
            zh: `邪恶偏移拥有 ${shiftCharges} 层充能，依序逐一恢复。`,
            fr: `Malevolent Shift possède ${shiftCharges} charges qui se rechargent une à la fois.`,
            br: `Malevolent Shift possui ${shiftCharges} cargas que recarregam uma de cada vez.`,
            vi: `Dịch Chuyển Ác Ý có ${shiftCharges} lượt dùng, hồi lại lần lượt từng lượt một.`,
            id: `Malevolent Shift memiliki ${shiftCharges} charge yang terisi ulang satu per satu.`,
            kr: `악의의 이동은 ${shiftCharges}개의 충전을 보유하며 한 번에 하나씩 재충전됩니다.`,
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

      const briarConnectionCooldownReduction = toSec(
        KarickAbilityData.TALENT_T1_RIGHT_BRIAR_CONNECTION_COOLDOWN_REDUCTION
      )
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
            en: 'Briar Connection',
            ru: 'Связь шипов',
            cz: 'Trnité spojení',
            br: 'Conexão de Espinhos',
            zh: '荆棘连结',
            fr: 'Connexion des Ronces',
            vi: 'Liên Kết Gai',
            id: 'Koneksi Duri',
            kr: `가시덤불의 연결`,
          },
          description: {
            en: `Hitting an enemy hero with Bramble Snap reduces Wrath of the Grove's remaining cooldown by ${briarConnectionCooldownReduction}.`,
            ru: `Попадание по вражескому герою Bramble Snap сокращает оставшуюся перезарядку Wrath of the Grove на ${briarConnectionCooldownReduction}.`,
            cz: `Zásah nepřátelského hrdiny Bramble Snap zkrátí zbývající obnovení Wrath of the Grove o ${briarConnectionCooldownReduction}.`,
            br: `Acertar um herói inimigo com Bramble Snap reduz a recarga restante de Wrath of the Grove em ${briarConnectionCooldownReduction}.`,
            zh: `Bramble Snap 命中敌方英雄时，Wrath of the Grove 的剩余冷却时间减少 ${briarConnectionCooldownReduction}。`,
            fr: `Toucher un héros ennemi avec Bramble Snap réduit le temps de recharge restant de Wrath of the Grove de ${briarConnectionCooldownReduction}.`,
            vi: `Đánh trúng tướng địch bằng Bramble Snap giảm ${briarConnectionCooldownReduction} thời gian hồi chiêu còn lại của Wrath of the Grove.`,
            id: `Mengenai hero musuh dengan Bramble Snap mengurangi sisa cooldown Wrath of the Grove sebesar ${briarConnectionCooldownReduction}.`,
            kr: `가시덩굴 올가미로 적 영웅을 명중시키면 숲의 분노의 남은 재사용 대기시간이 ${briarConnectionCooldownReduction} 감소합니다.`,
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
      const crushingAdvanceStun = toSec(PatroklosAbilityData.TALENT_T1_LEFT_CRUSHING_ADVANCE_STUN_DURATION)

      const vanguardShieldBonus = fixed(PatroklosAbilityData.TALENT_T1_RIGHT_VANGUARD_SHIELD_BONUS * 100, 0)
      const vanguardAllySpeed = fixed(PatroklosAbilityData.TALENT_T1_RIGHT_VANGUARD_ALLY_SPEED_MOD * 100, 0)
      const vanguardAllyAttackSpeed = fixed(
        PatroklosAbilityData.TALENT_T1_RIGHT_VANGUARD_ALLY_ATTACK_SPEED_MOD * 100,
        0
      )
      const vanguardAllyDuration = toSec(PatroklosAbilityData.TALENT_T1_EFFECT_DURATION)
      const vanguardCharges = PatroklosAbilityData.TALENT_T2_LEFT_VANGUARD_MAX_CHARGES

      const lastJudgementMaxStacks = PatroklosAbilityData.HEAVENS_FALL_MAX_STACKS
      const lastJudgementMaxHealthDamage = fixed(
        PatroklosAbilityData.TALENT_T2_RIGHT_LAST_JUDGEMENT_MAX_HEALTH_DAMAGE_MOD * 100,
        1
      )
      /** One sword per stack, so the talent's real worth at the required max stacks. */
      const lastJudgementTotalMaxHealthDamage = fixed(
        PatroklosAbilityData.TALENT_T2_RIGHT_LAST_JUDGEMENT_MAX_HEALTH_DAMAGE_MOD * 100 * lastJudgementMaxStacks,
        1
      )
      const divineReckoningHeal = fixed(PatroklosAbilityData.DIVINE_RECKONING_HEAL_MOD * 100, 0)
      const lastJudgementHeal = fixed(PatroklosAbilityData.TALENT_T2_RIGHT_LAST_JUDGEMENT_HEAL_MOD * 100, 0)

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
            en: `Vanguard also <c:stun>stuns enemy heroes hit for ${crushingAdvanceStun}</c:stun>.`,
            ru: `Vanguard также <c:stun>оглушает задетых вражеских героев на ${crushingAdvanceStun}</c:stun>.`,
            cz: `Vanguard navíc <c:stun>omráčí zasažené nepřátelské hrdiny na ${crushingAdvanceStun}</c:stun>.`,
            br: `Vanguard também <c:stun>atordoa os heróis inimigos atingidos por ${crushingAdvanceStun}</c:stun>.`,
            zh: `先鋒現在還會<c:stun>將被擊中的敵方英雄暈眩 ${crushingAdvanceStun}</c:stun>。`,
            fr: `Avant-garde <c:stun>étourdit aussi les héros ennemis touchés pendant ${crushingAdvanceStun}</c:stun>.`,
            vi: `Tiên Phong còn <c:stun>choáng tướng địch trúng đòn trong ${crushingAdvanceStun}</c:stun>.`,
            id: `Vanguard juga <c:stun>membuat hero musuh yang terkena stun selama ${crushingAdvanceStun}</c:stun>.`,
            kr: `선봉이 <c:stun>명중한 적 영웅을 ${crushingAdvanceStun} 동안 기절</c:stun>시킵니다.`,
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
            en: `Vanguard stores ${vanguardCharges} charges that recharge one at a time.`,
            ru: `Vanguard имеет ${vanguardCharges} заряда, которые восстанавливаются по одному.`,
            cz: `Vanguard má ${vanguardCharges} nabití, která se obnovují postupně po jednom.`,
            br: `Vanguard possui ${vanguardCharges} cargas que recarregam uma de cada vez.`,
            zh: `先鋒擁有 ${vanguardCharges} 層充能，依序逐一恢復。`,
            fr: `Avant-garde possède ${vanguardCharges} charges qui se rechargent une à la fois.`,
            vi: `Tiên Phong có ${vanguardCharges} lượt dùng, hồi lại lần lượt từng lượt một.`,
            id: `Vanguard memiliki ${vanguardCharges} charge yang terisi ulang satu per satu.`,
            kr: `선봉은 ${vanguardCharges}개의 충전을 보유하며 한 번에 하나씩 재충전됩니다.`,
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
            en: `Targets hit with the maximum ${lastJudgementMaxStacks} stacks of Heavens Fall take <c:pure>${lastJudgementMaxHealthDamage}% of their max health as bonus pure damage from every sword of Divine Reckoning</c:pure> (${lastJudgementTotalMaxHealthDamage}% in total). Divine Reckoning also <c:heal>heals for ${lastJudgementHeal}% of the damage dealt</c:heal> instead of ${divineReckoningHeal}%.`,
            ru: `Цели, поражённые с максимальными ${lastJudgementMaxStacks} зарядами Падения Небес, получают от каждого меча Divine Reckoning ${lastJudgementMaxHealthDamage}% от максимального здоровья дополнительным <c:pure>чистым уроном</c:pure> (всего ${lastJudgementTotalMaxHealthDamage}%). Divine Reckoning также <c:heal>исцеляет на ${lastJudgementHeal}% от нанесённого урона</c:heal> вместо ${divineReckoningHeal}%.`,
            cz: `Cíle zasažené s maximálními ${lastJudgementMaxStacks} stacky Pádu nebes utrpí od každého meče Divine Reckoning ${lastJudgementMaxHealthDamage}% svého maximálního zdraví jako bonusové <c:pure>čisté poškození</c:pure> (celkem ${lastJudgementTotalMaxHealthDamage}%). Divine Reckoning navíc <c:heal>léčí za ${lastJudgementHeal}% způsobeného poškození</c:heal> místo ${divineReckoningHeal}%.`,
            br: `Alvos atingidos com o máximo de ${lastJudgementMaxStacks} acúmulos de Queda dos Céus sofrem <c:pure>${lastJudgementMaxHealthDamage}% de sua vida máxima como dano puro</c:pure> adicional de cada espada de Divine Reckoning (${lastJudgementTotalMaxHealthDamage}% no total). Divine Reckoning também <c:heal>cura ${lastJudgementHeal}% do dano causado</c:heal> em vez de ${divineReckoningHeal}%.`,
            zh: `擁有最大 ${lastJudgementMaxStacks} 層天罰的目標，每把神聖清算的劍都會對其造成<c:pure>其最大生命值 ${lastJudgementMaxHealthDamage}% 的額外真實傷害</c:pure>（總計 ${lastJudgementTotalMaxHealthDamage}%）。神聖清算的<c:heal>治療量提升為所造成傷害的 ${lastJudgementHeal}%</c:heal>，而非 ${divineReckoningHeal}%。`,
            fr: `Les cibles touchées avec le maximum de ${lastJudgementMaxStacks} cumuls de Chute des Cieux subissent <c:pure>${lastJudgementMaxHealthDamage}% de leur santé maximale en dégâts purs</c:pure> bonus par épée de Jugement Divin (${lastJudgementTotalMaxHealthDamage}% au total). Jugement Divin <c:heal>soigne aussi de ${lastJudgementHeal}% des dégâts infligés</c:heal> au lieu de ${divineReckoningHeal}%.`,
            vi: `Mục tiêu trúng đòn với tối đa ${lastJudgementMaxStacks} cộng dồn Thiên Phạt chịu thêm <c:pure>${lastJudgementMaxHealthDamage}% máu tối đa dưới dạng sát thương thuần túy</c:pure> từ mỗi thanh kiếm của Thiên Phán (tổng ${lastJudgementTotalMaxHealthDamage}%). Thiên Phán còn <c:heal>hồi máu bằng ${lastJudgementHeal}% sát thương gây ra</c:heal> thay vì ${divineReckoningHeal}%.`,
            id: `Target yang terkena dengan stack maksimal ${lastJudgementMaxStacks} Heavens Fall menerima <c:pure>${lastJudgementMaxHealthDamage}% dari HP maksimalnya sebagai bonus pure damage</c:pure> dari setiap pedang Divine Reckoning (total ${lastJudgementTotalMaxHealthDamage}%). Divine Reckoning juga <c:heal>menyembuhkan ${lastJudgementHeal}% dari kerusakan yang diberikan</c:heal> alih-alih ${divineReckoningHeal}%.`,
            kr: `최대 ${lastJudgementMaxStacks}중첩의 천벌로 명중한 대상은 신성한 심판의 검마다 최대 체력의 <c:pure>${lastJudgementMaxHealthDamage}%만큼 추가 고정 피해</c:pure>를 받습니다(총 ${lastJudgementTotalMaxHealthDamage}%). 또한 신성한 심판은 입힌 피해의 <c:heal>${divineReckoningHeal}%가 아닌 ${lastJudgementHeal}%만큼 치유</c:heal>합니다.`,
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

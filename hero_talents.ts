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
  //@ts-ignore
} from 'shared'
import { toSecRaw, toSec, fixed } from './misc'

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

const getHeroTalents = (hero: Shared.HEROES): ILocaleHeroTalent => {
  switch (hero) {
    case Shared.HEROES.KUMIHU:
      return {
        tier1_left: {
          title: {
            en: `Magical Orb Cooldown ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}`,
            ru: `${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)} сек. перезарядки Волшебной сферы`,
          },
        },
        tier1_right: {
          title: {
            en: `Charm Duration +${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_DURATION)}`,
            ru: `+${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_DURATION)} сек. к длительности очарования`,
          },
        },
        tier2_left: {
          title: {
            en: `Magical Orb Range +${KumihuAbilityData.TALENT_T2_LEFT_CAST_RANGE}px`,
            ru: `+${KumihuAbilityData.TALENT_T2_LEFT_CAST_RANGE} к дальности Волшебной сферы`,
          },
        },
        tier2_right: {
          title: {
            en: `Enhanced Attack +${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}%`,
            ru: `+${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}% к урону от усиленной атаки`,
          },
          description: {
            en: `Enhanced attack deals ${
              KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100
            }% bonus Magic Damage and applies all Basic Attack hit effects.`,
            ru: `Усиленная атака наносит дополнительно ${
              KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100
            }% физического урона и накладывает все эффекты при попадании`,
          },
        },
      }

    case Shared.HEROES.SPARROW:
      return {
        tier1_left: {
          title: {
            en: `Demonic Wrath Damage +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            ru: `+${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE} к урону от Удара по земле`,
          },
        },
        tier1_right: {
          title: {
            en: `Corrupted Wind Range +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            ru: `+${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE} к дальности Рывка`,
          },
        },
        tier2_left: {
          title: {
            en: `Demonic Wrath Pure / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
            ru: `+${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% от недостающего здоровья Удара по земле/урон становится чистым`,
          },
          description: {
            en: `Demonic Wrath deals pure damage, bypassing both Armor and Magic Resistance, and deals ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% bonus damage.`,
            ru: `Удар по земле будет наносить чистый урон, а процентный урон от недостающего здоровья цели увеличится на ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }%`,
          },
        },
        tier2_right: {
          title: {
            en: `Corrupted Wind Cooldown ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            ru: `${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)} сек. перезарядки Рывка`,
          },
        },
      }

    case Shared.HEROES.ICEAT:
      return {
        tier1_left: {
          title: {
            en: 'Basic Attack Slow',
            ru: 'Атаки становятся замедляющими',
          },
          description: {
            en: `Your Basic Attacks reduce enemy Movement Speed by <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> and reduce enemy Attack Bpeed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
            ru: `Ваши атаки будут уменьшать скорость передвижения целей на <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> и их скорость атаки на <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
          },
        },
        tier1_right: {
          title: {
            en: `Cold Embrace Movement Speed +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            ru: `+${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS} к скорости передвижения во время действия Объятий холода`,
          },
        },
        tier2_left: {
          title: {
            en: `+${ICeatAbilityData.TALENT_T2_LEFT_ADDITIONAL_ICICLE} Icicle Bolt`,
            ru: `+${ICeatAbilityData.TALENT_T2_LEFT_ADDITIONAL_ICICLE} сосулька у Сосулек`,
          },
        },
        tier2_right: {
          title: {
            en: `Cold Embrace Duration +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            ru: `+${toSecRaw(
              ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION
            )} сек. к длительности Объятий холода`,
          },
        },
      }

    case Shared.HEROES.VEIL: {
      return {
        tier1_left: {
          title: {
            en: `Astral Step Slow Duration +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            ru: `+${toSecRaw(
              VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION
            )} сек. к замедлению от Астрального шага`,
          },
        },
        tier1_right: {
          title: {
            en: `Astral Blades Cooldown ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            ru: `${toSecRaw(
              VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN
            )} сек. перезарядки Астральных клинков`,
          },
        },
        tier2_left: {
          title: {
            en: `Enhanced Damage +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            ru: `+${fixed(
              (VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100,
              1
            )}% к урону от усиленных атак или Астрального шага`,
          },
        },
        tier2_right: {
          title: {
            en: 'Fused Astral Step',
            ru: 'Астральное мастерство',
          },
          description: {
            en:
              `Reduces the cooldown of Astral Step by ${toSecRaw(
                VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN
              )}s \n` + 'Enhanced Astral Step resets its cooldown even if no enemy is hit.',
            ru:
              `Перезарядка Астрального шага снижается на ${toSecRaw(
                VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN
              )} сек. \n` +
              'Больше нет необходимости попадать по врагу усиленным Астральным шагом, чтобы сбросить его перезарядку',
          },
        },
      }
    }

    case Shared.HEROES.BELLE:
      return {
        tier1_left: {
          title: {
            en: `Prickly Vine Duration +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            ru: `+${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)} сек. оглушения от Колючей лозы`,
          },
        },
        tier1_right: {
          title: {
            en: `Floral Ambush -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Movement Speed`,
            ru: `Цветочная ловшка снижает скорость передвижения врагов на -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW}`,
          },
        },
        tier2_left: {
          title: {
            en: `Floral Ambush Heal ${BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100}%`,
            ru: `Бутоны Цветочной ловушки лечат союзников на ${
              BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100
            }% от своего урона`,
          },
        },
        tier2_right: {
          title: {
            en: '+1 Floral Ambush Bomb',
            ru: '+1 бутон у Цветочной ловушки',
          },
        },
      }
    case Shared.HEROES.FLIN:
      return {
        tier1_left: {
          title: {
            en: `Attack Range +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            ru: `+${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE} дальности атаки`,
          },
        },
        tier1_right: {
          title: {
            en: `Marksmanship +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} stacks`,
            ru: `+${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} зарядов Меткой стрельбы`,
          },
        },
        tier2_left: {
          title: {
            en: 'Precise Shot +25% Damage',
            ru: '+25% урона для Точного выстрела',
          },
        },
        tier2_right: {
          title: {
            en: 'Marksman - Multishot',
            ru: 'Меткая стрельба получает эффект Залпа',
          },
          description: {
            en: `Flin fires an additional 2 arrows, angled at 30°, dealing ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% Normal Damage per extra arrow.`,
            ru: `Залп: Флин выпускает дополнительно 2 стрелы под углом 30 градусов при каждой атаке, каждая из которых наносит ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% физического урона.`,
          },
        },
      }

    case Shared.HEROES.THOMAS:
      return {
        tier1_left: {
          title: {
            en: `Shadow Carrot +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Damage`,
            ru: `+${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} к урону от Теневой моркови`,
          },
        },
        tier2_left: {
          title: {
            en: 'Shadow Carrot Silence',
            ru: 'Теневая морковь накладывает немоту',
          },
          description: {
            en: 'If an enemy is attached to the Shadow Carrot, that enemy will be silenced until the carrot is removed.',
            ru: 'Если морковь прикреплена к вражескому герою, он получит немоту пока морковь не исчезнет.',
          },
        },
        tier1_right: {
          title: {
            en: `Shuriken Toss Cooldown ${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)}`,
            ru: `${toSecRaw(
              ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN
            )} сек. перезарядки Броска сюрикена`,
          },
        },
        tier2_right: {
          title: {
            en: `Shadow Carrot Stun ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
            ru: `Теневая морковь при повторной активации оглушает врага на ${toSecRaw(
              ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN
            )} сек.`,
          },
        },
      }

    case Shared.HEROES.ALVAR:
      return {
        tier1_left: {
          title: {
            en: `Divine Mark Damage +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            ru: `+${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE} к урону метки`,
          },
        },
        tier1_right: {
          title: {
            en: 'Furious Kick Boost',
            ru: 'Усиливающий Яростный удар',
          },
          description: {
            en: `Furious Kick boosts the morale of nearby allies, increasing Movement Speed by ${
              AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_MS
            } and Attack Speed by ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_AS * 100}% for ${toSec(
              AlvarAbilityData.TALENT_FURIOUS_KICK_DURATION
            )}`,
            ru: `Каждый раз при применении <b>Яростного удара</b> вы и все союзники вокруг получаете ${
              AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_MS
            } скорости передвижения и ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_AS * 100}% скорости атаки на ${toSec(
              AlvarAbilityData.TALENT_FURIOUS_KICK_DURATION
            )}`,
          },
        },
        tier2_left: {
          title: {
            en: `Furious Kick Stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            ru: `+${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)} сек. оглушения от Яростного удара`,
          },
        },
        tier2_right: {
          title: {
            en: `Heavenly Kick Cooldown ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            ru: `${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)} сек. перезарядки Небесного удара`,
          },
        },
      }

    case Shared.HEROES.AREL:
      return {
        tier1_left: {
          title: {
            en: `Ticking Bomb +${Math.floor(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)}% Trigger Damage`,
            ru: `+${Math.floor(
              ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100
            )}% к урону активированной Часовой бомбы`,
          },
        },
        tier1_right: {
          title: {
            en: `Basic Attack Range +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            ru: `+${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE} к дальности атаки`,
          },
        },
        tier2_left: {
          title: {
            en: `Ticking Bomb Stun +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            ru: `+${ArelAbilityData.TALENT_T2_LEFT_BONUS_ATTACK_DAMAGE * 100}% к урону второй пули`,
          },
        },
        tier2_right: {
          title: {
            en: 'Tumble - Freezing Trap',
            ru: 'Кувырок создаёт Замораживающую ловушку',
          },
          description: {
            en:
              `Tumble creates a freezing trap at Arel's position. When an enemy unit steps on the trap, they will be frozen for ${toSec(
                ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION
              )}, preventing all forms of movement.` +
              `<br/> The trap lasts for ${toSec(
                ArelAbilityData.FREEZING_TRAP_DURATION
              )} and provides vision in a small radius.`,
            ru:
              `Кувырок  создаст Замораживающую ловушку на позиции Арела, которая заморозит наступившего в неё врага на ${toSec(
                ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION
              )}` +
              `<br/> Замораживающая ловушка существует ${toSec(
                ArelAbilityData.FREEZING_TRAP_DURATION
              )} и даёт небольшой обзор вокруг себя`,
          },
        },
      }

    case Shared.HEROES.HAZEL:
      return {
        tier1_left: {
          title: {
            en: `Triumphant Upheaval +${toSecRaw(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_DURATION)}s`,
            ru: `+${toSecRaw(
              HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_DURATION
            )} секунд к отбрасыванию Триумфального переворота`,
          },
          description: {
            en: `Increases the duration of Triumphant Upheaval's pushback.`,
            ru: 'Увеличивает длительность отбрасывания у Триумфального переворота',
          },
        },
        tier1_right: {
          title: {
            en: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Damage`,
            ru: `+${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} к урону от Гнева правосудия`,
          },
        },
        tier2_left: {
          title: {
            en: `Justice's Wrath Stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            ru: `+${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)} сек. оглушения от Гнева правосудия`,
          },
        },
        tier2_right: {
          title: {
            en: 'Triumphant Upheaval Pure + Dispel',
            ru: 'Триумфальный переворот наносит чистый урон/рассеивает',
          },
          description: {
            en: 'Triumphant Upheaval deals pure damage, bypassing both Armor and Magic Resistance, and dispels all negative effects on trigger.',
            ru: 'Триумфальный переворот наносит чистый урон и рассеивает все негативные эффекты при активации.',
          },
        },
      }

    case Shared.HEROES.KIRA:
      return {
        tier1_left: {
          title: {
            en: 'Lightning Shock Dispersion',
            ru: 'Удар молнии накладывает Дисперсию',
          },
          description: {
            en: 'Lightning Shock applies dispersion on enemy heroes, which reduces all healing done by 35%.',
            ru: 'Удар молнии накладывает Дисперсию на вражеские цели, которая снижает получаемое ими исцеление на 35%',
          },
        },
        tier1_right: {
          title: {
            en: `Rain of Sparks Damage +${Math.floor(KiraAbilityData.TALENT_T1_RAIN_OF_SPARKS_BONUS * 100)}%`,
            ru: `+${Math.floor(KiraAbilityData.TALENT_T1_RAIN_OF_SPARKS_BONUS * 100)}% к урону Дождя искр`,
          },
        },
        tier2_left: {
          title: {
            en: `Lightning Shock Duration +${toSecRaw(KiraAbilityData.TALENT_T2_LEFT_ENH_ATTACK_DURATION)}s`,
            ru: `+${toSecRaw(KiraAbilityData.TALENT_T2_LEFT_ENH_ATTACK_DURATION)} сек. длительности Удара молнии`,
          },
        },
        tier2_right: {
          title: {
            en: '+1 Lightning Shock Target',
            ru: 'Удар молнии поражает +1 дополнительную цель',
          },
        },
      }

    case Shared.HEROES.FOXY:
      return {
        tier1_left: {
          title: {
            en: 'Incendiary Grenade',
            ru: 'Зажигательная граната',
          },
          description: {
            en: `Explosive Grenade ignites enemies, dealing ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% of target's max health as bonus Magic Damage per second for a short duration.`,
            ru: `Взрывная граната поджигает задетых врагов, нанося дополнительно ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% от макс. Здоровья цели в секунду.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Freezing Grenade',
            ru: 'Замораживающая граната',
          },
          description: {
            en: `Explosive Grenade freezes enemies for up to ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )}, preventing all forms of movement`,
            ru: `Взрывная граната замораживает задетых врагов на ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )} сек.`,
          },
        },
        tier2_left: {
          title: {
            en: 'Rapid Fire Crowd Control Immunity',
            ru: 'Беглый огонь даёт иммунитет к эффектам контроля',
          },
        },
        tier2_right: {
          title: {
            en: `Rapid Fire Damage +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}% к урону Беглого огня`,
          },
        },
      }

    case Shared.HEROES.MAGDALENE:
      return {
        tier1_left: {
          title: {
            en: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} Soul Harvest stacks - Kill/Assist`,
            ru: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} к Силе умений за убийство/содействие`,
          },
          description: {
            en: `Enhances your passive, providing an additional ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} stacks of Soul Harvest for each kill or assist`,
            ru: `Каждый убитый враг после изучения этого таланта будет давать дополнительно ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} Силы умений`,
          },
        },
        tier1_right: {
          title: {
            en: `Scream of Pain Pushback +${toSecRaw(
              MagdaleneAbilityData.TALENT_T1_RIGHT_SCREAM_OF_PAIN_PUSHBACK_DURATION
            )}s`,
            ru: `+${toSecRaw(
              MagdaleneAbilityData.TALENT_T1_RIGHT_SCREAM_OF_PAIN_PUSHBACK_DURATION
            )} сек. к отбрасыванию Загробного вопля`,
          },
        },
        tier2_left: {
          title: {
            en: 'Empower Swarm of Ghosts',
            ru: 'Усиленная Волна призраков',
          },
          description: {
            en: `Swarm of Ghosts deals +${fixed(
              MagdaleneAbilityData.TALENT_T2_LEFT_SWARM_OF_GHOST_STACK_DAMAGE * 100,
              1
            )}% more damage per stack.`,
            ru: `+${fixed(
              MagdaleneAbilityData.TALENT_T2_LEFT_SWARM_OF_GHOST_STACK_DAMAGE * 100,
              1
            )}% к наносимому урону от Волны призраков за каждый заряд Призрачного пакта на враге.`,
          },
        },
        tier2_right: {
          title: {
            en: `Scream of Pain Applies ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} Stacks`,
            ru: 'Загробный вопль накладывает заряды Призрачного пакта',
          },
          description: {
            en: `Scream of Pain applies ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} stacks of ghost pact.`,
            ru: `Загробный вопль накладывает ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} заряда Призрачного пакта`,
          },
        },
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
  type: Shared.DamageTypes = Shared.DamageTypes.NORMAL,
  baseDamage = 0
): string => {
  damage = Math.floor(damage)
  baseDamage = fixed(baseDamage, 1)

  /** dont show % in game */
  return `<span class=${
    type === Shared.DamageTypes.NORMAL ? 'normal-d' : type === Shared.DamageTypes.PURE ? 'pure-d' : 'ability-d'
  }>${baseDamage > 0 ? baseDamage + (damage > 0 ? '(+' + damage + ')' : '') : damage > 0 ? damage : ''}</span>`
}

export default getHeroTalents

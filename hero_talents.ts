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
            en: `Magical Orb Cooldown  ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}s`,
            ru: `${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)} сек. перезарядки Волшебной сферы`,
            cz: `Magická koule obnovení ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}s`,
            zh: `魔法球冷却 ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}s`,
            fr: `Orbe magique recharge ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}s`,
            br: `Orbe mágico recarga ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Charm cooldown  ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)}s`,
            ru: `${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)} сек. перезарядки очарования`,
            cz: `Očarování obnovení ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)}s`,
            zh: `魅力冷却 ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)}s`,
            fr: `Charme recharge ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)}s`,
            br: `Encanto recarga ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)}s`,
          },
        },
        tier2_left: {
          title: {
            en: `Enhanced attack pierces units`,
            ru: 'Усиленная атака проходит сквозь цели',
            cz: 'Zlepšený útok prostupuje jednotkami',
            zh: '增强攻击穿透单位',
            fr: `L'attaque améliorée traverse les unités`,
            br: `Ataque aprimorado atravessa unidades`,
          },
        },
        tier2_right: {
          title: {
            en: `Magical orb blind`,
            ru: 'Волшебная сфера ослепляет',
            cz: 'Magická koule oslepí',
            zh: '魔法球致盲',
            fr: `Orbe magique aveugle`,
            br: `Orbe mágico cega`,
          },
          description: {
            en: `If magical orb hit same hero twice it will reduce his vision by 50% for ${toSecRaw(
              KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION
            )}s`,
            ru: `Если Волшебная сфера попадает в одного и того же героя дважды, то его обзор снижается на 50% на ${toSecRaw(
              KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION
            )} секунд`,
            cz: `Pokud kouzelná koule zasáhne stejného hrdinu dvakrát, sníží jeho vidění o 50% po dobu ${toSecRaw(
              KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION
            )}s`,
            zh: `如果魔法球两次击中同一个英雄，则其视野将在${toSecRaw(
              KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION
            )}秒内减少50%`,
            fr: `Si l'orbe magique touche le même héros deux fois, sa vision sera réduite de 50% pendant ${toSecRaw(
              KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION
            )}s`,
            br: `Se o orbe mágico atingir o mesmo herói duas vezes, sua visão será reduzida em 50% por ${toSecRaw(
              KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION
            )}s`,
          },
        },
      }

    case Shared.HEROES.SPARROW:
      return {
        tier1_left: {
          title: {
            en: `Demonic Wrath Damage +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            ru: `+${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE} к урону от Удара по земле`,
            cz: `Démonický hněv poškození +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            zh: `恶魔之怒伤害 +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            fr: `Dégâts de la colère démoniaque +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            br: `Dano da Ira Demoníaca +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
          },
        },
        tier1_right: {
          title: {
            en: `Corrupted Wind Range +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            ru: `+${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE} к дальности Рывка`,
            cz: `Zkažený vítr dosah +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            zh: `腐化之风范围 +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            fr: `Portée du vent corrompu +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            br: `Alcance do Vento Corrompido +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
          },
        },
        tier2_left: {
          title: {
            en: `Demonic Wrath Pure / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
            ru: `+${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% от недостающего здоровья Удара по земле/урон становится чистым`,
            cz: `Démonický hněv čistý / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
            zh: `恶魔之怒纯净 / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
            fr: `Colère démoniaque pure / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
            br: `Ira Demoníaca Pura / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
          },
          description: {
            en: `Demonic Wrath deals pure damage, bypassing both Armor and Magic Resistance, and deals ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% bonus damage.`,
            ru: `Удар по земле будет наносить чистый урон, а процентный урон от недостающего здоровья цели увеличится на ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }%`,
            cz: `Démonický hněv nyní způsobuje čisté poškození, které obchází jak obranu, tak magický odpor, a způsobuje ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% bonusového poškození.`,
            zh: `恶魔之怒造成纯净伤害，绕过护甲和魔法抗性，造成 ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% 的额外伤害。`,
            fr: `La colère démoniaque inflige des dégâts purs, contournant à la fois l'armure et la résistance magique, et inflige ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% de dégâts bonus.`,
            br: `Ira Demoníaca causa dano puro, ignorando tanto a Armadura quanto a Resistência Mágica, e causa ${
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100
            }% de dano bônus.`,
          },
        },
        tier2_right: {
          title: {
            en: `Corrupted Wind Cooldown ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            ru: `${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)} сек. перезарядки Рывка`,
            cz: `Zkažený vítr obnovení ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            zh: `腐化之风冷却 ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            fr: `Recharge du vent corrompu ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            br: `Recarga do Vento Corrompido ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
          },
        },
      }

    case Shared.HEROES.ICEAT:
      return {
        tier1_left: {
          title: {
            en: 'Basic Attack Slow',
            ru: 'Атаки становятся замедляющими',
            cz: 'Základní útok zpomalí',
            zh: '基础攻击减速',
            fr: 'Ralentissement des attaques de base',
            br: 'Ataque Básico Lento',
          },
          description: {
            en: `Your Basic Attacks reduce enemy Movement Speed by <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> and reduce enemy Attack Speed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
            ru: `Ваши атаки будут уменьшать скорость передвижения целей на <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> и их скорость атаки на <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
            cz: `Vaše základní útoky sníží rychlost pohybu nepřátel o <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> a sníží rychlost útoku nepřátel o <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
            zh: `你的基础攻击会减少敌人的移动速度 <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> 并减少敌人的攻击速度 <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
            fr: `Vos attaques de base réduisent la vitesse de déplacement des ennemis de <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> et réduisent la vitesse d'attaque des ennemis de <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100
            }%</b>`,
            br: `Seus ataques básicas reduzem a Velocidade de Movimento do inimigo em <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED
            }</b> e reduzem a Velocidade de Ataque do inimigo em <b>${
              ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100
            }%</b>`,
          },
        },
        tier1_right: {
          title: {
            en: `Cold Embrace Movement Speed +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            ru: `+${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS} к скорости передвижения во время действия Объятий холода`,
            cz: `Zimní objetí rychlost pohybu +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            zh: `冰冷拥抱移动速度 +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            fr: `Vitesse de déplacement de l'étreinte froide +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            br: `Velocidade de Movimento do Abraço Frio +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
          },
        },
        tier2_left: {
          title: {
            en: `Icicle Bolt freeze +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            ru: `+${toSecRaw(
              VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION
            )} сек. замораживания от Ледяного болта`,
            cz: `Icicle Bolt zmrazení +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            zh: `冰柱冻结 +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            fr: `Gel de glace +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            br: `Gelo do Pico +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: `Cold Embrace Duration +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            ru: `+${toSecRaw(
              ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION
            )} сек. к длительности Объятий холода`,
            cz: `Zimní objetí trvání +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            zh: `冰冷拥抱持续时间 +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            fr: `Durée de l'étreinte froide +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            br: `Duração do Abraço Frio +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
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
            cz: `Astral Step zpomalení trvání +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            zh: `星体步减速持续时间 +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            fr: `Durée du ralentissement de l'Astral Step +${toSecRaw(
              VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION
            )}s`,
            br: `Duração da desaceleração do Passo Astral +${toSecRaw(
              VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION
            )}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Astral Blades Cooldown ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            ru: `${toSecRaw(
              VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN
            )} сек. перезарядки Астральных клинков`,
            cz: `Astral Blades obnovení ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            zh: `星体刀片冷却 ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            fr: `Recharge des lames astrales ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            br: `Recarga das Lâminas Astrais ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
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
            zh: `增强伤害 +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            fr: `Dégâts améliorés +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            br: `Dano Aprimorado +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
          },
        },
        tier2_right: {
          title: {
            en: 'Fused Astral Step',
            ru: 'Астральное мастерство',
            cz: 'Sloučený Astrální krok',
            zh: '融合星体步',
            fr: 'Pas astral fusionné',
            br: 'Passo Astral Fundido',
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
            cz:
              `Sníží obnovení Astrálního kroku o ${toSecRaw(
                VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN
              )}s \n` + 'Zlepšený Astrální krok resetuje své obnovení i když nezasáhne žádného nepřítele.',
            zh:
              `减少星体步的冷却时间 ${toSecRaw(VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN)}s \n` +
              '即使没有击中敌人，增强型星体步也会重置其冷却时间。',
            fr:
              `Réduit le temps de recharge du Pas astral de ${toSecRaw(
                VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN
              )}s \n` + "Le Pas astral amélioré réinitialise son temps de recharge même si aucun ennemi n'est touché.",
            br:
              `Reduz o tempo de recarga do Passo Astral em ${toSecRaw(
                VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN
              )}s \n` + 'O Passo Astral aprimorado reseta seu tempo de recarga mesmo que nenhum inimigo seja atingido.',
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
            cz: `Trnitý vinný trn trvání +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            zh: `刺藤持续时间 +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            fr: `Durée de la vigne épineuse +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            br: `Duração da Videira Espinhosa +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Floral Ambush -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Movement Speed`,
            ru: `Цветочная ловшка снижает скорость передвижения врагов на -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW}`,
            cz: `Květinový útok -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} rychlost pohybu`,
            zh: `花瓣伏击 -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} 移动速度`,
            fr: `Embûche florale -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Vitesse de déplacement`,
            br: `Emboscada Floral -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Velocidade de Movimento`,
          },
        },
        tier2_left: {
          title: {
            en: `Floral Ambush Heal ${BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100}%`,
            ru: `Бутоны Цветочной ловушки лечат союзников на ${
              BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100
            }% от своего урона`,
            cz: `Květinový útok léčí spojence na ${
              BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100
            }% způsobeného poškození`,
            zh: `花瓣伏击治疗 ${BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100}%`,
            fr: `Embûche florale soigne les alliés de ${
              BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100
            }% des dégâts infligés`,
            br: `Emboscada Floral cura aliados em ${
              BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100
            }% do dano causado`,
          },
        },
        tier2_right: {
          title: {
            en: `Prickly Vine attach delay -${toSecRaw(
              BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION
            )}s`,
            ru: `Колючая лоза прикрепляется быстрее на ${toSecRaw(
              BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION
            )} секунд`,
            cz: `Trnitý vinný trn se připevní o ${toSecRaw(
              BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION
            )}s rychleji`,
            zh: `刺藤附着延迟 -${toSecRaw(BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION)}s`,
            fr: `Délai de fixation de la vigne épineuse -${toSecRaw(
              BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION
            )}s`,
            br: `Atraso de fixação da Videira Espinhosa -${toSecRaw(
              BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION
            )}s`,
          },
        },
      }
    case Shared.HEROES.FLIN:
      return {
        tier1_left: {
          title: {
            en: `Attack Range +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            ru: `+${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE} дальности атаки`,
            cz: `Dosah útoku +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            zh: `攻击范围 +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            fr: `Portée d'attaque +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            br: `Alcance do Ataque +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
          },
        },
        tier1_right: {
          title: {
            en: `Marksmanship +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} stacks`,
            ru: `+${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} зарядов Меткой стрельбы`,
            cz: `Míření +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} zásob`,
            zh: `射手 +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} 层`,
            fr: `Tir de précision +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} charges`,
            br: `Precisão +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} cargas`,
          },
        },
        tier2_left: {
          title: {
            en: `Precise Shot +${fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100)}% Damage & Range`,
            ru: `Меткий выстрел: +${fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100)}% урона и дальности`,
            cz: `Přesný výstřel +${fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100)}% poškození a dosahu`,
            zh: `精准射击 +${fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100)}% 伤害和范围`,
            fr: `Tir précis +${fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100)}% de dégâts et de portée`,
            br: `Tiro Preciso +${fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100)}% de Dano e Alcance`,
          },
        },
        tier2_right: {
          title: {
            en: 'Marksman - Multishot',
            ru: 'Меткая стрельба получает эффект Залпа',
            cz: 'Míření - Vícestřel',
            zh: '射手 - 多重射击',
            fr: 'Tir de précision - Tir multiple',
            br: 'Atirador - Tiro Múltiplo',
          },
          description: {
            en: `Flin fires an additional 2 arrows, angled at 30°, dealing ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% Normal Damage per extra arrow.`,
            ru: `Залп: Флин выпускает дополнительно 2 стрелы под углом 30 градусов при каждой атаке, каждая из которых наносит ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% физического урона.`,
            cz: `Vícestřel: Flin vystřelí další 2 šípy pod úhlem 30°, každý z nich způsobí ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% normálního poškození.`,
            zh: `多重射击：Flin额外发射2支箭，角度为30°，每支箭造成${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}%普通伤害。`,
            fr: `Tir multiple : Flin tire 2 flèches supplémentaires, inclinées à 30°, infligeant ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% de dégâts normaux par flèche supplémentaire.`,
            br: `Tiro Múltiplo: Flin dispara 2 flechas adicionais, inclinadas a 30°, causando ${getDamage(
              FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100
            )}% de Dano Normal por flecha extra.`,
          },
        },
      }

    case Shared.HEROES.THOMAS:
      return {
        tier1_left: {
          title: {
            en: `Shadow Carrot +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Damage`,
            ru: `+${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} к урону от Теневой моркови`,
            cz: `Stínová mrkev +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} poškození`,
            zh: `暗影胡萝卜 +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} 伤害`,
            fr: `Carotte d'ombre +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} dégâts`,
            br: `Cenoura Sombria +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} de Dano`,
          },
        },
        tier2_left: {
          title: {
            en: 'Shadow Carrot Silence',
            ru: 'Теневая морковь накладывает немоту',
            cz: 'Stínová mrkev němčí',
            zh: '暗影胡萝卜 沉默',
            fr: "Carotte d'ombre Silence",
            br: 'Cenoura Sombria Silêncio',
          },
          description: {
            en: 'If an enemy is attached to the Shadow Carrot, that enemy will be silenced until the carrot is removed.',
            ru: 'Если морковь прикреплена к вражескому герою, он получит немоту пока морковь не исчезнет.',
            cz: 'Pokud je nepřítel připojen k Stínové mrkvi, bude němý, dokud mrkev není odstraněna.',
            zh: '如果敌人被附着在暗影胡萝卜上，那个敌人将被沉默，直到胡萝卜被移除。',
            fr: "Si un ennemi est attaché à la Carotte d'ombre, cet ennemi sera réduit au silence jusqu'à ce que la carotte soit retirée.",
            br: 'Se um inimigo estiver preso à Cenoura Sombria, esse inimigo será silenciado até que a cenoura seja removida.',
          },
        },
        tier1_right: {
          title: {
            en: `Shuriken Toss Cooldown ${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)}`,
            ru: `${toSecRaw(
              ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN
            )} сек. перезарядки Броска сюрикена`,
            cz: `Shuriken Toss obnovení ${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)}`,
            zh: `手里剑投掷冷却 ${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)}`,
            fr: `Recharge du lancer de shuriken ${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)}`,
            br: `Recarga do Arremesso de Shuriken ${toSecRaw(
              ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN
            )}`,
          },
        },
        tier2_right: {
          title: {
            en: `Shadow Carrot Stun ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
            ru: `Теневая морковь при повторной активации оглушает врага на ${toSecRaw(
              ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN
            )} сек.`,
            cz: `Stínová mrkev omráčí nepřítele na ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
            zh: `暗影胡萝卜 眩晕 ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
            fr: `Carotte d'ombre Étourdissement ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
            br: `Cenoura Sombria Atordoamento ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
          },
        },
      }

    case Shared.HEROES.ALVAR:
      return {
        tier1_left: {
          title: {
            en: `Divine Mark Damage +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            ru: `+${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE} к урону метки`,
            cz: `Boží značka poškození +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            zh: `神圣印记伤害 +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            fr: `Dégâts de la marque divine +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            br: `Dano da Marca Divina +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
          },
        },
        tier1_right: {
          title: {
            en: `Furious Kick +${fixed(AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100, 1)}% lifesteal`,
            ru: `Яростный удар даёт +${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}% Кражи здоровья`,
            cz: `Furious Kick +${fixed(AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100, 1)}% životů`,
            zh: `Furious Kick +${fixed(AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100, 1)}% 生命偷取`,
            fr: `Furious Kick +${fixed(AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100, 1)}% vol de vie`,
            br: `Furious Kick +${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}% Roubo de Vida`,
          },
          description: {
            en: `Furious Kick bonus in addition also increase lifesteal by ${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}%`,
            ru: `Усиление от Яростного удара также даёт +${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}% Кражи здоровья`,
            cz: `Furious Kick bonus navíc zvyšuje životy o ${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}%`,
            zh: `Furious Kick 奖励额外增加生命偷取 ${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}%`,
            fr: `Le bonus de Furious Kick augmente également le vol de vie de ${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}%`,
            br: `O bônus do Furious Kick também aumenta o roubo de vida em ${fixed(
              AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100,
              1
            )}%`,
          },
        },
        tier2_left: {
          title: {
            en: `Furious Kick Stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            ru: `+${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)} сек. оглушения от Яростного удара`,
            cz: `Furious Kick omráčení +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            zh: `Furious Kick 眩晕 +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            fr: `Étourdissement de Furious Kick +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            br: `Furious Kick Atordoamento +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: `Heavenly Kick Cooldown ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            ru: `${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)} сек. перезарядки Небесного удара`,
            cz: `Heavenly Kick obnovení ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            zh: `天堂踢冷却 ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            fr: `Recharge de Heavenly Kick ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            br: `Recarga do Chute Celestial ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
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
            cz: `Ticking Bomb +${Math.floor(
              ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100
            )}% spouštěcí poškození`,
            zh: `Ticking Bomb +${Math.floor(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)}% 触发伤害`,
            fr: `Ticking Bomb +${Math.floor(
              ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100
            )}% Dégâts de déclenchement`,
            br: `Ticking Bomb +${Math.floor(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)}% Dano de Gatilho`,
          },
        },
        tier1_right: {
          title: {
            en: `Basic Attack Range +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            ru: `+${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE} к дальности атаки`,
            cz: `Základní útok Dosah +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            zh: `基础攻击范围 +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            fr: `Portée d'attaque de base +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            br: `Alcance do Ataque Básico +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
          },
        },
        tier2_left: {
          title: {
            en: `Ticking Bomb Stun +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            ru: `+${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN} сек. к оглушению Часовой бомбы`,
            cz: `Ticking Bomb omráčení +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            zh: `Ticking Bomb 眩晕 +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            fr: `Ticking Bomb Étourdissement +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            br: `Ticking Bomb Atordoamento +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
          },
        },
        tier2_right: {
          title: {
            en: 'Tumble - Freezing Trap',
            ru: 'Кувырок создаёт Замораживающую ловушку',
            cz: 'Tumble - Zmrazující past',
            zh: 'Tumble - 冰冻陷阱',
            fr: 'Tumble - Piège de glace',
            br: 'Tumble - Armadilha Congelante',
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
            cz:
              `Tumble vytvoří zmrazující past na pozici Arela. Když na past vstoupí nepřátelská jednotka, bude zmrazena po dobu ${toSec(
                ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION
              )}, což zamezí veškerému pohybu.` +
              `<br/> Past trvá ${toSec(
                ArelAbilityData.FREEZING_TRAP_DURATION
              )} a poskytuje viditelnost v malém poloměru.`,
            zh:
              `Tumble 在 Arel 的位置创建一个冰冻陷阱。当敌方单位踩到陷阱时，他们将被冻结 ${toSec(
                ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION
              )}，阻止所有形式的移动。` +
              `<br/> 陷阱持续 ${toSec(ArelAbilityData.FREEZING_TRAP_DURATION)} 并在小范围内提供视野。`,
            fr:
              `Tumble crée un piège de glace à la position d'Arel. Lorsqu'une unité ennemie marche sur le piège, elle est gelée pendant ${toSec(
                ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION
              )}, empêchant tout mouvement.` +
              `<br/> Le piège dure ${toSec(
                ArelAbilityData.FREEZING_TRAP_DURATION
              )} et fournit une vision dans un petit rayon.`,
            br:
              `Tumble cria uma armadilha congelante na posição de Arel. Quando uma unidade inimiga pisa na armadilha, ela é congelada por ${toSec(
                ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION
              )}, impedindo qualquer forma de movimento.` +
              `<br/> A armadilha dura ${toSec(
                ArelAbilityData.FREEZING_TRAP_DURATION
              )} e fornece visão em um pequeno raio.`,
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
            cz: `Triumphant Upheaval +${toSecRaw(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_DURATION)}s`,
            zh: `Triumphant Upheaval +${toSecRaw(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_DURATION)}s`,
            fr: `Triumphant Upheaval +${toSecRaw(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_DURATION)}s`,
            br: `Triumphant Upheaval +${toSecRaw(HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_DURATION)}s`,
          },
          description: {
            en: `Increases the duration of Triumphant Upheaval's pushback.`,
            ru: 'Увеличивает длительность отбрасывания у Триумфального переворота',
            cz: `Zvyšuje dobu odhazování Triumphant Upheaval.`,
            zh: `增加Triumphant Upheaval的推开时间。`,
            fr: `Augmente la durée du renversement triomphant.`,
            br: `Aumenta a duração do empurrão do Triumphant Upheaval.`,
          },
        },
        tier1_right: {
          title: {
            en: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Damage`,
            ru: `+${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} к урону от Гнева правосудия`,
            cz: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Poškození`,
            zh: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} 伤害`,
            fr: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Dégâts`,
            br: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Dano`,
          },
        },
        tier2_left: {
          title: {
            en: `Justice's Wrath Stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            ru: `+${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)} сек. оглушения от Гнева правосудия`,
            cz: `Justice's Wrath omráčení +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            zh: `Justice's Wrath 眩晕 +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            fr: `Justice's Wrath Étourdissement +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            br: `Justice's Wrath Atordoamento +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: 'Triumphant Upheaval Pure + Dispel',
            ru: 'Триумфальный переворот наносит чистый урон/рассеивает',
            cz: 'Triumphant Upheaval čistý + rozptýlení',
            zh: 'Triumphant Upheaval 纯净 + 驱散',
            fr: 'Triumphant Upheaval Pur + Dissipation',
            br: 'Triumphant Upheaval Puro + Dispersão',
          },
          description: {
            en: 'Triumphant Upheaval deals pure damage, bypassing both Armor and Magic Resistance, and dispels all negative effects on trigger.',
            ru: 'Триумфальный переворот наносит чистый урон и рассеивает все негативные эффекты при активации.',
            cz: 'Triumphant Upheaval způsobuje čisté poškození, obejde jak obranu, tak magický odpor, a rozptýlí všechny negativní efekty na spouštění.',
            zh: 'Triumphant Upheaval 造成纯净伤害，绕过护甲和魔法抗性，并在触发时驱散所有负面效果。',
            fr: "Triumphant Upheaval inflige des dégâts purs, contournant à la fois l'armure et la résistance magique, et dissipe tous les effets négatifs à la déclenchement.",
            br: 'Triumphant Upheaval causa dano puro, ignorando tanto a Armadura quanto a Resistência Mágica, e dispersa todos os efeitos negativos no gatilho.',
          },
        },
      }

    case Shared.HEROES.KIRA:
      return {
        tier1_left: {
          title: {
            en: `Lightning Shock Duration +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            ru: `Удар молнии длится +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)} сек.`,
            cz: `Úder blesku trvání +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            zh: `闪电冲击持续时间 +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            fr: `Durée de l'impact de foudre +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            br: `Duração do Choque de Raios +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Lightning Shock +${Math.floor(KiraAbilityData.TALENT_T1_RIGHT_ENH_ATTACK_BONUS_HEALING * 100)}% Healing`,
            ru: `Удар молнии лечит +${Math.floor(KiraAbilityData.TALENT_T1_RIGHT_ENH_ATTACK_BONUS_HEALING * 100)}%`,
            cz: `Úder blesku +${Math.floor(KiraAbilityData.TALENT_T1_RIGHT_ENH_ATTACK_BONUS_HEALING * 100)}% léčení`,
            zh: `闪电冲击 +${Math.floor(KiraAbilityData.TALENT_T1_RIGHT_ENH_ATTACK_BONUS_HEALING * 100)}% 治疗`,
            fr: `Impact de foudre +${Math.floor(KiraAbilityData.TALENT_T1_RIGHT_ENH_ATTACK_BONUS_HEALING * 100)}% de soins`,
            br: `Choque de Raios +${Math.floor(KiraAbilityData.TALENT_T1_RIGHT_ENH_ATTACK_BONUS_HEALING * 100)}% de Cura`,
          },
        },
        tier2_left: {
          title: {
            en: `Rain of Spark +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} spark`,
            // Translate also the name of spell
            ru: `Дождь искр +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} искра`,
            cz: `Déšť jisker +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} jiskra`,
            zh: `火花雨 +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} 火花`,
            fr: `Pluie d'étincelles +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} étincelle`,
            br: `Relâmpago do Abismo +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} faísca`,
          },
        },
        tier2_right: {
          title: {
            en: '+1 Lightning Shock Target',
            ru: 'Удар молнии поражает +1 дополнительную цель',
            cz: '+1 cíl Úderu blesku',
            zh: '+1 闪电冲击目标',
            fr: '+1 cible Impact de foudre',
            br: '+1 Alvo de Choque de Raios',
          },
        },
      }

    case Shared.HEROES.FOXY:
      return {
        tier1_left: {
          title: {
            en: 'Incendiary Grenade',
            ru: 'Зажигательная граната',
            cz: 'Zápalná granát',
            zh: '燃烧手榴弹',
            fr: 'Grenade incendiaire',
            br: 'Granada Incendiária',
          },
          description: {
            en: `Explosive Grenade ignites enemies, dealing ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% of target's max health as bonus Magic Damage per second for a short duration.`,
            ru: `Взрывная граната поджигает задетых врагов, нанося дополнительно ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% от макс. Здоровья цели в секунду.`,
            cz: `Explozivní granát zapaluje nepřátele, způsobuje ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% maximálního života cíle jako bonusové kouzlo za sekundu po krátkou dobu.`,
            zh: `爆炸手榴弹点燃敌人，每秒造成目标最大生命值的额外魔法伤害 ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% 作为奖励，持续一段时间。`,
            fr: `La grenade explosive enflamme les ennemis, infligeant ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% des PV max de la cible en dégâts magiques bonus par seconde pendant une courte durée.`,
            br: `Granada Explosiva inflama inimigos, causando ${fixed(
              FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100
            )}% da vida máxima do alvo como Dano Mágico bônus por segundo por um curto período.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Freezing Grenade',
            ru: 'Замораживающая граната',
            cz: 'Mrazící granát',
            zh: '冰冻手榴弹',
            fr: 'Grenade de congélation',
            br: 'Granada Congelante',
          },
          description: {
            en: `Explosive Grenade freezes enemies for up to ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )}, preventing all forms of movement`,
            ru: `Взрывная граната замораживает задетых врагов на ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )} сек.`,
            cz: `Explozivní granát zmrazuje nepřátele až na ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )}, což zabraňuje veškerému pohybu`,
            zh: `爆炸手榴弹冻结敌人最多 ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )}，阻止所有形式的移动`,
            fr: `La grenade explosive gèle les ennemis pendant ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )}, empêchant tout mouvement`,
            br: `Granada Explosiva congela inimigos por até ${toSec(
              FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION
            )}, impedindo qualquer forma de movimento`,
          },
        },
        tier2_left: {
          title: {
            en: `Grenade radius +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}% к радиусу гранат`,
            cz: `Poloměr granátu +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            zh: `手榴弹半径 +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            fr: `Rayon de la grenade +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            br: `Raio da granada +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
          },
        },
        tier2_right: {
          title: {
            en: `Rapid Fire Damage +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}% к урону Беглого огня`,
            cz: `Rapid Fire Poškození +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            zh: `Rapid Fire 伤害 +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            fr: `Dégâts de Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            br: `Dano do Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
          },
        },
      }

    case Shared.HEROES.MAGDALENE:
      return {
        tier1_left: {
          title: {
            en: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} Soul Harvest stacks - Kill/Assist`,
            ru: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} к Силе умений за убийство/содействие`,
            cz: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} Soul Harvest zásob - Zabití/Pomoc`,
            zh: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} 灵魂收割层数 - 击杀/协助`,
            fr: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} piles de Moisson d'âmes - Tuer/Aider`,
            br: `+${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} pilhas de Colheita de Almas - Matar/Ajudar`,
          },
          description: {
            en: `Enhances your passive, providing an additional ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} stacks of Soul Harvest for each kill or assist`,
            ru: `Каждый убитый враг после изучения этого таланта будет давать дополнительно ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} Силы умений`,
            cz: `Zlepšuje vaši pasivní schopnost, poskytující další ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} zásob Soul Harvest za každé zabití nebo pomoc`,
            zh: `增强你的被动技能，为每次击杀或协助提供额外的 ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} 层灵魂收割`,
            fr: `Améliore votre passif, fournissant ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} piles supplémentaires de Moisson d'âmes pour chaque élimination ou assistance`,
            br: `Aprimora sua passiva, fornecendo ${MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP} pilhas adicionais de Colheita de Almas para cada abate ou assistência`,
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
            cz: `Scream of Pain Odrážení +${toSecRaw(
              MagdaleneAbilityData.TALENT_T1_RIGHT_SCREAM_OF_PAIN_PUSHBACK_DURATION
            )}s`,
            zh: `Scream of Pain 推开 +${toSecRaw(
              MagdaleneAbilityData.TALENT_T1_RIGHT_SCREAM_OF_PAIN_PUSHBACK_DURATION
            )}s`,
            fr: `Scream of Pain Repousse +${toSecRaw(
              MagdaleneAbilityData.TALENT_T1_RIGHT_SCREAM_OF_PAIN_PUSHBACK_DURATION
            )}s`,
            br: `Scream of Pain Empurrão +${toSecRaw(
              MagdaleneAbilityData.TALENT_T1_RIGHT_SCREAM_OF_PAIN_PUSHBACK_DURATION
            )}s`,
          },
        },
        tier2_left: {
          title: {
            en: `Swarm of Ghosts slow ${toSecRaw(MagdaleneAbilityData.TALENT_T2_SLOW_DURATION)}s`,
            ru: `Волна призраков замедляет ${toSecRaw(MagdaleneAbilityData.TALENT_T2_SLOW_DURATION)}s`,
            cz: `Swarm of Ghosts zpomaluje ${toSecRaw(MagdaleneAbilityData.TALENT_T2_SLOW_DURATION)}s`,
            zh: `Swarm of Ghosts 减速 ${toSecRaw(MagdaleneAbilityData.TALENT_T2_SLOW_DURATION)}s`,
            fr: `Swarm of Ghosts ralentit ${toSecRaw(MagdaleneAbilityData.TALENT_T2_SLOW_DURATION)}s`,
            br: `Swarm of Ghosts desacelera ${toSecRaw(MagdaleneAbilityData.TALENT_T2_SLOW_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: `Scream of Pain Applies ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} Stacks`,
            ru: 'Загробный вопль накладывает заряды Призрачного пакта',
            cz: `Scream of Pain aplikuje ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} zásob`,
            zh: `Scream of Pain 应用 ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} 层`,
            fr: `Scream of Pain Applique ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} piles`,
            br: `Scream of Pain Aplica ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} pilhas`,
          },
          description: {
            en: `Scream of Pain applies ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} stacks of ghost pact.`,
            ru: `Загробный вопль накладывает ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} заряда Призрачного пакта`,
            cz: `Scream of Pain aplikuje ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} zásob duchovní smlouvy`,
            zh: `Scream of Pain 应用 ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} 层幽灵契约`,
            fr: `Scream of Pain applique ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} piles de pacte fantôme`,
            br: `Scream of Pain aplica ${MagdaleneAbilityData.TALENT_T2_RIGHT_SCREAM_OF_PAIN_APPLY_STACK} pilhas de pacto fantasma`,
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

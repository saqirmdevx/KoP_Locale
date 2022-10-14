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
//@ts-ignore
} from 'shared';
import { toSecRaw, toSec, fixed } from './misc';

interface ITalentProps {
    title: {[key in string]: string}
    description?: {[key in string]: string}
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
                    en: `Magical Orb cooldown ${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)}`,
                    ru: `${toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)} сек. перезарядки Волшебной сферы`,
                }
            },
            tier1_right: {
                title: {
                    en: `Charm duration +${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_DURATION)}`,
                    ru: `+${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_DURATION)} сек. к длительности очарования`,
                },
            },
            tier2_left: {
                title: {
                    en: `Magical Orb range +${KumihuAbilityData.TALENT_T2_LEFT_CAST_RANGE}`,
                    ru: `+${KumihuAbilityData.TALENT_T2_LEFT_CAST_RANGE} к дальности Волшебной сферы`,
                },
            },
            tier2_right: {
                title: {
                    en: `Enhanced attack +${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}%`,
                    ru: `+${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}% к урону от усиленной атаки`,
                },
                description: {
                    en: `Enhanced attack deals in addition ${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}% normal damage and apply all onAttackHit effects`,
                    ru: `Усиленная атака наносит дополнительно ${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}% физического урона и накладывает все эффекты при попадании`
                }
            }
        };

    case Shared.HEROES.SPARROW:
        return {
            tier1_left: {
                title: {
                    en: `Ground slam damage +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
                    ru: `+${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE} к урону от Удара по земле`,
                }
            },
            tier1_right: {
                title: {
                    en: `Dash range +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}`,
                    ru: `+${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE} к дальности Рывка`,
                },
            },
            tier2_left: {
                title: {
                    en: `Ground slam pure / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
                    ru: `+${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}% от недостающего здоровья Удара по земле/урон становится чистым`,
                },
                description: {
                    en: `Ground slam will deal pure damage and increase it's percentage damage by ${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
                    ru: `Удар по земле будет наносить чистый урон, а процентный урон от недостающего здоровья цели увеличится на ${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`
                }
            },
            tier2_right: {
                title: {
                    en: `Dash cooldown ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
                    ru: `${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)} сек. перезарядки Рывка`,
                },
            }
        };

    case Shared.HEROES.ICEAT:
        return {
            tier1_left: {
                title: {
                    en: 'Attack slow',
                    ru: 'Атаки становятся замедляющими',
                },
                description: {
                    en: `Your attacks will slow enemys movement speed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> and attack speed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
                    ru: `Ваши атаки будут уменьшать скорость передвижения целей на <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> и их скорость атаки на <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`,
                }
            },
            tier1_right: {
                title: {
                    en: `Cold Embrace movespeed +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
                    ru: `+${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS} к скорости передвижения во время действия Объятий холода`,
                },
            },
            tier2_left: {
                title: {
                    en: `+${ICeatAbilityData.TALENT_T2_LEFT_ADDITIONAL_ICICLE} icicle bolt`,
                    ru: `+${ICeatAbilityData.TALENT_T2_LEFT_ADDITIONAL_ICICLE} сосулька у Сосулек`
                },
            },
            tier2_right: {
                title: {
                    en: `Cold Embrace duration +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
                    ru: `+${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)} сек. к длительности Объятий холода`
                },
            }
        };

    case Shared.HEROES.VEIL: {
        return {
            tier1_left: {
                title: {
                    en: `Astral step slow +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
                    ru: `+${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)} сек. к замедлению от Астрального шага`,
                }
            },
            tier1_right: {
                title: {
                    en: `Astral blades cooldown ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
                    ru: `${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)} сек. перезарядки Астральных клинков`,
                },
            },
            tier2_left: {
                title: {
                    en: `Enhanced damage +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
                    ru: `+${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}% к урону от усиленных атак или Астрального шага`,
                },
            },
            tier2_right: {
                title: {
                    en: 'Fused astral step',
                    ru: 'Астральное мастерство',
                },
                description: {
                    en: `Reduce cooldown of Astral Step by ${toSecRaw(VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN)}s \n` +
                        'With enhanced state no longer requires to touch enemy hero to reset cooldown',
                    ru: `Перезарядка Астрального шага снижается на ${toSecRaw(VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN)} сек. \n` +
                        'Больше нет необходимости попадать по врагу усиленным Астральным шагом, чтобы сбросить его перезарядку',
                }
            }
        };
    }
	
    case Shared.HEROES.BELLE:
        return {
            tier1_left: {
                title: {
                    en: `Prickly vine duration +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}`,
                    ru: `+${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)} сек. оглушения от Колючей лозы`,
                },
            },
            tier1_right: {
                title: {
                    en: `Floral Ambush slow -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW}`,
                    ru: `Цветочная ловшка снижает скорость передвижения врагов на -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW}`
                },
            },
            tier2_left: {
                title: {
                    en: `Floral Ambush heal ${BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100}%`,
                    ru: `Бутоны Цветочной ловушки лечат союзников на ${BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100}% от своего урона`,
                },
            },
            tier2_right: {
                title: {
                    en: '+1 Floral ambush bomb',
                    ru: '+1 бутон у Цветочной ловушки',
                },
            }
        };
    case Shared.HEROES.FLIN:
        return {
            tier1_left: {
                title: {
                    en: `Attack range +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}`,
                    ru: `+${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE} дальности атаки`,
                }
            },
            tier1_right: {
                title: {
                    en: `Marksmanship +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} stacks`,
                    ru: `+${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} зарядов Меткой стрельбы`,
                },
            },
            tier2_left: {
                title: {
                    en: 'Precise shot +25% damage',
                    ru: '+25% урона для Точного выстрела',
                },
            },
            tier2_right: {
                title: {
                    en: 'Marksman - multishot',
                    ru: 'Меткая стрельба получает эффект Залпа',
                },
                description: {
                    en: `Flin fires additional 2 arrows with angle of 30 degrees, each deals ${getDamage(FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100)}% normal damage.`,
                    ru: `Залп: Флин выпускает дополнительно 2 стрелы под углом 30 градусов при каждой атаке, каждая из которых наносит ${getDamage(FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100)}% физического урона.`
                }
            }
        };

    case Shared.HEROES.THOMAS:
        return {
            tier1_left: {
                title: {
                    en: `Shadow carrot +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} damage`,
                    ru: `+${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} к урону от Теневой моркови`,
                }
            },
            tier2_left: {
                title: {
                    en: 'Shadow carrot silence',
                    ru: 'Теневая морковь накладывает немоту',
                },
                description: {
                    en: 'If enemy player is attached to carrot, he will be silenced until carrot is removed.',
                    ru: 'Если морковь прикреплена к вражескому герою, он получит немоту пока морковь не исчезнет.'
                }
            },
            tier1_right: {
                title: {
                    en: `Shuriken Toss cooldown ${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)}`,
                    ru: `${toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)} сек. перезарядки Броска сюрикена`,
                },
            },
            tier2_right: {
                title: {
                    en: `Shuriken carrot stun ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
                    ru: `Теневая морковь при повторной активации оглушает врага на ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)} сек.`,
                },
            }
        };

    case Shared.HEROES.ALVAR:
        return {
            tier1_left: {
                title: {
                    en: `Mark damage +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
                    ru: `+${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE} к урону метки`,
                }
            },
            tier1_right: {
                title: {
                    en: 'Furious Kick boost',
                    ru: 'Усиливающий Яростный удар',
                },
                description: {
                    en: `<b>Furious Kick</b> boost morale of all nearby units and increase ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_MS} move speed and ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_AS*100}% attack speed for ${toSec(AlvarAbilityData.TALENT_FURIOUS_KICK_DURATION)}`,
                    ru: `Каждый раз при применении <b>Яростного удара</b> вы и все союзники вокруг получаете ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_MS} скорости передвижения и ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_AS*100}% скорости атаки на ${toSec(AlvarAbilityData.TALENT_FURIOUS_KICK_DURATION)}`
                }
            },
            tier2_left: {
                title: {
                    en: `Furious kick stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
                    ru: `+${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)} сек. оглушения от Яростного удара`,
                },
            },
            tier2_right: {
                title: {
                    en: `Heavenly Kick cooldown ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
                    ru: `${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)} сек. перезарядки Небесного удара`,
                },
            }
        };

    case Shared.HEROES.AREL:
        return {
            tier1_left: {
                title: {
                    en: `Ticking bomb +${Math.floor(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)}% trigger damage`,
                    ru: `+${Math.floor(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)}% к урону активированной Часовой бомбы`,
                }
            },
            tier1_right: {
                title: {
                    en: `Attack (J) range +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}`,
                    ru: `+${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE} к дальности атаки`,
                },
            },
            tier2_left: {
                title: {
                    en: `2nd bullet damage +${ArelAbilityData.TALENT_T2_LEFT_BONUS_ATTACK_DAMAGE * 100}%`,
                    ru: `+${ArelAbilityData.TALENT_T2_LEFT_BONUS_ATTACK_DAMAGE * 100}% к урону второй пули`,
                },
            },
            tier2_right: {
                title: {
                    en: 'Tumble - Freezing trap',
                    ru: 'Кувырок создаёт Замораживающую ловушку',
                },
                description: {
                    en: `Tumble will create freezing trap at Arel position. When enemy unit step on the trap, unit will be freezed for ${toSec(ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION)}` +
						`<br/> Trap last long ${toSec(ArelAbilityData.FREEZING_TRAP_DURATION)} and provide small vision`,
                    ru: `Кувырок  создаст Замораживающую ловушку на позиции Арела, которая заморозит наступившего в неё врага на ${toSec(ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION)}` +
						`<br/> Замораживающая ловушка существует ${toSec(ArelAbilityData.FREEZING_TRAP_DURATION)} и даёт небольшой обзор вокруг себя`
                }
            }
        };

    case Shared.HEROES.HAZEL:
        return {
            tier1_left: {
                title: {
                    en: `Triumphant Upheaval radius +${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_RADIUS}`,
                    ru: `+${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_RADIUS} к радиусу Триумфального переворота`,
                }
            },
            tier1_right: {
                title: {
                    en: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} damage`,
                    ru: `+${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} к урону от Гнева правосудия`,
                },
            },
            tier2_left: {
                title: {
                    en:  `Justice's Wrath stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
                    ru:  `+${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)} сек. оглушения от Гнева правосудия`,
                },
            },
            tier2_right: {
                title: {
                    en: 'Triumphant Upheaval pure/dispel',
                    ru: 'Триумфальный переворот наносит чистый урон/рассеивает',
                },
                description: {
                    en: 'Triumphant Upheaval deals pure damage and dispel all negative effects on trigger.',
                    ru: 'Триумфальный переворот наносит чистый урон и рассеивает все негативные эффекты при активации.'
                }
            }
        };
		
    case Shared.HEROES.KIRA:
        return {
            tier1_left: {
                title: {
                    en: 'Lightning Shock dispersion',
                    ru: 'Удар молнии накладывает Дисперсию',
                },
                description: {
                    en: 'Lightning Shock apply dispersion on enemey targets, reduce all healing done by 35%',
                    ru: 'Удар молнии накладывает Дисперсию на вражеские цели, которая снижает получаемое ими исцеление на 35%'
                }
            },
            tier1_right: {
                title: {
                    en: `Rain of sparks damage +${Math.floor(KiraAbilityData.TALENT_T1_RAIN_OF_SPARKS_BONUS * 100)}%`,
                    ru: `+${Math.floor(KiraAbilityData.TALENT_T1_RAIN_OF_SPARKS_BONUS * 100)}% к урону Дождя искр`,
                },
            },
            tier2_left: {
                title: {
                    en: `Lightning Shock duration +${toSecRaw(KiraAbilityData.TALENT_T2_LEFT_ENH_ATTACK_DURATION)}s`,
                    ru: `+${toSecRaw(KiraAbilityData.TALENT_T2_LEFT_ENH_ATTACK_DURATION)} сек. длительности Удара молнии`,
                },
            },
            tier2_right: {
                title: {
                    en: '+1 Lightning Shock target',
                    ru: 'Удар молнии поражает +1 дополнительную цель',
                },
            }
        };

    case Shared.HEROES.FOXY:
        return {
            tier1_left: {
                title: {
                    en: `Rapid fire duration +${toSecRaw(FoxyAbilityData.TALENT_T1_LEFT_RAPID_FIRE_DURATION)}`,
                    ru: `+${toSecRaw(FoxyAbilityData.TALENT_T1_LEFT_RAPID_FIRE_DURATION)} к длительности Беглого огня`,
                },
            },
            tier1_right: {
                title: {
                    en: `Grenade radius +${FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_RADIUS}`,
                    ru: `+${FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_RADIUS} к радиусу Взрывной гранаты`,
                },
            },
            tier2_left: {
                title: {
                    en: 'Rapid fire cc immunity',
                    ru: 'Беглый огонь даёт иммунитет к эффектам контроля',
                },
            },
            tier2_right: {
                title: {
                    en: `Grenade stun max +${toSecRaw(FoxyAbilityData.TALENT_T2_RIGHT_GRANADE_STUN)}`,
                    ru: `Взрывная граната оглушает цели на ${toSecRaw(FoxyAbilityData.TALENT_T2_RIGHT_GRANADE_STUN)} сек.`,
                },
            }
        };

    default: 
        return {
            tier1_left: {
                title: {
                    en: 'Unknown',
                }
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
            }
        };
    }
};

export const getDamage = (damage: number, type: Shared.DamageTypes = Shared.DamageTypes.NORMAL, baseDamage = 0): string => {
    damage = Math.floor(damage);
    baseDamage = fixed(baseDamage, 1);

    /** dont show % in game */
    return `<span class=${type === Shared.DamageTypes.NORMAL ? 'normal-d' : type === Shared.DamageTypes.PURE ? 'pure-d' : 'ability-d'}>${baseDamage > 0 ? (baseDamage + (damage > 0 ? '(+' + damage + ')' : '')) : (damage > 0 ? damage : '')}</span>`;
};


export default getHeroTalents;
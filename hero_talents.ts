/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import Shared, { BelleAbilityData, ThomasAbilityData, ICeatAbilityData, KumihuAbilityData, SparrowAbilityData, VeilAbilityData, FlinAbilityData, KiraAbilityData, HazelAbilityData, ArelAbilityData, AlvarAbilityData } from '@/misc/shared';
import { toSecRaw, toSec, fixed } from './misc';
//@ts-ignore
import { SpellType } from '@/lang/constants';

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
					en: `Dash cooldown ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_DASH_COOLDOWN)}`,
					ru: `${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_DASH_COOLDOWN)} сек. перезарядки Тайного рывка`,
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
		const damage = getDamage(VeilAbilityData.VOID_BOMB_AP_MOD * 100, SpellType.MAGICAL, VeilAbilityData.VOID_BOMB_BASE_DAMAGE);

		return {
			tier1_left: {
				title: {
					en: `Astral step slow +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
					ru: `+${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)} сек. к замедлению от Астрального шага`,
				}
			},
			tier1_right: {
				title: {
					en: `Astral blades cooldown ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}`,
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
					en: 'Astral steps apply void bomb',
					ru: 'Астральный шаг накладывает на задетые цели Бомбу пустоты',
				},
				description: {
					en: 'Passing through an enemy unit during <b> Astral Step</b> will apply <b> Void Bomb</b>. <br/>'+
						`Dealing ${damage} magical area damage after ${toSec(VeilAbilityData.VOID_BOMB_DURATION)}`,
					ru: 'Попадание по вражеским целям <b> Астральным шагом</b> наложит на них <b> Бомбу пустоты</b>. <br/>'+
						`Бомба пустоты наносит ${damage} магического урона по области спустя ${toSec(VeilAbilityData.VOID_BOMB_DURATION)}`
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
					en: `Floral Ambush heal ${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_HEAL * 100}%`,
					ru: `Бутоны Цветочной ловушки лечат союзников на ${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_HEAL * 100}% от своего урона`,
				},
			},
			tier2_left: {
				title: {
					en: 'Undispelable Prickly Vine',
					ru: 'Попадание Колючей лозой нельзя рассеять',
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
					en: `Marksmanship +${FlinAbilityData.TALENT_T1_LEFT_MARKSMANSHIP_ATTACKSPEED * 100}% atkspeed`,
					ru: `+${FlinAbilityData.TALENT_T1_LEFT_MARKSMANSHIP_ATTACKSPEED * 100}% к скорости атаки во время действия Меткой стрельбы`,
				}
			},
			tier1_right: {
				title: {
					en: `Precise shot knockback +${toSecRaw(FlinAbilityData.TALENT_T1_RIGHT_PRECISESHOT_KNOCKBACK)}s`,
					ru: `+${toSecRaw(FlinAbilityData.TALENT_T1_RIGHT_PRECISESHOT_KNOCKBACK)} сек. к отбрасыванию от Точного выстрела`,
				},
			},
			tier2_left: {
				title: {
					en: 'Precise shot global range',
					ru: 'Неограниченная дальность полёта Точного выстрела',
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
			tier1_right: {
				title: {
					en: 'Shadow carrot silence',
					ru: 'Теневая морковь накладывает немоту',
				},
				description: {
					en: 'If enemy player is attached to carrot, he will be silenced until carrot is removed.',
					ru: 'Если морковь прикреплена к вражескому герою, он получит немоту пока морковь не исчезнет.'
				}
			},
			tier2_left: {
				title: {
					en: `Shurriken Toss cooldown ${toSecRaw(ThomasAbilityData.TALENT_T2_LEFT_SHURRIKEN_TOSS_COOLDOWN)}`,
					ru: `${toSecRaw(ThomasAbilityData.TALENT_T2_LEFT_SHURRIKEN_TOSS_COOLDOWN)} сек. перезарядки Броска сюрикена`,
				},
			},
			tier2_right: {
				title: {
					en: `Shurriken carrot stun ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}s`,
					ru: `Теневая морковь при повторной активации оглушает врага на ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)} сек.`,
				},
			}
		};

	case Shared.HEROES.ALVAR:
		return {
			tier1_left: {
				title: {
					en: `Mark/stack duration +${toSecRaw(AlvarAbilityData.TALENT_T1_LEFT_STACK_DURATION)}s`,
					ru: `+${toSecRaw(AlvarAbilityData.TALENT_T1_LEFT_STACK_DURATION)} сек. к длительности зарядов/метки`,
				}
			},
			tier1_right: {
				title: {
					en: 'Furious Kick boost',
					ru: 'Усиливающий Яростный удар',
				},
				description: {
					en: `Everytime you use <b>Furious Kick</b> you gain ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_MS} move speed and ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_AS*100}% attack speed for ${toSec(AlvarAbilityData.TALENT_FURIOUS_KICK_DURATION)}`,
					ru: `Каждый раз при применении <b>Яростного удара</b> вы получаете ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_MS} скорости передвижения и ${AlvarAbilityData.TALENT_FURIOUS_KICK_BONUS_AS*100}% скорости атаки на ${toSec(AlvarAbilityData.TALENT_FURIOUS_KICK_DURATION)}`
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
					en: `Tumble distance +${ArelAbilityData.TALENT_T1_LEFT_TUMBLE_DISTANCE}`,
					ru: `+${ArelAbilityData.TALENT_T1_LEFT_TUMBLE_DISTANCE} к дальности Кувырка`,
				}
			},
			tier1_right: {
				title: {
					en: `Attack distance +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}`,
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
					ru: `Перекат создаст Замораживающую ловушку на позиции Арела, которая заморозит наступившего в неё врага на ${toSec(ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION)}` +
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
					en: 'Lightning Shock apply dispersion on enemey targets, reduce all healing done by 65%',
					ru: 'Удар молнии накладывает Дисперсию на вражеские цели, которая снижает получаемое ими исцеление на 65%'
				}
			},
			tier1_right: {
				title: {
					en: `Void phantasm cooldown ${toSecRaw(KiraAbilityData.TALENT_T1_RIGHT_VOID_PHANTASM_COOLDOWN)}`,
					ru: `${toSecRaw(KiraAbilityData.TALENT_T1_RIGHT_VOID_PHANTASM_COOLDOWN)} сек. перезарядки Фантазма пустоты`,
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

export const getDamage = (damage: number, type: SpellType = SpellType.NORMAL, baseDamage = 0): string => {
	damage = Math.floor(damage);
	baseDamage = fixed(baseDamage, 1);

	/** dont show % in game */
	return `<span class=${type === SpellType.NORMAL ? 'normal-d' : type === SpellType.PURE ? 'pure-d' : 'ability-d'}>${baseDamage > 0 ? (baseDamage + (damage > 0 ? '(+' + damage + ')' : '')) : (damage > 0 ? damage : '')} </span>`;
};


export default getHeroTalents;
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
				}
			},
			tier1_right: {
				title: {
					en: `Dash cooldown ${toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_DASH_COOLDOWN)}`,
				},
			},
			tier2_left: {
				title: {
					en: `Magical Orb range +${KumihuAbilityData.TALENT_T2_LEFT_CAST_RANGE}`,
				},
			},
			tier2_right: {
				title: {
					en: `Enhanced attack +${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}%`,
				},
				description: {
					en: `Enhanced attack deals in addition ${KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * 100}% normal damage and apply all onAttackHit effects`
				}
			}
		};

	case Shared.HEROES.SPARROW:
		return {
			tier1_left: {
				title: {
					en: `Ground slam damage +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
				}
			},
			tier1_right: {
				title: {
					en: `Dash range +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}`,
				},
			},
			tier2_left: {
				title: {
					en: `Ground slam pure / +${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`,
				},
				description: {
					en: `Ground slam will deal pure damage and increase it's percentage damage by ${SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100}%`
				}
			},
			tier2_right: {
				title: {
					en: `Dash cooldown ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
				},
			}
		};

	case Shared.HEROES.ICEAT:
		return {
			tier1_left: {
				title: {
					en: 'Attack slow',
				},
				description: {
					en: `Your attacks will slow enemys movement speed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> and attack speed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100}%</b>`
				}
			},
			tier1_right: {
				title: {
					en: `Cold Embrace movespeed +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
				},
			},
			tier2_left: {
				title: {
					en: `+${ICeatAbilityData.TALENT_T2_LEFT_ADDITIONAL_ICICLE} icicle bolt`
				},
			},
			tier2_right: {
				title: {
					en: `Cold Embrace duration +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`
				},
			}
		};

	case Shared.HEROES.VEIL: {
		const damage = getDamage(VeilAbilityData.VOID_BOMB_AP_MOD * 100, SpellType.MAGICAL, VeilAbilityData.VOID_BOMB_BASE_DAMAGE);

		return {
			tier1_left: {
				title: {
					en: `Astral step slow +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
				}
			},
			tier1_right: {
				title: {
					en: `Astral blades cooldown ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}`,
				},
			},
			tier2_left: {
				title: {
					en: `Enhanced damage +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
				},
			},
			tier2_right: {
				title: {
					en: 'Astral steps apply void bomb',
				},
				description: {
					en: 'Passing through an enemy unit during <b> Astral Step</b> will apply <b> Void Bomb</b>. <br/>'+
						`Dealing ${damage} magical area damage after ${toSec(VeilAbilityData.VOID_BOMB_DURATION)}`
				}
			}
		};
	}
	
	case Shared.HEROES.BELLE:
		return {
			tier1_left: {
				title: {
					en: `Prickly vine duration +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}`,
				},
			},
			tier1_right: {
				title: {
					en: `Floral Ambush heal ${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_HEAL * 100}%`,
				},
			},
			tier2_left: {
				title: {
					en: 'Undispelable Prickly Vine',
				},
			},
			tier2_right: {
				title: {
					en: '+1 Floral ambush bomb',
				},
			}
		};
	case Shared.HEROES.FLIN:
		return {
			tier1_left: {
				title: {
					en: `Marksmanship +${FlinAbilityData.TALENT_T1_LEFT_MARKSMANSHIP_ATTACKSPEED * 100}% atkspeed`,
				}
			},
			tier1_right: {
				title: {
					en: `Precise shot knockback +${toSecRaw(FlinAbilityData.TALENT_T1_RIGHT_PRECISESHOT_KNOCKBACK)}s`,
				},
			},
			tier2_left: {
				title: {
					en: 'Precise shot global range',
				},
			},
			tier2_right: {
				title: {
					en: 'Marksman - multishot',
				},
				description: {
					en: `Flin fires additional 2 arrows with angle of 30 degrees, each deals ${getDamage(FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100)}% normal damage.`
				}
			}
		};

	case Shared.HEROES.THOMAS:
		return {
			tier1_left: {
				title: {
					en: `Shadow carrot +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} damage`,
				}
			},
			tier1_right: {
				title: {
					en: 'Shadow carrot silence',
				},
				description: {
					en: 'If enemy player is attached to carrot, he will be silenced until carrot is removed.'
				}
			},
			tier2_left: {
				title: {
					en: `Shurriken Toss cooldown ${toSecRaw(ThomasAbilityData.TALENT_T2_LEFT_SHURRIKEN_TOSS_COOLDOWN)}`,
				},
			},
			tier2_right: {
				title: {
					en: `Shurriken carrot stun ${toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)}`,
				},
			}
		};

	case Shared.HEROES.ALVAR:
		return {
			tier1_left: {
				title: {
					en: 'Kumihu T1 Left',
				}
			},
			tier1_right: {
				title: {
					en: 'Kumihu T1 RIGHT',
				},
			},
			tier2_left: {
				title: {
					en: 'Kumihu T2 Left',
				},
			},
			tier2_right: {
				title: {
					en: 'Kumihu T2 Right',
				},
			}
		};

	case Shared.HEROES.AREL:
		return {
			tier1_left: {
				title: {
					en: 'Kumihu T1 Left',
				}
			},
			tier1_right: {
				title: {
					en: 'Kumihu T1 RIGHT',
				},
			},
			tier2_left: {
				title: {
					en: 'Kumihu T2 Left',
				},
			},
			tier2_right: {
				title: {
					en: 'Kumihu T2 Right',
				},
			}
		};

	case Shared.HEROES.HAZEL:
		return {
			tier1_left: {
				title: {
					en: 'Kumihu T1 Left',
				}
			},
			tier1_right: {
				title: {
					en: 'Kumihu T1 RIGHT',
				},
			},
			tier2_left: {
				title: {
					en: 'Kumihu T2 Left',
				},
			},
			tier2_right: {
				title: {
					en: 'Kumihu T2 Right',
				},
			}
		};
		
	case Shared.HEROES.KIRA:
		return {
			tier1_left: {
				title: {
					en: 'Kumihu T1 Left',
				}
			},
			tier1_right: {
				title: {
					en: 'Kumihu T1 RIGHT',
				},
			},
			tier2_left: {
				title: {
					en: 'Kumihu T2 Left',
				},
			},
			tier2_right: {
				title: {
					en: 'Kumihu T2 Right',
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
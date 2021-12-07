import { toSec } from "@/misc/constants";
import Shared, { BelleAbilityData, BunninjaAbilityData, ICeatAbilityData, KumihuAbilityData, SparrowAbilityData, VeilAbilityData } from "@/misc/shared";
import { SpellType, getDamage } from "@/lang/ability_desc";
import { LANG } from "@/lang/lang";

const _getSpellDescription = (id: Shared.SpellList, damage: number, abilityPower: number, level: number, cdr: number, type: SpellType): { [key in string]: string } => {
    switch (id) {
        /** Kumihu  */
        case Shared.SpellList.KUMIHU_AUTOATTACK: {
            const basic_damage = getDamage(KumihuAbilityData.AUTOATTACK_MOD_DAMAGE * damage);
            const enh_damage = getDamage(KumihuAbilityData.ENH_ATTACK_MOD_DAMAGE * abilityPower, SpellType.MAGICAL, KumihuAbilityData.ENH_ATTACK_BASE_DAMAGE + KumihuAbilityData.ENH_ATTACK_DAMAGE_PER_LEVEL * (level - 1));

            return {
                en: `Kumihu's fires 4 bullets each deals ${basic_damage} normal damage <br /> Passive: Using Dash enchants Kumihu's next basic attack to deal ${enh_damage} magic damage and apply charm for ${toSec(KumihuAbilityData.ENH_CHARM_DURATION)}`,
                ru: `Кумиху выпускает 3 снаряда, каждый из которых наносит ${basic_damage} физического урона <br /> Пассивно: Использование Тайного рывка зачаровывает следующую атаку Кумиху, которая нанесёт ${enh_damage} магического урона и наложит очарование на цель на ${toSec(KumihuAbilityData.ENH_CHARM_DURATION)}`,
                cz: `Kumihu vystřelí 4 kulky, každá způsobí ${basic_damage} normálního poškození <br /> Pasivní: Použití Skoku očaruje další základní útok, aby způsobil ${enh_damage} magické poškození a očaruje protivnika na ${toSec(KumihuAbilityData.ENH_CHARM_DURATION)}` ,
            }
        }

        case Shared.SpellList.KUMIHU_MAGICAL_ORB: {
            const base_damage = getDamage(KumihuAbilityData.MAGICAL_ORB_DMG_MODIFIER * abilityPower, SpellType.MAGICAL, KumihuAbilityData.MAGICAL_ORB_BASE_DAMAGE + (KumihuAbilityData.MAGICAL_ORB_DAMAGE_PER_LEVEL * (level - 1)));
            return {
                en: `Kumihu throws a blue orb that deals ${base_damage} magic damage and returns to her after reaching its max range dealing ${base_damage} magic damage to enemies in its way.`,
                ru: `Кумиху швыряет синюю сферу, которая наносит ${base_damage} магического урона и затем возвращается к ней, нанося ${base_damage} магического урона всем врагам на своём пути.`,
                cz: `Kumihu vrhne modrou kouli, která způsobí ${base_damage} magického poškození, poté se k ní vrátí po dosažení maximálního dosahu a způsobí ${base_damage} magického poškození nepřátelům, kteří jí stojí v cestě.`,
            }
        }

        case Shared.SpellList.KUMIHU_DASH:
            return {
                en: `Kumihu dashes a short distance. This will activate her passive for ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
                ru: `Кумиху совершает рывок на короткую дистанцию. Это активирует её пассивную способность на ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
                cz: `Kumihu vykročí dopředu a tím aktivuje svou pasivní schopnost na ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
            }

        /** Sparrow */
        case Shared.SpellList.SPARROW_AUTOATTACK: {
            const base_damage = getDamage(SparrowAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enh_damage = getDamage(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * damage);

            return {
                en: `Sparrow swings and thrusts her sword doing ${base_damage} per hit. <br />Passive: Using an ability charges Sparrow's sword. Her next basic attack knocks up enemies for ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} and deals ${enh_damage} damage.`,
                ru: `Спарроу взмахивает и делает выпад своим мечом, нанося ${base_damage} физического урона за попадание. <br />Пассивно: Использование способностей зачаровывает меч Спарроу. Её следующая базовая атака подбрасывает врагов на ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} и наносит ${enh_damage} урона.`,
                cz: `Sparrow máchá mečem a způsobuje ${base_damage} za zásah. <br />Pasivní: Použití schopnosti nabije meč. Její další základní útok srazí nepřátele na ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} a způsobí ${enh_damage} poškození.`,
            }
        }

        case Shared.SpellList.SPARROW_DASH:
            return {
                en: `Sparrow quickly dashes while thrusting her sword forward, stunning enemies she hits for ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} and dealing ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)}.`,
                ru: `Спарроу совершает стремительный рывок, оглушая задетых врагов на ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} и нанося ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)} урона.`,
                cz: `Sparrow se vrhne kupředu a vytasí svůj meč, čímž omráčí nepřátele které zasáhne na ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (úroveň - 1)))} a způsobí ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)}.`,            
            }

        case Shared.SpellList.SPARROW_GROUND_SLAM: {
            const base_damage = getDamage(0, type, SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE);
            const percDamage = Math.floor(SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG * 100);

            return {
                en: `Sparrow unleashes the power of her sword to create a crescent-shaped sword beam dealing ${base_damage} (plus ${percDamage}% of target's missing health) to enemies that get hit.`,
                ru: `Спарроу высвобождает силу своего меча, создавая волну в форме полумесяца, наносящую ${base_damage} (плюс ${percDamage}% от недостающего здоровья цели) урона задетым врагам.`,
                cz: `Sparrow uvolní sílu uvnitř svého meče a vytvoří paprsek ve tvaru půlměsíce, který udělí ${base_damage} (plus ${percDamage} % chybějícího zdraví cíle) zasaženým nepřátelům.`,
            }
        }

        /** I'Ceat */
        case Shared.SpellList.ICEAT_AUTOATTACK: {
            const base_damage = getDamage(ICeatAbilityData.AUTOATTACK_MOD_DAMAGE * damage);
            return {
                en: `I'ceat hurls a ball of snow a short distance dealing ${base_damage} damge <br />Passive: Basic attacks slow enemies by ${-ICeatAbilityData.AUTOATTACK_SLOW} speed and stacks with the slow of his abilities.`,
                ru: `Ай'сит швырает снежок на короткую дистанцию, нанося ${base_damage} физического урона <br />Пассивно: Атаки замедляют врагов на ${-ICeatAbilityData.AUTOATTACK_SLOW}, складываясь с замедлением от способностей Ай'сита.`,
            }
        }
        case Shared.SpellList.ICEAT_ICICLE_BOLT: {
            const base_damage = getDamage(ICeatAbilityData.ICICLE_BOLT_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.ICICLE_BOLT_BASE_DAMAGE + (ICeatAbilityData.ICICLE_BOLT_DAMAGE_PER_LEVEL * (level - 1)));

            return {
                en: `I'ceat fires three shards of ice, each slowing enemies by ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK} speed (stacks) dealing ${base_damage} with each hit. <br />Hitting all three of them root an enemy for ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
                ru: `Ай'сит выпускает три осколка льда, каждый из которых замедляет врагов на ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}(замедление складывается) и наносит ${base_damage} магического урона. <br />Попадание всеми тремя сосульками обездвижит врага на ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
            }
        }

        case Shared.SpellList.ICEAT_COLD_EMBRACE: {
            const base_damage = getDamage(ICeatAbilityData.COLD_EMBRACE_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.COLD_EMBRACE_BASE_DAMAGE + (ICeatAbilityData.COLD_EMBRACE_DAMAGE_PER_LEVEL * (level - 1)));
            return {
                en: `I'ceat slides on the ground, increasing his speed by ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} for ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} and leaving a ice trail ` +
                    `dealing  ${base_damage} damage per second to enemies on top of the ice and slow them.`,
                ru: `Ай'сит скользит по земле, получая ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} скорости передвижения на ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} и оставляя ледяной след позади, ` +
                    `наносящий  ${base_damage} магического урона в секунду, а также замедляющий всех наступивших врагов.`,
            }
        }

        /** Belle */
        case Shared.SpellList.BELLE_AUTOATTACK:
            return {
                en: `Belle fires an explosive thorn from her wand dealing ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} AoE damage in a small area.`,
                ru: `Белла выпускает взрывной шип из своей палочки, наносящий ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} физического урона по площади.`,
            }

        case Shared.SpellList.BELLE_PRICKLY_VINE: {
            const base_damage = getDamage(BelleAbilityData.PRICKLY_VINE_DAMAGE_MOD * abilityPower, type, BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE + (BelleAbilityData.PRICKLY_VINE_DAMAGE_PER_LEVEL * (level - 1)));
            const attach_damage = getDamage(BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE_ATTACHED, type);

            return {
                en: `Belle casts a vine forward that attaches to an enemy dealing ${base_damage} damage and slow down movement speed. <br />It can be broken if the enemy moves far enough from Belle.` +
                    `<br /> <br /> After a short time, if the vine is still attached, the vine disappears and stuns the enemy for ${toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)} and does ${attach_damage} damage`,
                ru: `Белла бросает лозу вперёд, которая прикрепляется к первому вражескому герою на пути, нанося ${base_damage} магического урона и дополнительно замедляя цель. <br />Способность может быть прервана, если вражеский герой отойдёт слишком далеко от Беллы.` +
                    `<br /> <br /> Спустя небольшой промежуток времени, если лоза всё ещё прикреплена к врагу, она исчезает и оглушает цель на ${toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)}, нанося ${attach_damage} магического урона.`,
            }
        }

        case Shared.SpellList.BELLE_FLORAL_AMBUSH: {
            const base_damage = getDamage(BelleAbilityData.FLORAL_AMBUSH_DAMAGE_MOD * abilityPower, type, BelleAbilityData.FLORAL_AMBUSH_BASE_DAMAGE + BelleAbilityData.FLORAL_AMBUSH_DAMAGE_PER_LEVEL * (level - 1));
            return {
                en: `Belle jumps in the air and drops three seed bombs in front of her that attaches to an enemy if they get near doing ${base_damage} over 2 seconds and exploding after the duration, doing ${base_damage} AoE damage` +
                    `<br /><br />After staying on the ground for ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, the seeds explode dealing ${base_damage} AoE damage to surrounding enemies. Enemy that step on bomb while carrying one will immediately trigger explosion`,
                ru: `Белла подпрыгивает и сбрасывает три цветочные бомбы перед собой, которые приклепляются к вражескому герою, если он наступит на них, нанося цели ${base_damage} урона в течение 2 секунд, взрываясь после этого, нанося ${base_damage} урона по площади` +
                    `<br /><br />После пребывания на земле в течение ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, цветы взрываются, нанося ${base_damage} урона по площади ближайшим врагам. Враг, ступивший на бомбу с уже прикреплённой до этого, моментально взорвёт предыдущую.`,
            }
        }

        /** Bunninja */
        case Shared.SpellList.BUNNINJA_AUTOATTACK:
            return {
                en: `Bunninja slashes with his carrot and deals ${getDamage(BunninjaAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} damage.`,
                ru: `Банниндзя взмахивает своей морковью, нанося ${getDamage(BunninjaAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} физического урона.`,
            }

        case Shared.SpellList.BUNNINJA_SHURIKEN_TOSS: {
            const base_damage = getDamage(BunninjaAbilityData.SHURIKEN_TOSS_DMG_MODIFIER * abilityPower, type, BunninjaAbilityData.SHURIKEN_TOSS_BASE_DAMAGE + BunninjaAbilityData.SHURIKEN_TOSS_DAMAGE_PER_LEVEL * (level - 1));

            return {
                en: `Bunninja throws three carrot-like shurikens which deals ${base_damage} damage to all enemies on the way. They return to him after a short time dealing ${base_damage} damage to all enemies in the way.`,
                ru: `Банниндзя бросает три морковоподобных сюрикена перед собой, которые наносят ${base_damage} магического урона всем врагам на своём пути. Они возвращаются к нему спустя небольшой промежуток времени, повторно нанося ${base_damage} магического урона всем врагам на своём пути.`,
            }
        }

        case Shared.SpellList.BUNNINJA_SHADOW_CARROT: {
            const base_damage = getDamage(damage, type, BunninjaAbilityData.SHADOW_CARROT_BASE_DAMAGE);

            return {
                en: `<b>First cast: </b>Bunninja throws an attaching carrot. He can teleport to it with ${toSec(BunninjaAbilityData.SHADOW_CARROT_DURATION)} of casting. <br /> <br />` +
                    `<b>Second cast: </b>Teleports to the carrot. If it is attached to an enemy, Bunninja stuns that enemy for ${toSec(BunninjaAbilityData.SHADOW_CARROT_STUN_DURATION)} and deals ${base_damage} damage to them.`,
                ru: `<b>Первое применение: </b>Банниндзя бросает прикрепляющуюся морковь. Он может телепортироваться к ней в течение ${toSec(BunninjaAbilityData.SHADOW_CARROT_DURATION)} после первого применения. <br /> <br />` +
                    `<b>Второе применение: </b>Телепортируется к моркови. Если она прикрепилась к врагу, Банниндзя оглушает этого врага на ${toSec(BunninjaAbilityData.SHADOW_CARROT_STUN_DURATION)} и наносит ему ${base_damage} физического урона.`,
            }
        }
        /** Veil */
        case Shared.SpellList.VEIL_AUTOATTACK: {
            const base_damage = getDamage(VeilAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enhanced_dmg = getDamage(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower, SpellType.MAGICAL, VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1));
            return {
                en: `Veil slashes with her weapons and deals ${base_damage} damage. <br /> Enhanced: Veil uses her astral spirit to deal an additional ${enhanced_dmg} damage (consume enhanced state)`,
                ru: `Вэйл взмахивает своим оружием и наносит ${base_damage} физического урона. <br /> Усиленная: Вэйл использует свой астральный дух, чтобы нанести дополнительно ${enhanced_dmg} урона (поглощает эффект усиления)`
            }
        }

        case Shared.SpellList.VEIL_ASTRAL_BLADES: {
            const base_damage = getDamage(VeilAbilityData.ASTRAL_BLADES_DMG_MODIFIER * abilityPower, type, VeilAbilityData.ASTRAL_BLADES_BASE_DAMAGE + VeilAbilityData.ASTRAL_BLADES_DAMAGE_PER_LEVEL * (level - 1));

            return {
                en: `Veil jumps and throws her astral blades downward at a 45° angle which deal ${base_damage}. If ability hits an enemy hero, it will enhance veil`,
                ru: `Вэйл подпрыгивает и бросает свои астральные клинки вниз под углом 45°, которые наносят ${base_damage} магического урона. Если способность попала по вражескому герою, Вэйл получит усиление.`,
            }
        }

        case Shared.SpellList.VEIL_ASTRAL_STEP: {
            const base_damage = getDamage(VeilAbilityData.ASTRAL_STEP_DAMAGE_MOD * damage);
            const enh_dmg = getDamage(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower, SpellType.MAGICAL, VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1));

            return {
                en: `Veil uses astral step to dash forward with high velocity and deals ${base_damage} damage and will stop on first hero she hits. (Upon hitting an hero it will apply enhanced state)<br /> <br />` +
                    `Enhanced: Veil steps into an astral realm and deals additional ${enh_dmg} damage and slows enemy. (consume enhanced state) <b> Sucessful hit reset Astral Step cooldown! </b>`,
                ru: `Вэйл совершает рывок вперёд на большой скорости, который наносит ${base_damage} магического урона и останавливает Вэйл на первом герое на своём пути. (Попадание по вражескому герою активирует усиление)<br /> <br />` +
                    `Усиленная: Вэйл шагает в астральное измерение и наносит дополнительно ${enh_dmg} урона, замедляя врага. (поглощает эффект усиления) <b> Успешное попадание сбрасывает перезарядку Астрального шага! </b>`,
            }
        }

        /** Default */
        case Shared.SpellList.RECALL:
            return {
                en: "Teleport back to spawn after 5 seconds. During its cast, you cannot move or attack, and the cast is interrupted when you take damage.",
                ru: "Телепорт обратно на свою базу спустя 5 секунд. Во время возвращения вы не можете двигаться или атаковать, но любой полученный урон перырвает подготовку.",
            }

        default: return { en: "" }
    }
}

const _getSpellName = (id: Shared.SpellList): { [key in string]: string } => {
    switch (id) {
        /** Kumihu  */
        case Shared.SpellList.KUMIHU_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
            }

        case Shared.SpellList.KUMIHU_MAGICAL_ORB:
            return {
                en: "Magical Orb",
                ru: "Волшебная сфера",
            }
        case Shared.SpellList.KUMIHU_DASH:
            return {
                en: "Arcane Dash",
                ru: "Тайный рывок",
            }

        /** Sparrow */
        case Shared.SpellList.SPARROW_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
            }

        case Shared.SpellList.SPARROW_DASH:
            return {
                en: "Dash",
                ru: "Рывок",
            }

        case Shared.SpellList.SPARROW_GROUND_SLAM:
            return {
                en: "Ground Slam",
                ru: "Удар по земле",
            }

        /** I'Ceat */
        case Shared.SpellList.ICEAT_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
            }

        case Shared.SpellList.ICEAT_ICICLE_BOLT:
            return {
                en: "Icicle Bolt",
                ru: "Сосульки",
            }

        case Shared.SpellList.ICEAT_COLD_EMBRACE:
            return {
                en: "Cold Embrace",
                ru: "Объятья холода",
            }

        /** Belle */
        case Shared.SpellList.BELLE_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
            }

        case Shared.SpellList.BELLE_PRICKLY_VINE:
            return {
                en: "Prickly Vine",
                ru: "Колючая лоза",
            }

        case Shared.SpellList.BELLE_FLORAL_AMBUSH:
            return {
                en: "Floral Ambush",
                ru: "Цветочная ловушка",
            }

        /** Bunninja */
        case Shared.SpellList.BUNNINJA_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
            }

        case Shared.SpellList.BUNNINJA_SHURIKEN_TOSS:
            return {
                en: "Shuriken Toss",
                ru: "Бросок сюрикена",
            }

        case Shared.SpellList.BUNNINJA_SHADOW_CARROT:
            return {
                en: "Shadow Carrot",
                ru: "Теневая морковь",
            }

        /** Veil */
        case Shared.SpellList.VEIL_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
            }

        case Shared.SpellList.VEIL_ASTRAL_BLADES:
            return {
                en: "Astral Blades",
                ru: "Астральные клинки",
            }

        case Shared.SpellList.VEIL_ASTRAL_STEP:
            return {
                en: "Astral Step",
                ru: "Астральный шаг",
            }

        /** Default */
        case Shared.SpellList.RECALL:
            return {
                en: "Recall",
                ru: "Возвращение",
            }
        default: return {en: ""}
    }
}

export const getSpellDescription = (id: Shared.SpellList, damage: number, abilityPower: number, level: number, cdr: number, type: SpellType): string => {
    const result = _getSpellDescription(id, damage, abilityPower, level, cdr, type);

    if (result[LANG])
        return result[LANG];
    else
        return result['en'];
}

export const getSpellName = (id: Shared.SpellList): string => {
    const result = _getSpellName(id);

    if (result[LANG])
        return result[LANG];
    else
        return result['en'];
}
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fixed, toSec } from './misc'
// @ts-ignore
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
    getAbilityData,
    SpellList,
// @ts-ignore
} from 'shared'
// @ts-ignore
import { getDamage, IAbilityTooltipsDataFinal } from '../abilityLangData'
// @ts-ignore
import { LANG } from 'lang/lang'

type HasTalentFunction = { hasTalent: (flag: Shared.TALENT, tier: number) => boolean }
type GetSpellDescriptionInput = IAbilityTooltipsDataFinal & HasTalentFunction

const _getSpellDescriptionLang = (id: SpellList, { 
    damage, 
    abilityPower, 
    health, 
    level, 
    talents, 
    hasTalent
}: GetSpellDescriptionInput, type: Shared.DamageTypes): { [key in string]: string } => {
    const abilityData = getAbilityData(id, talents)

    switch (id) {
    /** Kumihu  */
    case SpellList.KUMIHU_AUTOATTACK: {
        const basic_damage = getDamage(KumihuAbilityData.AUTOATTACK_MOD_DAMAGE * damage)
        const enh_damage = getDamage(KumihuAbilityData.ENH_ATTACK_MOD_DAMAGE * abilityPower, abilityData.damageType, KumihuAbilityData.ENH_ATTACK_BASE_DAMAGE + KumihuAbilityData.ENH_ATTACK_DAMAGE_PER_LEVEL * (level - 1))
        const enh_damage_with_talent = getDamage(KumihuAbilityData.TALENT_T2_RIGHT_ENH_ATTACK_DMG_MOD * damage)
        const duration = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0) ?
            KumihuAbilityData.ENH_CHARM_DURATION + KumihuAbilityData.TALENT_T1_RIGHT_CHARM_DURATION :
            KumihuAbilityData.ENH_CHARM_DURATION
        
        return {
            en: `Kumihu fires 3 bullets. Each bullet deals ${basic_damage} \nPassive: After using Arcane Dash next Kumihu's basic attack will deal ${enh_damage} + ${enh_damage_with_talent} and apply Charm on target for ${toSec(duration)}`,
            ru: `Кумиху выпускает 3 снаряда, каждый из которых наносит ${basic_damage} \nПассивно: После использования Тайного рывка следующая атака Кумиху нанесёт ${enh_damage} + ${enh_damage_with_talent} и наложит очарование на цель на ${toSec(duration)}`,
            cz: `Kumihu vystřelí 3 kulky, každá způsobí ${basic_damage} normálního poškození \nPasivní: Použití Skoku očaruje další základní útok, aby způsobil ${enh_damage} magické poškození + ${enh_damage_with_talent} a očaruje protivnika na ${toSec(duration)}` ,
            br: `Kumihu dispara 3 rajadas de vento cada uma dando ${basic_damage} de dano normal.\n<b>[Passiva]: </b> Usar Dash dá a ela um bônus no próximo ataque básico, dando ${enh_damage} de dano mágico + ${enh_damage_with_talent} e encantando o inimigo por ${toSec(duration)}.`,
            zh: `庫咪戶發射三發子彈，每發給予 ${basic_damage}點一般傷害 \n被動技：使用衝刺強化庫咪戶的下一個基礎攻擊，給予 ${enh_damage}點魔法傷害並給予 ${toSec(duration)}魅惑狀態`, // Need update
        }
    }

    case SpellList.KUMIHU_MAGICAL_ORB: {
        const base_damage = getDamage(KumihuAbilityData.MAGICAL_ORB_DMG_MODIFIER * abilityPower, abilityData.damageType, KumihuAbilityData.MAGICAL_ORB_BASE_DAMAGE + (KumihuAbilityData.MAGICAL_ORB_DAMAGE_PER_LEVEL * (level - 1)))
        return {
            en: `Kumihu throws spirit orb that deals ${base_damage} and returns to her after reaching its max range, dealing ${base_damage} to enemies on its way.`,
            ru: `Кумиху выпускает сферу духа, которая наносит ${base_damage} и затем возвращается к ней, нанося ${base_damage} всем врагам на своём пути.`,
            cz: `Kumihu vrhne modrou kouli, která způsobí ${base_damage}, poté se k ní vrátí po dosažení maximálního dosahu a způsobí ${base_damage} nepřátelům, kteří jí stojí v cestě.`,
            br: `Kumihu comprime o ar a sua volta e lança uma rajada causando ${base_damage} de dano mágico, retornando para ela depois de atingir seu alcance máximo causando ${base_damage} de dano mágico a inimigos em seu caminho.`,
            zh: `庫咪戶投擲藍色寶珠，給予 ${base_damage}點魔法傷害，到達最遠處後沿路回歸她手上並給予 ${base_damage}點魔法傷害。`,
        }
    }

    case SpellList.KUMIHU_DASH:
        return {
            en: `Kumihu dashes for a short distance. This will activate her passive effect for ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
            ru: `Кумиху совершает рывок на короткую дистанцию. Это активирует её пассивную способность на ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
            cz: `Kumihu vykročí dopředu a tím aktivuje svou pasivní schopnost na ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
            br: `Kumihu da um avanço em uma curta distância. Isso irá ativar sua passiva por ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
            zh: `庫咪戶短距離衝刺，這會在 ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}內激發她的被動技。`,
        }

        /** Sparrow */
    case SpellList.SPARROW_AUTOATTACK: {
        const base_damage = getDamage(SparrowAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const enh_damage = getDamage(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * damage)

        return {
            en: `Sparrow swings and thrusts her sword dealing ${base_damage}. <br />Passive: Using an ability charges Sparrow's sword. Her next basic attack knocks up enemies, stunning them for ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} and dealing ${enh_damage}.`,
            ru: `Спарроу взмахивает и делает выпад своим мечом, нанося ${base_damage} за попадание. <br />Пассивно: Использование способностей зачаровывает меч Спарроу. Её следующая базовая атака подбрасывает и оглушает врагов на ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} и наносит ${enh_damage}.`,
            cz: `Sparrow máchá mečem a způsobuje ${base_damage} za zásah. <br />Pasivní: Použití schopnosti nabije meč. Její další základní útok srazí nepřátele na ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} a způsobí ${enh_damage} poškození.`,
            br: `Sparrow corta seus inimigos causando ${base_damage} por ataque.\n<b>[Passiva]: </b> Usar uma habilidade, faz com que a espada de Sparrow fique carregada. Seu próximo ataque básico stuna os inimigos por ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} e da um bônus de ${enh_damage} de dano.`,
            zh: `史佩羅猛力揮動她的劍，給予 ${base_damage}點一般傷害。 \n被動技：使用一個能力蓄力史佩羅的劍，她的下一個基本攻擊擊昇敵方暈眩 ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)}並給予 ${enh_damage}點一般傷害。`,
        }
    }

    case SpellList.SPARROW_DASH:
        return {
            en: `Sparrow quickly dashes while thrusting her sword forward, stunning enemies she hits for ${toSec(SparrowAbilityData.DASH_STUN_DURATION)} and dealing ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)}.`,
            ru: `Спарроу совершает стремительный рывок, оглушая задетых врагов на ${toSec(SparrowAbilityData.DASH_STUN_DURATION)} и нанося им ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)}.`,     
            cz: `Sparrow se vrhne kupředu a vytasí svůj meč, čímž omráčí nepřátele které zasáhne na ${toSec(SparrowAbilityData.DASH_STUN_DURATION)} a způsobí ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)} normalního poškozeni.`,            
            br: `Sparrow avança na direção que está olhando,  atordoando os inimigos acertados por ${toSec(SparrowAbilityData.DASH_STUN_DURATION)} e dando ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)} de dano.`,
            zh: `史佩羅迅速衝刺猛力向前揮劍，暈眩 ${toSec(SparrowAbilityData.DASH_STUN_DURATION)}擊中的敵方並給予 ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)}點一般傷害。`,
        }

    case SpellList.SPARROW_GROUND_SLAM: {
        const damage = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ? 
            SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE + SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE: 
            SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE

        const base_damage = getDamage(0, type, damage)
        const percDamage =  hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? 
            Math.floor((SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG + SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE) * 100) :
            Math.floor(SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG * 100)

        return {
            en: `Sparrow unleashes the power of her sword to create a crescent-shaped sword beam dealing ${base_damage} (plus ${percDamage}% of target's missing health) to enemies that get hit.`,
            ru: `Спарроу высвобождает силу своего меча, создавая волну в форме полумесяца, наносящую ${base_damage} (плюс ${percDamage}% от недостающего здоровья цели) задетым врагам.`,
            cz: `Sparrow uvolní sílu uvnitř svého meče a vytvoří paprsek ve tvaru půlměsíce, který udělí ${base_damage} (plus ${percDamage} % chybějícího zdraví cíle) zasaženým nepřátelům.`,
            br: `Sparrow canaliza todo o poder de sua espada, criando um feixe na sua frente que causa ${base_damage} (mais ${percDamage}% de vida perdida do alvo) para os inimigos que são atingidos.`,
            zh: `史佩羅釋放劍的能量產生新月形刃波，給予被擊中的敵方 ${base_damage}點魔法傷害 (加上 ${percDamage}%敵方損失血量)。`,
        }
    }

    /** I'Ceat */
    case SpellList.ICEAT_AUTOATTACK: {
        const base_damage = getDamage(ICeatAbilityData.AUTOATTACK_MOD_DAMAGE * damage)
        return {
            en: `I'ceat hurls a snowball, dealing ${base_damage} AoE in a small area.`,
            ru: `Ай'сит швырает снежок, нанося ${base_damage} по площади.`,
            cz: `I'ceat mrští sněhovou kouli na krátkou vzdálenost a způsobí ${base_damage} poškození. `,
            br: `Iceat arremessa uma bola de neve a curta distância causando ${base_damage} de dano.`,
            zh: `艾希特短距離投擲雪球，給予小範圍 ${base_damage}點全體一般傷害`,
        }
    }
    case SpellList.ICEAT_ICICLE_BOLT: {
        const base_damage = getDamage(ICeatAbilityData.ICICLE_BOLT_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.ICICLE_BOLT_BASE_DAMAGE + (ICeatAbilityData.ICICLE_BOLT_DAMAGE_PER_LEVEL * (level - 1)))

        return {
            en: `I'ceat fires three shards of ice, each slowing enemies by ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK} speed (stacks) dealing ${base_damage} with each hit. <br />Hitting all three of them root an enemy for ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
            ru: `Ай'сит выпускает три осколка льда, каждый из которых замедляет врагов на ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}(замедление складывается) и наносит ${base_damage}. <br />Попадание всеми тремя сосульками обездвижит врага на ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
            cz: `I'ceat vystřelí tři střepy ledu, z nichž každý zpomalí nepřátele o ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}, což způsobí ${base_damage} při každém zásahu. <br />Zasáhnete-li všemi třemi, znehybní nepřítele na ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
            br: `Iceat dispara três estilhaços de gelo, cada estilhaço acertado reduz a velocidade do inimigo em ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}, adicionando ${base_damage} de dano para cada ataque. <br />Atingir todos os três estilhaços em um inimigo enraiza ele por ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}.`,
            zh: `艾希特發射三枚寒冰碎片，每發降低 ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}點敵方移動速度並給予 ${base_damage}點魔法傷害。<br />對同一目標擊中所有碎冰時，牽制敵方 ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}。`,
        }
    }

    case SpellList.ICEAT_COLD_EMBRACE: {
        const base_damage = getDamage(ICeatAbilityData.COLD_EMBRACE_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.COLD_EMBRACE_BASE_DAMAGE + (ICeatAbilityData.COLD_EMBRACE_DAMAGE_PER_LEVEL * (level - 1)))
        const duration = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1) ?
            toSec(ICeatAbilityData.COLD_EMBRACE_DURATION + ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION) :
            toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)

        const bonusSpeed = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0) ? 
            ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED + ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS:
            ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED
		
        return {
            en: `I'ceat slides on the ground, increasing his speed by ${bonusSpeed} for ${duration} and leaving a ice trail ` +
                    `dealing  ${base_damage} per second to enemies on top of the ice and slow them.`,
            ru: `Ай'сит скользит по земле, получая ${bonusSpeed} скорости передвижения на ${duration} и оставляя ледяной след позади, ` +
                    `наносящий  ${base_damage} в секунду, а также замедляющий всех наступивших врагов.`,
            cz: `I'ceat se začne klouzat, tím si zvyšuje rychlost o ${bonusSpeed} na ${duration} a zanechává za sebout ledovou vrstvu ` +
                    `, která uděluje ${base_damage} poškození za vteřinu nepřátelům na vrcholu ledu a zpomalí je.`,
            br: `Iceat desliza no chão, aumentando sua velocidade em ${bonusSpeed} por ${duration} e deixando uma trilha de gelo,` +
                    `dando ${base_damage} de dano por segundo aos inimigos que pisam na trilha.`,
            zh: `艾希特在地上滑行，增加 ${duration}他的移動速度 ${bonusSpeed}點並留下冰步道，` +
                    `給予所有位於冰步道上方的敵方每秒 ${base_damage}點魔法傷害並降低敵方移動速度。`,
        }
    }

    /** Belle */
    case SpellList.BELLE_AUTOATTACK:
        return {
            en: `Belle fires an explosive thorn from her wand dealing ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} AoE in a small area.`,
            ru: `Белла выпускает взрывной шип из своей палочки, наносящий ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} по площади.`,
            cz: `Belle vystřelí výbušný trn ze své hůlky a způsobí ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} poškození v malé oblasti.`,
            br: `Belle atira uma flor explosiva de sua varinha causando ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} de dano em área.`,
            zh: `蓓蕾從她的法棍發射一顆爆炸荊棘，給予小範圍 ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)}點全體一般傷害。`,
        }

    case SpellList.BELLE_PRICKLY_VINE: {
        const base_damage = getDamage(
            BelleAbilityData.PRICKLY_VINE_DAMAGE_MOD * abilityPower, 
            type, 
            BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE + (BelleAbilityData.PRICKLY_VINE_DAMAGE_PER_LEVEL * (level - 1))
        )
        const attach_damage = getDamage(0, type, BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE_ATTACHED)

        const stunDuration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ? 
            toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION + BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS) :
            toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)

        return {
            en: `Belle casts a pierce vine forward dealing ${base_damage} magic  damage to enemies that get hit and attaches to an enemy hero. <br />It can be broken if the enemy moves far enough from Belle.` +
                    `\nAfter a short time, if the vine is still attached, the vine disappears and stuns the enemy hero for ${stunDuration} and does ${attach_damage}`,
            ru: `Белла выпускает лозу перед собой, наносящую ${base_damage} и прикрепляющуюся к перворму вражескому герою на своём пути. <br />Способность может быть прервана, если враг отойдёт слишком далеко от Беллы.` +
                    `\nСпустя небольшой промежуток времени, если лоза всё ещё прикреплена к врагу, она исчезает и оглушает цель на ${stunDuration}, нанося ${attach_damage}.`,
            cz: `Belle vrhne vinnou révu která se připojí k nepříteli způsobujícímu ${base_damage} poškození a zpomalí pohyb. <br />Lze je zlomit, pokud se nepřítel vydálí dostatečně daleko od Belle.` +
                    `\nPo krátké době, pokud je liána stále propojena, opadne a omráčí nepřítele na ${stunDuration} a způsobí ${attach_damage} poškození.`,

            br: `Belle lança uma videira para frente que se liga a um inimigo causando ${base_damage} de dano e diminuindo a sua velocidade de movimento.` +
                    `\nDepois de 2 segundos, se a videira ainda estiver presa no inimigo, ela vai prender ele o atordoando por ${stunDuration} e causando ${attach_damage} de dano. \n<br />(Ela pode ser quebrada se o inimigo se mover para longe o suficiente de Belle.)`,
            zh: `蓓蕾向前投擲貫穿藤蔓，給予被擊中敵方 ${base_damage}點魔法傷害並附著於一個敵方英雄。 \n當敵方離蓓蕾夠遠時藤蔓可以被破壞。` +
                    `\n經過短時間後，藤蔓依然附著時，藤蔓消失同時暈眩 ${stunDuration}敵方英雄並給予 ${attach_damage}點魔法傷害。`,
        }
    }

    case SpellList.BELLE_FLORAL_AMBUSH: {
        const base_damage = getDamage(BelleAbilityData.FLORAL_AMBUSH_DAMAGE_MOD * abilityPower, type, BelleAbilityData.FLORAL_AMBUSH_BASE_DAMAGE + BelleAbilityData.FLORAL_AMBUSH_DAMAGE_PER_LEVEL * (level - 1))
        return {
            en: `Belle jumps in the air and drops three seed bombs in front of her that can attach to enemy heroes if they get close, dealing ${base_damage} for 2 seconds and exploding after the duration, dealing ${base_damage} AoE surrounding the enemy hero.` +
                    `<br /><br />After staying on the ground for ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, the seeds explode dealing ${base_damage} AoE to surrounding enemies. Enemy hero that step on bomb while carrying one will immediately trigger explosion`,
            ru: `Белла подпрыгивает и сбрасывает три цветочные бомбы перед собой, которые приклепляются к вражескому герою, если он наступит на них, нанося цели ${base_damage} в течение 2 секунд, взрываясь после этого, нанося ${base_damage} по площади` +
                    `<br /><br />После пребывания на земле в течение ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, цветы взрываются, нанося ${base_damage} по площади ближайшим врагам. Враг, ступивший на бомбу с уже прикреплённой до этого, моментально взорвёт предыдущую.`,
            cz: `Belle vyskočí do vzduchu a shodí pod sebe tři semenné bomby, které se přichytí k nepříteli pokud na ně vstoupí a způsobí ${base_damage} poškození během 2 sekund a po uplynutí této doby exploduje, čímž způsobí ${base_damage} poškození v malé oblasti` +
                    `<br /><br />Pokud se bomby neprichtí do ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, semínka explodují a způsobí ${base_damage} poškození okolním nepřátelům. Nepřítel, který šlápne na bombu a zároveň ji nese, okamžitě spustí explozi.`,
            br: `Belle plana no ar e lança três bombas de flor em sua frente, se prendendendo a um inimigo causando ${base_damage} de dano, depois de 2 segundos explode novamente se o inimigo estiver com uma semente, causando ${base_damage} de dano.` +
                    `<br /><br />Depois de ficar no chão por ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, as flores explodem causando ${base_damage} de dano nos inimigos por perto. Inimigos que pisarem nas bombas enquanto elas carregam, irám imediatamente desencadear uma explosão.`,
            zh: `蓓蕾跳躍在空中，向前丟下三顆種子炸彈。如果敵方英雄接近會附著於他們身上，給予持續2秒 ${base_damage}點魔法傷害並且在時間結束後爆破，給予鄰近敵方英雄 ${base_damage}點全體魔法傷害。` +
                    `\n停留地面 ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}後，種子爆炸並給予四周敵方 ${base_damage}點全體魔法傷害。當敵方英雄帶著種子又踩到地面種子時會立即觸發爆炸。`,
        }
    }

    /** Thomas */
    case SpellList.THOMAS_AUTOATTACK:
        return {

            en: `Thomas slashes with his carrot and deals ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)}.`,
            ru: `Томас взмахивает своей морковью, нанося ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)}.`,
            cz: `Thomas seká svou mrkví a udělí ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} poškození.`,
            br: `Thomas faz um corte com espada e causa ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} de dano.`,
            zh: `湯瑪士拿他的蘿蔔劈砍，給予 ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)}點一般傷害。`,
        }

    case SpellList.THOMAS_SHURIKEN_TOSS: {
        const base_damage = getDamage(ThomasAbilityData.SHURIKEN_TOSS_DMG_MODIFIER * damage, type, ThomasAbilityData.SHURIKEN_TOSS_BASE_DAMAGE + ThomasAbilityData.SHURIKEN_TOSS_DAMAGE_PER_LEVEL * (level - 1))

        return {
            en: `Thomas throws three carrot-like shurikens which deals ${base_damage} physical damage to all enemies on the way. They return to him after a short time dealing ${base_damage} physical damage to all enemies in the way.`,
            ru: `Томас бросает три морковоподобных сюрикена перед собой, которые наносят ${base_damage} физического урона всем врагам на своём пути. Они возвращаются к нему спустя небольшой промежуток времени, повторно нанося ${base_damage} физического урона всем врагам на своём пути.`,
            cz: `Thomas hodí tři mrkvovité shurikeny, které způsobí ${base_damage} poškození všem nepřátelům na cestě. Vrátí se k němu po krátké době a udělí ${base_damage} poškození všem nepřátelům, kteří mu stojí v cestě.`,
            br: `Thomas lança com sua espada demoníaca, três shurikens que causam ${base_damage} de dano a todos inimigos no caminho. Elas voltam para ele depois de um curto período de tempo causando ${base_damage} de dano a todos inimigos no caminho.`,
            zh: `湯瑪士丟出三個蘿蔔樣的手裏劍，對所有途徑上敵方造成 ${base_damage}點魔法傷害。手裏劍短時間後收回他手上，對所有軌跡上敵方造成 ${base_damage}點魔法傷害。`,
        }
    }

    case SpellList.THOMAS_SHADOW_CARROT: {
        const bonusDamage = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ? ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE : 0
        const base_damage = getDamage(bonusDamage + damage * ThomasAbilityData.SHADOW_CARROT_DAMAGE_MOD, type)

        return {
            en: `<b>First cast: </b>Thomas throws an attaching carrot. He can teleport to it with ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} of casting. \n<br />` +
                    `<b>Second cast: </b>Teleports to the carrot. If it is attached to an enemy hero, Thomas slows that enemy hero for ${toSec(ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION)} and deals ${base_damage} to the target.`,
            ru: `<b>Первое применение: </b>Томас бросает прикрепляющуюся морковь. Он может телепортироваться к ней в течение ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} после первого применения. \n<br />` +
                    `<b>Второе применение: </b>Телепортируется к моркови. Если она прикрепилась к врагу, Томас замедляет этого врага на ${toSec(ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION)} и наносит ему ${base_damage}.`,
            cz: `První použití: Thomas hodí stínovou mrkev. Může se k ní teleportovat do ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} vteřin po použití. `
                    + `Druhé použití: Thomas se teleportuje k mrkvi. Pokud je připojena k nepříteli, Thomas spomali tohoto nepřítele na ${toSec(ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION)} a udělí ${base_damage} poškození.`,
            br: `<b>Primeira Ativação: </b>Thomas joga sua espada demoníaca. Ele pode se teletransportar para lá depois de ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} de duração. \n<br />` +
                    `<b>Segunda Ativação: </b>Teleporta-se para a espada. Se estiver atingido um inimigo, Ele se teletransporta para o inimigo retardando-o ${toSec(ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION)} e causando ${base_damage} de dano.`,
            zh: `<b>第一次施展：</b>湯瑪士丟出可附著蘿蔔。他可以在 ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)}內瞬移到蘿蔔所在地。\n<br />` +
                    `<b>第二次施展：</b>瞬移到蘿蔔所在地。如果蘿蔔附著於敵方英雄，湯瑪士減緩該敵方英雄移動速度 ${toSec(ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION)}並對目標對象造成 ${base_damage}點一般傷害。`,
        }
    }
    /** Veil */
    case SpellList.VEIL_AUTOATTACK: {
        const base_damage = getDamage(VeilAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const modifier = (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1)
        const enhanced_dmg = getDamage(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier, Shared.DamageTypes.MAGICAL, (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) * modifier)

        return {
            en: `Veil slashes with her weapons and deals ${base_damage}. \nEnhanced: Veil uses her astral spirit to deal an additional ${enhanced_dmg} (consume enhanced state)`,
            ru: `Вэйл взмахивает своим оружием и наносит ${base_damage}. \n[Усиленная]: Вэйл использует свой астральный дух, чтобы нанести дополнительно ${enhanced_dmg} (поглощает эффект усиления)`,

            cz: `Veil sekne svými zbraněmi a způsobí ${base_damage} poškození. \nPosílení: Veil používá svého astrálního ducha a udělí dalšíh ${enhanced_dmg} poškození (spotřebuje Posílení stav)`,

            br: `Veil corta com suas espadas demoníacas causando ${base_damage} de dano.\n<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enhanced_dmg} de dano.\n(Consume o estado Maldição dos caídos.)`,
            zh: `維爾劈砍她的武器，給予 ${base_damage}點一般傷害。<br />強化後：維爾利用她的星光魂魄造成額外的 ${enhanced_dmg}點魔法傷害 (消耗強化狀態)。`,
        }
    }

    case SpellList.VEIL_ASTRAL_BLADES: {
        const base_damage = getDamage(VeilAbilityData.ASTRAL_BLADES_DMG_MODIFIER * abilityPower, type, VeilAbilityData.ASTRAL_BLADES_BASE_DAMAGE + VeilAbilityData.ASTRAL_BLADES_DAMAGE_PER_LEVEL * (level - 1))

        return {
            en: `Veil jumps and throws her astral blades downward at a 45° angle which deal ${base_damage}. If ability hits an enemy hero, Veil will get an enhancement.`,
            ru: `Вэйл подпрыгивает и бросает свои астральные клинки вниз под углом 45°, которые наносят ${base_damage}. Если способность попала по вражескому герою, Вэйл получит усиление.`,
            cz: `Veil skočí a vrhne své astrální čepele dolů pod úhlem 45°, což způsobí ${base_damage} poškození. Pokud schopnost zasáhne nepřátelského hrdinu, získá Posílení.`,
            br: `Veil salta e atira suas lâminas astrais para baixo em um ângulo de 45 ° causando ${base_damage} de dano.\nSe a habilidade atingir um personagem inimigo, ela ativa a [Maldição dos caídos].`,
            zh: `維爾跳躍並向斜下前方45°角丟出星光刀刃，造成 ${base_damage}點魔法傷害。如果技能擊中敵方英雄，將會強化維爾。`,
        }
    }

    case SpellList.VEIL_ASTRAL_STEP: {
        const base_damage = getDamage(VeilAbilityData.ASTRAL_STEP_DAMAGE_MOD * damage)

        const modifier = (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1)
        const enh_dmg = getDamage(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier, abilityData.damageType, (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) * modifier)

        return {
            en: `Veil uses astral step to dash forward with high velocity and deals ${base_damage} to enemy hero.\n<br />` +
                    `Enhanced: Veil steps into an astral realm and deals additional ${enh_dmg} and slows enemy hero. (consume enhanced state) <b> Sucessful hit reset Astral Step cooldown. </b>`,
            ru: `Вэйл совершает рывок вперёд на большой скорости, который наносит ${base_damage} первому вражескому герою на своём пути.\n<br />` +
                    `[Усиленная]: Вэйл шагает в астральное измерение и наносит ${enh_dmg}, замедляя врага. (поглощает эффект усиления) <b> Успешное попадание сбрасывает перезарядку Астрального шага. </b>`,

            cz: `Veil použije astrální krok, aby vykročila vpřed vysokou rychlostí a způsobí ${base_damage} poškození.\n<br />` +
                    `Posílení: Veil vstoupí do astrální říše a způsobí další ${enh_dmg} poškození a zpomalí nepřítele. (spotřebuje vylepšený stav) <b> Úspěšný zásah resetuje cooldown! </b>`,

            br: `Veil avança em alta velocidade para frente causando ${base_damage} de dano.\n<br />` +
                    `<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enh_dmg} de dano e dando lentidão.\n(consume o estado Maldição dos caídos.)<br />\n<b> Se acertar o hit, reseta sua habilidade! </b>`,
            zh: `維爾使用星光飛躍向前方高速衝刺，對敵方英雄造成 ${base_damage}點一般傷害。\n<br />` +
                    `強化後：維爾飛向星界，造成敵方英雄額外 ${enh_dmg}點魔法傷害並降低移動速度 (消耗強化狀態)。<b>成功擊中將重置星光飛躍冷卻時間！</b>`,

        }
    }

    /** Flin  */
    case SpellList.FLIN_AUTOATTACK: {
        const basic_damage = getDamage(FlinAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const enh_damage = getDamage(FlinAbilityData.MARKSMANSHIP_BONUS_DAMAGE_MOD * damage)

        return {
            en: `Flin fires an arrow and deals ${basic_damage}. \nIf marksmanship is active, flin deals ${enh_damage} and arrows pierce all enemy units.`,
            br: `Flin dispara uma flecha que da ${basic_damage} de dano normal. \nSe sua habilidade (Pontaria perfeita) estiver ativa, o flin dá ${enh_damage} de dano normal e suas flechas perfuram todas as unidades inimigas.`,
            ru: `Флин выпускает стрелу, наносящую ${basic_damage}. \nЕсли активна Меткая стрельба, выпущенная стрела наносит ${enh_damage} и пронзает все вражеские цели на своём пути.`,
            cz: `Flin vystřelí šíp a způsobí ${basic_damage} normálního poškození \nAk je marksmanship aura aktivovaná, šípy budu prolétat skrz nepřátelske jednotky a způsobí ${enh_damage} normálního poškození` ,
            zh: `弗林發射一支弓箭並給予 ${basic_damage}點一般傷害。\n如果精通箭術發動中，弗林給予 ${enh_damage}點一般傷害並貫穿所有敵方單位。`,
        }
    }

    case SpellList.FLIN_PRECISE_SHOT: {
        let mod = 1
        if (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)) {
            mod += FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE
        }
        const base_damage = getDamage(FlinAbilityData.PRECISE_SHOT_DAMAGE_MOD * damage * mod, abilityData.damageType, (FlinAbilityData.PRECISE_SHOT_BASE_DAMAGE + (FlinAbilityData.PRECISE_SHOT_DAMAGE_PER_LEVEL * (level - 1))) * mod)
        

        return {
            en: `Flin fires a precise shot in his direction, if the arrow hits a target, the arrow will deal ${base_damage} and knockback enemy unit away from you. \nIf marksmanship is active, precise shot will pierce all enemy units`,
            br: `Flin dispara um tiro preciso em sua direção, se a flecha atingir um alvo, a flecha causará ${base_damage} de dano mágico e repele a unidade inimiga para longe de você. \nSe sua habilidade (Pontaria perfeita) estiver ativa, suas flechas perfuram todas as unidades inimigas.`,
            ru: `Флин делает точный выстрел в направлении своего движения, который наносит ${base_damage} и отбрасывает первую вражескую цель на своём пути. \nЕсли активна Меткая стрельба, эта способность будет пронзать всех врагов на своём пути.`,
            cz: `Flin vystřelí precízni strelu, kterí způsobí ${base_damage} a odkopne nepřítele dál od tebe. \nAk střelecké umění je aktívni, precízna strela proleti skrz nepřátelske jednotky.`,
            zh: `弗林向前方發射精準射擊，如果弓箭擊中目標對象，弓箭將給予 ${base_damage}點魔法傷害並將敵方單位從你的方向打走。\n如果精通箭術發動中，精準射擊將會貫穿所有敵方單位。`,
        }
    }

    case SpellList.FLIN_MARKSMANSHIP:
        return {
            en: `Flin increases his focus for ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} or next ${FlinAbilityData.MARKSMANSHIP_STACKS} basic shots will deal additional damage and pierce enemy units. Every pierced unit hit will reduce damage by ${Math.floor(FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100)}%`,
            br: `Flin aumenta seu foco por ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} e seus próximos ${FlinAbilityData.MARKSMANSHIP_STACKS} ataques normais causarão dano adicional e perfurarão unidades inimigas.\n Cada unidade perfurada atingida reduzirá o dano da flecha em ${Math.floor(FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100)}%.`,
            ru: `Флин повышает свою точность на ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} или на следующее количество атак: (${FlinAbilityData.MARKSMANSHIP_STACKS}). В течение этого времени базовые атаки наносят дополнительный урон и пронзают вражеские цели. Урон от пронзающих выстрелов уменьшается на ${Math.floor(FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100)}% за каждую последующую цель.`,
            cz: `Flin zvýší své soustředění na útok a po dobu ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} nebo pro další ${FlinAbilityData.MARKSMANSHIP_STACKS} zásahy flin způsoby bonusové poškození a jeho šípy budou přecházet přes nepřátelské jednotky. Pokažde ak šip prejde přes nepřátelsku jednotku, poškození se sniží o ${Math.floor(FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100)}%`,
            zh: `弗林增加 ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)}他的集中力，並在接下來 ${FlinAbilityData.MARKSMANSHIP_STACKS}發基礎射擊造成額外傷害並貫穿敵方單位。每次貫穿擊中單位後將降低弓箭傷害${Math.floor(FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100)}%。`,
        }

        /** Kira  */
    case SpellList.KIRA_AUTOATTACK: {
        const basic_damage = getDamage(KiraAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const enh_damage = getDamage(KiraAbilityData.ENHATTACK_DAMAGE_MOD * abilityPower, abilityData.damageType, KiraAbilityData.ENHATTACK_BASE_DAMAGE + (KiraAbilityData.ENHATTACK_BASE_DAMAGE_PER_LEVEL * (level - 1)))
        const enh_damage_heal = getDamage(KiraAbilityData.ENHATTACK_DAMAGE_MOD * abilityPower * 0.7, Shared.DamageTypes.HEAL, (KiraAbilityData.ENHATTACK_BASE_DAMAGE + (KiraAbilityData.ENHATTACK_BASE_DAMAGE_PER_LEVEL * (level - 1))) * 0.7)

        return {
            en: `Kira fires a lightning bolt that does ${basic_damage}. <br />
                \n<b>[Enhanced]: (Lightning Shock)</b> Kira casts a shock of electricity towards the nearest hero, decreasing their attack speed by ${(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)}% and movement speed by ${KiraAbilityData.ENHATTACK_MOVE_SPEED} for short period and instantly deals ${enh_damage}. If the target was friendly hero, their attack and movement speed will be increased for same amount and they will also get healed for ${enh_damage_heal}.`,
            br: `Kira dispara um relâmpago que da ${basic_damage} de dano normal. <br />
                \n<b>[Passiva] (Livro demoníaco):</b> Kira lança um relâmpago no personagem mais próximo, diminui ou aumenta a velocidade de ataque do herói em ${(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)}% e velocidade de movimento em ${KiraAbilityData.ENHATTACK_MOVE_SPEED} por um curto período e da ${enh_damage} de dano mágico ou cura se o personagem for do seu time em ${enh_damage_heal}.`,
            ru: `Кира стреляет молнией, которая наносит ${basic_damage}. \n
                \n<b>[Усиленная]: (Удар молнии)</b> Кира призывает поток электричества в направлении ближайшего героя. Если целью стал противник, его скорость атаки уменьшается на ${(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)}% и скорость передвижения на ${KiraAbilityData.ENHATTACK_MOVE_SPEED}, а также он получает ${enh_damage} урона. Если целью стал союзный герой, его скорость атаки и передвижения повышается, а также он исцеляется на ${enh_damage_heal}`,
            cz: `Kira vystřelí blesk, který způsobí ${basic_damage} normální poškození. \n
                \n<b>[Enhanced]: (Lightning Shock)</b> Kira vyšle elektrický výboj směrem k nejbližší jednotce, sniži anebo zvýši rychlost útoku o ${(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)} % a rychlost pohybu o ${KiraAbilityData.ENHATTACK_MOVE_SPEED} na kratký čás, a způsobi okamžite zraněni o ${enh_damage} anebo vyléči jednotku o ${enh_damage_heal}`,
            zh: `奇菈發射一束閃電飛箭，造成 ${basic_damage}點一般傷害。<br />
                \n<b>[強化後]：(衝擊閃電) 奇菈對離最近的英雄施展一束衝擊電流，短時間內降低敵方或增加友方英雄 ${(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)}%攻擊速度與移動速度值 ${KiraAbilityData.ENHATTACK_MOVE_SPEED}，並立即給予敵方英雄 ${enh_damage}點魔法傷害或是治癒友方英雄 ${enh_damage_heal}點生命。`,
        }
    }

    case SpellList.KIRA_RAIN_OF_SPARKS: {
        let damageMod = 1
        if (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0)) {
            damageMod = 1 + KiraAbilityData.TALENT_T1_RAIN_OF_SPARKS_BONUS
        }
        const damage = getDamage(
            KiraAbilityData.VOID_RAIN_DAMAGE_MOD * abilityPower * damageMod, 
            Shared.DamageTypes.MAGICAL, 
            KiraAbilityData.VOID_RAIN_BASE_DAMAGE + (KiraAbilityData.VOID_RAIN_DAMAGE_PER_LEVEL * (level - 1)) * damageMod
        )
        
        return {
            en: `Kira summons 4 void missiles that rain down from above, each missile dealing ${damage} that pierces through enemies. 
                \n<b>[Enhanced]: (Torrential Abyss)</b> Kira summons total of 8 void missiles.`,
            br: `Kira conjura de seu livro 4 mísseis elétricos do abismo, que caem de cima, cada míssil causando ${damage} de dano mágico que perfura os inimigos. 
                \n<b>[Passiva] (Abismo Demoníaco):</b> Kira conjura um total de 8 mísseis do abismo.`,
            ru: `Кира призывает 4 снаряда, которые падают с неба, нанося ${damage} каждый и пронзая вражеские цели. 
                \n<b>[Усиленная]: (Проливная бездна)</b> Количество призываемых снарядов увеличивается до 8.`,
            cz: `Kira vyvolá 4 prázdné střely, které prší shora, přičemž každá střela způsobí ${damage} magické poškození, které prorazí nepřátele.
                \n<b>[Vylepšené]: (Torrential Abyss)</b> Kira vyvolá celkem 8 prázdných střel.`,
            zh: `奇菈召喚四束虛空飛彈從上方如雨淋下，每束飛彈給予 ${damage}點魔法傷害並貫穿敵方。<br />
                \n<b>[強化後]：(滔天深淵) 奇菈召喚總共八束虛空飛彈。`,
        }
    }

    case SpellList.KIRA_VOID_PHANTASM: {
        const damage = getDamage(KiraAbilityData.VOID_PHANTASM_DAMAGE_MOD * abilityPower, abilityData.damageType, KiraAbilityData.VOID_PHANTASM_BASE_DAMAGE + (KiraAbilityData.VOID_PHANTASM_DAMAGE_PER_LEVEL * (level - 1)))

        return {
            en: `Kira dashes forvard and leaves a distorted afterimage behind her, which she returns to after ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}
                \n<b>[Enhanced]: (Chaotic Afterimage)</b> Kira's afterimage follows her and phases through enemies, dealing ${damage} and silencing them for ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}.`,
            br: `Kira cria uma imagem distorcida de si mesma enganando seus inimigos, para a qual ela retorna depois de ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}.
                \n<b>[Passiva] (Distorcendo o Abismo):</b> A imagem distorcida de Kira a segue e atravessa os inimigos, causando ${damage} de dano mágico e silenciando-os por ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}.`,
            ru: `Кира совершает рывок вперёд, оставляя позади себя свою искажённую копию и возвращаясь к ней через ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}
                \n<b>[Усиленная]: (Беспорядочный клон)</b> Копия Киры следует за ней и проходит через врагов на своём пути, нанося им ${damage} и накладывая немоту на ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}.`,
            cz: `Kira oklame své nepřátele a zanechá za sebou zkreslený obraz, ke kterému se vrátí po ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}
                \n<b>[Enhanced]: (Chaotic Afterimage)</b> Kirin afterimage ji pronásleduje a prochází nepřáteli, uděluje ${damage} magické poškození a umlčuje je za ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}.`,
            zh: `奇菈用滯留的扭曲殘影欺騙敵方，${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}後她會回歸殘影處。<br />
                \n<b>[強化後]：(混沌殘影) 奇菈的殘影跟隨她並沿路穿透敵方，給予 ${damage}點魔法傷害並沉默敵方 ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}。`,
        }
    }

    /** Hazel  */
    case SpellList.HAZEL_AUTOATTACK: {
        const baseDamage = getDamage(HazelAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
    
        return {
            en: `Hazel strikes her foes down with her hammer, dealing ${baseDamage}.`,
            br: `Hazel golpeia seus inimigos com seu martelo, causando ${baseDamage} de dano normal.`,
            ru: `Хейзел поражает врагов своим молотом, нанося ${baseDamage}.`,
            cz: `Hazel udre kladivem a způsobí ${baseDamage} normální poškození`,
            zh: `哈歇爾用她的鐵鎚打擊敵人，給予 ${baseDamage}點一般傷害。`,
        }
    }

    case SpellList.HAZEL_SHOCKWAVE: {
        const damage = getDamage(HazelAbilityData.SHOCKWAVE_BONUS_DAMAGE_HP * health, abilityData.damageType, 0, 'Health')
        
        return {
            en: `Hazel begins to charge and channel her energy for ${toSec(HazelAbilityData.SHOCKWAVE_DELAY)} before releasing an outburst of shockwaves around her, dealing ${damage} (Based of Hazel's current health), slows down and push all enemy units in distance.`,
            br: `Hazel começa a carregar canalizando sua energia por ${toSec(HazelAbilityData.SHOCKWAVE_DELAY)}, depois libera uma explosão de ondas de choque ao seu redor, causando ${damage} de dano mágico (Basado en la salud actual de Hazel), diminui a velocidade e empurra todas as unidades inimigas para longe.`,
            ru: `Хейзел начинает накапливать энергию в течение ${toSec(HazelAbilityData.SHOCKWAVE_DELAY)}, а затем выпускает взрыв из ударных волн вокруг себя, нанося ${damage} (от текущего здоровья Хейзел), замедляя и отталкивая все цели на своём пути.`,
            zh: `哈歇爾開始蓄力 ${toSec(HazelAbilityData.SHOCKWAVE_DELAY)}匯集能量。隨後在她四周釋放爆發衝擊波，給予 ${damage}點魔法傷害 (基於 Hazel 目前的健康狀況)，將所有距離內的敵方單位減速推開。`,
        }
    }

    case SpellList.HAZEL_HEROIC_SLASH: {
        const baseDamage = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0) ? 
            HazelAbilityData.HEROIC_SLASH_BASE_DAMAGE + HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE :
            HazelAbilityData.HEROIC_SLASH_BASE_DAMAGE

        const duration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ?
            HazelAbilityData.HEROIC_SLASH_KNOCKBACK_DURATION + HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION:
            HazelAbilityData.HEROIC_SLASH_KNOCKBACK_DURATION
		
        const normalDamage = getDamage(HazelAbilityData.HEROIC_SLASH_DAMAGE_MOD * damage, abilityData.damageType, baseDamage + (HazelAbilityData.HEROIC_SLASH_BASE_PER_LEVEL * (level - 1)))

        return {
            en: `Hazel unleashes the wrath of justice and swings her hammer upwards, dealing ${normalDamage} and knocking up enemies stunning for ${toSec(duration)}.`,
            br: `Hazel canaliza poder na ponta de seu martelo, causando ${normalDamage} de dano normal e atordoando inimigos por ${toSec(duration)}.`,
            ru: `Хейзел высвобождает гнев правосудия и взмахивает своим молотом, нанося ${normalDamage} и подбрасывая врагов на ${toSec(duration)}.`,
            zh: `哈歇爾釋放正義之怒向上揮起鐵鎚，給予 ${normalDamage}點一般傷害並擊昇敵方暈眩 ${toSec(duration)}。`,
        }
    }

    /** Arel  */
    case SpellList.AREL_AUTOATTACK: {
        const enhDamageVal = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ?
            ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD + ArelAbilityData.TALENT_T2_LEFT_BONUS_ATTACK_DAMAGE:
            ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD

        const baseDamage = getDamage(ArelAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const enhDamage = getDamage(enhDamageVal * damage)
    
        return {
            en: `Arel fires a bullet from his gun dealing ${baseDamage}. \n
                <br />[PASSIVE]: Whenever Arel uses an ability, arel will charge another bullet in his gun firing additional shot and dealing additional ${enhDamage}`,
            br: `Arel dispara uma bala de sua arma causando ${baseDamage} de dano normal. 
                \n<b>[Passiva] (Atirador de Elite):</b> Sempre que Arel usar uma habilidade, carregará outra bala em sua arma, disparando tiros adicionais e causando ${enhDamage} de dano adicional.`,
            ru: `Арел выпускает пулю из своего оружия, нанося ${baseDamage}. \n
                <br />[ПАССИВНО]: Всякий раз, когда Арел использует способность, он заряжает еще одну пулю, делая дополнительный выстрел и нанося ${enhDamage}.`,
            cz: `Arel vystřelí kulku ze své zbraně a způsobí ${baseDamage} normální poškození <br />
                <br />[PASIVNÍ]: Kdykoli Arel použije schopnost, nabije arel další kulku ze zbraně a vystřelí další výstřel a způsobí další ${enhDamage} normální poškození`,
            zh: `艾瑞爾從他的槍發射一發子彈，給予 ${baseDamage}點一般傷害。 <br />
                <br />被動技：每當艾瑞爾發動技能後，艾瑞爾會從他的槍裝填另一發子彈，多補一發射擊給予額外 ${enhDamage}點一般傷害。`,
        }
    }

    case SpellList.AREL_TUMBLE: {
        return {
            en: 'Arel rolls forward.',
            br: 'Arel da um salto para frente, adiciona a passiva (Atirador de Elite).',
            ru: 'Арел катится вперёд.',
            cz: 'Arel se převalí dopředu',
            zh: '艾瑞爾向前翻滾。',
        }
    }

    case SpellList.AREL_TICKING_BOMB: {
        const baseDamage = getDamage(ArelAbilityData.TICKING_BOMB_DAMAGE_MODIFIER * damage, abilityData.damageType, ArelAbilityData.TICKING_BOMB_BASE_DAMAGE + (ArelAbilityData.TICKING_BOMB_DAMAGE_PER_LEVEL * (level - 1)))
        const triggerMultiplier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ? ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS : 1
        
        const triggerDamage = getDamage(ArelAbilityData.TICKING_BOMB_DAMAGE_MODIFIER * damage * triggerMultiplier, abilityData.damageType, (ArelAbilityData.TICKING_BOMB_BASE_DAMAGE + (ArelAbilityData.TICKING_BOMB_DAMAGE_PER_LEVEL * (level - 1))) * triggerMultiplier)
        
        return {
            en: `Arel throws a bomb, if the bomb makes contact with an enemy, the bomb attachs to them and will explode in ${toSec(ArelAbilityData.TICKING_BOMB_DURATION)} dealing ${baseDamage} to all surrounding enemies.
                <br />If the bomb is attached to an enemy and you shoot the enemy three times, the bomb will explode dealing ${triggerDamage} and stun carrier for ${toSec(ArelAbilityData.TICKING_BOMB_STUN_DURATION)}`,
            br: `Arel joga uma bomba para frente, se a bomba entrar em contato com um inimigo, a bomba se liga a ele e explodirá em ${toSec(ArelAbilityData.TICKING_BOMB_DURATION)}, causando ${baseDamage} de dano normal para todos os inimigos ao redor.
                <br />Se a bomba estiver presa a um inimigo e você atirar nele três vezes, a bomba explodirá causando ${triggerDamage} de dano normal e atordoará o portador por ${toSec(ArelAbilityData.TICKING_BOMB_STUN_DURATION)}.`,
            ru: `Арел бросает бомбу, и если она соприкасается с врагом, бомба прикрепляется к нему и взрывается через ${toSec(ArelAbilityData.TICKING_BOMB_DURATION)}, нанося ${baseDamage} всем ближайшим врагам.
                <br />Если бомба прикреплена к врагу, и вы выстрелите в него три раза, бомба взорвется преждевременно, нанеся  ${triggerDamage}, а также оглушит цель на ${toSec(ArelAbilityData.TICKING_BOMB_STUN_DURATION)}`,
            cz: `Arel hodí bombu, pokud se bomba dostane do kontaktu s nepřítelem, bomba se k němu přichytí a exploduje za ${toSec(ArelAbilityData.TICKING_BOMB_DURATION)} a způsobí ${baseDamage} normální poškození všem okolním nepřátelům.
                <br />Pokud je bomba připevněna k nepříteli a vy trafite nepřítele třikrát, bomba exploduje a způsobí ${triggerDamage} normální poškození a omráči nepřítele na ${toSec(ArelAbilityData.TICKING_BOMB_STUN_DURATION)}`,
            zh: `艾瑞爾投擲一枚炸彈，如果炸彈接觸到敵方，炸彈會附著於該敵方並於 ${toSec(ArelAbilityData.TICKING_BOMB_DURATION)}後爆炸，給予周圍所有敵方 ${baseDamage}點一般傷害。
                <br />如果炸彈已附著於敵方，你給予該敵方三發射擊，炸彈會立即爆炸，給予 ${triggerDamage}點一般傷害並暈眩炸彈負載者 ${toSec(ArelAbilityData.TICKING_BOMB_STUN_DURATION)}。`,
        }
    }

    /** Alvar  */
    case SpellList.ALVAR_ATTACK: {
        const baseDamage = getDamage(AlvarAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const markDamage = getDamage(0, 0, 
            hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ?
                AlvarAbilityData.MARK_DAMAGE + AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE :
                AlvarAbilityData.MARK_DAMAGE
        )

        const duration = AlvarAbilityData.MARK_DURATION

        return {
            en: `Alvar hits with his fist all targets in front of him and deals ${baseDamage}. \n
                <br />[PASSIVE]: Every alvar's sucessful hit to enemy hero apply an debuff to the target for ${toSec(duration)}. Third stack of debuff will apply mark which deals ${markDamage}.`,
            br: `Alvar acerta com seu punho todos os alvos à sua frente causando ${baseDamage} de dano normal. \n
                \n<b>[Passiva] (Punhos do detentor):</b> Cada ataque de Alvar aplica no personagem inimigo um debuff que dura ${toSec(duration)}.\n O terceiro ataque de debuff aplicará uma marca que causa ${markDamage} de dano normal.`,
            ru: `Алвар бьёт кулаками перед собой, нанося ${baseDamage}. \n
                <br />[ПАССИВНО]: Каждое успешное попадание атакой накладывает на противника ослабление на ${toSec(duration)}. Третий заряд ослабления активирует на цели метку, наносящую ${markDamage}.`,
            cz: `Alvar zasáhne pěstí všechny cíle před sebou a způsobí ${baseDamage} normálního poškození. <br />
                \n[PASIVNÍ]: Každý úspěšný zásah Alvara aplikuje debuff na cíl po dobu ${toSec(duration)}. Třetí stack applikuje značku, která způsobí ${markDamage} normální poškození.`,
            zh: `阿爾瓦用他的拳頭向前打擊，造成 ${baseDamage}點一般傷害。\n
                <br />被動：每一次阿爾瓦成功的擊中敵方英雄，給予目標對象 ${toSec(duration)}負面狀態。第三次的負面狀態疊加將給予標記，造成 ${markDamage}點一般傷害。`,
        }
    }

    case SpellList.ALVAR_FURIOUS_KICK: {
        const baseDamage = getDamage(AlvarAbilityData.FURIOUS_KICK_DAMAGE_MOD * damage)
        const duration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? 
            AlvarAbilityData.FURIOUS_KICK_STUN_DURATION + AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION:
            AlvarAbilityData.FURIOUS_KICK_STUN_DURATION

        return {
            en: `Alvar kicks all enemy units in front of him and throws them effortlessly behind him, dealing ${baseDamage} and stunning enemy units for ${toSec(duration)}. <br />
                <br/> Alvar apply a debuff on all hero targets it hits.`,
            br: `Alvar chuta todas as unidades inimigas à sua frente e as joga para trás dele, causando ${baseDamage} de dano normal e atordoa unidades inimigas por ${toSec(duration)}. <br />
                <br/> (Alvar aplica um debuff em todos os alvos que atinge).`,
            cz: `Alvar kopne všechny nepřátelské jednotky před sebou a bez námahy je hodí za sebe, čímž udělí ${baseDamage} normalního poškozěni a omráčí nepřitele po dobu ${toSec(duration)}. <br />
                \nAlvar aplikuje debuff na všechný nepřatelské jednotky.`,
            ru: `Алвар бьёт всех врагов перед собой, перебрасывая их через себя и нанося ${baseDamage}, а также оглушая их на ${toSec(duration)}. <br />
                <br/> Алвар накладывает ослабление от пассивной способности на всех задетых вражеских героев.`,
            zh: `阿爾瓦踢擊前方所有敵方單位，不費吹飛之力將他們甩到他後方，造成 ${baseDamage}點一般傷害並暈眩敵方單位 ${toSec(duration)}。
                <br/>阿爾瓦給予所有被擊中的目標一個負面狀態。`,

        }
    }

    case SpellList.ALVAR_HEAVENLY_KICK: {
        const baseDamage = getDamage(AlvarAbilityData.HEAVENLY_KICK_DAMAGE_MOD * damage)

        return {
            en: `Alvar teleports behind the closest marked enemy hero, kicking him and dealing ${baseDamage} and pushing him in opposite direction. If there is no marked enemy nearby, ability can't be used.`,
            br: `Alvar se teletransporta para trás do herói inimigo marcado mais próximo, chutando-o e causando ${baseDamage} de dano normal e empurrando-o na direção oposta.\n (Se não houver nenhum inimigo marcado por perto, a habilidade não pode ser usada.)`,
            ru: `Алвар телепортируется к ближайшему помеченному врагу, ударяя его, нанося ${baseDamage} и отталкивая врага в противоположном направлении. Способность использовать нельзя, если рядом нет помеченных врагов.`,
            cz: `Alvar se teleportuje za nejbližšího označeného nepřítele, kopne do něj a způsobí normální poškození ${baseDamage} a tlačí ho opačným směrem. Pokud v blízkosti není žádný označení nepřítel, schopnost neudělá nic.`,
            zh: `阿爾瓦瞬移到最接近的被標記敵方英雄，踢擊目標對象造成 ${baseDamage}點一般傷害並將目標對象推到反方向。如果附近沒有被標記敵方，技能無法發動。`,
        }
    }

    /** Foxy  */
    case SpellList.FOXY_ATTACK: {
        const baseDamage = getDamage(FoxyAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
    
        return {
            en: `Foxy fires a bullet from his gun dealing ${baseDamage}.`,
            ru: `Фокси выпускает пулю из своего оружия, нанося ${baseDamage}.`,
            cz: `Foxy vystřelí kulku ze své zbraně a způsobí ${baseDamage}.`
        }
    }
    
    case SpellList.FOXY_RAPID_FIRE: {
        let mod = 1
        if (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)) {
            mod += FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE
        }
        const baseDamage = getDamage(FoxyAbilityData.RAPID_FIRE_DAMAGE_MULTIPLIER * damage * mod)
    
        return {
            en: `Foxy channels his weapon and rapidly fires a barrage of bullets, dealing ${baseDamage} physical damage. <br/> <i> Affected by Attack speed. Movement stops the channeling </i>`,
            ru: `Фокси подготавливает своё оружие и быстро выпускает шквал пуль, нанося ${baseDamage} физического урона. <br/> <i> Чем выше Скорость атаки, тем больше пуль будет выпущено. Передвижение отменяет подготовку. </i>`,
            cz: `Foxy nasměruje svou zbraň a rychle vypálí příval kulek, které způsobí ${baseDamage} fyzické poškození. <br/> <i> Rýchlost útoku zrychly tento effekt. Pohyb zastaví channeling </i>`
        }
    }

    case SpellList.FOXY_GRANADE: {
        const baseDamage = getDamage(
            FoxyAbilityData.GRANADE_DAMAGE_MODIFIER * damage,
            Shared.DamageTypes.NORMAL,
            FoxyAbilityData.GRANADE_DAMAGE_BASE + FoxyAbilityData.GRANADE_DAMAGE_PER_LEVEL * (level - 1),
            'AttackDamage'
        )
    
        return {
            en: `Foxy throws a grenade that explodes when it touches the ground at a certain speed. If the fall speed is too high, it will bounce. Upon explosion it deals ${baseDamage}. <br/>` +
                'When the grenade explodes, it will knockback units. The knockback is based on the distance between the unit and grenade.',
            ru: `Фокси бросает гранату, которая взрывается при соприкосновении с землёй на определённой скорости. Если скорость падения была слишком высока, граната отскочит от поверхности. При взрыве она наносит ${baseDamage}. <br/>` +
                'Когда граната взрывается, она отбрасывает ближайших врагов. Сила отбрасывания зависит от того, как близко находился враг к центру взрыва.',    
            cz: `Foxy hodí granát, který exploduje, když se určitou rychlostí dotkne země. Pokud je rychlost pádu příliš vysoká, odskočí. Při výbuchu způsobí ${baseDamage}. <br/>` +
                'Když granát exploduje, srazí jednotky. Zpětný ráz je založen na vzdálenosti mezi jednotkou a granátem.',
        }
    }

    case SpellList.MAGDALENE_ATTACK: {
        const baseDamage = getDamage(MagdaleneAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
        const bonusAPTalent = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0) ? 
            MagdaleneAbilityData.BONUS_ABILITY_POWER_FOR_KILL_OR_ASSIST + MagdaleneAbilityData.TALENT_T1_LEFT_ADDITIONAL_AP :
            MagdaleneAbilityData.BONUS_ABILITY_POWER_FOR_KILL_OR_ASSIST
    
        return {
            en: `Magdalene swirls with her dark scythe firing a burst of energy that deals ${baseDamage} damage\n\n Passive: Magdalene permanently gain ${bonusAPTalent} ability power for killing or assisting in hero kill.`,
            br: `Magdalene rodopiando com sua foice negra disparando um burst de energia que causa ${baseDamage} dano\n\n Passivo: Magdalene ganha permanentemente ${bonusAPTalent} de poder de habilidade por matar ou ajudar a matar o herói.`,
            fr: `Magdalene tournoie avec sa faux sombre tirant une salve d'énergie qui inflige ${baseDamage} dégâts\n\nPassif: Magdalene gagne permanent ${bonusAPTalent} points de puissance d'aptitude pour tuer ou aider à tuer le héros.`,
            zh: `玛格达丽娜旋转着黑色镰刀发射一股能量，造成${baseDamage}伤害\n\n被动：玛格达丽娜击杀或协助击杀英雄永久获得${bonusAPTalent}能力值。`,
            cz: `Magdalena zatočí se svím temným srpem a vystřeli výboj energie, která způsobí ${baseDamage} poškození\n\nPasivní: Magdalena trvale získává ${bonusAPTalent} schopnost síly za zabití nebo pomoc při zabití hrdiny.`
        }
    }

    case SpellList.MAGDALENE_SCREAM_OF_PAIN: {
        const damage = getDamage(MagdaleneAbilityData.SCREAM_OF_PAIN_AP_MODIFIER * abilityPower, Shared.DamageTypes.MAGICAL, MagdaleneAbilityData.SCREAM_OF_PAIN_BASE_DAMAGE + (MagdaleneAbilityData.SCREAM_OF_PAIN_DAMAGE_PER_LEVEL * (level - 1)))
        return {
            en: `Magdalene loudly screams affect all enemies in front of her, push them away, deals ${damage} and silence them for ${toSec(MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION)}`,
            br: `Magdalena grita alto afetando todos os inimigos na frente dela, empurrando-os para longe, causando ${damage} e silenciando-os por ${toSec(MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION)}`,
            fr: `Magdalene crie bruyamment affecte tous les ennemis devant elle, les repousse, leur inflige ${damage} et les rend muets pendant ${toSec(MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION)}`,
            zh: `玛格丹妮大声尖叫，影响她面前的所有敌人，将他们推开，造成${damage}伤害，并将他们沉默${toSec(MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION)}`,
            cz: `Magdalena hlasitě zakřičí na všechny nepřátele před ní, odhání je, poškozuje ${damage} a  umlčí je na ${toSec(MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION)}`
        }
    }

    case SpellList.MAGDALENE_SWARM_OF_GHOSTS: {
        const damage = getDamage(MagdaleneAbilityData.SWARM_OF_GHOSTS_AP_MODIFIER * abilityPower, Shared.DamageTypes.MAGICAL, MagdaleneAbilityData.SWARM_OF_GHOSTS_BASE_DAMAGE + (MagdaleneAbilityData.SWARM_OF_GHOSTS_DAMAGE_PER_LEVEL * (level - 1)))
        const percDamage = fixed(
            (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? 
                MagdaleneAbilityData.SWARM_OF_GHOSTS_STACK_MULTIPLIER + MagdaleneAbilityData.TALENT_T2_LEFT_SWARM_OF_GHOST_STACK_DAMAGE : 
                MagdaleneAbilityData.SWARM_OF_GHOSTS_STACK_MULTIPLIER) * 100,1)
        
        return {
            en: `Sends a swarm of lost ghosts to savage enemy units in front of Magdalene. Affected enemy units take ${damage} and apply 1 stack of ghost pact on enemies.\n\n - Each stack of ghost pact increases the damage of Swarm of Ghosts by ${percDamage}%`,
            br: `Envia uma enxame de fantasmas perdidos para atacar unidades inimigas na frente de Magdalene. Unidades inimigas afetadas recebem ${damage} e aplica 1 pilha de pacto de fantasmas nos inimigos.\n\n - Cada pilha de pacto de fantasmas aumenta o dano de Enxame de Fantasmas em ${percDamage}%`,
            fr: `Envoie une nuée de fantômes perdus pour attaquer les unités ennemies devant Magdalene. Les unités ennemies touchées subissent ${damage} et appliquent 1 pile de pacte de fantôme aux ennemis.\n\n - Chaque pile de pacte de fantôme augmente les dégâts de Nuée de Fantômes de ${percDamage}%`,
            zh: `向马格达莱恩（Magdalene）前方的敌军单位发送一群迷失的幽灵。受影响的敌军单位受到 ${damage} 伤害，并在敌人身上施加 1 层幽灵契约。\n\n - 每层幽灵契约会使蜂群幽灵的伤害提升 ${percDamage}%`,
            cz: `Posílá hordu ztracených duchů, aby zuřivě napadli nepřátelské jednotky před Magdalenou. Postižené nepřátelské jednotky obdrží ${damage} a přidají 1balíček duchovní smlouvy proti nepřátelům.\n\n - Každý balíček duchovní smlouvy zvyšuje škodu ze Hordy duchů o ${percDamage}%.`,
        }
    }

    /** Default */
    case SpellList.RECALL:
        return {
            en: 'Teleport back to spawn after 5 seconds. During its cast, you cannot move or attack, and the cast is interrupted when you take damage.',
            ru: 'Телепорт обратно на свою базу спустя 5 секунд. Во время возвращения вы не можете двигаться или атаковать, а любой полученный урон перырвает подготовку.',
            cz: 'Po 5 sekundách se teleportujte zpět do základny. Během sesílání se nemůžete pohybovat ani útočit a sesílání je přerušeno, pokud utrpíte poškození.',
            br: 'Teleporte-se de volta para Base após 5 segundos. Durante isso você não pode se mover ou atacar, será interrompido se você receber qualquer tipo de dano.',
            zh: '5秒後傳送回陣營。在發動期間，你不能採取任何動作跟攻擊，且遭受攻擊後施展將被打斷。',
        }

    default: return { en: '', cz:  '' }
    }
}

const _getSpellNameLang = (id: SpellList): { [key in string]: string } => {
    switch (id) {
    /** Kumihu  */
    case SpellList.KUMIHU_AUTOATTACK:
    case SpellList.VEIL_AUTOATTACK:
    case SpellList.FLIN_AUTOATTACK:
    case SpellList.HAZEL_AUTOATTACK:
    case SpellList.KIRA_AUTOATTACK:
    case SpellList.SPARROW_AUTOATTACK:
    case SpellList.ICEAT_AUTOATTACK:
    case SpellList.BELLE_AUTOATTACK:
    case SpellList.THOMAS_AUTOATTACK:
    case SpellList.AREL_AUTOATTACK:
    case SpellList.ALVAR_ATTACK:
    case SpellList.FOXY_ATTACK:
    case SpellList.MAGDALENE_ATTACK:
        return {
            en: 'Attack',
            ru: 'Атака',
            cz: 'Útok',
            br: 'Ataque básico',
            zh: '攻擊',
        }

    case SpellList.KUMIHU_MAGICAL_ORB:
        return {
            en: 'Magical Orb',
            ru: 'Волшебная сфера',
            cz: 'Magická Koule',
            br: 'Rajada de vento',
            zh: '魔幻寶珠',
        }
    case SpellList.KUMIHU_DASH:
        return {
            en: 'Arcane Dash',
            ru: 'Тайный рывок',
            cz: 'Tajemný Krok',
            br: 'Possessão Demoníaca',
            zh: '奧術衝刺',
        }

        /** Sparrow */
    case SpellList.SPARROW_DASH:
        return {
            en: 'Dash',
            ru: 'Рывок',
            cz: 'Zteč',
            br: 'Cai dentro',
            zh: '突進',
        }

    case SpellList.SPARROW_GROUND_SLAM:
        return {
            en: 'Ground Slam',
            ru: 'Удар по земле',
            cz: 'Úder Země',
            br: 'poder demoníaco',
            zh: '地面猛擊',
        }

        /** I'Ceat */

    case SpellList.ICEAT_ICICLE_BOLT:
        return {
            en: 'Icicle Bolt',
            ru: 'Сосульки',
            cz: 'Sprška Rampouchů',
            br: 'Estilhaço de gelo',
            zh: '寒冰飛箭',
        }

    case SpellList.ICEAT_COLD_EMBRACE:
        return {
            en: 'Cold Embrace',
            ru: 'Объятья холода',
            cz: 'Chladné objetí',
            br: 'Abraço do inverno',
            zh: '冰冷懷抱',
        }

        /** Belle */

    case SpellList.BELLE_PRICKLY_VINE:
        return {
            en: 'Prickly Vine',
            ru: 'Колючая лоза',
            cz: 'Bodavá Réva',
            br: 'Videira espinhosa',
            zh: '荊棘藤蔓',
        }

    case SpellList.BELLE_FLORAL_AMBUSH:
        return {
            en: 'Floral Ambush',
            ru: 'Цветочная ловушка',
            cz: 'Bouchací Kytky',
            br: 'Emboscada floral',
            zh: '鮮花伏擊',
        }

        /** Thomas */

    case SpellList.THOMAS_SHURIKEN_TOSS:
        return {
            en: 'Shuriken Toss',
            ru: 'Бросок сюрикена',
            cz: 'Vrh Shurikenu',
            br: 'Shuriken Demoníaca',
            zh: '手裏劍投擲',
        }

    case SpellList.THOMAS_SHADOW_CARROT:
        return {
            en: 'Shadow Carrot',
            ru: 'Теневая морковь',
            cz: 'Stínová Mrkev',
            br: 'Contrato',
            zh: '闇影蘿蔔',
        }

        /** Veil */
    case SpellList.VEIL_ASTRAL_BLADES:
        return {
            en: 'Astral Blades',
            ru: 'Астральные клинки',
            cz: 'Astrální Čepele',
            br: 'Lâminas astrais',
            zh: '星光刀刃',
        }

    case SpellList.VEIL_ASTRAL_STEP:
        return {
            en: 'Astral Step',
            ru: 'Астральный шаг',
            cz: 'Astrální Krok',
            br: 'Regente do mal',
            zh: '星光飛躍',
        }

    case SpellList.FLIN_PRECISE_SHOT:
        return {
            en: 'Precise shot',
            ru: 'Точный выстрел',
            cz: 'Přesná střela',
            br: 'Tiro preciso',
            zh: '精準射擊',
        }

    case SpellList.FLIN_MARKSMANSHIP:
        return {
            en: 'Marksmanship',
            ru: 'Меткая стрельба',
            cz: 'Strelecké umenie',
            br: 'Pontaria perfeita',
            zh: '精通箭術',
        }

    case SpellList.KIRA_RAIN_OF_SPARKS:
        return {
            en: 'Rain of Sparks',
            ru: 'Дождь искр',
            cz: 'Dážď iskier',
            br: 'Relâmpago do Abismo',
            zh: '花火之雨',
        }

    case SpellList.KIRA_VOID_PHANTASM:
        return {
            en: 'Void Phantasm',
            ru: 'Фантазм пустоты',
            cz: 'Prázdné fantazie',
            br: 'Fantasma do Abismo',
            zh: '虛空幻象',
        }

    case SpellList.HAZEL_HEROIC_SLASH:
        return {
            en: 'Justice\'s Wrath',
            br: 'Portadora da verdade',
            ru: 'Гнев правосудия',
            cz: 'Hněv spravedlnosti',
            zh: '正義之怒',
        }

    case SpellList.HAZEL_SHOCKWAVE:
        return {
            en: 'Triumphant Upheaval',
            ru: 'Триумфальный переворот',
            br: 'Revolta Triunfante',
            cz: 'Triumfálne prevraty',
            zh: '勝利的動盪',
        }

    case SpellList.AREL_TUMBLE:
        return {
            en: 'Tumble',
            ru: 'Кувырок',
            br: 'Hora de correr',
            cz: 'Kotrmelec',
            zh: '翻跟斗',
        }

    case SpellList.AREL_TICKING_BOMB:
        return {
            en: 'Ticking Bomb',
            ru: 'Часовая бомба',
            br: 'Bomba Relógio',
            cz: 'Tikající bomba',
            zh: '定時炸彈',
        }

    case SpellList.ALVAR_FURIOUS_KICK:
        return {
            en: 'Furious kick',
            ru: 'Яростный удар',
            br: 'Chute furioso',
            cz: 'Zúrivý kopanec',
            zh: '憤怒之踢',
        }

    case SpellList.ALVAR_HEAVENLY_KICK:
        return {
            en: 'Heavenly Kick',
            ru: 'Небесный удар',
            br: 'Chute Celestial',
            cz: 'Nebeský kop',
            zh: '天堂之踢',
        }

    case SpellList.FOXY_GRANADE:
        return {
            en: 'Explosive grenade',
            ru: 'Взрывная граната',
            cz: 'Výbušný granát',
        }
    
    case SpellList.FOXY_RAPID_FIRE:
        return {
            en: 'Rapid fire',
            ru: 'Беглый огонь',
            cz: 'Příval kulek',
        }
    case SpellList.MAGDALENE_SCREAM_OF_PAIN:
        return {
            en: 'Scream of Pain',
            br: 'Grito de Dor',
            fr: 'Cri de Douleur',
            zh: '痛苦的尖叫',
            cz: 'Křik bolesti'
        }
    case SpellList.MAGDALENE_SWARM_OF_GHOSTS:
        return {
            en:  'Swarm of Ghosts',
            br: 'Enxame de Fantasmas',
            fr: 'Essaim de Fantômes',
            zh: '一群鬼魂',
            cz: 'Roj duchů'
        }
        /** Default */
    case SpellList.RECALL:
        return {
            en: 'Recall',
            ru: 'Возвращение',
            cz: 'Odvolání',
            br: 'Retorno',
            zh: '召回',
        }
    default: return { en: '' }
    }
}

export const getSpellDescription = (id: SpellList, unitStats: GetSpellDescriptionInput, type: Shared.DamageTypes): string => {
    const result = _getSpellDescriptionLang(id, unitStats, type)

    if (result[LANG.value])
        return result[LANG.value]
    else
        return result['en']
}

export const getSpellName = (id: SpellList): string => {
    const result = _getSpellNameLang(id)

    if (result[LANG.value])
        return result[LANG.value]
    else
        return result['en']
}
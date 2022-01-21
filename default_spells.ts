import { toSec } from "@/misc/constants";
import Shared, { BelleAbilityData, ThomasAbilityData, ICeatAbilityData, KumihuAbilityData, SparrowAbilityData, VeilAbilityData, FlinAbilityData, KiraAbilityData } from "@/misc/shared";
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
                br: `Kumihu dispara 3 rajadas de vento cada uma dando ${basic_damage} de dano normal.<br /> <br /> <b>[Passiva]: </b> Usar Dash dá a ela um bônus no próximo ataque básico, dando ${enh_damage} de dano mágico e encantando o inimigo por ${toSec(KumihuAbilityData.ENH_CHARM_DURATION)}.`,
            }
        }

        case Shared.SpellList.KUMIHU_MAGICAL_ORB: {
            const base_damage = getDamage(KumihuAbilityData.MAGICAL_ORB_DMG_MODIFIER * abilityPower, SpellType.MAGICAL, KumihuAbilityData.MAGICAL_ORB_BASE_DAMAGE + (KumihuAbilityData.MAGICAL_ORB_DAMAGE_PER_LEVEL * (level - 1)));
            return {
                en: `Kumihu throws a blue orb that deals ${base_damage} magic damage and returns to her after reaching its max range dealing ${base_damage} magic damage to enemies in its way.`,
                ru: `Кумиху швыряет синюю сферу, которая наносит ${base_damage} магического урона и затем возвращается к ней, нанося ${base_damage} магического урона всем врагам на своём пути.`,

                cz: `Kumihu vrhne modrou kouli, která způsobí ${base_damage} magického poškození, poté se k ní vrátí po dosažení maximálního dosahu a způsobí ${base_damage} magického poškození nepřátelům, kteří jí stojí v cestě.`,

                br: `Kumihu comprime o ar a sua volta e lança uma rajada causando ${base_damage} de dano mágico, retornando para ela depois de atingir seu alcance máximo causando ${base_damage} de dano mágico a inimigos em seu caminho.`,

            }
        }

        case Shared.SpellList.KUMIHU_DASH:
            return {
                en: `Kumihu dashes a short distance. This will activate her passive for ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
                ru: `Кумиху совершает рывок на короткую дистанцию. Это активирует её пассивную способность на ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,

                cz: `Kumihu vykročí dopředu a tím aktivuje svou pasivní schopnost na ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,

                br: `Kumihu da um avanço em uma curta distância. Isso irá ativar sua passiva por ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,

            }

        /** Sparrow */
        case Shared.SpellList.SPARROW_AUTOATTACK: {
            const base_damage = getDamage(SparrowAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enh_damage = getDamage(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * damage);

            return {
                en: `Sparrow swings and thrusts her sword doing ${base_damage} per hit. <br />Passive: Using an ability charges Sparrow's sword. Her next basic attack knocks up enemies for ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} and deals ${enh_damage} damage.`,
                ru: `Спарроу взмахивает и делает выпад своим мечом, нанося ${base_damage} физического урона за попадание. <br />Пассивно: Использование способностей зачаровывает меч Спарроу. Её следующая базовая атака подбрасывает врагов на ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} и наносит ${enh_damage} урона.`,

                cz: `Sparrow máchá mečem a způsobuje ${base_damage} za zásah. <br />Pasivní: Použití schopnosti nabije meč. Její další základní útok srazí nepřátele na ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} a způsobí ${enh_damage} poškození.`,

                br: `Sparrow corta seus inimigos causando ${base_damage} por ataque.<br /> <br /> <b>[Passiva]: </b> Usar uma habilidade, faz com que a espada de Sparrow fique carregada. Seu próximo ataque básico stuna os inimigos por ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} e da um bônus de ${enh_damage} de dano.`,

            }
        }

        case Shared.SpellList.SPARROW_DASH:
            return {
                en: `Sparrow quickly dashes while thrusting her sword forward, stunning enemies she hits for ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} and dealing ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)}.`,
                ru: `Спарроу совершает стремительный рывок, оглушая задетых врагов на ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} и нанося ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)} урона.`,

                cz: `Sparrow se vrhne kupředu a vytasí svůj meč, čímž omráčí nepřátele které zasáhne na ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} a způsobí ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)}.`,            

                br: `Sparrow avança na direção que está olhando,  atordoando os inimigos acertados por ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} e dando ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)} de dano.`,

            }

        case Shared.SpellList.SPARROW_GROUND_SLAM: {
            const base_damage = getDamage(0, type, SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE);
            const percDamage = Math.floor(SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG * 100);

            return {
                en: `Sparrow unleashes the power of her sword to create a crescent-shaped sword beam dealing ${base_damage} (plus ${percDamage}% of target's missing health) to enemies that get hit.`,
                ru: `Спарроу высвобождает силу своего меча, создавая волну в форме полумесяца, наносящую ${base_damage} (плюс ${percDamage}% от недостающего здоровья цели) урона задетым врагам.`,

                cz: `Sparrow uvolní sílu uvnitř svého meče a vytvoří paprsek ve tvaru půlměsíce, který udělí ${base_damage} (plus ${percDamage} % chybějícího zdraví cíle) zasaženým nepřátelům.`,

                br: `Sparrow canaliza todo o poder de sua espada, criando um feixe na sua frente que causa ${base_damage} (mais ${percDamage}% de vida perdida do alvo) para os inimigos que são atingidos.`,

            }
        }

        /** I'Ceat */
        case Shared.SpellList.ICEAT_AUTOATTACK: {
            const base_damage = getDamage(ICeatAbilityData.AUTOATTACK_MOD_DAMAGE * damage);
            return {
                en: `I'ceat hurls a ball of snow a short distance dealing ${base_damage} damge <br />Passive: Basic attacks slow enemies by ${-ICeatAbilityData.AUTOATTACK_SLOW} speed and stacks with the slow of his abilities.`,
                ru: `Ай'сит швырает снежок на короткую дистанцию, нанося ${base_damage} физического урона <br />Пассивно: Атаки замедляют врагов на ${-ICeatAbilityData.AUTOATTACK_SLOW}, складываясь с замедлением от способностей Ай'сита.`,

                cz: `I'ceat mrští sněhovou kouli na krátkou vzdálenost a způsobí ${base_damage} poškození <br />Pasivní: Základní útoky zpomalí nepřátele o ${-ICeatAbilityData.AUTOATTACK_SLOW} a sčítá se s spomalením ostatních schopností.`,

                br: `Iceat arremessa uma bola de neve a curta distância causando ${base_damage} de dano.<br /> <br /> <b>[Passiva]: </b> Ataques básicos dão lentidão nos inimigos de ${-ICeatAbilityData.AUTOATTACK_SLOW}, podendo somar com a lentidão de suas habilidades.`,

            }
        }
        case Shared.SpellList.ICEAT_ICICLE_BOLT: {
            const base_damage = getDamage(ICeatAbilityData.ICICLE_BOLT_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.ICICLE_BOLT_BASE_DAMAGE + (ICeatAbilityData.ICICLE_BOLT_DAMAGE_PER_LEVEL * (level - 1)));

            return {
                en: `I'ceat fires three shards of ice, each slowing enemies by ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK} speed (stacks) dealing ${base_damage} with each hit. <br />Hitting all three of them root an enemy for ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
                ru: `Ай'сит выпускает три осколка льда, каждый из которых замедляет врагов на ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}(замедление складывается) и наносит ${base_damage} магического урона. <br />Попадание всеми тремя сосульками обездвижит врага на ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,

                cz: `I'ceat vystřelí tři střepy ledu, z nichž každý zpomalí nepřátele o ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}, což způsobí ${base_damage} při každém zásahu. <br />Zasáhnete-li všemi třemi, znehybní nepřítele na ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,

                br: `Iceat dispara três estilhaços de gelo, cada estilhaço acertado reduz a velocidade do inimigo em ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}, adicionando ${base_damage} de dano para cada ataque. <br />Atingir todos os três estilhaços em um inimigo enraiza ele por ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}.`,

            }
        }

        case Shared.SpellList.ICEAT_COLD_EMBRACE: {
            const base_damage = getDamage(ICeatAbilityData.COLD_EMBRACE_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.COLD_EMBRACE_BASE_DAMAGE + (ICeatAbilityData.COLD_EMBRACE_DAMAGE_PER_LEVEL * (level - 1)));
            return {
                en: `I'ceat slides on the ground, increasing his speed by ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} for ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} and leaving a ice trail ` +
                    `dealing  ${base_damage} damage per second to enemies on top of the ice and slow them.`,
                ru: `Ай'сит скользит по земле, получая ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} скорости передвижения на ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} и оставляя ледяной след позади, ` +
                    `наносящий  ${base_damage} магического урона в секунду, а также замедляющий всех наступивших врагов.`,

                cz: `I'ceat se začne klouzat, tím si zvyšuje rychlost o ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} na ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} a zanechává za sebout ledovou vrstvu ` +
                    `, která uděluje ${base_damage} poškození za vteřinu nepřátelům na vrcholu ledu a zpomalí je.`,

                br: `Iceat desliza no chão, aumentando sua velocidade em ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} por ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} e deixando uma trilha de gelo,` +
                    `dando ${base_damage} de dano por segundo aos inimigos que pisam na trilha.`,

            }
        }

        /** Belle */
        case Shared.SpellList.BELLE_AUTOATTACK:
            return {
                en: `Belle fires an explosive thorn from her wand dealing ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} AoE damage in a small area.`,
                ru: `Белла выпускает взрывной шип из своей палочки, наносящий ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} физического урона по площади.`,

                cz: `Belle vystřelí výbušný trn ze své hůlky a způsobí ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} poškození v malé oblasti.`,

                br: `Belle atira uma flor explosiva de sua varinha causando ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} de dano em área.`,

            }

        case Shared.SpellList.BELLE_PRICKLY_VINE: {
            const base_damage = getDamage(BelleAbilityData.PRICKLY_VINE_DAMAGE_MOD * abilityPower, type, BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE + (BelleAbilityData.PRICKLY_VINE_DAMAGE_PER_LEVEL * (level - 1)));
            const attach_damage = getDamage(BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE_ATTACHED, type);

            return {
                en: `Belle casts a vine forward that attaches to an enemy dealing ${base_damage} damage and slow down movement speed. <br />It can be broken if the enemy moves far enough from Belle.` +
                    `<br /> <br /> After a short time, if the vine is still attached, the vine disappears and stuns the enemy for ${toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)} and does ${attach_damage} damage`,
                ru: `Белла бросает лозу вперёд, которая прикрепляется к первому вражескому герою на пути, нанося ${base_damage} магического урона и дополнительно замедляя цель. <br />Способность может быть прервана, если вражеский герой отойдёт слишком далеко от Беллы.` +
                    `<br /> <br /> Спустя небольшой промежуток времени, если лоза всё ещё прикреплена к врагу, она исчезает и оглушает цель на ${toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)}, нанося ${attach_damage} магического урона.`,

                cz: `Belle vrhne vinnou révu která se připojí k nepříteli způsobujícímu ${base_damage} poškození a zpomalí pohyb. <br />Lze je zlomit, pokud se nepřítel vydálí dostatečně daleko od Belle.` +
                    `<br /> <br /> Po krátké době, pokud je liána stále propojena, opadne a omráčí nepřítele na ${toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)} a způsobí ${attach_damage} poškození.`,

                br: `Belle lança uma videira para frente que se liga a um inimigo causando ${base_damage} de dano e diminuindo a sua velocidade de movimento.` +
                    `<br /> Depois de 2 segundos, se a videira ainda estiver presa no inimigo, ela vai prender ele o atordoando por ${toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)} e causando ${attach_damage} de dano. <br /> <br />(Ela pode ser quebrada se o inimigo se mover para longe o suficiente de Belle.)`,

            }
        }

        case Shared.SpellList.BELLE_FLORAL_AMBUSH: {
            const base_damage = getDamage(BelleAbilityData.FLORAL_AMBUSH_DAMAGE_MOD * abilityPower, type, BelleAbilityData.FLORAL_AMBUSH_BASE_DAMAGE + BelleAbilityData.FLORAL_AMBUSH_DAMAGE_PER_LEVEL * (level - 1));
            return {
                en: `Belle jumps in the air and drops three seed bombs in front of her that attaches to an enemy if they get near doing ${base_damage} over 2 seconds and exploding after the duration, doing ${base_damage} AoE damage` +
                    `<br /><br />After staying on the ground for ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, the seeds explode dealing ${base_damage} AoE damage to surrounding enemies. Enemy that step on bomb while carrying one will immediately trigger explosion`,
                ru: `Белла подпрыгивает и сбрасывает три цветочные бомбы перед собой, которые приклепляются к вражескому герою, если он наступит на них, нанося цели ${base_damage} урона в течение 2 секунд, взрываясь после этого, нанося ${base_damage} урона по площади` +
                    `<br /><br />После пребывания на земле в течение ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, цветы взрываются, нанося ${base_damage} урона по площади ближайшим врагам. Враг, ступивший на бомбу с уже прикреплённой до этого, моментально взорвёт предыдущую.`,

                cz: `Belle vyskočí do vzduchu a shodí pod sebe tři semenné bomby, které se přichytí k nepříteli pokud na ně vstoupí a způsobí ${base_damage} poškození během 2 sekund a po uplynutí této doby exploduje, čímž způsobí ${base_damage} poškození v malé oblasti` +
                    `<br /><br />Pokud se bomby neprichtí do ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, semínka explodují a způsobí ${base_damage} poškození okolním nepřátelům. Nepřítel, který šlápne na bombu a zároveň ji nese, okamžitě spustí explozi.`,

                br: `Belle plana no ar e lança três bombas de flor em sua frente, se prendendendo a um inimigo causando ${base_damage} de dano, depois de 2 segundos explode novamente se o inimigo estiver com uma semente, causando ${base_damage} de dano.` +
                    `<br /><br />Depois de ficar no chão por ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, as flores explodem causando ${base_damage} de dano nos inimigos por perto. Inimigos que pisarem nas bombas enquanto elas carregam, irám imediatamente desencadear uma explosão.`,

            }
        }

        /** Thomas */
        case Shared.SpellList.THOMAS_AUTOATTACK:
            return {

                en: `Bunninja slashes with his carrot and deals ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} damage.`,
                ru: `Банниндзя взмахивает своей морковью, нанося ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} физического урона.`,
                cz: `Bunninja seká svou mrkví a udělí ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} poškození.`,
                br: `Thomas faz um corte com espada e causa ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} de dano.`,

            }

        case Shared.SpellList.THOMAS_SHURIKEN_TOSS: {
            const base_damage = getDamage(ThomasAbilityData.SHURIKEN_TOSS_DMG_MODIFIER * abilityPower, type, ThomasAbilityData.SHURIKEN_TOSS_BASE_DAMAGE + ThomasAbilityData.SHURIKEN_TOSS_DAMAGE_PER_LEVEL * (level - 1));

            return {

                en: `Bunninja throws three carrot-like shurikens which deals ${base_damage} damage to all enemies on the way. They return to him after a short time dealing ${base_damage} damage to all enemies in the way.`,
                ru: `Банниндзя бросает три морковоподобных сюрикена перед собой, которые наносят ${base_damage} магического урона всем врагам на своём пути. Они возвращаются к нему спустя небольшой промежуток времени, повторно нанося ${base_damage} магического урона всем врагам на своём пути.`,
                cz: `Bunninja hodí tři mrkvovité shurikeny, které způsobí ${base_damage} poškození všem nepřátelům na cestě. Vrátí se k němu po krátké době a udělí ${base_damage} poškození všem nepřátelům, kteří mu stojí v cestě.`,
                br: `Thomas lança com sua espada demoníaca, três shurikens que causam ${base_damage} de dano a todos inimigos no caminho. Elas voltam para ele depois de um curto período de tempo causando ${base_damage} de dano a todos inimigos no caminho.`,

            }
        }

        case Shared.SpellList.THOMAS_SHADOW_CARROT: {
            const base_damage = getDamage(damage, type, ThomasAbilityData.SHADOW_CARROT_BASE_DAMAGE);

            return {
                en: `<b>First cast: </b>Bunninja throws an attaching carrot. He can teleport to it with ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} of casting. <br /> <br />` +
                    `<b>Second cast: </b>Teleports to the carrot. If it is attached to an enemy, Bunninja stuns that enemy for ${toSec(ThomasAbilityData.SHADOW_CARROT_STUN_DURATION)} and deals ${base_damage} damage to them.`,
                ru: `<b>Первое применение: </b>Банниндзя бросает прикрепляющуюся морковь. Он может телепортироваться к ней в течение ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} после первого применения. <br /> <br />` +
                    `<b>Второе применение: </b>Телепортируется к моркови. Если она прикрепилась к врагу, Банниндзя оглушает этого врага на ${toSec(ThomasAbilityData.SHADOW_CARROT_STUN_DURATION)} и наносит ему ${base_damage} физического урона.`,
                cz: `První použití: Bunninja hodí stínovou mrkev. Může se k ní teleportovat do ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} vteřin po použití. `
                    + `Druhé použití: Bunninja se teleportuje k mrkvi. Pokud je připojena k nepříteli, Bunninja omráčí tohoto nepřítele na ${toSec(ThomasAbilityData.SHADOW_CARROT_STUN_DURATION)} a udělí ${base_damage} poškození.`,
                br: `<b>Primeira Ativação: </b>Thomas joga sua espada demoníaca. Ele pode se teletransportar para lá depois de ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} de duração. <br /> <br />` +
                    `<b>Segunda Ativação: </b>Teleporta-se para a espada. Se estiver atingido um inimigo, ele Teleporta-se para o inimigo o atordoando por ${toSec(ThomasAbilityData.SHADOW_CARROT_STUN_DURATION)} e causando ${base_damage} de dano.`,
            }
        }
        /** Veil */
        case Shared.SpellList.VEIL_AUTOATTACK: {
            const base_damage = getDamage(VeilAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enhanced_dmg = getDamage(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower, SpellType.MAGICAL, VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1));
            return {
                en: `Veil slashes with her weapons and deals ${base_damage} damage. <br /> Enhanced: Veil uses her astral spirit to deal an additional ${enhanced_dmg} damage (consume enhanced state)`,
                ru: `Вэйл взмахивает своим оружием и наносит ${base_damage} физического урона. <br /> Усиленная: Вэйл использует свой астральный дух, чтобы нанести дополнительно ${enhanced_dmg} урона (поглощает эффект усиления)`,

                cz: `Veil sekne svými zbraněmi a způsobí ${base_damage} poškození. <br /> Posílení: Veil používá svého astrálního ducha a udělí dalšíh ${enhanced_dmg} poškození (spotřebuje Posílení stav)`,

                br: `Veil corta com suas espadas demoníacas causando ${base_damage} de dano.<br /> <br /> <b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enhanced_dmg} de dano.<br /> (Consume o estado Maldição dos caídos.)`,

            }
        }

        case Shared.SpellList.VEIL_ASTRAL_BLADES: {
            const base_damage = getDamage(VeilAbilityData.ASTRAL_BLADES_DMG_MODIFIER * abilityPower, type, VeilAbilityData.ASTRAL_BLADES_BASE_DAMAGE + VeilAbilityData.ASTRAL_BLADES_DAMAGE_PER_LEVEL * (level - 1));

            return {
                en: `Veil jumps and throws her astral blades downward at a 45° angle which deal ${base_damage}. If ability hits an enemy hero, it will enhance veil`,
                ru: `Вэйл подпрыгивает и бросает свои астральные клинки вниз под углом 45°, которые наносят ${base_damage} магического урона. Если способность попала по вражескому герою, Вэйл получит усиление.`,

                cz: `Veil skočí a vrhne své astrální čepele dolů pod úhlem 45°, což způsobí ${base_damage} poškození. Pokud schopnost zasáhne nepřátelského hrdinu, získá Posílení.`,

                br: `Veil salta e atira suas lâminas astrais para baixo em um ângulo de 45 ° causando ${base_damage} de dano.<br /> Se a habilidade atingir um personagem inimigo, ela ativa a [Maldição dos caídos].`,

            }
        }

        case Shared.SpellList.VEIL_ASTRAL_STEP: {
            const base_damage = getDamage(VeilAbilityData.ASTRAL_STEP_DAMAGE_MOD * damage);
            const enh_dmg = getDamage(VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower, SpellType.MAGICAL, VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1));

            return {
                en: `Veil uses astral step to dash forward with high velocity and deals ${base_damage} damage.<br /> <br />` +
                    `Enhanced: Veil steps into an astral realm and deals additional ${enh_dmg} damage and slows enemy. (consume enhanced state) <b> Sucessful hit reset Astral Step cooldown! </b>`,
                ru: `Вэйл совершает рывок вперёд на большой скорости, который наносит ${base_damage} магического урона.<br /> <br />` +
                    `Усиленная: Вэйл шагает в астральное измерение и наносит дополнительно ${enh_dmg} урона, замедляя врага. (поглощает эффект усиления) <b> Успешное попадание сбрасывает перезарядку Астрального шага! </b>`,

                cz: `Veil použije astrální krok, aby vykročila vpřed vysokou rychlostí a způsobí ${base_damage} poškození.<br /> <br />` +
                    `Posílení: Veil vstoupí do astrální říše a způsobí další ${enh_dmg} poškození a zpomalí nepřítele. (spotřebuje vylepšený stav) <b> Úspěšný zásah resetuje cooldown! </b>`,

                br: `Veil avança em alta velocidade para frente causando ${base_damage} de dano.<br /> <br />` +
                    `<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enh_dmg} de dano e dando lentidão.<br /> (consume o estado Maldição dos caídos.)<br /><br /> <b> Se acertar o hit, reseta sua habilidade! </b>`,

            }
        }

        /** Flin  */
        case Shared.SpellList.FLIN_AUTOATTACK: {
            const basic_damage = getDamage(FlinAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enh_damage = getDamage(FlinAbilityData.MARKSMANSHIP_BONUS_DAMAGE_MOD * damage);

            return {
                en: `Flin fires an arrow and deals ${basic_damage} normal damage. <br /> If marksmanship is active, flin deals ${enh_damage} and arrows pierce all enemy units.`,
                ru: `Флин выпускает стрелу, наносящую ${basic_damage} ед. физического урона. <br /> Если активна Меткая стрельба, выпущенная стрела наносит ${enh_damage} урона и пронзает все вражеские цели на своём пути.`,
                cz: `Flin vystřelí šíp a způsobí ${basic_damage} normálního poškození <br /> Ak je marksmanship aura aktivovaná, šípy budu prolétat skrz nepřátelske jednotky a způsobí ${enh_damage} normálního poškození` ,
            }
        }

        case Shared.SpellList.FLIN_PRECISE_SHOT: {
            const base_damage = getDamage(FlinAbilityData.PRECISE_SHOT_DAMAGE_MOD * abilityPower, SpellType.MAGICAL, FlinAbilityData.PRECISE_SHOT_BASE_DAMAGE + (FlinAbilityData.PRECISE_SHOT_DAMAGE_PER_LEVEL * (level - 1)));
            return {
                en: `Flin fires a precise shot in his direction, if the arrow hits a target, the arrow will deal ${base_damage} magical damage and knockback enemy unit away from you. <br /> If marksmanship is active, precise shot will pierce all units`,
                ru: `Флин делает точный выстрел в направлении своего движения, который наносит ${base_damage} ед. магического урона и отбрасывает первую вражескую цель на своём пути. <br /> Если активна Меткая стрельба, эта способность будет пронзать все вражеские цели на своём пути.`,
                cz: `Flin vystřelí precízni strelu, kterí způsobí ${base_damage} magického poškození a odkopne nepřítele dál od tebe. <br /> Ak střelecké umění je aktívni, precízna strela proleti skrz nepřátelske jednotky.`,
            }
        }

        case Shared.SpellList.FLIN_MARKSMANSHIP:
            return {
                en: `Flin increases his focus for ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} or next ${FlinAbilityData.MARKSMANSHIP_STACKS} basic shots will deal additional damage and pierce enemy units.`,
                ru: `Флин повышает свою точность на ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} или на ${FlinAbilityData.MARKSMANSHIP_STACKS} следующих атак. В течение этого времени базовые атаки наносят дополнительный урон и пронзают вражеские цели.`,
                cz: `Flin zvýší své soustředění na útok a po dobu ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} nebo pro další ${FlinAbilityData.MARKSMANSHIP_STACKS} zásahy flin způsoby bonusové poškození a jeho šípy budou přecházet přes nepřátelské jednotky.`,
            }

        /** Flin  */
        case Shared.SpellList.KIRA_AUTOATTACK: {
            const basic_damage = getDamage(KiraAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enh_damage = getDamage(KiraAbilityData.ENHATTACK_DAMAGE_MOD * abilityPower, SpellType.MAGICAL, KiraAbilityData.ENHATTACK_BASE_DAMAGE + (KiraAbilityData.ENHATTACK_BASE_DAMAGE_PER_LEVEL * (level - 1)));

            return {
                en: `Kira fires a lightning bolt that does ${basic_damage} normal damage. <br /> <b>[Enhanced]: (Coiling Lightning)</b> Kira casts a continuous flow of electricity towards the nearest hero, dealing ${enh_damage}/sec and decrease attack speed by ${(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)}%. If target is friendly hero instead increase attack speed nad heal for 50% /sec`,
                cz: `Kira vystřelí blesk, který způsobí ${basic_damage} normální poškození. <br /> <b>[Vylepšené]: (Coiling Lightning)</b> Kira vrhá nepřetržitý tok elektřiny směrem k nejbližšímu hrdinovi, čímž uděluje ${enh_damage}/s a snižuje rychlost útoku o ${( KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100)} %. Pokud je cílem přátelský hrdina, zvyši rychlost útoku a uzdravi ho o 50% / sec`,
            }
        }

        case Shared.SpellList.KIRA_RAIN_OF_SPARKS: {
            const damage = getDamage(KiraAbilityData.VOID_RAIN_DAMAGE_MOD * abilityPower, SpellType.MAGICAL, KiraAbilityData.VOID_RAIN_BASE_DAMAGE + (KiraAbilityData.VOID_RAIN_DAMAGE_PER_LEVEL * (level - 1)));
        
            return {
                en: `Kira summons 4 void missiles that rain down from above, each missile dealing ${damage} magic damage that pierces through enemies. 
                <br /> <b>[Enhanced]: (Torrential Abyss)</b> Kira summons a total of 8 void missiles.`,
                cz: `Kira vyvolá 4 prázdné střely, které prší shora, přičemž každá střela způsobí ${damage} magické poškození, které prorazí nepřátele.
                <br /> <b>[Vylepšené]: (Torrential Abyss)</b> Kira vyvolá celkem 8 prázdných střel.`
            }
        }

        case Shared.SpellList.KIRA_VOID_PHANTASM: {
            const damage = getDamage(KiraAbilityData.VOID_PHANTASM_DAMAGE_MOD * abilityPower, SpellType.MAGICAL, KiraAbilityData.VOID_PHANTASM_BASE_DAMAGE + (KiraAbilityData.VOID_PHANTASM_DAMAGE_PER_LEVEL * (level - 1)));

            return {
                en: `Kira deceives her enemies and leaves behind her a distorted afterimage, which she returns to after ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}
                <br /> <b>[Enhanced]: (Chaotic Afterimage)</b> Kira's afterimage follows her and phases through enemies, dealing ${damage} magical damage and silencing them for ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}.`,
                cz: `Kira oklame své nepřátele a zanechá za sebou zkreslený obraz, ke kterému se vrátí po ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}
                <br /> <b>[Enhanced]: (Chaotic Afterimage)</b> Kirin afterimage ji pronásleduje a prochází nepřáteli, uděluje ${damage} magické poškození a umlčuje je za ${toSec(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)}.`,
            }
        }

        /** Default */
        case Shared.SpellList.RECALL:
            return {
                en: "Teleport back to spawn after 5 seconds. During its cast, you cannot move or attack, and the cast is interrupted when you take damage.",
                ru: "Телепорт обратно на свою базу спустя 5 секунд. Во время возвращения вы не можете двигаться или атаковать, но любой полученный урон перырвает подготовку.",

                cz: "Po 5 sekundách se teleportujte zpět do základny. Během sesílání se nemůžete pohybovat ani útočit a sesílání je přerušeno, pokud utrpíte poškození.",

                br: "Teleporte-se de volta para Base após 5 segundos. Durante isso você não pode se mover ou atacar, será interrompido se você receber qualquer tipo de dano.",

            }

        default: return { en: "", cz:  ""}
    }
}

const _getSpellName = (id: Shared.SpellList): { [key in string]: string } => {
    switch (id) {
        /** Kumihu  */
        case Shared.SpellList.KUMIHU_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",

                cz: "Útok",

                br: "Ataque básico",

            }

        case Shared.SpellList.KUMIHU_MAGICAL_ORB:
            return {
                en: "Magical Orb",
                ru: "Волшебная сфера",

                cz: "Magická Koule",

                br: "Rajada de vento",

            }
        case Shared.SpellList.KUMIHU_DASH:
            return {
                en: "Arcane Dash",
                ru: "Тайный рывок",

                cz: "Tajemný Krok",
                br: "Possessão Demoníaca",
            }

        /** Sparrow */
        case Shared.SpellList.SPARROW_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.SPARROW_DASH:
            return {
                en: "Dash",
                ru: "Рывок",
                cz: "Zteč",
                br: "Cai dentro",
            }

        case Shared.SpellList.SPARROW_GROUND_SLAM:
            return {
                en: "Ground Slam",
                ru: "Удар по земле",
                cz: "Úder Země",
                br: "poder demoníaco",
            }

        /** I'Ceat */
        case Shared.SpellList.ICEAT_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.ICEAT_ICICLE_BOLT:
            return {
                en: "Icicle Bolt",
                ru: "Сосульки",
                cz: "Sprška Rampouchů",
                br: "Estilhaço de gelo",
            }

        case Shared.SpellList.ICEAT_COLD_EMBRACE:
            return {
                en: "Cold Embrace",
                ru: "Объятья холода",
                cz: "Chladné objetí",
                br: "Abraço do inverno",
            }

        /** Belle */
        case Shared.SpellList.BELLE_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.BELLE_PRICKLY_VINE:
            return {
                en: "Prickly Vine",
                ru: "Колючая лоза",
                cz: "Bodavá Réva",
                br: "Videira espinhosa",
            }

        case Shared.SpellList.BELLE_FLORAL_AMBUSH:
            return {
                en: "Floral Ambush",
                ru: "Цветочная ловушка",
                cz: "Bouchací Kytky",
                br: "Emboscada floral",
            }

        /** Thomas */
        case Shared.SpellList.THOMAS_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.THOMAS_SHURIKEN_TOSS:
            return {
                en: "Shuriken Toss",
                ru: "Бросок сюрикена",
                cz: "Vrh Shurikenu",
                br: "Shuriken Demoníaca",
            }

        case Shared.SpellList.THOMAS_SHADOW_CARROT:
            return {
                en: "Shadow Carrot",
                ru: "Теневая морковь",
                cz: "Stínová Mrkev",
                br: "Contrato",
            }

        /** Veil */
        case Shared.SpellList.VEIL_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.VEIL_ASTRAL_BLADES:
            return {
                en: "Astral Blades",
                ru: "Астральные клинки",
                cz: "Astrální Čepele",
                br: "Lâminas astrais",
            }

        case Shared.SpellList.VEIL_ASTRAL_STEP:
            return {
                en: "Astral Step",
                ru: "Астральный шаг",
                cz: "Astrální Krok",
                br: "Regente do mal",
            }

        case Shared.SpellList.FLIN_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.FLIN_PRECISE_SHOT:
            return {
                en: "Precise shot",
                ru: "Точный выстрел",
                cz: "Přesná střela",
                br: "Tiro preciso",
            }

        case Shared.SpellList.FLIN_MARKSMANSHIP:
            return {
                en: "Marksmanship",
                ru: "Меткая стрельба",
                cz: "Strelecké umenie",
                br: "pontaria",
            }

        case Shared.SpellList.KIRA_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                cz: "Útok",
                br: "Ataque básico",
            }

        case Shared.SpellList.KIRA_RAIN_OF_SPARKS:
            return {
                en: "Rain of Sparks",
                ru: "Дождь искр",
                cz: "Dážď iskier",
                br: "Chuva de faíscas",
            }

        case Shared.SpellList.KIRA_VOID_PHANTASM:
            return {
                en: "Void Phantasm",
                ru: "Фантазм Пустоты",
                cz: "Prázdné fantazie",
                br: "Fantasma do Vazio",
            }

        /** Default */
        case Shared.SpellList.RECALL:
            return {
                en: "Recall",
                ru: "Возвращение",
                cz: "Odvolání",
                br: "Retorno",
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
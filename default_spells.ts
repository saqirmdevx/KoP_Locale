import { toSec } from "@/misc/constants";
import Shared, { BelleAbilityData, ThomasAbilityData, ICeatAbilityData, KumihuAbilityData, SparrowAbilityData, VeilAbilityData } from "@/misc/shared";
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
                br: `Kumihu dispara 3 rajadas de vento cada uma dando ${basic_damage} de dano normal.<br /> <br /> <b>[Passiva]: </b> Usar Dash dá a ela um bônus no próximo ataque básico, dando ${enh_damage} de dano mágico e encantando o inimigo por ${toSec(KumihuAbilityData.ENH_CHARM_DURATION)}.`,
            }
        }

        case Shared.SpellList.KUMIHU_MAGICAL_ORB: {
            const base_damage = getDamage(KumihuAbilityData.MAGICAL_ORB_DMG_MODIFIER * abilityPower, SpellType.MAGICAL, KumihuAbilityData.MAGICAL_ORB_BASE_DAMAGE + (KumihuAbilityData.MAGICAL_ORB_DAMAGE_PER_LEVEL * (level - 1)));
            return {
                en: `Kumihu throws a blue orb that deals ${base_damage} magic damage and returns to her after reaching its max range dealing ${base_damage} magic damage to enemies in its way.`,
                ru: `Кумиху швыряет синюю сферу, которая наносит ${base_damage} магического урона и затем возвращается к ней, нанося ${base_damage} магического урона всем врагам на своём пути.`,
                br: `Kumihu comprime o ar a sua volta e lança uma rajada causando ${base_damage} de dano mágico, retornando para ela depois de atingir seu alcance máximo causando ${base_damage} de dano mágico a inimigos em seu caminho.`,
            }
        }

        case Shared.SpellList.KUMIHU_DASH:
            return {
                en: `Kumihu dashes a short distance. This will activate her passive for ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
                ru: `Кумиху совершает рывок на короткую дистанцию. Это активирует её пассивную способность на ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
                br: `Kumihu da um avanço em uma curta distância. Isso irá ativar sua passiva por ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
            }

        /** Sparrow */
        case Shared.SpellList.SPARROW_AUTOATTACK: {
            const base_damage = getDamage(SparrowAbilityData.AUTOATTACK_DAMAGE_MOD * damage);
            const enh_damage = getDamage(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * damage);

            return {
                en: `Sparrow swings and thrusts her sword doing ${base_damage} per hit. <br />Passive: Using an ability charges Sparrow's sword. Her next basic attack knocks up enemies for ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} and deals ${enh_damage} damage.`,
                ru: `Спарроу взмахивает и делает выпад своим мечом, нанося ${base_damage} физического урона за попадание. <br />Пассивно: Использование способностей зачаровывает меч Спарроу. Её следующая базовая атака подбрасывает врагов на ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} и наносит ${enh_damage} урона.`,
                br: `Sparrow corta seus inimigos causando ${base_damage} por ataque.<br /> <br /> <b>[Passiva]: </b> Usar uma habilidade, faz com que a espada de Sparrow fique carregada. Seu próximo ataque básico stuna os inimigos por ${toSec(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)} e da um bônus de ${enh_damage} de dano.`,
            }
        }

        case Shared.SpellList.SPARROW_DASH:
            return {
                en: `Sparrow quickly dashes while thrusting her sword forward, stunning enemies she hits for ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} and dealing ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)}.`,
                ru: `Спарроу совершает стремительный рывок, оглушая задетых врагов на ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} и нанося ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)} урона.`,
                br: `Sparrow avança na direção que está olhando,  atordoando os inimigos acertados por ${toSec(SparrowAbilityData.DASH_STUN_DURATION + (SparrowAbilityData.DASH_STUN_DURATION_PER_LEVEL * (level - 1)))} e dando ${getDamage(0, type, SparrowAbilityData.DASH_BASE_DAMAGE)} de dano.`,
            }

        case Shared.SpellList.SPARROW_GROUND_SLAM: {
            const base_damage = getDamage(0, type, SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE);
            const percDamage = Math.floor(SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG * 100);

            return {
                en: `Sparrow unleashes the power of her sword to create a crescent-shaped sword beam dealing ${base_damage} (plus ${percDamage}% of target's missing health) to enemies that get hit.`,
                ru: `Спарроу высвобождает силу своего меча, создавая волну в форме полумесяца, наносящую ${base_damage} (плюс ${percDamage}% от недостающего здоровья цели) урона задетым врагам.`,
                br: `Sparrow canaliza todo o poder de sua espada, criando um feixe na sua frente que causa ${base_damage} (mais ${percDamage}% de vida perdida do alvo) para os inimigos que são atingidos.`,
            }
        }

        /** I'Ceat */
        case Shared.SpellList.ICEAT_AUTOATTACK: {
            const base_damage = getDamage(ICeatAbilityData.AUTOATTACK_MOD_DAMAGE * damage);
            return {
                en: `I'ceat hurls a ball of snow a short distance dealing ${base_damage} damge <br />Passive: Basic attacks slow enemies by ${-ICeatAbilityData.AUTOATTACK_SLOW} speed and stacks with the slow of his abilities.`,
                ru: `Ай'сит швырает снежок на короткую дистанцию, нанося ${base_damage} физического урона <br />Пассивно: Атаки замедляют врагов на ${-ICeatAbilityData.AUTOATTACK_SLOW}, складываясь с замедлением от способностей Ай'сита.`,
                br: `Iceat arremessa uma bola de neve a curta distância causando ${base_damage} de dano.<br /> <br /> <b>[Passiva]: </b> Ataques básicos dão lentidão nos inimigos de ${-ICeatAbilityData.AUTOATTACK_SLOW}, podendo somar com a lentidão de suas habilidades.`,
            }
        }
        case Shared.SpellList.ICEAT_ICICLE_BOLT: {
            const base_damage = getDamage(ICeatAbilityData.ICICLE_BOLT_DAMAGE_MOD * abilityPower, type, ICeatAbilityData.ICICLE_BOLT_BASE_DAMAGE + (ICeatAbilityData.ICICLE_BOLT_DAMAGE_PER_LEVEL * (level - 1)));

            return {
                en: `I'ceat fires three shards of ice, each slowing enemies by ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK} speed (stacks) dealing ${base_damage} with each hit. <br />Hitting all three of them root an enemy for ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
                ru: `Ай'сит выпускает три осколка льда, каждый из которых замедляет врагов на ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}(замедление складывается) и наносит ${base_damage} магического урона. <br />Попадание всеми тремя сосульками обездвижит врага на ${toSec(ICeatAbilityData.ICICLE_ROOT_DURATION)}`,
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
                br: `Iceat desliza no chão, aumentando sua velocidade em ${ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED} por ${toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)} e deixando uma trilha de gelo,` +
                    `dando ${base_damage} de dano por segundo aos inimigos que pisam na trilha.`,
            }
        }

        /** Belle */
        case Shared.SpellList.BELLE_AUTOATTACK:
            return {
                en: `Belle fires an explosive thorn from her wand dealing ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} AoE damage in a small area.`,
                ru: `Белла выпускает взрывной шип из своей палочки, наносящий ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)} физического урона по площади.`,
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
                br: `Belle plana no ar e lança três bombas de flor em sua frente, se prendendendo a um inimigo causando ${base_damage} de dano, depois de 2 segundos explode novamente se o inimigo estiver com uma semente, causando ${base_damage} de dano.` +
                    `<br /><br />Depois de ficar no chão por ${toSec(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)}, as flores explodem causando ${base_damage} de dano nos inimigos por perto. Inimigos que pisarem nas bombas enquanto elas carregam, irám imediatamente desencadear uma explosão.`,
            }
        }

        /** Thomas */
        case Shared.SpellList.THOMAS_AUTOATTACK:
            return {
                en: `Thomas slashes with his carrot and deals ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} damage.`,
                ru: `Томас взмахивает своей морковью, нанося ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} физического урона.`,
                br: `Thomas faz um corte com espada e causa ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} de dano.`,
            }

        case Shared.SpellList.THOMAS_SHURIKEN_TOSS: {
            const base_damage = getDamage(ThomasAbilityData.SHURIKEN_TOSS_DMG_MODIFIER * abilityPower, type, ThomasAbilityData.SHURIKEN_TOSS_BASE_DAMAGE + ThomasAbilityData.SHURIKEN_TOSS_DAMAGE_PER_LEVEL * (level - 1));

            return {
                en: `Thomas throws three carrot-like shurikens which deals ${base_damage} damage to all enemies on the way. They return to him after a short time dealing ${base_damage} damage to all enemies in the way.`,
                ru: `Томас бросает три морковоподобных сюрикена перед собой, которые наносят ${base_damage} магического урона всем врагам на своём пути. Они возвращаются к нему спустя небольшой промежуток времени, повторно нанося ${base_damage} магического урона всем врагам на своём пути.`,
                br: `Thomas lança com sua espada demoníaca, três shurikens que causam ${base_damage} de dano a todos inimigos no caminho. Elas voltam para ele depois de um curto período de tempo causando ${base_damage} de dano a todos inimigos no caminho.`,
            }
        }

        case Shared.SpellList.THOMAS_SHADOW_CARROT: {
            const base_damage = getDamage(damage, type, ThomasAbilityData.SHADOW_CARROT_BASE_DAMAGE);

            return {
                en: `<b>First cast: </b>Thomas throws an attaching carrot. He can teleport to it with ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} of casting. <br /> <br />` +
                    `<b>Second cast: </b>Teleports to the carrot. If it is attached to an enemy, Thomas stuns that enemy for ${toSec(ThomasAbilityData.SHADOW_CARROT_STUN_DURATION)} and deals ${base_damage} damage to them.`,
                ru: `<b>Первое применение: </b>Томас бросает прикрепляющуюся морковь. Он может телепортироваться к ней в течение ${toSec(ThomasAbilityData.SHADOW_CARROT_DURATION)} после первого применения. <br /> <br />` +
                    `<b>Второе применение: </b>Телепортируется к моркови. Если она прикрепилась к врагу, Томас оглушает этого врага на ${toSec(ThomasAbilityData.SHADOW_CARROT_STUN_DURATION)} и наносит ему ${base_damage} физического урона.`,
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
                br: `Veil corta com suas espadas demoníacas causando ${base_damage} de dano.<br /> <br /> <b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enhanced_dmg} de dano.<br /> (Consume o estado Maldição dos caídos.)`,
            }
        }

        case Shared.SpellList.VEIL_ASTRAL_BLADES: {
            const base_damage = getDamage(VeilAbilityData.ASTRAL_BLADES_DMG_MODIFIER * abilityPower, type, VeilAbilityData.ASTRAL_BLADES_BASE_DAMAGE + VeilAbilityData.ASTRAL_BLADES_DAMAGE_PER_LEVEL * (level - 1));

            return {
                en: `Veil jumps and throws her astral blades downward at a 45° angle which deal ${base_damage}. If ability hits an enemy hero, it will enhance veil`,
                ru: `Вэйл подпрыгивает и бросает свои астральные клинки вниз под углом 45°, которые наносят ${base_damage} магического урона. Если способность попала по вражескому герою, Вэйл получит усиление.`,
                br: `Veil salta e atira suas lâminas astrais para baixo em um ângulo de 45 ° causando ${base_damage} de dano.<br /> Se a habilidade atingir um personagem inimigo, ela ativa a [Maldição dos caídos].`,
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
                br: `Veil avança em alta velocidade para frente causando ${base_damage} de dano e irá parar no primeiro personagem inimigo que ela acertar.<br /> (Ao atingir um personagem inimigo, ela aplicará a Maldição dos caídos.)<br /> <br />` +
                    `<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enh_dmg} de dano e dando lentidão.<br /> (consume o estado Maldição dos caídos.)<br /><br /> <b> Se acertar o hit, reseta sua habilidade! </b>`,
            }
        }

        /** Default */
        case Shared.SpellList.RECALL:
            return {
                en: "Teleport back to spawn after 5 seconds. During its cast, you cannot move or attack, and the cast is interrupted when you take damage.",
                ru: "Телепорт обратно на свою базу спустя 5 секунд. Во время возвращения вы не можете двигаться или атаковать, но любой полученный урон перырвает подготовку.",
                br: "Teleporte-se de volta para Base após 5 segundos. Durante isso você não pode se mover ou atacar, será interrompido se você receber qualquer tipo de dano.",
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
                br: "Ataque básico",
            }

        case Shared.SpellList.KUMIHU_MAGICAL_ORB:
            return {
                en: "Magical Orb",
                ru: "Волшебная сфера",
                br: "Rajada de vento",
            }
        case Shared.SpellList.KUMIHU_DASH:
            return {
                en: "Arcane Dash",
                ru: "Тайный рывок",
                br: "Possessão Demoníaca",
            }

        /** Sparrow */
        case Shared.SpellList.SPARROW_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                br: "Ataque básico",
            }

        case Shared.SpellList.SPARROW_DASH:
            return {
                en: "Dash",
                ru: "Рывок",
                br: "Cai dentro",
            }

        case Shared.SpellList.SPARROW_GROUND_SLAM:
            return {
                en: "Ground Slam",
                ru: "Удар по земле",
                br: "poder demoníaco",
            }

        /** I'Ceat */
        case Shared.SpellList.ICEAT_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                br: "Ataque básico",
            }

        case Shared.SpellList.ICEAT_ICICLE_BOLT:
            return {
                en: "Icicle Bolt",
                ru: "Сосульки",
                br: "Estilhaço de gelo",
            }

        case Shared.SpellList.ICEAT_COLD_EMBRACE:
            return {
                en: "Cold Embrace",
                ru: "Объятья холода",
                br: "Abraço do inverno",
            }

        /** Belle */
        case Shared.SpellList.BELLE_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                br: "Ataque básico",
            }

        case Shared.SpellList.BELLE_PRICKLY_VINE:
            return {
                en: "Prickly Vine",
                ru: "Колючая лоза",
                br: "Videira espinhosa",
            }

        case Shared.SpellList.BELLE_FLORAL_AMBUSH:
            return {
                en: "Floral Ambush",
                ru: "Цветочная ловушка",
                br: "Emboscada floral",
            }

        /** Thomas */
        case Shared.SpellList.THOMAS_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                br: "Ataque básico",
            }

        case Shared.SpellList.THOMAS_SHURIKEN_TOSS:
            return {
                en: "Shuriken Toss",
                ru: "Бросок сюрикена",
                br: "Shuriken Demoníaca",
            }

        case Shared.SpellList.THOMAS_SHADOW_CARROT:
            return {
                en: "Shadow Carrot",
                ru: "Теневая морковь",
                br: "Contrato",
            }

        /** Veil */
        case Shared.SpellList.VEIL_AUTOATTACK:
            return {
                en: "Attack",
                ru: "Атака",
                br: "Ataque básico",
            }

        case Shared.SpellList.VEIL_ASTRAL_BLADES:
            return {
                en: "Astral Blades",
                ru: "Астральные клинки",
                br: "Lâminas astrais",
            }

        case Shared.SpellList.VEIL_ASTRAL_STEP:
            return {
                en: "Astral Step",
                ru: "Астральный шаг",
                br: "Regente do mal",
            }

        /** Default */
        case Shared.SpellList.RECALL:
            return {
                en: "Recall",
                ru: "Возвращение",
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
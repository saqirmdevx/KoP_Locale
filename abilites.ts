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
  PrimAbilityData,
  // @ts-ignore
} from 'shared'
// @ts-ignore
import type { IAbilityTooltipsDataFinal } from '../abilityLangData'
// @ts-ignore
import { getDamage } from '../abilityLangData'
// @ts-ignore
import { LANG } from 'lang/lang'

type HasTalentFunction = {
  hasTalent: (flag: Shared.TALENT, tier: number) => boolean
}
type GetSpellDescriptionInput = IAbilityTooltipsDataFinal & HasTalentFunction

const _getSpellDescriptionLang = (
  id: SpellList,
  { damage, abilityPower, health, level, talents, hasTalent }: GetSpellDescriptionInput,
  type: Shared.DamageTypes
): { [key in string]: string } => {
  const abilityData = getAbilityData(id, talents)

  switch (id) {
    /** Kumihu  */
    case SpellList.KUMIHU_AUTOATTACK: {
      const basic_damage = getDamage(KumihuAbilityData.AUTOATTACK_MOD_DAMAGE * damage)
      const enh_damage = getDamage(
        KumihuAbilityData.ENH_ATTACK_MOD_DAMAGE * abilityPower,
        Shared.DamageTypes.MAGICAL,
        KumihuAbilityData.ENH_ATTACK_BASE_DAMAGE + KumihuAbilityData.ENH_ATTACK_DAMAGE_PER_LEVEL * (level - 1)
      )
      const duration = KumihuAbilityData.ENH_CHARM_DURATION

      return {
        en: `Kumihu fires 3 projectiles. Each projectile deals ${basic_damage} \n<br/>Passive: After using Arcane Dash, Kumihu's next Basic Attack deals a bonus ${enh_damage} and applies Charm on target for ${toSec(
          duration
        )}.`,
        ru: `Кумиху выпускает 3 снаряда, каждый из которых наносит ${basic_damage} физического урона \nПассивно: После использования Тайного рывка следующая атака Кумиху нанесёт ${enh_damage} магического урона и наложит очарование на цель на ${toSec(
          duration
        )}`,
        cz: `Kumihu vystřelí 3 kulky, každá způsobí ${basic_damage} normálního poškození \nPasivní: Použití Skoku očaruje další základní útok, aby způsobil ${enh_damage} magické poškození a očaruje protivnika na ${toSec(
          duration
        )}`,
        br: `Kumihu dispara 3 rajadas de vento cada uma dando ${basic_damage} de dano normal.\n<b>[Passiva]: </b> Usar Dash dá a ela um bônus no próximo ataque básico, dando ${enh_damage} de dano mágico e encantando o inimigo por ${toSec(
          duration
        )}.`,
        zh: `庫咪戶發射三發子彈，每發給予 ${basic_damage}點一般傷害 \n被動技：使用衝刺強化庫咪戶的下一個基礎攻擊，給予 ${enh_damage}點魔法傷害並給予 ${toSec(
          duration
        )}魅惑狀態`, // Need update
        fr: `Kumihu tire 3 projectiles. Chaque projectile inflige ${basic_damage} \nPassif: Après avoir utilisé la Ruée Arcanique, l'attaque de base suivante de Kumihu inflige un bonus de ${enh_damage} et applique Charme à la cible pendant ${toSec(
          duration
        )}.`,
      }
    }

    case SpellList.KUMIHU_MAGICAL_ORB: {
      const base_damage = getDamage(
        KumihuAbilityData.MAGICAL_ORB_DMG_MODIFIER * abilityPower,
        abilityData.damageType,
        KumihuAbilityData.MAGICAL_ORB_BASE_DAMAGE + KumihuAbilityData.MAGICAL_ORB_DAMAGE_PER_LEVEL * (level - 1)
      )
      return {
        en: `Kumihu throws a spirit orb, dealing ${base_damage}. The orb returns to her after reaching its max range, dealing another ${base_damage}. If Magical Orb hit the target twice it will deal ${fixed(
          KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
          1
        )}% bonus damage`,
        ru: `Кумиху выпускает сферу, наносящую ${base_damage} магического урона. Сфера возвращается к ней после достижения максимальной дистанции, нанося ещё ${base_damage} магического урона. При задевании одной и той же цели дважды, она нанесёт ${fixed(
          KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
          1
        )}% дополнительного магического урона`,
        cz: `Kumihu vystřelí duchovní kouli, která způsobí ${base_damage}. Když koule dosáhne své maximální vzdálenosti, vrátí se zpět k ní a způsobí další ${base_damage}. Pokud Koule zasáhne cíl dvakrát, způsobí ${fixed(
          KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
          1
        )}% bonusového poškození`,
        br: `Kumihu lança uma esfera espiritual causando ${base_damage}. A esfera retorna para ela depois de atingir sua distância máxima, causando mais ${base_damage}. Se a esfera atingir o alvo duas vezes ela causará ${fixed(
          KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
          1
        )}% de dano bônus.`,
        zh: `庫咪戶投擲靈球，給予 ${base_damage}點魔法傷害。靈球在達到最大距離後返回，給予 ${base_damage}點魔法傷害。如果靈球擊中目標兩次，將給予 ${fixed(
          KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
          1
        )}%額外傷害。`,
        fr: `Kumihu lance une orbe spirituelle, infligeant ${base_damage}. L'orbe revient à elle après avoir atteint sa portée maximale, infligeant un autre ${base_damage}. Si l'Orbe spirituelle touche la cible deux fois, elle infligera ${fixed(
          KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
          1
        )}% de dégâts bonus.`,
      }
    }

    case SpellList.KUMIHU_DASH:
      return {
        en: `Kumihu dashes forward. This will activate her Passive for ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}.`,
        ru: `Кумиху совершает рывок на короткую дистанцию. Это активирует её пассивную способность на ${toSec(
          KumihuAbilityData.DASH_AURA_DURATION
        )}.`,
        cz: `Kumihu vykročí dopředu a tím aktivuje svou pasivní schopnost na ${toSec(
          KumihuAbilityData.DASH_AURA_DURATION
        )}.`,
        br: `Kumihu da um avanço em uma curta distância. Isso irá ativar sua passiva por ${toSec(
          KumihuAbilityData.DASH_AURA_DURATION
        )}.`,
        zh: `庫咪戶短距離衝刺，這會在 ${toSec(KumihuAbilityData.DASH_AURA_DURATION)}內激發她的被動技。`,
        fr: `Kumihu se précipite en avant. Cela activera sa compétence passive pendant ${toSec(
          KumihuAbilityData.DASH_AURA_DURATION
        )}.`,
      }

    /** Sparrow */
    case SpellList.SPARROW_AUTOATTACK: {
      const base_damage = getDamage(SparrowAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const enh_damage = getDamage(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * damage)

      return {
        en: `Sparrow swings her sword, dealing ${base_damage}. <br />Passive: Using an ability charges Sparrow's sword. Her next basic is replaced with a shockwave attack, knocking up enemies for ${toSec(
          SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION
        )} and dealing ${enh_damage}.`,
        ru: `Спарроу взмахивает своим мечом, нанося ${base_damage} физического урона. <br />Пассивно: Использование способностей зачаровывает меч Спарроу. Её следующая базовая атака подбрасывает и оглушает врагов на ${toSec(
          SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION
        )} и наносит ${enh_damage}.`,
        cz: `Sparrow máchá mečem a způsobuje ${base_damage} za zásah. <br />Pasivní: Použití schopnosti nabije meč. Její další základní útok srazí nepřátele na ${toSec(
          SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION
        )} a způsobí ${enh_damage} poškození.`,
        br: `Sparrow corta seus inimigos causando ${base_damage} por ataque.\n<b>[Passiva]: </b> Usar uma habilidade, faz com que a espada de Sparrow fique carregada. Seu próximo ataque básico stuna os inimigos por ${toSec(
          SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION
        )} e da um bônus de ${enh_damage} de dano.`,
        zh: `史佩羅猛力揮動她的劍，給予 ${base_damage}點一般傷害。 \n被動技：使用一個能力蓄力史佩羅的劍，她的下一個基本攻擊擊昇敵方暈眩 ${toSec(
          SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION
        )}並給予 ${enh_damage}點一般傷害。`,
        fr: `Sparrow brandit son épée, infligeant ${base_damage}. <br />Passif: L'utilisation d'une compétence charge l'épée de Sparrow. Sa prochaine attaque de base est remplacée par une attaque d'onde de choc, projetant les ennemis en l'air pendant ${toSec(
          SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION
        )} et infligeant ${enh_damage}.`,
      }
    }

    case SpellList.SPARROW_DASH:
      return {
        en: `Sparrow quickly dashes forward, harnessing the wind, dealing ${getDamage(
          SparrowAbilityData.DASH_DAMAGE_MOD * damage
        )} and stunning enemies she hits for ${toSec(SparrowAbilityData.DASH_STUN_DURATION)}.`,
        ru: `Спарроу совершает стремительный рывок, оглушая задетых врагов на ${toSec(
          SparrowAbilityData.DASH_STUN_DURATION
        )} и нанося им ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)} физического урона.`,
        cz: `Sparrow se vrhne kupředu a vytasí svůj meč, čímž omráčí nepřátele které zasáhne na ${toSec(
          SparrowAbilityData.DASH_STUN_DURATION
        )} a způsobí ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)} normalního poškozeni.`,
        br: `Sparrow avança na direção que está olhando,  atordoando os inimigos acertados por ${toSec(
          SparrowAbilityData.DASH_STUN_DURATION
        )} e dando ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)} de dano.`,
        zh: `史佩羅迅速衝刺猛力向前揮劍，暈眩 ${toSec(
          SparrowAbilityData.DASH_STUN_DURATION
        )}擊中的敵方並給予 ${getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)}點一般傷害。`,
        fr: `Sparrow se précipite rapidement en avant, utilisant le vent pour infliger ${getDamage(
          SparrowAbilityData.DASH_DAMAGE_MOD * damage
        )} et étourdir les ennemis touchés pendant ${toSec(SparrowAbilityData.DASH_STUN_DURATION)}.`,
      }

    case SpellList.SPARROW_GROUND_SLAM: {
      const damage = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE + SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE
        : SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE

      const base_damage = getDamage(0, type, damage)
      const percDamage = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? Math.floor(
            (SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG +
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE) *
              100
          )
        : Math.floor(SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG * 100)

      return {
        en: `Sparrow unleashes the power of the demons, launching a corrupt wave from her sword, dealing ${base_damage} (plus a bonus ${percDamage}% of target's missing health).`,
        ru: `Спарроу высвобождает силу своего меча, создавая демоническую волну, наносящую ${base_damage} магического урона (плюс ${percDamage}% от недостающего здоровья цели) задетым врагам.`,
        cz: `Sparrow uvolní sílu uvnitř svého meče a vytvoří paprsek ve tvaru půlměsíce, který udělí ${base_damage} (plus ${percDamage} % chybějícího zdraví cíle) zasaženým nepřátelům.`,
        br: `Sparrow canaliza todo o poder de sua espada, criando um feixe na sua frente que causa ${base_damage} (mais ${percDamage}% de vida perdida do alvo) para os inimigos que são atingidos.`,
        zh: `史佩羅釋放劍的能量產生新月形刃波，給予被擊中的敵方 ${base_damage}點魔法傷害 (加上 ${percDamage}%敵方損失血量)。`,
        fr: `Sparrow libère le pouvoir de son épée, lançant une vague corrompue, infligeant ${base_damage} (plus un bonus de ${percDamage}% des points de vie manquants de la cible).`,
      }
    }

    /** I'Ceat */
    case SpellList.ICEAT_AUTOATTACK: {
      const base_damage = getDamage(ICeatAbilityData.AUTOATTACK_MOD_DAMAGE * damage)
      return {
        en: `I'ceat hurls an arcing snowball, dealing ${base_damage} in a small area.`,
        ru: `Ай'сит швырает снежок по дуге, нанося ${base_damage} физического урона.`,
        cz: `I'ceat mrští sněhovou kouli na krátkou vzdálenost a způsobí ${base_damage} poškození. `,
        br: `Iceat arremessa uma bola de neve a curta distância causando ${base_damage} de dano.`,
        zh: `艾希特短距離投擲雪球，給予小範圍 ${base_damage}點全體一般傷害`,
        fr: `I'ceat lance une boule de neige en arc, infligeant ${base_damage} dans une petite zone.`,
      }
    }
    case SpellList.ICEAT_ICICLE_BOLT: {
      const base_damage = getDamage(
        ICeatAbilityData.ICICLE_BOLT_DAMAGE_MOD * abilityPower,
        type,
        ICeatAbilityData.ICICLE_BOLT_BASE_DAMAGE + ICeatAbilityData.ICICLE_BOLT_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `I'ceat launches three frozen shards, each dealing ${base_damage} and reducing Movement Speed by ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}. <br />Hitting all three of them freezes an enemy for ${toSec(
          ICeatAbilityData.ICICLE_ROOT_DURATION
        )}, preventing all forms of movement.`,
        ru: `Ай'сит выпускает три осколка льда, каждый из которых замедляет врагов на ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}(замедление складывается) и наносит ${base_damage} магического урона. <br />Попадание всеми тремя сосульками обездвижит врага на ${toSec(
          ICeatAbilityData.ICICLE_ROOT_DURATION
        )}`,
        cz: `I'ceat vystřelí tři střepy ledu, z nichž každý zpomalí nepřátele o ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}, což způsobí ${base_damage} při každém zásahu. <br />Zasáhnete-li všemi třemi, znehybní nepřítele na ${toSec(
          ICeatAbilityData.ICICLE_ROOT_DURATION
        )}`,
        br: `Iceat dispara três estilhaços de gelo, cada estilhaço acertado reduz a velocidade do inimigo em ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}, adicionando ${base_damage} de dano para cada ataque. <br />Atingir todos os três estilhaços em um inimigo enraiza ele por ${toSec(
          ICeatAbilityData.ICICLE_ROOT_DURATION
        )}.`,
        zh: `艾希特發射三枚寒冰碎片，每發降低 ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}點敵方移動速度並給予 ${base_damage}點魔法傷害。<br />對同一目標擊中所有碎冰時，牽制敵方 ${toSec(
          ICeatAbilityData.ICICLE_ROOT_DURATION
        )}。`,
        fr: `I'ceat lance trois éclats de glace, chacun infligeant ${base_damage} et réduisant la vitesse de déplacement de ${-ICeatAbilityData.ICICLE_SLOW_PER_STACK}. <br />Toucher les trois gèle un ennemi pendant ${toSec(
          ICeatAbilityData.ICICLE_ROOT_DURATION
        )}, empêchant tout mouvement.`,
      }
    }

    case SpellList.ICEAT_COLD_EMBRACE: {
      const base_damage = getDamage(
        ICeatAbilityData.COLD_EMBRACE_DAMAGE_MOD * abilityPower,
        type,
        ICeatAbilityData.COLD_EMBRACE_BASE_DAMAGE + ICeatAbilityData.COLD_EMBRACE_DAMAGE_PER_LEVEL * (level - 1)
      )
      const duration = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)
        ? toSec(ICeatAbilityData.COLD_EMBRACE_DURATION + ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)
        : toSec(ICeatAbilityData.COLD_EMBRACE_DURATION)

      const bonusSpeed = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0)
        ? ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED + ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS
        : ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED

      return {
        en:
          `<b>First cast: </b>I'ceat slides on the ground, increasing his Movement Speed by ${bonusSpeed} for ${duration} and leaving behind an icy trail.` +
          `Enemies standing on top of the icy trail receive ${base_damage} per second and have their Movement Speed reduced for a short duration.<br/>` +
          `<b>Second cast: </b>I'ceat stops sliding, returning his Movement Speed to normal, and stops leaving behind an icy trail.`,
        ru:
          `<b>Первое применение: </b>Ай'сит скользит по земле, получая ${bonusSpeed} скорости передвижения на ${duration} и оставляя ледяной след позади, ` +
          `наносящий  ${base_damage} магического урона в секунду, а также замедляющий всех наступивших врагов.<br/>` +
          `<b>Повторное применение: </b>Ай'сит преждевременно перестаёт скользить.`,
        cz:
          `I'ceat se začne klouzat, tím si zvyšuje rychlost o ${bonusSpeed} na ${duration} a zanechává za sebout ledovou vrstvu ` +
          `, která uděluje ${base_damage} poškození za vteřinu nepřátelům na vrcholu ledu a zpomalí je.`,
        br:
          `Iceat desliza no chão, aumentando sua velocidade em ${bonusSpeed} por ${duration} e deixando uma trilha de gelo,` +
          `dando ${base_damage} de dano por segundo aos inimigos que pisam na trilha.`,
        zh:
          `艾希特在地上滑行，增加 ${duration}他的移動速度 ${bonusSpeed}點並留下冰步道，` +
          `給予所有位於冰步道上方的敵方每秒 ${base_damage}點魔法傷害並降低敵方移動速度。`,
        fr:
          `<b>Première utilisation: </b>I'ceat glisse sur le sol, augmentant sa vitesse de déplacement de ${bonusSpeed} pendant ${duration} et laissant derrière lui une traînée de glace. ` +
          `Les ennemis se tenant sur la traînée de glace reçoivent ${base_damage} par seconde et voient leur vitesse de déplacement réduite pour une courte durée.<br/>` +
          `<b>Deuxième utilisation: </b>I'ceat arrête de glisser, retrouvant sa vitesse de déplacement normale et arrêtant de laisser derrière lui une traînée de glace.`,
      }
    }

    /** Belle */
    case SpellList.BELLE_AUTOATTACK:
      return {
        en: `Belle fires an explosive thorn from her wand, dealing ${getDamage(
          BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage
        )} in a small area.`,
        ru: `Белла выпускает взрывной шип из своей палочки, наносящий ${getDamage(
          BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage
        )} физического урона.`,
        cz: `Belle vystřelí výbušný trn ze své hůlky a způsobí ${getDamage(
          BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage
        )} poškození v malé oblasti.`,
        br: `Belle atira uma flor explosiva de sua varinha causando ${getDamage(
          BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage
        )} de dano em área.`,
        zh: `蓓蕾從她的法棍發射一顆爆炸荊棘，給予小範圍 ${getDamage(
          BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage
        )}點全體一般傷害。`,
        fr: `Belle tire une épine explosive de sa baguette, infligeant ${getDamage(
          BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage
        )} dans une petite zone.`,
      }

    case SpellList.BELLE_PRICKLY_VINE: {
      const damage = getDamage(
        BelleAbilityData.PRICKLY_VINE_DAMAGE_MOD * abilityPower,
        type,
        BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE + BelleAbilityData.PRICKLY_VINE_DAMAGE_PER_LEVEL * (level - 1)
      )

      const stunDuration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION + BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)
        : toSec(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)

      return {
        en:
          `Belle casts a piercing vine, dealing ${damage} to enemies that get hit. If the vine comes into contact with an enemy hero, it attaches to that hero. Attached vines can be broken if the enemy hero moves far enough from Belle.` +
          `\nAfter a short time, if the vine is still attached, the vine entangles the enemy, dealing ${damage} and stunning for ${stunDuration}`,
        ru:
          `Белла выпускает лозу перед собой, наносящую ${damage} магического урона и прикрепляющуюся к перворму вражескому герою на своём пути. <br />Способность может быть прервана, если враг отойдёт слишком далеко от Беллы.` +
          `\nСпустя небольшой промежуток времени, если лоза всё ещё прикреплена к врагу, она исчезает и оглушает цель на ${stunDuration}, нанося ${damage} магического урона.`,
        cz:
          `Belle vrhne vinnou révu která se připojí k nepříteli způsobujícímu ${damage} poškození a zpomalí pohyb. <br />Lze je zlomit, pokud se nepřítel vydálí dostatečně daleko od Belle.` +
          `\nPo krátké době, pokud je liána stále propojena, opadne a omráčí nepřítele na ${stunDuration} a způsobí ${damage} poškození.`,

        br:
          `Belle lança uma videira para frente que se liga a um inimigo causando ${damage} de dano e diminuindo a sua velocidade de movimento.` +
          `\nDepois de 2 segundos, se a videira ainda estiver presa no inimigo, ela vai prender ele o atordoando por ${stunDuration} e causando ${damage} de dano. \n<br />(Ela pode ser quebrada se o inimigo se mover para longe o suficiente de Belle.)`,
        zh:
          `蓓蕾向前投擲貫穿藤蔓，給予被擊中敵方 ${damage}點魔法傷害並附著於一個敵方英雄。 \n當敵方離蓓蕾夠遠時藤蔓可以被破壞。` +
          `\n經過短時間後，藤蔓依然附著時，藤蔓消失同時暈眩 ${stunDuration}敵方英雄並給予 ${damage}點魔法傷害。`,
        fr:
          `Belle lance une vigne perçante, infligeant ${damage} aux ennemis touchés. Si la vigne entre en contact avec un héros ennemi, elle se fixe à ce héros. Les vignes attachées peuvent être brisées si le héros ennemi s'éloigne suffisamment de Belle.` +
          `\nAprès un court laps de temps, si la vigne est toujours attachée, elle s'entortille autour de l'ennemi, infligeant ${damage} et étourdissant pendant ${stunDuration}.`,
      }
    }

    case SpellList.BELLE_FLORAL_AMBUSH: {
      const base_damage = getDamage(
        BelleAbilityData.FLORAL_AMBUSH_DAMAGE_MOD * abilityPower,
        type,
        BelleAbilityData.FLORAL_AMBUSH_BASE_DAMAGE + BelleAbilityData.FLORAL_AMBUSH_DAMAGE_PER_LEVEL * (level - 1)
      )
      return {
        en:
          `Belle jumps in the air and drops three seed bombs in front of her. The bombs attach to enemy heroes if they get close, dealing ${base_damage} over ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}. After ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}, both the attached and unattached seed bombs detonate, dealing ${base_damage} in an area.` +
          `<br />Enemy heroes that step on an unattached bomb while carrying one will immediately detonate the unattached seed bomb, dealing ${base_damage}.`,
        ru:
          `Белла подпрыгивает и сбрасывает три цветочные бомбы перед собой, которые приклепляются к вражескому герою, если он наступит на них, нанося цели ${base_damage} магического урона в течение ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}, взрываясь после этого, нанося ${base_damage} магического урона по площади` +
          `<br /><br />После пребывания на земле в течение ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}, цветы взрываются, нанося ${base_damage} магического урона по площади ближайшим врагам. Враг, ступивший на бомбу с уже прикреплённой до этого, моментально взорвёт предыдущую.`,
        cz:
          `Belle vyskočí do vzduchu a shodí pod sebe tři semenné bomby, které se přichytí k nepříteli pokud na ně vstoupí a způsobí ${base_damage} poškození během 2 sekund a po uplynutí této doby exploduje, čímž způsobí ${base_damage} poškození v malé oblasti` +
          `<br /><br />Pokud se bomby neprichtí do ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}, semínka explodují a způsobí ${base_damage} poškození okolním nepřátelům. Nepřítel, který šlápne na bombu a zároveň ji nese, okamžitě spustí explozi.`,
        br:
          `Belle plana no ar e lança três bombas de flor em sua frente, se prendendendo a um inimigo causando ${base_damage} de dano, depois de 2 segundos explode novamente se o inimigo estiver com uma semente, causando ${base_damage} de dano.` +
          `<br /><br />Depois de ficar no chão por ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}, as flores explodem causando ${base_damage} de dano nos inimigos por perto. Inimigos que pisarem nas bombas enquanto elas carregam, irám imediatamente desencadear uma explosão.`,
        zh:
          `蓓蕾跳躍在空中，向前丟下三顆種子炸彈。如果敵方英雄接近會附著於他們身上，給予持續2秒 ${base_damage}點魔法傷害並且在時間結束後爆破，給予鄰近敵方英雄 ${base_damage}點全體魔法傷害。` +
          `\n停留地面 ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}後，種子爆炸並給予四周敵方 ${base_damage}點全體魔法傷害。當敵方英雄帶著種子又踩到地面種子時會立即觸發爆炸。`,
        fr:
          `Belle saute en l'air et laisse tomber trois bombes de graines devant elle. Les bombes se fixent aux héros ennemis s'ils s'en approchent, infligeant ${base_damage} sur une durée de 2 secondes et explosent après cette durée, infligeant ${base_damage} dans une zone` +
          `<br /><br />Après avoir été au sol pendant ${toSec(
            BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION
          )}, les graines explosent, infligeant ${base_damage} aux ennemis proches. Les ennemis qui marchent sur les bombes tout en en portant une déclenchent immédiatement l'explosion.`,
      }
    }

    /** Thomas */
    case SpellList.THOMAS_AUTOATTACK:
      return {
        en: `Thomas slashes with his katana, dealing ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)}.`,
        ru: `Томас взмахивает катаной, нанося ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} физического урона.`,
        cz: `Thomas seká svou mrkví a udělí ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)} poškození.`,
        br: `Thomas faz um corte com espada e causa ${getDamage(
          ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage
        )} de dano.`,
        zh: `湯瑪士拿他的蘿蔔劈砍，給予 ${getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)}點一般傷害。`,
        fr: `Thomas frappe avec son katana, infligeant ${getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)}.`,
      }

    case SpellList.THOMAS_SHURIKEN_TOSS: {
      const base_damage = getDamage(
        ThomasAbilityData.SHURIKEN_TOSS_DMG_MODIFIER * damage,
        type,
        ThomasAbilityData.SHURIKEN_TOSS_BASE_DAMAGE + ThomasAbilityData.SHURIKEN_TOSS_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Thomas throws three shurikens, each shuriken dealing ${base_damage}. They return to him after a short time, dealing another ${base_damage}.`,
        ru: `Томас бросает три морковных сюрикена перед собой, которые наносят ${base_damage} физического урона всем врагам на своём пути. Они возвращаются к нему спустя небольшой промежуток времени, повторно нанося ${base_damage} физического урона.`,
        cz: `Thomas hodí tři mrkvovité shurikeny, které způsobí ${base_damage} poškození všem nepřátelům na cestě. Vrátí se k němu po krátké době a udělí ${base_damage} poškození všem nepřátelům, kteří mu stojí v cestě.`,
        br: `Thomas lança com sua espada demoníaca, três shurikens que causam ${base_damage} de dano a todos inimigos no caminho. Elas voltam para ele depois de um curto período de tempo causando ${base_damage} de dano a todos inimigos no caminho.`,
        zh: `湯瑪士丟出三個蘿蔔樣的手裏劍，對所有途徑上敵方造成 ${base_damage}點魔法傷害。手裏劍短時間後收回他手上，對所有軌跡上敵方造成 ${base_damage}點魔法傷害。`,
        fr: `Thomas lance trois shurikens, chacun infligeant ${base_damage}. Ils reviennent à lui après un court laps de temps, infligeant à nouveau ${base_damage}.`,
      }
    }

    case SpellList.THOMAS_SHADOW_CARROT: {
      const bonusDamage = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE
        : 0
      const base_damage = getDamage(bonusDamage + damage * ThomasAbilityData.SHADOW_CARROT_DAMAGE_MOD, type)

      return {
        en:
          `<b>First cast: </b>Thomas throws a carrot, which attaches to enemies when they get close. He can recast Shadow Carrot to teleport to the carrot within ${toSec(
            ThomasAbilityData.SHADOW_CARROT_DURATION
          )}. \n<br />` +
          `<b>Second cast: </b>Teleports to the carrot. If it is attached to an enemy hero, reduces the Movement Speed of that hero for ${toSec(
            ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION
          )} and deals ${base_damage}.`,
        ru:
          `<b>Первое применение: </b>Томас бросает прикрепляющуюся морковь. Он может телепортироваться к ней в течение ${toSec(
            ThomasAbilityData.SHADOW_CARROT_DURATION
          )} после первого применения. \n<br />` +
          `<b>Второе применение: </b>Телепортируется к моркови. Если она прикрепилась к врагу, Томас замедляет этого врага на ${toSec(
            ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION
          )} и наносит ему ${base_damage} физического урона.`,
        cz:
          `První použití: Thomas hodí stínovou mrkev. Může se k ní teleportovat do ${toSec(
            ThomasAbilityData.SHADOW_CARROT_DURATION
          )} vteřin po použití. ` +
          `Druhé použití: Thomas se teleportuje k mrkvi. Pokud je připojena k nepříteli, Thomas spomali tohoto nepřítele na ${toSec(
            ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION
          )} a udělí ${base_damage} poškození.`,
        br:
          `<b>Primeira Ativação: </b>Thomas joga sua espada demoníaca. Ele pode se teletransportar para lá depois de ${toSec(
            ThomasAbilityData.SHADOW_CARROT_DURATION
          )} de duração. \n<br />` +
          `<b>Segunda Ativação: </b>Teleporta-se para a espada. Se estiver atingido um inimigo, Ele se teletransporta para o inimigo retardando-o ${toSec(
            ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION
          )} e causando ${base_damage} de dano.`,
        zh:
          `<b>第一次施展：</b>湯瑪士丟出可附著蘿蔔。他可以在 ${toSec(
            ThomasAbilityData.SHADOW_CARROT_DURATION
          )}內瞬移到蘿蔔所在地。\n<br />` +
          `<b>第二次施展：</b>瞬移到蘿蔔所在地。如果蘿蔔附著於敵方英雄，湯瑪士減緩該敵方英雄移動速度 ${toSec(
            ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION
          )}並對目標對象造成 ${base_damage}點一般傷害。`,
        fr:
          `<b>Première utilisation: </b>Thomas lance une carotte qui s'attache aux ennemis. Il peut se téléporter vers la carotte après ${toSec(
            ThomasAbilityData.SHADOW_CARROT_DURATION
          )}. \n<br />` +
          `<b>Deuxième utilisation: </b>Se téléporte à la carotte. Si elle est attachée à un héros ennemi, réduit la vitesse de déplacement de ce héros pendant ${toSec(
            ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION
          )} et inflige ${base_damage}.`,
      }
    }
    /** Veil */
    case SpellList.VEIL_AUTOATTACK: {
      const base_damage = getDamage(VeilAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const modifier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1
      const enhanced_dmg = getDamage(
        VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier,
        Shared.DamageTypes.MAGICAL,
        (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) * modifier
      )

      return {
        en: `Veil slashes with her weapons, dealing ${base_damage}. \n<br/>Enhanced: Veil uses her astral spirit to deal a bonus ${enhanced_dmg}, removing her enhanced state.`,
        ru: `Вэйл взмахивает своим оружием и наносит ${base_damage} физического урона. \n[Усиленная]: Вэйл использует свой астральный дух, чтобы нанести дополнительно ${enhanced_dmg} магического урона (поглощает эффект усиления)`,

        cz: `Veil sekne svými zbraněmi a způsobí ${base_damage} poškození. \nPosílení: Veil používá svého astrálního ducha a udělí dalšíh ${enhanced_dmg} poškození (spotřebuje Posílení stav)`,

        br: `Veil corta com suas espadas demoníacas causando ${base_damage} de dano.\n<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enhanced_dmg} de dano.\n(Consume o estado Maldição dos caídos.)`,
        zh: `維爾劈砍她的武器，給予 ${base_damage}點一般傷害。<br />強化後：維爾利用她的星光魂魄造成額外的 ${enhanced_dmg}點魔法傷害 (消耗強化狀態)。`,
        fr: `Veil frappe avec ses armes, infligeant ${base_damage}. \n<br/>Amélioré: Veil utilise son esprit astral pour infliger un bonus de ${enhanced_dmg}, supprimant son état amélioré.`,
      }
    }

    case SpellList.VEIL_ASTRAL_BLADES: {
      const base_damage = getDamage(
        VeilAbilityData.ASTRAL_BLADES_DMG_MODIFIER * abilityPower,
        type,
        VeilAbilityData.ASTRAL_BLADES_BASE_DAMAGE + VeilAbilityData.ASTRAL_BLADES_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Veil jumps and throws her astral blades downward at a 45° angle, dealing ${base_damage}. If the blades hit an enemy hero, Veil enters her enhanced state.`,
        ru: `Вэйл подпрыгивает и бросает свои астральные клинки вниз под углом 45°, которые наносят ${base_damage} магического урона. Если способность попала по вражескому герою, Вэйл получит усиление.`,
        cz: `Veil skočí a vrhne své astrální čepele dolů pod úhlem 45°, což způsobí ${base_damage} poškození. Pokud schopnost zasáhne nepřátelského hrdinu, získá Posílení.`,
        br: `Veil salta e atira suas lâminas astrais para baixo em um ângulo de 45 ° causando ${base_damage} de dano.\nSe a habilidade atingir um personagem inimigo, ela ativa a [Maldição dos caídos].`,
        zh: `維爾跳躍並向斜下前方45°角丟出星光刀刃，造成 ${base_damage}點魔法傷害。如果技能擊中敵方英雄，將會強化維爾。`,
        fr: `Veil saute et lance ses lames astrales vers le bas à un angle de 45°, infligeant ${base_damage}. Si les lames touchent un héros ennemi, Veil entre dans son état amélioré.`,
      }
    }

    case SpellList.VEIL_ASTRAL_STEP: {
      const base_damage = getDamage(VeilAbilityData.ASTRAL_STEP_DAMAGE_MOD * damage)

      const modifier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1
      const enh_dmg = getDamage(
        VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier,
        abilityData.damageType,
        (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) * modifier
      )

      return {
        en:
          `Veil dashes forward with high velocity, dealing ${base_damage} to enemy heroes.\n<br />` +
          `Enhanced: Veil steps into the astral realm, dealing a bonus ${enh_dmg} and slowing enemy hero, removing her enhanced state. <b>Sucessfully hitting an enemy resets this Ability's cooldown. </b>`,
        ru:
          `Вэйл совершает рывок вперёд, который наносит ${base_damage} физического урона первому вражескому герою на своём пути.\n<br />` +
          `[Усиленная]: Вэйл шагает в астральное измерение и наносит ${enh_dmg} физического урона, замедляя врага. (поглощает эффект усиления) <b> Успешное попадание сбрасывает перезарядку Астрального шага. </b>`,

        cz:
          `Veil použije astrální krok, aby vykročila vpřed vysokou rychlostí a způsobí ${base_damage} poškození.\n<br />` +
          `Posílení: Veil vstoupí do astrální říše a způsobí další ${enh_dmg} poškození a zpomalí nepřítele. (spotřebuje vylepšený stav) <b> Úspěšný zásah resetuje cooldown! </b>`,

        br:
          `Veil avança em alta velocidade para frente causando ${base_damage} de dano.\n<br />` +
          `<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enh_dmg} de dano e dando lentidão.\n(consume o estado Maldição dos caídos.)<br />\n<b> Se acertar o hit, reseta sua habilidade! </b>`,
        zh:
          `維爾使用星光飛躍向前方高速衝刺，對敵方英雄造成 ${base_damage}點一般傷害。\n<br />` +
          `強化後：維爾飛向星界，造成敵方英雄額外 ${enh_dmg}點魔法傷害並降低移動速度 (消耗強化狀態)。<b>成功擊中將重置星光飛躍冷卻時間！</b>`,
        fr:
          `Veil fonce vers l'avant à grande vitesse, infligeant ${base_damage} aux héros ennemis.\n<br />` +
          `Amélioré: Veil entre dans le royaume astral, infligeant un bonus de ${enh_dmg} et ralentissant le héros ennemi, supprimant son état amélioré. <b>Toucher un ennemi réinitialise le temps de recharge de cette capacité. </b>`,
      }
    }

    /** Flin  */
    case SpellList.FLIN_AUTOATTACK: {
      const basic_damage = getDamage(FlinAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const enh_damage = getDamage(FlinAbilityData.MARKSMANSHIP_BONUS_DAMAGE_MOD * damage)

      return {
        en: `Flin fires an arrow, dealing ${basic_damage}. \nIf Marksmanship is active, Flin's arrow deals ${enh_damage} and pierces through enemies.`,
        br: `Flin dispara uma flecha que da ${basic_damage} de dano normal. \nSe sua habilidade (Pontaria perfeita) estiver ativa, o flin dá ${enh_damage} de dano normal e suas flechas perfuram todas as unidades inimigas.`,
        ru: `Флин выпускает стрелу, наносящую ${basic_damage} физического урона. \nЕсли активна Меткая стрельба, выпущенная стрела наносит ${enh_damage} физического урона и пронзает все вражеские цели на своём пути.`,
        cz: `Flin vystřelí šíp a způsobí ${basic_damage} normálního poškození \nAk je marksmanship aura aktivovaná, šípy budu prolétat skrz nepřátelske jednotky a způsobí ${enh_damage} normálního poškození`,
        zh: `弗林發射一支弓箭並給予 ${basic_damage}點一般傷害。\n如果精通箭術發動中，弗林給予 ${enh_damage}點一般傷害並貫穿所有敵方單位。`,
        fr: `Flin tire une flèche, infligeant ${basic_damage}. \nSi la Maîtrise du tir est active, la flèche de Flin inflige ${enh_damage} et traverse les ennemis.`,
      }
    }

    case SpellList.FLIN_PRECISE_SHOT: {
      let mod = 1
      if (hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)) {
        mod += FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE
      }
      const base_damage = getDamage(
        FlinAbilityData.PRECISE_SHOT_DAMAGE_MOD * damage * mod,
        abilityData.damageType,
        (FlinAbilityData.PRECISE_SHOT_BASE_DAMAGE + FlinAbilityData.PRECISE_SHOT_DAMAGE_PER_LEVEL * (level - 1)) * mod
      )

      return {
        en: `Flin fires a powerful arrow from his bow, dealing ${base_damage} and knocking back enemies hit. \nIf Marksmanship is active, Precise Shot pierces through enemies.`,
        br: `Flin dispara um tiro preciso em sua direção, se a flecha atingir um alvo, a flecha causará ${base_damage} de dano mágico e repele a unidade inimiga para longe de você. \nSe sua habilidade (Pontaria perfeita) estiver ativa, suas flechas perfuram todas as unidades inimigas.`,
        ru: `Флин делает точный выстрел, который наносит ${base_damage} и отбрасывает первую вражескую цель на своём пути. \nЕсли активна Меткая стрельба, эта способность будет пронзать всех врагов на своём пути.`,
        cz: `Flin vystřelí precízni strelu, kterí způsobí ${base_damage} a odkopne nepřítele dál od tebe. \nAk střelecké umění je aktívni, precízna strela proleti skrz nepřátelske jednotky.`,
        zh: `弗林向前方發射精準射擊，如果弓箭擊中目標對象，弓箭將給予 ${base_damage}點魔法傷害並將敵方單位從你的方向打走。\n如果精通箭術發動中，精準射擊將會貫穿所有敵方單位。`,
        fr: `Flin tire une flèche puissante de son arc, infligeant ${base_damage} et repoussant les ennemis touchés. \nSi la Maîtrise du tir est active, le Tir précis traverse les ennemis.`,
      }
    }

    case SpellList.FLIN_MARKSMANSHIP:
      return {
        en: `Flin increases his focus for ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)}. While focused, his next ${
          FlinAbilityData.MARKSMANSHIP_STACKS
        } arrows will deal additional damage and pierce enemy units. Every unit hit by Flin's piercing arrows reduces the arrow's damage by ${Math.floor(
          FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100
        )}%.`,
        br: `Flin aumenta seu foco por ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)} e seus próximos ${
          FlinAbilityData.MARKSMANSHIP_STACKS
        } ataques normais causarão dano adicional e perfurarão unidades inimigas.\n Cada unidade perfurada atingida reduzirá o dano da flecha em ${Math.floor(
          FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100
        )}%.`,
        ru: `Флин повышает свою точность на ${toSec(
          FlinAbilityData.MARKSMANSHIP_DURATION
        )} или на следующее количество атак: (${
          FlinAbilityData.MARKSMANSHIP_STACKS
        }). В течение этого времени базовые атаки наносят дополнительный урон и пронзают вражеские цели. Урон от пронзающих выстрелов уменьшается на ${Math.floor(
          FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100
        )}% за каждую последующую цель.`,
        cz: `Flin zvýší své soustředění na útok a po dobu ${toSec(
          FlinAbilityData.MARKSMANSHIP_DURATION
        )} nebo pro další ${
          FlinAbilityData.MARKSMANSHIP_STACKS
        } zásahy flin způsoby bonusové poškození a jeho šípy budou přecházet přes nepřátelské jednotky. Pokažde ak šip prejde přes nepřátelsku jednotku, poškození se sniží o ${Math.floor(
          FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100
        )}%`,
        zh: `弗林增加 ${toSec(FlinAbilityData.MARKSMANSHIP_DURATION)}他的集中力，並在接下來 ${
          FlinAbilityData.MARKSMANSHIP_STACKS
        }發基礎射擊造成額外傷害並貫穿敵方單位。每次貫穿擊中單位後將降低弓箭傷害${Math.floor(
          FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100
        )}%。`,
        fr: `Flin augmente sa concentration pendant ${toSec(
          FlinAbilityData.MARKSMANSHIP_DURATION
        )}. Pendant cette période, ses prochaines ${
          FlinAbilityData.MARKSMANSHIP_STACKS
        } flèches infligeront des dégâts supplémentaires et traverseront les unités ennemies. Chaque unité touchée par les flèches de Flin réduit les dégâts de la flèche de ${Math.floor(
          FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100
        )}%.`,
      }

    /** Kira  */
    case SpellList.KIRA_AUTOATTACK: {
      const basic_damage = getDamage(KiraAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const healingMod = KiraAbilityData.ENHANCED_ATTACK_HEALING_MOD

      const enh_damage_heal = getDamage(
        KiraAbilityData.ENHATTACK_DAMAGE_MOD * abilityPower * healingMod,
        Shared.DamageTypes.HEAL,
        (KiraAbilityData.ENHATTACK_BASE_DAMAGE + KiraAbilityData.ENHATTACK_BASE_DAMAGE_PER_LEVEL * (level - 1)) *
          healingMod
      )

      return {
        en: `Kira fires a spark, dealing ${basic_damage}. \n
          \n<b>Enhanced: (Lightning Shock)</b> In addition, Kira casts a lightning bolt at the nearest hero. If Lightning Shock hits an ally, it restores ${enh_damage_heal} health, increases their Attack Speed by ${
            KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100
          }%, and increases Movement Speed by ${KiraAbilityData.ENHATTACK_MOVE_SPEED} for a short duration.`,
        br: `Kira dispara uma faísca, causando ${basic_damage}. \n
          \n<b>[Passiva] (Choque Elétrico):</b> Além disso, Kira lança um raio em direção ao herói mais próximo. Se o Choque Elétrico atingir um aliado, ele restaura ${enh_damage_heal} de vida, aumenta a Velocidade de Ataque em ${
            KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100
          }%, e aumenta a Velocidade de Movimento em ${KiraAbilityData.ENHATTACK_MOVE_SPEED} por um curto período.`,
        ru: `Кира стреляет искрой, нанося ${basic_damage} физического урона. \n
          \n<b>[Усиленная]: (Удар молнии)</b> Кира также применяет молнию в сторону ближайшего союзного героя, восстанавливая ${enh_damage_heal} здоровья, а также увеличивая скорость атаки на ${
            KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100
          }%, и скорость передвижения на ${KiraAbilityData.ENHATTACK_MOVE_SPEED} на короткое время.`,
        cz: `Kira vystřelí jiskru, způsobí ${basic_damage} poškození. \n
          \n<b>[Vylepšené]: (Blesk)</b> Kira navíc sesílá blesk směrem k nejbližšímu hrdinovi. Pokud blesk zasáhne spojence, obnoví jim ${enh_damage_heal} života, zvýší jejich rychlost útoku o ${
            KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100
          }%, a zvýší rychlost pohybu o ${KiraAbilityData.ENHATTACK_MOVE_SPEED} po omezenou dobu.`,
        zh: `奇菈射出火花，給予 ${basic_damage}點一般傷害。\n
          \n<b>[強化後]：(閃電震擊)</b> 奇菈向最近的英雄施放閃電。如果閃電擊中盟友，將會恢復 ${enh_damage_heal}點生命，增加他們的攻擊速度 ${KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100}%，並增加移動速度 ${KiraAbilityData.ENHATTACK_MOVE_SPEED} 在短時間內。`,
        fr: `Kira tire une étincelle, infligeant ${basic_damage}. \n
          \n<b>Amélioré: (Choc électrique)</b> De plus, Kira lance un éclair sur le héros le plus proche. Si le Choc électrique touche un allié, il restaure ${enh_damage_heal} points de vie, augmente leur vitesse d'attaque de ${
            KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100
          }%, et augmente la vitesse de déplacement de ${KiraAbilityData.ENHATTACK_MOVE_SPEED} pendant une courte durée.`,
      }
    }

    case SpellList.KIRA_RAIN_OF_SPARKS: {
      const damage = getDamage(
        KiraAbilityData.VOID_RAIN_DAMAGE_MOD * abilityPower,
        Shared.DamageTypes.MAGICAL,
        KiraAbilityData.VOID_RAIN_BASE_DAMAGE + KiraAbilityData.VOID_RAIN_DAMAGE_PER_LEVEL * (level - 1)
      )

      const count = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? KiraAbilityData.VOID_RAIN_COUNT + KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT
        : KiraAbilityData.VOID_RAIN_COUNT

      return {
        en: `Kira summons ${count} electric missiles downwards at a 45° angle. Each electric missile pierces enemies and deals ${damage}.
                \n<br/><b>[Enhanced]: (Torrential Lightning)</b> Kira summons total of ${count * 2} electric missiles.`,
        br: `Kira conjura de seu livro ${count} mísseis elétricos do abismo, que caem de cima, cada míssil causando ${damage} de dano mágico que perfura os inimigos.
                \n<b>[Passiva] (Abismo Demoníaco):</b> Kira conjura um total de ${count * 2} mísseis do abismo.`,
        ru: `Кира призывает ${count} снаряда, которые падают с неба, каждый из которого наносит ${damage} магического урона врагам.
                \n<b>[Усиленная]: (Проливная бездна)</b> Количество призываемых снарядов увеличивается до ${count * 2}.`,
        cz: `Kira vyvolá ${count} prázdné střely, které prší shora, přičemž každá střela způsobí ${damage} magické poškození, které prorazí nepřátele.
                \n<b>[Vylepšené]: (Torrential Abyss)</b> Kira vyvolá celkem ${count * 2} prázdných střel.`,
        zh: `奇菈召喚四束虛空飛彈從上方如雨淋下，每束飛彈給予 ${damage}點魔法傷害並貫穿敵方。<br />
                \n<b>[強化後]：(滔天深淵) 奇菈召喚總共八束虛空飛彈。`,
        fr: `Kira invoque ${count} missiles électriques qui tombent du ciel, chacun infligeant ${damage} et traversant les ennemis.
                \n<br/><b>Amélioré: (Éclair torrentiel)</b> Kira invoque un total de ${count * 2} missiles électriques.`,
      }
    }

    case SpellList.KIRA_VOID_PHANTASM: {
      const damage = getDamage(
        KiraAbilityData.VOID_PHANTASM_DAMAGE_MOD * abilityPower,
        abilityData.damageType,
        KiraAbilityData.VOID_PHANTASM_BASE_DAMAGE + KiraAbilityData.VOID_PHANTASM_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Kira dashes forward, leaving behind a distorted afterimage of herself. After ${toSec(
          KiraAbilityData.VOID_PHANTASM_DURATION
        )}, she returns to the position of her afterimage.
                \n<br/><b>[Enhanced]: (Dynamic Afterimage)</b> Instead of returing to the afterimage's position, it returns to Kira's position. The afterimage phases through enemies, dealing ${damage} and silencing for ${toSec(
                  KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE
                )}.`,
        br: `Kira cria uma imagem distorcida de si mesma enganando seus inimigos, para a qual ela retorna depois de ${toSec(
          KiraAbilityData.VOID_PHANTASM_DURATION
        )}.
                \n<b>[Passiva] (Distorcendo o Abismo):</b> A imagem distorcida de Kira a segue e atravessa os inimigos, causando ${damage} de dano mágico e silenciando-os por ${toSec(
                  KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE
                )}.`,
        ru: `Кира совершает рывок вперёд, оставляя позади себя свою искажённую копию и возвращаясь к ней через ${toSec(
          KiraAbilityData.VOID_PHANTASM_DURATION
        )}
                \n<b>[Усиленная]: (Беспорядочный клон)</b> Вместо возвращения к копии, она следует за Кирой и проходит через врагов на своём пути, нанося им ${damage} магического урона и накладывая немоту на ${toSec(
                  KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE
                )}.`,
        cz: `Kira oklame své nepřátele a zanechá za sebou zkreslený obraz, ke kterému se vrátí po ${toSec(
          KiraAbilityData.VOID_PHANTASM_DURATION
        )}
                \n<b>[Enhanced]: (Chaotic Afterimage)</b> Kirin afterimage ji pronásleduje a prochází nepřáteli, uděluje ${damage} magické poškození a umlčuje je za ${toSec(
                  KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE
                )}.`,
        zh: `奇菈用滯留的扭曲殘影欺騙敵方，${toSec(KiraAbilityData.VOID_PHANTASM_DURATION)}後她會回歸殘影處。<br />
                \n<b>[強化後]：(混沌殘影) 奇菈的殘影跟隨她並沿路穿透敵方，給予 ${damage}點魔法傷害並沉默敵方 ${toSec(
                  KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE
                )}。`,
        fr: `Kira fonce en avant, laissant derrière elle une image déformée d'elle-même. Après ${toSec(
          KiraAbilityData.VOID_PHANTASM_DURATION
        )}, elle retourne à la position de son image.
                \n<br/><b>Amélioré: (Image dynamique)</b> Au lieu de retourner à la position de l'image, elle retourne à la position de Kira. L'image traverse les ennemis, infligeant ${damage} et les réduisant au silence pendant ${toSec(
                  KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE
                )}.`,
      }
    }

    /** Hazel  */
    case SpellList.HAZEL_AUTOATTACK: {
      const baseDamage = getDamage(HazelAbilityData.AUTOATTACK_DAMAGE_MOD * damage)

      return {
        en: `Hazel strikes with her hammer, dealing ${baseDamage}.`,
        br: `Hazel golpeia seus inimigos com seu martelo, causando ${baseDamage} de dano normal.`,
        ru: `Хейзел поражает врагов своим молотом, нанося ${baseDamage} физического урона.`,
        cz: `Hazel udre kladivem a způsobí ${baseDamage} normální poškození`,
        zh: `哈歇爾用她的鐵鎚打擊敵人，給予 ${baseDamage}點一般傷害。`,
        fr: `Hazel frappe avec son marteau, infligeant ${baseDamage}.`,
      }
    }

    case SpellList.HAZEL_SHOCKWAVE: {
      const damage = getDamage(HazelAbilityData.SHOCKWAVE_BONUS_DAMAGE_HP * health, abilityData.damageType, 0, 'Health')
      const apDamage = getDamage(
        HazelAbilityData.SHOCKWAVE_AP_SCALING * abilityPower,
        abilityData.damageType,
        0,
        'AbilityPower'
      )

      return {
        en: `Hazel begins to channel her energy. After ${toSec(
          HazelAbilityData.SHOCKWAVE_DELAY
        )}, she releases a shockwave which travels through the air, dealing ${damage} (Based of Hazel's max health) + ${apDamage} magical damage and knocking back enemies.`,
        br: `Hazel começa a canalizar sua energia. Após ${toSec(
          HazelAbilityData.SHOCKWAVE_DELAY
        )}, ela libera uma onda de choque que viaja pelo ar, causando ${damage} (Baseado na vida máxima de Hazel) + ${apDamage} de dano mágico e repelindo inimigos.`,
        ru: `Хейзел сосредотачивает энергию. Спустя ${toSec(
          HazelAbilityData.SHOCKWAVE_DELAY
        )}, она выпускает ударную волну, которая наносит ${damage} магического урона вокруг (от максимального здоровья Хейзел) + ${apDamage} магического урона, отбрасывая врагов.`,
        cz: `Hazel začne kanalizovat svou energii. Po ${toSec(
          HazelAbilityData.SHOCKWAVE_DELAY
        )} uvolní šokovou vlnu, která letí vzduchem, způsobuje ${damage} (Založeno na maximálním zdraví Hazel) + ${apDamage} magického poškození a odhazuje nepřátele.`,
        zh: `哈歇爾開始聚集她的能量。${toSec(
          HazelAbilityData.SHOCKWAVE_DELAY
        )}後，她釋放一道穿過空氣的衝擊波，造成 ${damage} (基於哈歇爾的最大生命值) + ${apDamage}點魔法傷害並擊退敵人。`,
        fr: `Hazel commence à canaliser son énergie. Après ${toSec(
          HazelAbilityData.SHOCKWAVE_DELAY
        )}, elle libère une onde de choc qui se déplace dans l'air, infligeant ${damage} (Basé sur la vie maximale de Hazel) + ${apDamage} dégâts magiques et repoussant les ennemis.`,
      }
    }

    case SpellList.HAZEL_HEROIC_SLASH: {
      const baseDamage = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0)
        ? HazelAbilityData.HEROIC_SLASH_BASE_DAMAGE + HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE
        : HazelAbilityData.HEROIC_SLASH_BASE_DAMAGE

      const duration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? HazelAbilityData.HEROIC_SLASH_KNOCKBACK_DURATION + HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION
        : HazelAbilityData.HEROIC_SLASH_KNOCKBACK_DURATION

      const normalDamage = getDamage(
        HazelAbilityData.HEROIC_SLASH_DAMAGE_MOD * damage,
        abilityData.damageType,
        baseDamage + HazelAbilityData.HEROIC_SLASH_BASE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Hazel swings her hammer upwards, unleashing the wrath of justice, dealing ${normalDamage}, knocking enemies upwards, and stunning for ${toSec(
          duration
        )}.`,
        br: `Hazel canaliza poder na ponta de seu martelo, causando ${normalDamage} de dano normal e atordoando inimigos por ${toSec(
          duration
        )}.`,
        ru: `Хейзел высвобождает гнев правосудия и взмахивает своим молотом, нанося ${normalDamage} физического урона и подбрасывая врагов на ${toSec(
          duration
        )}.`,
        zh: `哈歇爾釋放正義之怒向上揮起鐵鎚，給予 ${normalDamage}點一般傷害並擊昇敵方暈眩 ${toSec(duration)}。`,
        cz: `Hazel zamává svým kladivem nahoru, uvolňuje hněv spravedlnosti, způsobuje ${normalDamage} a odhazuje nepřátele nahoru a omráčí na ${toSec(
          duration
        )}.`,
        fr: `Hazel balance son marteau vers le haut, libérant la colère de la justice, infligeant ${normalDamage}, projetant les ennemis vers le haut et les étourdissant pendant ${toSec(
          duration
        )}.`,
      }
    }

    /** Arel  */
    case SpellList.AREL_AUTOATTACK: {
      const enhDamageVal = ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD

      const baseDamage = getDamage(ArelAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const enhDamage = getDamage(enhDamageVal * damage)

      return {
        en: `Arel fires a bullet from his gun, dealing ${baseDamage}. \n
                <br />Passive: Whenever Arel uses an ability, he will load another bullet in his gun. His next Basic Attack fires that additional bullet, dealing a bonus ${enhDamage}.`,
        br: `Arel dispara uma bala de sua arma causando ${baseDamage} de dano normal.
                \n<b>[Passiva] (Atirador de Elite):</b> Sempre que Arel usar uma habilidade, carregará outra bala em sua arma, disparando tiros adicionais e causando ${enhDamage} de dano adicional.`,
        ru: `Арел выпускает пулю, нанося ${baseDamage} физического урона. \n
                <br />[ПАССИВНО]: Всякий раз, когда Арел использует способность, он заряжает еще одну пулю, делая дополнительный выстрел и нанося ${enhDamage} физического урона.`,
        cz: `Arel vystřelí kulku ze své zbraně a způsobí ${baseDamage} normální poškození <br />
                <br />[PASIVNÍ]: Kdykoli Arel použije schopnost, nabije arel další kulku ze zbraně a vystřelí další výstřel a způsobí další ${enhDamage} normální poškození`,
        zh: `艾瑞爾從他的槍發射一發子彈，給予 ${baseDamage}點一般傷害。 <br />
                <br />被動技：每當艾瑞爾發動技能後，艾瑞爾會從他的槍裝填另一發子彈，多補一發射擊給予額外 ${enhDamage}點一般傷害。`,
        fr: `Arel tire une balle de son pistolet, infligeant ${baseDamage}. \n
                <br />Passif: Chaque fois qu'Arel utilise une compétence, il charge une autre balle dans son pistolet. Sa prochaine attaque de base tire cette balle supplémentaire, infligeant un bonus de ${enhDamage}.`,
      }
    }

    case SpellList.AREL_TUMBLE: {
      return {
        en: 'Arel rolls forward a short distance.',
        br: 'Arel da um salto para frente, adiciona a passiva (Atirador de Elite).',
        ru: 'Арел совершает кувырок вперёд.',
        cz: 'Arel se převalí dopředu',
        zh: '艾瑞爾向前翻滾。',
        fr: "Arel roule vers l'avant.",
      }
    }

    case SpellList.AREL_TICKING_BOMB: {
      const baseDamage = getDamage(
        ArelAbilityData.TICKING_BOMB_DAMAGE_MODIFIER * damage,
        abilityData.damageType,
        ArelAbilityData.TICKING_BOMB_BASE_DAMAGE + ArelAbilityData.TICKING_BOMB_DAMAGE_PER_LEVEL * (level - 1)
      )
      const triggerMultiplier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS
        : 1

      const triggerDamage = getDamage(
        ArelAbilityData.TICKING_BOMB_TRIGGER_DAMAGE_MODIFIER * damage * triggerMultiplier,
        abilityData.damageType,
        (ArelAbilityData.TICKING_BOMB_BASE_DAMAGE + ArelAbilityData.TICKING_BOMB_DAMAGE_PER_LEVEL * (level - 1)) *
          triggerMultiplier
      )

      const triggerStun = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? ArelAbilityData.TICKING_BOMB_STUN_DURATION + ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN
        : ArelAbilityData.TICKING_BOMB_STUN_DURATION

      return {
        en: `Arel throws a ticking bomb, attaching itself to enemies that get close. After ${toSec(
          ArelAbilityData.TICKING_BOMB_DURATION
        )}, the bomb detonates, dealing ${baseDamage} in an area.
                <br />Shooting an attached bomb with 3 bullets detonates the bomb early, dealing ${triggerDamage}, reducing their Movement Speed for ${toSec(
                  ArelAbilityData.TICKING_BOMB_SLOW_DURATION
                )}, and stunning for ${toSec(triggerStun)}.`,
        br: `Arel joga uma bomba para frente, se a bomba entrar em contato com um inimigo, a bomba se liga a ele e explodirá em ${toSec(
          ArelAbilityData.TICKING_BOMB_DURATION
        )}, causando ${baseDamage} de dano normal para todos os inimigos ao redor.
                <br />Se a bomba estiver presa a um inimigo e você atirar nele três vezes, a bomba explodirá causando ${triggerDamage} de dano normal e atordoará o portador por ${toSec(
                  ArelAbilityData.TICKING_BOMB_SLOW_DURATION
                )}.`,
        ru: `Арел бросает бомбу, и если она соприкасается с врагом, бомба прикрепляется к нему и взрывается через ${toSec(
          ArelAbilityData.TICKING_BOMB_DURATION
        )}, нанося ${baseDamage} физического урона всем ближайшим врагам.
                <br />Если бомба прикреплена к врагу, и Арел выстрелит в него три раза, бомба взорвется преждевременно, нанеся  ${triggerDamage} физического урона, уменьшая скорость передвижения цели на ${toSec(
                  ArelAbilityData.TICKING_BOMB_SLOW_DURATION
                )}, а также оглушая на ${toSec(triggerStun)}.`,
        cz: `Arel hodí bombu, pokud se bomba dostane do kontaktu s nepřítelem, bomba se k němu přichytí a exploduje za ${toSec(
          ArelAbilityData.TICKING_BOMB_DURATION
        )} a způsobí ${baseDamage} normální poškození všem okolním nepřátelům.
                <br />Pokud je bomba připevněna k nepříteli a vy trafite nepřítele třikrát, bomba exploduje a způsobí ${triggerDamage} normální poškození a omráči nepřítele na ${toSec(
                  ArelAbilityData.TICKING_BOMB_SLOW_DURATION
                )}`,
        zh: `艾瑞爾投擲一枚炸彈，如果炸彈接觸到敵方，炸彈會附著於該敵方並於 ${toSec(
          ArelAbilityData.TICKING_BOMB_DURATION
        )}後爆炸，給予周圍所有敵方 ${baseDamage}點一般傷害。
                <br />如果炸彈已附著於敵方，你給予該敵方三發射擊，炸彈會立即爆炸，給予 ${triggerDamage}點一般傷害並暈眩炸彈負載者 ${toSec(
                  ArelAbilityData.TICKING_BOMB_SLOW_DURATION
                )}。`,
        fr: `Arel lance une bombe à retardement, qui se fixe aux ennemis qui s'en approchent. Après ${toSec(
          ArelAbilityData.TICKING_BOMB_DURATION
        )}, la bombe explose, infligeant ${baseDamage} dans une zone.
                <br />Tirer sur une bombe attachée avec 3 balles déclenche la bombe prématurément, infligeant ${triggerDamage}, réduisant leur Vitesse de déplacement pendant ${toSec(
                  ArelAbilityData.TICKING_BOMB_SLOW_DURATION
                )}, et les étourdissant pendant ${toSec(triggerStun)}.`,
      }
    }

    /** Alvar  */
    case SpellList.ALVAR_ATTACK: {
      const baseDamage = getDamage(AlvarAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const markDamage = getDamage(
        0,
        0,
        hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
          ? AlvarAbilityData.MARK_DAMAGE + AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE
          : AlvarAbilityData.MARK_DAMAGE
      )

      const duration = AlvarAbilityData.MARK_DURATION

      return {
        en: `Alvar attacks with a punch, dealing ${baseDamage}. \n
                <br />Passive: Alvar's Basic Attacks apply a stack of divine impact on enemy heroes, which lasts for ${toSec(
                  duration
                )}. At three stacks, the enemy receievs a Divine Mark, dealing ${markDamage}.`,
        br: `Alvar acerta com seu punho todos os alvos à sua frente causando ${baseDamage} de dano normal. \n
                \n<b>[Passiva] (Punhos do detentor):</b> Cada ataque de Alvar aplica no personagem inimigo um debuff que dura ${toSec(
                  duration
                )}.\n O terceiro ataque de debuff aplicará uma marca que causa ${markDamage} de dano normal.`,
        ru: `Алвар бьёт кулаками перед собой, нанося ${baseDamage} физического урона. \n
                <br />[ПАССИВНО]: Каждое успешное попадание атакой накладывает на противника ослабление на ${toSec(
                  duration
                )}. Третий заряд ослабления активирует на цели метку, наносящую ${markDamage} физического урона.`,
        cz: `Alvar zasáhne pěstí všechny cíle před sebou a způsobí ${baseDamage} normálního poškození. <br />
                \n[PASIVNÍ]: Každý úspěšný zásah Alvara aplikuje debuff na cíl po dobu ${toSec(
                  duration
                )}. Třetí stack applikuje značku, která způsobí ${markDamage} normální poškození.`,
        zh: `阿爾瓦用他的拳頭向前打擊，造成 ${baseDamage}點一般傷害。\n
                <br />被動：每一次阿爾瓦成功的擊中敵方英雄，給予目標對象 ${toSec(
                  duration
                )}負面狀態。第三次的負面狀態疊加將給予標記，造成 ${markDamage}點一般傷害。`,
        fr: `Alvar attaque avec un coup de poing, infligeant ${baseDamage}. \n
                <br />Passif: Les attaques de base d'Alvar appliquent une pile d'impact divin sur les héros ennemis, qui dure ${toSec(
                  duration
                )}. À trois piles, l'ennemi reçoit une Marque divine, infligeant ${markDamage}.`,
      }
    }

    case SpellList.ALVAR_FURIOUS_KICK: {
      const baseDamage = getDamage(AlvarAbilityData.FURIOUS_KICK_DAMAGE_MOD * damage)
      const duration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? AlvarAbilityData.FURIOUS_KICK_STUN_DURATION + AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION
        : AlvarAbilityData.FURIOUS_KICK_STUN_DURATION

      return {
        en: `Alvar launches enemies backwards with a powerful kick, dealing ${baseDamage} and stunning for ${toSec(
          duration
        )}. <br /><br />
            Applies a stack of divine impact on all enemy heroes hit by Furious Kick.<br />
            In addition alvar grants himself and all his nearby alies ${
              AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED
            } bonus movement speed for ${toSec(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)}`,
        br: `Alvar lança seus inimigos para trás com um poderoso chute, causando ${baseDamage} de dano normal e atordoando por ${toSec(
          duration
        )}. <br /><br />
            Aplica um debuff em todos os personagens inimigos atingidos pelo chute furioso.<br />
            Além disso, Alvar concede a si mesmo e a todos os seus aliados próximos ${
              AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED
            } de velocidade de movimento por ${toSec(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)}`,
        ru: `Алвар отталкивает врагов за спину, нанося ${baseDamage} физического урона и оглушая на ${toSec(
          duration
        )}. <br /><br />
            Накладывает 1 заряд ослабления на всех вражеских героев, попавших под удар.<br />
            Кроме того, Алвар даёт себе и всем своим союзникам ${
              AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED
            } скорости передвижения на ${toSec(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)}`,
        cz: `Alvar odhodí nepřátele silným kopem, způsobí ${baseDamage} normální poškození a omráčí na ${toSec(
          duration
        )}. <br /><br />
            Aplikuje debuff na všechny nepřátelské hrdiny zasažené Furious Kick.<br />
            Kromě toho Alvar poskytuje sám sobě a všem svým blízkým spojencům ${
              AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED
            } bonusové rychlosti pohybu na ${toSec(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)}`,
        zh: `阿爾瓦用一記強力的踢擊將敵人向後踢飛，給予 ${baseDamage}點一般傷害並暈眩 ${toSec(duration)}。<br /><br />
            被狂怒踢擊擊中的敵方英雄將會受到一個負面狀態。<br />
            此外阿爾瓦會給予自己和所有附近的盟友 ${
              AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED
            }點移動速度加成，持續 ${toSec(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)}。`,
        fr: `Alvar lance les ennemis en arrière avec un puissant coup de pied, infligeant ${baseDamage} et étourdissant pendant ${toSec(
          duration
        )}. <br /><br />
            Applique une pile d'impact divin sur tous les héros ennemis touchés par Furious Kick.<br />
            De plus, Alvar accorde à lui-même et à tous ses alliés proches ${
              AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED
            } de vitesse de mouvement bonus pendant ${toSec(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)}`,
      }
    }

    case SpellList.ALVAR_HEAVENLY_KICK: {
      const baseDamage = getDamage(AlvarAbilityData.HEAVENLY_KICK_DAMAGE_MOD * damage)

      return {
        en: `Alvar teleports towards the closest enemy hero with Divine Mark, dealing ${baseDamage}, removing Divine Mark, and reducing the Movement Speed of the enemy hero for ${toSec(
          AlvarAbilityData.HEAVENLY_KICK_SLOW_DURATION
        )}. If there is no enemy with Divine Mark nearby, this ability can't be used.`,
        br: `Alvar se teletransporta para trás do herói inimigo marcado mais próximo, chutando-o e causando ${baseDamage} de dano normal e empurrando-o na direção oposta.\n (Se não houver nenhum inimigo marcado por perto, a habilidade não pode ser usada.)`,
        ru: `Алвар телепортируется к ближайшему помеченному врагу, ударяя его и нанося ${baseDamage} физического урона, снижая скорость передвижения цели на ${toSec(
          AlvarAbilityData.HEAVENLY_KICK_SLOW_DURATION
        )}. Способность использовать нельзя, если рядом нет врагов с меткой.`,
        cz: `Alvar se teleportuje za nejbližšího označeného nepřítele, kopne do něj a způsobí normální poškození ${baseDamage} a tlačí ho opačným směrem. Pokud v blízkosti není žádný označení nepřítel, schopnost neudělá nic.`,
        zh: `阿爾瓦瞬移到最接近的被標記敵方英雄，踢擊目標對象造成 ${baseDamage}點一般傷害並將目標對象推到反方向。如果附近沒有被標記敵方，技能無法發動。`,
        fr: `Alvar se téléporte derrière le héros ennemi marqué le plus proche, le frappant et infligeant ${baseDamage} de dégâts normaux et le poussant dans la direction opposée.\n (Si aucun ennemi marqué n'est à proximité, la compétence ne peut pas être utilisée.)`,
      }
    }

    /** Foxy  */
    case SpellList.FOXY_ATTACK: {
      const baseDamage = getDamage(FoxyAbilityData.AUTOATTACK_DAMAGE_MOD * damage)

      return {
        en: `Foxy fires a bullet from his gun, dealing ${baseDamage}.`,
        ru: `Фокси выпускает пулю, нанося ${baseDamage} физического урона.`,
        cz: `Foxy vystřelí kulku ze své zbraně a způsobí ${baseDamage}.`,
        br: `Foxy dispara uma bala de sua arma, causando ${baseDamage} de dano normal.`,
        zh: `Foxy 從他的槍中射出一發子彈，給予 ${baseDamage}點一般傷害。`,
        fr: `Foxy tire une balle de son arme, infligeant ${baseDamage}.`,
      }
    }

    case SpellList.FOXY_RAPID_FIRE: {
      let mod = 1
      if (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)) {
        mod += FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE
      }
      const baseDamage = getDamage(FoxyAbilityData.RAPID_FIRE_DAMAGE_MULTIPLIER * damage * mod)

      return {
        en: `Foxy channels his weapon, lowering his movement speed and rapidly firing a bararge of bullets. Each bullet deals ${baseDamage}. <br/> <b>Rapid Fire attack rate scales with Attack Speed.</b>`,
        ru: `Фокси подготавливает своё оружие и быстро выпускает шквал пуль, нанося ${baseDamage} физического урона. <br/> <i> Чем выше Скорость атаки, тем больше пуль будет выпущено. </i>`,
        cz: `Foxy nasměruje svou zbraň a rychle vypálí příval kulek, které způsobí ${baseDamage} fyzické poškození. <br/> <i> Rýchlost útoku zrychly tento effekt. Pohyb zastaví channeling </i>`,
        br: `Foxy canaliza sua arma, diminuindo sua velocidade de movimento e disparando rapidamente uma rajada de balas. Cada bala causa ${baseDamage}. <br/> <i> A taxa de ataque de Fogo Rápido escala com a Velocidade de Ataque. </i>`,
        zh: `Foxy 通道他的武器，降低他的移動速度並快速地發射一連串的子彈。每一發子彈造成 ${baseDamage}點一般傷害。 <br/> <i> 快速射擊攻擊速率與攻擊速度相關。 </i>`,
        fr: `Foxy canalise son arme, réduisant sa vitesse de déplacement et tirant rapidement une rafale de balles. Chaque balle inflige ${baseDamage}. <br/> <i> Le taux de tir de Feu Rapide évolue avec la Vitesse d'Attaque. </i>`,
      }
    }

    case SpellList.FOXY_GRANADE: {
      const baseDamage = getDamage(
        FoxyAbilityData.GRANADE_DAMAGE_MODIFIER * damage,
        Shared.DamageTypes.NORMAL,
        FoxyAbilityData.GRANADE_DAMAGE_BASE + FoxyAbilityData.GRANADE_DAMAGE_PER_LEVEL * (level - 1),
        'AttackDamage'
      )

      const apDamage = getDamage(
        FoxyAbilityData.GRANADE_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        0,
        'AbilityPower'
      )

      return {
        en:
          `<b>First cast: </b>Foxy throws a grenade which detonates upon impact with the ground, dealing ${baseDamage} + ${apDamage} in an area and knocking back units. If the grenade's falling speed is fast enough, it will bounce once before detonation. ` +
          'Knockback is based on the distance between the enemy unit and the grenade.<br/>' +
          '<b>Second cast: </b>Detonate the grenade early.',
        ru:
          `<b>Первое применение: </b>Фокси бросает гранату, которая взрывается при соприкосновении с землёй. Если скорость падения была слишком высока, граната отскочит от поверхности. При взрыве она наносит ${baseDamage} + ${apDamage} физического урона. ` +
          'Когда граната взрывается, она отбрасывает ближайших врагов. Сила отбрасывания зависит от того, как близко находился враг к центру взрыва.<br/>' +
          '<b>Повторное применение: </b>Граната взрывается преждевременно.',
        cz:
          `Foxy hodí granát, který exploduje, když se určitou rychlostí dotkne země. Pokud je rychlost pádu příliš vysoká, odskočí. Při výbuchu způsobí ${baseDamage} + ${apDamage}. <br/>` +
          'Když granát exploduje, srazí jednotky. Zpětný ráz je založen na vzdálenosti mezi jednotkou a granátem.',
        br:
          `<b>Primeira conjuração: </b>Foxy lança uma granada que detona ao impactar o chão, causando ${baseDamage} + ${apDamage} em uma área e empurrando unidades. Se a velocidade de queda da granada for rápida o suficiente, ela quicará uma vez antes de detonar. ` +
          'O empurrão é baseado na distância entre a unidade inimiga e a granada.<br/>' +
          '<b>Segunda conjuração: </b>Detone a granada cedo.',
        zh:
          `<b>第一次施法: </b>Foxy 丟出一枚手榴彈，當手榴彈碰到地面時爆炸，造成 ${baseDamage} + ${apDamage}點範圍內的傷害並擊退單位。如果手榴彈的下落速度足夠快，它將在爆炸前彈跳一次。 ` +
          '擊退基於敵方單位和手榴彈之間的距離。<br/>' +
          '<b>第二次施法: </b>提前引爆手榴彈。',
        fr:
          `<b>Première utilisation: </b>Foxy lance une grenade qui explose au contact du sol, infligeant ${baseDamage} + ${apDamage} dans une zone et repoussant les unités. Si la vitesse de chute de la grenade est suffisamment rapide, elle rebondira une fois avant de détoner. ` +
          "Le repoussement est basé sur la distance entre l'unité ennemie et la grenade.<br/>" +
          '<b>Deuxième utilisation: </b>Détoner la grenade tôt.',
      }
    }

    case SpellList.MAGDALENE_ATTACK: {
      const baseDamage = getDamage(MagdaleneAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const maxSouls =
        MagdaleneAbilityData.MAGDALENE_PASSIVE_MAXIMUM_STACKS +
        MagdaleneAbilityData.MAGDALENE_PASSIVE_MAXIMUM_STACKS_PER_LEVEL * level
      const soulDamage = getDamage(
        0,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.MAGDALENE_PASSIVE_DAMAGE_PER_STACK_ON_DEATH
      )

      return {
        en: `Magdalene sends a burst of energy from her dark scythe, dealing ${baseDamage}.
        \n\nPassive: Magdalene steals an enemy's soul after killing an enemy hero or minion. Magdalene can store up to ${maxSouls} souls. Each soul increases her Ability Power by 1.
        \nWhen Magdalene dies, she will release all souls in a short area and deals ${soulDamage} per soul to all enemies and fear them for a short duration.`,
        ru: `Магдалина испускает сгусток энергии, нанося ${baseDamage}.
        \n\n[ПАССИВНО]: Магдалина крадёт душу врага после убийства вражеского героя или миньона. Она может хранить до ${maxSouls} душ. Каждая душа увеличивает её Силу умений на 1.
        \nКогда Магдалина умирает, она высвобождает все души, нанося ${soulDamage} магического урона за каждую душу всем врагам вокруг себя, накладывая страх на короткое время.`,
        cz: `Magdalena vysílá výbuch energie ze své temné kose, způsobující ${baseDamage}.
        \n\nPasivně: Magdalena ukradne duši nepřítele po zabití nepřátelského hrdiny nebo minionu. Magdalena může uchovávat až ${maxSouls} duší. Každá duše zvyšuje její Sílu kouzel o 1.
        \nKdyž Magdalena zemře, uvolní všechny duše v krátké oblasti a způsobí ${soulDamage} za duši všem nepřátelům a na krátkou dobu je vyděsí.`,
        br: `Magdalene envia uma explosão de energia de sua foice sombria, causando ${baseDamage}.
        \n\nPassivo: Magdalene rouba uma alma inimiga após matar um herói ou um súdito inimigo. Magdalene pode armazenar até ${maxSouls} almas. Cada alma aumenta seu Poder de Habilidade em 1.
        \nQuando Magdalene morre, ela libera todas as almas em uma pequena área e causa ${soulDamage} por alma a todos os inimigos e os assusta por um curto período.`,
        zh: `Magdalene 從她的黑暗鐮刀發射出一陣能量爆發，造成 ${baseDamage}點傷害。
        \n\n被動：Magdalene 在殺死敵方英雄或小兵後偷取敵人的靈魂。Magdalene 最多可以儲存 ${maxSouls}個靈魂。每個靈魂都會增加她的技能傷害 1點。
        \n當 Magdalene 死亡時，她會在短時間內釋放所有靈魂，並對所有敵人造成 ${soulDamage}點傷害並使他們恐懼一小段時間。`,
        fr: `Magdalene envoie une explosion d'énergie de sa faux sombre, infligeant ${baseDamage}.
        \n\nPassif: Magdalene vole une âme ennemie après avoir tué un héros ennemi ou un sbire. Magdalene peut stocker jusqu'à ${maxSouls} âmes. Chaque âme augmente sa Puissance des compétences de 1.
        \nLorsque Magdalene meurt, elle libère toutes les âmes dans une petite zone et inflige ${soulDamage} par âme à tous les ennemis et les effraie pendant une courte durée.`,
      }
    }

    case SpellList.MAGDALENE_SCREAM_OF_PAIN: {
      const damage = getDamage(
        MagdaleneAbilityData.SCREAM_OF_PAIN_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.SCREAM_OF_PAIN_BASE_DAMAGE +
          MagdaleneAbilityData.SCREAM_OF_PAIN_DAMAGE_PER_LEVEL * (level - 1)
      )
      return {
        en: `Magdalene sends out an ear-splitting scream, dealing ${damage} to enemies in front of her, knocking them back, and silencing them for ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION
        )}. \nConsumes Haunted Ghosts if target is affected, deals additional damage and fear the target for ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_PUSHBACK_DURATION
        )}.`,
        ru: `Магдалина издаёт пронзительный крик, нанося ${damage} магического урона врагам перед собой, отбрасывая их назад и накладывая немоту на ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION
        )}. \nЕсли цель находится под эффектом Одержимого призрака, Магдалина поглощает этот эффект и наносит дополнительный урон, также накладывая страх на цель на ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_PUSHBACK_DURATION
        )}.`,
        br: `Magdalene solta um grito estridente, causando ${damage} de dano mágico nos inimigos à sua frente, empurrando-os para trás e silenciando-os por ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION
        )}. \nConsumir Fantasmas Assombrados se o alvo for afetado, causa dano adicional e medo no alvo por ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_PUSHBACK_DURATION
        )}.`,
        fr: `Magdalene lance un cri déchirant, infligeant ${damage} de dégâts magiques aux ennemis devant elle, les repoussant et les réduisant au silence pendant ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION
        )}. \nConsomme les Fantômes hantés si la cible est affectée, inflige des dégâts supplémentaires et effraie la cible pendant ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_PUSHBACK_DURATION
        )}.`,
        zh: `玛格达丽娜發出刺耳的尖叫，對面前的敵人造成 ${damage}點魔法傷害，將他們擊退，並使其沉默 ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION
        )}。 \n如果目標受到影魂影響，則消耗該影魂，造成額外傷害並使目標恐懼 ${toSec(
          MagdaleneAbilityData.SCREAM_OF_PAIN_PUSHBACK_DURATION
        )}。`,
      }
    }

    case SpellList.MAGDALENE_HAUNTED_GHOST: {
      const damage = getDamage(
        MagdaleneAbilityData.HAUNTED_GHOST_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.HAUNTED_GHOST_DAMAGE_PER_SEC_BASE +
          MagdaleneAbilityData.HAUNTED_GHOST_DAMAGE_PER_SEC_PER_LEVEL * (level - 1)
      )

      return {
        en: `Magdalene sends a haunted ghost in a direction when it hits the enemy, it will inflict a haunted ghost, dealing ${damage} magical damage per second to an inflicted enemy. The ghost lasts for ${toSec(MagdaleneAbilityData.HAUNTED_GHOST_DURATION)}. 
        \n When the haunted ghost debuff expires or is consumed by Scream of Pain, it returns back to Magdalene and reset the cooldown of Haunted Ghost.`,
        ru: `Магдалина посылает призрака вперёд. При столкновении с врагом он вселяется в него, накладывая эффект Одержимый призрак, наносящий ${damage} магического урона в секунду. Одержимый призрак длится ${toSec(
          MagdaleneAbilityData.HAUNTED_GHOST_DURATION
        )}.
        \n Когда время действия эффекта Одержимый призрак истекает или используется Загробный вопль, он возвращается к Магдалине, сбрасывая перезарядку этой способности.`,
        br: `Magdalene envia um fantasma assombrado em uma direção, quando atinge o inimigo, ele inflige um fantasma assombrado, causando ${damage} de dano mágico por segundo a um inimigo afetado. O fantasma dura por ${toSec(
          MagdaleneAbilityData.HAUNTED_GHOST_DURATION
        )}.
        \n Quando o debuff do fantasma assombrado expira ou é consumido por Grito de Dor, ele retorna a Magdalene e reseta o tempo de recarga do Fantasma Assombrado.`,
        fr: `Magdalene envoie un fantôme hanté dans une direction, lorsqu'il touche l'ennemi, il inflige un fantôme hanté, infligeant ${damage} de dégâts magiques par seconde à un ennemi affecté. Le fantôme dure ${toSec(
          MagdaleneAbilityData.HAUNTED_GHOST_DURATION
        )}.
        \n Lorsque le débuff du fantôme hanté expire ou est consommé par le Cri de Douleur, il retourne à Magdalene et réinitialise le temps de recharge du Fantôme hanté.`,
        zh: `玛格达丽娜朝一个方向发送一个鬼魂，当它击中敌人时，它会造成一个鬼魂，对受影响的敌人造成 ${damage}点每秒的魔法伤害。鬼魂持续时间为 ${toSec(
          MagdaleneAbilityData.HAUNTED_GHOST_DURATION
        )}。
        \n 当鬼魂消失或被痛苦尖叫消耗时，它会返回到玛格达丽娜并重置鬼魂的冷却时间。`,
        cz: `Magdalena pošle v dána směru strašidlo, které když zasáhne nepřítele, způsobí mu strašidelného ducha, který způsobuje ${damage} magického poškození za sekundu. Duch trvá ${toSec(
          MagdaleneAbilityData.HAUNTED_GHOST_DURATION
        )}.
        \n Když debuff strašidelného ducha vyprší nebo je spotřebován Křikem bolesti, vrátí se zpět k Magdalene a resetuje dobu do nového použití.`,
      }
    }

    case SpellList.PRIM_ATTACK: {
      const baseDamage = getDamage(MagdaleneAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const hasUpgradedPassive = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
      const bonusMoveSpeed = hasUpgradedPassive
        ? PrimAbilityData.PRIM_BALL_ATTACHED_BONUS_MOVEMENT_SPEED +
          PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED
        : PrimAbilityData.PRIM_BALL_ATTACHED_BONUS_MOVEMENT_SPEED

      const bonusArmor = hasUpgradedPassive
        ? PrimAbilityData.PRIM_BALL_ATTACHED_BONUS_ARMOR + PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR
        : PrimAbilityData.PRIM_BALL_ATTACHED_BONUS_ARMOR

      return {
        en: `Prim throws 3 sharp pieces of iron that deals ${baseDamage} normal damage when hit enemy unit. 
        \n\nPassive: When Prim's Ball is attached to prim, she gains bonus ${bonusMoveSpeed} movement speed and ${bonusArmor} armor.`,
        ru: `Прим бросает 3 острых снаряда, которые наносят ${baseDamage} физического урона при попадании во врага.
        \n\n[ПАССИВНО]: Когда шар Прим прикреплён к ней, она получает ${bonusMoveSpeed} скорости передвижения и ${bonusArmor} брони.`,
        cz: `Prim hodí 3 ostré kusy železa, které způsobí ${baseDamage} normálního poškození při zásahu nepřátelské jednotky.
        \n\nPasivně: Když je Primův míč připojen k Prim, získá bonus ${bonusMoveSpeed} rychlosti pohybu a ${bonusArmor} obrany.`,
        br: `Prim lança 3 pedaços afiados de ferro que causam ${baseDamage} de dano normal quando atingem uma unidade inimiga.
        \n\nPassivo: Quando a Bola de Prim está anexada a Prim, ela ganha ${bonusMoveSpeed} de velocidade de movimento e ${bonusArmor} de armadura.`,
        zh: `Prim 丟出 3 塊銳利的鐵片，當命中敵方單位時造成 ${baseDamage}點一般傷害。
        \n\n被動：當 Prim 的球附著在 Prim 身上時，她獲得 ${bonusMoveSpeed} 的移動速度和 ${bonusArmor} 的護甲。`,
        fr: `Prim lance 3 morceaux de fer tranchants qui infligent ${baseDamage} de dégâts normaux lorsqu'ils touchent une unité ennemie.
        \n\nPassif: Lorsque la balle de Prim est attachée à Prim, elle gagne ${bonusMoveSpeed} de vitesse de déplacement et ${bonusArmor} d'armure.`,
      }
    }

    case SpellList.PRIM_COMMAND_ATTACK: {
      const damage = getDamage(
        PrimAbilityData.COMMAND_ATTACK_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        PrimAbilityData.COMMAND_ATTACK_BASE_DAMAGE + PrimAbilityData.COMMAND_ATTACK_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Prim commands the Ball to move forward in Prim's direction. When stopped, deals ${damage} to all nearby enemies and slows their movement and attack speed for a short duration.
          \n\nIf Prim's Ball is detached, she will command the Ball to return. The ball deals damage at its detaching location.
          \nCan be re-casted to stop the Ball earlier.`,
        ru: `Прим приказывает шару лететь вперед. При остановке он наносит ${damage} магического урона всем близлежащим врагам, уменьшая их скорость передвижения и скорость атаки на короткое время.
          \n\nЕсли шар Прим отсоединен, она прикажет ему вернуться. Шар наносит урон в области своей позиции перед возвращением.
          \nМожет быть использовано повторно, чтобы остановить полёт шара раньше.`,
        cz: `Prim přikáže míči, aby se pohyboval vpřed ve směru Prim. Když se zastaví, způsobí ${damage} všem nepřátelským jednotkám v okolí a zpomalí jejich rychlost pohybu a rychlost útoku na krátkou dobu.
          \n\nPokud je míč Prim odpojen, přikáže míči, aby se vrátil. Míč způsobí poškození na místě odpojení.
          \nMůže být znovu použito k zastavení míče dříve.`,
        br: `Prim comanda a Bola para se mover para frente na direção de Prim. Quando parado, causa ${damage} a todos os inimigos próximos e diminui a velocidade de movimento e a velocidade de ataque deles por um curto período.
          \n\nSe a Bola de Prim estiver desanexada, ela comandará a Bola a retornar. A bola causa dano na sua localização de desanexação.
          \nPode ser recastado para parar a Bola mais cedo.`,
        zh: `Prim 命令球向前移動，方向是 Prim。當停止時，對所有附近的敵人造成 ${damage}點傷害，並使他們的移動速度和攻擊速度降低一小段時間。
          \n\n如果 Prim 的球被分離，她將命令球返回。球在分離位置造成傷害。
          \n可以重新施放以更早地停止球。`,
        fr: `Prim commande à la Balle de se déplacer vers l'avant dans la direction de Prim. Lorsqu'il s'arrête, inflige ${damage} à tous les ennemis à proximité et ralentit leur vitesse de déplacement et leur vitesse d'attaque pendant une courte période.
          \n\nSi la Balle de Prim est détachée, elle commandera à la Balle de revenir. La balle inflige des dégâts à son emplacement de détachement.
          \nPeut être re-casté pour arrêter la Balle plus tôt.`,
      }
    }

    case SpellList.PRIM_GRAVITATIONAL_PULL: {
      const modifier = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)
        ? 1 + PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION
        : 1
      const damage = getDamage(
        PrimAbilityData.GRAVITATIONAL_PULL_AP_MODIFIER * abilityPower * modifier,
        Shared.DamageTypes.MAGICAL,
        (PrimAbilityData.GRAVITATIONAL_PULL_BASE_DAMAGE +
          PrimAbilityData.GRAVITATIONAL_PULL_DAMAGE_PER_LEVEL * (level - 1)) *
          modifier
      )

      const stunDuration = PrimAbilityData.GRAVITATIONAL_PULL_STUN_DURATION * modifier

      return {
        en: `Prim commands the Ball to pull all nearby enemies towards it, dealing ${damage} magical damage and stunning them for a ${toSec(stunDuration)} duration.`,
        ru: `Прим приказывает шару притянуть всех близлежащих врагов к себе, нанося ${damage} магического урона и оглушая их на ${toSec(stunDuration)}.`,
        cz: `Prim přikáže míči přitáhnout všechny nepřátelské jednotky v okolí k sobě, způsobující ${damage} magického poškození a omráčení na ${toSec(stunDuration)} sekund.`,
        br: `Prim comanda a Bola para puxar todos os inimigos próximos para perto dela, causando ${damage} de dano mágico e atordoando-os por ${toSec(stunDuration)} segundos.`,
        zh: `Prim 命令球將所有附近的敵人拉向它，造成 ${damage}點魔法傷害並使他們在 ${toSec(stunDuration)} 秒內暈眩。`,
        fr: `Prim commande à la Balle de tirer tous les ennemis à proximité vers elle, infligeant ${damage} de dégâts magiques et les étourdissant pendant ${toSec(stunDuration)} secondes.`,
      }
    }

    /** Default */
    case SpellList.RECALL:
      return {
        en: 'Teleport back to spawn after 5 seconds. <br/>Moving, attacking, or receiving damage while using Recall will interrupt its cast.',
        ru: 'Телепорт обратно на свою базу спустя 5 секунд. Во время возвращения вы не можете двигаться или атаковать, а любой полученный урон перырвает подготовку.',
        cz: 'Po 5 sekundách se teleportujte zpět do základny. Během sesílání se nemůžete pohybovat ani útočit a sesílání je přerušeno, pokud utrpíte poškození.',
        br: 'Teleporte-se de volta para Base após 5 segundos. Durante isso você não pode se mover ou atacar, será interrompido se você receber qualquer tipo de dano.',
        zh: '5秒後傳送回陣營。在發動期間，你不能採取任何動作跟攻擊，且遭受攻擊後施展將被打斷。',
        fr: 'Téléportez-vous à la base après 5 secondes. Pendant le téléport, vous ne pouvez pas bouger ou attaquer, et tout dommage reçu interrompt le téléport.',
      }

    default:
      return { en: '', cz: '' }
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
    case SpellList.PRIM_ATTACK:
      return {
        en: 'Basic Attack',
        ru: 'Атака',
        cz: 'Útok',
        br: 'Ataque básico',
        zh: '攻擊',
        fr: 'Attaque de base',
      }

    case SpellList.KUMIHU_MAGICAL_ORB:
      return {
        en: 'Magical Orb',
        ru: 'Волшебная сфера',
        cz: 'Magická Koule',
        br: 'Rajada de vento',
        zh: '魔幻寶珠',
        fr: 'Orbe magique',
      }
    case SpellList.KUMIHU_DASH:
      return {
        en: 'Arcane Dash',
        ru: 'Мистический рывок',
        cz: 'Tajemný Krok',
        br: 'Possessão Demoníaca',
        zh: '奧術衝刺',
        fr: 'Charge arcanique',
      }

    /** Sparrow */
    case SpellList.SPARROW_DASH:
      return {
        en: 'Corrupted Wind',
        ru: 'Проклятый ветер',
        cz: 'Zteč',
        br: 'Cai dentro',
        zh: '突進',
        fr: 'Charge',
      }

    case SpellList.SPARROW_GROUND_SLAM:
      return {
        en: 'Demonic Wrath',
        ru: 'Демонический гнев',
        cz: 'Úder Země',
        br: 'poder demoníaco',
        zh: '地面猛擊',
        fr: 'Frappe au sol',
      }

    /** I'Ceat */

    case SpellList.ICEAT_ICICLE_BOLT:
      return {
        en: 'Icicle Bolt',
        ru: 'Сосульки',
        cz: 'Sprška Rampouchů',
        br: 'Estilhaço de gelo',
        zh: '寒冰飛箭',
        fr: 'Carreau de glace',
      }

    case SpellList.ICEAT_COLD_EMBRACE:
      return {
        en: 'Cold Embrace',
        ru: 'Объятья холода',
        cz: 'Chladné objetí',
        br: 'Abraço do inverno',
        zh: '冰冷懷抱',
        fr: 'Étreinte froide',
      }

    /** Belle */

    case SpellList.BELLE_PRICKLY_VINE:
      return {
        en: 'Prickly Vine',
        ru: 'Колючая лоза',
        cz: 'Bodavá Réva',
        br: 'Videira espinhosa',
        zh: '荊棘藤蔓',
        fr: 'Vigne épineuse',
      }

    case SpellList.BELLE_FLORAL_AMBUSH:
      return {
        en: 'Floral Ambush',
        ru: 'Цветочная ловушка',
        cz: 'Bouchací Kytky',
        br: 'Emboscada floral',
        zh: '鮮花伏擊',
        fr: 'Embuscade florale',
      }

    /** Thomas */

    case SpellList.THOMAS_SHURIKEN_TOSS:
      return {
        en: 'Shuriken Toss',
        ru: 'Бросок сюрикена',
        cz: 'Vrh Shurikenu',
        br: 'Shuriken Demoníaca',
        zh: '手裏劍投擲',
        fr: 'Lancer de shuriken',
      }

    case SpellList.THOMAS_SHADOW_CARROT:
      return {
        en: 'Shadow Carrot',
        ru: 'Теневая морковь',
        cz: 'Stínová Mrkev',
        br: 'Contrato',
        zh: '闇影蘿蔔',
        fr: "Carotte d'ombre",
      }

    /** Veil */
    case SpellList.VEIL_ASTRAL_BLADES:
      return {
        en: 'Astral Blades',
        ru: 'Астральные клинки',
        cz: 'Astrální Čepele',
        br: 'Lâminas astrais',
        zh: '星光刀刃',
        fr: 'Lames astrales',
      }

    case SpellList.VEIL_ASTRAL_STEP:
      return {
        en: 'Astral Step',
        ru: 'Астральный шаг',
        cz: 'Astrální Krok',
        br: 'Regente do mal',
        zh: '星光飛躍',
        fr: 'Pas astral',
      }

    case SpellList.FLIN_PRECISE_SHOT:
      return {
        en: 'Precise Shot',
        ru: 'Точный выстрел',
        cz: 'Přesná střela',
        br: 'Tiro preciso',
        zh: '精準射擊',
        fr: 'Tir précis',
      }

    case SpellList.FLIN_MARKSMANSHIP:
      return {
        en: 'Marksmanship',
        ru: 'Меткая стрельба',
        cz: 'Strelecké umenie',
        br: 'Pontaria perfeita',
        zh: '精通箭術',
        fr: 'Tir de précision',
      }

    case SpellList.KIRA_RAIN_OF_SPARKS:
      return {
        en: 'Rain of Sparks',
        ru: 'Дождь искр',
        br: 'Relâmpago do Abismo',
        zh: '花火之雨',
        fr: "Pluie d'étincelles",
        cz: 'Déšť jisker',
      }

    case SpellList.KIRA_VOID_PHANTASM:
      return {
        en: 'Static Phantasm',
        ru: 'Статический фантазм',
        cz: 'Prázdné fantazie',
        br: 'Fantasma do Abismo',
        zh: '虛空幻象',
        fr: 'Fantôme statique',
      }

    case SpellList.HAZEL_HEROIC_SLASH:
      return {
        en: "Justice's Wrath",
        br: 'Portadora da verdade',
        ru: 'Гнев правосудия',
        cz: 'Hněv spravedlnosti',
        zh: '正義之怒',
        fr: 'Courroux de la justice',
      }

    case SpellList.HAZEL_SHOCKWAVE:
      return {
        en: 'Triumphant Upheaval',
        ru: 'Триумфальный переворот',
        br: 'Revolta Triunfante',
        cz: 'Triumfálne prevraty',
        zh: '勝利的動盪',
        fr: 'Séisme triomphant',
      }

    case SpellList.AREL_TUMBLE:
      return {
        en: 'Tumble',
        ru: 'Кувырок',
        br: 'Hora de correr',
        cz: 'Kotrmelec',
        zh: '翻跟斗',
        fr: 'Roulade',
      }

    case SpellList.AREL_TICKING_BOMB:
      return {
        en: 'Ticking Bomb',
        ru: 'Часовая бомба',
        br: 'Bomba Relógio',
        cz: 'Tikající bomba',
        zh: '定時炸彈',
        fr: 'Bombe à retardement',
      }

    case SpellList.ALVAR_FURIOUS_KICK:
      return {
        en: 'Furious Kick',
        ru: 'Яростный удар',
        br: 'Chute furioso',
        cz: 'Zúrivý kopanec',
        zh: '憤怒之踢',
        fr: 'Coup furieux',
      }

    case SpellList.ALVAR_HEAVENLY_KICK:
      return {
        en: 'Heavenly Kick',
        ru: 'Небесный удар',
        br: 'Chute Celestial',
        cz: 'Nebeský kop',
        zh: '天堂之踢',
        fr: 'Coup céleste',
      }

    case SpellList.FOXY_GRANADE:
      return {
        en: 'Explosive Grenade',
        ru: 'Взрывная граната',
        cz: 'Výbušný granát',
        br: 'Granada explosiva',
        zh: '爆炸手榴彈',
        fr: 'Grenade explosive',
      }

    case SpellList.FOXY_RAPID_FIRE:
      return {
        en: 'Rapid Fire',
        ru: 'Беглый огонь',
        cz: 'Příval kulek',
        br: 'Fogo Rápido',
        zh: '快速射擊',
        fr: 'Tir rapide',
      }
    case SpellList.MAGDALENE_SCREAM_OF_PAIN:
      return {
        en: 'Scream of Pain',
        ru: 'Загробный вопль',
        br: 'Grito de Dor',
        fr: 'Cri de Douleur',
        zh: '痛苦的尖叫',
        cz: 'Křik bolesti',
      }
    case SpellList.MAGDALENE_HAUNTED_GHOST:
      return {
        en: 'Haunted Ghost',
        ru: 'Одержимый призрак',
        br: 'Fantasma Assombrado',
        fr: 'Fantôme hanté',
        zh: '幽靈',
        cz: 'Strašidelný duch',
      }
    case SpellList.PRIM_COMMAND_ATTACK:
      return {
        en: 'Command: Attack',
        ru: 'Приказ: Атака',
        br: 'Comando: Ataque',
        fr: 'Commande: Attaque',
        zh: '命令：攻擊',
        cz: 'Příkaz: Útok',
      }
    case SpellList.PRIM_GRAVITATIONAL_PULL:
      return {
        en: 'Gravitational Pull',
        ru: 'Гравитационное притяжение',
        br: 'Atração Gravitacional',
        fr: 'Attraction gravitationnelle',
        zh: '引力',
        cz: 'Gravitační tah',
      }

    /** Default */
    case SpellList.RECALL:
      return {
        en: 'Recall',
        ru: 'Возвращение',
        cz: 'Odvolání',
        br: 'Retorno',
        zh: '召回',
        fr: 'Rappel',
      }
    default:
      return { en: '' }
  }
}

export const getSpellDescription = (
  id: SpellList,
  unitStats: GetSpellDescriptionInput,
  type: Shared.DamageTypes
): string => {
  const result = _getSpellDescriptionLang(id, unitStats, type)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

export const getSpellName = (id: SpellList): string => {
  const result = _getSpellNameLang(id)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

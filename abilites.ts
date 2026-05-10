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
  SeerAbilityData,
  KarickAbilityData,
  // @ts-ignore
} from 'shared'
// @ts-ignore
import type { IAbilityTooltipsDataFinal } from '../abilityLangData'
// @ts-ignore
import {
  colorize,
  getControlDuration,
  getBuffValue,
  getDamage,
  getDuration,
  getMovementSpeedDuration,
  getMovementSpeedValue,
  getStunDuration,
} from '../abilityLangData'
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
      const duration = getControlDuration(KumihuAbilityData.ENH_CHARM_DURATION)

      return {
        en: `Kumihu fires 3 projectiles. Each projectile deals ${basic_damage} \n<br/>Passive: After using Arcane Dash, Kumihu's next Basic Attack deals a bonus ${enh_damage} and applies Charm on target for ${duration}.`,
        ru: `Кумиху выпускает 3 снаряда, каждый из которых наносит ${basic_damage} \nПассивно: После использования Тайного рывка следующая атака Кумиху нанесёт ${enh_damage} и наложит очарование на цель на ${duration}`,
        cz: `Kumihu vystřelí 3 kulky, každá způsobí ${basic_damage} \nPasivní: Použití Skoku očaruje další základní útok, aby způsobil ${enh_damage} magické poškození a očaruje protivnika na ${duration}`,
        br: `Kumihu dispara 3 rajadas de vento cada uma dando ${basic_damage}.\n<b>[Passiva]: </b> Usar Dash dá a ela um bônus no próximo ataque básico, dando ${enh_damage} e encantando o inimigo por ${duration}.`,
        fr: `Kumihu tire 3 projectiles. Chaque projectile inflige ${basic_damage} \nPassif: Après avoir utilisé la Ruée Arcanique, l'attaque de base suivante de Kumihu inflige un bonus de ${enh_damage} et applique Charme à la cible pendant ${duration}.`,
        zh: `庫咪戶發射3顆彈丸，每顆彈丸造成 ${basic_damage} \n被動技：使用奧術衝刺後，庫咪戶的下一次基本攻擊造成 ${enh_damage}並在目標上施加魅惑 ${duration}`,
        vi: `Kumihu bắn 3 viên đạn. Mỗi viên đạn gây ${basic_damage} \n<br/>Passive: Sau khi sử dụng Phi Thân Ma Pháp, đòn đánh thường tiếp theo của Kumihu gây thêm ${enh_damage} và áp dụng Quyến Rũ trên mục tiêu trong ${duration}.`,
        id: `Kumihu menembakkan 3 proyektil. Setiap proyektil memberikan ${basic_damage} \n<br/>Pasif: Setelah menggunakan Arcane Dash, Serangan Dasar berikutnya Kumihu memberikan bonus ${enh_damage} dan menerapkan Charm pada target selama ${duration}.`,
      }
    }

    case SpellList.KUMIHU_MAGICAL_ORB: {
      const base_damage = getDamage(
        KumihuAbilityData.MAGICAL_ORB_DMG_MODIFIER * abilityPower,
        abilityData.damageType,
        KumihuAbilityData.MAGICAL_ORB_BASE_DAMAGE + KumihuAbilityData.MAGICAL_ORB_DAMAGE_PER_LEVEL * (level - 1)
      )
      const bonusDmage = getDamage(
        KumihuAbilityData.MAGICAL_ORB_BONUS_DAMAGE_PERC * 100,
        abilityData.damageType,
        0,
        'None',
        true
      )

      return {
        en: `Kumihu throws a spirit orb, dealing ${base_damage}. The orb returns to her after reaching its max range, dealing another ${base_damage}. If Magical Orb hit the target twice it will deal ${bonusDmage} bonus damage`,
        ru: `Кумиху выпускает сферу, наносящую ${base_damage}. Сфера возвращается к ней после достижения максимальной дистанции, нанося ещё ${base_damage}. При задевании одной и той же цели дважды, она нанесёт ${bonusDmage} дополнительного магического урона`,
        cz: `Kumihu vystřelí duchovní kouli, která způsobí ${base_damage}. Když koule dosáhne své maximální vzdálenosti, vrátí se zpět k ní a způsobí další ${base_damage}. Pokud Koule zasáhne cíl dvakrát, způsobí ${bonusDmage} bonusového poškození`,
        br: `Kumihu lança uma esfera espiritual causando ${base_damage}. A esfera retorna para ela depois de atingir sua distância máxima, causando mais ${base_damage}. Se a esfera atingir o alvo duas vezes ela causará ${bonusDmage} bônus.`,
        zh: `庫咪戶投擲靈珠，造成 ${base_damage}。靈珠在達到最大距離後返回，造成另一個 ${base_damage}。如果靈珠擊中目標兩次，將造成 ${bonusDmage}額外傷害。`,
        fr: `Kumihu lance une orbe spirituelle, infligeant ${base_damage}. L'orbe revient à elle après avoir atteint sa portée maximale, infligeant un autre ${base_damage}. Si l'Orbe spirituelle touche la cible deux fois, elle infligera ${bonusDmage} bonus.`,
        vi: `Kumihu ném một Quả Cầu Ma Thuật, gây ${base_damage}. Quả cầu trở lại với cô sau khi đạt đến khoảng cách tối đa, gây thêm ${base_damage}. Nếu Quả cầu ma thuật trúng mục tiêu hai lần nó sẽ gây thêm ${bonusDmage}`,
        id: `Kumihu melemparkan bola roh, memberikan ${base_damage}. Bola kembali kepadanya setelah mencapai jangkauan maksimum, memberikan ${base_damage} lagi. Jika bola roh mengenai target dua kali, maka akan memberikan ${bonusDmage} bonus damage`,
      }
    }

    case SpellList.KUMIHU_ARCANE_DASH: {
      const dashAuraDuration = getDuration(KumihuAbilityData.DASH_AURA_DURATION)
      return {
        en: `Kumihu dashes forward. This will activate her Passive for ${dashAuraDuration}.`,
        ru: `Кумиху совершает рывок на короткую дистанцию. Это активирует её пассивную способность на ${dashAuraDuration}.`,
        cz: `Kumihu vykročí dopředu a tím aktivuje svou pasivní schopnost na ${dashAuraDuration}.`,
        br: `Kumihu da um avanço em uma curta distância. Isso irá ativar sua passiva por ${dashAuraDuration}.`,
        zh: `庫咪戶向前衝刺，這會在 ${dashAuraDuration}內觸發她的被動技。`,
        fr: `Kumihu se précipite en avant. Cela activera sa compétence passive pendant ${dashAuraDuration}.`,
        vi: `Kumihu tốc biến về phía trước. Kích hoạt nội tại của cô trong ${dashAuraDuration}.`,
        id: `Kumihu meluncur ke depan. Ini akan mengaktifkan pasifnya selama ${dashAuraDuration}.`,
      }
    }

    /** Sparrow */
    case SpellList.SPARROW_AUTOATTACK: {
      const base_damage = getDamage(SparrowAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const enh_damage = getDamage(SparrowAbilityData.ENHANCED_ATTACK_DMG_MODIFIER * damage)
      const knockDuration = getStunDuration(SparrowAbilityData.ENHANCED_ATTACK_KNOCKBACK_DURATION)

      return {
        en: `Sparrow swings her sword, dealing ${base_damage}. \nPassive: Using an ability charges Sparrow's sword. Her next basic is replaced with a shockwave attack, knocking up enemies for ${knockDuration} and dealing ${enh_damage}.`,
        ru: `Спарроу взмахивает своим мечом, нанося ${base_damage}. \nПассивно: Использование способностей зачаровывает меч Спарроу. Её следующая базовая атака подбрасывает и оглушает врагов на ${knockDuration} и наносит ${enh_damage}.`,
        cz: `Sparrow máchá mečem a způsobuje ${base_damage} za zásah. \nPasivní: Použití schopnosti nabije meč. Její další základní útok srazí nepřátele na ${knockDuration} a způsobí ${enh_damage} poškození.`,
        br: `Sparrow corta seus inimigos causando ${base_damage} por ataque.\n<b>[Passiva]: </b> Usar uma habilidade, faz com que a espada de Sparrow fique carregada. Seu próximo ataque básico stuna os inimigos por ${knockDuration} e da um bônus de ${enh_damage}.`,
        zh: `史佩羅揮動她的劍，給予 ${base_damage}。 \n被動技：使用一個技能使史佩羅的劍產生劍氣。她的下一個基本攻擊變為衝擊波，擊昇敵方暈眩 ${knockDuration}並給予 ${enh_damage}。`,
        fr: `Sparrow brandit son épée, infligeant ${base_damage}. \nPassif: L'utilisation d'une compétence charge l'épée de Sparrow. Sa prochaine attaque de base est remplacée par une attaque d'onde de choc, projetant les ennemis en l'air pendant ${knockDuration} et infligeant ${enh_damage}.`,
        vi: `Sparrow vung kiếm, gây ${base_damage}. \nNội tại: Sử dụng một kỹ năng sẽ kích hoạt kiếm của Sparrow. Đòn đánh thường tiếp theo của cô sẽ được thay thế bằng sóng kiếm, đánh bật kẻ địch trong ${knockDuration} và gây ${enh_damage}.`,
        id: `Sparrow mengayunkan pedangnya, memberikan ${base_damage}. \nPasif: Menggunakan kemampuan mengisi pedang Sparrow. Serangan dasar berikutnya digantikan dengan serangan gelombang kejut, menyerang musuh selama ${knockDuration} dan memberikan ${enh_damage}.`,
      }
    }

    case SpellList.SPARROW_CORRUPTED_WIND: {
      const dashDamage = getDamage(SparrowAbilityData.DASH_DAMAGE_MOD * damage)
      const stunduration = getStunDuration(SparrowAbilityData.DASH_STUN_DURATION)
      return {
        en: `Sparrow quickly dashes forward, harnessing the wind, dealing ${dashDamage} to enemy heroes and stunning them for ${stunduration}.`,
        ru: `Спарроу совершает стремительный рывок, оглушая задетых врагов на ${stunduration} и нанося им ${dashDamage}.`,
        cz: `Sparrow se vrhne kupředu a vytasí svůj meč, čímž omráčí nepřátele které zasáhne na ${stunduration} a způsobí ${dashDamage} normalního poškozeni.`,
        br: `Sparrow avança na direção que está olhando,  atordoando os inimigos acertados por ${stunduration} e dando ${dashDamage}.`,
        zh: `史佩羅迅速向前衝刺，駕馭風暴，給予敵方英雄 ${dashDamage}並使他們暈眩 ${stunduration}。`,
        fr: `Sparrow se précipite rapidement en avant, utilisant le vent pour infliger ${dashDamage} et étourdir les ennemis touchés pendant ${stunduration}.`,
        vi: `Sparrow nhanh chóng lao về phía trước, tạo ra gió, gây ${dashDamage} và gây choáng người địch cô đánh trong ${stunduration}.`,
        id: `Sparrow dengan cepat bergerak ke depan, memukul musuh dengan ${dashDamage} dan membiarkan mereka terpukul selama ${stunduration}.`,
      }
    }

    case SpellList.SPARROW_DEMONIC_WRATH: {
      const damageValue = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE + SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE
        : SparrowAbilityData.GROUND_SLAM_BASE_DAMAGE

      const damage = getDamage(0, abilityData.damageType, damageValue, 'None')
      const percDamageValue = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
        ? Math.floor(
            (SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG +
              SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE) *
              100
          )
        : Math.floor(SparrowAbilityData.GROUND_SLAM_PERC_MISSING_HP_DMG * 100)
      const percDamage = getDamage(percDamageValue, abilityData.damageType, 0, 'None', true)

      return {
        en: `Sparrow unleashes the power of the demons, launching a corrupt wave from her sword, dealing ${damage} (plus a bonus ${percDamage} of target's missing health). `,
        ru: `Спарроу разрывает пространство, запуская волну порчи из своего меча, нанося ${damage} (плюс бонус ${percDamage} от потерянного здоровья цели). `,
        cz: `Sparrow uvolní moc démonů, vypustí zkaženou vlnu ze svého meče, způsobí ${damage} (plus bonus ${percDamage} ztraceného zdraví cíle).`,
        br: `Sparrow libera o poder dos demônios, lançando uma onda corrupta de sua espada, causando ${damage} (mais um bônus de ${percDamage} da vida perdida do alvo). `,
        zh: `史佩羅釋放出惡魔的力量，從她的劍中發射出一道腐敗的波浪，造成 ${damage} (再加上目標失去生命值的 ${percDamage})。 `,
        fr: `Sparrow libère la puissance des démons, lançant une vague corrompue de son épée, infligeant ${damage} (plus un bonus de ${percDamage} de la vie manquante de la cible). `,
        vi: `Sparrow giải phóng sức mạnh của quỷ dữ, tung ra một làn sóng tà ác từ thanh kiếm của cô ấy, gây ${damage} (cộng thêm ${percDamage} lượng máu đã mất của mục tiêu). `,
        id: `Sparrow melepaskan kekuatan iblis, meluncurkan gelombang korupsi dari pedangnya, memberikan ${damage} (ditambah bonus ${percDamage} dari kesehatan yang hilang target).`,
      }
    }

    /** I'Ceat */
    case SpellList.ICEAT_AUTOATTACK: {
      const base_damage = getDamage(ICeatAbilityData.AUTOATTACK_MOD_DAMAGE * damage)
      return {
        en: `I'ceat hurls an arcing snowball, dealing ${base_damage} in a small area.`,
        ru: `Ай'сит швырает снежок по дуге, нанося ${base_damage}.`,
        cz: `I'ceat mrští sněhovou kouli na krátkou vzdálenost a způsobí ${base_damage} poškození. `,
        br: `Iceat arremessa uma bola de neve a curta distância causando ${base_damage}.`,
        zh: `艾希特投擲電弧雪球，給予小範圍全體 ${base_damage}。`,
        fr: `I'ceat lance une boule de neige en arc, infligeant ${base_damage} dans une petite zone.`,
        vi: `I'ceat ném một quả tuyết, gây ${base_damage} trong một khu vực nhỏ.`,
        id: `I'ceat me lemparkan bola salju, memberikan ${base_damage} di area kecil.`,
      }
    }
    case SpellList.ICEAT_ICICLE_BOLT: {
      const base_damage = getDamage(
        ICeatAbilityData.ICICLE_BOLT_DAMAGE_MOD * abilityPower,
        type,
        ICeatAbilityData.ICICLE_BOLT_BASE_DAMAGE + ICeatAbilityData.ICICLE_BOLT_DAMAGE_PER_LEVEL * (level - 1)
      )

      const movementSpeedSlow = getMovementSpeedValue(-ICeatAbilityData.ICICLE_SLOW_PER_STACK)
      const rootDuration = getControlDuration(
        hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
          ? ICeatAbilityData.ICICLE_ROOT_DURATION + ICeatAbilityData.TALENT_T2_LEFT_ICICLE_FREEZE_DURATION
          : ICeatAbilityData.ICICLE_ROOT_DURATION
      )

      return {
        en: `I'ceat launches three frozen shards, each dealing ${base_damage} and reducing movement speed by ${movementSpeedSlow}. \nHitting an enemy with all three shards freezes them for ${rootDuration}, preventing all forms of movement.`,
        ru: `Ай'сит выпускает три ледяных осколка, каждый из которых наносит ${base_damage} и снижает скорость передвижения на ${movementSpeedSlow}. \nПопадание всеми тремя осколками замораживает врага на ${rootDuration}, предотвращая любое передвижение.`,
        cz: `I'ceat vystřelí tři ledové střepy, z nichž každý způsobí ${base_damage} a sníží rychlost pohybu o ${movementSpeedSlow}. \nZasažení nepřítele všemi třemi střepy ho zmrazí na ${rootDuration} a zabrání jakémukoliv pohybu.`,
        br: `I'ceat lança três fragmentos congelados, cada um causando ${base_damage} e reduzindo a velocidade de movimento em ${movementSpeedSlow}. \nAcertar os três fragmentos em um inimigo congela-o por ${rootDuration}, impedindo qualquer forma de movimento.`,
        zh: `艾希特發射三枚寒冰碎片，每枚造成 ${base_damage} 並降低移動速度 ${movementSpeedSlow}。\n若三枚碎片全部命中同一敵人，將凍結目標 ${rootDuration}，阻止任何形式的移動。`,
        fr: `I'ceat lance trois éclats gelés, chacun infligeant ${base_damage} et réduisant la vitesse de déplacement de ${movementSpeedSlow}. \nToucher un ennemi avec les trois éclats le gèle pendant ${rootDuration}, empêchant toute forme de mouvement.`,
        vi: `I'ceat phóng ra ba mảnh băng, mỗi mảnh gây ${base_damage} và giảm tốc độ di chuyển đi ${movementSpeedSlow}. \nNếu cả ba mảnh đều trúng cùng một mục tiêu, kẻ địch sẽ bị đóng băng trong ${rootDuration}, ngăn chặn mọi hình thức di chuyển.`,
        id: `I'ceat meluncurkan tiga pecahan es, masing-masing memberikan ${base_damage} dan mengurangi kecepatan gerak sebesar ${movementSpeedSlow}. \nMengenai musuh dengan ketiga pecahan akan membekukan mereka selama ${rootDuration}, mencegah semua bentuk pergerakan.`,
      }
    }

    case SpellList.ICEAT_COLD_EMBRACE: {
      const base_damage = getDamage(
        ICeatAbilityData.COLD_EMBRACE_DAMAGE_MOD * abilityPower,
        type,
        ICeatAbilityData.COLD_EMBRACE_BASE_DAMAGE + ICeatAbilityData.COLD_EMBRACE_DAMAGE_PER_LEVEL * (level - 1)
      )
      const duration = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)
        ? getDuration(ICeatAbilityData.COLD_EMBRACE_DURATION + ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)
        : getDuration(ICeatAbilityData.COLD_EMBRACE_DURATION)

      const bonusSpeed = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0)
        ? ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED + ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS
        : ICeatAbilityData.COLD_EMBRACE_BONUS_SPEED
      const bonusMovementSpeed = getBuffValue(bonusSpeed)

      return {
        en:
          `<b>First cast: </b>I'ceat slides on the ground, gaining ${bonusMovementSpeed} bonus movement speed for ${duration} and leaving behind an icy trail. Enemies standing on the icy trail take ${base_damage} per second and have reduced movement speed.<br/><br/>` +
          `<b>Second cast: </b>I'ceat stops sliding.`,

        ru:
          `<b>Первое применение: </b>Ай'сит скользит по земле, получая ${bonusMovementSpeed} бонуса к скорости передвижения на ${duration} и оставляя за собой ледяной след. Враги, стоящие на ледяном следе, получают ${base_damage} урона в секунду и имеют сниженную скорость передвижения.<br/><br/>` +
          `<b>Повторное применение: </b>Ай'сит перестаёт скользить.`,

        cz:
          `<b>První použití: </b>I'ceat klouže po zemi, získává ${bonusMovementSpeed} bonus k rychlosti pohybu na ${duration} a zanechává za sebou ledovou stopu. Nepřátelé stojící na ledové stopě dostávají ${base_damage} poškození za sekundu a mají sníženou rychlost pohybu.<br/><br/>` +
          `<b>Druhé použití: </b>I'ceat přestane klouzat.`,

        br:
          `<b>Primeira Ativação: </b>I'ceat desliza pelo chão, ganhando ${bonusMovementSpeed} de bônus de velocidade de movimento por ${duration} e deixando uma trilha de gelo. Inimigos na trilha de gelo recebem ${base_damage} por segundo e têm velocidade de movimento reduzida.<br/><br/>` +
          `<b>Segunda Ativação: </b>I'ceat para de deslizar.`,

        zh:
          `<b>第一次施放：</b>艾希特在地面滑行，獲得 ${bonusMovementSpeed} 額外移動速度，持續 ${duration}，並在身後留下冰霜軌跡。站在冰霜軌跡上的敵人每秒受到 ${base_damage}，並降低移動速度。<br/><br/>` +
          `<b>第二次施放：</b>艾希特停止滑行。`,

        fr:
          `<b>Première utilisation: </b>I'ceat glisse sur le sol, gagnant ${bonusMovementSpeed} de bonus de vitesse de déplacement pendant ${duration} et laissant derrière lui une traînée glacée. Les ennemis sur la traînée glacée subissent ${base_damage} par seconde et ont une vitesse de déplacement réduite.<br/><br/>` +
          `<b>Deuxième utilisation: </b>I'ceat arrête de glisser.`,

        vi:
          `<b>Lần đầu: </b>I'ceat trượt trên mặt đất, nhận ${bonusMovementSpeed} thêm tốc độ di chuyển trong ${duration} và để lại một vệt băng phía sau. Kẻ địch đứng trên vệt băng nhận ${base_damage} mỗi giây và bị giảm tốc độ di chuyển.<br/><br/>` +
          `<b>Lần hai: </b>I'ceat dừng trượt.`,

        id:
          `<b>First cast: </b>I'ceat meluncur di tanah, mendapatkan ${bonusMovementSpeed} bonus kecepatan bergerak selama ${duration} dan meninggalkan jejak es. Musuh yang berdiri di atas jejak es menerima ${base_damage} per detik dan memiliki kecepatan gerak berkurang.<br/><br/>` +
          `<b>Second cast: </b>I'ceat berhenti meluncur.`,
      }
    }

    /** Belle */
    case SpellList.BELLE_AUTOATTACK: {
      const baseDamage = getDamage(BelleAbilityData.AUTOATTACK_MOD_DAMAGE * damage)
      return {
        en: `Belle fires an explosive thorn from her wand, dealing ${baseDamage} in a small area.`,
        ru: `Белла выпускает взрывной шип из своей палочки, наносящий ${baseDamage}.`,
        cz: `Belle vystřelí výbušný trn ze své hůlky a způsobí ${baseDamage} poškození v malé oblasti.`,
        br: `Belle atira uma flor explosiva de sua varinha causando ${baseDamage} em área.`,
        zh: `蓓蕾從她的法棍發射一顆爆炸荊棘，給予小範圍全體 ${baseDamage}。`,
        fr: `Belle tire une épine explosive de sa baguette, infligeant ${baseDamage} dans une petite zone.`,
        vi: `Belle bắn ra một hoa gai nổ từ cây gậy của mình, gây ${baseDamage} trong một khu vực nhỏ.`,
        id: `Belle menembakkan duri ledakan dari tongkatnya, memberikan ${baseDamage} di area kecil.`,
      }
    }

    case SpellList.BELLE_PRICKLY_VINE: {
      const damage = getDamage(
        BelleAbilityData.PRICKLY_VINE_DAMAGE_MOD * abilityPower,
        type,
        BelleAbilityData.PRICKLY_VINE_BASE_DAMAGE + BelleAbilityData.PRICKLY_VINE_DAMAGE_PER_LEVEL * (level - 1)
      )

      const stunDuration = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? getStunDuration(
            BelleAbilityData.PRICKLY_VINE_STUN_DURATION + BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS
          )
        : getStunDuration(BelleAbilityData.PRICKLY_VINE_STUN_DURATION)

      return {
        en:
          `Belle casts a piercing vine, dealing ${damage} to enemies that get hit. If the vine comes in contact with an enemy hero, it attaches to that hero. Attached vines can be broken if the enemy hero moves far enough away from Belle.` +
          `\nAfter a short time, if the vine is still attached, the vine entangles the enemy, dealing ${damage} and stunning for ${stunDuration}.`,
        ru:
          `Белла выпускает лозу перед собой, наносящую ${damage} и прикрепляющуюся к перворму вражескому герою на своём пути. \nСпособность может быть прервана, если враг отойдёт слишком далеко от Беллы.` +
          `\nСпустя небольшой промежуток времени, если лоза всё ещё прикреплена к врагу, она исчезает и оглушает цель на ${stunDuration}, нанося ${damage}.`,
        cz:
          `Belle vrhne vinnou révu která se připojí k nepříteli způsobujícímu ${damage} poškození a zpomalí pohyb. \nLze je zlomit, pokud se nepřítel vydálí dostatečně daleko od Belle.` +
          `\nPo krátké době, pokud je liána stále propojena, opadne a omráčí nepřítele na ${stunDuration} a způsobí ${damage} poškození.`,

        br:
          `Belle lança uma videira para frente que se liga a um inimigo causando ${damage} e diminuindo a sua velocidade de movimento.` +
          `\nDepois de 2 segundos, se a videira ainda estiver presa no inimigo, ela vai prender ele o atordoando por ${stunDuration} e causando ${damage}. \n\n(Ela pode ser quebrada se o inimigo se mover para longe o suficiente de Belle.)`,
        zh:
          `蓓蕾向前投擲貫穿藤蔓，給予被擊中敵方 ${damage}。如果藤蔓擊中一個敵方英雄，它會附著在該英雄身上。當敵方離蓓蕾夠遠時附著的藤蔓可以被破壞。` +
          `\n經過短時間後，藤蔓依然附著時，藤蔓會糾纏敵方並給予 ${damage}並使其暈眩 ${stunDuration}。`,
        fr:
          `Belle lance une vigne perçante, infligeant ${damage} aux ennemis touchés. Si la vigne entre en contact avec un héros ennemi, elle se fixe à ce héros. Les vignes attachées peuvent être brisées si le héros ennemi s'éloigne suffisamment de Belle.` +
          `\nAprès un court laps de temps, si la vigne est toujours attachée, elle s'entortille autour de l'ennemi, infligeant ${damage} et étourdissant pendant ${stunDuration}.`,
        vi:
          `Belle ném một dây leo xuyên thấu, gây ${damage} lên kẻ địch bị trúng. Nếu dây leo tiếp xúc với kẻ địch, nó sẽ gắn vào kẻ địch đó. Dây leo gắn vào có thể bị phá vỡ nếu kẻ địch di chuyển đủ xa khỏi Belle.` +
          `\nSau một thời gian ngắn, nếu dây leo vẫn gắn, dây leo sẽ bao quanh kẻ địch, gây ${damage} và gây choáng kẻ địch trong ${stunDuration}.`,
        id:
          `Belle melemparkan duri yang menembus, memberikan ${damage} pada musuh yang terkena. Jika duri bersentuhan dengan pahlawan musuh, itu melekat pada pahlawan itu. Duri yang melekat dapat dipecahkan jika pahlawan musuh bergerak cukup jauh dari Belle.` +
          `\nSetelah waktu singkat, jika duri masih melekat, duri membelit musuh, memberikan ${damage} dan mematikan selama ${stunDuration}.`,
      }
    }

    case SpellList.BELLE_FLORAL_AMBUSH: {
      const base_damage = getDamage(
        BelleAbilityData.FLORAL_AMBUSH_DAMAGE_MOD * abilityPower,
        type,
        BelleAbilityData.FLORAL_AMBUSH_BASE_DAMAGE + BelleAbilityData.FLORAL_AMBUSH_DAMAGE_PER_LEVEL * (level - 1)
      )
      const floralAmbushDuration = getDuration(BelleAbilityData.FLORAL_AMBUSH_DOT_DURATION)
      return {
        en:
          `Belle jumps in the air and drops three seed bombs in front of her. The bombs attach to enemy heroes if they get close, dealing ${base_damage} over ${floralAmbushDuration}. After ${floralAmbushDuration}, both the attached and unattached seed bombs detonate, dealing ${base_damage} in an area.` +
          `\n\nEnemy heroes that step on an unattached bomb while carrying one will immediately detonate the unattached seed bomb, dealing ${base_damage}.`,
        ru:
          `Белла подпрыгивает и сбрасывает три цветочные бомбы перед собой, которые приклепляются к вражескому герою, если он наступит на них, нанося цели ${base_damage} в течение ${floralAmbushDuration}, взрываясь после этого, нанося ${base_damage} по площади` +
          `\n\nПосле пребывания на земле в течение ${floralAmbushDuration}, цветы взрываются, нанося ${base_damage} по площади ближайшим врагам. Враг, ступивший на бомбу с уже прикреплённой до этого, моментально взорвёт предыдущую.`,
        cz:
          `Belle vyskočí do vzduchu a shodí pod sebe tři semenné bomby, které se přichytí k nepříteli pokud na ně vstoupí a způsobí ${base_damage} poškození během 2 sekund a po uplynutí této doby exploduje, čímž způsobí ${base_damage} poškození v malé oblasti` +
          `\n\nPokud se bomby neprichtí do ${floralAmbushDuration}, semínka explodují a způsobí ${base_damage} poškození okolním nepřátelům. Nepřítel, který šlápne na bombu a zároveň ji nese, okamžitě spustí explozi.`,
        br:
          `Belle plana no ar e lança três bombas de flor em sua frente, se prendendendo a um inimigo causando ${base_damage}, depois de 2 segundos explode novamente se o inimigo estiver com uma semente, causando ${base_damage}.` +
          `\n\nDepois de ficar no chão por ${floralAmbushDuration}, as flores explodem causando ${base_damage} nos inimigos por perto. Inimigos que pisarem nas bombas enquanto elas carregam, irám imediatamente desencadear uma explosão.`,
        zh:
          `蓓蕾跳躍在空中，朝她前方丟下三顆種子炸彈。如果敵方英雄接近會附著於他們身上，給予持續 ${floralAmbushDuration}的 ${base_damage}。在 ${floralAmbushDuration}後，附著與沒附著的種子炸彈同時爆炸，造成鄰近敵方全體 ${base_damage}。` +
          `\n\n當敵方英雄帶著炸彈又踩到未附著種子時，未附著炸彈會立即爆炸，給予四周敵方全體 ${base_damage}。。`,
        fr:
          `Belle saute en l'air et laisse tomber trois bombes de graines devant elle. Les bombes se fixent aux héros ennemis s'ils s'en approchent, infligeant ${base_damage} sur une durée de 2 secondes et explosent après cette durée, infligeant ${base_damage} dans une zone` +
          `\n\nAprès avoir été au sol pendant ${floralAmbushDuration}, les graines explosent, infligeant ${base_damage} aux ennemis proches. Les ennemis qui marchent sur les bombes tout en en portant une déclenchent immédiatement l'explosion.`,
        vi:
          `Belle nhảy lên không trung và thả ba quả bom hạt phía trước. Những quả bom sẽ gắn vào kẻ địch nếu chúng tiếp xúc, gây ${base_damage} trong 2 giây và sau đó nổ, gây ${base_damage} trong một khu vực` +
          `\n\nSau khi ở trên mặt đất trong ${floralAmbushDuration}, những hạt nổ, gây ${base_damage} cho kẻ địch xung quanh. Kẻ địch bước lên bom khi đang mang một quả bom sẽ ngay lập tức kích hoạt nổ.`,
        id:
          `Belle melompat ke udara dan menjatuhkan tiga bom benih di depannya. Bom menempel pada pahlawan musuh jika mereka mendekat, memberikan ${base_damage} selama 2 detik dan meledak setelah waktu berakhir, memberikan ${base_damage} di area` +
          `\n\nSetelah berada di tanah selama ${floralAmbushDuration}, benih meledak, memberikan ${base_damage} pada musuh di sekitar. Musuh yang menginjak bom sambil membawa satu akan segera meledak.`,
      }
    }

    /** Thomas */
    case SpellList.THOMAS_AUTOATTACK: {
      const baseDamage = getDamage(ThomasAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      return {
        en: `Thomas slashes with his katana, dealing ${baseDamage}.`,
        ru: `Томас взмахивает катаной, нанося ${baseDamage}.`,
        cz: `Thomas seká svou mrkví a udělí ${baseDamage} poškození.`,
        br: `Thomas faz um corte com espada e causa ${baseDamage}.`,
        zh: `湯瑪士用他的武士刀劈砍，造成 ${baseDamage}。`,
        fr: `Thomas frappe avec son katana, infligeant ${baseDamage}.`,
        vi: `Thomas  chém thanh kiếm của mình, gây ${baseDamage}.`,
        id: `Thomas memotong dengan katana-nya, memberikan ${baseDamage}.`,
      }
    }

    case SpellList.THOMAS_SHURIKEN_TOSS: {
      const base_damage = getDamage(
        ThomasAbilityData.SHURIKEN_TOSS_DMG_MODIFIER * damage,
        type,
        ThomasAbilityData.SHURIKEN_TOSS_BASE_DAMAGE + ThomasAbilityData.SHURIKEN_TOSS_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Thomas throws three shurikens, each shuriken dealing ${base_damage}. They return to him after a short time, dealing another ${base_damage}.`,
        ru: `Томас бросает три морковных сюрикена перед собой, которые наносят ${base_damage} всем врагам на своём пути. Они возвращаются к нему спустя небольшой промежуток времени, повторно нанося ${base_damage}.`,
        cz: `Thomas hodí tři mrkvovité shurikeny, které způsobí ${base_damage} poškození všem nepřátelům na cestě. Vrátí se k němu po krátké době a udělí ${base_damage} poškození všem nepřátelům, kteří mu stojí v cestě.`,
        br: `Thomas lança com sua espada demoníaca, três shurikens que causam ${base_damage} a todos inimigos no caminho. Elas voltam para ele depois de um curto período de tempo causando ${base_damage} a todos inimigos no caminho.`,
        zh: `湯瑪士丟出三枚手裏劍，每發手裏劍造成 ${base_damage}。手裏劍短時間內收回他手上，造成另一個 ${base_damage}。`,
        fr: `Thomas lance trois shurikens, chacun infligeant ${base_damage}. Ils reviennent à lui après un court laps de temps, infligeant à nouveau ${base_damage}.`,
        vi: `Thomas ném ra ba shuriken, mỗi shuriken gây ${base_damage}. Chúng quay trở lại với anh sau một thời gian ngắn, gây thêm ${base_damage}.`,
        id: `Thomas melemparkan tiga shuriken, masing-masing shuriken memberikan ${base_damage}. Mereka kembali kepadanya setelah waktu singkat, memberikan ${base_damage} lagi.`,
      }
    }

    case SpellList.THOMAS_SHADOW_CARROT: {
      const bonusDamage = hasTalent(Shared.TALENT.LEFT_UPGRADE, 0)
        ? ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE
        : 0
      const base_damage = getDamage(bonusDamage + damage * ThomasAbilityData.SHADOW_CARROT_DAMAGE_MOD, type)
      const carrotDuration = getDuration(ThomasAbilityData.SHADOW_CARROT_DURATION)
      const slowDuration = getMovementSpeedDuration(ThomasAbilityData.SHADOW_CARROT_SLOW_DURATION)

      return {
        en:
          `<b>First cast: </b>Thomas throws a carrot, which attaches to enemies when they get close. He can recast Shadow Carrot to teleport to the carrot within ${carrotDuration}. \n\n` +
          `<b>Second cast: </b>Teleports to the carrot. If the carrot is attached to an enemy hero, Thomas deals ${base_damage}, reducing movement speed for ${slowDuration}.`,

        ru:
          `<b>Первое применение: </b>Томас бросает прикрепляющуюся морковь. Он может телепортироваться к ней в течение ${carrotDuration} после первого применения. \n\n` +
          `<b>Второе применение: </b>Телепортируется к моркови. Если морковь прикреплена к вражескому герою, Томас наносит ${base_damage}, снижает скорость передвижения этого героя на ${slowDuration}.`,

        cz:
          `<b>První použití: </b>Thomas hodí mrkev, která se připojí k nepřátelům, když se přiblíží. Může se k ní teleportovat během ${carrotDuration}. \n\n` +
          `<b>Druhé použití: </b>Teleportuje se k mrkvi. Pokud je mrkev připojena k nepřátelskému hrdinovi, Thomas udělí ${base_damage} poškození a sníží rychlost pohybu tohoto hrdiny na ${slowDuration}.`,

        br:
          `<b>Primeira Ativação: </b>Thomas joga uma cenoura que se prende aos inimigos quando eles chegam perto. Ele pode se teletransportar para a cenoura dentro de ${carrotDuration}. \n\n` +
          `<b>Segunda Ativação: </b>Teleporta-se para a cenoura. Se a cenoura estiver presa a um herói inimigo, Thomas causa ${base_damage} e reduz a velocidade de movimento desse herói por ${slowDuration}.`,

        zh:
          `<b>第一次施放：</b>湯瑪士投擲一根蘿蔔。當有敵方英雄靠近時會附著在身上。他可以在 ${carrotDuration}內再次施放暗影蘿蔔瞬移到蘿蔔所在地。\n\n` +
          `<b>第二次施放：</b>瞬移到蘿蔔所在地。如果蘿蔔附著於敵方英雄，湯瑪士會造成 ${base_damage}，並降低該英雄的移動速度 ${slowDuration}。`,

        fr:
          `<b>Première utilisation: </b>Thomas lance une carotte qui s'attache aux ennemis lorsqu'ils s'approchent. Il peut se téléporter vers la carotte pendant ${carrotDuration}. \n\n` +
          `<b>Deuxième utilisation: </b>Se téléporte à la carotte. Si la carotte est attachée à un héros ennemi, Thomas inflige ${base_damage} et réduit la vitesse de déplacement de ce héros pendant ${slowDuration}.`,

        vi:
          `<b>Lần đầu: </b>Thomas ném một củ cà rốt, nó sẽ gắn vào kẻ địch khi chúng đến gần. Anh có thể dịch chuyển đến củ cà rốt trong ${carrotDuration}. \n\n` +
          `<b>Lần thứ hai: </b>Dịch chuyển đến củ cà rốt. Nếu cà rốt gắn vào tướng địch, Thomas gây ${base_damage} và giảm tốc độ di chuyển của mục tiêu trong ${slowDuration}.`,

        id:
          `<b>First cast: </b>Thomas melempar wortel yang akan menempel pada musuh saat mereka mendekat. Dia bisa teleport ke wortel itu dalam ${carrotDuration}. \n\n` +
          `<b>Second cast: </b>Teleport ke wortel. Jika wortel menempel pada hero musuh, Thomas memberikan ${base_damage} dan mengurangi kecepatan gerak hero tersebut selama ${slowDuration}.`,
      }
    }
    /** Veil */
    case SpellList.VEIL_AUTOATTACK: {
      const base_damage = getDamage(VeilAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const modifier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1
      const enhanced_dmg = getDamage(
        VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier,
        Shared.DamageTypes.MAGICAL,
        (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) *
          modifier,
        'AbilityPower'
      )

      return {
        en: `Veil slashes with her weapons, dealing ${base_damage}. \n<br/>Enhanced: Veil uses her astral spirit to deal a bonus ${enhanced_dmg}, removing her enhanced state.`,
        ru: `Вэйл взмахивает своим оружием и наносит ${base_damage}. \n[Усиленная]: Вэйл использует свой астральный дух, чтобы нанести дополнительно ${enhanced_dmg} (поглощает эффект усиления)`,
        cz: `Veil sekne svými zbraněmi a způsobí ${base_damage} poškození. \nPosílení: Veil používá svého astrálního ducha a udělí dalšíh ${enhanced_dmg} poškození (spotřebuje Posílení stav)`,
        br: `Veil corta com suas espadas demoníacas causando ${base_damage}.\n<b>[Maldição dos caídos]:</b> Veil invoca o poder do demônio selado em suas espadas para causar ${enhanced_dmg}.\n(Consume o estado Maldição dos caídos.)`,
        zh: `維爾劈砍她的武器，造成 ${base_damage}。\n強化後：維爾利用她的星光魂魄造成額外的 ${enhanced_dmg}，移除她的強化狀態。`,
        fr: `Veil frappe avec ses armes, infligeant ${base_damage}. \n<br/>Amélioré: Veil utilise son esprit astral pour infliger un bonus de ${enhanced_dmg}, supprimant son état amélioré.`,
        vi: `Veil chém với vũ khí của mình, gây ${base_damage}. \n<br/>Thức tỉnh: Veil sử dụng linh hồn thần bí của mình để gây thêm ${enhanced_dmg}, loại bỏ trạng thái thức tỉnh.`,
        id: `Veil memotong dengan senjata-senjatanya, memberikan ${base_damage}. \n<br/>Ditingkatkan: Veil menggunakan roh astralnya untuk memberikan bonus ${enhanced_dmg}, menghapuskan keadaan ditingkatkan.`,
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
        ru: `Вэйл подпрыгивает и бросает свои астральные клинки вниз под углом 45°, которые наносят ${base_damage}. Если способность попала по вражескому герою, Вэйл получит усиление.`,
        cz: `Veil skočí a vrhne své astrální čepele dolů pod úhlem 45°, což způsobí ${base_damage} poškození. Pokud schopnost zasáhne nepřátelského hrdinu, získá Posílení.`,
        br: `Veil salta e atira suas lâminas astrais para baixo em um ângulo de 45 ° causando ${base_damage}.\nSe a habilidade atingir um personagem inimigo, ela ativa a [Maldição dos caídos].`,
        zh: `維爾跳躍並向斜前方45°角丟出星光刀刃落下，造成 ${base_damage}。如果技能擊中敵方英雄，維爾會進入強化狀態。`,
        fr: `Veil saute et lance ses lames astrales vers le bas à un angle de 45°, infligeant ${base_damage}. Si les lames touchent un héros ennemi, Veil entre dans son état amélioré.`,
        vi: `Veil nhảy và ném thanh kiếm thần bí của mình xuống dưới tạo một góc 45°, gây ${base_damage}. Nếu thanh kiếm trúng một kẻ địch, Veil sẽ bước vào trạng thái thức tỉnh`,
        id: `Veil melompat dan melemparkan pedang astralnya ke bawah pada sudut 45°, memberikan ${base_damage}. Jika pedang mengenai pahlawan musuh, Veil akan memasuki keadaan ditingkatkan.`,
      }
    }

    case SpellList.VEIL_ASTRAL_STEP: {
      const base_damage = getDamage(VeilAbilityData.ASTRAL_STEP_DAMAGE_MOD * damage)

      const modifier = hasTalent(Shared.TALENT.LEFT_UPGRADE, 1) ? VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE : 1
      const enh_dmg = getDamage(
        VeilAbilityData.ENHANCED_DAMAGE_MODIFIER * abilityPower * modifier,
        Shared.DamageTypes.MAGICAL,
        (VeilAbilityData.ENHANCED_DAMAGE_BASE + VeilAbilityData.ENHANCED_DAMAGE_BASE_PER_LEVEL * (level - 1)) * modifier
      )

      return {
        en:
          `Veil dashes forward with high velocity, dealing ${base_damage} to enemy heroes.\n\n` +
          `Enhanced: Veil steps into the astral realm, dealing an additional ${enh_dmg}, reducing enemy Movement Speed, and removing her enhanced state. <b>Successfully hitting an enemy hero resets this Ability's cooldown.</b>`,

        ru:
          `Вэйл совершает рывок вперёд с высокой скоростью, нанося ${base_damage} вражеским героям.\n\n` +
          `Усиление: Вэйл входит в астральное измерение, нанося дополнительно ${enh_dmg}, снижая скорость передвижения врагов и снимая своё усиленное состояние. <b>Успешное попадание по вражескому герою сбрасывает перезарядку способности.</b>`,

        cz:
          `Veil se vysokou rychlostí vrhne vpřed a způsobí nepřátelským hrdinům ${base_damage} poškození.\n\n` +
          `Posílení: Veil vstoupí do astrální říše, způsobí dodatečných ${enh_dmg} poškození, sníží nepřátelům rychlost pohybu a odstraní svůj posílený stav. <b>Úspěšný zásah nepřátelského hrdiny resetuje cooldown této schopnosti.</b>`,

        br:
          `Veil avança em alta velocidade, causando ${base_damage} aos heróis inimigos.\n\n` +
          `Aprimorado: Veil entra no reino astral, causando ${enh_dmg} adicional, reduzindo a Velocidade de Movimento dos inimigos e removendo seu estado aprimorado. <b>Acertar um herói inimigo reseta o tempo de recarga desta habilidade.</b>`,

        zh:
          `維爾以高速向前衝刺，對敵方英雄造成 ${base_damage}。\n\n` +
          `強化後：維爾踏入星界，額外造成 ${enh_dmg}，降低敵方英雄的移動速度，並移除自身的強化狀態。<b>成功命中敵方英雄將重置此技能的冷卻時間。</b>`,

        fr:
          `Veil fonce vers l'avant à grande vitesse, infligeant ${base_damage} aux héros ennemis.\n\n` +
          `Amélioré : Veil entre dans le royaume astral, inflige ${enh_dmg} supplémentaires, réduit la vitesse de déplacement des ennemis et supprime son état amélioré. <b>Toucher avec succès un héros ennemi réinitialise le temps de recharge de cette capacité.</b>`,

        vi:
          `Veil lao về phía trước với tốc độ cực cao, gây ${base_damage} lên tướng địch.\n\n` +
          `Cường hóa: Veil bước vào cõi astral, gây thêm ${enh_dmg}, giảm tốc độ di chuyển của kẻ địch và mất trạng thái cường hóa. <b>Đánh trúng tướng địch sẽ hồi lại thời gian hồi chiêu của kỹ năng này.</b>`,

        id:
          `Veil melesat maju dengan kecepatan tinggi, memberikan ${base_damage} kepada hero musuh.\n\n` +
          `Enhanced: Veil memasuki alam astral, memberikan tambahan ${enh_dmg}, mengurangi Movement Speed musuh, dan menghapus status enhanced miliknya. <b>Berhasil mengenai hero musuh akan mereset cooldown Ability ini.</b>`,
      }
    }

    /** Flin  */
    case SpellList.FLIN_AUTOATTACK: {
      const basic_damage = getDamage(FlinAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const enh_damage = getDamage(FlinAbilityData.MARKSMANSHIP_BONUS_DAMAGE_MOD * damage)

      return {
        en: `Flin fires an arrow, dealing ${basic_damage}. \nIf Marksmanship is active, Flin's arrow deals ${enh_damage} and pierces through enemies.`,
        br: `Flin dispara uma flecha que da ${basic_damage}. \nSe sua habilidade (Pontaria perfeita) estiver ativa, o flin dá ${enh_damage} e suas flechas perfuram todas as unidades inimigas.`,
        ru: `Флин выпускает стрелу, наносящую ${basic_damage}. \nЕсли активна Меткая стрельба, выпущенная стрела наносит ${enh_damage} и пронзает все вражеские цели на своём пути.`,
        cz: `Flin vystřelí šíp a způsobí ${basic_damage} \nAk je marksmanship aura aktivovaná, šípy budu prolétat skrz nepřátelske jednotky a způsobí ${enh_damage}`,
        zh: `弗林發射一支弓箭，造成 ${basic_damage}。\n如果精通箭術發動中，弗林的弓造成 ${enh_damage}並貫穿所有敵方單位。`,
        fr: `Flin tire une flèche, infligeant ${basic_damage}. \nSi la Maîtrise du tir est active, la flèche de Flin inflige ${enh_damage} et traverse les ennemis.`,
        vi: `Flin bắn một mũi tên, gây ${basic_damage}. \nNếu kỹ năng Xạ Thủ Lão Luyện được kích hoạt, mũi tên của Flin gây ${enh_damage} và xuyên qua kẻ địch.`,
        id: `Flin melepaskan anak panah, memberikan ${basic_damage}. \nJika Marksmanship aktif, anak panah Flin memberikan ${enh_damage} dan menembus musuh.`,
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
        en: `Flin fires a powerful arrow from his bow, dealing ${base_damage} and causing knockback to enemies hit. \nIf Marksmanship is active, Precise Shot pierces through enemies.`,
        br: `Flin dispara uma poderosa flecha de seu arco, causando ${base_damage} e causando empurrão nos inimigos atingidos. \nSe Pontaria Perfeita estiver ativa, Tiro Preciso atravessa os inimigos.`,
        ru: `Флин выпускает мощную стрелу из своего лука, нанося ${base_damage} и вызывая отбрасывание поражённых врагов. \nЕсли Меткая стрельба активна, Точный выстрел пронзает врагов.`,
        cz: `Flin vystřelí silný šíp ze svého luku, který způsobí ${base_damage} a způsobí odhození zasažených nepřátel. \nPokud je Střelecké umění aktivní, Přesný výstřel prolétne skrz nepřátele.`,
        zh: `弗林從弓中射出一支強力箭矢，造成 ${base_damage}並擊退命中的敵人。\n如果箭術精通啟動中，精準射擊將貫穿敵人。`,
        fr: `Flin tire une puissante flèche de son arc, infligeant ${base_damage} et provoquant un repoussement des ennemis touchés. \nSi la Maîtrise du tir est active, le Tir précis traverse les ennemis.`,
        vi: `Flin bắn ra một mũi tên mạnh mẽ từ cây cung của mình, gây ${base_damage} và đánh bật kẻ địch trúng phải. \nNếu Thiện Xạ được kích hoạt, Phát Bắn Chính Xác sẽ xuyên qua kẻ địch.`,
        id: `Flin menembakkan panah kuat dari busurnya, memberikan ${base_damage} dan menyebabkan knockback kepada musuh yang terkena. \nJika Marksmanship aktif, Precise Shot menembus musuh.`,
      }
    }

    case SpellList.FLIN_MARKSMANSHIP: {
      const marksmanshipDuration = colorize(toSec(FlinAbilityData.MARKSMANSHIP_DURATION))
      const marksmanshipDamageReduction = getDamage(
        FlinAbilityData.MARKSMANSHIP_REDUCE_DAMAGE_PER_UNIT * 100,
        Shared.DamageTypes.NORMAL,
        0,
        undefined,
        true
      )
      const bonusAttackSpeed = fixed(100 * FlinAbilityData.MARKSMANSHIP_BONUS_ATTACK_SPEED)

      return {
        en: `Flin increases his focus for ${marksmanshipDuration}. While focused, Flin gains bonus ${colorize(`${bonusAttackSpeed}% attack speed`)}, and his next ${FlinAbilityData.MARKSMANSHIP_STACKS} arrows will deal additional damage and pierce enemy units. Every unit hit by Flin's piercing arrows reduces the arrow's damage by ${marksmanshipDamageReduction}.`,
        br: `Flin aumenta seu foco por ${marksmanshipDuration}. Enquanto focado, Flin ganha ${colorize(`${bonusAttackSpeed}% de velocidade de ataque`)}, e suas próximas ${FlinAbilityData.MARKSMANSHIP_STACKS} flechas causarão dano adicional e perfurarão unidades inimigas. Cada unidade atingida pelas flechas de Flin reduz o dano da flecha em ${marksmanshipDamageReduction}.`,
        ru: `Флин увеличивает свою концентрацию на ${marksmanshipDuration}. Пока он сосредоточен, Флин получает бонус ${colorize(`${bonusAttackSpeed}% к скорости атаки`)}, и его следующие ${FlinAbilityData.MARKSMANSHIP_STACKS} стрелы наносят дополнительный урон и пронзают вражеские юниты. Каждая юнита, пораженная стрелами Флина, уменьшает урон стрел на ${marksmanshipDamageReduction}.`,
        cz: `Flin zvyšuje svůj záměr na ${marksmanshipDuration}. Během záměru získá bonus ${colorize(`${bonusAttackSpeed}% rychlosti útoku`)}, a jeho další ${FlinAbilityData.MARKSMANSHIP_STACKS} šípy způsobí dodatečné poškození a prorazí nepřátelské jednotky. Každá jednotka zasažená Flinovými průstřelnými šípy sníží poškození šípu o ${marksmanshipDamageReduction}.`,
        zh: `弗林提高他的专注力 ${marksmanshipDuration}。在专注时，弗林获得额外 ${colorize(`${bonusAttackSpeed}% 攻击速度`)}, 他的接下来的 ${FlinAbilityData.MARKSMANSHIP_STACKS} 箭矢将造成额外伤害并穿透敌方单位。每个被弗林穿透的单位会减少箭矢的伤害 ${marksmanshipDamageReduction}。`,
        fr: `Flin augmente sa concentration pendant ${marksmanshipDuration}. Pendant cette période, Flin gagne ${colorize(`${bonusAttackSpeed}% de vitesse d'attaque`)}, et ses ${FlinAbilityData.MARKSMANSHIP_STACKS} flèches suivantes infligeront des dégâts supplémentaires et perceront les unités ennemies. Chaque unité touchée par les flèches de Flin réduit les dégâts de la flèche de ${marksmanshipDamageReduction}.`,
        vi: `Flin tăng cường sự tập trung trong ${marksmanshipDuration}. Trong thời gian tập trung, Flin nhận được thêm ${colorize(`${bonusAttackSpeed}% tốc độ đánh`)}, và ${FlinAbilityData.MARKSMANSHIP_STACKS} mũi tên tiếp theo của anh ấy sẽ gây thêm sát thương và xuyên qua các đơn vị địch. Mỗi đơn vị bị trúng tên xuyên của Flin sẽ giảm sát thương của mũi tên đi ${marksmanshipDamageReduction}.`,
        id: `Flin meningkatkan fokusnya selama ${marksmanshipDuration}. Saat fokus, Flin mendapatkan bonus ${colorize(`${bonusAttackSpeed}% kecepatan serangan`)}, dan ${FlinAbilityData.MARKSMANSHIP_STACKS} panah berikutnya akan memberikan kerusakan tambahan dan menembus unit musuh. Setiap unit yang terkena panah menembus Flin akan mengurangi kerusakan panah sebesar ${marksmanshipDamageReduction}.`,
      }
    }

    /** Kira  */
    case SpellList.KIRA_AUTOATTACK: {
      const basic_damage = getDamage(KiraAbilityData.AUTOATTACK_DAMAGE_MOD * damage)

      const enh_damage_heal = getDamage(
        KiraAbilityData.ENHATTACK_DAMAGE_MOD * abilityPower,
        Shared.DamageTypes.HEAL,
        KiraAbilityData.ENHATTACK_BASE_DAMAGE + KiraAbilityData.ENHATTACK_BASE_DAMAGE_PER_LEVEL * (level - 1)
      )
      const bonusAttackSpeed = fixed(KiraAbilityData.ENHATTACK_ATTACK_SPEED * 100, 1)
      const bonusAttackSpeedValue = getBuffValue(`${bonusAttackSpeed}%`)
      const bonusMovementSpeed = getBuffValue(KiraAbilityData.ENHATTACK_MOVE_SPEED)

      return {
        en: `Kira fires a spark, dealing ${basic_damage}. \n\n<b>Enhanced: (Lightning Shock)</b> Kira also casts a lightning bolt at the nearest hero. If Lightning Shock hits an ally, it restores ${enh_damage_heal} health and grants ${bonusAttackSpeedValue} bonus attack speed and ${bonusMovementSpeed} bonus movement speed for a short duration.`,
        br: `Kira dispara uma faísca, causando ${basic_damage}. \n\n<b>Aprimorado: (Choque Elétrico)</b> Kira também lança um raio no herói mais próximo. Se Choque Elétrico atingir um aliado, ele restaura ${enh_damage_heal} de vida e concede ${bonusAttackSpeedValue} de bônus de velocidade de ataque e ${bonusMovementSpeed} de bônus de velocidade de movimento por um curto período.`,
        ru: `Кира выпускает искру, нанося ${basic_damage}. \n\n<b>[Усиленная]: (Удар молнии)</b> Кира также выпускает молнию в ближайшего героя. Если Удар молнии попадает в союзника, он восстанавливает ${enh_damage_heal} здоровья и даёт ${bonusAttackSpeedValue} бонуса к скорости атаки и ${bonusMovementSpeed} бонуса к скорости передвижения на короткое время.`,
        cz: `Kira vystřelí jiskru, která způsobí ${basic_damage} poškození. \n\n<b>[Vylepšené]: (Bleskový šok)</b> Kira navíc sesílá blesk na nejbližšího hrdinu. Pokud Bleskový šok zasáhne spojence, obnoví mu ${enh_damage_heal} zdraví a poskytne ${bonusAttackSpeedValue} bonus k rychlosti útoku a ${bonusMovementSpeed} bonus k rychlosti pohybu na krátkou dobu.`,
        zh: `奇菈射出一道電光，造成 ${basic_damage}。 \n\n<b>[強化後]：(閃電衝擊)</b> 奇菈還會向最近的英雄施放閃電。如果閃電衝擊命中盟友，將恢復 ${enh_damage_heal} 生命，並提供 ${bonusAttackSpeedValue} 額外攻擊速度與 ${bonusMovementSpeed} 額外移動速度，持續短時間。`,
        fr: `Kira tire une étincelle, infligeant ${basic_damage}. \n\n<b>Amélioré : (Choc électrique)</b> Kira lance également un éclair sur le héros le plus proche. Si le Choc électrique touche un allié, il restaure ${enh_damage_heal} points de vie et accorde ${bonusAttackSpeedValue} de bonus de vitesse d'attaque ainsi que ${bonusMovementSpeed} de bonus de vitesse de déplacement pendant une courte durée.`,
        vi: `Kira bắn ra một tia điện, gây ${basic_damage}. \n\n<b>Cường hóa: (Điện Kích)</b> Kira đồng thời phóng một tia sét vào anh hùng gần nhất. Nếu Điện Kích trúng đồng minh, nó hồi ${enh_damage_heal} máu và cho ${bonusAttackSpeedValue} thêm tốc độ đánh cùng ${bonusMovementSpeed} thêm tốc độ di chuyển trong một thời gian ngắn.`,
        id: `Kira menembakkan percikan listrik, memberikan ${basic_damage}. \n\n<b>Enhanced: (Lightning Shock)</b> Kira juga melepaskan petir ke hero terdekat. Jika Lightning Shock mengenai sekutu, itu memulihkan ${enh_damage_heal} health dan memberikan ${bonusAttackSpeedValue} bonus kecepatan serangan serta ${bonusMovementSpeed} bonus kecepatan bergerak untuk durasi singkat.`,
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
        br: `Kira conjura de seu livro ${count} mísseis elétricos do abismo, que caem de cima, cada míssil causando ${damage} que perfura os inimigos.
                \n<b>[Passiva] (Abismo Demoníaco):</b> Kira conjura um total de ${count * 2} mísseis do abismo.`,
        ru: `Кира призывает ${count} снаряда, которые падают с неба, каждый из которого наносит ${damage} врагам.
                \n<b>[Усиленная]: (Проливная бездна)</b> Количество призываемых снарядов увеличивается до ${count * 2}.`,
        cz: `Kira vyvolá ${count} prázdné střely, které prší shora, přičemž každá střela způsobí ${damage} magické poškození, které prorazí nepřátele.
                \n<b>[Vylepšené]: (Torrential Abyss)</b> Kira vyvolá celkem ${count * 2} prázdných střel.`,
        zh: `奇菈召喚 ${count}束雷電飛彈往斜前方45°角落下，每束飛彈造成 ${damage}並貫穿敵方。\n
                \n<b>[強化後]：(暴風閃電) 奇菈召喚總共 ${count * 2}束雷電飛彈。`,
        fr: `Kira invoque ${count} missiles électriques qui tombent du ciel, chacun infligeant ${damage} et traversant les ennemis.
                \n<br/><b>Amélioré: (Éclair torrentiel)</b> Kira invoque un total de ${count * 2} missiles électriques.`,
        vi: `Kira triệu hồi ${count} tia lửa điện từ trên trời, mỗi tia lửa điện qua kẻ địch và gây ${damage}.
                \n<br/><b>Tăng cường: (Sấm Sét)</b> Kira triệu hồi tổng cộng ${count * 2} tên lửa điện.`,
        id: `Kira memanggil ${count} peluru listrik dari langit, setiap peluru menembus musuh dan memberikan ${damage} kerusakan.
                \n<br/><b>Ditingkatkan: (Petir Hujan)</b> Kira memanggil total ${count * 2} peluru listrik.`,
      }
    }

    case SpellList.KIRA_STATIC_PHANTASM: {
      const damage = getDamage(
        KiraAbilityData.VOID_PHANTASM_DAMAGE_MOD * abilityPower,
        abilityData.damageType,
        KiraAbilityData.VOID_PHANTASM_BASE_DAMAGE + KiraAbilityData.VOID_PHANTASM_DAMAGE_PER_LEVEL * (level - 1)
      )

      const voidPhantasmDuration = getDuration(KiraAbilityData.VOID_PHANTASM_DURATION)
      const voidPhantasmSilenceDuration = getControlDuration(KiraAbilityData.VOID_PHANTASM_DURATION_SILENCE)

      return {
        en:
          `Kira dashes forward, leaving behind a distorted afterimage. For ${voidPhantasmDuration}, she gains bonus movement speed. After the duration, she returns to the afterimage's position.` +
          `\n<br/><b>[Enhanced]: (Dynamic Afterimage)</b> Instead of Kira returning to the afterimage, the afterimage returns to Kira. The afterimage phases through enemies, dealing ${damage} and silencing them for ${voidPhantasmSilenceDuration}.`,
        br:
          `Kira avança rapidamente, deixando para trás uma imagem distorcida. Por ${voidPhantasmDuration}, ela ganha bônus de velocidade de movimento. Após a duração, retorna à posição da imagem.` +
          `\n<br/><b>[Aprimorado]: (Imagem Dinâmica)</b> Em vez de Kira retornar à imagem, a imagem retorna até Kira. A imagem atravessa inimigos, causando ${damage} e silenciando-os por ${voidPhantasmSilenceDuration}.`,
        ru:
          `Кира совершает рывок вперёд, оставляя позади искажённую копию. На ${voidPhantasmDuration} она получает бонус к скорости передвижения. По истечении времени возвращается к копии.` +
          `\n<br/><b>[Усиленная]: (Динамический фантом)</b> Вместо того чтобы Кира вернулась к копии, копия возвращается к Кире. Копия проходит через врагов, наносит ${damage} и накладывает немоту на ${voidPhantasmSilenceDuration}.`,
        cz:
          `Kira se vrhne vpřed a zanechá za sebou zkreslený obraz. Po dobu ${voidPhantasmDuration} získá bonus k rychlosti pohybu. Po uplynutí doby se vrátí na pozici obrazu.` +
          `\n<br/><b>[Vylepšené]: (Dynamický obraz)</b> Místo toho, aby se Kira vrátila k obrazu, se obraz vrátí ke Kiře. Obraz prochází nepřáteli, uděluje ${damage} a umlčuje je na ${voidPhantasmSilenceDuration}.`,
        zh:
          `奇菈向前衝刺，留下扭曲殘影。在 ${voidPhantasmDuration} 期間，她獲得額外移動速度。時間結束後，她會回到殘影位置。` +
          `\n<br/><b>[強化]：(動態殘影)</b> 奇菈不再回到殘影，而是殘影回到奇菈身邊。殘影會穿過敵人，造成 ${damage} 並沉默敵人 ${voidPhantasmSilenceDuration}。`,
        fr:
          `Kira fonce en avant en laissant derrière elle une image déformée. Pendant ${voidPhantasmDuration}, elle gagne un bonus de vitesse de déplacement. À la fin, elle revient à la position de l'image.` +
          `\n<br/><b>Amélioré : (Image dynamique)</b> Au lieu que Kira revienne à l'image, l'image revient vers Kira. L'image traverse les ennemis, inflige ${damage} et les silence pendant ${voidPhantasmSilenceDuration}.`,
        vi:
          `Kira lao về phía trước, để lại một ảo ảnh phía sau. Trong ${voidPhantasmDuration}, cô nhận thêm tốc độ di chuyển. Sau đó, cô quay lại vị trí của ảo ảnh.` +
          `\n<br/><b>Thức tỉnh: (Ảo ảnh động)</b> Thay vì Kira quay lại ảo ảnh, ảo ảnh quay về vị trí của Kira. Ảo ảnh đi xuyên qua kẻ địch, gây ${damage} và câm lặng chúng trong ${voidPhantasmSilenceDuration}.`,
        id:
          `Kira melesat ke depan, meninggalkan bayangan terdistorsi. Selama ${voidPhantasmDuration}, dia mendapatkan bonus kecepatan bergerak. Setelah durasi berakhir, dia kembali ke posisi bayangan.` +
          `\n<br/><b>Ditingkatkan: (Bayangan Dinamis)</b> Alih-alih Kira kembali ke bayangan, bayangan kembali ke posisi Kira. Bayangan menembus musuh, memberikan ${damage} dan membisukan mereka selama ${voidPhantasmSilenceDuration}.`,
      }
    }

    /** Hazel  */
    case SpellList.HAZEL_AUTOATTACK: {
      const baseDamage = getDamage(HazelAbilityData.AUTOATTACK_DAMAGE_MOD * damage)

      return {
        en: `Hazel strikes with her hammer, dealing ${baseDamage}.`,
        br: `Hazel golpeia seus inimigos com seu martelo, causando ${baseDamage}.`,
        ru: `Хейзел поражает врагов своим молотом, нанося ${baseDamage}.`,
        cz: `Hazel udre kladivem a způsobí ${baseDamage} normální poškození`,
        zh: `哈傑爾用她的鐵鎚打擊敵人，造成 ${baseDamage}。`,
        fr: `Hazel frappe avec son marteau, infligeant ${baseDamage}.`,
        vi: `Hazel đập với búa của mình, gây ${baseDamage}.`,
        id: `Hazel memukul dengan palu, memberikan ${baseDamage}.`,
      }
    }

    case SpellList.HAZEL_TRIUMPHANT_UPHEAVAL: {
      const damage = getDamage(
        HazelAbilityData.SHOCKWAVE_BONUS_DAMAGE_HP * health,
        abilityData.damageType,
        HazelAbilityData.SHOCKWAVE_BASE_DAMAGE,
        'Health'
      )
      const apDamage = getDamage(
        HazelAbilityData.SHOCKWAVE_AP_SCALING * abilityPower,
        abilityData.damageType,
        0,
        'AbilityPower'
      )
      const delay = getDuration(HazelAbilityData.SHOCKWAVE_DELAY)

      return {
        en: `Hazel begins to channel her energy. After ${delay}, she releases a shockwave which travels through the air, dealing ${damage} (Based on Hazel's max health) + ${apDamage} and pulling enemies towards Hazel.`,
        ru: `Хейзел начинает накапливать энергию. Через ${delay} она выпускает ударную волну, которая распространяется по воздуху, нанося ${damage} (Зависит от максимального здоровья Хейзел) + ${apDamage} и притягивая врагов к Хейзел.`,
        br: `Hazel começa a canalizar sua energia. Após ${delay}, ela libera uma onda de choque que viaja pelo ar, causando ${damage} (Baseado na vida máxima de Hazel) + ${apDamage} e puxando inimigos em direção a Hazel.`,
        fr: `Hazel commence à canaliser son énergie. Après ${delay}, elle libère une onde de choc qui traverse l'air, infligeant ${damage} (Basé sur la santé maximale de Hazel) + ${apDamage} et attirant les ennemis vers Hazel.`,
        zh: `Hazel开始引导她的能量。 ${delay}后，她释放出穿过空气的冲击波，造成${damage}（基于Hazel的最大生命值） + ${apDamage} 并将敌人拉向Hazel。`,
        cz: `Hazel začíná koncentrovat svou energii. Po ${delay} uvolní rázovou vlnu, která se šíří vzduchem a způsobuje ${damage} (Podle maximálního zdraví Hazel) + ${apDamage} a přitahuje nepřátele směrem k Hazel.`,
        vi: `Hazel bắt đầu tập trung năng lượng. Sau ${delay}, cô ấy giải phóng một làn sóng xung kích di chuyển qua không khí, gây ${damage} (Dựa trên lượng máu tối đa của Hazel) + ${apDamage} và kéo kẻ địch về phía Hazel.`,
        id: `Hazel mulai menyalurkan energinya. Setelah ${delay}, dia melepaskan gelombang kejut yang bergerak melalui udara, memberikan ${damage} (Berdasarkan kesehatan maksimal Hazel) + ${apDamage} dan menarik musuh ke arah Hazel.`,
      }
    }

    case SpellList.HAZEL_JUSTICES_WRATH: {
      const baseDamage = hasTalent(Shared.TALENT.RIGHT_UPGRADE, 0)
        ? HazelAbilityData.HEROIC_SLASH_BASE_DAMAGE + HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE
        : HazelAbilityData.HEROIC_SLASH_BASE_DAMAGE

      const duration = getStunDuration(
        hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
          ? HazelAbilityData.HEROIC_SLASH_KNOCKBACK_DURATION + HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION
          : HazelAbilityData.HEROIC_SLASH_KNOCKBACK_DURATION
      )

      const normalDamage = getDamage(
        HazelAbilityData.HEROIC_SLASH_DAMAGE_MOD * damage,
        abilityData.damageType,
        baseDamage + HazelAbilityData.HEROIC_SLASH_BASE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Hazel swings her hammer upwards, unleashing the wrath of justice, dealing ${normalDamage}, knocking enemies upwards, and stunning for ${duration}.`,
        br: `Hazel canaliza poder na ponta de seu martelo, causando ${normalDamage} e atordoando inimigos por ${duration}.`,
        ru: `Хейзел высвобождает гнев правосудия и взмахивает своим молотом, нанося ${normalDamage} и подбрасывая врагов на ${duration}.`,
        zh: `哈傑爾釋放正義之怒向上揮起鐵鎚，造成 ${normalDamage}並擊昇敵方使其暈眩 ${duration}。`,
        cz: `Hazel zamává svým kladivem nahoru, uvolňuje hněv spravedlnosti, způsobuje ${normalDamage} a odhazuje nepřátele nahoru a omráčí na ${duration}.`,
        fr: `Hazel balance son marteau vers le haut, libérant la colère de la justice, infligeant ${normalDamage}, projetant les ennemis vers le haut et les étourdissant pendant ${duration}.`,
        vi: `Hazel vung búa của mình lên trời, thức tỉnh cơn thịnh nộ của công lý, gây ${normalDamage}, đẩy lên kẻ địch và gây choáng trong ${duration}.`,
        id: `Hazel mengayunkan palunya ke atas, melepaskan kemarahan keadilan, memberikan ${normalDamage}, mendorong musuh ke atas, dan membius selama ${duration}.`,
      }
    }

    /** Arel  */
    case SpellList.AREL_AUTOATTACK: {
      const enhDamageVal = ArelAbilityData.AUTOATTACK_ENH_DAMAGE_MOD

      const baseDamage = getDamage(ArelAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const enhDamage = getDamage(enhDamageVal * damage)

      return {
        en: `Arel fires a bullet from his gun, dealing ${baseDamage}. \n
                \nPassive: Whenever Arel uses an ability, he will load another bullet in his gun. His next Basic Attack fires that additional bullet, dealing a bonus ${enhDamage}.`,
        br: `Arel dispara uma bala de sua arma causando ${baseDamage}.
                \n<b>[Passiva] (Atirador de Elite):</b> Sempre que Arel usar uma habilidade, carregará outra bala em sua arma, disparando tiros adicionais e causando ${enhDamage} adicional.`,
        ru: `Арел выпускает пулю, нанося ${baseDamage}. \n
                \n[ПАССИВНО]: Всякий раз, когда Арел использует способность, он заряжает еще одну пулю, делая дополнительный выстрел и нанося ${enhDamage}.`,
        cz: `Arel vystřelí kulku ze své zbraně a způsobí ${baseDamage} normální poškození \n
                \n[PASIVNÍ]: Kdykoli Arel použije schopnost, nabije arel další kulku ze zbraně a vystřelí další výstřel a způsobí další ${enhDamage} normální poškození`,
        zh: `艾瑞爾從他的槍發射一枚子彈，造成 ${baseDamage}。 \n
                \n被動技：每當艾瑞爾發動技能後，他會從他的槍裝填另一發子彈。他的下一次基本攻擊多射一發子彈擊造成額外 ${enhDamage}。`,
        fr: `Arel tire une balle de son pistolet, infligeant ${baseDamage}. \n
                \nPassif: Chaque fois qu'Arel utilise une compétence, il charge une autre balle dans son pistolet. Sa prochaine attaque de base tire cette balle supplémentaire, infligeant un bonus de ${enhDamage}.`,
        vi: `Arel bắn một viên đạn từ súng của mình, gây ${baseDamage}. \n
                \nNội tại: Mỗi khi Arel sử dụng một kỹ năng, anh sẽ nạp một viên đạn khác vào súng của mình. Đòn đánh thường tiếp theo của anh sẽ bắn thêm viên đạn đó, gây thêm ${enhDamage}.`,
        id: `Arel menembakkan peluru dari senjatanya, memberikan ${baseDamage}. \n
                \nPassive: Setiap kali Arel menggunakan kemampuan, ia akan memuat peluru lain di senjatanya. Serangan Dasar berikutnya menembakkan peluru tambahan itu, memberikan bonus ${enhDamage}.`,
      }
    }

    case SpellList.AREL_TUMBLE: {
      return {
        en: 'Arel rolls forward a short distance.',
        br: 'Arel da um salto para frente, adiciona a passiva (Atirador de Elite).',
        ru: 'Арел совершает кувырок вперёд.',
        cz: 'Arel se převalí dopředu',
        zh: '艾瑞爾短距離向前翻滾。',
        fr: "Arel roule vers l'avant.",
        vi: 'Arel nhào lộn về phía trước.',
        id: 'Arel berguling ke depan.',
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

      const triggerStun = getStunDuration(
        hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
          ? ArelAbilityData.TICKING_BOMB_STUN_DURATION + ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN
          : ArelAbilityData.TICKING_BOMB_STUN_DURATION
      )

      const bombDuration = getDuration(ArelAbilityData.TICKING_BOMB_DURATION)
      const slowDuration = getMovementSpeedDuration(ArelAbilityData.TICKING_BOMB_SLOW_DURATION)

      return {
        en: `Arel throws a ticking bomb, attaching itself to enemies that get close. After ${bombDuration}, the bomb detonates, dealing ${baseDamage} in an area.
                \nShooting an attached bomb with 3 bullets detonates it early, dealing ${triggerDamage}, reducing Movement Speed for ${slowDuration}, and stunning for ${triggerStun}.`,
        br: `Arel joga uma bomba para frente, se a bomba entrar em contato com um inimigo, a bomba se liga a ele e explodirá em ${bombDuration}, causando ${baseDamage} para todos os inimigos ao redor.
                \nSe a bomba estiver presa a um inimigo e você atirar nele três vezes, a bomba explodirá causando ${triggerDamage} e atordoará o portador por ${slowDuration}.`,
        ru: `Арел бросает бомбу, и если она соприкасается с врагом, бомба прикрепляется к нему и взрывается через ${bombDuration}, нанося ${baseDamage} всем ближайшим врагам.
                \nЕсли бомба прикреплена к врагу, и Арел выстрелит в него три раза, бомба взорвется преждевременно, нанеся  ${triggerDamage}, уменьшая скорость передвижения цели на ${slowDuration}, а также оглушая на ${triggerStun}.`,
        cz: `Arel hodí bombu, pokud se bomba dostane do kontaktu s nepřítelem, bomba se k němu přichytí a exploduje za ${bombDuration} a způsobí ${baseDamage} normální poškození všem okolním nepřátelům.
                \nPokud je bomba připevněna k nepříteli a vy trafite nepřítele třikrát, bomba exploduje a způsobí ${triggerDamage} normální poškození a omráči nepřítele na ${slowDuration}`,
        zh: `艾瑞爾投擲一枚定時炸彈，如果炸彈接觸到敵方，炸彈會附著於該敵方並於 ${bombDuration}後爆炸，造成周圍所有敵方 ${baseDamage}。
                \n射擊附著於敵方身上炸彈三發子彈時，炸彈會提早爆炸，造成 ${triggerDamage}並減緩他們速度 ${slowDuration}，然後使其暈眩 ${slowDuration}。`,
        fr: `Arel lance une bombe à retardement, qui se fixe aux ennemis qui s'en approchent. Après ${bombDuration}, la bombe explose, infligeant ${baseDamage} dans une zone.
                \nTirer sur une bombe attachée avec 3 balles déclenche la bombe prématurément, infligeant ${triggerDamage}, réduisant leur Vitesse de déplacement pendant ${slowDuration}, et les étourdissant pendant ${triggerStun}.`,
        vi: `Arel ném một quả bom hẹn giờ, gắn vào kẻ địch tiếp cận. Sau ${bombDuration}, quả bom phát nổ, gây ${baseDamage} trong một khu vực.
                \nBắn vào quả bom đã gắn với 3 viên đạn kích hoạt quả bom nổ sớm, gây ${triggerDamage}, giảm Tốc độ Di chuyển của kẻ địch trong ${slowDuration} và gây choáng trong ${triggerStun}.`,
        id: `Arel melontarkan bom berdetak, menempel pada musuh yang mendekat. Setelah ${bombDuration}, bom meledak, memberikan ${baseDamage} dalam area.
                \nMenembak bom yang menempel dengan 3 peluru meledakkan bom lebih awal, memberikan ${triggerDamage}, mengurangi Kecepatan Gerak mereka selama ${slowDuration}, dan membius selama ${triggerStun}.`,
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

      const duration = getDuration(AlvarAbilityData.MARK_DURATION)

      return {
        en: `Alvar attacks with a punch, dealing ${baseDamage}. \n
                \nPassive: Alvar's Basic Attacks apply a stack of divine impact on enemy heroes, which last for ${duration}. At three stacks, the enemy receives a Divine Mark, dealing ${markDamage}.`,
        br: `Alvar acerta com seu punho todos os alvos à sua frente causando ${baseDamage}. \n
                \n<b>[Passiva] (Punhos do detentor):</b> Cada ataque de Alvar aplica no personagem inimigo um debuff que dura ${duration}.\n O terceiro ataque de debuff aplicará uma marca que causa ${markDamage}.`,
        ru: `Алвар бьёт кулаками перед собой, нанося ${baseDamage}. \n
                \n[ПАССИВНО]: Каждое успешное попадание атакой накладывает на противника ослабление на ${duration}. Третий заряд ослабления активирует на цели метку, наносящую ${markDamage}.`,
        cz: `Alvar zasáhne pěstí všechny cíle před sebou a způsobí ${baseDamage}. \n
                \n[PASIVNÍ]: Každý úspěšný zásah Alvara aplikuje debuff na cíl po dobu ${duration}. Třetí stack applikuje značku, která způsobí ${markDamage} normální poškození.`,
        zh: `阿爾瓦用他的拳頭攻擊，造成 ${baseDamage}。\n
                \n被動：阿爾瓦的基本攻擊會給敵方英雄疊加神聖衝擊，持續時間為 ${duration}。第三次疊加時，敵方產生神聖印記，造成 ${markDamage}。`,
        fr: `Alvar attaque avec un coup de poing, infligeant ${baseDamage}. \n
                \nPassif: Les attaques de base d'Alvar appliquent une pile d'impact divin sur les héros ennemis, qui dure ${duration}. À trois piles, l'ennemi reçoit une Marque divine, infligeant ${markDamage}.`,
        vi: `Alvar dùng tay đấm, gây ${baseDamage}. \n
                \nNội tại: Các đòn đánh thường của Alvar cộng dồn Thần Kích lên các kẻ địch, kéo dài trong ${duration}. Tại lần thứ ba cộng dồn, kẻ địch bị nhận Thần Ấn, gây ${markDamage}.`,
        id: `Alvar menyerang dengan pukulan, memberikan ${baseDamage}. \n
                \nPassive: Serangan Dasar Alvar memberikan tumpukan dampak ilahi pada pahlawan musuh, yang berlangsung selama ${duration}. Pada tiga tumpukan, musuh menerima Tanda Ilahi, memberikan ${markDamage}.`,
      }
    }

    case SpellList.ALVAR_FURIOUS_KICK: {
      const baseDamage = getDamage(AlvarAbilityData.FURIOUS_KICK_DAMAGE_MOD * damage)
      const duration = getStunDuration(
        hasTalent(Shared.TALENT.LEFT_UPGRADE, 1)
          ? AlvarAbilityData.FURIOUS_KICK_STUN_DURATION + AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION
          : AlvarAbilityData.FURIOUS_KICK_STUN_DURATION
      )
      const buffDuration = getDuration(AlvarAbilityData.FURIOUS_KICK_BUFF_DURATION)
      const bonusMovementSpeed = getBuffValue(AlvarAbilityData.FURIOUS_KICK_BONUS_MOVE_SPEED)

      return {
        en: `Alvar launches enemies backward with a powerful kick, dealing ${baseDamage} and stunning for ${duration}. \n\nApplies a stack of Divine Impact to all enemy heroes hit by Furious Kick.\n\nIn addition, Alvar grants himself and all nearby allies ${bonusMovementSpeed} bonus Movement Speed for ${buffDuration}`,
        br: `Alvar lança seus inimigos para trás com um poderoso chute, causando ${baseDamage} e atordoando por ${duration}. \n\n
            Aplica um debuff em todos os personagens inimigos atingidos pelo chute furioso.\n
            Além disso, Alvar concede a si mesmo e a todos os seus aliados próximos ${bonusMovementSpeed} de velocidade de movimento por ${buffDuration}`,
        ru: `Алвар отталкивает врагов за спину, нанося ${baseDamage} и оглушая на ${duration}. \n\n
            Накладывает 1 заряд ослабления на всех вражеских героев, попавших под удар.\n
            Кроме того, Алвар даёт себе и всем своим союзникам ${bonusMovementSpeed} скорости передвижения на ${buffDuration}`,
        cz: `Alvar odhodí nepřátele silným kopem, způsobí ${baseDamage} normální poškození a omráčí na ${duration}. \n\n
            Aplikuje debuff na všechny nepřátelské hrdiny zasažené Furious Kick.\n
            Kromě toho Alvar poskytuje sám sobě a všem svým blízkým spojencům ${bonusMovementSpeed} bonusové rychlosti pohybu na ${buffDuration}`,
        zh: `阿爾瓦用一記強力的踢擊將敵人向後踢飛，造成 ${baseDamage}並暈眩 ${duration}。\n\n
            被狂怒踢擊擊中的敵方英雄將會疊加一次神聖衝擊。\n
            此外阿爾瓦會給予自己和所有附近的盟友 ${bonusMovementSpeed}點移動速度加成，持續 ${buffDuration}。`,
        fr: `Alvar lance les ennemis en arrière avec un puissant coup de pied, infligeant ${baseDamage} et étourdissant pendant ${duration}. \n\n
            Applique une pile d'impact divin sur tous les héros ennemis touchés par Furious Kick.\n
            De plus, Alvar accorde à lui-même et à tous ses alliés proches ${bonusMovementSpeed} de vitesse de mouvement bonus pendant ${buffDuration}`,
        vi: `Alvar làm kẻ địch bay ngược với một cú đá mạnh mẽ, gây ${baseDamage} và gây choáng trong ${duration}. \n\n
            Áp dụng một đòn cộng dồn Thần Kích trên tất cả anh hùng địch bị đá mạnh.\n
            Ngoài ra, Alvar ban tặng bản thân và tất cả đồng minh ở gần ${bonusMovementSpeed} tốc độ di chuyển trong ${buffDuration}`,
        id: `Alvar meluncurkan musuh ke belakang dengan tendangan kuat, memberikan ${baseDamage} dan membius selama ${duration}. \n\n
            Mengaplikasikan tumpukan dampak ilahi pada semua pahlawan musuh yang terkena Furious Kick.\n
            Selain itu Alvar memberikan dirinya dan semua sekutu terdekatnya ${bonusMovementSpeed} bonus kecepatan gerak selama ${buffDuration}`,
      }
    }

    case SpellList.ALVAR_HEAVENLY_KICK: {
      const baseDamage = getDamage(AlvarAbilityData.HEAVENLY_KICK_DAMAGE_MOD * damage)
      const slowDuration = getMovementSpeedDuration(AlvarAbilityData.HEAVENLY_KICK_SLOW_DURATION)

      return {
        en: `Alvar teleports to the closest enemy hero with Divine Mark, dealing ${baseDamage}, removing Divine Mark, and reducing movement speed for ${slowDuration}. If there are no nearby enemies with Divine Mark, this ability cannot be used.`,
        br: `Alvar se teletransporta para o herói inimigo mais próximo com Marca Divina, causando ${baseDamage}, removendo a Marca Divina e reduzindo a velocidade de movimento por ${slowDuration}. Se não houver inimigos próximos com Marca Divina, esta habilidade não pode ser usada.`,
        ru: `Алвар телепортируется к ближайшему вражескому герою с Божественной Меткой, нанося ${baseDamage}, удаляя Божественную Метку и снижая скорость передвижения на ${slowDuration}. Если рядом нет врагов с Божественной Меткой, это умение нельзя использовать.`,
        cz: `Alvar se teleportuje k nejbližšímu nepřátelskému hrdinovi s Božskou značkou, způsobí ${baseDamage}, odstraní Božskou značku a sníží rychlost pohybu na ${slowDuration}. Pokud poblíž nejsou žádní nepřátelé s Božskou značkou, tuto schopnost nelze použít.`,
        zh: `阿爾瓦瞬移到最近擁有神聖印記的敵方英雄身旁，造成 ${baseDamage}，移除神聖印記，並降低移動速度 ${slowDuration}。如果附近沒有擁有神聖印記的敵人，此技能無法使用。`,
        fr: `Alvar se téléporte vers le héros ennemi le plus proche avec Marque divine, inflige ${baseDamage}, supprime la Marque divine et réduit la vitesse de déplacement pendant ${slowDuration}. S'il n'y a aucun ennemi proche avec Marque divine, cette capacité ne peut pas être utilisée.`,
        vi: `Alvar dịch chuyển đến tướng địch gần nhất có Divine Mark, gây ${baseDamage}, loại bỏ Divine Mark và giảm tốc độ di chuyển trong ${slowDuration}. Nếu không có kẻ địch nào gần đó có Divine Mark, kỹ năng này không thể sử dụng.`,
        id: `Alvar berteleportasi ke hero musuh terdekat dengan Divine Mark, memberikan ${baseDamage}, menghapus Divine Mark, dan mengurangi kecepatan gerak selama ${slowDuration}. Jika tidak ada musuh di dekat dengan Divine Mark, kemampuan ini tidak dapat digunakan.`,
      }
    }

    /** Foxy  */
    case SpellList.FOXY_ATTACK: {
      const baseDamage = getDamage(FoxyAbilityData.AUTOATTACK_DAMAGE_MOD * damage)

      return {
        en: `Foxy fires a bullet from his gun, dealing ${baseDamage}.`,
        ru: `Фокси выпускает пулю, нанося ${baseDamage}.`,
        cz: `Foxy vystřelí kulku ze své zbraně a způsobí ${baseDamage}.`,
        br: `Foxy dispara uma bala de sua arma, causando ${baseDamage}.`,
        zh: `弗克西從他的槍射出一發子彈，造成 ${baseDamage}。`,
        fr: `Foxy tire une balle de son arme, infligeant ${baseDamage}.`,
        vi: `Foxy bắn một viên đạn từ súng của mình, gây ${baseDamage}.`,
        id: `Foxy menembakkan peluru dari senjatanya, memberikan ${baseDamage}.`,
      }
    }

    case SpellList.FOXY_RAPID_FIRE: {
      let mod = 1
      if (hasTalent(Shared.TALENT.RIGHT_UPGRADE, 1)) {
        mod += FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE
      }
      const baseDamage = getDamage(FoxyAbilityData.RAPID_FIRE_DAMAGE_MULTIPLIER * damage * mod)

      return {
        en: `Foxy channels his weapon, lowering his movement speed and rapidly firing a barrage of bullets. Each bullet deals ${baseDamage}. <br/><b>Rapid Fire attack rate scales with Attack Speed.</b>`,
        ru: `Фокси подготавливает своё оружие и быстро выпускает шквал пуль, нанося ${baseDamage}. <br/> <i> Чем выше Скорость атаки, тем больше пуль будет выпущено. </i>`,
        cz: `Foxy nasměruje svou zbraň a rychle vypálí příval kulek, které způsobí ${baseDamage} fyzické poškození. <br/> <i> Rýchlost útoku zrychly tento effekt. Pohyb zastaví channeling </i>`,
        br: `Foxy canaliza sua arma, diminuindo sua velocidade de movimento e disparando rapidamente uma rajada de balas. Cada bala causa ${baseDamage}. <br/> <i> A taxa de ataque de Fogo Rápido escala com a Velocidade de Ataque. </i>`,
        zh: `弗克西開通他的武器，降低他的移動速度並快速地發射一連串子彈。每發子彈造成 ${baseDamage}。 <br/> <i> 極速射擊的射擊速率與攻擊速度相關。 </i>`,
        fr: `Foxy canalise son arme, réduisant sa vitesse de déplacement et tirant rapidement une rafale de balles. Chaque balle inflige ${baseDamage}. <br/> <i> Le taux de tir de Feu Rapide évolue avec la Vitesse d'Attaque. </i>`,
        vi: `Foxy nạp đạn, giảm tốc độ di chuyển và bắn liên thanh. Mỗi viên đạn gây ${baseDamage}. <br/> <i> Tốc độ bắn của bắn tỉ lệ thuận với Tốc độ Đánh. </i>`,
        id: `Foxy mengarahkan senjatanya, menurunkan kecepatan geraknya dan dengan cepat menembakkan serangkaian peluru. Setiap peluru memberikan ${baseDamage}. <br/> <i> Laju tembakan Rapid Fire berkembang dengan Kecepatan Serangan. </i>`,
      }
    }

    case SpellList.FOXY_EXPLOSIVE_GRENADE: {
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
          'Knockback is based on the distance between the enemy unit and the grenade.\n' +
          '<b>Second cast: </b>Detonates the grenade early.',
        ru:
          `<b>Первое применение: </b>Фокси бросает гранату, которая взрывается при соприкосновении с землёй. Если скорость падения была слишком высока, граната отскочит от поверхности. При взрыве она наносит ${baseDamage} + ${apDamage}. ` +
          'Когда граната взрывается, она отбрасывает ближайших врагов. Сила отбрасывания зависит от того, как близко находился враг к центру взрыва.\n' +
          '<b>Повторное применение: </b>Граната взрывается преждевременно.',
        cz:
          `Foxy hodí granát, který exploduje, když se určitou rychlostí dotkne země. Pokud je rychlost pádu příliš vysoká, odskočí. Při výbuchu způsobí ${baseDamage} + ${apDamage}. \n` +
          'Když granát exploduje, srazí jednotky. Zpětný ráz je založen na vzdálenosti mezi jednotkou a granátem.',
        br:
          `<b>Primeira conjuração: </b>Foxy lança uma granada que detona ao impactar o chão, causando ${baseDamage} + ${apDamage} em uma área e empurrando unidades. Se a velocidade de queda da granada for rápida o suficiente, ela quicará uma vez antes de detonar. ` +
          'O empurrão é baseado na distância entre a unidade inimiga e a granada.\n' +
          '<b>Segunda conjuração: </b>Detone a granada cedo.',
        zh:
          `<b>第一次施放: </b>弗克西丟出一枚手榴彈，當手榴彈碰到地面時爆炸，造成範圍內 ${baseDamage} + ${apDamage}並擊退單位。如果手榴彈的下落速度足夠快，它將在爆炸前彈跳一次。 ` +
          '擊退幅度基於敵方單位與手榴彈之間的距離。\n' +
          '<b>第二次施放: </b>提前引爆手榴彈。',
        fr:
          `<b>Première utilisation: </b>Foxy lance une grenade qui explose au contact du sol, infligeant ${baseDamage} + ${apDamage} dans une zone et repoussant les unités. Si la vitesse de chute de la grenade est suffisamment rapide, elle rebondira une fois avant de détoner. ` +
          "Le repoussement est basé sur la distance entre l'unité ennemie et la grenade.\n" +
          '<b>Deuxième utilisation: </b>Détoner la grenade tôt.',
        vi:
          `<b>Lần đầu: </b>Foxy ném một quả lựu đạn nổ khi chạm đất, gây ${baseDamage} + ${apDamage} trong một khu vực và đẩy lùi các đơn vị. Nếu tốc độ rơi của lựu đạn đủ nhanh, nó sẽ nảy một lần trước khi nổ. ` +
          'Đẩy lùi dựa vào khoảng cách giữa đơn vị địch và lựu đạn.\n' +
          '<b>Lần thứ hai: </b>Kích hoạt lựu đạn sớm.',
        id:
          `<b>Pertama: </b>Foxy melemparkan granat yang meledak saat menyentuh tanah, memberikan ${baseDamage} + ${apDamage} dalam area dan mendorong unit. Jika kecepatan jatuh granat cukup cepat, granat akan memantul sekali sebelum meledak. ` +
          'Dorongan didasarkan pada jarak antara unit musuh dan granat.\n' +
          '<b>Kedua: </b>Meledakkan granat lebih awal.',
      }
    }

    case SpellList.MAGDALENE_ATTACK: {
      const baseDamage = getDamage(MagdaleneAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const maxSouls =
        MagdaleneAbilityData.MAGDALENE_PASSIVE_MAXIMUM_STACKS +
        MagdaleneAbilityData.MAGDALENE_PASSIVE_MAXIMUM_STACKS_PER_LEVEL * level
      const maxSoulsValue = getBuffValue(maxSouls)
      const bonusAbilityPowerPerSoul = getBuffValue(1)
      const soulDamage = getDamage(
        0,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.MAGDALENE_PASSIVE_DAMAGE_PER_STACK_ON_DEATH
      )

      return {
        en: `Magdalene sends out a burst of energy from her dark scythe, dealing ${baseDamage}.
        \n\nPassive: Magdalene steals an enemy's soul after killing an enemy hero or minion. Magdalene can store up to ${maxSoulsValue} souls. Each soul increases her Ability Power by ${bonusAbilityPowerPerSoul}.
        \nWhen Magdalene dies, she will release all souls in a small radius and deal ${soulDamage} per soul to all enemies and apply fear for a short duration.`,
        ru: `Магдалина испускает сгусток энергии, нанося ${baseDamage}.
        \n\n[ПАССИВНО]: Магдалина крадёт душу врага после убийства вражеского героя или миньона. Она может хранить до ${maxSoulsValue} душ. Каждая душа увеличивает её Силу умений на ${bonusAbilityPowerPerSoul}.
        \nКогда Магдалина умирает, она высвобождает все души, нанося ${soulDamage} за каждую душу всем врагам вокруг себя, накладывая страх на короткое время.`,
        cz: `Magdalena vysílá výbuch energie ze své temné kose, způsobující ${baseDamage}.
        \n\nPasivně: Magdalena ukradne duši nepřítele po zabití nepřátelského hrdiny nebo minionu. Magdalena může uchovávat až ${maxSoulsValue} duší. Každá duše zvyšuje její Sílu kouzel o ${bonusAbilityPowerPerSoul}.
        \nKdyž Magdalena zemře, uvolní všechny duše v krátké oblasti a způsobí ${soulDamage} za duši všem nepřátelům a na krátkou dobu je vyděsí.`,
        br: `Magdalene envia uma explosão de energia de sua foice sombria, causando ${baseDamage}.
        \n\nPassivo: Magdalene rouba uma alma inimiga após matar um herói ou um súdito inimigo. Magdalene pode armazenar até ${maxSoulsValue} almas. Cada alma aumenta seu Poder de Habilidade em ${bonusAbilityPowerPerSoul}.
        \nQuando Magdalene morre, ela libera todas as almas em uma pequena área e causa ${soulDamage} por alma a todos os inimigos e os assusta por um curto período.`,
        zh: `瑪格達琳從她的黑暗鐮刀發射能量爆破，造成 ${baseDamage}。
        \n\n被動：瑪格達琳殺死敵方英雄或小兵後偷取敵人的靈魂。瑪格達琳最多可以儲存 ${maxSoulsValue}個靈魂。每個靈魂都會增加她的技能威力 ${bonusAbilityPowerPerSoul}點。
        \n當瑪格達琳死亡時，她會快速釋放所有靈魂，並對所有敵人造成 ${soulDamage}點傷害並使他們恐懼一小段時間。`,
        fr: `Magdalene envoie une explosion d'énergie de sa faux sombre, infligeant ${baseDamage}.
        \n\nPassif: Magdalene vole une âme ennemie après avoir tué un héros ennemi ou un sbire. Magdalene peut stocker jusqu'à ${maxSoulsValue} âmes. Chaque âme augmente sa Puissance des compétences de ${bonusAbilityPowerPerSoul}.
        \nLorsque Magdalene meurt, elle libère toutes les âmes dans une petite zone et inflige ${soulDamage} par âme à tous les ennemis et les effraie pendant une courte durée.`,
        vi: `Magdalene giải phóng một luồng năng lượng từ cây liềm hắc ám của mình, gây ${baseDamage}.
        \n\nNội tại: Magdalene đánh cắp linh hồn sau khi giết một kẻ địch hoặc lính địch. Magdalene có thể lưu trữ tối đa ${maxSoulsValue} linh hồn. Mỗi linh hồn tăng Sức mạnh Phép Thuật của cô lên ${bonusAbilityPowerPerSoul}.
        \nKhi Magdalene chết, cô sẽ phóng tất cả các linh hồn trong một khu vực nhỏ và gây ${soulDamage} cho tất cả kẻ địch và làm họ sợ hãi trong một thời gian ngắn.`,
        id: `Magdalene mengirim ledakan energi dari sabit gelapnya, memberikan ${baseDamage}.
        \n\nPasif: Magdalene mencuri jiwa musuh setelah membunuh pahlawan musuh atau minion. Magdalene dapat menyimpan hingga ${maxSoulsValue} jiwa. Setiap jiwa meningkatkan Kemampuan Sihirnya sebesar ${bonusAbilityPowerPerSoul}.
        \nKetika Magdalene mati, dia akan melepaskan semua jiwa dalam area kecil dan memberikan ${soulDamage} per jiwa kepada semua musuh dan membuat mereka takut untuk waktu yang singkat.`,
      }
    }

    case SpellList.MAGDALENE_SCREAM_OF_PAIN: {
      const damage = getDamage(
        MagdaleneAbilityData.SCREAM_OF_PAIN_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.SCREAM_OF_PAIN_BASE_DAMAGE +
          MagdaleneAbilityData.SCREAM_OF_PAIN_DAMAGE_PER_LEVEL * (level - 1)
      )
      const silenceDuration = getControlDuration(MagdaleneAbilityData.SCREAM_OF_PAIN_SILENCE_DURATION)
      const pushbackDuration = getControlDuration(MagdaleneAbilityData.SCREAM_OF_PAIN_PUSHBACK_DURATION)

      return {
        en: `Magdalene sends out an ear-splitting scream, dealing ${damage} to enemies in front of her, knocking them back, and silencing them for ${silenceDuration}. \nConsumes Haunted Ghost if the target is afflicted, deals additional damage and applies fear to the target for ${pushbackDuration}.`,
        ru: `Магдалина издаёт пронзительный крик, нанося ${damage} врагам перед собой, отбрасывая их назад и накладывая немоту на ${silenceDuration}. \nЕсли цель находится под эффектом Одержимого призрака, Магдалина поглощает этот эффект и наносит дополнительный урон, также накладывая страх на цель на ${pushbackDuration}.`,
        br: `Magdalene solta um grito estridente, causando ${damage} nos inimigos à sua frente, empurrando-os para trás e silenciando-os por ${silenceDuration}. \nConsumir Fantasmas Assombrados se o alvo for afetado, causa dano adicional e medo no alvo por ${pushbackDuration}.`,
        fr: `Magdalene lance un cri déchirant, infligeant ${damage} aux ennemis devant elle, les repoussant et les réduisant au silence pendant ${silenceDuration}. \nConsomme les Fantômes hantés si la cible est affectée, inflige des dégâts supplémentaires et effraie la cible pendant ${pushbackDuration}.`,
        zh: `瑪格達琳娜發出刺耳的尖叫，對前方敵人造成 ${damage}，將他們擊退，並使其沉默 ${silenceDuration}。 \n如果目標受到影魂影響，則消耗作祟幽魂，造成額外傷害並使目標恐懼 ${pushbackDuration}。`,
        cz: `Magdalena vysílá pronikavý křik, způsobující ${damage} nepřátelům před sebou, odhazujíc je zpět a němě je na ${silenceDuration}. \nPokud je cíl postižen strašidelným duchem, Magdalena ho pohltí, způsobí dodatečné poškození a vyděsí ho na ${pushbackDuration}.`,
        vi: `Magdalene phát ra một tiếng la hét chói tai, gây ${damage} cho kẻ địch phía trước, đẩy họ lùi và làm câm lặng họ trong ${silenceDuration}. \nTiêu thụ U Hồn Ám Ảnh nếu mục tiêu bị ảnh hưởng, gây thêm sát thương và làm sợ mục tiêu trong ${pushbackDuration}.`,
        id: `Magdalene mengirimkan teriakan yang menusuk telinga, memberikan ${damage} kerusakan magis kepada musuh di depannya, mendorong mereka ke belakang, dan membuat mereka diam selama ${silenceDuration}. \nMengonsumsi Hantu Tertindas jika target terpengaruh, memberikan kerusakan tambahan dan membuat target takut selama ${pushbackDuration}.`,
      }
    }

    case SpellList.MAGDALENE_HAUNTED_GHOST: {
      const damage = getDamage(
        MagdaleneAbilityData.HAUNTED_GHOST_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        MagdaleneAbilityData.HAUNTED_GHOST_DAMAGE_PER_SEC_BASE +
          MagdaleneAbilityData.HAUNTED_GHOST_DAMAGE_PER_SEC_PER_LEVEL * (level - 1)
      )
      const hauntedDuration = getDuration(MagdaleneAbilityData.HAUNTED_GHOST_DURATION)

      return {
        en: `Magdalene sends a haunted ghost in the direction she is facing. If it hits an enemy, it will afflict the opponent with a haunted ghost, dealing ${damage} per second to an afflicted enemy. The ghost lasts for ${hauntedDuration}.
        \nWhen the haunted ghost debuff expires or is consumed by Scream of Pain, it returns back to Magdalene and resets the cooldown of Haunted Ghost.`,
        ru: `Магдалина посылает призрака вперёд. При столкновении с врагом он вселяется в него, накладывая эффект Одержимый призрак, наносящий ${damage} в секунду. Одержимый призрак длится ${hauntedDuration}.
        \n Когда время действия эффекта Одержимый призрак истекает или используется Загробный вопль, он возвращается к Магдалине, сбрасывая перезарядку этой способности.`,
        br: `Magdalene envia um fantasma assombrado em uma direção, quando atinge o inimigo, ele inflige um fantasma assombrado, causando ${damage} por segundo a um inimigo afetado. O fantasma dura por ${hauntedDuration}.
        \n Quando o debuff do fantasma assombrado expira ou é consumido por Grito de Dor, ele retorna a Magdalene e reseta o tempo de recarga do Fantasma Assombrado.`,
        fr: `Magdalene envoie un fantôme hanté dans une direction, lorsqu'il touche l'ennemi, il inflige un fantôme hanté, infligeant ${damage} par seconde à un ennemi affecté. Le fantôme dure ${hauntedDuration}.
        \n Lorsque le débuff du fantôme hanté expire ou est consommé par le Cri de Douleur, il retourne à Magdalene et réinitialise le temps de recharge du Fantôme hanté.`,
        zh: `瑪格達琳朝一個方向發送一個鬼魂。當它擊中敵人时，它會引發鬼魂出沒，對受影響敵人造成 ${damage}。鬼魂持續時間 ${hauntedDuration}。
        \n 當鬼魂消失或被痛苦尖叫消耗時，它會返回到瑪格達琳身上並重置鬼魂冷卻時間。`,
        cz: `Magdalena pošle v dána směru strašidlo, které když zasáhne nepřítele, způsobí mu strašidelného ducha, který způsobuje ${damage} za sekundu. Duch trvá ${hauntedDuration}.
        \n Když debuff strašidelného ducha vyprší nebo je spotřebován Křikem bolesti, vrátí se zpět k Magdalene a resetuje dobu do nového použití.`,
        vi: `Magdalene gửi một U Hồn Ám Ảnh theo hướng của cô, khi nó trúng kẻ địch, nó sẽ nhập vào kẻ địch, gây ${damage} mỗi giây cho kẻ địch bị ma nhập. Hồn ma kéo dài trong ${hauntedDuration}.
        \n Khi hiệu lực ủa U Hồn Ám Ảnh hết hoặc tiêu thụ bởi Khổ Thống Chi Khiếu, nó sẽ trở lại với Magdalene và đặt lại thời gian U Hồn Ám Ảnh.`,
        id: `Magdalene mengirimkan hantu yang ditakuti ke arah, ketika mengenai musuh, itu akan memberikan hantu yang ditakuti, memberikan ${damage} kerusakan magis per detik ke musuh yang terkena. Hantu berlangsung selama ${hauntedDuration}.
        \n Ketika debuff hantu yang ditakuti berakhir atau dikonsumsi oleh Teriakan Sakit, itu kembali ke Magdalene dan mereset waktu dingin Hantu Tertindas.`,
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
      const bonusMovementSpeed = getBuffValue(bonusMoveSpeed)
      const bonusArmorValue = getBuffValue(bonusArmor)

      return {
        en: `Prim throws 3 sharp pieces of iron that deal ${baseDamage} when hitting an enemy unit.\n\nPassive: When Prim's Ball is attached to Prim, she gains ${bonusMovementSpeed} bonus movement speed and ${bonusArmorValue} bonus armor.`,
        ru: `Прим бросает 3 острых осколка железа, которые наносят ${baseDamage} при попадании по врагу.\n\nПассивно: Когда шар Прим прикреплён к ней, она получает ${bonusMovementSpeed} бонуса к скорости передвижения и ${bonusArmorValue} бонуса к броне.`,
        cz: `Prim hodí 3 ostré kusy železa, které způsobí ${baseDamage} při zásahu nepřátelské jednotky.\n\nPasivně: Když je Primin míč připojen k Prim, získá ${bonusMovementSpeed} bonus k rychlosti pohybu a ${bonusArmorValue} bonus k brnění.`,
        br: `Prim lança 3 pedaços afiados de ferro que causam ${baseDamage} ao atingir uma unidade inimiga.\n\nPassivo: Quando a Bola de Prim está anexada a Prim, ela ganha ${bonusMovementSpeed} de bônus de velocidade de movimento e ${bonusArmorValue} de bônus de armadura.`,
        zh: `普琳姆丟出3塊銳利鐵片，命中敵方單位時造成 ${baseDamage}。\n\n被動：當普琳姆的球附著在她身上時，她獲得 ${bonusMovementSpeed} 額外移動速度和 ${bonusArmorValue} 額外護甲。`,
        fr: `Prim lance 3 morceaux de fer tranchants qui infligent ${baseDamage} lorsqu'ils touchent une unité ennemie.\n\nPassif : Lorsque la balle de Prim est attachée à Prim, elle gagne ${bonusMovementSpeed} de bonus de vitesse de déplacement et ${bonusArmorValue} de bonus d'armure.`,
        vi: `Prim ném ra 3 mảnh sắt sắc nhọn gây ${baseDamage} khi trúng kẻ địch.\n\nNội tại: Khi Quả Cầu của Prim gắn vào cô ấy, cô ấy nhận ${bonusMovementSpeed} thêm tốc độ di chuyển và ${bonusArmorValue} thêm giáp.`,
        id: `Prim melemparkan 3 pecahan besi tajam yang memberikan ${baseDamage} saat mengenai unit musuh.\n\nPasif: Saat Bola Prim terpasang pada Prim, dia mendapatkan ${bonusMovementSpeed} bonus kecepatan bergerak dan ${bonusArmorValue} bonus armor.`,
      }
    }

    case SpellList.PRIM_COMMAND_ATTACK: {
      const damage = getDamage(
        PrimAbilityData.COMMAND_ATTACK_AP_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        PrimAbilityData.COMMAND_ATTACK_BASE_DAMAGE + PrimAbilityData.COMMAND_ATTACK_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Prim commands the Ball to move forward in Prim's direction. When stopped, it deals ${damage} to all nearby enemies and reduces their Movement Speed and Attack Speed for a short duration.
          \nIf Prim's Ball is detached, she will command the Ball to return. The ball deals damage at the location where it is detached.
          \nThe new cooldown starts when the Ball is returned to Prim unless she picks up the ball.
          \nCan be re-casted to stop the Ball earlier in its trajectory.`,
        ru: `Прим приказывает шару двигаться вперёд в направлении Прим. При остановке наносит ${damage} всем близлежащим врагам, замедляя их скорость передвижения и атаки на короткое время.
          \nЕсли шар Прим откреплён, она прикажет шару вернуться. Шар наносит урон в месте открепления.
          \nНовое время восстановления начинается, когда шар возвращается к Прим, за исключением случая, когда она подбирает шар.
          \nМожет быть повторно использовано, чтобы раньше остановить шар.`,
        cz: `Prim přikáže míči pohybovat se vpřed ve směru Prim. Když se zastaví, způsobí ${damage} všem nepřátelským jednotkám v okolí a zpomalí jejich pohyb a rychlost útoku na krátkou dobu.
          \nPokud je míč Prim odpojen, přikáže míči, aby se vrátil. Míč způsobí poškození na místě odpojení.
          \nNový cooldown začíná, když se míč vrátí k Prim, s výjimkou situace, kdy Prim míč sebrala.
          \nMůže být znovu použito k dřívějšímu zastavení míče.`,
        br: `Prim comanda a Bola para se mover para frente na direção de Prim. Quando parado, causa ${damage} a todos os inimigos próximos e diminui a velocidade de movimento e a velocidade de ataque deles por um curto período.
          \nSe a Bola de Prim estiver desanexada, ela comandará a Bola a retornar. A bola causa dano em sua localização de desanexação.
          \nO novo tempo de recarga começa quando a Bola é devolvida a um Prim, exceto se ela pegar a bola.
          \nPode ser recast para parar a Bola mais cedo.`,
        zh: `普琳姆命令球移動到普琳姆前方。當停止時，對所有附近的敵人造成 ${damage}並使他們的移動和攻擊速度降低一小段時間。
          \n如果普琳姆的球被分離，她將命令使球回歸。球在分離位置造成傷害。
          \n當球返回到普琳姆時，新的冷卻時間開始，除非她撿起球。
          \n再次施放可以使球更早停止。`,
        fr: `Prim commande à la Balle de se déplacer vers l'avant dans la direction de Prim. Lorsqu'il s'arrête, inflige ${damage} à tous les ennemis à proximité et ralentit leur vitesse de déplacement et leur vitesse d'attaque pendant une courte période.
          \nSi la Balle de Prim est détachée, elle commandera à la Balle de revenir. La balle inflige des dégâts à son emplacement de détachement.
          \nLe nouveau temps de recharge commence lorsque la Balle est retournée à un Prim, sauf si elle ramasse la balle.
          \nPeut être re-cast pour arrêter la Balle plus tôt.`,
        vi: `Prim lệnh cho Cầu di chuyển về phía trước theo hướng của cô. Khi đến nơi, gây ${damage} cho tất cả kẻ địch gần và làm chậm tốc độ di chuyển và tốc độ đánh của họ trong một thời gian ngắn.
          \nNếu Cầu của Prim không ở với cô, cô ấy sẽ ra lệnh cho Cầu quay trở lại. Cầu gây sát thương tại vị trí rời.
          \nThời gian hồi mới bắt đầu khi Cầu được quay trở lại với Prim, trừ khi cô ấy nhặt lại Cầu.
          \nCó thể dùng chiêu lại để dừng Cầu sớm hơn.`,
        id: `Prim memerintahkan Bola untuk bergerak maju ke arah Prim. Ketika berhenti, memberikan ${damage} kepada semua musuh di dekatnya dan memperlambat gerakan dan kecepatan serangan mereka untuk waktu yang singkat.
          \nJika Bola Prim terlepas, dia akan memerintahkan Bola untuk kembali. Bola memberikan kerusakan di lokasi pelepasan.
          \nWaktu jeda baru dimulai ketika Bola dikembalikan ke Prim kecuali jika dia mengambil bola.
          \nDapat dicasting kembali untuk menghentikan Bola lebih awal.`,
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

      const stunDuration = getStunDuration(PrimAbilityData.GRAVITATIONAL_PULL_STUN_DURATION * modifier)

      return {
        en: `Prim commands the Ball to pull all nearby enemies toward it, dealing ${damage} and stunning them for ${stunDuration}.`,
        ru: `Прим приказывает шару притянуть всех близлежащих врагов к себе, нанося ${damage} и оглушая их на ${stunDuration}.`,
        cz: `Prim přikáže míči přitáhnout všechny nepřátelské jednotky v okolí k sobě, způsobující ${damage} a omráčení na ${stunDuration} sekund.`,
        br: `Prim comanda a Bola para puxar todos os inimigos próximos para perto dela, causando ${damage} e atordoando-os por ${stunDuration} segundos.`,
        zh: `普琳姆命令球將所有附近的敵人拉向它，造成 ${damage}並使他們暈眩 ${stunDuration}。`,
        fr: `Prim commande à la Balle de tirer tous les ennemis à proximité vers elle, infligeant ${damage} et les étourdissant pendant ${stunDuration} secondes.`,
        vi: `Prim ra lệnh cho Cầu kéo tất cả kẻ địch gần về phía nó, gây ${damage} và gây choáng trong ${stunDuration} giây.`,
        id: `Prim memerintahkan Bola untuk menarik semua musuh di sekitarnya ke arahnya, memberikan ${damage} kerusakan magis dan membiarkan mereka terdiam selama ${stunDuration} detik.`,
      }
    }

    case SpellList.SEER_ATTACK: {
      const baseDamage = getDamage(SeerAbilityData.ATTACK_DAMAGE_MOD * damage)
      const baseDamageBenevolent = getDamage(
        SeerAbilityData.ATTACK_DAMAGE_MOD_BENEVOLENT_AP * abilityPower,
        Shared.DamageTypes.MAGICAL,
        0,
        'AbilityPower'
      )

      const benevolentCurseHealing = getDamage(
        SeerAbilityData.BENEVOLENT_CURSE_HEAL_MODIFIER * abilityPower,
        Shared.DamageTypes.HEAL,
        SeerAbilityData.BENEVOLENT_CURSE_BASE_HEAL + SeerAbilityData.BENEVOLENT_CURSE_HEAL_PER_LEVEL * (level - 1)
      )

      const malevolentCurseDamage = getDamage(
        SeerAbilityData.MALEVOLENT_CURSE_DAMAGE_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        SeerAbilityData.MALEVOLENT_CURSE_BASE_DAMAGE + SeerAbilityData.MALEVOLENT_CURSE_DAMAGE_PER_LEVEL * (level - 1),
        'AbilityPower'
      )

      const curseDelay = getDuration(SeerAbilityData.CURSE_DELAY_AND_DURATION)
      const healModifier = colorize(
        `${fixed(SeerAbilityData.BENEVOLENT_FLARE_HEAL_MODIFIER * 100)}%`,
        Shared.DamageTypes.BUFF
      )

      return {
        en: `[Benevolent Form]: Seer fires a bolt of benevolent energy that deals ${baseDamage} to enemies. On hit, it applies a Benevolent Curse.
        \n\n[Malevolent Form]: Seer empowers the energy bolt with malevolent force, dealing an additional ${baseDamageBenevolent} magic damage. On hit, it also applies a Malevolent Curse.
        \n\n[Benevolent Curse]: After ${curseDelay}, the curse expires, releasing a burst of benevolent energy. It heals nearby allies for ${benevolentCurseHealing} and applies Benevolent Flare, increasing all healing received by ${healModifier} for a short duration.
        \n\n[Malevolent Curse]: After ${curseDelay}, the curse expires, releasing a burst of malevolent energy that deals ${malevolentCurseDamage} magic damage to nearby enemies.`,
        ru: `[Благосклонная форма]: Провидец стреляет в противника лучом благосклонной энергии, наносящий ${baseDamage} урона. По попаданию, он накладывает Благосклонный проклятье.
        \n\n[Зловещая форма]: Провидец усиливает луч злобной энергией, нанося дополнительные ${baseDamageBenevolent} урона. По попаданию, он также накладывает Злобное проклятье.
        \n\n[Благосклонное проклятье]: Через ${curseDelay}, проклятье истекает, выпуская вспышку благосклонной энергии. Оно лечит близких союзников на ${benevolentCurseHealing} и применяет Благосклонный всплеск, увеличивающий все получаемое лечение на ${healModifier} на короткое время.
        \n\n[Злобное проклятье]: Через ${curseDelay}, проклятье истекает, выпуская вспышку злобной энергии, наносящую ${baseDamageBenevolent} урона близким врагам.`,
        cz: `[Přívětivá forma]: Prorok vystřelí v nepřítele světlem dobré energie, které způsobí ${baseDamage} poškození. Po zásahu se na nepřítele aplikuje dobré prokletí.
        \n\n[Zlověstná forma]: Prorok zesílí světlo zlověstnou energií, které způsobí ${baseDamageBenevolent} poškození. Po zásahu se na nepřítele aplikuje zlověstné prokletí.
        \n\n[Dobré prokletí]: Po ${curseDelay} se prokletí vyprázdní, vydává výbřez dobré energie. Léčí blízké spojence o ${benevolentCurseHealing} a aplikuje Dobré zesílení, které zvyšuje všechno získané léčení o ${healModifier} na krátkou dobu.
        \n\n[Zlověstné prokletí]: Po ${curseDelay} se prokletí vyprázdní, vydává výbřez zlověstné energie, který způsobí ${baseDamageBenevolent} poškození blízkým nepřátelům.`,
        br: `[Forma Benevolente]: Seer lança um raio de energia benevolente que causa ${baseDamage} aos inimigos. Ao acertar, aplica um Curse Benevolente.
        \n\n[Forma Malevolente]: Seer enriquece o raio com energia malévola, causando ${baseDamageBenevolent} adicional. Ao acertar, também aplica um Curse Malevolente.
        \n\n[Curse Benevolente]: Após ${curseDelay}, o curse expira, lançando uma explosão de energia benevolente. Ele cura aliados próximos em ${benevolentCurseHealing} e aplica Benevolent Flare, aumentando todo o cuidado recebido em ${healModifier} por um curto período.
        \n\n[Curse Malevolente]: Após ${curseDelay}, o curse expira, lançando uma explosão de energia malévola, causando ${baseDamageBenevolent} aos inimigos próximos.`,
        zh: `[仁慈形态]: 先知发射一道仁慈能量射线，对敌人造成 ${baseDamage} 伤害。命中时，施加仁慈诅咒。
        \n\n[邪恶形态]: 先知增强能量射线，造成额外 ${baseDamageBenevolent} 魔法伤害。命中时，也施加邪恶诅咒。
        \n\n[仁慈诅咒]: 诅咒在 ${curseDelay} 后消失，释放一道仁慈能量爆发，治疗附近的盟友 ${benevolentCurseHealing} 并应用仁慈爆发，增加所有接收到的治疗 ${healModifier} 的持续时间。
        \n\n[邪恶诅咒]: 诅咒在 ${curseDelay} 后消失，释放一道邪恶能量爆发，对附近的敌人造成 ${baseDamageBenevolent} 魔法伤害。`,
        fr: `[Forme Bienveillante]: Le Voyant tire un rayon d'énergie bienveillante qui inflige ${baseDamage} aux ennemis. Au coup, il applique un maléfice bienveillant.
        \n\n[Forme Malveillante]: Le Voyant renforce le rayon avec une énergie maléfique, infligeant ${baseDamageBenevolent} supplémentaires. Au coup, il applique également un maléfice maléfique.
        \n\n[Maléfice Bienveillant]: Après ${curseDelay}, le maléfice expire, libérant une explosion d'énergie bienveillante. Il soigne les alliés proches de ${benevolentCurseHealing} et applique Benevolent Flare, augmentant tout soin reçu par ${healModifier} pour une courte durée.
        \n\n[Maléfice Maléfique]: Après ${curseDelay}, le maléfice expire, libérant une explosion d'énergie maléfique qui inflige ${baseDamageBenevolent} aux ennemis proches.`,
        vi: `[Trạng thái Từ Bi]: Seer bắn một tia năng lượng từ bi gây ${baseDamage} cho kẻ địch. Khi trúng, nó áp dụng một lời nguyền từ bi.
        \n\n[Trạng thái Ác Độc]: Seer thức tỉnh tia năng lượng với sức mạnh ác độc, gây thêm ${baseDamageBenevolent}. Khi trúng, nó cũng áp dụng Lời Nguyền Ác Độc.
        \n\n[Lời nguyền Từ Bi]: Sau ${curseDelay}, lời nguyền hết hạn, phát ra một luồng năng lượng từ bi. Nó hồi máu cho đồng minh gần bên nó ${benevolentCurseHealing} và áp dụng Ánh Lửa Từ Bi, tăng toàn bộ hồi máu nhận được bởi ${healModifier} trong một thời gian ngắn.
        \n\n[Lời nguyền Ác Độc]: Sau ${curseDelay}, lời nguyền hết hạn, phát ra một luồng năng lượng Ác Độc gây ${baseDamageBenevolent} cho kẻ địch gần bên nó.`,
        id: `[Benevolent Form]: Seer membuat kilatan energi yang baik yang memberikan ${baseDamage} kerusakan kepada musuh. Saat menembak, ia menerapkan kutukan baik.
        \n\n[Malevolent Form]: Seer memperkuat kilatan energi dengan kekuatan jahat, memberikan ${baseDamageBenevolent} kerusakan magis tambahan. Saat menembak, ia juga menerapkan kutukan jahat.
        \n\n[Kutukan Baik]: Setelah ${curseDelay}, kutukan habis, melepaskan kilatan energi yang baik. Ia menyembuhkan sekutu di sekitarnya sebesar ${benevolentCurseHealing} dan menerapkan Benevolent Flare, meningkatkan semua perawatan yang diterima oleh ${healModifier} untuk jangka waktu singkat.
        \n\n[Kutukan Jahat]: Setelah ${curseDelay}, kutukan habis, melepaskan kilatan energi jahat yang memberikan ${baseDamageBenevolent} kerusakan magis kepada musuh di sekitarnya.`,
      }
    }

    case SpellList.SEER_BENEVOLENT_EXPLOSION: {
      const healing = getDamage(
        SeerAbilityData.BENEVOLENT_EXPLOSION_DAMAGE_MODIFIER * abilityPower,
        Shared.DamageTypes.HEAL,
        SeerAbilityData.BENEVOLENT_EXPLOSION_DAMAGE +
          SeerAbilityData.BENEVOLENT_EXPLOSION_DAMAGE_PER_LEVEL * (level - 1)
      )

      const damage = getDamage(
        SeerAbilityData.BENEVOLENT_EXPLOSION_DAMAGE_MODIFIER * abilityPower,
        Shared.DamageTypes.MAGICAL,
        SeerAbilityData.BENEVOLENT_EXPLOSION_DAMAGE +
          SeerAbilityData.BENEVOLENT_EXPLOSION_DAMAGE_PER_LEVEL * (level - 1)
      )

      const fearDuration = getControlDuration(SeerAbilityData.MALEVOLENT_EXPLOSION_FEAR_DURATION)

      return {
        en: `Seer creates sequential explosions in his facing direction. Each explosion releases a burst of energy, healing nearby allied units for ${healing} and damaging enemy units for ${damage}. Affected allies gain Benevolent Flare, while affected enemies are afflicted with Benevolent Curse.
        \n\n[Malevolent Form]: Each explosion also applies Fear to enemies for ${fearDuration} and applies Malevolent Curse.`,
        ru: `Провидец создает последовательные взрывы в своем направлении. Каждый взрыв выпускает вспышку энергии, лечащие близких союзников на ${healing} и наносящие урон врагам на ${damage}. Пострадавшие союзники получают Благосклонный всплеск, а пострадавшие враги получают Благосклонное проклятье.
        \n\n[Зловещая форма]: Каждый взрыв также применяет Страх к врагам на ${fearDuration} и применяет Злобное проклятье.`,
        cz: `Prorok vytváří sekvenciální exploze ve svém směru. Každá exploze vydává výbřez energie, léčící blízké spojence o ${healing} a poškozující nepřátele o ${damage}. Společníci, kterým je vlivná, získají Benevolent Flare, zatímco nepřátelé, kterým je vlivná, jsou postiženi Benevolent Curse.
        \n\n[Zlověstná forma]: Každá exploze také aplikuje Strach na nepřátele na ${fearDuration} a aplikuje Malevolent Curse.`,
        br: `Seer cria explosões sequenciais em sua direção. Cada explosão libera uma explosão de energia, curando aliados próximos em ${healing} e causando ${damage} aos inimigos. Aliados afetados ganham Benevolent Flare, enquanto inimigos afetados são afetados por Benevolent Curse.
        \n\n[Forma Malevolente]: Cada explosão também aplica Medo aos inimigos por ${fearDuration} e aplica Malevolent Curse.`,
        zh: `先知在他的面前创造了一系列爆炸。每个爆炸释放出一股能量，治疗附近的盟友 ${healing} 并造成 ${damage} 伤害。受影响的盟友获得仁慈爆发，而受影响的敌人同时受到仁慈诅咒。
        \n\n[邪恶形态]: 每个爆炸也会对敌人施加恐惧 ${fearDuration} 并施加邪恶诅咒。`,
        fr: `Le Voyant crée des explosions successives dans sa direction. Chaque explosion libère une explosion d'énergie, soignant les alliés proches de ${healing} et infligeant ${damage} aux ennemis. Les alliés affectés gagnent Benevolent Flare, tandis que les ennemis affectés sont affectés par Benevolent Curse.
        \n\n[Forme Malveillante]: Chaque explosion applique également Peur aux ennemis pour ${fearDuration} et applique Malevolent Curse.`,
        vi: `Seer tạo ra các luồng năng lượng liên tiếp theo hướng của mình. Mỗi vụ nổ giải phóng luồng năng lượng, hồi máu cho đồng minh ở gần ${healing} và gây ${damage} cho kẻ địch. Đồng minh được nhận Ánh Lửa Từ Bi, trong khi kẻ địch bị ảnh hưởng bởi Lời nguyền Ác Độc.
        \n\n[Trạng thái Ác Độc]: Mỗi luồng năng lượng cũng làm sợ kẻ địch trong ${fearDuration} và bị ảnh hưởng bởi Lời nguyền Ác Độc.`,
        id: `Seer menciptakan ledakan berurutan di arahannya. Setiap ledakan melepaskan sebuah ledakan energi, menyembuhkan sekutu di sekitarnya sebesar ${healing} dan menimbulkan ${damage} kerusakan pada musuh. Sekutu yang terkena akan mendapatkan Benevolent Flare, sementara musuh yang terkena akan mendapatkan Benevolent Curse.
        \n\n[Form Malevolent]: Setiap ledakan juga menerapkan Ketakutan pada musuh dalam ${fearDuration} dan menerapkan Malevolent Curse.`,
      }
    }

    case SpellList.SEER_MALEVOLENT_FORM: {
      return {
        en: 'Seer temporarily transforms into his Malevolent Form, becoming immune to crowd control effects and slow effects, and enhancing all of his abilities.',
        ru: 'Провидец временно превращается в свою Зловещую Форму, становится невосприимчивым к эффектам контроля и замедления, и усиливает все свои способности.',
        cz: 'Prorok se dočasně přemění do své Zlověstné Formy, stane se necitlivým na efekty kontroly a zpomalení a zesílí všechny své schopnosti.',
        br: 'Seer se transforma temporariamente em sua Forma Malevolente, tornando-se imune a efeitos de controle e reduzindo, e aumentando todas as suas habilidades.',
        zh: '先知暂时变成邪恶形态，免疫控制效果和减速，并增强所有技能。',
        fr: 'Le Voyant se transforme temporairement en sa Forme Malveillante, devenant immunisé aux effets de contrôle et de ralentissement, et augmentant toutes ses capacités.',
        vi: 'Seer tạm thời chuyển sang Trạng thái Ác Độc, kháng mọi loại choáng và giảm tốc độ di chuyển, và thức tỉnh tất cả các kỹ năng của mình.',
        id: 'Seer bertukar menjadi Form Malevolent, menjadi tidak rentan terhadap efek kontrol dan perlambatan, dan memperkuat semua kemampuannya.',
      }
    }
    case SpellList.KARICK_ATTACK: {
      const baseDamage = getDamage(KarickAbilityData.AUTOATTACK_DAMAGE_MOD * damage)
      const rootDuration = getControlDuration(
        KarickAbilityData.VERDANT_MARK_ROOT_DURATION_PER_STACK * KarickAbilityData.VERDANT_MARK_MAX_STACKS
      )
      const rootDurationPerStack = getControlDuration(KarickAbilityData.VERDANT_MARK_ROOT_DURATION_PER_STACK)
      const rootDamage = getDamage(
        KarickAbilityData.VERDANT_MARK_DAMAGE_MOD * abilityPower,
        Shared.DamageTypes.MAGICAL,
        KarickAbilityData.VERDANT_MARK_BASE_DAMAGE_PER_SEC +
          KarickAbilityData.VERDANT_MARK_DAMAGE_PER_LEVEL * (level - 1)
      )

      return {
        en: `Karick launches a spirit-bound projectile, dealing ${baseDamage}. Hero hits apply 1 Verdant Mark stack.\n\n[PASSIVE Verdant Mark]: Your attacks apply a stack of Verdant Mark, up to ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} stacks. When Verdant Mark is triggered, the target is rooted for ${rootDurationPerStack} per stack (up to ${rootDuration}) and suffers ${rootDamage} per second.`,
        ru: `Карик выпускает снаряд, связанный с духами, нанося ${baseDamage} урона. Попадания по героям накладывают 1 заряд Verdant Mark.\n\n[ПАССИВНО Verdant Mark]: Ваши атаки накладывают заряд Verdant Mark, до ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} зарядов. При срабатывании Verdant Mark цель обездвиживается на ${rootDurationPerStack} за каждый заряд (до ${rootDuration}) и получает ${rootDamage} урона в секунду.`,
        cz: `Karick vystřelí projektil spoutaný duchy, který způsobí ${baseDamage} poškození. Zásahy hrdinů aplikují 1 stack Verdant Mark.\n\n[PASIVNÍ Verdant Mark]: Tvé útoky aplikují stack Verdant Mark, až do ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} stacků. Při aktivaci Verdant Mark je cíl zakořeněn na ${rootDurationPerStack} za stack (maximálně ${rootDuration}) a utrpí ${rootDamage} poškození za sekundu.`,
        br: `Karick lança um projétil ligado aos espíritos, causando ${baseDamage}. Acertos em heróis aplicam 1 acúmulo de Verdant Mark.\n\n[PASSIVO Verdant Mark]: Seus ataques aplicam um acúmulo de Verdant Mark, até ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} acúmulos. Quando Verdant Mark é ativada, o alvo fica enraizado por ${rootDurationPerStack} por acúmulo (até ${rootDuration}) e sofre ${rootDamage} por segundo.`,
        zh: `Karick 发射一枚由灵魂束缚的投射物，造成 ${baseDamage} 点伤害。命中英雄会施加 1 层 Verdant Mark。\n\n[被动 Verdant Mark]：你的攻击会施加一层 Verdant Mark，最多 ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} 层。当 Verdant Mark 被触发时，目标会被缠绕 ${rootDurationPerStack}（每层，最多 ${rootDuration}），并每秒受到 ${rootDamage} 点伤害。`,
        fr: `Karick lance un projectile lié aux esprits, infligeant ${baseDamage} dégâts. Les coups portés aux héros appliquent 1 cumul de Verdant Mark.\n\n[PASSIF Verdant Mark] : Vos attaques appliquent un cumul de Verdant Mark, jusqu’à ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} cumuls. Lorsque Verdant Mark est déclenchée, la cible est enracinée pendant ${rootDurationPerStack} par cumul (jusqu’à ${rootDuration}) et subit ${rootDamage} dégâts par seconde.`,
        vi: `Karick phóng ra một viên đạn được ràng buộc bởi linh hồn, gây ${baseDamage}. Đòn đánh trúng tướng áp dụng 1 cộng dồn Verdant Mark.\n\n[NỘI TẠI Verdant Mark]: Đòn đánh của bạn áp dụng 1 cộng dồn Verdant Mark, tối đa ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} cộng dồn. Khi Verdant Mark được kích hoạt, mục tiêu bị trói chân ${rootDurationPerStack} mỗi cộng dồn (tối đa ${rootDuration}) và chịu ${rootDamage} mỗi giây.`,
        id: `Karick melontarkan proyektil yang terikat roh, memberikan ${baseDamage}. Serangan yang mengenai hero menerapkan 1 stack Verdant Mark.\n\n[PASIF Verdant Mark]: Seranganmu menerapkan 1 stack Verdant Mark, hingga ${KarickAbilityData.VERDANT_MARK_MAX_STACKS} stack. Saat Verdant Mark terpicu, target terkena root selama ${rootDurationPerStack} per stack (hingga ${rootDuration}) dan menerima ${rootDamage} per detik.`,
      }
    }

    case SpellList.KARICK_BRAMBLE_SNAP: {
      const baseDamage = getDamage(KarickAbilityData.BRAMBLE_SNAP_DAMAGE_MOD * damage)

      return {
        en: `Karick lashes out with a thornbound strike, dealing ${baseDamage} in melee range. Applies 1 Verdant Mark stack and instantly triggers Verdant Mark based on current stacks.`,
        ru: `Карик наносит удар, связанный с шипами, нанося ${baseDamage} урона в ближнем бою. Накладывает 1 заряд Verdant Mark и мгновенно активирует его в зависимости от текущих зарядов.`,
        cz: `Karick udeří trnitým výpadem, který způsobí ${baseDamage} poškození na blízko. Aplikuje 1 stack Verdant Mark a okamžitě jej aktivuje podle aktuálního počtu stacků.`,
        br: `Karick desfere um golpe envolto em espinhos, causando ${baseDamage} em combate corpo a corpo. Aplica 1 acúmulo de Verdant Mark e o ativa imediatamente com base nos acúmulos atuais.`,
        zh: `Karick 释放一次荆棘缠绕的近战打击，造成 ${baseDamage} 点伤害。施加 1 层 Verdant Mark，并根据当前层数立即触发效果。`,
        fr: `Karick assène une frappe liée aux épines, infligeant ${baseDamage} dégâts au corps à corps. Applique 1 cumul de Verdant Mark et le déclenche instantanément selon le nombre de cumuls actuels.`,
        vi: `Karick tung đòn đánh phủ gai, gây ${baseDamage} cận chiến. Áp dụng 1 cộng dồn Verdant Mark và kích hoạt ngay dựa trên số cộng dồn hiện tại.`,
        id: `Karick mengayunkan serangan berduri, memberikan ${baseDamage} jarak dekat. Menerapkan 1 stack Verdant Mark dan langsung memicunya berdasarkan jumlah stack saat ini.`,
      }
    }

    case SpellList.KARICK_WRATH_OF_THE_GROVE: {
      const magicalDamage = getDamage(
        KarickAbilityData.WRATH_OF_THE_GROVE_DAMAGE_MOD * abilityPower,
        Shared.DamageTypes.MAGICAL,
        KarickAbilityData.WRATH_OF_THE_GROVE_DAMAGE +
          KarickAbilityData.WRATH_OF_THE_GROVE_DAMAGE_PER_LEVEL * (level - 1)
      )

      const stunDuration = getStunDuration(KarickAbilityData.WRATH_OF_THE_GROVE_STUN_DURATION)

      return {
        en: `Karick casts a living seed before him. After a brief delay, it erupts into towering briars, dealing ${magicalDamage} and stunning enemies for ${stunDuration}.`,
        ru: `Карик призывает живое семя перед собой. После короткой задержки оно взрывается, порождая шипы, нанося ${magicalDamage} урона и оглушая врагов на ${stunDuration}.`,
        cz: `Karick sesílá živé semeno před sebe. Po krátkém zpoždění vyrazí v mohutné trny, které způsobí ${magicalDamage} poškození a omráčí nepřátele na ${stunDuration}.`,
        br: `Karick conjura uma semente viva à sua frente. Após um breve atraso, ela irrompe em espinhos gigantes, causando ${magicalDamage} e atordoando inimigos por ${stunDuration}.`,
        zh: `Karick 在前方施放一颗活体种子。短暂延迟后，种子爆发成巨大的荆棘，造成 ${magicalDamage} 点伤害并使敌人眩晕 ${stunDuration}。`,
        fr: `Karick invoque une graine vivante devant lui. Après un court délai, elle éclate en ronces géantes, infligeant ${magicalDamage} dégâts et étourdissant les ennemis pendant ${stunDuration}.`,
        vi: `Karick triệu hồi một hạt giống sống trước mặt. Sau một khoảng trễ ngắn, nó bùng nổ thành những bụi gai khổng lồ, gây ${magicalDamage} và làm choáng kẻ địch trong ${stunDuration}.`,
        id: `Karick memanggil benih hidup di depannya. Setelah jeda singkat, benih itu meledak menjadi duri raksasa, memberikan ${magicalDamage} dan membuat musuh terkena stun selama ${stunDuration}.`,
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
        vi: 'Biến về nhà sau 5 giây. Trong khi biến về, bạn không thể di chuyển hoặc tấn công, và bị tấn công sẽ ngừng quá trình biến về.',
        id: 'Teleport kembali ke markas setelah 5 detik. Selama proses teleport, Anda tidak dapat bergerak atau menyerang, dan menerima kerusakan akan menghentikan proses.',
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
    case SpellList.SEER_ATTACK:
    case SpellList.KARICK_ATTACK:
      return {
        en: 'Basic Attack',
        ru: 'Атака',
        cz: 'Útok',
        br: 'Ataque básico',
        zh: '攻擊',
        fr: 'Attaque de base',
        vi: 'Đòn đánh Vật lí',
        id: 'Serangan Dasar',
      }

    case SpellList.KUMIHU_MAGICAL_ORB:
      return {
        en: 'Magical Orb',
        ru: 'Волшебная сфера',
        cz: 'Magická Koule',
        br: 'Rajada de vento',
        zh: '魔幻寶珠',
        fr: 'Orbe magique',
        vi: 'Quả Cầu Phép Thuật',
        id: 'Orb Magis',
      }
    case SpellList.KUMIHU_ARCANE_DASH:
      return {
        en: 'Arcane Dash',
        ru: 'Мистический рывок',
        cz: 'Tajemný Krok',
        br: 'Possessão Demoníaca',
        zh: '奧術衝刺',
        fr: 'Charge arcanique',
        vi: 'Phi Thân Ma Pháp',
        id: 'Lari Cepat',
      }

    /** Sparrow */
    case SpellList.SPARROW_CORRUPTED_WIND:
      return {
        en: 'Corrupted Wind',
        ru: 'Проклятый ветер',
        cz: 'Zteč',
        br: 'Cai dentro',
        zh: '腐壞之風',
        fr: 'Charge',
        vi: 'Tà Phong',
        id: 'Lari Cepat',
      }

    case SpellList.SPARROW_DEMONIC_WRATH:
      return {
        en: 'Demonic Wrath',
        ru: 'Демонический гнев',
        cz: 'Úder Země',
        br: 'poder demoníaco',
        zh: '惡魔之怒',
        fr: 'Frappe au sol',
        vi: 'Quỷ Nộ',
        id: 'Pukulan Tanah',
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
        vi: 'Băng Tiễn',
        id: 'Bolt Es',
      }

    case SpellList.ICEAT_COLD_EMBRACE:
      return {
        en: 'Cold Embrace',
        ru: 'Объятья холода',
        cz: 'Chladné objetí',
        br: 'Abraço do inverno',
        zh: '冰冷懷抱',
        fr: 'Étreinte froide',
        vi: 'Hàn Ủng',
        id: 'Pelukan Dingin',
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
        vi: 'Cức Đằng',
        id: 'Ranting Berduri',
      }

    case SpellList.BELLE_FLORAL_AMBUSH:
      return {
        en: 'Floral Ambush',
        ru: 'Цветочная ловушка',
        cz: 'Bouchací Kytky',
        br: 'Emboscada floral',
        zh: '鮮花伏擊',
        fr: 'Embuscade florale',
        vi: 'Hoa Phục Kích',
        id: 'Perangkap Bunga',
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
        vi: 'Shuriken',
        id: 'Lempar Shuriken',
      }

    case SpellList.THOMAS_SHADOW_CARROT:
      return {
        en: 'Shadow Carrot',
        ru: 'Теневая морковь',
        cz: 'Stínová Mrkev',
        br: 'Contrato',
        zh: '闇影蘿蔔',
        fr: "Carotte d'ombre",
        vi: 'Hắc Dạ Hồ La Bạc',
        id: 'Wortel Bayangan',
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
        vi: 'Tinh Kiếm',
        id: 'Pedang Astral',
      }

    case SpellList.VEIL_ASTRAL_STEP:
      return {
        en: 'Astral Step',
        ru: 'Астральный шаг',
        cz: 'Astrální Krok',
        br: 'Regente do mal',
        zh: '星光飛躍',
        fr: 'Pas astral',
        vi: 'Tinh Bộ',
        id: 'Langkah Astral',
      }

    case SpellList.FLIN_PRECISE_SHOT:
      return {
        en: 'Precise Shot',
        ru: 'Точный выстрел',
        cz: 'Přesná střela',
        br: 'Tiro preciso',
        zh: '精準射擊',
        fr: 'Tir précis',
        vi: 'Tên Chuẩn Xác',
        id: 'Tembakan Presisi',
      }

    case SpellList.FLIN_MARKSMANSHIP:
      return {
        en: 'Marksmanship',
        ru: 'Меткая стрельба',
        cz: 'Strelecké umenie',
        br: 'Pontaria perfeita',
        zh: '精通箭術',
        fr: 'Tir de précision',
        vi: 'Xạ Thủ Lão Luyện',
        id: 'Kemahiran Menembak',
      }

    case SpellList.KIRA_RAIN_OF_SPARKS:
      return {
        en: 'Rain of Sparks',
        ru: 'Дождь искр',
        br: 'Relâmpago do Abismo',
        zh: '電光雷雨',
        fr: "Pluie d'étincelles",
        cz: 'Déšť jisker',
        vi: 'Điện Hỏa Vũ',
        id: 'Hujan Bunga Api',
      }

    case SpellList.KIRA_STATIC_PHANTASM:
      return {
        en: 'Static Phantasm',
        ru: 'Статический фантазм',
        cz: 'Prázdné fantazie',
        br: 'Fantasma do Abismo',
        zh: '虛空幻象',
        fr: 'Fantôme statique',
        vi: 'Tĩnh Điện Huyễn Ảnh',
        id: 'Hantu Hampa',
      }

    case SpellList.HAZEL_JUSTICES_WRATH:
      return {
        en: "Justice's Wrath",
        br: 'Portadora da verdade',
        ru: 'Гнев правосудия',
        cz: 'Hněv spravedlnosti',
        zh: '正義之怒',
        fr: 'Courroux de la justice',
        vi: 'Sức Mạnh Công Lý',
        id: 'Kemarahan Keadilan',
      }

    case SpellList.HAZEL_TRIUMPHANT_UPHEAVAL:
      return {
        en: 'Triumphant Upheaval',
        ru: 'Триумфальный переворот',
        br: 'Revolta Triunfante',
        cz: 'Triumfálne prevraty',
        zh: '勝利的動盪',
        fr: 'Séisme triomphant',
        vi: 'Khải Hoàn Chấn Động',
        id: 'Gempa Kemenangan',
      }

    case SpellList.AREL_TUMBLE:
      return {
        en: 'Tumble',
        ru: 'Кувырок',
        br: 'Hora de correr',
        cz: 'Kotrmelec',
        zh: '翻跟斗',
        fr: 'Roulade',
        vi: 'Nhào lộn',
        id: 'Tumbuk',
      }

    case SpellList.AREL_TICKING_BOMB:
      return {
        en: 'Ticking Bomb',
        ru: 'Часовая бомба',
        br: 'Bomba Relógio',
        cz: 'Tikající bomba',
        zh: '定時炸彈',
        fr: 'Bombe à retardement',
        vi: 'Bom hẹn giờ',
        id: 'Bom Waktu',
      }

    case SpellList.ALVAR_FURIOUS_KICK:
      return {
        en: 'Furious Kick',
        ru: 'Яростный удар',
        br: 'Chute furioso',
        cz: 'Zúrivý kopanec',
        zh: '憤怒之踢',
        fr: 'Coup furieux',
        vi: 'Nộ Cước',
        id: 'Tendangan Marah',
      }

    case SpellList.ALVAR_HEAVENLY_KICK:
      return {
        en: 'Heavenly Kick',
        ru: 'Небесный удар',
        br: 'Chute Celestial',
        cz: 'Nebeský kop',
        zh: '天堂之踢',
        fr: 'Coup céleste',
        vi: 'Thiên Cước',
        id: 'Tendangan Surgawi',
      }

    case SpellList.FOXY_EXPLOSIVE_GRENADE:
      return {
        en: 'Explosive Grenade',
        ru: 'Взрывная граната',
        cz: 'Výbušný granát',
        br: 'Granada explosiva',
        zh: '手榴爆彈',
        fr: 'Grenade explosive',
        vi: 'Lựu Đạn',
        id: 'Granat Ledakan',
      }

    case SpellList.FOXY_RAPID_FIRE:
      return {
        en: 'Rapid Fire',
        ru: 'Беглый огонь',
        cz: 'Příval kulek',
        br: 'Fogo Rápido',
        zh: '極速射擊',
        fr: 'Tir rapide',
        vi: 'Tốc Xạ',
        id: 'Temabakan Cepat',
      }
    case SpellList.MAGDALENE_SCREAM_OF_PAIN:
      return {
        en: 'Scream of Pain',
        ru: 'Загробный вопль',
        br: 'Grito de Dor',
        fr: 'Cri de Douleur',
        zh: '痛苦尖叫',
        cz: 'Křik bolesti',
        vi: 'Khổ Thống Chi Khiếu',
        id: 'Jeritan Sakit',
      }
    case SpellList.MAGDALENE_HAUNTED_GHOST:
      return {
        en: 'Haunted Ghost',
        ru: 'Одержимый призрак',
        br: 'Fantasma Assombrado',
        fr: 'Fantôme hanté',
        zh: '作祟幽魂',
        cz: 'Strašidelný duch',
        vi: 'U Hồn Ám Ảnh',
        id: 'Hantu',
      }
    case SpellList.PRIM_COMMAND_ATTACK:
      return {
        en: 'Command: Attack',
        ru: 'Приказ: Атака',
        br: 'Comando: Ataque',
        fr: 'Commande: Attaque',
        zh: '指令：攻擊',
        cz: 'Příkaz: Útok',
        vi: 'Lệnh: Tấn Công',
        id: 'Perintah: Serang',
      }
    case SpellList.PRIM_GRAVITATIONAL_PULL:
      return {
        en: 'Gravitational Pull',
        ru: 'Гравитационное притяжение',
        br: 'Atração Gravitacional',
        fr: 'Attraction gravitationnelle',
        zh: '重力牽引',
        cz: 'Gravitační tah',
        vi: 'Lực hấp dẫn',
        id: 'Tarik Gravitasi',
      }

    case SpellList.SEER_BENEVOLENT_EXPLOSION:
      return {
        en: 'Benevolent Explosion / Malevolent Explosion',
        ru: 'Благосклонное взрыв / Неприязненное взрыв',
        br: 'Explosão Benevolente / Explosão Malevolente',
        fr: 'Explosion bienveillante / Explosion malveillante',
        zh: '仁慈爆炸 / 邪恶爆炸',
        cz: 'Výbuch laskavosti / Výbuch zlomyslnosti',
        vi: 'Năng lượng Từ Bi / Năng lượng Ác Độc',
        id: 'Ledakan Baik / Ledakan Jahat',
      }

    case SpellList.SEER_MALEVOLENT_FORM:
      return {
        en: 'Malevolent Form',
        ru: 'Неприязненная форма',
        br: 'Forma Malevolente',
        fr: 'Forme malveillante',
        zh: '邪恶形态',
        cz: 'Zlomyslná forma',
        vi: 'Trạng thái Ác Độc',
        id: 'Bentuk Jahat',
      }

    case SpellList.KARICK_BRAMBLE_SNAP:
      return {
        en: 'Bramble Snap',
        ru: 'Хлёст шипов',
        cz: 'Trnový úder',
        br: 'Estalo de Espinhos',
        zh: '荆棘猛击',
        fr: "Frappe d'épines",
        vi: 'Quật Gai',
        id: 'Hentakan Duri',
      }

    case SpellList.KARICK_WRATH_OF_THE_GROVE:
      return {
        en: 'Wrath of the Grove',
        ru: 'Гнев чащи',
        cz: 'Hněv háje',
        br: 'Fúria do Bosque',
        zh: '林地之怒',
        fr: 'Colère du Bosquet',
        vi: 'Thịnh Nộ Rừng Thiêng',
        id: 'Amarah Rimba',
      }

    /** Default */
    case SpellList.RECALL:
      return {
        en: 'Teleport to Home',
        ru: 'Телепортация домой',
        cz: 'Teleport domů',
        br: 'Teleporte para a base',
        zh: '傳送至基地',
        fr: 'Téléportation à la base',
        vi: 'Đang biến về',
        id: 'Teleport ke Base',
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

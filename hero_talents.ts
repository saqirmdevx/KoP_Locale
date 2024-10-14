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
  PrimAbilityData,
  SeerAbilityData,
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
    case Shared.HEROES.KUMIHU: {
      const blindDuration = toSecRaw(KumihuAbilityData.TALENT_T2_RIGHT_BLIND_DURATION)
      const magicalOrbCd = toSecRaw(KumihuAbilityData.TALENT_T1_LEFT_MAGICAL_ORB_CD)
      const charmCooldown = toSecRaw(KumihuAbilityData.TALENT_T1_RIGHT_CHARM_CD)
      return {
        tier1_left: {
          title: {
            en: `Magical Orb Cooldown  ${magicalOrbCd}s`,
            ru: `${magicalOrbCd} сек. перезарядки Волшебной сферы`,
            cz: `Magická koule obnovení ${magicalOrbCd}s`,
            zh: `魔幻寶珠冷却 ${magicalOrbCd}秒`,
            fr: `Orbe magique recharge ${magicalOrbCd}s`,
            br: `Orbe mágico recarga ${magicalOrbCd}s`,
            vi: `Hồi chiêu Quả Cầu Phép ${magicalOrbCd}s`,
            id: `Cooldown bola ajaib ${magicalOrbCd}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Charm cooldown  ${charmCooldown}s`,
            ru: `${charmCooldown} сек. перезарядки Мистического рывка`,
            cz: `Očarování obnovení ${charmCooldown}s`,
            zh: `魅惑冷却 ${charmCooldown}秒`,
            fr: `Charme recharge ${charmCooldown}s`,
            br: `Encanto recarga ${charmCooldown}s`,
            vi: `Hồi chiêu Quyến Rũ ${charmCooldown}s`,
            id: `Cooldown Pesona ${charmCooldown}s`,
          },
        },
        tier2_left: {
          title: {
            en: `Enhanced attack pierces units`,
            ru: 'Усиленная атака проходит сквозь цели',
            cz: 'Zlepšený útok prostupuje jednotkami',
            zh: '強化後攻擊貫穿單位',
            fr: `L'attaque améliorée traverse les unités`,
            br: `Ataque aprimorado atravessa unidades`,
            vi: `Tấn công tăng cường xuyên qua đơn vị`,
            id: `Serangan ditingkatkan menembus unit`,
          },
        },
        tier2_right: {
          title: {
            en: `Magical orb blind`,
            ru: 'Волшебная сфера ослепляет',
            cz: 'Magická koule oslepí',
            zh: '魔幻寶珠附加盲眼狀態',
            fr: `Orbe magique aveugle`,
            br: `Orbe mágico cega`,
            vi: `Quả cầu phép làm mù`,
            id: `Bola ajaib buta`,
          },
          description: {
            en: `If magical orb hit same hero twice it will reduce his vision by 66% for ${blindDuration}s`,
            ru: `Если Волшебная сфера попадает в одного и того же героя дважды, то его обзор снижается на 66% на ${blindDuration} сек.`,
            cz: `Pokud kouzelná koule zasáhne stejného hrdinu dvakrát, sníží jeho vidění o 66% po dobu ${blindDuration}s`,
            zh: `如果魔幻寶珠擊中同個英雄兩次，其視野將在${blindDuration}秒内減少66%`,
            fr: `Si l'orbe magique touche le même héros deux fois, sa vision sera réduite de 66% pendant ${blindDuration}s`,
            br: `Se o orbe mágico atingir o mesmo herói duas vezes, sua visão será reduzida em 66% por ${blindDuration}s`,
            vi: `Nếu quả cầu phép đánh cùng một anh hùng hai lần thì tầm nhìn của anh ta sẽ giảm 66% trong ${blindDuration}s`,
            id: `Jika bola ajaib mengenai pahlawan yang sama dua kali, maka visinya akan berkurang 66% selama ${blindDuration}s`,
          },
        },
      }
    }

    case Shared.HEROES.SPARROW: {
      const groundSlamDamage = fixed(SparrowAbilityData.TALENT_T2_LEFT_GROUND_SLAM_DAMAGE * 100, 1)
      return {
        tier1_left: {
          title: {
            en: `Demonic Wrath Damage +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            ru: `+${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE} к урону от Демонического гнева`,
            cz: `Démonický hněv poškození +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            zh: `惡魔之怒傷害 +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            fr: `Dégâts de la colère démoniaque +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            br: `Dano da Ira Demoníaca +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            vi: `Sức mạnh của Cơn Thịnh Nộ +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
            id: `Kerusakan Kemarahan Iblis +${SparrowAbilityData.TALENT_T1_LEFT_GROUND_SLAM_DAMAGE}`,
          },
        },
        tier1_right: {
          title: {
            en: `Corrupted Wind Range +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            ru: `+${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE} к дальности Проклятого ветра`,
            cz: `Zkažený vítr dosah +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            zh: `腐壞之風射程 +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}像素`,
            fr: `Portée du vent corrompu +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            br: `Alcance do Vento Corrompido +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            vi: `Tầm của Gió Hủy Diệt +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
            id: `Jarak Angin Tercemar +${SparrowAbilityData.TALENT_T1_RIGHT_DASH_DISTANCE}px`,
          },
        },
        tier2_left: {
          title: {
            en: `Demonic Wrath Pure / +${groundSlamDamage}%`,
            ru: `+${groundSlamDamage}% от недостающего здоровья Демонического гнева/урон становится чистым`,
            cz: `Démonický hněv čistý / +${groundSlamDamage}%`,
            zh: `惡魔之怒純傷害 / +${groundSlamDamage}%`,
            fr: `Colère démoniaque pure / +${groundSlamDamage}%`,
            br: `Ira Demoníaca Pura / +${groundSlamDamage}%`,
            vi: `Sức mạnh của Cơn Thịnh Nộ Thuần / +${groundSlamDamage}%`,
            id: `Kemarahan Iblis Murni / +${groundSlamDamage}%`,
          },
          description: {
            en: `Demonic Wrath deals pure damage, bypassing both Armor and Magic Resistance, and deals ${groundSlamDamage}% bonus damage.`,
            ru: `Демонический гнев будет наносить чистый урон, а процентный урон от недостающего здоровья цели увеличится на ${groundSlamDamage}%`,
            cz: `Démonický hněv nyní způsobuje čisté poškození, které obchází jak obranu, tak magický odpor, a způsobuje ${groundSlamDamage}% bonusového poškození.`,
            zh: `惡魔之怒造成純傷害，無視裝甲值和魔法抗性，造成 ${groundSlamDamage}% 額外傷害。`,
            fr: `La colère démoniaque inflige des dégâts purs, contournant à la fois l'armure et la résistance magique, et inflige ${groundSlamDamage}% de dégâts bonus.`,
            br: `Ira Demoníaca causa dano puro, ignorando tanto a Armadura quanto a Resistência Mágica, e causa ${groundSlamDamage}% de dano bônus.`,
            vi: `Cơn Thịnh Nộ gây sát thương thuần khiết, bỏ qua cả giáp và kháng phép, và gây thêm ${groundSlamDamage}% sát thương.`,
            id: `Kemarahan Iblis memberikan kerusakan murni, melewati kedua Armor dan Magic Resistance, dan memberikan ${groundSlamDamage}% kerusakan bonus.`,
          },
        },
        tier2_right: {
          title: {
            en: `Corrupted Wind Cooldown ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            ru: `${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)} сек. перезарядки Проклятого ветра`,
            cz: `Zkažený vítr obnovení ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            zh: `腐壞之風冷卻 ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            fr: `Recharge du vent corrompu ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            br: `Recarga do Vento Corrompido ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            vi: `Hồi chiêu Gió Hủy Diệt ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
            id: `Cooldown Angin Tercemar ${toSecRaw(SparrowAbilityData.TALENT_T2_RIGHT_DASH_COOLDOWN)}`,
          },
        },
      }
    }

    case Shared.HEROES.ICEAT: {
      const attackSpeedSlow = fixed(ICeatAbilityData.AUTOATTACK_SLOW_ATTACKSPEED * 100, 1)
      return {
        tier1_left: {
          title: {
            en: 'Basic Attack Slow',
            ru: 'Атаки становятся замедляющими',
            cz: 'Základní útok zpomalí',
            zh: '基礎攻擊減速',
            fr: 'Ralentissement des attaques de base',
            br: 'Ataque Básico Lento',
            vi: 'Chậm tấn công cơ bản',
          },
          description: {
            en: `Your Basic Attacks reduce enemy Movement Speed by <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> and reduce enemy Attack Speed by <b>${attackSpeedSlow}%</b>`,
            ru: `Ваши атаки будут уменьшать скорость передвижения целей на <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> и их скорость атаки на <b>${attackSpeedSlow}%</b>`,
            cz: `Vaše základní útoky sníží rychlost pohybu nepřátel o <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> a sníží rychlost útoku nepřátel o <b>${attackSpeedSlow}%</b>`,
            zh: `你的基礎攻擊減少敵人移動速度 <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> 並減少敵人攻擊速度 <b>${attackSpeedSlow}%</b>`,
            fr: `Vos attaques de base réduisent la vitesse de déplacement des ennemis de <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> et réduisent la vitesse d'attaque des ennemis de <b>${attackSpeedSlow}%</b>`,
            br: `Seus ataques básicas reduzem a Velocidade de Movimento do inimigo em <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> e reduzem a Velocidade de Ataque do inimigo em <b>${attackSpeedSlow}%</b>`,
            vi: `Các đòn tấn công cơ bản của bạn giảm Tốc độ Di chuyển của kẻ địch <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> và giảm Tốc độ Tấn công của kẻ địch <b>${attackSpeedSlow}%</b>`,
            id: `Serangan Dasar Anda mengurangi Kecepatan Gerakan musuh sebesar <b>${ICeatAbilityData.AUTOATTACK_SLOW_MOVESPEED}</b> dan mengurangi Kecepatan Serangan musuh sebesar <b>${attackSpeedSlow}%</b>`,
          },
        },
        tier1_right: {
          title: {
            en: `Cold Embrace Movement Speed +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            ru: `+${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS} к скорости передвижения во время действия Объятий холода`,
            cz: `Zimní objetí rychlost pohybu +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            zh: `冰冷懷抱移動速度 +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            fr: `Vitesse de déplacement de l'étreinte froide +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            br: `Velocidade de Movimento do Abraço Frio +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            vi: `Tốc độ di chuyển của Ôm lạnh +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
            id: `Kecepatan Gerakan Pelukan Dingin +${ICeatAbilityData.TALENT_T1_RIGHT_COLD_EMBRACE_BONUS_MS}`,
          },
        },
        tier2_left: {
          title: {
            en: `Icicle Bolt freeze +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            ru: `+${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)} сек. к обездвиживанию Сосулек`,
            cz: `Icicle Bolt zmrazení +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            zh: `寒冰飛箭凍結 +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}秒`,
            fr: `Gel de glace +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            br: `Gelo do Pico +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            vi: `Đóng băng Icicle Bolt +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
            id: `Icicle Bolt membekukan +${toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: `Cold Embrace Duration +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            ru: `+${toSecRaw(
              ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION
            )} сек. к длительности Объятий холода`,
            cz: `Zimní objetí trvání +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            zh: `冰冷懷抱持續時間 +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            fr: `Durée de l'étreinte froide +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            br: `Duração do Abraço Frio +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            vi: `Thời lượng Ôm lạnh +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
            id: `Durasi Pelukan Dingin +${toSecRaw(ICeatAbilityData.TALENT_T2_RIGHT_COLD_EMBRACE_DURATION)}s`,
          },
        },
      }
    }

    case Shared.HEROES.VEIL: {
      const astralStepCooldown = toSecRaw(VeilAbilityData.TALENT_T2_RIGHT_FUSED_ASTRAL_STEP_COOLDOWN)
      const astralstepSlow = toSecRaw(VeilAbilityData.TALENT_T1_LEFT_VOID_STEP_SLOW_DURATION)
      return {
        tier1_left: {
          title: {
            en: `Astral Step Slow Duration +${astralstepSlow}s`,
            ru: `+${astralstepSlow} сек. к замедлению от Астрального шага`,
            cz: `Astral Step zpomalení trvání +${astralstepSlow}s`,
            zh: `星光飛躍減速持續時間 +${astralstepSlow}秒`,
            fr: `Durée du ralentissement de l'Astral Step +${astralstepSlow}s`,
            br: `Duração da desaceleração do Passo Astral +${astralstepSlow}s`,
            vi: `Thời lượng chậm của Bước Sao +${astralstepSlow}s`,
            id: `Durasi Pelambatan Langkah Astral +${astralstepSlow}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Astral Blades Cooldown ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            ru: `${toSecRaw(
              VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN
            )} сек. перезарядки Астральных клинков`,
            cz: `Astral Blades obnovení ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            zh: `星光刀刃冷卻 ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}秒`,
            fr: `Recharge des lames astrales ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            br: `Recarga das Lâminas Astrais ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            vi: `Hồi chiêu Astral Blades ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
            id: `Cooldown Astral Blades ${toSecRaw(VeilAbilityData.TALENT_T1_RIGHT_ASTRAL_BLADES_COOLDOWN)}s`,
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
            zh: `強化後傷害 +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            fr: `Dégâts améliorés +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            br: `Dano Aprimorado +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            vi: `Sức mạnh tăng cường +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
            id: `Kerusakan Ditingkatkan +${fixed((VeilAbilityData.TALENT_T2_LEFT_ENHANCED_DAMAGE - 1) * 100, 1)}%`,
          },
        },
        tier2_right: {
          title: {
            en: 'Fused Astral Step',
            ru: 'Астральное мастерство',
            cz: 'Sloučený Astrální krok',
            zh: '融合星光飛躍',
            fr: 'Pas astral fusionné',
            br: 'Passo Astral Fundido',
            vi: 'Bước Sao Hợp Nhất',
            id: 'Langkah Astral Digabungkan',
          },
          description: {
            en:
              `Reduces the cooldown of Astral Step by ${astralStepCooldown}s \n` +
              'Enhanced Astral Step resets its cooldown even if no enemy is hit.',
            ru:
              `Перезарядка Астрального шага снижается на ${astralStepCooldown} сек. \n` +
              'Больше нет необходимости попадать по врагу усиленным Астральным шагом, чтобы сбросить его перезарядку',
            cz:
              `Sníží obnovení Astrálního kroku o ${astralStepCooldown}s \n` +
              'Zlepšený Astrální krok resetuje své obnovení i když nezasáhne žádného nepřítele.',
            zh: `減少星光飛躍冷卻時間 ${astralStepCooldown}秒 \n` + '即使沒擊中敵人也會重置強化後星光飛躍的冷卻時間。',
            fr:
              `Réduit le temps de recharge du Pas astral de ${astralStepCooldown}s \n` +
              "Le Pas astral amélioré réinitialise son temps de recharge même si aucun ennemi n'est touché.",
            br:
              `Reduz o tempo de recarga do Passo Astral em ${astralStepCooldown}s \n` +
              'O Passo Astral aprimorado reseta seu tempo de recarga mesmo que nenhum inimigo seja atingido.',
            vi:
              `Giảm thời gian hồi chiêu của Bước Sao bởi ${astralStepCooldown}s \n` +
              'Bước Sao tăng cường sẽ đặt lại thời gian hồi chiêu ngay cả khi không đánh trúng kẻ địch nào.',
            id:
              `Mengurangi cooldown Langkah Astral sebesar ${astralStepCooldown}s \n` +
              'Langkah Astral yang Ditingkatkan mengatur ulang cooldown-nya bahkan jika tidak ada musuh yang terkena.',
          },
        },
      }
    }

    case Shared.HEROES.BELLE: {
      const floralAmbushHeal = fixed(BelleAbilityData.TALENT_T2_LEFT_FLORAL_AMBUSH_HEAL * 100)
      const pricklyAttachDuration = toSecRaw(BelleAbilityData.TALENT_T2_RIGHT_REDUCE_PRICKLY_VINE_ATTACH_DURATION)
      return {
        tier1_left: {
          title: {
            en: `Prickly Vine Duration +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            ru: `+${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)} сек. оглушения от Колючей лозы`,
            cz: `Trnitý vinný trn trvání +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            zh: `荊棘藤蔓持續時間 +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}秒`,
            fr: `Durée de la vigne épineuse +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            br: `Duração da Videira Espinhosa +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            vi: `Thời lượng của Cây Gai +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
            id: `Durasi Ranting Berduri +${toSecRaw(BelleAbilityData.TALENT_T1_LEFT_PRICKLY_VINE_STUN_BONUS)}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Floral Ambush -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Movement Speed`,
            ru: `Цветочная ловушка снижает скорость передвижения врагов на -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW}`,
            cz: `Květinový útok -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} rychlost pohybu`,
            zh: `鮮花伏擊 -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} 移動速度`,
            fr: `Embûche florale -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Vitesse de déplacement`,
            br: `Emboscada Floral -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Velocidade de Movimento`,
            vi: `Bẫy Hoa -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Tốc độ Di chuyển`,
            id: `Emboscada Floral -${BelleAbilityData.TALENT_T1_RIGHT_FLORAL_AMBUSH_SLOW} Kecepatan Gerakan`,
          },
        },
        tier2_left: {
          title: {
            en: 'Floral Rejuvenation',
            ru: 'Цветочное оздоровление',
            cz: 'Květinová obnova',
            zh: '療育鮮花',
            fr: 'Rajeunissement floral',
            br: 'Rejuvenescimento Floral',
            vi: 'Hồi phục Hoa hồi',
            id: 'Pemulihan Floral',
          },
          description: {
            en: `Explosion of Floral Ambush heals all nearby allies for ${floralAmbushHeal}% of the damage.`,
            ru: `Взрыв Цветочной ловушки лечит всех ближайших союзников на ${floralAmbushHeal}% от нанесённого урона`,
            cz: `Exploze Květinového útoku léčí všechny nedaleké spojence za ${floralAmbushHeal}% poškození`,
            zh: `鮮花伏擊的爆炸為所有附近盟友治癒 ${floralAmbushHeal}% 傷害`,
            fr: `L'explosion de l'embuscade florale soigne tous les alliés proches pour ${floralAmbushHeal}% des dégâts`,
            br: `A explosão da Emboscada Floral cura todos os aliados próximos em ${floralAmbushHeal}% do dano`,
            vi: `Vụ nổ của Bẫy Hoa hồi phục tất cả đồng minh gần đó ${floralAmbushHeal}% sát thương`,
            id: `Ledakan Emboscada Floral menyembuhkan semua sekutu terdekat sebesar ${floralAmbushHeal}% dari kerusakan`,
          },
        },
        tier2_right: {
          title: {
            en: `Prickly Vine attach delay -${pricklyAttachDuration}s`,
            ru: `Колючая лоза прикрепляется быстрее на ${pricklyAttachDuration} сек.`,
            cz: `Trnitý vinný trn se připevní o ${pricklyAttachDuration}s rychleji`,
            zh: `荊棘藤蔓附著延遲 -${pricklyAttachDuration}秒`,
            fr: `Délai de fixation de la vigne épineuse -${pricklyAttachDuration}s`,
            br: `Atraso de fixação da Videira Espinhosa -${pricklyAttachDuration}s`,
            vi: `Độ trễ của Cây Gai -${pricklyAttachDuration}s`,
            id: `Keterlambatan pemasangan Ranting Berduri -${pricklyAttachDuration}s`,
          },
        },
      }
    }
    case Shared.HEROES.FLIN: {
      const splitDamage = getDamage(FlinAbilityData.ATTACK_SPLIT_DAMAGE * 100)
      const preciseShotDamage = fixed(FlinAbilityData.TALENT_T2_LEFT_PRECISESHOT_DAMAGE * 100, 1)
      return {
        tier1_left: {
          title: {
            en: `Attack Range +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            ru: `+${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE} дальности атаки`,
            cz: `Dosah útoku +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            zh: `攻擊射程 +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}像素`,
            fr: `Portée d'attaque +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            br: `Alcance do Ataque +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            vi: `Tầm đánh +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
            id: `Jangkauan Serangan +${FlinAbilityData.TALENT_T1_LEFT_ATTACK_RANGE}px`,
          },
        },
        tier1_right: {
          title: {
            en: `Marksmanship +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} stacks`,
            ru: `+${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} зарядов Меткой стрельбы`,
            cz: `Míření +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} zásob`,
            zh: `精通箭術 +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} 發`,
            fr: `Tir de précision +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} charges`,
            br: `Precisão +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} cargas`,
            vi: `Bắn Chính Xác +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} lần`,
            id: `Menembak +${FlinAbilityData.TALENT_T1_RIGHT_MM_STACKS} tumpukan`,
          },
        },
        tier2_left: {
          title: {
            en: `Precise Shot +${preciseShotDamage}% Damage & Range`,
            ru: `Меткий выстрел: +${preciseShotDamage}% урона и дальности`,
            cz: `Přesný výstřel +${preciseShotDamage}% poškození a dosahu`,
            zh: `精準射擊 +${preciseShotDamage}% 傷害和射程`,
            fr: `Tir précis +${preciseShotDamage}% de dégâts et de portée`,
            br: `Tiro Preciso +${preciseShotDamage}% de Dano e Alcance`,
            vi: `Bắn Chính Xác +${preciseShotDamage}% Sát thương & Tầm`,
            id: `Tembakan Tepat +${preciseShotDamage}% Kerusakan & Jangkauan`,
          },
        },
        tier2_right: {
          title: {
            en: 'Marksman - Multishot',
            ru: 'Меткая стрельба получает эффект Залпа',
            cz: 'Míření - Vícestřel',
            zh: '神射手 - 多重射擊',
            fr: 'Tir de précision - Tir multiple',
            br: 'Atirador - Tiro Múltiplo',
            vi: 'Bắn Chính Xác - Bắn Nhiều',
            id: 'Marksman - Multishot',
          },
          description: {
            en: `Flin fires an additional 2 arrows, angled at 30°, dealing ${splitDamage}% Normal Damage per extra arrow.`,
            ru: `Залп: Флин выпускает дополнительно 2 стрелы под углом 30 градусов при каждой атаке, каждая из которых наносит ${splitDamage}% физического урона.`,
            cz: `Vícestřel: Flin vystřelí další 2 šípy pod úhlem 30°, každý z nich způsobí ${splitDamage}% normálního poškození.`,
            zh: `弗林發射2隻額外的弓箭，角度為30°，每支額外弓箭造成 ${splitDamage}%一般傷害。`,
            fr: `Tir multiple : Flin tire 2 flèches supplémentaires, inclinées à 30°, infligeant ${splitDamage}% de dégâts normaux par flèche supplémentaire.`,
            br: `Tiro Múltiplo: Flin dispara 2 flechas adicionais, inclinadas a 30°, causando ${splitDamage}% de Dano Normal por flecha extra.`,
            vi: `Bắn Nhiều: Flin bắn thêm 2 mũi tên, góc 30°, gây ${splitDamage}% Sát thương Thường cho mỗi mũi tên bổ sung.`,
            id: `Marksman - Multishot: Flin menembakkan 2 anak panah tambahan, miring 30°, memberikan ${splitDamage}% Kerusakan Normal per anak panah tambahan.`,
          },
        },
      }
    }

    case Shared.HEROES.THOMAS: {
      const carrotStun = toSecRaw(ThomasAbilityData.TALENT_T2_RIGHT_SHADOW_CARROT_STUN)
      const bleedDamage = getDamage(ThomasAbilityData.TALENT_T2_LEFT_BLEED_DAMAGE * 100)
      const bleedDuration = toSecRaw(ThomasAbilityData.TALENT_T2_LEFT_BLEED_DAMAGE_DURATION)
      const bleedCooldown = toSecRaw(ThomasAbilityData.TALENT_T2_LEFT_BLEED_COOLDOWN)
      const shurrikenTossCooldown = toSecRaw(ThomasAbilityData.TALENT_T1_RIGHT_SHURRIKEN_TOSS_COOLDOWN)
      return {
        tier1_left: {
          title: {
            en: `Shadow Carrot +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Damage`,
            ru: `+${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} к урону от Теневой моркови`,
            cz: `Stínová mrkev +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} poškození`,
            zh: `闇影蘿蔔 +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} 傷害`,
            fr: `Carotte d'ombre +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} dégâts`,
            br: `Cenoura Sombria +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} de Dano`,
            vi: `Cà rốt Bóng +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Sát thương`,
            id: `Wortel Bayangan +${ThomasAbilityData.TALENT_T1_LEFT_SHADOW_CARROT_DAMAGE} Kerusakan`,
          },
        },
        tier2_left: {
          title: {
            en: 'Bleed Attack',
            ru: 'Режущая атака',
            cz: 'Krvácející útok',
            zh: '流血攻擊',
            fr: 'Attaque sanguinolente',
            br: 'Ataque Sangrento',
            vi: 'Đòn tấn công Chảy máu',
            id: 'Serangan Berdarah',
          },
          description: {
            en: `Thomas' Basic Attacks apply a Bleed effect, dealing ${bleedDamage}% of his Attack Damage over ${bleedDuration}s and reduce armor by ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}. 
            \nThis effect can occur once every ${bleedCooldown}s.`,
            ru: `Атаки Томаса накладывают эффект Кровотечения на врага, наносящий ${bleedDamage}% от его силы атаки в течение ${bleedDuration} сек. и снижающий броню на ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}.
            \nЭтот эффект может происходить один раз в ${bleedCooldown} секунд.`,
            cz: `Základní útoky Thomase aplikují efekt Krvácení, který způsobí ${bleedDamage}% jeho útoku po
            dobu ${bleedDuration}s a sníží obranu o ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}.
            \nTento efekt může nastat jednou za ${bleedCooldown}s.`,
            zh: `湯瑪士的基本攻擊造成流血效果，持續 ${bleedDuration}秒，造成 ${bleedDamage}%攻擊傷害，減少 ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}裝甲值。
            \n此效果每${bleedCooldown}秒可發動一次。`,
            fr: `Les attaques de base de Thomas appliquent un effet de saignement, infligeant ${bleedDamage}% de ses dégâts d'attaque sur ${bleedDuration}s et réduisant l'armure de ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}.
            \nCet effet peut se produire une fois toutes les ${bleedCooldown}s.`,
            br: `Os Ataques Básicos de Thomas aplicam um efeito de Sangramento, causando ${bleedDamage}% de seu Dano de Ataque ao longo de ${bleedDuration}s e reduzindo a armadura em ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}.
            \nEste efeito pode ocorrer uma vez a cada ${bleedCooldown}s.`,
            vi: `Các đòn tấn công cơ bản của Thomas áp dụng hiệu ứng Chảy máu, gây ${bleedDamage}% Sát thương Tấn công của anh ta trong ${bleedDuration}s và giảm giáp bởi ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}.
            \nHiệu ứng này có thể xảy ra mỗi ${bleedCooldown}s.`,
            id: `Serangan Dasar Thomas menerapkan efek Pendarahan, menangani ${bleedDamage}% Kerusakan Serangannya selama ${bleedDuration}s dan mengurangi pertahanan sebesar ${ThomasAbilityData.TALENT_T2_LEFT_BLEED_ARMOR_REDUCTION}.
            \nEfek ini dapat terjadi sekali setiap ${bleedCooldown}s.`,
          },
        },
        tier1_right: {
          title: {
            en: `Shuriken Toss Cooldown ${shurrikenTossCooldown}`,
            ru: `${shurrikenTossCooldown} сек. перезарядки Броска сюрикена`,
            cz: `Shuriken Toss obnovení ${shurrikenTossCooldown}`,
            zh: `手裏劍投擲冷卻 ${shurrikenTossCooldown}`,
            fr: `Recharge du lancer de shuriken ${shurrikenTossCooldown}`,
            br: `Recarga do Arremesso de Shuriken ${shurrikenTossCooldown}`,
            vi: `Hồi chiêu Shuriken Toss ${shurrikenTossCooldown}`,
            id: `Cooldown Shuriken Toss ${shurrikenTossCooldown}`,
          },
        },
        tier2_right: {
          title: {
            en: `Shadow Carrot Stun ${carrotStun}s`,
            ru: `Теневая морковь при повторной активации оглушает врага на ${carrotStun} сек.`,
            cz: `Stínová mrkev omráčí nepřítele na ${carrotStun}s`,
            zh: `闇影蘿蔔暈眩 ${carrotStun}秒`,
            fr: `Carotte d'ombre Étourdissement ${carrotStun}s`,
            br: `Cenoura Sombria Atordoamento ${carrotStun}s`,
            vi: `Cà rốt Bóng Choáng ${carrotStun}s`,
            id: `Wortel Bayangan Stun ${carrotStun}s`,
          },
        },
      }
    }

    case Shared.HEROES.ALVAR: {
      const furiousKickLifesteal = fixed(AlvarAbilityData.TALENT_T1_FURIOUS_KICK_BONUS_LIFESTEAL * 100, 1)
      return {
        tier1_left: {
          title: {
            en: `Divine Mark Damage +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            ru: `+${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE} к урону метки`,
            cz: `Boží značka poškození +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            zh: `神聖印記傷害 +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            fr: `Dégâts de la marque divine +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            br: `Dano da Marca Divina +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            vi: `Sát thương dấu Chúa +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
            id: `Kerusakan Tanda Ilahi +${AlvarAbilityData.TALENT_T1_LEFT_MARK_DAMAGE}`,
          },
        },
        tier1_right: {
          title: {
            en: `Furious Kick +${furiousKickLifesteal}% lifesteal`,
            ru: `Яростный удар даёт +${furiousKickLifesteal}% Кражи здоровья`,
            cz: `Furious Kick +${furiousKickLifesteal}% životů`,
            zh: `憤怒之踢 +${furiousKickLifesteal}% 生命偷取`,
            fr: `Furious Kick +${furiousKickLifesteal}% vol de vie`,
            br: `Furious Kick +${furiousKickLifesteal}% Roubo de Vida`,
            vi: `Furious Kick +${furiousKickLifesteal}% hút máu`,
            id: `Furious Kick +${furiousKickLifesteal}% lifesteal`,
          },
          description: {
            en: `Furious Kick bonus in addition also increase lifesteal by ${furiousKickLifesteal}%`,
            ru: `Усиление от Яростного удара также даёт +${furiousKickLifesteal}% Кражи здоровья`,
            cz: `Furious Kick bonus navíc zvyšuje životy o ${furiousKickLifesteal}%`,
            zh: `憤怒之踢額外增加生命偷取獎勵 ${furiousKickLifesteal}%`,
            fr: `Le bonus de Furious Kick augmente également le vol de vie de ${furiousKickLifesteal}%`,
            br: `O bônus do Furious Kick também aumenta o roubo de vida em ${furiousKickLifesteal}%`,
            vi: `Furious Kick thưởng cũng tăng hút máu thêm ${furiousKickLifesteal}%`,
            id: `Bonus Furious Kick juga meningkatkan lifesteal sebesar ${furiousKickLifesteal}%`,
          },
        },
        tier2_left: {
          title: {
            en: `Furious Kick Stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            ru: `+${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)} сек. оглушения от Яростного удара`,
            cz: `Furious Kick omráčení +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            zh: `憤怒之踢暈眩 +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}秒`,
            fr: `Étourdissement de Furious Kick +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            br: `Furious Kick Atordoamento +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            vi: `Furious Kick Choáng +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
            id: `Furious Kick Stun +${toSecRaw(AlvarAbilityData.TALENT_T2_LEFT_FURIOUS_KICK_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: `Heavenly Kick Cooldown ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            ru: `${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)} сек. перезарядки Небесного удара`,
            cz: `Heavenly Kick obnovení ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            zh: `天堂之踢冷卻 ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}秒`,
            fr: `Recharge de Heavenly Kick ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            br: `Recarga do Chute Celestial ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            vi: `Hồi chiêu Heavenly Kick ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
            id: `Cooldown Heavenly Kick ${toSecRaw(AlvarAbilityData.TALENT_T2_RIGHT_HEAVENLY_KICK_COOLDOWN)}s`,
          },
        },
      }
    }
    case Shared.HEROES.AREL: {
      const tickingBombDamage = fixed(ArelAbilityData.TALENT_T1_LEFT_TICKING_BOMB_BONUS * 100)
      const freezingTrapDuration = toSec(ArelAbilityData.FREEZING_TRAP_DURATION)
      const freezingTrapFreezeDuration = toSec(ArelAbilityData.FREEZING_TRAP_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: `Ticking Bomb +${tickingBombDamage}% Trigger Damage`,
            ru: `+${tickingBombDamage}% к урону активированной Часовой бомбы`,
            cz: `Ticking Bomb +${tickingBombDamage}% spouštěcí poškození`,
            zh: `定時炸彈 +${tickingBombDamage}% 引爆傷害`,
            fr: `Ticking Bomb +${tickingBombDamage}% Dégâts de déclenchement`,
            br: `Ticking Bomb +${tickingBombDamage}% Dano de Gatilho`,
            vi: `Ticking Bomb +${tickingBombDamage}% Sát thương Kích hoạt`,
            id: `Ticking Bomb +${tickingBombDamage}% Pemicu Kerusakan`,
          },
        },
        tier1_right: {
          title: {
            en: `Basic Attack Range +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            ru: `+${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE} к дальности атаки`,
            cz: `Základní útok Dosah +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            zh: `基礎攻擊射程 +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}像素`,
            fr: `Portée d'attaque de base +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            br: `Alcance do Ataque Básico +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            vi: `Tầm Đánh Cơ Bản +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
            id: `Jarak Serangan Dasar +${ArelAbilityData.TALENT_T1_RIGHT_ATTACK_DISTANCE}px`,
          },
        },
        tier2_left: {
          title: {
            en: `Ticking Bomb Stun +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            ru: `+${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN} сек. к оглушению Часовой бомбы`,
            cz: `Ticking Bomb omráčení +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            zh: `定時炸彈暈眩 +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}毫秒`,
            fr: `Ticking Bomb Étourdissement +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            br: `Ticking Bomb Atordoamento +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            vi: `Ticking Bomb Choáng +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
            id: `Ticking Bomb Stun +${ArelAbilityData.TALENT_T2_LEFT_TICKING_BOMB_STUN}ms`,
          },
        },
        tier2_right: {
          title: {
            en: 'Tumble - Freezing Trap',
            ru: 'Кувырок создаёт Замораживающую ловушку',
            cz: 'Tumble - Zmrazující past',
            zh: '翻跟斗 - 凍結陷阱',
            fr: 'Tumble - Piège de glace',
            br: 'Tumble - Armadilha Congelante',
            vi: 'Tumble - Bẫy Đóng Băng',
            id: 'Tumble - Perangkap Pembekuan',
          },
          description: {
            en:
              `Tumble creates a freezing trap at Arel's position. When an enemy unit steps on the trap, they will be frozen for ${freezingTrapFreezeDuration}, preventing all forms of movement.` +
              `<br/> The trap lasts for ${freezingTrapDuration} and provides vision in a small radius.`,
            ru:
              `Кувырок  создаст Замораживающую ловушку на позиции Арела, которая обездвижит наступившего в неё врага на ${freezingTrapFreezeDuration}` +
              `<br/> Замораживающая ловушка существует ${freezingTrapDuration} и даёт небольшой обзор вокруг себя`,
            cz:
              `Tumble vytvoří zmrazující past na pozici Arela. Když na past vstoupí nepřátelská jednotka, bude zmrazena po dobu ${freezingTrapFreezeDuration}, což zamezí veškerému pohybu.` +
              `<br/> Past trvá ${freezingTrapDuration} a poskytuje viditelnost v malém poloměru.`,
            zh:
              `艾瑞爾在翻跟斗處設置一個凍結陷阱。當敵方單位踩到陷阱時，他們將被凍結 ${freezingTrapFreezeDuration}，阻止所有形式的移動。` +
              `<br/> 陷阱持續 ${freezingTrapDuration} 並在小範圍內提供視野。`,
            fr:
              `Tumble crée un piège de glace à la position d'Arel. Lorsqu'une unité ennemie marche sur le piège, elle est gelée pendant ${freezingTrapFreezeDuration}, empêchant tout mouvement.` +
              `<br/> Le piège dure ${freezingTrapDuration} et fournit une vision dans un petit rayon.`,
            br:
              `Tumble cria uma armadilha congelante na posição de Arel. Quando uma unidade inimiga pisa na armadilha, ela é congelada por ${freezingTrapFreezeDuration}, impedindo qualquer forma de movimento.` +
              `<br/> A armadilha dura ${freezingTrapDuration} e fornece visão em um pequeno raio.`,
            vi:
              `Tumble tạo ra một bẫy đóng băng tại vị trí của Arel. Khi một đơn vị địch bước vào bẫy, họ sẽ bị đóng băng trong ${freezingTrapFreezeDuration}, ngăn mọi hình thức di chuyển.` +
              `<br/> Bẫy tồn tại trong ${freezingTrapDuration} và cung cấp tầm nhìn trong bán kính nhỏ.`,
            id:
              `Tumble membuat perangkap pembekuan di posisi Arel. Ketika unit musuh melangkah di perangkap, mereka akan membeku selama ${freezingTrapFreezeDuration}, mencegah semua bentuk pergerakan.` +
              `<br/> Perangkap bertahan selama ${freezingTrapDuration} dan memberikan visi dalam radius kecil.`,
          },
        },
      }
    }

    case Shared.HEROES.HAZEL:
      return {
        tier1_left: {
          title: {
            en: `Triumphant Regeneration`,
            ru: `Триумфальная регенерация`,
            cz: `Triumfální regenerace`,
            br: `Regeneração Triunfante`,
            zh: `勝利的再生`,
            fr: `Régénération triomphante`,
            vi: `Tái Sinh Thắng Lợi`,
            id: `Regenerasi Triumphant`,
          },
          description: {
            en: `Triumphant Upheaval heals Hazel for ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% of the damage dealt.`,
            ru: `Триумфальный переворот лечит Хейзел на ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% от нанесённого урона.`,
            cz: `Triumfální Povstání léčí Hazel o ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% způsobeného poškození.`,
            zh: `勝利的動盪治癒哈傑爾 ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% 造成的傷害。`,
            fr: `Le Soulèvement triomphant soigne Hazel pour ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% des dégâts infligés.`,
            br: `O Levante Triunfante cura Hazel em ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% do dano causado.`,
            vi: `Triumphant Upheaval hồi phục cho Hazel ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% sát thương gây ra.`,
            id: `Triumphant Upheaval menyembuhkan Hazel sebesar ${HazelAbilityData.TALENT_T1_LEFT_SHOCKWAVE_HEALING * 100}% dari kerusakan yang diterima.`,
          },
        },
        tier1_right: {
          title: {
            en: `Justice's Wrath +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Damage`,
            ru: `+${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} к урону от Гнева правосудия`,
            cz: `Hnev spravodlivosti +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} poškození`,
            br: `Ira da Justiça +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} de Dano`,
            fr: `Colère de la Justice +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} dégâts`,
            zh: `正義之怒 +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} 傷害`,
            vi: `Sức Mạnh Công Lý +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Sát thương`,
            id: `Kemarahan Keadilan +${HazelAbilityData.TALENT_T1_RIGHT_HAMMER_BASE_DAMAGE} Kerusakan`,
          },
        },
        tier2_left: {
          title: {
            en: `Justice's Wrath Stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            ru: `+${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)} сек. оглушения от Гнева правосудия`,
            cz: `Hnev spravodlivosti omráčení +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            br: `Ira da Justiça Atordoamento +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            zh: `正義之怒暈眩 +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}秒`,
            fr: `Colère de la Justice Étourdissement +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            vi: `Sức Mạnh Công Lý Choáng +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
            id: `Kemarahan Keadilan Stun +${toSecRaw(HazelAbilityData.TALENT_T2_LEFT_HAMMER_STUN_DURATION)}s`,
          },
        },
        tier2_right: {
          title: {
            en: 'Triumphant Upheaval Immunity',
            cz: 'Triumfálne prevraty imunita',
            br: 'Imunidade do Levante Triunfante',
            zh: '勝利的動盪免疫',
            fr: 'Immunité au Soulèvement triomphant',
            ru: 'Иммунитет при Триумфальном перевороте',
            vi: 'Miễn Dịch Triumphant Upheaval',
            id: 'Kekebalan Triumphant Upheaval',
          },
          description: {
            en: 'Hazel is immune to all damage and crowd control effects while charing Triumphant Upheaval.',
            ru: 'Хейзел получает иммунитет к любому урону и эффектам контроля во время подготовки Триумфального переворота.',
            cz: 'Hazel je imunní vůči veškerému poškození a efektům kontroly davu během nabíjení Triumfálního povstání.',
            br: 'Hazel é imune a todo dano e efeitos de controle de multidão enquanto carrega o Levante Triunfante.',
            zh: '哈傑爾在充能勝利的動盪時無視所有傷害和集體控制效果。',
            fr: 'Hazel est immunisé contre tous les dégâts et les effets de contrôle de foule pendant la charge du Soulèvement triomphant.',
            vi: 'Hazel miễn dịch với tất cả sát thương và hiệu ứng kiểm soát đám đông trong khi sạc Triumphant Upheaval.',
            id: 'Hazel kebal terhadap semua kerusakan dan efek kontrol kerumunan saat mengisi Triumphant Upheaval.',
          },
        },
      }

    case Shared.HEROES.KIRA:
      return {
        tier1_left: {
          title: {
            en: `Lightning Shock Duration +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            ru: `+${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)} сек. к длительности Удара молнии`,
            cz: `Úder blesku trvání +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            zh: `閃電衝擊持續時間 +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}秒`,
            fr: `Durée de l'impact de foudre +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            br: `Duração do Choque de Raios +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            vi: `Thời lượng Choáng Sét +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
            id: `Durasi Pukulan Petir +${toSecRaw(KiraAbilityData.TALENT_T1_LEFT_ENH_ATTACK_DURATION)}s`,
          },
        },
        tier1_right: {
          title: {
            en: `Rain of Spark ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}ms slow`,
            ru: `Дождь искр замедляет на ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}мс`,
            cz: `Déšť jisker zpomaluje o ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}ms`,
            zh: `電光雷雨減速 ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}毫秒`,
            fr: `Pluie d'étincelles ralentit de ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}ms`,
            br: `Relâmpago do Abismo reduz em ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}ms`,
            vi: `Mưa Tia chớp ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}ms chậm`,
            id: `Hujan Spark ${KiraAbilityData.TALENT_T1_RIGHT_RAIN_OF_SPARKS_SLOW_PER_STACK}ms lambat`,
          },
        },
        tier2_left: {
          title: {
            en: `Rain of Spark +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} spark`,
            // Translate also the name of spell
            ru: `+${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} искр у Дождя искр`,
            cz: `Déšť jisker +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} jiskra`,
            zh: `電光雷雨 +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} 電光`,
            fr: `Pluie d'étincelles +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} étincelle`,
            br: `Relâmpago do Abismo +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} faísca`,
            vi: `Mưa Tia chớp +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} tia chớp`,
            id: `Hujan Spark +${KiraAbilityData.TALENT_T2_RAIN_OF_SPARKS_BONUS_COUNT} percikan`,
          },
        },
        tier2_right: {
          title: {
            en: `Chain lightning`,
            ru: `Цепная молния`,
            cz: `Řetězová blesk`,
            zh: `連鎖閃電`,
            fr: `Chaîne d'éclair`,
            br: `Raio em Cadeia`,
            vi: `Sét chuỗi`,
            id: `Rantai petir`,
          },
          description: {
            en: `Lightning shock now chain to closest unit, can be enemy or friendly and apply the Lightning Shock effect with 25% less effect per chain.`,
            ru: `Удар молнии теперь перепрыгивает на ближайшую цель, которая может быть врагом или союзником, и накладывает эффект Удара молнии с уменьшением эффекта на 25% за каждое перепрыгивание.`,
            cz: `Úder blesku se nyní řetí k nejbližší jednotce, může to být nepřítel nebo spojenec a aplikuje efekt Úder
            blesku s 25% menším efektem za řetěz.`,
            zh: `閃電衝擊現在連鎖到最近的單位，可以是敵人或友軍，每次連鎖減少 25% 的效果。`,
            fr: `L'impact de foudre se chaîne désormais à l'unité la plus proche, qu'il s'agisse d'un ennemi ou d'un allié, et applique l'effet de choc de foudre avec 25% d'effet en moins par chaîne.`,
            br: `O Choque de Raios agora encadeia para a unidade mais próxima, podendo ser inimiga ou aliada, e aplica o efeito de Choque de Raios com 25% menos efeito por encadeamento.`,
            vi: `Sét giờ có thể chuỗi đến đơn vị gần nhất, có thể là địch hoặc đồng minh và áp dụng hiệu ứng Sét với hiệu ứng giảm 25% mỗi chuỗi.`,
            id: `Petir sekarang berantai ke unit terdekat, bisa musuh atau teman dan menerapkan efek Petir dengan efek 25% lebih sedikit per rantai.`,
          },
        },
      }

    case Shared.HEROES.FOXY: {
      const incendiaryGrenadeDamage = fixed(FoxyAbilityData.TALENT_T1_LEFT_GRANADE_DAMAGE_PERC * 100)
      const freezingGrenadeDuration = toSec(FoxyAbilityData.TALENT_T1_RIGHT_GRANADE_FREEZE_DURATION)
      return {
        tier1_left: {
          title: {
            en: 'Incendiary Grenade',
            ru: 'Зажигательная граната',
            cz: 'Zápalná granát',
            zh: '烈火燃燒彈',
            fr: 'Grenade incendiaire',
            br: 'Granada Incendiária',
            vi: 'Lựu Đạn Châm Ngòi',
            id: 'Granat Penyala',
          },
          description: {
            en: `Explosive Grenade ignites enemies, dealing ${incendiaryGrenadeDamage}% of target's max health as bonus Magic Damage per second for a short duration.`,
            ru: `Взрывная граната поджигает задетых врагов, нанося дополнительно ${incendiaryGrenadeDamage}% от макс. Здоровья цели в секунду.`,
            cz: `Explozivní granát zapaluje nepřátele, způsobuje ${incendiaryGrenadeDamage}% maximálního života cíle jako bonusové kouzlo za sekundu po krátkou dobu.`,
            zh: `手榴彈爆炸後點燃敵人，短時間造成每秒目標最大生命值的額外魔法傷害 ${incendiaryGrenadeDamage}%。`,
            fr: `La grenade explosive enflamme les ennemis, infligeant ${incendiaryGrenadeDamage}% des PV max de la cible en dégâts magiques bonus par seconde pendant une courte durée.`,
            br: `Granada Explosiva inflama inimigos, causando ${incendiaryGrenadeDamage}% da vida máxima do alvo como Dano Mágico bônus por segundo por um curto período.`,
            vi: `Lựu Đạn Nổ châm ngòi kẻ thù, gây ${incendiaryGrenadeDamage}% máu tối đa của mục tiêu dưới dạng Sát thương Phép mỗi giây trong một thời gian ngắn.`,
            id: `Granat Peledak menyulut musuh, menangani ${incendiaryGrenadeDamage}% dari maksimal kesehatan target sebagai Bonus Kerusakan Sihir per detik untuk jangka waktu singkat.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Freezing Grenade',
            ru: 'Замораживающая граната',
            cz: 'Mrazící granát',
            zh: '冰凍手榴彈',
            fr: 'Grenade de congélation',
            br: 'Granada Congelante',
            vi: 'Lựu Đạn Đóng Băng',
            id: 'Granat Pembeku',
          },
          description: {
            en: `Explosive Grenade freezes enemies for up to ${freezingGrenadeDuration}, preventing all forms of movement`,
            ru: `Взрывная граната замораживает задетых врагов на ${freezingGrenadeDuration} сек.`,
            cz: `Explozivní granát zmrazuje nepřátele až na ${freezingGrenadeDuration}, což zabraňuje veškerému pohybu`,
            zh: `手榴彈爆炸後凍結敵人最多 ${freezingGrenadeDuration}，阻止所有形式的移動`,
            fr: `La grenade explosive gèle les ennemis pendant ${freezingGrenadeDuration}, empêchant tout mouvement`,
            br: `Granada Explosiva congela inimigos por até ${freezingGrenadeDuration}, impedindo qualquer forma de movimento`,
            vi: `Lựu Đạn Nổ đóng băng kẻ thù lên đến ${freezingGrenadeDuration}, ngăn mọi hình thức di chuyển`,
            id: `Granat Peledak membekukan musuh hingga ${freezingGrenadeDuration}, mencegah semua bentuk pergerakan`,
          },
        },
        tier2_left: {
          title: {
            en: `Grenade radius +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}% к радиусу Взрывной гранаты`,
            cz: `Poloměr granátu +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            zh: `手榴彈半徑 +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            fr: `Rayon de la grenade +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            br: `Raio da granada +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            vi: `Bán kính lựu đạn +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
            id: `Radius Granat +${fixed(FoxyAbilityData.TALENT_T2_LEFT_GRENADE_BONUS_RADIUS * 100)}%`,
          },
        },
        tier2_right: {
          title: {
            en: `Rapid Fire Damage +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            ru: `+${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}% к урону Беглого огня`,
            cz: `Rapid Fire Poškození +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            zh: `極速射擊傷害 +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            fr: `Dégâts de Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            br: `Dano do Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            vi: `Sát Thương Bắn Nhanh +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
            id: `Kerusakan Rapid Fire +${fixed(FoxyAbilityData.TALENT_T2_RIGHT_RAPID_FIRE_DAMAGE * 100)}%`,
          },
        },
      }
    }

    case Shared.HEROES.MAGDALENE: {
      const hauntedGhostsHealing = fixed(MagdaleneAbilityData.TALENT_T1_LEFT_HAUNTED_GHOST_HEAL_ON_EXPIRE * 100)
      return {
        tier1_left: {
          title: {
            en: `Haunted Ghosts Heal`,
            ru: `Одержимый призрак исцеляет`,
            cz: `Léčba Strašidelných duchů`,
            zh: `作祟治癒幽魂`,
            fr: `Soins des Fantômes hantés`,
            br: `Cura dos Fantasmas Assombrados`,
            vi: `Hồi Phục Hồn Ma`,
            id: `Hantu Menyembuhkan`,
          },
          description: {
            en: `Haunted Ghosts returns to the owner and heals for ${hauntedGhostsHealing}% of the damage dealt.`,
            ru: `По возвращению Одержимого призрака к Магдалине, она восстанавливает себе здоровье в размере ${hauntedGhostsHealing}% от нанесенного урона.`,
            cz: `Strašidelné duchy se vrátí majiteli a vyléčí za ${hauntedGhostsHealing}% způsobeného poškození.`,
            zh: `幽靈返回主人時治癒 ${hauntedGhostsHealing}% 造成的傷害。`,
            fr: `Les Fantômes hantés retournent au propriétaire et soignent pour ${hauntedGhostsHealing}% des dégâts infligés.`,
            br: `Os Fantasmas Assombrados retornam ao dono e curam ${hauntedGhostsHealing}% do dano causado.`,
            vi: `Hồn Ma trở lại chủ nhân và hồi phục cho ${hauntedGhostsHealing}% sát thương gây ra.`,
            id: `Hantu kembali ke pemilik dan menyembuhkan ${hauntedGhostsHealing}% dari kerusakan yang diterima.`,
          },
        },
        tier1_right: {
          title: {
            en: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} max stolen souls`,
            ru: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} макс. украденных душ`,
            cz: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} max ukradených duší`,
            zh: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} 最大奪取靈魂數`,
            fr: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} âmes volées max`,
            br: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} almas roubadas máx`,
            vi: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} linh hồn tối đa bị đánh cắp`,
            id: `+${MagdaleneAbilityData.TALENT_T1_RIGHT_BONUS_STACKS} jumlah maksimum jiwa yang dicuri`,
          },
        },
        tier2_left: {
          title: {
            en: `Crippling Ghost`,
            ru: `Цепенящий призрак`,
            cz: `Oslnivý duch`,
            zh: `削弱幽靈`,
            fr: `Fantôme paralysant`,
            br: `Fantasma Paralisante`,
            vi: `Hồn Ma Tê Liệt`,
            id: `Hantu Lumpuh`,
          },
          description: {
            en: `Haunted Ghost applies movement slow ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            ru: `Одержимый призрак снижает скорость передвижения цели на ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            cz: `Strašidelný duch aplikuje zpomalení pohybu ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            zh: `作祟幽魂造成移動減速 ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            fr: `Le Fantôme hanté applique un ralentissement des mouvements ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            br: `O Fantasma Assombrado aplica lentidão de movimento ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            vi: `Hồn Ma áp dụng chậm chuyển động ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
            id: `Hantu Menyebabkan pergerakan lambat ${MagdaleneAbilityData.TALENT_T2_RIGHT_HAUNTED_GHOST_SLOW_MS}.`,
          },
        },
        tier2_right: {
          title: {
            en: `Purging Scream`,
            cz: `Očišťující výkřik`,
            zh: `清除尖叫`,
            fr: `Cri de purification`,
            br: `Grito Purificador`,
            ru: `Очищающий вопль`,
            vi: `Tiếng Hét Làm Sạch`,
            id: `Teriakan Pembersih`,
          },
          description: {
            en: `Scream of Pain now dispels all dispellable positive effects from target.`,
            cz: `Zagrobný výkřik nyní rozptýlí všechny rozptýlitelné pozitivní efekty z cíle.`,
            zh: `痛苦尖叫現在驅散目標身上所有可驅散的正面效果。`,
            fr: `Le cri de douleur dissipe désormais tous les effets positifs dissipables de la cible.`,
            br: `O Grito do Sofrimento agora dissipa todos os efeitos positivos dissipáveis do alvo.`,
            ru: `Загробный вопль теперь рассеивает все рассеиваемые положительные эффекты с цели.`,
            vi: `Tiếng Hét của Đau Đớn giờ đây xua tan tất cả các hiệu ứng tích cực có thể xua tan từ mục tiêu.`,
            id: `Teriakan Nyeri sekarang membubarkan semua efek positif yang bisa dibubarkan dari target.`,
          },
        },
      }
    }

    case Shared.HEROES.PRIM:
      return {
        tier1_left: {
          title: {
            en: 'Enhanced Ball protection',
            ru: 'Шар: защита',
            cz: 'Vylepšená ochrana míče',
            zh: '強化球的守護',
            fr: 'Protection améliorée de la balle',
            br: 'Proteção aprimorada da bola',
            vi: 'Bảo vệ Bóng tăng cường',
            id: 'Proteksi Bola Ditingkatkan',
          },
          description: {
            en: `Enhanced Ball protection provide additional ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} movement speed and ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR} armor, when the ball is attached to a hero.`,
            ru: `Улучшенная защита мяча предоставляет дополнительную скорость передвижения ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} и броню ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR}, когда мяч прикреплен к герою.`,
            cz: `Vylepšená ochrana míče poskytuje dodatečnou rychlost pohybu ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} a brnění ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR}, když je míč připojen k hrdinovi.`,
            zh: `當球附著在英雄身上時，強化球的守護提供英雄 ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} 額外移動速度和 ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR}裝甲值。`,
            fr: `La protection améliorée de la balle fournit une vitesse de déplacement supplémentaire de ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} et une armure de ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR}, lorsque la balle est attachée à un héros.`,
            br: `A Proteção aprimorada da bola fornece velocidade de movimento adicional de ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} e armadura de ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR}, quando a bola está anexada a um herói.`,
            vi: `Bảo vệ Bóng tăng cường cung cấp thêm ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} tốc độ di chuyển và ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR} giáp, khi bóng được gắn vào một anh hùng.`,
            id: `Proteksi Bola Ditingkatkan memberikan kecepatan tambahan ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_MOVEMENT_SPEED} dan armor ${PrimAbilityData.TALENT_T1_LEFT_PRIM_BONUS_ARMOR}, ketika bola terpasang pada pahlawan.`,
          },
        },
        tier1_right: {
          title: {
            en: `Ball max-range +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            ru: `+${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE} к максимальной дальности шара`,
            cz: `Maximální dosah míče +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            zh: `球最大範圍 +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}像素`,
            fr: `Portée maximale de la balle +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            br: `Alcance máximo da bola +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            vi: `Khoảng cách tối đa của Bóng +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
            id: `Jarak maksimum bola +${PrimAbilityData.TALENT_T1_RIGHT_PRIM_ADDITIONAL_BALL_DISTANCE}px`,
          },
        },
        tier2_right: {
          title: {
            en: 'Enhanced Gravitational Pull',
            ru: 'Сильное притяжение',
            cz: 'Vylepšené Gravitační tahání',
            zh: '重力牽引加強版',
            fr: 'Gravitational Pull amélioré',
            br: 'Puxão Gravitacional aprimorado',
            vi: 'Kéo Hấp Tăng Cường',
            id: 'Tarik Gravitasi Ditingkatkan',
          },
          description: {
            en: `Increase Gravitational Pull damage and stun duration by ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            ru: `Увеличивает урон и длительность оглушения Гравитационного притяжения на ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            cz: `Zvyšuje poškození a dobu omráčení Gravitačního tahání o ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            zh: `增加重力牽引的傷害和暈眩持續時間 ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            fr: `Augmente les dégâts et la durée d'étourdissement de la traction gravitationnelle de ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            br: `Aumenta o dano e a duração do atordoamento do Puxão Gravitacional em ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            vi: `Tăng Sát thương và thời gian Choáng của Kéo Hấp lên ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
            id: `Meningkatkan kerusakan dan durasi stun Gravitasi Tarik sebesar ${fixed(PrimAbilityData.TALENT_T2_RIGHT_GRAVITATIONAL_PULL_DAMAGE_AND_DURATION * 100, 1)}%`,
          },
        },
        tier2_left: {
          title: {
            en: `Gravitational Pull Radius + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            ru: `+ ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS} к радиусу Гравитационного притяжения`,
            cz: `Poloměr Gravitačního tahání + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            zh: `重力牽引半徑 + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}像素`,
            fr: `Rayon de la traction gravitationnelle + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            br: `Raio do Puxão Gravitacional + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            vi: `Bán kính Kéo Hấp + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
            id: `Radius Tarik Gravitasi + ${PrimAbilityData.TALENT_T2_LEFT_GRAVITATIONAL_PULL_RADIUS}px`,
          },
        },
      }
    case Shared.HEROES.SEER: {
      return {
        tier1_left: {
          title: {
            // Name for a debuff that destroy armor
            en: 'Corrosive Curse',
            ru: 'Едкое проклятие',
            cz: 'Korozivní kletba',
            zh: '腐蝕詛咒',
            fr: 'Malédiction corrosive',
            br: 'Maldição corrosiva',
            vi: 'Lời Nguyền ăn mòn',
            id: 'Kutukan Korosif',
          },
          description: {
            en: `Seer's passive ability now also adjusts armor, reducing it for enemies and increasing it for allies by ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} per stack.`,
            ru: `Пассивный эффект Провидца теперь также изменяет броню, уменьшая её для врагов и увеличивая для союзников на ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} за заряд.`,
            cz: `Pasivní schopnost Seera nyní také upravuje brnění, snižuje ho pro nepřátele a zvyšuje pro spojence o ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} za stack.`,
            zh: `先知的被动技能现在也调整护甲，每层减少敌人的护甲并增加盟友的护甲 ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER}。`,
            fr: `La capacité passive du Voyant ajuste désormais également l'armure, la réduisant pour les ennemis et l'augmentant pour les alliés de ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} par stack.`,
            br: `A habilidade passiva de Seer agora também ajusta a armadura, reduzindo para inimigos e aumentando para aliados em ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} por stack.`,
            vi: `Khả năng passives của Seer giờ cũng điều chỉnh giáp, giảm cho kẻ thù và tăng cho đồng minh ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} mỗi stack.`,
            id: `Kemampuan pasif Seer sekarang juga menyesuaikan armor, mengurangi untuk musuh dan meningkatkan untuk sekutu sebesar ${SeerAbilityData.TALENT_T1_LEFT_MALEVOLENT_CURSE_ARMOR_MODIFIER} per stack.`,
          },
        },
        tier1_right: {
          title: {
            en: 'Increase passive stacks',
            ru: '+1 к заряду пассивного эффекта',
            cz: 'Zvýšení pasivních stacků',
            zh: '增加被动层数',
            fr: 'Augmenter les stacks passifs',
            br: 'Aumentar stacks passivos',
            vi: 'Tăng stacks passives',
            id: 'Meningkatkan tumpukan pasif',
          },
          description: {
            en: `Increase the number of stacks of Seer's passive ability to ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
            ru: `Увеличивает количество зарядов пассивного эффекта Провидца с 4 до ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
            cz: `Zvyšuje počet stacků pasivní schopnosti Seera na ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
            zh: `增加先知的被动技能层数至 ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}。`,
            fr: `Augmente le nombre de stacks de la capacité passive du Voyant à ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
            br: `Aumenta o número de stacks da habilidade passiva de Seer para ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
            vi: `Tăng số stacks của khả năng passives của Seer lên ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
            id: `Meningkatkan jumlah tumpukan kemampuan pasif Seer menjadi ${SeerAbilityData.TALENT_T1_RIGHT_MAX_PASSIVE_STACKS}.`,
          },
        },
        tier2_left: {
          title: {
            en: 'Benevolent Flare Speed Burst',
            ru: 'Ускоряющая Благосклонность',
            cz: 'Rychlostní výbuch dobra',
            zh: '善意耀斑速度爆发',
            fr: 'Rafale de vitesse de lueur bienveillante',
            br: 'Explosão de Velocidade da Chama Benevolente',
            vi: 'Tia Sáng Ân Cần Tăng Tốc',
            id: 'Ledakan Kecepatan Sinar Kebaikan',
          },
        },
        tier2_right: {
          title: {
            en: 'Call of Malevolence',
            ru: 'Зов злобы',
            cz: 'Volání zloby',
            zh: '召唤恶意',
            fr: 'Appel de la malveillance',
            br: 'Chamado da Malevolência',
            vi: 'Tiếng Gọi Ác Ý',
            id: 'Panggilan Keburukan',
          },
          description: {
            en: `Malevolent Surge now pulls all enemies towards the Seer and applies a stun effect for ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}s.`,
            ru: `Неприязнь теперь притягивает всех врагов к Провидцу и накладывает эффект оглушения на ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}сек.`,
            cz: `Zlobivý nápor nyní přitahuje všechny nepřátele k Seerovi a aplikuje efekt omráčení na ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}s.`,
            zh: `恶意波现在将所有敌人拉向先知，并施加 ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)} 秒的眩晕效果。`,
            fr: `La montée de malveillance attire désormais tous les ennemis vers le Voyant et applique un effet d'étourdissement pendant ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}s.`,
            br: `A Onda Malévola agora puxa todos os inimigos em direção ao Seer e aplica um efeito de atordoamento por ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}s.`,
            vi: `Sóng Ác Ý giờ đây kéo tất cả kẻ thù về phía Seer và áp dụng hiệu ứng choáng trong ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}s.`,
            id: `Gelombang Keburukan sekarang menarik semua musuh ke Seer dan menerapkan efek stun selama ${toSec(SeerAbilityData.MALEVOLENT_SURGE_STUN_DURATION)}s.`,
          },
        },
      }
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

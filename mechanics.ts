/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// @ts-ignore
import {
  CRYSTAL_STATS,
  CRYSTAL_MINION_SACRIFICE_DAMAGE,
  TOWER_STATS,
  TOWER_VISION_AND_ATTACK_RANGE,
  TOWER_ATTACK_MAX_STACKS,
  TOWER_ATTACK_STACK_DURATION,
  TOWER_HERO_AGGRO_THROTTLE,
  TOWER_KILL_GOLDS,
  NonHeroAbilityData,
  MINION_SPAWN_TIME,
  MINION_STATS_BONUS_PER_LEVEL,
  MINION_TOWER_DESTROYED_BONUS_MULTIPLIER,
  MINION_WAVE_LEVEL_UP_INTERVAL,
  MINION_WAVE_MAX_LEVEL,
  SIEGE_DAMAGE_TO_HERO_MULTIPLIER,
  SIEGE_DAMAGE_TO_BUILDING_MULTIPLIER,
  PIERCE_DAMAGE_TO_MINION_MULTIPLIER,
  BASIC_DAMAGE_TO_HERO_MULTIPLIER,
  PHYSICAL_DAMAGE_TO_BUILDING_MULTIPLIER,
  MINION_MELEE_ATTACK_RANGE,
  MINION_RANGED_ATTACK_RANGE,
  MINION_SIEGE_ATTACK_RANGE,
  MINION_COIN_LIFETIME,
  INITIAL_GOLDS,
  GOLDS_PER_COIN,
  GOLDS_PER_COIN_PER_LEVEL,
  BONUS_GOLD_PER_KILL_MINION,
  BONUS_GOLDS_PER_COIN_PER_LEVEL,
  GOLDS_PER_SEC,
  FIRST_BLOOD_GOLDS,
  EXP_SHARE_DISTANCE,
  EXP_REWARD_KILL_MINION,
  EXP_REWARD_KILL_MINION_PER_LEVEL,
  EXP_REWARD_KILL_HERO,
  EXP_REWARD_KILL_HERO_PER_TARGET_LEVEL,
  EXP_REWARD_KILL_HERO_PER_LEVEL_GAP,
  GOLD_REWARD_KILL_HERO_BASE,
  MAX_LEVEL,
  BASE_HEAL_RADIUS,
  BASE_HEAL_PERCENTAGE,
  BASE_HEAL_TICK_TIME,
  BASE_HEAL_BONUS_MOVEMENT_SPEED,
  BASE_ENEMY_PURE_DAMAGE,
  INVENTORY_SPACE,
  ITEM_FULL_REFUND_WINDOW,
  ITEM_SELL_REFUND_MULTIPLIER,
  RUNE_SPAWNTIME,
  GOLDRUNE_SPAWNTIME,
  DAMAGE_AND_ARCANE_RUNE_DURATION,
  HASTE_RUNE_DURATION,
  INVISIBILITY_RUNE_DURATION,
  DAMAGE_RUNE_BONUS_DAMAGE_MULTIPLIER,
  ARCANE_RUNE_BONUS_ABILITY_HASTE,
  ARCANE_RUNE_BONUS_ABILITY_POWER,
  HEALING_RUNE_EFFECT_RADIUS,
  HEALING_RUNE_EFFECT_DURATION,
  HEALING_RUNE_EFFECT_TICK_TIME,
  HEALING_RUNE_TICK_HEAL_PERCENTAGE,
  HEALING_RUNE_BONUS_MOVEMENT_SPEED,
  GOLD_RUNE_RADIUS,
  GOLD_RUNE_MAX_VALUE,
  GOLD_RUNE_BASE_GOLDS,
  GOLD_RUNE_GOLDS_PER_MINUTE,
  GOLD_RUNE_EXP_MULTIPLIER,
  KILL_STREAK_BONUS_PER_STACK,
  KILL_STREAK_BONUS_MAX,
  ASSIST_GOLD_MULTIPLIER,
  ASSIST_EXPERIENCE_MULTIPLIER,
  ASSIST_RESET_TIMMER,
  RESPAWN_TIME_BASE,
  RESPAWN_TIME_PER_LEVEL,
  MIN_ATTACK_SPEED,
  BASE_ATTACK_TIME,
  LIMIT_MOVEMENT_SPEED,
  RESISTANCE_CALCULATION_COEF,
  RESISTANCE_CALCULATION_DIVISOR,
  COOLDOWN_REDUCTION_CALCULATION_COEF,
  CRITICAL_DAMAGE_MOD_150,
  TALENT_TIER1_REQUIRED_LEVEL,
  TALENT_TIER1_SECOND_POINT_LEVEL,
  TALENT_TIER2_REQUIRED_LEVEL,
  TALENT_TIER2_SECOND_POINT_LEVEL,
  HERO_LIGHT_CAST_DISTANCE,
  ItemAbilityData,
  calculateResistanceReduction,
  calculateCooldownReduction,
  calculateRealHealthRegen,
  // @ts-ignore
} from 'shared'
// @ts-ignore
import {
  MechanicId,
  MechanicFigureLabel,
  MechanicVideoLabel,
  MechanicChartId,
  MechanicChartLabel,
} from '../mechanicsData'
// @ts-ignore
import { LANG } from 'lang/lang'
import { fixed } from './misc'

/** Inline icons for the body text - styled by .inline-mechanic-icon in MechanicsList.vue. Built
 * once here rather than repeated per language, so a path change is a single edit. */
const GOLD_ICON = `<img class="inline-mechanic-icon" src="/assets/ui/gold.png" alt="gold" />`

/** Value + icon, highlighted as one unit so a number never drifts away from what it counts. */
/** Any icon from a mechanic's own asset folder, inline in the body text. */
const mechanicIcon = (mechanic: string, file: string): string =>
  `<img class="inline-mechanic-icon" src="/assets/mainpage/learn/${mechanic}/${file}.png" alt="${file}" />`

const gold = (value: string | number): string => `<c:bonus>${value}</c:bonus>${GOLD_ICON}`

/** Where MechanicsList splits the body text to drop a chart or a clip in, so a video sits under
 * the heading it illustrates rather than at the end of the mechanic (see MECHANIC_SLOT_PATTERN). */
const chartSlot = (id: MechanicChartId): string => `<mechanic-chart:${id}>`

const clipSlot = (...labels: MechanicVideoLabel[]): string => `<mechanic-clips:${labels.join(',')}>`

const sec = (ms: number): string => String(fixed(ms / 1000, 2))
const perc = (ratio: number): string => String(fixed(ratio * 100, 0))
/** Damage a resistance value removes, as a percentage - the curve itself lives in shared/formulas.ts. */
const resist = (value: number): string => perc(1 - calculateResistanceReduction(value))
const haste = (value: number): string => perc(1 - calculateCooldownReduction(value))

const _getMechanicNameLang = (id: MechanicId): { [key in string]: string } => {
  switch (id) {
    case MechanicId.BASE:
      return {
        en: 'Base',
        ru: 'База',
        cz: 'Základna',
        br: 'Base',
        fr: 'Base',
        zh: '基地',
        vi: 'Căn Cứ',
        id: 'Markas',
        kr: `기지`,
      }
    case MechanicId.TOWER:
      return {
        en: 'Tower',
        ru: 'Башня',
        cz: 'Věž',
        br: 'Torre',
        fr: 'Tour',
        zh: '防禦塔',
        vi: 'Trụ',
        id: 'Menara',
        kr: `타워`,
      }
    case MechanicId.MINIONS:
      return {
        en: 'Minions & Waves',
        ru: 'Миньоны и волны',
        cz: 'Jednotky a vlny',
        br: 'Lacaios e Ondas',
        fr: 'Sbires et vagues',
        zh: '小兵與兵線',
        vi: 'Lính và Đợt Lính',
        id: 'Minion & Gelombang',
        kr: `미니언과 웨이브`,
      }
    case MechanicId.GOLD:
      return {
        en: 'Gold & Last Hit',
        ru: 'Золото и добивание',
        cz: 'Zlato a dobíjení',
        br: 'Ouro e Último Golpe',
        fr: 'Or et coup de grâce',
        zh: '金幣與補刀',
        vi: 'Vàng và Last Hit',
        id: 'Emas & Last Hit',
        kr: `골드와 막타`,
      }
    case MechanicId.EXPERIENCE:
      return {
        en: 'Experience & Levels',
        ru: 'Опыт и уровни',
        cz: 'Zkušenosti a úrovně',
        br: 'Experiência e Níveis',
        fr: 'Expérience et niveaux',
        zh: '經驗與等級',
        vi: 'Kinh Nghiệm và Cấp Độ',
        id: 'Pengalaman & Level',
        kr: `경험치와 레벨`,
      }
    case MechanicId.SHOP:
      return {
        en: 'Shop',
        ru: 'Магазин',
        cz: 'Obchod',
        br: 'Loja',
        fr: 'Boutique',
        zh: '商店',
        vi: 'Cửa Hàng',
        id: 'Toko',
        kr: `상점`,
      }
    case MechanicId.ITEMS:
      return {
        en: 'Items',
        ru: 'Предметы',
        cz: 'Předměty',
        br: 'Itens',
        fr: 'Objets',
        zh: '裝備',
        vi: 'Trang Bị',
        id: 'Item',
        kr: `아이템`,
      }
    case MechanicId.POWER_RUNES:
      return {
        en: 'Power Runes',
        ru: 'Руны силы',
        cz: 'Runy síly',
        br: 'Runas de Poder',
        fr: 'Runes de puissance',
        zh: '強化符文',
        vi: 'Bùa Sức Mạnh',
        id: 'Rune Kekuatan',
        kr: `파워 룬`,
      }
    case MechanicId.BOUNTY_RUNE:
      return {
        en: 'Gold Rune',
        ru: 'Золотая руна',
        cz: 'Zlatá runa',
        br: 'Runa de Ouro',
        fr: "Rune d'or",
        zh: '金幣符文',
        vi: 'Bùa Vàng',
        id: 'Rune Emas',
        kr: `골드 룬`,
      }
    case MechanicId.KILLS:
      return {
        en: 'Kills & Death Timer',
        ru: 'Убийства и таймер возрождения',
        cz: 'Zabití a čas oživení',
        br: 'Abates e Tempo de Morte',
        fr: 'Éliminations et temps de mort',
        zh: '擊殺與復活時間',
        vi: 'Hạ Gục và Thời Gian Hồi Sinh',
        id: 'Bunuh & Waktu Mati',
        kr: `처치와 부활 시간`,
      }
    case MechanicId.DAMAGE_TYPES:
      return {
        en: 'Damage Types',
        ru: 'Типы урона',
        cz: 'Typy poškození',
        br: 'Tipos de Dano',
        fr: 'Types de dégâts',
        zh: '傷害類型',
        vi: 'Loại Sát Thương',
        id: 'Tipe Damage',
        kr: `피해 유형`,
      }
    case MechanicId.CC_EFFECTS:
      return {
        en: 'Crowd Control',
        ru: 'Контроль',
        cz: 'Ovládání',
        br: 'Controle de Grupo',
        fr: 'Contrôle de foule',
        zh: '控制效果',
        vi: 'Hiệu Ứng Khống Chế',
        id: 'Crowd Control',
        kr: `군중 제어`,
      }
    case MechanicId.DISPELLING:
      return {
        en: 'Dispelling',
        ru: 'Очищение',
        cz: 'Rozptýlení',
        br: 'Dissipação',
        fr: 'Dissipation',
        zh: '驅散',
        vi: 'Giải Hiệu Ứng',
        id: 'Dispel',
        kr: `정화`,
      }
    case MechanicId.ANIMATION_CANCEL:
      return {
        en: 'Animation Cancel',
        ru: 'Отмена анимации',
        cz: 'Zrušení animace',
        br: 'Cancelamento de Animação',
        fr: "Annulation d'animation",
        zh: '取消後搖',
        vi: 'Hủy Hoạt Ảnh',
        id: 'Batal Animasi',
        kr: `애니메이션 캔슬`,
      }
    case MechanicId.STATS:
      return {
        en: 'Stats',
        ru: 'Характеристики',
        cz: 'Statistiky',
        br: 'Atributos',
        fr: 'Statistiques',
        zh: '屬性',
        vi: 'Chỉ Số',
        id: 'Statistik',
        kr: `능력치`,
      }
    case MechanicId.TALENTS:
      return {
        en: 'Talents',
        ru: 'Таланты',
        cz: 'Talenty',
        br: 'Talentos',
        fr: 'Talents',
        zh: '天賦',
        vi: 'Thiên Phú',
        id: 'Talenta',
        kr: `특성`,
      }
    case MechanicId.VISION:
      return {
        en: 'Vision & Invisibility',
        ru: 'Обзор и невидимость',
        cz: 'Výhled a neviditelnost',
        br: 'Visão e Invisibilidade',
        fr: 'Vision et invisibilité',
        zh: '視野與隱身',
        vi: 'Tầm Nhìn và Tàng Hình',
        id: 'Penglihatan & Tak Terlihat',
        kr: `시야와 은신`,
      }

    /** Grouped pages */
    case MechanicId.OBJECTIVES:
      return {
        en: 'Objectives',
        ru: 'Цели',
        cz: 'Cíle',
        br: 'Objetivos',
        fr: 'Objectifs',
        zh: '目標',
        vi: 'Mục Tiêu',
        id: 'Objektif',
        kr: `목표`,
      }
    case MechanicId.GOLD_EXPERIENCE:
      return {
        en: 'Gold, Experience & Levels',
        ru: 'Золото, опыт и уровни',
        cz: 'Zlato, zkušenosti a úrovně',
        br: 'Ouro, Experiência e Níveis',
        fr: 'Or, expérience et niveaux',
        zh: '金幣、經驗與等級',
        vi: 'Vàng, Kinh Nghiệm và Cấp Độ',
        id: 'Emas, Pengalaman & Level',
        kr: `골드, 경험치와 레벨`,
      }
    case MechanicId.SHOP_ITEMS:
      return {
        en: 'Shop & Items',
        ru: 'Магазин и предметы',
        cz: 'Obchod a předměty',
        br: 'Loja e Itens',
        fr: 'Boutique et objets',
        zh: '商店與裝備',
        vi: 'Cửa Hàng và Trang Bị',
        id: 'Toko & Item',
        kr: `상점과 아이템`,
      }
    case MechanicId.RUNES:
      return {
        en: 'Runes',
        ru: 'Руны',
        cz: 'Runy',
        br: 'Runas',
        fr: 'Runes',
        zh: '符文',
        vi: 'Bùa',
        id: 'Rune',
        kr: `룬`,
      }
    case MechanicId.STATS_AND_FORMULAS:
      return {
        en: 'Stats & Formulas',
        ru: 'Характеристики и формулы',
        cz: 'Statistiky a vzorce',
        br: 'Atributos e Fórmulas',
        fr: 'Statistiques et formules',
        zh: '屬性與公式',
        vi: 'Chỉ Số và Công Thức',
        id: 'Statistik & Rumus',
        kr: `능력치와 공식`,
      }
    default:
      return { en: '' }
  }
}

const _getMechanicDescriptionLang = (id: MechanicId): { [key in string]: string } => {
  switch (id) {
    case MechanicId.BASE: {
      const minionsToDestroy = CRYSTAL_STATS.maxHealth / CRYSTAL_MINION_SACRIFICE_DAMAGE

      return {
        en: `Destroy the enemy <b>Base</b> to win. Protect your own: when it falls, your team loses.<ul><li><c:immune>The Base is immune to hero attacks and abilities.</c:immune></li><li><b>Only minions can damage it.</b> Each minion that reaches the enemy Base sacrifices itself to deal damage.</li><li>Escort <c:bonus>${minionsToDestroy} minions</c:bonus> into the enemy Base to destroy it.</li></ul>`,
        ru: `База — это и есть вся игра. Защищайте свой и уничтожьте вражеский: как только один падает, матч заканчивается и эта команда проигрывает. Всё остальное на карте важно лишь потому, что приближает вас к этому.<br/><br/><c:dispel>Вы не можете повредить его сами</c:dispel>. Он постоянно невосприимчив к атакам и способностям, так что никакой ваш урон его не поцарапает.<br/><br/><c:bonus>Сломать его могут только миньоны.</c:bonus> Каждый вражеский миньон, дошедший до Базы, жертвует собой и наносит ему урон — значит, для победы до Базы должны дойти ровно <c:bonus>${minionsToDestroy} миньона</c:bonus>. Ваша задача — довести их туда.`,
        cz: `Základna je celá hra. Braň ten svůj a znič nepřátelský – jakmile jeden padne, zápas končí a ten tým prohrál. Všechno ostatní na mapě má cenu jen proto, že tě k tomu posouvá.<br/><br/><c:dispel>Sám mu neublížíš</c:dispel>. Je trvale imunní vůči útokům i schopnostem, takže žádné poškození z tvé strany ho neškrábne.<br/><br/><c:bonus>Shodit ho dokážou jen jednotky.</c:bonus> Každá nepřátelská jednotka, která dojde ke Základny, se obětuje a poškodí ho – k vítězství tedy musí ke Základny dorazit přesně <c:bonus>${minionsToDestroy} jednotky</c:bonus>. Tvým úkolem je je tam doprovodit.`,
        br: `O Base é o jogo inteiro. Defenda o seu e destrua o inimigo - no instante em que um cai, a partida acaba e aquele time perde. Todo o resto no mapa só importa porque te aproxima disso.<br/><br/><c:dispel>Você não consegue causar dano nele</c:dispel>. Ele é permanentemente imune a ataques e habilidades, então nenhum dano seu vai arranhá-lo.<br/><br/><c:bonus>Só lacaios conseguem derrubá-lo.</c:bonus> Cada lacaio inimigo que entra no Base se sacrifica para danificá-lo, o que significa que são necessários exatamente <c:bonus>${minionsToDestroy} lacaios</c:bonus> chegando ao Base para vencer. Seu trabalho é escoltá-los até lá.`,
        fr: `Le Base, c'est toute la partie. Défendez le vôtre et détruisez celui de l'ennemi - dès que l'un tombe, le match s'arrête et cette équipe perd. Tout le reste sur la carte ne compte que parce que cela vous en rapproche.<br/><br/><c:dispel>Vous ne pouvez pas l'endommager vous-même</c:dispel>. Il est en permanence immunisé aux attaques et aux compétences : aucun de vos dégâts ne l'égratignera.<br/><br/><c:bonus>Seuls les sbires peuvent l'abattre.</c:bonus> Chaque sbire ennemi qui entre dans le Base se sacrifie pour l'endommager, ce qui signifie qu'il faut exactement <c:bonus>${minionsToDestroy} sbires</c:bonus> arrivés au Base pour gagner. Votre rôle est de les escorter jusque-là.`,
        zh: `基地就是整場比賽。守住自己的、摧毀敵方的——只要有一座倒下，比賽立即結束，該隊伍落敗。地圖上其他一切之所以重要，都只是因為它們讓你更接近這個目標。<br/><br/><c:dispel>你無法親自對它造成傷害</c:dispel>。它永久免疫攻擊與技能，無論你打出多少傷害都無法傷它分毫。<br/><br/><c:bonus>只有小兵能摧毀它。</c:bonus>每隻走進基地的敵方小兵都會自我犧牲並對其造成傷害，因此恰好需要 <c:bonus>${minionsToDestroy} 隻小兵</c:bonus>抵達基地才能獲勝。你的任務就是護送它們抵達。`,
        vi: `Căn Cứ chính là cả trận đấu. Bảo vệ Căn Cứ của bạn và phá hủy của địch - khoảnh khắc một bên sụp đổ, trận đấu kết thúc và đội đó thua. Mọi thứ khác trên bản đồ chỉ có ý nghĩa vì chúng đưa bạn tới gần điều đó.<br/><br/><c:dispel>Bạn không thể tự gây sát thương lên nó</c:dispel>. Nó miễn nhiễm vĩnh viễn với đòn đánh và kỹ năng, nên mọi sát thương của bạn đều vô hiệu.<br/><br/><c:bonus>Chỉ lính mới hạ được nó.</c:bonus> Mỗi lính địch đi vào Căn Cứ sẽ tự hy sinh để gây sát thương, nghĩa là cần đúng <c:bonus>${minionsToDestroy} lính</c:bonus> tới được Căn Cứ để giành chiến thắng. Việc của bạn là hộ tống chúng tới đó.`,
        id: `Markas adalah inti seluruh permainan. Pertahankan milikmu dan hancurkan milik musuh - begitu satu jatuh, pertandingan berakhir dan tim itu kalah. Semua hal lain di peta hanya berarti karena membawamu lebih dekat ke sana.<br/><br/><c:dispel>Kamu tidak bisa merusaknya sendiri</c:dispel>. Ia kebal permanen terhadap serangan dan skill, jadi berapa pun damage-mu tidak akan menggoresnya.<br/><br/><c:bonus>Hanya minion yang bisa menjatuhkannya.</c:bonus> Setiap minion musuh yang masuk ke Markas mengorbankan dirinya untuk merusaknya, artinya dibutuhkan tepat <c:bonus>${minionsToDestroy} minion</c:bonus> yang mencapai Markas untuk menang. Tugasmu adalah mengawal mereka sampai ke sana.`,
        kr: `기지이 곧 게임의 전부입니다. 아군 기지를 지키고 적 기지를 파괴하세요. 한쪽이 무너지는 순간 경기가 끝나고 그 팀이 패배합니다. 맵에서 하는 다른 모든 일은 이 목표에 가까워지기 때문에 의미가 있습니다.<br/><br/><c:dispel>직접 피해를 줄 수는 없습니다</c:dispel>. 기지은 공격과 스킬에 영구적으로 면역이라 아무리 피해를 넣어도 흠집조차 나지 않습니다.<br/><br/><c:bonus>오직 미니언만 무너뜨릴 수 있습니다.</c:bonus> 기지으로 걸어 들어간 적 미니언은 스스로를 희생해 피해를 입히며, 따라서 승리하려면 정확히 <c:bonus>미니언 ${minionsToDestroy}기</c:bonus>가 기지에 도달해야 합니다. 여러분의 역할은 그들을 그곳까지 호위하는 것입니다.`,
      }
    }

    case MechanicId.TOWER: {
      const health = TOWER_STATS.maxHealth
      const damage = TOWER_STATS.damage
      const range = TOWER_VISION_AND_ATTACK_RANGE
      const stackBonus = perc(NonHeroAbilityData.TOWER_DAMAGE_BONUS_AGAINST_HERO_PER_STACK)
      const stacks = TOWER_ATTACK_MAX_STACKS
      const stackTime = sec(TOWER_ATTACK_STACK_DURATION)
      const minionBonus = perc(MINION_TOWER_DESTROYED_BONUS_MULTIPLIER - 1)
      const aggroThrottle = sec(TOWER_HERO_AGGRO_THROTTLE)

      return {
        en: `Towers defend the lane. Bring your minions before attacking one.<ul><li><c:health>${health} health</c:health>, <c:range>${range} attack range</c:range>, and <c:pure>${damage} pure damage</c:pure> per hit. Armor and magic defence do not reduce it.</li><li><c:immune>Backdoor protection:</c:immune> a tower is immune to damage until an enemy minion enters its range.</li><li>Towers target minions first. Attacking a hero under their tower draws its fire. It can switch targets this way once every <b>${aggroThrottle}s</b>.</li><li>Hits on heroes add <c:bonus>${stackBonus}% tower damage per stack</c:bonus>, up to <b>${stacks} stacks</b>. Each stack lasts <b>${stackTime}s</b> and <c:dispel>cannot be dispelled</c:dispel>.</li><li>Towers <c:vision>reveal invisible enemies</c:vision> in range. Siege bombs deal extra damage to them.</li></ul><b>Destroying a tower</b> gives each teammate ${gold(TOWER_KILL_GOLDS)} and permanently grants your minions on that side <c:bonus>+${minionBonus}% health and damage</c:bonus>.`,
        ru: `Башня имеет <c:health>${health} здоровья</c:health> и наносит <c:pure>${damage} чистого урона</c:pure> в пределах <c:range>${range} дальности</c:range>. Чистый урон полностью игнорирует броню и магическую защиту, поэтому <b>никакая сборка его не снизит</b>.<br/><br/>Сначала она бьёт миньонов и переключается на вражеского героя, атаковавшего союзника в её радиусе, — но такое переключение происходит не чаще раза в <b>${aggroThrottle} с</b>, поэтому башня не мечется между целями.<br/><br/>Каждое попадание накапливает заряд: каждый заряд добавляет <c:bonus>${stackBonus}%</c:bonus> урона башни, максимум <b>${stacks} зарядов</b>, заряд длится ${stackTime} с. Заряды <c:dispel>нельзя рассеять</c:dispel>, поэтому нырять под башню нужно осторожно — урон будет постепенно расти.<br/><br/>Пока в радиусе нет вражеских миньонов, у башни действует <c:immune>защита от бэкдора</c:immune>, и она неуязвима к урону — нужна волна миньонов. Она также <c:vision>обнаруживает невидимых врагов</c:vision> и получает повышенный урон от бомб осадных миньонов.<br/><br/>Уничтожение вражеской башни награждает вашу команду — по ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus> каждому — и навсегда усиливает ваших миньонов на этой линии на <c:bonus>${minionBonus}%</c:bonus> здоровья и урона.`,
        cz: `Věž má <c:health>${health} životů</c:health> a způsobuje <c:pure>${damage} čistého poškození</c:pure> v <c:range>dosahu ${range}</c:range>. Čisté poškození zcela ignoruje brnění i magickou obranu, takže <b>ho žádná stavba nesníží</b>.<br/><br/>Nejprve cílí na jednotky a přepne se na nepřátelského hrdinu, který zaútočí na spojence v jejím dosahu – tohle přepnutí ale proběhne nejvýš jednou za <b>${aggroThrottle}s</b>, takže věž neposkakuje mezi cíli.<br/><br/>Každý zásah se sčítá: každý stupeň přidá <c:bonus>${stackBonus}%</c:bonus> poškození věže, až do <b>${stacks} stupňů</b>, a stupeň vydrží ${stackTime}s. Stupně <c:dispel>nelze rozptýlit</c:dispel>, takže pod věž musíš skákat opatrně – poškození bude postupně narůstat.<br/><br/>Dokud v dosahu nestojí nepřátelská jednotka, má věž <c:immune>ochranu proti backdooru</c:immune> a je nezranitelná – potřebuješ vlnu. Zároveň <c:vision>odhaluje neviditelné nepřátele</c:vision> a dostává zvýšené poškození od obléhacích bomb.<br/><br/>Zničení nepřátelské věže odmění tvůj tým – každému ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus> – a trvale posílí tvé jednotky na této straně o <c:bonus>${minionBonus}%</c:bonus> životů a poškození.`,
        br: `Uma Torre tem <c:health>${health} de vida</c:health> e causa <c:pure>${damage} de dano puro</c:pure> dentro de <c:range>${range} de alcance</c:range>. Dano puro ignora armadura e defesa mágica por completo, então <b>nada que você comprar reduz isso</b>.<br/><br/>Ela mira lacaios primeiro e troca para um herói inimigo que atacar um aliado dentro do alcance - mas essa troca de alvo só acontece uma vez a cada <b>${aggroThrottle}s</b>, então ela não fica pulando entre alvos.<br/><br/>Cada acerto acumula: cada acúmulo soma <c:bonus>${stackBonus}%</c:bonus> do dano da torre, até <b>${stacks} acúmulos</b>, e cada um dura ${stackTime}s. Os acúmulos <c:dispel>não podem ser dissipados</c:dispel>, então você precisa ter cuidado ao mergulhar, pois o dano vai aumentando gradualmente.<br/><br/>Enquanto nenhum lacaio inimigo estiver no alcance, a torre tem <c:immune>proteção contra backdoor</c:immune> e fica imune a dano - você precisa de uma onda. Ela também <c:vision>revela inimigos invisíveis</c:vision> e recebe dano extra das bombas de cerco.<br/><br/>Destruir uma torre inimiga recompensa seu time com ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus> para cada um e fortalece permanentemente os seus lacaios daquele lado em <c:bonus>${minionBonus}%</c:bonus> de vida e dano.`,
        fr: `Une Tour possède <c:health>${health} points de vie</c:health> et inflige <c:pure>${damage} dégâts purs</c:pure> dans une <c:range>portée de ${range}</c:range>. Les dégâts purs ignorent totalement l'armure et la défense magique : <b>rien de ce que vous achetez ne les réduit</b>.<br/><br/>Elle vise les sbires en priorité et se tourne vers un héros ennemi qui attaque un allié à sa portée - ce changement de cible n'a toutefois lieu qu'une fois toutes les <b>${aggroThrottle}s</b>, elle ne fait donc pas d'aller-retour entre les cibles.<br/><br/>Chaque coup s'accumule : chaque charge ajoute <c:bonus>${stackBonus}%</c:bonus> des dégâts de la tour, jusqu'à <b>${stacks} charges</b>, et une charge dure ${stackTime}s. Les charges <c:dispel>ne peuvent pas être dissipées</c:dispel>, il faut donc plonger avec prudence, car les dégâts augmentent progressivement.<br/><br/>Tant qu'aucun sbire ennemi n'est à portée, la tour bénéficie de la <c:immune>protection anti-backdoor</c:immune> et est immunisée aux dégâts - il vous faut une vague. Elle <c:vision>révèle aussi les ennemis invisibles</c:vision> et subit des dégâts accrus des bombes de siège.<br/><br/>Détruire une tour ennemie récompense votre équipe de ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus> chacun et renforce définitivement vos sbires de ce côté de <c:bonus>${minionBonus}%</c:bonus> de vie et de dégâts.`,
        zh: `防禦塔擁有 <c:health>${health} 生命值</c:health>，在 <c:range>${range} 範圍</c:range>內造成 <c:pure>${damage} 真實傷害</c:pure>。真實傷害完全無視護甲與魔法抗性，因此<b>任何裝備都無法減免</b>。<br/><br/>它優先攻擊小兵，若敵方英雄在其範圍內攻擊我方英雄，則會轉而攻擊該英雄——但這種換目標每 <b>${aggroThrottle} 秒</b>最多觸發一次，因此不會在目標之間來回跳動。<br/><br/>每次命中都會疊加：每層增加防禦塔傷害的 <c:bonus>${stackBonus}%</c:bonus>，最多 <b>${stacks} 層</b>，每層持續 ${stackTime} 秒。這些層數<c:dispel>無法被驅散</c:dispel>，因此越塔時務必小心，傷害會逐漸升高。<br/><br/>當範圍內沒有敵方小兵時，防禦塔享有<c:immune>偷家保護</c:immune>並免疫傷害——你需要兵線才能推塔。它同時<c:vision>偵測隱身敵人</c:vision>，並受到攻城炸彈的額外傷害。<br/><br/>摧毀敵方防禦塔會讓你的隊伍每人獲得 ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus>，並永久提升你方該路小兵 <c:bonus>${minionBonus}%</c:bonus> 的生命值與傷害。`,
        vi: `Trụ có <c:health>${health} máu</c:health> và gây <c:pure>${damage} sát thương chuẩn</c:pure> trong <c:range>tầm ${range}</c:range>. Sát thương chuẩn bỏ qua hoàn toàn giáp và kháng phép, nên <b>không trang bị nào giảm được nó</b>.<br/><br/>Nó ưu tiên đánh lính, và chuyển sang tướng địch nào tấn công đồng minh trong tầm của nó - nhưng việc đổi mục tiêu này chỉ xảy ra tối đa mỗi <b>${aggroThrottle} giây</b>, nên trụ không nhảy qua lại giữa các mục tiêu.<br/><br/>Mỗi đòn đánh sẽ cộng dồn: mỗi cộng dồn thêm <c:bonus>${stackBonus}%</c:bonus> sát thương của trụ, tối đa <b>${stacks} cộng dồn</b>, mỗi cộng dồn kéo dài ${stackTime} giây. Các cộng dồn <c:dispel>không thể bị giải</c:dispel>, nên bạn phải cẩn thận khi lao vào vì sát thương sẽ tăng dần.<br/><br/>Khi không có lính địch trong tầm, trụ có <c:immune>bảo vệ chống đi cửa sau</c:immune> và miễn nhiễm sát thương - bạn cần một đợt lính. Nó cũng <c:vision>phát hiện kẻ địch tàng hình</c:vision> và nhận thêm sát thương từ bom lính công thành.<br/><br/>Phá hủy trụ địch thưởng cho đội bạn mỗi người ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus> và vĩnh viễn tăng <c:bonus>${minionBonus}%</c:bonus> máu và sát thương cho lính của bạn ở phía đó.`,
        id: `Menara memiliki <c:health>${health} nyawa</c:health> dan memberikan <c:pure>${damage} damage murni</c:pure> dalam <c:range>jangkauan ${range}</c:range>. Damage murni mengabaikan armor dan pertahanan sihir sepenuhnya, jadi <b>tidak ada item yang bisa menguranginya</b>.<br/><br/>Ia menargetkan minion lebih dulu, dan beralih ke hero musuh yang menyerang sekutu di dalam jangkauannya - tetapi pergantian target itu dibatasi sekali tiap <b>${aggroThrottle} detik</b>, jadi ia tidak bolak-balik antar target.<br/><br/>Setiap serangan menumpuk: tiap tumpukan menambah <c:bonus>${stackBonus}%</c:bonus> damage menara, hingga <b>${stacks} tumpukan</b>, dan satu tumpukan bertahan ${stackTime} detik. Tumpukan ini <c:dispel>tidak bisa dihilangkan</c:dispel>, jadi kamu harus berhati-hati saat menyelam karena damage-nya akan meningkat bertahap.<br/><br/>Selama tidak ada minion musuh dalam jangkauan, menara memiliki <c:immune>proteksi backdoor</c:immune> dan kebal terhadap damage - kamu butuh gelombang minion. Ia juga <c:vision>mengungkap musuh tak terlihat</c:vision> dan menerima damage ekstra dari bom siege.<br/><br/>Menghancurkan menara musuh memberi timmu ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus> untuk masing-masing dan secara permanen memperkuat minion-mu di sisi itu sebesar <c:bonus>${minionBonus}%</c:bonus> nyawa dan damage.`,
        kr: `타워는 <c:health>체력 ${health}</c:health>을 가지며 <c:range>사거리 ${range}</c:range> 내에 <c:pure>${damage}의 고정 피해</c:pure>를 입힙니다. 고정 피해는 방어력과 마법 저항을 완전히 무시하므로 <b>어떤 아이템으로도 줄일 수 없습니다</b>.<br/><br/>미니언을 우선 공격하며, 사거리 안에서 아군을 공격한 적 챔피언으로 대상을 변경합니다. 다만 이 대상 변경은 <b>${aggroThrottle}초</b>에 한 번으로 제한되어 대상 사이를 오가지 않습니다.<br/><br/>공격마다 중첩됩니다. 중첩당 타워 피해량의 <c:bonus>${stackBonus}%</c:bonus>가 추가되며 최대 <b>${stacks}중첩</b>, 각 중첩은 ${stackTime}초 지속됩니다. 이 중첩은 <c:dispel>해제할 수 없으므로</c:dispel> 피해가 점점 커진다는 점을 염두에 두고 신중하게 진입해야 합니다.<br/><br/>사거리 안에 적 미니언이 없으면 타워는 <c:immune>백도어 보호</c:immune>를 받아 피해에 면역이 됩니다. 웨이브가 반드시 필요합니다. 또한 사거리 내 <c:vision>은신한 적을 드러내며</c:vision> 공성 폭탄에 추가 피해를 받습니다.<br/><br/>적 타워를 파괴하면 아군 팀 전원이 각자 ${GOLD_ICON} <c:bonus>${TOWER_KILL_GOLDS}</c:bonus>를 얻고, 해당 라인의 아군 미니언이 영구적으로 체력과 피해량 <c:bonus>${minionBonus}%</c:bonus>를 얻습니다.`,
      }
    }

    case MechanicId.MINIONS: {
      const waveTime = sec(MINION_SPAWN_TIME)
      const levelBonus = perc(MINION_STATS_BONUS_PER_LEVEL)
      const levelEvery = MINION_WAVE_LEVEL_UP_INTERVAL
      const maxLevel = MINION_WAVE_MAX_LEVEL
      const towerBonus = perc(MINION_TOWER_DESTROYED_BONUS_MULTIPLIER - 1)

      return {
        en: `Minions push lanes and are <b>the only units that can damage the enemy Base</b>.<ul><li>Waves start at <b>0:00</b> and spawn every <b>${waveTime}s</b>, with <b>one melee and one ranged minion</b>.</li><li>A <b>siege minion</b> joins every <b>third wave</b>, starting with wave <b>7</b>. After about <b>20 minutes</b>, each wave gains another ranged minion.</li><li>Minions level up every <b>${levelEvery} waves</b>, gaining <c:bonus>${levelBonus}% health and damage</c:bonus> per level, up to <b>level ${maxLevel}</b>.</li><li>Destroying the enemy tower on their side gives them another <c:bonus>+${towerBonus}% health and damage</c:bonus>.</li></ul>`,
        ru: `Миньоны — ваш единственный способ нанести урон вражеской Базе, поэтому каждая волна это ресурс, а не просто препятствие.<br/><br/>Первая волна появляется в <b>0:00</b>, следующая — каждые <b>${waveTime} с</b>: один ближний и один дальнобойный миньон, а начиная с седьмой волны каждая третья приводит ещё и осадного. Примерно через двадцать минут в каждую волну добавляется второй дальнобойный.<br/><br/>Они растут вместе с игрой. Миньоны получают уровень каждые <b>${levelEvery} волны</b>, прибавляя <c:bonus>${levelBonus}% здоровья и урона</c:bonus> за уровень, вплоть до <b>${maxLevel}</b>-го. После падения вражеской башни на их линии они получают ещё <c:bonus>${towerBonus}%</c:bonus> сверху.`,
        cz: `Jednotky jsou tvůj jediný způsob, jak poškodit nepřátelskou Základnu, takže každá vlna je zdroj, ne jen překážka.<br/><br/>První vlna se objeví v <b>0:00</b> a další následuje každých <b>${waveTime}s</b>: jedna na blízko a jedna na dálku, přičemž od sedmé vlny se ke každé třetí přidá obléhací. Zhruba po dvaceti minutách se do každé vlny přidá druhá jednotka na dálku.<br/><br/>Rostou spolu s hrou. Jednotky získají úroveň každé <b>${levelEvery} vlny</b>, což je <c:bonus>${levelBonus}% životů a poškození</c:bonus> za úroveň, až do úrovně <b>${maxLevel}</b>. Jakmile padne nepřátelská věž na jejich straně, dostanou navrch ještě <c:bonus>${towerBonus}%</c:bonus>.`,
        br: `Os lacaios são a sua única forma de causar dano à Base inimiga, então cada onda é um recurso e não apenas um obstáculo.<br/><br/>A primeira onda surge em <b>0:00</b> e outra vem a cada <b>${waveTime}s</b>: um lacaio corpo a corpo e um à distância, com um de cerco entrando a cada terceira onda a partir da sétima. Depois de cerca de vinte minutos, um segundo lacaio à distância entra em cada onda.<br/><br/>Eles crescem junto com o jogo. Os lacaios sobem de nível a cada <b>${levelEvery} ondas</b>, valendo <c:bonus>${levelBonus}% de vida e dano</c:bonus> cada, até o nível <b>${maxLevel}</b>. Quando a torre inimiga daquele lado cai, eles ganham mais <c:bonus>${towerBonus}%</c:bonus> por cima.`,
        fr: `Les sbires sont votre seul moyen d'endommager la Base ennemie : chaque vague est donc une ressource et pas seulement un obstacle.<br/><br/>La première vague apparaît à <b>0:00</b> et une autre suit toutes les <b>${waveTime}s</b> : un sbire de mêlée et un à distance, rejoints par un sbire de siège une vague sur trois à partir de la septième. Après une vingtaine de minutes, un second sbire à distance rejoint chaque vague.<br/><br/>Ils grandissent avec la partie. Les sbires gagnent un niveau toutes les <b>${levelEvery} vagues</b>, soit <c:bonus>${levelBonus}% de vie et de dégâts</c:bonus> chacun, jusqu'au niveau <b>${maxLevel}</b>. Une fois la tour ennemie de leur côté tombée, ils gagnent encore <c:bonus>${towerBonus}%</c:bonus>.`,
        zh: `小兵是你唯一能對敵方基地造成傷害的手段，因此每一波兵線都是資源，而不只是阻礙。<br/><br/>第一波在 <b>0:00</b> 生成，之後每 <b>${waveTime} 秒</b>一波：一隻近戰與一隻遠程小兵；從第七波起，每三波會再加入一隻攻城小兵。約二十分鐘後，每波會再增加第二隻遠程小兵。<br/><br/>它們會隨對局成長。小兵每 <b>${levelEvery} 波</b>提升一級，每級獲得 <c:bonus>${levelBonus}% 生命值與傷害</c:bonus>，最高至 <b>${maxLevel}</b> 級。當該路的敵方防禦塔倒下後，還會再額外獲得 <c:bonus>${towerBonus}%</c:bonus>。`,
        vi: `Lính là cách duy nhất để bạn gây sát thương lên Căn Cứ địch, nên mỗi đợt lính là một nguồn tài nguyên chứ không chỉ là vật cản.<br/><br/>Đợt đầu tiên xuất hiện lúc <b>0:00</b> và cứ mỗi <b>${waveTime} giây</b> lại có đợt tiếp theo: một lính cận chiến và một lính đánh xa, cùng một lính công thành gia nhập mỗi ba đợt kể từ đợt thứ bảy. Sau khoảng hai mươi phút, một lính đánh xa thứ hai gia nhập mỗi đợt.<br/><br/>Chúng mạnh lên cùng trận đấu. Lính lên cấp mỗi <b>${levelEvery} đợt</b>, mỗi cấp cho <c:bonus>${levelBonus}% máu và sát thương</c:bonus>, tối đa tới cấp <b>${maxLevel}</b>. Khi trụ địch ở phía đó bị phá, chúng nhận thêm <c:bonus>${towerBonus}%</c:bonus> nữa.`,
        id: `Minion adalah satu-satunya cara kamu merusak Markas musuh, jadi setiap gelombang adalah sumber daya, bukan sekadar penghalang.<br/><br/>Gelombang pertama muncul pada <b>0:00</b> dan berikutnya tiap <b>${waveTime} detik</b>: satu minion jarak dekat dan satu jarak jauh, dengan minion siege bergabung setiap gelombang ketiga mulai dari yang ketujuh. Setelah sekitar dua puluh menit, minion jarak jauh kedua bergabung di tiap gelombang.<br/><br/>Mereka tumbuh seiring permainan. Minion naik level setiap <b>${levelEvery} gelombang</b>, memperoleh <c:bonus>${levelBonus}% nyawa dan damage</c:bonus> per level, hingga level <b>${maxLevel}</b>. Setelah menara musuh di sisi mereka jatuh, mereka mendapat tambahan <c:bonus>${towerBonus}%</c:bonus> lagi.`,
        kr: `미니언은 적 기지에 피해를 줄 수 있는 유일한 수단이므로, 모든 웨이브는 단순한 장애물이 아니라 자원입니다.<br/><br/>첫 웨이브는 <b>0:00</b>에 생성되고 이후 <b>${waveTime}초</b>마다 이어집니다. 근접 1기와 원거리 1기로 구성되며, 7번째 웨이브부터 세 웨이브마다 공성 미니언이 합류합니다. 약 20분 후에는 원거리 미니언이 한 기 더 합류합니다.<br/><br/>미니언은 게임과 함께 성장합니다. <b>${levelEvery}웨이브</b>마다 레벨이 올라 레벨당 <c:bonus>체력과 피해량 ${levelBonus}%</c:bonus>를 얻으며 최대 <b>${maxLevel}</b>레벨까지 오릅니다. 해당 라인의 적 타워가 파괴되면 그 위에 <c:bonus>${towerBonus}%</c:bonus>가 더 붙습니다.`,
      }
    }

    case MechanicId.GOLD: {
      const lastHit = GOLDS_PER_COIN + BONUS_GOLD_PER_KILL_MINION
      const coin = GOLDS_PER_COIN
      const perLevel = GOLDS_PER_COIN_PER_LEVEL + BONUS_GOLDS_PER_COIN_PER_LEVEL
      const coinLife = sec(MINION_COIN_LIFETIME)

      const lastHitClips = clipSlot(MechanicVideoLabel.LAST_HIT, MechanicVideoLabel.PICK_UP_COIN)

      return {
        en: `Buy items with gold. You start with ${gold(INITIAL_GOLDS)} and earn ${gold(GOLDS_PER_SEC)} every second.<h2>Last hits and coins</h2><ul><li><b>Last hit:</b> deal the killing blow to a minion to earn ${gold(lastHit)} immediately: ${gold(coin)} base + ${gold(BONUS_GOLD_PER_KILL_MINION)} bonus, plus ${gold(perLevel)} per minion level.</li><li><b>Missed last hit:</b> if a tower, passive effect, or minion kills it, a coin drops instead. Walk over it to collect it. Only the killing team can collect it.</li><li>A coin starts at ${gold(coin)} and gains ${gold(GOLDS_PER_COIN_PER_LEVEL)} per minion level. It disappears after <b>${coinLife}s</b>.</li><li><b>Siege minions</b> drop <b>two coins</b>.</li></ul>${lastHitClips}<h2>Other rewards</h2><ul><li><b>First Blood:</b> ${gold(FIRST_BLOOD_GOLDS)} for the player who gets it.</li><li><b>Enemy tower destroyed:</b> ${gold(TOWER_KILL_GOLDS)} for each teammate.</li></ul>`,
        ru: `Вы начинаете с ${gold(INITIAL_GOLDS)} и пассивно получаете ${gold(GOLDS_PER_SEC)} в секунду весь матч.<br/><br/><b>Добивание</b> — ваш основной доход: нанесите последний удар по миньону, и вы сразу получите ${gold(lastHit)} (${coin} + ${BONUS_GOLD_PER_KILL_MINION} бонусом, плюс ${perLevel} за каждый уровень миньона).<br/><br/>Если миньон погибает <b>без</b> добивания героем — от башни, пассивки или другого миньона — вместо этого на месте его смерти падает <b>монета</b>. Монета лежит <b>${coinLife} с</b> и стоит ${gold(coin)}; подобрать её может любой из команды убийцы, просто пройдя по ней. Осадные миньоны роняют две монеты.<br/><br/>• Первая кровь награждает этого игрока на ${gold(FIRST_BLOOD_GOLDS)}<br/>• Уничтожение вражеской башни награждает каждого игрока команды на ${gold(TOWER_KILL_GOLDS)}`,
        cz: `Začínáš s ${gold(INITIAL_GOLDS)} a po celý zápas pasivně získáváš ${gold(GOLDS_PER_SEC)} za sekundu.<br/><br/><b>Dobíjení</b> je tvůj hlavní příjem: zasaď jednotce poslední ránu a hned dostaneš ${gold(lastHit)} (${coin} + ${BONUS_GOLD_PER_KILL_MINION} bonus, plus ${perLevel} za každou úroveň jednotky).<br/><br/>Když jednotka zemře <b>bez</b> dobití hrdinou – věží, pasivní schopností nebo jinou jednotkou – místo toho na jejím místě spadne <b>mince</b>. Mince tam leží <b>${coinLife}s</b> a má hodnotu ${gold(coin)}; sebrat ji může kdokoli z týmu zabijáka tím, že po ní přejde. Obléhací jednotky pouštějí dvě mince.<br/><br/>• První krev odmění daného hráče částkou ${gold(FIRST_BLOOD_GOLDS)}<br/>• Zničení nepřátelské věže odmění každého hráče týmu částkou ${gold(TOWER_KILL_GOLDS)}`,
        br: `Você começa com ${gold(INITIAL_GOLDS)} e ganha ${gold(GOLDS_PER_SEC)} por segundo passivamente durante toda a partida.<br/><br/>Dar o <b>último golpe</b> é sua principal renda: acerte o golpe final em um lacaio e você recebe ${gold(lastHit)} na hora (${coin} + ${BONUS_GOLD_PER_KILL_MINION} de bônus, mais ${perLevel} por nível do lacaio).<br/><br/>Se um lacaio morrer <b>sem</b> que um herói dê o último golpe - para uma torre, uma passiva ou outro lacaio - ele deixa cair uma <b>moeda</b> onde caiu. A moeda fica ali por <b>${coinLife}s</b> e vale ${gold(coin)}; qualquer um do time que matou pode pegá-la passando por cima. Lacaios de cerco deixam duas moedas.<br/><br/>• O Primeiro Sangue recompensa aquele jogador com ${gold(FIRST_BLOOD_GOLDS)}<br/>• Destruir uma torre inimiga recompensa cada jogador do time com ${gold(TOWER_KILL_GOLDS)}`,
        fr: `Vous commencez avec ${gold(INITIAL_GOLDS)} et gagnez passivement ${gold(GOLDS_PER_SEC)} par seconde pendant toute la partie.<br/><br/>Le <b>coup de grâce</b> est votre revenu principal : portez le coup fatal à un sbire et vous touchez ${gold(lastHit)} immédiatement (${coin} + ${BONUS_GOLD_PER_KILL_MINION} de bonus, plus ${perLevel} par niveau du sbire).<br/><br/>Si un sbire meurt <b>sans</b> qu'un héros porte le coup fatal - à cause d'une tour, d'une passive ou d'un autre sbire - il laisse tomber une <b>pièce</b> à l'endroit où il est tombé. La pièce reste au sol <b>${coinLife}s</b> et vaut ${gold(coin)} ; n'importe qui de l'équipe qui l'a tué peut la ramasser en marchant dessus. Les sbires de siège laissent deux pièces.<br/><br/>• Le Premier Sang récompense ce joueur de ${gold(FIRST_BLOOD_GOLDS)}<br/>• Détruire une tour ennemie récompense chaque joueur de l'équipe de ${gold(TOWER_KILL_GOLDS)}`,
        zh: `你以 ${gold(INITIAL_GOLDS)} 開局，整場比賽每秒被動獲得 ${gold(GOLDS_PER_SEC)}。<br/><br/><b>補刀</b>是你的主要收入：對小兵造成最後一擊，即可立刻獲得 ${gold(lastHit)}（${coin} + ${BONUS_GOLD_PER_KILL_MINION} 額外，並每個小兵等級再加 ${perLevel}）。<br/><br/>若小兵在<b>沒有</b>英雄補刀的情況下死亡——死於防禦塔、被動或其他小兵——它會在原地掉落一枚<b>金幣</b>。金幣會停留 <b>${coinLife} 秒</b>，價值 ${gold(coin)}；擊殺方隊伍的任何人走過即可拾取。攻城小兵會掉落兩枚金幣。<br/><br/>• 首殺獎勵該名玩家 ${gold(FIRST_BLOOD_GOLDS)}<br/>• 摧毀敵方防禦塔獎勵隊伍中每位玩家 ${gold(TOWER_KILL_GOLDS)}`,
        vi: `Bạn bắt đầu với ${gold(INITIAL_GOLDS)} và nhận thụ động ${gold(GOLDS_PER_SEC)} mỗi giây trong suốt trận đấu.<br/><br/><b>Last hit</b> là nguồn thu chính: kết liễu một lính và bạn được trả ${gold(lastHit)} ngay lập tức (${coin} + ${BONUS_GOLD_PER_KILL_MINION} thưởng, cộng ${perLevel} mỗi cấp của lính).<br/><br/>Nếu một lính chết mà <b>không</b> có tướng nào last hit - do trụ, nội tại hay một lính khác - nó sẽ rơi một <b>đồng vàng</b> ngay tại chỗ. Đồng vàng nằm đó trong <b>${coinLife} giây</b> và trị giá ${gold(coin)}; bất kỳ ai trong đội đã hạ nó đều có thể nhặt bằng cách đi qua. Lính công thành rơi hai đồng.<br/><br/>• Hạ gục đầu tiên thưởng cho người chơi đó ${gold(FIRST_BLOOD_GOLDS)}<br/>• Phá hủy trụ địch thưởng cho mỗi người chơi trong đội ${gold(TOWER_KILL_GOLDS)}`,
        id: `Kamu mulai dengan ${gold(INITIAL_GOLDS)} dan memperoleh ${gold(GOLDS_PER_SEC)} per detik secara pasif sepanjang pertandingan.<br/><br/><b>Last hit</b> adalah sumber penghasilan utamamu: berikan pukulan terakhir pada minion dan kamu langsung dibayar ${gold(lastHit)} (${coin} + ${BONUS_GOLD_PER_KILL_MINION} bonus, ditambah ${perLevel} per level minion).<br/><br/>Jika minion mati <b>tanpa</b> hero yang memberi pukulan terakhir - karena menara, pasif, atau minion lain - ia menjatuhkan <b>koin</b> di tempat ia jatuh. Koin itu tergeletak selama <b>${coinLife} detik</b> dan bernilai ${gold(coin)}; siapa pun dari tim yang membunuhnya bisa mengambilnya dengan melewatinya. Minion siege menjatuhkan dua koin.<br/><br/>• Darah Pertama memberi pemain tersebut ${gold(FIRST_BLOOD_GOLDS)}<br/>• Menghancurkan menara musuh memberi setiap pemain di tim ${gold(TOWER_KILL_GOLDS)}`,
        kr: `${gold(INITIAL_GOLDS)}로 시작하며, 경기 내내 초당 ${gold(GOLDS_PER_SEC)}를 자동으로 획득합니다.<br/><br/><b>막타</b>가 주 수입원입니다. 미니언에게 마지막 일격을 넣으면 즉시 ${gold(lastHit)}를 받습니다(${coin} + 보너스 ${BONUS_GOLD_PER_KILL_MINION}, 미니언 레벨당 ${perLevel} 추가).<br/><br/>챔피언의 막타 <b>없이</b> 미니언이 죽으면 - 타워, 지속 효과, 다른 미니언에 의해 - 그 자리에 <b>코인</b>을 떨어뜨립니다. 코인은 <b>${coinLife}초</b> 동안 남아 있고 ${gold(coin)}의 가치를 지니며, 처치한 팀의 누구든 밟고 지나가면 획득합니다. 공성 미니언은 코인을 두 개 떨어뜨립니다.<br/><br/>• 첫 처치는 해당 플레이어에게 ${gold(FIRST_BLOOD_GOLDS)}를 지급합니다<br/>• 적 타워 파괴는 팀의 모든 플레이어에게 ${gold(TOWER_KILL_GOLDS)}를 지급합니다`,
      }
    }

    case MechanicId.EXPERIENCE: {
      const range = EXP_SHARE_DISTANCE
      const minionExp = EXP_REWARD_KILL_MINION
      const perLevel = EXP_REWARD_KILL_MINION_PER_LEVEL
      const heroExp = EXP_REWARD_KILL_HERO
      const perTargetLevel = EXP_REWARD_KILL_HERO_PER_TARGET_LEVEL
      const perLevelGap = EXP_REWARD_KILL_HERO_PER_LEVEL_GAP
      const streakPerKill = KILL_STREAK_BONUS_PER_STACK
      const streakMax = KILL_STREAK_BONUS_MAX
      const assistShare = perc(ASSIST_EXPERIENCE_MULTIPLIER)
      const killChart = chartSlot(MechanicChartId.HERO_KILL_EXPERIENCE)
      const levelChart = chartSlot(MechanicChartId.LEVEL_EXPERIENCE_REQUIRED)

      return {
        en: `Gain <b>experience</b> by staying within <c:range>${range} range</c:range> of dying enemy minions. <b>You do not need the last hit.</b> Stay too far away and you gain nothing.<ul><li><b>Minion:</b> <c:bonus>${minionExp} experience</c:bonus> + <c:bonus>${perLevel}</c:bonus> per minion level.</li></ul><h2>Killing a hero</h2>A hero is worth <c:bonus>${heroExp} experience</c:bonus> plus three bonuses:<ul><li><b>Their level:</b> <c:bonus>+${perTargetLevel}</c:bonus> per level they have.</li><li><b>Their kill streak:</b> <c:bonus>+${streakPerKill}</c:bonus> per kill on their current streak, up to <c:bonus>${streakMax}</c:bonus>.</li><li><b>The level gap:</b> <c:bonus>+${perLevelGap} × their level</c:bonus> for every level they are <b>ahead of you</b>. Killing someone below you adds nothing, so this only ever helps you catch up.</li></ul><b>Experience = ${heroExp} + ${perTargetLevel} × their level + ${streakPerKill} × their streak + ${perLevelGap} × their level × levels ahead of you</b><br/>An <b>assist</b> pays <c:bonus>${assistShare}%</c:bonus> of that.${killChart}<h2>Levelling up</h2>Each level improves your base stats and unlocks talents along the way, up to <c:bonus>level ${MAX_LEVEL}</c:bonus>. Later levels cost more experience than early ones.${levelChart}`,
        ru: `Опыт распределяется по <b>близости</b>, а не по тому, кто нанёс удар: вы получаете его, когда вражеский миньон умирает в пределах <c:range>${range} от вас</c:range>. Стоя слишком далеко, вы не получите ничего — поэтому уход с линии стоит больше, чем просто упущенное золото.<ul><li><b>Миньон:</b> <c:bonus>${minionExp} опыта</c:bonus> + <c:bonus>${perLevel}</c:bonus> за каждый его уровень.</li></ul><h2>Убийство героя</h2>Герой стоит <c:bonus>${heroExp} опыта</c:bonus> плюс три бонуса:<ul><li><b>Его уровень:</b> <c:bonus>+${perTargetLevel}</c:bonus> за каждый его уровень.</li><li><b>Его серия убийств:</b> <c:bonus>+${streakPerKill}</c:bonus> за каждое убийство в текущей серии, максимум <c:bonus>${streakMax}</c:bonus>.</li><li><b>Разница уровней:</b> <c:bonus>+${perLevelGap} × его уровень</c:bonus> за каждый уровень, на который он <b>выше вас</b>. Убийство того, кто ниже, ничего не добавляет, так что этот бонус только помогает догонять.</li></ul><b>Опыт = ${heroExp} + ${perTargetLevel} × его уровень + ${streakPerKill} × его серия + ${perLevelGap} × его уровень × уровней выше вас</b><br/>За <b>помощь</b> начисляется <c:bonus>${assistShare}%</c:bonus> от этого.${killChart}<h2>Повышение уровня</h2>Каждый уровень повышает базовые характеристики и по пути открывает таланты, максимум — <c:bonus>${MAX_LEVEL} уровень</c:bonus>. Поздние уровни стоят больше опыта, чем ранние.${levelChart}`,
        cz: `Zkušenosti se sdílejí podle <b>blízkosti</b>, ne podle toho, kdo zasadil ránu: získáš je pokaždé, když nepřátelská jednotka zemře v <c:range>dosahu ${range}</c:range> od tebe. Když stojíš příliš daleko, nedostaneš nic – proto opuštění linie stojí víc než jen ušlé zlato.<ul><li><b>Jednotka:</b> <c:bonus>${minionExp} zkušeností</c:bonus> + <c:bonus>${perLevel}</c:bonus> za každou její úroveň.</li></ul><h2>Zabití hrdiny</h2>Hrdina má hodnotu <c:bonus>${heroExp} zkušeností</c:bonus> plus tři bonusy:<ul><li><b>Jeho úroveň:</b> <c:bonus>+${perTargetLevel}</c:bonus> za každou jeho úroveň.</li><li><b>Jeho série zabití:</b> <c:bonus>+${streakPerKill}</c:bonus> za každé zabití v aktuální sérii, nejvýš <c:bonus>${streakMax}</c:bonus>.</li><li><b>Rozdíl úrovní:</b> <c:bonus>+${perLevelGap} × jeho úroveň</c:bonus> za každou úroveň, o kterou je <b>před tebou</b>. Zabíjení slabších nepřidá nic, takže tohle ti jen pomáhá dotáhnout se.</li></ul><b>Zkušenosti = ${heroExp} + ${perTargetLevel} × jeho úroveň + ${streakPerKill} × jeho série + ${perLevelGap} × jeho úroveň × úrovní před tebou</b><br/>Za <b>asistenci</b> dostaneš <c:bonus>${assistShare}%</c:bonus> z toho.${killChart}<h2>Postup na úroveň</h2>Každá úroveň zvedne základní statistiky a cestou odemyká talenty, až po <c:bonus>úroveň ${MAX_LEVEL}</c:bonus>. Pozdější úrovně stojí víc zkušeností než ty první.${levelChart}`,
        br: `A experiência é compartilhada por <b>proximidade</b>, não por quem deu o golpe: você a ganha sempre que um lacaio inimigo morre dentro de <c:range>${range} de alcance</c:range> de você. Ficar muito atrás não rende nada, e é por isso que sair da rota custa mais do que o ouro perdido.<ul><li><b>Lacaio:</b> <c:bonus>${minionExp} de experiência</c:bonus> + <c:bonus>${perLevel}</c:bonus> por nível do lacaio.</li></ul><h2>Abater um herói</h2>Um herói vale <c:bonus>${heroExp} de experiência</c:bonus> mais três bônus:<ul><li><b>O nível dele:</b> <c:bonus>+${perTargetLevel}</c:bonus> por nível que ele tiver.</li><li><b>A sequência de abates dele:</b> <c:bonus>+${streakPerKill}</c:bonus> por abate na sequência atual, até <c:bonus>${streakMax}</c:bonus>.</li><li><b>A diferença de nível:</b> <c:bonus>+${perLevelGap} × o nível dele</c:bonus> para cada nível que ele estiver <b>à sua frente</b>. Abater quem está atrás não soma nada, então isso só ajuda você a recuperar terreno.</li></ul><b>Experiência = ${heroExp} + ${perTargetLevel} × o nível dele + ${streakPerKill} × a sequência dele + ${perLevelGap} × o nível dele × níveis à sua frente</b><br/>Uma <b>assistência</b> paga <c:bonus>${assistShare}%</c:bonus> disso.${killChart}<h2>Subir de nível</h2>Cada nível aumenta seus atributos base e libera talentos ao longo do caminho, até o <c:bonus>nível ${MAX_LEVEL}</c:bonus>. Os níveis mais altos custam mais experiência do que os primeiros.${levelChart}`,
        fr: `L'expérience se partage par <b>proximité</b>, pas selon qui a porté le coup : vous en gagnez dès qu'un sbire ennemi meurt dans un <c:range>rayon de ${range}</c:range> autour de vous. Rester trop en retrait ne rapporte rien, et c'est pourquoi quitter la voie coûte plus que l'or manqué.<ul><li><b>Sbire :</b> <c:bonus>${minionExp} d'expérience</c:bonus> + <c:bonus>${perLevel}</c:bonus> par niveau du sbire.</li></ul><h2>Tuer un héros</h2>Un héros vaut <c:bonus>${heroExp} d'expérience</c:bonus> plus trois bonus :<ul><li><b>Son niveau :</b> <c:bonus>+${perTargetLevel}</c:bonus> par niveau qu'il possède.</li><li><b>Sa série d'éliminations :</b> <c:bonus>+${streakPerKill}</c:bonus> par élimination de sa série en cours, jusqu'à <c:bonus>${streakMax}</c:bonus>.</li><li><b>L'écart de niveau :</b> <c:bonus>+${perLevelGap} × son niveau</c:bonus> pour chaque niveau qu'il a <b>d'avance sur vous</b>. Tuer plus bas que soi n'ajoute rien : ce bonus ne sert qu'à revenir dans la partie.</li></ul><b>Expérience = ${heroExp} + ${perTargetLevel} × son niveau + ${streakPerKill} × sa série + ${perLevelGap} × son niveau × niveaux d'avance</b><br/>Un <b>assist</b> rapporte <c:bonus>${assistShare}%</c:bonus> de ce total.${killChart}<h2>Monter de niveau</h2>Chaque niveau augmente vos statistiques de base et débloque des talents en chemin, jusqu'au <c:bonus>niveau ${MAX_LEVEL}</c:bonus>. Les derniers niveaux coûtent plus d'expérience que les premiers.${levelChart}`,
        zh: `經驗依<b>距離</b>共享，而非由誰造成最後一擊：只要敵方小兵死在你 <c:range>${range} 範圍</c:range>內，你就能獲得經驗。站得太遠則毫無所得，這也是離開線上的代價遠不只是損失金幣的原因。<ul><li><b>小兵：</b><c:bonus>${minionExp} 經驗</c:bonus> + 依其每一等級再加 <c:bonus>${perLevel}</c:bonus>。</li></ul><h2>擊殺英雄</h2>一名英雄價值 <c:bonus>${heroExp} 經驗</c:bonus>，另加三項加成：<ul><li><b>對方等級：</b>每一等級 <c:bonus>+${perTargetLevel}</c:bonus>。</li><li><b>對方連殺：</b>目前連殺每層 <c:bonus>+${streakPerKill}</c:bonus>，最高 <c:bonus>${streakMax}</c:bonus>。</li><li><b>等級差距：</b>對方每<b>高於你</b>一級，再加 <c:bonus>+${perLevelGap} × 對方等級</c:bonus>。擊殺等級較低者不會有這項加成，因此它只用來幫你追回落後。</li></ul><b>經驗 = ${heroExp} + ${perTargetLevel} × 對方等級 + ${streakPerKill} × 對方連殺 + ${perLevelGap} × 對方等級 × 高於你的級數</b><br/><b>助攻</b>可獲得其中的 <c:bonus>${assistShare}%</c:bonus>。${killChart}<h2>升級</h2>每一級都會提升基礎屬性，並在過程中解鎖天賦，等級上限為 <c:bonus>${MAX_LEVEL} 級</c:bonus>。後期等級所需的經驗比前期更多。${levelChart}`,
        vi: `Kinh nghiệm được chia theo <b>khoảng cách</b>, không phải theo ai ra đòn cuối: bạn nhận được khi một lính địch chết trong <c:range>tầm ${range}</c:range> quanh bạn. Đứng quá xa thì không nhận được gì, đó là lý do rời đường tốn kém hơn nhiều so với số vàng bị bỏ lỡ.<ul><li><b>Lính:</b> <c:bonus>${minionExp} kinh nghiệm</c:bonus> + <c:bonus>${perLevel}</c:bonus> cho mỗi cấp của lính.</li></ul><h2>Hạ gục một tướng</h2>Một tướng đáng giá <c:bonus>${heroExp} kinh nghiệm</c:bonus> cộng ba khoản thưởng:<ul><li><b>Cấp của họ:</b> <c:bonus>+${perTargetLevel}</c:bonus> cho mỗi cấp họ có.</li><li><b>Chuỗi hạ gục của họ:</b> <c:bonus>+${streakPerKill}</c:bonus> cho mỗi mạng trong chuỗi hiện tại, tối đa <c:bonus>${streakMax}</c:bonus>.</li><li><b>Chênh lệch cấp:</b> <c:bonus>+${perLevelGap} × cấp của họ</c:bonus> cho mỗi cấp họ <b>cao hơn bạn</b>. Hạ gục người thấp cấp hơn không cộng gì, nên khoản này chỉ giúp bạn đuổi kịp.</li></ul><b>Kinh nghiệm = ${heroExp} + ${perTargetLevel} × cấp của họ + ${streakPerKill} × chuỗi của họ + ${perLevelGap} × cấp của họ × số cấp họ hơn bạn</b><br/><b>Hỗ trợ</b> nhận <c:bonus>${assistShare}%</c:bonus> số đó.${killChart}<h2>Lên cấp</h2>Mỗi cấp tăng chỉ số cơ bản và mở khóa thiên phú dọc đường, tối đa <c:bonus>cấp ${MAX_LEVEL}</c:bonus>. Các cấp về sau tốn nhiều kinh nghiệm hơn các cấp đầu.${levelChart}`,
        id: `Pengalaman dibagi berdasarkan <b>kedekatan</b>, bukan siapa yang memukul terakhir: kamu mendapatkannya setiap kali minion musuh mati dalam <c:range>jangkauan ${range}</c:range> darimu. Berdiri terlalu jauh tidak menghasilkan apa-apa, itulah sebabnya meninggalkan lane lebih mahal daripada sekadar emas yang terlewat.<ul><li><b>Minion:</b> <c:bonus>${minionExp} pengalaman</c:bonus> + <c:bonus>${perLevel}</c:bonus> per level minion.</li></ul><h2>Membunuh hero</h2>Satu hero bernilai <c:bonus>${heroExp} pengalaman</c:bonus> ditambah tiga bonus:<ul><li><b>Level mereka:</b> <c:bonus>+${perTargetLevel}</c:bonus> per level yang mereka punya.</li><li><b>Killstreak mereka:</b> <c:bonus>+${streakPerKill}</c:bonus> per kill pada streak berjalan, maksimal <c:bonus>${streakMax}</c:bonus>.</li><li><b>Selisih level:</b> <c:bonus>+${perLevelGap} × level mereka</c:bonus> untuk tiap level mereka <b>di atasmu</b>. Membunuh yang lebih rendah tidak menambah apa pun, jadi bonus ini hanya membantumu mengejar.</li></ul><b>Pengalaman = ${heroExp} + ${perTargetLevel} × level mereka + ${streakPerKill} × streak mereka + ${perLevelGap} × level mereka × level di atasmu</b><br/><b>Assist</b> memberi <c:bonus>${assistShare}%</c:bonus> dari itu.${killChart}<h2>Naik level</h2>Setiap level menaikkan statistik dasarmu dan membuka talenta di sepanjang jalan, sampai <c:bonus>level ${MAX_LEVEL}</c:bonus>. Level akhir butuh lebih banyak pengalaman daripada level awal.${levelChart}`,
        kr: `경험치는 막타를 넣은 사람이 아니라 <b>거리</b>로 공유됩니다. 적 미니언이 자신으로부터 <c:range>${range} 범위</c:range> 안에서 죽으면 경험치를 얻습니다. 너무 멀리 서 있으면 아무것도 얻지 못하며, 라인을 비우는 비용이 놓친 골드보다 큰 이유가 바로 이것입니다.<ul><li><b>미니언:</b> <c:bonus>경험치 ${minionExp}</c:bonus> + 미니언 레벨당 <c:bonus>${perLevel}</c:bonus>.</li></ul><h2>챔피언 처치</h2>챔피언 하나는 <c:bonus>경험치 ${heroExp}</c:bonus>에 세 가지 보너스가 더해집니다.<ul><li><b>상대의 레벨:</b> 레벨당 <c:bonus>+${perTargetLevel}</c:bonus>.</li><li><b>상대의 연속 처치:</b> 현재 연속 처치 1회당 <c:bonus>+${streakPerKill}</c:bonus>, 최대 <c:bonus>${streakMax}</c:bonus>.</li><li><b>레벨 차이:</b> 상대가 나보다 <b>앞선</b> 레벨 1당 <c:bonus>+${perLevelGap} × 상대 레벨</c:bonus>. 나보다 낮은 상대를 잡을 때는 붙지 않으므로, 이 보너스는 따라잡을 때만 도움이 됩니다.</li></ul><b>경험치 = ${heroExp} + ${perTargetLevel} × 상대 레벨 + ${streakPerKill} × 상대 연속 처치 + ${perLevelGap} × 상대 레벨 × 앞선 레벨 수</b><br/><b>어시스트</b>는 그 값의 <c:bonus>${assistShare}%</c:bonus>를 받습니다.${killChart}<h2>레벨 업</h2>레벨마다 기본 능력치가 오르고 그 과정에서 특성이 열리며, 최대 <c:bonus>${MAX_LEVEL}레벨</c:bonus>까지 오릅니다. 뒤쪽 레벨일수록 필요한 경험치가 더 많습니다.${levelChart}`,
      }
    }

    case MechanicId.SHOP: {
      const radius = BASE_HEAL_RADIUS
      const healPerc = perc(BASE_HEAL_PERCENTAGE)
      const tick = sec(BASE_HEAL_TICK_TIME)
      const speed = perc(BASE_HEAL_BONUS_MOVEMENT_SPEED)
      const refundWindow = sec(ITEM_FULL_REFUND_WINDOW)
      const refundBack = perc(ITEM_SELL_REFUND_MULTIPLIER)
      const inventory = `<img class="inline-mechanic-image" src="/assets/mainpage/learn/shop/inventory.png" alt="inventory" />`

      return {
        en: `Buy items and recover at your own <b>Base</b>. Green particles show when you are inside its <c:range>${radius} radius</c:range>.<ul><li><c:heal>Recover ${healPerc}% of maximum health</c:heal> every <b>${tick}s</b>.</li><li><c:dispel>Remove negative effects</c:dispel> applied outside the Base.</li><li>Gain <c:pspeed>+${speed}% movement speed</c:pspeed>, which lasts briefly after leaving.</li></ul><b>Stay out of the enemy Base:</b> it deals <c:pure>${BASE_ENEMY_PURE_DAMAGE} pure damage</c:pure> every <b>${tick}s</b>.<h2>Buying items</h2>The shop opens only at your own Base.${inventory}<ol><li>Move your mouse to the <b>item squares at the bottom of the screen</b>.</li><li>Hover an item to read its details.</li><li><b>Click to buy.</b> The item goes into a free inventory slot.</li></ol><h2>Selling items</h2><ul><li>Sell within <b>${refundWindow}s</b> of buying for a <c:bonus>full refund</c:bonus>.</li><li><b>Using the item ends the full-refund window.</b></li><li>Otherwise, selling returns <c:bonus>${refundBack}% of its full cost</c:bonus>.</li></ul>`,
        ru: `Зона вокруг вашей Базы безопасна и отмечена зелёным эффектом, пока вы находитесь в <c:range>радиусе ${radius}</c:range>.<br/><br/>Внутри вы <c:heal>восстанавливаете ${healPerc}% максимального здоровья</c:heal> каждые ${tick} с, все отрицательные эффекты, полученные снаружи, <c:dispel>снимаются</c:dispel>, и вы получаете <c:pspeed>+${speed}% скорости передвижения</c:pspeed>, которая ненадолго сохраняется после выхода — именно поэтому быстрый возврат на базу окупается.<br/><br/>Нахождение на <b>вражеской</b> базе, наоборот, наказывается: она наносит <c:pure>${BASE_ENEMY_PURE_DAMAGE} чистого урона</c:pure> каждые ${tick} с, так что попытка снести вражескую Базу с тыла — гонка, которую вы обычно проиграете.<h2>Покупки</h2>Магазин управляется <b>мышью</b> и открывается только когда вы стоите на своей Базе.<br/><br/>${inventory}<br/>Опустите курсор к <b>квадратам предметов внизу экрана</b> — этот ряд одновременно ваш инвентарь и магазин. Наведите курсор на квадрат, чтобы увидеть предмет, и <b>щёлкните, чтобы купить</b>. Купленное сразу попадает в свободную ячейку.<br/><br/><b>Продажа.</b> Продайте предмет в течение <b>${refundWindow} с после покупки</b>, и вам вернут <c:bonus>полную стоимость</c:bonus> — этого хватает, чтобы отменить промах. <b>Использование предмета это отменяет</b>: активация тратит его ценность, и цена сразу падает до обычной. Любая другая продажа возвращает <b>${refundBack}%</b> полной стоимости.`,
        cz: `Okolí tvé Základny je bezpečná zóna, označená zeleným efektem, dokud stojíš v <c:range>poloměru ${radius}</c:range>.<br/><br/>Uvnitř <c:heal>obnovíš ${healPerc}% svého maximálního zdraví</c:heal> každých ${tick}s, všechny negativní efekty nabrané venku se <c:dispel>vyčistí</c:dispel> a získáš <c:pspeed>+${speed}% rychlosti pohybu</c:pspeed>, která chvíli přetrvá i po odchodu – proto se rychlý návrat vyplatí.<br/><br/>Stání v <b>nepřátelské</b> základně se naopak trestá: spaluje <c:pure>${BASE_ENEMY_PURE_DAMAGE} čistého poškození</c:pure> každých ${tick}s, takže pokus shodit nepřátelskou Základnu zezadu je závod, který obvykle prohraješ.<h2>Nakupování</h2>Obchod se ovládá <b>myší</b> a otevře se jen, když stojíš na vlastní Základně.<br/><br/>${inventory}<br/>Přesuň kurzor dolů na <b>čtverce předmětů ve spodní části obrazovky</b> – ten řádek je zároveň tvůj inventář i obchod. Najeď na čtverec, ať vidíš předmět, a <b>klikni pro nákup</b>. Co koupíš, jde rovnou do volného slotu.<br/><br/><b>Prodej.</b> Prodej předmět do <b>${refundWindow}s od nákupu</b> a dostaneš zpět <c:bonus>plnou cenu</c:bonus> – dost na to, abys napravil překliknutí. <b>Použití předmětu to zruší</b>: aktivace utratí jeho hodnotu, takže cena hned spadne na běžnou. Každý jiný prodej vrátí <b>${refundBack}%</b> plné ceny.`,
        br: `A área ao redor da sua Base é uma zona segura, marcada por um efeito verde enquanto você está dentro do <c:range>raio de ${radius}</c:range>.<br/><br/>Dentro dela você <c:heal>recupera ${healPerc}% da sua vida máxima</c:heal> a cada ${tick}s, todos os efeitos negativos pegos fora são <c:dispel>removidos</c:dispel>, e você ganha <c:pspeed>+${speed}% de velocidade de movimento</c:pspeed> que dura um pouco depois de sair - é isso que faz um recall rápido valer a viagem.<br/><br/>Ficar na base <b>inimiga</b> é punido: queima <c:pure>${BASE_ENEMY_PURE_DAMAGE} de dano puro</c:pure> a cada ${tick}s, então tentar derrubar a Base inimiga por trás é uma corrida que você geralmente perde.<h2>Comprando</h2>A loja é controlada pelo <b>mouse</b> e só abre enquanto você está na sua própria Base.<br/><br/>${inventory}<br/>Mova o cursor até os <b>quadrados de itens na parte de baixo da tela</b> - essa fileira é o seu inventário e a loja ao mesmo tempo. Passe o mouse sobre um quadrado para ver o item e <b>clique para comprar</b>. O que você compra vai direto para um espaço livre.<br/><br/><b>Vendendo.</b> Venda um item em até <b>${refundWindow}s após comprá-lo</b> e você recebe o <c:bonus>preço total</c:bonus> de volta - o suficiente para desfazer um clique errado. <b>Usar o item cancela isso</b>: ativá-lo gasta seu valor, então cai para a taxa normal na hora. Qualquer outra venda devolve <b>${refundBack}%</b> do custo total.`,
        fr: `La zone autour de votre Base est sûre, signalée par un effet vert tant que vous êtes dans le <c:range>rayon de ${radius}</c:range>.<br/><br/>À l'intérieur, vous <c:heal>récupérez ${healPerc}% de votre vie maximale</c:heal> toutes les ${tick}s, tous les effets négatifs ramassés à l'extérieur sont <c:dispel>dissipés</c:dispel>, et vous gagnez <c:pspeed>+${speed}% de vitesse de déplacement</c:pspeed> qui persiste brièvement après votre départ - c'est ce qui rend un retour rapide rentable.<br/><br/>Rester dans la base <b>ennemie</b> est au contraire puni : elle inflige <c:pure>${BASE_ENEMY_PURE_DAMAGE} dégâts purs</c:pure> toutes les ${tick}s, donc tenter d'abattre la Base ennemie par derrière est une course que vous perdrez généralement.<h2>Faire ses achats</h2>La boutique se pilote <b>à la souris</b> et ne s'ouvre que lorsque vous êtes dans votre propre Base.<br/><br/>${inventory}<br/>Descendez le curseur vers les <b>cases d'objets en bas de l'écran</b> : cette rangée est à la fois votre inventaire et la boutique. Survolez une case pour voir l'objet, puis <b>cliquez pour l'acheter</b>. Tout achat part directement dans un emplacement libre.<br/><br/><b>Revente.</b> Revendez un objet dans les <b>${refundWindow}s suivant l'achat</b> et vous récupérez le <c:bonus>prix total</c:bonus> - de quoi annuler un mauvais clic. <b>Utiliser l'objet annule cela</b> : l'activer dépense sa valeur, le prix retombe donc aussitôt au taux normal. Toute autre revente rend <b>${refundBack}%</b> du coût total.`,
        zh: `基地周圍是安全區域，當你站在 <c:range>${radius} 半徑</c:range>內時會出現綠色粒子特效。<br/><br/>在其中你每 ${tick} 秒<c:heal>恢復最大生命值的 ${healPerc}%</c:heal>，在外面獲得的所有負面效果都會被<c:dispel>清除</c:dispel>，並獲得 <c:pspeed>+${speed}% 移動速度</c:pspeed>，離開後仍會短暫保留——這正是快速回城值得的原因。<br/><br/>站在<b>敵方</b>基地則會受到懲罰：每 ${tick} 秒造成 <c:pure>${BASE_ENEMY_PURE_DAMAGE} 真實傷害</c:pure>，因此從後方偷襲敵方基地通常是一場你會輸掉的競速。<h2>購買裝備</h2>商店由<b>滑鼠</b>操作，且只有站在自家基地內才會開啟。<br/><br/>${inventory}<br/>將游標移到<b>畫面下方的裝備格子</b>——那一排同時是你的物品欄與商店。將滑鼠懸停在格子上可查看裝備，<b>點擊即可購買</b>。購買的裝備會直接進入空欄位。<br/><br/><b>販售。</b>在<b>購買後 ${refundWindow} 秒</b>內賣出裝備，可取回<c:bonus>全額</c:bonus>——足以挽回誤點。<b>使用該裝備會取消此優惠</b>：一旦啟動就消耗了它的價值，售價立即降回一般水準。其他任何販售皆返還全額成本的 <b>${refundBack}%</b>。`,
        vi: `Khu vực quanh Căn Cứ của bạn là vùng an toàn, được đánh dấu bằng hiệu ứng hạt màu xanh khi bạn đứng trong <c:range>bán kính ${radius}</c:range>.<br/><br/>Bên trong, bạn <c:heal>hồi ${healPerc}% máu tối đa</c:heal> mỗi ${tick} giây, mọi hiệu ứng bất lợi nhặt được bên ngoài đều bị <c:dispel>gỡ bỏ</c:dispel>, và bạn nhận <c:pspeed>+${speed}% tốc chạy</c:pspeed> còn duy trì một lúc sau khi rời đi - chính điều này khiến việc về nhà nhanh đáng giá.<br/><br/>Đứng trong căn cứ <b>địch</b> thì ngược lại bị trừng phạt: nó thiêu <c:pure>${BASE_ENEMY_PURE_DAMAGE} sát thương chuẩn</c:pure> mỗi ${tick} giây, nên đi cửa sau phá Căn Cứ địch là cuộc đua bạn thường sẽ thua.<h2>Mua sắm</h2>Cửa hàng điều khiển bằng <b>chuột</b> và chỉ mở khi bạn đang đứng trong Căn Cứ của mình.<br/><br/>${inventory}<br/>Đưa con trỏ xuống <b>các ô trang bị ở đáy màn hình</b> - hàng đó vừa là túi đồ vừa là cửa hàng. Rê chuột lên một ô để xem trang bị, và <b>bấm để mua</b>. Món bạn mua sẽ vào thẳng ô trống.<br/><br/><b>Bán lại.</b> Bán một món trong vòng <b>${refundWindow} giây kể từ khi mua</b> và bạn nhận lại <c:bonus>toàn bộ giá</c:bonus> - đủ để sửa một cú bấm nhầm. <b>Dùng món đó sẽ hủy ưu đãi này</b>: kích hoạt là đã tiêu giá trị của nó, nên giá bán tụt ngay về mức thường. Mọi lượt bán khác trả lại <b>${refundBack}%</b> giá gốc.`,
        id: `Area di sekitar Markasmu adalah zona aman, ditandai efek partikel hijau selama kamu berada dalam <c:range>radius ${radius}</c:range>.<br/><br/>Di dalamnya kamu <c:heal>memulihkan ${healPerc}% nyawa maksimum</c:heal> setiap ${tick} detik, semua efek negatif yang didapat di luar akan <c:dispel>dibersihkan</c:dispel>, dan kamu mendapat <c:pspeed>+${speed}% kecepatan gerak</c:pspeed> yang bertahan sebentar setelah keluar - inilah yang membuat recall cepat sepadan.<br/><br/>Berdiri di markas <b>musuh</b> justru dihukum: ia membakar <c:pure>${BASE_ENEMY_PURE_DAMAGE} damage murni</c:pure> setiap ${tick} detik, jadi backdoor ke Markas musuh adalah balapan yang biasanya kamu kalah.<h2>Berbelanja</h2>Toko dikendalikan dengan <b>mouse</b> dan hanya terbuka selama kamu berdiri di Markasmu sendiri.<br/><br/>${inventory}<br/>Gerakkan kursor ke <b>kotak-kotak item di bagian bawah layar</b> - baris itu adalah inventaris sekaligus toko. Arahkan ke sebuah kotak untuk melihat item, lalu <b>klik untuk membeli</b>. Apa pun yang kamu beli langsung masuk ke slot kosong.<br/><br/><b>Menjual.</b> Jual item dalam <b>${refundWindow} detik setelah membelinya</b> dan kamu mendapat <c:bonus>harga penuh</c:bonus> kembali - cukup untuk membatalkan salah klik. <b>Menggunakan item membatalkan ini</b>: mengaktifkannya sudah memakai nilainya, jadi harganya langsung turun ke tarif normal. Penjualan lain mengembalikan <b>${refundBack}%</b> dari harga penuh.`,
        kr: `기지 주변은 안전 구역이며, <c:range>반경 ${radius}</c:range> 안에 있으면 초록색 파티클 효과가 표시됩니다.<br/><br/>안에 있으면 ${tick}초마다 <c:heal>최대 체력의 ${healPerc}%를 회복</c:heal>하고, 밖에서 얻은 모든 해로운 효과가 <c:dispel>정화</c:dispel>되며, 벗어난 뒤에도 잠시 유지되는 <c:pspeed>+${speed}% 이동 속도</c:pspeed>를 얻습니다. 빠른 귀환이 그만한 값어치를 하는 이유입니다.<br/><br/>반대로 <b>적</b> 기지에 서 있으면 처벌받습니다. ${tick}초마다 <c:pure>고정 피해 ${BASE_ENEMY_PURE_DAMAGE}</c:pure>를 입으므로 백도어로 적 기지를 노리는 것은 대개 지는 경주입니다.<h2>상점 이용</h2>상점은 <b>마우스</b>로 조작하며, 아군 기지 안에 서 있을 때만 열립니다.<br/><br/>${inventory}<br/>커서를 <b>화면 하단의 아이템 칸</b>으로 내리세요. 그 줄이 인벤토리이자 상점입니다. 칸에 마우스를 올리면 아이템을 볼 수 있고, <b>클릭하면 구매</b>됩니다. 구매한 아이템은 빈 슬롯으로 바로 들어갑니다.<br/><br/><b>판매.</b> <b>구매 후 ${refundWindow}초 이내</b>에 되팔면 <c:bonus>전액</c:bonus>을 돌려받습니다. 잘못 클릭한 구매를 되돌리기에 충분합니다. <b>아이템을 사용하면 이 혜택은 사라집니다</b>. 발동하는 순간 그 가치를 쓴 것이므로 즉시 일반 판매가로 떨어집니다. 그 외의 모든 판매는 전체 비용의 <b>${refundBack}%</b>를 돌려줍니다.`,
      }
    }

    case MechanicId.ITEMS: {
      const slots = INVENTORY_SPACE
      const potion = mechanicIcon('items', 'potion')
      const boots = mechanicIcon('items', 'boots')
      const tier1 = mechanicIcon('items', 'tier1')
      const tier2 = mechanicIcon('items', 'tier2')
      const tier3 = mechanicIcon('items', 'tier3')
      const plateShield = mechanicIcon('items', 'plate_shield')
      const plateCooldown = sec(ItemAbilityData.PLATE_SHIELD_COOLDOWN)

      return {
        en: `Items improve your stats or give you new effects. Buy them at your <b>Base</b> and carry up to <b>${slots}</b> at once.<h2>Item types</h2><ul><li>${potion} <b>Consumables:</b> used once, then removed. These include healing potions and wards.</li><li>${boots} <b>Boots:</b> increase movement speed and upgrade into specialized pairs. One pair is enough.</li><li>${tier1} <b>Tier 1:</b> cheap components that improve one stat.</li><li>${tier2} <b>Tier 2:</b> upgrade a Tier 1 component with gold for more stats or a passive effect.</li><li>${tier3} <b>Tier 3:</b> upgrade a Tier 2 item for stronger effects and active abilities.</li></ul>Components become part of their upgrades, so you can build an item in steps.<h2>Using items</h2><ul><li><b>Passive effects</b> work while you carry the item.</li><li><b>Active abilities</b> require you to press the item's slot key. Change these keys in <b>Settings</b>.</li><li>${plateShield} <b>Plate Shield</b> grants armor and health passively. Its active ability has a <b>${plateCooldown}s cooldown</b>.</li></ul>Read an item's tooltip to see what it does.<h2>Selling items</h2>Sell within <b>${sec(ITEM_FULL_REFUND_WINDOW)}s</b> for a <c:bonus>full refund</c:bonus>, unless you have used the item. Otherwise, you get <c:bonus>${perc(ITEM_SELL_REFUND_MULTIPLIER)}% of its full cost</c:bonus> back.<br/><br/>See the <b>Items</b> tab for costs and upgrade paths.`,
        ru: `Предметы — вторая половина вашего роста силы наряду с уровнями. Вы носите до <b>${slots}</b> предметов и покупаете их только находясь на базе.<h2>Типы предметов</h2>• ${potion} <b>Расходуемые</b> — используются один раз и <b>исчезают из инвентаря</b>. Сюда относятся лечебное зелье, варды и прочие одноразовые предметы. Они дешёвые, так что держите под них свободную ячейку.<br/>• ${boots} <b>Обувь</b> — ваша линия скорости передвижения. Улучшается в разные специализированные варианты, но нужна всегда только одна пара.<br/>• ${tier1} <b>Уровень 1</b> — дешёвые компоненты с одной характеристикой, которые вы осилите в первый же заход.<br/>• ${tier2} <b>Уровень 2</b> — собирается из компонента 1-го уровня плюс золото, добавляет вторую характеристику или пассивку.<br/>• ${tier3} <b>Уровень 3</b> — готовые предметы, собираемые из 2-го уровня. Именно здесь находятся активные умения и сильные пассивки.<br/><br/>Поскольку каждый уровень идёт в следующий, ранняя покупка дешёвого компонента почти никогда не бывает потерей — он станет частью готового предмета.<h2>Использование предметов</h2>У каждой ячейки инвентаря своя <b>горячая клавиша</b>, которую можно переназначить в настройках. Нажатие клавиши ячейки использует то, что в ней лежит.<br/><br/>Большинство предметов <b>пассивные</b> — они просто дают характеристики, пока вы их носите. Некоторые <b>активные</b>: например, ${plateShield} <b>Пластинчатый щит</b> даёт броню и здоровье, а нажатие его клавиши запускает умение с перезарядкой <b>${plateCooldown} с</b>. Подсказка предмета сообщает, есть ли у него активное умение и что оно делает.<h2>Продажа</h2>Продажа предмета в течение <b>${sec(ITEM_FULL_REFUND_WINDOW)} с после покупки</b> возвращает <c:bonus>полную стоимость</c:bonus>. <b>Использование активного предмета это отменяет</b> — если эффект уже потрачен, предмет продаётся за <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b>, как любой другой.<br/><br/>Вкладка <b>Предметы</b> содержит все предметы с ценой и путями сборки.`,
        cz: `Předměty jsou druhá polovina tvé silové křivky vedle úrovní. Uneseš jich až <b>${slots}</b> a kupuješ je jen, když stojíš na základně.<h2>Typy předmětů</h2>• ${potion} <b>Spotřební</b> – použijí se jednou a pak <b>zmizí z inventáře</b>. Patří sem léčivý lektvar, wardy a další jednorázové předměty. Jsou levné, tak si na ně nech volný slot.<br/>• ${boots} <b>Boty</b> – tvoje linie rychlosti pohybu. Vylepšují se na různé specializované varianty, ale chceš vždy jen jedny.<br/>• ${tier1} <b>Stupeň 1</b> – levné komponenty s jednou statistikou, které utáhneš hned při první cestě zpět.<br/>• ${tier2} <b>Stupeň 2</b> – staví se z komponentu 1. stupně plus zlato, přidá druhou statistiku nebo pasivní efekt.<br/>• ${tier3} <b>Stupeň 3</b> – hotové předměty ze 2. stupně. Právě tady jsou aktivní schopnosti a silné pasivní efekty.<br/><br/>Protože každý stupeň jde do dalšího, brzký nákup levného komponentu je málokdy vyhozené zlato – stane se součástí hotového předmětu.<h2>Používání předmětů</h2>Každý slot inventáře má vlastní <b>klávesu</b>, kterou si můžeš přenastavit v nastavení. Stisk klávesy slotu použije to, co v něm je.<br/><br/>Většina předmětů je <b>pasivní</b> – prostě dávají statistiky, dokud je nosíš. Některé jsou <b>aktivní</b>: například ${plateShield} <b>Plátový štít</b> dává brnění a životy, a stisk jeho klávesy spustí schopnost s přebíjením <b>${plateCooldown}s</b>. Popisek předmětu ti řekne, jestli má aktivní schopnost a co dělá.<h2>Prodej</h2>Prodej předmětu do <b>${sec(ITEM_FULL_REFUND_WINDOW)}s od nákupu</b> vrátí <c:bonus>plnou cenu</c:bonus>. <b>Použití aktivního předmětu to zruší</b> – když už je efekt utracen, předmět se prodá za <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b> jako každý jiný.<br/><br/>Záložka <b>Předměty</b> vypisuje každý předmět s cenou a cestou stavby.`,
        br: `Os itens são a outra metade da sua curva de poder junto com os níveis. Você carrega até <b>${slots}</b> por vez e só os compra enquanto está na sua Base.<h2>Tipos de item</h2>• ${potion} <b>Consumíveis</b> - usados uma vez e então <b>removidos do inventário</b>. Poção de Cura, sentinelas e os outros itens de uso único ficam aqui. São baratos, então mantenha um espaço livre para eles.<br/>• ${boots} <b>Botas</b> - sua linha de velocidade de movimento. Evoluem para pares especializados diferentes, mas você só quer um.<br/>• ${tier1} <b>Tier 1</b> - componentes baratos de um atributo que você já compra na primeira volta.<br/>• ${tier2} <b>Tier 2</b> - construído de um componente Tier 1 mais ouro, somando um segundo atributo ou uma passiva.<br/>• ${tier3} <b>Tier 3</b> - os itens completos, construídos de um Tier 2. É aqui que ficam as habilidades ativas e as passivas fortes.<br/><br/>Como cada tier alimenta o próximo, comprar um componente barato cedo raramente é ouro desperdiçado - ele vira parte do item final.<h2>Usando itens</h2>Cada espaço do inventário tem sua própria <b>tecla</b>, que você pode remapear nas Configurações. Apertar a tecla de um espaço usa o que estiver nele.<br/><br/>A maioria dos itens é <b>passiva</b> - só concede seus atributos enquanto carregada. Alguns são <b>ativos</b>: ${plateShield} <b>Escudo de Placas</b>, por exemplo, dá armadura e vida, e apertar sua tecla dispara a habilidade com recarga de <b>${plateCooldown}s</b>. A descrição do item diz se ele tem um ativo e o que faz.<h2>Vendendo</h2>Vender um item em até <b>${sec(ITEM_FULL_REFUND_WINDOW)}s após comprá-lo</b> devolve o <c:bonus>preço total</c:bonus>. <b>Usar um item ativo cancela isso</b> - depois de gastar o efeito, o item vende por <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b> como qualquer outro.<br/><br/>A aba <b>Itens</b> lista cada item com seu custo e caminho de construção.`,
        fr: `Les objets sont l'autre moitié de votre montée en puissance, avec les niveaux. Vous en portez jusqu'à <b>${slots}</b> à la fois et ne les achetez qu'en vous tenant dans votre Base.<h2>Types d'objets</h2>• ${potion} <b>Consommables</b> - utilisés une fois puis <b>retirés de l'inventaire</b>. Potion de soin, balises et autres objets à usage unique. Ils sont peu coûteux : gardez-leur un emplacement libre.<br/>• ${boots} <b>Bottes</b> - votre ligne de vitesse de déplacement. Elles évoluent en paires spécialisées, mais une seule paire suffit.<br/>• ${tier1} <b>Palier 1</b> - composants bon marché à une statistique, accessibles dès votre premier retour.<br/>• ${tier2} <b>Palier 2</b> - construit depuis un composant de palier 1 plus de l'or, ajoutant une seconde statistique ou une passive.<br/>• ${tier3} <b>Palier 3</b> - les objets finis, construits depuis un palier 2. C'est là que se trouvent les compétences actives et les passives fortes.<br/><br/>Comme chaque palier alimente le suivant, acheter tôt un composant bon marché est rarement de l'or gaspillé : il devient une partie de l'objet fini.<h2>Utiliser les objets</h2>Chaque emplacement d'inventaire a sa propre <b>touche</b>, réassignable dans les Paramètres. Appuyer sur la touche d'un emplacement utilise ce qui s'y trouve.<br/><br/>La plupart des objets sont <b>passifs</b> : ils accordent simplement leurs statistiques tant qu'ils sont portés. Certains sont <b>actifs</b> : ${plateShield} <b>Bouclier de plates</b>, par exemple, donne armure et vie, et appuyer sur sa touche déclenche sa compétence avec une recharge de <b>${plateCooldown}s</b>. L'infobulle de l'objet indique s'il possède un actif et ce qu'il fait.<h2>Revente</h2>Revendre un objet dans les <b>${sec(ITEM_FULL_REFUND_WINDOW)}s suivant l'achat</b> rend le <c:bonus>prix total</c:bonus>. <b>Utiliser un objet actif annule cela</b> : une fois l'effet dépensé, l'objet se revend à <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b> comme les autres.<br/><br/>L'onglet <b>Objets</b> répertorie chaque objet avec son coût et son arbre de construction.`,
        zh: `裝備與等級並列，是你戰力成長的另一半。你同時最多可攜帶 <b>${slots}</b> 件，且只能在自家基地內購買。<h2>裝備類型</h2>• ${potion} <b>消耗品</b>——使用一次後即<b>從物品欄移除</b>。治療藥水、守衛與其他一次性裝備都屬於此類。它們價格低廉，建議留一格給它們。<br/>• ${boots} <b>鞋類</b>——你的移動速度路線。可升級為不同的專精鞋款，但你永遠只需要一雙。<br/>• ${tier1} <b>一階</b>——便宜的單一屬性組件，首次回城即可負擔。<br/>• ${tier2} <b>二階</b>——由一階組件加金幣合成，追加第二項屬性或被動。<br/>• ${tier3} <b>三階</b>——成品裝備，由二階合成。主動技能與強力被動都在此階。<br/><br/>由於每一階都會併入下一階，早期購買便宜組件很少是浪費金幣——它會成為成品裝備的一部分。<h2>使用裝備</h2>每個物品欄格子都有各自的<b>快捷鍵</b>，可在設定中重新綁定。按下格子的按鍵即會使用其中的裝備。<br/><br/>大多數裝備為<b>被動</b>——攜帶時單純提供屬性。部分為<b>主動</b>：例如 ${plateShield} <b>板甲盾</b>攜帶時提供護甲與生命值，按下其按鍵則觸發技能，冷卻時間為 <b>${plateCooldown} 秒</b>。裝備的提示框會說明它是否具備主動技能及其效果。<h2>販售</h2>在<b>購買後 ${sec(ITEM_FULL_REFUND_WINDOW)} 秒</b>內賣出裝備可取回<c:bonus>全額</c:bonus>。<b>使用主動裝備會取消此優惠</b>——效果一旦用掉，該裝備就與其他裝備一樣只賣 <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b>。<br/><br/><b>裝備</b>分頁列出所有裝備及其價格與合成路線。`,
        vi: `Trang bị là nửa còn lại của đường cong sức mạnh bên cạnh cấp độ. Bạn mang tối đa <b>${slots}</b> món cùng lúc và chỉ mua được khi đang đứng trong Căn Cứ.<h2>Các loại trang bị</h2>• ${potion} <b>Tiêu hao</b> - dùng một lần rồi <b>biến mất khỏi túi đồ</b>. Bình Máu, mắt và các món dùng một lần khác thuộc nhóm này. Chúng rẻ, nên hãy để trống một ô cho chúng.<br/>• ${boots} <b>Giày</b> - nhánh tốc chạy của bạn. Chúng nâng cấp thành nhiều loại chuyên biệt, nhưng bạn chỉ cần một đôi.<br/>• ${tier1} <b>Bậc 1</b> - các món nhỏ rẻ tiền một chỉ số, mua được ngay lần về nhà đầu tiên.<br/>• ${tier2} <b>Bậc 2</b> - ghép từ một món Bậc 1 cộng vàng, thêm chỉ số thứ hai hoặc một nội tại.<br/>• ${tier3} <b>Bậc 3</b> - trang bị hoàn chỉnh, ghép từ Bậc 2. Đây là nơi có các kỹ năng chủ động và nội tại mạnh.<br/><br/>Vì mỗi bậc đều đi vào bậc sau, mua sớm một món nhỏ hiếm khi là phí vàng - nó sẽ thành một phần của trang bị hoàn chỉnh.<h2>Dùng trang bị</h2>Mỗi ô túi đồ có <b>phím riêng</b>, bạn có thể đổi lại trong Cài đặt. Bấm phím của một ô sẽ dùng món nằm trong ô đó.<br/><br/>Phần lớn trang bị là <b>nội tại</b> - chỉ cho chỉ số khi mang theo. Một số là <b>chủ động</b>: ví dụ ${plateShield} <b>Khiên Giáp Tấm</b> cho giáp và máu khi mang, và bấm phím của nó sẽ kích hoạt kỹ năng với hồi chiêu <b>${plateCooldown} giây</b>. Bảng thông tin của trang bị cho biết nó có kỹ năng chủ động hay không và làm gì.<h2>Bán lại</h2>Bán một món trong vòng <b>${sec(ITEM_FULL_REFUND_WINDOW)} giây kể từ khi mua</b> sẽ hoàn <c:bonus>toàn bộ giá</c:bonus>. <b>Dùng món chủ động sẽ hủy điều đó</b> - khi đã tiêu hiệu ứng, món đó bán lại chỉ được <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b> như mọi món khác.<br/><br/>Thẻ <b>Trang Bị</b> liệt kê mọi trang bị cùng giá và lộ trình ghép.`,
        id: `Item adalah separuh lainnya dari kurva kekuatanmu bersama level. Kamu membawa maksimal <b>${slots}</b> sekaligus dan hanya bisa membelinya saat berada di Markas.<h2>Jenis item</h2>• ${potion} <b>Consumable</b> - dipakai sekali lalu <b>hilang dari inventaris</b>. Healing Potion, ward, dan item sekali pakai lainnya ada di sini. Harganya murah, jadi sisakan satu slot untuk mereka.<br/>• ${boots} <b>Boots</b> - jalur kecepatan gerakmu. Boots naik menjadi beberapa varian khusus, tapi kamu hanya butuh satu.<br/>• ${tier1} <b>Tier 1</b> - komponen murah satu statistik yang sudah terbeli di perjalanan pulang pertama.<br/>• ${tier2} <b>Tier 2</b> - dibangun dari komponen Tier 1 plus emas, menambah statistik kedua atau sebuah pasif.<br/>• ${tier3} <b>Tier 3</b> - item jadi, dibangun dari Tier 2. Di sinilah skill aktif dan pasif kuat berada.<br/><br/>Karena setiap tier menyuplai tier berikutnya, membeli komponen murah lebih awal jarang jadi emas terbuang - ia menjadi bagian dari item jadi.<h2>Memakai item</h2>Setiap slot inventaris punya <b>keybind</b> sendiri, yang bisa kamu ubah di Pengaturan. Menekan tombol sebuah slot akan memakai apa pun yang ada di dalamnya.<br/><br/>Sebagian besar item bersifat <b>pasif</b> - hanya memberi statistik selama dibawa. Beberapa <b>aktif</b>: ${plateShield} <b>Plate Shield</b>, misalnya, memberi armor dan nyawa saat dibawa, dan menekan tombolnya memicu kemampuannya dengan cooldown <b>${plateCooldown} detik</b>. Tooltip item memberi tahu apakah ia punya aktif dan apa fungsinya.<h2>Menjual</h2>Menjual item dalam <b>${sec(ITEM_FULL_REFUND_WINDOW)} detik setelah membelinya</b> mengembalikan <c:bonus>harga penuh</c:bonus>. <b>Memakai item aktif membatalkannya</b> - setelah efeknya terpakai, item itu terjual <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b> seperti yang lain.<br/><br/>Tab <b>Item</b> menampilkan setiap item beserta harga dan jalur build-nya.`,
        kr: `아이템은 레벨과 함께 성장 곡선의 나머지 절반입니다. 한 번에 최대 <b>${slots}</b>개까지 소지할 수 있으며 기지 안에 있을 때만 구매할 수 있습니다.<h2>아이템 종류</h2>• ${potion} <b>소모품</b> - 한 번 사용하면 <b>인벤토리에서 사라집니다</b>. 회복 물약, 와드, 그 외 일회성 아이템이 여기 속합니다. 값이 싸므로 한 칸은 비워 두세요.<br/>• ${boots} <b>신발</b> - 이동 속도 계열입니다. 여러 특화형으로 업그레이드되지만 한 켤레만 필요합니다.<br/>• ${tier1} <b>1티어</b> - 첫 귀환에 바로 살 수 있는 단일 능력치의 저렴한 부품입니다.<br/>• ${tier2} <b>2티어</b> - 1티어 부품에 골드를 더해 조합하며, 두 번째 능력치나 지속 효과가 붙습니다.<br/>• ${tier3} <b>3티어</b> - 2티어로 조합하는 완성 아이템입니다. 사용 효과와 강력한 지속 효과가 여기 있습니다.<br/><br/>모든 티어가 다음 티어로 이어지므로, 저렴한 부품을 일찍 사는 것은 낭비가 되는 경우가 드뭅니다. 완성 아이템의 일부가 되기 때문입니다.<h2>아이템 사용</h2>인벤토리 각 칸에는 <b>단축키</b>가 있으며 설정에서 변경할 수 있습니다. 칸의 키를 누르면 그 칸에 있는 아이템을 사용합니다.<br/><br/>대부분의 아이템은 <b>지속 효과</b>로, 소지하고 있는 동안 능력치만 제공합니다. 일부는 <b>사용 효과</b>를 가집니다. 예를 들어 ${plateShield} <b>판금 방패</b>는 소지 시 방어력과 체력을 주고, 키를 누르면 <b>${plateCooldown}초</b> 쿨다운으로 효과가 발동합니다. 사용 효과가 있는지와 그 내용은 아이템 설명에서 확인할 수 있습니다.<h2>판매</h2><b>구매 후 ${sec(ITEM_FULL_REFUND_WINDOW)}초 이내</b>에 판매하면 <c:bonus>전액</c:bonus>을 환불받습니다. <b>사용 효과를 쓰면 이 혜택은 사라집니다</b>. 효과를 이미 소모했다면 다른 아이템과 마찬가지로 <b>${perc(ITEM_SELL_REFUND_MULTIPLIER)}%</b>에 판매됩니다.<br/><br/><b>아이템</b> 탭에서 모든 아이템의 가격과 조합 경로를 확인할 수 있습니다.`,
      }
    }

    case MechanicId.POWER_RUNES: {
      const spawn = sec(RUNE_SPAWNTIME)

      return {
        en: `Power Runes give temporary bonuses. <b>Touch one to activate it.</b><ul><li>Spawn at the <b>top of the map</b>, starting at <b>1:00</b>, then every <b>${spawn}s</b>.</li><li>Only <b>one rune</b> can be available at a time.</li><li>The rune type is random.</li></ul>`,
        ru: `Руна силы появляется в верхней части карты <b>на первой минуте матча</b>, а затем каждые <b>${spawn} с</b>. Одновременно доступна только одна, и она срабатывает, как только её касается герой, — поэтому борьба за неё это настоящая схватка, а не бесплатный подбор.<br/><br/>Какая из пяти появится — случайно:`,
        cz: `Runa síly se objeví v horní části mapy <b>minutu po začátku zápasu</b> a další pak každých <b>${spawn}s</b>. Ve hře je vždy jen jedna a aktivuje se ve chvíli, kdy se jí hrdina dotkne – boj o ni je tedy skutečný souboj, ne zadarmo posbíraný bonus.<br/><br/>Která z pěti se objeví, je náhodné:`,
        br: `Uma Runa de Poder surge no topo do mapa <b>um minuto após o início</b>, e outra a cada <b>${spawn}s</b> depois disso. Só existe uma por vez, e ela ativa no instante em que um herói a toca - disputá-la é uma briga de verdade, não uma coleta grátis.<br/><br/>Qual das cinco aparece é aleatório:`,
        fr: `Une Rune de puissance apparaît en haut de la carte <b>une minute après le début</b>, puis une autre toutes les <b>${spawn}s</b>. Une seule est présente à la fois et elle s'active dès qu'un héros la touche : la contester est un vrai combat, pas un ramassage gratuit.<br/><br/>Laquelle des cinq apparaît est aléatoire :`,
        zh: `強化符文在<b>開賽一分鐘</b>時於地圖上方生成，之後每 <b>${spawn} 秒</b>再生成一個。場上同時只會存在一個，且英雄接觸即刻啟動——因此爭奪它是一場真正的戰鬥，而非免費拾取。<br/><br/>出現的是五種中的哪一種為隨機：`,
        vi: `Bùa Sức Mạnh xuất hiện ở phía trên bản đồ <b>vào phút đầu tiên của trận</b>, và cứ mỗi <b>${spawn} giây</b> lại có bùa tiếp theo. Mỗi lúc chỉ có một bùa, và nó kích hoạt ngay khi một tướng chạm vào - nên tranh giành nó là một trận đánh thật sự, không phải món quà miễn phí.<br/><br/>Bùa nào trong năm loại xuất hiện là ngẫu nhiên:`,
        id: `Rune Kekuatan muncul di bagian atas peta <b>satu menit setelah pertandingan dimulai</b>, lalu berikutnya tiap <b>${spawn} detik</b>. Hanya ada satu dalam satu waktu, dan ia aktif begitu disentuh hero - jadi memperebutkannya adalah pertarungan sungguhan, bukan pungutan gratis.<br/><br/>Mana dari kelimanya yang muncul bersifat acak:`,
        kr: `파워 룬은 <b>경기 시작 1분</b>에 맵 상단에 생성되고, 이후 <b>${spawn}초</b>마다 다음 룬이 나옵니다. 한 번에 하나만 존재하며 챔피언이 닿는 즉시 발동하므로, 이를 두고 벌어지는 다툼은 공짜 획득이 아니라 실전입니다.<br/><br/>다섯 종류 중 무엇이 나올지는 무작위입니다:`,
      }
    }

    case MechanicId.BOUNTY_RUNE: {
      const spawn = sec(GOLDRUNE_SPAWNTIME)
      const radius = GOLD_RUNE_RADIUS
      const channel = GOLD_RUNE_MAX_VALUE
      const expPerc = perc(GOLD_RUNE_EXP_MULTIPLIER)

      const goldRuneClips = clipSlot(MechanicVideoLabel.GOLD_RUNE_CONTESTED, MechanicVideoLabel.GOLD_RUNE_UNCONTESTED)

      return {
        en: `Capture the <b>Gold Rune</b> at the bottom middle of the map for team-wide rewards. It spawns every <b>${spawn}s</b>.${goldRuneClips}<h2>How to capture</h2><ul><li>Stand within <c:range>${radius} range</c:range>. The team with <b>more heroes inside</b> moves the bar toward its side.</li><li><b>Equal teams:</b> progress pauses. <b>Nobody inside:</b> the bar moves back toward the middle.</li><li>Extra allies help outnumber enemies but <b>do not speed up capture</b>.</li><li>Capturing takes roughly <b>${channel}s of uncontested control</b>.</li></ul><h2>Team reward</h2>Every teammate receives ${gold(GOLD_RUNE_BASE_GOLDS)} + ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} per elapsed minute, plus <c:bonus>experience equal to ${expPerc}% of that gold</c:bonus>. You receive the reward even if you are elsewhere on the map.`,
        ru: `Золотая руна появляется в нижней центральной части карты каждые <b>${spawn} с</b>. В отличие от рун силы её не подбирают — её <b>захватывают</b>.<br/><br/>Встаньте в <c:range>радиусе ${radius}</c:range>, чтобы двигать шкалу захвата в свою сторону. Прогресс идёт у команды, у которой в круге <b>больше героев</b>; при равенстве шкала замирает, а если внутри никого нет — постепенно возвращается к центру. Больше союзников <b>не</b> ускоряют захват — они лишь выигрывают подсчёт. <c:bonus>Примерно ${channel} секунды неоспариваемого контроля</c:bonus> завершают захват.<br/><br/>Награду получает <b>каждый игрок победившей команды</b>, где бы он ни был: ${gold(GOLD_RUNE_BASE_GOLDS)} плюс ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} за каждую прошедшую минуту, а также <c:bonus>опыт в размере ${expPerc}% от этого золота</c:bonus>. Награда растёт со временем матча, поэтому поздняя руна может стоить больше убийства.`,
        cz: `Zlatá runa se objeví dole uprostřed mapy každých <b>${spawn}s</b>. Na rozdíl od runy síly se nesbírá – <b>dobývá se</b>.<br/><br/>Postav se do <c:range>poloměru ${radius}</c:range> a posouvej ukazatel dobývání ke svému týmu. Postupuje tým, který má v kruhu <b>víc hrdinů</b>; při rovnosti se ukazatel zastaví a když uvnitř nikdo není, vrací se zpět ke středu. Víc spojenců dobývání <b>nezrychlí</b> – jen vyhrají počet. <c:bonus>Zhruba ${channel} sekundy nerušené kontroly</c:bonus> ji dokončí.<br/><br/>Odměnu dostane <b>každý hráč vítězného týmu</b>, ať je kdekoli: ${gold(GOLD_RUNE_BASE_GOLDS)} plus ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} za každou uplynulou minutu a <c:bonus>zkušenosti ve výši ${expPerc}% tohoto zlata</c:bonus>. Škáluje s délkou hry, takže pozdní runa může mít větší cenu než zabití.`,
        br: `A Runa de Ouro surge no centro inferior do mapa a cada <b>${spawn}s</b>. Diferente de uma Runa de Poder, ela não é coletada - é <b>capturada</b>.<br/><br/>Fique dentro do <c:range>raio de ${radius}</c:range> para empurrar a barra de captura para o seu time. O time com <b>mais heróis</b> no círculo progride; com números iguais a barra congela, e sem ninguém dentro ela volta para o meio. Trazer mais aliados <b>não</b> captura mais rápido - só vence a contagem. <c:bonus>Cerca de ${channel} segundos de controle sem disputa</c:bonus> finalizam.<br/><br/>A recompensa vai para <b>todos os jogadores do time vencedor</b>, onde quer que estejam: ${gold(GOLD_RUNE_BASE_GOLDS)} mais ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} por minuto decorrido, e <c:bonus>experiência equivalente a ${expPerc}% desse ouro</c:bonus>. Escala com o tempo de jogo, então uma runa tardia pode valer mais que um abate.`,
        fr: `La Rune d'or apparaît en bas au centre de la carte toutes les <b>${spawn}s</b>. Contrairement à une Rune de puissance, elle ne se ramasse pas - elle se <b>capture</b>.<br/><br/>Tenez-vous dans son <c:range>rayon de ${radius}</c:range> pour pousser la barre de capture vers votre équipe. L'équipe ayant <b>le plus de héros</b> dans le cercle progresse ; à nombre égal la barre se fige, et si personne n'est à l'intérieur elle revient vers le milieu. Amener plus d'alliés n'accélère <b>pas</b> la capture - cela ne fait que gagner le décompte. <c:bonus>Environ ${channel} secondes de contrôle incontesté</c:bonus> la terminent.<br/><br/>La récompense va à <b>chaque joueur de l'équipe gagnante</b>, où qu'il soit : ${gold(GOLD_RUNE_BASE_GOLDS)} plus ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} par minute écoulée, et <c:bonus>de l'expérience valant ${expPerc}% de cet or</c:bonus>. Elle grandit avec la durée de la partie, une rune tardive peut donc valoir plus qu'une élimination.`,
        zh: `金幣符文每 <b>${spawn} 秒</b>在地圖下方中央生成。與強化符文不同，它不是撿取，而是<b>佔領</b>。<br/><br/>站在 <c:range>${radius} 半徑</c:range>內即可推動佔領進度條朝你的隊伍前進。圈內<b>英雄較多</b>的隊伍取得進度；人數相等時進度條凍結；無人在內時則緩慢回落至中間。帶更多隊友<b>不會</b>加快佔領——只會贏得人數比較。<c:bonus>大約 ${channel} 秒無爭議的控制</c:bonus>即可完成。<br/><br/>獎勵會發給<b>獲勝隊伍的每位玩家</b>，無論他們身在何處：${gold(GOLD_RUNE_BASE_GOLDS)}，外加每經過一分鐘 ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)}，<c:bonus>以及相當於該金幣 ${expPerc}% 的經驗</c:bonus>。它隨遊戲時間成長，因此後期的金幣符文可能比一次擊殺更有價值。`,
        vi: `Bùa Vàng xuất hiện ở giữa phía dưới bản đồ mỗi <b>${spawn} giây</b>. Khác với Bùa Sức Mạnh, nó không được nhặt - nó được <b>chiếm</b>.<br/><br/>Đứng trong <c:range>bán kính ${radius}</c:range> để đẩy thanh chiếm về phía đội bạn. Đội có <b>nhiều tướng hơn</b> trong vòng tròn sẽ tiến triển; khi số lượng bằng nhau thanh đứng yên, và khi không có ai bên trong nó trôi dần về giữa. Mang thêm đồng đội <b>không</b> giúp chiếm nhanh hơn - chỉ thắng về số lượng. <c:bonus>Khoảng ${channel} giây kiểm soát không bị tranh chấp</c:bonus> là hoàn tất.<br/><br/>Phần thưởng trao cho <b>mọi người chơi trong đội thắng</b>, dù họ ở đâu: ${gold(GOLD_RUNE_BASE_GOLDS)} cộng ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} mỗi phút đã trôi qua, và <c:bonus>kinh nghiệm bằng ${expPerc}% số vàng đó</c:bonus>. Nó tăng theo thời gian trận đấu, nên một Bùa Vàng cuối trận có thể giá trị hơn một mạng.`,
        id: `Rune Emas muncul di bagian tengah bawah peta setiap <b>${spawn} detik</b>. Berbeda dengan Rune Kekuatan, ia tidak diambil - melainkan <b>direbut</b>.<br/><br/>Berdirilah dalam <c:range>radius ${radius}</c:range> untuk mendorong bar perebutan ke arah timmu. Tim dengan <b>lebih banyak hero</b> di lingkaran akan maju; jika jumlahnya sama bar berhenti, dan jika tidak ada siapa pun ia kembali ke tengah. Membawa lebih banyak sekutu <b>tidak</b> mempercepat perebutan - hanya memenangkan hitungan. <c:bonus>Sekitar ${channel} detik kendali tanpa gangguan</c:bonus> akan menyelesaikannya.<br/><br/>Hadiahnya diberikan ke <b>semua pemain di tim pemenang</b>, di mana pun mereka berada: ${gold(GOLD_RUNE_BASE_GOLDS)} ditambah ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)} per menit yang telah berlalu, dan <c:bonus>pengalaman senilai ${expPerc}% dari emas tersebut</c:bonus>. Ia meningkat seiring waktu permainan, jadi Rune Emas di akhir bisa bernilai lebih dari satu kill.`,
        kr: `골드 룬은 <b>${spawn}초</b>마다 맵 하단 중앙에 생성됩니다. 파워 룬과 달리 줍는 것이 아니라 <b>점령</b>하는 것입니다.<br/><br/><c:range>반경 ${radius}</c:range> 안에 서서 점령 게이지를 아군 쪽으로 밀어내세요. 원 안에 <b>챔피언이 더 많은</b> 팀이 진행되며, 인원이 같으면 게이지가 멈추고, 아무도 없으면 서서히 중앙으로 되돌아갑니다. 아군을 더 데려와도 점령이 <b>빨라지지 않습니다</b> - 인원 싸움에서만 이깁니다. <c:bonus>방해받지 않은 약 ${channel}초의 점유</c:bonus>로 완료됩니다.<br/><br/>보상은 위치와 무관하게 <b>승리한 팀의 모든 플레이어</b>에게 지급됩니다. ${gold(GOLD_RUNE_BASE_GOLDS)}에 경과한 1분당 ${gold(GOLD_RUNE_GOLDS_PER_MINUTE)}이 더해지고, <c:bonus>그 골드의 ${expPerc}%에 해당하는 경험치</c:bonus>를 받습니다. 경기 시간에 따라 증가하므로 후반의 골드 룬은 한 번의 처치보다 값질 수 있습니다.`,
      }
    }

    case MechanicId.KILLS: {
      const base = GOLD_REWARD_KILL_HERO_BASE
      const streak = KILL_STREAK_BONUS_PER_STACK
      const streakMax = KILL_STREAK_BONUS_MAX
      const assistGold = perc(ASSIST_GOLD_MULTIPLIER)
      const assistExp = perc(ASSIST_EXPERIENCE_MULTIPLIER)
      const assistWindow = sec(ASSIST_RESET_TIMMER)
      const respawnBase = sec(RESPAWN_TIME_BASE)
      const respawnPerLevel = sec(RESPAWN_TIME_PER_LEVEL)

      const killClip = clipSlot(MechanicVideoLabel.KILL)

      return {
        en: `Defeating an enemy hero earns gold and experience. Enemies with more gold and longer killstreaks are worth more.<h2>Kill rewards</h2><ul><li>${gold(base)} base gold + <b>5% of the victim's net worth</b> (their total wealth).</li><li>An adjustment based on the wealth difference between you and the victim.</li><li>A killstreak bonus of ${gold(streak)} per stack, up to ${gold(streakMax)}.</li></ul>${killClip}<h2>Assists</h2>Damage an enemy within <b>${assistWindow}s</b> before they die to earn an <b>assist</b>: <c:bonus>${assistGold}% of the gold</c:bonus> and <c:bonus>${assistExp}% of the experience</c:bonus>.<h2>Respawning</h2>The normal respawn timer is <b>${respawnBase}s</b> + <b>${respawnPerLevel}s for each level after level 1</b>. At <b>level ${MAX_LEVEL}</b>, that is about <b>${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))}s</b>.`,
        ru: `Убийство даёт ${gold(base)} базовых плюс <b>5%</b> от ценности имущества жертвы, поправку на разницу в имуществе между вами и бонус за серию <b>${streak}</b> за каждое убийство в серии (не более <b>${streakMax}</b>). Убийство «раскормленного» врага стоит куда больше, чем убийство отстающего, — а собственная смерть при лидерстве возвращает эту ценность обратно.<br/><br/>Нанесение урона врагу, который погибает в течение <b>${assistWindow} с</b>, засчитывает <b>помощь</b> — <b>${assistGold}%</b> золота и <b>${assistExp}%</b> опыта.<br/><br/>Смерть наказывается таймером <b>${respawnBase} с</b> плюс <b>${respawnPerLevel} с</b> за уровень героя, поэтому смерть в конце игры обходится намного дороже. Смерть на ${MAX_LEVEL}-м уровне выключает вас примерно на ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))} с — достаточно, чтобы потерять цель.`,
        cz: `Zabití vyplatí ${gold(base)} základních plus <b>5%</b> majetku oběti, úpravu podle rozdílu majetku mezi vámi a bonus za sérii <b>${streak}</b> za každé zabití v sérii (maximálně <b>${streakMax}</b>). Zabít nakrmeného nepřítele má mnohem větší cenu než zabít vyhladovělého – a vlastní smrt ve vedení tu hodnotu vrátí zpět.<br/><br/>Poškození nepřítele, který zemře do <b>${assistWindow}s</b>, ti započítá <b>asistenci</b> v hodnotě <b>${assistGold}%</b> zlata a <b>${assistExp}%</b> zkušeností.<br/><br/>Smrt se trestá časovačem <b>${respawnBase}s</b> plus <b>${respawnPerLevel}s</b> za úroveň hrdiny, takže pozdní smrt stojí mnohem víc než brzká. Smrt na úrovni ${MAX_LEVEL} tě vyřadí zhruba na ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))}s – dost dlouho na ztrátu cíle.`,
        br: `Um abate paga ${gold(base)} de base mais <b>5%</b> do patrimônio da vítima, um ajuste pela diferença de patrimônio entre vocês, e um bônus de sequência de <b>${streak}</b> por abate na sequência (limitado a <b>${streakMax}</b>). Matar um inimigo alimentado vale muito mais do que matar um faminto - e morrer enquanto está à frente devolve esse valor.<br/><br/>Causar dano a um inimigo que morre em até <b>${assistWindow}s</b> concede uma <b>assistência</b>, valendo <b>${assistGold}%</b> do ouro e <b>${assistExp}%</b> da experiência.<br/><br/>A morte é punida com um tempo de <b>${respawnBase}s</b> mais <b>${respawnPerLevel}s</b> por nível do herói, então morrer no fim do jogo custa muito mais do que cedo. Morrer no nível ${MAX_LEVEL} te deixa fora por cerca de ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))}s - tempo suficiente para perder um objetivo.`,
        fr: `Une élimination rapporte ${gold(base)} de base plus <b>5%</b> de la valeur nette de la victime, un ajustement selon l'écart de valeur entre vous, et un bonus de série de <b>${streak}</b> par élimination consécutive (plafonné à <b>${streakMax}</b>). Tuer un ennemi nourri vaut bien plus que tuer un ennemi affamé - et mourir en tête rend cette valeur.<br/><br/>Infliger des dégâts à un ennemi qui meurt dans les <b>${assistWindow}s</b> vous accorde une <b>assistance</b>, valant <b>${assistGold}%</b> de l'or et <b>${assistExp}%</b> de l'expérience.<br/><br/>La mort est punie d'un délai de <b>${respawnBase}s</b> plus <b>${respawnPerLevel}s</b> par niveau de héros, une mort tardive coûte donc bien plus cher qu'une mort précoce. Mourir au niveau ${MAX_LEVEL} vous écarte environ ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))}s - de quoi perdre un objectif.`,
        zh: `一次擊殺提供 ${gold(base)} 基礎，外加受害者身家的 <b>5%</b>、雙方身家差距的調整值，以及每層連殺 <b>${streak}</b> 的連殺獎勵（上限 <b>${streakMax}</b>）。擊殺發育良好的敵人價值遠高於擊殺落後者——而在領先時死亡則會把這份價值直接還回去。<br/><br/>對在 <b>${assistWindow} 秒</b>內死亡的敵人造成傷害可獲得<b>助攻</b>，價值為金幣的 <b>${assistGold}%</b> 與經驗的 <b>${assistExp}%</b>。<br/><br/>死亡會受到 <b>${respawnBase} 秒</b>加上每個英雄等級 <b>${respawnPerLevel} 秒</b>的復活計時懲罰，因此後期死亡的代價遠高於前期。在 ${MAX_LEVEL} 級死亡約需等待 ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))} 秒——足以丟掉一個目標。`,
        vi: `Một mạng trả ${gold(base)} cơ bản cộng <b>5%</b> tổng tài sản của nạn nhân, một điều chỉnh theo chênh lệch tài sản giữa hai bên, và thưởng chuỗi hạ gục <b>${streak}</b> mỗi chuỗi (tối đa <b>${streakMax}</b>). Hạ một kẻ địch đang béo đáng giá hơn nhiều so với hạ một kẻ đang đói - và chết khi đang dẫn trước sẽ trả lại giá trị đó ngay.<br/><br/>Gây sát thương lên kẻ địch chết trong vòng <b>${assistWindow} giây</b> sẽ cho bạn một <b>hỗ trợ</b>, trị giá <b>${assistGold}%</b> vàng và <b>${assistExp}%</b> kinh nghiệm.<br/><br/>Cái chết bị phạt bằng thời gian hồi sinh <b>${respawnBase} giây</b> cộng <b>${respawnPerLevel} giây</b> mỗi cấp tướng, nên chết cuối trận tốn kém hơn nhiều so với đầu trận. Chết ở cấp ${MAX_LEVEL} khiến bạn nằm ngoài khoảng ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))} giây - đủ lâu để mất một mục tiêu.`,
        id: `Satu kill membayar ${gold(base)} dasar ditambah <b>5%</b> net worth korban, penyesuaian dari selisih net worth di antara kalian, dan bonus killstreak sebesar <b>${streak}</b> per streak (maksimum <b>${streakMax}</b>). Membunuh musuh yang gemuk jauh lebih bernilai daripada membunuh yang kelaparan - dan mati saat sedang unggul mengembalikan nilai itu langsung.<br/><br/>Memberi damage ke musuh yang mati dalam <b>${assistWindow} detik</b> memberimu <b>assist</b>, senilai <b>${assistGold}%</b> emas dan <b>${assistExp}%</b> pengalaman.<br/><br/>Kematian dihukum dengan timer <b>${respawnBase} detik</b> ditambah <b>${respawnPerLevel} detik</b> per level hero, jadi mati di akhir permainan jauh lebih mahal daripada di awal. Mati di level ${MAX_LEVEL} membuatmu absen sekitar ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))} detik - cukup lama untuk kehilangan objektif.`,
        kr: `처치 시 기본 ${gold(base)}에 상대 자산의 <b>5%</b>, 양측 자산 격차에 따른 보정, 그리고 연속 처치당 <b>${streak}</b>의 보너스(최대 <b>${streakMax}</b>)가 더해집니다. 잘 큰 적을 잡는 것이 굶은 적을 잡는 것보다 훨씬 값지며, 앞서 있을 때 죽으면 그 가치를 고스란히 돌려주게 됩니다.<br/><br/><b>${assistWindow}초</b> 이내에 사망하는 적에게 피해를 입히면 <b>어시스트</b>를 얻어 골드의 <b>${assistGold}%</b>와 경험치의 <b>${assistExp}%</b>를 받습니다.<br/><br/>사망 시 <b>${respawnBase}초</b>에 챔피언 레벨당 <b>${respawnPerLevel}초</b>가 더해진 부활 시간이 부과되므로, 후반의 죽음은 초반보다 훨씬 비쌉니다. ${MAX_LEVEL}레벨에서 죽으면 약 ${sec(RESPAWN_TIME_BASE + RESPAWN_TIME_PER_LEVEL * (MAX_LEVEL - 1))}초 동안 자리를 비우게 되며, 이는 오브젝트를 내주기에 충분한 시간입니다.`,
      }
    }

    case MechanicId.DAMAGE_TYPES: {
      const physicalIcon = mechanicIcon('damage_types', 'physical')
      const magicalIcon = mechanicIcon('damage_types', 'magical')
      const toTower = perc(PHYSICAL_DAMAGE_TO_BUILDING_MULTIPLIER)
      const basicToHero = perc(BASIC_DAMAGE_TO_HERO_MULTIPLIER)
      const pierceToMinion = perc(PIERCE_DAMAGE_TO_MINION_MULTIPLIER)
      const siegeToTower = perc(SIEGE_DAMAGE_TO_BUILDING_MULTIPLIER)
      const siegeToHero = perc(SIEGE_DAMAGE_TO_HERO_MULTIPLIER)

      return {
        en: `A hit's damage type determines which defence reduces it.<ul><li>${physicalIcon} <c:physical>Physical damage:</c:physical> reduced by <b>armor</b>. Deals <b>${toTower}% damage to towers</b>.</li><li>${magicalIcon} <c:magical>Magical damage:</c:magical> reduced by <b>magic defence</b>.</li><li><c:pure>Pure damage:</c:pure> ignores armor and magic defence. Towers deal this type, so those stats will not protect you from them.</li></ul><h2>Minion damage types</h2><ul><li><b>Basic:</b> deals <b>${basicToHero}% damage to heroes</b>.</li><li><b>Pierce:</b> ranged minion shots deal <b>${pierceToMinion}% damage to minions</b>.</li><li><b>Siege:</b> bombs deal <b>${siegeToTower}% damage to towers</b>, but only <b>${siegeToHero}% to heroes</b>.</li></ul>`,
        ru: `Каждый удар в игре имеет тип урона, и именно тип решает, какая защита применяется до вычитания любых чисел.<br/><br/>• ${physicalIcon} <c:physical>Физический урон</c:physical> снижается <b>бронёй</b> и наносит башням лишь <b>${toTower}%</b><br/>• ${magicalIcon} <c:magical>Магический урон</c:magical> снижается <b>магической защитой</b><br/>• <c:pure>Чистый урон</c:pure> игнорирует и то, и другое и <b>не может быть снижен ничем</b><br/><br/>Есть ещё три типа у не-геройских источников: <b>обычная атака</b> наносит героям <b>${basicToHero}%</b>, пробивающий выстрел дальнобойного миньона — <b>${pierceToMinion}%</b> по миньонам, а <b>осадная</b> бомба — <b>${siegeToTower}%</b> по башням, но лишь <b>${siegeToHero}%</b> по героям.<br/><br/>Поэтому башня бьёт так больно — её атака чистая — и поэтому набор брони против неё бесполезен.`,
        cz: `Každý zásah ve hře má typ poškození a právě typ určuje, která obrana se uplatní, ještě než se odečte jakékoli číslo.<br/><br/>• ${physicalIcon} <c:physical>Fyzické poškození</c:physical> snižuje <b>brnění</b> a věžím způsobí jen <b>${toTower}%</b><br/>• ${magicalIcon} <c:magical>Magické poškození</c:magical> snižuje <b>magická obrana</b><br/>• <c:pure>Čisté poškození</c:pure> ignoruje obojí a <b>nelze ho ničím snížit</b><br/><br/>U nehrdinských zdrojů existují další tři typy: <b>základní útok</b> způsobí hrdinům <b>${basicToHero}%</b>, probíjecí střela jednotky na dálku <b>${pierceToMinion}%</b> jednotkám a <b>obléhací</b> bomba <b>${siegeToTower}%</b> věžím, ale jen <b>${siegeToHero}%</b> hrdinům.<br/><br/>Proto věž bolí tak moc – její útok je čistý – a proto proti ní nakupování brnění nepomůže.`,
        br: `Todo acerto no jogo carrega um tipo de dano, e o tipo decide qual defesa se aplica antes de qualquer número ser subtraído.<br/><br/>• ${physicalIcon} <c:physical>Dano físico</c:physical> é reduzido por <b>armadura</b> e só causa <b>${toTower}%</b> em torres<br/>• ${magicalIcon} <c:magical>Dano mágico</c:magical> é reduzido por <b>defesa mágica</b><br/>• <c:pure>Dano puro</c:pure> ignora os dois e <b>não pode ser reduzido por nada</b><br/><br/>Existem mais três tipos em fontes que não são heróis: um <b>ataque básico</b> causa <b>${basicToHero}%</b> em heróis, o tiro <b>perfurante</b> do lacaio à distância causa <b>${pierceToMinion}%</b> em lacaios, e a bomba de <b>cerco</b> causa <b>${siegeToTower}%</b> em torres mas só <b>${siegeToHero}%</b> em heróis.<br/><br/>É por isso que uma torre dói tanto - o ataque dela é puro - e por que acumular armadura não ajuda contra ela.`,
        fr: `Chaque coup du jeu porte un type de dégâts, et c'est le type qui décide quelle défense s'applique avant de soustraire le moindre chiffre.<br/><br/>• ${physicalIcon} Les <c:physical>dégâts physiques</c:physical> sont réduits par l'<b>armure</b> et n'infligent que <b>${toTower}%</b> aux tours<br/>• ${magicalIcon} Les <c:magical>dégâts magiques</c:magical> sont réduits par la <b>défense magique</b><br/>• Les <c:pure>dégâts purs</c:pure> ignorent les deux et <b>ne peuvent être réduits par rien</b><br/><br/>Trois autres types existent sur les sources non-héros : une <b>attaque de base</b> inflige <b>${basicToHero}%</b> aux héros, le tir <b>perforant</b> du sbire à distance inflige <b>${pierceToMinion}%</b> aux sbires, et une bombe de <b>siège</b> inflige <b>${siegeToTower}%</b> aux tours mais seulement <b>${siegeToHero}%</b> aux héros.<br/><br/>C'est pourquoi une tour fait si mal - son attaque est pure - et pourquoi empiler de l'armure n'y change rien.`,
        zh: `遊戲中每一次命中都帶有傷害類型，而類型決定了在扣除任何數值之前套用哪種防禦。<br/><br/>• ${physicalIcon} <c:physical>物理傷害</c:physical>受<b>護甲</b>減免，且對防禦塔只造成 <b>${toTower}%</b><br/>• ${magicalIcon} <c:magical>魔法傷害</c:magical>受<b>魔法抗性</b>減免<br/>• <c:pure>真實傷害</c:pure>無視兩者，且<b>無法被任何方式減免</b><br/><br/>非英雄來源還有另外三種類型：<b>普通攻擊</b>對英雄造成 <b>${basicToHero}%</b>，遠程小兵的<b>穿透</b>射擊對小兵造成 <b>${pierceToMinion}%</b>，<b>攻城</b>炸彈對防禦塔造成 <b>${siegeToTower}%</b> 但對英雄僅 <b>${siegeToHero}%</b>。<br/><br/>這正是防禦塔如此痛的原因——它的攻擊是真實傷害——也是堆疊護甲對它毫無用處的原因。`,
        vi: `Mọi đòn đánh trong game đều mang một loại sát thương, và loại đó quyết định phòng thủ nào được áp dụng trước khi trừ bất kỳ con số nào.<br/><br/>• ${physicalIcon} <c:physical>Sát thương vật lý</c:physical> bị giảm bởi <b>giáp</b>, và chỉ gây <b>${toTower}%</b> lên trụ<br/>• ${magicalIcon} <c:magical>Sát thương phép</c:magical> bị giảm bởi <b>kháng phép</b><br/>• <c:pure>Sát thương chuẩn</c:pure> bỏ qua cả hai và <b>không thể bị giảm bởi bất cứ thứ gì</b><br/><br/>Còn ba loại nữa ở các nguồn không phải tướng: <b>đòn đánh thường</b> gây <b>${basicToHero}%</b> lên tướng, phát bắn <b>xuyên</b> của lính đánh xa gây <b>${pierceToMinion}%</b> lên lính, và bom <b>công thành</b> gây <b>${siegeToTower}%</b> lên trụ nhưng chỉ <b>${siegeToHero}%</b> lên tướng.<br/><br/>Đó là lý do trụ đau đến vậy - đòn đánh của nó là sát thương chuẩn - và là lý do cộng giáp không giúp được gì.`,
        id: `Setiap serangan dalam permainan membawa tipe damage, dan tipe itulah yang menentukan pertahanan mana yang berlaku sebelum angka apa pun dikurangi.<br/><br/>• ${physicalIcon} <c:physical>Damage fisik</c:physical> dikurangi oleh <b>armor</b>, dan hanya memberi <b>${toTower}%</b> ke menara<br/>• ${magicalIcon} <c:magical>Damage sihir</c:magical> dikurangi oleh <b>pertahanan sihir</b><br/>• <c:pure>Damage murni</c:pure> mengabaikan keduanya dan <b>tidak bisa dikurangi oleh apa pun</b><br/><br/>Ada tiga tipe lain pada sumber non-hero: <b>serangan dasar</b> memberi <b>${basicToHero}%</b> ke hero, tembakan <b>pierce</b> minion jarak jauh memberi <b>${pierceToMinion}%</b> ke minion, dan bom <b>siege</b> memberi <b>${siegeToTower}%</b> ke menara tetapi hanya <b>${siegeToHero}%</b> ke hero.<br/><br/>Inilah sebabnya menara terasa sangat sakit - serangannya murni - dan mengapa menumpuk armor tidak membantu melawannya.`,
        kr: `게임의 모든 타격에는 피해 유형이 있으며, 어떤 수치를 빼기 전에 어떤 방어가 적용되는지는 이 유형이 결정합니다.<br/><br/>• ${physicalIcon} <c:physical>물리 피해</c:physical>는 <b>방어력</b>으로 감소하며, 타워에는 <b>${toTower}%</b>만 들어갑니다<br/>• ${magicalIcon} <c:magical>마법 피해</c:magical>는 <b>마법 저항</b>으로 감소합니다<br/>• <c:pure>고정 피해</c:pure>는 둘 다 무시하며 <b>어떤 것으로도 줄일 수 없습니다</b><br/><br/>챔피언이 아닌 출처에는 세 유형이 더 있습니다. <b>기본 공격</b>은 챔피언에게 <b>${basicToHero}%</b>, 원거리 미니언의 <b>관통</b> 사격은 미니언에게 <b>${pierceToMinion}%</b>, <b>공성</b> 폭탄은 타워에 <b>${siegeToTower}%</b>이지만 챔피언에게는 <b>${siegeToHero}%</b>만 들어갑니다.<br/><br/>타워가 그토록 아픈 이유가 바로 이것이며(공격이 고정 피해입니다), 방어력을 쌓아도 소용없는 이유이기도 합니다.`,
      }
    }

    case MechanicId.CC_EFFECTS: {
      const stunIcon = mechanicIcon('cc', 'stun')
      const rootIcon = mechanicIcon('cc', 'root')
      const silenceIcon = mechanicIcon('cc', 'silence')
      const freezeIcon = mechanicIcon('cc', 'freeze')
      const slowIcon = mechanicIcon('cc', 'slow')
      const fearIcon = mechanicIcon('cc', 'fear')
      const pullIcon = mechanicIcon('cc', 'pull')
      const pushbackIcon = mechanicIcon('cc', 'pushback')

      return {
        en: `<b>Crowd control (CC)</b> limits movement or actions. Most effects can be <c:dispel>dispelled</c:dispel>. <b>Tenacity</b> reduces their duration.<ul><li>${stunIcon} <c:stun>Stun:</c:stun> stops movement, attacks, and abilities. Interrupts your current cast.</li><li>${rootIcon} <c:root>Root:</c:root> stops movement and attacks. You can still cast abilities.</li><li>${silenceIcon} <c:silence>Silence:</c:silence> stops abilities. You can still move and attack.</li><li>${freezeIcon} <c:freeze>Freeze:</c:freeze> same as Root - no movement and no attacks, but abilities still work.</li><li>${slowIcon} <c:slow>Slow:</c:slow> reduces movement speed.</li><li>${fearIcon} <c:fear>Fear</c:fear> and <c:charm>Charm:</c:charm> force you to move in a direction you cannot choose, and block your attacks and abilities.</li><li>${stunIcon} <c:knockback>Knockback:</c:knockback> launches you into the air and stuns you for its duration.</li><li>${pullIcon} <c:pull>Pull:</c:pull> drags you and stops you acting while it lasts.</li><li>${pushbackIcon} <c:pushback>Pushback:</c:pushback> shoves you, but you can keep attacking and casting.</li></ul><b>Hard CC</b> means <c:stun>Stun</c:stun>, <c:charm>Charm</c:charm>, and <c:fear>Fear</c:fear>. Immunity to hard CC protects against these three.`,
        ru: `Контроль — это всё, что отнимает у героя возможность действовать. Большую его часть можно <c:dispel>снять</c:dispel>, а <b>стойкость</b> сокращает его длительность на вас.<br/><br/>• ${stunIcon} <c:stun>Оглушение</c:stun> — ни движения, ни атак, ни способностей, текущий каст прерывается<br/>• ${rootIcon} <c:root>Обездвиживание</c:root> — вы не можете ни двигаться, ни атаковать, но способности остаются доступны<br/>• ${silenceIcon} <c:silence>Немота</c:silence> — нет способностей, но движение и атаки доступны<br/>• ${freezeIcon} <c:freeze>Заморозка</c:freeze> — то же, что обездвиживание: ни движения, ни атак, но способности работают<br/>• ${slowIcon} <c:slow>Замедление</c:slow> — снижение скорости передвижения, а не полная блокировка<br/>• ${fearIcon} <c:fear>Страх</c:fear> и <c:charm>Очарование</c:charm> — вы продолжаете двигаться, но направление выбирают за вас, а атаки и способности заблокированы<br/>• ${stunIcon} <c:knockback>Отбрасывание</c:knockback> — подбрасывает вас в воздух и оглушает на всю длительность<br/>• ${pullIcon} <c:pull>Притягивание</c:pull> — тащит вас и не даёт действовать<br/>• ${pushbackIcon} <c:pushback>Толчок</c:pushback> — сдвигает вас, но атаковать и применять способности вы можете<br/><br/><b>Оглушение, Очарование и Страх</b> считаются <b>жёстким контролем</b>; эффекты и предметы, дающие иммунитет к жёсткому контролю, имеют в виду именно их.`,
        cz: `Ovládání je všechno, co hrdinovi bere možnost jednat. Většinu lze <c:dispel>rozptýlit</c:dispel> a <b>houževnatost</b> zkracuje, jak dlouho na tebe působí.<br/><br/>• ${stunIcon} <c:stun>Omráčení</c:stun> – žádný pohyb, útoky ani schopnosti, a rozseslané kouzlo se přeruší<br/>• ${rootIcon} <c:root>Znehybnění</c:root> – nemůžeš se hýbat ani útočit, ale schopnosti pořád sesíláš<br/>• ${silenceIcon} <c:silence>Umlčení</c:silence> – žádné schopnosti, ale pohyb i útok fungují<br/>• ${freezeIcon} <c:freeze>Zmrazení</c:freeze> – stejné jako znehybnění: žádný pohyb ani útoky, ale schopnosti fungují<br/>• ${slowIcon} <c:slow>Zpomalení</c:slow> – snížená rychlost pohybu, ne úplné zablokování<br/>• ${fearIcon} <c:fear>Strach</c:fear> a <c:charm>Okouzlení</c:charm> – dál se pohybuješ, ale směr za tebe vybírá někdo jiný a útoky i schopnosti jsou zablokované<br/>• ${stunIcon} <c:knockback>Odhození</c:knockback> – vymrští tě do vzduchu a na celou dobu omráčí<br/>• ${pullIcon} <c:pull>Přitažení</c:pull> – táhne tě a nedovolí ti jednat<br/>• ${pushbackIcon} <c:pushback>Odstrčení</c:pushback> – odsune tě, ale útočit i sesílat můžeš dál<br/><br/><b>Omráčení, Okouzlení a Strach</b> se počítají jako <b>tvrdé ovládání</b>; efekty a předměty mluvící o imunitě vůči tvrdému ovládání myslí právě tyto tři.`,
        br: `Controle de grupo é tudo que tira as ações de um herói. A maior parte pode ser <c:dispel>dissipada</c:dispel>, e <b>tenacidade</b> encurta quanto tempo dura em você.<br/><br/>• ${stunIcon} <c:stun>Atordoamento</c:stun> - sem movimento, ataques ou habilidades, e a conjuração em andamento é interrompida<br/>• ${rootIcon} <c:root>Enraizamento</c:root> - preso no lugar e sem poder atacar, mas ainda pode conjurar habilidades<br/>• ${silenceIcon} <c:silence>Silêncio</c:silence> - sem habilidades, mas ainda pode mover e atacar<br/>• ${freezeIcon} <c:freeze>Congelamento</c:freeze> - igual ao enraizamento: sem movimento nem ataques, mas as habilidades funcionam<br/>• ${slowIcon} <c:slow>Lentidão</c:slow> - velocidade reduzida em vez de bloqueio total<br/>• ${fearIcon} <c:fear>Medo</c:fear> e <c:charm>Encanto</c:charm> - você continua se movendo, mas a direção é escolhida por outro, e seus ataques e habilidades ficam bloqueados<br/>• ${stunIcon} <c:knockback>Repulsão</c:knockback> - te lança ao ar e te atordoa durante toda a duração<br/>• ${pullIcon} <c:pull>Puxão</c:pull> - te arrasta e impede de agir<br/>• ${pushbackIcon} <c:pushback>Empurrão</c:pushback> - te empurra, mas você pode continuar atacando e conjurando<br/><br/><b>Atordoamento, Encanto e Medo</b> contam como <b>controle pesado</b>; efeitos e itens que falam de imunidade a controle pesado se referem a esses três.`,
        fr: `Le contrôle de foule est tout ce qui retire ses actions à un héros. La plupart peut être <c:dispel>dissipé</c:dispel>, et la <b>ténacité</b> raccourcit sa durée sur vous.<br/><br/>• ${stunIcon} <c:stun>Étourdissement</c:stun> - ni déplacement, ni attaque, ni compétence, et l'incantation en cours est interrompue<br/>• ${rootIcon} <c:root>Enracinement</c:root> - cloué sur place et incapable d'attaquer, mais vous pouvez encore incanter<br/>• ${silenceIcon} <c:silence>Silence</c:silence> - plus de compétences, mais déplacement et attaques restent possibles<br/>• ${freezeIcon} <c:freeze>Gel</c:freeze> - identique à l’enracinement : ni déplacement ni attaque, mais les compétences fonctionnent<br/>• ${slowIcon} <c:slow>Ralentissement</c:slow> - vitesse réduite plutôt qu'un blocage complet<br/>• ${fearIcon} <c:fear>Peur</c:fear> et <c:charm>Charme</c:charm> - vous continuez à bouger, mais la direction est choisie à votre place, et vos attaques comme vos compétences sont bloquées<br/>• ${stunIcon} <c:knockback>Repoussée</c:knockback> - vous projette en l’air et vous étourdit pendant toute sa durée<br/>• ${pullIcon} <c:pull>Attraction</c:pull> - vous traîne et vous empêche d’agir<br/>• ${pushbackIcon} <c:pushback>Poussée</c:pushback> - vous déplace, mais vous pouvez continuer à attaquer et à incanter<br/><br/><b>Étourdissement, Charme et Peur</b> comptent comme du <b>contrôle dur</b> ; les effets et objets parlant d'immunité au contrôle dur visent ces trois-là.`,
        zh: `控制效果是指任何剝奪英雄行動能力的效果。大多數都可以被<c:dispel>驅散</c:dispel>，而<b>韌性</b>能縮短它們在你身上的持續時間。<br/><br/>• ${stunIcon} <c:stun>暈眩</c:stun>——無法移動、攻擊或使用技能，且當前施法被中斷<br/>• ${rootIcon} <c:root>纏繞</c:root>——無法移動，也無法攻擊，但仍可施放技能<br/>• ${silenceIcon} <c:silence>沉默</c:silence>——無法使用技能，但仍可移動與攻擊<br/>• ${freezeIcon} <c:freeze>冰凍</c:freeze>——與纏繞相同：無法移動與攻擊，但技能仍可施放<br/>• ${slowIcon} <c:slow>減速</c:slow>——降低移動速度，而非完全禁錮<br/>• ${fearIcon} <c:fear>恐懼</c:fear>與<c:charm>魅惑</c:charm>——你仍會移動，但方向由他人決定，且攻擊與技能都被封鎖<br/>• ${stunIcon} <c:knockback>擊退</c:knockback>——將你擊飛到空中，並在持續時間內暈眩你<br/>• ${pullIcon} <c:pull>拉扯</c:pull>——把你拖走，期間無法行動<br/>• ${pushbackIcon} <c:pushback>推擠</c:pushback>——推開你，但你仍可攻擊與施法<br/><br/><b>暈眩、魅惑與恐懼</b>屬於<b>硬控制</b>；提到免疫硬控制的效果與裝備指的就是這三種。`,
        vi: `Khống chế là bất cứ thứ gì tước đi khả năng hành động của tướng. Phần lớn có thể bị <c:dispel>giải</c:dispel>, và <b>kiên cường</b> rút ngắn thời gian nó tác động lên bạn.<br/><br/>• ${stunIcon} <c:stun>Choáng</c:stun> - không di chuyển, không đánh, không dùng kỹ năng, và pha tung chiêu đang dở bị ngắt<br/>• ${rootIcon} <c:root>Trói chân</c:root> - bị ghim tại chỗ và không đánh thường được, nhưng vẫn tung chiêu được<br/>• ${silenceIcon} <c:silence>Câm lặng</c:silence> - không dùng được kỹ năng, nhưng vẫn di chuyển và đánh thường<br/>• ${freezeIcon} <c:freeze>Đóng băng</c:freeze> - giống trói chân: không di chuyển, không đánh thường, nhưng kỹ năng vẫn dùng được<br/>• ${slowIcon} <c:slow>Làm chậm</c:slow> - giảm tốc chạy thay vì khóa hoàn toàn<br/>• ${fearIcon} <c:fear>Khiếp sợ</c:fear> và <c:charm>Mê hoặc</c:charm> - bạn vẫn di chuyển, nhưng hướng đi do người khác quyết định, và cả đánh thường lẫn kỹ năng đều bị khóa<br/>• ${stunIcon} <c:knockback>Hất tung</c:knockback> - hất bạn lên không và gây choáng suốt thời gian đó<br/>• ${pullIcon} <c:pull>Kéo</c:pull> - lôi bạn đi và không cho hành động<br/>• ${pushbackIcon} <c:pushback>Đẩy lùi</c:pushback> - đẩy bạn đi, nhưng bạn vẫn đánh và tung chiêu được<br/><br/><b>Choáng, Mê hoặc và Khiếp sợ</b> được tính là <b>khống chế cứng</b>; các hiệu ứng và trang bị nói về miễn nhiễm khống chế cứng là nói tới ba loại này.`,
        id: `Crowd control adalah apa pun yang merampas aksi seorang hero. Sebagian besar bisa <c:dispel>di-dispel</c:dispel>, dan <b>tenacity</b> memperpendek durasinya padamu.<br/><br/>• ${stunIcon} <c:stun>Stun</c:stun> - tidak bisa bergerak, menyerang, atau memakai skill, dan cast yang sedang berjalan terputus<br/>• ${rootIcon} <c:root>Root</c:root> - terpaku di tempat dan tidak bisa menyerang, tapi masih bisa cast skill<br/>• ${silenceIcon} <c:silence>Silence</c:silence> - tidak bisa pakai skill, tapi masih bisa bergerak dan menyerang<br/>• ${freezeIcon} <c:freeze>Freeze</c:freeze> - sama seperti root: tidak bisa bergerak atau menyerang, tapi skill tetap bisa dipakai<br/>• ${slowIcon} <c:slow>Slow</c:slow> - kecepatan gerak berkurang, bukan terkunci sepenuhnya<br/>• ${fearIcon} <c:fear>Fear</c:fear> dan <c:charm>Charm</c:charm> - kamu tetap bergerak, tapi arahnya ditentukan orang lain, dan serangan maupun skill terkunci<br/>• ${stunIcon} <c:knockback>Knockback</c:knockback> - melontarkanmu ke udara dan membuatmu stun selama durasinya<br/>• ${pullIcon} <c:pull>Pull</c:pull> - menyeretmu dan membuatmu tidak bisa beraksi<br/>• ${pushbackIcon} <c:pushback>Pushback</c:pushback> - mendorongmu, tapi kamu tetap bisa menyerang dan cast<br/><br/><b>Stun, Charm dan Fear</b> dihitung sebagai <b>hard crowd control</b>; efek dan item yang menyebut kebal hard CC merujuk pada ketiganya.`,
        kr: `군중 제어란 챔피언에게서 행동을 빼앗는 모든 것을 말합니다. 대부분은 <c:dispel>정화</c:dispel>할 수 있고, <b>강인함</b>은 자신에게 걸린 지속 시간을 줄여 줍니다.<br/><br/>• ${stunIcon} <c:stun>기절</c:stun> - 이동, 공격, 스킬이 모두 불가하며 시전 중이던 스킬이 끊깁니다<br/>• ${rootIcon} <c:root>속박</c:root> - 제자리에 묶이고 공격도 할 수 없지만 스킬 시전은 가능합니다<br/>• ${silenceIcon} <c:silence>침묵</c:silence> - 스킬을 쓸 수 없지만 이동과 공격은 가능합니다<br/>• ${freezeIcon} <c:freeze>빙결</c:freeze> - 속박과 같습니다: 이동과 공격은 불가하지만 스킬은 사용할 수 있습니다<br/>• ${slowIcon} <c:slow>둔화</c:slow> - 완전한 봉쇄가 아니라 이동 속도 감소입니다<br/>• ${fearIcon} <c:fear>공포</c:fear>와 <c:charm>매혹</c:charm> - 계속 움직이지만 방향은 상대가 정하며 공격과 스킬이 모두 막힙니다<br/>• ${stunIcon} <c:knockback>넉백</c:knockback> - 공중으로 띄우며 지속 시간 동안 기절시킵니다<br/>• ${pullIcon} <c:pull>끌어당기기</c:pull> - 끌려가며 그동안 행동할 수 없습니다<br/>• ${pushbackIcon} <c:pushback>밀쳐내기</c:pushback> - 밀려나지만 공격과 시전은 계속할 수 있습니다<br/><br/><b>기절, 매혹, 공포</b>는 <b>강력한 군중 제어</b>로 분류되며, 하드 CC 면역을 말하는 효과와 아이템은 이 셋을 가리킵니다.`,
      }
    }

    case MechanicId.DISPELLING: {
      const divine = mechanicIcon('dispelling', 'divine_shield')
      const vampiric = mechanicIcon('dispelling', 'vampiric_armor')
      const titansShield = mechanicIcon('dispelling', 'titans_shield')
      const titansArmor = mechanicIcon('dispelling', 'titans_armor')
      const antimagic = mechanicIcon('dispelling', 'antimagic_cape')
      const slowIcon = mechanicIcon('cc', 'slow')
      const rootIcon = mechanicIcon('cc', 'root')
      const silenceIcon = mechanicIcon('cc', 'silence')
      const stunIcon = mechanicIcon('cc', 'stun')
      const freezeIcon = mechanicIcon('cc', 'freeze')
      const dotIcon = mechanicIcon('damage_types', 'ignite')
      const kirinsDefender = mechanicIcon('dispelling', 'kirins_defender')
      const radius = ItemAbilityData.ACTIVE_EFFECT_RADIUS
      const blockDuration = sec(ItemAbilityData.KIRINS_DEFENDER_DURATION)
      const blockCooldown = sec(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN)

      const dispelItemClip = clipSlot(MechanicVideoLabel.DISPEL_ITEM)

      return {
        en: `A <c:dispel>dispel</c:dispel> removes negative effects currently on you. It <b>does not prevent new effects</b>, so use it after an effect lands.<h2>Effects it removes</h2><ul><li>${slowIcon} <c:slow>Slows</c:slow>, ${rootIcon} <c:control>Roots</c:control>, and ${silenceIcon} <c:control>Silences</c:control>.</li><li>${freezeIcon} <c:control>Freezes</c:control>, ${stunIcon} <c:stun>Stuns</c:stun>, and other hard CC.</li><li>${dotIcon} <b>Damage over time</b>, such as poison or ignite.</li></ul>Some effects, such as <b>tower damage stacks</b>, <c:dispel>cannot be dispelled</c:dispel>.<h2>Items that dispel</h2><ul><li>${divine} <b>Divine Shield:</b> cleanses you and allies within <c:range>${radius} range</c:range>, then grants regeneration.</li><li>${antimagic} <b>Antimagic Cape:</b> cleanses you.</li><li>${vampiric} <b>Vampiric Armor:</b> cleanses you.</li><li>${titansShield} <b>Titan's Shield:</b> cleanses you.</li><li>${titansArmor} <b>Titan's Armor:</b> cleanses you.</li></ul>Your own <b>Base</b> also removes negative effects applied outside it.${dispelItemClip}<h2>Blocking crowd control</h2>A dispel removes effects after they land. ${kirinsDefender} <b>Kirin's Defender</b> works the other way round: it <b>blocks the next crowd control effect</b> that hits you and grants <c:immune>immunity to crowd control</c:immune> for <b>${blockDuration}s</b>, at most once every <b>${blockCooldown}s</b>.`,
        ru: `<c:dispel>Очищение</c:dispel> разом снимает с героя все отрицательные эффекты:<br/><br/>• ${slowIcon} <c:slow>Замедления</c:slow><br/>• ${rootIcon} <c:root>Обездвиживание</c:root><br/>• ${silenceIcon} <c:control>Немоту</c:control><br/>• ${freezeIcon} <c:control>Заморозку</c:control><br/>• ${stunIcon} <c:stun>Оглушения</c:stun> и остальной жёсткий контроль<br/>• ${dotIcon} <c:physical>Урон со временем</c:physical>, например яд или поджог<br/><br/>Оно не защищает от следующего, поэтому всё решает тайминг: очищайтесь после того, как контроль наложен, а не до.<br/><br/>Очищение есть у пяти предметов:<br/>• ${divine} <b>Божественный щит</b> — единственное <b>массовое</b> очищение: снимает эффекты с вас <b>и со всех союзников</b> в <c:range>радиусе ${radius}</c:range>, а затем даёт бафф регенерации<br/>• ${antimagic} <b>Антимагический плащ</b> — очищает вас<br/>• ${vampiric} <b>Вампирская броня</b> — очищает вас<br/>• ${titansShield} <b>Щит титана</b> — очищает вас<br/>• ${titansArmor} <b>Броня титана</b> — очищает вас<br/><br/>Нахождение на своей <b>Базе</b> тоже снимает всё, что вы подцепили снаружи, — зачастую это самое дешёвое очищение в игре.${dispelItemClip}<h2>Блокировка контроля</h2>Очищение снимает эффекты уже после того, как они наложены. ${kirinsDefender} <b>Защитник Кирина</b> работает наоборот: <b>блокирует следующий эффект контроля</b>, который в вас попадёт, и даёт <c:immune>иммунитет к контролю</c:immune> на <b>${blockDuration} с</b>, не чаще чем раз в <b>${blockCooldown} с</b>.`,
        cz: `<c:dispel>Rozptýlení</c:dispel> naráz sundá z hrdiny všechny negativní efekty:<br/><br/>• ${slowIcon} <c:slow>Zpomalení</c:slow><br/>• ${rootIcon} <c:root>Znehybnění</c:root><br/>• ${silenceIcon} <c:silence>Umlčení</c:silence><br/>• ${freezeIcon} <c:freeze>Zmrazení</c:freeze><br/>• ${stunIcon} <c:stun>Omráčení</c:stun> a zbytek tvrdého ovládání<br/>• ${dotIcon} <c:physical>Poškození v čase</c:physical>, třeba jed nebo zapálení<br/><br/>Nezabrání dalšímu, takže celá dovednost je v načasování: rozptyl až potom, co ovládání dopadne, ne předtím.<br/><br/>Nese ho pět předmětů:<br/>• ${divine} <b>Božský štít</b> – jediné <b>plošné</b> rozptýlení: očistí tebe <b>i každého spojence</b> v <c:range>dosahu ${radius}</c:range> a nechá po sobě regenerační buff<br/>• ${antimagic} <b>Antimagický plášť</b> – rozptýlí tebe<br/>• ${vampiric} <b>Upíří brnění</b> – rozptýlí tebe<br/>• ${titansShield} <b>Titánův štít</b> – rozptýlí tebe<br/>• ${titansArmor} <b>Titánovo brnění</b> – rozptýlí tebe<br/><br/>Stání na vlastní <b>Základně</b> také očistí všechno, co jsi nabral venku – často nejlevnější rozptýlení ve hře.${dispelItemClip}<h2>Blokování ovládání</h2>Rozptýlení sundá efekty až potom, co dopadnou. ${kirinsDefender} <b>Kirinův obránce</b> funguje naopak: <b>zablokuje další efekt ovládání</b>, který tě zasáhne, a dá ti <c:immune>imunitu vůči ovládání</c:immune> na <b>${blockDuration}s</b>, nejvýše jednou za <b>${blockCooldown}s</b>.`,
        br: `Uma <c:dispel>dissipação</c:dispel> remove todos os efeitos negativos de um herói de uma vez:<br/><br/>• ${slowIcon} <c:slow>Lentidões</c:slow><br/>• ${rootIcon} <c:control>Enraizamentos</c:control><br/>• ${silenceIcon} <c:control>Silêncios</c:control><br/>• ${freezeIcon} <c:control>Congelamentos</c:control><br/>• ${stunIcon} <c:stun>Atordoamentos</c:stun> e o resto do controle pesado<br/>• ${dotIcon} <c:physical>Dano ao longo do tempo</c:physical>, como veneno ou ignição<br/><br/>Ela não impede o próximo, então o tempo é toda a habilidade: dissipe depois que o controle acertar, não antes.<br/><br/>Cinco itens carregam uma:<br/>• ${divine} <b>Escudo Divino</b> - a única dissipação em <b>área</b>: limpa você <b>e todos os aliados</b> em <c:range>${radius} de alcance</c:range>, e ainda deixa um bônus de regeneração<br/>• ${antimagic} <b>Capa Antimagia</b> - dissipa você<br/>• ${vampiric} <b>Armadura Vampírica</b> - dissipa você<br/>• ${titansShield} <b>Escudo do Titã</b> - dissipa você<br/>• ${titansArmor} <b>Armadura do Titã</b> - dissipa você<br/><br/>Ficar na sua própria <b>Base</b> também limpa tudo que você pegou fora dela, muitas vezes a dissipação mais barata do jogo.${dispelItemClip}<h2>Bloqueando controle de grupo</h2>Uma dissipação remove efeitos depois que eles acertam. ${kirinsDefender} <b>Defensor de Kirin</b> faz o contrário: <b>bloqueia o próximo efeito de controle</b> que te atingir e concede <c:immune>imunidade a controle de grupo</c:immune> por <b>${blockDuration}s</b>, no máximo uma vez a cada <b>${blockCooldown}s</b>.`,
        fr: `Une <c:dispel>dissipation</c:dispel> retire d'un coup tous les effets négatifs d'un héros :<br/><br/>• ${slowIcon} <c:slow>Ralentissements</c:slow><br/>• ${rootIcon} <c:control>Enracinements</c:control><br/>• ${silenceIcon} <c:control>Silences</c:control><br/>• ${freezeIcon} <c:control>Gels</c:control><br/>• ${stunIcon} <c:stun>Étourdissements</c:stun> et le reste du contrôle dur<br/>• ${dotIcon} <c:physical>Dégâts sur la durée</c:physical>, comme le poison ou l'embrasement<br/><br/>Elle n'empêche pas le suivant, donc tout est dans le timing : dissipez après que le contrôle a touché, pas avant.<br/><br/>Cinq objets en possèdent une :<br/>• ${divine} <b>Bouclier divin</b> - la seule dissipation de <b>zone</b> : il vous purge <b>ainsi que tous les alliés</b> dans un <c:range>rayon de ${radius}</c:range>, puis laisse un bonus de régénération<br/>• ${antimagic} <b>Cape antimagie</b> - vous dissipe<br/>• ${vampiric} <b>Armure vampirique</b> - vous dissipe<br/>• ${titansShield} <b>Bouclier du titan</b> - vous dissipe<br/>• ${titansArmor} <b>Armure du titan</b> - vous dissipe<br/><br/>Se tenir dans sa propre <b>Base</b> purge aussi tout ce que vous avez ramassé à l'extérieur : souvent la dissipation la moins chère du jeu.${dispelItemClip}<h2>Bloquer le contrôle de foule</h2>Une dissipation retire les effets après qu'ils ont touché. ${kirinsDefender} <b>Bouclier de Kirin</b> fait l'inverse : il <b>bloque le prochain effet de contrôle</b> qui vous touche et confère l'<c:immune>immunité au contrôle de foule</c:immune> pendant <b>${blockDuration}s</b>, au plus une fois toutes les <b>${blockCooldown}s</b>.`,
        zh: `<c:dispel>驅散</c:dispel>會一次移除英雄身上所有負面效果：<br/><br/>• ${slowIcon} <c:slow>減速</c:slow><br/>• ${rootIcon} <c:root>纏繞</c:root><br/>• ${silenceIcon} <c:silence>沉默</c:silence><br/>• ${freezeIcon} <c:freeze>冰凍</c:freeze><br/>• ${stunIcon} <c:stun>暈眩</c:stun>以及其餘硬控制<br/>• ${dotIcon} <c:physical>持續傷害</c:physical>，例如中毒或點燃<br/><br/>它無法阻擋下一個效果，因此時機就是全部技巧：在控制命中「之後」驅散，而非之前。<br/><br/>共有五件裝備具備驅散：<br/>• ${divine} <b>神聖護盾</b>——唯一的<b>範圍</b>驅散：淨化你<b>以及</b> <c:range>${radius} 範圍</c:range>內<b>所有隊友</b>，並留下回復增益<br/>• ${antimagic} <b>抗魔斗篷</b>——驅散自身<br/>• ${vampiric} <b>吸血護甲</b>——驅散自身<br/>• ${titansShield} <b>泰坦之盾</b>——驅散自身<br/>• ${titansArmor} <b>泰坦護甲</b>——驅散自身<br/><br/>站在自家<b>基地</b>同樣會清除你在外面沾染的一切，這通常是遊戲中最便宜的驅散。${dispelItemClip}<h2>阻擋控制效果</h2>驅散是在效果命中之後才將其移除。${kirinsDefender} <b>麒麟的守護者</b>則相反：它會<b>阻擋下一個命中你的控制效果</b>，並給予 <b>${blockDuration} 秒</b><c:immune>控制免疫</c:immune>，每 <b>${blockCooldown} 秒</b>最多觸發一次。`,
        vi: `<c:dispel>Giải hiệu ứng</c:dispel> gỡ sạch mọi hiệu ứng bất lợi khỏi một tướng cùng lúc:<br/><br/>• ${slowIcon} <c:slow>Làm chậm</c:slow><br/>• ${rootIcon} <c:root>Trói chân</c:root><br/>• ${silenceIcon} <c:silence>Câm lặng</c:silence><br/>• ${freezeIcon} <c:freeze>Đóng băng</c:freeze><br/>• ${stunIcon} <c:stun>Choáng</c:stun> và các hiệu ứng khống chế cứng còn lại<br/>• ${dotIcon} <c:physical>Sát thương theo thời gian</c:physical>, như độc hoặc thiêu đốt<br/><br/>Nó không ngăn được đòn tiếp theo, nên thời điểm là tất cả kỹ năng: giải sau khi khống chế trúng, không phải trước.<br/><br/>Năm trang bị có sẵn hiệu ứng này:<br/>• ${divine} <b>Khiên Thần Thánh</b> - giải <b>diện rộng</b> duy nhất: làm sạch cho bạn <b>và mọi đồng minh</b> trong <c:range>tầm ${radius}</c:range>, rồi để lại buff hồi phục<br/>• ${antimagic} <b>Áo Choàng Kháng Phép</b> - giải cho bạn<br/>• ${vampiric} <b>Giáp Hút Máu</b> - giải cho bạn<br/>• ${titansShield} <b>Khiên Titan</b> - giải cho bạn<br/>• ${titansArmor} <b>Giáp Titan</b> - giải cho bạn<br/><br/>Đứng trong <b>Căn Cứ</b> của mình cũng gỡ mọi thứ bạn dính bên ngoài - thường là cách giải rẻ nhất trong game.${dispelItemClip}<h2>Chặn khống chế</h2>Giải hiệu ứng chỉ gỡ hiệu ứng sau khi nó đã trúng. ${kirinsDefender} <b>Khiên Kirin</b> làm ngược lại: nó <b>chặn hiệu ứng khống chế tiếp theo</b> trúng bạn và cho <c:immune>miễn nhiễm khống chế</c:immune> trong <b>${blockDuration} giây</b>, tối đa một lần mỗi <b>${blockCooldown} giây</b>.`,
        id: `<c:dispel>Dispel</c:dispel> melepas semua efek negatif dari seorang hero sekaligus:<br/><br/>• ${slowIcon} <c:slow>Slow</c:slow><br/>• ${rootIcon} <c:root>Root</c:root><br/>• ${silenceIcon} <c:silence>Silence</c:silence><br/>• ${freezeIcon} <c:freeze>Freeze</c:freeze><br/>• ${stunIcon} <c:stun>Stun</c:stun> dan hard crowd control lainnya<br/>• ${dotIcon} <c:physical>Damage over time</c:physical>, seperti racun atau ignite<br/><br/>Ia tidak mencegah yang berikutnya, jadi waktunya adalah seluruh keahliannya: dispel setelah crowd control mengenai, bukan sebelumnya.<br/><br/>Lima item memilikinya:<br/>• ${divine} <b>Divine Shield</b> - satu-satunya dispel <b>area</b>: membersihkan kamu <b>dan semua sekutu</b> dalam <c:range>jangkauan ${radius}</c:range>, lalu meninggalkan buff regenerasi<br/>• ${antimagic} <b>Antimagic Cape</b> - dispel dirimu<br/>• ${vampiric} <b>Vampiric Armor</b> - dispel dirimu<br/>• ${titansShield} <b>Titan's Shield</b> - dispel dirimu<br/>• ${titansArmor} <b>Titan's Armor</b> - dispel dirimu<br/><br/>Berdiri di <b>Markas</b> sendiri juga membersihkan apa pun yang kamu dapat di luar, sering kali dispel termurah dalam permainan.${dispelItemClip}<h2>Memblokir crowd control</h2>Dispel melepas efek setelah efek itu mengenai. ${kirinsDefender} <b>Pelindung Kirin</b> bekerja sebaliknya: ia <b>memblokir efek crowd control berikutnya</b> yang mengenaimu dan memberi <c:immune>kebal crowd control</c:immune> selama <b>${blockDuration} detik</b>, paling banyak sekali tiap <b>${blockCooldown} detik</b>.`,
        kr: `<c:dispel>정화</c:dispel>는 챔피언에게 걸린 모든 해로운 효과를 한 번에 벗겨냅니다:<br/><br/>• ${slowIcon} <c:slow>둔화</c:slow><br/>• ${rootIcon} <c:root>속박</c:root><br/>• ${silenceIcon} <c:silence>침묵</c:silence><br/>• ${freezeIcon} <c:freeze>빙결</c:freeze><br/>• ${stunIcon} <c:stun>기절</c:stun>을 비롯한 강력한 군중 제어<br/>• ${dotIcon} <c:physical>지속 피해</c:physical>(중독, 점화 등)<br/><br/>다음 효과를 막아 주지는 않으므로 타이밍이 전부입니다. 군중 제어가 적중한 뒤에 정화하세요, 그 전이 아니라.<br/><br/>다섯 개의 아이템이 정화를 제공합니다:<br/>• ${divine} <b>신성한 방패</b> - 유일한 <b>광역</b> 정화로, 자신 <b>과 ${radius} <c:range>범위</c:range> 내 모든 아군</b>을 정화하고 재생 버프를 남깁니다<br/>• ${antimagic} <b>마법 방어 망토</b> - 자신을 정화<br/>• ${vampiric} <b>흡혈 갑옷</b> - 자신을 정화<br/>• ${titansShield} <b>타이탄의 방패</b> - 자신을 정화<br/>• ${titansArmor} <b>타이탄의 갑옷</b> - 자신을 정화<br/><br/>아군 <b>기지</b>에 서 있어도 밖에서 얻은 모든 것이 정화되며, 대개 게임에서 가장 값싼 정화 수단입니다.${dispelItemClip}<h2>군중 제어 차단</h2>정화는 효과가 적중한 뒤에 벗겨냅니다. ${kirinsDefender} <b>기린의 수호자</b>는 반대로 작동합니다. <b>다음에 적중하는 군중 제어 효과를 차단</b>하고 <b>${blockDuration}초</b> 동안 <c:immune>군중 제어 면역</c:immune>을 부여하며, <b>${blockCooldown}초</b>마다 최대 한 번 발동합니다.`,
      }
    }

    case MechanicId.ANIMATION_CANCEL: {
      return {
        en: `<b>Animation cancelling</b> skips the recovery at the end of an attack or ability, letting you act sooner.<ol><li>Let the attack or ability take effect.</li><li>Move or use another available ability to interrupt its recovery.</li></ol><b>Cooldown cancelling</b> means using another ability as soon as its cooldown ends to start the next cast immediately.<br/><br/>Practice the timing to land combos faster. The clips below show Arel LJKJ and Thomas LJ with animation cancels.`,
        ru: `У каждой атаки и каждого каста есть анимация восстановления. <b>Отмена анимации</b> — это привычка заменять её чем-то полезным: командой движения, другой способностью, — вместо того чтобы просто стоять.<br/><br/>В Kingdom of Pixels это связано с <b>отменой по кулдауну</b>: использование другой способности в момент окончания перезарядки прерывает текущее восстановление и сразу начинает новый каст. Это намеренная часть дизайна, а не эксплойт.<br/><br/>Выигрыш — реальный урон в секунду. Комбо, собранное через отмены, проходит заметно быстрее, чем те же кнопки, нажатые по очереди; ролики ниже показывают комбо Арел LJKJ и Томас LJ с отменами анимации.`,
        cz: `Každý útok a každé sesílání má animaci zotavení. <b>Zrušení animace</b> je zvyk nahradit toto zotavení něčím užitečným – povelem k pohybu, další schopností – místo toho, abys v něm jen stál.<br/><br/>V Kingdom of Pixels to souvisí se <b>zrušením přes cooldown</b>: použití další schopnosti v okamžiku, kdy skončí přebíjení, přeruší aktuální zotavení a hned začne nové sesílání. Je to záměrná součást designu, ne exploit.<br/><br/>Odměnou je skutečné poškození za sekundu. Kombo protkané zrušeními proběhne znatelně rychleji než stejná tlačítka mačkaná po jednom – klipy níže ukazují komba Arel LJKJ a Thomas LJ se zrušením animace.`,
        br: `Todo ataque e conjuração tem uma animação de recuperação. <b>Cancelar animação</b> é o hábito de substituir essa recuperação por algo útil - um comando de movimento, outra habilidade - em vez de ficar parado durante ela.<br/><br/>Em Kingdom of Pixels isso está ligado ao <b>cancelamento por recarga</b>: usar outra habilidade no instante em que uma recarga termina interrompe a recuperação atual e inicia a nova conjuração imediatamente. É uma parte intencional do design, não uma exploração.<br/><br/>O retorno é dano por segundo real. Um combo tecido com cancelamentos sai visivelmente mais rápido do que os mesmos botões apertados um de cada vez, e os clipes abaixo mostram Arel LJKJ e Thomas LJ com cancelamento de animação.`,
        fr: `Chaque attaque et chaque incantation possède une animation de récupération. <b>L'annulation d'animation</b> consiste à remplacer cette récupération par quelque chose d'utile - une commande de déplacement, une autre compétence - au lieu de la subir sans bouger.<br/><br/>Dans Kingdom of Pixels, cela passe par <b>l'annulation par recharge</b> : lancer une autre compétence à l'instant où une recharge se termine interrompt la récupération en cours et démarre immédiatement la nouvelle incantation. C'est une partie assumée du design, pas un exploit.<br/><br/>Le gain est un vrai gain de dégâts par seconde. Un combo tissé d'annulations sort nettement plus vite que les mêmes touches pressées une à une, et les clips ci-dessous montrent Arel LJKJ et Thomas LJ avec annulation d'animation.`,
        zh: `每次攻擊與施法都有後搖動畫。<b>取消後搖</b>就是養成用有用的操作——移動指令、另一個技能——來取代這段後搖，而不是站著硬挨過去。<br/><br/>在 Kingdom of Pixels 中，這與<b>冷卻取消</b>相連：在冷卻結束的瞬間施放另一個技能，會中斷當前後搖並立即開始新的施法。這是刻意的設計，而非漏洞。<br/><br/>回報是實打實的每秒傷害。以取消串接的連招，明顯比逐一按鍵更快打完；下方影片展示了艾瑞爾 LJKJ 與湯瑪士 LJ 的取消後搖連招。`,
        vi: `Mỗi đòn đánh và mỗi lần tung chiêu đều có hoạt ảnh hồi đòn. <b>Hủy hoạt ảnh</b> là thói quen thay thế phần hồi đòn đó bằng thứ hữu ích - một lệnh di chuyển, một kỹ năng khác - thay vì đứng yên chịu trận.<br/><br/>Trong Kingdom of Pixels điều này gắn với <b>hủy theo hồi chiêu</b>: tung một kỹ năng khác ngay khoảnh khắc hồi chiêu kết thúc sẽ cắt phần hồi đòn hiện tại và bắt đầu lần tung mới ngay lập tức. Đây là phần cố ý của thiết kế, không phải lỗi khai thác.<br/><br/>Phần thưởng là sát thương mỗi giây thật sự. Một combo được đan bằng các pha hủy sẽ ra nhanh hơn hẳn so với bấm từng nút một, và các đoạn clip bên dưới cho thấy combo Arel LJKJ và Thomas LJ với hủy hoạt ảnh.`,
        id: `Setiap serangan dan cast punya animasi pemulihan. <b>Membatalkan animasi</b> adalah kebiasaan mengganti pemulihan itu dengan sesuatu yang berguna - input gerak, skill lain - alih-alih berdiri diam menunggunya selesai.<br/><br/>Di Kingdom of Pixels ini terkait dengan <b>pembatalan lewat cooldown</b>: melepaskan skill lain tepat saat cooldown berakhir akan memotong pemulihan saat ini dan langsung memulai cast baru. Ini bagian desain yang disengaja, bukan eksploit.<br/><br/>Hasilnya adalah damage per detik yang nyata. Kombo yang dirajut dengan pembatalan keluar jauh lebih cepat daripada tombol yang sama ditekan satu per satu, dan klip di bawah memperlihatkan Arel LJKJ dan Thomas LJ dengan pembatalan animasi.`,
        kr: `모든 공격과 시전에는 후딜 애니메이션이 있습니다. <b>애니메이션 캔슬</b>은 그 후딜을 가만히 서서 흘려보내는 대신 이동 입력이나 다른 스킬 같은 유용한 행동으로 대체하는 습관입니다.<br/><br/>Kingdom of Pixels에서는 이것이 <b>쿨다운 캔슬</b>과 연결됩니다. 쿨다운이 끝나는 순간 다른 스킬을 사용하면 현재 후딜이 끊기고 새 시전이 즉시 시작됩니다. 버그가 아니라 의도된 설계입니다.<br/><br/>보상은 실질적인 초당 피해량입니다. 캔슬로 엮은 콤보는 같은 키를 하나씩 누르는 것보다 눈에 띄게 빠르게 들어가며, 아래 영상은 아렐 LJKJ와 토마스 LJ의 애니메이션 캔슬 연계를 보여줍니다.`,
      }
    }

    case MechanicId.STATS: {
      const lowArmor = 5
      const midArmor = 20
      const lowHaste = 20
      const midHaste = 50
      const critBonus = perc(CRITICAL_DAMAGE_MOD_150 - 1)
      const critTotal = perc(CRITICAL_DAMAGE_MOD_150)
      const katanaBonus = perc(ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE)
      const katanaCrit = perc(CRITICAL_DAMAGE_MOD_150 + ItemAbilityData.CORRUPTED_KATANA_BONUS_DAMAGE)
      const katanaIcon = `<img class="inline-mechanic-icon" src="/assets/ui/game/items/CorruptedKatana.png" alt="Corrupted Katana" />`
      /** The haste curve bottoms out rather than reaching zero, so a huge value reads the floor off it. */
      const minCooldown = perc(calculateCooldownReduction(Number.MAX_SAFE_INTEGER))
      const attackInterval = sec(BASE_ATTACK_TIME)
      const slowestAttack = sec(BASE_ATTACK_TIME / MIN_ATTACK_SPEED)
      const regenAtLevel1 = fixed(calculateRealHealthRegen(1, 1), 2)
      const regenAtMaxLevel = fixed(calculateRealHealthRegen(1, MAX_LEVEL), 2)
      const resistanceChart = chartSlot(MechanicChartId.RESISTANCES)
      const healthRegenChart = chartSlot(MechanicChartId.HEALTH_REGEN)

      return {
        en: `<h2>Armor and magic defence</h2><b>Armor</b> reduces <c:physical>physical damage</c:physical>. <b>Magic defence</b> reduces <c:magical>magical damage</c:magical>. Both use the same curve: higher stats reduce more damage, but each extra point adds less percentage reduction.<br/><br/><b>Damage reduced = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, where <b>R</b> is armor or magic defence.<ul><li><b>${lowArmor} resistance:</b> <c:bonus>${resist(lowArmor)}% less damage</c:bonus>.</li><li><b>${midArmor} resistance:</b> <c:bonus>${resist(midArmor)}% less damage</c:bonus>.</li><li><c:pure>Pure damage</c:pure> ignores both.</li></ul>${resistanceChart}<h2>Ability haste</h2>Ability haste shortens cooldowns.<br/><br/><b>Cooldown = base × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, where <b>H</b> is ability haste.<ul><li><b>${lowHaste} haste:</b> <c:bonus>${haste(lowHaste)}% shorter cooldowns</c:bonus>.</li><li><b>${midHaste} haste:</b> <c:bonus>${haste(midHaste)}% shorter cooldowns</c:bonus>.</li></ul>More haste keeps helping, but a cooldown never drops below <b>${minCooldown}%</b> of its base.<h2>Offence</h2><ul><li><b>Attack speed:</b> how often you attack. <b>Time between attacks = ${attackInterval}s ÷ attack speed</b>, and attack speed cannot fall below <b>${MIN_ATTACK_SPEED}</b>, or <b>${slowestAttack}s</b> per attack.</li><li><b>Critical hits:</b> deal <c:bonus>+${critBonus}% damage</c:bonus>, or <c:bonus>${critTotal}% of normal damage</c:bonus>.<br/>${katanaIcon} <b>Corrupted Katana</b> adds <c:bonus>${katanaBonus} percentage points</c:bonus>, raising critical hits to <c:bonus>${katanaCrit}% of normal damage</c:bonus>.</li><li><c:lifesteal>Lifesteal:</c:lifesteal> restores that share of the <c:physical>physical damage</c:physical> you deal. Only <c:bonus>a quarter</c:bonus> of it applies against minions and other non-heroes, and neither damage to buildings nor item effects heal you.</li></ul><h2>Survivability</h2><ul><li><c:health>Health:</c:health> how much damage you survive. Every hero gains more of it each level - see their growth in the <b>Heroes</b> tab.</li><li><b>Health regeneration:</b> health restored every second while you are alive. It scales with your level: <b>× ${regenAtLevel1}</b> at level 1, up to <b>× ${regenAtMaxLevel}</b> at level ${MAX_LEVEL}.</li><li><b>Health restoration:</b> health a heal gives back at once - from an ability, an item, the Healing Rune or standing in your own <b>Base</b>. It does not scale with your level, anything past your maximum health is wasted, and <c:magical>Grievous Wounds</c:magical> cuts it or removes it entirely.</li><li><b>Shield:</b> a pool that absorbs damage before your health does. Its size is fixed when the shield is applied, so anything that changes shield strength only counts at that moment.</li><li><b>Tenacity:</b> shortens crowd control duration applied to you by a percentage.</li></ul>${healthRegenChart}<h2>Movement speed</h2>How fast you run. Slows and speed boosts multiply rather than add up, and no hero moves faster than <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        ru: `<h2>Броня и магическая защита</h2><b>Броня</b> снижает <c:physical>физический урон</c:physical>. <b>Магическая защита</b> снижает <c:magical>магический урон</c:magical>. Обе работают по одной кривой: чем выше значение, тем больше снижение, но каждая следующая единица добавляет всё меньше.<br/><br/><b>Снижение урона = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, где <b>R</b> — броня или магическая защита.<ul><li><b>${lowArmor} сопротивления:</b> <c:bonus>на ${resist(lowArmor)}% меньше урона</c:bonus>.</li><li><b>${midArmor} сопротивления:</b> <c:bonus>на ${resist(midArmor)}% меньше урона</c:bonus>.</li><li><c:pure>Чистый урон</c:pure> игнорирует и то, и другое.</li></ul>${resistanceChart}<h2>Ускорение способностей</h2>Ускорение способностей сокращает перезарядки.<br/><br/><b>Перезарядка = база × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, где <b>H</b> — ускорение способностей.<ul><li><b>${lowHaste} ускорения:</b> <c:bonus>перезарядки короче на ${haste(lowHaste)}%</c:bonus>.</li><li><b>${midHaste} ускорения:</b> <c:bonus>перезарядки короче на ${haste(midHaste)}%</c:bonus>.</li></ul>Ускорение помогает и дальше, но перезарядка никогда не опускается ниже <b>${minCooldown}%</b> от базовой.<h2>Атака</h2><ul><li><b>Скорость атаки:</b> как часто вы атакуете. <b>Время между атаками = ${attackInterval} с ÷ скорость атаки</b>, и скорость атаки не может опуститься ниже <b>${MIN_ATTACK_SPEED}</b> — это <b>${slowestAttack} с</b> на атаку.</li><li><b>Критический удар:</b> наносит <c:bonus>+${critBonus}% урона</c:bonus>, то есть <c:bonus>${critTotal}% обычного урона</c:bonus>.<br/>${katanaIcon} <b>Искажённая катана</b> добавляет <c:bonus>${katanaBonus} процентных пункта</c:bonus>, повышая критический удар до <c:bonus>${katanaCrit}% обычного урона</c:bonus>.</li><li><c:lifesteal>Вампиризм:</c:lifesteal> возвращает вам эту долю нанесённого <c:physical>физического урона</c:physical>. По миньонам и другим не-героям работает лишь <c:bonus>четверть</c:bonus>, а урон по строениям и эффекты предметов не лечат вовсе.</li></ul><h2>Живучесть</h2><ul><li><c:health>Здоровье:</c:health> сколько урона вы выдержите. Каждый герой получает его с каждым уровнем — рост смотрите на вкладке <b>Герои</b>.</li><li><b>Регенерация здоровья:</b> здоровье, восстанавливаемое каждую секунду, пока вы живы. Она растёт с уровнем: <b>× ${regenAtLevel1}</b> на 1 уровне и до <b>× ${regenAtMaxLevel}</b> на ${MAX_LEVEL}.</li><li><b>Восстановление здоровья:</b> здоровье, которое лечение возвращает сразу — способностью, предметом, руной Лечения или нахождением на своей <b>Базе</b>. Оно не растёт с уровнем, всё сверх максимума пропадает, а <c:magical>Тяжёлые раны</c:magical> уменьшают его или убирают полностью.</li><li><b>Щит:</b> запас, поглощающий урон раньше здоровья. Его размер фиксируется в момент наложения, поэтому эффекты силы щита важны только тогда.</li><li><b>Стойкость:</b> сокращает длительность применённого к вам контроля в процентах.</li></ul>${healthRegenChart}<h2>Скорость передвижения</h2>Как быстро вы бегаете. Замедления и ускорения перемножаются, а не складываются, и ни один герой не движется быстрее <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        cz: `<h2>Brnění a magická obrana</h2><b>Brnění</b> snižuje <c:physical>fyzické poškození</c:physical>. <b>Magická obrana</b> snižuje <c:magical>magické poškození</c:magical>. Obojí se řídí stejnou křivkou: vyšší hodnota ubere víc, ale každý další bod přidá menší procento.<br/><br/><b>Snížené poškození = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, kde <b>R</b> je brnění nebo magická obrana.<ul><li><b>${lowArmor} odolnosti:</b> <c:bonus>o ${resist(lowArmor)}% méně poškození</c:bonus>.</li><li><b>${midArmor} odolnosti:</b> <c:bonus>o ${resist(midArmor)}% méně poškození</c:bonus>.</li><li><c:pure>Čisté poškození</c:pure> ignoruje obojí.</li></ul>${resistanceChart}<h2>Zrychlení schopností</h2>Zrychlení schopností zkracuje přebíjení.<br/><br/><b>Přebíjení = základ × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, kde <b>H</b> je zrychlení schopností.<ul><li><b>${lowHaste} zrychlení:</b> <c:bonus>o ${haste(lowHaste)}% kratší přebíjení</c:bonus>.</li><li><b>${midHaste} zrychlení:</b> <c:bonus>o ${haste(midHaste)}% kratší přebíjení</c:bonus>.</li></ul>Další zrychlení pomáhá dál, ale přebíjení nikdy neklesne pod <b>${minCooldown}%</b> základní hodnoty.<h2>Útok</h2><ul><li><b>Rychlost útoku:</b> jak často útočíš. <b>Čas mezi útoky = ${attackInterval}s ÷ rychlost útoku</b> a rychlost útoku nemůže klesnout pod <b>${MIN_ATTACK_SPEED}</b>, tedy <b>${slowestAttack}s</b> na útok.</li><li><b>Kritický zásah:</b> způsobí <c:bonus>+${critBonus}% poškození</c:bonus>, tedy <c:bonus>${critTotal}% běžného poškození</c:bonus>.<br/>${katanaIcon} <b>Zvrácená Katana</b> přidá <c:bonus>${katanaBonus} procentních bodů</c:bonus> a zvedne kritický zásah na <c:bonus>${katanaCrit}% běžného poškození</c:bonus>.</li><li><c:lifesteal>Krádež života:</c:lifesteal> vrátí ti tento podíl <c:physical>fyzického poškození</c:physical>, které způsobíš. Proti jednotkám a dalším nehrdinům se uplatní jen <c:bonus>čtvrtina</c:bonus> a poškození budov ani efekty předmětů tě neléčí.</li></ul><h2>Výdrž</h2><ul><li><c:health>Životy:</c:health> kolik poškození přežiješ. Každý hrdina jich s každou úrovní získává víc – růst najdeš v záložce <b>Hrdinové</b>.</li><li><b>Regenerace životů:</b> životy obnovené každou sekundu, dokud jsi naživu. Roste s úrovní: <b>× ${regenAtLevel1}</b> na 1. úrovni až <b>× ${regenAtMaxLevel}</b> na ${MAX_LEVEL}.</li><li><b>Obnova životů:</b> životy, které ti léčení vrátí naráz – schopností, předmětem, runou Léčení nebo stáním na vlastní <b>Základně</b>. Neroste s úrovní, cokoli nad maximum přijde vniveč a <c:magical>Hluboké rány</c:magical> ji sníží nebo úplně vypnou.</li><li><b>Štít:</b> zásoba, která pohltí poškození dřív než tvé životy. Jeho velikost se určí při seslání, takže cokoli mění sílu štítu se počítá jen v ten okamžik.</li><li><b>Houževnatost:</b> procentuálně zkracuje délku ovládání použitého na tebe.</li></ul>${healthRegenChart}<h2>Rychlost pohybu</h2>Jak rychle běháš. Zpomalení a zrychlení se násobí, nesčítají, a žádný hrdina se nepohybuje rychleji než <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        br: `<h2>Armadura e defesa mágica</h2><b>Armadura</b> reduz <c:physical>dano físico</c:physical>. <b>Defesa mágica</b> reduz <c:magical>dano mágico</c:magical>. As duas usam a mesma curva: quanto maior o atributo, maior a redução, mas cada ponto extra rende menos.<br/><br/><b>Dano reduzido = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, onde <b>R</b> é armadura ou defesa mágica.<ul><li><b>${lowArmor} de resistência:</b> <c:bonus>${resist(lowArmor)}% menos dano</c:bonus>.</li><li><b>${midArmor} de resistência:</b> <c:bonus>${resist(midArmor)}% menos dano</c:bonus>.</li><li><c:pure>Dano puro</c:pure> ignora ambos.</li></ul>${resistanceChart}<h2>Aceleração de habilidade</h2>A aceleração de habilidade encurta as recargas.<br/><br/><b>Recarga = base × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, onde <b>H</b> é a aceleração de habilidade.<ul><li><b>${lowHaste} de aceleração:</b> <c:bonus>recargas ${haste(lowHaste)}% mais curtas</c:bonus>.</li><li><b>${midHaste} de aceleração:</b> <c:bonus>recargas ${haste(midHaste)}% mais curtas</c:bonus>.</li></ul>Mais aceleração continua ajudando, mas uma recarga nunca cai abaixo de <b>${minCooldown}%</b> da base.<h2>Ataque</h2><ul><li><b>Velocidade de ataque:</b> com que frequência você ataca. <b>Tempo entre ataques = ${attackInterval}s ÷ velocidade de ataque</b>, e a velocidade de ataque não pode ficar abaixo de <b>${MIN_ATTACK_SPEED}</b>, ou <b>${slowestAttack}s</b> por ataque.</li><li><b>Acertos críticos:</b> causam <c:bonus>+${critBonus}% de dano</c:bonus>, ou <c:bonus>${critTotal}% do dano normal</c:bonus>.<br/>${katanaIcon} <b>Katana Corrompida</b> adiciona <c:bonus>${katanaBonus} pontos percentuais</c:bonus>, elevando os críticos a <c:bonus>${katanaCrit}% do dano normal</c:bonus>.</li><li><c:lifesteal>Roubo de vida:</c:lifesteal> devolve essa fração do <c:physical>dano físico</c:physical> que você causa. Contra lacaios e outros não-heróis vale apenas <c:bonus>um quarto</c:bonus>, e nem dano em construções nem efeitos de item curam você.</li></ul><h2>Sobrevivência</h2><ul><li><c:health>Vida:</c:health> quanto dano você aguenta. Todo herói ganha mais a cada nível - veja o crescimento na aba <b>Heróis</b>.</li><li><b>Regeneração de vida:</b> vida restaurada a cada segundo enquanto você está vivo. Escala com o nível: <b>× ${regenAtLevel1}</b> no nível 1, até <b>× ${regenAtMaxLevel}</b> no nível ${MAX_LEVEL}.</li><li><b>Restauração de vida:</b> a vida que uma cura devolve de uma vez - por habilidade, item, Runa de Cura ou por estar na sua própria <b>Base</b>. Não escala com o nível, tudo acima da vida máxima é desperdiçado e <c:magical>Feridas Graves</c:magical> reduz ou anula a cura.</li><li><b>Escudo:</b> uma reserva que absorve dano antes da sua vida. O tamanho é fixado quando o escudo é aplicado, então o que altera a força do escudo só conta naquele momento.</li><li><b>Tenacidade:</b> encurta a duração do controle de grupo aplicado em você, em porcentagem.</li></ul>${healthRegenChart}<h2>Velocidade de movimento</h2>Quão rápido você corre. Lentidões e acelerações se multiplicam em vez de somar, e nenhum herói se move mais rápido que <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        fr: `<h2>Armure et défense magique</h2><b>L'armure</b> réduit les <c:physical>dégâts physiques</c:physical>. La <b>défense magique</b> réduit les <c:magical>dégâts magiques</c:magical>. Les deux suivent la même courbe : plus la valeur est haute, plus la réduction est forte, mais chaque point supplémentaire rapporte moins.<br/><br/><b>Dégâts réduits = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, où <b>R</b> est l'armure ou la défense magique.<ul><li><b>${lowArmor} de résistance :</b> <c:bonus>${resist(lowArmor)}% de dégâts en moins</c:bonus>.</li><li><b>${midArmor} de résistance :</b> <c:bonus>${resist(midArmor)}% de dégâts en moins</c:bonus>.</li><li>Les <c:pure>dégâts purs</c:pure> ignorent les deux.</li></ul>${resistanceChart}<h2>Accélération de compétences</h2>L'accélération de compétences raccourcit les recharges.<br/><br/><b>Recharge = base × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, où <b>H</b> est l'accélération de compétences.<ul><li><b>${lowHaste} d'accélération :</b> <c:bonus>recharges ${haste(lowHaste)}% plus courtes</c:bonus>.</li><li><b>${midHaste} d'accélération :</b> <c:bonus>recharges ${haste(midHaste)}% plus courtes</c:bonus>.</li></ul>Plus d'accélération aide toujours, mais une recharge ne descend jamais sous <b>${minCooldown}%</b> de sa valeur de base.<h2>Attaque</h2><ul><li><b>Vitesse d'attaque :</b> la fréquence de vos attaques. <b>Temps entre deux attaques = ${attackInterval}s ÷ vitesse d'attaque</b>, et la vitesse d'attaque ne peut pas descendre sous <b>${MIN_ATTACK_SPEED}</b>, soit <b>${slowestAttack}s</b> par attaque.</li><li><b>Coups critiques :</b> infligent <c:bonus>+${critBonus}% de dégâts</c:bonus>, soit <c:bonus>${critTotal}% des dégâts normaux</c:bonus>.<br/>${katanaIcon} <b>Katana corrompu</b> ajoute <c:bonus>${katanaBonus} points de pourcentage</c:bonus> et porte les critiques à <c:bonus>${katanaCrit}% des dégâts normaux</c:bonus>.</li><li><c:lifesteal>Vol de vie :</c:lifesteal> vous rend cette part des <c:physical>dégâts physiques</c:physical> infligés. Seul <c:bonus>un quart</c:bonus> s'applique contre les sbires et les autres non-héros, et ni les dégâts aux bâtiments ni les effets d'objet ne vous soignent.</li></ul><h2>Survie</h2><ul><li><c:health>Points de vie :</c:health> les dégâts que vous encaissez avant de mourir. Chaque héros en gagne à chaque niveau - voyez leur progression dans l'onglet <b>Héros</b>.</li><li><b>Régénération de vie :</b> les points de vie rendus chaque seconde tant que vous êtes en vie. Elle évolue avec votre niveau : <b>× ${regenAtLevel1}</b> au niveau 1, jusqu'à <b>× ${regenAtMaxLevel}</b> au niveau ${MAX_LEVEL}.</li><li><b>Restauration de vie :</b> les points de vie qu'un soin rend d'un coup - une compétence, un objet, la rune de Soin ou le fait de rester dans votre <b>Base</b>. Elle n'évolue pas avec votre niveau, tout ce qui dépasse vos points de vie maximum est perdu, et les <c:magical>Blessures graves</c:magical> la réduisent ou l'annulent.</li><li><b>Bouclier :</b> une réserve qui absorbe les dégâts avant vos points de vie. Sa taille est figée au moment où le bouclier est appliqué : ce qui modifie la puissance des boucliers ne compte qu'à cet instant.</li><li><b>Ténacité :</b> raccourcit d'un pourcentage la durée du contrôle qui vous est appliqué.</li></ul>${healthRegenChart}<h2>Vitesse de déplacement</h2>Votre vitesse de course. Les ralentissements et les accélérations se multiplient au lieu de s'additionner, et aucun héros ne dépasse <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        zh: `<h2>護甲與魔法抗性</h2><b>護甲</b>減免<c:physical>物理傷害</c:physical>，<b>魔法抗性</b>減免<c:magical>魔法傷害</c:magical>。兩者使用同一條曲線：數值越高減免越多，但每多一點所增加的百分比越少。<br/><br/><b>減免傷害 =（${RESISTANCE_CALCULATION_COEF} × R）÷（1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R）</b>，其中 <b>R</b> 為護甲或魔法抗性。<ul><li><b>${lowArmor} 點抗性：</b><c:bonus>減免 ${resist(lowArmor)}% 傷害</c:bonus>。</li><li><b>${midArmor} 點抗性：</b><c:bonus>減免 ${resist(midArmor)}% 傷害</c:bonus>。</li><li><c:pure>真實傷害</c:pure>無視兩者。</li></ul>${resistanceChart}<h2>技能急速</h2>技能急速縮短冷卻時間。<br/><br/><b>冷卻 = 基礎 ×（1 -（${COOLDOWN_REDUCTION_CALCULATION_COEF} × H）÷（1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H））</b>，其中 <b>H</b> 為技能急速。<ul><li><b>${lowHaste} 點急速：</b><c:bonus>冷卻縮短 ${haste(lowHaste)}%</c:bonus>。</li><li><b>${midHaste} 點急速：</b><c:bonus>冷卻縮短 ${haste(midHaste)}%</c:bonus>。</li></ul>急速越高仍然持續有效，但冷卻永遠不會低於基礎值的 <b>${minCooldown}%</b>。<h2>攻擊</h2><ul><li><b>攻擊速度：</b>決定你多久攻擊一次。<b>攻擊間隔 = ${attackInterval} 秒 ÷ 攻擊速度</b>，且攻擊速度不會低於 <b>${MIN_ATTACK_SPEED}</b>，即每次攻擊 <b>${slowestAttack} 秒</b>。</li><li><b>暴擊：</b>造成 <c:bonus>+${critBonus}% 傷害</c:bonus>，即<c:bonus>普通傷害的 ${critTotal}%</c:bonus>。<br/>${katanaIcon} <b>腐化武士刀</b>再增加 <c:bonus>${katanaBonus} 個百分點</c:bonus>，使暴擊提升至<c:bonus>普通傷害的 ${katanaCrit}%</c:bonus>。</li><li><c:lifesteal>吸血：</c:lifesteal>依比例將你造成的<c:physical>物理傷害</c:physical>轉化為治療。對小兵與其他非英雄單位只有<c:bonus>四分之一</c:bonus>的效果，對建築造成的傷害與裝備效果則不會回復生命。</li></ul><h2>生存能力</h2><ul><li><c:health>生命值：</c:health>你能承受多少傷害。每位英雄每升一級都會增加，成長數值可在<b>英雄</b>分頁查看。</li><li><b>生命回復：</b>存活時每秒回復的生命值，並隨等級成長：1 級為 <b>× ${regenAtLevel1}</b>，${MAX_LEVEL} 級可達 <b>× ${regenAtMaxLevel}</b>。</li><li><b>生命回復量：</b>治療一次性回復的生命值，來自技能、裝備、治療符文或待在己方<b>基地</b>。它不隨等級成長，超過生命上限的部分會浪費，且<c:magical>重傷</c:magical>會降低甚至完全消除治療效果。</li><li><b>護盾：</b>在生命值之前吸收傷害的額外量。其數值在施加當下即固定，因此改變護盾強度的效果只在那一刻生效。</li><li><b>韌性：</b>依百分比縮短施加於你的控制效果持續時間。</li></ul>${healthRegenChart}<h2>移動速度</h2>你的跑動速度。減速與加速為相乘而非相加，且任何英雄都不會超過 <b>${LIMIT_MOVEMENT_SPEED}</b>。`,
        vi: `<h2>Giáp và kháng phép</h2><b>Giáp</b> giảm <c:physical>sát thương vật lý</c:physical>. <b>Kháng phép</b> giảm <c:magical>sát thương phép</c:magical>. Cả hai dùng chung một đường cong: chỉ số càng cao giảm càng nhiều, nhưng mỗi điểm thêm vào lại đóng góp ít hơn.<br/><br/><b>Sát thương giảm = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, với <b>R</b> là giáp hoặc kháng phép.<ul><li><b>${lowArmor} kháng:</b> <c:bonus>giảm ${resist(lowArmor)}% sát thương</c:bonus>.</li><li><b>${midArmor} kháng:</b> <c:bonus>giảm ${resist(midArmor)}% sát thương</c:bonus>.</li><li><c:pure>Sát thương chuẩn</c:pure> bỏ qua cả hai.</li></ul>${resistanceChart}<h2>Tốc biến kỹ năng</h2>Tốc biến kỹ năng rút ngắn thời gian hồi chiêu.<br/><br/><b>Hồi chiêu = gốc × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, với <b>H</b> là tốc biến kỹ năng.<ul><li><b>${lowHaste} tốc biến:</b> <c:bonus>hồi chiêu ngắn hơn ${haste(lowHaste)}%</c:bonus>.</li><li><b>${midHaste} tốc biến:</b> <c:bonus>hồi chiêu ngắn hơn ${haste(midHaste)}%</c:bonus>.</li></ul>Càng nhiều tốc biến vẫn càng có lợi, nhưng hồi chiêu không bao giờ thấp hơn <b>${minCooldown}%</b> giá trị gốc.<h2>Tấn công</h2><ul><li><b>Tốc độ đánh:</b> bạn đánh nhanh đến đâu. <b>Thời gian giữa hai đòn = ${attackInterval} giây ÷ tốc độ đánh</b>, và tốc độ đánh không thể thấp hơn <b>${MIN_ATTACK_SPEED}</b>, tức <b>${slowestAttack} giây</b> mỗi đòn.</li><li><b>Chí mạng:</b> gây <c:bonus>+${critBonus}% sát thương</c:bonus>, tức <c:bonus>${critTotal}% sát thương thường</c:bonus>.<br/>${katanaIcon} <b>Katana Tà Đạo</b> cộng thêm <c:bonus>${katanaBonus} điểm phần trăm</c:bonus>, nâng chí mạng lên <c:bonus>${katanaCrit}% sát thương thường</c:bonus>.</li><li><c:lifesteal>Hút máu:</c:lifesteal> hồi lại cho bạn phần đó của <c:physical>sát thương vật lý</c:physical> bạn gây ra. Với lính và các đơn vị không phải tướng chỉ còn <c:bonus>một phần tư</c:bonus>, còn sát thương lên công trình và hiệu ứng trang bị thì không hồi máu.</li></ul><h2>Khả năng sinh tồn</h2><ul><li><c:health>Máu:</c:health> bạn chịu được bao nhiêu sát thương. Mỗi tướng đều tăng máu theo từng cấp - xem mức tăng ở thẻ <b>Tướng</b>.</li><li><b>Hồi máu:</b> lượng máu hồi mỗi giây khi bạn còn sống, tăng theo cấp độ: <b>× ${regenAtLevel1}</b> ở cấp 1 và tới <b>× ${regenAtMaxLevel}</b> ở cấp ${MAX_LEVEL}.</li><li><b>Hồi phục máu:</b> lượng máu một hiệu ứng hồi trả lại ngay lập tức - từ kỹ năng, trang bị, Bùa Hồi Máu hoặc khi đứng trong <b>Căn Cứ</b> của bạn. Nó không tăng theo cấp độ, phần vượt quá máu tối đa bị lãng phí, và <c:magical>Vết Thương Sâu</c:magical> làm giảm hoặc vô hiệu hoàn toàn.</li><li><b>Khiên:</b> lớp đệm hấp thụ sát thương trước máu. Giá trị của nó được chốt ngay khi khiên được tạo, nên mọi hiệu ứng thay đổi độ mạnh của khiên chỉ tính vào thời điểm đó.</li><li><b>Kiên cường:</b> rút ngắn thời gian hiệu ứng khống chế lên bạn theo phần trăm.</li></ul>${healthRegenChart}<h2>Tốc độ di chuyển</h2>Bạn chạy nhanh đến đâu. Làm chậm và tăng tốc nhân với nhau chứ không cộng dồn, và không tướng nào di chuyển nhanh hơn <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        id: `<h2>Armor dan pertahanan sihir</h2><b>Armor</b> mengurangi <c:physical>damage fisik</c:physical>. <b>Pertahanan sihir</b> mengurangi <c:magical>damage sihir</c:magical>. Keduanya memakai kurva yang sama: makin tinggi statnya makin besar pengurangannya, tetapi tiap poin tambahan memberi persentase yang lebih kecil.<br/><br/><b>Damage berkurang = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, dengan <b>R</b> adalah armor atau pertahanan sihir.<ul><li><b>${lowArmor} resistensi:</b> <c:bonus>${resist(lowArmor)}% damage lebih kecil</c:bonus>.</li><li><b>${midArmor} resistensi:</b> <c:bonus>${resist(midArmor)}% damage lebih kecil</c:bonus>.</li><li><c:pure>Damage murni</c:pure> mengabaikan keduanya.</li></ul>${resistanceChart}<h2>Ability haste</h2>Ability haste memperpendek cooldown.<br/><br/><b>Cooldown = dasar × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, dengan <b>H</b> adalah ability haste.<ul><li><b>${lowHaste} haste:</b> <c:bonus>cooldown ${haste(lowHaste)}% lebih singkat</c:bonus>.</li><li><b>${midHaste} haste:</b> <c:bonus>cooldown ${haste(midHaste)}% lebih singkat</c:bonus>.</li></ul>Haste tambahan tetap membantu, tetapi cooldown tidak pernah turun di bawah <b>${minCooldown}%</b> dari nilai dasarnya.<h2>Serangan</h2><ul><li><b>Kecepatan serang:</b> seberapa sering kamu menyerang. <b>Jeda antar serangan = ${attackInterval} detik ÷ kecepatan serang</b>, dan kecepatan serang tidak bisa turun di bawah <b>${MIN_ATTACK_SPEED}</b>, yaitu <b>${slowestAttack} detik</b> per serangan.</li><li><b>Critical hit:</b> memberi <c:bonus>+${critBonus}% damage</c:bonus>, atau <c:bonus>${critTotal}% dari damage normal</c:bonus>.<br/>${katanaIcon} <b>Katana Tercemar</b> menambah <c:bonus>${katanaBonus} poin persen</c:bonus>, menaikkan critical hit menjadi <c:bonus>${katanaCrit}% dari damage normal</c:bonus>.</li><li><c:lifesteal>Lifesteal:</c:lifesteal> mengembalikan sebagian <c:physical>damage fisik</c:physical> yang kamu berikan sebagai nyawa. Terhadap minion dan unit non-hero lain hanya <c:bonus>seperempatnya</c:bonus> yang berlaku, sedangkan damage ke bangunan dan efek item tidak menyembuhkan sama sekali.</li></ul><h2>Daya tahan</h2><ul><li><c:health>Nyawa:</c:health> seberapa banyak damage yang bisa kamu tahan. Setiap hero mendapat tambahan tiap level - lihat pertumbuhannya di tab <b>Hero</b>.</li><li><b>Regenerasi nyawa:</b> nyawa yang pulih tiap detik selama kamu hidup. Nilainya naik bersama level: <b>× ${regenAtLevel1}</b> di level 1 hingga <b>× ${regenAtMaxLevel}</b> di level ${MAX_LEVEL}.</li><li><b>Pemulihan nyawa:</b> nyawa yang dikembalikan sekaligus oleh penyembuhan - dari skill, item, Rune Penyembuhan, atau saat berada di <b>Markas</b> sendiri. Nilainya tidak naik bersama level, kelebihan di atas nyawa maksimal terbuang, dan <c:magical>Luka Parah</c:magical> menguranginya atau menghilangkannya sepenuhnya.</li><li><b>Shield:</b> cadangan yang menyerap damage sebelum nyawamu. Besarnya dikunci saat shield dipasang, jadi apa pun yang mengubah kekuatan shield hanya dihitung pada saat itu.</li><li><b>Tenacity:</b> memperpendek durasi crowd control yang mengenaimu dalam persen.</li></ul>${healthRegenChart}<h2>Kecepatan gerak</h2>Seberapa cepat kamu berlari. Slow dan percepatan saling dikalikan, bukan dijumlahkan, dan tidak ada hero yang bergerak lebih cepat dari <b>${LIMIT_MOVEMENT_SPEED}</b>.`,
        kr: `<h2>방어력과 마법 저항</h2><b>방어력</b>은 <c:physical>물리 피해</c:physical>를, <b>마법 저항</b>은 <c:magical>마법 피해</c:magical>를 줄입니다. 둘은 같은 곡선을 따릅니다. 수치가 높을수록 더 많이 줄지만, 한 점당 늘어나는 감소율은 점점 작아집니다.<br/><br/><b>피해 감소 = (${RESISTANCE_CALCULATION_COEF} × R) ÷ (1 + ${RESISTANCE_CALCULATION_COEF} × ${RESISTANCE_CALCULATION_DIVISOR} × R)</b>, 여기서 <b>R</b>은 방어력 또는 마법 저항입니다.<ul><li><b>저항 ${lowArmor}:</b> <c:bonus>피해 ${resist(lowArmor)}% 감소</c:bonus>.</li><li><b>저항 ${midArmor}:</b> <c:bonus>피해 ${resist(midArmor)}% 감소</c:bonus>.</li><li><c:pure>고정 피해</c:pure>는 둘 다 무시합니다.</li></ul>${resistanceChart}<h2>스킬 가속</h2>스킬 가속은 쿨다운을 줄입니다.<br/><br/><b>쿨다운 = 기본값 × (1 - (${COOLDOWN_REDUCTION_CALCULATION_COEF} × H) ÷ (1 + ${COOLDOWN_REDUCTION_CALCULATION_COEF} × H))</b>, 여기서 <b>H</b>는 스킬 가속입니다.<ul><li><b>가속 ${lowHaste}:</b> <c:bonus>쿨다운 ${haste(lowHaste)}% 감소</c:bonus>.</li><li><b>가속 ${midHaste}:</b> <c:bonus>쿨다운 ${haste(midHaste)}% 감소</c:bonus>.</li></ul>가속이 높아질수록 계속 이득이지만, 쿨다운은 기본값의 <b>${minCooldown}%</b> 아래로는 내려가지 않습니다.<h2>공격</h2><ul><li><b>공격 속도:</b> 얼마나 자주 공격하는지를 정합니다. <b>공격 간격 = ${attackInterval}초 ÷ 공격 속도</b>이며, 공격 속도는 <b>${MIN_ATTACK_SPEED}</b> 아래로 내려가지 않습니다. 즉 공격당 <b>${slowestAttack}초</b>입니다.</li><li><b>치명타:</b> <c:bonus>+${critBonus}%의 피해</c:bonus>, 즉 <c:bonus>일반 피해의 ${critTotal}%</c:bonus>를 입힙니다.<br/>${katanaIcon} <b>타락한 카타나</b>는 <c:bonus>${katanaBonus}%p</c:bonus>를 더해 치명타를 <c:bonus>일반 피해의 ${katanaCrit}%</c:bonus>까지 올립니다.</li><li><c:lifesteal>흡혈:</c:lifesteal> 입힌 <c:physical>물리 피해</c:physical>의 해당 비율만큼 체력을 회복합니다. 미니언을 비롯한 챔피언이 아닌 대상에게는 <c:bonus>4분의 1</c:bonus>만 적용되며, 건물에 준 피해와 아이템 효과로는 회복되지 않습니다.</li></ul><h2>생존력</h2><ul><li><c:health>체력:</c:health> 얼마나 많은 피해를 버틸 수 있는지를 뜻합니다. 모든 챔피언은 레벨마다 체력이 늘어나며, 성장치는 <b>영웅</b> 탭에서 볼 수 있습니다.</li><li><b>체력 재생:</b> 살아 있는 동안 매초 회복되는 체력이며 레벨에 따라 커집니다. 1레벨에는 <b>× ${regenAtLevel1}</b>, ${MAX_LEVEL}레벨에는 <b>× ${regenAtMaxLevel}</b>입니다.</li><li><b>체력 회복:</b> 스킬, 아이템, 치유 룬, 아군 <b>기지</b>에 서 있을 때처럼 한 번에 돌려받는 체력입니다. 레벨에 따라 커지지 않고, 최대 체력을 넘는 만큼은 버려지며, <c:magical>깊은 상처</c:magical>는 이를 줄이거나 완전히 막습니다.</li><li><b>보호막:</b> 체력보다 먼저 피해를 흡수하는 수치입니다. 크기는 보호막이 적용되는 순간 확정되므로, 보호막 강도를 바꾸는 효과는 그 시점에만 의미가 있습니다.</li><li><b>강인함:</b> 자신에게 걸린 군중 제어 지속시간을 퍼센트만큼 줄입니다.</li></ul>${healthRegenChart}<h2>이동 속도</h2>얼마나 빨리 달리는지를 뜻합니다. 둔화와 가속은 더해지지 않고 곱해지며, 어떤 챔피언도 <b>${LIMIT_MOVEMENT_SPEED}</b>보다 빠르게 움직일 수 없습니다.`,
      }
    }

    case MechanicId.TALENTS: {
      const tier1 = TALENT_TIER1_REQUIRED_LEVEL
      const tier1Second = TALENT_TIER1_SECOND_POINT_LEVEL
      const tier2 = TALENT_TIER2_REQUIRED_LEVEL
      const tier2Second = TALENT_TIER2_SECOND_POINT_LEVEL

      return {
        en: `<b>Talents</b> are hero-specific upgrades chosen during a match. Each tier has two options.<ul><li><b>Tier 1:</b> choose one at <c:bonus>level ${tier1}</c:bonus>. Take the other at <c:bonus>level ${tier1Second}</c:bonus>.</li><li><b>Tier 2:</b> choose one at <c:bonus>level ${tier2}</c:bonus>. Take the other at <c:bonus>level ${tier2Second}</c:bonus>.</li></ul>Pick the option you need most first. See each hero's talents in the <b>Heroes</b> tab.`,
        ru: `Таланты — это улучшения конкретного героя, которые выбираются по ходу матча; их два уровня, в каждом левый и правый вариант.<br/><br/><b>Уровень 1</b> открывается на <b>${tier1}-м уровне</b>, а второе очко на <b>${tier1Second}-м</b> позволяет взять и вторую сторону.<br/><b>Уровень 2</b> открывается на <b>${tier2}-м уровне</b>, второе очко — на <b>${tier2Second}-м</b>.<br/><br/>Поскольку второе очко приходит поздно, первый выбор в каждом уровне — это настоящий выбор, а не порядок действий: берите тот, который отвечает текущей игре.<br/><br/>Таланты каждого героя с точными числами перечислены на вкладке <b>Герои</b>.`,
        cz: `Talenty jsou vylepšení konkrétního hrdiny, která si vybíráš během zápasu, ve dvou úrovních s levou a pravou možností.<br/><br/><b>Úroveň 1</b> se odemkne na <b>úrovni ${tier1}</b> a druhý bod na <b>úrovni ${tier1Second}</b> ti dovolí vzít i druhou stranu.<br/><b>Úroveň 2</b> se odemkne na <b>úrovni ${tier2}</b>, druhý bod na <b>úrovni ${tier2Second}</b>.<br/><br/>Protože druhý bod přijde pozdě, první volba v každé úrovni je skutečná volba, ne pořadí kroků – vezmi ten, který odpovídá hře, ve které skutečně jsi.<br/><br/>Talenty každého hrdiny i s přesnými čísly najdeš u daného hrdiny v záložce <b>Hrdinové</b>.`,
        br: `Talentos são melhorias específicas de cada herói escolhidas durante a partida, em dois níveis com uma opção à esquerda e outra à direita.<br/><br/>O <b>Nível 1</b> abre no <b>nível ${tier1}</b>, e um segundo ponto no <b>nível ${tier1Second}</b> permite pegar o outro lado também.<br/>O <b>Nível 2</b> abre no <b>nível ${tier2}</b>, com seu segundo ponto no <b>nível ${tier2Second}</b>.<br/><br/>Como o segundo ponto chega tarde, a primeira escolha em cada nível é uma decisão real, não uma ordem de operações - pegue a que responde ao jogo em que você realmente está.<br/><br/>Os talentos de cada herói, com números exatos, estão listados sob aquele herói na aba <b>Heróis</b>.`,
        fr: `Les talents sont des améliorations propres à chaque héros, choisies en cours de partie, réparties en deux paliers offrant chacun une option gauche et une option droite.<br/><br/>Le <b>palier 1</b> se débloque au <b>niveau ${tier1}</b>, et un second point au <b>niveau ${tier1Second}</b> permet de prendre aussi l'autre côté.<br/>Le <b>palier 2</b> se débloque au <b>niveau ${tier2}</b>, son second point au <b>niveau ${tier2Second}</b>.<br/><br/>Comme le second point arrive tard, le premier choix de chaque palier est un vrai choix et non un ordre d'exécution - prenez celui qui répond à la partie que vous jouez vraiment.<br/><br/>Les talents de chaque héros, avec leurs valeurs exactes, sont listés sous ce héros dans l'onglet <b>Héros</b>.`,
        zh: `天賦是在對局中選擇的英雄專屬強化，共兩層，每層各有左右兩個選項。<br/><br/><b>第一層</b>在 <b>${tier1} 級</b>解鎖，<b>${tier1Second} 級</b>獲得第二點後可同時取得另一側。<br/><b>第二層</b>在 <b>${tier2} 級</b>解鎖，第二點於 <b>${tier2Second} 級</b>獲得。<br/><br/>由於第二點來得較晚，每層的第一次選擇是真正的抉擇，而非先後順序——選擇最能應對當前局勢的那一個。<br/><br/>各英雄的天賦與確切數值，可在<b>英雄</b>分頁中該英雄底下查看。`,
        vi: `Thiên phú là các nâng cấp riêng của từng tướng mà bạn chọn giữa trận, chia thành hai bậc, mỗi bậc có một lựa chọn bên trái và một bên phải.<br/><br/><b>Bậc 1</b> mở ở <b>cấp ${tier1}</b>, và điểm thứ hai ở <b>cấp ${tier1Second}</b> cho phép bạn lấy luôn bên còn lại.<br/><b>Bậc 2</b> mở ở <b>cấp ${tier2}</b>, điểm thứ hai ở <b>cấp ${tier2Second}</b>.<br/><br/>Vì điểm thứ hai đến khá muộn, lựa chọn đầu tiên ở mỗi bậc là một quyết định thực sự chứ không phải thứ tự thao tác - hãy chọn thứ giải quyết được ván đấu bạn đang chơi.<br/><br/>Thiên phú của từng tướng cùng số liệu chính xác được liệt kê dưới tướng đó trong thẻ <b>Tướng</b>.`,
        id: `Talenta adalah peningkatan khusus tiap hero yang kamu pilih di tengah pertandingan, dalam dua tingkat dengan pilihan kiri dan kanan di masing-masingnya.<br/><br/><b>Tingkat 1</b> terbuka di <b>level ${tier1}</b>, dan poin kedua di <b>level ${tier1Second}</b> memungkinkanmu mengambil sisi satunya juga.<br/><b>Tingkat 2</b> terbuka di <b>level ${tier2}</b>, dengan poin keduanya di <b>level ${tier2Second}</b>.<br/><br/>Karena poin kedua datang terlambat, pilihan pertama di tiap tingkat adalah keputusan sungguhan, bukan sekadar urutan - ambil yang menjawab permainan yang benar-benar kamu hadapi.<br/><br/>Talenta tiap hero, lengkap dengan angkanya, tercantum di bawah hero tersebut pada tab <b>Hero</b>.`,
        kr: `특성은 경기 중에 고르는 챔피언별 강화로, 두 단계로 나뉘며 각 단계마다 왼쪽과 오른쪽 선택지가 있습니다.<br/><br/><b>1단계</b>는 <b>${tier1}레벨</b>에 열리고, <b>${tier1Second}레벨</b>에서 두 번째 포인트를 얻어 반대쪽도 함께 찍을 수 있습니다.<br/><b>2단계</b>는 <b>${tier2}레벨</b>에 열리며 두 번째 포인트는 <b>${tier2Second}레벨</b>입니다.<br/><br/>두 번째 포인트가 늦게 오기 때문에 각 단계의 첫 선택은 순서 문제가 아니라 진짜 선택입니다. 지금 치르고 있는 게임에 맞는 쪽을 고르세요.<br/><br/>각 챔피언의 특성과 정확한 수치는 <b>영웅</b> 탭의 해당 챔피언 아래에 정리되어 있습니다.`,
      }
    }

    case MechanicId.VISION: {
      const heroVision = HERO_LIGHT_CAST_DISTANCE
      const towerVision = TOWER_VISION_AND_ATTACK_RANGE
      const wardVision = ItemAbilityData.WARD_VISION
      const wardDuration = sec(ItemAbilityData.WARD_DURATION)
      const voidArmorDuration = sec(ItemAbilityData.VOID_ARMOR_DURATION)
      const voidSwordRadius = ItemAbilityData.VOID_SWORD_RADIUS
      const observerIcon = mechanicIcon('vision', 'observer_ward')
      const cloakIcon = mechanicIcon('vision', 'cloak_of_light')
      const voidArmorIcon = mechanicIcon('vision', 'void_armor')
      const voidSwordIcon = mechanicIcon('vision', 'void_sword')

      const bushClip = clipSlot(MechanicVideoLabel.BUSH)
      const wardClip = clipSlot(MechanicVideoLabel.WARD)
      const voidSwordClip = clipSlot(MechanicVideoLabel.VOID_SWORD)

      return {
        en: `Your team can only see enemies inside its <c:vision>vision</c:vision>.<ul><li><b>Your hero:</b> <c:vision>${heroVision} vision range</c:vision>.</li><li><b>Towers:</b> <c:vision>${towerVision} vision range</c:vision>.</li><li><b>Minions:</b> reveal the lane as they move.</li></ul><h2>Bushes</h2>Standing in a <b>bush</b> hides you from every enemy outside it, even inside their vision range. Your allies still see you.<ul><li>An enemy who steps into the same bush sees everyone inside it.</li><li>You are visible again the moment you leave.</li><li>Use bushes to break line of sight, wait for a fight, or escape a chase.</li></ul>${bushClip}<h2>Wards</h2>Place wards to watch an area while you are elsewhere. They are <b>consumables</b>, turn invisible shortly after placement, and can be destroyed when revealed.<ul><li>${observerIcon} <b>Observer Ward:</b> <c:vision>${wardVision} vision range</c:vision> for <b>${wardDuration}s</b>.</li></ul>${wardClip}<h2>Vision items</h2><ul><li>${cloakIcon} <b>Cloak of Light:</b> grants <c:vision>true sight</c:vision> while carried. Its active places a free observer ward.</li><li>${voidArmorIcon} <b>Void Armor:</b> its active grants <c:vision>invisibility</c:vision> for <b>${voidArmorDuration}s</b> and increases movement speed.</li><li>${voidSwordIcon} <b>Void Sword:</b> its active places a blade with <c:vision>${voidSwordRadius} vision range</c:vision> that buffs nearby allies.</li></ul>${voidSwordClip}<h2>Invisibility</h2><c:vision>Invisibility</c:vision> hides you from normal vision. <b>Towers and true sight still reveal you.</b>`,
        ru: `Вы видите только то, что освещает ваша команда. Всё за пределами этого просто не отрисовывается — враг, стоящий в темноте, невидим для вас, даже если его ничто не скрывает.<br/><br/>• Ваш герой даёт <c:vision>${heroVision} обзора</c:vision><br/>• Каждая башня освещает <c:vision>${towerVision}</c:vision> вокруг себя<br/>• Миньоны освещают линию по мере продвижения<h2>Кусты</h2>Стоя в <b>кустах</b>, вы скрыты от всех врагов снаружи, даже если находитесь в их радиусе обзора. Союзники видят вас всегда.<br/><br/>• Враг, зашедший в те же кусты, видит всех, кто в них стоит<br/>• Как только вы выходите, вы снова видны<br/>• Используйте кусты, чтобы разорвать линию видимости, дождаться боя или уйти от погони${bushClip}<h2>Варды</h2>Варды покупают обзор там, где вас нет. Оба расходуемые, становятся невидимыми вскоре после установки и могут быть убиты, если их заметят.<br/><br/>• ${observerIcon} <b>Наблюдательный вард</b> — следит за <c:vision>${wardVision}</c:vision> в течение <b>${wardDuration} с</b>${wardClip}<h2>Предметы, влияющие на обзор</h2>• ${cloakIcon} <b>Плащ света</b> — пассивно даёт постоянное <b>истинное зрение</b>, а активное умение бесплатно ставит наблюдательный вард. Лучший ответ невидимому врагу.<br/>• ${voidArmorIcon} <b>Броня пустоты</b> — активное умение делает вас <c:vision>невидимым</c:vision> на <b>${voidArmorDuration} с</b> и ускоряет, для захода или побега.<br/>• ${voidSwordIcon} <b>Меч пустоты</b> — активное умение втыкает клинок, который освещает <c:vision>${voidSwordRadius}</c:vision> вокруг себя и усиливает союзников рядом: обзор, который вы ставите прямо в бою.${voidSwordClip}<h2>Невидимость</h2><c:vision>Невидимость</c:vision> от руны или из набора героя скрывает вас от обычного обзора. Два исключения: <b>башни обнаруживают невидимых врагов в радиусе</b>, а <b>истинное зрение</b> видит сквозь неё в любом случае.`,
        cz: `Vidíš jen to, co tvůj tým osvítí. Cokoli mimo se prostě nevykreslí – nepřítel stojící ve tmě je pro tebe neviditelný, i když ho nic neskrývá.<br/><br/>• Tvůj hrdina nese <c:vision>${heroVision} výhledu</c:vision><br/>• Každá věž osvětluje <c:vision>${towerVision}</c:vision> kolem sebe<br/>• Tvé jednotky osvětlují linii, jak po ní jdou<h2>Keře</h2>Když stojíš v <b>keři</b>, nevidí tě žádný nepřítel venku, i když jsi v dosahu jeho výhledu. Spojenci tě vidí vždy.<br/><br/>• Nepřítel, který vstoupí do stejného keře, vidí všechny, kdo v něm stojí<br/>• Jakmile keř opustíš, jsi zase vidět<br/>• Keře využij k přerušení linie pohledu, čekání na boj nebo k útěku před pronásledováním${bushClip}<h2>Wardy</h2>Wardy ti koupí výhled tam, kde nejsi. Oba jsou spotřební, krátce po položení se zneviditelní a jde je zabít, jakmile je někdo odhalí.<br/><br/>• ${observerIcon} <b>Pozorovací ward</b> – sleduje <c:vision>${wardVision}</c:vision> po <b>${wardDuration}s</b>${wardClip}<h2>Předměty měnící výhled</h2>• ${cloakIcon} <b>Plášť světla</b> – pasivně nese trvalý <b>pravý zrak</b> a jeho aktivní schopnost položí ward zdarma. Nejsilnější odpověď na neviditelného nepřítele.<br/>• ${voidArmorIcon} <b>Brnění prázdnoty</b> – aktivní schopnost tě na <b>${voidArmorDuration}s</b> udělá <c:vision>neviditelným</c:vision> a zrychlí tě, na zahájení i útěk.<br/>• ${voidSwordIcon} <b>Meč prázdnoty</b> – aktivní schopnost zabodne čepel, která po dobu trvání osvětluje <c:vision>${voidSwordRadius}</c:vision> kolem sebe a posiluje spojence uvnitř: výhled, který pokládáš přímo v boji.${voidSwordClip}<h2>Neviditelnost</h2><c:vision>Neviditelnost</c:vision> z runy nebo z hrdinovy výbavy tě skryje před běžným výhledem. Dvě věci tě přesto vidí: <b>věže odhalují neviditelné nepřátele v dosahu</b> a <b>pravý zrak</b> ji prohlédne tak jako tak.`,
        br: `Você só enxerga o que seu time ilumina. Qualquer coisa fora disso simplesmente não é desenhada - um inimigo parado no escuro é invisível para você mesmo sem nada o escondendo.<br/><br/>• Seu herói carrega <c:vision>${heroVision} de visão</c:vision><br/>• Cada torre ilumina <c:vision>${towerVision}</c:vision> ao seu redor<br/>• Seus lacaios iluminam a rota enquanto avançam<h2>Arbustos</h2>Parado dentro de um <b>arbusto</b>, você fica escondido de todo inimigo fora dele, mesmo dentro do alcance de visão dele. Seus aliados continuam te vendo.<br/><br/>• Um inimigo que entra no mesmo arbusto vê todos que estão dentro<br/>• Você volta a ficar visível assim que sai<br/>• Use arbustos para quebrar a linha de visão, esperar uma luta ou escapar de uma perseguição${bushClip}<h2>Sentinelas</h2>Sentinelas compram visão onde você não está. Ambas são consumíveis, ficam invisíveis logo após serem colocadas e podem ser destruídas quando avistadas.<br/><br/>• ${observerIcon} <b>Sentinela Observadora</b> - vigia <c:vision>${wardVision}</c:vision> por <b>${wardDuration}s</b>${wardClip}<h2>Itens que mudam a visão</h2>• ${cloakIcon} <b>Manto de Luz</b> - carrega <b>visão verdadeira</b> permanente como passiva, e seu ativo coloca uma sentinela grátis. A resposta mais forte contra um inimigo invisível.<br/>• ${voidArmorIcon} <b>Armadura do Vazio</b> - o ativo te deixa <c:vision>invisível</c:vision> por <b>${voidArmorDuration}s</b> e te acelera, para engajar ou fugir.<br/>• ${voidSwordIcon} <b>Espada do Vazio</b> - o ativo finca uma lâmina que ilumina <c:vision>${voidSwordRadius}</c:vision> ao redor enquanto dura, fortalecendo aliados dentro dela: visão que você coloca no meio da luta.${voidSwordClip}<h2>Invisibilidade</h2><c:vision>Invisibilidade</c:vision>, da runa ou do kit de um herói, esconde você da visão normal. Duas coisas ainda te veem: <b>torres revelam inimigos invisíveis no alcance</b> e a <b>visão verdadeira</b> enxerga através dela.`,
        fr: `Vous ne voyez que ce que votre équipe éclaire. Tout le reste n'est simplement pas dessiné - un ennemi dans le noir vous est invisible même si rien ne le cache.<br/><br/>• Votre héros porte <c:vision>${heroVision} de vision</c:vision><br/>• Chaque tour éclaire <c:vision>${towerVision}</c:vision> autour d'elle<br/>• Vos sbires éclairent la voie au fil de leur avancée<h2>Buissons</h2>Dans un <b>buisson</b>, vous êtes caché de tous les ennemis à l'extérieur, même à portée de leur vision. Vos alliés vous voient toujours.<br/><br/>• Un ennemi qui entre dans le même buisson voit tous ceux qui s'y trouvent<br/>• Vous redevenez visible dès que vous en sortez<br/>• Utilisez les buissons pour briser la ligne de vue, attendre un combat ou échapper à une poursuite${bushClip}<h2>Balises</h2>Les balises achètent de la vision là où vous n'êtes pas. Toutes deux sont des consommables, deviennent invisibles peu après la pose et peuvent être détruites une fois repérées.<br/><br/>• ${observerIcon} <b>Balise d'observation</b> - surveille <c:vision>${wardVision}</c:vision> pendant <b>${wardDuration}s</b>${wardClip}<h2>Objets qui changent la vision</h2>• ${cloakIcon} <b>Cape de lumière</b> - porte la <b>vision réelle</b> permanente en passif, et son actif pose une balise gratuite. La meilleure réponse à un ennemi invisible.<br/>• ${voidArmorIcon} <b>Armure du vide</b> - son actif vous rend <c:vision>invisible</c:vision> pendant <b>${voidArmorDuration}s</b> et vous accélère, pour engager ou fuir.<br/>• ${voidSwordIcon} <b>Épée du vide</b> - son actif plante une lame qui éclaire <c:vision>${voidSwordRadius}</c:vision> autour d'elle et renforce les alliés à l'intérieur : de la vision que vous posez en plein combat.${voidSwordClip}<h2>Invisibilité</h2><c:vision>L'invisibilité</c:vision>, de la rune ou du kit d'un héros, vous cache de la vision normale. Deux choses vous voient quand même : <b>les tours révèlent les ennemis invisibles à portée</b>, et la <b>vision réelle</b> la traverse.`,
        zh: `你只能看到己方點亮的區域。範圍之外的東西根本不會被繪製——站在黑暗中的敵人對你而言是隱形的，即使並沒有任何東西遮蔽他。<br/><br/>• 你的英雄擁有 <c:vision>${heroVision} 視野</c:vision><br/>• 每座防禦塔照亮周圍 <c:vision>${towerVision}</c:vision><br/>• 你的小兵在推進時會照亮兵線<h2>草叢</h2>站在<b>草叢</b>裡時，所有在外面的敵人都看不見你，即使你在他們的視野範圍內。隊友始終能看見你。<br/><br/>• 敵人踏進同一片草叢後，就能看見裡面的所有人<br/>• 一離開草叢，你就會重新現身<br/>• 利用草叢切斷視線、等待開戰或擺脫追擊${bushClip}<h2>守衛</h2>守衛能在你不在的地方買到視野。兩者皆為消耗品，放置後不久即隱形，一旦被發現便可被摧毀。<br/><br/>• ${observerIcon} <b>偵查守衛</b>——監視 <c:vision>${wardVision}</c:vision>，持續 <b>${wardDuration} 秒</b>${wardClip}<h2>改變視野的裝備</h2>• ${cloakIcon} <b>光明斗篷</b>——被動提供永久<b>真實視野</b>，主動則免費放置一個偵查守衛。對付隱形敵人的最強解答。<br/>• ${voidArmorIcon} <b>虛空護甲</b>——主動使你<c:vision>隱身</c:vision> <b>${voidArmorDuration} 秒</b>並提升移速，可用於開戰或脫身。<br/>• ${voidSwordIcon} <b>虛空之劍</b>——主動插下一把劍，持續期間照亮周圍 <c:vision>${voidSwordRadius}</c:vision> 並強化範圍內隊友：這是你在戰鬥中臨時佈置的視野。${voidSwordClip}<h2>隱身</h2>來自符文或英雄技能的<c:vision>隱身</c:vision>可讓你躲避一般視野。但有兩者仍能看見你：<b>防禦塔會偵測範圍內的隱身敵人</b>，而<b>真實視野</b>一律能看穿。`,
        vi: `Bạn chỉ thấy những gì đội mình thắp sáng. Mọi thứ ngoài vùng đó đơn giản là không được vẽ ra - một kẻ địch đứng trong bóng tối là vô hình với bạn dù chẳng có gì che giấu hắn.<br/><br/>• Tướng của bạn mang <c:vision>tầm nhìn ${heroVision}</c:vision><br/>• Mỗi trụ chiếu sáng <c:vision>${towerVision}</c:vision> quanh nó<br/>• Lính của bạn thắp sáng đường khi đi qua<h2>Bụi cỏ</h2>Đứng trong <b>bụi cỏ</b>, bạn bị ẩn khỏi mọi kẻ địch bên ngoài, kể cả khi đang trong tầm nhìn của chúng. Đồng minh vẫn luôn thấy bạn.<br/><br/>• Kẻ địch bước vào cùng bụi cỏ sẽ thấy tất cả những ai đứng trong đó<br/>• Bạn hiện lại ngay khi rời khỏi bụi<br/>• Dùng bụi cỏ để cắt tầm nhìn, chờ giao tranh hoặc thoát truy đuổi${bushClip}<h2>Mắt</h2>Mắt mua tầm nhìn ở nơi bạn không có mặt. Cả hai đều là đồ tiêu hao, tàng hình ngay sau khi cắm và có thể bị phá khi bị phát hiện.<br/><br/>• ${observerIcon} <b>Mắt Quan Sát</b> - canh <c:vision>${wardVision}</c:vision> trong <b>${wardDuration} giây</b>${wardClip}<h2>Trang bị ảnh hưởng tầm nhìn</h2>• ${cloakIcon} <b>Áo Choàng Ánh Sáng</b> - nội tại cho <b>tầm nhìn thật</b> vĩnh viễn, và kỹ năng chủ động cắm miễn phí một mắt quan sát. Câu trả lời mạnh nhất cho kẻ địch tàng hình.<br/>• ${voidArmorIcon} <b>Giáp Hư Không</b> - kỹ năng chủ động khiến bạn <c:vision>tàng hình</c:vision> trong <b>${voidArmorDuration} giây</b> và tăng tốc, để mở giao tranh hoặc chạy thoát.<br/>• ${voidSwordIcon} <b>Kiếm Hư Không</b> - kỹ năng chủ động cắm một lưỡi kiếm chiếu sáng <c:vision>${voidSwordRadius}</c:vision> quanh nó khi còn tồn tại và tăng sức mạnh cho đồng minh bên trong: tầm nhìn bạn đặt ngay giữa trận đánh.${voidSwordClip}<h2>Tàng hình</h2><c:vision>Tàng hình</c:vision>, từ bùa hoặc từ bộ kỹ năng của tướng, giấu bạn khỏi tầm nhìn thường. Hai thứ vẫn thấy bạn: <b>trụ phát hiện kẻ địch tàng hình trong tầm</b>, và <b>tầm nhìn thật</b> vẫn xuyên qua được.`,
        id: `Kamu hanya melihat apa yang timmu terangi. Apa pun di luar itu tidak digambar sama sekali - musuh yang berdiri dalam gelap tak terlihat olehmu meski tidak ada yang menyembunyikannya.<br/><br/>• Hero-mu membawa <c:vision>penglihatan ${heroVision}</c:vision><br/>• Setiap menara menerangi <c:vision>${towerVision}</c:vision> di sekitarnya<br/>• Minion-mu menerangi lane saat mereka berjalan<h2>Semak</h2>Berdiri di dalam <b>semak</b> menyembunyikanmu dari semua musuh di luarnya, bahkan di dalam jangkauan penglihatan mereka. Sekutumu tetap melihatmu.<br/><br/>• Musuh yang masuk ke semak yang sama melihat semua yang ada di dalamnya<br/>• Kamu terlihat lagi begitu keluar<br/>• Gunakan semak untuk memutus garis pandang, menunggu pertarungan, atau lolos dari kejaran${bushClip}<h2>Ward</h2>Ward membeli penglihatan di tempat kamu tidak berada. Keduanya consumable, menjadi tak terlihat sesaat setelah dipasang, dan bisa dihancurkan begitu ketahuan.<br/><br/>• ${observerIcon} <b>Observer Ward</b> - mengawasi <c:vision>${wardVision}</c:vision> selama <b>${wardDuration} detik</b>${wardClip}<h2>Item yang mengubah penglihatan</h2>• ${cloakIcon} <b>Cloak of Light</b> - membawa <b>true sight</b> permanen sebagai pasif, dan aktifnya memasang observer ward gratis. Jawaban terkuat untuk musuh tak terlihat.<br/>• ${voidArmorIcon} <b>Void Armor</b> - aktifnya membuatmu <c:vision>tak terlihat</c:vision> selama <b>${voidArmorDuration} detik</b> dan mempercepatmu, untuk engage atau kabur.<br/>• ${voidSwordIcon} <b>Void Sword</b> - aktifnya menancapkan bilah yang menerangi <c:vision>${voidSwordRadius}</c:vision> di sekitarnya selama bertahan dan memperkuat sekutu di dalamnya: penglihatan yang kamu pasang di tengah pertarungan.${voidSwordClip}<h2>Tak terlihat</h2><c:vision>Tak terlihat</c:vision>, dari rune atau dari kit hero, menyembunyikanmu dari penglihatan biasa. Dua hal tetap melihatmu: <b>menara mengungkap musuh tak terlihat dalam jangkauan</b>, dan <b>true sight</b> menembusnya.`,
        kr: `아군이 밝힌 곳만 볼 수 있습니다. 그 바깥은 아예 그려지지 않습니다. 어둠 속에 서 있는 적은 아무것도 그를 숨겨 주지 않아도 여러분에게는 보이지 않습니다.<br/><br/>• 챔피언은 <c:vision>시야 ${heroVision}</c:vision>을 가집니다<br/>• 타워는 주변 <c:vision>${towerVision}</c:vision>을 밝힙니다<br/>• 미니언은 라인을 따라 걸으며 시야를 밝힙니다<h2>수풀</h2><b>수풀</b> 안에 서 있으면 바깥의 모든 적에게 보이지 않습니다. 적의 시야 범위 안이라도 마찬가지입니다. 아군은 언제나 여러분을 볼 수 있습니다.<br/><br/>• 같은 수풀에 들어온 적은 그 안의 모든 유닛을 봅니다<br/>• 수풀을 벗어나는 순간 다시 보입니다<br/>• 시야를 끊거나, 교전을 기다리거나, 추격을 떨쳐낼 때 수풀을 활용하세요${bushClip}<h2>와드</h2>와드는 자신이 없는 곳의 시야를 사 줍니다. 둘 다 소모품이며, 설치 직후 은신하고, 발각되면 파괴될 수 있습니다.<br/><br/>• ${observerIcon} <b>감시 와드</b> - <b>${wardDuration}초</b> 동안 <c:vision>${wardVision}</c:vision>을 지켜봅니다${wardClip}<h2>시야를 바꾸는 아이템</h2>• ${cloakIcon} <b>빛의 망토</b> - 지속 효과로 영구 <b>진시야</b>를 가지며, 사용 시 감시 와드를 무료로 설치합니다. 은신한 적에 대한 가장 강력한 해답입니다.<br/>• ${voidArmorIcon} <b>공허의 갑옷</b> - 사용 시 <b>${voidArmorDuration}초</b> 동안 <c:vision>은신</c:vision>하고 이동 속도가 올라, 진입과 이탈 모두에 쓰입니다.<br/>• ${voidSwordIcon} <b>공허의 검</b> - 사용 시 검을 꽂아 지속되는 동안 주변 <c:vision>${voidSwordRadius}</c:vision>을 밝히고 그 안의 아군을 강화합니다. 교전 도중에 직접 놓는 시야입니다.${voidSwordClip}<h2>은신</h2>룬이나 챔피언 스킬로 얻는 <c:vision>은신</c:vision>은 일반 시야에서 자신을 숨깁니다. 다만 두 가지는 여전히 봅니다. <b>타워는 사거리 내 은신한 적을 드러내고</b>, <b>진시야</b>는 그와 무관하게 꿰뚫어 봅니다.`,
      }
    }

    default:
      return { en: '' }
  }
}

const _getMechanicFigureLabelLang = (label: MechanicFigureLabel): { [key in string]: string } => {
  switch (label) {
    case MechanicFigureLabel.BASE:
      return {
        en: 'Base',
        ru: 'База',
        cz: 'Základna',
        br: 'Base',
        fr: 'Base',
        zh: '基地',
        vi: 'Căn Cứ',
        id: 'Markas',
        kr: `기지`,
      }
    case MechanicFigureLabel.TOWER:
      return {
        en: 'Tower',
        ru: 'Башня',
        cz: 'Věž',
        br: 'Torre',
        fr: 'Tour',
        zh: '防禦塔',
        vi: 'Trụ',
        id: 'Menara',
        kr: `타워`,
      }
    case MechanicFigureLabel.MINION_MELEE:
      return {
        en: 'Melee',
        ru: 'Ближний',
        cz: 'Na blízko',
        br: 'Corpo a corpo',
        fr: 'Mêlée',
        zh: '近戰',
        vi: 'Cận chiến',
        id: 'Jarak dekat',
        kr: `근접`,
      }
    case MechanicFigureLabel.MINION_RANGED:
      return {
        en: 'Ranged',
        ru: 'Дальнобойный',
        cz: 'Na dálku',
        br: 'À distância',
        fr: 'À distance',
        zh: '遠程',
        vi: 'Đánh xa',
        id: 'Jarak jauh',
        kr: `원거리`,
      }
    case MechanicFigureLabel.MINION_SIEGE:
      return {
        en: 'Siege',
        ru: 'Осадный',
        cz: 'Obléhací',
        br: 'Cerco',
        fr: 'Siège',
        zh: '攻城',
        vi: 'Công thành',
        id: 'Siege',
        kr: `공성`,
      }
    case MechanicFigureLabel.RUNE_DAMAGE:
      return {
        en: `Damage`,
        ru: `Урона`,
        cz: `Poškození`,
        br: `Dano`,
        fr: `Dégâts`,
        zh: `傷害`,
        vi: `Sát Thương`,
        id: `Damage`,
        kr: `피해`,
      }
    case MechanicFigureLabel.RUNE_ARCANE:
      return {
        en: `Arcane`,
        ru: `Магии`,
        cz: `Arkánová`,
        br: `Arcana`,
        fr: `Arcane`,
        zh: `奧術`,
        vi: `Bí Thuật`,
        id: `Arcane`,
        kr: `비전`,
      }
    case MechanicFigureLabel.RUNE_HASTE:
      return {
        en: `Haste`,
        ru: `Скорости`,
        cz: `Rychlosti`,
        br: `Velocidade`,
        fr: `Célérité`,
        zh: `疾速`,
        vi: `Tốc Độ`,
        id: `Kecepatan`,
        kr: `신속`,
      }
    case MechanicFigureLabel.RUNE_HEALING:
      return {
        en: `Healing`,
        ru: `Лечения`,
        cz: `Léčení`,
        br: `Cura`,
        fr: `Soin`,
        zh: `治療`,
        vi: `Hồi Máu`,
        id: `Penyembuhan`,
        kr: `치유`,
      }
    case MechanicFigureLabel.RUNE_INVISIBILITY:
      return {
        en: `Invisibility`,
        ru: `Невидимости`,
        cz: `Neviditelnosti`,
        br: `Invisibilidade`,
        fr: `Invisibilité`,
        zh: `隱身`,
        vi: `Tàng Hình`,
        id: `Tak Terlihat`,
        kr: `은신`,
      }
    default:
      return { en: '' }
  }
}

const _getMechanicSectionDescriptionLang = (label: MechanicFigureLabel): { [key in string]: string } => {
  switch (label) {
    case MechanicFigureLabel.MINION_MELEE: {
      const range = MINION_MELEE_ATTACK_RANGE
      const toHero = perc(BASIC_DAMAGE_TO_HERO_MULTIPLIER)

      return {
        en: `Leads the wave and absorbs damage for the minions behind it.<ul><li><c:range>${range} attack range</c:range>.</li><li><b>Basic attacks</b> deal <b>${toHero}% damage to heroes</b>.</li></ul>`,
        ru: `Идёт впереди волны и бьёт на <c:range>дистанции ${range}</c:range>, поэтому первым попадает под башню и первым умирает. Его удар — <b>обычная атака</b>, наносящая героям лишь <b>${toHero}%</b>: он нужен, чтобы держать линию и принимать урон, а не угрожать вам.`,
        cz: `Jde v čele vlny a útočí na <c:range>vzdálenost ${range}</c:range>, takže na něj věž střílí první a první také umírá. Jeho zásah je <b>základní útok</b>, který hrdinům způsobí jen <b>${toHero}%</b> – je tu od toho, aby držel linii a schytával poškození, ne aby tě ohrožoval.`,
        br: `Anda na frente da onda e golpeia a <c:range>${range} de alcance</c:range>, então é a primeira coisa que sua torre atira e a primeira a morrer. Seu golpe é um <b>ataque básico</b>, que acerta apenas <b>${toHero}%</b> contra heróis - ele existe para absorver dano e segurar a linha, não para te ameaçar.`,
        fr: `Marche en tête de la vague et frappe à <c:range>${range} de portée</c:range> : c'est donc la première cible de votre tour et le premier à mourir. Son coup est une <b>attaque de base</b>, qui n'inflige que <b>${toHero}%</b> aux héros - il est là pour encaisser et tenir la ligne, pas pour vous menacer.`,
        zh: `走在兵線最前方，於 <c:range>${range} 範圍</c:range>揮擊，因此是防禦塔最先攻擊、也最先陣亡的目標。它的攻擊屬於<b>普通攻擊</b>，對英雄僅造成 <b>${toHero}%</b>——它的職責是承受傷害與守住兵線，而非威脅你。`,
        vi: `Đi đầu đợt lính và vung đòn ở <c:range>tầm ${range}</c:range>, nên nó là thứ đầu tiên trụ của bạn bắn và cũng là thứ chết đầu tiên. Đòn đánh của nó là <b>đòn đánh thường</b>, chỉ gây <b>${toHero}%</b> lên tướng - nó ở đó để hứng sát thương và giữ đường, không phải để đe dọa bạn.`,
        id: `Berjalan di depan gelombang dan memukul pada <c:range>jangkauan ${range}</c:range>, jadi ia yang pertama ditembak menaramu dan yang pertama mati. Serangannya adalah <b>serangan dasar</b>, yang hanya masuk <b>${toHero}%</b> ke hero - ia ada untuk menyerap damage dan menahan lane, bukan untuk mengancammu.`,
        kr: `웨이브 맨 앞에서 걸으며 <c:range>사거리 ${range}</c:range>에서 공격하므로, 아군 타워가 가장 먼저 때리고 가장 먼저 죽는 대상입니다. 공격은 <b>기본 공격</b>이라 챔피언에게는 <b>${toHero}%</b>만 들어갑니다. 위협이 아니라 피해를 받아내고 라인을 유지하기 위한 존재입니다.`,
      }
    }
    case MechanicFigureLabel.MINION_RANGED: {
      const range = MINION_RANGED_ATTACK_RANGE
      const toMinion = perc(PIERCE_DAMAGE_TO_MINION_MULTIPLIER)

      return {
        en: `Attacks from behind the melee minion.<ul><li><c:range>${range} attack range</c:range>.</li><li><b>Piercing shots</b> deal <b>${toMinion}% damage to minions</b>.</li></ul>Kill enemy ranged minions to help your wave push toward the enemy Base.`,
        ru: `Держится позади ближнего миньона и стреляет с <c:range>дистанции ${range}</c:range>. На бумаге у него самый низкий урон из троих, но его выстрел <b>пробивающий</b>: по другим миньонам он наносит <c:bonus>${toMinion}%</c:bonus>. Именно дальнобойные, а не ближние, решают, чья волна побеждает. Убивайте их первыми, если хотите, чтобы линия толкалась в вашу сторону.`,
        cz: `Drží se za jednotkou na blízko a střílí z <c:range>vzdálenosti ${range}</c:range>. Na papíře má nejnižší poškození ze všech tří, ale jeho střela je <b>probíjecí</b>: proti ostatním jednotkám způsobí <c:bonus>${toMinion}%</c:bonus>. Právě jednotky na dálku, ne ty na blízko, rozhodují o tom, čí vlna vyhraje. Zabíjej je první, když chceš, aby se linie tlačila tvým směrem.`,
        br: `Fica atrás do lacaio corpo a corpo e atira de <c:range>${range} de alcance</c:range>. No papel tem o menor dano dos três, mas o tiro dele é <b>perfurante</b>: causa <c:bonus>${toMinion}%</c:bonus> contra outros lacaios. São os lacaios à distância - e não os de corpo a corpo - que decidem qual onda vence. Mate-os primeiro quando quiser que a rota empurre para o seu lado.`,
        fr: `Reste derrière le sbire de mêlée et tire à <c:range>${range} de portée</c:range>. Sur le papier, il a les dégâts les plus faibles des trois, mais son tir est <b>perforant</b> : il inflige <c:bonus>${toMinion}%</c:bonus> aux autres sbires. Ce sont les sbires à distance, et non ceux de mêlée, qui décident quelle vague l'emporte. Tuez-les en premier si vous voulez que la voie pousse dans votre sens.`,
        zh: `跟在近戰小兵後方，從 <c:range>${range} 範圍</c:range>射擊。帳面上它是三者中傷害最低的，但它的射擊帶有<b>穿透</b>：對其他小兵造成 <c:bonus>${toMinion}%</c:bonus>。決定哪一波兵線獲勝的是遠程小兵，而非近戰小兵。若想讓兵線往你這側推進，請優先擊殺它們。`,
        vi: `Đứng sau lính cận chiến và bắn từ <c:range>tầm ${range}</c:range>. Trên giấy tờ nó có sát thương thấp nhất trong ba loại, nhưng phát bắn của nó <b>xuyên giáp</b>: gây <c:bonus>${toMinion}%</c:bonus> lên lính khác. Chính lính đánh xa, chứ không phải lính cận chiến, quyết định đợt lính nào thắng. Hãy giết chúng trước nếu bạn muốn đường đẩy về phía mình.`,
        id: `Berada di belakang minion jarak dekat dan menembak dari <c:range>jangkauan ${range}</c:range>. Di atas kertas damage-nya paling kecil dari ketiganya, tetapi tembakannya <b>menembus</b>: memberi <c:bonus>${toMinion}%</c:bonus> terhadap minion lain. Minion jarak jauh - bukan yang jarak dekat - yang menentukan gelombang mana yang menang. Bunuh mereka lebih dulu kalau kamu ingin lane mendorong ke arahmu.`,
        kr: `근접 미니언 뒤에 서서 <c:range>사거리 ${range}</c:range>에서 사격합니다. 수치상으로는 셋 중 피해량이 가장 낮지만 그 사격은 <b>관통</b> 속성이라 다른 미니언에게 <c:bonus>${toMinion}%</c:bonus>를 입힙니다. 어느 웨이브가 이기는지를 결정하는 것은 근접이 아니라 원거리 미니언입니다. 라인을 밀고 싶다면 이들을 먼저 처치하세요.`,
      }
    }
    case MechanicFigureLabel.MINION_SIEGE: {
      const range = MINION_SIEGE_ATTACK_RANGE
      const toTower = perc(SIEGE_DAMAGE_TO_BUILDING_MULTIPLIER)
      const toHero = perc(SIEGE_DAMAGE_TO_HERO_MULTIPLIER)

      return {
        en: `Joins every <b>third wave</b>, starting with wave <b>7</b>. It has the most health and attacks from the back.<ul><li><c:range>${range} attack range</c:range>.</li><li>Bombs deal <b>${toTower}% damage to towers</b> and <b>${toHero}% to heroes</b>.</li><li>Drops <b>twice the gold</b>.</li></ul>Protect it to help destroy towers.`,
        ru: `Присоединяется к каждой третьей волне начиная с седьмой и идёт в самом конце, бросая бомбы с <c:range>дистанции ${range}</c:range>. Эти бомбы наносят <c:bonus>${toTower}%</c:bonus> башням, но лишь <b>${toHero}%</b> героям — это осадное оружие, для вас лично почти безобидное. Он же самый живучий миньон и даёт <b>вдвое больше золота</b>, поэтому осадные волны — тайминг, вокруг которого строят план обе команды.`,
        cz: `Připojuje se ke každé třetí vlně od sedmé a jde úplně vzadu, kde hází bomby z <c:range>vzdálenosti ${range}</c:range>. Ty bomby způsobí <c:bonus>${toTower}%</c:bonus> věžím, ale jen <b>${toHero}%</b> hrdinům – je to obléhací zbraň, pro tebe osobně téměř neškodná. Zároveň je to nejodolnější jednotka a padá z ní <b>dvojnásobek zlata</b>, proto obléhací vlny plánují obě strany.`,
        br: `Entra a cada terceira onda a partir da sétima e anda bem atrás, lançando bombas de <c:range>${range} de alcance</c:range>. Essas bombas causam <c:bonus>${toTower}%</c:bonus> em torres mas só <b>${toHero}%</b> em heróis, então é uma arma de cerco e quase inofensiva para você. Também é o lacaio mais resistente e larga <b>o dobro de ouro</b> - por isso as ondas de cerco são o tempo que os dois times planejam.`,
        fr: `Rejoint une vague sur trois à partir de la septième et marche tout au fond, lançant des bombes à <c:range>${range} de portée</c:range>. Ces bombes infligent <c:bonus>${toTower}%</c:bonus> aux tours mais seulement <b>${toHero}%</b> aux héros : c'est une arme de siège, presque inoffensive pour vous. C'est aussi le sbire le plus résistant et il lâche <b>le double d'or</b> - d'où le fait que les deux équipes planifient autour des vagues de siège.`,
        zh: `從第七波起每三波加入一次，走在最後方，從 <c:range>${range} 範圍</c:range>投擲炸彈。這些炸彈對防禦塔造成 <c:bonus>${toTower}%</c:bonus>，但對英雄僅 <b>${toHero}%</b>——它是攻城武器，對你本人幾乎無害。它同時是最耐打的小兵，並掉落<b>雙倍金幣</b>，這正是雙方都圍繞攻城波制定計畫的原因。`,
        vi: `Gia nhập mỗi ba đợt kể từ đợt thứ bảy và đi sau cùng, ném bom từ <c:range>tầm ${range}</c:range>. Những quả bom đó gây <c:bonus>${toTower}%</c:bonus> lên trụ nhưng chỉ <b>${toHero}%</b> lên tướng, nên đây là vũ khí công thành và gần như vô hại với cá nhân bạn. Nó cũng là lính trâu nhất và rơi <b>gấp đôi vàng</b> - đó là lý do cả hai đội đều tính toán quanh đợt công thành.`,
        id: `Bergabung setiap gelombang ketiga mulai dari yang ketujuh dan berjalan paling belakang, melempar bom dari <c:range>jangkauan ${range}</c:range>. Bom itu memberi <c:bonus>${toTower}%</c:bonus> ke menara tetapi hanya <b>${toHero}%</b> ke hero, jadi ia senjata pengepungan dan hampir tidak berbahaya bagimu. Ia juga minion paling tahan banting dan menjatuhkan <b>emas dua kali lipat</b> - itulah sebabnya kedua tim merencanakan sekitar gelombang siege.`,
        kr: `7번째 웨이브부터 세 웨이브마다 합류해 맨 뒤에서 걸으며 <c:range>사거리 ${range}</c:range>에서 폭탄을 던집니다. 이 폭탄은 타워에 <c:bonus>${toTower}%</c:bonus>를 주지만 챔피언에게는 <b>${toHero}%</b>만 들어가므로, 공성 병기일 뿐 여러분 개인에게는 거의 무해합니다. 또한 가장 단단한 미니언이며 <b>골드를 두 배</b>로 떨어뜨립니다. 양 팀이 공성 웨이브 타이밍을 중심으로 계획을 세우는 이유입니다.`,
      }
    }
    case MechanicFigureLabel.RUNE_DAMAGE: {
      const dmgDuration = sec(DAMAGE_AND_ARCANE_RUNE_DURATION)
      const dmgBonus = perc(DAMAGE_RUNE_BONUS_DAMAGE_MULTIPLIER)

      return {
        en: `Grants <c:bonus>+${dmgBonus}% attack damage</c:bonus> for <b>${dmgDuration}s</b>.`,
        ru: `<c:bonus>+${dmgBonus}% к урону атаки</c:bonus> на ${dmgDuration} с. Самая простая руна в игре и самая опасная в руках героя, который и так выигрывал размен.`,
        cz: `<c:bonus>+${dmgBonus}% poškození útoku</c:bonus> na ${dmgDuration}s. Nejjednodušší runa ve hře a nejnebezpečnější u hrdiny, který výměnu už tak vyhrával.`,
        br: `<c:bonus>+${dmgBonus}% de dano de ataque</c:bonus> por ${dmgDuration}s. A runa mais simples do jogo e a mais perigosa num herói que já estava ganhando a troca.`,
        fr: `<c:bonus>+${dmgBonus}% de dégâts d'attaque</c:bonus> pendant ${dmgDuration}s. La rune la plus simple du jeu et la plus dangereuse sur un héros qui gagnait déjà l'échange.`,
        zh: `<c:bonus>+${dmgBonus}% 攻擊傷害</c:bonus>，持續 ${dmgDuration} 秒。遊戲中最單純的符文，落在本就佔上風的英雄手上則最為致命。`,
        vi: `<c:bonus>+${dmgBonus}% sát thương đánh thường</c:bonus> trong ${dmgDuration} giây. Bùa đơn giản nhất game và nguy hiểm nhất khi vào tay một tướng vốn đã thắng thế trong giao tranh.`,
        id: `<c:bonus>+${dmgBonus}% damage serangan</c:bonus> selama ${dmgDuration} detik. Rune paling sederhana dalam permainan dan paling berbahaya di tangan hero yang memang sudah unggul.`,
        kr: `${dmgDuration}초 동안 <c:bonus>공격력 +${dmgBonus}%</c:bonus>. 게임에서 가장 단순한 룬이지만, 이미 교전에서 앞서던 챔피언이 먹으면 가장 위험합니다.`,
      }
    }
    case MechanicFigureLabel.RUNE_ARCANE: {
      const dmgDuration = sec(DAMAGE_AND_ARCANE_RUNE_DURATION)

      return {
        en: `Grants <c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} ability haste</c:bonus> and <c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_POWER} ability power</c:bonus> for <b>${dmgDuration}s</b>. Your abilities hit harder and recharge sooner.`,
        ru: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} к ускорению способностей и +${ARCANE_RUNE_BONUS_ABILITY_POWER} к их силе</c:bonus> на ${dmgDuration} с — одновременно больше кастов и более сильных.`,
        cz: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} zrychlení schopností a +${ARCANE_RUNE_BONUS_ABILITY_POWER} jejich síly</c:bonus> na ${dmgDuration}s – víc sesílání a zároveň silnějších.`,
        br: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} de aceleração e +${ARCANE_RUNE_BONUS_ABILITY_POWER} de poder de habilidade</c:bonus> por ${dmgDuration}s - mais conjurações e mais fortes ao mesmo tempo.`,
        fr: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} d'accélération et +${ARCANE_RUNE_BONUS_ABILITY_POWER} de puissance</c:bonus> pendant ${dmgDuration}s - plus d'incantations et plus fortes à la fois.`,
        zh: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} 技能急速與 +${ARCANE_RUNE_BONUS_ABILITY_POWER} 技能強度</c:bonus>，持續 ${dmgDuration} 秒——同時提升施放次數與威力。`,
        vi: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} tốc biến kỹ năng và +${ARCANE_RUNE_BONUS_ABILITY_POWER} sức mạnh phép</c:bonus> trong ${dmgDuration} giây - vừa tung được nhiều chiêu hơn vừa mạnh hơn.`,
        id: `<c:bonus>+${ARCANE_RUNE_BONUS_ABILITY_HASTE} ability haste dan +${ARCANE_RUNE_BONUS_ABILITY_POWER} ability power</c:bonus> selama ${dmgDuration} detik - lebih sering cast sekaligus lebih kuat.`,
        kr: `${dmgDuration}초 동안 <c:bonus>스킬 가속 +${ARCANE_RUNE_BONUS_ABILITY_HASTE}, 주문력 +${ARCANE_RUNE_BONUS_ABILITY_POWER}</c:bonus>. 더 자주, 더 세게 스킬을 쓸 수 있습니다.`,
      }
    }
    case MechanicFigureLabel.RUNE_HASTE: {
      const hasteDuration = sec(HASTE_RUNE_DURATION)

      return {
        en: `Grants <c:pspeed>maximum movement speed</c:pspeed> and <c:immune>immunity to slows</c:immune> for <b>${hasteDuration}s</b>. Use it to chase or escape.`,
        ru: `Скорость передвижения поднимается до предела, плюс <c:immune>иммунитет к замедлениям</c:immune> на ${hasteDuration} с. Руна для погони или побега, а не для боя.`,
        cz: `Rychlost pohybu zvednutá na maximum a <c:immune>imunita vůči zpomalení</c:immune> na ${hasteDuration}s. Runa na dohnání nebo útěk, ne na boj.`,
        br: `Velocidade de movimento elevada ao máximo e <c:immune>imunidade a lentidão</c:immune> por ${hasteDuration}s. Uma runa de perseguição ou fuga, não de luta.`,
        fr: `Vitesse de déplacement portée au maximum et <c:immune>immunité aux ralentissements</c:immune> pendant ${hasteDuration}s. Une rune de poursuite ou de fuite, pas de combat.`,
        zh: `移動速度提升至上限並<c:immune>免疫減速</c:immune>，持續 ${hasteDuration} 秒。這是追擊或逃脫用的符文，而非戰鬥符文。`,
        vi: `Tốc chạy được đẩy lên mức trần và <c:immune>miễn nhiễm làm chậm</c:immune> trong ${hasteDuration} giây. Đây là bùa để đuổi hoặc chạy, không phải để đánh nhau.`,
        id: `Kecepatan gerak dinaikkan ke batas maksimum dan <c:immune>kebal slow</c:immune> selama ${hasteDuration} detik. Rune untuk mengejar atau kabur, bukan untuk bertarung.`,
        kr: `${hasteDuration}초 동안 이동 속도가 최대치까지 오르고 <c:immune>둔화에 면역</c:immune>이 됩니다. 싸움용이 아니라 추격하거나 도망칠 때 쓰는 룬입니다.`,
      }
    }
    case MechanicFigureLabel.RUNE_HEALING: {
      const healPerc = perc(HEALING_RUNE_TICK_HEAL_PERCENTAGE)
      const healTick = sec(HEALING_RUNE_EFFECT_TICK_TIME)
      const healDuration = sec(HEALING_RUNE_EFFECT_DURATION)
      const healSpeed = perc(HEALING_RUNE_BONUS_MOVEMENT_SPEED)

      return {
        en: `Creates a healing zone for <b>you and your allies</b>, lasting <b>${healDuration}s</b>.<ul><li><c:range>${HEALING_RUNE_EFFECT_RADIUS} radius</c:range>.</li><li><c:heal>Restores ${healPerc}% of maximum health</c:heal> every <b>${healTick}s</b>.</li><li>Grants <c:pspeed>+${healSpeed}% movement speed</c:pspeed>.</li></ul>`,
        ru: `Создаёт зону <c:range>радиусом ${HEALING_RUNE_EFFECT_RADIUS}</c:range> на ${healDuration} с, которая <c:heal>лечит ${healPerc}% максимального здоровья</c:heal> каждые ${healTick} с и даёт <c:pspeed>+${healSpeed}% скорости передвижения</c:pspeed>. Помогает <b>только союзникам</b>, поэтому её единственную стоит оставить раненому товарищу.`,
        cz: `Vytvoří zónu o <c:range>poloměru ${HEALING_RUNE_EFFECT_RADIUS}</c:range> na ${healDuration}s, která <c:heal>léčí ${healPerc}% maximálního zdraví</c:heal> každých ${healTick}s a dává <c:pspeed>+${healSpeed}% rychlosti pohybu</c:pspeed>. Pomáhá <b>jen spojencům</b>, takže je to jediná runa, kterou má smysl nechat zraněnému spoluhráči.`,
        br: `Cria uma zona de <c:range>raio ${HEALING_RUNE_EFFECT_RADIUS}</c:range> por ${healDuration}s que <c:heal>cura ${healPerc}% da vida máxima</c:heal> a cada ${healTick}s e concede <c:pspeed>+${healSpeed}% de velocidade</c:pspeed>. Ajuda <b>apenas aliados</b>, então é a única runa que vale deixar para um companheiro ferido.`,
        fr: `Crée une zone de <c:range>rayon ${HEALING_RUNE_EFFECT_RADIUS}</c:range> pendant ${healDuration}s qui <c:heal>soigne ${healPerc}% de la vie maximale</c:heal> toutes les ${healTick}s et octroie <c:pspeed>+${healSpeed}% de vitesse</c:pspeed>. Elle n'aide que <b>les alliés</b> : c'est la seule rune qu'il vaut la peine de laisser à un coéquipier blessé.`,
        zh: `在 ${healDuration} 秒內建立 <c:range>${HEALING_RUNE_EFFECT_RADIUS} 半徑</c:range>的區域，每 ${healTick} 秒<c:heal>回復最大生命值的 ${healPerc}%</c:heal>並給予 <c:pspeed>+${healSpeed}% 移動速度</c:pspeed>。它<b>僅對友方</b>生效，因此是唯一值得留給受傷隊友的符文。`,
        vi: `Tạo vùng <c:range>bán kính ${HEALING_RUNE_EFFECT_RADIUS}</c:range> trong ${healDuration} giây, <c:heal>hồi ${healPerc}% máu tối đa</c:heal> mỗi ${healTick} giây và cho <c:pspeed>+${healSpeed}% tốc chạy</c:pspeed>. Nó chỉ giúp <b>đồng minh</b>, nên đây là bùa duy nhất đáng để lại cho đồng đội đang thương tích.`,
        id: `Membuat zona <c:range>radius ${HEALING_RUNE_EFFECT_RADIUS}</c:range> selama ${healDuration} detik yang <c:heal>menyembuhkan ${healPerc}% nyawa maksimum</c:heal> tiap ${healTick} detik dan memberi <c:pspeed>+${healSpeed}% kecepatan gerak</c:pspeed>. Hanya membantu <b>sekutu</b>, jadi ini satu-satunya rune yang layak ditinggalkan untuk rekan yang terluka.`,
        kr: `${healDuration}초 동안 <c:range>반경 ${HEALING_RUNE_EFFECT_RADIUS}</c:range>의 지역을 만들어 ${healTick}초마다 <c:heal>최대 체력의 ${healPerc}%를 회복</c:heal>시키고 <c:pspeed>+${healSpeed}% 이동 속도</c:pspeed>를 부여합니다. <b>아군에게만</b> 적용되므로, 다친 팀원에게 양보할 가치가 있는 유일한 룬입니다.`,
      }
    }
    case MechanicFigureLabel.RUNE_INVISIBILITY: {
      const invisDuration = sec(INVISIBILITY_RUNE_DURATION)

      return {
        en: `Grants <c:vision>invisibility</c:vision> for <b>${invisDuration}s</b>. <b>Towers and true sight can still reveal you.</b>`,
        ru: `<c:vision>Невидимость</c:vision> на ${invisDuration} с. Помните, что башни обнаруживают невидимых врагов в радиусе, так что она скрывает подход, а не нырок под башню.`,
        cz: `<c:vision>Neviditelnost</c:vision> na ${invisDuration}s. Pamatuj, že věže odhalují neviditelné nepřátele v dosahu – skryje tedy příchod, ne skok pod věž.`,
        br: `<c:vision>Invisibilidade</c:vision> por ${invisDuration}s. Lembre que torres revelam inimigos invisíveis no alcance, então ela esconde a aproximação, não o mergulho.`,
        fr: `<c:vision>Invisibilité</c:vision> pendant ${invisDuration}s. N'oubliez pas que les tours révèlent les ennemis invisibles à portée : elle cache l'approche, pas le plongeon.`,
        zh: `<c:vision>隱身</c:vision> ${invisDuration} 秒。請記得防禦塔會偵測範圍內的隱身敵人，因此它能掩護接近，但無法掩護越塔。`,
        vi: `<c:vision>Tàng hình</c:vision> trong ${invisDuration} giây. Nhớ rằng trụ sẽ phát hiện kẻ địch tàng hình trong tầm, nên nó che giấu pha tiếp cận chứ không che được pha lao vào trụ.`,
        id: `<c:vision>Tak terlihat</c:vision> selama ${invisDuration} detik. Ingat menara mengungkap musuh tak terlihat dalam jangkauan, jadi ini menyembunyikan pendekatan, bukan dive.`,
        kr: `${invisDuration}초 동안 <c:vision>은신</c:vision>합니다. 타워는 사거리 내 은신한 적을 드러낸다는 점을 기억하세요. 접근은 숨겨 주지만 타워 다이브까지 숨겨 주지는 않습니다.`,
      }
    }
    default:
      return { en: '' }
  }
}

const _getMechanicChartLabelLang = (label: MechanicChartLabel): { [key in string]: string } => {
  switch (label) {
    case MechanicChartLabel.AXIS_RESISTANCE_OR_HASTE:
      return {
        en: `Armor / Magic defence / Ability haste`,
        ru: `Броня / Магическая защита / Ускорение способностей`,
        cz: `Brnění / Magická obrana / Zrychlení schopností`,
        br: `Armadura / Defesa mágica / Aceleração de habilidade`,
        fr: `Armure / Défense magique / Accélération de compétences`,
        zh: `護甲 / 魔法防禦 / 技能急速`,
        vi: `Giáp / Kháng phép / Tốc biến kỹ năng`,
        id: `Armor / Magic defense / Ability haste`,
        kr: `방어력 / 마법 방어력 / 스킬 가속`,
      }
    case MechanicChartLabel.AXIS_HERO_LEVEL:
      return {
        en: `Hero level`,
        ru: `Уровень героя`,
        cz: `Úroveň hrdiny`,
        br: `Nível do herói`,
        fr: `Niveau du héros`,
        zh: `英雄等級`,
        vi: `Cấp của tướng`,
        id: `Level hero`,
        kr: `챔피언 레벨`,
      }
    case MechanicChartLabel.AXIS_ENEMY_HERO_LEVEL:
      return {
        en: `Enemy hero level`,
        ru: `Уровень вражеского героя`,
        cz: `Úroveň nepřátelského hrdiny`,
        br: `Nível do herói inimigo`,
        fr: `Niveau du héros ennemi`,
        zh: `敵方英雄等級`,
        vi: `Cấp của tướng địch`,
        id: `Level hero musuh`,
        kr: `적 챔피언 레벨`,
      }
    case MechanicChartLabel.AXIS_LEVEL_REACHED:
      return {
        en: `Level reached`,
        ru: `Достигнутый уровень`,
        cz: `Dosažená úroveň`,
        br: `Nível alcançado`,
        fr: `Niveau atteint`,
        zh: `達到的等級`,
        vi: `Cấp đạt được`,
        id: `Level yang dicapai`,
        kr: `도달 레벨`,
      }
    case MechanicChartLabel.AXIS_HEALTH_PER_SECOND:
      return {
        en: `Health per second`,
        ru: `Здоровье в секунду`,
        cz: `Životy za sekundu`,
        br: `Vida por segundo`,
        fr: `Points de vie par seconde`,
        zh: `每秒生命回復`,
        vi: `Máu mỗi giây`,
        id: `Nyawa per detik`,
        kr: `초당 체력`,
      }
    case MechanicChartLabel.AXIS_EXPERIENCE:
      return {
        en: `Experience`,
        ru: `Опыт`,
        cz: `Zkušenosti`,
        br: `Experiência`,
        fr: `Expérience`,
        zh: `經驗`,
        vi: `Kinh nghiệm`,
        id: `Pengalaman`,
        kr: `경험치`,
      }
    case MechanicChartLabel.SERIES_HEALTH_REGEN_LOW:
      return {
        en: `1 health regeneration`,
        ru: `1 регенерации здоровья`,
        cz: `1 regenerace životů`,
        br: `1 de regeneração de vida`,
        fr: `1 de régénération de vie`,
        zh: `生命回復 1`,
        vi: `1 hồi máu`,
        id: `1 regenerasi nyawa`,
        kr: `체력 재생 1`,
      }
    case MechanicChartLabel.SERIES_HEALTH_REGEN_HIGH:
      return {
        en: `10 health regeneration`,
        ru: `10 регенерации здоровья`,
        cz: `10 regenerace životů`,
        br: `10 de regeneração de vida`,
        fr: `10 de régénération de vie`,
        zh: `生命回復 10`,
        vi: `10 hồi máu`,
        id: `10 regenerasi nyawa`,
        kr: `체력 재생 10`,
      }
    case MechanicChartLabel.SERIES_NO_KILL_STREAK:
      return {
        en: `No kill streak`,
        ru: `Без серии убийств`,
        cz: `Bez série zabití`,
        br: `Sem sequência de abates`,
        fr: `Sans série d'éliminations`,
        zh: `無連殺`,
        vi: `Không có chuỗi hạ gục`,
        id: `Tanpa killstreak`,
        kr: `연속 처치 없음`,
      }
    case MechanicChartLabel.SERIES_KILL_STREAK_LOW:
      return {
        en: `3 kill streak`,
        ru: `Серия из 3 убийств`,
        cz: `Série 3 zabití`,
        br: `Sequência de 3 abates`,
        fr: `Série de 3 éliminations`,
        zh: `3 連殺`,
        vi: `Chuỗi 3 mạng`,
        id: `Killstreak 3`,
        kr: `3연속 처치`,
      }
    case MechanicChartLabel.SERIES_KILL_STREAK_HIGH:
      return {
        en: `5 kill streak`,
        ru: `Серия из 5 убийств`,
        cz: `Série 5 zabití`,
        br: `Sequência de 5 abates`,
        fr: `Série de 5 éliminations`,
        zh: `5 連殺`,
        vi: `Chuỗi 5 mạng`,
        id: `Killstreak 5`,
        kr: `5연속 처치`,
      }
    case MechanicChartLabel.SERIES_EXPERIENCE_REQUIRED:
      return {
        en: `Experience needed`,
        ru: `Требуется опыта`,
        cz: `Potřebné zkušenosti`,
        br: `Experiência necessária`,
        fr: `Expérience requise`,
        zh: `所需經驗`,
        vi: `Kinh nghiệm cần`,
        id: `Pengalaman dibutuhkan`,
        kr: `필요 경험치`,
      }
    default:
      return { en: '' }
  }
}

const _getMechanicVideoLabelLang = (label: MechanicVideoLabel): { [key in string]: string } => {
  switch (label) {
    case MechanicVideoLabel.LAST_HIT:
      return {
        en: 'Last hit',
        ru: 'Добивание',
        cz: 'Poslední zásah',
        br: 'Último golpe',
        fr: 'Dernier coup',
        zh: '補刀',
        vi: 'Kết liễu lính',
        id: 'Last hit',
        kr: '막타',
      }
    case MechanicVideoLabel.PICK_UP_COIN:
      return {
        en: 'Picking up a coin',
        ru: 'Подбор монеты',
        cz: 'Sběr mince',
        br: 'Pegando a moeda',
        fr: 'Ramasser la pièce',
        zh: '撿取金幣',
        vi: 'Nhặt đồng vàng',
        id: 'Mengambil koin',
        kr: '코인 집기',
      }
    case MechanicVideoLabel.POWER_RUNE:
      return {
        en: 'Picking up a Power Rune',
        ru: 'Подбор руны силы',
        cz: 'Sběr runy moci',
        br: 'Pegando uma Runa de Poder',
        fr: 'Ramasser une rune de puissance',
        zh: '撿取強化符文',
        vi: 'Nhặt Bùa Sức Mạnh',
        id: 'Mengambil Power Rune',
        kr: '강화 룬 획득',
      }
    case MechanicVideoLabel.GOLD_RUNE_CONTESTED:
      return {
        en: 'Contested capture',
        ru: 'Оспариваемый захват',
        cz: 'Sporné zabírání',
        br: 'Captura disputada',
        fr: 'Capture contestée',
        zh: '爭奪中的佔領',
        vi: 'Chiếm điểm bị tranh chấp',
        id: 'Perebutan yang diperebutkan',
        kr: '경합 중인 점령',
      }
    case MechanicVideoLabel.GOLD_RUNE_UNCONTESTED:
      return {
        en: 'Uncontested capture',
        ru: 'Захват без помех',
        cz: 'Nerušené zabírání',
        br: 'Captura sem disputa',
        fr: 'Capture sans opposition',
        zh: '無人爭奪的佔領',
        vi: 'Chiếm điểm không bị cản',
        id: 'Perebutan tanpa lawan',
        kr: '방해 없는 점령',
      }
    case MechanicVideoLabel.KILL:
      return {
        en: 'Killing an enemy hero',
        ru: 'Убийство вражеского героя',
        cz: 'Zabití nepřátelského hrdiny',
        br: 'Abatendo um herói inimigo',
        fr: 'Tuer un héros ennemi',
        zh: '擊殺敵方英雄',
        vi: 'Hạ gục tướng địch',
        id: 'Membunuh hero musuh',
        kr: '적 챔피언 처치',
      }
    case MechanicVideoLabel.CC_STUN:
      return {
        en: 'Stun',
        ru: 'Оглушение',
        cz: 'Omráčení',
        br: 'Atordoamento',
        fr: 'Étourdissement',
        zh: '暈眩',
        vi: 'Choáng',
        id: 'Stun',
        kr: '기절',
      }
    case MechanicVideoLabel.CC_SLOW:
      return {
        en: 'Slow',
        ru: 'Замедление',
        cz: 'Zpomalení',
        br: 'Lentidão',
        fr: 'Ralentissement',
        zh: '減速',
        vi: 'Làm chậm',
        id: 'Slow',
        kr: '둔화',
      }
    case MechanicVideoLabel.CC_SILENCE:
      return {
        en: 'Silence',
        ru: 'Немота',
        cz: 'Umlčení',
        br: 'Silêncio',
        fr: 'Silence',
        zh: '沉默',
        vi: 'Câm lặng',
        id: 'Silence',
        kr: '침묵',
      }
    case MechanicVideoLabel.CC_FREEZE:
      return {
        en: 'Freeze',
        ru: 'Заморозка',
        cz: 'Zmrazení',
        br: 'Congelamento',
        fr: 'Gel',
        zh: '冰凍',
        vi: 'Đóng băng',
        id: 'Freeze',
        kr: '빙결',
      }
    case MechanicVideoLabel.CC_FEAR:
      return {
        en: 'Fear',
        ru: 'Страх',
        cz: 'Strach',
        br: 'Medo',
        fr: 'Peur',
        zh: '恐懼',
        vi: 'Khiếp sợ',
        id: 'Fear',
        kr: '공포',
      }
    case MechanicVideoLabel.CC_CHARM:
      return {
        en: 'Charm',
        ru: 'Очарование',
        cz: 'Okouzlení',
        br: 'Encanto',
        fr: 'Charme',
        zh: '魅惑',
        vi: 'Mê hoặc',
        id: 'Charm',
        kr: '매혹',
      }
    case MechanicVideoLabel.CC_KNOCKBACK:
      return {
        en: 'Knockback',
        ru: 'Отбрасывание',
        cz: 'Odhození',
        br: 'Repulsão',
        fr: 'Repoussée',
        zh: '擊退',
        vi: 'Hất tung',
        id: 'Knockback',
        kr: '넉백',
      }
    case MechanicVideoLabel.CC_PULL:
      return {
        en: 'Pull',
        ru: 'Притягивание',
        cz: 'Přitažení',
        br: 'Puxão',
        fr: 'Attraction',
        zh: '拉扯',
        vi: 'Kéo',
        id: 'Pull',
        kr: '끌어당기기',
      }
    case MechanicVideoLabel.DISPEL_ITEM:
      return {
        en: 'Dispelling with an item',
        ru: 'Очищение предметом',
        cz: 'Rozptýlení předmětem',
        br: 'Dissipando com um item',
        fr: 'Dissipation avec un objet',
        zh: '用裝備驅散',
        vi: 'Giải hiệu ứng bằng trang bị',
        id: 'Dispel dengan item',
        kr: '아이템으로 정화',
      }
    case MechanicVideoLabel.KIRINS_DEFENDER_BLOCK:
      return {
        en: `Kirin's Defender blocks crowd control`,
        ru: 'Защитник Кирина блокирует контроль',
        cz: 'Kirinův obránce blokuje ovládání',
        br: 'Defensor de Kirin bloqueia o controle',
        fr: 'Bouclier de Kirin bloque le contrôle',
        zh: '麒麟的守護者阻擋控制',
        vi: 'Khiên Kirin chặn khống chế',
        id: 'Pelindung Kirin memblokir crowd control',
        kr: '기린의 수호자가 군중 제어를 차단',
      }
    case MechanicVideoLabel.AREL_COMBO:
      return {
        en: 'Arel - K J L J combo',
        ru: 'Арел — комбо K J L J',
        cz: 'Arel – kombo K J L J',
        br: 'Arel - combo K J L J',
        fr: 'Arel - combo K J L J',
        zh: 'Arel——K J L J 連招',
        vi: 'Arel - combo K J L J',
        id: 'Arel - kombo K J L J',
        kr: 'Arel - K J L J 콤보',
      }
    case MechanicVideoLabel.THOMAS_COMBO:
      return {
        en: 'Thomas - L J combo',
        ru: 'Томас — комбо L J',
        cz: 'Thomas – kombo L J',
        br: 'Thomas - combo L J',
        fr: 'Thomas - combo L J',
        zh: 'Thomas——L J 連招',
        vi: 'Thomas - combo L J',
        id: 'Thomas - kombo L J',
        kr: 'Thomas - L J 콤보',
      }
    case MechanicVideoLabel.TALENT_PICK:
      return {
        en: 'Choosing a talent',
        ru: 'Выбор таланта',
        cz: 'Výběr talentu',
        br: 'Escolhendo um talento',
        fr: 'Choisir un talent',
        zh: '選擇天賦',
        vi: 'Chọn thiên phú',
        id: 'Memilih talent',
        kr: '특성 선택',
      }
    case MechanicVideoLabel.BUSH:
      return {
        en: 'Hiding in a bush',
        ru: 'Укрытие в кустах',
        cz: 'Skrývání v keři',
        br: 'Escondido no arbusto',
        fr: 'Se cacher dans un buisson',
        zh: '躲進草叢',
        vi: 'Ẩn trong bụi cỏ',
        id: 'Bersembunyi di semak',
        kr: '수풀에 숨기',
      }
    case MechanicVideoLabel.WARD:
      return {
        en: 'Placing a ward',
        ru: 'Установка варда',
        cz: 'Položení wardu',
        br: 'Colocando uma sentinela',
        fr: 'Poser une balise',
        zh: '放置守衛',
        vi: 'Cắm mắt',
        id: 'Memasang ward',
        kr: '와드 설치',
      }
    case MechanicVideoLabel.VOID_SWORD:
      return {
        en: 'Void Sword vision',
        ru: 'Обзор от Меча пустоты',
        cz: 'Výhled z Meče prázdnoty',
        br: 'Visão da Espada do Vazio',
        fr: `Vision de l'Épée du vide`,
        zh: '虛空之劍的視野',
        vi: 'Tầm nhìn từ Kiếm Hư Không',
        id: 'Penglihatan Void Sword',
        kr: '공허의 검 시야',
      }
    default:
      return { en: '' }
  }
}

export const getMechanicSectionDescription = (label: MechanicFigureLabel): string => {
  const result = _getMechanicSectionDescriptionLang(label)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

export const getMechanicFigureLabel = (label: MechanicFigureLabel): string => {
  const result = _getMechanicFigureLabelLang(label)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

export const getMechanicName = (id: MechanicId): string => {
  const result = _getMechanicNameLang(id)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

export const getMechanicDescription = (id: MechanicId): string => {
  const result = _getMechanicDescriptionLang(id)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

export const getMechanicVideoLabel = (label: MechanicVideoLabel): string => {
  const result = _getMechanicVideoLabelLang(label)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

export const getMechanicChartLabel = (label: MechanicChartLabel): string => {
  const result = _getMechanicChartLabelLang(label)

  if (result[LANG.value]) return result[LANG.value]
  else return result['en']
}

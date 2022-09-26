/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LOCALE } from '../locales';
import { home_page } from './home_page';

const locale_data: { [key in LOCALE]: { [key in string]: string } } = {
    ...home_page,
    /** Hero section */
    [LOCALE.KUMIHU_NAME]: {
        en: 'Kumihu',
        ru: 'Кумиху',
        zh: '庫咪戶',
        br: 'Kumihu',
    },

    [LOCALE.BELLE_NAME]: {
        en: 'Belle',
        ru: 'Белла',
        zh: '蓓蕾',
        br: 'Belle',
    },

    [LOCALE.ICEAT_NAME]: {
        en: 'I\'Ceat',
        ru: 'Ай\'сит',
        br: 'ICeat',
        cz: 'I\'Ceat',
        zh: '艾希特',
    },

    [LOCALE.VEIL_NAME]: {
        en: 'Veil',
        ru: 'Вэйл',
        zh: '維爾',
        br: 'Veil',
    },

    [LOCALE.SPARROW_NAME]: {
        en: 'Sparrow',
        ru: 'Спарроу',
        zh: '史佩羅',
        br: 'Sparrow',
    },

    [LOCALE.THOMAS_NAME]: {
        en: 'Thomas',
        ru: 'Томас',
        br: 'Thomas',
        cz: 'Tomáš',
        zh: '湯瑪士',
    },

    [LOCALE.FLIN_NAME]: {
        en: 'Flin',
        ru: 'Флин',
        zh: '弗林',
        br: 'Flin',
    },

    [LOCALE.KIRA_NAME]: {
        en: 'Kira',
        ru: 'Кира',
        zh: '奇菈',
        br: 'Kira',
    },
    [LOCALE.HAZEL_NAME]: {
        en: 'Hazel',
        ru: 'Хейзел',
        zh: '哈歇爾',
        br: 'Hazel',
    },
    [LOCALE.AREL_NAME]: {
        en: 'Arel',
        ru: 'Арел',
        zh: '艾瑞爾',
        br: 'Arel',
    },
    [LOCALE.ALVAR_NAME]: {
        en: 'Alvar',
        ru: 'Алвар',
        zh: '阿爾瓦',
        br: 'Alvar',
    },
    [LOCALE.KUMIHU_DESCRIPTION]: {
        en: 'Kumihu is an evil spirit in the guise of a beautiful woman who is always hungry for new souls. But be careful: in the blink of an eye she can show her true form, destroying any chance to survive, since the Soul Sphere will catch even the most tenacious fools.',
        ru: 'Кумиху - злой дух, принявший облик прекрасной женщины, жаждущий новых душ. Но будьте осторожны: в мгновение ока она может показать свою истинную форму, уничтожив любой шанс на выживание, поскольку Сфера души поймает даже самых упорных дураков.',
        br: 'Um demonio da floresta que foi capturado pelo reino vemelho, Kumihu conseguiu fugir roubando o corpo de uma duqueza para se vingar das pessoas que a fizeram mal.',
        cz: 'Kumihu je zlý duch v převleku krásné ženy, která neustále touží po nových duších. Ale buďte opatrní: mrknutím oka může ukázat svou pravou podobu a zničit jakoukoli šanci na přežití, protože její sféra duše zachytí i ti nejhouževnatější blázni.',
        zh: '　　庫咪戶是一個偽裝成貌美女性的惡靈，總是渴求著新鮮的靈魂。萬分注意：一旦被靈魂球體逮到，只需眨眼之間，她就能現出真實面目將任何一絲存活的機會通通摧毀，縱使是最頑強的愚者也不例外。',
    },
    [LOCALE.ICEAT_DESCRIPTION]: {
        en: 'Belonging to a colony of penguins in the arctic region of Civia, I\'ceat stood out among the rest. Possessing magical powers, I\'ceat can manifest ice and snow at the tip of his flippers. No one knows where his powers came from, but everyone embraces his uniqueness among the group. Waddling past the tall trees in the dense forest, I\'ceat is determined to find the true meaning behind the powers he once used to protect his family.',
        ru: 'Принадлежащий к колонии пингвинов в арктическом регионе Кливии, Ай\'сит выделялся среди остальных. Обладая магическими способностями, Ай\'сит может создавать лёд и снег на кончиках ласт. Никто не знает, откуда взялись его силы, но все в группе принимают его уникальность. Пробираясь мимо высоких деревьев в густом лесу, Ай\'сит наполнен решимостью разыскать истинный смысл своих сил, которые он когда-то использовал для защиты своей семьи.',
        br: 'Pertencente a uma colônia de pinguins na região ártica de Civia, I\'ceat se destacou entre os demais. Possuindo poderes mágicos que apenas demônios tem, I\'ceat pode manifestar pedras de gelo e neve da ponta de suas nadadeiras. Ninguém sabe de onde veio seus poderes, mas todos o aceitam no grupo acreditando não ter ligação com os demônios. Passando pelas árvores altas da floresta das fadas, I\'ceat está determinado a encontrar o verdadeiro significado por trás dos poderes que ele usou para proteger sua colônia.',
        cz: 'I\'ceat patřil ke kolonii tučňáků v arktické oblasti Civia, ale vždy vyčníval mezi ostatními. Díky magickým schopnostem dokáže I\'ceat vztvořit led a sníh na špičce svých křidel. Nikdo neví, kde se jeho schopnosti vzaly , ale každý přijímá jeho jedinečnost ve kmenu. Kolébájíc se kolem vysokých stromů v hustém lese je I\'ceat odhodlán najít skutečný význam za schopnostmi, které kdysi používal k ochraně své rodiny.',
        zh: '　　隸屬於北極地帶希維亞的企鵝群，艾希特在企鵝群中脫穎而出。擁有魔法之力，艾希特可以在他的腳蹼間現出冰雪。沒人知曉他的能力從何而來，但大家都接納他在群體中的獨特性。搖搖擺擺地走過了重重的高樹茂林，艾希特下定了決心，去尋找他那曾經用來保護整個家族的力量其背後的真實意涵。',
    },
    [LOCALE.THOMAS_DESCRIPTION]: {
        en: 'Coming from an underground laboratory in the heated war zone of Rotite, Thomas fought for Etygia\'s guerilla force and partook in ambushes focused on the upper ranks of the enemy forces. He gained notoriety among allies and foes alike because of his unique style of killing. During a secret experiment gone wrong, the test subject blasted the laboratory wide open. Wanting to leave the hectic environment and hellish landscape, Thomas dared to leave the guerilla force for good. Through the spray of bullets, he managed to swiftly make it past as he witnessed the loss of many lives in the chaos. For Thomas, he wanted freedom, but at the cost of betraying the kingdom. Keeping a low profile and lurking in the shadows, it\'s only a matter of time. The hunter has become the hunted.',
        ru: 'Выйдя из подземной лаборатории в жаркой зоне боевых действий Ротита, Томас сражался на стороне партизан Этигии и участвовал в засадах, сосредоточенных на верхних званиях вражеских сил. Он получил известность как среди союзников, так и среди врагов из-за своего уникального стиля убийств. Во время секретного эксперимента, который закончился неудачей, испытуемый полностью взорвал лабораторию. Желая покинуть суету и адские пейзажи, Томас осмелился навсегда покинуть партизанские отряды. Ему удалось быстро миновать осколки пуль, становясь свидетелем гибели многих людей в происходящем хаосе. Томас просто хотел свободы, даже ценой предательства целого королевства. Незаметность и скрытность в тени - это лишь вопрос времени. Охотник превратился в добычу.',
        br: 'Vindo de um laboratório subterrâneo na zona de guerra aquecida de Rotite, Thomas foi obrigado a lutar pelas forças de guerrilha de Etygia e sua especialidade era de emboscadas focadas nas fileiras superiores das forças inimigas. Ele ganhou notoriedade entre aliados e inimigos por causa de seu estilo único de luta com uma espada demoníaca. Durante um experimento secreto que deu errado, uma das cobaias explodiu um laboratório subterrâneo perto de onde ele patrulhava. Ele testemunhou a perda de muitas vidas no caos. Thomas aproveitou a oportunidade e se atreveu a deixar as forças de guerrilha, mas ao custo de trair o reino e virar um fugitivo.',
        cz: 'Tomáš, králík pocházející z podzemní laboratoře ve válečné zóně Rotite, bojoval za partyzánské síly Etygie a účastnil se přepadení zaměřených na vyšší řady nepřátelských sil. Díky svému jedinečnému stylu zabíjení si získal proslulost mezi spojenci i nepřáteli. Během tajného experimentu, který se pokazil, testovaný subjekt znicil laboratoř. Thomas chtěl opustit hektické prostředí a pekelnou krajinu a odvážil se navždy opustit partyzány. Přes spršku kulek se mu podařilo rychle uniknout, když byl svědkem ztráty mnoha životů v chaosu. Bunninju chtěl svobodu, ale za cenu zrady království. Držejic se nízko a číhat ve stínu, je to jen otázka času. Z lovce se stal lovený.',
        zh: '　　來自洛泰特激烈戰區的地下實驗室，湯瑪士作為艾提吉亞的游擊隊勢力一員作戰，並專門伏擊敵方勢力的高級階層。他因為其獨特的殺戮風格，在敵友之間皆惡名昭彰。在某一次機密實驗出錯時，受試者爆裂將實驗室炸毀了。渴望著離開這奔波不斷的環境以及猶如地獄般的光景，湯瑪士毅然決然離開了游擊隊勢力。他設法迅速離開，穿越過了漫天四散的子彈，同時親眼目睹了許多性命被葬送在這場混亂當中。對湯瑪士而言，他想要自由，然而代價則是背叛了整個王國。要時時刻刻保持低調潛伏在影子中，一個獵殺者反成了獵物，只會是時間上的問題。',
    },
    [LOCALE.SPARROW_DESCRIPTION]: {
        en: `A courageous and fierce woman previously a Hermit, Sparrow committed most of her life following the demon Artuklas. She and her family lived in a village deep within the dense Sasugroen Rainforest. Her strong sense of adventure distinguished her from the timid and discreet natured children of her generation. Together with her family, they pursued the path that Artuklas set for the Hermits.
        <br />Artuklas, being akin to discovery and knowledge, was intrigued by the curious Sparrow and her bravery to venture out, seeking the unknown and discovering information. He slowly forged his path to cater to Sparrow's needs, dismissing the other Hermits who wanted to follow and worship him. Sparrow noticed the changes, but Artuklas assured her that destiny chose this path for her to take. During the following years of training and preparing, the bond between the hermit and demon grew closer, and Artuklas divulged information about his kin to Sparrow.
        <br />Unfortunately, even with the training and rituals all complimenting Sparrow's strengths, the child could not fully grasp the power Artuklas extends to share. Artuklas, growing impatient and infuriated at the child's incompetency, decided to force a fraction of his power to flow through her body. This power would prove too much for Sparrow, and she would have to expel a lot of this to stay conscious.
        <br />A small scouting team of Guardians would take notice of the immense demonic energy concentrated in one spot. Upon arrival, they would see the shape of a greater demon trying to take control of a collapsed woman. They seized the opportunity to strike, but Sparrow retaliated, allowing Artuklas to escape in the chaos. After a long-drawn-out fight, the Guardians would subdue and overpower her because she could not effectively use her newfound abilities.`,
        ru: `Спарроу - смелая и свирепая девушка, в прошлом отшельник, большую часть своей жизни посвятившая следованию демону Артукласу. Она и ее семья жили в деревне глубоко в густом тропическом лесу Сасугроен. Её сильное стремление к приключениям отличало её от робких и сдержанных детей её возраста. Вместе с её семьей они пошли по пути, который Артуклас указал отшельникам. 
        <br />Артукласу были по душе открытия и новые знания, и он был очень заинтригован любопытной Спарроу и ее храбростью, когда она отправлялась на поиски неизвестного. Он медленно прокладывал свой путь, чтобы удовлетворить потребности Спарроу, увольняя других отшельников, которые хотели следовать за ним и поклоняться ему. Спарроу замечала изменения, но Артуклас заверял, что сама судьба избрала для неё этот путь. В последующие годы обучения и подготовки связь между отшельницей и демоном стала теснее, и Артуклас выдал Спарроу информацию о своём с ней родстве.
        <br />К сожалению, даже с обучением и ритуалами, дополняющими сильные стороны Спарроу, ребёнок не мог полностью осознать силу, которой Артуклас делится. Артуклас, теряя терпение и гневаясь из-за некомпетентности ребёнка, решил заставить часть своей силы течь через её тело. Эта сила оказалась бы слишком большой для Спарроу, и ей пришлось бы исключить многое из этого, чтобы оставаться в сознании. 
        <br />Небольшая разведывательная группа стражей вскоре заметит огромную демоническую энергию, сосредоточенную в одном месте. По прибытии они увидят очертания огромного демона, пытающегося взять под контроль лежащую в обмороке девушку. Они воспользовались возможностью нанести удар, но Спарроу контратаковала, позволив Артукласу сбежать в хаосе. После затяжной битвы стражи подавили и усмирили её пыл, поскольку она не могла эффективно использовать свои новообретённые способности.`,
        br: `Elizabeth Dolores Sperrow II, uma mulher corajosa e feroz do reino de Etygia, teve um casamento político com o Rei de Eilys Edgar III, com o tempo ela se apaixonou por ele mas tudo mudou depois que seu marido foi assassinado por um demônio da floresta.
        <br A Rainha de Eilys ficou sedenta por vingança, sem saber o motivo pelo qual seu marido foi assassinado, ela declarou guerra aos seres mágicos, agora ela luta na linha de frente para se vingar e descobrir a verdade.`,
        zh: `　　曾經作為一名隱士，史佩羅勇敢而兇猛，過往一直追隨著惡魔阿圖克拉斯。她與她的家人住在薩蘇古隆恩熱帶雨林深處的一個村落，她那強大的冒險意識將她與她那一代膽小而謹慎的孩子們區分了開來。隨著她的家族一行，他們追隨著阿圖克拉斯替隱士們設下的道路。
        <br />　　阿圖克拉斯，近乎於探索與見聞，對於史佩羅勇敢冒險，尋求未知以及探索情報的好奇心感到興趣。他漸漸打造出一條專門迎合史佩羅需求的道路，將其他想要追隨崇拜他的隱士們通通遣送走。史佩羅注意到了這些變動，但阿圖克拉斯向她保證，是命運選擇了這條道路，迎接她的到來。在接下來這幾年來的訓練及準備中，隱士與惡魔的關係越來越緊密，而阿圖克拉斯則透漏與史佩羅結識為親屬關係的消息。
        <br />　　不幸的是，縱然在訓練與儀式當中史佩羅的力量一致受到大家讚揚，這個孩子依然無法完全掌握阿圖克拉斯共享給她的能量。阿圖克拉斯開始感到不耐煩，被孩子的無能給激怒了，決定將他一小部分份的能量強行灌輸到她的身體。這份能量對史佩羅來說太多了，她必須將大量的能量驅散才能保持意識清醒。
        <br />　　一組守衛者的小偵查隊注意到了匯集在一點的邪惡能量。到達之後，他們看到了一個更大的惡魔形體正在試圖操控一個已經倒下的女人。他們逮到了機會迎擊，但史佩羅展開了反擊，使得阿圖克拉斯在這場混亂當中逃脫而出。在一場曠日持久的戰鬥後，守衛隊制伏並打敗了她，因為她無法有效使用她那新發現的能力。`,
    },
    [LOCALE.BELLE_DESCRIPTION]: {
        en: 'Part of an ancient race of fay creatures in the ancient woods, Belle was born with arcane control over plants unmatched by any before her, she was a kindred elementalist and used her knowledge of nature to heal those in need, however both sides tried to recruit her but failed and while the guardians were merely disappointed, the hermits made repetitive attempts to augment her into their forces. Eventually the cultists decided to remove the threat and they brought a trio of hermit leaders: Flin, Kumihu, and Puppeteer to either taint her of kill her, Belle successfully defeated Flin before succumbing to the charm spells cast by Kumihu with her last fragment of consciousness she threw a pod at Kumihu which exploded in her face, as Belle got back onto her feet she was bound by strings materializing from Puppeteer\'s fingers and lost control over her body, as she was forced to walk back to the hermit camp she struggled against the glowing threads but she was no match for a major demon. At the hands of the hermits Belle was tortured and violated until her original happy and joyous self was trapped in the deepest corners of her mind while a new hateful personality arose and she was never the same again, maybe some arcane healer might come along and reawaken her old self or perhaps she shall be trapped as an insane hermit for eternity.',
        br: 'Parte de uma antiga raça de criaturas fay na floresta antiga, Belle nasceu com controle sobre as plantas, seu pai era um humano e sua mãe uma fada, depois de ter dois filhos, sua mãe escondeu sua família em uma parte isolada da floresta magica, quando ela e seu irmão cresceram, seu pai desapareceu misteriosamente sem deixar pistas, agora Belle e seu irmão procuram por seu pai e tentam esconder sua verdadeira identidade.',
        ru: 'Она, — частичка древней расы сказочных существ, живущих в древних лесах, родилась с волшебным даром контроля над растениями, и никто из её вида прежде не имел этой способности. Она была потомственной повелительницей элементов и использовала свои знания о природе, чтобы исцелять нуждающихся. Обе стороны предпринимали попытки завербовать её, но они были тщетны. В то время как стражи опустили руки, отшельники предпринимали неоднократные попытки усилить её, пытаясь сделать частью своей армии. В конце концов культисты решили решить всё раз и навсегда и привели троих лидеров-отшельников: Флина, Кумиху и Кукловода, чтобы либо осквернить ее до конца, либо убить. Белла успешно победила Флина, и прежде чем поддаться очаровывающим заклинаниям Кумиху, она смогла бросить взрывной бутон прямо в лицо ведьме. Нити Кукловода, появившиеся из его пальцев, оплетали Беллу, и в конце концов она потеряла контроль над своим телом. Ей был отдан приказ возвращаться в лагерь отшельников. Светящиеся нити не давали ей и шанса хоть как-то дать отпор и победить главного демона, и она вынуждена была подчиниться. Отшельники многочисленными истязаниями превратили прежде жизнерадостную и отзывчивую личность Беллы в нечто бесчувственное и ненавистное. Может быть, когда-то какой-нибудь целитель-волшебник и сможет пробудить её от зловещего контроля, но пока Белла остаётся узницей своих глубоких уголков разума, где её \'я\' уже, возможно, никогда не станет прежним.',
        zh: '　　作為住在神木中古老種族的妖精生物，蓓蕾生來就擁有任何植物無法比擬的奧術操控能力。她曾是有血統的元素師，並使用她大自然的知識治癒傷患，然而兩派勢力試圖徵召她加入都失敗了。而當守衛者一方打消主意之時，隱士們還是反覆試圖將她納入成為他們的一己之力。最終，邪教徒們決定抹除這份威脅，而他們帶來了三位領袖：弗林、庫咪戶與傀儡師來玷汙或抹殺她。在屈服於庫咪戶的魅惑咒術前，蓓蕾擊敗了弗林，並竭盡她那最後支離破碎的意識將一顆豆莢扔向庫咪戶，在她臉上炸裂。當蓓蕾要重新起身時，她被傀儡師手上操控的細線給束縛住，身體不得動彈。她被迫走回隱士的營地，她奮力掙扎抵抗發光的絲線，但在強大惡魔的面前，她完全無法抗衡。成了隱士們的囊中之物後，蓓蕾不斷受到凌辱與侵犯，直到她原本的快樂與喜悅都被困在最深處的角落。此時，她誕生了另一個充滿仇恨的人格，她已經不再是原本的她了。或許某位奧術治癒師會跟隨而來，重新將原本的她喚醒，又或許她會永遠受困，成為了一名瘋狂的隱士。',
    },
    [LOCALE.VEIL_DESCRIPTION]: {
        en: 'Will be added soon!',
        ru: 'Скоро будет добавлено!',
        br: 'Será adicionado em breve!',
        cz: 'Brzy bude přidáno!',
        zh: '即將加入，敬請期待！',
    },

    [LOCALE.FLIN_DESCRIPTION]: {
        en: 'Will be added soon!',
        ru: 'Скоро будет добавлено!',
        br: 'Será adicionado em breve!',
        cz: 'Brzy bude přidáno!',
        zh: '即將加入，敬請期待！',
    },
    [LOCALE.KIRA_DESCRIPTION]: {
        en: 'As a young girl, Kira used to sit at the window of her home and watch the lightning. As she grew up, she began a hobby of chasing storm clouds, hoping to see flashes of electricity in the sky. The rain did not bother her, the wind could not deter her, only when she felt the true power of the storm did she stop. As Kira reached the highest peak of a mountain, she was struck by the thunder she chased. As she fell, she was found by a hermit and brought back to a hidden encampment watched over by a demonic vassal. She was forged into whatever they wanted her to be against any free will. They made her into an electromancer, to aid the dark forces. They did not expect her to fight back as she called forth fury from above. Most of the hermits were caught unprepared and annihilated while the demonic leader named Draklavain strode through the barrage and would have killed her if not for hunting party of guardians attracted by the chaos. As she left with them, she found a tome and with it became an important asset to the crusade against the demons, although some say the tome found her.',
        br: 'Ex-general do exército do rei. Agora professora da Escola Mágica de demonologia do reino de Eilys, Kira é uma renomada instrutora, possuindo o demônio relâmpago selado em seu livro, ela procura ensinar a seus alunos a melhor maneira de usar o poder dos selados.',
        ru: 'В юности Кира любила сидеть у окна своего дома и наблюдать за молниями, а повзрослев, увлеклась погоней за грозовыми тучами в надежде увидеть в небе вспышки молний. Дождь её совершенно не беспокоил, а ветер не мог удержать её порыв. Лишь только почувствовав истинную силу бури она смогла остановиться. Она и не заметила, как достигла самой высокой вершины горы. Гром, за которым она гналась, поразил её, из-за чего она сорвалась и упала, потеряв сознание, но чудом выжив. Её обнаружил отшельник и отнёс в скрытый лагерь под покровительством демонического вассала. Против её воли они провели тёмный ритуал,  превратив в электроманта, в надежде, что она поможет тёмным силам. Неожиданным стал для всех оказанный ею отпор: вызванная ярость с небес застала врасплох многих отшельников, стерев их с лица земли в одно мгновение. В это время, лидер демонов Драклавейн пробирался через заградительный огонь из вспышек молний в надежде уничтожить отступницу. К счастью, стражи, охотящиеся на силы хаоса нашли её и помогли сбежать, сокрыв от опасности. Во время побега Кира обнаружила старинную книгу на своём пути, которую она сумела использовать в дальнейшем походе против армии демонов. Поговаривают, что не она нашла книгу, а книга нашла её.',
        zh: '　　曾是年輕少女時，奇菈習慣坐在她家中的窗邊觀望閃電。長大後，追尋雷雲，期望能夠在空中看見閃電成為她的愛好，就連風雨也無法撼動她那蓬勃的心，直到她感受到暴風的真實之力後才會就此打住。當她爬向山頂的巔峰，她被她不斷追逐的閃電擊中，她沉寂後被一名隱士發現，並帶回了一個祕密營地交由惡魔附庸看守。違背了她的自由意志，他們想將她鍛造成任何他們想要的樣子，使她成為協助闇黑勢力的雷電巫師。但他們沒料想到她會召喚雷霆之怒展開逆襲，大部分的隱士因而毫無防備的被擒獲與殲滅，若不是此時此刻，惡魔首領「德拉克拉文」正為了被混沌勢力吸引而來的守衛狩獵隊而穿越槍林彈雨，他大概早已斷送她的性命。當她與守衛者們同行離開後，她發現了一本魔道書，而有了這本書，它將會成為與惡魔黨決一聖戰的重要資產。雖然有人是這麼說的：「是這本書找到了她。」',
    },
    [LOCALE.HAZEL_DESCRIPTION]: {
        en: 'Will be added soon!',
        ru: 'Скоро будет добавлено!',
        br: 'Será adicionado em breve!',
        cz: 'Brzy bude přidáno!',
        zh: '即將加入，敬請期待！',
    },
    [LOCALE.AREL_DESCRIPTION]: {
        en: 'Will be added soon!',
        ru: 'Скоро будет добавлено!',
        br: 'Será adicionado em breve!',
        cz: 'Brzy bude přidáno!',
        zh: '即將加入，敬請期待！',
    },
    [LOCALE.ALVAR_DESCRIPTION]: {
        en: 'Will be added soon!',
        ru: 'Скоро будет добавлено!',
        br: 'Será adicionado em breve!',
        cz: 'Brzy bude přidáno!',
        zh: '即將加入，敬請期待！',
    },

    [LOCALE.DAMAGE_TYPE_NORMAL]: {
        en: 'Physical',
        ru: 'Физический',
        br: 'Normal',
        cz: 'Normální',
        zh: '一般攻擊',
    },

    [LOCALE.DAMAGE_TYPE_MAGICAL]: {
        en: 'Magical',
        ru: 'Магический',
        br: 'Mágica',
        cz: 'Magický',
        zh: '魔法攻擊',
    },

    [LOCALE.DAMAGE_TYPE_PURE]: {
        en: 'Pure',
        ru: 'Чистый',
        br: 'Puro',
        cz: 'čistý',
        zh: '純攻擊',
    },

    [LOCALE.DAMAGE_TYPE_DASH]: {
        en: 'Dash',
        ru: 'Рывок',
        br: 'Dash',
        cz: 'Skok', // the closest to dash i could find is skok=jump
        zh: '衝刺',
    },

    [LOCALE.DAMAGE_TYPE_HEAL]: {
        en: 'Heal',
        ru: 'Исцеление',
        br: 'Cura',
        cz: 'Léčení',
        zh: '治癒',
    },

    [LOCALE.DAMAGE_TYPE_BUFF]: {
        en: 'Buff',
        ru: 'Усиление',
        br: 'Buff',
        cz: 'Posílení',
        zh: '強化',
    },

    [LOCALE.COOLDOWN]: {
        en: 'Cooldown',
        ru: 'Перезарядка',
        br: 'Recarga',
        cz: 'Cooldown', // could not find a better translation, even most games that have CZ support just use 'cooldown'
        zh: '冷卻時間',
    },

    [LOCALE.LEVEL]: {
        en: 'Level',
        ru: 'Уровень',
        br: 'Nível',
        cz: 'Úroveň',
        zh: '等級',
    },

    [LOCALE.RED_TEAM]: {
        en: 'Red Team',
        ru: 'Красная команда',
        br: 'Time Vermelho',
        cz: 'Rudý tým',
        zh: '紅隊',
    },

    [LOCALE.BLUE_TEAM]: {
        en: 'Blue Team',
        ru: 'Синяя команда',
        br: 'Time Azul',
        cz: 'Modrý tým',
        zh: '藍隊',
    },

    [LOCALE.SECOND]: {
        en: 'Seconds',
        ru: 'сек.',
        br: 'Segundos',
        cz: 'Vteřin',
        zh: '秒',
    },

    [LOCALE.WARNING_NOT_IN_BASE]: {
        en: 'You can not buy items outside base!',
        ru: 'Вы не можете покупать предметы вне своей базы!',
        br: 'Você não pode comprar itens fora da base!',
        cz: 'Nemůžete nakupovat předměty mimo základnu!',
        zh: '你不能在你的基地外購買物品！',
    },

    [LOCALE.WARNING_TOWER_ATTK]: {
        en: 'Careful! You\'ve been targeted by tower ! Fall back!',
        ru: 'Осторожно! Вы были атакованы башней! Отступайте!',
        br: 'Cuidado! Você é alvo de uma torre.',
        cz: 'Pozor! Byli jste zacílen věží! Ustupte!',
        zh: '小心！你已被城池鎖定目標！快逃！',
    },

    [LOCALE.TRAINING_WELCOME]: {
        en: 'Welcome to Kingdom of Pixels!',
        ru: 'Добро пожаловать в Kingdom of Pixels!',
        br: 'Bem-vindo a Kingdom of Pixels!',
        cz: 'Vítejte v království pixelů!',
        zh: '歡迎來到像素王國！',
    },

    [LOCALE.TRAINING_GOAL_TARGET]: {
        en:
            'Your goal is to destroy the enemy\'s crystal! \n' +
            'Only your minions can damage it! You cannot destroy it with your attacks!\n' +
            'You need to push 4 minions in to win the game!' +
            '\n\n[Press space to continue!]',
        ru:
            'Ваша цель - уничтожить вражеский кристалл! \n' +
            'Только Ваши миньоны могут нанести ему урон! Своими атаками его уничтожить не удастся!\n' +
            'Вам надо привести к нему 4 союзных миньона, чтобы победить!' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Seu objetivo é destruir o Cristal na Base do inimigo! \n' +
            'Apenas seus Minions podem danificá-la! Você não pode destruí-la com seus ataques!\n' +
            'Você precisa levar 4 minions para ganhar o jogo!' +
            '\n\n[Pressione espaço para continuar!]',
        // minion = poskok in LoL, but i am going to call them pěšáci
        cz:
            'Vaším cílem je zničit nepřátelský krystal! \n' +
            'Pouze vaši pěšáci ho mohou poškodit! Nelze jej zničit vašimi útoky!\n' +
            'Abyste vyhráli hru, musíte udeřit čtyřmi pěšáky!' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '你的目標是摧毀敵方水晶！\n' +
            '只有你的小兵們可以造成傷害！你不能透過你的攻擊摧毀它！\n' +
            '你需要推進四個小兵來獲得遊戲勝利！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_TOWER]: {
        en:
            'But FIRST, you must destroy the enemy tower!\n' +
            'DO NOT ATTACK THE TOWER WITHOUT MINIONS! You need minions to tank the tower\'s damage! \n' +
            'Be careful! Attacking an enemy hero while inside the tower\'s range makes it target you!' +
            '\n\n[Press space to continue!]',
        ru:
            'Но СНАЧАЛА Вы должны уничтожить вражескую башню!\n' +
            'НЕ АТАКУЙТЕ БАШНЮ БЕЗ СОЮЗНЫХ МИНЬОНОВ! Вам они необходимы, чтобы заблокировать урон башни! \n' +
            'Будьте осторожны! Вражеская башня выберет Вас целью, если Вы начнёте атаковать вражеского героя в её радиусе!' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Mas primeiro, você deve destruir a torre inimiga!\n' +
            'NÃO ATAQUE A TORRE SEM MINIONS! Você precisa deles para controlar o dano da torre! \n' +
            'Tome cuidado! Atacar um herói inimigo dentro do alcance da torre, faz com que ela atinja você!' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'Ale nejprve musíte zničit nepřátelskou věž!\n' +
            'NEÚTOČTE NA VĚŽ BEZ PĚŠÁKŮ! K tankování poškození věže potřebujete pěšáky!\n' +
            'Buďte opatrní! Když zaútočíte na nepřátelského hrdinu v dosahu věže, stanete se terčem vy!' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '但首先，你必須摧毀敵方城池！\n' +
            '不要在沒有小兵的情況下攻擊城池！你必須仰賴小兵來抵禦城池的傷害！\n' +
            '小心！攻擊在城池內的敵方英雄會導致城池攻擊鎖定你！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_MINIONS]: {
        en:
            'Those are your minions, they spawn every 20 seconds from your crystal!\n' +
            'Killing an enemy minion gives you additional gold!\n' +
            'Use these minions to tank tower damage and destroy the enemy crystal\n' +
            'Enemy minions can hurt you, so be careful of them also!' +
            '\n\n[Press space to continue!]',
        ru:
            'Это - ваши миньоны. Они появляются каждые 20 секунд!\n' +
            'Вы получаете дополнительное золото, убивая вражеских миньонов!\n' +
            'Используйте союзных миньонов, чтобы башня атаковала их, а также чтобы уничтожить вражеский кристалл\n' +
            'Вражеские миньоны могут нанести вам урон, поэтому будьте бдительны!' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Esses são seus Minions, eles surgem a cada 20 segundos do seu cristal!\n' +
            'Matar um Minion inimigo dá a você ouro adicional!\n' +
            'Use esses Minions para segurar o dano da torre inimiga para você conseguir destrui-la.\n' +
            'Minions inimigos podem te dar muito dano, então não tente matá-los sem ajuda.' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'To jsou tvoji pěšáci, líhnou se každých 20 vteřin krystalů!\n' +
            'Zabitím nepřátelského pěšáka získáte další zlato!\n' +
            'Použijte tyto pěšáky k poškození věže a zničení nepřátelského krystalu\n' +
            'Nepřátelští pěšáci ti mohou ublížit, tak si na ně také dej pozor!' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '這些是你的小兵們，每隔 20秒他們會從你的水晶生成！\n' +
            '消滅一個敵方小兵給予你額外黃金！。\n' +
            '運用那些小兵來抵禦城池傷害以及摧毀敵方水晶\n' +
            '敵方小兵能對你造成傷害，所以也要小心他們！！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_GOLD_RUNE]: {
        en:
            'At the top, you can find the Gold Rune! \n' +
            'Gold runes give you 50+ Gold as the game progresses!\n' +
            'First gold rune spawns at 00:00 in-game time!\n' +
            '\n\n[Press space to continue!]',
        ru:
            'Здесь Вы можете найти руну золота! \n' +
            'Руна золота даёт вам 50+ золота по ходу игры!\n' +
            'Первая руна золота появляется в 0:00 по времени матча!\n' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'No topo do mapa, você pode encontrar uma Runa amarela de Ouro! \n' +
            'Ela da 50+ ouro a você conforme o jogo avança!\n' +
            'A primeira runa de ouro surge às 00:00, hora do jogo!\n' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'Nahoře najdete Zlatou runu! \n' +
            'Zlaté runy vám v průběhu hry dávají 50+ zlatých!\n' +
            'První zlatá runa se objeví 00:00 herniho casu!\n' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '在頂端，你可以找到黃金符文！\n' +
            '黃金符文給予你 50枚黃金，隨著遊戲進展而增加！\n' +
            '第一個黃金符文於遊戲時間 0:00後生成！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_POWER_RUNE]: {
        en:
            'At the bottom, you can find the Power Runes! \n' +
            'Here, you can find 4 different types of runes.\n' +
            'First power rune spawns at 01:00, and consecutive ones at each minute-mark!\n' +
            '\n\n[Press space to continue!]',
        ru:
            'Здесь Вы можете найти руну силы! \n' +
            'Она может иметь одну из 4 вариаций, каждая из которых обладает собственным эффектом\n' +
            'Первая руна силы появляется в 01:00, а каждая последующая - ровно в начале следующей минуты!\n' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Na parte inferior do mapa, há um altar com runas que contêm diferentes poderes. \n' +
            'Você pode encontrar 4 tipos diferentes de runas, elas reapacerem depois de um minuto depois de pegas.\n' +
            'Obtê-las pode ajudá-lo, mas sua duração é curta. A primeira runa de poder vai aparecer às 01:00.!\n' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'Ve spodní části můžete najít Runy Moci! \n' +
            'Tady můžete najít 4 různé typy run.\n' +
            'První runa moci se objevi v 01:00, a další po každé minutě!\n' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '在底部，你可以找到能量符文！\n' +
            '在這裡，你可以找到四種不同類型的符文\n' +
            '第一個能量符文於遊戲時間 1:00後生成，並持續性的在每分鐘提供！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_BUSHES]: {
        en:
            'You can hide from your enemies inside the bush! \n' +
            'They wont see you here as you\'re hidden, so you can ambush your enemies from bushes!\n' +
            'Hidden won\'t mean your invincible. Enemies can still hit you inside bushes, so take precaution!' +
            '\n\n[Press space to continue!]',
        ru:
            'Вы можете прятаться от противников в кустах! \n' +
            'Они не увидят Вас там, поэтому Вы с лёгкостью можете устраивать засады!\n' +
            'Но вы не получаете неуязвимость, прячась в кустах. Враги всё ещё могут попасть по вам, даже если вы находитесь там, поэтому будьте осторожны!\n' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Você pode se esconder de seus inimigos dentro de arbustos! \n' +
            'Você não pode ser visto por inimigos dentro de arbustos, então você pode fazer armadilhas!\n' +
            'Mas não significa que você fica invencível. Os inimigos ainda podem te atingir dentro de deles.' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'Můžeš se schovat před svými nepřáteli v keři! \n' +
            'Tady tě neuvidí, protože jsi schovaný, takže můžeš přepadnout své nepřátele ze zálohy!\n' +
            'Skrytý neznamená, že jste nepřemožitelní. Nepřátelé vás mohou stále zasáhnout uvnitř křoví, takže buďte opatrní!' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '你可以躲在灌木叢中從敵方視線隱藏起來！\n' +
            '當你躲藏時對方看不見你，所以你可以從灌木叢中伏擊！\n' +
            '躲藏不代表你無敵，敵方攻擊依然可以打進灌木叢，所以請做好預防！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_ITEMS]: {
        en:
            'Control your mouse to buy items\n' +
            'Choose your items wisely! If you don\'t want the item, you can right-click and sell the item.\n' +
            'Selling an item 5 seconds after buying it will only refund 50% of its value!\n' +
            'Several items (Activable) can be used with the [1, 2, 3, 4, 5] keybinds !\n' +
            'REMEMBER! You can only buy inside your base!' +
            '\n\n[Press space to continue!]',
        ru:
            'Используйте Вашу мышь для покупки предметов! Наведите на пустой слот, а затем ПКМ по желаемому предмету для покупки!\n' +
            'Покупайте предметы с умом! Вы можете нажать правой кнопкой мыши для продажи предмета.\n' +
            'Продажа предмета по истечению 5 секунд после покупки возвратит всего лишь 50% от изначальной стоимости!\n' +
            'Активные предметы можно использовать, нажав клавиши [1, 2, 3, 4, 5], в соответствии с номером слота!\n' +
            'ЗАПОМНИТЕ! Вы можете покупать предметы только находясь на своей базе!' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Use seu mouse para comprar itens, escolha seus itens com sabedoria!\n' +
            'Dependendo do item que escolher, poderá mudar sua forma de jogar.\n' +
            'Vender um item 5 segundos depois de comprá-lo, reembolsará apenas 50% do seu valor!\n' +
            'Vários itens (ativáveis) podem ser usados ​​com os números [1, 2, 3, 4, 5] em seu teclado!\n' +
            'LEMBRE-SE! Você só pode comprar itens dentro da sua base!' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'K nákupu předmětu použijte myš\n' +
            'Vybírejte své předměty moudře! Pokud jej nechcete, můžete kliknout pravým tlačítkem u myši a prodat.\n' +
            'Prodáte-li předmět 5 sekund po jeho zakoupení, vrátí se vam pouze 50 % jeho hodnoty!\n' +
            'S klávesovými zkratkami [1, 2, 3, 4, 5] lze použít některé (Aktivovatelné) předměty!\n' +
            'PAMATUJTE! Nakupovat můžete pouze ve své základne!' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '操控你的滑鼠購買物品\n' +
            '謹慎選擇物品！如果你不想要這物品，你可以按右鍵售出。\n' +
            '若在五秒後售出物品，只能退還50%的金額\n' +
            '有許多物品（可發動）可以按[1、2、3、4、5]鍵發動效果！！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_ABILITES]: {
        en:
            'At the bottom you can see your hero\'s abilites!\n' +
            '[J] [K] [L] are the keybinds for your attacks / abilities\n' +
            '[B] is Recall to teleport back to your base! It will take 5 seconds to finish the recall before you teleport.\n' +
            'You can hover your cursor over the abilities to see tooltips for more info!' +
            '\n\n[Press space to continue!]',
        ru:
            'Внизу Вы можете увидеть способности своего героя\n' +
            '[J] [K] [L] - горячие клавиши для использования\n' +
            '[B] - возвращение на базу! Возвращение занимает 5 секунд, прежде чем вы телепортируетесь.\n' +
            'Вы можете навести на любую из способностей, чтобы раскрыть её описание!' +
            '\n\n[Нажмите пробел для продолжения!]',
        br:
            'Na parte inferior, você pode ver as habilidades do seu personagem!\n' +
            '[J] [K] [L] são os atalhos de teclado para seus ataques / habilidades,\n' +
            '[B] é o Retorno, Você se teletransportar de volta para sua base! levará 5 segundos antes de você se teletransportar.\n' +
            'Você pode passar o cursor sobre as habilidades para ver dicas e obter mais informações!' +
            '\n\n[Pressione espaço para continuar!]',
        cz:
            'Ve spodní části okna vidíš schopnosti tvého hrdiny!\n' +
            '[J] [K] [L] jsou klávesy pro útoky / schopnosti\n' +
            '[B] je Odvolání pro teleportování zpět do vaši základny! Při použití bude trvat 5 vteřin, než se teleportujete.\n' +
            'Můžete najet kurzorem na schopnosti a zobrazit popisky pro více informací!' +
            '\n\n[Pokračujte stisknutím mezerníku!]',
        zh:
            '在底部你可以看見你的英雄技能！\n' +
            '[J]、[K]、[L] 鍵是你的技能發動鍵\n' +
            '[B] 鍵用來將你召回基地！在回到基地前需要花費五秒時間完成傳送作業\n' +
            '你可以移動游標來觀看技能詳細資訊！\n' +
            '\n\n按空白鍵以繼續！',
    },

    [LOCALE.TRAINING_PLAY]: {
        en:
            'Your objective now is to defeat the enemy bot! \n' +
            'Use the A and D keys to move left or right\n' +
            'Use W to JUMP and S to DROP DOWN from a platform\n' +
            'Good luck and have fun !',
        ru:
            'Теперь Вы должны одолеть вражеского бота! \n' +
            'Используйте клавиши A и D для движения влево/вправо\n' +
            'Используйте W для прыжка и S для спуска вниз\n' +
            'Удачи, герой! Повеселитесь как следует!',
        br:
            'Seu objetivo agora é derrotar o bot inimigo! (Kumihu) \n' +
            'Use as teclas A e D para mover para a ESQUERDA ou DIREITA;\n' +
            'Use W para PULAR e S para DESCER de uma plataforma;\n' +
            'Boa sorte e divirta-se!',
        cz:
            'Vaším cílem je nyní porazit nepřátelského bota! \n' +
            'K pohybu doleva nebo doprava použijte klávesy A a D\n' +
            'Pomocí klaves W skočíš a S sestoupíš z platformy\n' +
            'Hodně štěstí a bav se !',
        zh:
            '你現在的目標是擊敗敵方電腦！\n' +
            '使用A、D鍵來左右移動\n' +
            '使用 W 鍵跳躍、S鍵從平台降落\n' +
            '祝你好運，遊玩愉快！',
    },

    [LOCALE.LOGOUT]: {
        en: 'Logout',
        ru: 'Выход',
        br: 'Sair',
        cz: 'Odhlásit se',
        zh: '登出',
    },
    [LOCALE.FLOATING_NUMBERS]: {
        en: 'Floating Numbers',
        ru: 'Всплывающие числа',
        br: 'Números Flutuantes',
        cz: 'Plovoucí čísla',
        zh: '流動號碼',
    },
    [LOCALE.FULL_SCREEN]: {
        en: 'Toggle full screen',
        ru: 'Полноэкранный режим',
        br: 'Tela cheia',
        cz: 'Zapnout režim plné obrazovky',
        zh: '釘選全螢幕',
    },
    [LOCALE.MOUSE_SUPPORT]: {
        en: 'Mouse Support',
        ru: 'Поддержка мыши',
        br: 'Suporte para Mouse',
        cz: 'Podpora Myši',
        zh: '滑鼠支援',
    },
    [LOCALE.GLOBAL_CHAT]: {
        en: 'Global Chat',
        ru: 'Глобальный чат',
        br: 'Chat Global',
        cz: 'Globální chat',
        zh: '全球聊天',
    },
    [LOCALE.HOME]: {
        en: 'Home',
        ru: 'Домой',
        br: 'Inicio',
        cz: 'Domů',
        zh: '首頁',
    },
    [LOCALE.PLAY]: {
        en: 'Play',
        ru: 'Играть',
        br: 'Jogar',
        cz: 'Hrát',
        zh: '遊玩',
    },
    [LOCALE.LEADERBOARD]: {
        en: 'Leaderboard',
        ru: 'Таблица лидеров',
        br: 'Placar',
        cz: 'Žebříček',
        zh: '排行榜',
    },
    [LOCALE.HEROES]: {
        en: 'Heroes',
        ru: 'Герои',
        br: 'Personagens',
        cz: 'Hrdinové',
        zh: '英雄榜',
    },
    [LOCALE.HERO]: {
        en: 'Hero',
        ru: 'Герой',
        br: 'Personagem',
        cz: 'Hrdina',
        zh: '英雄',
    },
    [LOCALE.WAITING_FOR_OPPONENTS]: {
        en: 'Waiting for opponents',
        ru: 'Ожидание оппонентов',
        br: 'Esperando oponentes',
        cz: 'Čekání na soupeře',
        zh: '等待對手中',
    },
    [LOCALE.TIME_TO_BATTLE]: {
        en: 'Time to battle',
        ru: 'Времени до начала',
        br: 'Tempo de escolha',
        cz: 'Čas bojovat',
        zh: '距戰鬥時間',
    },
    [LOCALE.RANDOM_PICK]: {
        en: 'Random Pick',
        ru: 'Случайный выбор',
        br: 'Escolha aleatória',
        cz: 'Náhodný Výběr',
        zh: '亂數選擇',
    },
    [LOCALE.LOCKED_IN]: {
        en: 'Locked In',
        ru: 'Выбрано',
        br: 'Escolhido',
        cz: 'Vybráno',
        zh: '已鎖定',
    },
    [LOCALE.PICK_HERO]: {
        en: 'Pick Hero',
        ru: 'Выбрать героя',
        br: 'Confirmar',
        cz: 'Vyber Hrdinu',
        zh: '選擇英雄',
    },
    [LOCALE.BAN_HERO]: {
        en: 'Ban Hero',
        br: 'Banir personagem',
        cz: 'Ban Hrdinu',
        zh: '禁掉英雄',
    },
    [LOCALE.ONLINE_PLAYERS]: {
        en: 'Online Players',
        ru: 'Игроков онлайн',
        br: 'Jogadores Online',
        cz: 'Online hráči',
        zh: '線上玩家數',
    },
    [LOCALE.RATING]: {
        en: 'Rating',
        ru: 'Рейтинг',
        br: 'Pontos',
        cz: 'Hodnocení',
        zh: '評級',
    },
    [LOCALE.MMR]: {
        en: 'MMR',
        ru: 'MMR',
        br: 'MMR',
        cz: 'MMR',
        zh: '匹配等級',
    },
    [LOCALE.TOTAL_GAMES]: {
        en: 'Total games',
        ru: 'Всего игр',
        br: 'Total de jogos',
        cz: 'Celkově her',
        zh: '總遊玩次數',
    },
    [LOCALE.TOTAL_WINS]: {
        en: 'Total wins',
        ru: 'Всего побед',
        br: 'Total de vitórias',
        cz: 'Celkově výtězství',
        zh: '總勝利次數',
    },
    [LOCALE.GAME_WINS]: {
        en: 'Wins',
        ru: 'Побед',
        br: 'vitórias',
        cz: 'Výtězství',
        zh: '勝利次數',
    },
    [LOCALE.GAME_LOSSES]: {
        en: 'Losses',
        ru: 'Поражений',
        br: 'Derrotas',
        cz: 'Proher',
        zh: '戰敗次數',
    },
    [LOCALE.RANK]: {
        en: 'Rank',
        ru: 'Ранг',
        br: 'Rank',
        cz: 'Hodnost',
        zh: '等級',
    },
    [LOCALE.PLAYER]: {
        en: 'Player',
        ru: 'Игрок',
        br: 'Jogador',
        cz: 'Hráč',
        zh: '玩家',
    },
    [LOCALE.PLAYERS]: {
        en: 'Players',
        br: 'Jogador',
        ru: 'Игроки',
        cz: 'Hráči',
        zh: '玩家數',
    },
    [LOCALE.CHOOSE_HERO]: {
        en: 'CHOOSE YOUR HERO',
        ru: 'ВЫБЕРИТЕ ВАШЕГО ГЕРОЯ',
        br: 'Escolha seu Personagem',
        cz: 'VYBER HRDINU',
        zh: '選擇你的英雄',
    },
    [LOCALE.TRAINING_MATCH]: {
        en: 'Training Match (AI)',
        ru: 'Тренировочный матч (ИИ)',
        br: 'Partida de Tutorial (AI)',
        cz: 'Tréninkový zápas (UI)',
        zh: '練習賽（電腦）',
    },
    [LOCALE.PRACTICE_MATCH]: {
        en: 'Practice hero',
        ru: 'Тренировка',
        br: 'Treino',
        cz: 'Vyzkoušet hrdinu',
        zh: '測試英雄',
    },
    [LOCALE.PLAY_NOW]: {
        en: 'Play now!',
        ru: 'Сыграть сейчас!',
        br: 'Jogar agora!',
        cz: 'Hrát teď!',
        zh: '開始玩！',
    },
    [LOCALE.TIME]: {
        en: 'Time',
        ru: 'Время',
        br: 'Tempo',
        cz: 'Čas',
        zh: '時間',
    },
    [LOCALE.TAG_MAGE]: {
        en: 'MAGE',
        ru: 'МАГ',
        br: 'MAGO',
        cz: 'MÁG',
        zh: '法師',
    },
    [LOCALE.TAG_ASSASSIN]: {
        en: 'ASSASSIN',
        ru: 'УБИЙЦА',
        br: 'ASSASSINO',
        cz: 'ASSASSÍN',
        zh: '刺客',
    },
    [LOCALE.TAG_BRUISER]: {
        en: 'BRUISER',
        ru: 'УБИЙЦА',
        br: 'LUTADOR',
        cz: 'ASSASSÍN',
        zh: '創擊者',
    },
    [LOCALE.TAG_TANK]: {
        en: 'TANK',
        ru: 'ТАНК',
        br: 'TANQUE',
        cz: 'TANK',
        zh: '坦克',
    },
    [LOCALE.TAG_SUPPORT]: {
        en: 'SUPPORT',
        ru: 'ПОДДЕРЖКА',
        br: 'SUPPORTE',
        cz: 'SUPPORT',
        zh: '支援',
    },
    [LOCALE.TAG_RANGE]: {
        en: 'RANGED',
        ru: 'ДАЛЬНИЙ БОЙ',
        br: 'A DISTANCIA',
        fr: 'À DISTANCE',
        cz: 'NA DÁLKU',
        zh: '遠程',
    },
    [LOCALE.TAG_RECOMMENDED]: {
        en: 'RECOMMENDED',
        ru: 'РЕКОМЕНДУЕМЫЕ',
        br: 'RECOMENDADO',
        cz: 'ODPORÚČAME',
        zh: '強力推薦',
    },

    /** POST SCENE */
    [LOCALE.POST_KDA]: {
        en: 'K/D/A',
        ru: 'У/С/С',
        br: 'K/D/A',
        cz: 'Z/U/A', // Zabití/Úmrtí/Asistence
        zh: '殺敵/死亡/助攻',
    },

    [LOCALE.POST_HERO_DAMAGE]: {
        en: 'Hero Damage',
        ru: 'Урон по героям',
        br: 'Dano do Personagem',
        cz: 'Poškození hrdinů',
        zh: '對英雄傷害',
    },

    [LOCALE.POST_TOWER_DAMAGE]: {
        en: 'Tower Damage',
        ru: 'Урон по башне',
        br: 'Dano da Torre',
        cz: 'Poškození vězí',
        zh: '對城池傷害',
    },

    [LOCALE.POST_MINIONS_KILLED]: {
        en: 'Last Hits',
        ru: 'Миньонов убито',
        br: 'Último Hit',
        cz: 'Pěšáků zabito',
        zh: '最後造成傷害',
    },

    [LOCALE.POST_FANCY_POINTS]: {
        en: 'Fancy points',
        cz: 'Luxusní body'
    },

    [LOCALE.POST_TOTAL_NETWORTH]: {
        en: 'Total Networth',
        ru: 'Всего золота',
        br: 'Total de dano',
        cz: 'Majetek',
        zh: '獲得總價值',
    },

    [LOCALE.POST_LEAVE_GAME]: {
        en: 'Leave Game',
        ru: 'Покинуть игру',
        br: 'Voltar ao inicio',
        cz: 'Opustit Hru',
        zh: '離開遊戲',
    },
    [LOCALE.POST_BLUE_TEAM_WIN]: {
        en: 'Blue team won!',
        ru: 'Синяя команда победила!',
        br: 'Time azul Venceu!',
        cz: 'Vyhrál modrý tím!',
        zh: '籃隊獲勝！',
    },
    [LOCALE.POST_RED_TEAM_WIN]: {
        en: 'Red team won!',
        ru: 'Красная команда победила!',
        br: 'Time vermelho Venceu!',
        cz: 'Vyhrál rudý tím!',
        zh: '紅隊獲勝！',
    },

    /** Chat */
    [LOCALE.CHAT_ALL]: {
        en: 'ALL',
        ru: 'ВСЕМ',
        br: 'Todos',
        cz: 'VŠE',
        zh: '大家',
    },
    [LOCALE.CHAT_ALLIES]: {
        en: 'ALLIES',
        ru: 'СОЮЗНИКАМ',
        br: 'Grupo',
        cz: 'SPOJENCI',
        zh: '隊友',
    },
    [LOCALE.CHAT_GAMEMASTER]: {
        en: 'GAMEMASTER',
        ru: 'ИГРОВОЙ МАСТЕР',
        br: 'Administrador',
        cz: 'GAMEMASTER',
        zh: '管理員',
    },

    /** Popups */
    [LOCALE.POPUP_SELECT_SEND]: {
        en: 'Send',
        ru: 'Отправить',
        br: 'Mandar',
        cz: 'Odeslat',
        zh: 'ID進房',
    },
    [LOCALE.POPUP_SELECT_ACCEPT]: {
        en: 'Accept',
        ru: 'Принять',
        br: 'Aceitar',
        cz: 'Příjmout',
        zh: '接受',
    },
    [LOCALE.POPUP_SELECT_REJECT]: {
        en: 'Reject',
        ru: 'Отклонить',
        br: 'Recusar',
        cz: 'Zámítnout',
        zh: '拒絕',
    },
    [LOCALE.POPUP_SELECT_CLOSE]: {
        en: 'Close',
        ru: 'Закрыть',
        br: 'Fechar',
        cz: 'Zavřít',
        zh: '關閉',
    },
    [LOCALE.FORCE_RENAME_SELECT_NAME]: {
        en: 'Select your name!',
        ru: 'Выберите ваше имя!',
        br: 'Escolha seu nome!',
        cz: 'Vyberte si svou prezdivku. ',
        zh: '輸入你的名稱！',
    },
    [LOCALE.POPUP_SELECT_MESS_GUESTMODE]: {
        en: 'You have limited access to game! Your stats lost when you exit browser...<br /> Connect your <b style=\'color: red\'>G-Mail account</b> to access all features. and no ADS!',
        ru: 'У вас ограниченный доступ к игре! Ваша статистика будет утеряна, если вы закроете браузер...<br /> Подключите ваш <b style=\'color: red\'>аккаунт G-Mail</b> для получения доступа ко всем функциям и чтобы убрать рекламу!',
        br: 'Você tem acesso limitado ao jogo! Suas estatísticas são perdidas quando você sai do navegador...<br /> Conecte-se a sua <b style=\'color: red\'>Conta do G-Mail</b> para acessar todos os recursos, e sem anúncios!',
        cz: 'Máte omezený přístup ke hře! Vaš pokrok bude ztracen až ukončíte prohlížeč...<br /> Připojte svůj <b style=\'color: red\'>účet G-Mail</b> a získejte přístup ke všem funkcím. A žádné reklamy !',
        zh: '你以訪問受限狀態進入遊戲！你的遊玩紀錄將在離開瀏覽器後遺失…<br /> 連結你的 <b style=\'color: red\'>G-Mail 帳號</b> 以獲得所有功能，且無任何廣告！',
    },
    [LOCALE.POPUP_SELECT_NAME_GUESTMODE]: {
        en: 'GUEST MODE!',
        ru: 'РЕЖИМ ГОСТЯ!',
        br: 'MODO CONVIDADO!',
        cz: 'JSTE V REŽIME HOST!',
        zh: '陌生人模式！',
    },
    [LOCALE.POPUP_SELECT_GUESTMODE_OPT]: {
        en: 'Connect GMAIL Account',
        ru: 'Подключить аккаунт G-Mail',
        br: 'Conectar conta GMAIL',
        cz: 'Připojit účet GMAIL',
        zh: '連結G-Mail帳號',
    },
    [LOCALE.POPUP_BATTLE_END]: {
        en: 'Battle ended',
        ru: 'Битва окончена',
        br: 'Jogo encerrado',
        cz: 'Bitva je ukonce',
        zh: '戰鬥結束',
    },
    [LOCALE.POPUP_BATTLE_FOUND]: {
        en: 'Battle found !',
        ru: 'Найдена битва!',
        br: 'Jogo encontrado',
        cz: 'Nalezena bitva!',
        zh: '發現戰鬥！',
    },
    [LOCALE.POPUP_BATTLE_FOUND_MESS]: {
        en: 'Time remaining',
        ru: 'Времени осталось',
        br: 'Tempo restante',
        cz: 'Zbýva času',
        zh: '剩餘時間',
    },
    [LOCALE.POPUP_BATTLE_WAITING]: {
        en: 'Waiting for players...',
        ru: 'Ожидание игроков...',
        br: 'Esperando por jogadores ...',
        cz: 'Čekání na hráče...',
        zh: '等待其他玩家中…',
    },
    [LOCALE.POPUP_BATTLE_LEFT]: {
        en: 'Someone left...',
        ru: 'Кто-то вышел...',
        br: 'Alguém saiu ...',
        cz: 'Někdo opustil hru...',
        zh: '有人離開了…',
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING]: {
        en: 'For the first time you must pass throu training otherwise you can not play against players!',
        ru: 'Зайдя впервые, вам нужно пройти обучение, иначе вы не сможете играть против других игроков!',
        br: 'Como é sua primeira vez, você deve passar pelo treinamento, caso contrário você não poderá jogar contra outros jogadores!',
        cz: 'Nejprve musíš projít tréninkem než budeš moct hrát proti hráčům!',
        zh: '你必須先通過訓練合格，否則無法與玩家進行對決！',
    },
    [LOCALE.POPUP_SELECT_FIRST_TIME_TRAINING_START]: {
        en: 'Get me into a tutorial!',
        ru: 'Начать обучение!',
        br: 'Iniciar Tutorial',
        cz: 'Dostaň mě do tutoriálu!',
        zh: '讓我進入教程！',
    },
    [LOCALE.POPUP_SELECT_FAILED_QUEUE]: {
        en: 'Failed to queue, try again!',
        ru: 'Произошла ошибка во время попытки встать в очередь, попробуйте снова!',
        br: 'Falha ao entrar na fila, tente novamente!',
        cz: 'Nepodařilo se zařadit do fronty, zkuste to znovu!',
        zh: '入隊失敗，請重試！',
    },
    [LOCALE.POPUP_SELECT_BANNED_QUEUE]: {
        en: 'You are banned from queue for rejecting matches! try in ',
        ru: 'Ваша возможность стать в очередь заблокирована, так как вы отклоняли слишком много матчей! Попробуйте снова через ',
        br: 'Você foi banido da fila por rejeitar varias partidas! tente novamente em ',
        cz: 'Máte zákaz vstupu do fronty za odmítnutí zápasů! Zkuste to za',
        zh: '你因拒絕參戰被禁止入隊！請重試於',
    },

    [LOCALE.AN_GOT_A]: {
        en: 'got a ',
        ru: 'получает ',
        br: 'tenho um ',
        cz: 'dostal ',
        zh: '奪得',
    },
    [LOCALE.AN_IS_ON]: {
        en: 'is on ',
        ru: ' ',
        br: 'está ligado ',
        cz: 'má ',
        zh: '成了',
    },

    [LOCALE.AN_FIRST_BLOOD]: {
        en: 'First blood',
        ru: 'Первую кровь',
        br: 'Primeira morte',
        cz: 'První zabití',
        zh: '初殺',
    },

    [LOCALE.AN_DOUBLE_KILL]: {
        en: 'Double kill',
        ru: 'Даблкилл',
        br: 'DOUBLE KILL',
        cz: 'Dvojité zabití',
        zh: '雙殺',
    },
    [LOCALE.AN_TRIPLE_KILL]: {
        en: 'TRIPLE KILL',
        ru: 'ТРИПЛКИЛЛ',
        br: 'TRIPLE KILL',
        cz: 'TROJITÉ ZABITÍ',
        zh: '三殺',
    },
    [LOCALE.AN_ULTRA_KILL]: {
        en: 'ULTRA KILL!!',
        ru: 'КВАДРАКИЛЛ!!',
        br: 'ULTRA KILL!!',
        zh: '爆殺！！',
    },
    [LOCALE.AN_KILLING_SPREE]: {
        en: 'Killing spree',
        ru: 'получает серию убийств',
        br: 'MATANÇA!',
        cz: 'Zabíjející řádění',
        zh: '殺戮狂魔',
    },
    [LOCALE.AN_MEGA_KILL]: {
        en: 'Mega kill',
        ru: 'совершает мега-убийство',
        br: 'MEGA KILL!',
        cz: 'Mega zabití',
        zh: '超級殺戮者',
    },
    [LOCALE.AN_DOMINATING]: {
        en: 'Dominating',
        ru: 'доминирует',
        br: 'DOMINANDO!',
        cz: 'Dominujicí',
        zh: '主宰者',
    },
    [LOCALE.AN_RAMPAGE]: {
        en: 'Rampage',
        ru: 'в ярости',
        br: 'RAMPAGE!',
        cz: 'Krveprolití',
        zh: '狂者',
    },
    [LOCALE.AN_OWNAGE]: {
        en: 'OWNAGE!',
        ru: 'ПРЕВОСХОДЕН!',
        br: 'OWNAGE!',
        cz: 'VYNIKAJÍCÍ!',
        zh: '奪權者！',
    },
    [LOCALE.AN_GODLIKE]: {
        en: 'GODLIKE!',
        ru: 'БОГОПОДОБЕН!',
        br: 'DIVINO!',
        cz: 'BOŽSKÝ!',
        zh: '神乎其技！',
    },
    /** Runes */
    [LOCALE.HASTE_RUNE]: {
        en: 'Haste Rune',
        ru: 'Руна спешки',
        br: 'Runa de Aceleração',
        cz: 'Runa Spěchu',
        zh: '迅疾符文',
    },
    [LOCALE.DAMAGE_RUNE]: {
        en: 'Damage Rune',
        ru: 'Руна урона',
        br: 'Runa de dano',
        cz: 'Runa Poškození',
        zh: '傷害符文',
    },
    [LOCALE.ARCANE_RUNE]: {
        en: 'Arcane Rune',
        ru: 'Руна магии',
        br: 'Runa Arcana',
        cz: 'Runa Magie',
        zh: '奧術符文',
    },
    [LOCALE.HEALING_RUNE]: {
        en: 'Healing Rune',
        ru: 'Руна исцеления',
        br: 'Runa de cura',
        cz: 'Runa Léčení',
        zh: '治癒符文',
    },
    [LOCALE.BOUNTY_RUNE]: {
        en: 'Bounty Rune',
        ru: 'Руну золота',
        br: 'Runa da fortuna',
        cz: 'Runa zlata',
        zh: '黃金符文',
    },

    /** Stats */
    [LOCALE.ABILITY_POWER]: {
        en: 'Ability Power',
        ru: 'Сила умений',
        br: 'Poder de habilidade',
        cz: 'Síla kouzel',
        zh: '技能威力',
    },
    [LOCALE.DAMAGE]: {
        en: 'Attack Damage',
        ru: 'Сила атаки',
        br: 'Dano de ataque',
        cz: 'Poškození útoku',
        zh: '攻擊傷害',
    },
    [LOCALE.ATTACK_SPEED]: {
        en: 'Attack Speed',
        ru: 'Скорость атаки',
        br: 'Velocidade de ataque',
        cz: 'Rychlost útoku',
        zh: '攻擊速度',
    },
    [LOCALE.CRITICAL_CHANCE]: {
        en: 'Critical Chance',
        ru: 'Шанс крита',
        br: 'Chance de crítico',
        cz: 'Kritický zásah',
        zh: '爆擊機率',
    },
    [LOCALE.COOLDOWN_REDUCTION]: {
        en: 'Cooldown Reduction',
        ru: 'Сокращение перезарядки',
        br: 'Redução de recarga',
        cz: 'Redukce cooldownu',
        zh: '縮短冷卻時間',
    },
    [LOCALE.LIFESTEAL]: {
        en: 'Lifesteal',
        ru: 'Кража здоровья',
        br: 'Roubo de vida',
        cz: 'Krádež Zdraví',
        zh: '吸血值',
    },
    [LOCALE.MAGICAL_DEFENSE]: {
        en: 'Magic Resistance',
        ru: 'Защита от магии',
        br: 'Resistência mágica',
        cz: 'Protimagická obrana',
        zh: '魔法抗性',
    },
    [LOCALE.ARMOR]: {
        en: 'Armor',
        ru: 'Броня',
        br: 'Armadura',
        cz: 'Zbroj',
        zh: '裝甲值',
    },
    [LOCALE.HEALTH]: {
        en: 'Health',
        ru: 'Здоровье',
        br: 'Vida',
        cz: 'Zdravý',
        zh: '血量',
    },
    [LOCALE.HEALTH_REGEN]: {
        en: 'Health Regeneration',
        ru: 'Регенерация здоровья',
        br: 'Regeneração de vida',
        cz: 'Regenerace Zdravý',
        zh: '回血速度',
    },
    [LOCALE.MOVE_SPEED]: {
        en: 'Movement Speed',
        ru: 'Скорость передвижения',
        br: 'Velocidade de movimento',
        cz: 'Rychlost Pohybu',
        zh: '移動速度值',
    },
    [LOCALE.CONSUMABLE]: {
        en: 'Consumable',
        ru: 'Расходуемое',
        br: 'consumível',
        cz: 'Spotřebič',
        zh: '消耗品',
    },

    [LOCALE.PICKUP]: {
        en: 'picked up',
        ru: 'подобрал',
        cz: 'vzal',
        br: 'pegou',
        zh: '選擇',
    },
    [LOCALE.POPUP_DISCONNECTED]: {
        en: 'You\'ve been disconected from the server, please refresh the page!',
        ru: 'Потеряно соединение с сервером. Пожалуйста, обновите страницу!',
        br: 'Você foi desconectado do servidor, atualize a página!',
        cz: 'Nebylo možné navázat spojení s hrou. Obnovte webovu stránku.',
        zh: '你已從伺服器失連，請刷新頁面！',
    },
    [LOCALE.POPUP_REFRESH]: {
        en: 'refresh',
        ru: 'обновить',
        br: 'recarregar',
        cz: 'obnovení',
        zh: '刷新',
    },
    [LOCALE.YES]: {
        en: 'yes',
        ru: 'да',
        br: 'sim',
        cz: 'ano',
        zh: '是',
    },
    [LOCALE.NO]: {
        en: 'no',
        ru: 'нет',
        br: 'não',
        cz: 'ne',
        zh: '否',
    },
    [LOCALE.POPUP_LOGOUT_TITLE]: {
        en: 'Are you sure?',
        ru: 'Уверены ли вы?',
        br: 'Tem certeza?',
        cz: 'Jste si jisti?',
        zh: '確定嗎？',
    },
    [LOCALE.MSAA]: {
        en: 'Anti-aliasing',
        cz: 'Vyhlazovaní',
        br: 'Anti-aliasing',
        ru: 'Сглаживание',
        zh: '抗鋸齒',
    },
    [LOCALE.TWOVSTWO_COOP]: {
        en: '2 v 2 Co-op vs AI',
        ru: 'Совместная игра 2 vs 2 против ИИ',
        br: '2 v 2 Co-op vs AI',
        cz: '2 v 2 proti UI',
        zh: '二對二合作vs電腦',
    },
    [LOCALE.EASY_BOT]: {
        en: '1 v 1 Easy Bot',
        ru: '1 vs 1 Лёгкий бот',
        br: '1 v 1 Bot fácil',
        cz: '1 v 1 Lehký Bot',
        zh: '一對一簡單電腦',
    },
    [LOCALE.HARD_BOT]: {
        en: '1 v 1 Hard Bot',
        ru: '1 vs 1 Сложный Бот',
        cz: '1 v 1 Těžký Bot',
        zh: '一對一困難電腦',
    },
    [LOCALE.SPECTATE]: {
        en: 'Spectate',
        ru: 'Наблюдать',
        br: 'Spectar',
        cz: 'Sledovat',
        zh: '觀戰',
    },
    [LOCALE.WATCH]: {
        en: 'Battles',
        ru: 'Сражения',
        br: 'Batalhas',
        cz: 'Bitvy',
        zh: '戰鬥',
    },
    [LOCALE.VIEWERS]: {
        en: 'Viewers',
        ru: 'Зрителей',
        br: 'Espectadores',
        cz: 'Sleduje',
        zh: '觀眾數',
    },
    [LOCALE.POPUP_NO_GAMES_TO_SPECTATE]: {
        en: 'There are no games to spectate.',
        ru: 'Не найдено игр для просмотра.',
        br: 'Não há jogos para assistir.',
        cz: 'Nenašli sa žádné hry na sledování.',
        zh: '目前沒有進行中遊戲可觀看。',
    },
    [LOCALE.FREE_CAMERA]: {
        en: 'Free Camera',
        ru: 'Свободная камера',
        br: 'Camera Livre',
        cz: 'Volná Kamera',
        zh: '自由視角',
    },
    [LOCALE.SPECTATOR_CHAT_MESSAGE]: {
        en: 'Spectators in game: ',
        ru: 'Наблюдают за игрой: ',
        br: 'Espectadores no jogo: ',
        cz: 'Diváků v hře: ',
        zh: '觀眾數量',
    },
    [LOCALE.PRIVATE_LOBBY]: {
        en: 'Private lobby',
        ru: 'Приватное лобби',
        br: 'Sala privada',
        cz: 'Privátní lobby',
        zh: '私人開房',
    },
    [LOCALE.FIND_LOBBY]: {
        en: 'Find a lobby',
        ru: 'Найти лобби',
        br: 'Encontrar uma sala',
        cz: 'Najít lobby',
        zh: '尋找房間',
    },
    [LOCALE.CREATE_LOBBY]: {
        en: 'Create a lobby',
        ru: 'Создать лобби',
        br: 'Criar uma sala',
        cz: 'Vytvořte lobby',
        zh: '創建私房',
    },
    [LOCALE.TEAM_NAME]: {
        en: 'Team name: ',
        ru: 'Название команды: ',
        br: 'Nome do time: ',
        cz: 'Název týmu: ',
        zh: '團隊名稱',
    },
    [LOCALE.JOIN]: {
        en: 'Join',
        ru: 'Присоединиться',
        br: 'Junte-se',
        cz: 'Přidat se',
        zh: '加入',
    },
    [LOCALE.LEAVE]: {
        en: 'Leave',
        ru: 'Выйти',
        br: 'Sair',
        cz: 'Opustit',
        zh: '離開',
    },
    [LOCALE.START]: {
        en: 'Start',
        ru: 'Начать игру',
        br: 'Iniciar',
        cz: 'Začít',
        zh: '開始',
    },
    [LOCALE.LOBBY_NAME]: {
        en: 'Title',
        cz: 'Název',
    },
    [LOCALE.LOBBY_INIT_GOLDS]: {
        en: 'Initial Golds',
        ru: 'Начальное золото',
        br: 'Ouro inicial',
        cz: 'Počáteční zlaťaky',
        zh: '初始黃金',
    },
    [LOCALE.LOBBY_DRAFT_PHASE]: {
        en: 'Draft Mode',
        ru: 'Режим выбора',
        br: 'Modo editado',
        zh: '草案模式',
    },
    [LOCALE.DRAFT_BLIND_PICK]: {
        en: 'All Pick',
        ru: 'Выбор вслепую',
        br: 'Todos os picks',
        cz: 'Výber ze všech',
        zh: '無限制選角',
    },
    [LOCALE.DRAFT_CAPTAIN_DRAFT]: {
        en: 'Captain Draft',
        ru: 'Режим выбора (Капитаны)',
        br: 'Capitão',
        cz: 'Draft kapitánů',
        zh: '隊長草案',
    },
    [LOCALE.DRAFT_ALL_RANDOM]: {
        en: 'All Random',
        ru: 'Случайный выбор',
        br: 'Todos Aleatórios',
        cz: 'všichni náhodně',
        zh: '全部隨機選角',
    },
    [LOCALE.CAPTAIN_DRAFT_SELECT_CAPTAIN]: {
        en: 'Select captain!',
        ru: 'Выберите капитана!',
        br: 'Selecione o capitão!',
        cz: 'Vyber kapitána',
        zh: '選擇隊長！',
    },
    [LOCALE.CAPTAIN_DRAFT_ENEMY_TURN_TO_BAN]: {
        en: 'Enemy turn to ban!',
        ru: 'Вражеская очередь блокировать!',
        br: 'Turno do inimigo para banir!',
        cz: 'Nepřítel na tahu, Zakazování hrdinů!',
        zh: '輪到敵方禁角！',
    },
    [LOCALE.CAPTAIN_DRAFT_YOUR_TURN_TO_BAN]: {
        en: 'Your turn to ban!',
        ru: 'Ваша очередь блокировать!',
        br: 'Seu turno para banir!',
        cz: 'Jsi na tahu, Zakazování hrdinů!',
        zh: '輪到你禁角！',
    },
    [LOCALE.CAPTAIN_DRAFT_ENEMY_TURN_TO_PICK]: {
        en: 'Enemy turn to pick!',
        ru: 'Вражеская очередь выбирать!',
        br: 'Turno do inimigo para escolher!',
        cz: 'Nepřítel na tahu, vyberáni hrdinů!',
        zh: '輪到敵方選角！',
    },
    [LOCALE.CAPTAIN_DRAFT_YOUR_TURN_TO_PICK]: {
        en: 'Your turn to pick!',
        ru: 'Ваша очередь выбирать!',
        br: 'Seu turno para escolher!',
        cz: 'Jsi na tahu, vyberáni hrdinů!',
        zh: '輪到你選角',
    },
    [LOCALE.CAPTAIN_DRAFT_SELECT_HERO]: {
        en: 'Select a hero!',
        ru: 'Выберите героя!',
        br: 'Selecione seu personagem!',
        cz: 'Vybrat hrdinu',
        zh: '選擇一個英雄！',
    },
    [LOCALE.CAPTAIN_DRAFT_BECOME_CAPTAIN]: {
        en: 'Become captain!',
        ru: 'Стать капитаном!',
        br: 'Torne-se capitão!',
        cz: 'Stát se kapitánem',
        zh: '成為隊長！',
    },
    [LOCALE.TOURNAMENT_GAME]: {
        en: 'Tournament game!',
        ru: 'Турнирная игра!',
        br: 'Jogo de torneio!',
        zh: '巡迴賽！',
    },
    [LOCALE.BANNED_HEROES]: {
        en: 'Banned heroes',
        ru: 'Заблокированные герои',
        br: 'Heróis banidos',
        cz: 'Zakazaní hrdinové',
        zh: '禁掉英雄',
    },
    [LOCALE.RANKED_MATCH]: {
        en: 'Ranked',
        ru: 'Ранговые',
        br: 'Lutas',
        cz: 'Hodnocení',
        zh: '爬分賽',
    },
    [LOCALE.NORMAL_MATCH]: {
        en: 'Unranked',
        cz: 'Nehodnocení',
    },
    [LOCALE.AI_MATCH]: {
        en: 'AI Matches (PvAI):',
        ru: 'Игры против ботов:',
        br: 'Partida contra Bot (PvAI):',
        cz: 'Zápasi proti botúm (PvUI):',
        zh: '電腦對決 (人對電腦)：',
    },
    [LOCALE.PLAYER_STATS]: {
        en: 'Player stats',
        ru: 'Статистика игрока',
        br: 'Estatísticas do jogador',
        zh: '玩家狀態',
    },
    [LOCALE.WINRATE]: {
        en: 'Winrate',
        ru: 'Доля побед',
        br: 'Taxa de vitórias',
        zh: '勝率',
    },
    [LOCALE.RECORD]: {
        en: 'Record',
        ru: 'Матчи',
        br: 'Registro',
        zh: '紀錄',
    },
    [LOCALE.MATCH_WON]: {
        en: 'Won match',
        ru: 'Победа',
        br: 'Ganhou a partida',
        cz: 'Výhra',
        zh: '勝利',
    },
    [LOCALE.MATCH_LOSE]: {
        en: 'Lost match',
        ru: 'Поражение',
        br: 'Perdeu a partida',
        cz: 'Prohra',
        zh: '敗北',
    },
    [LOCALE.VERY_HIGH_SKILL]: {
        en: 'Very high skill',
        ru: 'Очень высокий уровень',
        br: 'Habilidade muito alta',
        cz: 'Velmi vysoká dovednost',
        zh: '頂尖技術區間',
    },
    [LOCALE.HIGH_SKILL]: {
        en: 'High skill',
        ru: 'Высокий уровень',
        br: 'Habilidade alta',
        cz: 'Vysoká dovednost',
        zh: '高技術區間',
    },
    [LOCALE.NORMAL_SKILL]: {
        en: 'Normal skill',
        ru: 'Нормальный уровень',
        br: 'Habilidade normal',
        cz: 'Normální dovednost',
        zh: '一般技術區間',
    },

    /** Settings */
    [LOCALE.ST_GENERAL]: {
        en: 'General',
        cz: 'Hlávne',
        br: 'Geral',
        ru: 'Общие',
        zh: '主要',
    },
    [LOCALE.ST_AUDIO]: {
        en: 'Audio',
        ru: 'Звук',
        br: 'Áudio',
        zh: '音源',
    },
    [LOCALE.ST_HOTKEYS]: {
        en: 'Hotkeys',
        ru: 'Горячие клавиши',
        br: 'Teclas de atalho',
        zh: '按鍵',
    },
    [LOCALE.ST_MISC]: {
        en: 'Misc',
        ru: 'Прочее',
        br: 'Diversos',
        zh: '雜項',
    },
    [LOCALE.ST_AUDIO_MASTER_VOLUME]: {
        en: 'Master volume',
        ru: 'Общая громкость',
        br: 'Volume principal',
        zh: '主音量',
    },
    [LOCALE.MOVEMENT]: {
        en: 'Movement',
        cz: 'Pohyb',
        br: 'Movimento',
        ru: 'Передвижение',
        zh: '移動速度',
    },
    [LOCALE.ABILITES]: {
        en: 'Abilites',
        cz: 'Schopnosti',
        br: 'Habilidades',
        ru: 'Способности',
        zh: '技能',
    },
    [LOCALE.ITEMS]: {
        en: 'Items',
        cz: 'Předměty',
        br: 'Itens',
        ru: 'Предметы',
        zh: '物品',
    },
    [LOCALE.ST_KEYBIND_MOVEUP]: {
        en: 'Jump',
        cz: 'Skok',
        br: 'Pular',
        ru: 'Прыжок',
        zh: '跳躍',
    },
    [LOCALE.ST_KEYBIND_MOVEDOWN]: {
        en: 'Move down',
        cz: 'pohyb dolů',
        br: 'Mover para baixo',
        ru: 'Движение вниз',
        zh: '落下',
    },
    [LOCALE.ST_KEYBIND_MOVELEFT]: {
        en: 'Move left',
        cz: 'pohyb doleva',
        br: 'Mover para a esquerda',
        ru: 'Движение влево',
        zh: '往左',
    },
    [LOCALE.ST_KEYBIND_MOVERIGHT]: {
        en: 'Move right',
        cz: 'pohyb vpravo',
        br: 'Mover para a direita',
        ru: 'Движение вправо',
        zh: '往右',
    },
    [LOCALE.ST_KEYBIND_ATTACK]: {
        en: 'Attack',
        cz: 'Útok',
        br: 'Ataque',
        ru: 'Атака',
        zh: '攻擊',
    },
    [LOCALE.ST_KEYBIND_ABILITY]: {
        en: 'Ability',
        cz: 'Schopnost',
        br: 'Habilidade',
        ru: 'Способность',
        zh: '技能',
    },
    [LOCALE.ST_KEYBIND_ITEM]: {
        en: 'Item',
        cz: 'Předmět',
        br: 'Item',
        ru: 'Предмет',
        zh: '物品',
    },
    [LOCALE.ST_KEYBIND_RECALL]: {
        en: 'Recall',
        cz: 'Odvolání',
        br: 'Recall',
        ru: 'Возвращение',
        zh: '召回',
    },
    [LOCALE.SCOREBOARD]: {
        en: 'Scoreboard',
        cz: 'Tabulka',
        br: 'Placar',
        ru: 'Таблица счёта',
        zh: '記分板',
    },
    [LOCALE.VIDEO]: {
        en: 'Video',
        ru: 'Графика',
        br: 'Video',
        zh: '畫面',
    },
    [LOCALE.ANTIALIASING]: {
        en: 'Antialiasing',
        ru: 'Сглаживание',
        br: 'Antialiasing',
        zh: '抗鋸齒',
    },
    [LOCALE.RESOLUTION]: {
        en: 'Resolution',
        cz: 'Rozlišenie',
        br: 'Resolução',
        ru: 'Разрешение',
        zh: '解析度',
    },
    [LOCALE.ST_MOUSE_SUPPORT_TOOLTIPS]: {
        en: 'This feature will enable mouse buttons to be used for abilites and facing. Be careful, your hero will face to mouse direction. ',
        ru: 'Эта функция позволит использовать кнопки мыши для способностей. Будьте осторожны, если функция включена, ваш герой будет смотреть в сторону мыши. ',
        br: 'Esse recurso permitirá que os botões do mouse sejam usados ​​para habilidades e ataques. Tenha cuidado, seu personagem ficará de frente para a direção do mouse. ',
        zh: '此功能能夠使用滑鼠按鍵迎面發動技能。注意，你的英雄將會朝著滑鼠的方向動作。',
    },
    [LOCALE.ST_LANGUAGE]: {
        en: 'Language',
        cz: 'Jazýk',
        br: 'Idioma',
        ru: 'Язык',
        zh: '語言',
    },
    [LOCALE.ST_FILTER_BAD_WORDS]: {
        en: 'Filter of bad words',
        cz: 'Filtr špatných slov',
        br: 'Filtro de palavrões',
        ru: 'Фильтр плохих слов',
        zh: '過濾不雅詞語',
    },
    [LOCALE.ST_AUDIO_BGMUSIC_VOLUME]: {
        en: 'Background Music',
        cz: 'Hudba v pozadi',
        br: 'Background Music',
        ru: 'Фоновая музыка',
        zh: '背景音樂',
    },
    [LOCALE.LOBBY_SHARE_GAME]: {
        en: 'Copy sharable link',
        ru: 'Скопировать ссылку на лобби',
        br: 'Copiar link compartilhável',
        zh: '複製分享連結',
    },
    [LOCALE.ST_ATMOSPHERIC_DETAILS]: {
        en: 'Atmospheric details',
        ru: 'Атмосферные детали',
        br: 'Detalhes atmosféricos',
        cz: 'Atmosfericke detaily',
        zh: '氛圍渲染',
    },
    [LOCALE.ADD_HARD_BOT]: {
        en: 'Add hard bot',
        cz: 'Prídat těžkého bota',
        br: 'Adicionar bot difícil',
        ru: 'Добавить сложного бота',
        zh: '加入困難電腦',
    },
    [LOCALE.ST_UI_SCALE]: {
        en: 'UI Scale',
        ru: 'Масштаб интерфейса',
        cz: 'Velkosť UI',
        zh: 'UI比例縮放',
    },
    /** Chat command helpers */
    [LOCALE.CHAT_COMMAND_GLOBAL]: {
        en: '/global <message> - send message to all players',
        ru: '/global <сообщение> - отправить сообщение всем игрокам в глобальном чате',
        br: '/global <mensagem> - enviar mensagem para todos os jogadores',
        cz: '/global <zpráva> - poslat zprávu všem hráčům',
        zh: '/global <消息> - 向所有玩家發送消息',
    },
    [LOCALE.CHAT_COMMAND_ALL]: {
        en: '/all <message> - send message in current game',
        ru: '/all <сообщение> - отправить сообщение всем игрокам в текущей игре',
        br: '/all <mensagem> - enviar mensagem para todos os jogadores',
        cz: '/all <zpráva> - poslat zprávu všem hráčům',
        zh: '/all <消息> - 向當前游戲中的所有玩家發送消息',
    },
	
    [LOCALE.CHAT_COMMAND_WHISPER]: {
        en: '/whisper <player> <message> - send a private message to a player',
        ru: '/whisper <игрок> <сообщение> - отправить личное сообщение игроку',
        br: '/whisper <jogador> <mensagem> - enviar mensagem privada para um jogador',
        cz: '/whisper <hráč> <zpráva> - poslat soukromou zprávu hráči',
        zh: '/whisper <玩家> <消息> - 向玩家發送私人消息',
    },
	
    [LOCALE.CHAT_COMMAND_WHISPER2]: {
        en: '/w <player> <message> - send a private message to a player',
        ru: '/w <игрок> <сообщение> - отправить личное сообщение игроку',
        br: '/w <jogador> <mensagem> - enviar mensagem privada para um jogador',
        cz: '/w <hráč> <zpráva> - poslat soukromou zprávu hráči',
        zh: '/w <玩家> <消息> - 向玩家發送私人消息',
    },
	
    [LOCALE.CHAT_COMMAND_EXIT]: {
        en: '/exit - exit the game (practice only)',
        ru: '/exit - выйти из игры (только для практики)',
        br: '/exit - sair do jogo (apenas para prática)',
        cz: '/exit - opustit hru (pouze pro praktiku)',
        zh: '/exit - 離開遊戲 (僅限於練習模式)',
    },
    [LOCALE.NOT_FOUND_MATCHES]: {
        en: 'This player has no match history.',
        ru: 'У этого игрока нет истории игр.',
        cz: 'Tento hráč nemá žádnou historii zápasů.'
    },
    [LOCALE.RANK_UNRANKED]: {
        en: 'Unknown',
        cz: 'Neznámý'
    },
    [LOCALE.RANK_BRONZE]: {
        en: 'Bronze',
        ru: 'Бронза',
        cz: 'Bronzový'
    },
    [LOCALE.RANK_SILVER]: {
        en: 'Silver',
        ru: 'Серебро',
        cz: 'Stříbrný'
    },
    [LOCALE.RANK_GOLD]: {
        en: 'Gold',
        ru: 'Золото',
        cz: 'Zlatý'
    },
    [LOCALE.RANK_PLATINUM]: {
        en: 'Platinum',
        ru: 'Платина',
        cz: 'Platinový'
    },
    [LOCALE.RANK_DIAMOND]: {
        en: 'Diamond',
        ru: 'Алмаз',
        cz: 'Diamantový'
    },
    [LOCALE.RANK_MYTHICAL]: {
        en: 'Mythical',
        ru: 'Мифический',
        cz: 'Mytický'
    },
    [LOCALE.HERO_MASTERY_MASTER]: {
        en: 'Master',
    },
    [LOCALE.HERO_MASTERY_GRAND_MASTER]: {
        en: 'Grand Master',
    },
    [LOCALE.RANK_CALIBRATION_DESCRIPTION]: {
        en: 'games left to calibrate rank!',
        ru: 'игр осталось до окончания калибровки ранга!',
        cz: 'her zbývá ke kalibraci ranku!'
    },
    [LOCALE.LEVEL_UP]: {
        en: 'You have achieved a new level',
        ru: 'Вы получили новый уровень',
        cz: 'Dosáhli jste nové úrovně'
    },
    [LOCALE.RANK_UP]: {
        en: 'You have achieved a new rank',
        ru: 'Вы достигли нового ранга',
        cz: 'Dosáhli jste nové hodnosti'
    },
    [LOCALE.POPUP_YOUR_REWARD]: {
        en: 'Your reward!',
        cz: 'Tvoja odměna!'
    },
    [LOCALE.HERO_MASTERY]: {
        en: 'Hero mastery',
        cz: 'Dovednost hrdiny'
    },
    [LOCALE.REQUIRED_LEVEL]: {
        en: 'Required level',
        cz: 'Požadovaná úroveň'
    },
    [LOCALE.TOWER]: {
        en: 'Tower',
        cz: 'Věž'
    },
    [LOCALE.OBSERVER_WARD]: {
        en: 'Observer ward',
    },
    [LOCALE.SENTRY_WARD]: {
        en: 'Sentry ward',
    },

};
export default locale_data;

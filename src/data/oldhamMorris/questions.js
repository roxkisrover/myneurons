const omQuestionsData = [
  {
    id: 1,
    target: [10],
    text:
      'Я провожу за работой больше времени, чем мои коллеги, поскольку люблю, чтобы все было сделано правильно и хорошо.',
  },
  {
    id: 2,
    target: [10],
    text:
      'Я очень организованная личность. Я люблю следовать расписанию и составлять списки дел, которые следовало бы выполнить. Иногда у меня оказывается столько списков, что я не знаю, что с ними делать.',
  },
  {
    id: 3,
    target: [10],
    text:
      'Иногда меня называют «трудоголиком». Действительно, я работаю очень напряженно, даже когда есть деньги и все счета оплачены. Думаю, если бы я захотел, то мог бы расслабиться и немного отдохнуть.',
  },
  {
    id: 4,
    target: [10],
    text:
      'Я люблю свои ежедневные дела и обязанности. Я становлюсь упрямым, если кто-то пытается заставить меня изменить им.',
  },
  {
    id: 5,
    target: [11],
    text:
      'Я ненавижу рутину, я не очень обязательный человек, поэтому откладываю все дела на потом или вообще не занимаюсь ими.',
  },
  {
    id: 6,
    target: [13],
    text:
      'Когда бы я не добивался успеха, всякий раз обнаруживаю, что не получаю от этого удовольствия, к тому же в другой сфере жизни всё начинает разлаживаться.',
  },
  {
    id: 7,
    target: [13],
    text:
      'У меня множество способностей, но они не дают мне преимуществ. Если я делаю что-то хорошо, то могу помочь другим, но не могу заставить свои способности работать на себя.',
  },
  {
    id: 8,
    target: [5],
    text:
      'Я прекрасно лажу с собой. Я знаю, какую работу хочу выполнять, каких друзей иметь и вообще, что для меня важно.',
  },
  {
    id: 9,
    target: [5],
    text:
      'Я чувствую себя, как пустая раковина. Я могу ощущать полную бессмысленность существования.',
  },
  {
    id: 10,
    target: [7],
    text:
      'Я обожаю мечтать. Представляю себя богатым, могущественным и знаменитым, под шумные аплодисменты получающим Нобелевскую премию, обожествляемым за талант и красоту толпой фанов.',
  },
  {
    id: 11,
    target: [12],
    text:
      'Хотя я и не уверен, что это хорошо, меня привлекает насилие, оружие и боевые искусства. Я люблю фильмы, в которых много действия.',
  },
  {
    id: 12,
    target: [3],
    text:
      'Считают, что я говорю довольно странно, говорю вещи, которые слишком глубоки для людей, или не объясняю, что я имею в виду.',
  },
  {
    id: 13,
    target: [7],
    text: 'Меня называют надменным, ну что ж…',
  },
  {
    id: 14,
    target: [7],
    text:
      'Я люблю, когда мной восхищаются, а когда игнорируют, пытаюсь выуживать комплименты словно рыбу.',
  },
  {
    id: 15,
    target: [6],
    text:
      'Внешность очень важна для меня, я трачу много времени, удостоверяясь в том, что выгляжу привлекательно.',
  },
  {
    id: 16,
    target: [3],
    text:
      'Иногда люди считают меня эксцентричным, потому что я одеваюсь по-своему и кажусь им немного «не от мира сего». Действительно, я живу в собственном маленьком мирке.',
  },
  {
    id: 17,
    target: [7],
    text:
      'Хотя я думаю, что понимаю людей, они всегда говорят, что у меня нет ни малейшего понятия о том, что они чувствуют.',
  },
  {
    id: 18,
    target: [7],
    text:
      'Если приходится стоять в очереди или сидеть в переполненном ресторане, я обычно пытаюсь пролезть вперед и быть обслуженным немедленно. Или, по крайней мере, я считаю, что так должно быть.',
  },
  {
    id: 19,
    target: [4],
    text: 'Я никогда не ощущаю вины за то, что сделал.',
  },
  {
    id: 20,
    target: [7],
    text:
      'Все люди, с которыми я сотрудничаю, и все организации, к которым я принадлежу, являются влиятельными и важными.',
  },
  {
    id: 21,
    target: [10],
    text:
      'Возможно, некоторые считают меня зажатым и косным, но я свято верю, что для аморального или неэтичного поведения извинений не существует.',
  },
  {
    id: 22,
    target: [9],
    text:
      'Прежде чем принять решение, я предпочитаю выслушать добрый совет, даже если это касается будничных проблем.',
  },
  {
    id: 23,
    target: [10],
    text:
      'Я просто не могу выбрасывать старые вещи, даже если они бесполезны и бессмысленны для меня.',
  },
  {
    id: 24,
    target: [7],
    text:
      'Может быть, я и преувеличиваю важность своей персоны, но, честно говоря, думаю, что достоин всяческих похвал.',
  },
  {
    id: 25,
    target: [14],
    text: 'Я суровый судья самому себе.',
  },
  {
    id: 26,
    target: [14],
    text:
      'Я бы не назвал себя легкомысленным, для меня всё имеет значение и вес. Большую часть времени я абсолютно серьёзен.',
  },
  {
    id: 27,
    target: [14],
    text:
      'Иногда мне кажется, что вина — это моё второе имя. Я даже не всегда уверен, что знаю повод, из-за которого чувствую себя виноватым.',
  },
  {
    id: 28,
    target: [14],
    text: 'Я не очень-то верю в себя, иногда я чувствую себя просто никчёмным.',
  },
  {
    id: 29,
    target: [13],
    text:
      'Я не боюсь рассказывать другим о своих проблемах, но чувствую себя очень неудобно, если мне помогают решать их.',
  },
  {
    id: 30,
    target: [11],
    text:
      'Люди могут думать, что я слишком много говорю о своих неудачах, но они не понимают, насколько всё действительно плохо для меня.',
  },
  {
    id: 31,
    target: [12],
    text:
      'Иногда я замечаю, что смеюсь над неудачами других, хотя не очень горжусь такой реакцией. Возможно, мне просто хочется сказать: «Вот я бы на вашем месте...»',
  },
  {
    id: 32,
    target: [11],
    text:
      'Мне трудно находиться среди тех, кто богаче меня, так как часто завидую их счастливой звезде.',
  },
  {
    id: 33,
    target: [13],
    text:
      'Иногда мне трудно расслабиться, отдохнуть. Когда появляется возможность доставить себе удовольствие, по разным причинам мне трудно воспользоваться ею.',
  },
  {
    id: 34,
    target: [13],
    text:
      'Когда дело касается взаимоотношений с окружающими, мне кажется, что я свой самый злейший враг. Я вечно связываюсь с теми, кто унижает и разочаровывает меня. Не могу поверить, что я настолько не разбираюсь в людях. Должно быть, я просто наивен.',
  },
  {
    id: 35,
    target: [13],
    text:
      'Со мной трудно долго находиться рядом, потому что мои требования к людям чрезмерны. И все-таки я расстраиваюсь, когда люди сходят с ума от моего поведения.',
  },
  {
    id: 36,
    target: [13],
    text:
      'Если кто-то заботится обо мне или слишком нежно ко мне относится, для меня это не интересно. Мне становится даже скучно, если в моих отношениях с окружающими отсутствует вызов.',
  },
  {
    id: 37,
    target: [13],
    text: 'Кажется, я иногда слишком много делаю для других.',
  },
  {
    id: 38,
    target: [9],
    text: 'Обычно я оставляю серьезные решения другим важным людям.',
  },
  {
    id: 39,
    target: [9],
    text:
      'Я не слишком самостоятелен, я больше исследователь, чем лидер, но могу быть преданным игроком в команде.',
  },
  {
    id: 40,
    target: [9],
    text:
      'Мне нравится соглашаться с другими людьми. Если я не согласен, то обычно оставляю свое мнение при себе.',
  },
  {
    id: 41,
    target: [9],
    text:
      'Я лезу из кожи вон, делая всё для других, чтобы понравиться им. Иногда в пылу я могу даже доставить неприятности.',
  },
  {
    id: 42,
    target: [9],
    text:
      'Мне гораздо лучше находиться в среде общения, потому что я чувствую себя совершенно беспомощным в одиночестве.',
  },
  {
    id: 43,
    target: [9],
    text: 'Когда общение прекращается, я начинаю паниковать и немедленно начинаю искать другое.',
  },
  {
    id: 44,
    target: [9],
    text:
      'Вероятно, я слишком волнуюсь, что не могу позаботиться о себе, если потеряю важного в своей жизни человека.',
  },
  {
    id: 45,
    target: [5],
    text:
      'Порой я просто теряю рассудок, когда представляю, что люди могут покинуть меня. Я принимаюсь звонить и требовать, чтобы меря разуверили в этих подозрениях, что, должно быть, здорово им докучает.',
  },
  {
    id: 46,
    target: [6],
    text:
      'Я люблю быть в центре внимания, это восхитительно. Я гораздо лучше чувствую себя в центре событий, чем на обочине.',
  },
  {
    id: 47,
    target: [6],
    text: 'Мне нравится флиртовать, и я хочу, чтобы меня считали привлекательной персоной.',
  },
  {
    id: 48,
    target: [6],
    text:
      'Меня считают очень занимательным. Я умею живо и красочно рассказывать о том, что произошло, хотя и не всегда придерживаюсь фактов.',
  },
  {
    id: 49,
    target: [5],
    text:
      'Я довольно легко поддаюсь внушению. Мне приходится быть всегда настороже, чтобы не попасть под влияние других.',
  },
  {
    id: 50,
    target: [5],
    text:
      'Слишком часто я придаю больше значения взаимоотношениям, чем они того стоят. Это причиняет мне душевную боль.',
  },
  {
    id: 51,
    target: [4],
    text:
      'Как правило, мои взаимоотношения очень интенсивны. Чувства, которые я испытываю к человеку, бросаются из одной крайности в другую. Иногда я преклоняюсь перед ним, а иногда просто не переношу его присутствия.',
  },
  {
    id: 52,
    target: [6],
    text: 'Для меня зависть — это жизненный фактор. Я завидую - мне завидуют.',
  },
  {
    id: 53,
    target: [1, 3],
    text:
      'Я не очень доверяю людям, хотя мне бы хотелось. Просто не могу не волноваться, что они используют меня, если я не буду проявлять осторожность.',
  },
  {
    id: 54,
    target: [1],
    text: 'Иногда мне кажется, что мои друзья или коллеги не так уж преданны, как мне бы хотелось.',
  },
  {
    id: 55,
    target: [2, 3],
    text: 'У меня нет близких друзей, кроме разве что некоторых членов семьи.',
  },
  {
    id: 56,
    target: [1, 3],
    text: 'Я ревнив. Я всегда волнуюсь, верен ли мне мой партнер.',
  },
  {
    id: 57,
    target: [1],
    text:
      'Я довольно скрытная личность. Я держу всегда всё в себе, так как никогда не знаешь, кто может использовать эту информацию в своих целях.',
  },
  {
    id: 58,
    target: [2],
    text: 'Вообще-то я одиночка. Мне не очень-то нравится, если вокруг люди, даже моя семья.',
  },
  {
    id: 59,
    target: [2],
    text: 'Если есть выбор, я предпочитаю всё делать сам.',
  },
  {
    id: 60,
    target: [2],
    text: 'Я не испытываю сильного желания заняться с кем-нибудь сексом.',
  },
  {
    id: 61,
    target: [8],
    text:
      'Для меня трудно быть самим собой в близких отношениях. Я боюсь показаться смешным, и поэтому отступаю.',
  },
  {
    id: 62,
    target: [8],
    text: 'Я стесняюсь в кругу новых людей.',
  },
  {
    id: 63,
    target: [3],
    text:
      'Я часто нахожу общество невыносимым, даже если это общество людей, которых я хорошо знаю. Не могу преодолеть чувство, что другие смотрят на меня, оценивают, и не всегда лестно.',
  },
  {
    id: 64,
    target: [8],
    text: 'Обычно я не связываюсь с людьми, пока не удостоверюсь, что нравлюсь им.',
  },
  {
    id: 65,
    target: [8],
    text:
      'Мне удобнее заниматься работой, которая не вовлекает в себя много людей. Я беспокоюсь, что коллеги станут критиковать меня.',
  },
  {
    id: 66,
    target: [8],
    text:
      'В обществе я чувствую себя уверенно. Я разговариваю спокойно, без страха сказать какую-нибудь глупость или обнаружить пробел в знаниях.',
  },
  {
    id: 67,
    target: [11],
    text: 'Люди не понимают или не одобряют меня.',
  },
  {
    id: 68,
    target: [11],
    text:
      'Я могу быть довольно критичным по отношению к своему боссу или вышестоящему начальству. Может быть, я не представляю, каково это - находиться в их шкуре, но мне кажется, я мог бы работать лучше них.',
  },
  {
    id: 69,
    target: [11],
    text:
      'Когда меня просят сделать то, чего я не хочу делать, я становлюсь несносным, могу спорить, дуться или ворчать.',
  },
  {
    id: 70,
    target: [11],
    text:
      'Если ко мне придираются, становлюсь невыносимым, упрямым, но позже чувствую вину и пытаюсь её загладить.',
  },
  {
    id: 71,
    target: [14],
    text: 'Лучше бы я не относился к другим так критично, я всегда нахожу в них недостатки.',
  },
  {
    id: 72,
    target: [10],
    text:
      'Некоторые люди говорят, что я чересчур самостоятелен. Но лучше я сделаю работу сам, чем позволю другим сделать её неправильно. Я рискну показаться слишком «деловым», если это сможет заставить людей выполнить работу так, как нужно.',
  },
  {
    id: 73,
    target: [12],
    text:
      'Думаю, что строгая дисциплина очень важна. Хотя я не приверженец физических наказаний, верю в правильность пословицы: «Пожалеешь розгу - испортишь ребёнка».',
  },
  {
    id: 74,
    target: [12],
    text:
      'Члены моей семьи часто жалуются, что я ущемляю их свободу и независимость. Полагаю, я действительно довольно строг.',
  },
  {
    id: 75,
    target: [12],
    text:
      'Люди говорят, что я унижаю их перед другими. Они не должны быть такими чувствительными - слова не могут обидеть. А если они действительно считают меня слишком критичным, пусть отвечают тем же.',
  },
  {
    id: 76,
    target: [12],
    text:
      'Думаю, что могу быть страшным. Некоторые люди говорят, что выполняют мои указания потому, что боятся меня.',
  },
  {
    id: 77,
    target: [12],
    text:
      'Я предпочитаю доминировать в отношениях с окружающими. В результате я могу показаться жестоким или плохим, не осознавая этого.',
  },
  {
    id: 78,
    target: [7],
    text:
      'Я верю, что в некоторых отдельных ситуациях приходится перешагивать через других, чтобы добраться до нужного места.',
  },
  {
    id: 79,
    target: [1],
    text:
      'Я вижу, что некоторые люди делают мне мелкие пакости, достают или даже оскорбляют меня лишь для того, чтобы вывести из себя.',
  },
  {
    id: 80,
    target: [1],
    text: 'Если кто-то поступил по отношению ко мне плохо, я долго держу на него зуб.',
  },
  {
    id: 81,
    target: [4],
    text: 'Я не обязательно говорю только правду.',
  },
  {
    id: 82,
    target: [12],
    text:
      'Иногда я люблю присочинить или исказить факты, только чтобы посмотреть на реакцию людей. Это всего лишь шутки, нет причин злиться.',
  },
  {
    id: 83,
    target: [4],
    text:
      'Иногда мне говорят, что я ищу предлог к ссоре. Это правда, я готов спорить или драться с любым, кто не на моей стороне.',
  },
  {
    id: 84,
    target: [1],
    text: 'Я остро чувствую критику, даже если она завуалирована, и никому не спускаю её с рук.',
  },
  {
    id: 85,
    target: [5],
    text: 'У меня ужасный характер, но ничего не могу поделать.',
  },
  {
    id: 86,
    target: [6],
    text: 'Люди говорят, что иногда не понимают, воспринимать ли мои чувства серьёзно или нет.',
  },
  {
    id: 87,
    target: [6],
    text: 'Я выражаю свои чувства пылко и театрально.',
  },
  {
    id: 88,
    target: [3],
    text:
      'У меня особое проявление эмоций. Например, что-то печальное может показаться смешным, и я рассмеюсь.',
  },
  {
    id: 89,
    target: [5],
    text:
      'Моё настроение - чувствительный прибор. Мелочи могут выбить меня из колеи. За несколько часов я могу испытать широкий спектр эмоций, от счастья до печали и раздражения. Но плохое настроение никогда не затягивается.',
  },
  {
    id: 90,
    target: [14],
    text: 'Я много размышляю и беспокоюсь.',
  },
  {
    id: 91,
    target: [8],
    text: 'Я бы не хотел так сильно переживать по поводу того, что думает обо мне общество.',
  },
  {
    id: 92,
    target: [8],
    text: 'Ненавижу риск и нетрадиционные решения, так как боюсь оказаться в дураках.',
  },
  {
    id: 93,
    target: [2],
    text: 'На свете не так уж много вещей, которые я люблю делать.',
  },
  {
    id: 94,
    target: [2],
    text:
      'Меня можно назвать человеком с каменным лицом, потому что я вообще не очень эмоционален.',
  },
  {
    id: 95,
    target: [2],
    text: 'Я не показываю своей реакции ни на критику, ни на комплименты.',
  },
  {
    id: 96,
    target: [3],
    text:
      'Я думаю, что настроен на иную, чем остальные, волну. Иногда я замечаю странные вещи, и они мне кажутся реальными, хотя я не могу доказать этого. Например, выход из собственного тела или присутствие рядом человека, который давно уже умер.',
  },
  {
    id: 97,
    target: [3],
    text:
      'Меня привлекает магия и НЛО. Я обладаю подобием «шестого чувства»: иногда знаю, что должно произойти, задолго до того, как это случится.',
  },
  {
    id: 98,
    target: [14],
    text: 'Я вижу стакан наполовину пустым, а не наполовину полным',
  },
  {
    id: 99,
    target: [10],
    text:
      'Я не могу легко тратить деньги, хотя некоторые обвиняют меня в скупости. Я предпочитаю оставлять что-нибудь на чёрный день.',
  },
  {
    id: 100,
    target: [5],
    text:
      'Мне нравится действовать импульсивно и по вдохновению. Например, я могу напиться, если есть настроение, или позволить себе хорошо поесть. Возможно, иногда я вожу машину слишком быстро или делаю бессмысленные покупки. Так жить гораздо интереснее, хотя порой можно и обжечься.',
  },
  {
    id: 101,
    target: [5],
    text:
      'Я могу быть очень театральным в печали. Я иногда угрожаю убить себя, но вряд ли это сделаю на самом деле.',
  },
  {
    id: 102,
    target: [4],
    text:
      'Я заинтересован андеграундным стилем жизни, когда можно беспрепятственно ломать устоявшиеся правила.',
  },
  {
    id: 103,
    target: [4],
    text:
      'Я просто не способен долго работать или волноваться, оплачены ли мои счета, поэтому многие люди считают меня безответственным.',
  },
  {
    id: 104,
    target: [4],
    text:
      'Я не принадлежу к типу людей, которые осторожничают. Я могу рискнуть ехать на повышенной скорости или немного выпивши, но я всегда знаю, что делаю.',
  },
  {
    id: 105,
    target: [4],
    text: 'Я люблю всё делать спонтанно, не планируя заранее.',
  },
  {
    id: 106,
    target: [4],
    text:
      'В детстве я был трудным ребенком и вечно попадал в неприятности. Я прогуливал уроки, убегал из дома, дрался, врал, воровал и спекулировал.',
  },
  {
    id: 107,
    target: [5],
    text:
      'Под влиянием стресса я становлюсь подозрительным без причины. Или нарочно всё порчу, а после притворяюсь, что ничего не случилось.',
  },
];

export default omQuestionsData;
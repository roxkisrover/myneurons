const omQuestionsData = [
  {
    id: 1,
    target: [1, 2],
    text:
      'Я не очень доверчивый человек, даже несмотря на то, что мне хотелось бы им быть. Не могу перестать волноваться о том, что другие люди могут использовать меня, если я не буду осторожен.',
  },
  {
    id: 2,
    target: [2],
    text:
      'Иногда мне говорят, что я довольно странно выражаюсь: либо слишком глубоко говорю, либо не объясняю, что имею ввиду.',
  },
  {
    id: 3,
    target: [3],
    text:
      'Я хорошо распознаю свои чувства и мне несложно их описать. Я знаю, чем хочу заниматься, с какими людьми проводить своё время и что для меня имеет значение.',
  },
  {
    id: 4,
    target: [4],
    text:
      'Я – одиночка, и меня это полностью устраивает. Мне не очень нравится находиться среди других людей, даже если речь идёт о членах моей семьи.',
  },
  {
    id: 5,
    target: [3, 5],
    text:
      'Иногда я сильно беспокоюсь, что близкие люди бросят меня. Разными, иногда слишком настойчивыми способами, я пытаюсь добиться от них обещания, что они этого не сделают. Бывает, что эти попытки вызывают раздражение.',
  },
  {
    id: 6,
    target: [6],
    text: 'Мне нравится мечтать, представляя себя богатым и знаменитым.',
  },
  {
    id: 7,
    target: [6, 7],
    text:
      'То, как я выгляжу – очень важно для меня, поэтому я трачу много времени на то, чтобы выглядеть привлекательно.',
  },
  {
    id: 8,
    target: [8],
    text:
      'Я провожу за работой или учебой больше времени, чем многие другие. Мне важно, чтобы все было сделано правильно и хорошо.',
  },
  {
    id: 9,
    target: [9],
    text: 'Мне трудно быть собой с другими людьми: я боюсь показаться смешным и нелепым.',
  },
  {
    id: 10,
    target: [10],
    text: 'Я не ощущаю вины за то, что сделал.',
  },
  {
    id: 11,
    target: [0],
    text: 'Я никогда не разочаровывал своих друзей.',
  },
  {
    id: 12,
    target: [1],
    text:
      'Иногда мне кажется, что мои друзья или коллеги не так уж благожелательны ко мне, как мне бы того хотелось.',
  },
  {
    id: 13,
    target: [2],
    text:
      'Порой люди считают меня эксцентричным, потому что я своеобразно одеваюсь и кажусь им немного «не от мира сего». Действительно, я живу как будто в собственном маленьком мире.',
  },
  {
    id: 14,
    target: [3],
    text:
      'Иногда я чувствую внутреннюю опустошённость и бесцельность собственного существования. В такие моменты мне кажется, что я – пустая оболочка, у которой нет ничего внутри.',
  },
  {
    id: 15,
    target: [4],
    text: 'Когда у меня есть выбор, я предпочитаю всё делать самостоятельно.',
  },
  {
    id: 16,
    target: [5],
    text:
      'Обычно я предоставляю возможность принимать серьёзные решения важным мне людям, а не принимаю их сам.',
  },
  {
    id: 17,
    target: [6],
    text:
      'Я считаю, что существуют ситуации, в которых необходимо идти по головам, чтобы добиться своей цели.',
  },
  {
    id: 18,
    target: [7],
    text:
      'Я люблю быть в центре внимания. Мне гораздо комфортнее, когда я нахожусь в центре событий, чем в стороне от них.',
  },
  {
    id: 19,
    target: [8],
    text:
      'Я очень организованная личность. Я люблю следовать расписанию и составлять списки дел, которые нужно выполнить. Иногда у меня оказывается столько списков, что я даже не знаю, когда смогу их выполнить. ',
  },
  {
    id: 20,
    target: [9],
    text:
      'Я избегаю ситуаций, связанных с новыми знакомствами и обычно смущаюсь в общении с людьми.',
  },
  {
    id: 21,
    target: [10],
    text: 'Бывают случаи, когда я намеренно говорю неправду.',
  },
  {
    id: 22,
    target: [0],
    text: 'Я всегда открыто признаю, что был неправ, даже если это задевает мою гордость.',
  },
  {
    id: 23,
    target: [1],
    text: 'Я ревнив и часто волнуюсь, верен ли мне мой партнер.',
  },
  {
    id: 24,
    target: [2, 4],
    text: 'У меня нет близких друзей кроме, разве что, некоторых членов моей семьи.',
  },
  {
    id: 25,
    target: [0],
    text: 'Я никогда не повышаю голос на других, если чувствую усталость и раздражение.',
  },
  {
    id: 26,
    target: [4],
    text: 'Я не испытываю больших неудобств от сексуального воз­держания.',
  },
  {
    id: 27,
    target: [5],
    text: 'Я не слишком самостоятелен и скорее являюсь последователем, чем лидером.',
  },
  {
    id: 28,
    target: [6],
    text: 'Я люблю, когда мной восхищаются. Иногда я сам напрашиваюсь на комплименты.',
  },
  {
    id: 29,
    target: [7],
    text: 'Я люблю флиртовать и выглядеть для других привлекательно.',
  },
  {
    id: 30,
    target: [8],
    text:
      'Я не могу легко тратить деньги. Некоторые считают меня скупым, но я убежден, что нужно откладывать на черный день.',
  },
  {
    id: 31,
    target: [9],
    text: 'Я часто ощущаю себя хуже других и кажусь себе непривлекательным.',
  },
  {
    id: 32,
    target: [10],
    text:
      'В детстве я был трудным ребёнком и вечно попадал в неприятности. Я мог лгать, воровать, издеваться над другими людьми или портить чужие вещи.',
  },
  {
    id: 33,
    target: [0],
    text: 'Я никогда не думал о людях плохо и не желал им зла, даже если они того заслуживали.',
  },
  {
    id: 34,
    target: [1, 2],
    text:
      'Я довольно скрытная личность и стараюсь держать все в себе. Никогда не знаешь, кто может использовать информацию о тебе в своих целях.',
  },
  {
    id: 35,
    target: [2],
    text:
      'Часто общество других людей невыносимо для меня, даже если речь идёт о тех, кого я знаю. Не могу преодолеть ощущение, что другие смотрят на меня и не всегда лестно оценивают.',
  },
  {
    id: 36,
    target: [3],
    text:
      'Обычно мои отношения с людьми очень интенсивны: чувства, которые я испытываю к человеку, бросаются из одной крайности в другую. Иногда я его боготворю, иногда – едва выношу.',
  },
  {
    id: 37,
    target: [4],
    text: 'Существует не так уж много занятий, которые доставляют мне удовольствие.',
  },
  {
    id: 38,
    target: [5],
    text:
      'Обычно я предпочитаю соглашаться с другими людьми и оставлять своё мнение при себе, если с кем-то не согласен.',
  },
  {
    id: 39,
    target: [6],
    text:
      'Мне часто говорят, что я не понимаю и не учитываю чувства других, хотя я не всегда с этим согласен.',
  },
  {
    id: 40,
    target: [7],
    text: 'Я умею живо и ярко рассказывать истории, хотя не всегда точно придерживаюсь фактов.',
  },
  {
    id: 41,
    target: [8],
    text:
      'Мне нравится мой привычный способ ведения дел, и я могу быть весьма упрямым, если кто-то пытается заставить меня его изменить.',
  },
  {
    id: 42,
    target: [9],
    text:
      'Я чувствую себя гораздо комфортнее на работе, не связанной с большим количеством людей. В таком случае я не беспокоюсь о том, что меня станут критиковать коллеги.',
  },
  {
    id: 43,
    target: [10],
    text:
      'Я заинтригован неформальным стилем жизни, где можно нарушать правила и избегать наказания за это.',
  },
  {
    id: 44,
    target: [0],
    text: 'Сколько себя помню, я всегда был справедлив к другим людям.',
  },
  {
    id: 45,
    target: [1],
    text:
      'Я вижу, что некоторые люди дразнят и оскорбляют меня лишь для того, чтобы вывести из себя.',
  },
  {
    id: 46,
    target: [2],
    text:
      'Меня привлекает всё магическое и сверхъестественное. Иногда я могу ощущать странные вещи, которые кажутся мне реальными, но не могу доказать это другим. Например, выход из собственного тела или присутствие рядом человека, который давно умер.',
  },
  {
    id: 47,
    target: [3],
    text:
      'Иногда мои переживания выглядят очень драматичными. В такие моменты я могу угрожать причинить себе вред.',
  },
  {
    id: 48,
    target: [4],
    text: 'Я не очень эмоционален, поэтому обычно выгляжу бесстрастно.',
  },
  {
    id: 49,
    target: [5],
    text:
      'Я стараюсь понравиться другим людям, сделав для них что-нибудь, даже если мне неприятно это делать.',
  },
  {
    id: 50,
    target: [0],
    text:
      'Люди могут долго спорить со мной, но в конечном итоге они всё равно со мной соглашаются.',
  },
  {
    id: 51,
    target: [7],
    text:
      'Я достаточно внушаем, поэтому мне приходится быть настороже, чтобы не попасть под чужое влияние.',
  },
  {
    id: 52,
    target: [8],
    text:
      'Возможно, некоторые считают мои принципы устаревшими и негибкими, но я убеждён, что для аморального поведения оправданий не существует.',
  },
  {
    id: 53,
    target: [9],
    text: 'Я бы хотел меньше переживать по поводу того, что обо мне думают другие.',
  },
  {
    id: 54,
    target: [10],
    text:
      'Я недостаточно терпелив, чтобы долго работать на одном месте или беспокоиться по поводу денег и неоплаченных счетов. Из-за этого некоторые люди думают, что я безответственный.',
  },
  {
    id: 55,
    target: [0],
    text: 'Я сразу выполняю все необходимые дела и никогда не откладываю их на потом.',
  },
  {
    id: 56,
    target: [1],
    text: 'Если кто-то поступил по отношению ко мне плохо, то я долго не могу его простить.',
  },
  {
    id: 57,
    target: [0],
    text: 'Я всегда читаю условия соглашений в документах прежде чем подписать их.',
  },
  {
    id: 58,
    target: [3],
    text:
      'Моё настроение весьма переменчиво: даже мелочи могут вывести меня из себя. В течение нескольких часов я могу испытать и радость, и грусть, и раздражение с тревогой. Но плохое настроение обычно не затягивается.',
  },
  {
    id: 59,
    target: [4],
    text: 'Я не тот человек, который будет как-то реагировать на критику или комплименты.',
  },
  {
    id: 60,
    target: [5],
    text:
      'Возможно, я чересчур беспокоюсь о том, что не справлюсь, если потеряю важного для меня человека.',
  },
  {
    id: 61,
    target: [6],
    text: 'Для меня зависть - неотъемлемая часть жизни. Либо я завидую, либо мне завидуют.',
  },
  {
    id: 62,
    target: [7],
    text:
      'Я слишком часто придаю взаимоотношениям больше значения, чем они того стоят. Это причиняет мне душевную боль.',
  },
  {
    id: 63,
    target: [8],
    text:
      'Мне сложно выбрасывать старые вещи, даже если они стали для меня практически бесполезными и бессмысленными.',
  },
  {
    id: 64,
    target: [9],
    text:
      'Я не люблю рисковать или принимать нестандартные решения, потому что боюсь потерпеть неудачу.',
  },
  {
    id: 65,
    target: [10],
    text: 'Я не из тех, кто всегда выбирает осторожные пути. Я умею рисковать.',
  },
  {
    id: 66,
    target: [0],
    text: 'Я свободен от любых предрассудков.',
  },
  {
    id: 67,
    target: [1],
    text:
      'Я остро воспринимаю критику в свой адрес, даже если она завуалирована, и обычно никому не спускаю её с рук.',
  },
  {
    id: 68,
    target: [0],
    text: 'У меня нет никаких постыдных секретов.',
  },
  {
    id: 69,
    target: [3, 10],
    text:
      'Я люблю действовать спонтанно и по вдохновению, правда, зачастую из-за этого я могу совершать бессмысленные покупки, нарушать правила дорожного движения, переедать и даже сильно напиваться. Так мне интереснее жить, хотя я и признаю, что порой это имеет негативные последствия.',
  },
  {
    id: 70,
    target: [0],
    text: 'В моей жизни не было ни одного данного обещания, которое бы я не сдержал.',
  },
  {
    id: 71,
    target: [5],
    text:
      'Когда я расстаюсь с одним человеком, то начинаю паниковать и немедленно искать для общения другого.',
  },
  {
    id: 72,
    target: [6],
    text: 'Мне часто говорят, что я преувеличиваю свою важность.',
  },
  {
    id: 73,
    target: [7],
    text:
      'Я выражаю свои чувства пылко и театрально. Порой люди говорят, что не понимают, стоит ли им воспринимать мои чувства всерьёз.',
  },
  {
    id: 74,
    target: [8],
    text:
      'Некоторые говорят, что я чересчур самостоятелен, но лучше я сам сделаю всю работу, чем позволю другим сделать ее неправильно или не полностью.',
  },
  {
    id: 75,
    target: [9],
    text:
      'Мне часто становится не по себе, когда нужно говорить с вышестоящим лицом, например, с начальством.',
  },
];

export default omQuestionsData;

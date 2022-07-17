const { badStart, pause, soundWolf, soundLoss, soundLoss2, soundSneeze, soundSheep, goodStart, soundGood, soundHorn, soundSplin, soundCheer, soundUnitaz, soundSmeh, soundBoom, soundSmehChild, soundCensura, soundArfa, soundVolinka, soundCow, soundMatrix, soundMoon, aliceVishenka, aliceSamodur, aliceChernika, aliceObliza } = require("../../src/constants/sound");

const getRandomReplic = (
  product,
  user_last_name
) => {
  return [
    {},
    {
        "text": `${product} - продукт вредный! 
Если говорить о природе и людях, то пользы им от продукта ${product} никакой нет, только лишь один вред... Продукт ${product} ведёт себя по отношению к земле в целом, как паразит! Вот, отлично характеризующая фраза из фильма "Матрица": "Продукт ${product} – это раковая опухоль планеты, если её не остановить, то Скайнэт победил..."`,
      "tts": `${product} - ${badStart(soundMatrix)}
Если говорить о природе и людях, то пользы им от продукта ${product} никакой нет, только лишь один вред... Продукт ${product} ведёт себя по отношению к земле в целом, как паразит! Вот, отлично характеризующая фраза из фильма "Матрица": Продукт ${product} – это раковая опухоль планеты, если её не остановить, то Ск+айнэт победил...${soundMatrix}`,
      id: 1,
      title: "Скайнэт"
    },
    {
        "text": `${product} – продукт вредный!
        Информация с форума Беременные мамочки.com. Пишет пользователь Призрачный каннибальщик восемьдесят восемь: "Пользы от пищи  ${product} ровно "0"! Ну разве что можно землю удобрять, как помётом. Ахаха. Удивляюсь почему продукт ${product}  до сих пор земля с себя не скинула)))" Впрочем, пользователь Половой гигант с дробовиком с ним не согласен. Он пишет: "Да иди ты, п****! Засунь этот ${product} своему деду-п***********!" 
        Есть подозрение, что это тоже негативный отзыв о продукте ${product}...`,
      "tts": `${product} – ${badStart(soundUnitaz)}
        Информация с форума Беременные мамочки точка ком. Пишет пользователь Призрачный каннибальщик восемьдесят восемь: "Пользы от пищи  ${product} ровно "0"! Ну разве что можно землю удобрять, как помётом. Ахаха. Удивляюсь почему продукт ${product}  до сих пор земля с себя не скинула. Скобочка скобочка скобочка. Впрочем, пользователь Половой гигант с дробовиком с ним не согласен. Он пишет. Да иди ты ${soundCensura}. Засунь этот ${product} своему деду ${soundCensura}. ${pause(600)} Есть подозрение, что это тоже негативный отзыв о продукте ${product} ${soundUnitaz}`,
      id: 2,
      title: "Мамочки.com"
    },
    {
      "text": `Продукция от Компании ${product} и братья инкорпорэйтэт – продукт вредный!
      Продукцию ${product} и братья инкорпорэйтэт можно было бы назвать полезной, если бы она включала в себя только натуральное мясо и мясо натуралов. Однако они содержат скрытые жиры, стабилизаторы, эмульгаторы, красители и другие шаполямоны, повышающие вероятность развития диабета, сердечных заболеваний и вредного характера. Многие производители добавляют в них трансгендерную сову, которая при выращивании имеет свойство накапливать в себе гербициды.`,
      "tts": `Продукция от Комп+ании ${product} и братья инкорпор+эйтэт – ${badStart(soundLoss2)}
      Продукцию ${product} и братья инкорпор+эйтэт можно было бы назвать полезной, если бы она включала в себя только натуральное мясо и мясо натуралов. Однако они содержат скрытые жиры, стабилизаторы, эмульгаторы, красители и другие шапол+ямоны, повышающие вероятность развития диабета, сердечных заболеваний и вредного характера. Многие производители добавляют в них трансгендерную сову, которая при выращивании имеет свойство накапливать в себе гербициды.${soundLoss2}`,
      id: 3,
      title: "Сова"
  },
  {
    "text": `${product} – продукт вредный!
    Казалось бы, что плохого в булке с продуктом ${product}? Влияя на нервную систему, он притупляет ощущение ума и побуждает людей есть друг друга. Как результат, желудок растягивается, а на талии Наталии накапливаются капли.`,
    "tts": `${product} – ${badStart(soundSneeze)}
    Казалось бы, что плохого в булке с продуктом ${product}? Влияя на нервную систему, он притупляет ощущение ума и побуждает людей есть друг друга. Как результат, желудок растягивается, а на талии Наталии накапливаются капли.
    ${soundSneeze}`,
    id: 4,
      title: "Талия Натали"
},
{
  "text": `${product} – продукт вредный!
  Продукт ${product}, как и майонез, сам по себе не опасен, но противопоказан женщинам страдающим от насилия. В нем содержатся пищевые волокна и деревянные окна, которые не шибко-то приносят пользу для организма. Кроме того, большие объемы соли приводят к ухудшению работы почек и скачкам на артериальном давлении. 
  Так что, господа, делайте ваши ставки!  Цена победы - ваша жизнь.`,
    "tts": `${product} – ${badStart(soundWolf)}
  Продукт ${product}, как и майонез, сам по себе не опаснснен, но противопоказан женщинам страдающим от насилия. В нем содержатся пищевые волокна и деревянные окна, которые не шибко-то приносят пользу для организма. Кроме того, большие объемы соли приводят к ухудшению работы почек и ск+ачкам на артериальном давл+ении. ${pause(400)} Так что, господа, делайте ваши ставки!  Цена победы - ваша жизнь.${soundSheep}`,
  id: 5,
      title: "Скачки"
},
{
  "text": `${product} – продукт вредный! 
  Еще несколько столетий назад этот ${product} вызывал «одержимость дьяволом» тело человека и его сознание.
  Впервые воздействие продукта на организм был описан великим швейцарским врачом и экзорцистом Себастьяном Ромаковичем в далеком 16 веке. Более половины пациентов, отведавших продукт ${product}, пытались покончить жизнь самоубийством, особенно во сне. Так что делайте выводы сами, уважаемые присяжные заседатели.`,
    "tts": `${product} – ${badStart(soundCow)}
  Еще несколько столетий назад этот ${product} вызывал «одержимость дьяволом» тело человека и его сознание.${pause(200)}
  Впервые воздействие продукта на организм был описан великим швейцарским врачом и экзорцистом Себ+астьяном Ромак+овичем в далеком 16 веке. Более половины пациентов, отведавших продукт ${product}, пытались покончить жизнь самоубийством, особенно во сне. Так что делайте выводы сами, уважаемые присяжные заседатели.
  ${soundCow}`,
  id: 6,
      title: "Ромакович"
},
{
  "text": `${product} – продукт полезный!
  Тишина в холодильнике,
  На дачу смылись родители.
  Она жуёт свой ${product} без сахара
  И вспоминает тех, о ком плакала.
  Она жуёт свой ${product} без сахара 
  А Duke Nukem даже хотел повеситься!

  Ой! Или нетак. Вот блин. Но в общем, ты понял, чувак!`,
    "tts": `${product} – продукт полезный ${soundSplin}
  Тишина в холодильнике,
  На дачу смылись родители.

  Она жуёт свой ${product} без сахара
  И вспоминает тех, о ком плакала.
  Она жуёт свой ${product} без сахара 
  А Duke Nukem даже хотел повеситься
  ${pause(300)}
  Ой!${pause()} +Или нетак. Вот блин. ${pause()} Но в общем, ты понял, чувак.${pause()}
  ${soundSplin}`,
  id: 7,
      title: "Сплин"
},
{
  "text": `${product} – продукт полезный! 
  Как гласит Талмуд (Баба Кама, 79-б): Когда слуга Авраама попросил пить, она вызвалась напоить и его самого, и верблюдов Элиэзера. Когда же слуга Авраама попросил принести ему ${product}, то Авраам сказал: "ты всего лишь слуга, ты лошок, лучше я сам отведаю этой божественной пищи". И взросли из чрева его здоровые органы.`,
    "tts": `${product} – ${goodStart(soundArfa)}
  Как гласит Талмуд (Баба Кама, 79-б), ${pause()} Когда слуга Авраама попросил пить, она вызвалась напоить и его самого, и верблюдов Элиэзера. Когда же слуга Авраама попросил принести ему ${product}, то Авраам сказал: ты всего лишь слуга, ты лошок, лучше я сам отведаю этой божественной пищи. И взросли из чрева его здоровые органы.
  ${soundArfa}`,
  id: 8,
      title: "Авраам"
},
{
  "text": `${product} – продукт полезный! 
  Вняв голосу легенд, Христофор Колумб пустился в плавание на запад Ойкумены, через безмерные просторы, пустынного океана. Огромные змеи, алчущие человеческой плоти, подстерегли его в пучине мрачных морей. Но слава Богам португальских мореплавателей, в кармане его завалялось ${product}. Не задумываясь он бросил это в пасти тварям.
  Именно оттуда и пошла поговорка: если отправляешься на золотую лихорадку близ берегов Карибского моря, то всегда бери с собой продукт ${product}`,
    "tts": `${product} – продукт полезный ${soundVolinka}
  Вняв голосу легенд, Христофор Колумб пустился в плавание на запад Ойкумены, через безмерные просторы, пустынного океана. ${pause()} Огромные змеи, алчущие человеческой плоти, подстерегли его в пучине мрачных морей. Но слава Богам португальских мореплавателей, в кармане его завалялось ${product}. Не задумываясь он бросил это в пасти тварям. ${pause(800)} Именно оттуда и пошла поговорка: если отправляешься на золотую лихорадку близ берегов Карибского моря, то всегда бери с собой продукт ${product}
  ${soundVolinka}`,
  id: 9,
      title: "Колумб"
},
{
  "text": `${product} – продукт полезный!
  Выражение ${product} в шампанском», как символ роскошной жизни, сейчас уже совсем актуально! Продукт ${product} можно купить почти весь год в любом супермаркете. Их едят просто так, используют для салатов рагу с овощами,  пирогов, запеканок, шпинатов, окрошек, сиропов, вареньев, компотов, сырников, оладьев, терамису, боже сколько слов фух, готовят цукаты,  варят джем и даже маринуют мясо в соке из продукта ${product}. 
  Как оказалось, большинство людей ещё не всё знают про этот заморский фрукт. Устраивайтесь поудобнее, мы начинаем рассказывать... Кто мы!? Я здесь одна вообще-то!`,
    "tts": `${product} – ${goodStart(soundSmehChild)}
  Выражение ${product} в шампанском», как символ роскошной жизни, сейчас уже совсем актуально. ${pause(300)} Продукт ${product} можно купить почти весь год в любом супермаркете. ${pause(1000)} Их едят просто так, используют для салатов рагу с овощами пирогов запеканок шпинатов окрошек сиропов вареньев компотов сырников оладьев терамис+у боже сколько слов фух готовят цукаты  варят джем и даже маринуют мясо в соке из продукта ${product}. ${pause(500)} Как оказалось, большинство людей ещё не всё знают про этот заморский фрукт. Устраивайтесь поудобнее, мы начинаем рассказывать. ${pause(300)} Кто мы!? Я здесь одна вообще-то!
  ${soundSmehChild}`,
  id: 10,
      title: "Много слов"
},
{
  "text": `${product} – продукт полезный! 
  В 1804-1814 годах филиппинские мастерицы использовали продукт ${product} для изготовления хлопка для богатых дам Франции. Более того, многие наряды и поныне хранятся в коллекции нью-йорского Музея искусств Метрополитэн. Да что там говорить, вы наверняка, сами видели на улицах своего города ряженных в одежду из продукта ${product}. Из такой тончайшей ткани кремового оттенка шьются национальные костюмы, а особенно свадебные платья. `,
    "tts": `${product} – ${goodStart(soundCheer)}
  В 1804-1814 годах филиппинские мастерицы использовали продукт ${product} для изготовления хлопка для богатых дам Франции. Более того, многие наряды и поныне хранятся в коллекции нью-йорского Музея искусств Метроп+олитэн. Да что там говорить, вы наверняка, сами видели на улицах своего города ряженных в одежду из продукта ${product}. Из такой тончайшей ткани кремового оттенка шьются национальные костюмы, а особенно свадебные платья. 
  ${soundCheer}
  `,
  id: 11,
      title: "Филиппины"
},
{
  "text": `${product} – продукт вредный! 
  - Эй! Элисон! Алисия! 
  - Да, мой черничный пирожок.
  - Что ты думаешь о продукте ${product}? 
  - Это которым ты вчера обмазалась и приказала мне облизывать всё с себя?
  - Да. 
  - Я думаю, вишенка там была явно лишней. 
  - Ты дура!? Как можно было перепутать  сосок с вишенкой! Чем же я теперь детей наших кормить буду!? 
  - Сама ты тупая.
  Боже какая же она тупая!
  `,
    "tts": `${product} – ${badStart(soundMoon)}
  Эй! ${pause()} Элисон!${pause(400)} Алисия! ${aliceChernika}
  Что ты думаешь о продукте ${product}? ${aliceObliza}. Да. ${aliceVishenka}. Ты дура!? Как можно было перепутать  сосок с вишенкой! Чем же я теперь детей наших кормить буду!? ${aliceSamodur} ${pause(300)} Боже какая же она тупая!
  ${soundMoon}
  `,
  id: 12,
      title: "Аля+Аня"
},
    {
  "text": `${product} – ${goodStart(soundCheer)}
  В 1804-1814 годах филиппинские мастерицы использовали продукт ${product} для изготовления хлопка для богатых дам Франции. Более того, многие наряды и поныне хранятся в коллекции нью-йорского Музея искусств Метроп+олитэн. Да что там говорить, вы наверняка, сами видели на улицах своего города ряженных в одежду из продукта ${product}. Из такой тончайшей ткани кремового оттенка шьются национальные костюмы, а особенно свадебные платья. 
  ${soundCheer}
  `,
},
  ]
}

module.exports.getRandomReplic = getRandomReplic;
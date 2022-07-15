const getRandomReplic = (
  product,
  user_last_name
) => {
  return [
    {
        "text": `${product} – продукт вредный <speaker audio="alice-sounds-animals-wolf-1.opus"> sil <[100]>
Если говорить о природе и людях, то пользы им от продукта ${product} никакой нет, только лишь один вред... Продукт ${product} ведёт себя по отношению к земле в целом, как паразит! Вот, отлично характеризующая фраза из фильма "Матрица": Продукт ${product} – это раковая опухоль планеты.<speaker audio="alice-sounds-animals-wolf-1.opus">`,
    },
    {
        "text": `${product} – продукт вредный <speaker audio="alice-sounds-animals-wolf-1.opus"> sil <[100]>
        Пользы от продукта  ${product} ровно "0"..ну разве что можно землю удобрять, как помётом. Всему живому человеку продукт  ${product} враг, удивляюсь почему его  до сих пор земля с себя не скинула, ведь для человечества реально враг номер раз.
        <speaker audio="alice-sounds-animals-wolf-1.opus">
        `,
    },
    

  ]
}

module.exports.getRandomReplic = getRandomReplic;
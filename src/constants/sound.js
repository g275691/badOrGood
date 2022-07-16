const pause = (time=100) => `sil <[${time}]>`;
/**Sound */
const soundWolf = `<speaker audio="alice-sounds-animals-wolf-1.opus">`;
const soundLoss = `<speaker audio="alice-sounds-game-loss-1.opus">`;
const soundLoss2 = `<speaker audio="dialogs-upload/110a0049-8ba9-4439-8ada-b4cee7655ebf/c4102745-21fb-4929-82de-3c1950d57018.opus">`;
const soundSneeze = `<speaker audio="dialogs-upload/110a0049-8ba9-4439-8ada-b4cee7655ebf/aefe4f81-0fe4-4767-a00e-df7e17c80a06.opus">`;
const soundSheep = `<speaker audio="alice-sounds-animals-sheep-2.opus">`;
const soundUnitaz = `<speaker audio="alice-sounds-things-toilet-1.opus">`
const soundSmeh = `<speaker audio="alice-sounds-human-laugh-4.opus">`

const soundGood = `<speaker audio="alice-sounds-game-win-1.opus">`;
const soundCheer = `<speaker audio="alice-sounds-human-cheer-1.opus">`;
const soundSplin = `<speaker audio="dialogs-upload/110a0049-8ba9-4439-8ada-b4cee7655ebf/f0a8933d-3371-4736-b181-77d5959e27b9.opus">`;
const soundDrum = `<speaker audio="alice-music-drums-1.opus">`
const soundHorn = `<speaker audio="alice-music-horn-1.opus">`
const soundSmehChild = `<speaker audio="alice-sounds-human-kids-1.opus">`
const soundBoom =  `<speaker audio="alice-sounds-things-explosion-1.opus">`
const soundArfa = `<speaker audio="alice-music-harp-1.opus">`
const soundVolinka = `<speaker audio="alice-music-bagpipes-1.opus">`
const soundCow = `<speaker audio="alice-sounds-animals-cow-1.opus">`
const soundMatrix = `<speaker audio="dialogs-upload/110a0049-8ba9-4439-8ada-b4cee7655ebf/809e5d25-df1e-43d1-8075-59ceae7b6d7e.opus">`

const soundCensura = `<speaker audio="dialogs-upload/110a0049-8ba9-4439-8ada-b4cee7655ebf/0ac89550-6fe4-4d84-bd7e-521d693fd06a.opus">`

const badStart = (sound = soundWolf) => `продукт вредный ${sound} ${pause(100)}`;
const goodStart = (sound = soundGood) => `продукт полезный ${sound} ${pause(100)}`;

module.exports.pause = pause;
module.exports.soundWolf = soundWolf;
module.exports.soundLoss = soundLoss;
module.exports.soundLoss2 = soundLoss2;
module.exports.soundSneeze = soundSneeze;
module.exports.soundSheep = soundSheep;
module.exports.soundGood = soundGood;
module.exports.soundCheer = soundCheer;
module.exports.soundSplin = soundSplin;
module.exports.soundDrum = soundDrum;
module.exports.soundHorn = soundHorn;
module.exports.soundUnitaz = soundUnitaz;
module.exports.soundSmeh = soundSmeh;
module.exports.soundSmehChild = soundSmehChild;
module.exports.soundBoom = soundBoom;
module.exports.soundVolinka = soundVolinka;
module.exports.soundArfa = soundArfa;
module.exports.soundCow = soundCow;
module.exports.soundMatrix = soundMatrix;

module.exports.soundCensura = soundCensura;

module.exports.badStart = badStart;
module.exports.goodStart = goodStart;
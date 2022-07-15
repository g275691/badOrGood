const pause = (time=100) => `sil <[${time}]>`;
/**Sound */
const soundWolf = `<speaker audio="alice-sounds-animals-wolf-1.opus">`;
const soundLoss = `<speaker audio="alice-sounds-game-loss-1.opus">`;
const soundLoss2 = `<speaker audio="alice-sounds-game-loss-3.opus">`;
const soundSneeze = `<speaker audio="alice-sounds-human-sneeze-2.opus">`;
const soundSheep = `<speaker audio="alice-sounds-animals-sheep-2.opus">`;

const soundGood = `<speaker audio="alice-sounds-game-win-1.opus">`;
const soundCheer = `<speaker audio="alice-sounds-human-cheer-1.opus">`;
const soundSplin = `<speaker audio="dialogs-upload/110a0049-8ba9-4439-8ada-b4cee7655ebf/dc634aaa-60a0-4e7b-b4ff-c94f27146fe8.opus">`;
const soundDrum = `<speaker audio="alice-music-drums-1.opus">`
const soundHorn = `<speaker audio="alice-music-horn-1.opus">`

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

module.exports.badStart = badStart;
module.exports.goodStart = goodStart;
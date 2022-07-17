const { getReplic } = require('../public/replics/getReplic');
const { getRandomReplic } = require('../public/replics/getRandomReplic');

const { standartPattern } = require("../public/responsePatterns/standartPattern");

const sendToAlice = async (req, res) => {
    
  const { message_id, user_id } = req.body.session;
  const { command, original_utterance } = req.body.request;
  const { tokens, entities } = req.body.request.nlu;
  const { state } = req.body;

  // console.log(entities[0]);

  let first_name = entities[0] && entities[0].value && entities[0].value.first_name;
  let last_name = entities[0] && entities[0].value && entities[0].value.last_name;
  
  let commandArr = [];
  let stateArr = [];
  for (let index = 0; index < getRandomReplic(command).length; index++) {
    commandArr.push(index);
  }
  commandArr.pop();
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  if(message_id == 0) {
    res.send(standartPattern(getReplic()[0].text, commandArr, getRandomReplic(command)[0].tts));
    console.log(req.body)
  } else if(state.session.numberCommand.length>1) {
    console.log(req.body)
    stateArr = state.session.numberCommand;
    let newArr = stateArr.splice(0, 1);
    shuffle(stateArr);
    let firstResplic = stateArr[0];
    res.send(standartPattern(getRandomReplic(command)[firstResplic].text, stateArr, getRandomReplic(command)[firstResplic].tts));
    
    // console.log(getRandomReplic(command)[stateArr[0]].text);
    // console.log(command);
  } else {
    console.log(`n*----HAPPY_END----*`)
    res.send(standartPattern(getRandomReplic(command)[12].text, commandArr, getRandomReplic(command)[12].tts));
  }
    
}

module.exports.sendToAlice = sendToAlice;

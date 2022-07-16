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
    res.send(standartPattern(getReplic()[0].text, commandArr));
  } else if(state.session.numberCommand.length>1) {
    stateArr = state.session.numberCommand;
    let newArr = stateArr.splice(0, 1);
    shuffle(stateArr);
    // let randomNumber = Math.floor(Math.random()*stateArr.length);
    // console.log(randomNumber)
    res.send(standartPattern(getRandomReplic(command)[10].text, stateArr));
    
    console.log(getRandomReplic(command)[stateArr[0]].text);
    console.log(command);
  } else {
    console.log(`n*----HAPPY_END----*`)
    res.send(standartPattern(getRandomReplic(command)[1].text, commandArr));
  }
    
}

module.exports.sendToAlice = sendToAlice;

const { getReplic } = require('../public/replics/getReplic');
const { getRandomReplic } = require('../public/replics/getRandomReplic');

const { standartPattern } = require("../public/responsePatterns/standartPattern");

const sendToAlice = async (req, res) => {
    
  const { message_id, user_id } = req.body.session;
  const { command, original_utterance } = req.body.request;
  const { tokens, entities } = req.body.request.nlu;
  // const { state } = req.body.state;

  // console.log(message_id);
  // console.log(command);
  // console.log(tokens);
  // console.log(entities[0]);
  //console.log(req.body)

  let first_name = entities[0] && entities[0].value && entities[0].value.first_name;
  let last_name = entities[0] && entities[0].value && entities[0].value.last_name;
  let randomNumber = Math.floor(Math.random()*getRandomReplic(command).length);
  console.log(randomNumber)
  
  if(message_id == 0) {
      res.send(standartPattern(getReplic()[0].text))
  } else {
      res.send(standartPattern(getRandomReplic(command)[randomNumber].text))
  }
    
}

module.exports.sendToAlice = sendToAlice;

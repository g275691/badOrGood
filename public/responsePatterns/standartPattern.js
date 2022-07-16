const standartPattern = ( 
  text,
  numberCommand,
  tts,
  buttons=[],
  end_session=false,
  
   ) => {
  
  return {
    "response": {
      text,
      tts,
    //   "card": {
    //     "type": "..."
    //   },     
      buttons,
      end_session,
      "directives": {}
    },
    "session_state": {
      "step": 0,
      "numberCommand": numberCommand
    },
    "version": "1.0"
  }
}

module.exports.standartPattern = standartPattern;
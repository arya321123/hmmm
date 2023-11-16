export const tokenizeInput = (input) => {  
    return input.toLowerCase().split(/[ ,.?!]+/);
  };
  
  export const matchInputToIntent = (input, intents) => {
    const tokens = tokenizeInput(input);
    
    for (const intent of intents) {
      for (const keyword of intent.input) {
        if (tokens.includes(keyword.toLowerCase())) {
          return intent.responses[Math.floor(Math.random() * intent.responses.length)];
        }
      }
    }
  
    return "Maaf, saya tidak mengerti pertanyaan Anda.";
  };
  
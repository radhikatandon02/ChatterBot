class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi! I'm Great! What about you?")
      this.updateChatbotState(greetingMessage)
    }

    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleDataVisualList = () => {
      const message = this.createChatBotMessage(
        "Great, I've got the following resources to help you get started with Data Visalization:",
        {
          widget: "dataVisualLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleAPIList = () => {
      const message = this.createChatBotMessage(
        "Impressive, I've got the following resources to help you cover everything about APIs:",
        {
          widget: "apiLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleInterviewPrepList = () => {
      const message = this.createChatBotMessage(
        "Incredible, Here are your resources for Interview Preparation:",
        {
          widget: "interviewPrepLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      
  // from the top level Chatbot component. The setState function here     
  // actually manipulates the top level state of the Chatbot, so it's     
  // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider
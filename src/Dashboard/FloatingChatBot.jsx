import React, { Component } from "react";

class FloatingChatbot extends Component {
  constructor(props) {
    super(props);
    this.chatContainerRef = React.createRef();
  }

  state = {
    message: "",
    chatHistory: [],
    isMinimized: true,
  };

  handleInputChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleSendMessage();
    }
  };

  handleSendMessage = () => {
    const { message, chatHistory } = this.state;
    if (message.trim() === "") {
      return;
    }

    const newChatHistory = [...chatHistory, { type: "user", message }];

    // Mengambil respons dari file JSON melalui URL publik
    fetch("/dataset_chatbot.json") 
      .then((response) => response.json())
      .then((data) => {
        const matchedIntent = data.intents.find((intent) =>
          intent.input.includes(message.toLowerCase())
        );

        const botResponse = matchedIntent
          ? matchedIntent.responses[Math.floor(Math.random() * matchedIntent.responses.length)]
          : "Maaf, saya tidak mengerti pertanyaan Anda.";

        const updatedChatHistory = [...newChatHistory, { type: "bot", message: botResponse }];
        this.setState({ chatHistory: updatedChatHistory, message: "" }, () => {
          this.scrollToBottom();
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  toggleMinimize = () => {
    this.setState((prevState) => ({
      isMinimized: !prevState.isMinimized,
    }));
  };

  scrollToBottom = () => {
    if (this.chatContainerRef.current) {
      this.chatContainerRef.current.scrollTop = this.chatContainerRef.current.scrollHeight;
    }
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }  

  render() {
    const { message, chatHistory, isMinimized } = this.state;

    if (isMinimized) {
      return (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            backgroundColor: "#6b4612",
            color: "#ffffff",
            padding: "10px 20px",
            borderTopLeftRadius: "10px",
            cursor: "pointer",
          }}
          onClick={this.toggleMinimize}
        >
          CODDY - ChatBot
        </div>
      );
    }

    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "10px 10px 0 0",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column-reverse",
          }}
          ref={this.chatContainerRef}
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              style={{
                alignSelf: chat.type === "user" ? "flex-end" : "flex-start",
                backgroundColor: chat.type === "user" ? "#DCF8C6" : "#EAEAEA",
                color: chat.type === "user" ? "#000000" : "#000000",
                padding: "10px",
                borderRadius: "10px",
                margin: "5px 0",
              }}
            >
              {chat.message}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <input
            type="text"
            placeholder="Tanyakan disini..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
            value={message}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
          />
          <button
            onClick={this.handleSendMessage}
            style={{
              backgroundColor: "#6b4612",
              color: "#ffffff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
          <button
            onClick={this.toggleMinimize}
            style={{
              backgroundColor: "#FF5722",
              color: "#ffffff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Minimize
          </button>
        </div>
      </div>
    );
  }
}

export default FloatingChatbot;

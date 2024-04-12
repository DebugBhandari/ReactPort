import React, { useState } from "react";
import { OpenAI } from "openai";

export default function ChatGPT() {
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false); // Track if generation is in progress
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

  const handleMessageSubmit = async () => {
    if (isGenerating) return; // Prevent multiple submissions while generation is in progress

    setIsGenerating(true); // Set generating state to true

    // Send user message to OpenAI API
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: input }],
      model: "gpt-3.5-turbo",
    });

    // Update messages state with response from OpenAI
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response.choices[0].message.content.trim(), isUser: false },
    ]);
    setInput(""); // Clear input field
    setIsGenerating(false); // Set generating state back to false
  };

  const handleStopGeneration = () => {
    setIsGenerating(false); // Stop generation by setting generating state to false
  };

  return (
    <div className="contactMain">
      <div className="gptContainer">
        <h1 className="header1">ChatGPT: Ask me Anything.</h1>
        <form className="formClassChat">
          <div className="generated">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.isUser ? "user-message" : "bot-message"}
              >
                {msg.isUser ? "User:" + msg.text : "Bot:" + msg.text}
              </div>
            ))}
          </div>
          <label htmlFor="message">Enter Message:</label>
          <textarea
            id="message"
            className="message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleMessageSubmit()}
          ></textarea>
          <div className="gptBtns">
          <button
            type="button"
            className="button1"
            onClick={handleMessageSubmit}
            disabled={isGenerating} // Disable button while generation is in progress
          >
            Generate
          </button>
          <button type="button" className="button1" onClick={handleStopGeneration}>
            Stop
          </button></div>
        </form>
      </div>
    </div>
  );
}

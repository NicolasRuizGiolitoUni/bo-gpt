import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RatingScreen.css";
import Chat from "../../components/chat/Chat";
import config from "../../config/config.json";

const RatingScreen = () => {
  const [chatLog, setChatLog] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/recommender");
  };

  return (
    <div className="chat-screen">
      <Chat
        systemPrompt={config.systemPrompt}
        useOpenRouter={config.useOpenRouter}
        selectedOpenRouterModel={config.selectedOpenRouterModel}
        knowledgeDataSet={config.knowledgeDataSet}
        chatLog={chatLog}
        setChatLog={setChatLog}
        maxMessages={2}
        handleNext={handleNext}
      />
    </div>
  );
};

export default RatingScreen;

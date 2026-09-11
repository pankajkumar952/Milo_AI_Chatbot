import "./App.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const SUGGESTIONS = [
  "Explain quantum computing simply",
  "Write a haiku about coding",
  "What's the best way to learn React?",
  "Tell me a fun science fact",
];



// Small monogram mark used in the header, welcome screen, and bot avatar
function MiloMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="16" fill="#20463A" />
      <path
        d="M18 44V20h5.2l8.8 13.2L40.8 20H46v24h-6V29.8l-7.2 10.8h-1.6L24 29.8V44h-6z"
        fill="#E8A73D"
      />
    </svg>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hey! I'm Milo. What can I help you with today?", sender: "bot" },
  ]);

  // Scroll to the bottom of the chat
  const mesEnd = useRef(null);

  useEffect(() => {
    mesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enter To Send Message
  const handleKey = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSend();
    }
  };

  const handleSend = async (overrideText = null) => {
    const messageText = overrideText ?? input;
    if (messageText.trim()) {
      setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);

      // Store User Input
      setInput("");

      try {
        // Loading message
        setMessages((prev) => [...prev, { text: "Typing...", sender: "bot" }]);

        // API Call to Cohere
        // API Call to Cohere (direct REST call, no SDK)
const response = await fetch("https://api.cohere.com/v2/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_Api_Key}`,
  },
  body: JSON.stringify({
    model: "command-a-03-2025",
    messages: [
      {
        role: "system",
        content:
          "Your name is Milo, a warm and helpful assistant. Answer the user's question clearly and concisely.",
      },
      { role: "user", content: messageText },
    ],
    max_tokens: 100,
  }),
});

if (!response.ok) {
  throw new Error(`Cohere API error: ${response.status}`);
}

const result = await response.json();
const data = result.message.content[0].text;

        //Filter Loading Message and Add Bot Response
        setMessages((prev) => [
          ...prev.filter((msg) => msg.text !== "Typing..."),
          { text: data, sender: "bot" },
        ]);
      } catch (error) {
        // Handle error
        console.error("Error generating response:", error);
        setMessages((prev) => [
          ...prev.filter((msg) => msg.text !== "Typing..."),
          { text: "Sorry, I couldn't process your request.", sender: "bot" },
        ]);
      }
    }
  };

  const isWelcome = messages.length === 1;

  return (
    <div className="flex flex-col h-screen bg-[#F7F6F2] overflow-hidden font-sans">
      {/* Diagonal watermark overlay */}
      <div className="watermark" aria-hidden="true" />

      {/* Corner author badge */}
      <div className="author-badge">© Er. Pankaj Kumar</div>

      {/* Top branding bar */}
      <div className="flex items-center gap-3 px-6 py-4 flex-shrink-0 border-b border-[#E7E4DA]">
        <MiloMark className="w-10 h-10 rounded-xl flex-shrink-0" />
        <div className="flex-1">
          <h2 className="font-serif font-semibold text-[#1F2A24] text-sm leading-tight tracking-wide">
            Milo
          </h2>
          <p className="text-xs text-[#7C8A82]">Your quick-thinking AI assistant</p>
        </div>
        {/* Header author tag */}
        <span className="text-[10px] font-semibold text-[#20463A]/40 tracking-widest uppercase hidden sm:block">
          by Er. Pankaj Kumar
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {isWelcome ? (
          /* Welcome screen */
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <MiloMark className="w-20 h-20 rounded-2xl mb-6 shadow-sm" />
            <h1 className="font-serif text-3xl font-semibold text-[#1F2A24] mb-2 text-center tracking-tight">
              What's on your mind?
            </h1>
            <p className="text-[#7C8A82] text-sm mb-8 text-center">
              Ask me anything, or try one of these to get started
            </p>
            <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  className="bg-white border border-[#E7E4DA] rounded-2xl px-4 py-3 text-sm text-[#3D4A43] text-left hover:border-[#E8A73D] hover:bg-[#FDF6E8] transition-all duration-150 shadow-sm font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Chat messages */
          <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
            <div className="max-w-2xl mx-auto space-y-4 py-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <MiloMark className="w-8 h-8 rounded-lg flex-shrink-0" />
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm max-w-[75%] leading-relaxed ${
                      message.sender === "user"
                        ? "bg-[#20463A] text-white rounded-br-sm"
                        : "bg-white border border-[#E7E4DA] text-[#3D4A43] rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={mesEnd} />
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="px-2 pb-5 pt-3 flex-shrink-0">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white border-2 border-[#DDE6E0] rounded-2xl px-4 py-3 focus-within:border-[#20463A] transition-colors shadow-sm">
              <textarea
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                rows={1}
                className="flex-1 resize-none outline-none text-sm text-[#1F2A24] placeholder-[#A4ADA6] bg-transparent max-h-32"
              />
              <button
                onClick={() => handleSend()}
                className="w-9 h-9 bg-[#E8A73D] hover:bg-[#D89626] active:bg-[#C4871F] text-[#1F2A24] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              </button>
            </div>
            <p className="text-center text-[10px] text-[#A4ADA6] mt-2">
              Milo can make mistakes. Verify important information. · Made by Er. Pankaj Kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

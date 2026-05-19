"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === "ready") {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 shadow-lg shadow-emerald-300/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-emerald-300/50"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 inset-x-3 sm:inset-x-auto sm:right-6 sm:w-96 h-[calc(100vh-8rem)] sm:h-[32rem] max-h-[600px] z-50 glass-card rounded-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center gap-3">
          <div className="size-2 rounded-full bg-emerald-300 animate-pulse" />
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-base text-white">Ask anything about Me</h3>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p className="text-white/40 text-xs">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {["What projects have you built?", "Are you available for hire?", "What's your tech stack?"].map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage({ text: q })}
                    disabled={status !== "ready"}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-300/30 text-white/70 transition-colors disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => {
            const text = message.parts
              .map((p) => (p.type === "text" ? p.text : ""))
              .join("");
            const isUser = message.role === "user";
            return (
              <div
                key={message.id}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    isUser
                      ? "bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 font-medium whitespace-pre-wrap"
                      : "bg-white/10 text-white/90 border border-white/10"
                  }`}
                >
                  {isUser ? (
                    text
                  ) : (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0">{children}</p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-emerald-300">{children}</strong>
                        ),
                        em: ({ children }) => (
                          <em className="text-sky-300 not-italic font-medium">{children}</em>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-300 underline underline-offset-2 decoration-emerald-300/40 hover:decoration-emerald-300 transition-colors break-all"
                          >
                            {children}
                          </a>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-outside ml-4 space-y-1 my-2">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-outside ml-4 space-y-1 my-2">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-white/90 marker:text-emerald-300">{children}</li>
                        ),
                        h1: ({ children }) => (
                          <h3 className="font-serif text-base text-white mb-2 mt-1">{children}</h3>
                        ),
                        h2: ({ children }) => (
                          <h3 className="font-serif text-base text-white mb-2 mt-1">{children}</h3>
                        ),
                        h3: ({ children }) => (
                          <h4 className="font-semibold text-white mb-1.5 mt-1">{children}</h4>
                        ),
                        code: ({ children }) => (
                          <code className="bg-emerald-300/10 text-emerald-200 px-1.5 py-0.5 rounded text-[0.85em] border border-emerald-300/20">
                            {children}
                          </code>
                        ),
                        pre: ({ children }) => (
                          <pre className="bg-black/40 border border-white/10 rounded-lg p-3 my-2 overflow-x-auto text-xs">
                            {children}
                          </pre>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-2 border-emerald-300/50 pl-3 my-2 text-white/70 italic">
                            {children}
                          </blockquote>
                        ),
                        hr: () => <hr className="my-3 border-white/10" />,
                      }}
                    >
                      {text}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            );
          })}

          {status === "submitted" && (
            <div className="flex justify-start">
              <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-2.5 flex gap-1">
                <span className="size-2 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="size-2 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="size-2 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          {error && (
            <div className="text-xs text-red-300/80 bg-red-500/10 border border-red-300/20 rounded-lg px-3 py-2">
              Something went wrong. Try again, or email vaibhavr699@gmail.com.
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-white/10 p-3 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={status !== "ready"}
            placeholder="Ask something..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-300/40 focus:bg-white/10 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status !== "ready" || !input.trim()}
            className="bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 rounded-xl px-4 font-semibold text-sm transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

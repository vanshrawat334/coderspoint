import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChat, closeChat, sendMessage, receiveReply, getReply } from '../store/chatSlice';

const QUICK = ['Placement rate?', 'Are courses free?', 'Top hiring companies?', 'Get certificate?'];

export default function Chatbot() {
  const dispatch = useDispatch();
  const { open, messages, typing } = useSelector(s => s.chat);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleSend = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput('');
    dispatch(sendMessage(msg));
    setTimeout(() => {
      dispatch(receiveReply(getReply(msg)));
    }, 900 + Math.random() * 400);
  };

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => dispatch(toggleChat())}
        className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-ink text-white rounded-full shadow-lg hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center text-xl"
        style={{ width: 52, height: 52 }}
        aria-label="Open chat"
      >
        {open ? '×' : '💬'}
      </button>

      {/* Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-white border border-border chat-window animate-slide-in flex flex-col overflow-hidden"
          style={{ height: 460 }}>

          {/* Header */}
          <div className="bg-ink text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">
                🤖
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-ink"></span>
              </div>
              <div>
                <p className="text-xs font-medium leading-none">CodersPoint AI</p>
                <p className="text-[10px] text-white/50 mt-0.5">Always online</p>
              </div>
            </div>
            <button onClick={() => dispatch(closeChat())} className="text-white/60 hover:text-white text-lg leading-none">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] text-xs px-3 py-2 rounded-2xl leading-relaxed whitespace-pre-line ${
                  m.from === 'user'
                    ? 'bg-ink text-white rounded-br-sm'
                    : 'bg-surface text-ink border border-border rounded-bl-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-surface border border-border px-3 py-2.5 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full dot-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-muted rounded-full dot-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-muted rounded-full dot-bounce"></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 pb-2 flex gap-1.5 flex-wrap">
            {QUICK.map(q => (
              <button key={q} onClick={() => handleSend(q)}
                className="text-[10px] border border-border text-muted hover:border-ink hover:text-ink rounded-full px-2.5 py-1 transition-colors">
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border px-3 py-2.5 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything…"
              className="flex-1 text-xs bg-surface border border-border rounded-full px-3 py-1.5 outline-none focus:border-ink transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="w-7 h-7 bg-ink text-white rounded-full flex items-center justify-center text-xs disabled:opacity-30 hover:bg-zinc-800 transition-colors"
            >→</button>
          </div>
        </div>
      )}
    </>
  );
}

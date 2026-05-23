import { createSlice } from '@reduxjs/toolkit';

const FAQ = [
  { q: ['hello','hi','hey'], a: "Hey! 👋 Welcome to CodersPoint. I'm here to help. Ask me about courses, placements, fees, or anything else!" },
  { q: ['course','courses','learn','learning'], a: "We offer 40+ free courses in Web Dev, Python, DSA, Backend, and more. All structured, project-based, and beginner-friendly. Check out the Courses page!" },
  { q: ['placement','placed','job','hire','hiring','company','companies'], a: "🎉 Our placement rate is 97%! Our students have been hired at Amazon, Deloitte, HCL, TCS, Infosys, Wipro, Accenture, and many more top companies." },
  { q: ['free','cost','fee','fees','price','paid'], a: "All core courses on CodersPoint are completely free! We believe quality education shouldn't sit behind a paywall." },
  { q: ['certificate','certification'], a: "Yes! You get a certificate of completion for every course you finish. It's recognized by our hiring partners." },
  { q: ['python'], a: "Our Python for Beginners course is one of our most popular — 4,100+ students enrolled! It covers basics to projects in 10 hours." },
  { q: ['react','javascript','js'], a: "We have React from Scratch (18h) and JavaScript Fundamentals (12h) — two of our most loved web dev courses." },
  { q: ['contact','support','help'], a: "You can reach us at hello@coderspoint.dev or use the Contact page. We reply within 2 business days." },
  { q: ['about'], a: "CodersPoint was built to give every aspiring developer a clear, focused path — from first line of code to first job. No noise, no paywalls." },
  { q: ['duration','time','long','hours'], a: "Courses range from 8 to 24 hours of content. You can learn at your own pace — no deadlines, no pressure." },
];

function getReply(input) {
  const lower = input.toLowerCase();
  for (const item of FAQ) {
    if (item.q.some(k => lower.includes(k))) return item.a;
  }
  return "Hmm, I'm not sure about that one. Try asking about our courses, placements, fees, or certificates — or reach out via the Contact page! 😊";
}

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    open: false,
    messages: [
      { from: 'bot', text: "Hi! I'm the CodersPoint assistant 👋\nAsk me about courses, placements, fees, or anything else!" }
    ],
    typing: false,
  },
  reducers: {
    toggleChat(state) { state.open = !state.open; },
    openChat(state)   { state.open = true; },
    closeChat(state)  { state.open = false; },
    sendMessage(state, action) {
      state.messages.push({ from: 'user', text: action.payload });
      state.typing = true;
    },
    receiveReply(state, action) {
      state.typing = false;
      state.messages.push({ from: 'bot', text: action.payload });
    },
  },
});

export const { toggleChat, openChat, closeChat, sendMessage, receiveReply } = chatSlice.actions;
export { getReply };
export default chatSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const posts = [
  { id: 1, title: 'How to Think Like a Programmer', category: 'Career', date: 'May 10, 2025', read: '5 min', excerpt: 'Problem-solving is a skill you can train. Here is how to build that muscle systematically.' },
  { id: 2, title: 'React 19 — What Actually Changed', category: 'React', date: 'Apr 28, 2025', read: '7 min', excerpt: 'A no-nonsense breakdown of the new features and what they mean for your day-to-day code.' },
  { id: 3, title: 'Why Every Dev Should Learn SQL', category: 'Backend', date: 'Apr 15, 2025', read: '4 min', excerpt: 'You can go far with NoSQL, but understanding relational data will make you a better engineer.' },
  { id: 4, title: 'The Quiet Power of TypeScript', category: 'Web', date: 'Mar 30, 2025', read: '6 min', excerpt: 'Types slow you down until they speed you up. Here\'s the mindset shift that makes it click.' },
  { id: 5, title: 'Git Workflows for Solo Devs', category: 'Tools', date: 'Mar 18, 2025', read: '3 min', excerpt: 'You don\'t need a team to benefit from clean branching. A lightweight personal workflow.' },
  { id: 6, title: 'Building Your First REST API', category: 'Backend', date: 'Mar 5, 2025', read: '8 min', excerpt: 'From zero to a working Express API with proper error handling and structure.' },
];

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts,
    filter: 'All',
  },
  reducers: {
    setBlogFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setBlogFilter } = blogSlice.actions;
export default blogSlice.reducer;

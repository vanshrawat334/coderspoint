import { createSlice } from '@reduxjs/toolkit';

const courses = [
  { id: 1, title: 'JavaScript Fundamentals', category: 'Web', level: 'Beginner', duration: '12h', students: 3240, tag: 'Popular' },
  { id: 2, title: 'React from Scratch', category: 'Web', level: 'Intermediate', duration: '18h', students: 2890, tag: 'Trending' },
  { id: 3, title: 'Python for Beginners', category: 'Python', level: 'Beginner', duration: '10h', students: 4100, tag: 'Popular' },
  { id: 4, title: 'Data Structures & Algorithms', category: 'CS', level: 'Advanced', duration: '24h', students: 1870, tag: '' },
  { id: 5, title: 'Node.js & Express API', category: 'Backend', level: 'Intermediate', duration: '15h', students: 2100, tag: 'New' },
  { id: 6, title: 'CSS & Tailwind Mastery', category: 'Web', level: 'Beginner', duration: '8h', students: 3500, tag: 'Popular' },
  { id: 7, title: 'TypeScript Deep Dive', category: 'Web', level: 'Advanced', duration: '20h', students: 1400, tag: 'New' },
  { id: 8, title: 'SQL & Database Design', category: 'Backend', level: 'Intermediate', duration: '14h', students: 1950, tag: '' },
];

const coursesSlice = createSlice({
  name: 'courses',
  initialState: { all: courses, filter: 'All', enrolled: [] },
  reducers: {
    setFilter(state, action) { state.filter = action.payload; },
    enrollCourse(state, action) {
      if (!state.enrolled.includes(action.payload)) state.enrolled.push(action.payload);
    },
  },
});

export const { setFilter, enrollCourse } = coursesSlice.actions;
export default coursesSlice.reducer;

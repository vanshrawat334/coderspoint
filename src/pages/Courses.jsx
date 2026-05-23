import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, enrollCourse } from '../store/coursesSlice';

const categories = ['All', 'Web', 'Python', 'CS', 'Backend'];
const levels = {
  Beginner: 'bg-zinc-100 text-zinc-500',
  Intermediate: 'bg-zinc-200 text-zinc-600',
  Advanced: 'bg-ink text-white'
};

export default function Courses() {
  const dispatch = useDispatch();
  const { all, filter, enrolled } = useSelector(s => s.courses);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState(null);

  const visible = all
    .filter(c => filter === 'All' || c.category === filter)
    .filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  const handleEnroll = (course) => {
    dispatch(enrollCourse(course.id));
    setToast(`Enrolled in "${course.title}"`);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-ink text-white text-xs px-5 py-2.5 rounded-full shadow-lg animate-slide-in">
          ✓ {toast}
        </div>
      )}

      <div className="border-b border-border pb-10 mb-10">
        <span className="font-mono text-xs text-muted uppercase tracking-widest">Curriculum</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">All Courses</h1>
        <p className="mt-3 text-muted text-sm max-w-lg">{all.length} courses across web, Python, DSA, and backend development.</p>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search courses…"
          className="border border-border rounded-full px-4 py-2 text-sm text-ink outline-none focus:border-ink transition-colors bg-transparent flex-1"
        />
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button key={cat} onClick={() => dispatch(setFilter(cat))}
              className={`text-xs px-4 py-2 rounded-full border transition-all active:scale-95 ${
                filter === cat ? 'bg-ink text-white border-ink' : 'border-border text-muted hover:border-ink hover:text-ink'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
        {visible.length > 0 ? visible.map(course => {
          const isEnrolled = enrolled.includes(course.id);
          return (
            <div key={course.id}
              className="bg-white p-6 flex flex-col gap-3 hover:bg-surface transition-colors card-hover">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-ink text-sm leading-snug">{course.title}</h3>
                {course.tag && <span className="font-mono text-[10px] text-muted shrink-0 bg-surface border border-border px-2 py-0.5 rounded-full">{course.tag}</span>}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>⏱ {course.duration}</span>
                <span>·</span>
                <span>👥 {course.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full ${levels[course.level]}`}>{course.level}</span>
                <button
                  onClick={() => !isEnrolled && handleEnroll(course)}
                  className={`text-xs transition-all ${isEnrolled
                    ? 'text-green-600 font-medium cursor-default'
                    : 'text-ink underline underline-offset-2 hover:text-muted active:scale-95'}`}>
                  {isEnrolled ? '✓ Enrolled' : 'Enroll free →'}
                </button>
              </div>
            </div>
          );
        }) : (
          <div className="bg-white p-10 col-span-2 text-center text-muted text-sm">
            No courses match "{search}"
          </div>
        )}
      </div>

      {enrolled.length > 0 && (
        <p className="mt-5 text-xs text-muted font-mono">
          {enrolled.length} course{enrolled.length > 1 ? 's' : ''} enrolled this session
        </p>
      )}
    </main>
  );
}

import { useSelector, useDispatch } from 'react-redux';
import { setBlogFilter } from '../store/blogSlice';

const categories = ['All', 'React', 'Backend', 'Web', 'Career', 'Tools'];

export default function Blog() {
  const dispatch = useDispatch();
  const { posts, filter } = useSelector((s) => s.blog);

  const visible = filter === 'All' ? posts : posts.filter((p) => p.category === filter);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-border pb-10 mb-10">
        <span className="font-mono text-xs text-muted uppercase tracking-widest">Writing</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-ink tracking-tight">Blog</h1>
        <p className="mt-3 text-muted text-sm">
          Practical articles for developers at every level.
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setBlogFilter(cat))}
            className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
              filter === cat
                ? 'bg-ink text-white border-ink'
                : 'border-border text-muted hover:border-ink hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="divide-y divide-border">
        {visible.map((post) => (
          <article key={post.id} className="py-8 group cursor-pointer">
            <div className="flex items-center gap-3 text-xs text-muted mb-3">
              <span className="font-mono">{post.category}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.read} read</span>
            </div>
            <h2 className="text-base md:text-lg font-medium text-ink group-hover:text-muted transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-block text-xs text-ink underline underline-offset-2">
              Read article →
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}

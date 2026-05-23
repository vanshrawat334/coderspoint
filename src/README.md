# CodersPoint 🚀

A minimal, distraction-free coding education platform built with React, Redux, and Tailwind CSS. 97% placement rate — students placed at Amazon, Deloitte, HCL, TCS, Infosys, and more.

**Live Demo:** [coderspoint.vercel.app](https://coderspoint.vercel.app)

---

## Features

- **5 Pages** — Home, Courses, Blog, About, Contact
- **AI Chatbot** — answers questions about courses, placements, fees, and certificates
- **Animated Stats** — count-up animation on scroll (97% placement, 12k+ students)
- **Company Marquee** — scrolling banner of hiring partners
- **Course Filtering & Search** — filter by category, search by name, enroll with toast feedback
- **Blog Filtering** — filter articles by category
- **Auto-rotating Testimonials** — student success stories
- **Responsive Design** — works on mobile, tablet, and desktop
- **Redux State Management** — courses, blog, and chatbot state via Redux Toolkit
- **Vercel Ready** — `vercel.json` included for proper SPA routing

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Multi-page routing |
| Redux Toolkit | Global state management |
| Tailwind CSS v3 | Styling |
| Vite | Build tool & dev server |
| Vercel | Deployment |

---

## Project Structure

```
coderspoint/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar with scroll shadow
│   │   ├── Footer.jsx       # Footer with links
│   │   └── Chatbot.jsx      # Floating AI chatbot
│   ├── pages/
│   │   ├── Home.jsx         # Hero, stats, marquee, testimonials
│   │   ├── Courses.jsx      # Filterable + searchable course grid
│   │   ├── Blog.jsx         # Filterable blog posts
│   │   ├── About.jsx        # Mission, values, team
│   │   └── Contact.jsx      # Contact form
│   ├── store/
│   │   ├── index.js         # Redux store
│   │   ├── coursesSlice.js  # Courses filter + enroll state
│   │   ├── blogSlice.js     # Blog filter state
│   │   └── chatSlice.js     # Chatbot open/messages state
│   ├── App.jsx              # Router + Provider wrapper
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + animations
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── vercel.json              # SPA routing for Vercel
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/coderspoint.git

# Navigate into the project
cd coderspoint

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — just hit **Deploy**
4. Your site is live at `your-project.vercel.app`

The `vercel.json` file handles SPA routing so all pages work correctly on refresh.

---

## Chatbot

The built-in chatbot (bottom-right `💬` button) can answer questions about:
- Courses and curriculum
- Placement rate and hiring companies
- Fees and free access
- Certificates
- Contact information

It uses Redux for state and a simple keyword-matching FAQ engine. Ready to be replaced with a real AI/backend API.

---

## Hiring Partners

Students from CodersPoint have been placed at:

Amazon · Deloitte · HCL · TCS · Infosys · Wipro · Accenture · Cognizant · IBM · Capgemini · Tech Mahindra · LTI Mindtree

---

## Roadmap

- [ ] Backend API with Node.js + Express
- [ ] User authentication (register/login)
- [ ] Course progress tracking
- [ ] Real AI chatbot integration
- [ ] Admin dashboard
- [ ] Payment gateway for premium courses

---

## License

Amity © 2025 CodersPoint
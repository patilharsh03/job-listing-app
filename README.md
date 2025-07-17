# Mployee - Job Listing App 💼

A full-stack job listing application built with:

- Frontend: React + Tailwind + Vite
- Backend: Node.js + Express
- Database: MongoDB (Atlas)
- Deployment: Vercel (frontend) + Railway (backend)

---

## 🔗 Live URLs

- **Frontend:** [https://job-listing-app-alpha-liart.vercel.app](https://job-listing-app-alpha-liart.vercel.app)
- **Backend (API):** [https://job-listing-app-production-bf21.up.railway.app/](https://job-listing-app-production-bf21.up.railway.app/)

---

## 🚀 Features

- Search by location (with debounce)
- Pagination support
- Filtered backend queries for performance
- Fully responsive and polished UI
- Click to view job details + "Apply Now" external link

---

## 🧑‍💻 Running Locally

### 1. Clone the Repo

```bash
git clone https://github.com/patilharsh03/job-listing-app.git
cd job-listing-app
```

### 2. Install & Run Backend

```bash
cd backend
npm install
```

Create a .env file in the backend/ folder and add the following:
```bash
MONGO_URI=your-mongodb-uri-here
PORT=5000
```

then run:
```bash
npm start
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a .env file inside the frontend folder with:
```bash
VITE_API_BASE_URL=http://localhost:5000
```

Then run the React app:
```bash
npm run dev
```

Now open: http://localhost:5173
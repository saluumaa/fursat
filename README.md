# CreativeHub - Freelance Marketplace

A modern, full-stack freelance marketplace built with Next.js, TypeScript, Prisma, and TailwindCSS. Connect talented designers, developers, and writers with clients looking for quality work.

## 🚀 Features

### For Clients
- **Post Jobs**: Create detailed job postings with budget and skill requirements
- **Manage Proposals**: Review and accept proposals from freelancers
- **Dashboard Analytics**: Track active jobs and spending

### For Freelancers
- **Browse Jobs**: Find work that matches your skills
- **Submit Proposals**: Send custom proposals with your pricing
- **Portfolio**: Showcase your best work
- **Dashboard**: Track proposals and earnings

### General
- **Authentication**: Secure login with Google OAuth and Email
- **Real-time Updates**: Stay informed with notifications
- **Dark/Light Mode**: Choose your preferred theme
- **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Shadcn/UI
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js v5
- **Form Validation**: Zod + React Hook Form
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd FreelanceMarketplace
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for local)
- Google OAuth credentials (optional)
- Resend API key for email auth (optional)

4. **Setup database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
FreelanceMarketplace/
├── app/
│   ├── (marketing)/        # Landing page
│   ├── dashboard/           # Dashboard layouts
│   │   ├── client/          # Client-specific pages
│   │   └── freelancer/      # Freelancer-specific pages
│   ├── jobs/                # Job browsing and details
│   └── api/                 # API routes
├── components/
│   ├── ui/                  # Shadcn UI components
│   └── shared/              # Custom shared components
├── lib/
│   ├── prisma.ts            # Prisma client
│   └── utils.ts             # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema
└── public/                  # Static assets
```

## 🗄️ Database Schema

Key models:
- **User**: Stores user information and role (CLIENT/FREELANCER)
- **Job**: Job postings with budget and requirements
- **Proposal**: Freelancer proposals for jobs
- **Message**: Direct messaging between users
- **Review**: Ratings and feedback
- **PortfolioItem**: Freelancer portfolio pieces

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Database Migration
```bash
npx prisma migrate deploy
```

## 🔐 Authentication Setup

### Google OAuth
1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Add credentials to `.env`

### Email Authentication
1. Sign up for [Resend](https://resend.com/)
2. Get your API key
3. Add to `.env` as `RESEND_API_KEY`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Generate Prisma Client
- `npx prisma db push` - Push schema changes to database

## 🎨 Customization

### Theme
Edit `app/globals.css` to customize colors and design tokens.

### Components
All UI components are in `components/ui/` and can be customized or replaced.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🆘 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and TypeScript

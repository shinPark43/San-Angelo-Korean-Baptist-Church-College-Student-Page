# KBC 청년부 (San Angelo Korean Baptist Church College Ministry)

A mobile-first Progressive Web App (PWA) for the San Angelo Korean Baptist Church college ministry. Members can view weekly duties, team rosters, schedules, and important announcements.

**Live Site:** https://shinpark43.github.io/San-Angelo-Korean-Baptist-Church-College-Student-Page/

## Features

- **Weekly Duties** - View current week's food prep, prayer leader, and dishwashing assignments
- **Member Search** - Search for any member to see all their assigned duties and dates
- **Team Rosters** - Browse cooking teams, dishwashing teams, Sunday side dish teams, and QT groups
- **Schedule** - Full schedule of upcoming Friday meetings
- **Photo Carousel** - Group photos with fullscreen view
- **Announcements** - Banner for important updates
- **PWA Support** - Install on homescreen for app-like experience

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shinPark43/San-Angelo-Korean-Baptist-Church-College-Student-Page.git
cd San-Angelo-Korean-Baptist-Church-College-Student-Page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 to view the app.

### Build

```bash
npm run build
```

Static files are exported to the `out` directory.

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Home page
│   ├── schedule/       # Schedule page
│   ├── teams/          # Teams page
│   ├── info/           # Meeting info page
│   └── layout.tsx      # Root layout
├── components/
│   ├── Header.tsx
│   ├── BottomNav.tsx
│   ├── MemberSearch.tsx
│   ├── PhotoCarousel.tsx
│   └── AnnouncementBanner.tsx
└── data/
    ├── schedule.ts     # Weekly schedule data
    ├── teams.ts        # Team rosters
    └── meetingInfo.ts  # Meeting details
```

## Updating Data

To update schedules and team assignments, edit the files in `src/data/`:

- `schedule.ts` - Weekly duty assignments
- `teams.ts` - Team member rosters
- `meetingInfo.ts` - Meeting time and location info

Changes will be deployed automatically when pushed to the main branch.

# Asset Bridge - Asset Management Platform

A high-end asset management platform built with Next.js 14, featuring real-time device synchronization, employee management, and powerful integrations.

## Features

- 🎨 **Modern UI**: Built with Tailwind CSS, shadcn/ui, and Framer Motion animations
- 🔐 **Authentication**: Secure NextAuth.js with role-based access control
- 📊 **Dashboard**: Real-time metrics, charts, and device overview
- 🔌 **Integrations**: RMM, MDM, and HR system connectors
- 👥 **Employee Management**: Track assignments and sync status
- 📱 **Device Management**: Comprehensive asset tracking and lifecycle management
- 🎭 **Responsive Design**: Works perfectly on desktop and mobile
- 🌙 **Theme Support**: Light/dark mode toggle

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI, Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with credential provider
- **Icons**: Tabler Icons, Heroicons
- **Charts**: Recharts

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.example` to `.env` and update the database URL:
   ```bash
   cp .env.example .env
   ```
   
   Update the `DATABASE_URL` in `.env` with your PostgreSQL connection string.

3. **Set up the database**:
   ```bash
   npm run db:push
   npm run db:seed
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Demo Accounts

- **Admin**: admin@assetbridge.com / admin123
- **User**: user@assetbridge.com / user123

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── devices/           # Devices management
│   ├── integrations/      # Integration management
│   ├── employees/         # Employee management
│   ├── users/             # User management (admin only)
│   ├── settings/          # Settings page
│   └── login/             # Login page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── dashboard/        # Dashboard-specific components
├── lib/                  # Utility functions
├── prisma/               # Database schema and migrations
└── types/                # TypeScript type definitions
```

## Key Features

### Dashboard
- Real-time device metrics with animated cards
- Sync activity charts showing trends over time
- Device overview table with inline actions
- Responsive design with smooth animations

### Device Management
- Advanced filtering by type, status, department, employee
- Bulk selection and actions
- Real-time sync status
- Device lifecycle tracking

### Integrations
- RMM (Remote Monitoring and Management)
- MDM (Mobile Device Management)
- HR System integration
- Connection status monitoring
- Sync history and logs

### Employee Management
- Employee directory with device assignments
- Department-based filtering
- Sync status tracking
- Device assignment management

### Authentication & Security
- Role-based access control (Admin/User)
- Secure password hashing
- Session management
- Protected routes

## Development

### Database Commands

- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Theme Colors
The app uses a blue accent palette. To customize colors, edit the CSS variables in `app/globals.css`.

### Adding New Device Types
1. Update the `AssetType` enum in `prisma/schema.prisma`
2. Run `npm run db:push`
3. Update the filter options in `components/devices/devices-filter.tsx`

### Integration APIs
Service stubs are located in `lib/services/` for:
- `rmmService.ts` - RMM integration
- `mdmService.ts` - MDM integration  
- `hrService.ts` - HR system integration

## Production Deployment

1. Set up a PostgreSQL database
2. Update environment variables for production
3. Build the application: `npm run build`
4. Deploy to your preferred platform (Vercel, Railway, etc.)

## License

MIT License - see LICENSE file for details.
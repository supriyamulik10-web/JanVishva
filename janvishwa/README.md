**Connecting Local Donors with Community NGOs in India**

A hyperlocal donation platform that bridges the gap between willing donors and small community NGOs through real-time, location-based matching with complete transparency.

## Overview

JanVishva enables individuals to donate items, skills, and volunteer time directly to local NGOs in their community. The platform facilitates meaningful connections and tracks the real-world impact of every contribution.

## Features

### For Donors (Individuals)
- Post donations of items, skills, or volunteer time
- Browse nearby NGO needs based on location
- Track personal impact and contribution history
- Direct messaging with NGOs for coordination
- Achievement badges and impact scoring
- Discover volunteer opportunities

### For NGOs
- Post organizational needs and requirements
- Browse and claim available donations
- Manage volunteer coordination
- Track received donations and support
- Build trust through verification system
- Showcase impact stories

### Core Functionality
- **Role-based Authentication**: Separate flows for Individual donors and NGO organizations
- **Location-based Matching**: Find opportunities within your area
- **Real-time Updates**: Live feed of donations and needs
- **In-app Messaging**: Direct communication between donors and NGOs
- **Trust & Verification**: NGO verification system with trust scores
- **Impact Tracking**: Monitor your contribution metrics

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: Neon (PostgreSQL)
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Clerk account ([clerk.com](https://clerk.com))
- Neon database ([neon.tech](https://neon.tech))

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/janvishva.git
cd janvishva
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database
DATABASE_URL=your_neon_database_url

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed the database with sample data
npx prisma db seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.


## Database Schema

Key tables:
- **User**: Core user information and authentication
- **IndividualProfile**: Extended profile for individual donors
- **NGOProfile**: Organization details and verification status
- **Donation**: Posted donations with status tracking
- **Need**: NGO requirements and requests
- **Message**: In-app communication
- **Review**: Rating and feedback system

## User Flows

### Individual User Journey
1. Sign up and select "Individual" user type
2. Complete onboarding (location, skills, interests)
3. Access dashboard with personalized feed
4. Post donations or respond to NGO needs
5. Track impact and earn achievements

### NGO User Journey
1. Sign up and select "NGO" user type
2. Complete multi-step onboarding with organization details
3. Submit verification documents
4. Post organizational needs
5. Browse and claim available donations
6. Coordinate with donors through messaging

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes to database
```

### Environment Setup

For development:
- Use `localhost:3000` for local testing
- Clerk provides test mode keys
- Neon offers free tier for development

For production:
- Set up production environment variables
- Configure Clerk production instance
- Use production Neon database
- Deploy to Vercel or similar platform

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

Ensure all environment variables are set in your hosting platform.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced location-based filtering with maps
- [ ] Payment gateway integration for monetary donations
- [ ] Multi-language support (Hindi, Marathi, etc.)
- [ ] Advanced analytics dashboard
- [ ] Email notification system
- [ ] Social media integration for impact sharing
- [ ] Corporate partnership program

## Known Issues

- Dashboard redirect timing issue (being fixed)
- Image upload size limits (max 5MB per image)
- Mobile menu navigation needs improvement

## Support

For issues and questions:
- Open an issue on GitHub
- Email: support@janvishva.org
- Documentation: [docs.janvishva.org](https://docs.janvishva.org)

## Acknowledgments

- Built with Next.js and the React ecosystem
- Authentication powered by Clerk
- Database hosting by Neon
- Icons from Lucide React
- Inspired by the need for hyperlocal community impact

## Contact

- Website: [janvishva.org](https://janvishva.org)
- Twitter: [@janvishva](https://twitter.com/janvishva)
- Email: hello@janvishva.org

---

**Made with ❤️ for Indian communities**

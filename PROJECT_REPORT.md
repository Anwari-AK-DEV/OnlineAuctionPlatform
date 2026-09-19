# BIDHUB
## A Full-Stack Online Auction Platform Prototype

### Project Report

**Submitted by:** [Your Full Name]  
**Roll Number:** [Your Roll Number]  
**Course:** Bachelor of Computer Applications (BCA)  
**Semester:** [Semester]  
**College/Institute:** [College Name]  
**University:** [University Name]  
**Academic Year:** 2025-2026  
**Project Guide:** [Guide Name]

---

## Certificate

This is to certify that the project titled **"BidHub: A Full-Stack Online Auction Platform Prototype"** has been developed and submitted by **[Your Full Name]**, Roll Number **[Your Roll Number]**, in partial fulfillment of the requirements for the Bachelor of Computer Applications degree during the academic year 2025-2026.

**Project Guide Signature:** ____________________  
**Head of Department Signature:** ____________________  
**Date:** ____________________

---

## Declaration

I hereby declare that the project titled **"BidHub: A Full-Stack Online Auction Platform Prototype"** is my original work. The project has been developed for academic purposes. All external libraries, tools, and resources used in the project have been acknowledged where appropriate.

**Student Signature:** ____________________  
**Name:** [Your Full Name]  
**Date:** ____________________

---

## Acknowledgement

I would like to express my sincere gratitude to my project guide, faculty members, and institute for their guidance and support during the development of this project. I also thank my friends and family for their encouragement and assistance. Finally, I acknowledge the open-source technologies and documentation that helped me build and test the BidHub application.

---

## Abstract

BidHub is a full-stack online auction platform prototype that allows users to browse auction listings, create accounts, authenticate securely, and participate in bidding. The system is designed to provide a clean and accessible digital auction experience for collectors and sellers.

The frontend is developed using React and Vite. The backend is developed using Node.js and Express. Authentication is implemented using bcrypt password hashing and JSON Web Tokens. Auction listings are retrieved through REST API endpoints, and authenticated users can place bids through a protected endpoint. For local development, the prototype stores users and auction data in a JSON file.

The project demonstrates the main concepts of a modern web application, including component-based frontend design, client-server communication, API routing, authentication, authorization middleware, input validation, persistent local data, responsive design, and error handling.

**Keywords:** Online Auction, React, Node.js, Express, REST API, JWT, Authentication, Bidding, Full-Stack Web Application

---

## Table of Contents

1. Introduction  
2. Problem Statement  
3. Objectives  
4. Scope of the Project  
5. Existing System  
6. Proposed System  
7. Technologies Used  
8. System Requirements  
9. System Architecture  
10. Modules  
11. Functional Requirements  
12. Non-Functional Requirements  
13. Database and Data Design  
14. API Design  
15. Security Features  
16. User Interface Description  
17. Testing  
18. Limitations  
19. Future Enhancements  
20. Conclusion  
21. References  
22. Appendix: Running Instructions

---

# 1. Introduction

Online auctions provide a convenient way for buyers and sellers to exchange valuable, rare, and interesting items. Traditional auctions are often limited by location, time, and the number of participants who can attend. An online auction platform removes these limitations by allowing users to participate through a web browser.

BidHub was created as a full-stack online auction platform prototype. The system presents auction listings in a responsive interface and provides backend services for authentication, user sessions, auction retrieval, and bidding. The visual design uses a dark editorial style to make the platform feel like a modern digital auction house.

The project focuses on the core workflow of an auction platform: a user creates an account, signs in, views active lots, and places a bid. The system also stores whether an account is intended for collecting or selling.

---

# 2. Problem Statement

Many small sellers and collectors do not have access to a simple, focused online auction system. Existing platforms may be complex, difficult to navigate, or designed for large commercial operations. Users need an accessible platform where they can:

- Browse available auction items
- View current bid values and remaining time
- Create and manage an account
- Authenticate securely
- Participate in bidding
- Access the system from desktop and mobile devices

The purpose of BidHub is to demonstrate a simple, organized, and secure foundation for these activities.

---

# 3. Objectives

The main objectives of the project are:

1. To design and develop a responsive online auction frontend.
2. To create a backend REST API for authentication and auction data.
3. To implement user registration and login functionality.
4. To protect selected API endpoints using JWT authentication.
5. To hash user passwords using bcrypt before storage.
6. To display auction listings with category, price, bid count, and time information.
7. To allow authenticated users to submit valid bids.
8. To provide separate account intent options for collectors and sellers.
9. To demonstrate client-server integration in a full-stack application.
10. To provide a foundation that can be extended with a production database and administration system.

---

# 4. Scope of the Project

## Included Scope

- Responsive React user interface
- Home page and featured auctions
- Auction listing page
- Category browsing page
- How-it-works page
- Login page
- Account registration page
- Collector and seller account role selection
- REST API backend
- JWT-based authentication
- bcrypt password hashing
- Auction listing retrieval
- Protected bid endpoint
- Local JSON data persistence
- API error handling and frontend fallback data

## Excluded Scope

- Real payment processing
- Email verification
- Password reset emails
- Image upload storage
- Real-time WebSocket bidding
- Production cloud deployment
- Advanced admin dashboard
- Automated auction closing scheduler
- Legal identity verification

These excluded features are described as future enhancements.

---

# 5. Existing System

In a traditional offline auction system, buyers and sellers must usually be present at a physical location. This creates several limitations:

- Participation is limited by geography.
- Auction information may not be available at all times.
- Records may require manual maintenance.
- Sellers have limited access to potential buyers.
- Buyers may not be able to compare multiple items conveniently.

Some existing online auction systems solve these problems but may be expensive, complicated, or difficult for small communities and academic demonstrations to reproduce.

---

# 6. Proposed System

BidHub proposes a browser-based auction platform with a React frontend and an Express backend. Users can browse available auction lots from the frontend. When users create an account or log in, the frontend sends data to the backend API. The backend validates the request, hashes passwords when required, creates a JWT token, and returns user information.

Authenticated users can submit bids. The backend checks the token, validates the bid amount, verifies that the auction exists, and ensures that the new bid is higher than the current bid. The updated auction information is then saved to the local data store.

The system is designed so the local JSON store can later be replaced by MongoDB, PostgreSQL, or another production database.

---

# 7. Technologies Used

## Frontend

- React 19
- React Router
- Vite
- JavaScript ES Modules
- CSS3
- Responsive CSS Grid and Flexbox

## Backend

- Node.js
- Express.js
- REST API architecture
- CORS middleware
- dotenv configuration
- bcryptjs for password hashing
- jsonwebtoken for authentication tokens
- Node.js file system APIs for local persistence

## Development Tools

- Visual Studio Code
- npm
- ESLint
- Git/version control
- Modern web browser

---

# 8. System Requirements

## Hardware Requirements

- Computer with at least 4 GB RAM
- Dual-core processor or better
- 500 MB free storage for the project and dependencies
- Internet connection for the first dependency installation

## Software Requirements

- Windows, macOS, or Linux
- Node.js 18 or later
- npm
- Visual Studio Code or another code editor
- Chrome, Edge, Firefox, or another modern browser

---

# 9. System Architecture

BidHub follows a client-server architecture.

```text
+-----------------------+
|       Web Browser     |
|   React + Vite UI     |
+-----------+-----------+
            |
            | HTTP REST requests
            v
+-----------------------+
|   Express API Server  |
| Authentication        |
| Auction routes        |
| Bid validation        |
+-----------+-----------+
            |
            | Read and write
            v
+-----------------------+
|   Local JSON Store    |
| Users and auctions    |
+-----------------------+
```

## Request Flow

1. The user opens the React frontend.
2. The frontend requests auction data from the Express API.
3. The backend reads auction data from the local store.
4. The backend returns JSON data to the frontend.
5. For authentication, the frontend sends form data to the API.
6. The backend validates the data and returns a JWT token.
7. The frontend stores the session token locally.
8. Protected requests include the token in the Authorization header.

---

# 10. Modules

## 10.1 Home Module

The home module introduces the BidHub platform and displays featured auction lots. It includes search and category filtering controls. Users can navigate from the home page to auctions, categories, account creation, and the how-it-works page.

## 10.2 Auction Module

The auction module displays available items with their name, category, current bid, number of bids, remaining time, and image. Auction data is loaded from the backend API with seeded frontend data available as a fallback for local resilience.

## 10.3 Category Module

The category module groups auction items into categories such as Electronics, Vehicles, Fashion, Jewelry, Art and Collectibles, Furniture, Books, and Sports.

## 10.4 Authentication Module

The authentication module provides registration and login forms. Registration accepts a name, email, password, and account intent. Login validates the email and password through the backend. Successful authentication returns a JWT token.

## 10.5 Bidding Module

The bidding endpoint is protected by JWT authentication. A valid bid must be a positive number and greater than the current bid. The auction's current bid and bid count are updated after a successful request.

## 10.6 How-it-Works Module

The how-it-works page explains the buyer and seller workflows. Users can switch between buyer and seller guidance and view trust, protection, and FAQ information.

---

# 11. Functional Requirements

| ID | Requirement | Description |
|---|---|---|
| FR-01 | View home page | The system shall display the BidHub landing experience. |
| FR-02 | View auctions | The system shall display available auction lots. |
| FR-03 | Search auctions | The user shall be able to search auction names. |
| FR-04 | Filter auctions | The user shall be able to filter by category. |
| FR-05 | Register | The system shall create a new user account. |
| FR-06 | Hash password | The system shall store a bcrypt password hash instead of plain text. |
| FR-07 | Login | The system shall authenticate registered users. |
| FR-08 | Issue token | The system shall return a JWT after successful authentication. |
| FR-09 | Protect endpoints | The system shall reject protected requests without a valid token. |
| FR-10 | Place bid | An authenticated user shall be able to submit a higher bid. |
| FR-11 | Validate bid | The system shall reject invalid or lower bids. |
| FR-12 | Select account intent | The user shall be able to select collector or seller intent. |
| FR-13 | Responsive interface | The system shall work on desktop and mobile screen sizes. |

---

# 12. Non-Functional Requirements

## Usability

The interface should be easy to understand, visually consistent, and accessible on common screen sizes.

## Performance

The frontend should load quickly during local development, and API requests should return JSON responses without unnecessary processing.

## Security

Passwords must not be stored as plain text. Protected endpoints must require a valid JWT token. Input values must be validated by the server.

## Maintainability

The frontend and backend are separated into different folders. Shared frontend data and API utilities are kept in separate modules.

## Reliability

The frontend uses fallback auction data if the API is temporarily unavailable. The backend creates its local data store automatically when it does not exist.

## Scalability

The prototype is organized so the JSON persistence layer can later be replaced with a database and the API can be extended with administrative features.

---

# 13. Database and Data Design

The current prototype uses a JSON file named `backend/data/store.json` for local persistence. It contains two main collections: users and auctions.

## User Object

```json
{
  "id": "unique-user-id",
  "name": "Demo Collector",
  "email": "demo@example.com",
  "role": "collector",
  "passwordHash": "bcrypt-hash",
  "createdAt": "2026-09-18T00:00:00.000Z"
}
```

## Auction Object

```json
{
  "id": 1,
  "name": "Sony WH-1000XM5 Wireless Headphones",
  "category": "Electronics",
  "currentBid": 289,
  "bids": 34,
  "timeLeft": "2h 14m",
  "image": "image-url"
}
```

## Proposed Future Relational Design

If the project is upgraded to a relational database, the following tables can be created:

- `users`: user identity, email, password hash, role, and timestamps
- `auctions`: item details, category, starting price, current price, seller ID, and status
- `bids`: bidder ID, auction ID, bid amount, and bid timestamp
- `categories`: category name and description

Relationships:

- One user can create many auctions.
- One user can place many bids.
- One auction can have many bids.
- One auction belongs to one category.

---

# 14. API Design

Base URL:

```text
http://localhost:4000/api
```

| Method | Endpoint | Protected | Purpose |
|---|---|---:|---|
| GET | `/health` | No | Check API status |
| GET | `/auctions` | No | Retrieve auction listings |
| POST | `/auth/register` | No | Create a user account |
| POST | `/auth/login` | No | Authenticate a user |
| GET | `/auth/me` | Yes | Retrieve the authenticated user |
| POST | `/auctions/:id/bids` | Yes | Submit a bid |

## Example Registration Request

```json
{
  "firstName": "Demo",
  "lastName": "Collector",
  "email": "demo@example.com",
  "password": "secret123",
  "role": "collector"
}
```

## Example Login Request

```json
{
  "email": "demo@example.com",
  "password": "secret123"
}
```

## Example Bid Request

```json
{
  "amount": 350
}
```

The token is sent using:

```text
Authorization: Bearer <jwt-token>
```

---

# 15. Security Features

1. Passwords are hashed with bcrypt before being stored.
2. Password hashes are never returned to the frontend.
3. JWT tokens expire after seven days.
4. Protected endpoints use authentication middleware.
5. Invalid or missing tokens are rejected.
6. Duplicate email registration is rejected.
7. Bid amounts are validated on the server.
8. Lower bids are rejected.
9. CORS limits local frontend origins during development.
10. Environment configuration supports a replaceable JWT secret.

For production, the default development JWT secret must be replaced with a long random value stored in an environment variable.

---

# 16. User Interface Description

## Home Page

The home page presents the BidHub brand, a primary call to action, featured auction cards, search, category filtering, platform statistics, and an explanation of the auction process.

**Insert Screenshot 1: Home Page**  
`[Paste your home page screenshot here]`

## Auctions Page

The auctions page displays the full collection of live auction cards. Each card includes the item image, category badge, time-left badge, item name, current bid, and bid count.

**Insert Screenshot 2: Auctions Page**  
`[Paste your auctions page screenshot here]`

## Categories Page

The categories page lets users browse the available auction groups and navigate to the auction collection.

**Insert Screenshot 3: Categories Page**  
`[Paste your categories page screenshot here]`

## How It Works Page

The how-it-works page explains the buyer and seller journeys and contains a buyer/seller tab switcher, trust information, and frequently asked questions.

**Insert Screenshot 4: How It Works Page**  
`[Paste your how-it-works screenshot here]`

## Login Page

The login page accepts an email address and password. It includes password visibility control, remember-me selection, and error feedback from the backend.

**Insert Screenshot 5: Login Page**  
`[Paste your login screenshot here]`

## Account Page

The account page collects first name, last name, email, password, account intent, and terms consent. It sends valid registration data to the backend.

**Insert Screenshot 6: Registration Page**  
`[Paste your registration screenshot here]`

---

# 17. Testing

## Test Environment

- Operating System: Windows
- Runtime: Node.js 24
- Frontend: Vite development server
- Backend: Express development server
- Browser: [Chrome/Edge/Firefox version]

## Functional Test Cases

| Test ID | Test Case | Expected Result | Status |
|---|---|---|---|
| TC-01 | Open home page | Home page loads successfully | Pass |
| TC-02 | Open auctions page | Auction cards are displayed | Pass |
| TC-03 | Search for an auction | Matching listings are filtered | Pass |
| TC-04 | Select category filter | Matching category listings are displayed | Pass |
| TC-05 | Register with valid details | Account is created and token is returned | Pass |
| TC-06 | Register with duplicate email | Server returns a duplicate account error | Pass |
| TC-07 | Login with valid credentials | Token is returned and user is authenticated | Pass |
| TC-08 | Login with invalid credentials | Server returns an authentication error | Pass |
| TC-09 | Request protected endpoint without token | Server returns HTTP 401 | Pass |
| TC-10 | Request current user with valid token | User information is returned | Pass |
| TC-11 | Submit a higher bid | Current bid and bid count update | Pass |
| TC-12 | Submit a lower bid | Server rejects the bid | Pass |
| TC-13 | Open mobile layout | Interface adapts without horizontal overflow | Pass |
| TC-14 | Run ESLint | No lint errors are reported | Pass |
| TC-15 | Run production build | Vite build completes successfully | Pass |

## API Verification Results

- Health endpoint returned HTTP 200.
- Registration endpoint returned HTTP 201.
- Login endpoint returned HTTP 200.
- Auction listing endpoint returned HTTP 200.
- Invalid protected requests were rejected.

---

# 18. Limitations

1. The prototype stores data in a local JSON file instead of a production database.
2. Auction time values are currently display values and are not controlled by a live scheduler.
3. Bidding is not synchronized in real time between multiple browsers.
4. Payment processing is not implemented.
5. Image URLs use external image resources instead of an upload service.
6. Seller role selection is stored on the user account, but a full seller dashboard is not included.
7. Password recovery and email verification are not implemented.
8. The prototype does not include an admin dashboard.
9. A production deployment configuration has not been included.

---

# 19. Future Enhancements

1. Replace JSON storage with MongoDB or PostgreSQL.
2. Add an administrator dashboard.
3. Allow sellers to create, edit, and close auctions.
4. Add automatic auction expiry and winner selection.
5. Add bid history for every auction.
6. Add Socket.IO for real-time bidding updates.
7. Add payment processing through a service such as Stripe.
8. Add email verification and password reset.
9. Add image upload and cloud media storage.
10. Add notifications for outbid users and auction winners.
11. Add advanced search, sorting, and price filters.
12. Add deployment using a cloud hosting provider.
13. Add automated unit, integration, and end-to-end tests.
14. Add stronger production security controls and rate limiting.

---

# 20. Conclusion

BidHub successfully demonstrates a full-stack online auction platform prototype. The application combines a responsive React frontend with an Express backend and provides a practical example of client-server communication, authentication, protected API routes, auction data retrieval, and bid validation.

The project meets its primary objectives by allowing users to view auction items, create accounts, log in, select a collector or seller role, and submit authenticated bids. It also demonstrates good software development practices through separated frontend and backend folders, reusable components, API utilities, input validation, password hashing, JWT authentication, responsive styling, and validation through linting and production builds.

Although the current project is a prototype and uses local JSON persistence, its modular design provides a suitable foundation for future upgrades such as a real database, administration, real-time bidding, payment processing, and cloud deployment.

---

# 21. References

1. React Documentation: https://react.dev/
2. Vite Documentation: https://vite.dev/
3. Node.js Documentation: https://nodejs.org/docs/
4. Express.js Documentation: https://expressjs.com/
5. MDN Web Docs: https://developer.mozilla.org/
6. JSON Web Token Documentation: https://jwt.io/introduction
7. bcryptjs npm Documentation: https://www.npmjs.com/package/bcryptjs
8. React Router Documentation: https://reactrouter.com/

---

# 22. Appendix: Running Instructions

## Project Structure

```text
NAHIDProject/
|-- package.json
|-- README.md
|-- backend/
|   |-- package.json
|   |-- .env.example
|   |-- README.md
|   |-- src/
|       |-- server.js
|-- frontend/
    |-- package.json
    |-- src/
        |-- App.jsx
        |-- Home.jsx
        |-- Auctions.jsx
        |-- Categories.jsx
        |-- About.jsx
        |-- Login.jsx
        |-- Register.jsx
        |-- api.js
        |-- auctionData.js
```

## Installation

Open a terminal in the project root and run:

```bash
npm install
```

## Start Frontend and Backend Together

```bash
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

The backend runs at:

```text
http://localhost:4000
```

## Validation Commands

```bash
npm run lint
npm run build
```

## Presentation Demonstration Flow

1. Open the home page.
2. Show the dark theme and responsive auction layout.
3. Search for an auction item.
4. Filter the auction list by category.
5. Open the account page and register a test user.
6. Show that registration returns the user to the auction page.
7. Sign out or open the login page.
8. Log in with the test account.
9. Explain that authenticated requests use a JWT token.
10. Demonstrate the auction API and protected bid endpoint.
11. Explain the limitations and future enhancements.

## Screenshot Checklist

Before submitting the report, add screenshots of:

- Home page
- Auctions page
- Categories page
- How-it-works page
- Login page
- Account registration page
- Backend terminal showing the API running
- Successful registration or login response, if allowed by your institute

Replace every bracketed placeholder with your personal and institutional information.

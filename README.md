# Skcript Clone

Skcript Clone is a Next.js-based web application that integrates various features and utilizes technologies like React, React Query, and Tailwind CSS. This README will guide you through the steps to set up, install, and run the project.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (Node package manager) or **yarn**

If you don't have Node.js installed, you can download it from the [official website](https://nodejs.org/).

## Installation

Follow these steps to get the development environment set up:

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/thecyberjerry/skcript-clone
   ```
2. Install dependencies Navigate into the project directory and install the required dependencies using either npm or yarn:

   ```
   cd featureos
   npm install
   ```

   ### or

   ```
   yarn install
   ```

3. Run the development server To start the Next.js development server, run the following command:
   ```
   npm run dev
   ```

### or

4. If you are using Yarn
   ```
   yarn dev
   ```
5. Open the project in your browser The project will be available at http://localhost:3000 by default.

## Technologies Used

* Next.js: A React framework for server-side rendering and static site generation.

* React: JavaScript library for building user interfaces.

* TailwindCSS: A utility-first CSS framework.

* React Query: A library for data fetching and state management.

* React DnD: A drag-and-drop library for React.

* AuthJs/NextAuthJs: A come in handy NextJs authentication library.

## Note 
You will need a Google and Github; Client Id and Client Secret to run the app and add the client secret and client id code in provided format or you can edit the env file access variable names in the /src/auth/js,

### Recommended Env Variables structure
```
AUTH_SECRET="xxxxx" 
AUTH_GITHUB_ID="xxxx"
AUTH_GITHUB_SECRET="xxxx"
AUTH_GOOGLE_ID="xxxx.googleusercontent.com"
AUTH_GOOGLE_SECRET="xxxx"
NEXTAUTH_URL=http://localhost:3000
AUTH_TRUST_HOST=https://localhost:3000
```

## If stuck on installation of AuthJs:
Run these commands:
```
npm install next-auth@beta
```
```
npx auth secret
```

---

> **Project by Himanshu(thecyberjerry)**
>
> 📧 Contact: himanshusharma2719@gmail.com
>
> 🔗 GitHub: [github.com/thecyberjerry]
>
> 📝 Feel free to reach out for any questions!

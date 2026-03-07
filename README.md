# Satyam Kumar - Developer Portfolio

A professional, modern, and fully responsive developer portfolio built with React. It showcases my technical skills, featured projects, certifications, and professional training.

## Features

- **Modern UI/UX**: Clean, responsive, and professional design that works flawlessly on mobile, tablet, and desktop devices.
- **Dark/Light Theme**: Seamless theme switching using React Context for a personalized user experience.
- **Scroll Reveal Animations**: Custom IntersectionObserver hooks trigger smooth fade-in and slide-up animations as elements enter the viewport.
- **Active Navigation Tracking**: The navbar dynamically highlights the current section as you scroll through the page.
- **Interactive Certifications Carousel**: A custom-built, auto-playing carousel with thumbnail navigation and a full-screen lightbox view.
- **Functional Contact Form**: Integrated with Formspree for real-time email delivery, complete with custom client-side validation and success/error UI states.
- **Accessible & SEO Optimized**: Includes semantic HTML, proper ARIA attributes, keyboard navigation support (skip-to-content), and Open Graph meta tags for rich social sharing.
- **Optimized Performance**: Efficient rendering using `useMemo` for complex animations (like background particles).

## Technologies Used

- **Core**: React.js, Vite
- **Styling**: Vanilla CSS3 (Custom properties, Flexbox/Grid)
- **Icons**: `react-icons` (Feather set)
- **API Integration**: Formspree (Contact form submissions)

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/satyamkr7654/My_portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd "My portfolio" 
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

## Folder Structure

- `/public`: Contains static assets like images, CV, and certificates.
- `/src/components`: Reusable React UI components (Hero, About, Projects, Contact, etc.).
- `/src/context`: React Context providers (like `ThemeContext.jsx`).
- `/src/hooks`: Custom React hooks (`useScrollReveal.js`).
- `/index.html`: Main HTML template with SEO meta tags.

## Customization

If you are using this template:
- **Contact Form**: Update the fetch URL in `src/components/Contact.jsx` with your own [Formspree](https://formspree.io/) endpoint.
- **Personal Data**: Modify the data arrays and text inside the individual components (`Skills.jsx`, `Projects.jsx`, `Certifications.jsx`, etc.).
- **Resume**: Replace `/public/Satyam_Kumar_CV.pdf` with your own resume file.

## Contact

Satyam Kumar - [satyamkumartech18@gmail.com](mailto:satyamkumartech18@gmail.com)
LinkedIn: [linkedin.com/in/satyamkr7654](https://www.linkedin.com/in/satyamkr7654/)
GitHub: [github.com/satyamkr7654](https://github.com/satyamkr7654)

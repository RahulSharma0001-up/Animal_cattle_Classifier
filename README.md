# Animal Classifier

A responsive React web application for cattle and buffalo image classification using TensorFlow.js and MobileNet.

## Overview

The Animal Classifier project is a web-based solution for livestock image recognition. It enables users to upload photos of cattle or buffalo and receive instant classification results directly in the browser.

This project demonstrates:

- Client-side machine learning with TensorFlow.js
- Fast image classification using MobileNet
- Responsive UI built with React and Vite
- Multi-page navigation with React Router
- Smooth user experience with Framer Motion animations

## Features

- **Image upload and classification** for cattle vs buffalo detection
- **Live model inference** without server-side processing
- **Gallery page** showing animal profiles and sample images
- **Responsive layout** for desktop and mobile
- **Clean product UI** with animated transitions

## Technologies Used

- React 18
- Vite
- TensorFlow.js
- @tensorflow-models/mobilenet
- React Router DOM
- Framer Motion

## Project Structure

```
ca2new/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Classify.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RahulSharma0001-up/Animal_cattle_Classifier.git
cd Animal_cattle_Classifier
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Usage

- Open the **Home** page to learn about the project.
- Go to **Classify** to upload a cattle or buffalo image.
- Review the classification result and confidence score.
- Use the **Gallery** page to browse curated animal profiles.
- Visit **About** for platform details and **Contact** for information.

## Build for Production

```bash
npm run build
```

## Notes

- The model runs entirely in the browser, so no backend server is required.
- Use a modern browser with WebGL support for best results.
- Image quality affects classification accuracy.

## License

This project is for educational use.


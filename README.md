# 👨‍💻 Irfan Sudarani - Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/irfansudarani/deploy-status)](https://irfansudarani.netlify.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Netlify-00C8C8?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

A premium, highly responsive personal portfolio website developed using modern frontend technologies. Featuring a clean, modern user interface, dynamic scroll animations, tabbed sections, a custom cursor, and mobile-first responsive design.

🔗 **Live Link:** [https://irfansudarani.netlify.app/](https://irfansudarani.netlify.app/)

---

## 📌 Table of Contents
* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [📁 Folder Structure](#-folder-structure)
* [🚀 Local Development](#-local-development)
* [🌐 Deployment](#-deployment)
* [👤 Author](#-author)

---

## ✨ Features

- **📱 Fully Responsive Design**: Built using the Mobile-First methodology, ensuring absolute compatibility across all devices (Mobile, Tablet, and Desktop).
- **🎨 Modern Theme**: Elegant dark user interface with sky-blue/indigo accent colors.
- **✨ Custom Interactive Cursor**: A trace-along custom cursor trail that expands and highlights upon hovering interactive elements.
- **🎓 Vertical Journey Timeline**: A clean, responsive vertical experience and education timeline tree.
- **🎠 Interactive Swiper Slider**: Smooth, touch-enabled project slider powered by SwiperJS.
- **📬 Copy-to-Clipboard Email**: Easily copy email address with one click.
- **✉️ Direct Chat Links**: One-click links for direct messaging on WhatsApp or Telegram.

---

## 🛠️ Tech Stack

| Technology / Library | Purpose |
| :--- | :--- |
| **HTML5 & CSS3** | Semantic structure and responsive styling |
| **JavaScript (ES6)** | Custom logic and interactive features |
| **[Anime.js](https://animejs.com/)** | High-performance header and text split animations |
| **[SwiperJS](https://swiperjs.com/)** | Interactive projects touch carousel |
| **[ScrollReveal](https://scrollrevealjs.org/)** | On-scroll fade-in and slide animations |
| **[Remix Icons](https://remixicon.com/)** | Lightweight vector UI icons |
| **[Devicon](https://devicon.dev/)** | Skill badge vector icons |

---

## 📁 Folder Structure

```text
Portfolio/
├── assets/
│   ├── css/
│   │   ├── styles.css           # Core styling and variables
│   │   └── swiper-bundle.min.css
│   ├── img/                    # Image assets (avatar, project previews)
│   ├── js/
│   │   ├── main.js             # Navigation, cursor, and animation script
│   │   └── swiper-bundle.min.js
│   └── pdf/
│       └── Irfan_SDE_Intern_CV.pdf
├── index.html                  # Core markup
├── .gitignore
├── netlify.toml                # Netlify deployment configuration
└── README.md
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Irfan-RS/Personal-Portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Personal-Portfolio
   ```

3. **Serve local files:**
   You can open `index.html` directly in your browser, or start a local static server:
   ```bash
   # Using Node.js
   npx http-server -p 3000
   
   # Using Python
   python -m http.server 3000
   ```

---

## 🌐 Deployment

This project is configured for one-click deployment on **Netlify**:

1. Log in to [Netlify](https://app.netlify.com/).
2. Select **Add new site** > **Import from GitHub**.
3. Select the `Personal-Portfolio` repository.
4. Netlify will read the [netlify.toml](netlify.toml) file and automatically set the build settings (Publish directory: `.`, Build command: *blank*).
5. Click **Deploy**.

---

## 👤 Author

Developed and maintained by **Irfan Sudarani**.

- **GitHub:** [@Irfan-RS](https://github.com/Irfan-RS)
- **LinkedIn:** [Irfan Sudarani](https://www.linkedin.com/in/irfanrs)
- **Email:** [irfanrs024@gmail.com](mailto:irfanrs024@gmail.com)

# 🏠 DHANALAKSHMI K — Technical Portfolio

> **Cybersecurity | Quantum Systems | Machine Learning | AI-Driven Solutions**

A modern, config-driven personal portfolio built with **Next.js 16 + Tailwind CSS 4 + Framer Motion + WebGL2 Liquid Glass Renderer**, deployed as pure static HTML/CSS/JS on GitHub Pages.

**🌐 Live Portfolio:** [Visit Portfolio](https://portfolio-2al.pages.dev)

---

## 👤 About Me

I'm a **Computer Science & Cybersecurity** student at **Sri Sai Ram Institute of Technology** (Chennai, India), specializing in:

- **Cybersecurity & Pentesting** — OSINT, threat intelligence, real-time phishing detection
- **Quantum Systems** — Quantum computing architectures and applications
- **Machine Learning & AI** — CNNs, GPU-accelerated inference, AI-driven analytics
- **Cloud Computing** — Google Cloud, Vertex AI, containerized deployments

---

## 🚀 Featured Projects

### 1. **MicroZard** — Lizard-Inspired Robot for Hydro-Agro Clearing
A biomimetic robot leveraging **Convolutional Neural Networks (CNNs)** for autonomous weed detection in agricultural environments. Secured **3rd place at Infosys Techzooka**.

**Tech Stack:** Python, TensorFlow, Robotics, Computer Vision  
**GitHub:** [MicroZard-A-lizard-inspired-Robot-for-Hydroagroclearing](https://github.com/Dhana-27/MicroZard-A-lizard-inspired-Robot-for-Hydroagroclearing)

---

### 2. **NightHawk** — Dark Web Threat Intelligence Platform
A comprehensive OSINT platform for dark web monitoring and threat aggregation across TOR and I2P networks. Real-time data collection and analysis for security research.

**Tech Stack:** Python, Web Scraping, OSINT, Data Aggregation  
**GitHub:** [NightHawk](https://github.com/Dhana-27/NightHawk)

---

### 3. **EduPulse AI** — Enterprise Faculty Evaluation Platform
An AI-powered evaluation system for educational institutions featuring sentiment analysis, performance metrics, and data-driven faculty insights.

**Tech Stack:** Python, Machine Learning, Sentiment Analysis, FastAPI  
**GitHub:** [EduPulse-AI](https://github.com/Dhana-27/EduPulse-AI)

---

### 4. **PhishShield** — Real-Time AI Phishing Detection System
A GPU-accelerated threat detection system using advanced AI models for instant phishing email and URL classification.

**Tech Stack:** Python, Deep Learning, GPU Acceleration, FastAPI  
**GitHub:** [PhishShield](https://github.com/Dhana-27)

---

### 5. **Agentic Identity Verification** — Zero-Trust Continuous Authentication
A continuous identity verification system for zero-trust security architectures using FastAPI and GPT-4o-mini for intelligent anomaly detection.

**Tech Stack:** FastAPI, LLMs (GPT-4o-mini), Zero-Trust Security  
**GitHub:** [Agentic Identity Verification](https://github.com/Dhana-27)

---

## 🛠️ Technical Stack

### **Core Specializations**
| Category | Technologies |
|----------|---------------|
| **Cybersecurity** | Metasploit, Hydra, Shodan, TryHackMe, OSINT, Pentesting |
| **Cloud & DevOps** | Google Cloud, Vertex AI, Docker, Linux, CI/CD |
| **Machine Learning** | Python, TensorFlow, PyTorch, CNN, Computer Vision |
| **Development** | Python, Java, C/C++, SQL, FastAPI |
| **Tools & Platforms** | VS Code, FlutterFlow, Git, GitHub |

### **Languages**
- **Primary:** Python
- **Secondary:** Java, C/C++, SQL
- **Frontend:** TypeScript, React, Tailwind CSS

---

## 🎯 Key Interests

- 🔐 Cybersecurity & Threat Intelligence
- ⚛️ Quantum Computing Systems
- 🤖 AI & Machine Learning
- 🕵️ OSINT & Digital Forensics
- ☁️ Cloud Infrastructure & Containerization
- 💻 Competitive Programming

---

## 🎓 Education

**Sri Sai Ram Institute of Technology (SAIRAM)**  
B.E. Computer Science & Cybersecurity  
Chennai, India

---

## 🔗 Connect With Me

- **GitHub:** [github.com/Dhana-27](https://github.com/Dhana-27)
- **LinkedIn:** [linkedin.com/in/dhanalakshmi-k-tech](https://linkedin.com/in/dhanalakshmi-k-tech)
- **Email:** dhanalakshmi.k.tech@gmail.com

---

## 💻 Portfolio Tech Stack

This portfolio website is built with cutting-edge modern technologies:

### **Frontend Architecture**
- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS 4 + Custom CSS
- **Animation:** Framer Motion 12.x (Spring Physics)
- **Graphics:** WebGL2 Liquid Glass Renderer
- **Icons:** lucide-react + Custom SVGs
- **Language:** TypeScript (Strict Mode)

### **Performance & Optimization**
- **Quality Leveling** — Automatic quality adjustment based on device capabilities
- **Geometric Caching** — Efficient rendering with ResizeObserver
- **Mobile Viewport Sync** — Dynamic viewport tracking for smooth scrolling
- **Shared Canvas** — Single WebGL2 context for all glass cards
- **Resource Optimization** — WEBP runtime assets with lazy loading

### **Deployment**
- **Package Manager:** pnpm 10.x
- **Deployment:** GitHub Pages (Static Export)
- **CI/CD:** GitHub Actions (Auto-build & Deploy)
- **Browser Support:** Chrome 90+, Safari 15+, Firefox 90+

---

## ✨ Portfolio Features

### **Modern UI & Performance**
- **Shared Liquid Glass Shell** — Unified WebGL2 renderer with optical refraction, Fresnel effects, and glare
- **Responsive Bento Grid** — 4-column desktop layout, 1-column mobile (CSS Grid)
- **Spring Physics Animations** — Framer Motion with realistic spring curves
- **Dark Mode Support** — Automatic `prefers-color-scheme` switching
- **Performance Optimized** — Quality-based rendering, geometric caching, WEBP resources

### **Portfolio Features**
- **GitHub Contribution Heatmap** — Real-time stats without authentication tokens
- **Multi-Avatar Carousel** — 3D rotating avatar switcher
- **Project Cards** — Auto-fetched GitHub stars & fork counts
- **Social Links Grid** — Customizable platform links (GitHub, LinkedIn, Email, etc.)
- **Skills & Interests Tags** — Tech stack visualization
- **Interactive Map** — Mapbox integration showing location markers
- **Live Weather Card** — Real-time weather display (open-meteo API)

### **Technical Excellence**
- **Config-Driven Architecture** — Single `src/config/site.ts` configuration file
- **Static Site Export** — Pure HTML/CSS/JS deployment (GitHub Pages compatible)
- **SEO Optimized** — Open Graph, Twitter Card, comprehensive meta tags
- **TypeScript** — Strict type safety across the codebase
- **Accessibility** — WCAG compliant, keyboard navigation support

---

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages & layouts
├── components/             # Reusable React components (18+ feature cards)
│   ├── glass-card.tsx           # Core frosted glass component
│   ├── bento-grid.tsx           # Responsive grid layout
│   ├── profile-card.tsx         # Avatar & bio section
│   ├── projects-card.tsx        # Project showcase
│   ├── github-heatmap-card.tsx  # Contribution heatmap
│   └── ... (more specialized components)
├── config/
│   └── site.ts             # ⭐ Single source of truth for all content
├── lib/
│   ├── liquid-glass.ts          # Glass shader parameters
│   ├── gl-utils.ts              # WebGL utilities
│   ├── motion.ts                # Animation presets
│   └── utils.ts                 # Helper functions
└── shaders/                # GLSL shader files for Liquid Glass
```

---

## 🚀 Quick Start

### Installation
```bash
# Clone the repository
git clone https://github.com/Dhana-27/Bento-Homepage.git
cd Bento-Homepage

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Configuration
Edit **`src/config/site.ts`** to customize:
- Profile name, title, bio, avatar
- Interests & tech stack
- Social links
- Projects showcase
- Theme colors
- Map & weather location

No component code changes needed—everything is configuration-driven!

### Build & Deploy
```bash
# Build for static export
pnpm build

# Deploy to GitHub Pages (auto via GitHub Actions)
git push origin main
```

---

## 📊 Browser Support
- Chrome 90+
- Safari 15+
- Firefox 90+
- Edge 90+

---

## 📝 License
This portfolio is open-source and available for educational and personal use.

---

**Built with ❤️ using modern web technologies**

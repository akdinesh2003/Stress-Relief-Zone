# 😄 Stress Relief Jokes - Relax & Laugh

<div align="center">

![Stress Relief](https://img.shields.io/badge/Stress-Relief-brightgreen?style=for-the-badge)
![Jokes](https://img.shields.io/badge/Jokes-50+-blue?style=for-the-badge)
![Domains](https://img.shields.io/badge/Domains-5-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A fun, interactive web project designed to help stressed visitors relax with domain-specific jokes!**

## 🎯 About The Project

Stress Relief Jokes is an interactive web application that helps people relax and unwind through humor. Whether you're a developer debugging code at 3 AM, a tech enthusiast, or just someone who needs a good laugh, this project has got you covered with 50+ carefully curated jokes across 5 different domains!

### Why This Project?

- 🧘 **Mental Health**: Laughter is proven to reduce stress and improve mood
- 💼 **Work-Life Balance**: Perfect for quick breaks during intense work sessions
- 🎨 **Beautiful UI**: Engaging design with smooth animations
- 📱 **Accessible**: Works on any device, anywhere, anytime

---

## ✨ Features

- 🎭 **5 Joke Domains**: Technology, Coding, Office Life, Internet, and AI/ML
- 🎨 **Interactive UI**: Beautiful gradient design with smooth animations
- 📊 **Mood Tracker**: Watch your mood improve as you read more jokes
- 🔢 **Joke Counter**: Track how many laughs you've had today
- 🔄 **Smart Rotation**: Never see the same joke twice until you've seen them all
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight**: No heavy frameworks, pure vanilla JavaScript
- 🌐 **Offline Support**: Works without internet connection

---

## 🛠️ Tech Stack

- **HTML5** - Structure and semantics
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Interactive functionality
- **No Dependencies** - Pure vanilla code, no frameworks required

---

## 🚀 Getting Started

Follow these simple steps to get the project up and running on your local machine.

### Prerequisites

You only need a modern web browser installed on your system:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Or any other modern browser

**No additional software, packages, or dependencies required!**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akdinesh2003/stress-relief-jokes.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd stress-relief-jokes
   ```

That's it! No npm install, no build process needed.

### Running the Project

#### Method 1: Direct Browser Open (Easiest)
1. Navigate to the project folder
2. Double-click on `index.html`
3. The project will open in your default browser

#### Method 2: Using Command Line

**Windows:**
```cmd
start index.html
```

**macOS:**
```bash
open index.html
```

**Linux:**
```bash
xdg-open index.html
```

#### Method 3: Using Live Server (For Development)

If you have VS Code with Live Server extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The project will open at `http://localhost:5500`

#### Method 4: Using Python HTTP Server

If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🔑 API Configuration

### ⚠️ IMPORTANT: API Keys Setup

**Note:** This project currently runs entirely in the browser with no external API calls. However, if you plan to extend this project with AI-powered joke generation or other API integrations, follow these steps:

1. **Create a `.env` file** in the root directory (if needed for future features)
   ```env
   API_KEY=your_api_key_here
   API_SECRET=your_api_secret_here
   ```

2. **Replace placeholder API keys** in your code:
   ```javascript
   // Example: If you add API integration
   const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual key
   ```

3. **Never commit API keys** to version control:
   - Add `.env` to your `.gitignore` file
   - Use environment variables for sensitive data

### 🔐 Security Best Practices

- Never share your API keys publicly
- Use environment variables for production
- Rotate keys regularly
- Use API key restrictions when available

**⚠️ Without proper API keys (if you add API features), the extended functionality will not work!**

---

## 📖 Usage

1. **Open the Application**
   - Launch `index.html` in your browser

2. **Select a Domain**
   - Click on any of the 5 domain buttons:
     - 💻 Technology
     - 👨‍💻 Coding
     - 🏢 Office Life
     - 🌐 Internet
     - 🤖 AI & ML

3. **Get Jokes**
   - Click the "Get a Joke 🎲" button
   - Enjoy the joke!
   - Click again for another one

4. **Track Your Progress**
   - Watch the joke counter increase
   - See your mood indicator improve
   - Keep laughing until you feel better!

---

## 🎭 Joke Domains

| Domain | Icon | Description | Joke Count |
|--------|------|-------------|------------|
| **Technology** | 💻 | General tech humor and gadget jokes | 10 |
| **Coding** | 👨‍💻 | Programming and developer jokes | 10 |
| **Office Life** | 🏢 | Workplace and corporate humor | 10 |
| **Internet** | 🌐 | Web, social media, and online jokes | 10 |
| **AI & ML** | 🤖 | Artificial intelligence and machine learning jokes | 10 |

**Total: 50+ Original Jokes!**

---

## 🎨 Customization

### Adding Your Own Jokes

Edit the `jokes` object in `script.js`:

```javascript
const jokes = {
    technology: [
        "Your hilarious tech joke here! 😄",
        "Another amazing joke! 🎉",
        // Add more...
    ],
    // Add more domains or modify existing ones
};
```

### Adding New Domains

1. Add jokes to the `jokes` object:
```javascript
const jokes = {
    // ... existing domains
    gaming: [
        "Why did the gamer cross the road? To render the other side! 🎮",
        // Add more gaming jokes
    ]
};
```

2. Add a button in `index.html`:
```html
<button class="domain-btn" data-domain="gaming">🎮 Gaming</button>
```

### Customizing Colors

Edit `style.css` to change the color scheme:
```css
body {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

---

## 📁 Project Structure

```
stress-relief-jokes/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and jokes
├── README.md           # Project documentation
└── .gitignore          # Git ignore file (create if needed)
```

### File Descriptions

- **index.html**: Contains the structure and layout of the web page
- **style.css**: All styling, animations, and responsive design
- **script.js**: Joke data, domain switching logic, and interactivity
- **README.md**: Comprehensive project documentation

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contribution

- Add more jokes to existing domains
- Create new joke domains
- Improve UI/UX design
- Add sound effects
- Create a joke submission form
- Add social sharing features
- Implement dark/light mode toggle

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 👨‍💻 Author

<div align="center">

### **AK DINESH**

[![GitHub](https://img.shields.io/badge/GitHub-akdinesh2003-black?style=for-the-badge&logo=github)](https://github.com/akdinesh2003)


<<<<<<< HEAD
# GitHub Pages Deployment Ready

A React application configured for automatic GitHub Pages deployment.

## 🚀 Quick Deploy to GitHub Pages

1. **Update Repository Name**: Edit `vite.config.ts` and change `/your-repo-name/` to your actual repository name
2. **Push to GitHub**: Push this code to your GitHub repository
3. **Enable Pages**: Go to Settings → Pages → Source → Select "GitHub Actions"
4. **Deploy**: Push to main/master branch triggers automatic deployment

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

## 🛠️ Local Development

```bash
npm install
npm run dev
```
=======
# React + TypeScript + Vite Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive design using Tailwind CSS
- **Fast Performance**: Optimized build with Vite for lightning-fast loading
- **Type Safety**: Full TypeScript support for better development experience
- **Icon Library**: Beautiful icons from Lucide React
- **Automated Deployment**: GitHub Actions workflow for seamless deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `portfolio` or `my-website`

2. **Update Configuration**:
   - Replace `your-repo-name` in `vite.config.ts` with your actual repository name
   - Update the repository URL in this README

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

5. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── styles/           # CSS files
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

1. **Update Content**: Modify the components in `src/` to match your personal information
2. **Styling**: Customize the design by editing Tailwind classes
3. **Colors**: Update the color scheme in `tailwind.config.js`
4. **Assets**: Replace images and icons in the `public/` directory

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/your-repo-name/issues).

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

⭐ Star this repository if you found it helpful!
>>>>>>> bb5c19c (Initial commit: React portfolio with VS Code setup)

# Modern Barbie Phone (React) 📱💖

## Try live demo - [Demo](https://modern-barbie-phone.vercel.app/)

An interactive smartphone UI simulation built with React and Vite. Inspired by nostalgic toy phones, it features a modern design, clickable icons that play those nostalgic sounds, light/dark themes, and dynamic elements. Part of the #30DaysOfVibeCoding challenge.

<!-- ================================================== -->

![Modern Barbie Phone Sim - Dark Mode](public/screenshot1.png)
![Modern Barbie Phone Sim - Light Mode](public/screenshot2.png)
![Modern Barbie Phone Sim - Mobile view](public/screenshot3.png)

<!-- ================================================== -->

## Overview

Remember those fun toy phones from back in the day? This project brings that nostalgic vibe into the modern web! It's a simulated smartphone interface featuring:

*   A sleek design inspired by current smartphones (including a notch and home indicator bar).
*   A grid of tappable icons.
*   The core fun: clicking each icon plays a unique sound from a predefined list (the songs on the old Barbie phone!), using a randomized, non-repeating sequence for each cycle.
*   A dynamic status bar displaying the current time and date.
*   Switchable light and dark themes with corresponding wallpaper changes.
*   A responsive layout framed by a clean header and footer.

This project was built as part of the **#30DaysOfVibeCoding** challenge, leveraging AI assistance for code generation, debugging, and iteration, embodying the "vibe coding" spirit of rapid prototyping and creative exploration with AI as a partner.

## Features

*   **Interactive Phone UI:** A visually appealing smartphone simulation.
*   **Modern Design:** Includes aesthetic elements like a screen notch and bottom home indicator bar.
*   **Clickable Icon Grid:** Icons laid out in a 4-column grid.
*   **Randomized Non-Repeating Sound Playback:** Clicking an icon plays a sound from a list (`/public/sound/`). The sequence is random, and sounds don't repeat until all have played in a cycle.
*   **Light/Dark Theme Switching:** Toggle between themes with a button in the header.
*   **Dynamic Wallpaper:** Background image changes based on the selected theme.
*   **Live Status Bar:** Displays the current time and date, updating every second.
*   **Responsive Layout:** The overall page layout with header, footer, and centered phone adapts to different screen sizes.
*   **Component-Based:** Built with reusable React components.
*   **Header & Footer:** Clean header with project title/creator credit and a footer with social/project links.
*   **Modern Tech Stack:** Utilizes React, Vite, and modern CSS features.

## Tech Stack

*   **Frontend:** React 18+
*   **Build Tool:** Vite
*   **Styling:** CSS3 (including Flexbox, Grid, Custom Properties/Variables, Transitions)
*   **Language:** JavaScript (ES6+)
*   **Icons:** `react-icons` (for Footer), Font Awesome (via CDN for phone icons)
*   **Package Manager:** npm

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18+ recommended) installed on your system ([nodejs.org](https://nodejs.org/)). This includes npm.
*   Git (for cloning the repository).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Barrsum/Modern-Barbie-Phone.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Modern-Barbie-Phone
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Running the Project

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This command will start the Vite development server.

2.  **Open the application:**
    Open your web browser and navigate to the local URL provided by Vite (usually `http://localhost:5173/` or a similar port).

## Contributing

Contributions, issues, and feature requests are welcome! While this was a rapid project for a challenge, feel free to check the [issues page](https://github.com/Barrsum/Modern-Barbie-Phone/issues) if you have ideas.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Acknowledgements

*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/), [Font Awesome](https://fontawesome.com/)
*   **React:** [react.dev](https://react.dev/)
*   **Vite:** [vitejs.dev](https://vitejs.dev/)
*   **AI Partner:** AI Model for assistance during the Vibe Coding process.
*   **Inspiration:** Classic electronic toy phones (the Barbie phone).

---

Built by Ram Bapat - Challenge [\#30DaysOfVibeCoding](https://www.linkedin.com/posts/ram-bapat-barrsum-diamos_vibecoding-ai-machinelearning-activity-7312839191153860608-wQ8y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEokGUcBG1WEFP4A_IMlyO4LNl-eu2MD52w) - [LinkedIn Profile](https://www.linkedin.com/in/ram-bapat-barrsum-diamos)

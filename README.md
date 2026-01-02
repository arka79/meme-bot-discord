# 🌌 NebulaBot

NebulaBot is a feature-rich, multi-purpose Discord bot designed to bring utility and fun to any server. Built with **Node.js** and **Discord.js v14**, this project demonstrates modern JavaScript practices, API integration, and structured bot development.

---

## 🚀 Features

* **⚡ Slash Command Support:** Modern, interactive UI using Discord's latest slash command features.
* **🖼️ Random Memes:** Fetches top-trending memes from various subreddits using external API calls.
* **👤 User Intelligence:** Displays detailed information about server members, including join dates and account age.
* **📡 Latency Check:** Real-time ping commands to monitor bot and API heartbeat.
* **🔒 Secure:** Uses environment variables to keep sensitive API tokens safe.

---

## 🛠️ Tech Stack

* **Runtime:** [Node.js](https://nodejs.org/) (v16.x or higher)
* **Library:** [Discord.js v14](https://discord.js.org/)
* **Networking:** [Axios](https://github.com/axios/axios) for API requests
* **Security:** [Dotenv](https://www.npmjs.com/package/dotenv) for environment management

---

## 📂 Project Structure

```text
├── src/
│   ├── index.js          # Main entry point and event handlers
├── .env                  # Private environment variables (Hidden)
├── .gitignore            # Files excluded from GitHub
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
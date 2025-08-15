# 🌟 Tamil Proverb API 🇮🇳  
Your go-to **Tamil Proverb API** serving authentic proverbs with meanings, transliterations, and categories. Perfect for apps, websites, chatbots, or showcasing Tamil cultural wisdom. 😎✨  

**Live API:** [https://tamil-proverb-api.onrender.com](https://tamil-proverb-api.onrender.com) 🌐

---

## 📑 Table of Contents  
- [API Endpoints](#api-endpoints)  
- [How to Use](#how-to-use)  
- [Tech Stack](#tech-stack)  
- [Quick Integration](#quick-integration)  
- [Contributing](#contributing)  
- [Fun Facts](#fun-facts)  
- [Contact](#contact)

---

## 🧩 API Endpoints  

| Method | Endpoint                     | Description                                         |
|--------|------------------------------|-----------------------------------------------------|
| GET    | `/api/random`                | Fetch a random Tamil proverb                        |
| GET    | `/api/all`                   | Retrieve all proverbs (bulk)                        |
| GET    | `/api/search/:keyword`       | Search proverbs by keyword in proverb or meaning   |
| GET    | `/api/category/:cat`         | Filter proverbs by category like wisdom, life, etc.|
| GET    | `/api/transliteration/:text`| Search by transliteration text                      |

---

## 🛠️ How to Use  
- Send **GET** requests to any endpoint. 📡  
- Use JSON responses in your apps, bots, or websites. 🤖  
- Flex your Tamil knowledge! 💪  

---

## 🚀 Tech Stack  
- Node.js 🟢  
- Express ⚡  
- JSON Dataset 📄  
- Hosted on Render 🌐  

---

## 💻 Quick Integration  

```
import axios from "axios";

const getRandomProverb = async () => {
  const response = await axios.get("https://tamil-proverb-api.onrender.com/api/random");
  console.log(response.data);
};
getRandomProverb();
```

💡 Works in both browser and Node.js environments.

---

## ❤️ Contributing  
Open-source under MIT License. Feel free to fork, add proverbs, or improve the API! Everyone is welcome! 🎉  

---

## 💡 Fun Facts  
- 744+ Tamil proverbs and counting…  
- Great resource to learn Tamil culture & language  
- Easy integration for developers and hobbyists  

---

## 📧 Contact  
Made with ❤️ and coffee ☕ by **Rakesh Raj**  
🌐 [API Live on Render](https://tamil-proverb-api.onrender.com)  

---

Drop a ⭐ if you love Tamil culture and open-source APIs!  
```

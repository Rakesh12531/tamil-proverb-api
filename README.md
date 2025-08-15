# 🌟 Tamil Proverb API 🇮🇳

Welcome to the **ultimate Tamil Proverb API**! 🚀  
Serving **authentic Tamil proverbs** with meanings, transliterations, and categories. Perfect for apps, websites, chatbots, or simply expanding your cultural knowledge. 😎✨  

**Live API:** [https://tamil-proverb-api.onrender.com](https://tamil-proverb-api.onrender.com) 🌐

---

## 🧩 Endpoints

### 🎲 Random Proverb  
`GET /api/random`  
**Example Response:**  
```
{
  "proverb": "அகத்தின் அழகு முகத்தில் தெரியும்",
  "transliteration": "Agaththin azhagu mugaththil theriyum",
  "meaning": "The beauty of the heart reflects on the face.",
  "category": "wisdom"
}
```

---

### 📚 All Proverbs  
`GET /api/all`  
Returns all proverbs in the dataset — ideal for bulk usage and offline processing! 💾

---

### 🔍 Search Proverbs by Keyword  
`GET /api/search/:keyword`  
Searches within both the proverb and meaning fields.  
Replace `:keyword` with your search term.  
**Example:**  
`GET /api/search/heart`

---

### 🏷️ Filter Proverbs by Category  
`GET /api/category/:cat`  
Filter proverbs by categories like wisdom, life, humor, family.  
Replace `:cat` with the category name.  
**Example:**  
`GET /api/category/wisdom`

---

### 🔤 Filter Proverbs by Transliteration  
`GET /api/transliteration/:text`  
Search proverbs by their transliteration text.  
Replace `:text` with your search query.  
**Example:**  
`GET /api/transliteration/goal`

---

## 🛠️ How to Use  
- Send simple GET requests to any endpoint. 📡  
- Use the JSON responses in your web apps, mobile apps, or AI bots. 🤖  
- Show off your Tamil heritage knowledge with ease! 💪😎  

---

## 🚀 Tech Stack  
- Node.js 🟢  
- Express ⚡  
- JSON Dataset 📄  
- Hosted on Render 🌐  

---

## 💻 Quick Integration Example (JavaScript + Axios)  
```
import axios from "axios";

const getRandomProverb = async () => {
  try {
    const res = await axios.get("https://tamil-proverb-api.onrender.com/api/random");
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching proverb", error);
  }
};

getRandomProverb();
```
💡 Works in both Node.js and browser environments.

---

## ❤️ Contributing  
This project is open-source and MIT licensed.  
Feel free to fork, add more proverbs, or improve API functionality. Everyone is welcome! ✨🎉  

---

### 💡 Fun Facts  
- ✅ 744+ Tamil proverbs and counting…  
- 🌱 Perfect for exploring Tamil culture & language  
- 🔗 Easy integration for developers and hobbyists  

---

Made with ❤️ and lots of ☕ by **Rakesh Raj**.  
Deployed API: [https://tamil-proverb-api.onrender.com](https://tamil-proverb-api.onrender.com)
```

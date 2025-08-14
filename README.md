# 🌟 Tamil Proverb API 🇮🇳

Welcome to the **ultimate Tamil Proverb API**! 🚀  
Serving **authentic Tamil proverbs** with meanings, transliterations, and categories. Perfect for apps, websites, chatbots, or just flexing your cultural knowledge. 😎✨

**Live API:** [https://tamil-proverb-api.onrender.com](https://tamil-proverb-api.onrender.com) 🌐

---

## 🧩 Endpoints

### 🎲 Random Proverb

GET ```/api/random```

**Example Response:**
```json
{
  "proverb": "அகத்தின் அழகு முகத்தில் தெரியும்",
  "transliteration": "Agaththin azhagu mugaththil theriyum",
  "meaning": "The beauty of the heart reflects on the face.",
  "category": "wisdom"
}
```
---
### 📚 All Proverbs

GET ```/api/all```

- Returns all proverbs in the dataset. Perfect for bulk usage! 💾

---

### 🔍 Search Proverbs by Keyword

GET ```/api/search/:keyword```

- Search both proverb and meaning fields.

- Replace :keyword with your search term.

Example:

GET ```/api/search/heart```

---

### 🏷️ Filter Proverbs by Category

GET ```/api/category/:cat```

- Filter proverbs by category like wisdom, life, humor, family.

- Replace :cat with the category name.

Example:

GET ```/api/category/wisdom```

---

### 🏷️ Filter Proverbs by Transliteration

GET ```/api/transliteration/:text```

- Replace :text with the transliteration.

Example:

GET ```/api/category/goal```

---

## 🛠️ How to Use

- Send GET requests to any endpoint. 📡  
- Use the JSON response in your web apps, mobile apps, or AI bots. 🤖  
- Flex your Tamil heritage knowledge like a boss. 💪😎  


---

## 🚀 Tech Stack

- Node.js 🟢
- Express ⚡
- JSON Dataset 📄
- Hosted on Render 🌐

---
## 💻 Quick Integration Example (JS + Axios)

```
import axios from "axios";

const getRandomProverb = async () => {
  const res = await axios.get("https://tamil-proverb-api.onrender.com/api/random");
  console.log(res.data);
};

getRandomProverb();

```

💡 Works in both Node.js and browser environments.

---

## ❤️ Contributing

Open-source & MIT licensed. Fork it, add more proverbs, or improve API functionality. Everyone is welcome! ✨🎉

---

### 💡 Fun Facts

✅ 744+ Tamil proverbs and counting…

🌱 Perfect for learning Tamil culture & language

🔗 Easy integration for developers & hobbyists

---

## Made with ❤️ and lots of ☕ by Rakesh Raj.
Deployed API: https://tamil-proverb-api.onrender.com



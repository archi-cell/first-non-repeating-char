# Installation & Setup Guide

## 🛠️ Prerequisites

- Node.js (v16 or above) OR Python (v3.8+)
- Git installed
- Browser (Chrome/Edge)

---

## 📥 Clone Repository


git clone https://github.com/your-username/ai-ui-testing-system.git

cd ai-ui-testing-system


---

## ⚙️ Setup (Node.js)


npm install
npx playwright install


---

## ⚙️ Setup (Python)


pip install -r requirements.txt
playwright install


---

## ▶️ Run the Project

### Node.js:

npm start


### Python:

python main.py


---

## 🧪 Running Tests


npx playwright test


OR (Python)

pytest


---

## 📊 Output

- Test logs in console  
- Screenshots stored in `/reports/screenshots`  
- Bug reports generated in `/reports` folder  

---

## ❗ Troubleshooting

- Ensure Node.js/Python is installed:

node -v
python --version


- If Playwright fails:

npx playwright install


---

## 📌 Notes

- Update configuration files to target your application URL  
- Customize test scenarios as needed  
- Ensure stable internet connection for dependencies  

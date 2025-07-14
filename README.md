Colab Keep Alive (Chrome Extension)

A lightweight Chrome extension to keep Google Colab notebooks alive by simulating user activity.  
**Note:** This is for educational and personal demo purposes only. Misusing it may violate Google’s Terms of Service.

---

# Features
-> Start/Stop keep-alive from popup  
-> Detects if active tab is Google Colab  
-> Injects a lightweight script that simulates mouse movement to keep runtime awake  
-> Clean and minimal UI built with HTML, CSS & JavaScript

---
# Why use this extension?
Google Colab notebooks automatically disconnect or go idle after a period of inactivity — especially if your code takes a long time to run (e.g., training ML models, running multiple epochs, etc.).
This can interrupt your work and:
  ->Stop long-running scripts before they finish
  ->Waste time restarting sessions or re-running cells
  ->Interrupt ML training, data preprocessing, or any task that requires continuous execution

### This extension solves that problem by:
-> Automatically simulating small user activity (like moving the mouse) every minute
-> Keeping your Colab runtime session alive and preventing it from auto-disconnecting
-> Allowing you to control this easily via a simple Start/Stop popup

# Installation (Developer Mode)

1. **Clone** or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle on top right).
4. Click **Load unpacked** → select the project folder.
5. Pin the extension to your toolbar.
6. Open a Google Colab notebook → click Start to keep it alive.

---

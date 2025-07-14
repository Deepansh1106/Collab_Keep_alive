document.getElementById('start').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const statusBox = document.getElementById('statusBox');

  if (tab && tab.url && tab.url.includes("colab.research.google.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['keepalive.js']
    });
    statusBox.textContent = "Keeping alive...";
    statusBox.style.backgroundColor = "#10b981"; // green
  } else {
    statusBox.textContent = "Not a Colab page";
    statusBox.style.backgroundColor = "#ef4444"; // red
  }
});

document.getElementById('stop').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const statusBox = document.getElementById('statusBox');

  if (tab && tab.url && tab.url.includes("colab.research.google.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (window.keepAliveInterval) {
          clearInterval(window.keepAliveInterval);
          window.keepAliveInterval = null;
          // removed: alert('Stopped keep alive.');
        }
      }
    });
    statusBox.textContent = "Stopped";
    statusBox.style.backgroundColor = "#6b7280"; // gray
  } else {
    statusBox.textContent = "Not a Colab page";
    statusBox.style.backgroundColor = "#ef4444"; // red
  }
});

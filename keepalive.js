if (!window.keepAliveInterval) {
  window.keepAliveInterval = setInterval(() => {
    console.log('Colab Keep Alive: simulating mousemove');
    document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
  }, 60000); // every minute
}

// Show the demo page once the extension is installed
// chrome.runtime.onInstalled.addListener((_reason) => {
//   chrome.tabs.create({
//     url: 'demo/index.html'
//   });
// });

// const canvas = new OffscreenCanvas(16, 16);
// const context = canvas.getContext('2d');
// context.clearRect(0, 0, 16, 16);
// context.fillStyle = '#00FF00';  // Green
// context.fillRect(0, 0, 16, 16);
// const imageData = context.getImageData(0, 0, 16, 16);
// chrome.action.setIcon({imageData: imageData}, () => { /* ... */ });
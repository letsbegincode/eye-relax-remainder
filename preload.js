// preload.js
const { contextBridge } = require('electron');

// Expose a minimal API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // We'll add functions here if needed in the future
});
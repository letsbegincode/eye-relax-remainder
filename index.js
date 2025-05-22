const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');

let mainWindow = null;
let tray = null;
let reminderInterval = null;

function createWindow() {
  // Check if window already exists
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.focus();
    return;
  }

  mainWindow = new BrowserWindow({
    width: 400,
    height: 250,
    resizable: false,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    titleBarStyle: 'hidden',
    hasShadow: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    show: false,
    skipTaskbar: true // Hide from taskbar
  });

  // Remove menu bar completely
  mainWindow.setMenu(null);
  
  // Ensure no title bar appears
  mainWindow.setTitle("");

  mainWindow.loadFile('public/index.html');

  mainWindow.on('ready-to-show', () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Auto-close after 20 seconds
  setTimeout(() => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.close();
    }
  }, 20000);
}

function setupTray() {
  try {
    // Load tray icon (assuming icon.png exists in public folder)
    const iconPath = path.join(__dirname, 'public', 'icon.png');
    const icon = nativeImage.createFromPath(iconPath);
    
    // Create tray instance
    tray = new Tray(icon);
    
    // Create context menu
    const contextMenu = Menu.buildFromTemplate([
      { 
        label: 'Show Reminder Now', 
        click: () => createWindow() 
      },
      { type: 'separator' },
      { 
        label: 'Quit', 
        click: () => {
          if (reminderInterval) clearInterval(reminderInterval);
          app.quit();
        }
      }
    ]);
    
    // Set tooltip and context menu
    tray.setToolTip('Eye Relax App');
    tray.setContextMenu(contextMenu);
    
    // Show window when tray icon is clicked
    tray.on('click', () => createWindow());
    
  } catch (error) {
    console.error('Tray initialization error:', error);
    // Even if tray fails, continue with the reminders
  }
}

// Disable hardware acceleration to improve transparency
// This can help with some frame-related issues
app.disableHardwareAcceleration();

app.whenReady().then(() => {
  setupTray();
  
  // Initial reminder
  createWindow();
  
  // Set up the interval (20 minutes)
  reminderInterval = setInterval(createWindow, 20 * 60 * 1000);
});

// Prevent app from showing in dock (Mac)
if (process.platform === 'darwin') {
  app.dock.hide();
}

app.on('window-all-closed', () => {
  // Don't quit when windows are closed (we have a tray icon)
});

// Error handling
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});
# 👀 Eye Relax Reminder

A minimalist, cross-platform desktop app that reminds you to take eye breaks every 20 minutes (following the 20-20-20 rule). Perfect for developers, designers, and anyone who spends long hours in front of screens.

![App Screenshot](screenshot.png)

## Features ✨
- 🕒 20-minute reminder intervals
- 🎵 Gentle sound notification (optional mute)
- 🖥️ Subtle, non-intrusive popup
- 🚀 Lightweight and energy-efficient
- 🌈 Beautiful UI with smooth animations
- 📌 System tray integration
- 🔇 Toggle sound on/off

## Installation 📥

### Windows Users 🪟
#### Method 1: Download Pre-built Executable
1. Download the latest `.exe` from [Releases](https://github.com/letsbegincode/eye-relax-reminder/releases)
2. Run the installer and follow the prompts
3. The app will launch automatically and run in your system tray

#### Method 2: Build from Source
```bash
# Clone the repository
git clone https://github.com/letsbegincode/eye-relax-reminder.git
cd eye-relax-reminder

# Install dependencies
npm install

# Package for Windows
npm run package-win

# The executable will be in the 'dist' folder
```

### macOS Users 🍎
#### Method 1: Download DMG
1. Download the `.dmg` from [Releases](https://github.com/letsbegincode/eye-relax-reminder/releases)
2. Open the DMG and drag the app to your Applications folder
3. Right-click the app and select "Open" (to bypass Gatekeeper on first run)

#### Method 2: Build from Source
```bash
git clone https://github.com/letsbegincode/eye-relax-reminder.git
cd eye-relax-reminder
npm install

# Package for macOS
npm run package-mac

# The app bundle will be in 'dist'
```

### Linux Users 🐧
#### Method 1: Download AppImage
1. Download the `.AppImage` from [Releases](https://github.com/letsbegincode/eye-relax-reminder/releases)
2. Make it executable:
```bash
chmod +x EyeRelaxReminder-*.AppImage
```
3. Run it:
```bash
./EyeRelaxReminder-*.AppImage
```

#### Method 2: Build from Source
```bash
git clone https://github.com/letsbegincode/eye-relax-reminder.git
cd eye-relax-reminder
npm install

# Package for Linux
npm run package-linux

# The executable will be in 'dist'
```

## Usage 🛠️
- After launching, the app runs in your system tray/menu bar
- Click the tray icon to:
  - **Show reminder immediately**
  - **Quit the app**
- The popup will automatically:
  - Show for 20 seconds every 20 minutes
  - Play a gentle sound (can be muted)
  - Disappear automatically

## Customization ⚙️
Edit `config.json` (created after first run) to change:
```json
{
  "reminderInterval": 20,    // Minutes between reminders
  "breakDuration": 20,       // Seconds for each break
  "enableSound": true,       // Toggle sound
  "startMinimized": false    // Start hidden in tray
}
```

## Building for All Platforms 🏗️
```bash
# Install dependencies once
npm install

# Package for all platforms
npm run package-all

# Outputs will be in 'dist' folder:
# - Windows: .exe installer
# - macOS: .dmg and .app
# - Linux: .AppImage and .deb
```

## Troubleshooting 🛠
**Problem:** App doesn't appear in system tray  
**Solution:** Some Linux DEs require tray extensions (gnome-shell-extension-appindicator)

**Problem:** Sound not working  
**Solution:** Ensure your system volume is up and check mute button in app

**Problem:** Window won't close  
**Solution:** Right-click tray icon and select "Quit", then restart

## Contributing 🤝
Pull requests welcome! Please:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License 📄
MIT © abhi

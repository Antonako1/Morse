# Check if Winget is installed
if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Winget..."
    
    # Download the Microsoft Store Installer
    Invoke-WebRequest -Uri "https://aka.ms/winget-6" -OutFile "MicrosoftStoreInstaller.exe"
    
    # Install Microsoft Store Installer
    Start-Process -Wait -FilePath "MicrosoftStoreInstaller.exe"

    # Check if installation was successful
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        Write-Host "Error: Failed to install Winget. Please install it manually."
        Exit 1
    } else {
        Write-Host "Winget installed successfully."
    }
}

# Install Node.js using Winget
Write-Host "Installing Node.js..."
winget install -e --id OpenJS.NodeJS

# Check if installation was successful
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Failed to install Node.js. Please check your internet connection and try again."
} else {
    Write-Host "Node.js installed successfully."
}

# Install Node.js packages using npm
npm install

# Execute main.js
node main.js

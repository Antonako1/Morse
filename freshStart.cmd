@echo off
cls

:: Check if Winget is installed
where winget > nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Winget...
    :: Download the Microsoft Store Installer
    curl.exe -o MicrosoftStoreInstaller.exe -s "https://aka.ms/winget-6"
    
    :: Install Microsoft Store Installer
    start /wait MicrosoftStoreInstaller.exe

    :: Check if installation was successful
    where winget > nul 2>&1
    if %errorlevel% neq 0 (
        echo Error: Failed to install Winget. Please install it manually.
        exit /b 1
    ) else (
        echo Winget installed successfully.
    )
)

:: Install Node.js using Winget
echo Installing Node.js...
winget install -e --id Node.Nodejs

:: Check if installation was successful
where node > nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Failed to install Node.js. Please check your internet connection and try again.
) else (
    echo Node.js installed successfully.
)

npm install

node main.js
exit
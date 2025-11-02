@echo off
echo ===================================
echo Rawan Resume - GitHub Deployment
echo ===================================
echo.

echo Step 1: Removing old GitHub credentials...
for /f "tokens=1,2 delims= " %%G in ('cmdkey /list ^| findstr github.com') do cmdkey /delete:%%H 2>nul
echo Done!
echo.

echo Step 2: Pushing to GitHub...
echo You will be prompted to sign in with Rawan-J-Othman account
echo.
cd /d "%~dp0"
git push -u origin main

echo.
echo ===================================
if %ERRORLEVEL% EQU 0 (
    echo SUCCESS! Files pushed to GitHub!
    echo.
    echo Next step: Enable GitHub Pages
    echo 1. Go to: https://github.com/Rawan-J-Othman/Resume/settings/pages
    echo 2. Set Branch to 'main' and Folder to '/ (root)'
    echo 3. Click Save
    echo 4. Wait 2-3 minutes
    echo 5. Visit: https://rawan-j-othman.github.io/Resume/
) else (
    echo.
    echo FAILED! Please try one of these:
    echo.
    echo Option 1: Create a Personal Access Token
    echo    - Go to: https://github.com/settings/tokens
    echo    - Generate new token with 'repo' scope
    echo    - Use token as password when prompted
    echo.
    echo Option 2: Manual Upload
    echo    - Go to: https://github.com/Rawan-J-Othman/Resume
    echo    - Click "Add file" - "Upload files"
    echo    - Drag all files from this folder
    echo    - Commit changes
    echo.
    echo See COMPLETE_DEPLOYMENT.md for detailed instructions
)
echo ===================================
echo.
pause
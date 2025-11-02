@echo off
cls
color 0A
echo.
echo ===============================================
echo   RAWAN RESUME WEBSITE - GITHUB DEPLOYMENT
echo ===============================================
echo.
echo All files are ready in this folder!
echo Repository configured: Rawan-J-Othman/Resume
echo.
echo ===============================================
echo   CHOOSE DEPLOYMENT METHOD:
echo ===============================================
echo.
echo [1] Push with Git (requires GitHub authentication)
echo [2] Get instructions for Personal Access Token
echo [3] Get instructions for Manual Upload (EASIEST!)
echo [4] Open repository in browser
echo [5] Exit
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto push
if "%choice%"=="2" goto token_info
if "%choice%"=="3" goto manual_info
if "%choice%"=="4" goto open_browser
if "%choice%"=="5" goto end

:push
echo.
echo Attempting to push to GitHub...
echo You may be prompted to sign in.
echo.
cd /d "%~dp0"
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===============================================
    echo   SUCCESS! Files pushed to GitHub!
    echo ===============================================
    echo.
    echo NEXT STEP: Enable GitHub Pages
    echo.
    echo 1. Opening repository settings in browser...
    start https://github.com/Rawan-J-Othman/Resume/settings/pages
    echo.
    echo 2. On the page that opens:
    echo    - Set Source: Deploy from a branch
    echo    - Branch: main
    echo    - Folder: / (root)
    echo    - Click SAVE
    echo.
    echo 3. Wait 2-3 minutes, then visit:
    echo    https://rawan-j-othman.github.io/Resume/
    echo.
) else (
    echo.
    echo ===============================================
    echo   AUTHENTICATION REQUIRED
    echo ===============================================
    echo.
    echo Please try option 2 (Personal Access Token)
    echo or option 3 (Manual Upload - easiest!)
    echo.
)
pause
goto menu

:token_info
cls
echo.
echo ===============================================
echo   PERSONAL ACCESS TOKEN METHOD
echo ===============================================
echo.
echo STEP 1: Create Token
echo -------------------
echo 1. Opening GitHub token page...
start https://github.com/settings/tokens/new
echo.
echo 2. Fill in the form:
echo    - Note: "Resume Website Deployment"
echo    - Expiration: No expiration (or your choice)
echo    - Scopes: Check "repo" (Full control)
echo.
echo 3. Click "Generate token" at the bottom
echo.
echo 4. COPY THE TOKEN (you won't see it again!)
echo.
echo.
echo STEP 2: Use Token to Push
echo ------------------------
echo 1. Run this command in this folder:
echo    git push -u origin main
echo.
echo 2. When prompted:
echo    Username: Rawan-J-Othman
echo    Password: [paste your token here]
echo.
echo.
pause
goto menu

:manual_info
cls
echo.
echo ===============================================
echo   MANUAL UPLOAD (EASIEST METHOD!)
echo ===============================================
echo.
echo This is the SIMPLEST way if Git is giving issues.
echo.
echo STEP 1: Open Repository
echo ----------------------
echo Opening repository in browser...
start https://github.com/Rawan-J-Othman/Resume
echo.
echo.
echo STEP 2: Upload Files
echo -------------------
echo 1. On the page, click: "Add file" -^> "Upload files"
echo.
echo 2. Drag ALL files from this folder:
echo    %~dp0
echo.
echo    Files to upload:
echo    - index.html
echo    - style.css
echo    - script.js
echo    - README.md
echo    - All other .md files
echo    - .gitignore
echo    - LICENSE
echo    (Upload ALL 13 files!)
echo.
echo 3. Commit message: "Initial commit: Professional resume website"
echo.
echo 4. Click "Commit changes"
echo.
echo.
echo STEP 3: Enable GitHub Pages
echo --------------------------
echo 1. Go to: Settings -^> Pages
echo.
echo 2. Set:
echo    - Source: Deploy from a branch
echo    - Branch: main
echo    - Folder: / (root)
echo.
echo 3. Click "Save"
echo.
echo 4. Wait 2-3 minutes
echo.
echo 5. Visit: https://rawan-j-othman.github.io/Resume/
echo.
echo.
echo ===============================================
echo   That's it! Your website will be LIVE!
echo ===============================================
echo.
pause
goto menu

:open_browser
echo.
echo Opening repository in browser...
start https://github.com/Rawan-J-Othman/Resume
echo.
pause
goto menu

:end
echo.
echo ===============================================
echo   DEPLOYMENT GUIDE
echo ===============================================
echo.
echo Need help? Check these files:
echo - COMPLETE_DEPLOYMENT.md (detailed instructions)
echo - QUICK_START.md (fast guide)
echo - START_HERE.md (overview)
echo.
echo Your files are ready at:
echo %~dp0
echo.
echo ===============================================
echo.
pause
exit

:menu
cls
goto :eof

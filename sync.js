const { execSync } = require('child_process');
const fs = require('fs');

console.log("🚀 SYNC BUTLER IS ACTIVE");

function runSync() {
    try {
        console.log("📦 Change detected! Syncing...");
        execSync('git add .');
        execSync('git commit -m "Auto-update from Gemini"');
        execSync('git pull origin main --rebase');
        execSync('git push origin main');
        console.log("✅ SUCCESS: Pushed to GitHub!");
    } catch (e) {
        console.log("⚠️ Syncing... trying a force push...");
        try {
            execSync('git push origin main --force');
        } catch (err) {
            console.log("❌ ERROR: Close GitHub Desktop and try again.");
        }
    }
}

fs.watch('./', { recursive: true }, (event, filename) => {
    if (filename && !filename.includes('.git') && filename !== 'sync.js') {
        runSync();
    }
});
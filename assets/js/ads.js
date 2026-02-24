// Adsterra Smart Link Logic
(function() {
    const AD_LINK = "https://www.effectivegatecpm.com/i7fr0rn0gs?key=77c7a6b1da93b80dde4592cb945521cf";
    const RESET_TIME_MS = 40000; // 40 Seconds

    document.addEventListener('click', function(e) {
        let lastReset = parseInt(localStorage.getItem('ad_last_reset') || '0');
        let clickCount = parseInt(localStorage.getItem('ad_click_count') || '0');
        let now = Date.now();

        // Check if 40 seconds have passed, if so, reset the counter
        if (now - lastReset > RESET_TIME_MS) {
            clickCount = 0;
            lastReset = now;
            localStorage.setItem('ad_last_reset', lastReset.toString());
        }

        // If user hasn't clicked 3 times yet, show Adsterra Ad
        if (clickCount < 3) {
            e.preventDefault();   // Stops the actual button/link from working
            e.stopPropagation();  // Stops the click from registering in the app
            
            // Open Ad in new tab
            window.open(AD_LINK, '_blank');
            
            // Increment the click count
            clickCount++;
            localStorage.setItem('ad_click_count', clickCount.toString());
        }
        // If clickCount is 3 or more, it will bypass this block and the real click will work perfectly!
        
    }, true); // 'true' means it intercepts the click before anything else on the site
})();

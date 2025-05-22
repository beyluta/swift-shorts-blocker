// Affected DOM elements
const shortElements = [
  'ytm-rich-section-renderer',  // Removes the shorts title
  'ytd-reel-shelf-renderer',    // Removes the shorts themselves
  '[class*=short]'              // Removes the bottom shorts icon
];
                       
// Purges all shorts from any source from the YouTube page
function purgeShorts() {
    // 1. Selecting all elements that reference shorts
    const shorts = document.querySelectorAll(shortElements.join(', '));
    // 2. Removing stored elements
    for (const short of shorts) short.remove();
}

// Initial purging of the shorts. Might not work
// but leave this here just for peace of mind.
purgeShorts();

// Observing for any changes in the current page
const observer = new MutationObserver(purgeShorts);
observer.observe(document.body, {
    childList: true,
    subtree: true
});

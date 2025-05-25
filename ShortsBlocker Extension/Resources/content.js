// Affected DOM elements
const shortElements = [
  '.pivot-shorts',              // Make sure this is always the 0th element
  'ytm-rich-section-renderer',  // Header of the shorts
  'ytd-reel-shelf-renderer',    // Block containing a group of shorts
  '[class*=short]'              // Anything else referencing shorts
];
                       
// Purges all shorts from any source from the YouTube page
function purgeShorts() {
    // First we remove any icons from the bottom navigation bar
    const elements = document.querySelectorAll(shortElements[0]);
    for (const element of elements) {
        element.parentElement.remove();
    }
    
    // Then we remove all the other remaining elements
    const shorts = document.querySelectorAll(shortElements.join(', '));
    for (const short of shorts) {
        short.remove();
    }
}

/*
** Initial purging of the shorts. Might not be needed
** but leave this here just for peace of mind.
*/
purgeShorts();

/*
** Observing for any changes in the current page.
** Used for whenever the user navigates to another page.
*/
const observer = new MutationObserver(purgeShorts);
observer.observe(document.body, {
    childList: true,
    subtree: true
});

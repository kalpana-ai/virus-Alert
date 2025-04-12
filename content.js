function scanPage() {
    const bodyText = document.body.innerText.toLowerCase();
    if (bodyText.includes("virus")) {
      chrome.runtime.sendMessage({ type: "virusFound" });
    }
  }
  
  window.addEventListener("load", scanPage);
  
  
  const observer = new MutationObserver(scanPage);
  observer.observe(document.body, { childList: true, subtree: true });
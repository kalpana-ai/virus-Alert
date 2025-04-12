chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "virusFound") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "virus.png",
        title: "Virus Alert!",
        message: `The word 'virus' was found on ${sender.tab.url}!`
      });
    }
  });
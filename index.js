async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body;
      alert("Hello from the other side");
    },
  });
}

document.getElementById("switch_button").addEventListener("click", sayHello);

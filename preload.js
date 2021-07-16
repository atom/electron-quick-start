// All of the Node.js APIs are available in the preload process.
// The preload script runs in an isolated world by default, similar
// to content scripts in a Chrome Extension.
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#isolated_world

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

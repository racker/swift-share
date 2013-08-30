chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('swift-share.html', {
    'bounds': {
      'width': 1024,
      'height': 768
    }
  });
});
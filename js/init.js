chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('swift-share.html', {
    'bounds': {
      'width': 640,
      'height': 480
    }
  });
});
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.accelerometer);
}
});

function onSuccess(acceleration) {
    console.log('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};

var options = { frequency: 3000 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

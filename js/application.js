// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.accelerometer);
}
});

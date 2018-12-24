const audioSelect = document.querySelector('select#audioSource');


function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }
  
  if (hasGetUserMedia()) {
    // Good to go!
    console.log("It works!!");
  } else {
    alert('getUserMedia() is not supported by your browser');
  }  
  navigator.mediaDevices.enumerateDevices()
    .then(gotDevices).then(getStream).catch(handleError);
  
  audioSelect.onchange = getStream;
  
  function gotDevices(deviceInfos) {
    for (let i = 0; i !== deviceInfos.length; ++i) {
      const deviceInfo = deviceInfos[i];
      const option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind === 'audioinput') {
        option.text = deviceInfo.label ||
          'microphone ' + (audioSelect.length + 1);
        audioSelect.appendChild(option);
      }  else {
        console.log('Found another kind of device: ', deviceInfo);
      }
    }
  }
  
  function getStream() {
    if (window.stream) {
      window.stream.getTracks().forEach(function(track) {
        track.stop();
      });
    }
  
    const constraints = {
      audio: {
        deviceId: {exact: audioSelect.value}
      }
    };
  
    navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).catch(handleError);
  }
  
  function gotStream(stream) {
    window.stream = stream; // make stream available to console
    
  }
  
  function handleError(error) {
    console.error('Error: ', error);
  }

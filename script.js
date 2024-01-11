const videoElement =  document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media strem, pass the video element, then play
async function selectMediaStream(){
    try{
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadeddata = () => {
           videoElement.play();
       }
    } catch(error) {
     // catch error 
     console.log('whooooooops' , error);
    }
}

button.addEventListener('click', async () =>{
 // disable The Button 
   button.disabled = true;
   // Start Picture In Picture 
   await videoElement.requestPictureInPicture();
   // Rest The Button 
   button.disabled = false;
});

// select media steram 
selectMediaStream();

document.getElementById("startButton").
addEventListener("click",async()=>{
    const stream = await navigator.mediaDevices.getUserMedia({
        video:true
    })
    const videoElement = document.createElement("video")
    videoElement.srcObject=stream;
    videoElement.autoplay = true;
    videoElement.id="videoElement";
    document.getElementById("videoContainer").appendChild(videoElement)
})
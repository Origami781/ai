function setup(){
    canvas=createCanvas(460,460)   
    canvas.center() 
    video=createCapture(VIDEO);   
    video.size(460, 460);
    video.hide(); 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }
    
    
    function preload(){
    
    }
    
    
    function draw(){
    image(video, 0, 0, 460, 460)
    }
    
    function modelLoaded(){
    console.log("Da PoseNet Is Successful");
    }
    
    function gotPoses(results){
    if(results.length > 0){
    console.log(results)
    console.log("The x nose position is: "+results[0].pose.nose.x)  
    console.log("The y nose position is: "+results[0].pose.nose.y)    
    }    
    }
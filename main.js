noseX = 0
noseY = 0

function preload(){
    moustache=load_image('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded(){
    console.log = ('Pose net is intialized');
  }

  function gotPoses(results){
    if (results.legnth > 0)
    {console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;

    }
  }

  function draw(){
    image(video,0,0,300,300);
    image(moustache,noseX,noseY,80,35);
  }

  function takesnapshot(){
    save('JaswanthApp.png');
  }
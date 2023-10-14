const body=document.getElementsByClassName("body")[0];
const cursor=document.getElementsByClassName("cursor")[0];
//Selecting the divs
const image1=document.getElementsByClassName("image1")[0];
const image2=document.getElementsByClassName("image2")[0];
const image3=document.getElementsByClassName("image3")[0];
const image4=document.getElementsByClassName("image4")[0];

//Selecting the images
const one=document.getElementsByClassName("one")[0];
const two=document.getElementsByClassName("two")[0];
const three=document.getElementsByClassName("three")[0];
const four=document.getElementsByClassName("four")[0];

//Selecting the hearts
const heart1=document.getElementsByClassName("heart1")[0];
const heart2=document.getElementsByClassName("heart2")[0];
const heart3=document.getElementsByClassName("heart3")[0];
const heart4=document.getElementsByClassName("heart4")[0];


//<ouse movement function
function movement(details){
    // console.log(details.x,details.y);
    console.log(details.clientX)
    cursor.style.left=details.clientX+"px";
    cursor.style.top=details.clientY+"px";
    if (details.clientX>=700) {
        cursor.style.backgroundColor="red";
        image1.style.transform=`rotateZ(${details.clientX*0.010}deg)`;
        image2.style.transform= `rotateZ(${details.clientX*0.010}deg)`;
        image3.style.transform= `rotateZ(${details.clientX*0.010}deg)`;
        image4.style.transform= `rotateZ(${details.clientX*0.010}deg)`;     
     
     


    }
    else if (details.clientX<700) {
        cursor.style.backgroundColor="yellow";
        image1.style.transform=`rotateZ(${details.clientX*(-0.010)}deg)`;
        image2.style.transform=`rotateZ(${details.clientX*(-0.010)}deg)`
        image3.style.transform=`rotateZ(${details.clientX*(-0.010)}deg)`
        image4.style.transform=`rotateZ(${details.clientX*(-0.010)}deg)`



    }
    

}
body.addEventListener("mousemove",movement);




//Timeout function for doubleclick event.
function timeOut1() {
    heart1.style.transform="scale(0)";
    image1.style.boxShadow="0 0 5px 1px grey";
    body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/ocean_water_underwater_126683_1920x1080.jpg')";
    image1.style.transform="rotateZ(0deg)";
    //Creating function inside a function.
    function innerTimeout1() {
        body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/ocean_surf_foam_117846_1920x1080.jpg')";
    }
    setTimeout(innerTimeout1,3000);


}
function timeOut2() {
    heart2.style.transform="scale(0)";
    image2.style.boxShadow="0 0 5px 1px grey";
    image2.style.transform="rotateZ(0deg)";
    body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/planet_universe_galaxy_59622_1920x1080.jpg')";

    function innerTimeout2() {
        body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/galaxy_universe_stars_135577_1920x1080.jpg')";
    }
    setTimeout(innerTimeout2,3000);


}
function timeOut3() {
    heart3.style.transform="scale(0)";
    image3.style.boxShadow="0 0 5px 1px grey";
    image3.style.transform="rotateZ(0deg)";
    body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/sunset_lake_grass_100308_1920x1080.jpg')";
    function innerTimeout3() {
        body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/sunset_sea_skyline_120685_1920x1080.jpg')";

    }
    setTimeout(innerTimeout3,3000);

}
function timeOut4() {
    heart4.style.transform="scale(0)";
    image4.style.boxShadow="0 0 5px 1px grey";
    image4.style.transform="rotateZ(0deg)";
    body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/waterfall_river_precipice_137045_1920x1080.jpg')";
    function innerTimeout4 () {
        body.style.backgroundImage="url('https://images.wallpaperscraft.com/image/single/waterfall_grass_nature_92753_1920x1080.jpg')";

    }
    setTimeout(innerTimeout4,3000);
}

//Double click functions
function like1() {
    heart1.style.transform="scale(1.25)";
    setTimeout(timeOut1,3000);
    image1.style.boxShadow="0 0 15px 1px #4700D8";
    body.style.backgroundImage="url('https://wallpapercave.com/wp/wp7346971.jpg')";
    image1.style.transform="rotateZ(-10deg)";
    
    

    
}
function like2() {
    heart2.style.transform="scale(1.25)";
    setTimeout(timeOut2,3000);
    image2.style.boxShadow="0 0 15px 1px aquamarine";
    body.style.backgroundImage="url('https://wallpapers.com/images/hd/planet-earth-4k-space-hd-qis7o51sock2fwsr.jpg')";
    image2.style.transform="rotateZ(-10deg)";

}
function like3() {
    heart3.style.transform="scale(1.25)";
    setTimeout(timeOut3,3000);
    image3.style.boxShadow="0 0 15px 1px red";
    body.style.backgroundImage="url('https://wallpapercave.com/wp/wp4499588.jpg')";
    image3.style.transform="rotateZ(-10deg)";

}
function like4() {
    heart4.style.transform="scale(1.25)";
    setTimeout(timeOut4,3000);
    image4.style.boxShadow="0 0 15px 1px orange";
    body.style.backgroundImage="url('https://images.hdqwalls.com/download/beautiful-waterfall-9l-2560x1440.jpg')";
    image4.style.transform="rotateZ(-10deg)";

}
image1.addEventListener("dblclick",like1);
image2.addEventListener("dblclick",like2);
image3.addEventListener("dblclick",like3);
image4.addEventListener("dblclick",like4);




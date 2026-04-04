// CHANGE LAYOUT
const content = document.querySelector(".container");
const btnColumn = document.getElementById("column");
const btnRow = document.getElementById("row");
const btnTD = document.getElementById("tD");

function changeClass(newClass){
    const allClasses = ["all", "rotation", "column"];
     allClasses.forEach(cls => content.classList.remove(cls));

    content.classList.add(newClass);
    if(newClass !== "rotation"){
    content.style.transform = "none";
    content.style.perspective = "none";
}

}
if(btnColumn) btnColumn.addEventListener("click", () => changeClass("column"));
if(btnTD) btnTD.addEventListener("click", () => changeClass("rotation"));
if(btnRow) btnRow.addEventListener("click", () => changeClass("all"));


// ROTATION ANIMATION

//const content = document.querySelector(".rotation");
const target = document.querySelectorAll(".target");
let currentAngle = 0;
let currentSpeed = 2; 
let targetSpeed = 2;
const sensorTrip = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
                targetSpeed = 0.2;
        } else   targetSpeed = 2; 

    });
}  


const sensitiveZone = {root: null, rootMargin: "-60% 0% -60% 0%  ", threshold: 0};


const observer = new IntersectionObserver(sensorTrip, sensitiveZone);
target.forEach(item => observer.observe(item));




function animate() {

    if(content.classList.contains("rotation")){
        
    currentSpeed  += (targetSpeed - currentSpeed) * 0.055;
    currentAngle += currentSpeed;
    
    content.style.transform = `perspective(1000px) rotateX(-9deg) rotateY(${currentAngle}deg)` ;
    

}       requestAnimationFrame(animate);


}
 content.style.transformStyle = "preserve-3d";

animate();



/*
const content = document.querySelector(".rotation");
const targets = document.querySelectorAll(".target"); // Note: renamed for clarity

let currentAngle = 0;
let currentSpeed = 0.9; // What the speed IS right now
let targetSpeed = 0.9;  // What the speed WANTS to be

// 1. The Sensor Logic
const sensorTrip = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            targetSpeed = 0.1; // Set the "Goal" speed to slow
        } else {
            targetSpeed = 0.9; // Set the "Goal" speed back to fast
        }
    });
};

const observer = new IntersectionObserver(sensorTrip, {
    root: null, 
    rootMargin: "0% -45% 0% -45%", 
    threshold: 0
});

targets.forEach(item => observer.observe(item));

// 2. The Animation Loop
function animate() {
    // This is the "Smoothing" math (Linear Interpolation)
    // It takes 5% of the difference every frame until they match
    currentSpeed += (targetSpeed - currentSpeed) * 0.05;

    currentAngle += currentSpeed;
    
    // Apply the combined transforms
    content.style.transform = `perspective(1000px) rotateX(-9deg) rotateY(${currentAngle}deg)`;

    requestAnimationFrame(animate);
}

content.style.transformStyle = "preserve-3d";
animate();
 */
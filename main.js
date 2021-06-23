cars = [
    {
        id:1,
        name:"Mercedes Benz",
        img:"https://imgd.aeplcdn.com/0x0/n/cw/ec/45390/gls-exterior-right-front-three-quarter-2.jpeg",
        price:"Ksh 3M"
    },
    {
        id:2,
        name:"Mazda Cx-5",
        img:"https://www.mazdausa.com/siteassets/vehicles/2021/cx-5/trims/touring/2021-mazda-cx-5-touring-package.jpg",
        price:"Ksh 1.5M"
    },
    {
        id:3,
        name:"Honda-Crv",
        img:"https://www.hondalatincaribbean.com/upload/car/cr-v-2020/gallery/cr-v-2020-lhd-video-202.jpg",
        price:"Ksh 2M"
    },
    {
        id:4,
        name:"BMW x6",
        img:"https://www.ccarprice.com/products/BMW-X6-M50i-2021.jpg",
        price:"Ksh 3.5M"
    },
    {
        id:5,
        name:"Toyata Rav4",
        img:"https://cars.usnews.com/static/images/Auto/izmo/i5490/2014_toyota_rav4_angularfront.jpg",
        price:"Ksh 2M"
    },
    {
        id:6,
        name:"Range Rover",
        img:"https://www.newcartestdrive.com/wp-content/uploads/2020/04/2020_Land-Rover_Range-Rover-Sport_hero-610x400.jpg",
        price:"Ksh 5M"
    },
    {
        id:7,
        name:"Toyota Noah",
        img:"https://www.carimports.co.ke/stats_images/dyJ2O5ZnVGaLpjxto6Qn89OCHnyewfCqa8DhXNTS46.jpg",
        price:"Ksh 1.3M"
    },
    {
        id:8,
        name:"Nissan Duke",
        img:"https://img.drivemag.net/media/default/0001/77/2018-Nissan-Juke-4-4611-default-large.jpeg",
        price:"Ksh 1M"

    },
    {
        id:9,
        name:"Toyota Cruiser Tx",
        img:"http://eastlinkmotors.com.np/files/groups/754.jpg",
        price:"Ksh 3M"
    },
    {
        id:10,
        name:"Audi A6",
        img:"https://www.ccarprice.com/products/Audi-Q8-Premium-55-TFSI-qua.jpg",
        price:"Ksh 3M"
    },
]

let carName = document.getElementById("carName");
 console.log(carName);
let carImg = document.getElementById("carImg");
console.log(carImg);
let carPrice = document.getElementById("carPrice");
console.log(carPrice);


let prevBtn = document.querySelector(".prev-btn");
console.log(prevBtn);
let nextBtn = document.querySelector(".next-btn");
console.log(nextBtn);

let currentCar = 2;

window.addEventListener("DOMContentLoaded", ()=>{
    console.log("Group 4 project");
    showCar(currentCar);
})

function showCar(car){
    let item = cars[car];
    carName.textContent = item.name;
    carImg.src = item.img;
    carPrice.textContent = item.price
}
prevBtn.addEventListener("click", function(){
    currentCar--;
    if(currentCar < 0){
        currentCar = cars.length-1
    };
    showCar(currentCar);
});
nextBtn.addEventListener("click", function(){
    currentCar++;
    if(currentCar > cars.length-1){
        currentCar=0
    };
    showCar(currentCar);
});

function validate(){
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    let userComments = document.getElementById("coments");
    console.log(userName)
    if(userName.value.trim ==""|| userEmail.value.trim==""||userComments.value.trim==""){
        alert("No field can be blank");
        return false;
    }else{
        return true;
    }
};

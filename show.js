//https://api.openweathermap.org/data/2.5/onecall?lat=20.593684&lon=78.96288&exclude=hourly,minutely&units=metric&appid=adfa479828336ef1ab6edf8be59cae11


var cords= JSON.parse(localStorage.getItem("cords"))
let latitude=cords.lat
let longitude=cords.lon

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=adfa479828336ef1ab6edf8be59cae11`)
.then(function(res){
          return res.json()
          //console.log(res.json());
}).then(function(res){
          mapping(res.daily)
          //console.log(res.daily);
}).catch(function(rej){
          console.log("error");
})


function mapping(data){
          //console.log(data[0].temp);
          data.pop()
          console.log(data);

          let oneMax=data[0].temp.max
          let oneMin=data[0].temp.min
          document.querySelector("#max_1").append(oneMax)
          document.querySelector("#min_1").append(oneMin)

          let twoMax=data[1].temp.max
          let twoMin=data[1].temp.min
          document.querySelector("#max_2").append(twoMax)
          document.querySelector("#min_2").append(twoMin)

          let threeMax=data[2].temp.max
          let threeMin=data[2].temp.min
          document.querySelector("#max_3").append(threeMax)
          document.querySelector("#min_3").append(threeMin)

          let fourMax=data[3].temp.max
          let fourMin=data[3].temp.min
          document.querySelector("#max_4").append(fourMax)
          document.querySelector("#min_4").append(fourMin)

          let fiveMax=data[4].temp.max
          let fiveMin=data[4].temp.min
          document.querySelector("#max_5").append(fiveMax)
          document.querySelector("#min_5").append(fiveMin)

          let sixMax=data[5].temp.max
          let sixMin=data[5].temp.min
          document.querySelector("#max_6").append(sixMax)
          document.querySelector("#min_6").append(sixMin)

          let sevenMax=data[6].temp.max
          let sevenMin=data[6].temp.min
          document.querySelector("#max_7").append(sixMax)
          document.querySelector("#min_7").append(sixMin)
}
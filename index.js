//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=adfa479828336ef1ab6edf8be59cae11

function search(){
          let city=document.querySelector("#city").value
          
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adfa479828336ef1ab6edf8be59cae11`
         
          fetch(url)
          .then(function(res){
                    //console.log(res);
                    return res.json();
          }).then(function(res){
                    //console.log(res);
                    City_Search(res) 
          }).catch(function(rej){
                    console.log(rej);
          })

        
}

function City_Search(data){
          console.log("data",data);
          //document.querySelector("#main").innerHTML=null
          var first=document.querySelector("#first")
          first.innerHTML=null
          let city=document.createElement("p")
          city.setAttribute("id","font")
          city.innerText=data.name

          let degreeMin=Math.floor(Number(data.main.temp_min)-273)

          let min=document.createElement("p")
          min.innerText=`Minimun Temp: ${data.main.temp_min} k or ${degreeMin} deg`;

          
          let degreeMax=Math.floor(Number(data.main.temp_max)-273)

          let max=document.createElement("p")
          max.innerText=`Maximum Temp: ${data.main.temp_max} k or ${degreeMax} deg`;


          let Temperature=Math.floor(Number(data.main.temp)-273)

          let current=document.createElement("p")
          current.innerText=`Temp: ${data.main.temp} k or ${Temperature} deg`;

          let humi=document.createElement("p")
          humi.innerText=`Humidity: ${data.main.humidity}`;

          let button=document.createElement("button")
          button.innerText="Click here to get more Information"
          button.setAttribute("id","button")
          button.addEventListener("click",function(){
                    more();
          })

          first.append(city, min, max, current, humi, button)
          // first.append(city, min, max, current, humi)
          
          var second=document.querySelector(".mapouter")

          let map=document.querySelector("#gmap_canvas")

          map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
          second.append(map)
          document.querySelector("#main").append(first,second)

          localStorage.setItem("cords",JSON.stringify(data.coord))
          //console.log("coord",data.coord);

}

function get(){
          navigator.geolocation.getCurrentPosition(success);

          function success(pos) {
                    var crd = pos.coords;
          
                    // console.log('Your current position is:');
                    console.log(`Latitude : ${crd.latitude}`);
                    console.log(`Longitude: ${crd.longitude}`);
                    // console.log(`More or less ${crd.accuracy} meters.`);

                    getCurrent(crd.latitude,crd.longitude)

          }
}

function getCurrent(lat,lon){


//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=adfa479828336ef1ab6edf8be59cae11
          
          const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=adfa479828336ef1ab6edf8be59cae11`
         
          fetch(url)
          .then(function(res){
                    //console.log(res);
                    return res.json();
          }).then(function(res){
                    //console.log(res);
                    City_Search(res) 
          }).catch(function(rej){
                    console.log(rej);
          })
}


//==================================================================================================


//https://api.openweathermap.org/data/2.5/onecall?lat=20.593684&lon=78.96288&exclude=hourly,minutely&units=metric&appid=adfa479828336ef1ab6edf8be59cae11


function more(){
          window.location.href="show.html"
}




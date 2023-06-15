

var apiUrl;

function selectedVehicle(){

let selectedValue = document.getElementById("selectName").value
var url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/"


    if(selectedValue  == "mec"){
        apiUrl = url + "merc" + "?format=json"
        getVehicleData(apiUrl)
        
    }

    else if(selectedValue  == "honda"){
        apiUrl = url + "honda" + "?format=json"
        getVehicleData(apiUrl)
       
    }
    else if(selectedValue  == "hyundai"){
        apiUrl = url + "hyundai" + "?format=json"
        getVehicleData(apiUrl)
        
    }
    else if(selectedValue  == "jaguar"){
        apiUrl = url + "jaguar" + "?format=json"
        getVehicleData(apiUrl)
       
    }
    else if(selectedValue  == "bugatti"){
        apiUrl = url + "bugatti" + "?format=json"
        getVehicleData(apiUrl)
        
    }
    else if(selectedValue  == "tesla"){
        apiUrl = url + "tesla" + "?format=json"
        getVehicleData(apiUrl)
       
    }
    else if(selectedValue  == "bmw"){
        apiUrl = url + "bmw" + "?format=json"
        getVehicleData(apiUrl)
        
    }

    else if(selectedValue  == "mitsubishi"){
        apiUrl = url + "mitsubishi" + "?format=json"
        getVehicleData(apiUrl)
        
    }

    else if(selectedValue == 0){
        constructData(0)

    }
}

async function getVehicleData(URL){
    
    try{
        let res = await fetch(URL)
        let data = await res.json()
        constructData(data.Results)
    }
        
    catch(error){
        console.log(error)
    }

}



function constructData(data){
  
    let div = document.getElementById("table")
    div.innerHTML = ""
    let table = document.createElement("table")
    table.setAttribute("class", "table table-striped table-bordered table-dark")
    let thead = document.createElement("thead")
    let th1 = document.createElement("th")
    th1.innerHTML = "Make ID"
    thead.appendChild(th1)
    let th2 = document.createElement("th")
    th2.innerHTML = "Make Name"
    thead.appendChild(th2)
    let th3 = document.createElement("th")
    th3.innerHTML = "Vehicle Type"
    thead.appendChild(th3)
    table.appendChild(thead)
    div.appendChild(table)

    let tbody = document.createElement("tbody")
    tbody.innerHTML = ""
    table.appendChild(tbody)

    if(data!==0){
    data.forEach(e => {
        let tr = document.createElement("tr")
        tr.innerHTML = `<tr>
                <td>${e.MakeId}</td>
                <td>${e.MakeName}</td>
                <td>${e.VehicleTypeName}</td>
        </tr>`
        tbody.appendChild(tr)
    });
}
else{
    div.innerHTML = ""
}
    
}

 
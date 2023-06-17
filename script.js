const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/"
var apiUrl;  //Created an empty Variable to store the API URL when ser selects an option

function selectedVehicle(value){


// Using if else if function to add the Vehicles of users choice in URL

   if(value !=="0"){
        apiUrl = url + value + "?format=json"
        getVehicleData(apiUrl);
    }

    else
    {
        constructData(0)

    }
}

async function getVehicleData(URL)   // The URLs from apiUrl is passed as a parameter
{
    
    try{
        let res = await fetch(URL)
        let data = await res.json()
        constructData(data.Results)
    }
        
    catch(error) // Catch is used to fetch error when failed to Fetch API
    {
        console.log(error)
    }

}



function constructData(data) // This function creates the table when ever the user chooses an option
{
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
else  // If the option is Select Car then it displays nothing
{
    div.innerHTML = ""
}
    
}

 
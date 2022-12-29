      $.ajax ({
        url:"https://restcountries.com/v3.1/all",
        type: "get",
        success: function(data){
          var rs = "";
          for(i in data){
          //console.log(data[i].languages)
            rs += "<tr>";
            rs += "<td>" + data[i].flag + "</td>";
            rs += "<td>" + data[i].name.common + "</td>";
            rs += "<td>" + data[i].capital + "</td>";
            rs += "<td>" + data[i].region + "</td>";
            rs += "<td>" + data[i].population + "</td>";
            rs += "<td><ul>";
            for (j in data[i].languages){
              rs += "<li>"+data[i].languages[j]+"</li>"; 
            } 
            rs += "</ul></td>";
            rs += "</tr>";
          }
          $('#countryTable').DataTable();

          document.getElementById("result").innerHTML = rs;
    }
  })

  const search = () =>{
    let filter = document.getElementById("tableInput").value.toLowerCase();
    let countryTable = document.getElementById("countryTable");
    let tr = countryTable.getElementsByTagName('tr');

    for (var i=0; i<tr.length; i++){
      td = tr[i].getElementsByTagName('td')[0];


      if(td){
        let textValue = td.textContent || td.innerHTML;
        
        if(textValue.toLowerCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


/*const tableBody = document.querySelector("table tbody");  
const countryList = async function(url) {
  const response = await fetch(url);
  const data = await response.json(); 
  tableBody.innerHTML = data.map((country, i) => {
    return `<tr>
  <td>${country.flag}</td>
  <td>${country.name.common}</td>
  <td>${country.region}</td>
  <td>${country.population}</td>
  <td>${country.languages}</td>
  </tr>`
  }).join("")
  document.getElementById("name").innerHTML = countryList.sort();
}

function sortTable() {
  var table, i, x, y;
  table = document.getElementById("table tbody");
  var switching = true;

  // Run loop until no switching is needed
  while (switching) {
      switching = false;
      var rows = table.rows;

      // Loop to go through all rows
      for (i = 1; i < (rows.length - 1); i++) {
          var Switch = false;

          // Fetch 2 elements that need to be compared
          x = rows[i].getElementsByTagName("countryList")[0];
          y = rows[i + 1].getElementsByTagName("countryList")[0];

          // Check if 2 rows need to be switched
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
              {

              // If yes, mark Switch as needed and break loop
              Switch = true;
              break;
          }
      }
      if (Switch) {
          // Function to switch rows and mark switch as completed
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      }
  }
}

countryList("https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,flag,region")
*/
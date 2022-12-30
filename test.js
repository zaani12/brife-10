let myArray; //========= array impoted from json file


function getData() {  //  get data from the file and give it to th myArray variable
    $.ajax({

        url: "test.json",  // specifiyning the url of the json file
        success: function (data) {

            myArray = data;  //asigning data to myArray
            table(myArray); // build table and replace the parameter with myArray

        },
    });
}

getData()

function table(data){
    let tab = document.getElementById('table_body')
    for (let i = 0 ; i < data.length ;i++){
       let  row = `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].year}</td>
            <td>${data[i].runtime}</td>
            <td>${data[i].genres[0]}</td>
            <td>${data[i].director}</td>
            <td>${data[i].actors[0]}</td>
            <td>${data[i].plot}</td>
            <td><img src='${data[i].posterUrl}' alt='poster' width = "100"></td>

        </tr>`
        tab.innerHTML += row

    }
}


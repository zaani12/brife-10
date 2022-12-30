    let dataa = []; 
    table(dataa);


function ImprtData() { 
    $.ajax({
        url: "megarama.json",
        success: function (data) {

            dataa = data;  
            table(dataa); 

        },
    });
}


function table(data) {
    let table = document.getElementById("table_body");
    table.innerHTML = " ";
    for (let i = 0; i < data.length; i++) {
        let row = "";
     row +=`
            <tr >
                     <td>${data[i].titre}</td>
                     <td>${data[i].realisateur}</td>
                     <td>${data[i].duree}<span>min</span></td>
                     <td>${data[i].annee}</td>
                         <td>
                             <img src="${data[i].poster}" alt="Poster" width = 100>
                         </td>

                         <td>`   ;

        for (let j = 0; j < dataa[i].festivals.length; j++) {
         row +=  `<li>${data[i].festivals[j]} </li>` 
        };
     row += `</td><td>`;
        for (let j = 0; j < dataa[i].acteur.length; j++) {
         row +=  `<li>${data[i].acteur[j].nom + " " + data[i].acteur[j].prenom + ' : ' + data[i].acteur[j].nationalite}</li> `
        };
     row += `</td></tr>`;
       
        table.innerHTML += row;
    }}

    $('#SerchInput').on('keyup',function(){
        var value = $(this).val()
        console.log(value)
        var SerchData = SurchFunction(value,dataa)
        table(SerchData)
    });
    table(dataa)
    function SurchFunction(value,SerchData){
        
        var felterdData = []
        for (var i = 0;i < SerchData.length;i++){
        value = value.toLowerCase()
        var titre = SerchData[i].titre.toLowerCase()
        if(titre.includes(value)){
            felterdData.push(SerchData[i])
        }
        
     }
        return felterdData
    }
    table(dataa)
    ImprtData()
    



    // sort table
$('th').on('click',function(){
   var column = $(this).data('column')
   var order = $(this).data('order')

    console.log('column',column, order,'order')

    if(order == 'desc'){
        $(this).data('order',"asc")
        dataa  = dataa.sort((a,b)=>a[column]>b[column] ? 1:-1)
     }else{
        $(this).data('order',"desc")
        dataa  = dataa.sort((a,b)=>a[column]<b[column] ? 1:-1)

    }
    table(dataa)
})
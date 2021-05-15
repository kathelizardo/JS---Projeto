// document.addEventListener("DOMContentLoaded", function startApp() {

//     let search = document.getElementById("user").value
//     fetch('https://api.github.com/users/kathelizardo/repos')
//     .then((result) => result.json())
//     .then((data) => {
//         console.log(data)
//     }

//     )

// })




let request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/kathelizardo/repos', true)

request.onload = function () {
  let data = JSON.parse(this.response);

  let statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.html_url + '</td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '</tr>';
    
  });

  $('tbody').html(statusHTML);
  
  
  

}
request.send();




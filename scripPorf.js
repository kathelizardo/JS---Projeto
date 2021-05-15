// document.addEventListener("DOMContentLoaded", function startApp() {

//     let search = document.getElementById("user").value
//     fetch('https://api.github.com/users/kathelizardo/repos')
//     .then((result) => result.json())
//     .then((data) => {
//         console.log(data)
//     }

//     )

// })

// function createCardElement(title, description, image_url, image_description, copyright) {
//     let card_el = document.createElement("article")
//     card_el.classList.add("card", "mb-2", "mx-4", "ms-md-0", "me-md-4")
  
//     let image_el = createImageElement(image_url, image_description)
//     image_el.classList.add("card-img-top")
  
//     let card_body_el = document.createElement("div")
//     card_body_el.classList.add("card-body")
  
//     let title_el = document.createElement("h3")
//     title_el.textContent = title
//     title_el.classList.add("card-title")
  
//     let text_el = document.createElement("p")
//     text_el.textContent = truncateText(description, 100)
//     text_el.classList.add("card-text")
  
//     let card_footer_el = document.createElement("div")
//     card_footer_el.classList.add("card-footer")
  
//     card_body_el.appendChild(title_el)
//     card_body_el.appendChild(text_el)
  
//     card_el.appendChild(image_el)
//     card_el.appendChild(card_body_el)
  
//     if (copyright) {
//       card_footer_el.innerHTML = '&copy; '
//       card_footer_el.textContent += copyright
//       card_el.appendChild(card_footer_el)
//     }
  
//     return card_el
//   }


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




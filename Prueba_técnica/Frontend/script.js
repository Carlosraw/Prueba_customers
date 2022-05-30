document.addEventListener("DOMContentLoaded", init);
const URL_API = 'http://localhost:5041/api/'


function init() {
  search()
}

async function search() {
  var url = URL_API + 'customer'
  var response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
  var resultado = await response.json();
  console.log(resultado);

  var html = ''
  for (customer in resultado) {
    var row = `
  <tr>
  <td>pepe</td>
  <td>Angelini</td>
  <td>pep@gmai.com</td>
  <td>4554545</td>
  <td>
    <a href="#" class="myButton">Editar</a>
    <a href="#" class="btnDelete">Eliminar</a>
  </td>
  </tr>`
  html = html + row;
  }

  document.querySelector('#customers > tbody').outerHTML = row
  html
}


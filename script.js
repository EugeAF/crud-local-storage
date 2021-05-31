let content = document.querySelector('#libros');
let libros = JSON.parse(localStorage.getItem('libros')) || [];

function listado() {
    content.innerHTML = '';

    libros.forEach(function (item, index) {
        content.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${item.titulo}</td>
            <td>${item.autor}</td>
            <td>
            <button type="button" class="btn btn-danger" onclick="eliminarLibro(${index})">Eiminar</button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="setEditModal(${index})">Editar</button>
            </td>            
        </tr>`;
    })
}

function agregarLibro() {
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let formAgregarNoticia = document.querySelector('#createModal');

    libros.push({
        titulo: titulo,
        autor: autor
    });

    localStorage.setItem('libros', JSON.stringify(libros));
    formAgregarNoticia.reset();
    listado();
}

function eliminarLibro(index) {
    let confirmar = confirm("Esta seguro de eliminar?");
    if (confirmar) {
        libros.splice(index, 1);
        localStorage.setItem('libros', JSON.stringify(libros));
        listado()
    }
}

listado();

let editarLibro = function(){
    let titulo = document.querySelector('#editarTitulo').value;
    let autor = document.querySelector('#editarAutor').value;

    let index = event.target.dataset.index;
    libros[index] = {
        titulo: titulo,
        autor: autor
    }

    localStorage.setItem('libros', JSON.stringify(libros));
    
    listado(); 
}

function setEditModal(index){
    let editBtn = document.getElementById("EditBTN");
    editBtn.setAttribute("data-index", index);

    document.querySelector('#editarTitulo').value = libros[index].titulo;
    document.querySelector('#editarAutor').value = libros[index].autor;
}
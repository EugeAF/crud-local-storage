let content = document.querySelector('#libros');
let libros = JSON.parse(localStorage.getItem('libros')) || [];

function listado() {
    content.innerHTML = '';

    libros.forEach(function (item, index) {
        content.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${item.titulo}</td>
            <td>${item.autor}</td>
            <td><img src="${item.imagen}" class="w-25"></img></td>
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
    let imagen = document.querySelector('#Imagen').value;
    let formAgregarLibro = document.querySelector('#createModal');

    if (titulo != "" && autor != "" && titulo != null && autor != null && titulo != undefined && autor != undefined && imagen != "") {
        libros.push({
            titulo: titulo,
            autor: autor,
            imagen: imagen
        });

        localStorage.setItem('libros', JSON.stringify(libros));
        formAgregarLibro.reset();
        listado();
    } else {
        alert('Complete todos los campos antes de continuar')
    }

}

function eliminarLibro(index) {
    let confirmar = confirm("Esta seguro de eliminar?");
    if (confirmar) {
        libros.splice(index, 1);
        localStorage.setItem('libros', JSON.stringify(libros));
        listado()
    }
}

let editarLibro = function () { debugger
    let titulo = document.querySelector('#editarTitulo').value;
    let autor = document.querySelector('#editarAutor').value;
    let imagen = document.querySelector('#editarImagen').value;
    let index = event.target.dataset.index;

    if (titulo != "" && autor != "" && imagen != "" && titulo != null && autor != null && titulo != undefined && autor != undefined) {
        libros[index] = {
            titulo: titulo,
            autor: autor,
            imagen: imagen
        }

        localStorage.setItem('libros', JSON.stringify(libros));

        listado();
    }else{
        alert('Complete todos los campos antes de continuar')
    }


}

function setEditModal(index) { debugger
    let editBtn = document.getElementById("EditBTN");
    editBtn.setAttribute("data-index", index);

    document.querySelector('#editarTitulo').value = libros[index].titulo;
    document.querySelector('#editarAutor').value = libros[index].autor;
    document.querySelector('#editarImagen').value = tecnologia[index].imagen;
}

listado();
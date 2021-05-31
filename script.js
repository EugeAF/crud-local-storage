let content = document.querySelector('#libros');
let libros = JSON.parse(localStorage.getItem('libros')) || [];

function listado() {
    content.innerHTML = '';

    libros.forEach(function (item, index) {
        content.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${item.titulo}</td>
            <td>${item.autor}</td>
            <td><button onclick="eliminarLibro(${index})">Eiminar</button></td>
            <td><button onclick="editarTitulo(${index})">Editar Titulo</button></td>
            <td><button onclick="editarAutor(${index})">Editar Autor</button></td>
        </tr>`;
    })
}

function agregarLibro() {
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;

    libros.push({
        titulo: titulo,
        autor: autor
    });

    localStorage.setItem('libros', JSON.stringify(libros));

    listado();
}

function eliminarLibro(index) {
    libros.splice(index, 1);
    localStorage.setItem('libros', JSON.stringify(libros));
    listado()
}

listado();

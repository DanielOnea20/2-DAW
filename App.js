import React from 'react';
import Boton from './Componentes/Boton';
import Formulario from './Componentes/Formulario';
import Galeria from './Componentes/Galeria';
import Contador from './Componentes/Contador';

function App() {
  function mostrarMensaje(mensaje){
    alert(mensaje);
  }
  
  const fotos = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76ArDXtQtvz_ejGJsD8IeC4WxwFvS41Y7nA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP29XXld_AZAeOWc7aI8ZjUSpT1ltdTNXg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yLv3a_VifZsKBs02ANJUykTBY0APTo8AJA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGcM2ZbuiC5TsCBM7g9D2Ao_iAWWMKZ8TGg&s"];
  return(
    <div>
      <h1>Practica 1</h1>
      <section>
        <h2>Ejercicio 1</h2>
        <Boton texto="Furbo" color="green" onClick={() => mostrarMensaje('Boton ejercicio 1')}></Boton>
      </section>

      <section>
        <h2>Ejercicio 2</h2>
        <Formulario></Formulario>
      </section>

      <section>
        <h2>Ejercicio 3</h2>
        <Galeria fotos={fotos}></Galeria>
      </section>

      <section>
        <h2>Ejercicio 4</h2>
        <Contador></Contador>
      </section>
    </div>

  );
}

export default App;
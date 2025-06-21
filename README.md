# Lista de Elementos en Angular

Esta es una aplicación sencilla creada con Angular que permite agregar elementos a una lista. El objetivo principal fue aprender a manejar componentes standalone y trabajar con listas dinámicas.

---

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/HectorSantanaC/lista-de-elementos-angular
   ```
2. Entra a la carpeta del proyecto:

   ```bash
   cd lista-de-elementos
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   ng serve
   ```

4. Abre el navegador en:

   ```bash
   http://localhost:4200
   ```

## 📝 Informe de Desarrollo – Desafíos y Reflexión
### 📌 Descripción del proyecto
Esta aplicación permite al usuario introducir un texto y agregarlo a una lista visible. Utiliza Angular con componentes standalone para manejar el input y el listado de elementos.

### 🚧 Desafíos encontrados y cómo los resolví
#### 1. Formulario recargaba la página
- Problema: Al usar la etiqueta form, el botón recargaba la página al hacer clic.

- Solución: Reemplacé el formulario por un div con un input y un button para evitar el comportamiento por defecto del navegador.

#### 2. No se limpiaba el input después de agregar
- Problema: Tras añadir un elemento, el campo de texto seguía con el valor anterior.

- Solución: Usé una referencia local (#elementoInput) y, después de agregar el valor, le asigné input.value = '' directamente desde el componente.

#### 3. Evitar elementos vacíos
- Problema: Si se pulsaba el botón sin texto, se añadía un string vacío.

- Solución: Utilicé .trim() para eliminar los espacios en blanco al inicio y final del texto ingresado, asegurando que no se agreguen elementos vacíos o con espacios sin contenido real, y una condición if para validar antes de agregarlo. También añadí un alert() en caso de texto vacío.

#### 4. Error al usar *ngFor
- Problema: Angular mostraba errores al usar *ngFor.

- Solución: Como el componente es standalone, agregué CommonModule en el array imports del decorador @Component.

### 💡 Lecciones aprendidas
- Comprendí cómo acceder al valor de un input con una referencia local.

- Aprendí a manejar errores comunes de Angular leyendo el mensaje del compilador.

- Me familiaricé con la estructura modular de Angular y la importancia de importar los módulos necesarios.

### ✅ Conclusión
Este pequeño proyecto me ayudó a afianzar conceptos clave de Angular, como la manipulación del DOM, el uso de componentes standalone y el manejo de listas dinámicas. A pesar de los errores iniciales, logré resolver cada problema y aprendí mucho durante el proceso.

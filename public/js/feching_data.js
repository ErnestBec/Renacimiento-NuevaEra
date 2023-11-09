async function obtenerYMostrarImagen(imagenElement) {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-ae422.appspot.com/o/ImgProducts%2F1699490493456_chapaDobleCremon.jpg?alt=media";

  try {
    // Realizar la solicitud con fetch
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error al obtener la imagen: ${response.status} ${response.statusText}`
      );
    }

    // Convertir la respuesta a un objeto Blob
    const blob = await response.blob();

    // Crear una URL para la imagen
    const imageUrl = URL.createObjectURL(blob);

    // Asignar la URL a la etiqueta de imagen
    imagenElement.src = imageUrl;

    // Insertar la imagen en el HTML
    document.body.appendChild(imagenElement);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Crear la etiqueta de imagen

// Llamar a la función asincrónica y pasar la etiqueta de imagen como parámetro
// await obtenerYMostrarImagen(miImagen);

async function main() {
  // Crear la etiqueta de imagen
  const miImagen = document.createElement("img");

  // Llamar a la función asincrónica y pasar la etiqueta de imagen como parámetro
  await obtenerYMostrarImagen(miImagen);

  // Resto de tu código aquí...
}

// Llamar a la función principal
main();
// const apiUrl = "http://localhost:4000/api/v1/products";

// async function getProducts() {
//   try {
//     const response = await fetch(apiUrl); // Reemplaza con la URL de tu API
//     if (!response.ok) {
//       throw new Error("La solicitud no pudo completarse.");
//     }
//     const data = await response.json(); // Convierte la respuesta en JSON
//     return data;
//   } catch (error) {
//     console.error("Error en la solicitud HTTP:", error);
//     throw error; // Puedes manejar o lanzar el error según tus necesidades
//   }
// }
// // card
// /*<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// */

// // Llamar a la función para hacer la solicitud y obtener los datos
// async function showData() {
//   const list_products = document.getElementById("list-products");
//   try {
//     const products = await getProducts();
//     products.products.map((product) => {
//       // Creamos las etiquetas para la card de productos
//       const container_card = document.createElement("div");
//       const img_product = document.createElement("img");

//       //   Agregamos las clases
//       container_card.classList.add("card");
//       container_card.classList.add("card_product");
//       img_product.classList.add("card-img-top");
//       img_product.alt = `Imagen de producto ${product.title}`;
//       // Obtenemos ruta
//       const rutaImagen = product;
//       console.log(product);
//       // ***************************************

//       // Realizar la solicitud con fetch
//       obtenerYMostrarImagen(img_product);
//       // **********************************

//       list_products.appendChild(container_card);
//       container_card.textContent = product.title;
//     });
//     console.log(products);
//   } catch (e) {
//     console.log({ "Error de peticion": e });
//   }
// }

// async function obtenerYMostrarImagen(imagenElement) {
//   const url =
//     "https://firebasestorage.googleapis.com/v0/b/ecommerce-ae422.appspot.com/o/ImgProducts%2F1699490493456_chapaDobleCremon.jpg?alt=media";

//   try {
//     // Realizar la solicitud con fetch
//     const response = await fetch(url, { method: "GET" });

//     if (!response.ok) {
//       throw new Error(
//         `Error al obtener la imagen: ${response.status} ${response.statusText}`
//       );
//     }

//     // Convertir la respuesta a un objeto Blob
//     const blob = await response.blob();

//     // Crear una URL para la imagen
//     const imageUrl = URL.createObjectURL(blob);

//     // Asignar la URL a la etiqueta de imagen
//     imagenElement.src = imageUrl;

//     // Insertar la imagen en el HTML
//     document.body.appendChild(imagenElement);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
// showData();

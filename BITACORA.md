Para visualizar correctamente el proyecto se debe ejecutar el comando `npm install` y se instalará únicamente react-router v6.
# Bitácora de desarrollo:clipboard:
La arquitectura de la página de la empresa ficticia Examtechy cuenta con tres vistas:
* La primera es la vista de ítems del catálogo (Product List Page), listando los 6 productos existentes en la API de la empresa más un *action button* para agregar a carrito (Los productos sin stock tienen deshabilitada la acción).
* La segunda es la vista del detalle de cada ítem de la primera página, que se accede haciendo click ya sea en la marca o nombre del producto y como información adicional la descripción del ítem,  que no se encuentra en la primera vista.
* La tercera vista es la del carrito de compras, se detalla adicionalmente cantidad agregada por el usuario, el total a pagar y un *action button* para remover el ítem del carrito.

La cantidad agregada por el usuario puede superar el stock disponible porque la validación de la cantidad se haría al momento de pagar el carrito, ya que supera los requerimientos de la prueba, se tratará como un caso límite.:dizzy:

## Puntos claves:surfer:

**Consumir API:fork_and_knife:**:  Crear hook con useState y useEffect para guardar data. De esta manera, crear un componente reutilizable que se ocupa sólo como la función  `useFetchDataProducts()`  en los diferentes componentes sin crear código repetitivo. 
**Mostrar un único producto:anchor:**: Usar hook useParams() propio de react-router para acceder al id esperado y junto con el hook anterior,  acceder a la data de un único archivo desde servidor.
**Carrito de compras - data:airplane:**: Guardar data en localStorage después del evento `onClick` que se genera desde el botón *add item to cart* de tarjeta de productos, crear un handler para obtenerlo como objeto con `JSON.parse` y mostrarlo en interfaz.
**Carrito de compras - remover:heavy_minus_sign:**: Crear handler para acceder a la data anteriormente guardada y filtrar fuera ids que coinciden para removerlo desde el objeto.
**Carrito de comprar - añadir:heavy_plus_sign:**: Crear handler para acceder a la data y manipular como array para añadir productos según sean agregados.
**Mini carrito:honeybee:**:  Utilizar hook de useState para definir el estado inicial y crear función setter para que aumente el número de productos conforme sean añadidos. También se utiliza hook useEffect para que no se pierdan al refrescar la página principal.
# Challenge Amigo Secreto
<img width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/89e7adb5-bdba-4db0-848e-339b9b0e8206" />

Este es un challenge que forma parte de mi formación del programa <b>Oracle One Next Education</b>

## Requisitos del Challenge:

 1. Introducir nombres de amigos
 2. Debe detectar errores al introducir valores nulos
 3. El juego debe mostrar la lista de amigos
 4. El juego debe sortear un nombre al azar

## Funciones extras añadidas por mi

  1. Todo el codigo tiene explicación de que sucede en cada linea
  2. Un cuadro de texto, donde da un feedback de lo que esta pasando en el juego, para que el usuario sepa
     - Si hay un error un texto en rojo saldra, por ejemplo al no escribir un nombre y pulsar añadir
       -   <img width="549" height="51" alt="image" src="https://github.com/user-attachments/assets/7e669d3f-67f4-4df6-a190-88bb421fc5fb" />
     - Al intentar sortear sin amigos
       - <img width="420" height="53" alt="image" src="https://github.com/user-attachments/assets/d9241c53-13bb-40e4-91bb-a648fa139b92" />
     - Al intentar sortear con 1 solo amigo
       - <img width="464" height="53" alt="image" src="https://github.com/user-attachments/assets/4f1201b9-2407-4cdd-8bae-f746bfeedb05" />
     - Al intentar agregar un nombre que ya este en la lista
       - <img width="488" height="54" alt="image" src="https://github.com/user-attachments/assets/2bd1424d-840d-4f11-b0fa-81f00c28d136" />
  3. Al sortear los nombres, el cuadro de descripcion tendra letra verde e indicara el nombre
      - Los botones de añadir y sortear se deshabilitaran para evitar fallos y mejorar la experiencia
        - <img width="993" height="190" alt="image" src="https://github.com/user-attachments/assets/f8f640b7-58bf-490c-8854-4caabf0ef5af" />
  4. Agregue un boton de reiniciar lista para que siempre este a la mano, al presionarlo devuelve todos los valores de fabrica
     - <img width="469" height="103" alt="image" src="https://github.com/user-attachments/assets/3beb4d27-940b-42e5-8e28-c26320ed48b6" />
  5. Para mejorar la experiencia de usuario agregué más imagenes para hacerlo mas interactivo y de acuerdo a lo que este pasando
     - Agregue 2 imagenes escribiendo para que se vea que hay movimiento cada que se agrega un nombre
       - <img width="240" height="220" alt="image" src="https://github.com/user-attachments/assets/282e3931-ee39-4d7a-8bd9-f0e045f84d2c" /><img width="240" height="220" alt="image" src="https://github.com/user-attachments/assets/935eca70-20be-4dc5-beef-f6dd84f70128" />
     - 1 Imagen de error
       - <img width="200" height="220" alt="image" src="https://github.com/user-attachments/assets/53401b89-5eaf-4cab-a3fc-c90c46e3d136" />
     - 1 Imagen final, para el sorteo festejando
       - <img width="250" height="210" alt="image" src="https://github.com/user-attachments/assets/385a8c84-8ebd-44fa-a445-79de495cd0d1" />


### Nota adicional 
En la función `mostrarListaAmigos()` al final deje una linea comentada demostrando una manera mas sencilla y directa de como hacerlo en una sola linea, pero por temas de que el challenge requeria el uso de un ciclo for, lo hice tal cual

# Cplex

## ⚒️ Prerrequisitos

- NodeJs (>= v16)
- Java

## 📦 Que se incluye

Codigo fuente del programa, con la siguiente estructura de directorios:

- 📁 dist (Programa principal)
- 📁 gen (archivos de configuracion)
- 📁 lang (Definicion de la gramatica)
- 📁 lexer (Conjunto de simbolos del lenguaje)
- 📁 node_modules (Dependencias)
- 📁 parser (Logica para implementacion del parser)
- 📁 samples (Programas de ejemplo en c para probar)
- 📁 syntax (Conjunto de producciones de la gramatica)
- 📝 index.ts (Punto de entrada del programa)

## 🎯 Ejecución del proyecto

1. Colocarse en el directorio raiz de cplex
2. Instalar los `node_modules` con `npm install`
2. Colocar un archivo de pruebas en la carpeta 📁 samples
3. Digitar el comando `node dist/index.js <file.c>`: esto ejecutará el programa del parser con el archivo de codigo c el cual será analizado.
4. Se mostrará en consola lo realizado por el parser
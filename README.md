# manos-que-ayudan

This template should help get you started developing with Vue 3 in Vite.


# Inicializar el proyecto
Como primer punto me decidi a escoger un instalador de paquetes, en mi caso
utilice (pnpm) ya que este es ligero y rápido y no instala dependencias
innecesarias al proyecto, para ello utiliza enlaces, ya que si 2 dependencias
o más son compatibles entre si, entonces (pnpm) crea un enlace entre ellas 
para asi evitar el sobrecargo de dependencias innecesarias.

1. pnpm create @vue/latest

Una vez creado el proyecto con vue y vite el siguiente paso fue agregar el
framework de Quasar ya que este contiene un extensa libreria de componentes
customizables, reutilizables y su web provee la documentación suficiente para
trabajar con estos.

Agrego quasar a las dependencias del proyecto
2. pnpm add quasar

Instalo la dependencia de manera global para que sea accesible en todo el proyecto
3. pnpm add -D @quasar/vite-plugin

Para hacer uso de quasar dentro del proyecto es necesario hacer ciertas modificaciones
en los archivos "vite.config.js" y "main.js", es importante hacer las siguientes importaciones
    main.js
    import { Quasar } from 'quasar'
    import quasarLang from 'quasar/lang/en-US' ---> Esta es opcional
    import 'quasar/src/css/index.sass'

Y para el la configuración del archivo vite.config.js es necesario importar
    import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

Se puede notar que estamos haciendo la importación de un archivo sass en el archivo main.js
para lo cual debemos de agregar e instalar sass a nuestras dependencias del proyecto
4. pnpm add -D sass

Pero esto no es todo ya que en mi caso al hacer las configuraciones e importaciones por los 
siguientes motivos no estaba renderizando los componentes de quasar
    La ruta 'src/quasar-variables.sass' no era válida desde la perspectiva del compilador Sass.

Para lo cual la solución fue la siguiente
    import { fileURLToPath } from 'node:url'
    import { dirname, resolve } from 'node:path'
    const __dirname = dirname(fileURLToPath(import.meta.url))
    quasar({sassVariables: resolve(__dirname, 'src/quasar-variables.sass')})

Esto genera una ruta absoluta en tu sistema de archivos como:
    C:/Users/mi_user/folder/project-name/src/quasar-variables.sass


Y por ultimo lo que hice fue cambiarle la extensión al archivo quasar-variables.sass por: 
    quasar-variables.scss 

Y hacerle la siguiente importación:
    @import 'quasar/src/css/variables.sass';


## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
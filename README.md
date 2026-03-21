# DG Inventory

Una aplicación de inventario construida con NestJS, Prisma y PostgreSQL.

## Descripción

Este proyecto es una API RESTful para gestionar inventarios, utilizando NestJS como framework principal, Prisma como ORM para interactuar con la base de datos PostgreSQL.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/) (gestor de paquetes)
- [PostgreSQL](https://www.postgresql.org/) (base de datos)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd dg-inventory
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

## Configuración de la Base de Datos

1. Asegúrate de que PostgreSQL esté ejecutándose en tu máquina local o configura una instancia remota.

2. Crea un archivo `.env` en la raíz del proyecto con la URL de conexión a la base de datos:
   ```
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_datos"
   ```
   Reemplaza `usuario`, `contraseña` y `nombre_base_datos` con tus credenciales de PostgreSQL.

3. Genera el cliente de Prisma:
   ```bash
   npx prisma generate
   ```

4. Ejecuta las migraciones para crear las tablas en la base de datos:
   ```bash
   npx prisma migrate dev
   ```

5. (Opcional) Siembra la base de datos con datos iniciales:
   ```bash
   npx prisma db seed
   ```

## Ejecutar la Aplicación

```bash
# Modo desarrollo (con watch)
pnpm run start:dev

# Modo producción
pnpm run start:prod

# Modo debug
pnpm run start:debug
```

La aplicación estará disponible en `http://localhost:3000`.

## Ejecutar Pruebas

```bash
# Pruebas unitarias
pnpm run test

# Pruebas e2e
pnpm run test:e2e

# Cobertura de pruebas
pnpm run test:cov
```

## Construir para Producción

```bash
pnpm run build
```

Los archivos compilados estarán en el directorio `dist/`.

## Linting y Formateo

```bash
# Ejecutar ESLint
pnpm run lint

# Formatear código con Prettier
pnpm run format
```

## Despliegue

Para desplegar la aplicación en producción, consulta la [documentación de despliegue de NestJS](https://docs.nestjs.com/deployment).

Asegúrate de configurar las variables de entorno correctamente en tu entorno de producción.

## Recursos Adicionales

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Guía de PostgreSQL](https://www.postgresql.org/docs/)

## Licencia

Este proyecto está bajo la licencia UNLICENSED.

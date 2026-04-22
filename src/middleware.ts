import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // 1. NORMALIZACIÓN DE DIAGONALES (Trailing Slash)
  // Si la URL no termina en / y no es un archivo (como un .png), forzamos la diagonal.
  if (!pathname.endsWith('/') && !pathname.includes('.')) {
    return context.redirect(`${pathname}/`, 301);
  }

  // 2. PROTECCIÓN DE RUTAS DINÁMICAS
  // Si el usuario intenta entrar a algo que Astro cree que es un país [pais]
  // pero en realidad es una carpeta física (como /masdestinos/), 
  // Astro priorizará la carpeta automáticamente gracias a la normalización anterior.

  return next();
});

// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    const pathname = url.pathname;

    // Si no tiene diagonal final y no es un archivo estático, forzamos la redirección
    if (!pathname.endsWith('/') && !pathname.includes('.')) {
        return context.redirect(`${pathname}/`, 301);
    }

    return next();
});

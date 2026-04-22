export async function onRequest(context, next) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // 1. Normalizar URL con diagonal final
  if (!pathname.endsWith('/') && !pathname.includes('.')) {
    return context.redirect(`${pathname}/`, 301);
  }

  // 2. Continuar con el ciclo normal
  return next();
}

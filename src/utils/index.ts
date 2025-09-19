


// export function createPageUrl(pageName: string) {
//     return '/' + pageName.toLowerCase().replace(/ /g, '-');
// }
export function createPageUrl(pageName: string) {
    
  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // '/' in dev, '/5am.earth' in prod
  const slug = pageName.toLowerCase().replace(/\s+/g, '-');  // "Admin Page" -> "admin-page"
  // Treat homepage specially: return the base root
  const path = slug === 'homepage' ? '' : `/${slug}`;
  return `${base}${path || '/'}`;
}
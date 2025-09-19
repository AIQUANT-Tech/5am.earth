


// export function createPageUrl(pageName: string) {
//     return '/' + pageName.toLowerCase().replace(/ /g, '-');
// }
// src/utils/index.js

// src/utils/index.js
export function routePath(pageName) {
  const slug = pageName.toLowerCase().replace(/\s+/g, '-');
  return slug === 'homepage' ? '/' : `/${slug}`;       // '/about', '/contact', ...
}

export function absoluteUrl(pageName) {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // '/5am.earth'
  return `${base}${routePath(pageName)}`;                    // '/5am.earth/about'
}


export function createPageUrl(pageName) {
  console.log('Base URL:', import.meta.env.BASE_URL);
  console.log('Page Name:', pageName);

  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // '/' in dev, '/5am.earth/' in prod (no trailing slash)
  const slug = pageName.toLowerCase().replace(/\s+/g, '-');  // "Admin Page" -> "admin-page"
  const path = slug === 'homepage' ? '' : `/${slug}`;
  console.log(`${base}${path || '/'}`)
  return `${base}${path || '/'}`;
}

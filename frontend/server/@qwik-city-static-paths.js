const staticPaths = new Set(["/","/favicon.svg","/login/","/manifest.json","/profile/","/q-manifest.json","/register/","/robots.txt","/service-worker.js","/sitemap.xml","/wish/"]);
function isStaticPath(p) {
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };
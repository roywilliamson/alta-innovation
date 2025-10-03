import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_DUhJSJtz.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_tJuYBLJ5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/","cacheDir":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/node_modules/.astro/","outDir":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/dist/","srcDir":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/src/","publicDir":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/public/","buildClientDir":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/dist/client/","buildServerDir":"file:///Users/willjackson/Documents/Work/roywilliamson/astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.J6qItHx-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/willjackson/Documents/Work/roywilliamson/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/willjackson/Documents/Work/roywilliamson/astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CGP2mN6E.mjs","\u0000@astrojs-manifest":"manifest_CNTh7Uj5.mjs","/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/WavyBackground.tsx":"_astro/WavyBackground.DvQiKSTY.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.CB87l6Bp.js","/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.x6zp6IkH.js","/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Whitepapers.astro?astro&type=script&index=0&lang.ts":"_astro/Whitepapers.astro_astro_type_script_index_0_lang.DFCqDE5L.js","/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/ContactModal.astro?astro&type=script&index=0&lang.ts":"_astro/ContactModal.astro_astro_type_script_index_0_lang.CFldDOvQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"mobile-menu-button\"),s=document.getElementById(\"mobile-menu\"),o=document.getElementById(\"menu-icon\"),n=document.getElementById(\"close-icon\");let e=!1;i?.addEventListener(\"click\",()=>{e=!e,e?(s?.classList.remove(\"hidden\"),o?.classList.add(\"hidden\"),n?.classList.remove(\"hidden\")):(s?.classList.add(\"hidden\"),o?.classList.remove(\"hidden\"),n?.classList.add(\"hidden\"))});const a=document.querySelectorAll(\"[data-scroll-to]\");a.forEach(l=>{l.addEventListener(\"click\",c=>{const t=c.target.getAttribute(\"data-scroll-to\");if(t){if(t===\"top\")window.scrollTo({top:0,behavior:\"smooth\"});else{const d=document.getElementById(t);d&&d.scrollIntoView({behavior:\"smooth\"})}e&&(e=!1,s?.classList.add(\"hidden\"),o?.classList.remove(\"hidden\"),n?.classList.add(\"hidden\"))}})});"],["/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const l=document.querySelectorAll(\"[data-scroll-to]\");l.forEach(o=>{o.addEventListener(\"click\",c=>{const t=c.target.getAttribute(\"data-scroll-to\");if(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:\"smooth\"})}})});"],["/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Whitepapers.astro?astro&type=script&index=0&lang.ts","const n=document.querySelectorAll(\".download-btn\");n.forEach(t=>{t.addEventListener(\"click\",e=>{const o=e.target.getAttribute(\"data-title\");o&&(console.log(`Downloading: ${o}`),alert(`Download initiated for: ${o}`))})});const l=document.querySelector('[data-scroll-to=\"contact\"]');l?.addEventListener(\"click\",()=>{const t=document.getElementById(\"contact\");t&&t.scrollIntoView({behavior:\"smooth\"})});"],["/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/ContactModal.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"contact-modal\"),y=document.getElementById(\"close-modal\"),h=document.getElementById(\"modal-cancel-btn\"),d=document.getElementById(\"modal-contact-form\"),m=document.getElementById(\"modal-submit-btn\"),l=document.getElementById(\"modal-submit-text\"),r=document.getElementById(\"modal-submit-icon\"),u=document.getElementById(\"modal-loading-icon\"),t=document.getElementById(\"modal-form-message\"),a=document.getElementById(\"modal-success-message\"),o=document.getElementById(\"modal-error-message\"),L=document.getElementById(\"modal-success-text\"),g=document.getElementById(\"modal-error-text\");function E(){s.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\";const e=document.getElementById(\"modal-name\");setTimeout(()=>e?.focus(),100)}function n(){s.classList.add(\"hidden\"),document.body.style.overflow=\"\",d.reset(),t.classList.add(\"hidden\"),a.classList.add(\"hidden\"),o.classList.add(\"hidden\")}y.addEventListener(\"click\",n);h.addEventListener(\"click\",n);s.addEventListener(\"click\",e=>{e.target===s&&n()});document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&!s.classList.contains(\"hidden\")&&n()});d.addEventListener(\"submit\",async e=>{e.preventDefault(),m.disabled=!0,l.textContent=\"Sending...\",r.classList.add(\"hidden\"),u.classList.remove(\"hidden\"),t.classList.add(\"hidden\"),a.classList.add(\"hidden\"),o.classList.add(\"hidden\");try{const i=new FormData(d),c=await(await fetch(\"/api/contact\",{method:\"POST\",body:i})).json();c.success?(L.textContent=c.message,a.classList.remove(\"hidden\"),t.classList.remove(\"hidden\"),d.reset(),setTimeout(()=>{n()},2e3)):(g.textContent=c.error,o.classList.remove(\"hidden\"),t.classList.remove(\"hidden\"))}catch{g.textContent=\"Network error. Please check your connection and try again.\",o.classList.remove(\"hidden\"),t.classList.remove(\"hidden\")}finally{m.disabled=!1,l.textContent=\"Send Message\",r.classList.remove(\"hidden\"),u.classList.add(\"hidden\")}});window.openContactModal=E;"]],"assets":["/_astro/index.J6qItHx-.css","/favicon.svg","/robots.txt","/sitemap.xml","/images/alta-innovation-logo.png","/images/clients_section.jpg","/images/entire_page.png","/images/expertise_section.jpg","/images/hero_section.jpg","/images/insights_section.jpg","/images/lets-discuss-section.jpg","/images/navigation_section.jpg","/images/services_section.jpg","/images/strategic_section.jpg","/_astro/WavyBackground.DvQiKSTY.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/images/clients/alstom-logo.png","/images/clients/apc-logo.png","/images/clients/clt-logo.png","/images/clients/hawtal-whiting-logo.png","/images/clients/iop-logo.png","/images/clients/lowcvp-logo.png","/images/clients/pa-consulting-logo.png","/images/clients/seeda-logo.png","/images/clients/ttp-logo.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"6Rq18p3x6OyvwPKQzetmpjkxMN5Ii3/TfMYAe7jG7as="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

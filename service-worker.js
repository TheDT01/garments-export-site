const CACHE = "ge-static-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/css/base.css",
  "/css/layout.css",
  "/css/components.css",
  "/css/theme-light.css",
  "/css/animations.css",
  "/css/utilities.css",
  "/pages/home.html",
];
self.addEventListener("install", (e) =>
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)))
);
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(
      (res) =>
        res ||
        fetch(e.request)
          .then((r) => {
            const copy = r.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
            return r;
          })
          .catch(() => caches.match("/pages/home.html"))
    )
  );
});

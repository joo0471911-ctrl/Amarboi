/* Offline cache for the kids learning page.
   Cache-first: once visited online, everything works without internet. */
const CACHE = "kids-learning-v7";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(CORE.map((u) => c.add(u).catch(() => {})));
    try {
      const list = await (await fetch("tools/sounds_list.json")).json();
      // add one by one so a missing mp3 never breaks the install
      await Promise.all(list.map((x) =>
        c.add("audio/" + encodeURIComponent(x.id) + ".mp3").catch(() => {})));
    } catch (err) {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cached = await caches.match(e.request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(e.request);
      if (res && res.ok) (await caches.open(CACHE)).put(e.request, res.clone());
      return res;
    } catch (err) {
      if (e.request.mode === "navigate") return (await caches.match("index.html")) || Response.error();
      return Response.error();
    }
  })());
});

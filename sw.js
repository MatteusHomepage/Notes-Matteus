const CACHE_NAME = "notes-v1"

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./README.md",
  "./package.json",
  "./server.js",
  "./sw.js"
]

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  )
})

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  )
})

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  )
})

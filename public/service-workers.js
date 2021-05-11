const FILES_TO_CACHE = [
    "/",
    "/db.js",
    "/index.html",
    "/index.js",
    "manifest.webmanifest",
    "service-workers.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "styles.css"
]

const CACHE_NAME = "static-cache-v1"
const DATA_CACHE_NAME = "data-cache-v1"

// install
self.oninstall = function() {
    caches.open('static-cache-v1').then(function(cache) {
        cache.addAll(FILES_TO_CACHE)
        })
    }

// activate
self.onactivate = function(event) {
    console.log("It's activated")
}
// fetch

// self.onfetch = fuction(event) {
//     event.respondWith(
//         caches.match(event.)
//     )
// }
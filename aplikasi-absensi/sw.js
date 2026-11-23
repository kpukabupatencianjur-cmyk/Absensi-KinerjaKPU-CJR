/* Service worker aplikasi Absensi KPU Cianjur.
 * Hanya menyimpan "kulit" aplikasi (halaman pembuka & ikon). Data absensi
 * TIDAK pernah disimpan di HP/PC; semuanya tetap langsung ke Apps Script. */
const VERSI = 'absensi-kpu-v1';
const FILE_KULIT = [
  './', './index.html', './config.js', './manifest.webmanifest',
  './ikon/ikon-192.png', './ikon/ikon-512.png', './ikon/apple-touch-icon.png', './ikon/favicon-32.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSI).then(function (c) { return c.addAll(FILE_KULIT); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSI; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// File milik aplikasi ini: ambil versi terbaru dari internet, pakai simpanan jika offline.
// Permintaan ke Google (Apps Script) tidak disentuh sama sekali.
self.addEventListener('fetch', function (e) {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      const salinan = res.clone();
      caches.open(VERSI).then(function (c) { c.put(e.request, salinan); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (r) { return r || caches.match('./index.html'); });
    })
  );
});

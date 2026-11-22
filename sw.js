// ｱﾌﾟﾘとして入れるための最小の service worker (ｷｬｯｼｭはしない。常にﾈｯﾄの最新を使う)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});

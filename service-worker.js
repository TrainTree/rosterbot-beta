'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:f9322e4dbdfa6183f2bc5c6a617ad9a7dcd25f6db9ba407068bc5629510a926d","manifestFormat":2,"cacheName":"rosterbot-app-f9322e4dbdfa6183f2bc5c6a617ad9a7dcd25f6db9ba407068bc5629510a926d","completeBuildMarker":"rosterbot-complete-f9322e4dbdfa6183f2bc5c6a617ad9a7dcd25f6db9ba407068bc5629510a926d","markerPath":".rosterbot/complete/f9322e4dbdfa6183f2bc5c6a617ad9a7dcd25f6db9ba407068bc5629510a926d.json","offlineSetDigest":"9e11ea2afe72d5c5bd1d0d5ecc122ae914a2786348a117bd3edbbec339469585","required":[{"url":"index.html","sha256":"da2c611ee6fe0f76312e5eecdc8532383c89d723020b4efc285a25d6557b65eb","bytes":201974,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"41368d53e05cf1af9abf58e3c53306d5ab9cbba65e4ecfb4e4e3c75067e6ccd6","bytes":258668,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"97f83f25cbbd9181e2367262266aa44b07cac36dcf16066477a71fe0d302291d","bytes":5973,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"a0159144df45cdd3041f79570eafd05260ceb26d232502290a367f9a96d187b0","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"d24ffb98fb4fb35449d93d0d7811f638f98f4d25dedb34c9bec080f4600ff159","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"c8726a1a0d003de299912c5198683f3bb5997d8424d4a56b1b8ec14a2d6268ce","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"0e3bf71dc4b065cde6f672826e66a9b64e7998a5730d7c1f6509d414b06e77cd","bytes":22950,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"c210191e33d7c40a9dc4c1681f680880d96e0d0f13b73a2ae4a3d4c7bc96f8de","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"29a415bb9988d0e9a87908637173ec85d9ba7749fe6a270b4734e35b6ccb9866","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"6b071dab19394ecd720f26e7bd12dd6cd5e3ea255ec486cb879a6fcb5a3a98a4","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"a3d11c3d5deb272210ebdc011dd1d542770e5fc87d360ab900993207eed9a51f","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"51be05a9a03daafe5e6f6fb233d7202fb4497af000a5699f8d0433eed0ea5759","bytes":49894,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"065cb3cbd7bcad461307ef585fecaa0fd83f66a3a4e580dc7a7ae32c71493834","bytes":25686,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"ea3deb850f204a23d4258afbb55a4574c80612f89ed20d0b6216f740b0468b40","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"92bbe354cd3278365a53511f63da09dd0ee72eb1b358c70e17be2147a72b2145","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"dcf5659e7cf4fa2871ffc6abfd49aaf7719c41ecb1d2e5eabffba34e2dc70496","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"79a002a935d4073e54fdbe1ea04ffbadf2f61eb1cd1e49fc2b725c22903b0fb3","bytes":5917,"type":"text/javascript"},{"url":"js/32-dialog-controller.js","sha256":"80052c8d79f199d90724314236a5cadba238e3647924d70ca82a5f70503504eb","bytes":5507,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"f3242bb92523f44b8bdbd0c50dbfb2e7f86988e8334cbc96a7c7b7abfe458e68","bytes":15023,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"1dcef061c811f2d932ec6dfc7cfe88d82bee8905b784efc366243dbb0623a90d","bytes":113502,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"7665074e9df6cb78f30e7df6ac1425f0d6b53409aaac710bfb1ddacd42acc8b9","bytes":4940,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"54f22eb323a11fd027034d380230c61226f8c4e45c31525bc1846f940c251432","bytes":824,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"d4646eefdaa5cb9a9066741ea57ee94699b53f9d8dc4815d45c4917dd1d1eb66","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"d5e362c5213788d0bebf14331c80175d74075b0f0cdd564904f4f06572334acd","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"9d569a03192869648088b2b761eced7ccf41b287e5d0bee555df367d58f84dd1","bytes":76258,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"fee4926bd620aefdf3195c4a8c920733327b326629951caa8dc4b728130143f0","bytes":17552,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"caa8c657355b7364d5a8c9adfdc5202756308e024f1760cf2dd996111e0ee49c","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"36ec304df30fc5b661191d435acc51bb49489a86037f406d5bfb79261e13e664","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"74b6f1ba400001130e5d48fb075a5e45a3229b9623f61793cb6a0195a00280e6","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"3885b3be882abb5663601b99ba822e0b6e74303977f892a04a3a072ca106b454","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"113e033df3db6f60e83cceb36000fe5b269574cfcb3360fbbe045400913befd7","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"a9bf8df9e074c7957a87faf131a6facfd1fa8945c172ec5999126ad6d9a6fc22","bytes":128739,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"4b55010bbeb4fd0e2b095d0e0ada12ebc4ce88a15606d9036bf0918d61221c4a","bytes":43369,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"fb7a2eb07950c2eac4fbc0834ebc7aa4741d3ff4cbd042d6edd58f6d157d4aed","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"35ad72a471ff584a71ffcbfc6fda22b6c891993d0a5fb0d95f11d2b93b686933","bytes":4751,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"cb9c0bc957250f283d29855c0847f538bdea14d60457facae64c4352e2f26ed4","bytes":57968,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"57e70abb5e96f84395ded43ac55363d02ef6ccbc25d2ea4aac08039134f3f95e","bytes":24362,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"5d6b3ae2245ccd35c2a6ed4485dc04754fcbf167ae5227046877990975a421e2","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"41f90909103ff6a1575d1ef8167484703ffe66858b9756c0ae280f80044d8077","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"66f738362afd6a1ba483026e6fe4ca8a85097bc8f8ca2b9908dad7b992b85e25","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
for(const key of ['required','cosmetic']){for(const asset of BUILD[key])Object.freeze(asset);Object.freeze(BUILD[key])}Object.freeze(BUILD);
const CACHE_PREFIX='rosterbot-app-',assetByPath=new Map();let lifecycle='parsed',lastFailure=null;

function absoluteUrl(relative){return new URL(relative,self.registration.scope).href}
function markerUrl(){return absoluteUrl(BUILD.markerPath)}
function activationUrl(){return absoluteUrl('.rosterbot/update/'+BUILD.buildId.slice('rb-build:'.length)+'.json')}
for(const asset of [...BUILD.required,...BUILD.cosmetic])assetByPath.set(new URL(asset.url,self.registration.scope).pathname,asset);
function safeFailure(error){return String(error?.name||error?.code||'offline-shell-failure').slice(0,80)}
async function digestHex(buffer){const digest=await crypto.subtle.digest('SHA-256',buffer);return [...new Uint8Array(digest)].map(byte=>byte.toString(16).padStart(2,'0')).join('')}
async function validateResponse(asset,response){
  if(!response||!response.ok||response.type==='opaque')throw new Error('OFFLINE_ASSET_HTTP_'+asset.url);
  const bytes=await response.clone().arrayBuffer();
  if(bytes.byteLength!==asset.bytes)throw new Error('OFFLINE_ASSET_SIZE_'+asset.url);
  if(await digestHex(bytes)!==asset.sha256)throw new Error('OFFLINE_ASSET_HASH_'+asset.url);
  return true;
}
async function fetchValidated(asset){
  const request=new Request(absoluteUrl(asset.url),{method:'GET',credentials:'same-origin',cache:'reload',redirect:'error'}),response=await fetch(request);
  await validateResponse(asset,response);return response;
}
function exactMarker(marker){return marker&&marker.format==='rosterbot-complete-build'&&marker.manifestFormat===BUILD.manifestFormat&&marker.buildId===BUILD.buildId&&marker.cacheName===BUILD.cacheName&&marker.completeBuildMarker===BUILD.completeBuildMarker&&marker.offlineSetDigest===BUILD.offlineSetDigest&&marker.requiredCount===BUILD.required.length}
async function readExactMarker(cache){try{const response=await cache.match(markerUrl());if(!response?.ok)return null;const marker=await response.json();return exactMarker(marker)?marker:null}catch(_){return null}}
async function installBuild(){
  lifecycle='installing';lastFailure=null;
  const priorNames=await caches.keys(),priorMarker=priorNames.includes(BUILD.cacheName)?await readExactMarker(await caches.open(BUILD.cacheName)):null;
  if(priorMarker){lifecycle='installed';return}
  const cache=await caches.open(BUILD.cacheName);
  try{
    // Concurrent installers for the same immutable build may safely write the
    // same validated bytes. No installer deletes the shared target cache.
    for(const asset of BUILD.required){const response=await fetchValidated(asset);await cache.put(absoluteUrl(asset.url),response.clone())}
    for(const asset of BUILD.cosmetic){try{const response=await fetchValidated(asset);await cache.put(absoluteUrl(asset.url),response.clone())}catch(_){}}
    const marker={format:'rosterbot-complete-build',manifestFormat:BUILD.manifestFormat,applicationVersion:BUILD.applicationVersion,buildId:BUILD.buildId,cacheName:BUILD.cacheName,completeBuildMarker:BUILD.completeBuildMarker,offlineSetDigest:BUILD.offlineSetDigest,requiredCount:BUILD.required.length,installedAt:Date.now()};
    await cache.put(markerUrl(),new Response(JSON.stringify(marker),{status:200,headers:{'content-type':'application/json','cache-control':'no-store'}}));
    lifecycle='installed';
  }catch(error){lifecycle='failed';lastFailure=safeFailure(error);throw error}
}
async function cleanupCaches(){
  // Phase 3 cannot prove that a cache is unused by every old client or by a
  // concurrently installing worker. Cache retirement is deferred to the
  // coordinated update lifecycle; activation never deletes foreign caches.
  return (await caches.keys()).filter(name=>name.startsWith(CACHE_PREFIX));
}
async function readActivation(){try{const cache=await caches.open(BUILD.cacheName),response=await cache.match(activationUrl());return response?.ok?await response.json():null}catch(_){return null}}
async function writeActivation(value){const cache=await caches.open(BUILD.cacheName);await cache.put(activationUrl(),new Response(JSON.stringify(value),{status:200,headers:{'content-type':'application/json','cache-control':'no-store'}}))}
async function verifiedComplete(){return !!await readExactMarker(await caches.open(BUILD.cacheName))}
async function broadcast(message){const clients=await self.clients.matchAll?.({type:'window',includeUncontrolled:true})||[];for(const client of clients)try{client.postMessage(message)}catch(_){}return clients.length}
async function retireObsoleteCaches(previousBuildId){
  const clients=await self.clients.matchAll?.({type:'window',includeUncontrolled:true})||[];if(clients.length>1)return {removed:[],deferred:'multiple-clients'};
  const complete=[];for(const name of await caches.keys()){if(!name.startsWith(CACHE_PREFIX)||name===BUILD.cacheName)continue;try{const cache=await caches.open(name),request=(await cache.keys()).find(item=>new URL(item.url).pathname.includes('/.rosterbot/complete/'));if(!request)continue;const marker=await (await cache.match(request)).json();if(marker?.format==='rosterbot-complete-build'&&marker.cacheName===name)complete.push(marker)}catch(_){}}
  const previousName=typeof previousBuildId==='string'?CACHE_PREFIX+previousBuildId.slice('rb-build:'.length):null,newest=complete.sort((a,b)=>Number(b.installedAt||0)-Number(a.installedAt||0))[0]?.cacheName,keep=new Set([BUILD.cacheName,previousName,newest].filter(Boolean)),removed=[];
  for(const marker of complete)if(!keep.has(marker.cacheName)&&await caches.delete(marker.cacheName))removed.push(marker.cacheName);
  return {removed,deferred:null};
}
async function activateBuild(){
  lifecycle='activating';const cache=await caches.open(BUILD.cacheName);
  if(!await readExactMarker(cache)){lifecycle='failed';lastFailure='complete-marker-missing';throw new Error('RosterBot active cache is incomplete')}
  await cleanupCaches();lifecycle='active';await self.clients.claim();
}
async function coherentAsset(asset){
  const cache=await caches.open(BUILD.cacheName);
  if(!await readExactMarker(cache))throw new Error('OFFLINE_COMPLETE_MARKER_MISSING');
  const url=absoluteUrl(asset.url),cached=await cache.match(url);
  if(cached){try{await validateResponse(asset,cached);return cached}catch(_){}}
  try{const repaired=await fetchValidated(asset);await cache.put(url,repaired.clone());return repaired}catch(error){throw new Error('OFFLINE_ASSET_UNAVAILABLE_'+asset.url,{cause:error})}
}
function damagedNavigation(error){
  const detail=safeFailure(error),html='<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b5364"><title>RosterBot application files unavailable</title><style>body{margin:0;background:#0b0c0e;color:#f2f4f7;font:16px system-ui;padding:28px}.card{max-width:620px;margin:10vh auto;padding:24px;border:1px solid #36544e;border-radius:16px;background:#131518}code{overflow-wrap:anywhere;color:#a9f3e4}</style><div class="card"><h1>RosterBot application files are unavailable</h1><p>The saved offline app shell is incomplete or damaged. Reconnect to the internet and reopen RosterBot to install one complete version.</p><p>Your roster data has not been changed.</p><code>Build '+BUILD.buildId+' · '+detail+'</code></div></html>';
  return new Response(html,{status:503,headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','x-rosterbot-offline-shell':'damaged'}})
}
function damagedAsset(error){return new Response('RosterBot application asset unavailable: '+safeFailure(error),{status:503,headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store','x-rosterbot-offline-shell':'damaged'}})}
function route(request){
  if(request.method!=='GET')return null;const url=new URL(request.url),scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return null;
  if(request.mode==='navigate')return {asset:assetByPath.get(new URL('index.html',self.registration.scope).pathname),navigation:true};
  const asset=assetByPath.get(url.pathname);return asset?{asset,navigation:false}:null;
}
async function statusMessage(){
  const cache=await caches.open(BUILD.cacheName),cacheComplete=!!await readExactMarker(cache);let reportedLifecycle=lifecycle;
  if(cacheComplete&&reportedLifecycle==='parsed'){
    if(self.registration.active?.scriptURL===self.location.href)reportedLifecycle='active';
    else if(self.registration.waiting?.scriptURL===self.location.href)reportedLifecycle='installed';
    else if(self.registration.installing?.scriptURL===self.location.href)reportedLifecycle='installing';
  }
  return {type:'ROSTERBOT_OFFLINE_STATUS',applicationVersion:BUILD.applicationVersion,buildId:BUILD.buildId,manifestFormat:BUILD.manifestFormat,cacheName:BUILD.cacheName,completeBuildMarker:BUILD.completeBuildMarker,markerPath:BUILD.markerPath,offlineSetDigest:BUILD.offlineSetDigest,offlineRequiredCount:BUILD.required.length,cacheComplete,lifecycle:reportedLifecycle,failure:lastFailure,activation:await readActivation()}
}
async function activationMessage(event){
  const reply=value=>{try{event.ports?.[0]?.postMessage(value)}catch(_){}};
  if(event.data?.buildId!==BUILD.buildId){reply({ok:false,reason:'activation-build-mismatch'});return}
  if(!await verifiedComplete()){reply({ok:false,reason:'activation-complete-marker-invalid'});return}
  const record={format:'rosterbot-update-activation-v1',buildId:BUILD.buildId,fromBuildId:event.data?.fromBuildId||null,requestedAt:Date.now(),provenReady:false};await writeActivation(record);await broadcast({type:'ROSTERBOT_UPDATE_ACTIVATING',buildId:BUILD.buildId,fromBuildId:record.fromBuildId});reply({ok:true,reason:'activation-accepted',buildId:BUILD.buildId});await self.skipWaiting()
}
async function buildReadyMessage(event){
  if(event.data?.buildId!==BUILD.buildId||event.data?.coherent!==true||!await verifiedComplete())return;
  const prior=await readActivation(),record={...(prior||{}),format:'rosterbot-update-activation-v1',buildId:BUILD.buildId,provenReady:true,readyAt:Date.now()};await writeActivation(record);const retirement=await retireObsoleteCaches(record.fromBuildId);await broadcast({type:'ROSTERBOT_UPDATE_READY_PROVEN',buildId:BUILD.buildId,retirement})
}
async function coordinateMessage(event){if(!event.data?.payload||event.data.payload.protocol!=='rosterbot-update-v1')return;await broadcast({type:'ROSTERBOT_UPDATE_COORDINATION',payload:event.data.payload})}

self.addEventListener('install',event=>{event.waitUntil(installBuild())});
self.addEventListener('activate',event=>{event.waitUntil(activateBuild())});
self.addEventListener('fetch',event=>{const target=route(event.request);if(!target)return;event.respondWith(coherentAsset(target.asset).catch(error=>target.navigation?damagedNavigation(error):damagedAsset(error)))});
self.addEventListener('message',event=>{const type=event.data?.type;if(type==='ROSTERBOT_OFFLINE_STATUS'&&event.ports?.[0])event.waitUntil?.(statusMessage().then(value=>event.ports[0].postMessage(value)));else if(type==='ACTIVATE_THIS_COMPLETE_BUILD')event.waitUntil?.(activationMessage(event));else if(type==='ROSTERBOT_BUILD_READY')event.waitUntil?.(buildReadyMessage(event));else if(type==='ROSTERBOT_UPDATE_COORDINATE')event.waitUntil?.(coordinateMessage(event))});
Object.defineProperty(self,'__ROSTERBOT_SERVICE_WORKER_BUILD__',{value:BUILD,writable:false,configurable:false});

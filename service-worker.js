'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:1a884ba53a54ef15fe3acb6ccfa728a0ea760a1f275ce00c3d4d0dedcf74d532","manifestFormat":2,"cacheName":"rosterbot-app-1a884ba53a54ef15fe3acb6ccfa728a0ea760a1f275ce00c3d4d0dedcf74d532","completeBuildMarker":"rosterbot-complete-1a884ba53a54ef15fe3acb6ccfa728a0ea760a1f275ce00c3d4d0dedcf74d532","markerPath":".rosterbot/complete/1a884ba53a54ef15fe3acb6ccfa728a0ea760a1f275ce00c3d4d0dedcf74d532.json","offlineSetDigest":"5ae08d29a6a62dca1a87fbb682bacb440d0f852817a36ced1d941d4f21dca886","required":[{"url":"index.html","sha256":"4de274b0f918ccb3257eee13d5be413caaf197841fa1b28c8187d912143e866e","bytes":191733,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"9b992b625400f8782f181acaba34db938c563c52b978d2507da86594c0b7184d","bytes":251498,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"8f9370409b2b971cd3bdbfd2f1b15f13ffdfc1bceb149c844315f96d8b2cde98","bytes":5973,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"885a8551b66185faaad1f5358fb59e2768c033b196ff58e4b4fb20bb74bb9a6b","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"e37581211d40786a47651dd491f2b18c92bdb70998ce4eca429fd668511ee97d","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"ef3c77f7789f0cbddfd3a08d108da00b4674479ee49065070865f283b595044c","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"a8c29ba8c8e437f9d390875b42434ccd537e5f3b71ccad83673f26cde26291e6","bytes":22950,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"3aed510702e4fee0972eb0cb04be8ba0f5da21d7654ea3ff88b10a536502d487","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"f882174028e14463bf1af3b1eeb71ac30fe33385ca1b55986e6fc00a4f9509fe","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"e4b7d0f51fcd84bfcd9e3b096154894d3e1ceb8e912c3e503451c3a4fbb6c9dd","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"ffd9536aa22256331cf555f448d3d8f66a260006c2e58b8c3c2a738128877efc","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"f291f447cfbe72a94b61608b331ce3e4d2bf08b8181d1626e5700ae01279df4e","bytes":49894,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"c2ae6bfa1c3e0bc319937a1eb9d1f90e73bffb8e972ef591f80e14b8b6fef95d","bytes":25686,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"032a7059bafdf3b39039ddc2780c5f6c64270396f45cafcaeba7dc0b77efedf8","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"f929867ae634b2823001371046f9774b2c850da3bbc5f5a2fafd3c2771dcd306","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"c3599522d5e8c3585350ef3d213d84460b75ecbc41388a430fce2d0668db3d38","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"cfd6d4da4ac2c487fdd32979226e1ebf25e0dfd0258c6b51a96e1900ea120b32","bytes":5917,"type":"text/javascript"},{"url":"js/32-dialog-controller.js","sha256":"620e39815b0c4411a901cdf560a23bbef7080fe981f24e47da315ca53e62551e","bytes":5507,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"d788976c64cdb0979392275044963383ebef8e54fb6eabe2cc3e44707ce02a30","bytes":14373,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"83074758fe0a0165397a8ce3d0a8c3abf5d7f01c4051bb9c1575347628605512","bytes":112209,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"577e7d72036bd5a5d3c59e07c45538c28ba995f91cc27ec54101ac0b01940733","bytes":4940,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"00590da5f571b5c66af6b970f3f6e20ba28a84add16db63bfa491935a641d277","bytes":824,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"2f24a75f77e9299668bd4d0d01283532f241e1d6c146a0dfdca48e3e257056a0","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"9f8a1b9cabfe5ec69d6ef00c5c1a05dfe9f437cd546b1cf09c2270a6e0ab0bc4","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"faa875264b216ec4ecb462ba03aaa2933d2307f2b6f3e1c55b3fc7d45bdcb836","bytes":74526,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"629a4f844a403d1a764a4c4551ba530246be2a4fd8f8373ecf6e23f204f5dff8","bytes":17070,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"b7d74b7774a9d148e8e0a04e57e1b1317d7959556a81281b73665cf592e47949","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"bea7ef9ae707c0cb39861294726f52896446fc0f07c79b5c443b3ca601c37b38","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"5db78a6d77c107094fd273ca672b3aeb063d29fe2d0edb1cf709561631b65fe1","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"e731c0edf217ae47df3ceebaede7605c627e3074120a4eafe5470ca7f7050fa9","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"8266f47585899c804caae8115acdd33463e0fd0ff26416fd4d40eca39f18c72c","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"8ab8c4ba2e998b39664f58ae90c4d7f5ebf5215cff9ce0721deae713de6a4e1e","bytes":128926,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"b7233012512e7cf8373b0406f2b706180b1a5a0116de4a82378a48d9e2bc5c1b","bytes":43369,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"121b32747a8ab26791bb9de7ddc354f436c8b744c5dae9bef4b9c22c98b43315","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"6119ba36eb1d1da58046a54e5880b6a2760b2f83eaff82bd79246d33992c9af9","bytes":4751,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"bf35a441aba21b41250ac0c809093ee88d28d5aafa162d55de3767b0cceff7bd","bytes":46956,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"57f3cbd283b804491fc72b57547cc6ccefb8e4720ba5358df186e51b8675c6bb","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"55da88112a25cc5e01d032f5f465841451d9d12a03332199f42c4a539376f3ea","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"375aa702f463e621f53ca87b75024895f8819606794dfc587941d4c06b8fec7d","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"8d2004188f0b7962422730037d9fe20abd5b01b4ff404760b6b77cfe05d38255","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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

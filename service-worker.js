'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:8578d00808dd5d3143d9a88c339b37341af3f262d56e682fa4318e0b8e4183d3","manifestFormat":2,"cacheName":"rosterbot-app-8578d00808dd5d3143d9a88c339b37341af3f262d56e682fa4318e0b8e4183d3","completeBuildMarker":"rosterbot-complete-8578d00808dd5d3143d9a88c339b37341af3f262d56e682fa4318e0b8e4183d3","markerPath":".rosterbot/complete/8578d00808dd5d3143d9a88c339b37341af3f262d56e682fa4318e0b8e4183d3.json","offlineSetDigest":"19c71e02c1081bf8e9033388afe7d8e6f8b264f26668fb5d38c1ef18e9ffc7d3","required":[{"url":"index.html","sha256":"f147e039993b9f33e701938a7758d71e463bb7800777e2373efe3bceab2912ba","bytes":185815,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"30391ff4f9a09a9d0de763792794f5fe3fa54b01b7a4226dc35ab157391b40c7","bytes":241530,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"c8782604872e3b21e425364a9b3f4a9928d77183990b3743a5e41330ce8335b3","bytes":5973,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"85bdb1626e28e636d93cca6d6b20f397557eb95595ecd76b64fdd69bb5774815","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"e8bb2739a9ccdecd8af264ad9ac528b0891c196c1a4f59c6aad57d41d01d67fd","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"d4e6be35096495e3976a83c37d59cbfea2ba39325267d0e239ec6dc100251100","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"0459b450024cc1786312bc8fc2f5d5eb1f41e450425ce84767b12c527807e117","bytes":22043,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"7bf674b9dad1d42ed3841cc2a304e87c47f3b0c62b9187c58683f24aff719f53","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"cd47a83506267e6d21b854fe55cda82a4aef81bf214659d23b7ff9264c0893bd","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"c833a3920c9e34e23041f9e18a56fd072cde8f4ce7b427012d653689f58ea8aa","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"f11ccbb3c370c862b3aaf08039c5fbc95e4de3fa43d48225d945795627528216","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"89f1933cb42c68b0924c349f8158e030005da06c35c7d91263f163177f440e37","bytes":49894,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"8cbab9a79b6cc34295666848c6794f4140281516e2c359a681205e6b8d129c0c","bytes":25686,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"1397f0fabaaac289b62a0df6e1071facca06d5c3886295d767345584fec0bc10","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"8a98db7518b11ec8c6218a00124469897cfb0d346ed01336351fe267601a173a","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"f6cbbdb726be14afd45a27454837b14d556b238c052be82502f31ce717d09870","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"52b30b4de1c32b4adfe51135c119754593ce8e67eb982f9b84964ff1bd9e7101","bytes":5917,"type":"text/javascript"},{"url":"js/32-dialog-controller.js","sha256":"d5ab9e96b7a954a26427ddfb43385cf7700b5d85be0debd1f827a0ad01c14f2a","bytes":5507,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"7d10d945b3278bb327ef526cc3ba4611094ca615b6ede1d60669d3c4416acd55","bytes":14373,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"43c1dee8d6b56a5cbbd971373bb8b3fed99c82e81cc0b2031fe3ed7fdb0c1eb4","bytes":105006,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"b73c9c4a41cef3aa4e71e93dd39faf69721fb554ad7f0b7db048bdf1965c44c0","bytes":4940,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"65642d9c2fc752ec29796eed6d4c9e6f3b2e82093bc6b4c9ffaddd8440cb1355","bytes":824,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"b97d0b9ba63b04d915964d3c0fc7e2309f3544ab6595083b9fa7860abe9ff9dd","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"09ea654f05793e40191320bc3da9c97f464fb4d8456f543432dfc88e7ec9f141","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"215064923964a4ed544979506026b6bea936345a124bc338da9730047ce3c33a","bytes":74526,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"aeb4ba9b9f4bd32e9fe92f4c71ed031099fe685fd6e00d406bf5080911af0dea","bytes":17070,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"bdfd968a47757c2a3a3b67df2b88b4f7ad476ead588688eb1553c8bd4e2dc473","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"c3279d7d7638f230cec186c6bb4e8a5081d5d9d24487c992f3923873ff646cae","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"790f9c89f4f56b1b26bad529fcdc457cc6746555bfb77bda6fd997970afab954","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"4a094df418698400187f22a560c264792ee752dd37883183893bcb08a52e3fc6","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"37a6ca0dd1172e5a12286cd5a2f63361a0321018d9826a60245c5f8e212423e1","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"5779b3e5c83e4b9479dc6de26061b71b9b4186fdabfb475cd685640f5a818436","bytes":128926,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"f7ae2b9023b17ee82c398b508ad013ce63031d07b21afdc98e27776037404896","bytes":43369,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"a43e641746b9d9ee998315cb511776bb0d7f91e9c12f9b6d1470e044022b0687","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"46f70e87f280474c429a8de720397b2012adda6ef9520c938723f44d132ff02b","bytes":4751,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"e487ae73048f835abe9e76516a091a419a0a23e719259a1fc5c7356c3ca6afa5","bytes":39705,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"4bb5f4161ea03b6b5ab7b7c193f29a9874c554e6b1acc7503c9c9147c531c005","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"a2372ae6f206890376a2c669eb452b924c9a25a00d2a778c65dcf3158c60e21a","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"26c6486693f66c5db55edb07b6857a7a46224ce69d19c876632cf8e00d602236","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"1e77eadb9c6080217a30c1b63ad5d6b740ac00a02ef35d39c005752de285a1ad","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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

'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:9feddda7dde137fd13bb91a1d97ae6509e3f167866f180f41c0c2f8b17e73c87","manifestFormat":2,"cacheName":"rosterbot-app-9feddda7dde137fd13bb91a1d97ae6509e3f167866f180f41c0c2f8b17e73c87","completeBuildMarker":"rosterbot-complete-9feddda7dde137fd13bb91a1d97ae6509e3f167866f180f41c0c2f8b17e73c87","markerPath":".rosterbot/complete/9feddda7dde137fd13bb91a1d97ae6509e3f167866f180f41c0c2f8b17e73c87.json","offlineSetDigest":"4c1fd8a6d72619f9aeff8c2570774304fb9357a3072196bc6552cac6f76755c3","required":[{"url":"index.html","sha256":"37db6b2ce3470ad81b1c5eac0bf09f4ab787a5328d442e2ebde62c810bcaebbe","bytes":181563,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"6fa532aeb6647a00d5c948260020b40b6b712b60c5ae3918da69f1fca29fe89b","bytes":228462,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"a19c9b23aebdacb0096a4f2f694cb554be6a507a5cf17dbcfed3af97fb597772","bytes":5848,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"8f86d53490eac725274e957e46528e9975bb9e203698bdbc60fe6f2f3f0ce309","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"78c8b6e1fe1eb9596b8949ce2221a768bbc2d63bf53fd16e0d7a992b7847a0fc","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"26309869fb81387188bde532742b31cc152d0c3eb468d1bb4760a2e7175ed9d1","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"c7903e979017dfc24072c3a1d0b7d7b4beacd6702c54d8369f2af2721b6260dd","bytes":21883,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"53806153e95c897448233011dc55d0b99c58fb3ce5094d0c79adc11672100396","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"5b3c290cadad0cc825b5f797bed266039a4be3340781c87b01f57432b431a5da","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"51a71f5f2463ffde62d27751eac550f242fd40d0a0bcaf90cc29efe48cd1172e","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"66140d6560ef61028af772d9b70dee444ca9c70c918f297a568f8740150bb7bd","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"349d76880749971debde3633b77e92cb5a727fea1dec3e2a855b99e037a18f67","bytes":42211,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"d259321a9a26d815f634041c33d7a143316316b2479b554054bada5b5a305a43","bytes":24037,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"9174aea31d9053d97135db360484fe93f671d6dcd30a91e4923d0f2054b2e395","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"4d4c31af21f191e4f10f72acd050935c4ace8c7042620053035572c52da73cc8","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"a376a1964e6d9594ddf63f03f2964f1fe8aa206e8dbbe05186e84e5696394b45","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"59d7679be9e04da465f99870dd19b81a0442741a6e6a04845f0b52c3521b6216","bytes":5917,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"5f87a1508cad2b834add052152595a4aa947c889cf147d5b350c0d7124fe1e75","bytes":14406,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"81d2cd6b69b9989b317d6fa72818c15f8685af650b612449d6adc6c26b8d6bb6","bytes":103700,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"70775491f5aa3755e4da9af5a709ba6b1bcfa1854e42fe1661b20003bd9f7915","bytes":5365,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"f373ba2b50fd447052e5ee519f024b4ef2a6c115e1aa9e0a02c8c099b224fa99","bytes":1233,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"52515639835010a7beed44e2b6162a7db2cdf6c0afab852da637ddb0af74cd86","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"3fb13441a1a5ae05b918012c9e28953978f0f6e5b81ce578d37748a0efb9d106","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"0115f440a4fd337997f1c8e372378904a7ca24f44f642c175df7c1578f42dea3","bytes":74282,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"1f79271f456d57e07d68766bdc746cbbf4089a0eb371486b03ea8fd4e1ee342e","bytes":17329,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"3bfd140a1f865fece178019bced9a0ea93f6475c87ca98dae4814472a0471158","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"1820082ce7bd1ce1417b368c0a9de36f2372d1bb3e41b488f77fad54bffbe0d0","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"41dba638c62356618af8c96dbcbc72cfdc04cf3b5f89d135de214729a8c9e5f1","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"7b2b645a6ae4b05f6c22f0bcce8d498366ccc76f1963f94a3a6a56763b0b7e51","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"e9716eea12c43a75676207d0ba2ef653522e20cbf7901e6ea867b882891e195a","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"d41f35d15258ecff21956d95d16fb29b95a4f529f82aafe55b336eb509b01b09","bytes":128926,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"73c09f1dca28631a5d6ef610389a3cfbf97111c6a96de02d9f0a012cb6f06985","bytes":42991,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"d3e09a7c03d1d65ce09bdf33e7bd026d2f41eb34f2b7804fb0e30454917ff4c0","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"59923f79ecd9a868a32a5c2454778a3855d56f8d52eceafa30713c3bca6d7c99","bytes":5012,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"9e5a439cd801ba7e84d8efd65981e45223499a7a4aa584885cbc669d941a8994","bytes":36572,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"70a3a73da387c3d9ee3dadadfdcd38eb6e424ff7fbb6bb15b8bc62e8f691d0c3","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"a80e5f6552c9f01e5d523039a71c3821df628561a25a2e9d4657e0567b60f2b8","bytes":2521,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"5669ccc0e4830f7ee5a11722138db789de07fad46b0d19521409767041011eaf","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"12cdded4b95cc7b03acd5a767438e5d1acc5b88f711a73bb467b283a231251c3","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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

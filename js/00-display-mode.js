try{if(typeof window!=='undefined'&&typeof document!=='undefined')window.__rosterbotRequireBuildComponent('js/00-display-mode.js','rb-build:711f8d539192cb498dbafb997acf0e250906b55393c9b9956c77e47730055392')}catch(error){throw error}
(function(root,factory){
  const api=factory(root);
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)Object.defineProperty(root,'RosterBotDisplayMode',{value:api,writable:false,configurable:false,enumerable:true});
})(typeof window!=='undefined'?window:null,function(root){
  'use strict';
  const listeners=new Set();
  const viewportListeners=new Set();
  let mediaQuery=null,current=null,viewportCurrent=null,viewportFrame=0;

  function detect(environment=root){
    const navigatorObject=environment?.navigator||{};
    if(navigatorObject.standalone===true)return Object.freeze({mode:'standalone',installed:true,source:'ios-navigator'});
    try{
      const query=typeof environment?.matchMedia==='function'?environment.matchMedia('(display-mode: standalone)'):null;
      if(query?.matches)return Object.freeze({mode:'standalone',installed:true,source:'display-mode-media'});
      return Object.freeze({mode:'browser',installed:false,source:query?'display-mode-media':'unsupported'});
    }catch(_){return Object.freeze({mode:'browser',installed:false,source:'unsupported'})}
  }

  function publish(next){
    const changed=!current||current.mode!==next.mode||current.source!==next.source;
    current=next;
    try{
      const documentElement=root?.document?.documentElement;
      if(documentElement){documentElement.dataset.rosterbotDisplayMode=next.mode;documentElement.classList.toggle('rb-standalone',next.installed)}
    }catch(_){}
    if(changed)for(const listener of [...listeners]){try{listener(current)}catch(error){setTimeout(()=>{throw error},0)}}
    return current;
  }

  function refresh(){return publish(detect(root))}
  function getState(){return current||refresh()}
  function subscribe(listener){
    if(typeof listener!=='function')throw new TypeError('RosterBot display-mode listener must be a function.');
    listeners.add(listener);return()=>listeners.delete(listener);
  }

  function measureViewport(environment=root){
    const viewport=environment?.visualViewport;
    const height=Number(viewport?.height);
    if(viewport&&Number.isFinite(height)&&height>0)return Object.freeze({height,source:'visual-viewport'});
    const fallback=Number(environment?.innerHeight);
    return Object.freeze({height:Number.isFinite(fallback)&&fallback>0?fallback:null,source:'layout-viewport'});
  }

  function publishViewport(next){
    const changed=!viewportCurrent||viewportCurrent.height!==next.height||viewportCurrent.source!==next.source;
    viewportCurrent=next;
    try{
      const documentElement=root?.document?.documentElement;
      if(documentElement){
        documentElement.dataset.rosterbotViewportSource=next.source;
        if(next.source==='visual-viewport'&&next.height!==null)documentElement.style.setProperty('--rb-visual-viewport-height',`${next.height}px`);
        else documentElement.style.removeProperty('--rb-visual-viewport-height');
      }
    }catch(_){}
    if(changed)for(const listener of [...viewportListeners]){try{listener(viewportCurrent)}catch(error){setTimeout(()=>{throw error},0)}}
    return viewportCurrent;
  }

  function refreshViewport(){viewportFrame=0;return publishViewport(measureViewport(root))}
  function scheduleViewportRefresh(){
    if(viewportFrame)return;
    const schedule=typeof root?.requestAnimationFrame==='function'?root.requestAnimationFrame.bind(root):(callback)=>setTimeout(callback,0);
    viewportFrame=schedule(refreshViewport);
  }
  function getViewportState(){return viewportCurrent||refreshViewport()}
  function subscribeViewport(listener){
    if(typeof listener!=='function')throw new TypeError('RosterBot viewport listener must be a function.');
    viewportListeners.add(listener);return()=>viewportListeners.delete(listener);
  }

  if(root){
    try{
      mediaQuery=typeof root.matchMedia==='function'?root.matchMedia('(display-mode: standalone)'):null;
      if(typeof mediaQuery?.addEventListener==='function')mediaQuery.addEventListener('change',refresh);
      else if(typeof mediaQuery?.addListener==='function')mediaQuery.addListener(refresh);
    }catch(_){}
    refresh();
    try{
      root.visualViewport?.addEventListener?.('resize',scheduleViewportRefresh,{passive:true});
      root.addEventListener?.('orientationchange',scheduleViewportRefresh,{passive:true});
      root.addEventListener?.('pageshow',scheduleViewportRefresh,{passive:true});
    }catch(_){}
    refreshViewport();
  }

  return Object.freeze({detect,getState,refresh,subscribe,measureViewport,getViewportState,refreshViewport,subscribeViewport});
});

try{if(typeof window!=='undefined'&&typeof document!=='undefined')window.__rosterbotRequireBuildComponent('js/31-changelog.js','rb-build:1a884ba53a54ef15fe3acb6ccfa728a0ea760a1f275ce00c3d4d0dedcf74d532')}catch(error){throw error}
(function () {
  'use strict';
  const modal = document.getElementById('changelogModal');
  const openBtn = document.getElementById('changelogOpenBtn');
  const closeBtn = document.getElementById('changelogCloseBtn');
  if (!modal || !openBtn || !closeBtn) return;

  function openModal() {
    window.RosterBotDialogs.open(modal,{invoker:document.activeElement,initialFocus:closeBtn,onRequestClose:closeModal});
  }
  function closeModal() {
    window.RosterBotDialogs.close(modal);
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
})();

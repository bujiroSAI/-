document.addEventListener('DOMContentLoaded', function() {
  // ヘッダーを読み込む
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      
      // ヘッダー読み込み後に初期化処理
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
      
      // メニュートグル機能を再設定
      const menuToggle = document.querySelector('.menu-toggle');
      const mainNav = document.querySelector('.main-nav');
      
      if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
          mainNav.classList.toggle('active');
        });
      }
    });
  
  // フッターを読み込む
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
      
      // フッター読み込み後に初期化処理
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    });
});

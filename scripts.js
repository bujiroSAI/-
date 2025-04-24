document.addEventListener('DOMContentLoaded', function() {
  // ローディング画面の初期化（トップページのみ）
  const loader = document.getElementById('loading');
  
  // モバイルメニュートグル
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // feather icons初期化
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
  
  // FAQのアコーディオン機能
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // 現在の状態を切り替える
      item.classList.toggle('active');
      
      // 他のアクティブなアイテムを閉じる
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
  
  // ナビゲーションリンクのスムーススクロール
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // 現在のページ内リンクの場合のみスムーススクロールを適用
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href;
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
      
      // スマホメニューが開いていたら閉じる
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }
    });
  });
});

// ローディング画面の設定 - 完全に読み込み完了時に実行
window.addEventListener('load', function() {
  // ローディング処理を実行
  handleLoading();
});

// ローディング処理をまとめた関数
function handleLoading() {
  const loadingScreen = document.getElementById('loading');
  if (!loadingScreen) return;
  
  // ページロード時に全コンテンツを非表示に
  const mainContent = document.querySelectorAll('body > *:not(#loading)');
  mainContent.forEach(function(element) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s ease';
    element.style.visibility = 'hidden';
  });
  
  // ローディングロゴを表示状態に
  loadingScreen.style.opacity = '1';
  loadingScreen.style.visibility = 'visible';
  
  // 正確に2秒後にローディング画面をフェードアウト
  setTimeout(function() {
    // ローディング画面をフェードアウト
    loadingScreen.classList.add('loaded');
    
    // メインコンテンツをフェードイン
    mainContent.forEach(function(element) {
      element.style.visibility = 'visible';
      element.style.opacity = '1';
    });
    
    // ローディング完了後に要素を削除
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500); // 合計で2秒になるよう調整（1.5秒待機 + 0.5秒フェード = 2秒）
} 
// Feather Iconsの初期化
document.addEventListener('DOMContentLoaded', function() {
  feather.replace();
  
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
  
  // メニュートグル機能
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
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

// ローディング画面の設定
window.addEventListener('load', function() {
  // ページコンテンツを最初は非表示に
  const mainContent = document.querySelectorAll('body > *:not(#loading)');
  mainContent.forEach(function(element) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 1s ease';
  });
  
  // ロゴが表示された後、フェードアウト開始と同時にコンテンツをフェードイン
  setTimeout(function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.classList.add('loaded');
    
    // コンテンツをフェードイン
    mainContent.forEach(function(element) {
      element.style.opacity = '1';
    });
    
    // フェードアウト完了後にローディング要素を完全に削除
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 1000);
  }, 2000);
}); 
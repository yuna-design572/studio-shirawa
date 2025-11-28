let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll) {
    document.querySelector("header").classList.add("hide");
  } else {
    document.querySelector("header").classList.remove("hide");
  }

  lastScroll = current;
});

const ham = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

// gallery track
window.addEventListener("load", function () {
  const track = document.getElementById("galleryTrack");
  const items = Array.from(track.children);

  // クローン追加（14枚 → 28枚）
  items.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });

  let position = 0;
  const speed = 0.5; // 動く速さ

  function animate() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    // 幅を正確に取得
    const itemWidth = items[0].getBoundingClientRect().width + 16; // gap 16px 対応
    const fullWidth = itemWidth * items.length;

    // 範囲を超えたらリセット（つなぎ目ゼロ）
    if (Math.abs(position) >= fullWidth) {
      position = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
});

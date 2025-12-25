// Hexo-MC风格交互特效 | 点击页面播放MC方块音效+挖矿粒子 ✦
document.addEventListener('click', function(e) {
    // MC方块点击音效（在线音源，永久有效）
    const clickAudio = new Audio('https://cdn.jsdelivr.net/gh/MCResourcePacks/MC-Sounds/block/stone_click.ogg');
    clickAudio.volume = 0.3;
    clickAudio.play().catch(err => {});
    // 挖矿粒子特效（MC金锭色✦）
    const particle = document.createElement('div');
    particle.style.cssText = `
        position:absolute;left:${e.clientX}px;top:${e.clientY}px;
        color:#f8e917;font-size:14px;pointer-events:none;z-index:9999;
        text-shadow:0 0 5px #f8e917;
    `;
    particle.textContent = '✦';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
});

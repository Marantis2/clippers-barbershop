export function spawnHairs(x: number, y: number) {
  const count = 10;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      const len = 10 + Math.random() * 8;
      const curve = (Math.random() - 0.5) * 6;
      path.setAttribute('d', `M0,0 Q${curve},${len/2} 0,${len}`);
      path.setAttribute('stroke', '#1a1a1a');
      path.setAttribute('stroke-width', '1.2');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('fill', 'none');

      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = (Math.random() - 0.5) * 20;

      svg.appendChild(path);
      svg.style.cssText = `
        position: fixed;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: 20px;
        height: 30px;
        pointer-events: none;
        z-index: 9999;
        transform: rotate(${160 + (Math.random() - 0.5) * 30}deg);
        animation: hairFall ${0.6 + Math.random() * 0.5}s ease-in forwards;
      `;

      document.body.appendChild(svg);
      setTimeout(() => svg.remove(), 1100);
    }, i * 60);
  }
}

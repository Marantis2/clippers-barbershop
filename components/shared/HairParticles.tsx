"use client";

import { useEffect } from "react";
import { spawnHairs } from "@/lib/hairParticles";

export function HairParticles() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => spawnHairs(e.clientX, e.clientY);

    // Create cursor element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line id="blade-top" x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line id="blade-bot" x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>`;
    cursor.style.cssText = `
      position: fixed; pointer-events: none; z-index: 99999;
      transform: translate(-50%, -50%);
      transition: transform 0.05s linear;
    `;
    document.body.appendChild(cursor);

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onClickSnip = () => {
      const top = cursor.querySelector('#blade-top') as SVGLineElement;
      const bot = cursor.querySelector('#blade-bot') as SVGLineElement;
      // Close
      top?.setAttribute('y1', '12'); top?.setAttribute('y2', '12');
      bot?.setAttribute('y1', '12'); bot?.setAttribute('y2', '12');
      // Reopen after 150ms
      setTimeout(() => {
        top?.setAttribute('y1', '4');  top?.setAttribute('y2', '15.88');
        bot?.setAttribute('y1', '14.48'); bot?.setAttribute('y2', '20');
      }, 150);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('click', onClick);
    document.addEventListener('click', onClickSnip);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('click', onClick);
      document.removeEventListener('click', onClickSnip);
      cursor.remove();
    };
  }, []);

  return null;
}

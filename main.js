/*
Det spelar ingen roll om jag lägger koden såhär

gsap.to('.cls-1', { fill: '#e305ab', duration: 1, repeat: -1, yoyo: true});

Eller såhär*/

const o = document.querySelector('#o');
const k = document.querySelector('#k');

gsap.to('o', { fill: '#e305ab', duration: 1, repeat: -1, yoyo: true});
gsap.to('k', { fill: '#e305ab', duration: 1, repeat: -1, yoyo: true});

/*Den funkar i HTML-filen på båda sätten, men inte här. När den liggeri HTML-filen så funkar den i live share och i codepen, men inte på github pages. Det är något grundläggande jag inte förstår.
*/
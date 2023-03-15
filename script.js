let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}

/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;
  
//   for(const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(setTimeout(() => {  
//       animate(star);
      
//       intervals.push(setInterval(() => animate(star), 1000));
//     }, index++ * 300));
//   };
// }

// magic.onmouseleave = onMouseLeave = () => {
//   for(const t of timeouts) clearTimeout(t);  
//   for(const i of intervals) clearInterval(i);
  
//   timeouts = [];
//   intervals = [];
// }

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);

/* -- ⬇️⬇️ Multi-color version ⬇️⬇️ -- */

// const wrapper = document.getElementById("bubble-wrapper");

// let index = 0;

// /* -- Step 1️⃣: Create an "enum" of colors -- */

// const Red = {
//   One: "rgb(239, 83, 80)",
//   Two: "rgb(244, 67, 54)",
//   Three: "rgb(229, 57, 53)",
//   Four: "rgb(211, 47, 47)",
//   Five: "rgb(198, 40, 40)"
// }

// const Green = {
//   One: "rgb(102, 187, 106)",
//   Two: "rgb(76, 175, 80)",
//   Three: "rgb(67, 160, 71)",
//   Four: "rgb(56, 142, 60)",
//   Five: "rgb(46, 125, 50)"
// }

// const Blue = {
//   One: "rgb(66, 165, 245)",
//   Two: "rgb(33, 150, 243)",
//   Three: "rgb(30, 136, 229)",
//   Four: "rgb(25, 118, 210)",
//   Five: "rgb(21, 101, 192)"
// }

// const Color = Red;

// /* -- Step 2️⃣: Pick the order of colors -- */

// const colors = [
//   Color.One, 
//   Color.Two, 
//   Color.Three, 
//   Color.Four, 
//   Color.Five, 
//   Color.Four, 
//   Color.Three, 
//   Color.Two
// ];

// const animateBubble = x => {  
//   const bubble = document.createElement("div");
  
//   bubble.className = "bubble";
//   bubble.style.left = `${x}px`;
    
//   /* -- Step 3️⃣: Cycle through the colors using an index variable and the modulus (%) operator -- */
  
//   bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];
  
//   wrapper.appendChild(bubble);
  
//   setTimeout(() => wrapper.removeChild(bubble), 2000);
// }

// window.onmousemove = e => animateBubble(e.clientX);

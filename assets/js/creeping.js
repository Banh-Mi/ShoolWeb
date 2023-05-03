const title = document.getElementById("titlePage"),
  w = `${title.textContent}`,
  e = `Books Store`;
let c = 0;
setInterval(() => {
  c = c < w.length ? c + 1 : 0;
  title.textContent = w.slice(0, c);
  if (c === w.length) setTimeout(() => (title.textContent += `${e}`), 400);
}, 400);

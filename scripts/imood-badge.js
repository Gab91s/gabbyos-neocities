// imood-badge.js (cache-bust refresh so it updates even if the browser caches)
function refreshImoodBadge() {
  const img = document.getElementById("imood-img");
  const meta = document.getElementById("imood-checked");
  if (!img) return;

  const url = new URL(img.src);
  url.searchParams.set("t", Date.now()); // cache-bust
  img.src = url.toString();

  if (meta) {
    const now = new Date();
    meta.textContent =
     `checked ${now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`;
     // or //      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
}

refreshImoodBadge();
setInterval(refreshImoodBadge, 5 * 60 * 1000);

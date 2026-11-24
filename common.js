// Shared helpers used by all pages. You shouldn't need to edit this.
const _alias = Object.fromEntries(Object.entries(ALIASES).map(([k, v]) => [k.toLowerCase(), v]));
const canon = n => { n = n.trim().replace(/\s+/g, " "); return _alias[n.toLowerCase()] || n; };
const splitNames = s => (s || "").split(/;|,| & | ft\. | feat\. /).map(canon).filter(Boolean);
// track = [title, mainArtist, album, collaborators, note]
const trackPeople = t => [...new Set([...splitNames(t[1]), ...splitNames(t[3])])];
const epPeople = e => { const s = new Set(); e.tracks.forEach(t => trackPeople(t).forEach(p => s.add(p))); s.delete(canon(e.artist)); return [...s]; };
const pad = n => String(n).padStart(3, "0");

// Footer on every page: "Made by ..." on the left, "Contact" (linked to Instagram) on the right.
document.body.insertAdjacentHTML("beforeend",
  `<footer class="site-footer"><span>Made by ${SHOW.author || "Spencer Fekete"}</span><a href="${SHOW.instagram}" target="_blank" rel="noopener">Contact</a></footer>`);

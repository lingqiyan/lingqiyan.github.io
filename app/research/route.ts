import originalSnapshot from "../../source-snapshot/ucsb-original.html?raw";

const SOURCE = "https://sites.cs.ucsb.edu/~lingqi/";

const theme = `
<style id="steam-inspired-redesign">
@font-face {
  font-family: "Barlow Steamlike";
  src: url("/fonts/barlow-medium.ttf") format("truetype");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Barlow Steamlike";
  src: url("/fonts/barlow-medium.ttf") format("truetype");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Barlow Steamlike";
  src: url("/fonts/barlow-medium.ttf") format("truetype");
  font-weight: 600 800; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Barlow Steamlike Display";
  src: url("/fonts/barlow-condensed-light.ttf") format("truetype");
  font-weight: 300; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Barlow Steamlike Display";
  src: url("/fonts/barlow-condensed-medium.ttf") format("truetype");
  font-weight: 500; font-style: normal; font-display: swap;
}
:root {
  --steam-bg: #1b2838;
  --steam-deep: #171d25;
  --steam-panel: #202f42;
  --steam-panel-2: #25384d;
  --steam-text: #d6d7d8;
  --steam-muted: #8f98a0;
  --steam-blue: #66c0f4;
  --steam-cyan: #1a9fff;
  --steam-green: #a4d007;
  color-scheme: dark;
}
html { scroll-behavior: smooth; scroll-padding-top: 56px; }
body {
  margin: 0 !important;
  padding-top: 54px !important;
  color: var(--steam-text) !important;
  background:
    radial-gradient(circle at 15% 0%, rgba(46, 98, 136, .26), transparent 30rem),
    linear-gradient(180deg, #1b2838 0%, #192635 58%, #17202d 100%) fixed !important;
  font-family: "Barlow Steamlike", "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
  font-size: 14px !important;
  line-height: 1.42 !important;
  font-weight: 400;
  font-kerning: normal;
  text-rendering: optimizeLegibility;
}
body::before {
  content: "";
  position: fixed; inset: 0; pointer-events: none; z-index: -1;
  background: linear-gradient(90deg, transparent, rgba(102,192,244,.025) 50%, transparent);
}
.navbar {
  min-height: 54px !important;
  padding: 0 !important;
  background: rgba(23,29,37,.97) !important;
  border-bottom: 1px solid rgba(102,192,244,.18);
  box-shadow: 0 2px 12px rgba(0,0,0,.34);
}
.navbar > .container { min-height: 54px; }
.navbar-brand {
  display: inline-flex; align-items: center; gap: 9px; min-width: 0;
  color: #f5f5f5 !important; font-size: 14px !important; font-weight: 500;
  font-family: "Barlow Steamlike", "Segoe UI", sans-serif !important;
  letter-spacing: -.01em; padding: 15px 0 !important; white-space: nowrap;
}
.navbar-brand::before { display: none; }
.mbzuai-mark {
  display: block; flex: 0 0 30px; width: 30px; height: 30px; padding: 4px; overflow: hidden;
  background: linear-gradient(145deg, rgba(42,71,94,.82), rgba(23,29,37,.96));
  border: 1px solid rgba(102,192,244,.24);
  box-shadow: inset 0 1px rgba(255,255,255,.04), 0 0 10px rgba(26,159,255,.1);
}
.mbzuai-mark img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mbzuai-name {
  display: block; max-width: 380px; overflow: hidden; text-overflow: ellipsis;
  color: #f0f0f0; font-size: 13px; font-weight: 500; letter-spacing: -.012em;
}
.steam-cart {
  order: 3; display: inline-flex; align-items: center; justify-content: center; margin-left: 10px;
  width: 31px; height: 31px; padding: 0; color: #d6d7d8 !important; background: #75a300;
  border: 0; border-radius: 0 !important; font-size: 11px; line-height: 1; cursor: pointer;
}
.steam-cart:hover { color: #fff !important; background: #8ed629; }
.steam-cart svg { width: 16px; height: 16px; fill: currentColor; }
.steam-toast {
  position: fixed; z-index: 1100; top: 61px; right: max(14px, calc((100vw - 1120px) / 2));
  width: min(310px, calc(100vw - 28px)); padding: 14px 16px; color: #fff;
  background: linear-gradient(135deg, #2a475e, #1b2838); border: 1px solid rgba(102,192,244,.35);
  border-top: 2px solid #67c1f5; box-shadow: 0 12px 28px rgba(0,0,0,.55);
  font-size: 13px; opacity: 0; transform: translateY(-8px); pointer-events: none;
  transition: opacity .16s ease, transform .16s ease;
}
.steam-toast.is-visible { opacity: 1; transform: none; }
.role-note-trigger {
  display: inline-block; margin-left: 3px; color: #67c1f5 !important;
  font-size: .92em; font-weight: 700; line-height: 1; text-decoration: none !important;
}
.role-note-trigger:hover, .role-note-trigger:focus { color: #fff !important; }
.publication-note {
  display: inline-block; margin-left: 4px; vertical-align: super;
  font-size: .62em; line-height: 1;
}
.publication-note .role-note-trigger { margin-left: 0; font-size: 1em; }
.program-director-modal .modal-dialog { max-width: 470px; }
.program-director-modal .modal-body { padding: 18px 20px !important; }
.program-director-modal .modal-body h4 { margin: 0 0 8px !important; }
.program-director-modal .modal-body p { margin: 0 !important; line-height: 1.45 !important; }
.navbar-nav .nav-link {
  color: #d6d7d8 !important; font-size: 12px; text-transform: uppercase;
  letter-spacing: .05em; padding: 19px 10px 17px !important;
  border-bottom: 2px solid transparent;
}
.navbar-nav .nav-link:hover, .navbar-nav .active .nav-link {
  color: #fff !important; border-bottom-color: var(--steam-cyan);
  background: linear-gradient(180deg, transparent, rgba(26,159,255,.13));
}
.navbar-toggler {
  border-color: rgba(102,192,244,.3) !important;
  background: rgba(42,71,94,.62) !important;
}
.navbar-toggler:focus { outline: 1px solid #66c0f4 !important; }
.container { max-width: 1120px !important; }
body > .container { padding-top: 14px; padding-bottom: 26px; }
body > .container::before {
  content: "MBZUAI  ·  COMPUTING AND MATHEMATICAL SCIENCES DIVISION  ·  COMPUTER SCIENCE  ·  COMPUTER GRAPHICS";
  display: block; margin: 0 0 10px; color: #67c1f5; font-size: 11px;
  letter-spacing: .11em; text-shadow: 0 0 12px rgba(102,192,244,.32);
}
.row { margin-left: -8px !important; margin-right: -8px !important; }
[class*="col-"] { padding-left: 8px !important; padding-right: 8px !important; }
body > .container > .row:first-of-type {
  display: grid !important;
  grid-template-columns: minmax(240px, 270px) minmax(360px, .95fr) minmax(300px, 1.05fr);
  align-items: stretch; gap: 0;
  margin: 0 0 10px !important; padding: 0 !important;
  background: linear-gradient(115deg, rgba(42,71,94,.96), rgba(27,40,56,.86) 66%, rgba(19,32,45,.92));
  border: 1px solid rgba(102,192,244,.12); box-shadow: 0 8px 24px rgba(0,0,0,.25);
}
body > .container > .row:first-of-type > [class*="col-"] {
  width: auto !important; max-width: none !important; flex: none !important;
  padding: 14px !important;
}
body > .container > .row:first-of-type > .col-md-3 {
  position: relative; padding: 0 !important; overflow: hidden; background: #101822;
  box-shadow: inset -1px 0 rgba(102,192,244,.16), inset 0 1px rgba(255,255,255,.04);
}
body > .container > .row:first-of-type > .col-md-3::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  border: 1px solid rgba(102,192,244,.12);
  background: linear-gradient(180deg, rgba(102,192,244,.045), transparent 20%, transparent 80%, rgba(0,0,0,.16));
}
body > .container > .row:first-of-type > .col-md-4 {
  border-right: 1px solid rgba(102,192,244,.1);
  background: linear-gradient(180deg, rgba(42,71,94,.3), rgba(27,40,56,.1));
}
body > .container > .row:first-of-type > .col-md-5 {
  padding: 11px 15px 10px !important;
}
body > .container > .row:first-of-type > .col-md-3 .img-fluid {
  display: block; width: 100%; height: auto; min-height: 0; max-height: none;
  aspect-ratio: 1149 / 1369 !important; object-fit: contain; object-position: center;
  border: 0 !important; box-shadow: none; transform: none !important;
}
body > .container > .row:first-of-type > .col-md-4 h3 {
  margin: 0 0 18px !important; font-size: 27px !important; font-weight: 700 !important;
  letter-spacing: -.035em;
}
body > .container > .row:first-of-type > .col-md-4 h3 small {
  display: block; margin-top: 26px; color: #8f98a0 !important;
  font-size: 14px; font-weight: 500; line-height: 1.38;
}
body > .container > .row:first-of-type > .col-md-4 p {
  margin-bottom: 9px !important; color: #c7d5e0; font-size: 12px; line-height: 1.5 !important;
}
body > .container > .row:first-of-type > .col-md-4 p:first-of-type { white-space: nowrap; }
body > .container > .row:first-of-type > .col-md-4 i { color: #66c0f4; width: 17px; }
body > .container > .row:first-of-type > .col-md-5 h3 {
  margin: 0 0 7px !important; color: #fff !important;
  font-size: 14px !important; font-weight: 700 !important; text-transform: uppercase;
  letter-spacing: -.01em;
}
body > .container > .row:first-of-type > .col-md-5 ul {
  max-height: 255px; margin: 0; padding: 0; list-style: none; overflow-y: auto;
  scrollbar-width: thin; scrollbar-color: #2a475e #171d25;
}
body > .container > .row:first-of-type > .col-md-5 li {
  position: relative; padding: 5px 5px 5px 12px;
  color: #acb2b8; font-size: 12px; line-height: 1.35;
  border-bottom: 1px solid rgba(102,192,244,.07);
}
body > .container > .row:first-of-type > .col-md-5 li::before {
  content: ""; position: absolute; left: 1px; top: 10px;
  width: 4px; height: 4px; background: #66c0f4; box-shadow: 0 0 6px rgba(102,192,244,.5);
}
body > .container > .row:first-of-type > .col-md-5 li b { color: #67c1f5; font-weight: 500; }
#old_news { display: contents !important; }
h1, h2, h3, h4, h5, h6 {
  color: #fff !important; line-height: 1.2 !important;
  font-family: Arial, "Helvetica Neue", "Segoe UI", sans-serif !important;
  font-stretch: normal; font-weight: 700 !important; letter-spacing: -.025em;
}
.name-cjk {
  font-family: "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif;
  font-size: .7em; font-weight: 400; color: #c7d5e0;
}
h3 { font-size: 20px !important; }
h4 { font-size: 17px !important; }
body > .container > h3, body > .container > h4 {
  position: relative; padding: 0 0 6px !important;
  margin: 16px 0 9px !important; text-transform: uppercase;
  font-size: 16px !important; font-weight: 700 !important; letter-spacing: -.012em;
  background: none !important; border: 0 !important;
  border-bottom: 1px solid rgba(102,192,244,.28) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,.5);
}
body > .container > h3::after, body > .container > h4::after {
  content: ""; position: absolute; left: 0; bottom: -1px;
  width: min(180px, 34%); height: 1px;
  background: linear-gradient(90deg, #67c1f5, rgba(26,159,255,.2));
}
body > .container > h4, .publication-year-panel > h4 {
  color: #67c1f5 !important; font-size: 13px !important; font-weight: 700 !important;
  background: none !important; border-left: 0 !important;
}
.publication-tabs {
  display: flex; gap: 3px; align-items: center; overflow-x: auto;
  margin: -3px 0 9px; padding: 5px;
  background: rgba(15,25,35,.7); border: 1px solid rgba(102,192,244,.1);
  scrollbar-width: thin; scrollbar-color: #2a475e #171d25;
}
.publication-tab {
  flex: 0 0 auto; min-width: 48px; padding: 6px 11px;
  color: #8f98a0; background: #1b2838; border: 0; border-bottom: 2px solid transparent;
  border-radius: 0 !important; font-family: "Barlow Steamlike", sans-serif;
  font-size: 11px; font-weight: 500; letter-spacing: .07em; cursor: pointer;
}
.publication-tab:hover { color: #fff; background: #2a475e; }
.publication-tab[aria-selected="true"] {
  color: #fff; background: linear-gradient(180deg, #2a475e, #22384a);
  border-bottom-color: #1a9fff; box-shadow: inset 0 0 12px rgba(102,192,244,.08);
}
.publication-year-panel[hidden] { display: none !important; }
.publication-year-panel { animation: publication-in .16s ease-out; }
@keyframes publication-in { from { opacity: .35; transform: translateY(3px); } to { opacity: 1; transform: none; } }
.research-equation {
  display: grid;
  grid-template-columns: minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr);
  align-items: center; gap: 7px; margin: 2px 0 12px; padding: 10px;
  background: linear-gradient(135deg, rgba(42,71,94,.72), rgba(19,32,45,.82));
  border: 1px solid rgba(102,192,244,.12); box-shadow: inset 0 1px rgba(255,255,255,.025);
}
.research-equation__item { min-width: 0; margin: 0; text-align: center; }
.research-equation__item img {
  display: block; width: 100%; aspect-ratio: 1.48 / 1; object-fit: contain;
  box-sizing: border-box; padding: 4px 8px; border: 1px solid rgba(102,192,244,.13) !important;
  outline: 1px solid rgba(0,0,0,.32); outline-offset: -2px;
  background: linear-gradient(180deg, #17293a, #0e1720); box-shadow: inset 0 1px rgba(255,255,255,.035);
}
.research-equation__item figcaption {
  min-height: 36px; padding-top: 6px; color: #c7d5e0;
  font-size: 12px; line-height: 1.25; letter-spacing: .015em;
}
.research-equation__operator {
  color: #66c0f4; font-size: 22px; font-weight: 300;
  text-shadow: 0 0 10px rgba(102,192,244,.42);
}
.my-4 { margin-top: .9rem !important; margin-bottom: .65rem !important; }
.my-3 { margin-top: .75rem !important; margin-bottom: .55rem !important; }
p { margin-top: 0 !important; margin-bottom: .65rem !important; }
.contact-line {
  display: flex;
  align-items: baseline;
  gap: 7px;
  margin-bottom: 2px;
}
.contact-line > i {
  flex: 0 0 14px;
  width: 14px;
  margin: 0 !important;
  text-align: center;
}
.contact-line > span { min-width: 0; }
hr { border-color: rgba(102,192,244,.18) !important; margin: 14px 0 !important; }
a { color: var(--steam-blue) !important; transition: color .15s ease, background .15s ease; }
a:hover { color: #fff !important; text-decoration: none !important; }
span[style*="background-color: #ffffff"],
span[style*="background-color:#ffffff"],
span[style*="background-color: white"],
span[style*="background-color:white"] {
  display: inline-block;
  padding: 2px 7px !important;
  color: #67c1f5 !important;
  background: linear-gradient(90deg, rgba(26,159,255,.18), rgba(42,71,94,.42)) !important;
  border: 1px solid rgba(102,192,244,.28);
  border-radius: 2px;
  box-shadow: inset 0 0 10px rgba(102,192,244,.06);
  line-height: 1.35;
}
span[style*="background-color: #ffffff"] b,
span[style*="background-color:#ffffff"] b,
span[style*="background-color: white"] b,
span[style*="background-color:white"] b {
  color: #d2e885 !important;
  font-weight: 500;
}
span[style*="background-color: #ffffff"] a,
span[style*="background-color:#ffffff"] a,
span[style*="background-color: white"] a,
span[style*="background-color:white"] a { color: #67c1f5 !important; }
img { border-color: rgba(102,192,244,.16) !important; }
.img-thumbnail {
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
}
.rounded { border-radius: 2px !important; }
.img-fluid { box-shadow: none; }
.row.justify-content-md-center .img-fluid,
.col-sm-6 > .img-fluid {
  padding: 3px;
  background: linear-gradient(180deg, #17293a, #0e1720);
  border: 1px solid rgba(102,192,244,.13) !important;
  outline: 1px solid rgba(0,0,0,.34); outline-offset: -2px;
  box-shadow: inset 0 1px rgba(255,255,255,.035);
}
table { color: var(--steam-text) !important; background: rgba(22,32,45,.5); }
.table td, .table th {
  padding: .4rem .55rem !important;
  color: var(--steam-text) !important;
  background-color: rgba(27,40,56,.72) !important;
  border-color: rgba(102,192,244,.12) !important;
}
.table .thead-light th, .table thead th {
  color: #f1f1f1 !important;
  background: linear-gradient(180deg, #2f506b, #29445a) !important;
  border-color: rgba(102,192,244,.2) !important;
  border-bottom: 2px solid #1a9fff !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: .055em;
  text-transform: uppercase;
  box-shadow: inset 0 1px rgba(255,255,255,.03);
}
.table tbody tr:nth-child(even) td { background-color: rgba(32,47,66,.9) !important; }
.table tbody tr:hover td { background-color: #2a475e !important; color: #fff !important; }
.btn, button { border-radius: 2px !important; }
.btn-primary, .btn-info {
  background: linear-gradient(90deg,#06bfff,#2d73ff) !important;
  border: 0 !important; color: white !important;
}
.btn-outline-tsinghua {
  padding: 5px 10px !important; margin: 2px 3px 2px 0 !important;
  color: #d2e885 !important; background: linear-gradient(90deg,#75a300,#536904) !important;
  border: 0 !important; border-radius: 2px !important; box-shadow: 0 0 0 1px rgba(164,208,7,.18);
  font-size: 11px !important; line-height: 1.2 !important;
}
.btn-outline-tsinghua:hover {
  color: #fff !important; background: linear-gradient(90deg,#8ed629,#6aa621) !important;
}
.btn.disabled, .btn:disabled {
  color: #687785 !important;
  background: #243342 !important;
  box-shadow: none !important;
  opacity: .72 !important;
}
.badge, .btn-sm { font-size: 11px !important; }
.card {
  background: linear-gradient(135deg, rgba(37,56,77,.94), rgba(27,40,56,.94)) !important;
  color: var(--steam-text) !important; border: 1px solid rgba(102,192,244,.12) !important;
  border-radius: 2px !important;
}
.card-body { padding: .75rem !important; }
.list-group-item { background: rgba(32,47,66,.72) !important; border-color: rgba(102,192,244,.1) !important; }
.modal { background: rgba(5,10,16,.72); }
.modal-content {
  color: var(--steam-text) !important;
  background: linear-gradient(145deg, #2a475e, #1b2838 62%) !important;
  border: 1px solid rgba(102,192,244,.22) !important;
  border-radius: 2px !important;
  box-shadow: 0 18px 50px rgba(0,0,0,.68) !important;
}
.modal-header, .modal-footer { border-color: rgba(102,192,244,.14) !important; }
.modal-body { color: var(--steam-text) !important; }
.modal-body h1, .modal-body h2, .modal-body h3, .modal-body h4 { color: #fff !important; }
.modal-body code, .modal-body pre {
  color: #d6d7d8 !important; background: #101822 !important;
  border: 1px solid rgba(102,192,244,.12); border-radius: 2px;
}
.close { color: #c7d5e0 !important; text-shadow: none !important; opacity: .8 !important; }
.close:hover { color: #fff !important; opacity: 1 !important; }
.collapse { color: var(--steam-text); }
.bg-jilaozi {
  background: linear-gradient(180deg, #202f42, #171d25) !important;
  border-top: 1px solid rgba(102,192,244,.14);
}
.publication, .pub, [class*="publication"] { margin-bottom: 10px !important; }
.vert-offset-top-1.vert-offset-bottom-1 {
  position: relative; margin: 0 0 7px !important; padding: 9px 7px !important;
  background: linear-gradient(90deg, rgba(35,55,75,.96), rgba(29,45,62,.72));
  border: 1px solid rgba(102,192,244,.08); border-left: 2px solid transparent;
  box-shadow: 0 2px 6px rgba(0,0,0,.16); transition: .15s ease;
}
.vert-offset-top-1.vert-offset-bottom-1:hover {
  border-left-color: #66c0f4; background: linear-gradient(90deg, #2a475e, rgba(34,59,79,.84));
  box-shadow: 0 4px 14px rgba(0,0,0,.28); transform: translateY(-1px);
}
.vert-offset-top-1.vert-offset-bottom-1 + br { display: none; }
.vert-offset-top-1 > .col-md-2 {
  display: flex; align-items: center; align-self: stretch;
  padding: 4px !important;
  background: linear-gradient(180deg, #142332, #0e1720);
  border: 1px solid rgba(102,192,244,.1);
  box-shadow: inset 0 1px rgba(255,255,255,.025);
}
.vert-offset-top-1 .img-thumbnail {
  display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; padding: 0 !important;
  border: 0 !important; border-radius: 0 !important;
  outline: 1px solid rgba(0,0,0,.36); outline-offset: -1px;
  background: transparent !important; box-shadow: none;
}
.vert-offset-top-1 p { margin-bottom: 4px !important; }
.vert-offset-top-1 p b { color: #fff; font-size: 14px; font-weight: 500; }
.vert-offset-top-1 p i { color: #8f98a0; font-size: 12px; }
.col-md-3 > .img-fluid:first-child { border: 0 !important; }
small, .text-muted { color: var(--steam-muted) !important; }
#news, #bio, #research, #teaching, #publications, #misc { scroll-margin-top: 64px; }
footer { color: var(--steam-muted) !important; background: var(--steam-deep) !important; }
footer a { color: #8f98a0 !important; }
hr.style-two {
  height: 1px !important; border: 0 !important;
  background: linear-gradient(90deg, rgba(102,192,244,.3), rgba(102,192,244,.1) 48%, transparent 88%) !important;
}
@media (max-width: 991px) {
  .navbar { padding: 0 14px !important; }
  .navbar-collapse { border-top: 1px solid rgba(102,192,244,.15); }
  .navbar-nav .nav-link { padding: 9px 5px !important; }
  .mbzuai-name { max-width: 250px; font-size: 12px; }
  body > .container > .row:first-of-type { grid-template-columns: 210px 1fr; }
  body > .container > .row:first-of-type > .col-md-5 {
    grid-column: 1 / -1; border-top: 1px solid rgba(102,192,244,.1);
  }
  body > .container > .row:first-of-type > .col-md-5 ul {
    display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); max-height: 190px;
  }
}
@media (max-width: 767px) {
  body { padding-top: 50px !important; font-size: 13px !important; line-height: 1.38 !important; }
  body > .container { padding: 10px 12px 20px !important; }
  .navbar-brand { max-width: calc(100% - 62px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .navbar-brand::before { display: none; }
  .navbar-brand { gap: 0; }
  .mbzuai-name { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  body > .container > .row:first-of-type { display: block !important; }
  body > .container > .row:first-of-type > .col-md-3 { height: 260px; }
  body > .container > .row:first-of-type > .col-md-3 .img-fluid {
    max-width: none; max-height: none; margin: 0; object-position: center 20%;
  }
  body > .container > .row:first-of-type > .col-md-4 { border-right: 0; }
  body > .container > .row:first-of-type > .col-md-5 ul { display: block; max-height: 230px; }
  h3 { font-size: 18px !important; }
  h4 { font-size: 16px !important; }
  .my-4 { margin-top: .65rem !important; margin-bottom: .45rem !important; }
  .vert-offset-top-1.vert-offset-bottom-1 { padding: 8px !important; }
  .vert-offset-top-1 .col-md-2 { margin-bottom: 6px; }
  .research-equation {
    display: flex; flex-direction: column; gap: 5px; padding: 12px;
  }
  .research-equation__item { width: min(100%, 310px); }
  .research-equation__item img { aspect-ratio: 1.48 / 1; padding: 4px 8px; }
  .research-equation__item figcaption { min-height: 0; padding: 6px 0 2px; font-size: 12px; }
  .research-equation__operator {
    display: grid; place-items: center; width: 28px; height: 28px;
    font-size: 20px; background: rgba(26,159,255,.1); border: 1px solid rgba(102,192,244,.18);
  }
}
</style>`;

const knownAuthorLinks: Record<string, string> = {
  "Beibei Wang": "https://wangningbei.github.io/",
  "Daqi Lin": "https://dqlin.xyz/",
  "Jean-Marie Aubry": "https://nz.linkedin.com/in/jean-marie-aubry-a21a198",
  "Junqiu Zhu": "https://junqiuzhu.github.io/",
  "Kun Xu": "http://cg.cs.tsinghua.edu.cn/people/~kun/",
  "Lifan Wu": "https://winmad.github.io/",
  "Lu Wang": "https://wanglusdu.github.io/",
  "Matt Jen-Yuan Chiang": "https://mattchiangvfx.com/",
  "Miloš Hašan": "http://miloshasan.net/",
  "Ravi Ramamoorthi": "http://cseweb.ucsd.edu/~ravir/",
  "Shi-Min Hu": "http://cg.cs.tsinghua.edu.cn/prof_hu.htm",
  "Songyin Wu": "https://poiw.github.io/",
  "Steve Marschner": "http://www.cs.cornell.edu/~srm/",
  "Xiaogang Jin": "http://www.cad.zju.edu.cn/home/jin/",
  "Yang Zhou": "https://linktr.ee/mangosister",
  "Yu Guo": "https://www.ics.uci.edu/~yug10/",
  "Zahra Montazeri": "https://research.manchester.ac.uk/en/persons/zahra.montazeri",
  "Zheng Zeng": "https://zheng95z.github.io/",
  "Zhimin Fan": "https://zhiminfan.work/",
  "Zilin Xu": "https://starry316.github.io/",
  "Youyang Du": "https://icewired-yy.github.io/",
};

const linkKnownAuthors = (authors: string) => authors
  .split(", ")
  .map((name) => knownAuthorLinks[name]
    ? `<a href="${knownAuthorLinks[name]}" target="_blank">${name}</a>`
    : name)
  .join(", ");

const recentPublications = `
<h4 class="my-4">2026</h4>
<div class="row vert-offset-top-1 vert-offset-bottom-1"><div class="col-md-2"><img src="__LOCAL_ORIGIN__/images/publications/2026/img_macrofacet.png" class="img-thumbnail center-block" style="max-width:100%" alt="Representative figure from Macrofacet Theory for Gaussian Process Statistical Surfaces"></div><div class="col-md-10"><p><b>Macrofacet Theory for Gaussian Process Statistical Surfaces</b><br><i>Coming Soon</i></p></div></div><br>
<div class="row vert-offset-top-1 vert-offset-bottom-1"><div class="col-md-2"><img src="__LOCAL_ORIGIN__/images/publications/2026/img_flyaway.png" class="img-thumbnail center-block" style="max-width:100%" alt="Representative figure from Curvature-Aware Multi-Scale Gaussian Appearance Model for Fabric Flyaways"></div><div class="col-md-10"><p><b>Curvature-Aware Multi-Scale Gaussian Appearance Model for Fabric Flyaways</b><br><i>Coming Soon</i></p></div></div><br>
${[
  ["Fiber-level Woven Fabric Capture from a Single Microscopic Image", "Zixuan Li, Pengfei Shen, Hanxiao Sun, Zibo Zhang, Yu Guo, Ligang Liu, Ling-Qi Yan, Steve Marschner, Miloš Hašan, Beibei Wang", "ACM Transactions on Graphics, 2026", "https://arxiv.org/abs/2409.06368", "", "__LOCAL_ORIGIN__/images/publications/2026/img_fiber_level_recon.png"],
  ["Unified Gaussian Primitives for Scene Representation and Rendering", "Yang Zhou, Songyin Wu, Lingqi Yan", "ACM Transactions on Graphics, 2026", "https://doi.org/10.1145/3829352", "https://mangosister.github.io/gsr_site/", "__LOCAL_ORIGIN__/images/publications/2026/unified-gaussian-arxiv.jpg"],
  ["A Texture-Free Multi-Scale Model for Surface-Based Rendering of Knitted Fabrics", "Apoorv Khattar, Jean-Marie Aubry, Ling-Qi Yan, Zahra Montazeri", "Computer Graphics Forum (Proceedings of Eurographics 2026)", "https://personalpages.manchester.ac.uk/staff/zahra.montazeri/papers/26_CGF_surfaceknit", "https://diglib.eg.org/items/0be71589-7d03-4135-b6e3-359634627d99", "__LOCAL_ORIGIN__/images/publications/2026/img_surface_knit.png", "https://personalpages.manchester.ac.uk/staff/zahra.montazeri/videos/26_CGF_surfaceknit.mp4"],
  ["Real-Time Neural Materials on Mobile VR", "Zilin Xu, Yang Zhou, Yehonathan Litman, Matt Jen-Yuan Chiang, Lingqi Yan, Anton Michels", "Computer Graphics Forum (Proceedings of Eurographics 2026)", "https://mbzuaiac-my.sharepoint.com/:b:/g/personal/zilin_xu_mbzuai_ac_ae/IQAKQRR9ATjVTLxziA9f1SivAfDjmYT7L9UaGp5ZwvSYTUY?e=ezjmiX", "", "__LOCAL_ORIGIN__/images/publications/2026/img_nmvr.png"],
  ["Generalized Spherical Harmonics Products using Spherical Grids", "Di An, Jiaqi Wu, Bowen Xu, Lingqi Yan, Kun Xu", "ACM Transactions on Graphics (Proceedings of SIGGRAPH 2026)", "https://doi.org/10.1145/3811322", "", "__LOCAL_ORIGIN__/images/publications/2026/img_SH_grid_prod.png"],
  ["Efficient Fur and Hair Multiple Scattering Using Volumetric Approximation", "Ruike Hu, Junqiu Zhu, Minghao Lin, Ruian Zhang, Lu Wang, Jie Guo, Yanwen Guo, Lingqi Yan", "ACM Transactions on Graphics (Proceedings of SIGGRAPH 2026)", "https://doi.org/10.1145/3811343", "https://njucg.github.io/efficient-fur-hair-ms-vol-approx-webpage/", "__LOCAL_ORIGIN__/images/publications/2026/paper_hair_ms.png"],
  ["A Real-time, Multiscale and Procedural Feather Appearance Model", "Xiang Chen, Bin Chen, Shouyi Wang, Zahra Montazeri, Lingqi Yan, Lu Wang, Junqiu Zhu", "ACM Transactions on Graphics (Proceedings of SIGGRAPH 2026)", "https://doi.org/10.1145/3811328", "", "__LOCAL_ORIGIN__/images/publications/2026/img_feather.png"],
  ["Bounding Stratified Bernoulli Impulses for Ray Marching Gaussian Process Implicit Surfaces", "Junjie Chen, Zhimin Fan, Ling-Qi Yan, Junqiu Zhu, Yanwen Guo, Kun Zhou, Jie Guo", "ACM Transactions on Graphics (Proceedings of SIGGRAPH 2026)", "https://doi.org/10.1145/3811311", "https://cchen-77.github.io/projects/bounded-gpis/", "__LOCAL_ORIGIN__/images/publications/2026/img_bernoulli_gpis.png"],
  ["Spatial Multiple Importance Sampling for Real-Time Irradiance Probes", "Tuo Chen, Zi-Heng Zhou, Lingqi Yan, Shi-Min Hu", "IEEE Transactions on Visualization and Computer Graphics, 2026", "https://doi.org/10.1109/TVCG.2026.3669877", "https://doi.org/10.1109/TVCG.2026.3669877", "__LOCAL_ORIGIN__/images/publications/2026/img_tvcg_probe.png"],
  ["Neural Image Space Tessellation", "Youyang Du, Junqiu Zhu, Zheng Zeng, Lu Wang, Lingqi Yan", "Technical Report (arXiv:2602.23754), Feb 2026", "https://arxiv.org/pdf/2602.23754", "https://arxiv.org/abs/2602.23754", "__LOCAL_ORIGIN__/images/publications/2026/img_nist.png"],
  ["A Multi-scale Yarn Appearance Model with Fiber Details", "Apoorv Khattar, Junqiu Zhu, Jean-Marie Aubry, Emiliano Padovani, Marc Droske, Ling-Qi Yan, Zahra Montazeri", "Computational Visual Media, 12(1), 203–219, 2026", "https://doi.org/10.26599/CVM.2025.9450440", "https://www.sciopen.com/article/10.26599/CVM.2025.9450440", "__LOCAL_ORIGIN__/images/publications/2026/img_cvmyarn.png"],
].map(([title, authors, venue, paper, project, image, video]) => `<div class="row vert-offset-top-1 vert-offset-bottom-1"><div class="col-md-2"><img src="${image}" class="img-thumbnail center-block" style="max-width:100%" alt="Representative figure from ${title}"></div><div class="col-md-10"><p><b>${title}</b><br>${linkKnownAuthors(authors)}<br><i>${venue}</i></p>${project ? `<a href="${project}" target="_blank" class="btn btn-outline-tsinghua vert-offset-top-1" role="button">Project Page</a>` : ""}${paper ? `<a href="${paper}" target="_blank" class="btn btn-outline-tsinghua vert-offset-top-1" role="button">Paper</a>` : ""}${video ? `<a href="${video}" target="_blank" class="btn btn-outline-tsinghua vert-offset-top-1" role="button">Video</a>` : ""}</div></div><br>`).join("")}
`;

const late2025Publications = `
${[
  ["Lightweight, Edge-Aware, and Temporally Consistent Supersampling for Mobile Real-Time Rendering", "Sipeng Yang, Jiayu Ji, Junhao Zhuge, Jinzhe Zhao, Qiang Qiu, Chen Li, Yuzhong Yan, Kerong Wang, Lingqi Yan, Xiaogang Jin", "ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia 2025)", "https://doi.org/10.1145/3763348", "__LOCAL_ORIGIN__/images/publications/2025/img_mobfgsr2.png"],
  ["ReSTIR PG: Path Guiding with Spatiotemporally Resampled Paths", "Zheng Zeng, Markus Kettunen, Chris Wyman, Lifan Wu, Ravi Ramamoorthi, Ling-Qi Yan, Daqi Lin", "ACM SIGGRAPH Asia 2025 (Conference Track)", "https://research.nvidia.com/labs/rtr/publication/zeng2025restirpg/zeng2025restirpg_paper.pdf", "__LOCAL_ORIGIN__/images/publications/2025/img_restir_pg.png"],
  ["Automatic Reconstruction of Woven Cloth from a Single Close-up Image", "Chenghao Wu, Apoorv Khattar, Junqiu Zhu, Steve Pettifer, Ling-Qi Yan, Zahra Montazeri", "Computer Graphics Forum (Proceedings of Pacific Graphics 2025)", "https://doi.org/10.1111/cgf.70243", "__LOCAL_ORIGIN__/images/publications/2025/img_auto_cloth_recon.png"],
].map(([title, authors, venue, paper, image]) => `<div class="row vert-offset-top-1 vert-offset-bottom-1"><div class="col-md-2"><img src="${image}" class="img-thumbnail center-block" style="max-width:100%" alt="Representative figure from ${title}"></div><div class="col-md-10"><p><b>${title}</b><br>${linkKnownAuthors(authors)}<br><i>${venue}</i></p>${paper ? `<a href="${paper}" target="_blank" class="btn btn-outline-tsinghua vert-offset-top-1" role="button">Paper</a>` : ""}</div></div><br>`).join("")}
`;

const programDirectorModal = `
<div class="modal fade program-director-modal" id="programDirectorModal" tabindex="-1" role="dialog" aria-labelledby="programDirectorModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 id="programDirectorModalTitle">Program Director</h4>
        <p>This role is equivalent to the chair of a Computer Science department, although Computer Science at MBZUAI is relatively small and primarily focuses on weak-AI and non-AI directions.</p>
      </div>
    </div>
  </div>
</div>`;

const publicationImageModal = `
<div class="modal fade program-director-modal" id="publicationImageModal" tabindex="-1" role="dialog" aria-labelledby="publicationImageModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 id="publicationImageModalTitle">Representative Images</h4>
        <p>Since late 2025, representative images for papers on this website may be AI-generated or AI-enhanced. The papers themselves, of course, are never generated or altered by AI.</p>
      </div>
    </div>
  </div>
</div>`;

const publicationTabs = `
<script id="publication-year-tabs">
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".navbar-nav .nav-link"));
  var trackedSections = navLinks.map(function (link) {
    var href = link.getAttribute("href") || "";
    var name = href.slice(1);
    return {
      link: link,
      item: link.closest(".nav-item"),
      target: name ? document.querySelector('a.anchor[name="' + name + '"]') || document.getElementById(name) : document.body
    };
  }).filter(function (entry) { return entry.target; });

  function activateNavigation(link) {
    trackedSections.forEach(function (entry) {
      var active = entry.link === link;
      if (entry.item) entry.item.classList.toggle("active", active);
      if (active) entry.link.setAttribute("aria-current", "page");
      else entry.link.removeAttribute("aria-current");
      var currentLabel = entry.link.querySelector(".sr-only");
      if (currentLabel) currentLabel.hidden = !active;
    });
  }

  function updateNavigationFromScroll() {
    var navbar = document.querySelector(".navbar");
    var probe = window.scrollY + (navbar ? navbar.offsetHeight : 54) + 24;
    var current = trackedSections[0];
    trackedSections.forEach(function (entry) {
      var top = entry.target === document.body ? 0 : entry.target.getBoundingClientRect().top + window.scrollY;
      if (top <= probe) current = entry;
    });
    if (current) activateNavigation(current.link);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () { activateNavigation(link); });
  });
  var scrollTicking = false;
  window.addEventListener("scroll", function () {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(function () {
      updateNavigationFromScroll();
      scrollTicking = false;
    });
  }, { passive: true });
  window.addEventListener("hashchange", updateNavigationFromScroll);
  updateNavigationFromScroll();

  var navContainer = document.querySelector(".navbar > .container");
  if (navContainer) {
    var cart = document.createElement("button");
    cart.type = "button";
    cart.className = "steam-cart";
    cart.setAttribute("aria-label", "Open cart");
    cart.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2ZM1 2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 7 17h12v-2H7.42a.25.25 0 0 1-.22-.37L8.1 13h7.45a2 2 0 0 0 1.75-1.03L20.88 5H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2Z"/></svg>';
    navContainer.appendChild(cart);
    var toast = document.createElement("div");
    toast.className = "steam-toast";
    toast.setAttribute("role", "status");
    toast.textContent = "This isn't Steam, so everything here is free :)";
    document.body.appendChild(toast);
    var toastTimer;
    cart.addEventListener("click", function () {
      toast.classList.add("is-visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2600);
    });
  }
  var headings = Array.prototype.slice.call(document.querySelectorAll("h3"));
  var publicationHeading = headings.find(function (heading) {
    return heading.textContent.trim().indexOf("Publications / Technical Reports") === 0;
  });
  var miscAnchor = document.querySelector('a.anchor[name="misc"]');
  if (!publicationHeading || !miscAnchor) return;

  var nodes = [];
  var cursor = publicationHeading.nextSibling;
  while (cursor && cursor !== miscAnchor) {
    nodes.push(cursor);
    cursor = cursor.nextSibling;
  }

  var panels = [];
  var currentPanel = null;
  nodes.forEach(function (node) {
    var isYear = node.nodeType === 1 && node.tagName === "H4" && /^\\d{4}$/.test(node.textContent.trim());
    if (isYear) {
      currentPanel = document.createElement("section");
      currentPanel.className = "publication-year-panel";
      currentPanel.dataset.year = node.textContent.trim();
      miscAnchor.parentNode.insertBefore(currentPanel, miscAnchor);
      panels.push(currentPanel);
    }
    if (currentPanel) currentPanel.appendChild(node);
  });
  if (!panels.length) return;

  var years = panels.map(function (panel) { return panel.dataset.year; });
  var latestYear = years.reduce(function (latest, year) {
    return Number(year) > Number(latest) ? year : latest;
  }, years[0]);

  var tabs = document.createElement("div");
  tabs.className = "publication-tabs";
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", "Filter publications by year");

  ["ALL"].concat(years).forEach(function (year) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "publication-tab";
    button.textContent = year === "2019" ? "2019 & Earlier" : year;
    button.dataset.year = year;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");
    button.addEventListener("click", function () { selectYear(year); });
    tabs.appendChild(button);
  });
  publicationHeading.insertAdjacentElement("afterend", tabs);

  function selectYear(year) {
    panels.forEach(function (panel) {
      panel.hidden = year !== "ALL" && panel.dataset.year !== year;
    });
    Array.prototype.forEach.call(tabs.children, function (button) {
      var selected = button.dataset.year === year;
      button.setAttribute("aria-selected", selected ? "true" : "false");
      button.tabIndex = selected ? 0 : -1;
    });
  }
  selectYear(latestYear);
});
</script>`;

function makeAbsolute(document: string, localOrigin: string) {
  return document
    .replace(
      '<a class="navbar-brand" href="#">',
      '<a class="navbar-brand" href="https://mbzuai.ac.ae/" target="_blank" rel="noopener" aria-label="Visit Mohamed bin Zayed University of Artificial Intelligence">',
    )
    .replace(
      /\s*<span[^>]*>\s*<a[^>]*data-target="#old_news"[\s\S]*?<\/span>/,
      "",
    )
    .replace('<div class="collapse" id="old_news">', '<div id="old_news">')
    .replace(
      '<h3 class="my-3">Latest News</h3>\n          <ul>',
      `<h3 class="my-3">Latest News</h3>
          <ul>
            <li><b>[Aug 2026]</b> I will serve as Program Director, MSc &amp; PhD in Computer Science!</li>
            <li><b>[Dec 2025]</b> I will serve as a member of the SIGGRAPH Asia 2026 Technical Papers Committee!</li>
            <li><b>[Aug 2025]</b> I have joined MBZUAI!</li>`,
    )
    .replace(
      "UCSB Center of Interactive and Visual Computing (CIVC)",
      `<span class="mbzuai-mark" aria-hidden="true"><img src="__LOCAL_ORIGIN__/mbzuai-icon-hd.png" alt=""></span><span class="mbzuai-name">Mohamed bin Zayed University of Artificial Intelligence</span>`,
    )
    .replace(
      '<img class="img-fluid rounded" src="images/lingqi_v5.jpg" alt="">',
      '<img class="img-fluid rounded" src="__LOCAL_ORIGIN__/images/lingqi-profile-romance-preview.jpg" alt="Portrait of Lingqi Yan">',
    )
    .replace(
      /<h3 class="my-4">Lingqi Yan[\s\S]*?<\/h3>/,
      `<h3 class="my-4">Lingqi Yan <span class="name-cjk">(闫令琪)</span> <small>Associate Professor of Computer Science<br>Program Director, MSc &amp; PhD in Computer Science<a class="role-note-trigger" href="#programDirectorModal" data-toggle="modal" aria-label="About the Program Director role">*</a></small> </h3>`,
    )
    .replace(
      /<p>\s*<i class="far fa-building"><\/i>[\s\S]*?<\/p>\s*<p>\s*<i class="far fa-envelope"><\/i>[\s\S]*?<\/p>/,
      `<p class="contact-details">
            <span class="contact-line"><i class="far fa-building"></i><span>Office A-1.19, Building 1A, Masdar City, Abu Dhabi, UAE</span></span>
            <span class="contact-line"><i class="far fa-building" style="color:transparent"></i><span>Computing and Mathematical Sciences Division (CMS)</span></span>
            <span class="contact-line"><i class="far fa-building" style="color:transparent"></i><span>Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</span></span>
          </p>
          <p class="contact-details">
            <span class="contact-line"><i class="far fa-envelope"></i><span><a href="mailto:lingqi.yan@mbzuai.ac.ae">lingqi.yan@mbzuai.ac.ae</a></span></span>
          </p>`,
    )
    .replace(
      /\s*<hr class="style-two">\s*<p><span style="background-color: #ffffff;color: #d43535;"><b>I have left UCSB[\s\S]*?A new webiste is coming soon\.<\/p>/,
      "",
    )
    .replace(
      /Current PhD Student\(s\):[\s\S]*?<br>\s*Current MS Student\(s\):[\s\S]*?<br>\s*Alumni:[\s\S]*?<\/p>/,
      `Current PhD Student(s): <a href="https://icewired-yy.github.io/" target="_blank">Youyang Du</a>, <a href="https://starry316.github.io/" target="_blank">Zilin Xu</a><br>

      Current MS Student(s): <a href="https://chenz01.top/" target="_blank">Zhuo Chen</a><br>

      Current Visiting Student(s): Changkun Li, Yuchen Song<br>

      Alumni: <a href="https://dcjmj.github.io/" target="_blank">Tao Huang</a> (MS, now at Tencent), <a href="https://poiw.github.io/" target="_blank">Songyin Wu</a> (PhD, now at NVIDIA), <a href="https://zheng95z.github.io/" target="_blank">Zheng Zeng</a> (PhD, now at NVIDIA), <a href="https://seaform.moe/" target="_blank">Minghao Huang</a> (MS), <a href="https://leonkang130.github.io/" target="_blank">Liangfu Kang</a> (MS), <a href="https://zcy.moe/" target="_blank">Chuyan Zhang</a> (MS, now at TU Wien), <a href="https://linktr.ee/mangosister" target="_blank">Yang Zhou</a> (PhD, now at Meta), <a href="https://junqiuzhu.github.io/" target="_blank">Junqiu Zhu</a> (Postdoc, now at Shandong University), Lara Floegel-Shetty (MS, now at Apple), <a href="http://www.shlomisteinberg.com/" target="_blank">Shlomi Steinberg</a> (PhD, now at U Waterloo), Jinglei Yang (MS, now at Amazon), Lei Xu (MS, now at Meta)</p>`,
    )
    .replace(
      "My legal name spelling should be <em>Lingqi Yan</em>, and I only use <em>Ling-Qi Yan</em> for publications (due to some lab traditions at Tsinghua University).",
      "My legal name spelling should be <em>Lingqi Yan</em>, and I only use <em>Ling-Qi Yan</em> for publications (due to some lab traditions at Tsinghua University). I am now gradually standardizing on the spelling <em>Lingqi Yan</em>.",
    )
    .replace(
      /(<h3 class="my-3">Teaching<\/h3>[\s\S]*?<tbody>)/,
      `$1
          <tr>
            <td>Fall 2025</td>
            <td><a href="https://mbzuai.ac.ae/study/undergraduate-program/" target="_blank">AI 1020: Computer Systems &amp; The Web</a></td>
            <td>BLD1B LH2</td>
            <td>TuTh 2:30 PM - 4:20 PM (UAE Time)</td>
          </tr>`,
    )
    .replace(
      '<th><a href="teaching/cs180.html" target="_blank">CS180/CS280: Introduction to Computer Graphics</a></th>',
      '<td><a href="teaching/cs180.html" target="_blank">CS180/CS280: Introduction to Computer Graphics</a></td>',
    )
    .replace(
      '<a href="https://winmad.github.io/" target="_blank">Lifan Wu</a> @ UCSD.',
      '<a href="https://winmad.github.io/" target="_blank">Lifan Wu</a> @ NVIDIA.',
    )
    .replace(' (<a href="#recruitModal" data-toggle="modal">details and FAQs</a>)', '')
    .replace('As a young Computer Graphics researcher,', 'As a Computer Graphics researcher,')
    .replace('During my Ph.D. career, I mainly aimed', 'I mainly aimed')
    .replace(
      'It happens quite often that a non-rendering expert (e.g. a random person from CV or VR) would review and judge my submission with strong (and of course, factually wrong) opinion and (out of nowhere) confidence.',
      'It happens quite often that a non-rendering expert would review and judge my submission with strong (and of course, factually wrong) opinion and confidence (out of nowhere).',
    )
    .replace('exploiting Machine Learning approaches', 'exploiting neural approaches')
    .replace(
      'physically-based / image-based rendering, real-time ray tracing and realistic appearance modeling / acquisition',
      'physically-based / image-based rendering, real-time ray tracing, neural-aided rendering and realistic appearance modeling / acquisition',
    )
    .replace(
      /<h3 class="my-3">A Short Bio<\/h3>\s*<p>[\s\S]*?<\/p>\s*<a class="anchor" name="research"><\/a>/,
      `<h3 class="my-3">A Short Bio</h3>
      <p>Professor Lingqi Yan is an Associate Professor of Computer Science at Mohamed bin Zayed University of Artificial Intelligence (MBZUAI). His research focuses on photorealistic rendering, including appearance modeling and representation, physical light transport theory, neural-aided rendering, and practical real-time ray tracing techniques. He received the 2019 ACM SIGGRAPH Outstanding Doctoral Dissertation Award and multiple best paper awards. His research has been widely adopted in industry and has contributed to multiple films that won the Academy Award for Best Visual Effects. He has also been serving on the editorial board of IEEE Transactions on Visualization and Computer Graphics (TVCG).</p>

      <a class="anchor" name="research"></a>`,
    )
    .replace(
      /<div class="row justify-content-md-center" style="margin-bottom: -1\.5ex;">[\s\S]*?<div class="row justify-content-md-center">[\s\S]*?<\/div>\s*<\/div>/,
      `<div class="research-equation" aria-label="Research equation">
        <figure class="research-equation__item">
          <img src="images/research_6.jpg" alt="RT and offline rendering">
          <figcaption>RT / offline Rendering</figcaption>
        </figure>
        <span class="research-equation__operator" aria-hidden="true">+</span>
        <figure class="research-equation__item">
          <img src="images/research_3.jpg" alt="Appearance modeling">
          <figcaption>Appearance Modeling</figcaption>
        </figure>
        <span class="research-equation__operator" aria-hidden="true">+</span>
        <figure class="research-equation__item">
          <img src="images/research_4.jpg" alt="Future display equipment">
          <figcaption>Future Display Equip.</figcaption>
        </figure>
        <span class="research-equation__operator" aria-hidden="true">+</span>
        <figure class="research-equation__item">
          <img src="images/research_5.jpg" alt="Emerging technology">
          <figcaption>Emerging Technology</figcaption>
        </figure>
        <span class="research-equation__operator" aria-hidden="true">=</span>
        <figure class="research-equation__item">
          <img src="images/research_1.jpg" alt="Ultimate realism">
          <figcaption>Ultimate Realism</figcaption>
        </figure>
      </div>`,
    )
    .replace(
      '<h3 class="my-4">Publications / Technical Reports<a href="#techReportModal" data-toggle="modal">*</a></h3>',
      '<h3 class="my-4">Publications / Technical Reports<sup class="publication-note"><a class="role-note-trigger" href="#techReportModal" data-toggle="modal" aria-label="About technical reports">1</a></sup><sup class="publication-note"><a class="role-note-trigger" href="#publicationImageModal" data-toggle="modal" aria-label="About representative images">2</a></sup></h3>' + recentPublications,
    )
    .replace(
      '<h4 class="my-4">2025</h4>',
      '<h4 class="my-4">2025</h4>' + late2025Publications,
    )
    .replace(
      /<div class="row vert-offset-top-1 vert-offset-bottom-1">\s*<div class="col-md-2">\s*<img src="images\/img_cvm24yarn\.png"[\s\S]*?<\/div>\s*<\/div>\s*<br>/,
      "",
    )
    .replace(
      /<div class="row vert-offset-top-1 vert-offset-bottom-1">\s*<div class="col-md-2">\s*<img src="images\/img_gp\.jpg"[\s\S]*?<\/div>\s*<\/div>\s*<br>/,
      "",
    )
    .replace(/<head([^>]*)>/i, `<head$1><base href="${SOURCE}">`)
    .replace(/<\/head>/i, `${theme}</head>`)
    .replace(/<\/body>/i, `${programDirectorModal}${publicationImageModal}${publicationTabs}</body>`)
    .replaceAll("__LOCAL_ORIGIN__", localOrigin);
}

export async function GET(request: Request) {
  let sourceHtml = originalSnapshot;
  try {
    const response = await fetch(SOURCE, { headers: { "User-Agent": "Mozilla/5.0" }, next: { revalidate: 3600 } });
    if (!response.ok) throw new Error(`Source returned ${response.status}`);
    sourceHtml = await response.text();
  } catch {
    // The repository snapshot keeps the editable site usable if UCSB is unavailable.
  }

  const html = makeAbsolute(sourceHtml, new URL(request.url).origin);
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=900, s-maxage=3600",
    },
  });
}

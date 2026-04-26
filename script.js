/* =============================================
   Yuvanesh S — QA Automation Engineer Portfolio
   assets/script.js
   ============================================= */

// ── NAV SCROLL SHADOW ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
});

// ── HAMBURGER MENU (MOBILE) ──
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

function closeMobile() {
  ham.classList.remove('open');
  mob.classList.remove('open');
}

// ── SCROLL REVEAL ANIMATION ──
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i * 0.05) + 's';
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => revealObs.observe(r));

// ── ANIMATED SKILL BARS ──
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObs.disconnect();
    }
  });
}, { threshold: 0.3 });
barObs.observe(document.getElementById('barsGrid'));

// ── CONTACT FORM — opens mailto with pre-filled content ──
function handleSubmit() {
  const name    = document.getElementById('fname').value;
  const company = document.getElementById('fcompany').value;
  const email   = document.getElementById('femail').value;
  const role    = document.getElementById('frole').value;
  const msg     = document.getElementById('fmsg').value;

  const subject = encodeURIComponent(
    'QA Engineer Opportunity' + (company ? ' - ' + company : '')
  );
  const body = encodeURIComponent(
    'Hi Yuvanesh,\n\n' +
    (name ? 'My name is ' + name + (company ? ' from ' + company : '') + '.\n\n' : '') +
    (role ? 'Role Type: ' + role + '\n\n' : '') +
    (msg || 'I would like to connect with you regarding a QA Automation Engineer opportunity.') +
    '\n\nBest regards,\n' + (name || 'Recruiter')
  );

  window.location.href = 'mailto:yuvanesh.s0711@gmail.com?subject=' + subject + '&body=' + body;
  document.getElementById('formSuccess').style.display = 'block';
}

// ── ACTIVE NAV HIGHLIGHT ON SCROLL ──
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navAnchors.forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.style.color      = isActive ? 'var(--navy)' : '';
    a.style.fontWeight = isActive ? '700' : '';
  });
});

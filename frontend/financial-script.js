/* ============================================================
   SS FINANCIAL SOLUTIONS — script
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

        setTimeout(function () {
            loader.remove();
        }, 500);

    }, 1500);

});

  /* ---------- YEAR ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- MOBILE NAV ---------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- SERVICES DATA ---------- */
  var services = [
    {
      icon: '<path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/>',
      title: 'Home Loan',
      desc: 'Finance your dream home with competitive interest rates and flexible tenures.',
      points: ['Up to 90% of property value', 'Tenure up to 30 years', 'Balance transfer available']
    },
    {
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v4M16 4v4M3 10h18"/>',
      title: 'Mortgage Loan',
      desc: 'Unlock the value of your property for personal or business needs.',
      points: ['Loan against residential / commercial property', 'Attractive LTV ratios', 'Quick valuation support']
    },
    {
      icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>',
      title: 'Personal Loan',
      desc: 'Quick, collateral-free funding for weddings, education, medical needs and more.',
      points: ['Minimal documentation', 'Fast disbursal', 'No collateral required']
    },
    {
      icon: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>',
      title: 'Business Loan',
      desc: 'Working capital and expansion funding tailored to your business cycle.',
      points: ['Term loans & overdraft options', 'GST / bank-statement based eligibility', 'For proprietors, partnerships & companies']
    },
    {
      icon: '<path d="M3 13l2-6h10l2 6"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/><path d="M5 13h14v3H5z"/>',
      title: 'Vehicle Loan',
      desc: 'Finance your two-wheeler, car or commercial vehicle with ease.',
      points: ['New & used vehicles', 'Fast approval', 'Flexible EMI options']
    },
    {
      icon: '<path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/>',
      title: 'Loan Against Property',
      desc: 'Leverage your property to raise funds for any purpose.',
      points: ['High-value funding', 'Long repayment tenure', 'Both self-occupied & rented property']
    },
    {
      icon: '<path d="M12 5v14M5 12h14"/>',
      title: 'Top-Up Loan',
      desc: 'Additional funds on your existing loan without fresh collateral.',
      points: ['Available on running home / LAP loans', 'Fast processing', 'Use for any personal need']
    },
    {
      icon: '<path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z"/>',
      title: 'Insurance',
      desc: 'Protect what matters — life, health, general & loan-linked insurance cover.',
      points: ['Life & health insurance', 'Loan protection cover', 'Guided policy selection']
    }
  ];

  var grid = document.getElementById('servicesGrid');
  if (grid) {
    services.forEach(function (s) {
      var card = document.createElement('div');
      card.className = 'svc-card';
      card.innerHTML =
        '<div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + s.icon + '</svg></div>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.desc + '</p>' +
        '<div class="svc-more">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></div>' +
        '<div class="svc-detail"><ul>' + s.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>';
      card.addEventListener('click', function () {
        var wasOpen = card.classList.contains('open');
        grid.querySelectorAll('.svc-card.open').forEach(function (c) { c.classList.remove('open'); });
        if (!wasOpen) card.classList.add('open');
      });
      grid.appendChild(card);
    });
  }

  /* ---------- BANK PARTNERS ---------- */
  var partners = [
    { name: 'HDFC Bank', tag: 'Banking Partner', mark: 'HDFC', color: '#0b3a6b' },
    { name: 'ICICI Bank', tag: 'Banking Partner', mark: 'ICICI', color: '#8c2b2b' },
    { name: 'State Bank of India', tag: 'Banking Partner', mark: 'SBI', color: '#1a5fa8' },
    { name: 'Indian Bank', tag: 'Banking Partner', mark: 'IB', color: '#b8860b' },
    { name: 'YES Bank', tag: 'Banking Partner', mark: 'YES', color: '#1e1e1e' },
    { name: 'PNB Housing Finance', tag: 'Home Finance', mark: 'PNB', color: '#a3132b' },
    { name: 'Repco Home Finance', tag: 'Home Finance', mark: 'RH', color: '#c22a7c' },
    { name: 'IFFCO‑Tokio', tag: 'General Insurance', mark: 'IT', color: '#0f7a3d' }
  ];
  var pGrid = document.getElementById('partnersGrid');
  if (pGrid) {
    partners.forEach(function (p) {
      var el = document.createElement('div');
      el.className = 'partner-badge';
      el.innerHTML =
        '<div class="pb-mark" style="background:' + p.color + '">' + p.mark + '</div>' +
        '<span>' + p.name + '</span><small>' + p.tag + '</small>';
      pGrid.appendChild(el);
    });
  }

  /* ---------- FAQ ---------- */
  var faqs = [
    { q: 'What documents do I need to apply?', a: 'Typically ID & address proof, income proof (salary slips / ITR / bank statements), and property or business documents where applicable. We\'ll give you an exact checklist for your loan type.' },
    { q: 'How long does approval usually take?', a: 'Most personal and vehicle loans are approved within 24–48 hours of complete documentation. Home and business loans may take a little longer depending on the bank\'s process.' },
    { q: 'Do you charge for the consultation?', a: 'Our initial consultation and eligibility check are completely free. We are transparent about any applicable service charges before you proceed.' },
    { q: 'Can I prepay or foreclose my loan?', a: 'Yes, most of our partner banks allow part-prepayment or foreclosure — terms vary by lender and loan type, which we\'ll explain upfront.' },
    { q: 'Which cities do you serve?', a: 'We are based in Madurai and actively assist customers across Madurai and surrounding Tamil Nadu, with select outstation cases handled on request.' }
  ];
  var faqWrap = document.getElementById('faqWrap');
  if (faqWrap) {
    faqs.forEach(function (f) {
      var item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML =
        '<button class="faq-q">' + f.q + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg></button>' +
        '<div class="faq-a"><p>' + f.a + '</p></div>';
      item.querySelector('.faq-q').addEventListener('click', function () {
        var wasOpen = item.classList.contains('open');
        faqWrap.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
      faqWrap.appendChild(item);
    });
  }

  /* ---------- EMI CALCULATOR ---------- */
  var amtRange = document.getElementById('amtRange');
  var rateRange = document.getElementById('rateRange');
  var yrRange = document.getElementById('yrRange');
  var amtOut = document.getElementById('amtOut');
  var rateOut = document.getElementById('rateOut');
  var yrOut = document.getElementById('yrOut');
  var emiOut = document.getElementById('emiOut');
  var intOut = document.getElementById('intOut');
  var totOut = document.getElementById('totOut');

  function inr(n) {
    return '₹' + Math.round(n).toLocaleString('en-IN');
  }

  function calcEMI() {
    var P = parseFloat(amtRange.value);
    var annualRate = parseFloat(rateRange.value);
    var years = parseFloat(yrRange.value);
    var r = annualRate / 12 / 100;
    var n = years * 12;
    var emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    if (!isFinite(emi) || isNaN(emi)) emi = 0;
    var total = emi * n;
    var interest = total - P;

    amtOut.textContent = inr(P);
    rateOut.textContent = annualRate.toFixed(1) + '%';
    yrOut.textContent = years + ' yrs';
    emiOut.textContent = inr(emi);
    intOut.textContent = inr(interest);
    totOut.textContent = inr(total);
  }

  [amtRange, rateRange, yrRange].forEach(function (el) {
    if (el) el.addEventListener('input', calcEMI);
  });
  if (amtRange) calcEMI();

  /* ---------- COUNTER ANIMATION ---------- */
  var counters = document.querySelectorAll('.counter');
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-target'), 10);
        var start = 0;
        var duration = 1400;
        var startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          el.textContent = Math.floor(progress * (target - start) + start).toLocaleString('en-IN');
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString('en-IN') + (target >= 100 && target !== 1000 && target !== 8 ? '' : '');
        }
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { counterObserver.observe(c); });

  /* ---------- SCROLL REVEAL ---------- */
  var revealTargets = document.querySelectorAll('.svc-card, .process-step, .partner-badge, .testi-card, .why-list li');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(function (el) { revealObserver.observe(el); });

  /* ---------- CONTACT FORM (front-end only) ---------- */
  var form = document.getElementById('loanForm');
  var success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.classList.add('show');
      form.reset();
      setTimeout(function () { success.classList.remove('show'); }, 6000);
    });
  }

});

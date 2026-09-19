import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function About() {
  const [mode, setMode] = useState('buyer');
  const buyerSteps = [
    ['01', 'Find something with a story', 'Browse live lots by category, price, or the things that keep catching your eye.'],
    ['02', 'Make your best bid', 'Enter your maximum and we will bid on your behalf, only when you need us to.'],
    ['03', 'Enjoy the win', 'We confirm the details, protect your payment, and help your new piece find its way home.'],
  ];
  const sellerSteps = [
    ['01', 'Tell us about your piece', 'Share a few details and photographs. Our specialists help set the right starting point.'],
    ['02', 'Meet your audience', 'Your item reaches a community of collectors who know what makes it special.'],
    ['03', 'Let the bids climb', 'We handle payment and delivery coordination once the hammer falls.'],
  ];
  const steps = mode === 'buyer' ? buyerSteps : sellerSteps;

  return <main className="how-page">
    <section className="how-hero"><div className="container how-hero-inner"><div><span className="eyebrow">How it works</span><h1 className="page-title">A better way to find what matters.</h1><p className="page-intro">BidHub brings the warmth of a real auction house online: considered objects, clear bidding, and people who care about the details.</p></div><div className="how-hero-stamp"><span>EST.</span><strong>2024</strong><small>Objects with a past<br />for people with taste.</small></div></div></section>
    <section className="how-process section"><div className="container"><div className="process-intro"><div><span className="eyebrow">Choose your adventure</span><h2>Every good story<br />starts with a look.</h2></div><div className="mode-switch" role="tablist" aria-label="Choose a guide"><button className={mode === 'buyer' ? 'mode-button selected' : 'mode-button'} onClick={() => setMode('buyer')} role="tab" aria-selected={mode === 'buyer'}>I want to buy</button><button className={mode === 'seller' ? 'mode-button selected' : 'mode-button'} onClick={() => setMode('seller')} role="tab" aria-selected={mode === 'seller'}>I want to sell</button></div></div><div className="process-grid">{steps.map(([number, title, description]) => <article className="process-step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="trust-section"><div className="container trust-grid"><div className="trust-copy"><span className="eyebrow">Made for confidence</span><h2>Nothing hidden<br />behind the hammer.</h2><p>From clear fees to verified sellers, we believe the best auctions are the ones that feel exciting and straightforward at the same time.</p><Link to="/auctions" className="btn-black">See live lots ↗</Link></div><div className="trust-list"><div><strong>01</strong><h3>Verified listings</h3><p>Every lot is reviewed before it joins the collection.</p></div><div><strong>02</strong><h3>Protected payments</h3><p>Your payment stays secure until the transaction is complete.</p></div><div><strong>03</strong><h3>Human support</h3><p>A real person is here when you need a little help.</p></div></div></div></section>
    <section className="how-faq section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Good to know</span><h2>Questions, answered.</h2></div></div><div className="faq-grid"><details open><summary>Do I need an account to browse?</summary><p>No. You can explore every live lot without signing in. An account is only needed when you are ready to bid or sell.</p></details><details><summary>What happens when I win?</summary><p>We will email a secure payment link and delivery options immediately after the auction closes.</p></details><details><summary>Can I change my bid?</summary><p>Bids are binding, so review your maximum carefully before confirming. Our team is happy to answer questions first.</p></details></div></div></section>
    <section className="cta"><h2>Ready to see what is waiting?</h2><div className="cta-actions"><Link to="/auctions" className="btn-black">Explore auctions ↗</Link><Link to="/register" className="btn-white">Create an account</Link></div></section>
  </main>;
}

export default About;

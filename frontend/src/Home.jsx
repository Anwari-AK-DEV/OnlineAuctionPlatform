import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from './api';
import { Auctions, Categories } from './auctionData';
import AuctionCard from './AuctionCard';
import './App.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All lots');
  const [auctions, setAuctions] = useState(Auctions);
  useEffect(() => {
    apiRequest('/auctions').then(setAuctions).catch(() => {});
  }, []);
  const filteredAuctions = useMemo(() => auctions.filter((auction) => {
    const matchesQuery = auction.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All lots' || auction.category === category;
    return matchesQuery && matchesCategory;
  }), [auctions, category, query]);

  return <div className="home-page">
    <main className="container">
      <section className="hero"><div><span className="eyebrow">The considered auction house</span><h1 className="hero-title">Good things go to the highest bidder.</h1><p className="hero-desc">A carefully selected marketplace for objects with a story. Find the piece you have been looking for, then make it yours.</p><div className="hero-actions"><Link to="/auctions" className="btn-black">Explore live lots <span aria-hidden="true">↗</span></Link><Link to="/register" className="btn-white">Sell an item</Link></div></div><div className="hero-art"><img src="https://images.unsplash.com/photo-1582004324647-60071032637b?w=1000" alt="Wooden auction gavel on a desk" /><div className="hero-note"><strong>01—24</strong>New lots arrive every week, sourced from collectors around the world.</div></div></section>
      <section className="section" id="lots"><div className="section-heading"><div><span className="eyebrow">Curated for you</span><h2>Lots ending soon</h2><p>Make your move before the clock runs out.</p></div><Link to="/auctions" className="view-all">See all auctions ↗</Link></div><div className="lot-toolbar"><label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" aria-label="Search auctions" /></label><select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category"><option>All lots</option>{Categories.map((item) => <option key={item.name}>{item.name}</option>)}</select></div><div className="auction-grid">{filteredAuctions.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}</div>{!filteredAuctions.length && <p className="empty-state">No lots match that search. Try another phrase.</p>}</section>
    </main>
    <section className="section section-alt"><div className="container"><div className="section-heading"><div><span className="eyebrow">Browse by interest</span><h2>Find your next obsession.</h2></div><Link to="/categories" className="view-all">All categories ↗</Link></div><div className="category-grid">{Categories.slice(0, 4).map((item) => <Link to="/categories" key={item.name} className="category-card"><div className="cat-icon">{item.icon}</div><h4>{item.name}</h4><span>{item.count}</span></Link>)}</div></div></section>
    <section className="stats-band"><div className="container stat-black"><div><h3>1,000+</h3><p>Collectors</p></div><div><h3>500+</h3><p>Live auctions</p></div><div><h3>98%</h3><p>Happy winners</p></div><div><h3>24/7</h3><p>Buyer support</p></div></div></section>
    <section className="section how-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Simple by design</span><h2>From curious to collector.</h2></div></div><div className="how-grid"><div className="how-card"><span>01</span><h4>Find a lot</h4><p>Explore a collection shaped by people, not algorithms.</p></div><div className="how-card"><span>02</span><h4>Place a bid</h4><p>Set your limit and let our transparent bidding do the rest.</p></div><div className="how-card"><span>03</span><h4>Take it home</h4><p>Win with confidence, backed by buyer protection.</p></div></div></div></section>
    <section className="cta"><h2>There is always one more thing worth finding.</h2><div className="cta-actions"><Link to="/auctions" className="btn-black">Explore auctions ↗</Link><Link to="/register" className="btn-white">Start selling</Link></div></section>
  </div>;
}
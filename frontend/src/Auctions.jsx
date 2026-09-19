import { useEffect, useState } from 'react';
import { apiRequest } from './api';
import { Auctions as fallbackAuctions } from './auctionData';
import AuctionCard from './AuctionCard';
import './App.css';

export default function AuctionsPage() {
    const [auctions, setAuctions] = useState(fallbackAuctions);
    useEffect(() => {
        apiRequest('/auctions').then(setAuctions).catch(() => {});
    }, []);
    return <main className="container page-content"><div className="section-heading"><div><span className="eyebrow">The full collection</span><h1 className="page-title">All live auctions</h1><p className="page-intro">Open lots, honest bidding, and something unexpected around every corner.</p></div></div><div className="auction-grid">{auctions.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}</div></main>;
}
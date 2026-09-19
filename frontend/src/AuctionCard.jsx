import { Link } from 'react-router-dom';
import './App.css';

export default function AuctionCard({ auction }) {
    return (
        <div className="auction-card">
            <div className="auction-card-img-wrap">
                <img src={auction.image} alt={auction.name} />
                <span className="badge category-badge">{auction.category}</span>
                <span className="badge time-badge">{auction.timeLeft}</span>
            </div>
            <div className="auction-card-body">
                <h3 className="auction-title">{auction.name}</h3>
                <div className="auction-meta">
                    <div>
                        <p className="meta-label">Current bid</p>
                        <p className="meta-value">${auction.currentBid.toLocaleString()}</p>
                        <p className="meta-sub">{auction.bids} bids</p>
                    </div>
                    <Link to={`/auctions/${auction.id}`} className="btn-black-sm">View lot</Link>
                </div>
            </div>
        </div>
    );
}

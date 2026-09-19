import { Link } from 'react-router-dom';
import { Categories as categoryData } from './auctionData';
import './App.css';

function Categories() {
  return <main className="container page-content"><span className="eyebrow">Browse the collection</span><h1 className="page-title">What are you looking for?</h1><p className="page-intro">From modern design to old-world treasures, start somewhere that feels like you.</p><div className="category-grid category-grid-large">{categoryData.map((category) => <Link to="/auctions" className="category-card" key={category.name}><div className="cat-icon">{category.icon}</div><h4>{category.name}</h4><span>{category.count} ↗</span></Link>)}</div></main>;
}

export default Categories;

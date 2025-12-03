import { useState, useMemo } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/productsData';
import './Collections.css';

const Collections = () => {
  const [selectedGenders, setSelectedGenders] = useState(['all', 'women']);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState(['all']);
  const [sortBy, setSortBy] = useState('featured');
  const [collapsedFilters, setCollapsedFilters] = useState({
    type: true,
    price: false
  });

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
   
      if (selectedGenders.length > 0 && !selectedGenders.includes('all') && !selectedGenders.includes(product.gender)) {
        return false;
      }


      if (selectedTypes.length > 0 && !selectedTypes.includes(product.category)) {
        return false;
      }

     
      if (selectedPrices.length > 0 && !selectedPrices.includes('all')) {
        const inPriceRange = selectedPrices.some(range => {
          if (range === '0-3000') return product.price <= 3000;
          if (range === '3000-6000') return product.price > 3000 && product.price <= 6000;
          if (range === '6000-9000') return product.price > 6000 && product.price <= 9000;
          if (range === '9000+') return product.price > 9000;
          return false;
        });
        if (!inPriceRange) return false;
      }

      return true;
    });

    
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        case 'rating':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedGenders, selectedTypes, selectedPrices, sortBy]);

  const handleGenderChange = (value) => {
    setSelectedGenders(prev => {
      if (value === 'all') {
        return ['all'];
      }
      const newGenders = prev.includes(value) ? prev.filter(g => g !== value) : [...prev.filter(g => g !== 'all'), value];
      return newGenders.length === 0 ? ['all'] : newGenders;
    });
  };

  const handleTypeChange = (value) => {
    setSelectedTypes(prev => prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]);
  };

  const handlePriceChange = (value) => {
    setSelectedPrices(prev => {
      if (value === 'all') {
        return ['all'];
      }
      const newPrices = prev.includes(value) ? prev.filter(p => p !== value) : [...prev.filter(p => p !== 'all'), value];
      return newPrices.length === 0 ? ['all'] : newPrices;
    });
  };

  const clearAllFilters = () => {
    setSelectedGenders(['all', 'women']);
    setSelectedTypes([]);
    setSelectedPrices(['all']);
    setSortBy('featured');
  };

  const toggleFilterGroup = (filterName) => {
    setCollapsedFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  return (
    <>
      <Header />
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <a href="/">Home</a> / Collections
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="collections-page">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filters-header">
              <h3 className="filters-title">Filters</h3>
              <button className="clear-all" onClick={clearAllFilters}>CLEAR ALL</button>
            </div>
            
            <div className="filter-group">
              <div className="filter-group-header" onClick={() => toggleFilterGroup('gender')}>
                <h4 className="filter-group-title">Gender</h4>
                <i className={`fas fa-minus filter-toggle ${collapsedFilters.gender ? 'open' : ''}`}></i>
              </div>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="gender-all" 
                    value="all" 
                    checked={selectedGenders.includes('all')}
                    onChange={() => handleGenderChange('all')}
                  />
                  <label htmlFor="gender-all">All</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="gender-men" 
                    value="men"
                    checked={selectedGenders.includes('men')}
                    onChange={() => handleGenderChange('men')}
                  />
                  <label htmlFor="gender-men">Men</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="gender-women" 
                    value="women"
                    checked={selectedGenders.includes('women')}
                    onChange={() => handleGenderChange('women')}
                  />
                  <label htmlFor="gender-women">Women</label>
                </div>
              </div>
            </div>

            <div className={`filter-group ${collapsedFilters.type ? 'collapsed' : ''}`}>
              <div className="filter-group-header" onClick={() => toggleFilterGroup('type')}>
                <h4 className="filter-group-title">Type</h4>
                <i className={`fas fa-${collapsedFilters.type ? 'minus' : 'plus'} filter-toggle`}></i>
              </div>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="type-lehenga" 
                    value="lehenga"
                    checked={selectedTypes.includes('lehenga')}
                    onChange={() => handleTypeChange('lehenga')}
                  />
                  <label htmlFor="type-lehenga">Lehenga</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="type-gown" 
                    value="gown"
                    checked={selectedTypes.includes('gown')}
                    onChange={() => handleTypeChange('gown')}
                  />
                  <label htmlFor="type-gown">Gown</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="type-sherwani" 
                    value="sherwani"
                    checked={selectedTypes.includes('sherwani')}
                    onChange={() => handleTypeChange('sherwani')}
                  />
                  <label htmlFor="type-sherwani">Sherwani</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="type-jewelry" 
                    value="jewelry"
                    checked={selectedTypes.includes('jewelry')}
                    onChange={() => handleTypeChange('jewelry')}
                  />
                  <label htmlFor="type-jewelry">Jewelry</label>
                </div>
              </div>
            </div>

            <div className={`filter-group ${collapsedFilters.price ? 'collapsed' : ''}`}>
              <div className="filter-group-header" onClick={() => toggleFilterGroup('price')}>
                <h4 className="filter-group-title">Price</h4>
                <i className={`fas fa-${collapsedFilters.price ? 'minus' : 'plus'} filter-toggle`}></i>
              </div>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="price-all" 
                    value="all" 
                    checked={selectedPrices.includes('all')}
                    onChange={() => handlePriceChange('all')}
                  />
                  <label htmlFor="price-all">All</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="price-0-3000" 
                    value="0-3000"
                    checked={selectedPrices.includes('0-3000')}
                    onChange={() => handlePriceChange('0-3000')}
                  />
                  <label htmlFor="price-0-3000">0-3000</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="price-3000-6000" 
                    value="3000-6000"
                    checked={selectedPrices.includes('3000-6000')}
                    onChange={() => handlePriceChange('3000-6000')}
                  />
                  <label htmlFor="price-3000-6000">3000-6000</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="price-6000-9000" 
                    value="6000-9000"
                    checked={selectedPrices.includes('6000-9000')}
                    onChange={() => handlePriceChange('6000-9000')}
                  />
                  <label htmlFor="price-6000-9000">6000-9000</label>
                </div>
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="price-9000+" 
                    value="9000+"
                    checked={selectedPrices.includes('9000+')}
                    onChange={() => handlePriceChange('9000+')}
                  />
                  <label htmlFor="price-9000+">9000</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Section */}
          <section className="products-section">
            <div className="products-header">
              <div className="sort-dropdown">
                <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Sort By</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Most Popular</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Collections;


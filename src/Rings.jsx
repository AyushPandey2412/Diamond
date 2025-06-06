import React, { useState } from 'react';
import { Heart, Filter, ChevronDown } from 'lucide-react';
import Header from "./Header"

const Rings = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState('default');
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState('all');

  const earrings = [
    { 
      id: 1, 
      name: "Round Lab Diamond Stud Earrings (2 ct. tw.)", 
      price: 1995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      badge: "MOST LOVED", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 2, 
      name: "Princess Cut Diamond Stud Earrings (1.5 ct. tw.)", 
      price: 2495, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 3, 
      name: "Emerald Cut Diamond Drop Earrings (3 ct. tw.)", 
      price: 5500, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 4, 
      name: "Sapphire and Diamond Halo Earrings (1 ct. tw.)", 
      price: 3295, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 5, 
      name: "Round Lab Diamond Stud Earrings (3 ct. tw.)", 
      price: 2795, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 6, 
      name: "Oval Diamond Drop Earrings (2.5 ct. tw.)", 
      price: 4195, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      badge: "BEST SELLER", 
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 7, 
      name: "Pearl and Diamond Dangle Earrings", 
      price: 1850, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 8, 
      name: "Ruby and Diamond Cluster Earrings", 
      price: 3795, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 9, 
      name: "Cushion Cut Diamond Halo Earrings (2 ct. tw.)", 
      price: 3495, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 10, 
      name: "Marquise Diamond Drop Earrings (1.8 ct. tw.)", 
      price: 2995, 
      colors: ['rose-gold', 'white-gold', 'yellow-gold'], 
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 11, 
      name: "Emerald and Diamond Art Deco Earrings", 
      price: 6200, 
      colors: ['white-gold'], 
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80" 
    },
    { 
      id: 12, 
      name: "Vintage Style Diamond Chandelier Earrings", 
      price: 4850, 
      colors: ['yellow-gold'], 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
    }
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getColorClass = (color) => {
    const colorMap = {
      'rose-gold': 'bg-rose-300 border-rose-400',
      'white-gold': 'bg-gray-100 border-gray-300',
      'yellow-gold': 'bg-yellow-300 border-yellow-400'
    };
    return colorMap[color] || 'bg-gray-200 border-gray-300';
  };

  const filteredEarrings = earrings
    .filter(item => {
      if (priceRange === 'under-2500') return item.price < 2500;
      if (priceRange === '2500-4000') return item.price >= 2500 && item.price <= 4000;
      if (priceRange === 'above-4000') return item.price > 4000;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f0' }}>
      <Header></Header>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          .font-typo-grotesk {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 500;
          }
          
          .font-yorkten {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .font-museo-sans {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .font-gibson {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .color-primary {
            color: #52583c;
          }
          
          .color-primary-medium {
            color: #6b7149;
          }
          
          .color-primary-light {
            color: #a8b085;
          }
          
          .bg-primary {
            background-color: #52583c;
          }
          
          .bg-primary-medium {
            background-color: #6b7149;
          }
          
          .bg-primary-light {
            background-color: #a8b085;
          }
          
          .border-primary {
            border-color: #52583c;
          }
          
          .border-primary-medium {
            border-color: #6b7149;
          }
          
          .border-primary-light {
            border-color: #a8b085;
          }
          
          .hover\\:bg-primary-light:hover {
            background-color: #a8b085;
          }
          
          .hover\\:border-primary:hover {
            border-color: #52583c;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm font-yorkten color-primary-medium">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Rings</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-typo-grotesk color-primary mb-6 tracking-wide">
            RINGS
          </h1>
          
          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <button 
              onClick={() => setShowFilter(!showFilter)} 
              className="flex items-center justify-center gap-2 px-4 py-2 border border-primary-medium rounded-sm color-primary hover:bg-primary-light hover:text-white transition-colors w-full sm:w-auto font-museo-sans"
            >
              <Filter size={16} />
              FILTER
            </button>
            
            <div className="relative w-full sm:w-auto">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="appearance-none bg-white border border-primary-medium rounded-sm px-4 py-2 pr-8 color-primary w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary-light font-museo-sans"
              >
                <option value="default">SORT</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 color-primary-medium pointer-events-none" size={16} />
            </div>
          </div>

          {/* Filter Options */}
          {showFilter && (
            <div className="mt-4 p-4 bg-white rounded-sm border border-primary-light">
              <h3 className="text-sm font-medium color-primary mb-3 font-typo-grotesk">Price Range</h3>
              <div className="flex flex-wrap gap-4 text-sm font-yorkten">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="all" 
                    checked={priceRange === 'all'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">All Prices</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="under-2500" 
                    checked={priceRange === 'under-2500'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">Under $2,500</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="2500-4000" 
                    checked={priceRange === '2500-4000'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">$2,500 - $4,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    value="above-4000" 
                    checked={priceRange === 'above-4000'} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="color-primary-medium">Above $4,000</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredEarrings.map((earring) => (
            <div 
              key={earring.id} 
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary-light border border-transparent"
              onClick={() => {
                // Navigate to individual earring page
                window.location.href = `/earring/${earring.id}`;
              }}
            >
              <div className="relative">
                {/* Badge */}
                {earring.badge && (
                  <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-sm z-10 font-museo-sans ${
                    earring.badge === 'MOST LOVED' ? 'bg-primary text-white' : 'bg-primary-medium text-white'
                  }`}>
                    {earring.badge}
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(earring.id);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow z-10"
                  aria-label={favorites.has(earring.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart 
                    size={18} 
                    className={`${
                      favorites.has(earring.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    } transition-colors`} 
                    style={!favorites.has(earring.id) ? { color: '#a8b085' } : {}}
                  />
                </button>
                
                {/* Product Image */}
                <div className="aspect-square bg-gray-50 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={earring.image} 
                    alt={earring.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Color Options */}
                <div className="flex gap-1 mb-3">
                  {earring.colors.map((color, index) => (
                    <div 
                      key={index} 
                      className={`w-4 h-4 rounded-full border ${getColorClass(color)} cursor-pointer hover:scale-110 transition-transform`}
                      title={color.replace('-', ' ')}
                    />
                  ))}
                </div>
                
                {/* Product Name */}
                <h3 className="text-sm font-medium color-primary mb-2 line-clamp-2 leading-relaxed font-gibson">
                  {earring.name}
                </h3>
                
                {/* Price */}
                <p className="text-lg font-semibold color-primary font-typo-grotesk">
                  {formatPrice(earring.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no products found */}
        {filteredEarrings.length === 0 && (
          <div className="text-center py-12">
            <p className="color-primary-medium text-lg font-yorkten">No earrings found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rings;
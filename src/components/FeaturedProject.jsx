import React, { useState } from 'react'
import { 
  Laptop, Smartphone, CheckCircle, AlertTriangle, 
  ArrowRight, ShieldAlert, Users, Layers, Award,
  Lock, LayoutDashboard, Package, PlusCircle, 
  UserCheck, History, Eye, Terminal, Search, Filter, Trash2, Edit2
} from 'lucide-react'

export default function FeaturedProject() {
  const [selectedScreen, setSelectedScreen] = useState('dashboard')
  const [demoProducts, setDemoProducts] = useState([
    { id: '1', name: 'Ergonomic Office Chair', sku: 'FUR-CH-001', qty: 25, price: 189.99, status: 'In Stock', supplier: 'Steelcase Inc.' },
    { id: '2', name: 'Wireless Mechanical Keyboard', sku: 'TEC-KB-082', qty: 4, price: 129.99, status: 'Low Stock', supplier: 'Logitech' },
    { id: '3', name: 'UltraWide 34" Monitor', sku: 'TEC-MN-034', qty: 0, price: 449.99, status: 'Out of Stock', supplier: 'Dell Technologies' },
    { id: '4', name: 'USB-C Charging Dock', sku: 'TEC-DK-011', qty: 52, price: 49.99, status: 'In Stock', supplier: 'Anker Corp' },
    { id: '5', name: 'Noise Cancelling Headphones', sku: 'TEC-HP-005', qty: 2, price: 299.99, status: 'Low Stock', supplier: 'Sony India' }
  ])
  const [searchQuery, setSearchQuery] = useState('')
  const [newProduct, setNewProduct] = useState({ name: '', sku: '', qty: '', price: '', supplier: '' })

  const screens = [
    { id: 'login', name: '1. Login Screen', icon: <Lock size={16} /> },
    { id: 'dashboard', name: '2. Main Dashboard', icon: <LayoutDashboard size={16} /> },
    { id: 'products', name: '3. Products Page', icon: <Package size={16} /> },
    { id: 'add-product', name: '4. Add Product Form', icon: <PlusCircle size={16} /> },
    { id: 'suppliers', name: '5. Suppliers List', icon: <UserCheck size={16} /> },
    { id: 'stock', name: '6. Stock Transactions', icon: <History size={16} /> },
    { id: 'mobile-view', name: '7. Mobile Responsiveness', icon: <Smartphone size={16} /> }
  ]

  const handleAddProductSubmit = (e) => {
    e.preventDefault()
    if (!newProduct.name || !newProduct.sku || !newProduct.qty || !newProduct.price) return
    const status = parseInt(newProduct.qty) === 0 ? 'Out of Stock' : parseInt(newProduct.qty) < 5 ? 'Low Stock' : 'In Stock'
    const product = {
      id: (demoProducts.length + 1).toString(),
      name: newProduct.name,
      sku: newProduct.sku,
      qty: parseInt(newProduct.qty),
      price: parseFloat(newProduct.price),
      status: status,
      supplier: newProduct.supplier || 'Generic'
    }
    setDemoProducts([product, ...demoProducts])
    setNewProduct({ name: '', sku: '', qty: '', price: '', supplier: '' })
    setSelectedScreen('products')
  }

  // Filtered Products
  const filteredProducts = demoProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Stats
  const totalProducts = demoProducts.length
  const lowStock = demoProducts.filter(p => p.qty > 0 && p.qty <= 5).length
  const outOfStock = demoProducts.filter(p => p.qty === 0).length
  const totalSuppliers = 5

  // Render simulated screens
  const renderSimulatedScreen = (isMobileLayout = false) => {
    const activeView = isMobileLayout ? 'dashboard' : selectedScreen

    return (
      <div className={`simulator-view ${isMobileLayout ? 'mobile' : ''}`}>
        {/* Navigation Sidebar / Header */}
        <div className="sim-nav">
          <div className="sim-logo">
            <Terminal size={16} className="logo-color" />
            <span>StockSync</span>
          </div>
          {!isMobileLayout && (
            <div className="sim-nav-links">
              <span className={activeView === 'dashboard' ? 'active' : ''} onClick={() => setSelectedScreen('dashboard')}><LayoutDashboard size={14} /> Dashboard</span>
              <span className={activeView === 'products' ? 'active' : ''} onClick={() => setSelectedScreen('products')}><Package size={14} /> Products</span>
              <span className={activeView === 'add-product' ? 'active' : ''} onClick={() => setSelectedScreen('add-product')}><PlusCircle size={14} /> Add Product</span>
              <span className={activeView === 'suppliers' ? 'active' : ''} onClick={() => setSelectedScreen('suppliers')}><UserCheck size={14} /> Suppliers</span>
              <span className={activeView === 'stock' ? 'active' : ''} onClick={() => setSelectedScreen('stock')}><History size={14} /> Stock Log</span>
            </div>
          )}
        </div>

        {/* Inner Page Viewport */}
        <div className="sim-body">
          {activeView === 'login' && (
            <div className="sim-login-container">
              <div className="sim-login-card">
                <h3>Welcome Back</h3>
                <p>Sign in to manage stock and suppliers</p>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="text" placeholder="demo@stocksync.com" disabled />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="••••••••" disabled />
                </div>
                <button type="button" className="sim-btn sim-btn-primary" onClick={() => setSelectedScreen('dashboard')}>
                  Sign In
                </button>
              </div>
            </div>
          )}

          {activeView === 'dashboard' && (
            <div className="sim-dashboard">
              <div className="sim-header">
                <h2>Overview Dashboard</h2>
                <div className="sim-date">As of today</div>
              </div>
              
              {/* Metric Cards */}
              <div className="sim-stats-grid">
                <div className="sim-stat-card">
                  <span className="stat-label">Total Products</span>
                  <span className="stat-val">{totalProducts}</span>
                </div>
                <div className="sim-stat-card warning">
                  <span className="stat-label">Low Stock</span>
                  <span className="stat-val">{lowStock}</span>
                </div>
                <div className="sim-stat-card danger">
                  <span className="stat-label">Out of Stock</span>
                  <span className="stat-val">{outOfStock}</span>
                </div>
                <div className="sim-stat-card">
                  <span className="stat-label">Suppliers</span>
                  <span className="stat-val">{totalSuppliers}</span>
                </div>
              </div>

              {/* Chart Placeholder & Search */}
              <div className="sim-dash-row">
                <div className="sim-chart-card">
                  <h4>Stock Level Distribution</h4>
                  <div className="svg-chart-placeholder">
                    <svg viewBox="0 0 400 120" width="100%">
                      <rect x="20" y="30" width="50" height="90" fill="#6366f1" rx="4"/>
                      <rect x="90" y="80" width="50" height="40" fill="#facc15" rx="4"/>
                      <rect x="160" y="100" width="50" height="20" fill="#f43f5e" rx="4"/>
                      <rect x="230" y="15" width="50" height="105" fill="#06b6d4" rx="4"/>
                      <rect x="300" y="45" width="50" height="75" fill="#818cf8" rx="4"/>
                      <text x="45" y="115" textAnchor="middle" fill="#64748b" fontSize="8">Chairs</text>
                      <text x="115" y="115" textAnchor="middle" fill="#64748b" fontSize="8">Keys</text>
                      <text x="185" y="115" textAnchor="middle" fill="#64748b" fontSize="8">Monitors</text>
                      <text x="255" y="115" textAnchor="middle" fill="#64748b" fontSize="8">Docks</text>
                      <text x="325" y="115" textAnchor="middle" fill="#64748b" fontSize="8">Phones</text>
                    </svg>
                  </div>
                </div>

                <div className="sim-recent-card">
                  <h4>Recent Transactions</h4>
                  <div className="recent-list">
                    <div className="recent-item">
                      <span className="badge-in">+ 15 Qty</span>
                      <span className="item-name">USB-C Charging Dock</span>
                      <span className="item-time">10m ago</span>
                    </div>
                    <div className="recent-item">
                      <span className="badge-out">- 2 Qty</span>
                      <span className="item-name">Ergonomic Office Chair</span>
                      <span className="item-time">1h ago</span>
                    </div>
                    <div className="recent-item">
                      <span className="badge-alert">Low Stock</span>
                      <span className="item-name">Wireless Keyboard</span>
                      <span className="item-time">3h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'products' && (
            <div className="sim-products">
              <div className="sim-header">
                <h2>Products Directory</h2>
                <button type="button" className="sim-btn sim-btn-primary" onClick={() => setSelectedScreen('add-product')}>
                  + Add Product
                </button>
              </div>

              {/* Filters */}
              <div className="sim-filters">
                <div className="search-box">
                  <Search size={14} />
                  <input 
                    type="text" 
                    placeholder="Search by name/SKU..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="filter-badge">
                  <Filter size={12} /> Filter
                </div>
              </div>

              {/* Data Table */}
              <div className="table-wrapper">
                <table className="sim-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>SKU</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((p) => (
                      <tr key={p.id}>
                        <td>{p.name}</td>
                        <td><code>{p.sku}</code></td>
                        <td>{p.qty}</td>
                        <td>${p.price.toFixed(2)}</td>
                        <td>
                          <span className={`status-pill ${p.status.toLowerCase().replace(' ', '-')}`}>
                            {p.status}
                          </span>
                        </td>
                        <td>
                          <div className="table-actions">
                            <Edit2 size={12} />
                            <Trash2 size={12} onClick={() => setDemoProducts(demoProducts.filter(item => item.id !== p.id))} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeView === 'add-product' && (
            <div className="sim-add-product">
              <div className="sim-header">
                <h2>Add New Product</h2>
              </div>
              <form className="sim-form" onSubmit={handleAddProductSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Product Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Mechanical Mouse" 
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>SKU Code *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. TEC-MS-004" 
                      value={newProduct.sku}
                      onChange={(e) => setNewProduct({...newProduct, sku: e.target.value})}
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Initial Stock Level *</label>
                    <input 
                      type="number" 
                      placeholder="10" 
                      value={newProduct.qty}
                      onChange={(e) => setNewProduct({...newProduct, qty: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Unit Price ($) *</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      placeholder="59.99" 
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Supplier Partner</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Logitech Ltd" 
                    value={newProduct.supplier}
                    onChange={(e) => setNewProduct({...newProduct, supplier: e.target.value})}
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="sim-btn sim-btn-secondary" onClick={() => setSelectedScreen('products')}>Cancel</button>
                  <button type="submit" className="sim-btn sim-btn-primary">Save Product</button>
                </div>
              </form>
            </div>
          )}

          {activeView === 'suppliers' && (
            <div className="sim-suppliers">
              <div className="sim-header">
                <h2>Active Supplier Partners</h2>
              </div>
              <table className="sim-table">
                <thead>
                  <tr>
                    <th>Supplier Name</th>
                    <th>Partner Class</th>
                    <th>Representative Contact</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Steelcase Inc.</td>
                    <td>Tier 1</td>
                    <td>john.d@steelcase.com</td>
                    <td><span className="status-pill in-stock">Active</span></td>
                  </tr>
                  <tr>
                    <td>Logitech</td>
                    <td>Tier 1</td>
                    <td>accounts@logitech.com</td>
                    <td><span className="status-pill in-stock">Active</span></td>
                  </tr>
                  <tr>
                    <td>Dell Technologies</td>
                    <td>Tier 1</td>
                    <td>enterprise@dell.com</td>
                    <td><span className="status-pill in-stock">Active</span></td>
                  </tr>
                  <tr>
                    <td>Sony India</td>
                    <td>Tier 2</td>
                    <td>support@sony.co.in</td>
                    <td><span className="status-pill low-stock">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeView === 'stock' && (
            <div className="sim-stock">
              <div className="sim-header">
                <h2>Inventory Transactions</h2>
              </div>
              <div className="sim-log-list">
                <div className="log-item">
                  <div className="log-meta">
                    <span className="log-action action-in">INBOUND</span>
                    <span className="log-sku"><code>TEC-DK-011</code></span>
                  </div>
                  <p>Restocked 15 USB-C Charging Docks by supplier Anker Corp.</p>
                  <span className="log-date">Today at 1:12 PM</span>
                </div>
                <div className="log-item">
                  <div className="log-meta">
                    <span className="log-action action-out">OUTBOUND</span>
                    <span className="log-sku"><code>FUR-CH-001</code></span>
                  </div>
                  <p>Shipped 2 Ergonomic Office Chairs for Customer Order #2049.</p>
                  <span className="log-date">Today at 12:20 PM</span>
                </div>
                <div className="log-item">
                  <div className="log-meta">
                    <span className="log-action action-alert">ALERT</span>
                    <span className="log-sku"><code>TEC-KB-082</code></span>
                  </div>
                  <p>Product Wireless Mechanical Keyboard fell below safety stock (4 remaining).</p>
                  <span className="log-date">Today at 10:15 AM</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="featured-project" className="section featured-project-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Deep Dive Case Study</span>
          <h2 className="section-title">Inventory Management Dashboard</h2>
        </div>

        {/* Case Study Grid: Overview */}
        <div className="cs-overview-grid">
          <div className="cs-overview-card card">
            <h3 className="cs-card-title">Project Overview</h3>
            <p>
              StockSync is a clean, modern inventory management web application engineered for small-to-medium businesses. It simplifies product lifecycle management, provides automated alert thresholds for low stock, tracks supplier associations, and registers real-time inventory transactions.
            </p>
            <div className="cs-tech-stack">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>SQL</span>
              <span>CSS Flexbox/Grid</span>
            </div>
          </div>

          <div className="cs-brief-grid">
            <div className="cs-brief-item">
              <ShieldAlert className="cs-brief-icon" />
              <div>
                <strong>The Problem:</strong>
                <p>Traditional inventory systems suffer from visual clutter, poor typographic hierarchy, and complex navigation structures, causing user fatigue and data entry errors.</p>
              </div>
            </div>

            <div className="cs-brief-item">
              <Award className="cs-brief-icon" />
              <div>
                <strong>The Goal:</strong>
                <p>Deliver an accessible, responsive, and intuitive UI system with high-contrast data readability, easy search/filter tools, and a transparent product entry wizard.</p>
              </div>
            </div>

            <div className="cs-brief-item">
              <Users className="cs-brief-icon" />
              <div>
                <strong>Target Users:</strong>
                <p>Warehouse managers, stock controllers, and small-retail business owners needing clear oversight without steep training curves.</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Flow & Design Concepts */}
        <div className="cs-design-narrative card">
          <h3>User Flow & Product Design Decisions</h3>
          <div className="narrative-grid">
            <div>
              <h4>Design Decisions</h4>
              <ul>
                <li><strong>Clear Typographic Scale:</strong> Large numbers for key stats to ensure managers grasp inventory status at a single glance.</li>
                <li><strong>State-Driven Accents:</strong> Standard red, yellow, and green tags are reserved only for "Danger" (Out of Stock), "Warning" (Low Stock), and "Success" (In Stock) to prevent visual noise.</li>
                <li><strong>Consistent Component Library:</strong> Form elements, buttons, and tables share identical rounding radii, padding scale, and interactive focus states.</li>
              </ul>
            </div>
            <div>
              <h4>User Flow Sequence</h4>
              <div className="flow-steps">
                <div className="flow-step">
                  <span className="step-num">1</span>
                  <span><strong>Authenticate:</strong> Fast, distraction-free Login system.</span>
                </div>
                <div className="flow-step">
                  <span className="step-num">2</span>
                  <span><strong>Audit Dashboard:</strong> Instant check of out-of-stock and low-stock alerts.</span>
                </div>
                <div className="flow-step">
                  <span className="step-num">3</span>
                  <span><strong>Manage Products:</strong> Filter, add, edit, or adjust stock parameters with 2-click paths.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Simulator Wrapper */}
        <div className="cs-simulator-wrapper card">
          <div className="sim-controls-header">
            <div>
              <h3>Interactive UI Prototype Viewer</h3>
              <p>Explore the live layout mockups built in React. Click to switch screens.</p>
            </div>
            <div className="device-indicators">
              <button 
                className={`device-btn ${selectedScreen !== 'mobile-view' ? 'active' : ''}`}
                onClick={() => setSelectedScreen('dashboard')}
              >
                <Laptop size={16} /> Desktop Mockups
              </button>
              <button 
                className={`device-btn ${selectedScreen === 'mobile-view' ? 'active' : ''}`}
                onClick={() => setSelectedScreen('mobile-view')}
              >
                <Smartphone size={16} /> Mobile Mockup
              </button>
            </div>
          </div>

          <div className="sim-layout-grid">
            {/* Screen selectors */}
            {selectedScreen !== 'mobile-view' && (
              <div className="sim-selector-list">
                {screens.filter(s => s.id !== 'mobile-view').map((screen) => (
                  <button
                    key={screen.id}
                    className={`selector-btn ${selectedScreen === screen.id ? 'selected' : ''}`}
                    onClick={() => setSelectedScreen(screen.id)}
                  >
                    {screen.icon} {screen.name}
                  </button>
                ))}
              </div>
            )}

            {/* Simulated viewport frame */}
            <div className={`viewport-outer-frame ${selectedScreen === 'mobile-view' ? 'mobile-frame' : 'desktop-frame'}`}>
              <div className="window-decorations">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="window-address-bar">
                  https://app.stocksync.io/{selectedScreen === 'mobile-view' ? 'dashboard' : selectedScreen}
                </div>
              </div>

              {selectedScreen === 'mobile-view' ? (
                // Mobile wrapper containing the dashboard screen in phone container
                <div className="sim-phone-screen">
                  {renderSimulatedScreen(true)}
                </div>
              ) : (
                // Full Desktop screen simulator
                renderSimulatedScreen(false)
              )}
            </div>
          </div>
        </div>

        {/* Challenges and Outcomes */}
        <div className="cs-challenges-outcome card">
          <div className="cs-row">
            <div>
              <h4>Challenges Resolved</h4>
              <p>
                <strong>Cross-device Table Wrapping:</strong> Managing data tables on small devices. Resolved by building dynamic column collapse priority and overflow horizontal scrolling for desktop-detailed tables, combined with clean card-based layouts for mobile viewports.
              </p>
            </div>
            <div>
              <h4>Key Outcomes</h4>
              <p>
                Designed and tested a fully reusable UI component library of forms, tables, status-pills, and metric cards that scale across all viewpoints. This case-study showcases my capacity to convert product wireframes into responsive, functional web apps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featured-project-section {
          background: var(--bg-primary);
        }
        .cs-overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 900px) {
          .cs-overview-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .cs-card-title {
          font-size: 1.35rem;
          margin-bottom: 1rem;
        }
        .cs-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .cs-tech-stack span {
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          color: var(--primary-light);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .cs-brief-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .cs-brief-item {
          display: flex;
          gap: 1rem;
          align-items: start;
        }
        .cs-brief-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .cs-brief-item strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }
        .cs-brief-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .cs-design-narrative {
          margin-bottom: 2.5rem;
        }
        .cs-design-narrative h3 {
          margin-bottom: 1.25rem;
        }
        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .narrative-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .narrative-grid h4 {
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .narrative-grid ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          color: var(--text-secondary);
        }
        .flow-steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .flow-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-secondary);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }
        .step-num {
          width: 24px;
          height: 24px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
        }

        /* Simulator Styles */
        .cs-simulator-wrapper {
          padding: 1.5rem !important;
          margin-bottom: 2.5rem;
        }
        .sim-controls-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1.5rem;
        }
        .device-indicators {
          display: flex;
          gap: 0.5rem;
        }
        .device-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          cursor: pointer;
        }
        .device-btn.active {
          border-color: var(--primary);
          color: var(--primary-light);
          background: rgba(99, 102, 241, 0.08);
        }
        .sim-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 900px) {
          .sim-layout-grid {
            grid-template-columns: 240px 1fr;
          }
        }
        .sim-selector-list {
          display: flex;
          flex-direction: row;
          overflow-x: auto;
          gap: 0.5rem;
          padding-bottom: 0.5rem;
        }
        @media (min-width: 900px) {
          .sim-selector-list {
            flex-direction: column;
            overflow-x: visible;
            padding-bottom: 0;
          }
        }
        .selector-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          text-align: left;
          width: 100%;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .selector-btn:hover, .selector-btn.selected {
          color: var(--text-primary);
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.05);
        }
        .viewport-outer-frame {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color-hover);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          display: flex;
          flex-direction: column;
        }
        .desktop-frame {
          width: 100%;
          min-height: 480px;
        }
        .mobile-frame {
          max-width: 360px;
          margin: 0 auto;
          min-height: 520px;
        }
        .window-decorations {
          background: var(--bg-tertiary);
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }
        .window-dots {
          display: flex;
          gap: 0.35rem;
          margin-right: 1.5rem;
        }
        .window-dots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
        }
        [data-theme="light"] .window-dots span {
          background: rgba(0,0,0,0.15);
        }
        .window-address-bar {
          background: var(--bg-primary);
          color: var(--text-tertiary);
          border: 1px solid var(--border-color);
          font-family: monospace;
          font-size: 0.75rem;
          padding: 0.15rem 1rem;
          border-radius: 4px;
          flex-grow: 1;
          max-width: 400px;
        }

        /* Simulated Web App Internals */
        .simulator-view {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: var(--bg-primary);
          font-size: 0.9rem;
          color: var(--text-primary);
          min-height: 400px;
        }
        .sim-nav {
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          padding: 0.5rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sim-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .logo-color {
          color: var(--primary);
        }
        .sim-nav-links {
          display: flex;
          gap: 1.25rem;
        }
        .sim-nav-links span {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .sim-nav-links span.active, .sim-nav-links span:hover {
          color: var(--primary-light);
        }
        .sim-body {
          padding: 1.25rem;
          flex-grow: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        
        /* Simulated Login */
        .sim-login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
        }
        .sim-login-card {
          width: 100%;
          max-width: 320px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
        }
        .sim-login-card h3 {
          margin-bottom: 0.25rem;
        }
        .sim-login-card p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }
        .sim-login-card .form-group {
          margin-bottom: 1rem;
          text-align: left;
        }
        
        /* Form controls inside Simulator */
        .form-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
        }
        .form-group input, .sim-form input {
          width: 100%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.45rem 0.75rem;
          border-radius: 6px;
          font-size: 0.85rem;
        }
        .sim-btn {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }
        .sim-btn-primary {
          background: var(--primary);
          color: white;
          width: 100%;
        }
        .sim-btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
        
        /* Dashboard Screen */
        .sim-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .sim-header h2 {
          font-size: 1.25rem;
          margin-bottom: 0;
        }
        .sim-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 600px) {
          .sim-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .sim-stat-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 0.75rem 1rem;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
        }
        .sim-stat-card.warning { border-left: 3px solid #facc15; }
        .sim-stat-card.danger { border-left: 3px solid #f43f5e; }
        .stat-label { font-size: 0.75rem; color: var(--text-tertiary); }
        .stat-val { font-size: 1.35rem; font-weight: 800; color: var(--text-primary); }

        .sim-dash-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .sim-dash-row {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }
        .sim-chart-card, .sim-recent-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1rem;
        }
        .sim-chart-card h4, .sim-recent-card h4 {
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
        }
        .svg-chart-placeholder {
          background: var(--bg-primary);
          border-radius: 6px;
          padding: 0.5rem;
        }
        .recent-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .recent-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          padding: 0.35rem 0.5rem;
          border-radius: 4px;
          background: var(--bg-primary);
        }
        .badge-in { color: #4ade80; font-weight: 700; }
        .badge-out { color: #fb7185; font-weight: 700; }
        .badge-alert { color: #facc15; font-weight: 700; }
        .item-name { flex-grow: 1; margin-left: 0.5rem; color: var(--text-primary); }
        .item-time { color: var(--text-tertiary); }

        /* Products Screen */
        .sim-filters {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .search-box {
          position: relative;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }
        .search-box svg {
          position: absolute;
          left: 8px;
          color: var(--text-tertiary);
        }
        .search-box input {
          padding-left: 1.75rem !important;
        }
        .filter-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }
        .table-wrapper {
          overflow-x: auto;
        }
        .sim-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .sim-table th, .sim-table td {
          padding: 0.6rem 0.75rem;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.8rem;
        }
        .sim-table th {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          font-weight: 700;
        }
        .status-pill {
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .status-pill.in-stock { background: rgba(34, 197, 94, 0.1); color: #4ade80; }
        .status-pill.low-stock { background: rgba(234, 179, 8, 0.1); color: #facc15; }
        .status-pill.out-of-stock { background: rgba(244, 63, 94, 0.1); color: #fb7185; }
        .table-actions {
          display: flex;
          gap: 0.75rem;
          color: var(--text-secondary);
        }
        .table-actions svg {
          cursor: pointer;
        }
        .table-actions svg:hover {
          color: var(--primary-light);
        }

        /* Add Product Form */
        .sim-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .form-actions .sim-btn {
          width: auto;
        }

        /* Stock log screen */
        .sim-log-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .log-item {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.75rem;
        }
        .log-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }
        .log-action {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
        }
        .action-in { background: rgba(34, 197, 94, 0.1); color: #4ade80; }
        .action-out { background: rgba(99, 102, 241, 0.1); color: #818cf8; }
        .action-alert { background: rgba(244, 63, 94, 0.1); color: #fb7185; }
        .log-sku { font-size: 0.7rem; color: var(--text-secondary); }
        .log-date { font-size: 0.7rem; color: var(--text-tertiary); display: block; margin-top: 0.25rem; }

        /* Mobile specific adjustments inside the frame */
        .sim-phone-screen .simulator-view {
          min-height: 480px;
        }
        .sim-phone-screen .sim-stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        /* Case Study Footer */
        .cs-challenges-outcome {
          margin-top: 2rem;
        }
        .cs-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .cs-row {
            grid-template-columns: 1fr 1fr;
          }
        }
        .cs-row h4 {
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .cs-row p {
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  )
}

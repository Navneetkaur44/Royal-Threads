# Royal Threads - React Application

Luxury clothing rental platform converted from static HTML to a modern React application.

## Features

- **Modern React Architecture**: Built with React 18 and Vite
- **React Router**: Client-side routing with React Router DOM
- **Context API**: State management for Cart, Auth, and Products
- **Responsive Design**: Mobile-first responsive layout
- **Product Catalog**: Browse and filter products by gender, type, and price
- **Shopping Cart**: Add items to cart with quantity management
- **Multi-step Checkout**: Delivery, payment, and ID verification
- **Wishlist**: Save favorite products
- **User Authentication**: Login, signup, and password reset flows

## Project Structure

```
royal-threads-react/
├── public/                 # Static assets
│   ├── images/            # Product and hero images
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   ├── contexts/          # Context providers
│   │   ├── CartContext.jsx
│   │   ├── AuthContext.jsx
│   │   └── ProductContext.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Collections.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   ├── utils/             # Utility functions and data
│   │   └── productsData.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
└── index.html
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

## Technologies Used

- **React 18**: UI library
- **React Router DOM**: Routing
- **Vite**: Build tool and dev server
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter, Montserrat, Playfair Display)
- **CSS3**: Styling with CSS variables

## Key Features

### Cart Management
- Add/remove items
- Update quantity (max 3 per item)
- Persistent storage with localStorage
- Real-time cart count in header

### Product Filtering
- Filter by gender (Men/Women)
- Filter by category (Lehenga, Gown, Sherwani, Jewelry, Accessories)
- Filter by price range
- Sort by price, newness, popularity
- Clear all filters option

### Checkout Process
1. **Delivery Details**: Personal information and shipping address
2. **Payment Method**: Card, UPI, or Cash on Delivery
3. **ID Verification**: Government-issued ID for security

### Authentication
- Login page with email/password
- Signup with full registration
- Forgot password flow
- Context-based auth state management

## Component Structure

### Context Providers

- **CartContext**: Manages shopping cart state
- **AuthContext**: Handles user authentication
- **ProductContext**: Manages wishlist state

### Pages

1. **Home**: Landing page with hero section, features, and collections
2. **Collections**: Product listing with filters and sorting
3. **Login**: User authentication
4. **Signup**: New user registration
5. **ForgotPassword**: Password reset
6. **Cart**: Shopping cart with quantity controls
7. **Checkout**: Multi-step checkout process

### Components

- **Header**: Navigation with logo and cart icon
- **Footer**: Site footer with links and contact info
- **ProductCard**: Individual product display card

## Styling

Uses CSS variables for consistent theming:
- Primary color: #1a1a2e
- Accent color: #e94560
- Gold accent: #d4af37
- Light background: #f9f9f9

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

## Author

Royal Threads Team


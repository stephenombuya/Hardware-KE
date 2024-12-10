# Hardware KE - Online Hardware Store

A modern e-commerce platform for construction materials and hardware supplies built with React, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Browse products by category
- 🔍 Search functionality
- 🛒 Shopping cart management
- 👤 User authentication
- 📦 Order tracking
- 💳 Secure checkout process
- 📱 Responsive design
- 🗺️ Store location map
- 📞 Contact form

## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Form Handling:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library
- **Build Tool:** Vite
- **HTTP Client:** Axios

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/             # Static data and mock data
├── pages/            # Page components
├── services/         # API services
├── store/            # State management
├── tests/            # Unit tests
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Run ESLint

## Components

### Core Components
- `Navbar` - Main navigation bar
- `ProductCard` - Product display card
- `EmptyState` - Empty state placeholder
- `LoadingSpinner` - Loading indicator
- `LocationMap` - Store location map

### Page Components
- `Home` - Landing page with featured products
- `Products` - Product listing with filters
- `ProductDetail` - Detailed product view
- `Cart` - Shopping cart management
- `Checkout` - Order checkout process
- `Profile` - User profile management
- `OrderHistory` - Order tracking
- `Contact` - Contact form and store information

## State Management

The application uses Zustand for state management with the following stores:
- `useAuth` - Authentication state
- `useCart` - Shopping cart state

## Testing

Tests are written using Vitest and React Testing Library. Run tests with:
```bash
npm test
```

Generate coverage report:
```bash
npm run test:coverage
```

## API Integration

The application integrates with a RESTful API using Axios. API services are organized in the `services` directory:
- `authAPI` - Authentication endpoints
- `productsAPI` - Product management
- `ordersAPI` - Order management
- `userAPI` - User profile management
- `paymentAPI` - Payment processing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

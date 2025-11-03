---
mode: 'agent'
description: 'Generate unit tests for UI components following testing best practices'
tools: ['codebase', 'editFiles', 'terminal']
---

# Generate Unit Tests for UI Components

## Context
Generate comprehensive unit tests for UI components in the Photo Gallery & Portfolio application. The tests should follow modern testing practices and ensure component reliability, accessibility, and user interactions work correctly.

## Testing Framework Setup
The project currently doesn't have a testing framework configured. Choose one of these recommended setups:

### Option 1: Jest + React Testing Library (Recommended for Next.js)
```json
// package.json devDependencies to add:
{
  "@testing-library/react": "^14.1.2",
  "@testing-library/jest-dom": "^6.1.4",
  "@testing-library/user-event": "^14.5.1",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "@types/jest": "^29.5.8",
  "next-router-mock": "^0.9.10",
  "jest-axe": "^8.0.0"
}
```

### Option 2: Vitest + React Testing Library (Modern alternative)
```json
// package.json devDependencies to add:
{
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.1.0",
  "@testing-library/user-event": "^14.5.0",
  "vitest": "^1.0.0",
  "@vitejs/plugin-react": "^4.1.0",
  "jsdom": "^23.0.0"
}
```

## Testing Patterns to Follow

### 1. Component Structure Tests
- Renders without crashing
- Renders correct content/props
- Applies correct CSS classes
- Handles missing/optional props gracefully

### 2. User Interaction Tests
- Button clicks trigger correct callbacks
- Form inputs work correctly
- Keyboard navigation functions
- Mouse hover states work

### 3. Accessibility Tests
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

### 4. State Management Tests
- Component state updates correctly
- Props changes trigger re-renders
- Event handlers receive correct parameters

### 5. Animation & Motion Tests
- Framer Motion animations render
- Animation states transition correctly
- Motion components don't break functionality

## Test File Structure
```
src/
├── components/
│   └── ui/
│       ├── layout/
│       │   ├── Hero.tsx
│       │   └── __tests__/
│       │       └── Hero.test.tsx
│       ├── cards/
│       │   ├── FeatureCard.tsx
│       │   └── __tests__/
│       │       └── FeatureCard.test.tsx
│       └── stats/
│           ├── StatsGrid.tsx
│           └── __tests__/
│               └── StatsGrid.test.tsx
```

## Test Template Pattern
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentName } from '../ComponentName';

// Mock external dependencies
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    // Add other motion elements as needed
  },
}));

describe('ComponentName', () => {
  // Default props for testing
  const defaultProps = {
    // Define required props
  };

  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<ComponentName {...defaultProps} />);
      expect(screen.getByRole('...')).toBeInTheDocument();
    });

    it('displays correct content', () => {
      // Test content rendering
    });
  });

  describe('User Interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const mockHandler = jest.fn();
      
      render(<ComponentName {...defaultProps} onClick={mockHandler} />);
      
      await user.click(screen.getByRole('button'));
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<ComponentName {...defaultProps} />);
      
      expect(screen.getByRole('...')).toHaveAttribute('aria-label', '...');
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      // Test keyboard interactions
    });
  });

  describe('Props and State', () => {
    it('handles prop changes', () => {
      const { rerender } = render(<ComponentName {...defaultProps} />);
      
      rerender(<ComponentName {...defaultProps} someProp="newValue" />);
      // Assert changes
    });
  });
});
```

## Component-Specific Test Requirements

### Layout Components (`Hero`, `SectionContainer`, `SectionTitle`)
- Test responsive behavior
- Verify proper semantic HTML structure
- Test optional props (like `viewAllLink`)
- Validate Tailwind classes application

### Interactive Components (`FeatureCard`, `RecentGalleriesTable`)
- Test all callback functions
- Verify hover states
- Test loading/disabled states
- Validate icon rendering

### Form Components (`UploadZone`)
- Test file upload functionality
- Validate drag & drop behavior
- Test file validation
- Verify progress indicators

### Data Display Components (`GalleryGrid`, `StatsGrid`)
- Test empty state rendering
- Verify data mapping
- Test filtering functionality
- Validate responsive grid behavior

## Testing Utilities Setup

### Jest Configuration (`jest.config.js`)
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

### Test Setup (`jest.setup.js`)
```javascript
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    // Add other elements as needed
  },
  AnimatePresence: ({ children }) => children,
}));
```

## Coverage and Quality Goals
- Aim for 80%+ code coverage on components
- Test all exported functions and components
- Include edge cases and error scenarios
- Validate accessibility compliance
- Test responsive behavior where applicable

## Commands to Add to package.json
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false"
  }
}
```

## Success Criteria
1. All existing UI components have comprehensive test coverage
2. Tests pass in CI/CD pipeline
3. New components include tests from creation
4. Accessibility requirements are validated through tests
5. User interactions are thoroughly tested
6. Edge cases and error states are covered

## Example Test Files to Generate
When creating tests, prioritize these components in order:
1. `FeatureCard` - Simple component, good starting point
2. `Hero` - Layout component with optional props
3. `SectionContainer` and `SectionTitle` - Core layout components
4. `StatsGrid` - Data display with multiple states
5. `RecentGalleriesTable` - Complex interactive component
6. `UploadZone` - File upload with complex interactions
7. `GalleryGrid` - Advanced filtering and responsive behavior

Generate tests that are maintainable, readable, and provide confidence in component reliability.
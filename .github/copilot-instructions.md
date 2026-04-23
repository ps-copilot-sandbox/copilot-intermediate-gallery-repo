# Copilot Instructions for Photo Gallery & Portfolio

## Project Overview
This is a Photo Gallery & Portfolio application built with Next.js 15, TypeScript, and Tailwind CSS. The application follows a component-driven architecture with:

- **Client-Side Interactions** using React hooks and Framer Motion animations
- **Smart UI Components** for consistent layout and styling
- **Mock Data Pattern** for development and testing
- **Responsive Design System** using Tailwind CSS

## Architecture

### Core Components
1. **Layout Components** (`src/components/ui/layout/`)
   - `Hero.tsx` - Page headers with title and description
   - `SectionContainer.tsx` - Consistent section wrappers
   - `SectionTitle.tsx` - Section headers with optional "View All" links

2. **Feature Components**
   - `UploadZone.tsx` - Drag & drop file upload with real-time preview
   - `GalleryGrid.tsx` - Responsive photo grid with filtering
   - `StatsGrid.tsx` - Dashboard statistics display
   - `FeatureCard.tsx` - Reusable feature highlight cards

### Data Flow
- Mock data is stored in `src/lib/` for development
- State management uses React hooks
- Component props follow strict TypeScript interfaces
- Data transformations happen at the component level

### Project Structure
```
src/
├── app/                # Next.js 15 App Router pages
├── components/
│   ├── ui/            # Reusable UI components
│   ├── gallery/       # Gallery-specific components
│   └── upload/        # Upload-specific components
└── lib/               # Mock data and utilities
```

## Component Patterns

### UI Components
1. **Layout Components**: Use `<SectionContainer>` and `<SectionTitle>` for consistent page structure
```tsx
<SectionContainer>
  <SectionTitle title="Section Name" viewAllLink="/optional-link" />
  {/* Content */}
</SectionContainer>
```

2. **Feature Cards**: Use for highlighting features or actions
```tsx
<FeatureCard
  icon={IconComponent}
  title="Feature Title"
  description="Feature description"
  iconColor="text-blue-600"
/>
```

3. **Stats Display**: Use `<StatsGrid>` for metric displays
```tsx
<StatsGrid stats={[
  {
    label: "Metric Name",
    value: "123",
    icon: IconComponent,
    color: 'blue' | 'green' | 'purple' | 'orange'
  }
]} />
```

### Styling Conventions
1. Use Tailwind's color scale with dark mode support
   ```tsx
   className="text-slate-900 dark:text-white"
   className="bg-white dark:bg-slate-800"
   ```

2. Follow gradient background pattern
   ```tsx
   className="page-gradient" // Defined in globals.css
   ```

3. Use consistent spacing and layout classes
   ```tsx
   "container mx-auto px-4"  // Container
   "grid md:grid-cols-3 gap-6" // Responsive grid
   ```

## Development Workflow

### Running the Project
```bash
npm run dev  # Starts development server with Turbopack
```

### Key Files to Reference
- `COMPONENT_USAGE_GUIDE.md` - Examples of component usage
- `mock-*-data.ts` files - Data structure examples
- `page.tsx` files - Page layout patterns

## Best Practices

1. **TypeScript Usage**
   - Define interfaces for all component props
   - Use strict type checking
   - Prefer explicit types over inference

2. **Component Design**
   - Keep components focused and single-purpose
   - Use composition over inheritance
   - Follow the existing naming conventions

3. **State Management**
   - Use React hooks for local state
   - Keep state close to where it's used
   - Follow immutability patterns

4. **Styling**
   - Use Tailwind classes for styling
   - Follow dark mode patterns
   - Maintain responsive design



#Alwys try to respond me in Spanish, unless I ask you to respond in English.
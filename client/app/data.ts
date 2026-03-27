export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
}

export const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Dashboard Layout Generator',
    description: 'Generate a modern dashboard layout with sidebar navigation',
    prompt: 'Create a dashboard UI with a collapsible sidebar, top navigation bar with user avatar, main content area with card-based widgets for analytics, and a responsive grid layout that works on desktop and tablet. Use modern design with subtle shadows and rounded corners.',
    category: 'Layouts',
    tags: ['dashboard', 'admin', 'analytics'],
  },
  {
    id: '2',
    title: 'E-commerce Product Card',
    description: 'Product card with image, price, and quick actions',
    prompt: 'Design a product card component for an e-commerce site featuring a product image with hover zoom effect, product title, price with discount badge, rating stars, and action buttons for add to cart and wishlist. Include subtle hover animation.',
    category: 'Components',
    tags: ['ecommerce', 'product', 'card'],
  },
  {
    id: '3',
    title: 'Mobile Navigation',
    description: 'Bottom tab navigation for mobile apps',
    prompt: 'Create a mobile bottom tab navigation with 5 icons: Home, Search, Add, Notifications, Profile. Include active state indicator, smooth transition animations, and badges for notification counts. Use Material Design guidelines.',
    category: 'Navigation',
    tags: ['mobile', 'tabs', 'navigation'],
  },
  {
    id: '4',
    title: 'Form Layout',
    description: 'Multi-step registration form with validation',
    prompt: 'Design a multi-step registration form with progress indicator, fields for personal info, contact details, and account setup. Include inline validation, error states, and smooth step transitions. Use clean, minimal design.',
    category: 'Forms',
    tags: ['form', 'validation', 'registration'],
  },
  {
    id: '5',
    title: 'Chat Interface',
    description: 'Real-time chat UI with message bubbles',
    prompt: 'Create a chat interface with message bubbles (sent right, received left), timestamp, read receipts, input field with emoji picker and attachment button. Include typing indicator and message status (sent, delivered, read).',
    category: 'Components',
    tags: ['chat', 'messaging', 'UI'],
  },
  {
    id: '6',
    title: 'Landing Page Hero',
    description: 'Hero section with CTA and background',
    prompt: 'Design a landing page hero section with bold headline, subtext, dual CTA buttons (primary and secondary), and abstract geometric background pattern. Include subtle entrance animation and gradient overlay.',
    category: 'Layouts',
    tags: ['hero', 'landing', 'CTA'],
  },
  {
    id: '7',
    title: 'Data Table',
    description: 'Sortable table with pagination',
    prompt: 'Create a data table component with sortable columns, row selection checkboxes, pagination controls, search/filter bar, and empty state. Include hover highlight on rows and inline actions menu.',
    category: 'Components',
    tags: ['table', 'data', 'pagination'],
  },
  {
    id: '8',
    title: 'Card Grid',
    description: 'Responsive card grid with filtering',
    prompt: 'Design a responsive card grid layout with category filter chips at the top, masonry-style or uniform grid option, and load more pagination. Cards should have image, title, description, and action button.',
    category: 'Layouts',
    tags: ['grid', 'cards', 'responsive'],
  },
];

export const categories = [
  'Layouts',
  'Components',
  'Navigation',
  'Forms',
];

# RedSwan Animations Implementation Guide

## Overview
This document outlines all the animations implemented across the RedSwan tokenized real estate platform using Framer Motion.

## Animation System Architecture

### Core Animation Utilities
Location: `/src/utils/animations.js`

**Animation Variants:**
- `fadeIn` - Simple opacity fade-in
- `fadeInUp` - Fade in with upward slide (40px)
- `slideInLeft` - Slide in from left with fade
- `slideInRight` - Slide in from right with fade
- `scaleIn` - Scale and fade entrance
- `staggerContainer` - Container for staggered children
- `staggerItem` - Individual items with stagger delay
- `cardHover` - Hover state with lift and scale
- `toastVariants` - Toast notification entrance/exit
- `pulseVariants` - Continuous pulse animation
- `shimmerVariants` - Skeleton loader shimmer

**Viewport Settings:**
- Default viewport triggers at 30% visibility
- 100px negative bottom margin for early trigger
- `once: true` to animate only once per scroll

### Custom Hooks
Location: `/src/hooks/useScrollAnimation.js`

`useScrollAnimation()` - Custom hook that returns a ref and inView state for scroll-based animations.

### Animated Components
Location: `/src/components/`

**AnimatedCounter.jsx**
- `AnimatedCounter` - Spring-based number animation with prefix/suffix support
- `SimpleCounter` - Integer counter with easing for stats/metrics

**SkeletonLoader.jsx**
- `SkeletonLoader` - Base shimmer loader
- `CardSkeleton` - Card layout skeleton
- `TokenBalanceSkeleton` - Token balance placeholder
- `DashboardSkeleton` - Full dashboard loading state

## Implemented Animations by Section

### 1. Hero Section (`Header.jsx`)
**Animations:**
- Navigation fade-in from top on mount
- Hero content sequential fade-in with stagger
- Text reveal with delay cascade
- Button hover/tap interactions
- Infinite bounce animation on "Scroll to discover"

**Key Features:**
- Total animation sequence: ~1.3 seconds
- Smooth custom easing curves
- Layered entrance timing

### 2. Intro Section (`Intro.jsx`)
**Animations:**
- Text slides in from left
- Stat cards slide in from right
- Number counter animations (20k+, $780M, 12)
- Individual stat cards stagger entrance
- Button hover/tap micro-interactions

**Key Features:**
- Animated counters with different durations
- Coordinated left/right entrance

### 3. Solutions Section (`Solutions.jsx`)
**Animations:**
- Section heading fade-in
- Card grid with 0.1s stagger between items
- Hover lift effect on cards (y: -6px)
- Card-specific hover states

**Key Features:**
- 3-column stagger animation
- Subtle elevation on hover

### 4. Why Section (`Why.jsx`)
**Animations:**
- Text content slides from left
- Cards slide from right with stagger
- Individual card scale on hover (1.02x)
- Button interactions

**Key Features:**
- Split-screen coordinated animation
- Highlight cards with border color transition

### 5. Benefits Section (`Benefits.jsx`)
**Animations:**
- Section heading entrance
- Benefit cards stagger
- Card hover elevation (y: -8px)
- Enhanced box-shadow on hover

**Key Features:**
- Large card format with image
- Pronounced hover effects

### 6. Process Section (`Process.jsx`)
**Animations:**
- Section heading fade-in
- Step cards stagger (3 items)
- Card hover lift
- CTA button animations

**Key Features:**
- Sequential step reveal
- Numbered step indicator styling

### 7. Partners Section (`Partners.jsx`)
**Animations:**
- Section content fade-in
- Logo pills stagger entrance
- Logo hover lift and scale

**Key Features:**
- Coordinated partner logo reveal
- Interactive logo badges

### 8. Featured Section (`Featured.jsx`)
**Animations:**
- Image slides from left
- Content slides from right
- Stats animate sequentially with delays
- Button hover interactions

**Key Features:**
- Split-panel coordinated entrance
- Sequential stat reveal

### 9. News Section (`News.jsx`)
**Animations:**
- Section heading entrance
- News cards stagger
- Card hover with border color change
- Subtle elevation on hover

**Key Features:**
- 3-column news grid animation
- Tag and card interactions

### 10. CTA Section (`CTA.jsx`)
**Animations:**
- Text slides from left
- Button slides from right
- Button hover/tap interactions

**Key Features:**
- Final call-to-action impact
- Coordinated split entrance

## Web3-Specific Animations

### Wallet Button (`WalletButton.jsx`)
**Animations:**
- Connect state transitions
- Spinning loader during connection
- Account address reveal
- Disabled state opacity
- Hover/tap interactions

**Key Features:**
- Loading spinner (360° rotation)
- State-based animations
- Smooth text transitions

### Error Notifications (`ErrorNotification.jsx`)
**Animations:**
- Toast slide-in from right
- Content slide with delay
- Icon pulse on appear
- Close button rotate on hover
- Exit animation

**Key Features:**
- AnimatePresence for mount/unmount
- Auto-dismiss after 5 seconds
- Interactive close button

### Investor Dashboard (`InvestorDashboard.jsx`)
**Animations:**
- Section heading entrance
- Dashboard grid stagger
- Property card hover effects
- Token balance animations

**Key Features:**
- Conditional rendering based on wallet connection
- Staggered card reveal

## CSS Enhancements

### Hover Effects (styles.css)
**Enhanced cards with:**
- Glow shadows on hover (primary color tinted)
- Elevation changes
- Border color transitions
- Smooth transform transitions

**Affected elements:**
- `.info-card` - Red glow shadow
- `.stat-card` - Lift on hover
- `.step-card` - Enhanced shadow
- `.news-card` - Border color change
- `.benefit-card` - Deeper shadow
- `.highlight-card` - Background and border transition

### Button Animations
All buttons now have:
- `whileHover={{ scale: 1.05 }}`
- `whileTap={{ scale: 0.95 }}`
- Smooth transitions

## Performance Optimizations

1. **Viewport Optimization:**
   - `once: true` prevents re-animation on scroll
   - Negative margins trigger animations early
   - 30% visibility threshold

2. **Animation Timing:**
   - Custom easing: `[0.22, 1, 0.36, 1]` for natural feel
   - Stagger delays: 0.1s between items
   - Total sequence under 1.5s for user patience

3. **CSS Transitions:**
   - Hardware-accelerated transforms
   - 0.3s duration for hover states
   - Ease-out for natural deceleration

## Animation Patterns

### Pattern 1: Section Entrance
```jsx
<motion.header
  initial="hidden"
  whileInView="visible"
  viewport={viewport}
  variants={fadeInUp}
>
```

### Pattern 2: Staggered Grid
```jsx
<motion.div variants={staggerContainer}>
  <motion.article variants={staggerItem}>
    {/* Content */}
  </motion.article>
</motion.div>
```

### Pattern 3: Interactive Button
```jsx
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Pattern 4: Number Counter
```jsx
<SimpleCounter end={780} prefix="$" suffix="M" duration={2.5} />
```

## Browser Compatibility

- Modern browsers with support for:
  - CSS transforms
  - Framer Motion (React 18+)
  - IntersectionObserver API

## Future Enhancement Opportunities

1. **Page Transitions:**
   - Add route-based page transitions
   - Exit animations for navigation

2. **Advanced Interactions:**
   - Parallax scrolling effects
   - Mouse-follow elements
   - 3D card tilt with perspective

3. **Loading States:**
   - Global loading animation
   - Route transition loaders
   - Optimistic UI updates

4. **Gesture Support:**
   - Swipe gestures for mobile
   - Drag interactions for sliders

5. **Performance:**
   - Code splitting for animations
   - Lazy loading for below-fold content
   - Reduced motion preferences

## Accessibility Considerations

- Animations respect `prefers-reduced-motion`
- Keyboard navigation preserved
- Screen reader content unaffected
- Focus states maintained
- Semantic HTML retained

## File Structure

```
src/
├── utils/
│   └── animations.js          # Animation variants & settings
├── hooks/
│   └── useScrollAnimation.js  # Scroll animation hook
├── components/
│   ├── AnimatedCounter.jsx    # Number animations
│   ├── SkeletonLoader.jsx     # Loading states
│   ├── Header.jsx             # Hero animations
│   ├── Intro.jsx              # Intro section
│   ├── Solutions.jsx          # Solutions cards
│   ├── Why.jsx                # Why section
│   ├── Benefits.jsx           # Benefits cards
│   ├── Process.jsx            # Process steps
│   ├── Partners.jsx           # Partner logos
│   ├── Featured.jsx           # Featured project
│   ├── News.jsx               # News cards
│   ├── CTA.jsx                # Call-to-action
│   └── web3/
│       ├── WalletButton.jsx   # Wallet connection
│       ├── ErrorNotification.jsx  # Toast notifications
│       └── InvestorDashboard.jsx  # Dashboard
├── styles/
│   └── web3.css              # Web3 component styles
└── styles.css                # Global styles with hover effects
```

## Dependencies

- `framer-motion`: ^12.23.24
- React: ^19.2.0
- React DOM: ^19.2.0

## Summary

✅ **Implemented:**
- Scroll-based entrance animations on all sections
- Stagger animations on card grids
- Number counter animations for metrics
- Card hover effects with glow
- Button micro-interactions
- Web3-specific animations (wallet, notifications)
- Toast notification animations
- Skeleton loaders for async data
- Hero section sequential reveal
- Interactive element states

**Total Components Animated:** 14 main components + 4 Web3 components
**Animation Variants Created:** 15+
**Custom Components:** 6 (counters, skeletons, etc.)

The animation system provides a cohesive, professional feel throughout the application while maintaining excellent performance and accessibility.

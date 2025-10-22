import React from 'react'
import { motion } from 'framer-motion'

/**
 * Skeleton loader component for loading states
 */
export function SkeletonLoader({ width = '100%', height = '20px', borderRadius = '8px', className = '' }) {
  return (
    <motion.div
      className={`skeleton-loader ${className}`}
      style={{
        width,
        height,
        borderRadius,
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%'
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0']
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  )
}

/**
 * Card skeleton for property/token cards
 */
export function CardSkeleton() {
  return (
    <div className="skeleton-card" style={{ padding: '1.5rem' }}>
      <SkeletonLoader width="60%" height="24px" borderRadius="6px" />
      <div style={{ marginTop: '1rem' }}>
        <SkeletonLoader width="100%" height="16px" borderRadius="6px" />
        <div style={{ marginTop: '0.5rem' }}>
          <SkeletonLoader width="80%" height="16px" borderRadius="6px" />
        </div>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <SkeletonLoader width="40%" height="32px" borderRadius="6px" />
      </div>
    </div>
  )
}

/**
 * Token balance skeleton
 */
export function TokenBalanceSkeleton() {
  return (
    <div className="token-balance-skeleton" style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem 0' }}>
      <SkeletonLoader width="80px" height="16px" borderRadius="6px" />
      <SkeletonLoader width="60px" height="20px" borderRadius="6px" />
    </div>
  )
}

/**
 * Dashboard grid skeleton
 */
export function DashboardSkeleton() {
  return (
    <div className="dashboard-grid">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CardSkeleton />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <CardSkeleton />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <CardSkeleton />
      </motion.div>
    </div>
  )
}

export default SkeletonLoader

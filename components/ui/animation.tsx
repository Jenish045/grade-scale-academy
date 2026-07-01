"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface AnimationProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  viewportOnce?: boolean
}

// 1. Standardized Reveal / Fade Up (y: 24 -> 0, duration: 0.6, ease: easeOut, once: true, amount: 0.15)
export const FadeUp: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  viewportOnce = true, // Ticket Global: default to once: true
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: viewportOnce, amount: 0.15 }} // Ticket Global: amount: 0.15
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 2. Standardized Fade Left
export const FadeLeft: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: viewportOnce, amount: 0.15 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 3. Standardized Fade Right
export const FadeRight: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: viewportOnce, amount: 0.15 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 4. Standardized Image Scale In
export const ScaleIn: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: viewportOnce, amount: 0.15 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 5. Standardized Stagger Container (stagger: 0.05, once: true, amount: 0.15)
interface StaggerContainerProps {
  children: React.ReactNode
  staggerChildrenDelay?: number
  delay?: number
  className?: string
  viewportOnce?: boolean
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildrenDelay = 0.05, // Ticket Global: stagger 0.05 (0.04-0.08s range)
  delay = 0,
  className,
  viewportOnce = true, // Ticket Global: default to once: true
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewportOnce, amount: 0.15 }} // Ticket Global: amount: 0.15
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerChildrenDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 6. Standardized Stagger Item (y: 24 -> 0, duration: 0.6, ease: easeOut)
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 7. Hover Lift
export const HoverLift: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Explicit Named Mappings */
export const AnimateHeading = FadeUp
export const AnimateCards = StaggerContainer
export const AnimateCardItem = StaggerItem
export const AnimateImage = ScaleIn

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

// 1. Fade Up Animation
export const FadeUp: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: viewportOnce, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 2. Fade Left Animation
export const FadeLeft: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: viewportOnce, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 3. Fade Right Animation
export const FadeRight: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: viewportOnce, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 4. Scale In Animation
export const ScaleIn: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: viewportOnce, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 5. Stagger Container Animation
interface StaggerContainerProps {
  children: React.ReactNode
  staggerChildrenDelay?: number
  delay?: number
  className?: string
  viewportOnce?: boolean
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildrenDelay = 0.1,
  delay = 0,
  className,
  viewportOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewportOnce, margin: "-50px" }}
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

// Helper variant to place on direct children of StaggerContainer
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 6. Hover Lift Interaction (Wrapper)
export const HoverLift: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

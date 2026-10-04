import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

type Props = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
}

/** Subtle fade-up on enter. Snappy, no parallax, respects reduced motion via CSS. */
export function Reveal({ children, delay = 0, y = 16, once = true, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

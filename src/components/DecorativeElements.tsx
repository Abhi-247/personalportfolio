import { motion } from "framer-motion";

export const StarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const FloatingStar = ({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number 
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.div
      animate={{ 
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <StarIcon className="w-full h-full" />
    </motion.div>
  </motion.div>
);

export const DecorativeLine = ({ 
  className,
  delay = 0
}: { 
  className?: string;
  delay?: number;
}) => (
  <motion.svg
    viewBox="0 0 200 100"
    fill="none"
    className={className}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ delay, duration: 1.5, ease: "easeOut" }}
  >
    <motion.path
      d="M10 50 Q 50 10, 100 50 T 190 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
    />
  </motion.svg>
);

export const CircleDecoration = ({ 
  className,
  delay = 0,
  filled = false
}: { 
  className?: string;
  delay?: number;
  filled?: boolean;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, type: "spring" }}
  >
    <div 
      className={`w-full h-full rounded-full border-2 border-current ${filled ? 'bg-current' : ''}`}
    />
  </motion.div>
);

export const RotatingBadge = ({ 
  text,
  className 
}: { 
  text: string;
  className?: string;
}) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
  >
    <motion.div
      className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-foreground flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text className="text-[10px] fill-background uppercase tracking-widest font-medium">
          <textPath href="#circlePath" startOffset="0%">
            {text} • {text} • {text} •
          </textPath>
        </text>
      </svg>
    </motion.div>
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        className="w-8 h-8 bg-background rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
    </div>
  </motion.div>
);

export default function GlowCard({ children, className = '' }) {
  return (
    <div
      className={`glass-card p-6 transition-all duration-300 hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/20 ${className}`}
    >
      {children}
    </div>
  );
}
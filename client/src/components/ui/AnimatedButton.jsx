export default function AnimatedButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false 
}) {
  const variants = {
    primary: 'bg-neon-blue text-black hover:shadow-lg hover:shadow-neon-blue/50',
    secondary: 'border border-neon-blue text-neon-blue hover:bg-neon-blue/10',
    outline: 'border border-neon-orange text-neon-orange hover:bg-neon-orange/10',
    ghost: 'text-gray-300 hover:text-neon-blue',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
        variants[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
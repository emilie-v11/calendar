interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  addClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function Button({
  text = 'Valider',
  onClick,
  disabled,
  addClassName,
  type = 'button',
  style,
}: ButtonProps) {
  const defaultClassName = 'cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110';
  return (
    <button
      className={`${defaultClassName} ${addClassName}`}
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

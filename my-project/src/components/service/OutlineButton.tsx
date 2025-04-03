import './Button.scss';

interface ButtonProps {
  variant: 'outline' | 'filled',
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const Button = ({ variant, icon: Icon, text }: ButtonProps) => {
  const variants = {
    outline: 'outline',
    filled:'filled',
  }

  return (
    <button className={variants[variant]}>
      {Icon && <Icon className="icon" />}
      {text}
    </button>
  );
};

export default Button;
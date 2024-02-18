interface ButtonProps {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, icon }) => {
  return (
    <button
      type="button"
      className="flex items-center font-poppins font-medium transition text-white bg-primary hover:bg-primaryDark focus:ring-4 focus:ring-primaryLight rounded-lg text-sm px-4 py-3 focus:outline-none"
      onClick={onClick}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {title}
    </button>
  );
};

export default Button;

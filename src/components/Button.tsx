interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      type="button"
      className="font-poppins font-medium transition text-white bg-primary hover:bg-primaryDark focus:ring-4 focus:ring-primaryLight rounded-lg text-sm px-6 py-3 focus:outline-none"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

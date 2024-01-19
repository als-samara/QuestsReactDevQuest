interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    const handleClick = () => {
        alert(`A label desse botão é ${label}`);
    };

    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;

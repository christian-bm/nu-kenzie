import "./style.css";

function Button({ children, className, onClick , type = 'button',value }) {
	return (
		<button value={value} type={type} className={className} onClick={onClick}>
			{children}
		</button>
	);
}
export default Button;

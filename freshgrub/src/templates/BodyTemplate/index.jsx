import styles from "../../components/header/header.module.css";

const BodyTemplate = ({ children }) => {
	return (
		<div class={styles.image}>
			{children}
		</div>
	);
};

export default BodyTemplate;

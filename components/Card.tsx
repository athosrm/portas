import styles from '../styles/Card.module.css';

// O sinal de ? no bgcolor significa que é opcional
interface CardProps {
	bgcolor?: string;
	children?: any;
}

export default function Card(props: CardProps) {
	return (
		<div className={styles.card} style={{ backgroundColor: props.bgcolor ?? '#fff' }}>
			{props.children}
		</div>
	);
}

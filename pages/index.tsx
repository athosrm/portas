import Card from '../components/Card';
import styles from '../styles/Formulario.module.css';
import Link from 'next/link';
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Formulario() {
	const [qtPortas, setQtPortas] = useState(3);

	return (
		<div className={styles.formulario}>
			<div>
				<Card bgcolor="#c0392c">
					<h1>Monty Hall</h1>
				</Card>
			</div>
			<div>
				<Card>
					<EntradaNumerica
						text={'Quantidade de portas'}
						value={qtPortas}
						onChange={(novaQtPortas) => setQtPortas(novaQtPortas)}
					/>
				</Card>
			</div>
			<div>
				<Card bgcolor="#28a085">
					<Link href={`/jogo/${qtPortas}`} passHref>
						<h2 className={styles.link}>Iniciar</h2>
					</Link>
				</Card>
			</div>
		</div>
	);
}

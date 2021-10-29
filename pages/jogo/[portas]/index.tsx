import { useEffect, useState } from 'react';
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import styles from '../../../styles/Jogo.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Jogo() {
	const router = useRouter();

	//const [portas, setPortas] = useState(criarPortas(4, 2));
	const [portas, setPortas] = useState([]);
	const [valido, setValido] = useState(false);

	// o router.query é string, o sinal de + na frente converte string em number
	// +router.query.portas
	// +router.query.presente
	// O sinal de ? indica que se vier nulo não causará efeito algum
	// [router?.query]

	useEffect(() => {
		const portas = +router.query.portas;
		const qtPortasValida = portas >= 3 && portas <= 24;
		setValido(qtPortasValida);
	}, [portas, router.query.portas]);

	useEffect(() => {
		const portas = +router.query.portas;
		//const presente = +router.query.presente;
		const presente = Math.floor(Math.random() * portas) + 1;
		console.log(presente);
		setPortas(criarPortas(portas, presente));
	}, [router?.query]);

	function renderizarPortas() {
		return portas.map((porta) => {
			return (
				<Porta
					key={porta.numero}
					porta={porta}
					onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))}
				/>
			);
		});
	}

	return (
		<div className={styles.jogo}>
			<div className={styles.portas}>
				{valido ? renderizarPortas() : <h2>Quantidade de portas inválida!</h2>}
			</div>
			<div className={styles.botoes}>
				<Link href="/" passHref>
					<button>Reiniciar jogo</button>
				</Link>
			</div>
		</div>
	);
}

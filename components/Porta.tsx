import styles from '../styles/Porta.module.css';
import PortaClass from '../model/PortaClass';
import Presente from './Presente';

interface PortaProps {
	porta: PortaClass;
	onChange: (novaPorta: PortaClass) => void;
}

export default function Porta(props: PortaProps) {
	const { porta } = props;
	const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

	const alternarSelecao = (e) => props.onChange(porta.alternarSelecao());
	const abrir = (e) => {
		e.stopPropagation();
		props.onChange(porta.abrir());
	};

	function renderizarPorta() {
		return (
			<div className={styles.porta}>
				<div className={styles.numero}>{porta.numero}</div>
				<div className={styles.macaneta} onClick={abrir}></div>
			</div>
		);
	}

	return (
		<div className={styles.area} onClick={alternarSelecao}>
			<div className={`${styles.estrutura} ${selecionada}`}>
				{porta.fechada ? renderizarPorta() : porta.presente ? <Presente /> : false}
			</div>
			<div className={styles.chao}></div>
		</div>
	);
}

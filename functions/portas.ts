import PortaClass from '../model/PortaClass';

export function criarPortas(qtde: number, portaComPresente: number): PortaClass[] {
	return Array.from({ length: qtde }, (_, i) => {
		const numero = i + 1;
		const presente = numero === portaComPresente;
		return new PortaClass(numero, presente);
	});
}

export function atualizarPortas(portas: PortaClass[], portaModificada: PortaClass): PortaClass[] {
	return portas.map((portaAtual) => {
		const igualPortaModificada = portaAtual.numero === portaModificada.numero;
		if (igualPortaModificada) {
			return portaModificada;
		} else {
			return portaModificada.aberta ? portaAtual : portaAtual.desSelecionar();
		}
	});
}

import digitalSistemsFile from './files/sistemas-digitais.zip'

type Resources = {
	name: string
	link: string
}
type Software = {
	name: string
	link: string
}

type List = {
	name: string
	children?: List[]
}

type Subject = {
	slug: string
	name: string
	prerequisites: string[]
	topics: List[]
	software: Software[]
	resources: Resources[]
	exercises: string[]
}

export const subjects: Subject[] = [
	{
		slug: 'sistemas-digitais',
		name: 'Sistemas Digitais',
		prerequisites: ['Álgebra', 'Aritmética', 'Sistemas numéricos', 'Sistema binário', 'Sistema octal', 'Sistema hexadecimal', 'Expressões lógicas'],
		topics: [
			{ name: 'Álgebra de Boole' },
			{ name: 'Portas Lógicas)', children: [{ name: 'AND' }, { name: 'OR' }, { name: 'NOT' }, { name: 'NAND' }, { name: 'NOR' }, { name: 'XOR' }, { name: 'XNOR' }] },
			{ name: 'Expressões Booleanas' },
			{ name: 'Tabelas de verdade' },
			{ name: 'Mapas de Karnaugh' },
			{ name: 'Expressões simplificadas' },
			{
				name: 'Circuitos Combinatórios',
				children: [
					{ name: 'Multiplexadores' },
					{ name: 'Demultiplexadores' },
					{ name: 'Codificadores' },
					{ name: 'Descodificadores' },
					{ name: 'Somador' },
					{ name: 'Somador completo' },
				],
			},
			{ name: 'Flip-flops', children: [{ name: 'Latch SR' }, { name: 'Latch JK' }, { name: 'Flip-flop D' }, { name: 'Flip-flop T' }] },
			{
				name: 'Circuitos Sequenciais',
				children: [{ name: 'Registos' }, { name: 'Contadores' }, { name: 'Somador sequencial' }, { name: 'Subtrator sequencial' }],
			},
			{ name: 'FSMs' },
			{ name: 'Síntese Lógica' },
			{ name: 'Projeto de Circuitos Digitais' },
			{ name: 'Famílias Lógicas', children: [{ name: 'TTL' }, { name: 'CMOS' }] },
			{ name: 'Temporização de Circuitos' },
			{ name: 'Memórias', children: [{ name: 'RAM' }, { name: 'ROM' }, { name: 'EEPROM' }, { name: 'Flash' }] },
			{ name: 'Interfaces Digitais' },
			{ name: 'FPGAs' },
			{ name: 'VHDL' },
			{ name: 'ASICs' },
		],
		resources: [
			{
				name: 'Matéria de Sistemas Digitais',
				link: digitalSistemsFile,
			},
		],
		software: [
			{
				name: 'Logisim',
				link: 'https://sourceforge.net/projects/circuit/',
			},
		],
		exercises: ['Construção de circuitos combinatórios', 'Construção de circuitos sequenciais', 'Programação de microcontroladores'],
	},
]

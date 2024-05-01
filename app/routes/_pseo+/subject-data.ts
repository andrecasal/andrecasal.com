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
	exercises: string[]
	isTutorable: boolean
}

export const subjects: Subject[] = [
	{
		slug: 'sistemas-digitais',
		name: 'Sistemas Digitais',
		prerequisites: ['Conhecimento básico de álgebra', 'Aritmética e sistemas numéricos (especialmente binário)', 'Manipulação de números e expressões lógicas'],
		topics: [
			{ name: 'Álgebra de Boole' },
			{ name: 'Portas Lógicas (AND, OR, NOT, NAND, NOR, XOR, XNOR)' },
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
			{
				name: 'Circuitos Sequenciais',
				children: [
					{ name: 'Flip-flops (Latch SR, Latch JK, Flip-flop D, Flip-flop T)' },
					{ name: 'Registos' },
					{ name: 'Contadores' },
					{ name: 'Somador sequencial' },
					{ name: 'Subtrator sequencial' },
				],
			},
			{ name: 'Máquinas de Estado Finito (FSMs)' },
			{ name: 'Síntese Lógica' },
			{ name: 'Projeto de Circuitos Digitais' },
			{ name: 'Famílias Lógicas (TTL, CMOS)' },
			{ name: 'Temporização de Circuitos' },
			{ name: 'Memórias (RAM, ROM, EEPROM, Flash)' },
			{ name: 'Interfaces Digitais' },
			{ name: 'FPGA (Field-Programmable Gate Array)' },
			{ name: 'VHDL/Verilog' },
			{ name: 'Application-Specific Integrated Circuits (ASICs)' },
		],
		software: [
			{
				name: 'Logisim',
				link: 'https://sourceforge.net/projects/circuit/',
			},
		],
		exercises: ['Construção de circuitos combinatórios', 'Construção de circuitos sequenciais', 'Programação de microcontroladores'],
		isTutorable: true,
	},
]

import digitalSistemsFile from './materia+/files/sistemas-digitais.zip'
import arquiteturaDeComputadores from './materia+/files/arquitetura-de-computadores.zip'
import sistemasOperativos from './materia+/files/sistemas-operativos.zip'

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
	prerequisites?: string[]
	topics?: List[]
	software?: Software[]
	resources?: string
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
		resources: digitalSistemsFile,
		software: [
			{
				name: 'Logisim',
				link: 'https://sourceforge.net/projects/circuit/',
			},
		],
	},
	{
		slug: 'arquitetura-de-computadores',
		name: 'Arquitetura de Computadores',
		prerequisites: ['Sistemas Digitais'],
		topics: [
			{
				name: 'Ciclo de execução de instruções',
				children: [{ name: 'Fetch' }, { name: 'Decode' }, { name: 'Execute' }, { name: 'Memory Access (if needed)' }, { name: 'Registry Write-back (if needed)' }],
			},
			{
				name: 'CPU',
				children: [
					{ name: 'Program Counter' },
					{ name: 'Instruction Memory' },
					{ name: 'Registers' },
					{ name: 'ALU' },
					{ name: 'Data Memory' },
					{ name: 'Control Unit' },
					{ name: 'Datapath' },
				],
			},
			{
				name: 'Arquiteturas',
				children: [{ name: 'RISC' }, { name: 'CISC' }, { name: 'VLIW' }, { name: 'EPIC' }, { name: 'MISC' }],
			},
			{
				name: 'ISAs',
				children: [{ name: 'MIPS' }, { name: 'ARM' }, { name: 'x86' }, { name: 'x86-64' }, { name: 'PowerPC' }, { name: 'SPARC' }, { name: 'RISC-V' }, { name: 'Itanium' }],
			},
			{ name: 'Pipelining' },
			{ name: 'Previsão de saltos' },
			{ name: 'Memória cache' },
			{ name: 'Hierarquia de memória' },
			{ name: 'Memoria Virtual' },
			{ name: 'Sistemas de I/O' },
			{ name: 'Buses' },
			{ name: 'Multiprocessadores' },
			{ name: 'Paralelismo' },
		],
		resources: arquiteturaDeComputadores,
		software: [
			{
				name: 'MARS',
				link: 'https://courses.missouristate.edu/kenvollmar/mars/download.htm',
			},
		],
	},
	{
		slug: 'assembly',
		name: 'Assembly',
	},
	{
		slug: 'sistemas-operativos',
		name: 'Sistemas Operativos',
		prerequisites: ['Sistemas Digitais', 'Arquitetura de Computadores'],
		topics: [
			{
				name: 'Introdução aos Sistemas Operativos',
				children: [
					{ name: 'Definição e função de um sistema operativo' },
					{ name: 'História e evolução dos sistemas operativos' },
					{ name: 'Tipos de sistemas operativos (monolíticos, em camadas, distribuídos, etc.)' },
				],
			},
			{
				name: 'Processos e Threads',
				children: [
					{ name: 'Conceito de processo e thread' },
					{ name: 'Escalonamento de processos' },
					{ name: 'Sincronização e comunicação entre processos' },
					{ name: 'Deadlocks e prevenção de deadlocks' },
					{ name: 'Threads concorrentes e paralelismo' },
				],
			},
			{
				name: 'Gestão de Memória',
				children: [
					{ name: 'Hierarquia de memória' },
					{ name: 'Gestão de memória física e virtual' },
					{ name: 'Paginação e segmentação' },
					{ name: 'Memória virtual e troca (swapping)' },
					{ name: 'Fragmentação de memória' },
				],
			},
			{
				name: 'Sistemas de Ficheiros',
				children: [
					{ name: 'Estrutura de sistemas de ficheiros' },
					{ name: 'Operações básicas de ficheiros (abrir, fechar, ler, escrever)' },
					{ name: 'Alocação de espaço em disco (alocação contígua, encadeada, indexada)' },
					{ name: 'Diretórios e organização hierárquica' },
					{ name: 'Recuperação de falhas em sistemas de ficheiros' },
				],
			},
			{
				name: 'Entrada e Saída (E/S)',
				children: [
					{ name: 'Princípios de E/S' },
					{ name: 'Gestão de dispositivos de E/S' },
					{ name: 'Sincronização de E/S' },
					{ name: 'Estratégias de E/S (buffering, spooling, cache)' },
				],
			},
			{
				name: 'Sistemas Distribuídos',
				children: [
					{ name: 'Conceitos básicos de sistemas distribuídos' },
					{ name: 'Comunicação entre processos em redes' },
					{ name: 'Coordenação e sincronização em sistemas distribuídos' },
					{ name: 'Tolerância a falhas em sistemas distribuídos' },
				],
			},
			{
				name: 'Virtualização e Máquinas Virtuais',
				children: [
					{ name: 'Conceitos de virtualização' },
					{ name: 'Tipos de virtualização (plena, para-sistema, de aplicação)' },
					{ name: 'Máquinas virtuais e hipervisores' },
					{ name: 'Migração e balanceamento de carga em ambientes virtualizados' },
				],
			},
			{
				name: 'Segurança em Sistemas Operativos',
				children: [
					{ name: 'Princípios de segurança da informação' },
					{ name: 'Controlo de acesso e políticas de segurança' },
					{ name: 'Autenticação e autorização' },
					{ name: 'Criptografia e assinaturas digitais' },
					{ name: 'Proteção contra ameaças e ataques em sistemas operativos' },
				],
			},
		],
		resources: sistemasOperativos,
		software: [
			{
				name: 'Linux',
				link: 'https://www.linux.org/pages/download/',
			},
			{
				name: 'VirtualBox',
				link: 'https://www.virtualbox.org/',
			},
			{
				name: 'Parallels Desktop',
				link: 'https://www.parallels.com/products/desktop/',
			},
			{
				name: 'VMware',
				link: 'https://www.vmware.com/',
			},
		],
	},
	{
		slug: 'introducao-a-programacao',
		name: 'Introdução à Programação',
	},
	{
		slug: 'programacao',
		name: 'Programação',
	},
	{
		slug: 'programacao-orientada-a-objetos',
		name: 'Programação Orientada a Objetos',
	},
	{
		slug: 'programacao-funcional',
		name: 'Programação Funcional',
	},
	{
		slug: 'algoritmos',
		name: 'Algoritmos',
	},{
		slug: 'c',
		name: 'C',
	},
	{
		slug: 'cpp',
		name: 'C++',
	},
	{
		slug: 'csharp',
		name: 'C#',
	},
	{
		slug: 'java',
		name: 'Java',
	},
	{
		slug: 'kotlin',
		name: 'Kotlin',
	},
	{
		slug: 'rust',
		name: 'Rust',
	},
	{
		slug: 'php',
		name: 'PHP',
	},
	{
		slug: 'html',
		name: 'HTML',
	},
	{
		slug: 'css',
		name: 'CSS',
	},
	{
		slug: 'javascript',
		name: 'JavaScript',
	},
	{
		slug: 'typescript',
		name: 'TypeScript',
	},
	{
		slug: 'python',
		name: 'Python',
	},
	{
		slug: 'spring-boot',
		name: 'Spring Boot',
	},
	{
		slug: 'react',
		name: 'React',
	},
	{
		slug: 'jpa',
		name: 'JPA',
	},
	{
		slug: 'python',
		name: 'Python',
	},
	{
		slug: 'estruturas-de-dados',
		name: 'Estuturas de Dados',
	},
	{
		slug: 'bases-de-dados',
		name: 'Bases de Dados',
		prerequisites: [
			'Aritmética',
			'Álgebra',
			'Sistemas numéricos',
			'Sistema binário',
			'Sistema octal',
			'Sistema hexadecimal',
			'Expressões lógicas',
			'Tipos de dados',
		],
		topics: [
			{
				name: 'Introdução às Bases de Dados',
				children: [
					{ name: 'Definição e função de uma base de dados' },
					{ name: 'Modelos de dados (relacional, hierárquico, em rede, orientado a objetos, etc.)' },
					{ name: 'Sistemas de gestão de bases de dados (SGBD)' },
					{ name: 'Normalização de bases de dados' },
				],
			},
			{
				name: 'Modelo Relacional',
				children: [
					{ name: 'Conceitos básicos de tabelas, tuplos, atributos, chaves, etc.' },
					{ name: 'Álgebra relacional' },
					{ name: 'Cálculo relacional' },
					{ name: 'Integridade referencial' },
					{ name: 'Normalização de bases de dados' },
				],
			},
			{
				name: 'SQL',
				children: [
					{ name: 'Linguagem de definição de dados (DDL)' },
					{ name: 'Linguagem de manipulação de dados (DML)' },
					{ name: 'Linguagem de controlo de dados (DCL)' },
					{ name: 'Linguagem de transações (DCL)' },
					{ name: 'Funções e procedimentos' },
				],
			},
			{
				name: 'Modelo de Entidade-Relação (ER)',
				children: [
					{ name: 'Conceitos básicos de entidades, relações, atributos, chaves, etc.' },
					{ name: 'Modelo de dados ER' },
					{ name: 'Modelo de dados extendido ER' },
					{ name: 'Normalização de bases de dados' },
				],
			},
			{
				name: 'Bases de Dados Distribuídas',
				children: [
					{ name: 'Conceitos básicos de bases de dados distribuídas' },
					{ name: 'Arquiteturas de bases de dados distribuídas' },
					{ name: 'Transações distribuídas' },
					{ name: 'Recuperação de falhas em bases de dados distribuídas' },
				],
			},
			{
				name: 'Bases de Dados NoSQL',
				children: [
					{ name: 'Conceitos básicos de bases de dados NoSQL' },
					{ name: 'Tipos de bases de dados NoSQL (documentais, chave-valor, colunares, etc.)' },
					{ name: 'Modelos de dados NoSQL' },
					{ name: 'Operações básicas em bases de dados NoSQL' },
				],
			},
			{
				name: 'Bases de Dados Temporais',
				children: [
					{ name: 'Conceitos básicos de bases de dados temporais' },
					{ name: 'Modelos de dados temporais' },
					{ name: 'Operações básicas em bases de dados temporais' },
					{ name: 'Recuperação de informação temporal' },
				],
			},
			{
				name: 'Bases de Dados Espaciais',
				children: [
					{ name: 'Conceitos básicos de bases de dados espaciais' },
					{ name: 'Modelos de dados espaciais' },
					{ name: 'Operações básicas em bases de dados espaciais' },
					{ name: 'Recuperação de informação espacial' },
				],
			},
		],
		resources: sistemasOperativos,
		software: [
			{
				name: 'SQLite',
				link: 'https://sqlite.org/',
			},
			{
				name: 'MySQL',
				link: 'https://www.mysql.com/',
			},
			{
				name: 'PostgreSQL',
				link: 'https://www.postgresql.org/',
			},
			{
				name: 'MongoDB',
				link: 'https://www.mongodb.com/',
			},
			{
				name: 'Cassandra',
				link: 'http://cassandra.apache.org/',
			},
		],
	},
	{
		slug: 'sql',
		name: 'SQL',
	},
	{
		slug: 'redes-de-computadores',
		name: 'Redes de Computadores',
	},
	{
		slug: 'algebra-linear',
		name: 'Álgebra Linear',
	},
	{
		slug: 'calculo',
		name: 'Cálculo',
	},
	{
		slug: 'excel',
		name: 'Excel',
	},
	{
		slug: 'microsoft-office',
		name: 'Microsoft Office',
	},
	{
		slug: 'word',
		name: 'Word',
	},
]

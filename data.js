// data.js - Fonte de Dados (Foco no Cargo)

const colors = {
    red:        'var(--c-red)', 
	black:      'var(--c-black)', 
	grey:       'var(--c-grey)',
    orange:     'var(--c-orange)', 
	gold:       'var(--c-gold)', 
	blueDark:   'var(--c-blue-dark)',
    blueLight:  'var(--c-blue-light)', 
	green:      'var(--c-green)', 
	cyan:       'var(--c-cyan)',
    purple:     'var(--c-purple)', 
	yellow:     'var(--c-yellow)'
};

const config = {
    // TREINAMENTOS: Catálogo de Cursos (IDs fixos)
    treinamentos: [
        { 
            id: 1, 
            nome: "01 - ONBOARDING: Programas Edesoft", 
            color: colors.purple,
            desc: "Apresenta os programas da Edesoft, permitindo que os colaboradores compreendam as oportunidades de desenvolvimento profissional e pessoal dentro da empresa, integrando-se melhor aos projetos da organização."
        },
        { 
            id: 2, 
            nome: "01 - ONBOARDING: Rotinas Internas", 
            color: colors.purple,
            desc: "Orienta os colaboradores sobre os processos e rotinas da empresa, facilitando sua adaptação ao ambiente de trabalho e garantindo uma participação eficiente nas atividades diárias como parte do time."
        },
        { 
            id: 3, 
            nome: "01 - ONBOARDING: Imagem & Estilo", 
            color: colors.purple,
            desc: "Ensina sobre a importância da imagem pessoal e profissional, ajudando os colaboradores a se alinharem com os padrões culturais da empresa, refletindo confiança e profissionalismo em sua atuação."
        },

        { 
            id: 5, 
            nome: "02 - DESENV. PESSOAL: Leadership", 
            color: colors.black,
            desc: "Desenvolve habilidades de liderança, ajudando o colaborador a se tornar um líder eficaz, capaz de influenciar e motivar equipes com confiança e clareza."
        },
        { 
            id: 6, 
            nome: "02 - DESENV. PESSOAL: Microbooks", 
            color: colors.black,
            desc: "Fornece resumos rápidos de livros, facilitando o acesso ao conhecimento de obras importantes para o desenvolvimento pessoal e profissional."
        },
        { 
            id: 76, 
            nome: "02 - DESENV. PESSOAL: Metodologia DISC", 
            color: colors.black,
            desc: "Ensina a metodologia DISC, ajudando o colaborador a entender perfis comportamentais para melhorar a comunicação e a gestão de equipes."
        },
		
        { 
            id: 8, 
            nome: "03 - OUTSOURCING: Framework Scrum", 
            color: colors.orange,
            desc: "Apresenta o framework Scrum, detalhando suas práticas e como implementá-las para melhorar a gestão de projetos ágeis."
        },
        { 
            id: 9, 
            nome: "03 - OUTSOURCING: Logística Rodoviária", 
            color: colors.orange,
            desc: "Ensina sobre o gerenciamento logístico no transporte rodoviário, otimizando o fluxo de mercadorias e o desempenho das operações."
        },
        { 
            id: 10, 
            nome: "03 - OUTSOURCING: Lógica de Programação", 
            color: colors.orange,
            desc: "Introduz conceitos básicos de programação, ajudando o colaborador a desenvolver raciocínio lógico para resolver problemas técnicos."
        },
        { 
            id: 14, 
            nome: "04 - QA: Custos da não qualidade", 
            color: colors.green,
            desc: "Explora os impactos financeiros e operacionais da falta de qualidade no desenvolvimento de software, capacitando o colaborador a mitigar esses riscos."
        },
        { 
            id: 15, 
            nome: "04 - QA: Qualidade do Início ao Fim", 
            color: colors.green,
            desc: "Ensina o ciclo completo de qualidade, garantindo que o colaborador acompanhe e assegure a qualidade do produto desde o início até a entrega final."
        },
        { 
            id: 16, 
            nome: "04 - QA: Fundamentos em Testes", 
            color: colors.green,
            desc: "Apresenta os conceitos básicos de testes de software, capacitando o colaborador a identificar e corrigir defeitos nos produtos desenvolvidos."
        },
        { 
            id: 17, 
            nome: "04 - QA: Ferramentas da Qualidade", 
            color: colors.green,
            desc: "Capacita o colaborador a utilizar ferramentas específicas de QA para automatizar e melhorar o processo de controle de qualidade."
        },
        { 
            id: 18, 
            nome: "04 - QA: Introdução a Carreira de QA", 
            color: colors.green,
            desc: "Introduz a carreira de QA, explicando os papéis e responsabilidades, ajudando o colaborador a se orientar e se destacar na área."
        },
        { 
            id: 19, 
            nome: "04 - QA: Fund. da Gestão da Qualidade", 
            color: colors.green,
            desc: "Ensina os fundamentos da gestão da qualidade, capacitando o colaborador a implementar e gerenciar processos de qualidade nos projetos."
        },
        { 
            id: 20, 
            nome: "04 - QA: Robot Framework - Fundamentos", 
            color: colors.green,
            desc: "Apresenta os fundamentos do Robot Framework, ajudando o colaborador a iniciar com automação de testes de forma eficaz."
        },
        { 
            id: 21, 
            nome: "04 - QA: Robot Framework - Avançado", 
            color: colors.green,
            desc: "Aprofunda no uso do Robot Framework para automação avançada de testes, capacitando o colaborador a realizar testes complexos."
        },
        { 
            id: 22, 
            nome: "04 - QA: Robot Framework - Testes com API", 
            color: colors.green,
            desc: "Capacita o colaborador a realizar testes automatizados de APIs utilizando o Robot Framework, melhorando a cobertura e eficiência dos testes."
        },
        { 
            id: 23, 
            nome: "04 - QA: Engenharia de Requisitos", 
            color: colors.green,
            desc: "Explora os conceitos de engenharia de requisitos, preparando o colaborador para coletar e documentar necessidades de clientes de forma eficaz."
        },
        { 
            id: 24, 
            nome: "04 - QA: OKR - Objectives and Key Results", 
            color: colors.green,
            desc: "Introduz o framework OKR, capacitando o colaborador a definir e acompanhar metas e resultados-chave alinhados com os objetivos estratégicos."
        },
        { 
            id: 25, 
            nome: "05 - FERRAMENTAS: Azure DevOps", 
            color: colors.black,
            desc: "Introduz os fundamentos do DevOps e uso da ferramenta, ajudando o colaborador a integrar desenvolvimento e operações de forma eficiente."
        },
        { 
            id: 26, 
            nome: "05 - FERRAMENTAS: Banco de Dados", 
            color: colors.black,
            desc: "Ensina os conceitos essenciais de bancos de dados, preparando o colaborador para trabalhar com armazenamento e manipulação de dados."
        },
        { 
            id: 27, 
            nome: "05 - FERRAMENTAS: Bizagi", 
            color: colors.black,
            desc: "Apresenta o Bizagi, uma ferramenta de modelagem de processos de negócios, capacitando o colaborador a otimizar fluxos de trabalho."
        },
        { 
            id: 28, 
            nome: "05 - FERRAMENTAS: Clickup", 
            color: colors.black,
            desc: "Ensina o uso do Clickup, uma ferramenta de gestão de projetos, para ajudar o colaborador a organizar e gerenciar tarefas de forma eficaz."
        },
        { 
            id: 29, 
            nome: "05 - FERRAMENTAS: Figma", 
            color: colors.black,
            desc: "Capacita o colaborador no uso do Figma para criação e colaboração em design de interfaces digitais."
        },
        { 
            id: 30, 
            nome: "05 - FERRAMENTAS: GIT", 
            color: colors.black,
            desc: "Ensina os conceitos e o uso do GIT para controle de versão, fundamental para equipes de desenvolvimento."
        },
        { 
            id: 31, 
            nome: "05 - FERRAMENTAS: Minitab", 
            color: colors.black,
            desc: "Capacita o colaborador a utilizar o Minitab para análise de dados estatísticos, aprimorando a tomada de decisões baseada em dados."
        },
        { 
            id: 32, 
            nome: "05 - FERRAMENTAS: Pacote Office", 
            color: colors.black,
            desc: "Ensina o uso do Pacote Office (Word, Excel, PowerPoint) para melhorar a produtividade em diversas tarefas administrativas."
        },
        { 
            id: 33, 
            nome: "05 - FERRAMENTAS: Photoshop", 
            color: colors.black,
            desc: "Introduz os fundamentos do Photoshop para edição de imagens, ajudando o colaborador a criar e manipular gráficos de forma profissional."
        },
        { 
            id: 34, 
            nome: "05 - FERRAMENTAS: Power BI - Básico", 
            color: colors.black,
            desc: "Apresenta os conceitos básicos do Power BI para criação de relatórios e visualizações de dados interativos."
        },
        { 
            id: 35, 
            nome: "05 - FERRAMENTAS: Power BI - Avançado", 
            color: colors.black,
            desc: "Capacita o colaborador a utilizar o Power BI de forma avançada, permitindo a criação de análises de dados complexas e personalizadas."
        },
        { 
            id: 36, 
            nome: "05 - FERRAMENTAS: Trello", 
            color: colors.black,
            desc: "Ensina o uso do Trello para organização e gerenciamento de tarefas, facilitando a colaboração e o acompanhamento de projetos."
        },

        { 
            id: 7, 
            nome: "06 - GOVERNANÇA: Service Desk", 
            color: colors.red,
            desc: "Aborda técnicas e ferramentas para atendimento e suporte ao cliente, ajudando a melhorar o serviço e a satisfação dos usuários."
        },
		
        { 
            id: 37, 
            nome: "06 - GOVERNANÇA: Governança de TI", 
            color: colors.red,
            desc: "Capacita o colaborador a implementar e gerenciar estruturas de governança de TI, alinhando a tecnologia aos objetivos do negócio."
        },
        { 
            id: 67, 
            nome: "06 - GOVERNANÇA: ITIL - Overview", 
            color: colors.red,
            desc: "Fornece uma visão geral do ITIL, apresentando os principais conceitos e práticas para a gestão de serviços de TI."
        },
        { 
            id: 68, 
            nome: "06 - GOVERNANÇA: ITIL - Carreiras", 
            color: colors.red,
            desc: "Capacita o colaborador a explorar as diferentes carreiras disponíveis no ITIL, auxiliando na definição de trajetórias profissionais."
        },
        { 
            id: 38, 
            nome: "06 - GOVERNANÇA: ITIL 4 Foundation", 
            color: colors.red,
            desc: "Ensina os fundamentos do ITIL 4, preparando o colaborador para aplicar boas práticas de gerenciamento de serviços de TI."
        },
        { 
            id: 39, 
            nome: "06 - GOVERNANÇA: COBIT 2019", 
            color: colors.red,
            desc: "Apresenta o framework COBIT 2019, capacitando o colaborador a gerenciar e governar a TI dentro das organizações."
        },
		
        { 
            id: 71, 
            nome: "06 - GOVERNANÇA: ISO 20000 - Serviços TI", 
            color: colors.red,
            desc: "Capacita o colaborador a entender e aplicar as normas da família ISO 20000 para gerenciamento de serviços de TI."
        },
        { 
            id: 72, 
            nome: "06 - GOVERNANÇA: ISO 27000 - Seg. Info.", 
            color: colors.red,
            desc: "Ensina a importância da conformidade com as normas da família ISO 27000, preparando o colaborador para garantir a segurança da informação."
        },
        { 
            id: 40, 
            nome: "06 - GOVERNANÇA: ISO 42000 - Gov. IA", 
            color: colors.red,
            desc: "Ensina a importância da família ISO 42000, preparando o colaborador para governança de IA."
        },

		
        { 
            id: 42, 
            nome: "07 - CMMI TEC: Areas de Prática do Modelo", 
            color: colors.grey,
            desc: "Capacita o colaborador a entender e aplicar as áreas de prática do modelo CMMI, alinhando processos a padrões de qualidade."
        },
        { 
            id: 43, 
            nome: "07 - CMMI TEC: Ciclo de Vida de Desenv.", 
            color: colors.grey,
            desc: "Ensina o ciclo de vida de desenvolvimento conforme o CMMI, ajudando o colaborador a implementar melhorias contínuas em projetos."
        },
        { 
            id: 44, 
            nome: "07 - CMMI GLOBAL: Funções do Grupo EPG", 
            color: colors.grey,
            desc: "Explora as funções do Grupo EPG, detalhando o papel desse grupo na implementação e manutenção do modelo CMMI na organização."
        },
        { 
            id: 45, 
            nome: "07 - CMMI GLOBAL: Imersão no Modelo", 
            color: colors.grey,
            desc: "Oferece uma imersão no modelo CMMI, capacitando o colaborador a entender profundamente suas práticas e benefícios."
        },
        { 
            id: 46, 
            nome: "07 - CMMI GLOBAL: Plano de Melhorias", 
            color: colors.grey,
            desc: "Apresenta o plano de melhorias da Edesoft, baseado no modelo CMMI, mostrando como a empresa promove a evolução contínua de seus processos."
        },
        { 
            id: 47, 
            nome: "07 - CMMI GLOBAL: Políticas e Diretrizes", 
            color: colors.grey,
            desc: "Ensina as rotinas organizacionais conforme o CMMI, capacitando o colaborador a alinhar as práticas diárias aos objetivos de qualidade."
        },


		
        { 
            id: 48, 
            nome: "08 - INFRAESTRUTURA: Hardware/Redes", 
            color: colors.green,
            desc: "Capacita o colaborador a entender a configuração e manutenção de hardware e redes, garantindo a estabilidade e o bom funcionamento da infraestrutura de TI."
        },
        { 
            id: 49, 
            nome: "09 - MARKETING: Mídias Sociais", 
            color: colors.blueDark,
            desc: "Ensina estratégias e ferramentas para gerenciar redes sociais, ajudando o colaborador a melhorar a presença online e aumentar o engajamento digital da empresa."
        },
        { 
            id: 50, 
            nome: "10 - COMERCIAL: Curso de Vendas", 
            color: colors.red,
            desc: "Foca em técnicas de vendas, preparando o colaborador para interagir com clientes de forma assertiva, contribuindo para o aumento de receitas e expansão da base de clientes."
        },
        { 
            id: 51, 
            nome: "11 - GESTÃO: Departamento Pessoal", 
            color: colors.gold,
            desc: "Fornece as habilidades necessárias para lidar com processos de administração de pessoal, assegurando a conformidade com as políticas e o bom funcionamento da área de RH."
        },
        { 
            id: 52, 
            nome: "11 - GESTÃO: Financeira", 
            color: colors.gold,
            desc: "Ensina conceitos e práticas de gestão financeira, capacitando o colaborador a tomar decisões estratégicas e otimizar os recursos financeiros da organização."
        },
        { 
            id: 53, 
            nome: "11 - GESTÃO: Pessoas", 
            color: colors.gold,
            desc: "Desenvolve habilidades de liderança e gestão de pessoas, ajudando o colaborador a gerenciar equipes com eficiência e promover um ambiente de trabalho colaborativo."
        },
        { 
            id: 54, 
            nome: "11 - GESTÃO: Processos", 
            color: colors.gold,
            desc: "Capacita o colaborador a mapear, documentar e otimizar processos internos, melhorando a eficiência e alinhando as operações aos objetivos estratégicos."
        },
        { 
            id: 55, 
            nome: "11 - GESTÃO: Projetos", 
            color: colors.gold,
            desc: "Ensina metodologias e práticas de gestão de projetos, capacitando o colaborador a planejar, executar e monitorar projetos de forma eficaz."
        },
        { 
            id: 56, 
            nome: "12 - RH: Administração de Cargos e Salários", 
            color: colors.purple,
            desc: "Capacita o colaborador a administrar planos de cargos e salários, garantindo uma estrutura salarial justa e alinhada às práticas de mercado."
        },
        { 
            id: 57, 
            nome: "12 - RH: Recrutamento e Seleção", 
            color: colors.purple,
            desc: "Ensina técnicas de recrutamento e seleção, ajudando o colaborador a identificar e contratar talentos que se alinhem às necessidades da empresa."
        },
        { 
            id: 58, 
            nome: "13 - LEGISLAÇÃO: Leis Trabalhistas", 
            color: colors.black,
            desc: "Capacita o colaborador a entender e aplicar as leis trabalhistas, assegurando a conformidade com a legislação e a proteção dos direitos dos trabalhadores."
        },
        { 
            id: 59, 
            nome: "13 - LEGISLAÇÃO: LGPD", 
            color: colors.black,
            desc: "Ensina os princípios da LGPD, preparando o colaborador para lidar com dados pessoais de forma segura e conforme a legislação vigente."
        },
        { 
            id: 60, 
            nome: "14 - EDUCAÇÃO: Ensino Médio", 
            color: colors.blueLight,
            desc: "Fornece a base educacional necessária para compreender conceitos fundamentais e desenvolver as habilidades básicas exigidas pelo mercado."
        },
        { 
            id: 61, 
            nome: "14 - EDUCAÇÃO: Ensino Sup./Tec.", 
            color: colors.blueLight,
            desc: "Capacita o colaborador com conhecimentos avançados em sua área de atuação, preparando-o para desempenhar funções técnicas ou gerenciais."
        },
        { 
            id: 62, 
            nome: "14 - EDUCAÇÃO: Inglês - Técnico", 
            color: colors.blueLight,
            desc: "Ensina o inglês técnico necessário para a compreensão de termos e documentos, permitindo uma comunicação eficiente em ambientes de tecnologia."
        },
        { 
            id: 63, 
            nome: "14 - EDUCAÇÃO: MBA", 
            color: colors.blueLight,
            desc: "Desenvolve habilidades estratégicas e gerenciais, preparando o colaborador para assumir cargos de liderança e tomar decisões de negócios com embasamento."
        },
        { 
            id: 64, 
            nome: "14 - EDUCAÇÃO: Pós-graduação", 
            color: colors.blueLight,
            desc: "Capacita o colaborador com conhecimento especializado, promovendo o crescimento em sua área de atuação e aprimorando suas habilidades técnicas ou de gestão."
        },
        { 
            id: 65, 
            nome: "15 - ENGENHARIA DADOS: Fundamentos", 
            color: colors.blueLight,
            desc: "Introduz os fundamentos da ciência de dados, capacitando o colaborador a trabalhar com análise e interpretação de grandes volumes de dados."
        },
        { 
            id: 66, 
            nome: "16 - GOVERNANÇA: SERVICE DESK", 
            color: colors.red,
            desc: "Ensina como gerenciar uma central de serviços de TI, focando no atendimento eficiente e solução de problemas técnicos."
        },

        { 
            id: 73, 
            nome: "16 - GOVERNANÇA: Gestão Ágil com SCRUM", 
            color: colors.red,
            desc: "Ensina o uso do Scrum para gestão ágil de projetos, capacitando o colaborador a integrar times ágeis e entregar valor continuamente."
        },
        { 
            id: 74, 
            nome: "16 - GOVERNANÇA: AgileSHIFT", 
            color: colors.red,
            desc: "Capacita o colaborador a navegar pelas mudanças organizacionais e adotar práticas ágeis com o framework AgileSHIFT."
        },
        { 
            id: 75, 
            nome: "16 - GOVERNANÇA: Fundamentos de Projetos", 
            color: colors.red,
            desc: "Ensina os conceitos básicos de gestão de projetos, capacitando o colaborador a planejar, executar e monitorar projetos com sucesso."
        },

        { 
            id: 13, 
            nome: "17 - PROCESSOS: Mapeamento de Processos", 
            color: colors.cyan,
            desc: "Capacita o colaborador a mapear e modelar processos, promovendo uma visão clara dos fluxos de trabalho e suas melhorias."
        },
        { 
            id: 77, 
            nome: "17 - PROCESSOS: Bizagi Modeler", 
            color: colors.cyan,
            desc: "Ensina o uso do Bizagi Modeler para modelagem de processos de negócios, otimizando fluxos de trabalho."
        },
        { 
            id: 78, 
            nome: "17 - PROCESSOS: Estatística Básica", 
            color: colors.cyan,
            desc: "Capacita o colaborador a compreender conceitos básicos de estatística, aplicando-os na análise de dados para melhoria contínua."
        },
        { 
            id: 79, 
            nome: "17 - PROCESSOS: Introdução ao Lean", 
            color: colors.cyan,
            desc: "Introduz os princípios do Lean, capacitando o colaborador a eliminar desperdícios e aumentar a eficiência nos processos."
        },
        { 
            id: 80, 
            nome: "17 - PROCESSOS: KAIZEN", 
            color: colors.cyan,
            desc: "Apresenta a metodologia Kaizen, ensinando o colaborador a implementar melhorias contínuas em processos de trabalho."
        },
        { 
            id: 81, 
            nome: "17 - PROCESSOS: KPI", 
            color: colors.cyan,
            desc: "Ensina como definir e medir indicadores de desempenho (KPIs), fundamentais para monitorar e otimizar a performance organizacional."
        },
        { 
            id: 82, 
            nome: "17 - PROCESSOS: Lean White Belt", 
            color: colors.cyan,
            desc: "Introduz os fundamentos do Lean Seis Sigma White Belt, capacitando o colaborador a apoiar iniciativas de melhoria de qualidade."
        },
        { 
            id: 83, 
            nome: "17 - PROCESSOS: Lean Yellow Belt", 
            color: colors.cyan,
            desc: "Ensina os conceitos do Lean Seis Sigma Yellow Belt, preparando o colaborador para liderar pequenas melhorias em processos."
        },
        { 
            id: 85, 
            nome: "17 - PROCESSOS: MASP & PDCA", 
            color: colors.cyan,
            desc: "Apresenta as metodologias MASP e PDCA para resolução de problemas e melhoria contínua, garantindo processos mais eficientes."
        },
        { 
            id: 86, 
            nome: "18 - DESENVOLVIMENTO: API", 
            color: colors.blueLight,
            desc: "Ensina a criação e consumo de APIs, capacitando o colaborador a desenvolver integrações eficientes entre sistemas."
        },
        { 
            id: 87, 
            nome: "18 - DESENVOLVIMENTO: AWS", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar a AWS para desenvolver, implantar e gerenciar soluções na nuvem."
        },

        { 
            id: 88, 
            nome: "18 - DESENVOLVIMENTO: CLOUD", 
            color: colors.blueLight,
            desc: "Introduz os conceitos de computação em nuvem, capacitando o colaborador a trabalhar com infraestrutura e serviços escaláveis."
        },
        { 
            id: 11, 
            nome: "18 - DESENVOLVIMENTO: AZURE DEVOPS", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a usar o Azure DevOps para planejar, automatizar e entregar software com CI/CD."
        },
	
        { 
            id: 89, 
            nome: "18 - DESENVOLVIMENTO: DJANGO", 
            color: colors.blueLight,
            desc: "Ensina o uso do Django para desenvolvimento web em Python, capacitando o colaborador a criar aplicações robustas e escaláveis."
        },
        { 
            id: 90, 
            nome: "18 - DESENVOLVIMENTO: DOCKER", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar Docker para criar, implantar e gerenciar containers, facilitando o desenvolvimento e a operação de software."
        },
        { 
            id: 91, 
            nome: "18 - DESENVOLVIMENTO: FLASK", 
            color: colors.blueLight,
            desc: "Ensina o uso do Flask para desenvolvimento de aplicações web leves e rápidas em Python."
        },
        { 
            id: 92, 
            nome: "18 - DESENVOLVIMENTO: GIT", 
            color: colors.blueLight,
            desc: "Apresenta o GIT como ferramenta de controle de versão, capacitando o colaborador a colaborar e gerenciar código de forma eficiente."
        },
        { 
            id: 93, 
            nome: "18 - DESENVOLVIMENTO: HTML", 
            color: colors.blueLight,
            desc: "Ensina os fundamentos de HTML, capacitando o colaborador a criar e estruturar páginas web."
        },
        { 
            id: 94, 
            nome: "18 - DESENVOLVIMENTO: CSS", 
            color: colors.blueLight,
            desc: "Ensina os fundamentos de CSS, capacitando o colaborador a estilizar páginas web e melhorar a experiência do usuário."
        },
        { 
            id: 95, 
            nome: "18 - DESENVOLVIMENTO: JAVASCRIPT", 
            color: colors.blueLight,
            desc: "Ensina os fundamentos de JavaScript, capacitando o colaborador a desenvolver aplicações web dinâmicas e interativas."
        },
        { 
            id: 96, 
            nome: "18 - DESENVOLVIMENTO: LÓGICA", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a entender lógica de programação e algoritmos, essenciais para resolver problemas complexos."
        },
        { 
            id: 97, 
            nome: "18 - DESENVOLVIMENTO: MENSAGERIA", 
            color: colors.blueLight,
            desc: "Ensina os conceitos de mensageria, capacitando o colaborador a implementar sistemas de comunicação assíncrona entre serviços."
        },
        { 
            id: 98, 
            nome: "18 - DESENVOLVIMENTO: MOBX", 
            color: colors.blueLight,
            desc: "Apresenta o MOBX como uma biblioteca de gerenciamento de estado, capacitando o colaborador a criar aplicações web escaláveis."
        },
        { 
            id: 99, 
            nome: "18 - DESENVOLVIMENTO: NODEJS", 
            color: colors.blueLight,
            desc: "Ensina o uso do Node.js para desenvolvimento de aplicações server-side, capacitando o colaborador a construir sistemas rápidos e escaláveis."
        },
        { 
            id: 100, 
            nome: "18 - DESENVOLVIMENTO: ORM", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar ORMs para simplificar a interação com bancos de dados relacionais em linguagens de programação."
        },
        { 
            id: 101, 
            nome: "18 - DESENVOLVIMENTO: POO", 
            color: colors.blueLight,
            desc: "Ensina os conceitos de Programação Orientada a Objetos (POO), capacitando o colaborador a desenvolver soluções mais estruturadas."
        },
        { 
            id: 102, 
            nome: "18 - DESENVOLVIMENTO: PYTHON", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar Python para desenvolver scripts e aplicações, otimizando processos e resolvendo problemas complexos."
        },
        { 
            id: 103, 
            nome: "18 - DESENVOLVIMENTO: REACT", 
            color: colors.blueLight,
            desc: "Ensina o uso do React para construção de interfaces de usuário dinâmicas e escaláveis em aplicações web."
        },
        { 
            id: 104, 
            nome: "18 - DESENVOLVIMENTO: REDUX", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar Redux para gerenciar o estado de aplicações React de forma eficiente."
        },
	    { 
            id: 12, 
            nome: "18 - DESENVOLVIMENTO: RESTFULL", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar APIs RESTful para desenvolver, consumir e integrar serviços, aplicando boas práticas de endpoints, métodos HTTP e padrões de troca de dados."
        },
        { 
            id: 105, 
            nome: "18 - DESENVOLVIMENTO: ROADMAPS", 
            color: colors.blueLight,
            desc: "Apresenta roadmaps de desenvolvimento, capacitando o colaborador a planejar sua evolução técnica em diferentes tecnologias."
        },
        { 
            id: 106, 
            nome: "18 - DESENVOLVIMENTO: SQL", 
            color: colors.blueLight,
            desc: "Ensina SQL para gerenciamento e consulta de bancos de dados relacionais, capacitando o colaborador a manipular dados de forma eficiente."
        },
        { 
            id: 107, 
            nome: "18 - DESENVOLVIMENTO: TYPESCRIPT", 
            color: colors.blueLight,
            desc: "Capacita o colaborador a utilizar TypeScript para adicionar tipagem estática ao JavaScript, aumentando a segurança e escalabilidade do código."
        },
        { 
            id: 108, 
            nome: "19 - AUTOMAÇÃO: Básico de Make", 
            color: colors.grey,
            desc: "Ensina técnicas para criar fluxos de automação eficazes que otimizam processos, capacitando o colaborador a integrar ferramentas de forma eficiente."
        },
        { 
            id: 109, 
            nome: "19 - AUTOMAÇÃO: Básico de Manychat", 
            color: colors.grey,
            desc: "Capacita o colaborador a criar chatbots e automações de atendimento, melhorando o engajamento e a eficiência na comunicação."
        },
        { 
            id: 110, 
            nome: "19 - AUTOMAÇÃO: Básico de n8n", 
            color: colors.grey,
            desc: "Ensina a utilizar o n8n para criar automações de fluxo de trabalho complexas e integradas, otimizando processos operacionais."
        },
        { 
            id: 111, 
            nome: "20 - IA: Overview", 
            color: colors.yellow,
            desc: "Fornece uma visão geral sobre Inteligência Artificial, seus conceitos fundamentais e impacto nos negócios."
        },
        { 
            id: 112, 
            nome: "20 - IA: LLMS", 
            color: colors.yellow,
            desc: "Explora os Grandes Modelos de Linguagem (LLMs), explicando como funcionam e suas aplicações práticas."
        },
        { 
            id: 113, 
            nome: "20 - IA: ENG. DE PROMPT - FUNDAMENTOS", 
            color: colors.yellow,
            desc: "Ensina os fundamentos da engenharia de prompt, capacitando o colaborador a interagir de forma eficaz com modelos de IA."
        },
        { 
            id: 114, 
            nome: "20 - IA: ENG. DE PROMPT - CASOS DE USO", 
            color: colors.yellow,
            desc: "Apresenta casos de uso práticos de engenharia de prompt, demonstrando como aplicar a técnica em situações reais."
        },
        { 
            id: 115, 
            nome: "20 - IA: ENG. DE CONTEXTO - OVERVIEW", 
            color: colors.yellow,
            desc: "Introduz a engenharia de contexto, ensinando como fornecer informações relevantes para melhorar as respostas da IA."
        },
        { 
            id: 116, 
            nome: "20 - IA: ASSISTENTES DE IA", 
            color: colors.yellow,
            desc: "Capacita o colaborador a criar e utilizar assistentes de IA para automatizar tarefas e aumentar a produtividade."
        },
        { 
            id: 117, 
            nome: "20 - IA: AGENTES DE IA", 
            color: colors.yellow,
            desc: "Ensina sobre agentes de IA autônomos, explorando como eles podem executar tarefas complexas sem intervenção humana constante."
        }
    ],

    // CARGOS: Agora contém as definições de obrigatoriedade
    cargos: [
        { 
            id: 1, 
            nome: "Presidente", 
            corClass: "b-red",
            // Obrigatórios: Inclui CMMI Global Completo (44-47) e IA Completo (111-117)
            obrigatorios: [
                1, 2, 3, 5, 
                37, 40, 
                44, 45, 46, 47, 
                52, 53, 54, 55, 
                58, 59,
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Removemos IA (que virou obrigatório)
            recomendados: [6, 34, 49, 50, 63]
        },
        { 
            id: 2, 
            nome: "Diretor(a) Financeiro", 
            corClass: "b-black",
            // Obrigatórios: Onboarding + Leadership + Office + CMMI Global + Gestão (Fin/Pessoas/Proc/Proj) + Leis + IA Completo
            obrigatorios: [
                1, 2, 3, 5, 
                32, // Pacote Office (Vital para Financeiro)
                44, 45, 46, 47, // CMMI Global
                52, 53, 54, 55, // Gestão (Foco no 52-Financeira)
                58, 59,
                111, 112, 113, 114, 115, 116, 117 // IA Completo (Visão estratégica de eficiência)
            ],
            // Recomendados: Microbooks, Power BI (Básico/Avançado), Gov TI, ISO, MBA
            recomendados: [6, 34, 35, 37, 40, 63]
        },
        { 
            id: 3, 
            nome: "Diretor(a) Comercial", 
            corClass: "b-black",
            // Obrigatórios: Onboarding + Leadership + Office + CMMI Global + Mkt/Vendas + Gestão + Leis (LGPD Vital) + IA Completo
            obrigatorios: [
                1, 2, 3, 5, 
                32, // Pacote Office
                44, 45, 46, 47, // CMMI Global
                49, 50, // Marketing (Mídias) e Vendas (Core)
                52, 53, 54, 55, // Gestão
                58, 59, // LGPD (59) é crítico para quem lida com clientes
                111, 112, 113, 114, 115, 116, 117 // IA Completo
            ],
            // Recomendados: Microbooks, Power BI (Dashboards), Gov TI (Entender o produto), MBA
            recomendados: [6, 34, 35, 37, 63]
        },
        { 
            id: 4, 
            nome: "Diretor(a) de RH", 
            corClass: "b-black",
            // Obrigatórios: Onboarding + Leadership + Office + CMMI Global + Gestão (Foco Pessoas/DP) + RH Específico + Leis + IA Completo
            obrigatorios: [
                1, 2, 3, 5, 
                32, // Office
                44, 45, 46, 47, // CMMI Global
                51, 52, 53, 54, 55, // Gestão (51-DP e 53-Pessoas são vitais)
                56, 57, // RH Técnico (Cargos/Salários e R&S)
                58, 59, // Leis e LGPD (Críticos)
                111, 112, 113, 114, 115, 116, 117 // IA Completo
            ],
            // Recomendados: Microbooks, Power BI (People Analytics), Gov TI, Mídias Sociais (Employer Branding), MBA, DISC
            recomendados: [6, 34, 37, 49, 63, 76]
        },
        { 
            id: 5, 
            nome: "Diretor(a) de Relacionamento", 
            corClass: "b-black",
            // Obrigatórios: Onboarding + Leadership + Office + CMMI Global + Mkt (Mídias) + Gestão + Leis + IA Completo
            obrigatorios: [
                1, 2, 3, 5, 
                32, // Pacote Office
                44, 45, 46, 47, // CMMI Global
                49, // Marketing (Mídias Sociais) - Essencial para Imagem Institucional
                52, 53, 54, 55, // Gestão
                58, 59, // Leis e LGPD
                111, 112, 113, 114, 115, 116, 117 // IA Completo
            ],
            // Recomendados: Microbooks, Power BI, Vendas (Negociação), Gov TI, ISO, MBA
            recomendados: [6, 34, 35, 37, 40, 50, 63]
        },
        { 
            id: 6, 
            nome: "Diretor(a) de Processos", 
            corClass: "b-black",
            // Obrigatórios: Onboarding + Leadership + Mapeamento + QA (Gestão/Custos) + Requisitos + Office + CMMI Global (EPG) + Gestão + Leis + KPI/PDCA + IA
            obrigatorios: [
                1, 2, 3, 5, 
                13, // Mapeamento de Processos
                14, 15, 19, // QA: Custos, Qualidade Fim a Fim e Gestão da Qualidade (Vital, pois QA responde a ele)
                23, // Engenharia de Requisitos (Vital, pois Requisitos responde a ele)
                32, // Office
                44, 45, 46, 47, // CMMI Global (EPG responde a ele)
                52, 53, 54, 55, // Gestão
                58, 59, // Leis e LGPD
                81, 85, // KPI e PDCA
                111, 112, 113, 114, 115, 116, 117 // IA Completo
            ],
            // Recomendados: Microbooks, Bizagi (Ferramenta/Modelagem), Power BI, ISO (Normas), Lean/Kaizen, MBA
            recomendados: [6, 27, 34, 40, 63, 77, 79, 80]
        },
        { 
            id: 7, 
            nome: "Diretor(a) de Tecnologia", 
            corClass: "b-black",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5)
            // - Ferramentas Gestão: Azure DevOps (25) + Office (32)
            // - Gestão TI (Core): GovTI (37), ITIL (38), COBIT (39), ISO (40), AgileShift (41)
            // - CMMI Completo (Tech+Global): 42 a 47 (Vital para manter o Nível 3)
            // - Gestão: Fin/Pessoas/Proc/Proj (52-55)
            // - Compliance: Leis + LGPD (58, 59)
            // - Tech Macro: Cloud (88)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 5, 
                25, 32,
                37, 38, 39, 40, 41, 
                42, 43, 44, 45, 46, 47, 
                52, 53, 54, 55, 
                58, 59, 
                88, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Microbooks, Scrum (Metodologia), Power BI, MBA, AWS (Específico), Roadmaps
            recomendados: [6, 8, 34, 63, 87, 105]
        },
        { 
            id: 8, 
            nome: "Gestor(a) Comercial", 
            corClass: "b-cyan",
            // Obrigatórios: Onboarding + Leadership + Office + CMMI Global + Mkt/Vendas + Gestão (Fin/Pessoas/Proc/Proj) + Leis/LGPD + IA Completo
            obrigatorios: [
                1, 2, 3, 5, 
                32, // Pacote Office
                44, 45, 46, 47, // CMMI Global
                49, 50, // Mídias Sociais e Curso de Vendas
                52, 53, 54, 55, // Gestão
                58, 59, // Leis Trabalhistas e LGPD (Gestão de equipe e dados)
                111, 112, 113, 114, 115, 116, 117 // IA Completo
            ],
            // Recomendados: Microbooks, Power BI (Básico/Avançado), Gov TI (Contexto do produto), MBA
            recomendados: [6, 34, 35, 37, 63]
        },
        { 
            id: 9, 
            nome: "Gestor(a) de RH", 
            corClass: "b-cyan",
            // Obrigatórios: Onboarding + Leadership + Office + CMMI Global + Gestão (Foco Pessoas) + RH Técnico + Leis + IA Completo
            obrigatorios: [
                1, 2, 3, 5, 
                32, // Office
                44, 45, 46, 47, // CMMI Global
                52, 53, 54, 55, // Gestão (53-Pessoas é vital)
                56, 57, // RH: Cargos/Salários e Recrutamento
                58, 59, // Leis e LGPD
                111, 112, 113, 114, 115, 116, 117 // IA Completo
            ],
            // Recomendados: Microbooks, Power BI (Indicadores), Mídias Sociais (Employer Branding), MBA, DISC
            recomendados: [6, 34, 35, 49, 63, 76]
        },
        { 
            id: 10, 
            nome: "Gestor(a) de DP", 
            corClass: "b-cyan",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - CMMI Global (44-47) + IA Completo (111-117)
            // - Gestão Específica: Depto Pessoal (51), Financeira (52), Pessoas (53), Processos (54)
            // - Técnico/Legal: Cargos e Salários (56 - Visão de Folha), Leis Trabalhistas (58), LGPD (59)
            obrigatorios: [
                1, 2, 3, 5, 
                32, 
                44, 45, 46, 47, 
                51, 52, 53, 54, 
                56, 58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Microbooks, Power BI, Benefícios (36 - Operacional mas bom saber), MBA
            recomendados: [6, 34, 36, 63]
        },
        { 
            id: 11, 
            nome: "Gestor(a) de Processos", 
            corClass: "b-cyan",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - Ferramentas de Processo (Core): Mapeamento (13), Bizagi (77), KPI (81), MASP/PDCA (85)
            // - CMMI Global (44-47): Vital para quem define processos e apoia o EPG
            // - Gestão: Processos (54 - óbvio), Projetos (55)
            // - Compliance: Leis (58), LGPD (59)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 5, 
                13, 
                32, 
                44, 45, 46, 47, 
                54, 55, 
                58, 59, 
                77, 81, 85, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Estatística (78), Minitab (31), Lean/Kaizen (79, 80), Power BI (34), Requisitos (23)
            recomendados: [6, 23, 31, 34, 63, 78, 79, 80]
        },
        { 
            id: 12, 
            nome: "Gestor(a) de Qualidade", 
            corClass: "b-cyan",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - QA Gestão (Core): Custos (14), Qualidade Fim-a-Fim (15), Ferramentas (17), Gestão Qualidade (19), OKR (24)
            // - Metodologia: KPI (81), MASP/PDCA (85)
            // - CMMI Global (44-47): Vital para garantir a aderência aos processos (PPQA)
            // - Gestão: Pessoas (53), Processos (54), Projetos (55)
            // - Compliance: Leis (58), LGPD (59)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 5, 
                14, 15, 17, 19, 24, 
                32, 
                44, 45, 46, 47, 
                53, 54, 55, 
                58, 59, 
                81, 85, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Microbooks, Testes (16 - Técnico), Requisitos (23 - Interface), Azure DevOps (25), Minitab (31), Power BI (34), ISO (40), Estatística (78), Lean (79)
            recomendados: [6, 16, 23, 25, 31, 34, 40, 78, 79]
        },
        { 
            id: 13, 
            nome: "Gestor(a) de Treinamentos", 
            corClass: "b-cyan",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3 - Ele é o dono do processo) + Leadership (5) + Office (32)
            // - Técnico: Analista de Treinamentos (27 - Base técnica da função)
            // - CMMI Global (44-47): Vital para a área de OT (Organizational Training)
            // - Gestão: Pessoas (53), Processos (54), Projetos (55)
            // - Compliance: Leis (58), LGPD (59 - Dados de colaboradores)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 5, 
                27, 
                32, 
                44, 45, 46, 47, 
                53, 54, 55, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Microbooks, Power BI (Indicadores de Treinamento), Marketing (Endomarketing dos cursos), MBA, DISC
            recomendados: [6, 34, 49, 63, 76]
        },
        { 
            id: 14, 
            nome: "Gestor(a) de Projetos", 
            corClass: "b-cyan",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - Ferramentas: Azure DevOps (25 - Gestão do Backlog/Tasks)
            // - Metodologia Core: Framework Scrum (8), Gestão de Projetos (55), Gestão Ágil (73), Fundamentos (75)
            // - Controle/Qualidade: KPI (81), CMMI Global (44-47 - Vital para PP/PMC)
            // - Gestão Geral: Pessoas (53), Processos (54)
            // - Compliance: Leis (58), LGPD (59)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de PMO)
            obrigatorios: [
                1, 2, 3, 5, 
                8, 25, 32, 
                44, 45, 46, 47, 
                53, 54, 55, 
                58, 59, 
                73, 75, 81, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Microbooks, Mapeamento (13), OKR (24), Power BI (34 - Relatórios), AgileShift (41), MBA, DISC (76)
            recomendados: [6, 13, 24, 34, 41, 63, 76]
        },
        { 
            id: 15, 
            nome: "Supervisor(a) Comercial", 
            corClass: "b-orange",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - Core Vendas: Mídias Sociais (49 - Social Selling), Curso de Vendas (50)
            // - Diferencial Competitivo: CMMI Global (44-47 - Para vender qualidade)
            // - Gestão Tática: Financeira (52 - Metas), Pessoas (53), Processos (54 - Pipeline), Projetos (55 - Campanhas)
            // - Compliance: Leis (58), LGPD (59 - Dados de leads)
            // - IA: Trilha Completa (111-117 - Produtividade comercial)
            obrigatorios: [
                1, 2, 3, 5, 
                32, 
                44, 45, 46, 47, 
                49, 50, 
                52, 53, 54, 55, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Microbooks, Power BI (Acompanhamento de Metas), MBA, DISC (Perfil de clientes/time)
            recomendados: [6, 34, 35, 63, 76]
        },
        { 
            id: 16, 
            nome: "Executivo(a) de Vendas", 
            corClass: "b-orange",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Vendas Core: Mídias Sociais (49), Vendas (50)
            // - Argumento de Venda (Produto): Framework Scrum (8), CMMI Global (44-47 - "Vendendo a Qualidade")
            // - Rotina: Gestão de Processos (54 - Pipeline)
            // - Compliance: Leis (58), LGPD (59 - Dados de Clientes)
            // - IA: Trilha Completa (111-117 - Produtividade)
            obrigatorios: [
                1, 2, 3, 
                8, 
                32, 
                44, 45, 46, 47, 
                49, 50, 
                54, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Leadership (5), Power BI (34 - Metas), Gestão de Projetos (55), DISC (76 - Perfil do Cliente), Gov TI (37)
            recomendados: [5, 6, 34, 37, 55, 76]
        },
        { 
            id: 17, 
            nome: "Pré-Venda", 
            corClass: "b-orange",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Prospecção: Mídias Sociais (49 - Social Selling), Vendas (50 - Técnicas de Abordagem)
            // - Produto/Qualificação: Framework Scrum (8 - Entender a demanda), CMMI Global (44-47 - Pitch de Qualidade)
            // - Rotina: Gestão de Processos (54 - Cadência/CRM)
            // - Compliance: Leis (58), LGPD (59 - Crítico para quem manipula listas)
            // - IA: Trilha Completa (111-117 - Geração de Scripts/Pesquisa)
            obrigatorios: [
                1, 2, 3, 
                8, 
                32, 
                44, 45, 46, 47, 
                49, 50, 
                54, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: Leadership (5 - Autoliderança), Power BI (34 - Metas), Gov TI (37 - Contexto), DISC (76 - Rapidez na leitura de perfil)
            recomendados: [5, 6, 34, 37, 76]
        },
        { 
            id: 18, 
            nome: "Líder de Time de Desenv", 
            corClass: "b-gold",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - Gestão de Time: Pessoas (53), Processos (54), Projetos (55), Gestão Ágil (73), KPI (81)
            // - Processo/Ferramentas: Framework Scrum (8), Azure DevOps (25), CMMI Global (44-47)
            // - Compliance: Leis (58), LGPD (59 - Segurança no código)
            // - Tech Core (Mentoria/Review): Git (92), Lógica (96), POO (101), SQL (106)
            // - Stack Principal (Exemplo Fullstack): JS (95), Node (99), React (103), TypeScript (107)
            // - IA: Trilha Completa (111-117 - Liderar a inovação no time)
            obrigatorios: [
                1, 2, 3, 5, 
                8, 25, 32, 
                44, 45, 46, 47, 
                53, 54, 55, 
                58, 59, 
                73, 81, 
                92, 95, 96, 99, 101, 103, 106, 107, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Infra/DevOps: AWS (87), Cloud (88), Docker (90) - Para apoiar deploy
            // - Backend Extra: Python (102)
            // - Soft Skills/Gestão: Microbooks (6), Power BI (34), DISC (76)
            recomendados: [6, 34, 76, 87, 88, 90, 102]
        },
        { 
            id: 19, 
            nome: "Líder de Time de Suporte", 
            corClass: "b-gold",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - Core Service Desk: Outsourcing Service Desk (7), 16 - GOVERNANÇA: Service Desk (66)
            // - Metodologia ITSM: ITIL 4 Foundation (38), ITIL Overview (67)
            // - Base Técnica: Infraestrutura/Redes (48)
            // - Processo/Controle: KPI (81), CMMI Global (44-47)
            // - Gestão: Pessoas (53), Processos (54 - Gestão de Incidentes/Requisições)
            // - Compliance: Leis (58), LGPD (59 - Dados sensíveis de chamados)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de Suporte)
            obrigatorios: [
                1, 2, 3, 5, 
                7, 
                32, 
                38, 
                44, 45, 46, 47, 
                48, 
                53, 54, 
                58, 59, 
                66, 67, 81, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Ferramentas: Azure DevOps (25 - Escalonamento de Bugs), Power BI (34 - Relatórios de SLA)
            // - Técnico Avançado: SQL (106 - Queries de banco), Cloud (88)
            // - Soft Skills: DISC (76), Microbooks (6)
            recomendados: [6, 25, 34, 76, 88, 106]
        },
        { 
            id: 20, 
            nome: "Líder do EPG", 
            corClass: "b-blue-dark",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Leadership (5) + Office (32)
            // - CMMI Completo (Expert): Global (44-47) + TEC (42-43 - Áreas de Prática e Ciclo de Vida)
            // - Engenharia de Processos: Mapeamento (13), Bizagi (77), KPI (81), MASP/PDCA (85)
            // - Gestão: Processos (54), Projetos (55 - Projetos de Melhoria)
            // - Compliance: Leis (58), LGPD (59)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 5, 
                13, 
                32, 
                42, 43, 44, 45, 46, 47, 
                54, 55, 
                58, 59, 
                77, 81, 85, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Alta Maturidade (Estatística): Minitab (31), Estatística Básica (78)
            // - Qualidade/Normas: ISO (40), Lean/Kaizen (79, 80)
            // - Dados: Power BI (34 - Baselines de Processo)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 31, 34, 40, 78, 79, 80]
        },
        { 
            id: 21, 
            nome: "Membro do EPG", 
            corClass: "b-blue-dark",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - CMMI Completo (Técnico): Global (44-47) + TEC (42-43 - Vital para definir o ciclo de vida)
            // - Ferramentas de Processo: Mapeamento (13), Bizagi (77), KPI (81), MASP/PDCA (85)
            // - Gestão: Processos (54), Projetos (55)
            // - Compliance: Leis (58), LGPD (59)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 
                13, 
                32, 
                42, 43, 44, 45, 46, 47, 
                54, 55, 
                58, 59, 
                77, 81, 85, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Alta Maturidade: Minitab (31), Estatística Básica (78)
            // - Conhecimento de Domínio: Framework Scrum (8 - Para definir processos ágeis)
            // - Qualidade: ISO (40), Lean/Kaizen (79, 80)
            // - Dados: Power BI (34)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 8, 31, 34, 40, 78, 79, 80]
        },
        { 
            id: 22, 
            nome: "Programador(a)", 
            corClass: "b-blue-light",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3)
            // - Metodologia/Ferramenta: Framework Scrum (8), Azure DevOps (25)
            // - CMMI Técnico: Areas de Prática (42), Ciclo de Vida (43 - Vital para saber onde salvar evidências)
            // - Fundamentos: Git (92), Lógica (96), POO (101), SQL (106 - Banco de dados)
            // - Stack Principal (Web Fullstack): HTML (93), CSS (94), JS (95), Node (99), React (103)
            // - Compliance: LGPD (59 - Security by design)
            // - IA: Trilha Completa (111-117 - Coding Assistants)
            obrigatorios: [
                1, 2, 3, 
                8, 25, 
                42, 43, 
                59, 
                92, 93, 94, 95, 96, 99, 101, 103, 106, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Expansão de Stack: TypeScript (107 - Altamente Recomendado), Python (102)
            // - Infra: AWS (87), Docker (90)
            // - Qualidade: Fundamentos em Testes (16 - Teste Unitário)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 16, 32, 87, 90, 102, 107]
        },
        { 
            id: 23, 
            nome: "Analista de Processos", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Ferramentas Core: Mapeamento (13), Bizagi (77), KPI (81), MASP/PDCA (85)
            // - Contexto Organizacional: Gestão de Processos (54), CMMI Global (44-47)
            // - Compliance: Leis (58), LGPD (59 - Privacy by Design nos processos)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 
                13, 
                32, 
                44, 45, 46, 47, 
                54, 
                58, 59, 
                77, 81, 85, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Dados: Power BI (34 - Dashboards de indicadores)
            // - Projetos: Gestão de Projetos (55 - Implementação de melhorias)
            // - Metodologia Ágil: Scrum (8 - Mapeamento de processos ágeis)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 8, 34, 55]
        },
        { 
            id: 24, 
            nome: "Analista Automação", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3)
            // - Base de Processo: Mapeamento (13), Gestão de Processos (54)
            // - Ferramentas de Automação (Core): Make (108), n8n (110)
            // - Técnico (Integração): API (86), Lógica de Programação (96)
            // - Governança: CMMI Global (44-47 - Para manter a padronização), LGPD (59 - Segurança de dados em trânsito)
            // - IA: Trilha Completa (111-117 - Criação de Agentes/Automação Inteligente)
            obrigatorios: [
                1, 2, 3, 
                13, 
                44, 45, 46, 47, 
                54, 
                59, 
                86, 96, 
                108, 110, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Ferramentas Adicionais: Manychat (109), Bizagi (77 - Para ler BPMN complexos)
            // - Coding para Scripts: Python (102), JavaScript (95), SQL (106)
            // - Gestão: Azure DevOps (25 - Gestão das tarefas de automação), Power BI (34 - Monitoramento)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 25, 34, 77, 95, 102, 106, 109]
        },
        { 
            id: 25, 
            nome: "Analista de Qualidade", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3)
            // - Core QA (Conceitos): Custos (14), Qualidade Fim-a-Fim (15), Fundamentos (16), Ferramentas (17), Carreira (18), Gestão Q. (19)
            // 19 - AUTOMAÇÃO Core: Robot Framework Fundamentos (20)
            // - Processo/Ferramenta: Framework Scrum (8), Azure DevOps (25)
            // - CMMI Técnico: Areas de Prática (42), Ciclo de Vida (43)
            // - Compliance: LGPD (59 - Dados de teste anonimizados)
            // - IA: Trilha Completa (111-117 - Geração de casos de teste)
            obrigatorios: [
                1, 2, 3, 
                8, 
                14, 15, 16, 17, 18, 19, 
                20, 
                25, 
                42, 43, 
                59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // 19 - AUTOMAÇÃO Avançada: Robot Avançado (21), Robot API (22)
            // - Técnico: API (86), Lógica (96), SQL (106 - Validação de banco)
            // - Interface com Negócio: Engenharia de Requisitos (23 - BDD/Critérios de Aceite)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 21, 22, 23, 86, 96, 106]
        },
        { 
            id: 26, 
            nome: "Analista de Requisitos", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Core Requisitos: Mapeamento de Processos (13), Engenharia de Requisitos (23)
            // - Metodologia/Ferramenta: Framework Scrum (8), Azure DevOps (25 - Gestão de Backlog)
            // - CMMI Técnico: Areas de Prática (42), Ciclo de Vida (43 - Vital para RD/REQM)
            // - Compliance: LGPD (59 - Especificação de dados seguros)
            // - IA: Trilha Completa (111-117 - Geração de documentação/Histórias)
            obrigatorios: [
                1, 2, 3, 
                8, 
                13, 
                23, 
                25, 32, 
                42, 43, 
                59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Prototipação/Design: Design de Interfaces (11), Figma (29)
            // - Modelagem: Bizagi (27/77)
            // - Técnico (Para conversar com Devs): API (86), Lógica (96), SQL (106 - Modelo de Dados)
            // - Qualidade: Fundamentos em Testes (16 - Para BDD/Critérios de Aceite)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 11, 16, 27, 29, 86, 96, 106]
        },
        { 
            id: 27, 
            nome: "Analista de Treinamentos", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3 - Ele ministra isso, tem que dominar) + Office (32 - Excel/PPT)
            // - Processo Organizacional: CMMI Global (44-47 - Área de Processo OT), Gestão de Processos (54 - Logística de Treinamento)
            // - Base de Desenvolvimento: Gestão de Pessoas (53 - Desenvolvimento Humano)
            // - Compliance: LGPD (59 - Dados dos colaboradores)
            // - IA: Trilha Completa (111-117 - Criação de conteúdo/Roteiros)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                53, 54, 
                59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Ferramentas de Criação: Figma (29), Photoshop (33)
            // - Comunicação/Engajamento: Mídias Sociais (49 - Endomarketing), Marketing (33 - Analista, mas o curso 49 cobre a skill)
            // - Organização: Trello (36) or Clickup (28)
            // - Soft Skills: DISC (76 - Perfis de aprendizado), Microbooks (6)
            recomendados: [6, 29, 33, 36, 49, 76]
        },
        { 
            id: 28, 
            nome: "Analista de Infraestrutura", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Core Infra: Hardware/Redes (48), Cloud (88 - Visão Geral), Service Desk (7 - Atendimento L2/L3)
            // - Processo de TI: ITIL 4 Foundation (38 - Linguagem padrão de TI)
            // - Cultura: CMMI Global (44-47 - Para entender o ambiente onde a infra roda)
            // - Compliance: Leis (58), LGPD (59 - Segurança da Informação/Acesso Privilegiado)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de Ops)
            obrigatorios: [
                1, 2, 3, 
                7, 
                32, 
                38, 
                44, 45, 46, 47, 
                48, 
                58, 59, 
                88, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Tech Específico: AWS (87 - Nuvem Específica), Docker (90 - Containers), GIT (92 - Infra as Code)
            // - Gestão: Azure DevOps (25 - Pipelines/Tickets), ISO 27001 (40 - Segurança)
            // - Dados: SQL (106 - Manutenção de Bancos)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 25, 40, 87, 90, 92, 106]
        },
        { 
            id: 29, 
            nome: "Analista de Projeto", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32 - Excel Avançado é vida)
            // - Ferramenta de Gestão: Azure DevOps (25 - Boards/Backlog)
            // - Metodologia: Framework Scrum (8), Fundamentos de Projetos (75), Gestão de Projetos (55 - Contexto)
            // - Controle: KPI (81 - Monitoramento), CMMI Global (44-47 - Conformidade de processo)
            // - Compliance: Leis (58), LGPD (59)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de PMO)
            obrigatorios: [
                1, 2, 3, 
                8, 25, 32, 
                44, 45, 46, 47, 
                55, 
                58, 59, 
                75, 81, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Dados: Power BI (34 - Dashboards de Projeto)
            // - Processos: Mapeamento (13), Gestão de Processos (54)
            // - Agilidade: AgileShift (41)
            // - Soft Skills: Microbooks (6), DISC (76)
            recomendados: [6, 13, 34, 41, 54, 76]
        },
        { 
            id: 30, 
            nome: "Analista de Banco de Dados", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3)
            // - Core DB: Banco de Dados (26 - Conceitos), SQL (106 - A linguagem), Lógica (96)
            // - Infra/Contexto: Cloud (88), ITIL 4 Foundation (38 - Gestão de Mudança/Incidente)
            // - Ferramentas: Azure DevOps (25 - Versionamento de Scripts)
            // - Compliance: LGPD (59 - Crítico: Proteção de Dados)
            // - Cultura: CMMI Global (44-47)
            // - IA: Trilha Completa (111-117 - Tuning e Automação)
            obrigatorios: [
                1, 2, 3, 
                25, 26, 
                38, 
                44, 45, 46, 47, 
                59, 
                88, 96, 106, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Especialização: AWS (87), Python (102 - Scripts de automação)
            // - Carreira de Dados: Engenharia de Dados Fundamentos (65)
            // - Segurança: ISO 27001 (40)
            // - Monitoramento: Power BI (34)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 34, 40, 65, 87, 102]
        },
        { 
            id: 31, 
            nome: "Analista de Sistemas / Dev.", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3)
            // - Metodologia: Framework Scrum (8), Azure DevOps (25)
            // - Fundamentos de Engenharia: Lógica (96), POO (101), SQL (106), Git (92), Banco de Dados (26 - Modelagem)
            // - Stack Fullstack (Padrão): HTML (93), CSS (94), JS (95), Node (99), React (103)
            // - Processo Técnico: CMMI Técnico (42-43 - Foco em Solução Técnica e Integração)
            // - Compliance: LGPD (59)
            // - IA: Trilha Completa (111-117)
            obrigatorios: [
                1, 2, 3, 
                8, 25, 26, 
                42, 43, 
                59, 
                92, 93, 94, 95, 96, 99, 101, 103, 106, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Backend/API: API (86), TypeScript (107 - Diferencial forte), Python (102)
            // - Infra/Deploy: Docker (90), Cloud (88), AWS (87)
            // - Qualidade: Fundamentos em Testes (16)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 16, 86, 87, 88, 90, 102, 107]
        },
        { 
            id: 32, 
            nome: "Analista de Suporte", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3)
            // - Metodologia de Atendimento: Outsourcing Service Desk (7), ITIL 4 Foundation (38 - Padrão de Mercado)
            // - Técnico Base: Hardware/Redes (48), Pacote Office (32 - Suporte ao usuário final)
            // - Contexto Organizacional: CMMI Global (44-47 - Processos de suporte padronizados)
            // - Compliance: Leis (58), LGPD (59 - Acesso remoto e dados de terceiros)
            // - IA: Trilha Completa (111-117 - Uso de KB inteligente/Chatbots)
            obrigatorios: [
                1, 2, 3, 
                7, 
                32, 
                38, 
                44, 45, 46, 47, 
                48, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Integração com Dev: Azure DevOps (25 - Escalonamento de bugs)
            // - Técnico Avançado: SQL (106 - Queries de verificação), Cloud (88)
            // - Dados: Power BI (34 - Monitoramento de seus tickets)
            // - Comportamental: DISC (76 - Lidar com usuários difíceis), Microbooks (6)
            recomendados: [6, 25, 34, 76, 88, 106]
        },
        { 
            id: 33, 
            nome: "Analista de Marketing", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Ferramentas de Design: Figma (29), Photoshop (33)
            // - Core Marketing: Mídias Sociais (49)
            // - Conhecimento do Produto (Institucional): CMMI Global (44-47 - Para criar conteúdo sobre a autoridade da marca)
            // - Gestão: Projetos (55 - Gestão de Campanhas/Prazos)
            // - Compliance: Leis (58), LGPD (59 - Tratamento de Leads/Mailing)
            // - IA: Trilha Completa (111-117 - Geração de Copy/Imagens)
            obrigatorios: [
                1, 2, 3, 
                29, 32, 33, 
                44, 45, 46, 47, 
                49, 
                55, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Vendas: Curso de Vendas (50 - Alinhamento Smarketing)
            // - Dados: Power BI (34 - Analytics de campanhas)
            // 19 -19 -19 -19 - AUTOMAÇÃO: Manychat (109 - Chatbots de MKT)
            // - Web Básico: HTML (93), CSS (94) - Ajustes em Landing Pages
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 34, 50, 93, 94, 109]
        },
        { 
            id: 34, 
            nome: "Analista de RH", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Core Generalista: Gestão de Pessoas (53 - Foco em Clima/Retenção), Gestão de Processos (54 - Fluxos de RH)
            // - Jurídico/Compliance: Leis Trabalhistas (58), LGPD (59 - Dados Pessoais)
            // - Cultura/Estratégia: CMMI Global (44-47 - Alinhamento com a maturidade da empresa)
            // - IA: Trilha Completa (111-117 - People Analytics/Comunicação)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                53, 54, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Sub-sistemas (Visão do todo): Recrutamento (57), Cargos e Salários (56), DP (51)
            // - Análise Comportamental: Metodologia DISC (76)
            // - Dados: Power BI (34 - Indicadores de Turnover/Absenteísmo)
            // - Liderança: Leadership (5 - Para apoiar líderes técnicos)
            recomendados: [5, 6, 34, 51, 56, 57, 76]
        },
        { 
            id: 35, 
            nome: "Analista Recrutamento", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Técnica de Seleção: Recrutamento e Seleção (57), Metodologia DISC (76 - Análise Comportamental)
            // - Hunting/Atração: Mídias Sociais (49 - LinkedIn Recruiter/Social), Vendas (50 - Vender a vaga/Empresa)
            // - Organização: Gestão de Processos (54 - Gestão do Pipeline)
            // - Contexto: CMMI Global (44-47 - Para alinhar fit cultural)
            // - Compliance: Leis Trabalhistas (58), LGPD (59 - Dados de candidatos)
            // - IA: Trilha Completa (111-117 - Sourcing e Triagem Inteligente)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                49, 50, 
                54, 
                57, 58, 59, 
                76, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Entendimento Técnico (Para entrevistar TI): Framework Scrum (8 - O básico para não ficar perdido), ITIL (38)
            // - Negociação: Administração de Cargos e Salários (56 - Para ofertas)
            // - Dados: Power BI (34 - KPIs de R&S)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 8, 34, 38, 56]
        },
        { 
            id: 36, 
            nome: "Analista de Benefícios", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32 - Excel para conferência de faturas)
            // - Core DP/Jurídico: Departamento Pessoal (51), Leis Trabalhistas (58), LGPD (59 - Dados sensíveis/saúde)
            // - Qualidade e Controle: Gestão de Processos (54), KPI (81 - Indicadores de custo/uso)
            // - Contexto: CMMI Global (44-47)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de conferências e FAQ)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                51, 54, 
                58, 59, 
                81, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Administrativo: Cargos e Salários (56), Gestão de Pessoas (53)
            // - Melhoria: MASP & PDCA (85 - Para tratar erros de faturamento)
            // - Dados: Power BI (34 - Dashboards de sinistralidade)
            // - Soft Skills: Microbooks (6), DISC (76)
            recomendados: [6, 34, 53, 56, 76, 85]
        },
        { 
            id: 37, 
            nome: "Analista de Cargos e Salários", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32 - Excel para modelagem salarial)
            // - Especialização: Adm de Cargos e Salários (56 - Core), Departamento Pessoal (51)
            // - Jurídico/Compliance: Leis Trabalhistas (58), LGPD (59 - Sigilo absoluto de remuneração)
            // - Metodologia: Gestão de Processos (54), KPI (81 - Indicadores de folha/mercado)
            // - Contexto: CMMI Global (44-47 - Estruturação de competências por nível)
            // - IA: Trilha Completa (111-117 - Análise de dados e benchmarking)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                51, 54, 56, 58, 59, 
                81, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Gestão de RH: Gestão de Pessoas (53), Recrutamento e Seleção (57)
            // - Analítico: Power BI (34 - Dashboards de evolução salarial)
            // - Soft Skills: Microbooks (6), DISC (76 - Para entender perfis x cargos)
            // - Melhoria: MASP & PDCA (85)
            recomendados: [6, 34, 53, 57, 76, 85]
        },
        { 
            id: 38, 
            nome: "Auxiliar Financeiro", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32 - Fundamental para planilhas de controle)
            // - Core: Gestão Financeira (52)
            // - Processos: Gestão de Processos (54), CMMI Global (44-47 - Conformidade e Auditoria)
            // - Compliance: Leis (58), LGPD (59 - Dados bancários e fiscais)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de rotinas financeiras)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                52, 54, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Melhoria: MASP & PDCA (85 - Para reduzir erros de processo), KPI (81)
            // - Dados: Power BI (34 - Para visualização de fluxo de caixa)
            // - Soft Skills: Microbooks (6)
            recomendados: [6, 34, 81, 85]
        },
        { 
            id: 39, 
            nome: "Assistente DP", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Core DP: Departamento Pessoal (51), Leis Trabalhistas (58)
            // - Compliance: LGPD (59 - Tratamento de documentos pessoais)
            // - Organização: Gestão de Processos (54 - Ciclo Mensal de DP)
            // - Contexto: CMMI Global (44-47)
            // - IA: Trilha Completa (111-117 19 - AUTOMAÇÃO de conferência e FAQs)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                51, 54, 58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Especialização: Cargos e Salários (56), Benefícios (36 - curso implícito no 51)
            // - Qualidade: KPI (81 - Indicadores de folha), MASP & PDCA (85)
            // - Comportamental: DISC (76), Microbooks (6)
            recomendados: [6, 36, 56, 76, 81, 85]
        },
        { 
            id: 40, 
            nome: "Assistente Administrativo", 
            corClass: "b-yellow",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32 - Uso diário para controles)
            // - Processos: Gestão de Processos (54 - Organização de rotinas), CMMI Global (44-47 - Padrão Edesoft)
            // - Compliance: Leis (58), LGPD (59 - Manuseio de documentos de diversos setores)
            // - IA: Trilha Completa (111-117 - Produtividade e automação de documentos)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                54, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Gestão: Financeira (52 - Para apoiar contas a pagar), Projetos (55 - Apoio em tarefas de PMO)
            // - Melhoria: Mapeamento de Processos (13), KPI (81), MASP & PDCA (85)
            // - Soft Skills: Microbooks (6), DISC (76)
            recomendados: [6, 13, 52, 55, 76, 81, 85]
        },
        { 
            id: 41, 
            nome: "Auxiliar de Limpeza", 
            corClass: "b-grey",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3 - Integração e Cultura)
            // - Processos: Gestão de Processos (54 - Seguir roteiros de limpeza), CMMI Global (44-47 - Contexto da empresa)
            // - Compliance: Leis (58), LGPD (59 - Ética e sigilo ao circular em áreas restritas/com dados)
            // - IA: Trilha Completa (111-117 - Inclusão digital e uso de assistentes para suporte à rotina)
            obrigatorios: [
                1, 2, 3, 
                44, 45, 46, 47, 
                54, 
                58, 59, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Desenvolvimento: Microbooks (6 - Crescimento pessoal)
            // - Organização: Trello (36 - Para check-lists de tarefas se usar celular)
            // - Comportamental: DISC (76 - Relacionamento interpessoal)
            recomendados: [6, 36, 76]
        },
        { 
            id: 42, 
            nome: "Psicólogo(a) Organizacional", 
            corClass: "b-purple",
            // Obrigatórios: 
            // - Básicos: Onboarding (1-3) + Office (32)
            // - Core Humano: Gestão de Pessoas (53), Recrutamento e Seleção (57), Metodologia DISC (76 - Diagnóstico de Perfil)
            // - Jurídico/Ética: Leis Trabalhistas (58), LGPD (59 - Crítico: Sigilo e proteção de dados sensíveis)
            // - Contexto: CMMI Global (44-47 - Alinhamento de comportamento e maturidade)
            // - IA: Trilha Completa (111-117 - Análise de sentimentos e People Analytics)
            obrigatorios: [
                1, 2, 3, 
                32, 
                44, 45, 46, 47, 
                53, 57, 58, 59, 
                76, 
                111, 112, 113, 114, 115, 116, 117
            ],
            // Recomendados: 
            // - Liderança: Leadership (5 - Para coaching de gestores)
            // - Estratégia: OKR (24 - Alinhamento de metas e propósito), Gestão de Processos (54)
            // - Soft Skills: Microbooks (6)
            // - Dados: Power BI (34 - Indicadores de Bem-estar/Saúde Mental)
            recomendados: [5, 6, 24, 34, 54]
        }
    ]

};





























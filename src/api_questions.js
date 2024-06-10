
const constants = require('../constants/constants')

const questoes = [
    {
        themes: [
            '* 1 - *Educação*\n',
            '* 2 - *Infraestrutura*\n',
            '* 3 - *Agricultura*\n',
            '* 4 - *Cultura*\n',
            '* 5 - *Meio Ambiente*\n',
            '* 6 - *Esporte e Lazer*\n',
            '* 7 - *Assistência e Desenvolvimento Social*\n',
            '* 8 - *Pesca*\n',
            '* 9 - *Desenvolvimento Econômico*\n',
            '* 10 - *Turismo*\n',
            '* 11 - *Saúde*\n',
            '* 12 - *Emprego e Renda*\n'
        ],
        subthemes: [
            {
                Educação: [
                    '* 1.1 - *Infraestrutura Escolar*\n',
                    '* 1.2 - *Qualificação dos Profissionais da Educação*\n',
                    '* 1.3 - *Inclusão e Acessibilidade*\n',
                    '* 1.4 - *Inovação Pedagógica*\n',
                    '* 1.5 - *Engajamento da Comunidade*\n',
                ],
                Infraestrutura: [
                    '* 2.1 - *Reforma e Manutenção de Ruas e Estradas*\n',
                    '* 2.2 - *Abastecimento de Água e Saneamento Básico*\n',
                    '* 2.3 - *Energia Elétrica e Iluminação Pública*\n',
                    '* 2.4 - *Transporte Público e Mobilidade Urbana*\n',
                    '* 2.5 - *Equipamentos Comunitários*\n',
                ],
                Agricultura: [
                    '* 3.1 - *Tecnologia Agrícola*\n',
                    '* 3.2 - *Diversificação de Culturas*\n',
                    '* 3.3 - *Infraestrutura Rural*\n',
                    '* 3.4 - *Acesso a Crédito e Assistência Técnica*\n',
                    '* 3.5 - *Sustentabilidade Ambiental*\n',
                ],
                Cultura: [
                    '* 4.1 - *Preservação do Patrimônio Cultural*\n',
                    '* 4.2 - *Fomento às Artes e Expressões Culturais*\n',
                    '* 4.3 - *Educação e Formação Cultural*\n',
                    '* 4.4 - *Valorização das Tradições Locais*\n',
                ],
                Meio_Ambiente: [
                    '* 5.1 - *Conservação da Biodiversidade*\n',
                    '* 5.2 - *Gestão de Recursos Hídricos*\n',
                    '* 5.3 - *Mitigação e Adaptação às Mudanças Climáticas*\n',
                    '* 5.4 - *Gestão de Resíduos Sólidos*\n',
                ],
                Esporte_e_Lazer: [
                    '* 6.1 - *Infraestrutura Esportiva*\n',
                    '* 6.2 - *Programas de Incentivo ao Esporte*\n',
                    '* 6.3 - *Promoção da Atividade Física e Saúde*\n',
                    '* 6.4 - *Lazer e Recreação*\n',
                    '* 6.5 - *Acessibilidade e Inclusão*\n',
                ],
                Assistência_e_Desenvolvimento_Social: [
                    '* 7.1 - *Assistência Social e Proteção à Vulnerabilidade*\n',
                    '* 7.2 - *Segurança Alimentar e Nutricional*\n',
                    '* 7.3 - *Inclusão Produtiva e Geração de Emprego e Renda*\n',
                    '* 7.4 - *Apoio à Família e Fortalecimento de Vínculos*\n',
                    '* 7.5 - *Políticas de Promoção da Igualdade e Diversidade*\n',
                ],
                Pesca: [
                    '* 8.1 - *Gestão Sustentável dos Recursos Pesqueiros*\n',
                    '* 8.2 - *Infraestrutura e Apoio aos Pescadores*\n',
                    '* 8.3 - *Desenvolvimento da Piscicultura*\n',
                ],
                Desenvolvimento_Econômico: [
                    '* 9.1 - *Diversificação da Economia Local*\n',
                    '* 9.2 - *Atração de Investimentos e Empreendedorismo*\n',
                    '* 9.3 - *Qualificação da Mão de Obra e Educação Profissional*\n',
                    '* 9.4 - *Inclusão Digital e Tecnológica*\n',
                ],
                Turismo: [
                    '* 10.1 - *Promoção e Marketing Turístico*\n',
                    '* 10.2 - *Infraestrutura Turística*\n',
                    '* 10.3 - *Roteiros e Circuitos Turísticos*\n',
                    '* 10.4 - *Turismo Sustentável e Responsável*\n',
                    '* 10.5 - *Segurança e Qualidade de Atendimento*\n',
                    '* 10.6 - *Desenvolvimento do Turismo*\n',
                ],
                Saúde: [
                    '* 11.1 - *Saúde Mental*\n',
                    '* 11.2 - *Assistência Farmacêutica*\n',
                    '* 11.3 - *Tratamento Fora do Domicílio (TFD)*\n',
                    '* 11.4 - *Melhoria do Atendimento*\n',
                    '* 11.5 - *Sistema de Marcações*\n',
                    '* 11.6 - *Atendimento Hospitalar*\n',
                    '* 11.7 - *Assistência de média complexidade*\n',
                ], 
                Emprego_e_Renda: [
                    '* 12.1 - *Criação de um centro de empreendedorismo local*\n',
                    '* 12.2 - *Parcerias com empresas para estágios e empregos\n'
                ]
            }
        ],
        subsubthemes: [
            /////////// ------ EDUCAÇÃO ------ ///////////
            {
                Infraestrutura_Escolar: [
                    '* 1.1.1 - *Construção e reforma de escolas*\n',
                    '* 1.1.2 - *Melhoria das instalações físicas*\n',
                    '* 1.1.3 - *Implementação de tecnologia e internet nas escolas*\n',
                ],
                Qualificação_dos_Profissionais_da_Educação: [
                    '* 1.2.1 - *Capacitação contínua de professores e gestores escolares*\n',
                    '* 1.2.2 - *Programas de formação pedagógica*\n',
                    '* 1.2.3 - *Incentivos para atrair e reter profissionais qualificados*\n',
                ],
                Inclusão_Acessibilidade: [
                    '* 1.3.1 - *Adaptação de espaços e materiais para alunos com deficiência*\n',
                    '* 1.3.2 - *Formação de professores para atender às necessidades especiais dos alunos*\n',
                    '* 1.3.3 - *Promoção de uma cultura inclusiva nas escolas*\n',
                ],
                Inovação_Pedagógica: [
                    '* 1.4.1 - *Implementação de metodologias de ensino mais dinâmicas e participativas*\n',
                    '* 1.4.2 - *Estímulo ao uso de recursos tecnológicos na sala de aula*\n',
                    '* 1.4.3 - *Fomento à criatividade e ao pensamento crítico dos alunos*\n'
                ],
                Engajamento_da_Comunidade: [
                    '* 1.5.1 - *Estabelecimento de parcerias com empresas locais e organizações da sociedade civil*\n',
                    '* 1.5.2 - *Envolvimento dos pais e responsáveis no acompanhamento da educação dos alunos*\n',
                    '* 1.5.3 - *Criação de espaços de diálogo e participação para a comunidade escolar*\n'
                ],

                /////////// ------ Infraestrutura ------ ///////////
                Reforma_e_Manutenção_de_Ruas_e_Estradas: [
                    '* 2.1.1 - *Melhoria da pavimentação*\n',
                    '* 2.1.2 - *Reparo de buracos e fissuras*\n',
                    '* 2.1.3 - *Sinalização adequada para garantir a segurança viária*\n',
                    '* 2.1.4 - *Ampliação, recuperação e manutenção de estradas vicinais*\n',
                ],
                Abastecimento_de_Água_e_Saneamento_Básico: [
                    '* 2.2.1 - *Ampliação da rede de abastecimento de água na sede e no interior*\n',
                    '* 2.2.2 - *Tratamento de esgoto e resíduos sólidos*\n',
                    '* 2.2.3 - *Programas de conscientização sobre uso sustentável dos recursos hídricos*\n',
                    '* 2.2.4 - *Fomento ao saneamento rural com reuso das águas*\n'
                ],
                Energia_Elétrica_e_Iluminação_Pública: [
                    '* 2.3.1 - *Expansão da rede elétrica para áreas remotas*\n',
                    '* 2.3.2 - *Substituição de lâmpadas convencionais por LED para maior eficiência energética*\n',
                    '* 2.3.3 - *Manutenção regular da iluminação pública para garantir a segurança dos moradores*\n'
                ],
                Transporte_Público_e_Mobilidade_Urbana: [
                    '* 2.4.1 - *Modernização da frota de veículos públicos*\n',
                    '* 2.4.2 - *Implantação e ampliação de ciclovias e faixas exclusivas para bicicletas*\n',
                    '* 2.4.3 - *Melhoria na acessibilidade para pessoas com mobilidade reduzida*\n',
                ],
                Equipamentos_Comunitários: [
                    '* 2.5.1 - *Construção e manutenção de praças, parques e áreas de lazer*\n',
                    '* 2.5.2 - *Instalação de equipamentos esportivos e recreativos*',
                    '* 2.5.3 - *Criação de espaços para atividades culturais e eventos comunitários*\n',
                ],
                /////////// ------ agricultura ------ ///////////
                Tecnologia_Agrícola: [
                    '* 3.1.1 - *Incentivo à adoção de técnicas agrícolas modernas e sustentáveis*\n',
                    '* 3.1.2 - *Introdução de sistemas de irrigação eficientes e manejo integrado de pragas*\n',
                    '* 3.1.3 - *Promoção de programas de capacitação e assistência técnica e extensão rural aos agricultores familiares*\n',
                ],

                Diversificação_de_Culturas: [
                    '* 3.2.1 - *Estímulo ao cultivo de variedades agrícolas adaptadas ao clima local*\n',
                    '* 3.2.2 - *Promoção de culturas alternativas para diversificar a produção e reduzir riscos*\n',
                    '* 3.2.3 - *Incentivo à agricultura familiar e produção orgânica*\n'
                ],

                Infraestrutura_Rural: [
                    '* 3.3.1 - *Melhoria das estradas rurais para facilitar o escoamento da produção*\n',
                    '* 3.3.2 - *Implantação de redes de eletrificação rural e acesso à internet*\n',
                    '* 3.3.3 - *incentivo a Construção de centros de comercialização e cooperativas agrícolas*\n'
                ],
                Acesso_a_Crédito_e_Assistência_Técnica: [
                    '* 3.4.1 - *Facilitação do acesso a linhas de crédito rural e programas de financiamento*\n',
                    '* 3.4.2 - *Apoio na elaboração de projetos e gestão financeira das propriedades*\n'
                ],
                Sustentabilidade_Ambiental: [
                    '* 3.5.1 - *Incentivo a práticas agrícolas sustentáveis, como o manejo conservacionista do solo*\n',
                    '* 3.5.2 - *Preservação de áreas de mata nativa e recuperação de áreas degradadas*\n',
                    '* 3.5.3 - *Implementação de programas de gestão de resíduos e conservação da biodiversidade*\n'
                ],
                /////////// ------ culcura ------ ///////////
                Preservação_do_Patrimônio_Cultural: [
                    '* 4.1.1 - *Restauração e conservação de circos arqueológicos*\n',
                    '* 4.1.2 - *Catalogação e valorização do patrimônio material e imaterial da região*\n',
                    '* 4.1.3 - *Promoção de visitas guiadas e roteiros culturais para divulgar a história local*\n',
                ],
                Fomento_às_Artes_e_Expressões_Culturais: [
                    '* 4.2.1 - *Apoio a artistas locais e grupos culturais*\n',
                    '* 4.2.2 - *Realização de festivais, exposições e eventos culturais diversos*\n',
                    '* 4.2.3 - *Incentivo à produção e circulação de obras de arte, música, teatro, dança, entre outros*\n'
                ],
                Educação_e_Formação_Cultural: [
                    '* 4.3.1 - *Implementação de programas de educação cultural nas escolas*\n',
                    '* 4.3.2 - *Oferta de cursos, oficinas e workshops sobre cultura e arte*\n',
                    '* 4.3.3 - *Criação de espaços culturais acessíveis para a comunidade*\n',
                ],
                Valorização_das_Tradições_Locais: [
                    '* 4.4.1 - *Promoção de festas e eventos que celebram as tradições culturais da região*\n',
                    '* 4.4.2 - *Incentivo à produção de artesanato e gastronomia típicos, valorizando o saber-fazer local\n',
                    '* 4.4.3 - *Registro e documentação de manifestações culturais tradicionais, como festas populares, danças e rituais*\n'
                ],

                /////////// ------ meio_ambiente ------ ///////////
                Conservação_da_Biodiversidade: [
                    '* 5.1.1 - *Proteção e preservação de áreas naturais, como caatingas, matas ciliares e ecossistemas*\n',
                    '* 5.1.2 - *Preservação de unidades de conservação e áreas de proteção ambiental*\n',
                    '* 5.1.3 - *Estímulo à pesquisa científica e monitoramento da fauna e flora locais*\n'
                ],
                Gestão_de_Recursos_Hídricos: [
                    '* 5.2.1 - *Gestão de Recursos Hídricos*\n',
                    '* 5.2.2 - *Incentivo à adoção de práticas de uso racional da água na agricultura, indústria e uso doméstico*\n',
                ],
                Mitigação_e_Adaptação_às_Mudanças_Climáticas: [
                    '* 5.3.1 - *Redução das emissões de gases de efeito estufa através de políticas de eficiênciaenergética e uso de energias renováveis*\n',
                    '* 5.3.2 - *Sensibilização e educação da comunidade sobre a importância da preservação ambiental e ações individuais para mitigar o aquecimento global*\n'
                ],
                Gestão_de_Resíduos_Sólidos: [
                    '* 5.4.1 - *Implantação de sistemas de coleta seletiva e reciclagem de resíduos sólidos*\n',
                    '* 5.4.2 - *Estímulo à redução do uso de plásticos e materiais descartáveis*\n',
                    '* 5.4.3 - *Promoção de campanhas de conscientização sobre a correta disposição de resíduos e práticas de compostagem*\n',
                ],

                /////////// ------ esporte_lazer ------ ///////////
                Infraestrutura_Esportiva: [
                    '* 6.1.1 - *Manutenção e ampliação de ginásios e centros esportivos municipais*\n',
                    '* 6.1.2 - *Acesso facilitado a equipamentos esportivos para todas as comunidades*\n',
                    '* 6.1.3 - *Construção e adequação de espaços públicos para a prática esportiva, como quadras poliesportivas, campos de futebol e pistas de atletismo*\n',
                ],

                Programas_de_Incentivo_ao_Esporte: [
                    '* 6.2.1 - *Criação de programas de iniciação esportiva para crianças e adolescentes em escolas e comunidades*\n',
                    '* 6.2.2 - *Apoio a atletas locais e equipes esportivas, através de bolsas de estudo, treinamento e participação em competições*\n',
                    '* 6.2.3 - *Realização de eventos esportivos e torneios municipais para promover a prática esportiva e revelar talentos locais*\n',
                ],

                Promoção_da_Atividade_Física_e_Saúde: [
                    '* 6.3.1 - *Estímulo à prática regular de atividades físicas para todas as faixas etárias, com programas de ginástica, caminhadas e ciclismo*\n',
                    '* 6.3.2 - *Parcerias com instituições de saúde para oferecer atividades físicas orientadas a grupos específicos, como idosos e pessoas com doenças crônicas*\n',
                    '* 6.3.3 - *Campanhas de conscientização sobre os benefícios da atividade física para a saúde e qualidade de vida*\n',
                ],

                Lazer_e_Recreação: [
                    '* 6.4.1 - *Criação de espaços de convivência e lazer, como praças, parques e áreas verdes*\n',
                    '* 6.4.2 - *Instalação de equipamentos recreativos e de entretenimento para crianças, jovens, adultos e idosos*\n',
                    '* 6.4.3 - *Realização de eventos culturais, festivais e feiras de artesanato para promover o lazer e integração comunitária*\n',
                ],
                Acessibilidade_e_Inclusão: [
                    '* 6.5.1 - *Garantia de acessibilidade em espaços e eventos esportivos para pessoas com deficiência*\n',
                    '* 6.5.2 - *Adoção de políticas inclusivas que incentivem a participação de todos os segmentos da sociedade, independentemente de idade, gênero ou condição socioeconômica*\n',
                    '* 6.5.3 - *Promoção de atividades esportivas adaptadas e paralímpicas, visando a inclusão e valorização da diversidade*\n'
                ],

                /////////// ------ assistencia_desenv_social ------ ///////////
                Assistência_Social_e_Proteção_à_Vulnerabilidade: [
                    '* 7.1.1 - *Implementação de políticas de combate à pobreza e à desigualdade social*\n',
                    '* 7.1.2 - *Ampliação e fortalecimento dos programas de assistência social, como o Bolsa Família e o Benefício de Prestação Continuada (BPC)*\n',
                    '* 7.1.3 - *Criação de redes de proteção e apoio a grupos vulneráveis, como crianças, idosos, pessoas com deficiência e mulheres em situação de violência*\n',
                ],
                Segurança_Alimentar_e_Nutricional: [
                    '* 7.2.1 - *Incentivo à produção local de alimentos por meio de agricultura familiar e práticas agrícolas sustentáveis*\n',
                    '* 7.2.2 - *Estímulo à diversificação da produção orgânica, incluindo cultivos de frutas, hortaliças, cereais, leguminosas e criação de animais*\n',
                    '* 7.2.3 - *Promoção de programas de distribuição de alimentos, como cestas básicas, vouchers alimentares e restaurantes populares, para garantir a segurança alimentar de famílias em situação de vulnerabilidade social*\n',
                    '* 7.2.4 - *Apoio a iniciativas de economia solidária e geração de renda, como hortas comunitárias, cooperativas de alimentos e bancos de alimentos*\n',
                    '* 7.2.5 - *Desenvolvimento de programas de educação alimentar e nutricional nas escolas, unidades de saúde e comunidades, visando promover hábitos alimentares saudáveis e prevenir a desnutrição e obesidade*\n',
                    '* 7.2.6 - *Realização de campanhas de conscientização sobre a importância de uma alimentação balanceada, incluindo o consumo de frutas, verduras, legumes, proteínas e a redução do consumo de alimentos ultraprocessados*\n',
                ],
                Inclusão_Produtiva_e_Geração_de_Emprego_e_Renda: [
                    '* 7.3.1 - *Implementação de programas de capacitação profissional e qualificação da mão de obra local*\n',
                    '* 7.3.2 - *Estímulo ao empreendedorismo e apoio à criação e fortalecimento de pequenos negócios*\n',
                    '* 7.3.3 - *Promoção de parcerias com o setor privado para a geração de emprego e renda, especialmente para jovens e desempregados*\n',
                ],
                Apoio_à_Família_e_Fortalecimento_de_Vínculos: [
                    '* 7.4.1 - *Promoção de ações de educação parental e apoio psicossocial às famílias*\n',
                    '* 7.4.2 - *Criação de espaços de convivência e lazer para todas as faixas etárias*\n',
                    '* 7.4.3 - *Desenvolvimento de programas e atividades que fortaleçam os vínculos familiares e comunitários*\n',
                ],
                Políticas_de_Promoção_da_Igualdade_e_Diversidade: [
                    '* 7.5.1 - *Implementação de políticas afirmativas que combatam a discriminação e promovam a igualdade de gênero, raça e orientação sexual*\n',
                    '* 7.5.2 - *Realização de campanhas de conscientização e educação para o respeito à diversidade e direitos humanos*\n',
                    '* 7.5.3 - *Incentivo à participação e representatividade de grupos marginalizados na vida política e social da comunidade*\n',
                ],

                /////////// ------ pesca ------ ///////////
                Gestão_Sustentável_dos_Recursos_Pesqueiros: [
                    '* 8.1.1 - *Implementação de políticas de manejo pesqueiro baseadas em estudos científicos e participação das comunidades locais*\n',
                    '* 8.1.2 - *Estabelecimento de períodos de defeso e tamanhos mínimos de captura para proteger espécies ameaçadas e garantir a reprodução dos peixes*\n',
                ],
                Infraestrutura_e_Apoio_aos_Pescadores: [
                    '* 8.2.1 - *Implantação de centros de beneficiamento de pescado e cooperativas para agregar valor à produção e melhorar a comercialização*\n',
                    '* 8.2.2 - *Oferta de assistência técnica e capacitação para os pescadores, visando o aprimoramento das técnicas de pesca e manejo dos recursos*\n'
                ],
                Desenvolvimento_da_Piscicultura: [
                    '* 8.3.1 - *Estímulo à criação de peixes em cativeiro e cultivo de espécies nativas e exóticas de interesse comercial*\n',
                    '* 8.3.2 - *Apoio à construção de viveiros e tanques para a produção de pescado em escala comercial e familiar*\n',
                    '* 8.3.3 - *Promoção de incentivos fiscais para o desenvolvimento da piscicultura na região*\n'
                ],

                /////////// ------ desenv_economico ------ ///////////
                Diversificação_da_Economia_Local: [
                    '* 9.1.1 - *Estímulo ao desenvolvimento de diferentes setores econômicos, como agricultura, pecuária, indústria, comércio e serviços*\n',
                    '* 9.1.2 - *Promoção de cadeias produtivas locais e arranjos produtivos que agreguem valor à produção regional*\n',
                    '* 9.1.3 - *Incentivo à criação e fortalecimento de micro e pequenas empresas, gerando emprego e renda diversificada*\n',
                ],
                Atração_de_Investimentos_e_Empreendedorismo: [
                    '* 9.2.1 - *Implementação de políticas de atração de investimentos, com incentivos fiscais e facilidades para abertura e regularização de empresas*\n',
                    '* 9.2.2 - *Estímulo ao empreendedorismo e à inovação, com apoio a startups e incubadoras de negócios locais*\n',
                    '* 9.2.3 - *Promoção de parcerias público-privadas para o desenvolvimento de projetos de infraestrutura e serviços*\n'
                ],
                Qualificação_da_Mão_de_Obra_e_Educação_Profissional: [
                    '* 9.3.1 - *Investimento em programas de capacitação profissional e educação técnica voltados para as demandas do mercado de trabalho local*\n',
                    '* 9.3.2 - *Parcerias com instituições de ensino e empresas para oferta de cursos, estágios e programas de aprendizagem*\n',
                    '* 9.3.3 - *Promover a formação e qualificação profissional que atendam às necessidades específicas do município e região*\n'
                ],
                Inclusão_Digital_e_Tecnológica: [
                    '* 9.4.1 - *Expansão do acesso à internet de alta velocidade e tecnologias digitais para todas as áreas do município*\n',
                    '* 9.4.2 - *Promoção de programas de inclusão digital e capacitação tecnológica para a população, visando reduzir a exclusão digital e promover a inclusão social*\n'
                ],

                /////////// ------ turismo ------ ///////////
                Promoção_e_Marketing_Turístico: [
                    '* 10.1.1 - *Desenvolvimento de campanhas de marketing para promover os atrativos turísticos da região, como suas belezas naturais, patrimônio cultural e eventos locais*\n',
                    '* 10.1.2 - *Participação em feiras de turismo e eventos promocionais para atrair visitantes e investidores*\n',
                    '* 10.1.3 - *Criação de materiais de divulgação, como guias turísticos, mapas e websites informativos sobre os destinos turísticos de Sobradinho-BA*\n'
                ],
                Infraestrutura_Turística: [
                    '* 10.2.1 - *Desenvolvimento de estruturas de apoio ao turismo, como centros de informações turísticas, estacionamentos, banheiros públicos e áreas de lazer*\n'
                ],
                Roteiros_e_Circuitos_Turísticos: [
                    '* 10.3.1 - *Criação de roteiros turísticos temáticos que explorem os diferentes aspectos da cultura, história, natureza e gastronomia da região*\n',
                    '* 10.3.2 - *Desenvolvimento de circuitos integrados que incluem diversos pontos de interesse turístico, facilitando a visita e ampliando a experiência do turista*\n',
                    '* 10.3.3 - *Parcerias com operadoras de turismo e guias locais para oferecer passeios guiados e atividades turísticas diversificadas*\n',
                ],
                Turismo_Sustentável_e_Responsável: [
                    '* 10.4.1 - *Promoção de práticas de turismo sustentável que respeitem o meio ambiente, a cultura local e as comunidades residentes*\n',
                    '* 10.4.2 - *Implementação de medidas de gestão ambiental e preservação dos recursos naturais, como trilhas ecológicas, observação de fauna e flora e atividades de educação ambiental*\n',
                    '* 10.4.3 - *Estímulo ao turismo de base comunitária, valorizando a participação das comunidades locais na oferta de serviços turísticos e na geração de renda*\n'
                ],
                Segurança_e_Qualidade_de_Atendimento: [
                    '* 10.5.1 - *Investimento em medidas de segurança pública para garantir a tranquilidade e a integridade dos turistas durante sua estadia na região*\n',
                    '* 10.5.2 - *Capacitação e qualificação dos profissionais que atuam no setor turístico, como guias, recepcionistas, garçons e motoristas, visando oferecer um serviço de qualidade e excelência aovisitante*\n',
                    '* 10.5.3 - *Monitoramento e avaliação contínua da satisfação do turista, buscando identificar oportunidades de melhoria e aprimoramento dos serviços oferecidos*\n'
                ],
                Desenvolvimento_do_Turismo: [
                    '* 10.6.1 - *Incentivo a infraestrutura turística, transporte e serviços de apoio ao turista*\n',
                    '* 10.6.2 - *Incentivo às melhorias dos equipamentos de turismo no município (Hoteis, restaurantes etc)*\n',
                    '* 10.6.3 - *Fomento ao turismo sustentável, valorizando a preservação ambiental e o envolvimento das comunidades locais*\n',
                    '* 10.6.4 - *Promoção e divulgação dos atrativos turísticos da região, como belezas naturais, patrimônio histórico-cultural e eventos culturais e esportivos*\n'
                ],

                /////////// ------ saude ------ ///////////
                Saúde_Mental: [
                    '* 11.1.1 - *Implementação de programas de promoção da saúde mental e prevenção do suicídio*\n',
                    '* 11.1.2 - *Capacitação de profissionais de saúde para identificação e manejo de transtornos mentais comuns*\n',
                    '* 11.1.3 - *Ampliação e fortalecimento dos serviços de saúde mental, incluindo atendimento psicológico e psiquiátrico*\n'
                ],
                Assistência_Farmacêutica: [
                    '* 11.2.1 - *Garantia de acesso a medicamentos essenciais e de qualidade na rede pública de saúde*\n',
                    '* 11.2.2 - *Ampliação dos programas de distribuição de medicamentos gratuitos, como o Programa Farmácia Popular*\n',
                ],
                'Tratamento_Fora_do_Domicílio_(TFD)': [
                    '* 11.3.1 - *Manutenção e melhoria da casa de apoio para o TFD*\n',
                    '* 11.3.2 - *Melhoria do acesso e dos transportes para pacientes que necessitam de tratamento em outras cidades ou estados*\n',
                    '* 11.3.3 - *Agilidade na autorização e agendamento de consultas, exames e procedimentos fora do domicílio*\n'
                ],
                Melhoria_do_Atendimento: [
                    '* 11.4.1 - *Implantação de sistemas de gestão de qualidade e monitoramento da satisfação do usuário*\n',
                    '* 11.4.2 - *Incentivo à humanização do atendimento, com ênfase no respeito à dignidade e aos direitos dos pacientes*\n',
                    '* 11.4.3 - *Capacitação e treinamento contínuo dos profissionais de saúde, visando aprimorar o acolhimento, comunicação e atenção ao paciente*\n',
                    '* 11.4.4 - *Fortalecimento da integração entre os diferentes níveis de atenção à saúde, promovendo o trabalho em rede e a articulação entre as unidades básicas de saúde, hospitais e serviços especializados*\n',
                    '* 11.4.5 - *Implantação de protocolos de triagem e classificação de risco nos serviços de urgência e emergência de média complexidade, visando priorizar os casos mais graves e reduzir o tempo de espera*\n'
                ],
                Sistema_de_Marcações: [
                    '* 11.5.1 - *Modernização e informatização do sistema de marcação de consultas e exames, visando maior agilidade e transparência no agendamento*\n',
                    '* 11.5.2 - *Ampliação dos canais de comunicação para marcação de consultas, incluindo telefone, internet e aplicativos móveis*\n',
                    '* 11.5.3 - *Redução do tempo de espera e otimização do fluxo de pacientes, garantindo acesso oportuno e equitativo aos serviços de saúde*\n'
                ],
                Atendimento_Hospitalar: [
                    '* 11.6.1 - *Ampliação e modernização da infraestrutura hospitalar, com investimentos em equipamentos e tecnologia médica*\n',
                    '* 11.6.2 - *Ampliação dos atendimentos e tratamentos de baixa e média complexidade , visando melhorar a capacidade de atendimento em situações de emergência e alta demanda*\n',
                    '* 11.6.3 - *Fortalecimento da rede de hospitais e serviços de urgência e emergência, com foco na qualidade e segurança do atendimento prestado aos pacientes*\n'
                ],
                Assistência_de_média_complexidade: [
                    '* 11.7.1 - *Ampliação e qualificação da rede de unidades de saúde de média complexidade, como os Centros de Especialidades e Policlínicas, para garantir acesso oportuno e adequado aos serviços especializados*\n',
                    '* 11.7.2 - *Investimento em tecnologia e telemedicina para ampliar o acesso a consultas e exames especializados em áreas remotas e de difícil acesso, garantindo equidade no acesso aos serviços de saúde*\n',
                    '* 11.7.3 - *Capacitação e valorização dos profissionais de saúde que atuam nos serviços de média complexidade, visando garantir qualidade e resolutividade no atendimento prestado aos usuários do SUS*.\n'
                ],

                /////////// ------ EMPREGO E RENDA  ------ ///////////
                Criação_de_um_centro_de_empreendedorismo_local: [
                    '* 12.1.1 - Estabelecer um centro de empreendedorismo que ofereça capacitação, mentoria e apoio financeiro para pequenos empreendedores locais.'
                ],
                Parcerias_com_empresas_para_estágios_e_empregos:[
                    '* 12.1.2 - Estabelecer um centro de empreendedorismo que ofereça capacitação, mentoria e apoio financeiro para pequenos empreendedores locais.'
                ],
            }
        ],
        subsubsubthemes: [
            {
                // Infraestrutura Escolar
                construcao_reforma_escola: [
                    constants.msgFinal
                ],
                melhoria_instalacoes_fisicas: [
                    constants.msgFinal
                ],
                implementacao_tecnologia_internet_escolas: [
                    constants.msgFinal
                ],

                // Qualificação dos Profissionais da Educação
                capacitacao_continua_de_professores_gestores_escolares: [
                    constants.msgFinal
                ],
                programas_formacao_pedagogica: [
                    constants.msgFinal
                ],
                incentivos_atrair_reter_profissionais_qualificados: [
                    constants.msgFinal
                ],

                // Inclusão e Acessibilidade
                adaptacao_espacos_materiais_alunos_deficiência: [
                    constants.msgFinal
                ],

                formação_professores_atender_necessidades_especiais_alunos: [
                    constants.msgFinal
                ],
                promocao_cultura_inclusiva_escolas: [
                    constants.msgFinal
                ],

                // Inovação Pedagógica
                implementacao_metodologias_ensino__dinamicas_participativas: [
                    constants.msgFinal
                ],
                estímulo_uso_recursos_tecnologicos_sala_aula: [
                    constants.msgFinal
                ],
                fomento_criatividade_pensamento_critico_alunos: [
                    constants.msgFinal
                ],

                // Engajamento da Comunidade
                estabelecimento_parcerias_empresas_locais_organizacoes_sociedade_civil: [
                    constants.msgFinal
                ],
                envolvimento_pais_responsaveis_acompanhamento_educacao_alunos: [
                    constants.msgFinal
                ],
                criação_espacos_dialogo_participacao_comunidade_escolar: [
                    constants.msgFinal
                ],

                // Reforma e Manutenção de Ruas e Estradas
                melhoria_pavimentacao: [
                    constants.msgFinal
                ],
                reparo_buracos_fissuras: [
                    constants.msgFinal
                ],
                sinalizacao_adequada_garantir_seguranca_viaria: [
                    constants.msgFinal
                ],
                ampliacao_recuperacao_manutencao_estradas_vicinais: [
                    constants.msgFinal
                ],

                // Abastecimento de Água e Saneamento Básico
                ampliacao_rede_abastecimento_agua_sede_interior: [
                    constants.msgFinal
                ],
                tratamento_esgoto_residuos_solidos: [constants.msgFinal],
                programas_conscientizacao_sobre_uso_sustentavel_recursos_hidricos: [constants.msgFinal],
                fomento_saneamento_rural_reuso_aguas: [constants.msgFinal],

                // Energia Elétrica e Iluminação Pública
                expansao_rede_eletrica_areas_remotas: [constants.msgFinal],
                substituicao_lampadas_convencionais_por_LED_para_maior_eficiencia_energetica: [constants.msgFinal],
                manutencao_regular_iluminacao_publica_garantir_segurança_moradores: [constants.msgFinal],

                // Transporte Público e Mobilidade Urbana
                modernizacao_frota_veiculos_publicos: [constants.msgFinal],
                implantacao_ampliacao_ciclovias_faixas_exclusivas_bicicletas: [constants.msgFinal],
                melhoria_acessibilidade_pessoas_mobilidade_reduzida: [constants.msgFinal],

                // Equipamentos Comunitários
                construcao_manutencao_pracas_parques_areas_lazer: [constants.msgFinal],
                instalacao_equipamentos_esportivos_recreativos: [constants.msgFinal],
                criacao_espacos_atividades_culturais_eventos_comunitarios: [constants.msgFinal],

                // Tecnologia Agrícola
                incentivo_adocao_tecnicas_agricolas_modernas_sustentaveis: [constants.msgFinal],
                introducao_sistemas_irrigacao_eficientes_manejo_integrado_pragas: [constants.msgFinal],
                Promoção_programas_capacitacao_assistencia_tenica_extensão_rural_agricultores_familiares: [constants.msgFinal],

                // Diversificação de Culturas
                estímulo_cultivo_variedades_agricolas_adaptadas_clima_local: [constants.msgFinal],
                promocao_culturas_alternativas_diversificar_producao_reduzir_riscos: [constants.msgFinal],
                incentivo_agricultura_familiar_producao_organica: [constants.msgFinal],

                // Infraestrutura Rural
                melhoria_das_estradas_rurais_facilitar_escoamento_producao: [constants.msgFinal],
                implantacao_redes_eletrificacao_rural_acesso_internet: [constants.msgFinal],
                incentivo_construcao_centros_comercializacao_cooperativas_agricolas: [constants.msgFinal],

                // Acesso a Crédito e Assistência Técnica
                facilitacao_acesso_linhas_de_crédito_rural_programas_de_financiamento: [constants.msgFinal],
                apoio_elaboracao_projetos_gestao_financeira_propriedades: [constants.msgFinal],

                // Sustentabilidade Ambiental
                incentivo_práticas_agricolas_sustentáveis_manejo_conservacionista_solo: [constants.msgFinal],
                preservacao_areas_mata_nativa_recuperacao_areas_degradadas: [constants.msgFinal],
                implementacao_programas_gestao_residuos_conservacao_biodiversidade: [constants.msgFinal],

                // Preservação do Patrimônio Cultural
                restauracao_conservacao_circos_arqueologicos: [constants.msgFinal],
                catalogacao_valorizacao_patrimonio_material_imaterial_regiao: [constants.msgFinal],
                promocao_visitas_guiadas_roteiros_culturais_divulgar_historia_local: [constants.msgFinal],

                // Fomento às Artes e Expressões Culturais
                rpoio_artistas_locais_grupos_culturais: [constants.msgFinal],
                realizacao_festivais_exposicoes_eventos_culturais_diversos: [constants.msgFinal],
                Incentivo_producao_circulacao_obras_arte_musica_teatro_danca_entre_outros: [constants.msgFinal],

                // Educação e Formação Cultural
                implementacao_programas_educacao_cultural_nas_escolas: [constants.msgFinal],
                oferta_cursos_oficinas_workshops_sobre_cultura_arte: [constants.msgFinal],
                criacao_espacos_culturais_acessiveis_comunidade: [constants.msgFinal],

                // Valorização das Tradições Locais
                promocao_festas_eventos_que_celebram_tradicoes_culturais_regiao: [constants.msgFinal],
                registro_documentacao_manifestacoes_culturais_tradicionais_festas_populares_dancas_rituais: [constants.msgFinal],
                incentivo_producao_artesanato_gastronomia_tipicos_valorizando_saber_fazer_local: [constants.msgFinal],

                // Conservação da Biodiversidade
                protecao_preservacao_areas_naturais_como_caatingas_matas_ciliares_ecossistemas: [constants.msgFinal],
                preservacao_unidades_conservacao_areas_protecao_ambiental: [constants.msgFinal],
                estimulo_pesquisa_cientifica_monitoramento_fauna_flora_locais: [constants.msgFinal],

                // Gestão de Recursos Hídricos
                promocao_conservacao_sustentavel_recursos_hidricos_incluindo_rios_lagos_aquiferos: [constants.msgFinal],
                incentivo_adocao_praticas_racional_agua_agricultura_industria_uso_domestico: [constants.msgFinal],

                // Mitigação e Adaptação às Mudanças Climáticas
                reducao_emissoes_gases_efeito_estufa_atraves_politicas_eficiencia_energetica_uso_energias_renovaveis: [constants.msgFinal],
                Sensibilizacao_educacao_comunidade_sobre_importancia_preservacao_ambiental_acoes_individuais_mitigar_aqueci_global: [constants.msgFinal],

                // Gestão de Resíduos Sólidos
                implantacao_sistemas_coleta_seletiva_reciclagem_residuos_solidos: [constants.msgFinal],
                estimulo_reducao_plasticos_materiais_descartaveis: [constants.msgFinal],
                promocao_campanhas_conscientizacao_sobre_correta_disposicao_residuos_praticas_compostagem: [constants.msgFinal],

                // Infraestrutura Esportiva
                construcao_adequacao_espacos_publicos_pratica_esportiva_quadras_poliesportivas_campos_futebol_pistas_atletismo: [constants.msgFinal],
                manutencao_ampliacao_ginasios_centros_esportivos_municipais: [constants.msgFinal],
                acesso_facilitado_equipamentos_esportivos__todas_comunidades: [constants.msgFinal],

                // Programas de Incentivo ao Esporte
                criacao_programas_iniciacao_esportiva_criancas_adolescentes_escolas_comunidades: [constants.msgFinal],
                apoio_atletas_locais_equipes_esportivas_atraves_bolsas_estudo_treinamento_participacao_competicoes: [constants.msgFinal],
                realizacao_eventos_esportivos_torneios_municipais_promover_pratica_esportiva_revelar_talentos_locais: [constants.msgFinal],

                // Promoção da Atividade Física e Saúde
                estimulo_pratica_regular_atividades_fisicas_todas_faixas_etarias_programas_ginastica_caminhadas_ciclismo: [constants.msgFinal],
                parcerias_instituicoes_de_saude_oferecer_atividades_fisicas_orientadas_grupos_especificos_idosos_pessoas_doencas_cronicas: [constants.msgFinal],
                campanhas_conscientizacao_sobre_beneficios_atividade_fisica_saude_qualidade_de_vida: [constants.msgFinal],

                //// PAREI NA PAGINA 5 - Promoção da Atividade Física e Saúde

                // Lazer e Recreação
                criacao_espacos_convivencia_lazer_pracas_parques_areas_verdes: [constants.msgFinal],
                instalacao_equipamentos_recreativos_entretenimento_criancas_jovens_adultos_e_idosos: [constants.msgFinal],
                realizacao_eventos_culturais_festivais_feiras_artesanato_promover_lazer_integracao_comunitaria: [constants.msgFinal],

                // Acessibilidade e Inclusão
                garantia_acessibilidade_espacos_eventos_esportivos_pessoas_deficiencia: [constants.msgFinal],
                adocao_politicas_inclusivas_incentivem_participacao_todos_segmentos_sociedade_independentemente_idade_genero_condicao_socioeconomica: [constants.msgFinal],
                promocao_atividades_esportivas_adaptadas_paralimpicas_visando_inclusao_valorizacao_diversidade: [constants.msgFinal],

                // Assistência Social e Proteção à Vulnerabilidade
                ampliacao_fortalecimento_programas_assistencia_social_bolsa_familia_benefício_prestacao_continuada_BPC: [constants.msgFinal],
                implementacao_politicas_combate_pobreza_desigualdade_social: [constants.msgFinal],
                criacao_redes_protecao_apoio_grupos_vulneraveis_criancas_idosos_pessoas_deficiencia_mulheres_situacao_violencia: [constants.msgFinal],

                // SEGURANÇA ALIMENTAR E NUTRICIONAL
                incentivo_producao_local_alimentos_meio_agricultura_familiar_práticas_agricolas_sustentaveis: [constants.msgFinal],
                estimulo_diversificacao_producao_organica_incluindo_cultivos_frutas_hortalicas_cereais_leguminosas_criacao_animais: [constants.msgFinal],
                promocao_programas_distribuicao_alimentos_cestas_vouchers_alimen_restaur_populares_garantir_seguranca_alimentar_familias_situacao_vulnera_social: [constants.msgFinal],
                apoio_iniciativas_economia_solidaria_geracao_renda_hortas_comunitarias_coop_alimentos_bancos_alimentos: [constants.msgFinal],
                desenvolvimento_programas_educacao_alimentar_nutric_escolas_unidades_saude_comuni_visando_promover_hábitos_alimen_saudaveis_prevenir_desnutricao_obesidade: [constants.msgFinal],
                realizacao_campanhas_conscien_sobre_importancia_aliment_balanceada_incluindo_consumo_frutas_verduras_legumes_proteinas_reducao_consumo_alimentos_ultraproc: [constants.msgFinal],

                // Inclusão Produtiva e Geração de Emprego e Renda
                implementacao_programas_capacitacao_profissional_qualificacao_mao_obra_local: [constants.msgFinal],
                estimulo_empreendedorismo_apoio_criação_fortalecimento_pequenos_negocios: [constants.msgFinal],
                promocao_parcerias_com_setor_privado_geração_emprego_renda_especialmente_jovens_desempregados: [constants.msgFinal],

                // Apoio à Família e Fortalecimento de Vínculos
                pesenvolvimento_programas_atividades_fortalecam_vinculos_familiares_comunitarios: [constants.msgFinal],
                promocao_acoes_educação_parental_apoio_psicossocial_familias: [constants.msgFinal],
                criacao_espacos_convivencia_lazer_todas_faixas_etarias: [constants.msgFinal],

                // Políticas de Promoção da Igualdade e Diversidade
                implementacao_politicas_afirmativas_combatam_discriminacao_promovam_igualdade_genero_raca_orientacao_sexual: [constants.msgFinal],
                realizacao_campanhas_conscientizacao_educacao_para_respeito_diversidade_direitos_humanos: [constants.msgFinal],
                incentivo_participacao_represent_grupos_marginalizados_vida_politica_social_comunidade: [constants.msgFinal],

                // Gestão Sustentável dos Recursos Pesqueiros
                implementacao_politicas_manejo_pesqueiro_baseadas_estudos_cientificos_participacao_comunidades_locais: [constants.msgFinal],
                estabelecimento_periodos_defeso_tamanhos_minimos_captura_proteger_especies_ameacadas_garantir_reproducao_peixes: [constants.msgFinal],

                // Infraestrutura e Apoio aos Pescadores
                implantacao_centros_beneficiamento_pescado_cooperativas_agregar_valor_producao_melhorar_comercializacao: [constants.msgFinal],
                oferta_assistencia_tecnica_capacitacao_pescadores_visando_aprimoramento_tecnicas_pesca_manejo_recursos: [constants.msgFinal],

                // Desenvolvimento da Piscicultura
                estimulo_criacao_peixes_cativeiro_cultivo_especies_nativas_exoticas_interesse_comercial: [constants.msgFinal],
                apoio_construcao_viveiros_tanques_producao_pescado_escala_comercial_familiar: [constants.msgFinal],
                promocao_incentivos_fiscais_desenvolv_piscicultura_regiao: [constants.msgFinal],

                // Diversificação da Economia Local
                estimulo_desenvolvimento_diferentes_setores_economicos_agricultura_pecuaria_industria_comercio_servicos: [constants.msgFinal],
                promocao_cadeias_produtivas_locais_arranjos_produtivos_agreguem_valor_producao_regional: [constants.msgFinal],
                incentivo_criacao_fortalecimento_micro_pequenas_empresas_gerando_emprego_renda_diversificada: [constants.msgFinal],
                implementacao_politicas_atracao_investimentos_incentivos_fiscais_facilidades_abertura_regularizacao_empresas: [constants.msgFinal],

                // Atração de Investimentos e Empreendedorismo
                implementação_políticas_atração_investimentos_incentivos_fiscais_facilidades_abertura_regularização_empresas: [constants.msgFinal],
                estimulo_empreendedorismo_inovação_apoio_startups_incubadoras_negócios_locais: [constants.msgFinal],
                promocao_parcerias_público_privadas_desenvolvimento_projetos_infraestrutura_serviços: [constants.msgFinal],

                // Qualificação da Mão de Obra e Educação Profissional
                investimento_programas_capacitação_profissional_educação_técnica_voltados_demandas_mercado_trabalho_local: [constants.msgFinal],
                parcerias_instituições_ensino_empresas_oferta_cursos_estágios_programas_aprendizagem: [constants.msgFinal],
                promover_formação_qualificação_profissional_atendam_necessidades_específicas_município_região: [constants.msgFinal],

                // Inclusão Digital e Tecnológica
                expansão_acesso_internet_alta_velocidade_tecnologias_digitais_todas_áreas_municipio: [constants.msgFinal],
                promoção_programas_inclusão_digital_capacitação_tecnológica_para_população_visando_reduzir_exclusão_digital_promover_inclusão_social: [constants.msgFinal],

                // Promoção e Marketing Turístico
                desenvolvimento_campanhas_marketing_promover_atrativos_turísticos_região_belezas_naturais_patrimônio_cultural_eventos_locais: [constants.msgFinal],
                participação_feiras_turismo_eventos_promocionais_atrair_visitantes_investidores: [constants.msgFinal],
                criação_materiais_divulgação_guias_turísticos_mapas_websites_informativos_sobre_destinos_turísticos_Sobradinho_BA: [constants.msgFinal],

                // Infraestrutura Turística
                desenvolvimento_estruturas_apoio_turismo_centros_informações_turísticas_estacionamentos_banheiros_públicos_áreas_lazer: [constants.msgFinal],

                // Roteiros e Circuitos Turísticos
                criação_roteiros_turísticos_temáticos_explorem_diferentes_aspectos_cultura_história_natureza_gastronomia_região: [constants.msgFinal],
                desenvolvimento_circuitos_integrados_incluem_diversos_pontos_interesse_turístico_facilitando_visita_ampliando_experiência_turista: [constants.msgFinal],
                parcerias_operadoras_turismo_guias_locais_oferecer_passeios_guiados_atividades_turísticas_diversificadas: [constants.msgFinal],

                // Turismo Sustentável e Responsável
                promoção_práticas_turismo_sustentável_respeitem_meio_ambiente_cultura_local_comunidades_residentes: [constants.msgFinal],
                implementação_medidas_gestão_ambiental_preservação_recursos_naturais_trilhas_ecológicas_observação_fauna_flora_atividades_educação_ambiental: [constants.msgFinal],
                estímulo_turismo_base_comunitária_valorizando_participação_comunidades_locais_oferta_serviços_turísticos_geração_renda: [constants.msgFinal],

                // Segurança e Qualidade de Atendimento
                investimento_medidas_segurança_pública_garantir_tranquilidade_integridade_turistas_durante_estadia_região: [constants.msgFinal],
                capacitação_qualificação_profissionais_atuam_setor_turístico_guias_recepcionistas_garçons_motoristas_visando_oferecer_serviço_qualidade_excelência_visitante: [constants.msgFinal],
                monitoramento_avaliação_contínua_satisfação_turista_buscando_identificar_oportunidades_melhoria_aprimoramento_serviços_oferecidos: [constants.msgFinal],

                // Desenvolvimento do Turismo
                promoção_divulgação_atrativos_turísticos_região_belezas_naturais_patrimônio_histórico_cultural_eventos_culturais_esportivos: [constants.msgFinal],
                incentivo_infraestrutura_turística_transporte_serviços_apoio_turista: [constants.msgFinal],
                incentivo_melhorias_equipamentos_turismo_município_Hoteis_restaurantes_etc: [constants.msgFinal],
                fomento_turismo_sustentável_valorizando_preservação_ambiental_envolvimento_comunidades_locais: [constants.msgFinal],

                // Saúde Mental
                ampliação_fortalecimento_serviços_saúde_mental_incluindo_atendimento_psicológico_psiquiátrico: [constants.msgFinal],
                implementação_programas_promoção_saúde_mental_prevenção_suicídio: [constants.msgFinal],
                capacitação_profissionais_saúde_identificação_manejo_transtornos_mentais_comuns: [constants.msgFinal],

                // Assistência Farmacêutica
                garantia_acesso_medicamentos_essenciais_qualidade_rede_pública_saúde: [constants.msgFinal],
                ampliação_programas_distribuição_medicamentos_gratuitos_como_Programa_Farmácia_Popular: [constants.msgFinal],

                // Tratamento Fora do Domicílio (TFD)
                melhoria_acesso_transportes_pacientes_necessitam_tratamento_outras_cidades_estados: [constants.msgFinal],
                agilidade_autorização_agendamento_consultas_exames_procedimentos_fora_domicílio: [constants.msgFinal],
                manutenção_melhoria_casa_apoio_para_TFD: [],

                // Melhoria do Atendimento
                capacitação_treinamento_contínuo_profissionais_saúde_visando_aprimorar_acolhimento_comunicação_atenção_paciente: [constants.msgFinal],
                implantação_sistemas_gestão_qualidade_monitoramento_satisfação_usuário: [constants.msgFinal],
                incentivo_humanização_atendimento_ênfase_respeito_dignidade_direitos_pacientes: [constants.msgFinal],
                fortalecimento_integração_entre_diferentes_níveis_atenção_saúde_promovendo_trabalho_rede_articulação_entre_unidades_básicas_saúde_hospitais_serviços_especializados: [constants.msgFinal],
                implantação_protocolos_triagem_classificação_risco_serviços_urgência_emergência_média_complexidade_visando_priorizar_casos_graves_reduzir_tempo_espera: [constants.msgFinal],

                // Sistema de Marcações
                modernização_informatização_sistema_marcação_consultas_exames_visando_maior_agilidade_transparência_agendamento: [constants.msgFinal],
                ampliação_canais_comunicação_marcação_consultas_incluindo_telefone_internet_aplicativos_móveis: [constants.msgFinal],
                redução_tempo_espera_otimização_fluxo_pacientes_garantindo_acesso_oportuno_equitativo_serviços_saúde: [constants.msgFinal],

                // Atendimento Hospitalar
                ampliação_modernização_infraestrutura_hospitalar_investimentos_equipamentos_tecnologia_médica: [constants.msgFinal],
                ampliação_atendimentos_tratamentos_baixa_média_complexidade_visando_melhorar_capacidade_atendimento_situações_emergência_alta_demanda: [constants.msgFinal],
                fortalecimento_rede_hospitais_serviços_urgência_emergência_foco_qualidade_segurança_atendimento_prestado_pacientes: [constants.msgFinal],

                // Assistência de média complexidade
                ampliação_qualificação_rede_unidades_saúde_média_complexidade_como_Centros_Especialidades_Policlínicas_garantir_acesso_oportuno_adequado_serviços_especializados: [constants.msgFinal],
                investimento_tecnologia_telemedicina_ampliar_acesso_consultas_exames_especializados_áreas_remotas_difícil_acesso_garantindo_equidade_acesso_erviços_saúde: [constants.msgFinal],
                capacitação_valorização_profissionais_saúde_atuam_serviços_média_complexidade_visando_garantir_qualidade_resolutividade_atendimento_prestado_usuários_SUS: [constants.msgFinal],
                
                // Criação de um Centro de Empreendedorismo Local
                Estabelecer_um_centro_de_empreendedorismo_que_ofereça_capacitação_mentoria_e_apoio_financeiro_para_pequenos_empreendedores_locais: [constants.msgFinal],
                Firmar_parcerias_com_empresas_regionais_para_criar_programas_de_estágio_e_oportunidades_de_emprego_para_jovens_e_adultos_desempregados: [constants.msgFinal]
            }
        ]
    }
]

exports.questoes = questoes
const objFunc = {
    // configure subthemes

    1: ['Educação', 'subthemes'],
    2: ['Infraestrutura', 'subthemes'],
    3: ['Agricultura', 'subthemes'],
    4: ['Cultura', 'subthemes'],
    5: ['Meio_Ambiente', 'subthemes'],
    6: ['Esporte_e_Lazer', 'subthemes'],
    7: ['Assistência_e_Desenvolvimento_Social', 'subthemes'],
    8: ['Pesca', 'subthemes'],
    9: ['Desenvolvimento_Econômico', 'subthemes'],
    10: ['Turismo', 'subthemes'],
    11: ['Saúde', 'subthemes'],

    ///////////// configure subsubthemes /////////////

    // educacao
    1.1: ['Infraestrutura_Escolar', 'subsubthemes'],
    1.2: ['Qualificação_dos_Profissionais_da_Educação', 'subsubthemes'],
    1.3: ['Inclusão_Acessibilidade', 'subsubthemes'],
    1.4: ['Inovação_Pedagógica', 'subsubthemes'],
    1.5: ['Engajamento_da_Comunidade', 'subsubthemes'],

    // infraestrutura
    2.1: ['Reforma_e_Manutenção_de_Ruas_e_Estradas', 'subsubthemes'],
    2.2: ['Abastecimento_de_Água_e_Saneamento_Básico', 'subsubthemes'],
    2.3: ['Energia_Elétrica_e_Iluminação_Pública', 'subsubthemes'],
    2.4: ['Transporte_Público_e_Mobilidade_Urbana', 'subsubthemes'],
    2.5: ['Equipamentos_Comunitários', 'subsubthemes'],

    // agricultura
    3.1: ['Tecnologia_Agrícola', 'subsubthemes'],
    3.2: ['Diversificação_de_Culturas', 'subsubthemes'],
    3.3: ['Infraestrutura_Rural', 'subsubthemes'],
    3.4: ['Acesso_a_Crédito_e_Assistência_Técnica', 'subsubthemes'],
    3.5: ['Sustentabilidade_Ambiental', 'subsubthemes'],

    //cultura
    4.1: ['Preservação_do_Patrimônio_Cultural', 'subsubthemes'],
    4.2: ['Fomento_às_Artes_e_Expressões_Culturais', 'subsubthemes'],
    4.3: ['Educação_e_Formação_Cultural', 'subsubthemes'],
    4.4: ['Valorização_das_Tradições_Locais', 'subsubthemes'],

    // meio ambiente
    5.1: ['Conservação_da_Biodiversidade', 'subsubthemes'],
    5.2: ['Gestão_de_Recursos_Hídricos', 'subsubthemes'],
    5.3: ['Mitigação_e_Adaptação_às_MudançasClimáticas', 'subsubthemes'],
    5.4: ['Gestão_de_Resíduos_Sólidos', 'subsubthemes'],

    //esporte_lazer
    6.1: ['Infraestrutura_Esportiva', 'subsubthemes'],
    6.2: ['Programas_de_Incentivo_ao_Esporte', 'subsubthemes'],
    6.3: ['Promoção_da_Atividade_Física_e_Saúde', 'subsubthemes'],
    6.4: ['Lazer_e_Recreação', 'subsubthemes'],
    6.5: ['Acessibilidade_e_Inclusão', 'subsubthemes'],

    // assistencia desenv social
    7.1: ['Assistência_Social_e_Proteção_à_Vulnerabilidade', 'subsubthemes'],
    7.2: ['Segurança_Alimentar_e_Nutricional', 'subsubthemes'],
    7.3: ['Inclusão_Produtiva_e_Geração_de_Emprego_e_Renda', 'subsubthemes'],
    7.4: ['Apoio_à_Família_e_Fortalecimento_de_Vínculos', 'subsubthemes'],
    7.5: ['Políticas_de_Promoção_da_Igualdade_e_Diversidade', 'subsubthemes'],

    // pesca
    8.1: ['Gestão_Sustentável_dos_Recursos_Pesqueiros', 'subsubthemes'],
    8.2: ['Infraestrutura_e_Apoio_aos_Pescadores', 'subsubthemes'],
    8.3: ['Desenvolvimento_da_Piscicultura', 'subsubthemes'],

    // desenv economico
    9.1: ['Diversificação_da_Economia_Local', 'subsubthemes'],
    9.2: ['Atração_de_Investimentos_e_Empreendedorismo', 'subsubthemes'],
    9.3: ['Qualificação_da_Mão_de_Obra_e_Educação_Profissional', 'subsubthemes'],
    9.4: ['Inclusão_Digital_e_Tecnológica', 'subsubthemes'],

    // turismo
    10.1: ['Promoção_e_Marketing_Turístico', 'subsubthemes'],
    10.2: ['Infraestrutura_Turística', 'subsubthemes'],
    10.3: ['Roteiros_e_Circuitos_Turísticos', 'subsubthemes'],
    10.4: ['Turismo_Sustentável_e_Responsável', 'subsubthemes'],
    10.5: ['Segurança_e_Qualidade_de_Atendimento', 'subsubthemes'],
    10.6: ['Desenvolvimento_do_Turismo', 'subsubthemes'],

    // saude
    11.1: ['Saúde_Mental', 'subsubthemes'],
    11.2: ['Assistência_Farmacêutica', 'subsubthemes'],
    11.3: ['Tratamento_Fora_do_Domicílio_(TFD)', 'subsubthemes'],
    11.4: ['Melhoria_do_Atendimento', 'subsubthemes'],
    11.5: ['Sistema_de_Marcações', 'subsubthemes'],
    11.6: ['Atendimento_Hospitalar', 'subsubthemes'],
    11.7: ['Assistência_de_Média_Complexidade', 'subsubthemes'],

    ///////////////////// ------- subsubsubthemes ------- //////////////////////////

    ///////// ----- EDUCAÇÃO ----- /////////
    // Infraestrutura Escolar
    '1.1.1': ['construcao_reforma_escola', 'subsubsubthemes'],
    '1.1.2': ['melhoria_instalacoes_fisicas', 'subsubsubthemes'],
    '1.1.3': ['implementacao_tecnologia_internet_escolas', 'subsubsubthemes'],

    // Qualificação dos Profissionais da Educação
    '1.2.1': ['capacitacao_continua_de_professores_gestores_escolares', 'subsubsubthemes'],
    '1.2.2': ['programas_formacao_pedagogica', 'subsubsubthemes'],
    '1.2.3': ['incentivos_atrair_reter_profissionais_qualificados', 'subsubsubthemes'],

    // Inclusão e Acessibilidade
    '1.3.1': ['adaptacao_espacos_materiais_alunos_deficiência', 'subsubsubthemes'],
    '1.3.2': ['formação_professores_atender_necessidades_especiais_alunos', 'subsubsubthemes'],
    '1.3.3': ['promocao_cultura_inclusiva_escolas', 'subsubsubthemes'],

    // Inovação Pedagógica
    '1.4.1': ['implementacao_metodologias_ensino__dinamicas_participativas', 'subsubsubthemes'],
    '1.4.2': ['estímulo_uso_recursos_tecnologicos_sala_aula', 'subsubsubthemes'],
    '1.4.3': ['fomento_criatividade_pensamento_critico_alunos', 'subsubsubthemes'],

    // Engajamento da Comunidade
    '1.5.1': ['estabelecimento_parcerias_empresas_locais_organizacoes_sociedade_civil', 'subsubsubthemes'],
    '1.5.2': ['envolvimento_pais_responsaveis_acompanhamento_educacao_alunos', 'subsubsubthemes'],
    '1.5.3': ['criação_espacos_dialogo_participacao_comunidade_escolar', 'subsubsubthemes'],

    ///////// ------ INFRAESTRUTURA* ------- ////////
    // Reforma e Manutenção de Ruas e Estradas
    '2.1.1': ['melhoria_pavimentacao', 'subsubsubthemes'],
    '2.1.3': ['reparo_buracos_fissuras', 'subsubsubthemes'],
    '2.1.4': ['sinalizacao_adequada_garantir_seguranca_viaria', 'subsubsubthemes'],
    '2.1.5': ['ampliacao_recuperacao_manutencao_estradas_vicinais', 'subsubsubthemes'],

    // Abastecimento de Água e Saneamento Básico
    '2.2.1': ['ampliacao_rede_abastecimento_agua_sede_interior', 'subsubsubthemes'],
    '2.2.2': ['tratamento_esgoto_residuos_solidos', 'subsubsubthemes'],
    '2.2.3': ['programas_conscientizacao_sobre_uso_sustentavel_recursos_hidricos', 'subsubsubthemes'],
    '2.2.4': ['fomento_saneamento_rural_reuso_aguas', 'subsubsubthemes'],

    // Energia Elétrica e Iluminação Pública
    '2.3.1': ['expansao_rede_eletrica_areas_remotas', 'subsubsubthemes'],
    '2.3.2': ['substituicao_lampadas_convencionais_por_LED_para_maior_eficiencia_energetica', 'subsubsubthemes'],
    '2.3.3': ['manutencao_regular_iluminacao_publica_garantir_segurança_moradores', 'subsubsubthemes'],

    // Transporte Público e Mobilidade Urbana
    '2.4.1': ['modernizacao_frota_veiculos_publicos', 'subsubsubthemes'],
    '2.4.2': ['implantacao_ampliacao_ciclovias_faixas_exclusivas_bicicletas', 'subsubsubthemes'],
    '2.4.3': ['melhoria_acessibilidade_pessoas_mobilidade_reduzida', 'subsubsubthemes'],

    // Equipamentos Comunitários
    '2.5.1': ['construcao_manutencao_pracas_parques_areas_lazer', 'subsubsubthemes'],
    '2.5.2': ['instalacao_equipamentos_esportivos_recreativos', 'subsubsubthemes'],
    '2.5.3': ['criacao_espacos_atividades_culturais_eventos_comunitarios', 'subsubsubthemes'],

    //////// ------- AGRICULTURA* ------- ///////
    // Tecnologia Agrícola
    '3.1.1': ['incentivo_adocao_tecnicas_agricolas_modernas_sustentaveis', 'subsubsubthemes'],
    '3.1.2': ['introducao_sistemas_irrigacao_eficientes_manejo_integrado_pragas', 'subsubsubthemes'],
    '3.1.3': ['Promoção_programas_capacitacao_assistencia_tenica_extensão_rural_agricultores_familiares', 'subsubsubthemes'],

    // Diversificação de Culturas
    '3.2.1': ['estímulo_cultivo_variedades_agricolas_adaptadas_clima_local', 'subsubsubthemes'],
    '3.2.2': ['promocao_culturas_alternativas_diversificar_producao_reduzir_riscos', 'subsubsubthemes'],
    '3.2.3': ['incentivo_agricultura_familiar_producao_organica', 'subsubsubthemes'],

    // Infraestrutura Rural
    '3.3.1': ['melhoria_das_estradas_rurais_facilitar_escoamento_producao', 'subsubsubthemes'],
    '3.3.2': ['implantacao_redes_eletrificacao_rural_acesso_internet', 'subsubsubthemes'],
    '3.3.3': ['incentivo_construcao_centros_comercializacao_cooperativas_agricolas', 'subsubsubthemes'],

    // Acesso a Crédito e Assistência Técnica
    '3.4.1': ['facilitacao_acesso_linhas_de_crédito_rural_programas_de_financiamento', 'subsubsubthemes'],
    '3.4.2': ['apoio_elaboracao_projetos_gestao_financeira_propriedades', 'subsubsubthemes'],

    // Sustentabilidade Ambiental
    '3.5.1': ['incentivo_práticas_agricolas_sustentáveis_manejo_conservacionista_solo', 'subsubsubthemes'],
    '3.5.2': ['preservacao_areas_mata_nativa_recuperacao_areas_degradadas', 'subsubsubthemes'],
    '3.5.3': ['implementacao_programas_gestao_residuos_conservacao_biodiversidade', 'subsubsubthemes'],

    ////// ------------ *CULTURA* ---------- *CULTURA*
    // Preservação do Patrimônio Cultural
    '4.1.1': ['restauracao_conservacao_circos_arqueologicos', 'subsubsubthemes'],
    '4.1.2': ['catalogacao_valorizacao_patrimonio_material_imaterial_regiao', 'subsubsubthemes'],
    '4.1.3': ['promocao_visitas_guiadas_roteiros_culturais_divulgar_historia_local', 'subsubsubthemes'],

    // Fomento às Artes e Expressões Culturais
    '4.2.1': ['rpoio_artistas_locais_grupos_culturais', 'subsubsubthemes'],
    '4.2.2': ['realizacao_festivais_exposicoes_eventos_culturais_diversos', 'subsubsubthemes'],
    '4.2.3': ['Incentivo_producao_circulacao_obras_arte_musica_teatro_danca_entre_outros', 'subsubsubthemes'],

    // Educação e Formação Cultural
    '4.3.1': ['implementacao_programas_educacao_cultural_nas_escolas', 'subsubsubthemes'],
    '4.3.2': ['oferta_cursos_oficinas_workshops_sobre_cultura_arte', 'subsubsubthemes'],
    '4.3.3': ['criacao_espacos_culturais_acessiveis_comunidade', 'subsubsubthemes'],

    // Valorização das Tradições Locais
    '4.4.1': ['promocao_festas_eventos_que_celebram_tradicoes_culturais_regiao', 'subsubsubthemes'],
    '4.4.2': ['registro_documentacao_manifestacoes_culturais_tradicionais_festas_populares_dancas_rituais', 'subsubsubthemes'],
    '4.4.3': ['incentivo_producao_artesanato_gastronomia_tipicos_valorizando_saber_fazer_local', 'subsubsubthemes'],

    /////// --------- MEIO AMBIENTE --------- /////////
    // Conservação da Biodiversidade
    '5.1.1': ['protecao_preservacao_areas_naturais_como_caatingas_matas_ciliares_ecossistemas', 'subsubsubthemes'],
    '5.1.2': ['preservacao_unidades_conservacao_areas_protecao_ambiental', 'subsubsubthemes'],
    '5.1.3': ['estimulo_pesquisa_cientifica_monitoramento_fauna_flora_locais', 'subsubsubthemes'],

    // Gestão de Recursos Hídricos
    '5.2.1': ['promocao_conservacao_sustentavel_recursos_hidricos_incluindo_rios_lagos_aquiferos', 'subsubsubthemes'],
    '5.2.2': ['incentivo_adocao_praticas_racional_agua_agricultura_industria_uso_domestico', 'subsubsubthemes'],

    // Mitigação e Adaptação às Mudanças Climáticas
    '5.3.1': ['reducao_emissoes_gases_efeito_estufa_atraves_politicas_eficiencia_energetica_uso_energias_renovaveis', 'subsubsubthemes'],
    '5.3.2': ['Sensibilizacao_educacao_comunidade_sobre_importancia_preservacao_ambiental_acoes_individuais_mitigar_aqueci_global', 'subsubsubthemes'],

    // Gestão de Resíduos Sólidos
    '5.4.1': ['implantacao_sistemas_coleta_seletiva_reciclagem_residuos_solidos', 'subsubsubthemes'],
    '5.4.2': ['estimulo_reducao_plasticos_materiais_descartaveis', 'subsubsubthemes'],
    '5.4.3': ['promocao_campanhas_conscientizacao_sobre_correta_disposicao_residuos_praticas_compostagem', 'subsubsubthemes'],

    /////// -------- ESPORTE E LAZER -------- ///////////q
    // Infraestrutura Esportiva
    '6.1.1': ['construcao_adequacao_espacos_publicos_pratica_esportiva_quadras_poliesportivas_campos_futebol_pistas_atletismo', 'subsubsubthemes'],
    '6.1.2': ['manutencao_ampliacao_ginasios_centros_esportivos_municipais', 'subsubsubthemes'],
    '6.1.3': ['acesso_facilitado_equipamentos_esportivos__todas_comunidades', 'subsubsubthemes'],

    // Programas de Incentivo ao Esporte
    '6.2.1': ['criacao_programas_iniciacao_esportiva_criancas_adolescentes_escolas_comunidades', 'subsubsubthemes'],
    '6.2.2': ['apoio_atletas_locais_equipes_esportivas_atraves_bolsas_estudo_treinamento_participacao_competicoes', 'subsubsubthemes'],
    '6.2.3': ['realizacao_eventos_esportivos_torneios_municipais_promover_pratica_esportiva_revelar_talentos_locais', 'subsubsubthemes'],

    // Promoção da Atividade Física e Saúde
    '6.3.1': ['estimulo_pratica_regular_atividades_fisicas_todas_faixas_etarias_programas_ginastica_caminhadas_ciclismo', 'subsubsubthemes'],
    '6.3.2': ['parcerias_instituicoes_de_saude_oferecer_atividades_fisicas_orientadas_grupos_especificos_idosos_pessoas_doencas_cronicas', 'subsubsubthemes'],
    '6.3.3': ['campanhas_conscientizacao_sobre_beneficios_atividade_fisica_saude_qualidade_de_vida', 'subsubsubthemes'],

    // Lazer e Recreação
    '6.4.1': ['criacao_espacos_convivencia_lazer_pracas_parques_areas_verdes', 'subsubsubthemes'],
    '6.4.2': ['instalacao_equipamentos_recreativos_entretenimento_criancas_jovens_adultos_e_idosos', 'subsubsubthemes'],
    '6.4.3': ['realizacao_eventos_culturais_festivais_feiras_artesanato_promover_lazer_integracao_comunitaria', 'subsubsubthemes'],

    // Acessibilidade e Inclusão
    '6.5.1': ['garantia_acessibilidade_espacos_eventos_esportivos_pessoas_deficiencia', 'subsubsubthemes'],
    '6.5.2': ['adocao_politicas_inclusivas_incentivem_participacao_todos_segmentos_sociedade_independentemente_idade_genero_condicao_socioeconomica', 'subsubsubthemes'],
    '6.5.3': ['promocao_atividades_esportivas_adaptadas_paralimpicas_visando_inclusao_valorizacao_diversidade', 'subsubsubthemes'],

    ////////// ------ *ASSISTÊNCIA E DESENVOLVIMENTO SOCIAL ------ ///////////////
    // Assistência Social e Proteção à Vulnerabilidade
    '7.1.1': ['ampliacao_fortalecimento_programas_assistencia_social_bolsa_familia_benefício_prestacao_continuada_BPC', 'subsubsubthemes'],
    '7.1.2': ['implementacao_politicas_combate_pobreza_desigualdade_social', 'subsubsubthemes'],
    '7.1.3': ['criacao_redes_protecao_apoio_grupos_vulneraveis_criancas_idosos_pessoas_deficiencia_mulheres_situacao_violencia', 'subsubsubthemes'],

    // SEGURANÇA ALIMENTAR E NUTRICIONAL
    '7.2.1': ['incentivo_producao_local_alimentos_meio_agricultura_familiar_práticas_agricolas_sustentaveis', 'subsubsubthemes'],
    '7.2.2': ['estimulo_diversificacao_producao_organica_incluindo_cultivos_frutas_hortalicas_cereais_leguminosas_criacao_animais', 'subsubsubthemes'],
    '7.2.3': ['promocao_programas_distribuicao_alimentos_cestas_vouchers_alimen_restaur_populares_garantir_seguranca_alimentar_familias_situacao_vulnera_social', 'subsubsubthemes'],
    '7.2.4': ['apoio_iniciativas_economia_solidaria_geracao_renda_hortas_comunitarias_coop_alimentos_bancos_alimentos', 'subsubsubthemes'],
    '7.2.5': ['desenvolvimento_programas_educacao_alimentar_nutric_escolas_unidades_saude_comuni_visando_promover_hábitos_alimen_saudaveis_prevenir_desnutricao_obesidade', 'subsubsubthemes'],
    '7.2.6': ['realizacao_campanhas_conscien_sobre_importancia_aliment_balanceada_incluindo_consumo_frutas_verduras_legumes_proteinas_reducao_consumo_alimentos_ultraproc', 'subsubsubthemes'],

    // Inclusão Produtiva e Geração de Emprego e Renda
    '7.3.1': ['implementacao_programas_capacitacao_profissional_qualificacao_mao_obra_local', 'subsubsubthemes'],
    '7.3.2': ['estimulo_empreendedorismo_apoio_criação_fortalecimento_pequenos_negocios', 'subsubsubthemes'],
    '7.3.3': ['promocao_parcerias_com_setor_privado_geração_emprego_renda_especialmente_jovens_desempregados', 'subsubsubthemes'],

    // Apoio à Família e Fortalecimento de Vínculos
    '7.4.1': ['pesenvolvimento_programas_atividades_fortalecam_vinculos_familiares_comunitarios', 'subsubsubthemes'],
    '7.4.2': ['promocao_acoes_educação_parental_apoio_psicossocial_familias', 'subsubsubthemes'],
    '7.4.3': ['criacao_espacos_convivencia_lazer_todas_faixas_etarias', 'subsubsubthemes'],

    // Políticas de Promoção da Igualdade e Diversidade7
    '7.5.1': ['implementacao_politicas_afirmativas_combatam_discriminacao_promovam_igualdade_genero_raca_orientacao_sexual', 'subsubsubthemes'],
    '7.5.2': ['realizacao_campanhas_conscientizacao_educacao_para_respeito_diversidade_direitos_humanos', 'subsubsubthemes'],
    '7.5.3': ['incentivo_participacao_represent_grupos_marginalizados_vida_politica_social_comunidade', 'subsubsubthemes'],

    ///////// -------- PESCA --------- //////////
    // Gestão Sustentável dos Recursos Pesqueiros
    '8.1.1': ['implementacao_politicas_manejo_pesqueiro_baseadas_estudos_cientificos_participacao_comunidades_locais', 'subsubsubthemes'],
    '8.1.2': ['estabelecimento_periodos_defeso_tamanhos_minimos_captura_proteger_especies_ameacadas_garantir_reproducao_peixes', 'subsubsubthemes'],

    // Infraestrutura e Apoio aos Pescadores
    '8.2.1': ['implantacao_centros_beneficiamento_pescado_cooperativas_agregar_valor_producao_melhorar_comercializacao', 'subsubsubthemes'],
    '8.2.2': ['oferta_assistencia_tecnica_capacitacao_pescadores_visando_aprimoramento_tecnicas_pesca_manejo_recursos', 'subsubsubthemes'],

    // Desenvolvimento da Piscicultura
    '8.3.1': ['estimulo_criacao_peixes_cativeiro_cultivo_especies_nativas_exoticas_interesse_comercial', 'subsubsubthemes'],
    '8.3.2': ['apoio_construcao_viveiros_tanques_producao_pescado_escala_comercial_familiar', 'subsubsubthemes'],
    '8.3.3': ['promocao_incentivos_fiscais_desenvolv_piscicultura_regiao', 'subsubsubthemes'],

    ///// ------- DESENVOLVIMENTO ECONÔMICO -------- /////
    // Diversificação da Economia Local
    '9.1.1': ['estimulo_desenvolvimento_diferentes_setores_economicos_agricultura_pecuaria_industria_comercio_servicos', 'subsubsubthemes'],
    '9.1.2': ['promocao_cadeias_produtivas_locais_arranjos_produtivos_agreguem_valor_producao_regional', 'subsubsubthemes'],
    '9.1.3': ['incentivo_criacao_fortalecimento_micro_pequenas_empresas_gerando_emprego_renda_diversificada', 'subsubsubthemes'],
    '9.1.4': ['implementacao_politicas_atracao_investimentos_incentivos_fiscais_facilidades_abertura_regularizacao_empresas', 'subsubsubthemes'],

    // Atração de Investimentos e Empreendedorismo
    '9.2.1': ['implementação_políticas_atração_investimentos_incentivos_fiscais_facilidades_abertura_regularização_empresas', 'subsubsubthemes'],
    '9.2.2': ['estimulo_empreendedorismo_inovação_apoio_startups_incubadoras_negócios_locais', 'subsubsubthemes'],
    '9.2.3': ['promocao_parcerias_público_privadas_desenvolvimento_projetos_infraestrutura_serviços', 'subsubsubthemes'],

    // Qualificação da Mão de Obra e Educação Profissional
    '9.3.1': ['investimento_programas_capacitação_profissional_educação_técnica_voltados_demandas_mercado_trabalho_local', 'subsubsubthemes'],
    '9.3.2': ['parcerias_instituições_ensino_empresas_oferta_cursos_estágios_programas_aprendizagem', 'subsubsubthemes'],
    '9.3.3': ['promover_formação_qualificação_profissional_atendam_necessidades_específicas_município_região', 'subsubsubthemes'],

    // Inclusão Digital e Tecnológica
    '9.4.1': ['expansão_acesso_internet_alta_velocidade_tecnologias_digitais_todas_áreas_municipio', 'subsubsubthemes'],
    '9.4.2': ['promoção_programas_inclusão_digital_capacitação_tecnológica_para_população_visando_reduzir_exclusão_digital_promover_inclusão_social', 'subsubsubthemes'],

    ////////// ------- *TURISMO* ------- //////////
    // Promoção e Marketing Turístico
    '10.1.1': ['desenvolvimento_campanhas_marketing_promover_atrativos_turísticos_região_belezas_naturais_patrimônio_cultural_eventos_locais', 'subsubsubthemes'],
    '10.1.2': ['participação_feiras_turismo_eventos_promocionais_atrair_visitantes_investidores', 'subsubsubthemes'],
    '10.1.3': ['criação_materiais_divulgação_guias_turísticos_mapas_websites_informativos_sobre_destinos_turísticos_Sobradinho_BA', 'subsubsubthemes'],

    // Infraestrutura Turística
    '10.2.1': ['desenvolvimento_estruturas_apoio_turismo_centros_informações_turísticas_estacionamentos_banheiros_públicos_áreas_lazer', 'subsubsubthemes'],

    // Roteiros e Circuitos Turísticos
    '10.3.1': ['criação_roteiros_turísticos_temáticos_explorem_diferentes_aspectos_cultura_história_natureza_gastronomia_região', 'subsubsubthemes'],
    '10.3.2': ['desenvolvimento_circuitos_integrados_incluem_diversos_pontos_interesse_turístico_facilitando_visita_ampliando_experiência_turista', 'subsubsubthemes'],
    '10.3.3': ['parcerias_operadoras_turismo_guias_locais_oferecer_passeios_guiados_atividades_turísticas_diversificadas', 'subsubsubthemes'],

    // Turismo Sustentável e Responsável
    '10.4.1': ['promoção_práticas_turismo_sustentável_respeitem_meio_ambiente_cultura_local_comunidades_residentes', 'subsubsubthemes'],
    '10.4.2': ['implementação_medidas_gestão_ambiental_preservação_recursos_naturais_trilhas_ecológicas_observação_fauna_flora_atividades_educação_ambiental', 'subsubsubthemes'],
    '10.4.3': ['estímulo_turismo_base_comunitária_valorizando_participação_comunidades_locais_oferta_serviços_turísticos_geração_renda', 'subsubsubthemes'],

    // Segurança e Qualidade de Atendimento
    '10.5.1': ['investimento_medidas_segurança_pública_garantir_tranquilidade_integridade_turistas_durante_estadia_região', 'subsubsubthemes'],
    '10.5.2': ['capacitação_qualificação_profissionais_atuam_setor_turístico_guias_recepcionistas_garçons_motoristas_visando_oferecer_serviço_qualidade_excelência_visitante', 'subsubsubthemes'],
    '10.5.3': ['monitoramento_avaliação_contínua_satisfação_turista_buscando_identificar_oportunidades_melhoria_aprimoramento_serviços_oferecidos', 'subsubsubthemes'],

    // Desenvolvimento do Turismo
    '10.6.1': ['promoção_divulgação_atrativos_turísticos_região_belezas_naturais_patrimônio_histórico_cultural_eventos_culturais_esportivos', 'subsubsubthemes'],
    '10.6.2': ['incentivo_infraestrutura_turística_transporte_serviços_apoio_turista', 'subsubsubthemes'],
    '10.6.3': ['incentivo_melhorias_equipamentos_turismo_município_Hoteis_restaurantes_etc', 'subsubsubthemes'],
    '10.6.4': ['fomento_turismo_sustentável_valorizando_preservação_ambiental_envolvimento_comunidades_locais', 'subsubsubthemes'],

    ////////// --------- *SAÚDE* ----------- //////////
    // Saúde Mental
    '11.1.1': ['ampliação_fortalecimento_serviços_saúde_mental_incluindo_atendimento_psicológico_psiquiátrico', 'subsubsubthemes'],
    '11.1.2': ['implementação_programas_promoção_saúde_mental_prevenção_suicídio', 'subsubsubthemes'],
    '11.1.3': ['capacitação_profissionais_saúde_identificação_manejo_transtornos_mentais_comuns', 'subsubsubthemes'],

    // Assistência Farmacêutica
    '11.2.1': ['garantia_acesso_medicamentos_essenciais_qualidade_rede_pública_saúde', 'subsubsubthemes'],
    '11.2.2': ['ampliação_programas_distribuição_medicamentos_gratuitos_como_Programa_Farmácia_Popular', 'subsubsubthemes'],

    // Tratamento Fora do Domicílio (TFD)
    '11.3.1': ['melhoria_acesso_transportes_pacientes_necessitam_tratamento_outras_cidades_estados', 'subsubsubthemes'],
    '11.3.2': ['agilidade_autorização_agendamento_consultas_exames_procedimentos_fora_domicílio', 'subsubsubthemes'],
    '11.3.3': ['manutenção_melhoria_casa_apoio_para_TFD', 'subsubsubthemes'],

    // Melhoria do Atendimento
    '11.4.1': ['capacitação_treinamento_contínuo_profissionais_saúde_visando_aprimorar_acolhimento_comunicação_atenção_paciente', 'subsubsubthemes'],
    '11.4.2': ['implantação_sistemas_gestão_qualidade_monitoramento_satisfação_usuário', 'subsubsubthemes'],
    '11.4.3': ['incentivo_humanização_atendimento_ênfase_respeito_dignidade_direitos_pacientes', 'subsubsubthemes'],
    '11.4.4': ['fortalecimento_integração_entre_diferentes_níveis_atenção_saúde_promovendo_trabalho_rede_articulação_entre_unidades_básicas_saúde_hospitais_serviços_especializados', 'subsubsubthemes'],
    '11.4.5': ['implantação_protocolos_triagem_classificação_risco_serviços_urgência_emergência_média_complexidade_visando_priorizar_casos_graves_reduzir_tempo_espera', 'subsubsubthemes'],

    // Sistema de Marcações
    '11.5.1': ['modernização_informatização_sistema_marcação_consultas_exames_visando_maior_agilidade_transparência_agendamento', 'subsubsubthemes'],
    '11.5.2': ['ampliação_canais_comunicação_marcação_consultas_incluindo_telefone_internet_aplicativos_móveis', 'subsubsubthemes'],
    '11.5.3': ['redução_tempo_espera_otimização_fluxo_pacientes_garantindo_acesso_oportuno_equitativo_serviços_saúde', 'subsubsubthemes'],

    // Atendimento Hospitalar
    '11.6.1': ['ampliação_modernização_infraestrutura_hospitalar_investimentos_equipamentos_tecnologia_médica', 'subsubsubthemes'],
    '11.6.2': ['ampliação_atendimentos_tratamentos_baixa_média_complexidade_visando_melhorar_capacidade_atendimento_situações_emergência_alta_demanda', 'subsubsubthemes'],
    '11.6.3': ['fortalecimento_rede_hospitais_serviços_urgência_emergência_foco_qualidade_segurança_atendimento_prestado_pacientes', 'subsubsubthemes'],

    // Assistência de média complexidade
    '11.7.1': ['ampliação_qualificação_rede_unidades_saúde_média_complexidade_como_Centros_Especialidades_Policlínicas_garantir_acesso_oportuno_adequado_serviços_especializados', 'subsubsubthemes'],
    '11.7.2': ['investimento_tecnologia_telemedicina_ampliar_acesso_consultas_exames_especializados_áreas_remotas_difícil_acesso_garantindo_equidade_acesso_erviços_saúde', 'subsubsubthemes'],
    '11.7.3': ['capacitação_valorização_profissionais_saúde_atuam_serviços_média_complexidade_visando_garantir_qualidade_resolutividade_atendimento_prestado_usuários_SUS', 'subsubsubthemes'],
}

exports.objFunc = objFunc
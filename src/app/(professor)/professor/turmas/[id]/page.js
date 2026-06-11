"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, UploadCloud, FileText, Sparkles, Trash2, CheckCircle2, RefreshCw, Copy, Check, Wand2, ArrowRight, Eye, BookOpen } from "lucide-react";
import Link from "next/link";

export default function DetalhesTurmaProfessor({ params }) {
  const [copied, setCopied] = useState(false);
  const [mostrarAssistente, setMostrarAssistente] = useState(false);
  const [etapaIa, setEtapaIa] = useState(1);

  // Parâmetros do Formulário
  const [tema, setTema] = useState("2ª Guerra Mundial");
  const [ano, setAno] = useState("5º Ano");
  const [materia, setMateria] = useState("História");
  const [objetivo, setObjetivo] = useState("Resumo explicativo com linguagem lúdica e 3 questões de múltipla escolha para fixação.");
  const [podeEditar, setPodeEditar] = useState(false);

  // ESTADO FUNCIONAL: Textos editáveis gerados pela IA
  const [resumoEditavel, setResumoEditavel] = useState("");
  const [questoesEditaveis, setQuestoesEditaveis] = useState([]);

  // Estado que armazena a lista de materiais da turma
  const [materiais, setMateriais] = useState([]);

  // CARREGAR DADOS: Busca os materiais já salvos no localStorage ao abrir a tela
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("materiais_turma_1");
    if (dadosSalvos) {
      setMateriais(JSON.parse(dadosSalvos));
    } else {
      // Dados iniciais caso o banco local esteja vazio
      const iniciais = [
        { id: "1", nome: "slides_aula_01_introducao.pdf", tamanho: "4.2 MB", data: "Ontem", status: "Pronto", tipo: "upload" },
      ];
      setMateriais(iniciais);
      localStorage.setItem("materiais_turma_1", JSON.stringify(iniciais));
    }
  }, []);

  const copiarCodigo = () => {
    navigator.clipboard.writeText("AWS-99X");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // FUNÇÃO DE GERAÇÃO: Simula a resposta da IA carregando os textos nos estados editáveis
  const iniciarGeracaoIa = (e) => {
    e.preventDefault();
    setEtapaIa(2); // Vai para o Loading

    setTimeout((iniciarGeracaoIa) => {
      // Injeta os textos padronizados dentro dos inputs para o professor poder alterar
      setResumoEditavel(
        "O que foi a Segunda Guerra Mundial?\n\nImagine que o mundo inteiro entrou em um grande cabo de guerra entre os anos de 1939 e 1945. Dois grandes times de países lutaram: os Aliados (como Inglaterra, Estados Unidos e o Brasil também!) e o Eixo (liderado por Alemanha e Itália).\n\nO conflito começou porque alguns governantes queriam dominar terras que não eram suas. Foi um momento muito triste, mas que ensinou a importância da paz."
      );

      setPodeEditar(false)
      
      setQuestoesEditaveis([
        { id: 1, pergunta: "1. Em qual período aconteceu a Segunda Guerra Mundial?", resposta: "b) 1939 a 1945" },
        { id: 2, pergunta: "2. O Brasil participou do conflito ao lado de qual grupo?", resposta: "a) Aliados" }
      ]);
      
      setEtapaIa(3); // Vai para o Preview
    }, 3000);
  };

  // FUNÇÃO DE PUBLICAÇÃO: Salva no estado e sincroniza direto com o localStorage
  const publicarMaterialIa = () => {
    const novoMaterial = {
      id: String(Date.now()), // ID único baseado no tempo
      nome: `Conteúdo IA - ${tema} (${ano})`,
      tamanho: "Texto Inteligente",
      data: "Agora mesmo",
      status: "Pronto",
      tipo: "ia",
      // Guardamos o conteúdo editado aqui dentro para o aluno ler depois!
      conteudoTexto: resumoEditavel,
      conteudoQuestoes: questoesEditaveis
    };

    const listaAtualizada = [novoMaterial, ...materiais];
    setMateriais(listaAtualizada);
    
    // Salva no localStorage para o Aluno conseguir ler na outra tela
    localStorage.setItem("materiais_turma_1", JSON.stringify(listaAtualizada));
    
    // Reseta o assistente
    setMostrarAssistente(false);
    setEtapaIa(1);
  };

  // FUNÇÃO DE EXCLUSÃO: Remove do estado e do localStorage
  const deletarMaterial = (id) => {
    const filtrados = materiais.filter(m => m.id !== id);
    setMateriais(filtrados);
    localStorage.setItem("materials_turma_1", JSON.stringify(filtrados));
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      
      {/* ================= INÍCIO DO CABEÇALHO ================= */}
      <div className="mb-8">
        <Link 
          href="/professor" 
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-4 w-fit"
        >
          <ArrowLeft size={16} /> Voltar para o painel
        </Link>
        
        {/* Banner Clean e Moderno */}
        <div className="relative bg-purple-600 rounded-3xl p-8 md:p-10 overflow-hidden shadow-sm">

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            {/* Informações da Matéria */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {materia} • {ano}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">Sala de Aula Virtual</h1>
              <p className="text-blue-100 text-sm md:text-base font-medium leading-relaxed max-w-xl">
                Gerencie arquivos didáticos e crie planos de estudos automáticos com o poder da Inteligência Artificial.
              </p>
            </div>
            
            {/* Card de Código Flutuante (Fundo Branco Padrão) */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between gap-5 min-w-[220px] shadow-lg border border-blue-100">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Código de Acesso</p>
                <p className="text-2xl font-mono font-bold text-slate-800">AWS-99X</p>
              </div>
              <button 
                onClick={copiarCodigo}
                title="Copiar código da turma"
                className={`p-3 rounded-xl transition-all border ${
                  copied 
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                    : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>

          </div>
        </div>
      </div>
      {/* ================= FIM DO CABEÇALHO ================= */}

      {/* Se o assistente estiver fechado, mostra a tela padrão de gerenciamento */}
      {!mostrarAssistente ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Zona de Upload Clássica e Histórico */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText size={18} className="text-blue-600" /> Repositório da Turma
                </h2>
                {/* BOTÃO QUE ATIVA O ASSISTENTE GENIAL */}
                <button 
                  onClick={() => setMostrarAssistente(true)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-red text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-blue-500/10 transition-all active:scale-95"
                >
                  <Sparkles size={14} /> Criar Material com IA
                </button>
              </div>
              
              <div 
                className="border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center border-slate-200 hover:border-blue-400 hover:bg-slate-50/50 cursor-pointer transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <UploadCloud size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">Arraste novos PDFs de apoio para a pasta</h3>
                <p className="text-xs text-slate-400 mt-1">O aluno terá acesso direto ao arquivo original</p>
              </div>
            </div>

            {/* Listagem de Materiais Disponibilizados */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-wider">Conteúdos Publicados</h3>
              <div className="divide-y divide-slate-100">
                {materiais.map((mat) => (
                  <div key={mat.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${mat.tipo === 'ia' ? 'bg-purple-50 text-purple-600' : 'bg-rose-50 text-rose-600'}`}>
                        {mat.tipo === 'ia' ? <Sparkles size={20} /> : <FileText size={20} />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 line-clamp-1">{mat.nome}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{mat.tamanho} • Disponibilizado {mat.data}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <CheckCircle2 size={12} /> {mat.status}
                      </span>
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra Lateral Direita de Métricas */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl shadow-sm border border-slate-800 h-fit">
            <h3 className="font-bold text-md mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" /> Relatório de Absorção
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Seus alunos realizam leituras focadas. A IA mapeou que resumos estruturados aumentaram o tempo de fixação desta sala em 40%.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">18</p>
                <p className="text-[10px] text-slate-400 uppercase mt-0.5 font-medium">Alunos Ativos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">87%</p>
                <p className="text-[10px] text-slate-400 uppercase mt-0.5 font-medium">Engajamento</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* WORKFLOW DO ASSISTENTE DE INTELEGENCIA ARTIFICIAL ATIVO */
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header do Assistente */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Wand2 size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Gerador de Conteúdo Didático Avançado</h2>
                <p className="text-xs text-slate-500 mt-0.5">Alimentado por IA para simplificar e engajar sua turma.</p>
              </div>
            </div>
            <button 
              onClick={() => { setMostrarAssistente(false); setEtapaIa(1); }}
              className="text-slate-400 hover:text-slate-600 text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all"
            >
              Cancelar
            </button>
          </div>

          {/* ETAPA 1: CONFIGURAÇÃO DOS PARÂMETROS */}
          {etapaIa === 1 && (
            <form onSubmit={iniciarGeracaoIa} className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Matéria</label>
                  <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nível Escolar</label>
                  <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tema da Aula</label>
                  <input type="text" value={tema} onChange={(e) => setTema(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Objetivo Pedagógico / Instruções da IA</label>
                <textarea rows={3} value={objetivo} onChange={(e) => setObjetivo(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none" />
              </div>

              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-blue-600/10 active:scale-95">
                Gerar Rascunho com IA <ArrowRight size={16} />
              </button>
            </form>
          )}

          {/* ETAPA 2: LOADING DA INTELIGÊNCIA ARTIFICIAL */}
          {etapaIa === 2 && (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-pulse">
              <RefreshCw size={44} className="text-blue-600 animate-spin mb-4" />
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Sparkles size={18} className="text-blue-500 animate-bounce" /> 
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-sm">
                A IA está adaptando a linguagem histórica para o nível cognitivo do <strong>{ano}</strong>, criando analogias claras e formulando questionários.
              </p>
            </div>
          )}

          {/* ETAPA 3: PREVIEW DO MATERIAL COM TRAVA DE EDIÇÃO */}
          {etapaIa === 3 && (
            <div className="space-y-6">
              
              {/* Barra de Controle de Edição */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="text-xs font-semibold text-slate-600">
                  {podeEditar ? (
                    <span className="text-amber-600 flex items-center gap-1.5">
                      ⚠️ Modo de edição ativado. Altere os campos abaixo.
                    </span>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-1.5">
                      🔒 O conteúdo atual está bloqueado para alterações.
                    </span>
                  )}
                </div>

                {/* O BOTÃO MÁGICO DE PERMISSÃO */}
                <button
                  onClick={() => setPodeEditar(!podeEditar)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 ${
                    podeEditar
                      ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  {podeEditar ? "Travar Campos" : "Permitir Edição"}
                </button>
              </div>

              {/* Grid de Conteúdo */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                
                {/* Lado Esquerdo: Área de Texto */}
                <div className="p-6 bg-white border-r border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 pb-2 flex items-center gap-2 border-b border-slate-100">
                    <BookOpen size={16} className="text-blue-600" /> Resumo da IA
                  </h3>
                  <textarea
                    value={resumoEditavel}
                    onChange={(e) => setResumoEditavel(e.target.value)}
                    rows={12}
                    readOnly={!podeEditar} // Bloqueia o campo dinamicamente
                    className={`w-full p-4 border rounded-xl text-sm leading-relaxed transition-all outline-none resize-none ${
                      !podeEditar 
                        ? "bg-slate-50 text-slate-500 border-slate-100 cursor-not-allowed" 
                        : "bg-white text-slate-700 border-blue-500 ring-1 ring-blue-500"
                    }`}
                  />
                </div>

                {/* Lado Direito: Questionário Modernizado e Premium */}
                <div className="p-6 bg-slate-50 space-y-4 max-h-[480px] overflow-y-auto">
                  <h3 className="text-sm font-extrabold text-slate-900 pb-2 flex items-center gap-2 border-b border-slate-200 sticky top-0 bg-slate-50 z-10">
                    <Sparkles size={16} className="text-purple-600" /> Exercícios de Fixação Automatizados
                  </h3>
                  
                  <div className="space-y-5 pr-1">
                    {questoesEditaveis.map((q, index) => (
                      <div 
                        key={q.id} 
                        className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4 relative overflow-hidden transition-all hover:border-purple-300 group"
                      >
                        {/* Linha decorativa roxa lateral para indicar conteúdo de IA */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />

                        {/* Campo da Pergunta */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                            Questão {index + 1}
                          </label>
                          <input
                            type="text"
                            value={q.pergunta}
                            readOnly={!podeEditar}
                            onChange={(e) => {
                              const novas = [...questoesEditaveis];
                              novas[index].pergunta = e.target.value;
                              setQuestoesEditaveis(novas);
                            }}
                            className={`w-full rounded-xl p-2.5 text-sm font-bold outline-none transition-all ${
                              !podeEditar 
                                ? "bg-slate-50 text-slate-700 border border-transparent cursor-not-allowed" 
                                : "bg-white text-slate-900 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
                            }`}
                          />
                        </div>

                        {/* Campo da Resposta Correta / Gabarito */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Gabarito Oficial
                          </label>
                          <input
                            type="text"
                            value={q.resposta}
                            readOnly={!podeEditar}
                            onChange={(e) => {
                              const novas = [...questoesEditaveis];
                              novas[index].resposta = e.target.value;
                              setQuestoesEditaveis(novas);
                            }}
                            className={`w-full rounded-xl p-2.5 text-xs font-semibold outline-none transition-all ${
                              !podeEditar 
                                ? "bg-emerald-50/50 text-emerald-700 border border-transparent cursor-not-allowed" 
                                : "bg-white text-emerald-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                            }`}
                          />
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Botões de Ação Final */}
              <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
                <button onClick={() => setEtapaIa(1)} className="px-5 py-3 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
                  Refinar Parâmetros
                </button>
                <button onClick={publicarMaterialIa} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-emerald-600/10 active:scale-95">
                  <CheckCircle2 size={18} /> Confirmar e Publicar
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
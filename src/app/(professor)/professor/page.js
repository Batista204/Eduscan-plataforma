"use client";

import { useState } from "react";
import { Users, FileText, Plus, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
// Import ajustado para a nova árvore de pastas (voltando 3 níveis)
// Se você ainda não tiver o ModalCriarTurma, pode deixar essa linha comentada temporariamente
// import ModalCriarTurma from "../../../components/ModalCriarTurma";

export default function DashboardProfessor() {
  const [modalAberto, setModalAberto] = useState(false);

  // Dados simulados do ambiente do Professor
  const turmasGerenciadas = [
    { id: "1", nome: "Computação em Nuvem", alunos: 32, código: "AWS-35X", cor: "bg-blue-600" },
    { id: "2", nome: "Dev Web II", alunos: 28, código: "WEB-22L", cor: "bg-emerald-600" },
    { id: "3", nome: "História", alunos: 40, código: " AWS-99X", cor: "bg-purple-600" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Premium do Painel */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2">
            <GraduationCap size={14} /> Painel do Docente
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Visão Geral do Professor</h1>
          <p className="text-slate-500 mt-1">Gerencie suas salas, emita códigos e acompanhe os materiais de IA.</p>
        </div>
        
        <button 
          onClick={() => setModalAberto(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all shadow-md shadow-blue-600/10 active:scale-95"
        >
          <Plus size={20} /> Nova Turma
        </button>
      </header>

      {/* Cards de Estatísticas do Docente */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Alunos Matriculados</p>
            <h3 className="text-2xl font-bold text-slate-990 mt-1">100</h3>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Materiais Cadastrados</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">3</h3>
          </div>
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Aulas Processadas por IA</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">14 PDFs</h3>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <FileText size={24} />
          </div>
        </div>
      </div>

      {/* Grid de Disciplinas */}
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-6">Minhas Disciplinas em Andamento</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {turmasGerenciadas.map((turma) => (
            <div 
              key={turma.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Topo Temático com o Código Visível */}
              <div className={`${turma.cor} p-5 text-white`}>
                <span className="text-xs font-mono bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold tracking-wider uppercase">
                  CÓDIGO: {turma.código}
                </span>
                <h3 className="text-lg font-bold mt-4 line-clamp-1">{turma.nome}</h3>
              </div>

              {/* Corpo com Informações Acadêmicas */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Users size={16} className="text-slate-400" /> {turma.alunos} alunos ativos
                  </span>
                </div>

                {/* Botão de Entrada para Gestão de Materiais */}
                <Link 
                  href={`/professor/turmas/${turma.id}`}
                  className="w-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-100 rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 transition-all group"
                >
                  Gerenciar Materiais 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Renderização condicional do Modal (se o import estiver ativo) */}
      {/* modalAberto && <ModalCriarTurma fecharModal={() => setModalAberto(false)} /> */}
    </div>
  );
}
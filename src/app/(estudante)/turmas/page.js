import Link from "next/link";
import { Search, Filter } from "lucide-react";
import CardTurma from "../../../components/CardTurma";

export default function ListaTurmas() {
  // Simulação das turmas do aluno
  const turmas = [
    { id: "1", nome: "Computação em Nuvem", prof: "Dr. Silva", cor: "bg-blue-600" },
    { id: "2", nome: "Dev Web II", prof: "Amanda M.", cor: "bg-emerald-600" },
    { id: "3", nome: "Sistemas Operacionais", prof: "Carlos J.", cor: "bg-purple-600" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Cabeçalho da Página - Simplificado pois o botão "+" agora está na Navbar */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Minhas Turmas</h1>
        <p className="text-slate-500 mt-1">Gerencie suas disciplinas e materiais de estudo.</p>
      </header>

      {/* Barra de Busca e Filtros */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nome ou professor..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
          <Filter size={20} />
        </button>
      </div>

      {/* Grid de Turmas - Apenas o conteúdo que rola */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {turmas.map((turma) => (
          <Link 
            href={`/turmas/${turma.id}`} 
            key={turma.id} 
            className="block group transition-transform active:scale-95"
          >
            <CardTurma 
              nome={turma.nome} 
              professor={turma.prof} 
              cor={turma.cor} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
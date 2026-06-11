"use client";

import { useState, useMemo } from "react";
import { Search, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Resumo, mockResumos } from "../../../types/resumo";
import ResumoCard from "../../../components/resumos/ResumoCard";

export default function MeusResumosPage() {
  const [resumos, setResumos] = useState<Resumo[]>(mockResumos);
  const [busca, setBusca] = useState("");
  const [filtroMateria, setFiltroMateria] = useState<string>("Todas");
  
  const materias = ["Todas", ...Array.from(new Set(resumos.map(r => r.materia)))];

  const resumosFiltrados = useMemo(() => {
    return resumos.filter(resumo => {
      const matchBusca = resumo.titulo.toLowerCase().includes(busca.toLowerCase()) || 
                         resumo.tags.some(t => t.toLowerCase().includes(busca.toLowerCase()));
      const matchMateria = filtroMateria === "Todas" || resumo.materia === filtroMateria;
      return matchBusca && matchMateria;
    });
  }, [resumos, busca, filtroMateria]);

  const toggleFavorito = (id: string) => {
    setResumos(prev => prev.map(r => r.id === id ? { ...r, favorito: !r.favorito } : r));
  };

  const deletarResumo = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este resumo?")) {
      setResumos(prev => prev.filter(r => r.id !== id));
    }
  };

  return (
    <div className="flex-1 p-2 max-w-7xl mx-auto w-full">
      
      {/* Header - Texto Escuro e Nitido */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Meus Resumos</h1>
          <p className="text-slate-500 mt-2 text-sm">
            Gerencie, revise e organize seus materiais de estudo gerados pela IA.
          </p>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <Plus size={20} /> Novo Resumo
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Buscar por título, conteúdo ou #tags..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-800 shadow-sm"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
          {materias.map(materia => (
            <button
              key={materia}
              onClick={() => setFiltroMateria(materia)}
              className={`px-5 py-3 rounded-xl whitespace-nowrap text-sm font-semibold transition-all border ${
                filtroMateria === materia 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {materia}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {resumosFiltrados.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          <AnimatePresence mode="popLayout">
            {resumosFiltrados.map((resumo) => (
              <ResumoCard 
                key={resumo.id} 
                resumo={resumo} 
                onToggleFavorito={toggleFavorito}
                onDelete={deletarResumo}
                onEdit={(r) => console.log(r)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-white shadow-sm">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <Search className="text-slate-400" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhum resumo encontrado</h3>
          <p className="text-slate-500 max-w-md mx-auto mb-6">Tente ajustar os filtros ou a sua busca.</p>
        </div>
      )}
    </div>
  );
}
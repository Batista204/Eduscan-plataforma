import { motion } from 'framer-motion';
import { Star, Clock, FileText, Trash2, Edit2 } from 'lucide-react';
import { Resumo } from '../../types/resumo';

interface ResumoCardProps {
  resumo: Resumo;
  onToggleFavorito: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (resumo: Resumo) => void;
}

const colorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  rose: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function ResumoCard({ resumo, onToggleFavorito, onDelete, onEdit }: ResumoCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer flex flex-col h-full relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${colorMap[resumo.cor].split(' ')[0]}`} />

      <div className="flex justify-between items-start mb-4 pt-2">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${colorMap[resumo.cor]}`}>
          {resumo.materia}
        </span>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit(resumo); }}
            className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(resumo.id); }}
            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
          >
            <Trash2 size={16} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleFavorito(resumo.id); }}
            className={`p-1.5 rounded-lg transition-colors ${resumo.favorito ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'}`}
          >
            <Star size={18} fill={resumo.favorito ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
        {resumo.titulo}
      </h3>
      
      <p className="text-sm text-slate-500 flex-1 line-clamp-3 mb-4 leading-relaxed">
        {resumo.conteudo}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {resumo.tags.map(tag => (
          <span key={tag} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
        <span className="flex items-center gap-1.5 font-medium">
          <Clock size={14} /> {resumo.tempoLeitura} min leitura
        </span>
        <span className="flex items-center gap-1.5 font-medium">
          <FileText size={14} /> {resumo.palavras} pal.
        </span>
      </div>
    </motion.div>
  );
}
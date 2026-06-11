import { X, Hash } from "lucide-react";

export default function ModalParticiparTurma({ fecharModal }) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Cabeçalho */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Participar de uma turma</h3>
          <button onClick={fecharModal} className="text-slate-400 hover:text-red-500 transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Corpo */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-500 leading-relaxed">
            Peça o código da turma ao seu professor e insira-o abaixo para ter acesso aos materiais.
          </p>
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Ex: XG78-LL9" 
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none uppercase font-mono tracking-wider"
            />
          </div>
        </div>

        {/* Rodapé */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button onClick={fecharModal} className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-200 rounded-lg transition-colors">
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
            Participar
          </button>
        </div>

      </div>
    </div>
  );
}
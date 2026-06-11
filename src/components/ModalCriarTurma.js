import { X } from "lucide-react";

export default function ModalCriarTurma({ fecharModal }) {
  return (
    // Fundo escuro desfocado (Overlay)
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      
      {/* Caixa do Modal */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Cabeçalho do Modal */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Nova Turma</h3>
          <button 
            onClick={fecharModal}
            className="text-slate-400 hover:text-red-500 transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Corpo do Modal - Formulário */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome da Disciplina</label>
            <input 
              type="text" 
              placeholder="Ex: Computação em Nuvem" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Professor</label>
            <input 
              type="text" 
              placeholder="Ex: Dr. Silva" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Rodapé do Modal - Botões */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button 
            onClick={fecharModal}
            className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-200 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition-colors">
            Salvar Turma
          </button>
        </div>

      </div>
    </div>
  );
}
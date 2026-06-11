export default function CardTurma({ nome, professor, cor }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      
      {/* Cabeçalho Colorido Dinâmico */}
      <div className={`${cor} p-6 text-white`}>
        <h3 className="text-xl font-bold mb-1">{nome}</h3>
        <p className="text-sm opacity-90">{professor}</p>
      </div>
      
      {/* Corpo do Card */}
      <div className="p-6">
        <p className="text-xs font-semibold text-slate-500 uppercase mb-4">
          Próxima Tarefa: Resumo de Aula
        </p>
        <hr className="border-slate-100 mb-4" />
        <div className="flex justify-end">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Ver atividades
          </button>
        </div>
      </div>

    </div>
  );
}

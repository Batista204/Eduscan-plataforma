import { BookOpen, LayoutDashboard, FileText, Settings, Plus, GraduationCap } from "lucide-react";
import CardTurma from "../../components/CardTurma";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h3 className="text-3xl font-bold text-slate-900">Boa tarde, Max! 👋</h3>
        <p className="text-slate-500 mt-1">Aqui está o que está acontecendo nas suas turmas hoje.</p>
      </header>

      {/* Grid de Turmas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardTurma 
          nome="Computação em Nuvem" 
          professor="Dr. Silva" 
          cor="bg-blue-600" 
        />
        <CardTurma 
          nome="Dev Web II" 
          professor="Amanda M." 
          cor="bg-emerald-600" 
        />
        {/* O Wildcard: Card de Status de IA */}
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-300 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
            <BookOpen className="text-slate-400 group-hover:text-blue-500" />
          </div>
          <p className="text-sm font-medium text-slate-600 group-hover:text-blue-600">Adicionar Nova Disciplina</p>
        </div>
      </div>

      {/* Seção de Resumos Recentes (Foco no EduScan AI) */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-slate-900">Resumos Gerados por IA</h4>
          <button className="text-sm text-blue-600 font-medium hover:underline">Ver todos</button>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Documento</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Turma</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Data</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-700">Resumo_Aula_01.pdf</td>
                <td className="px-6 py-4 text-sm text-slate-500">Cloud Computing</td>
                <td className="px-6 py-4 text-sm text-slate-500">08/05/2026</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Abrir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
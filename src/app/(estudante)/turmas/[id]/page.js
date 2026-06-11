import Link from "next/link";
import { FileText, Upload, ChevronLeft, Calendar, User, ArrowRight } from "lucide-react";

// O Next.js passa automaticamente o "id" da URL para esta função
export default function PaginaInternaTurma({ params }) {
  const { id } = params; 

  // Em um sistema real, usaríamos o 'id' para buscar o nome da turma no banco de dados
  const turmaNome = "Computação em Nuvem"; 

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Navegação: Botão Voltar */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/turmas" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <ChevronLeft size={16} /> Voltar para a lista de turmas
          </Link>
        </nav>

        {/* Cabeçalho de Identificação da Disciplina */}
        <header className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                ID da Turma: {id}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 mt-3">{turmaNome}</h1>
              <div className="flex items-center gap-4 mt-2 text-slate-500">
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  <User size={16} className="text-blue-500" /> Dr. Silva
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Calendar size={16} /> Semestre Atual
                </span>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all shadow-md active:scale-95">
              <Upload size={20} /> Enviar PDF para Resumo
            </button>
          </div>
        </header>

        {/* Área de Conteúdo Central */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText className="text-blue-600" size={22} /> 
            Meus Materiais Gerados
          </h2>
          
          <div className="grid gap-3">
            {/* Lista simulada de resumos já processados pela IA */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center justify-between hover:border-blue-300 transition-all group cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                  PDF
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    Introdução aos Serviços AWS (S3 e EC2)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Processado em 08/05/2026 • 5 minutos de leitura</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
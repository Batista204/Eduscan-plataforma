import Link from 'next/link';
import { LayoutDashboard, GraduationCap, FileText, ArrowLeftRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">EduScan AI</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {/* Link para o Dashboard (Home) */}
        <Link href="/" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-slate-700 rounded-lg transition-colors group">
          <LayoutDashboard size={20} className="group-hover:text-blue-600" /> 
          <span className="font-medium">Dashboard</span>
        </Link>
        
        {/* Link para a lista de Turmas (Plural) */}
        <Link href="/turmas" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-slate-700 rounded-lg transition-colors group">
          <GraduationCap size={20} className="group-hover:text-blue-600" /> 
          <span className="font-medium">Minhas Turmas</span>
        </Link>
        
        {/* Link para os Resumos Gerados */}
        <Link href="/resumos" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-slate-700 rounded-lg transition-colors group">
          <FileText size={20} className="group-hover:text-blue-600" /> 
          <span className="font-medium">Meus Resumos</span>
        </Link>
      </nav>

      {/* Área de Configurações no rodapé */}
      <div className="p-4 border-t border-slate-200">
        <Link href="/professor" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all border border-slate-200 bg-white shadow-sm group">
          <ArrowLeftRight size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors"/>
          Painel do Professor
        </Link>
      </div>
    </aside>

    
  );

}


import SidebarProfessor from "../../components/SidebarProfessor";

export default function ProfessorLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Sidebar ativa do Professor */}
      <SidebarProfessor />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Conteúdo das páginas do Professor */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}
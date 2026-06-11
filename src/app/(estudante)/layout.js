import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function EstudanteLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Sidebar do Aluno */}
      <Sidebar />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Navbar do Aluno */}
        <Navbar />
        
        {/* Conteúdo das páginas do Aluno */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
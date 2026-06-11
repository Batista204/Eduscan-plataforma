"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Users, LayoutDashboard, ArrowLeftRight } from "lucide-react";

export default function SidebarProfessor() {
  const pathname = usePathname();

  const links = [
    { href: "/professor", label: "Dashboard", icon: LayoutDashboard },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col h-full border-r border-slate-800">
      {/* Logo com Badge de Professor */}
      <div className="p-6 border-b border-slate-800 flex flex-col gap-1">
        <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          EduScan <span className="text-blue-400">AI</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded w-fit">
          Painel do Docente
        </span>
      </div>

      {/* Links de Navegação */}
      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              }`}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Botão de Alternar Perfil (O pulo do gato para a apresentação) */}
      <div className="p-4 border-t border-slate-800">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl py-3 text-xs font-bold transition-all border border-slate-700 active:scale-95 group"
        >
          <ArrowLeftRight size={14} className="text-blue-400 transform group-hover:rotate-180 transition-transform duration-300" />
          Mudar para Visão Aluno
        </Link>
      </div>
    </aside>
  );
}
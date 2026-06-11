"use client";

import { useState } from "react";
import { Plus, Bell, Search } from "lucide-react";
import ModalCriarTurma from "./ModalCriarTurma";
import ModalParticiparTurma from "./ModalParticiparTurma"; // Novo Import

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalCriarAberto, setModalCriarAberto] = useState(false);
  const [modalParticiparAberto, setModalParticiparAberto] = useState(false); // Novo Estado

  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 shadow-sm relative">
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar turmas, resumos ou matérias..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="relative">
            <button 
              onClick={() => setMenuAberto(!menuAberto)}
              className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <Plus size={22} />
            </button>

            {menuAberto && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                <button 
                  onClick={() => {
                    setMenuAberto(false);
                    setModalParticiparAberto(true); // Abre o modal de participar
                  }}
                  className="w-full text-left px-5 py-3 text-[15px] font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Participar numa turma
                </button>
                <button 
                  onClick={() => {
                    setMenuAberto(false);
                    setModalCriarAberto(true);
                  }}
                  className="w-full text-left px-5 py-3 text-[15px] font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-all"
                >
                  Criar turma
                </button>
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <button className="text-slate-500 hover:text-blue-600 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="w-9 h-9 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold cursor-pointer">
            A
          </div>
        </div>
      </header>

      {modalCriarAberto && <ModalCriarTurma fecharModal={() => setModalCriarAberto(false)} />}
      {modalParticiparAberto && <ModalParticiparTurma fecharModal={() => setModalParticiparAberto(false)} />}
    </>
  );
}
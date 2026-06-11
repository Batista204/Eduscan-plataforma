export type CategoriaCor = 'blue' | 'emerald' | 'purple' | 'amber' | 'rose';

export interface Resumo {
  id: string;
  titulo: string;
  materia: string;
  conteudo: string;
  tags: string[];
  tempoLeitura: number; // em minutos
  palavras: number;
  dataCriacao: string;
  favorito: boolean;
  cor: CategoriaCor;
}

// Dados simulados para iniciar a interface
export const mockResumos: Resumo[] = [
  {
    id: '1',
    titulo: 'Introdução ao EC2 e S3',
    materia: 'Computação em Nuvem',
    conteudo: 'AWS EC2 é um serviço web que fornece capacidade de computação redimensionável...',
    tags: ['AWS', 'Infraestrutura', 'IaaS'],
    tempoLeitura: 5,
    palavras: 1250,
    dataCriacao: '2026-05-18T10:00:00Z',
    favorito: true,
    cor: 'blue'
  },
  {
    id: '2',
    titulo: 'APIs RESTful com FastAPI',
    materia: 'Dev Web II',
    conteudo: 'FastAPI é um framework web moderno e rápido para construção de APIs com Python...',
    tags: ['Python', 'Backend', 'API'],
    tempoLeitura: 8,
    palavras: 2100,
    dataCriacao: '2026-05-19T14:30:00Z',
    favorito: false,
    cor: 'emerald'
  },
  {
    id: '3',
    titulo: 'Gerenciamento de Memória',
    materia: 'Sistemas Operacionais',
    conteudo: 'A memória virtual é uma técnica de gerência de memória que permite ao SO...',
    tags: ['SO', 'Hardware', 'Paging'],
    tempoLeitura: 12,
    palavras: 3400,
    dataCriacao: '2026-05-20T09:15:00Z',
    favorito: true,
    cor: 'purple'
  }
];
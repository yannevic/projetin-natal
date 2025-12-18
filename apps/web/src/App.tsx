import { useState, useEffect } from 'react';
import './index.css';

interface Carta {
  id: number;
  nome: string;
  imagem: string;
  tags: string[];
  descartada: boolean;
  elixir: number; // Nova propriedade
}

const listaCartasInicial: Omit<Carta, 'descartada'>[] = [
  {
    id: 1,
    nome: 'Arqueira',
    imagem: '/cartas/arqueira.avif',
    elixir: 3,
    tags: ['Feminino', 'Terrestre', 'Humano', 'Comum'],
  },
  {
    id: 2,
    nome: 'Arqueiro Mágico',
    imagem: '/cartas/arqueiro-magico.avif',
    elixir: 4,
    tags: ['Masculino', 'Terrestre', 'Humano', 'Lendária'],
  },
  {
    id: 3,
    nome: 'Balão',
    imagem: '/cartas/balao.avif',
    elixir: 5,
    tags: ['Não informado', 'Voador', 'Não-humano', 'Épica'],
  },
  {
    id: 4,
    nome: 'Bebê Dragão',
    imagem: '/cartas/bebe-dragao.avif',
    elixir: 4,
    tags: ['Não informado', 'Voador', 'Não-humano', 'Épica'],
  },
  {
    id: 5,
    nome: 'Bola de Fogo',
    imagem: '/cartas/bola-de-fogo.avif',
    elixir: 4,
    tags: ['Não informado', 'Feitiço', 'Não-humano', 'Rara'],
  },
  {
    id: 6,
    nome: 'Bruxa',
    imagem: '/cartas/bruxa.avif',
    elixir: 5,
    tags: ['Feminino', 'Terrestre', 'Não-humano', 'Épica'],
  },
  {
    id: 7,
    nome: 'Bruxa Sombria',
    imagem: '/cartas/bruxa-sombria.avif',
    elixir: 4,
    tags: ['Feminino', 'Terrestre', 'Humano', 'Lendária'],
  },
  {
    id: 8,
    nome: 'Canhão',
    imagem: '/cartas/canhao.avif',
    elixir: 3,
    tags: ['Não informado', 'Construção', 'Não-humano', 'Comum'],
  },
  {
    id: 9,
    nome: 'Cavaleiro Dourado',
    imagem: '/cartas/cavaleiro-dourado.avif',
    elixir: 4,
    tags: ['Masculino', 'Terrestre', 'Humano', 'Campeão'],
  },
  {
    id: 10,
    nome: 'Cemitério',
    imagem: '/cartas/cemiterio.avif',
    elixir: 5,
    tags: ['Não informado', 'Feitiço', 'Não-humano', 'Lendária'],
  },
  {
    id: 11,
    nome: 'Domadora de Carneiro',
    imagem: '/cartas/domadora-de-carneiro.avif',
    elixir: 5,
    tags: ['Feminino', 'Terrestre', 'Humano', 'Lendária'],
  },
  {
    id: 12,
    nome: 'Espelho',
    imagem: '/cartas/espelho.avif',
    elixir: 0,
    tags: ['Não informado', 'Feitiço', 'Não-humano', 'Épica'],
  },
  {
    id: 13,
    nome: 'Flechas',
    imagem: '/cartas/flechas.avif',
    elixir: 3,
    tags: ['Não informado', 'Feitiço', 'Não-humano', 'Comum'],
  },
  {
    id: 14,
    nome: 'Foguete',
    imagem: '/cartas/foguete.avif',
    elixir: 6,
    tags: ['Não informado', 'Feitiço', 'Não-humano', 'Rara'],
  },
  {
    id: 15,
    nome: 'Gigante',
    imagem: '/cartas/gigante.avif',
    elixir: 5,
    tags: ['Masculino', 'Terrestre', 'Humano', 'Rara'],
  },
  {
    id: 16,
    nome: 'Imperatriz Espiritual',
    imagem: '/cartas/imperatriz-espiritual.avif',
    elixir: 4,
    tags: ['Feminino', 'Voador', 'Não-humano', 'Campeã'],
  },
  {
    id: 17,
    nome: 'Lançador',
    imagem: '/cartas/lancador.avif',
    elixir: 5,
    tags: ['Masculino', 'Terrestre', 'Não-humano', 'Épica'],
  },
  {
    id: 18,
    nome: 'Lava Hound',
    imagem: '/cartas/lava-hound.avif',
    elixir: 7,
    tags: ['Não informado', 'Voador', 'Não-humano', 'Lendária'],
  },
  {
    id: 19,
    nome: 'Mago de Gelo',
    imagem: '/cartas/mago-de-gelo.avif',
    elixir: 3,
    tags: ['Masculino', 'Terrestre', 'Humano', 'Lendária'],
  },
  {
    id: 20,
    nome: 'Mago Elétrico',
    imagem: '/cartas/mago-eletrico.avif',
    elixir: 4,
    tags: ['Masculino', 'Terrestre', 'Humano', 'Lendária'],
  },
  {
    id: 21,
    nome: 'Megacavaleiro',
    imagem: '/cartas/megacavaleiro.avif',
    elixir: 7,
    tags: ['Masculino', 'Terrestre', 'Humano', 'Lendária'],
  },
  {
    id: 22,
    nome: 'Mini P.E.K.K.A',
    imagem: '/cartas/mini-pekka.avif',
    elixir: 4,
    tags: ['Não informado', 'Terrestre', 'Não-humano', 'Rara'],
  },
  {
    id: 23,
    nome: 'Morcegos',
    imagem: '/cartas/morcegos.avif',
    elixir: 2,
    tags: ['Não informado', 'Voador', 'Não-humano', 'Comum'],
  },
  {
    id: 24,
    nome: 'O Tronco',
    imagem: '/cartas/o-tronco.avif',
    elixir: 2,
    tags: ['Não informado', 'Feitiço', 'Não-humano', 'Lendária'],
  },
  {
    id: 25,
    nome: 'P.E.K.K.A',
    imagem: '/cartas/pekka.avif',
    elixir: 7,
    tags: ['Feminino', 'Terrestre', 'Não-humano', 'Épica'],
  },
  {
    id: 26,
    nome: 'Porcos Reais',
    imagem: '/cartas/porcos-reais.avif',
    elixir: 5,
    tags: ['Não informado', 'Terrestre', 'Não-humano', 'Rara'],
  },
  {
    id: 27,
    nome: 'Sparky',
    imagem: '/cartas/sparky.avif',
    elixir: 6,
    tags: ['Não informado', 'Terrestre', 'Não-humano', 'Lendária'],
  },
  {
    id: 28,
    nome: 'Tesla',
    imagem: '/cartas/tesla.avif',
    elixir: 4,
    tags: ['Não informado', 'Construção', 'Não-humano', 'Comum'],
  },
  {
    id: 29,
    nome: 'Torre de Bombas',
    imagem: '/cartas/torre-de-bombas.avif',
    elixir: 4,
    tags: ['Não informado', 'Construção', 'Não-humano', 'Rara'],
  },
  {
    id: 30,
    nome: 'Torre Inferno',
    imagem: '/cartas/torre-inferno.avif',
    elixir: 5,
    tags: ['Não informado', 'Construção', 'Não-humano', 'Rara'],
  },
  {
    id: 31,
    nome: 'Três Mosqueteiras',
    imagem: '/cartas/tres-mosqueteiras.avif',
    elixir: 9,
    tags: ['Feminino', 'Terrestre', 'Humano', 'Rara'],
  },
  {
    id: 32,
    nome: 'Valquíria',
    imagem: '/cartas/valquiria.avif',
    elixir: 4,
    tags: ['Feminino', 'Terrestre', 'Humano', 'Rara'],
  },
];

export default function App() {
  const [cartas, setCartas] = useState<Carta[]>(
    listaCartasInicial.map((c) => ({ ...c, descartada: false }))
  );
  const [cartaSecreta, setCartaSecreta] = useState<Carta | null>(null);
  const [pontos, setPontos] = useState({ player1: 0, player2: 0 });

  // DECLARAÇÃO ANTES DO USO
  const limparTabuleiro = () => {
    setCartas((prev) => prev.map((c) => ({ ...c, descartada: false })));
  };

  const novoJogo = () => {
    const indice = Math.floor(Math.random() * listaCartasInicial.length);
    setCartaSecreta({ ...listaCartasInicial[indice], descartada: false });
    limparTabuleiro();
  };

  useEffect(() => {
    novoJogo();
  });

  const alternarDescarte = (id: number) => {
    setCartas(cartas.map((c) => (c.id === id ? { ...c, descartada: !c.descartada } : c)));
  };

  return (
    <div className="min-h-screen bg-[#1a2a3a] text-white overflow-hidden">
      <main className="tabuleiro pt-2 pb-44">
        {cartas.map((carta, index) => (
          <button
            type="button"
            key={carta.id}
            className={`card-container ${carta.descartada ? 'descartada' : ''}`}
            onClick={() => alternarDescarte(carta.id)}
          >
            {index > 23 ? (
              <div className="tags-info top-[50px]!">{carta.tags.join(' • ')}</div>
            ) : (
              <div className="tags-info">{carta.tags.join(' • ')}</div>
            )}

            <img
              src={carta.imagem}
              alt={carta.nome}
              className="w-full h-[135px] object-contain pointer-events-none"
            />

            <span className="elixir-drop absolute! bottom-[25px]! ">
              {carta.elixir === 0 ? '?' : carta.elixir}
            </span>
            <p className="font-bold uppercase text-[9px] md:text-[11px] leading-tight truncate">
              {carta.nome}
            </p>
          </button>
        ))}
      </main>

      <footer className="footer-area">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 w-full">
          <button
            type="button"
            onClick={limparTabuleiro}
            className="bg-gray-600 hover:bg-gray-500 text-[10px] font-bold py-4 px-6 rounded-xl border-b-4 border-gray-800 active:border-b-0"
          >
            DESVIRAR CARTAS
          </button>

          <div className="flex items-center gap-8 md:gap-12">
            {/* Player 1 */}
            <div className="text-center">
              <p className="text-xs text-blue-400 font-bold mb-1">Nana🌸</p>
              <p className="text-4xl font-bold leading-none mb-2">{pontos.player1}</p>
              <div className="flex gap-2 justify-center">
                <button
                  type="button"
                  className="bg-blue-600 px-4 py-1 rounded-lg font-bold"
                  onClick={() => setPontos({ ...pontos, player1: pontos.player1 + 1 })}
                >
                  +
                </button>
                <button
                  type="button"
                  className="bg-blue-800 px-4 py-1 rounded-lg font-bold"
                  onClick={() => setPontos({ ...pontos, player1: Math.max(0, pontos.player1 - 1) })}
                >
                  -
                </button>
              </div>
            </div>

            {/* Carta Secreta */}
            <div className="flex flex-col items-center bg-[#2b4561] p-3 rounded-2xl border-2 border-yellow-500">
              <p className="text-[8px] text-yellow-300 font-bold mb-1 uppercase">Sua Carta</p>
              {cartaSecreta && (
                <div className="bg-white p-2 rounded-lg border-2 border-black relative">
                  <span className="elixir-drop-mini scale-150">{cartaSecreta.elixir}</span>
                  <img
                    src={cartaSecreta.imagem}
                    alt="Secreta"
                    className="w-16 h-16 md:w-24 md:h-24 object-contain"
                  />
                </div>
              )}
            </div>

            {/* Player 2 */}
            <div className="text-center">
              <p className="text-xs text-red-400 font-bold mb-1">Mo😭</p>
              <p className="text-4xl font-bold leading-none mb-2">{pontos.player2}</p>
              <div className="flex gap-2 justify-center">
                <button
                  type="button"
                  className="bg-red-600 px-4 py-1 rounded-lg font-bold"
                  onClick={() => setPontos({ ...pontos, player2: pontos.player2 + 1 })}
                >
                  +
                </button>
                <button
                  type="button"
                  className="bg-red-800 px-4 py-1 rounded-lg font-bold"
                  onClick={() => setPontos({ ...pontos, player2: Math.max(0, pontos.player2 - 1) })}
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={novoJogo}
            className="bg-yellow-500 text-black text-[10px] font-bold py-4 px-6 rounded-xl border-b-4 border-yellow-700 active:border-b-0"
          >
            PRÓXIMA RODADA
          </button>
        </div>
      </footer>
    </div>
  );
}

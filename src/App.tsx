import { useState } from 'react';
import Zizis from './data/data';
import './App.css';
import type { SuperZizi } from './types';
import SearchBar from './components/SearchBar';
import Zizi from './components/Zizi';
import Kelzizi from './components/kelzizi';

function App() {
  const [search, setSearch] = useState('');
  const [openZiziId, setOpenZiziId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openQuizz, setOpenQuizz] = useState(false);
  const Search = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

 let filteredList: SuperZizi[] = Zizis.filter(zizi => zizi.nom.toLowerCase().includes(search.toLowerCase()));

  console.log("Bah alors petit curieux tu cherche encore des zizis ? désolé mais il y en a pas ici. Cherche ailleurs dans le code, ils sont dissumulés partout ^^")

  return (
    <>
      <h1><a href="index.html">Super ZiZi</a></h1>
      <h2 id="voirzizi" onClick={() => setOpen(o => !o)}
        aria-expanded={open}>Voir les <strong>Zizis</strong></h2>
      {open && (
        <section>
          <SearchBar value={search} onChange={Search} />
          <div className="zizi-list">
            {filteredList.length === 0 ? ( <p>Aucune quéquette à l'horizon</p>  ) : (  filteredList.map(zizi => (
                <Zizi key={zizi.id} zizi={zizi} isOpen={openZiziId === zizi.id} onToggle={() => setOpenZiziId(openZiziId === zizi.id ? null : zizi.id)} />
            )))
            }
          </div><br />
        </section>
      )}
      <br /><h2 id="quizizi" onClick={() => setOpenQuizz(o => !o)}
        aria-expanded={openQuizz}>Quel <strong>beuteu</strong> es-tu ?</h2>
      {openQuizz && (
        <section>
          <Kelzizi />
        </section>

       )}
      <footer>
  🩲  <span className="slip">Super Zizi & La Beuteu Team | Ce site est alimenté par l’énergie du fameux zizi et vos fous rires.</span>
      </footer>

   </>
  );
}

export default App;

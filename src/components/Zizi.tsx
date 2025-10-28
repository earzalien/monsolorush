import { useState } from 'react';
import type { ZiziProps } from '../types';


function Zizi({ zizi }: ZiziProps) {
  const [openCard, setOpenCard] = useState(false);

  return (
    <article className="zizi-card"
      onClick={() => setOpenCard(o => !o)}
      style={{ cursor: 'pointer' }}
      aria-expanded={openCard}>
        <img src={zizi.image} alt={`Portrait de ${zizi.nom}`} width="150px" height="150px" className="zizi-img" />
        <h3>{zizi.nom}</h3>
      {openCard && (
        <section>
          <p><strong>Costume :</strong> {zizi.costume}</p>
          <p><strong>Pouvoir :</strong> {zizi.pouvoir}</p>
          <p><strong>Accessoire :</strong> {zizi.accessoire}</p>
          <p><strong>Faiblesse :</strong> {zizi.faiblesse}</p>
          <blockquote className="zizi-devise">"{zizi.devise}"</blockquote>
        </section>
        )}
    </article>
  );
}

export default Zizi;

import { useState } from "react";

function Kelzizi() {
    
const [textValue, setTextValue] = useState('');

   const words = [
        { text: "🌪️ La Beuteu Incontrôlable\n\nTu surgis, tu bondis, tu n’attends pas l’autorisation.\nTu es l’incarnation du chaos textile.\nLes lois de la physique n’ont aucun sens à tes yeux (ni à ton slip).\nSi la spontanéité était un sport olympique, tu aurais déjà perdu ton short.", key: 1 },
        { text: "🧘 La Beuteu Philosophe\n\nTu ne te lèves pas sans raison.\nTu préfères méditer sur le sens du slip plutôt que d’agir sans réflexion.\nTon mot préféré : érection spirituelle.\nCertains te trouvent mou, mais toi tu dis que tu es simplement en introspection.", key: 2 },
        { text: '🔮 La Beuteu Mystique\n\nOn ne t’a jamais vraiment compris.\nTu apparais parfois sans explication, puis tu disparais dans le brouillard des sous-vêtements.\nOn dit que tu communiques par télépathie avec les slips perdus du monde entier.\nTu n’es pas d’ici, et ton caleçon non plus.', key: 3 },
        { text: '🪄 La Beuteu Bien Droite\n\nLigne droite, esprit carré.\nTu es le héros discipliné du caleçon, celui qui se tient droit même sous la pluie.\nTon mot d’ordre : stabilité, honneur et pressing régulier.\nTu n’es peut-être pas le plus drôle, mais tu gagnes tous les concours de maintien.', key: 4 },
        { text: "🍌 La Beuteu Tordue\n\nToujours en décalage, parfois littéralement.\nTu vois la vie comme un spaghetti qui a décidé de prendre un virage existentiel.\nRien ne va droit avec toi — ni les idées, ni le pantalon — mais c’est ce qui fait ton charme.\nTu es imprévisible, créatif et potentiellement dangereux pour les meubles bas.", key: 5 }]

  function changeTextValue () {
    const len = words.length;
    setTextValue(words[Math.floor(Math.random() * len)].text)
  }
    return (
        <>
           <pre>(Un test scientifique élaboré par l'Institut National de la Rigolologie.)</pre> 
            <h3>Quizz :</h3>
            <ol>
                <li>
                    <strong>Quand tu entends le mot “bretelle”, tu penses à…</strong><br />
                    <input type="radio" id="1a" name="quiz1" value="a" />
                    <label htmlFor="1a">Une chanson d'amour entre deux pantalons.</label><br />
                    
                    <input type="radio" id="1b" name="quiz1" value="b" />
                    <label htmlFor="1b">Un pont suspendu pour slip timide.</label><br />

                    <input type="radio" id="1c" name="quiz1" value="c" />
                    <label htmlFor="1c">Mon pire ennemi : le bouton de jean.</label><br />

                    <input type="radio" id="1d" name="quiz1" value="d" />
                    <label htmlFor="1d">Une métaphore sur la gravité… et ma destinée.</label><br />
                </li><br /><br />
                <li>
                    <strong>Ton pire cauchemar, c'est…</strong><br />
                    <input type="radio" id="2a" name="quiz2" value="a" />
                    <label htmlFor="2a">Te réveiller en chaussettes, sans slip, au rayon fruits exotiques.</label><br />
                    
                    <input type="radio" id="2b" name="quiz2" value="b" />
                    <label htmlFor="2b">Que quelqu'un remplace ta braguette par une fermeture Éclair de tente Quechua.</label><br />

                    <input type="radio" id="2c" name="quiz2" value="c" />
                    <label htmlFor="2c">Être confondu avec une saucisse de Francfort.</label><br />

                    <input type="radio" id="2d" name="quiz2" value="d" />
                    <label htmlFor="2d">Que le Jug fasse une PR sur ta branche <i>main</i>.</label><br />
                </li><br /><br />
                <li>
                    <strong>Si tu étais un animal, tu serais…</strong><br />
                    <input type="radio" id="3a" name="quiz3" value="a" />
                    <label htmlFor="3a">Un escargot pressé.</label><br />
                    
                    <input type="radio" id="3b" name="quiz3" value="b" />
                    <label htmlFor="3b">Un poulpe qui fait du yoga.</label><br />

                    <input type="radio" id="3c" name="quiz3" value="c" />
                    <label htmlFor="3c">Une autruche qui se cache sous un slip XXL.</label><br />

                    <input type="radio" id="3d" name="quiz3" value="d" />
                    <label htmlFor="3d">Un castor architecte de caleçons.</label><br />
                </li><br /><br />
                <li>
                    <strong>Ton super-pouvoir préféré, ce serait…</strong><br />
                    <input type="radio" id="4a" name="quiz5" value="a" />
                    <label htmlFor="4a">Contrôler la météo du caleçon.</label><br />
                    
                    <input type="radio" id="4b" name="quiz5" value="b" />
                    <label htmlFor="4b">Parler le langage des slips perdus.</label><br />

                    <input type="radio" id="4c" name="quiz5" value="c" />
                    <label htmlFor="4c">Te transformer en trombone géant pour te sortir de situations gênantes.</label><br />

                    <input type="radio" id="4d" name="quiz5" value="d" />
                    <label htmlFor="4d">Lancer des paillettes par réflexe émotionnel.</label><br />
                </li><br /><br />
                <li>
                    <strong>Si ta beuteu avait une devise officielle, ce serait…</strong><br />
                    <input type="radio" id="5a" name="quiz4" value="a" />
                    <label htmlFor="4a">Toujours debout, même le lundi matin</label><br />
                    
                    <input type="radio" id="5b" name="quiz4" value="b" />
                    <label htmlFor="4b">Libre comme l'air, sauf quand il fait froid.</label><br />

                    <input type="radio" id="5c" name="quiz4" value="c" />
                    <label htmlFor="4c">Un pour tous, tous pour slip !</label><br />

                    <input type="radio" id="5d" name="quiz4" value="d" />
                    <label htmlFor="4d">Je pense, donc je bande… vaguement.</label><br />
                </li>
            </ol><br /><br />
            <p style={{ whiteSpace: 'pre-line', color: 'rebeccapurple' }}>{textValue}</p>

            <button onClick={changeTextValue}>Résultat</button>
        </>
 )   

}

export default Kelzizi;

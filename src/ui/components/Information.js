import React from 'react';

const Information = ({ setInformationMode }) => {
    return (
        <main className={"main"}>
            <div>
                <div className={"definition-title"}>Comment ça marche ?</div>
                <div className={"definition-content mt-1"}>
                    Faucon se sert de wikipédia pour obtenir ses données. <br/>
                    À chaque chargement de définition, une requête fantôme est générée sur le site wikipedia en formattant l'url.
                    La réponse HTML est parsée, le titre, la description et les articles connexes sont extraits.
                    Ils sont présentés dans l'interface qui permet de découvrir la définition et de parcourir à nouveau d'autres définitions afin de créer une navigation sans fin.
                    Le langage utilisé pour le parsing est Javascript.
                </div>
            </div>
            <button className={"action-button"} onClick={() => setInformationMode(false)}>Retour</button>
        </main>
    )
}
export default Information;
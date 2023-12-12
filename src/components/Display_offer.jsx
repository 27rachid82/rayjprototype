import "/src/css/display_offer.css";

export default function Display_offer() {
    return (
        <>
        <h2>Développeur Web</h2>

            <hr className="trait"></hr>
            <section className="cadre">
               <h3>Description de l&apos;offre</h3> 
                    <p>Vous aurez la responsabilité de blabla....
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum molestias ab soluta voluptas ullam? Nihil ullam deleniti libero voluptas possimus sit, repellat quaerat! Recusandae enim rerum, ipsam quam perspiciatis non!</p>   
            <hr className="trait"></hr>  

                <h3>Compétences recherchées</h3>

                <div className="competences-container">
                    <ul className="competences-column">
                        <li>✓ Excell</li>
                        <li>✓ Autonomie</li>
                    </ul>
                    <ul className="competences-column">
                        <li>✓ Réactivité</li>
                        <li>✓ Word</li>
                    </ul>
                </div>


            </section>
        <button className="buttoncandidate"><p className="textbutton">CANDIDATER</p></button>
        </>
    )
}
export default function TechnoAdd() {
    return (
        <div className="techno-add">
            <h1>Ajouter un techno</h1>
            <div>
                <form action="">
                    <label htmlFor="techno-name">Nom :</label>
                    <br />
                    <input type="text" name="techno-name" id="techno-name" />
                    <br />
                    <label htmlFor="techno-category">Catégory :</label>
                    <br />
                    <select name="techno-category" id="techno-category">
                        <option value="">Sélectionner une catégorie</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="other">Autre</option>
                    </select>
                    <br />
                    <label htmlFor="techno-description">Description :</label>
                    <br />
                    <textarea name="techno-description" id="techno-description" cols="30" rows="10"></textarea>
                    <br />
                    <input type="submit" value="Ajouter le techno" />
                </form>
            </div>
        </div>
    )
}
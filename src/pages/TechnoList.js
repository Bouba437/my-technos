import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
    const { technos } = props;
    return (
        <div className="techno-list">
            <h1>Toutes les technos</h1>
            <div>
                {
                    technos.map( techno => {
                        return (
                            <TechnoItem techno={techno} key={techno.technoId} />
                        )
                    })
                }
            </div>
        </div>
    )
}
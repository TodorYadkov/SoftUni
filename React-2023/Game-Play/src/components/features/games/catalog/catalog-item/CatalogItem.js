import { Link } from "react-router-dom";

export default function CatalogItem({
    _ownerId,
    title,
    category,
    maxLevel,
    imageUrl,
    summary,
    _id,
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img alt={title} src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/games/details/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
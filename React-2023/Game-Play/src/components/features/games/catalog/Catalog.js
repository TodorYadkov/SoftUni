import { useEffect, useState } from "react";
import { getAllGames } from "../../../core/services/data-services/dataService";
import CatalogItem from "./catalog-item/CatalogItem";
import Loading from "../../../shared/loader/Loading";
import { useAuthContext } from "../../../core/hooks/useAuthContext";

export default function Catalog() {
    const [allGames, setAllGames] = useState([]);
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const context = useAuthContext();

    useEffect(() => {
        getAllGames(context)
            .then(games => {
                setAllGames(games);
                setIsLoading(false);
            })
            .catch(errorMsgJSX => {
                setServerErrorMsg(errorMsgJSX);
                // setIsLoading(false);
            });
    }, [])


    return (
        <section id="catalog-page">
            {serverErrorMsg && serverErrorMsg}
            <h1>All Games</h1>
            {
                isLoading
                    ? <Loading />
                    : allGames.length > 0
                        ? allGames.map(g => <CatalogItem key={g._id} {...g} />)
                        : <h3 className="no-articles">No articles yet</h3>
            }
        </section >
    );
}
import { useEffect, useState } from "react";

import HomeItem from "./homeItems/HomeItem";
import { getLastThreeGames } from "../../core/services/data-services/dataService";
import Loading from "../../shared/loader/Loading";
import { useAuthContext } from "../../core/hooks/useAuthContext";

export default function Home() {
    const [lastThreeGAmes, setLastThreeGames] = useState([]);
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const context = useAuthContext();
    
    useEffect(() => {
        getLastThreeGames(context)
            .then(games => {
                setLastThreeGames(games);
                setIsLoading(false);
            })
            .catch(errorMsgJSX => {
                setServerErrorMsg(errorMsgJSX);
                // setIsLoading(false);
            })
    }, []);

    return (
        <>
            {serverErrorMsg && serverErrorMsg}
            {
                isLoading
                    ? <Loading />
                    : <section id="welcome-world" >
                        <div className="welcome-message">
                            <h2>ALL new games are</h2>
                            <h3>Only in GamesPlay</h3>
                        </div>
                        <img src="./images/four_slider_img01.png" alt="hero" />

                        <div id="home-page">
                            <h1>Latest Games</h1>

                            {
                                lastThreeGAmes.length > 0
                                    ? lastThreeGAmes.map(g => <HomeItem key={g._id} {...g} />)
                                    : <p className="no-articles">No games yet</p>
                            }

                        </div>
                    </section>
            }
        </>
    );
}
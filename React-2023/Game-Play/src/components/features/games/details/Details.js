import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import CommentForm from "../../comments/comments-add/CommentForm";
import CommentList from "../../comments/comments-list/CommentList";
import { getAllCommentsForGameById, getGameById } from "../../../core/services/data-services/dataService";
import Loading from "../../../shared/loader/Loading";
import { useAuthContext } from "../../../core/hooks/useAuthContext";


export default function Details() {
    const [gameInfo, setGameInfo] = useState(null);
    const [allComments, setAllComments] = useState([]);
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserState, setCurrentUserState] = useState({
        isOwner: false,
        isNotOwner: false,
        isLogged: false,
    });

    const { gameId } = useParams();
    const context = useAuthContext();


    useEffect(() => {
        Promise.all([
            getGameById(gameId, context),
            getAllCommentsForGameById(gameId, context)
        ]).then(([game, comments]) => {
            setGameInfo(game);
            setAllComments(comments);
            setIsLoading(false);
            setCurrentUserState(state => ({
                ...state,
                isOwner: game._ownerId === context.getUserSession()?._id,
                isNotOwner: game._ownerId !== context.getUserSession()?._id,
                isLogged: context.isAuthenticated,
            }));
        }).catch(errorMsgJSX => {
            setServerErrorMsg(errorMsgJSX);
            // setIsLoading(false);
        });


    }, [])

    return (
        <>
            {isLoading
                ? <Loading />
                : <section id="game-details">
                    {serverErrorMsg && serverErrorMsg}
                    <h1>Game Details</h1>
                    <div className="info-section">

                        <div className="game-header">
                            <img alt={gameInfo.title} className="game-img" src={gameInfo.imageUrl} />
                            <h1>{gameInfo.title}</h1>
                            <span className="levels">MaxLevel: {gameInfo.maxLevel}</span>
                            <p className="type">{gameInfo.category}</p>
                        </div>

                        <p className="text">{gameInfo.summary}</p>

                        <CommentList allComments={allComments} />

                        {currentUserState.isOwner && currentUserState.isLogged
                            ? <div className="buttons">
                                <Link to={`/games/edit/${gameInfo._id}`} className="button">Edit</Link>
                                <Link to={`/games/delete/${gameInfo._id}`} className="button">Delete</Link>
                            </div>
                            : null
                        }
                    </div>

                    {currentUserState.isLogged && currentUserState.isNotOwner
                        ? <CommentForm
                            gameId={gameInfo._id}
                            setAllComments={setAllComments}
                        />
                        : null
                    }

                </section>
            }
        </>
    );
}
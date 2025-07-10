import { useState } from "react";


export function TwitterFollowCard({userName, mail, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            alt="Avatar de usuario"
            src={`https://unavatar.io/${userName}`} /> 
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoUserName">{userName}</strong>
                <span className="tw-followCard-infoMail">{mail}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
  );   
}
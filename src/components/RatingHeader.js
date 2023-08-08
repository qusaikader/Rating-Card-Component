import "./RatingHeader.css"
import iconStar from "../images/iconStar.svg"

const RatingHeader = () => {
    return (
        <div>
            <div className="rating-header__favicon" >
                <img src={iconStar} alt="Star favicon" />
            </div>
            <div className="rating-header__description">
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback
                    is appreciated to help us improve our offering!
                </p>
            </div>
        </div>
    );
}

export default RatingHeader;
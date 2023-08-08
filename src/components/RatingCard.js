import "./RatingCard.css"
import { useState } from "react";
import RatingHeader from "./RatingHeader"
import ThankYouComponent from "./ThankYouComponent";

const RatingCard = () => {
    const [selectedRating,setSelectedRating] = useState('');
    const [visibility, setVisibility] = useState(false);

    const getRating = (event) => {
        const rating = event.target.innerText;
        setSelectedRating(rating);
    }

    const getSubmit = () => {
        setVisibility(true);
    }

    return (
        <div className="rating-card__container">
            { !visibility ?
                (
                    <div>
                    <RatingHeader />
                    <div>
                        <div className="circle-container">
                            <div className={`circle ${selectedRating === "1" ? "selected" : ""}`} onClick={getRating}>1</div>
                            <div className={`circle ${selectedRating === "2" ? "selected" : ""}`} onClick={getRating}>2</div>
                            <div className={`circle ${selectedRating === "3" ? "selected" : ""}`} onClick={getRating}>3</div>
                            <div className={`circle ${selectedRating === "4" ? "selected" : ""}`} onClick={getRating}>4</div>
                            <div className={`circle ${selectedRating === "5" ? "selected" : ""}`} onClick={getRating}>5</div>
                        </div>
                        <div className="submit-button">
                            <button onClick={getSubmit}>Submit</button>
                        </div>
                    </div>
                    </div>
                ) : (
                <ThankYouComponent rating = {selectedRating}/> 
                )
            }
        </div>
    );
}

export default RatingCard;
import "./ThankYouComponent.css"
import thankyou from "../images/thankyou.svg"

const ThankYouComponent = (props) => {
    return (
        <div >
            <div className="thankyou-header">
                <div className="thankyou-header_illustration">
                    <img src={thankyou} alt="Illustration" />
                </div>
                <div className="thankyou-header_rating">
                    <p>You selected {props.rating} out of 5</p>
                </div>
            </div>

            <div className="thankyou__description">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}

export default ThankYouComponent;
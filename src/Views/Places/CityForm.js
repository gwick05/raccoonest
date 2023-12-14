import StarRating from "./StarRating";
import SendForm from "../../media/sendform.svg";
export default function CityForm({
  setRatings,
  onSubmit,
  formTitle,
  formClass,
  onLeaveForm,
}) {
  return (
    <div className={formClass} onMouseLeave={onLeaveForm}>
      <h3 style={{ color: "white" }}>{formTitle}</h3>
      <form onSubmit={onSubmit}>
        <div className="rating-form">
          <div>
            <label>Sights</label>
            <StarRating
              size={30}
              onSetRating={(rating) => {
                setRatings((ratings) => {
                  return { ...ratings, sights: rating };
                });
              }}
            />
            <label>Affordability</label>
            <StarRating
              size={30}
              onSetRating={(rating) => {
                setRatings((ratings) => {
                  return { ...ratings, affordability: rating };
                });
              }}
            />
          </div>
          <div>
            <label>People</label>
            <StarRating
              size={30}
              onSetRating={(rating) => {
                setRatings((ratings) => {
                  return { ...ratings, people: rating };
                });
              }}
            />
            <label>Cuisine</label>
            <StarRating
              size={30}
              onSetRating={(rating) => {
                setRatings((ratings) => {
                  return { ...ratings, cuisine: rating };
                });
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <label>Ease of travel and safety</label>
            <StarRating
              size={30}
              onSetRating={(rating) => {
                setRatings((ratings) => {
                  return { ...ratings, eotas: rating };
                });
              }}
            />
          </div>
          <button>
            <img src={SendForm} alt="send" />
          </button>
        </div>
      </form>
    </div>
  );
}

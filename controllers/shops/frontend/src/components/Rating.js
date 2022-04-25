import PropTypes from "prop-types";
import {v4 as uuidv4} from "uuid";

const Rating = ({value,text, color}) => {
    const ar5 = Array.from(Array(5).keys()).map(x=>x+1)
    return ( 
        <div className="rating">
            <span>
            {
                ar5.map(x=>{
                   return (
                    value >= x ? 
                    <span key={uuidv4()}><i style={{color}} className="fas fa-star"></i></span>
                    : value  === x - 0.5 ?
                    <span key={uuidv4()}><i style={{color}} className="fas fa-star-half-alt"></i></span>
                    :
                    <span key={uuidv4()}><i style={{color}} className="far fa-star"></i></span>
                    
                   )
                })
            } {text}
            </span>
        </div>
     );
}

// to add props here

Rating.defaultProps = {
    color: "orange"
}

// TypeCheck our props, if something is messed up i will know
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
 
export default Rating;
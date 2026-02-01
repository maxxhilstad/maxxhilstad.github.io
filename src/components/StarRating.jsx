import { FaStar, FaRegStar } from 'react-icons/fa'
import { useState } from 'react'

const StarRating = ({ initialRating, color }) => {

    const [ rating, setRating ] = useState(initialRating || 0)
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) =>
                star <= rating
                    ? <span key={star} onClick={()=>setRating(star)}><FaStar key={star} color={color || "black"} /></span>
                    : <span key={star} onClick={()=>setRating(star)}><FaRegStar key={star} color={color || "black"} /></span>
            )}
        </div>
    )
}

export default StarRating
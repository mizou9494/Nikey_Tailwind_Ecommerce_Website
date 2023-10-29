import {star} from '../assets/icons'

const ReviewCard = ({
    imgURL,
    customerName,
    rating,
    feedback
}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="customer" className='rounded-full' />
        <p>{feedback}</p>
        <div className='flex gap-4 '>
            <img 
                src={star} 
                alt="star" 
                width={24}
                height={24}
            />
            <div>({rating})</div>
        </div>
    </div>
  )
}

export default ReviewCard
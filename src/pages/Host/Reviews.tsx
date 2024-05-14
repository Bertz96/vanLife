import { BsStarFill } from 'react-icons/bs'
import reviewsGraph from '../../assets/images/reviews-graph.png'

export default function Reviews() {
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]

return (
    <section className="host-reviews">
        <div className="flex  py-4 lg:py-8 items-center">
        
            <h2 className=' text-4xl mx-6 lg:mx-7 font-bold'>Your reviews</h2>
            <p className=' text-lg text-gray-600 font-semibold '>
                Last <span className='underline'>30 days</span>
            </p>
        </div>
        <img
            className=" px-6 lg:px-0 mt-4 lg:mt-0 lg:m-6 lg:h-60"
            src={reviewsGraph}
            alt="Review graph"
        />
        <h3 className=' font-bold text-2xl px-5 mt-6'>Reviews (2)</h3>
        {reviewsData.map((review) => (
            <div key={review.id}>
                <div className="border-y text-lg flex flex-col gap-4 py-5 first-of-type:border-t-0 px-5 border-gray-300">
                    <div className=' flex'>
                    {[...Array(review.rating)].map((_, i) => (
                        <BsStarFill className=" m-1 text-[#ff8c38]" key={i} />
                        ))}
                    </div>
                    <div className=" flex gap-3 ">
                        <p className="font-bold">{review.name}</p>
                        <p className=" text-gray-400">{review.date}</p>
                    </div>
                    <p>{review.text}</p>
                </div>
                <hr />
            </div>
        ))}
    </section>
)
}

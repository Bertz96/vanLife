import incomeGraph from '../../assets/images/income-graph.png'

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
]
return (
    <section className="m-4 lg:m-9">
        <h1 className=' text-4xl mb-4 font-bold '>Income</h1>
        <p className=' text-lg text-gray-600'>
            Last <span className=' underline font-semibold'>30 days</span>
        </p>
        <h2 className='text-5xl font-bold my-5'>$2,260</h2>
        <img
            className=" lg:h-96"
            src={incomeGraph}
            alt="Income graph"
        />
        <div className="info-header">
            <h3 className=' text-2xl mt-10 mb-6 font-bold'>Your transactions (3)</h3>
            
            <p className=' text-lg text-gray-600'>
                Last <span className=' underline font-semibold'>30 days</span>
            </p>
        </div>
        <div className="flex-col">
            {transactionsData.map((item) => (
                <div key={item.id} className=" flex  items-center justify-between bg-white py-7 lg:py-9 px-4 lg:px-10  rounded-lg  my-4">
                    <h3 className=' text-3xl lg:text-4xl font-bold'>${item.amount}</h3>
                    <p className=' text-gray-600 font-medium  text-xl'>{item.date}</p>
                </div>
            ))}
        </div>
    </section>
)
}

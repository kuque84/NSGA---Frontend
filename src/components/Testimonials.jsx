import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20 mx-3">
        Reseñas de NSGA
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="rounden-md p-6 text-md border border-neutral-800 font-light rounded-lg">
                        <p className="">
                            {testimonial.text}
                        </p>
                        <div className="flex mt-8 items-start">
                            <img 
                                className='w-12 h-12 rounded-full border border-neutral-500' 
                                src={testimonial.image} 
                                alt={testimonial.user} 
                            />
                            <div className="ml-2">
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials
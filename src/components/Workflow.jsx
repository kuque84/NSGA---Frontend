import { CheckCircle2 } from "lucide-react"
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants"

const Workflow = () => {
  return (
    <div className="mt-20 mx-3">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 mb-4">Simplifica la gestión{" "}
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">académica con NSGA.</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-primary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-lg">{item.title}</h5>
                            <p className="text-md text-neutral-500 dark:text-neutral-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow
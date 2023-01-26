import Header from "./Header"
import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div id="submit-text" className="mt-48 font-extrabold text-4xl">
            Your cart is empty!
          </div>
          <Link
            to="/store"
            className="flex justify-center bg-black text-white px-4 py-3 mt-6"
          >
            Back to store
          </Link>
        </div>
      </>
    )
}

export default EmptyCart
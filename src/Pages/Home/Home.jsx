import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const maxdata = useLoaderData();
  console.log(maxdata);

  // Get the first 3 items from the array
  const firstThreeItems = maxdata.slice(0, 3);

  const truncateDescription = (description, maxWords) => {
            const words = description.split(' ').slice(0, maxWords);
            return `${words.join(' ')}${words.length < description.split(' ').length ? '...' : ''}`;
          };

  return (
    <div>
      <Banner></Banner>
      <div>
            <h2 className="text-4xl text-center uppercase mt-5 text-blue-800 font-semibold">Here Is OUR  Popular SERVICES </h2> <hr  className="w-[80vh] mx-[70vh]"/>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-1 lg:mx-[30vh] mt-10 mb-5">
        {firstThreeItems.map((item) => (
          <div key={item._id}>

            <div className="w-80 h-[70vh] border p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-40 object-cover rounded-t-lg"
         alt="Card Image"  src={item.img} />
        <div className="p-4">
            <h2 className="text-xl  font-semibold"><h2 className="card-title"><h2>{item.name}</h2></h2></h2>
            
            <p className="mb-6">Price: ${item.price}</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400  " >Book Now</button>
            </div>
            <p className="text-gray-600 mt-2">{truncateDescription(item.description, 20)}</p>
        </div>
    </div>
          </div>
        ))}
        <div className="mt-10">
            <Link to="/events">
            <h2 className="btn bg-gray-400">See All Events....</h2>
            </Link>
        </div>
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

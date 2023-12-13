import { useLoaderData } from "react-router-dom";

const EventsPack = () => {
  const viewdetails = useLoaderData();
  console.log(viewdetails);

  return (
    <div>
      <div className="grid grid-cols-1 mt-10 mb-10 lg:mx-[20vh] gap-6 lg:grid-cols-3 ">
        {viewdetails.map((event) => (
          <div key={event._id}>
            <div>
              <div className="card card-compact w-96 h-[70vh] bg-base-100 shadow-xl">
                <figure>
                  <img className="w-80 h-[30vh]"
                     src={event.img}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-blue-800"><h2>{event.name}</h2></h2>
                  <p> <p className="text-amber-700">{event.description}</p></p>
                  <p className="text-pink-400"> Low Price: ${event.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPack;

import banner from "../../assets/stage.jpeg"

const Banner = () => {
  return (
    <div>
      <div>
        <div className="hero h-[80vh] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/xqp3cN6/bg.jpg)'}}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={banner}
              className="max-w-[70vh] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold uppercase">Event Management</h1>
              <h2 className="text-5xl font-bold uppercase">bussiness plan</h2>
              <h2 className="text-2xl font-bold uppercase">event description</h2>
              <p className="mt-4 text-white">
               The event description provides an overview of the event,
               including its purpose , 

              </p>
              <p className="text-white">
              theme, date , location , terget audience , and key activities or features .
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

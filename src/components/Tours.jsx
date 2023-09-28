import Tour from "./Tour";

function Tours({ tours,deleteTour}) {
 
    return (
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {tours.map((tour) => {
          const { id} = tour;
          return (
            <Tour key={id} tour={tour} deleteTour={deleteTour}/>
          );
        })}
      </ul>
    );
  }
  
  export default Tours;
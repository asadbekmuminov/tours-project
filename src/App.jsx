
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tours from "./components/Tours";
import { useFetch } from "./hooks/useFetch";
// import Refresh from "./components/Refresh";


function App() {
  const [url, setUrl] = useState("https://course-api.com/react-tours-project");
  const { data, isPending, error } = useFetch(url);
  const [tours, setTours] = useState(null);

  useEffect(() => {
    setTours(data);
  }, [data]);

  const deleteTour = (id) => {
    setTours((prev) => {
      return prev.filter((tour) => {
        return tour.id !== id;
      });
    });
  };
if(isPending){
  return (
    <div className="loadingio-spinner-spinner-iyuam8b8mzm absolute top-[40%] right-[40%]  ">
      <div class="ldio-842gezkymad bg-white">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
  );
}
  const handleRefresh = () => {
    if (tours && tours.length === 0) {
      setTours(data);
    }
   
  };

  return (
    <main className="bg-[#f8fafc]">
      <section className="text-center pt-32 ">
      {tours && tours.length === 0 ? null : <Header />}
        {tours && tours.length === 0 && (
          <div>
            <h1 className="mt-8 text-4xl mb-8 ">Not Tour</h1>
            <button
             className="bg-green-500 rounded-lg py-2 px-4 text-[30px] text-white hover:text-black hover:bg-green-300"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>)}
      </section>
      <section className="max-w-5xl mx-auto px-3 py-10">
        {tours && <Tours tours={tours} deleteTour={deleteTour} />}
      </section>
    </main>
  );
}

export default App; 



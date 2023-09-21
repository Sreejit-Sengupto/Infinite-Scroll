import React from "react";
import Card from "../utils/Card";
import loader from "./../assets/loader.gif";

function Home() {
  const [items, setItems] = React.useState([]); // state to manage the data returned by the API.
  console.log(items);
  const [isLoading, setIsLoading] = React.useState(false); // state to trigger loading animation.

  React.useEffect(() => {
    // Add a scroll event listener to track scroll position
    window.addEventListener("scroll", handleScroll);
    // Fetch initial data (when the app loads)
    fetchData();
    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate when to trigger loading more content
    if (
      // When the window height plus the height upto which we have scrolled exceeds the document height even by 1px then we will    load the next set of data.
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // Reached the bottom of the page, load more data
      fetchData();
    }
  };

  const fetchData = async () => {
    // Set isLoading to true to show a loading indicator
    setIsLoading(true);
    // Fetch more data from the API
    await fetch(
        // API used: https://www.slingacademy.com/article/sample-photos-free-fake-rest-api-for-practice/#google_vignette
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${Math.floor(Math.random() * 6 + 1)}&limit=10`
    )
      .then((response) => response.json())
      .then(
        (response) => setItems((prevItems) => [...prevItems, response.photos]) // Update the items state with the new data
      );
    // Set isLoading to false when the data is fetched
    setIsLoading(false);
  };

  return (
    <>
      <div className="my-5">
        <p className="font-raleway text-5xl font-semibold text-[#FE5F00] text-center">
          Infinite Scrolling
        </p>
        <div className="w-[200px] h-1 bg-black rounded-lg mx-auto"></div>
      </div>
      <div className="flex justify-center items-center flex-wrap w-full">
        {/* The API returs a 2D array, hence first mapping over the row of the 2D array */}
        {items.map((item) =>
          // Then mapping over the 1D array containing the data, present in each row of the 2D array.
          item.map((data) => (
            // Passing the data to a Card component to display the data.
            <Card
              image={data.url}
              title={data.title}
              description={data.description}
              key={data.id}
              id={data.id}
            />
          ))
        )}
      </div>
      {/* Trigger loading animation */}
      {isLoading && (
        <div className="flex items-center justify-center">
          <img src={loader} />
        </div>
      )}
    </>
  );
}

export default Home;

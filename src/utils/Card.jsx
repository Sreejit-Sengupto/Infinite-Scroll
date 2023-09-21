import { useNavigate } from "react-router-dom";

function Card({ id, image, title, description }) {
  // Navigate the user to the required page
  const navigate = useNavigate();
  function handleClick() {
    navigate(`${id}?title=${title}&description=${description}&image=${image}`); // Pass the title, description and image as query parameters
  }
  return (
    <div
      className="w-[70%] lg:w-[20%] my-6 mx-2 h-64 hover:scale-105 transition-all custom--hover"
      onClick={handleClick}
    >
      <div className="bg-white rounded-t-xl h-[50%]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover rounded-t-xl"
        />
      </div>

      <div className=" bg-[#F6C90E] rounded-b-xl p-6 font-lexend min-h-[55%] flex flex-col cursor-pointer">
        <div>
          <p className="font-semibold font-raleway text-center">{title}</p>
          <p className="text-xs text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

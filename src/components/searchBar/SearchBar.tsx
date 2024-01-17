import "./searchbar.scss";

type props = {
  message: string;
};

const SearchBar = (props: props) => {
  return (
    <div className="relative flex">
      <input
        type="text"
        className="rounded-r-2xl bg-[#02E7B8] w-[205px] h-[39px] mb-2 placeholder-[#27375A]"
        placeholder={props.message}
      />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 ">
        <div className="w-full h-[50px] rounded-full right-0">
          <img
            className="image-search bg-[#02E7B8] border-[#02E7B8] rounded-[50%] cursor-pointer"
            src="./public/images/search-icon.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

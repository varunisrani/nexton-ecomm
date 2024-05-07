import FilterChoice from "./Filterchoice";
import Filterchoice from "./Filterchoice";
import Inputfilter from "./Inputfilter";

export default function Filter() {
  return (
    <main className="flex flex-col phone:hidden">
      <span className="text-xl font-medium text-black">Categories</span>
      <div className="mt-7">
        <FilterChoice
          options={[
            "Men’s fashion",
            "Women’s fashion",
            "Kids & Toys",
            "Accessories",
            "Cosmetics",
            "Shoes",
            "Sports",
          ]}
        />
        <div className="flex flex-col mt-7">
          <span className="text-xl font-medium text-black">Price range</span>

          <div className="flex flex-row gap-5 mt-5">
            <Inputfilter label="Min price" price="100" />
            <Inputfilter label="Max price" price="500" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-medium text-black mt-7">
            Sort order
          </span>
          <div className="mt-5">
            <FilterChoice
              options={[
                "Most Popular",
                "Women’s fashion",
                "Best Rating",
                "Newest",
                "Price Low - Hight",
                "Price Hight - Low",
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

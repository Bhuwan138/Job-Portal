import MultiInput from "./MultiInput.tsx";
import {dropDownData} from "../../Data/Data.tsx";

const SearchBar = () => {
    return (
        <div className={"flex"}>
            {
                dropDownData.map((item,index) => <div key={index} className={"w-1/5"}> <MultiInput {...item} />  </div>)
            }
        </div>
    )
}
export default SearchBar

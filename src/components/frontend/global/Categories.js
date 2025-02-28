import React, { useEffect, useState } from "react";
import * as ApiService from "../../../config/config";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [displayCategory, setDisplayCategory] = useState(false);
  const [catName, setCatName] = useState("All Categories");
  useEffect(() => {
    const fetchItems = async () => {
      let params = { url: apiList.getCategory }; //console.log(params);
      let response = await ApiService.getData(params); //console.log(response);
      if (response.results.length) {
        setCategories(response.results);
      }
    };
    fetchItems();
  }, []);
  return (
    <div className="col d-none d-xl-block">
      <div className="block width-95">
        <div className="site-logo block go-top ">
          <div className="ltn__search-widget mb-0  border-radius-30">
            <form className="d-flex category-bck p-1 border-radius-30">
              <div
                onClick={() =>
                  setDisplayCategory((displayCategory) => !displayCategory)
                }
                className="input-group"
              >
                <span className="input-group-text-category border-radius-30-left  bg-white">
                  <i className="fa fa-bars text-black top-0 font-14"></i>
                </span>
                <input
                  className="form-control text-white category-bck"
                  type="search"
                  value={catName}
                  readOnly
                  style={{ border: "0" }}
                  aria-label="Search"
                />
                <span className="input-group-text-category border-radius-30-right category-bck">
                  <i className="fa fa-chevron-down text-white font-14"></i>
                </span>
              </div>
              {displayCategory && (
                <ul
                  className="dropdown-menu block broder-radius-0 w-97 mt-4-5 p-0"
                  style={{
                    height: "350px",
                    overflowY: "scroll",
                  }}
                  role="menu"
                  placement="bottom-end"
                >
                  {categories.length > 0 &&
                    categories.map((data, i) => {
                      return (
                        <li key={i} className="list-type mt-0">
                          <Link
                            onClick={() => {
                              setCatName((catName) => data.name);
                              setDisplayCategory(
                                (displayCategory) => !displayCategory
                              );
                            }}
                            className="font-12"
                            to={"/drugs?cat=" + data.slug}
                          >
                            <div className="d-flex flex-row">
                              <div className="p-2">{data.name}</div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

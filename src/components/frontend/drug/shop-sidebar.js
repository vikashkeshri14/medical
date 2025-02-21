import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import apiList from "../../../config/apiList.json";
import config from "../../../config/config.json";
import * as ApiService from "../../../config/config";
import { FilterContext } from "../../../context/FilterProvider";

export default function Sidebar() {
  //const [categories, setCategories] = useState([]);
  const {
    categories,
    totaldrugs,
    priceFilter,
    filterCategories,
    setCategories,
    setPriceFilter,
    setFilterCategories,
  } = useContext(FilterContext);

  // const { search } = useLocation();
  useEffect(() => {
    const categoryFetch = async () => {
      let paramsCity = { url: apiList.getCategoryWithDrugCount };
      let response = await ApiService.getData(paramsCity);
      if (response.results.length > 0) {
        let catarr = response.results;
        let filtercat = [];

        for (let i = 0; i < catarr.length; i++) {
          catarr[i].isChecked = true;
          filtercat.push(catarr[i].category_slug);
        }
        setCategories(catarr);
        setFilterCategories(filtercat);
      }
    };
    categoryFetch();
  }, []);
  const handleCheckboxChange = (checkboxId) => {
    const updatedCheckboxes = categories.map((checkbox) =>
      checkbox.category_slug === checkboxId
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    );
    let filtercat = updatedCheckboxes.reduce((acc, data) => {
      if (data.isChecked) {
        if (data.category_slug) acc.push(data.category_slug);
      }
      return acc;
    }, []);

    setFilterCategories(filtercat);

    setCategories((categories) => updatedCheckboxes);
    //console.log(updatedCheckboxes);
  };
  return (
    <div className="col-lg-3  mb-100">
      <aside className="sidebar ltn__shop-sidebar">
        <h3 className="mb-0 font-20">Advance Information</h3>
        <label className="mb-10">
          <small className="font-12">
            About {totaldrugs} results (0.62 seconds)
          </small>
        </label>
        {/* Advance Information widget */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">Categories</h4>
          <ul>
            {categories.length &&
              categories.map((items, i) => {
                if (items.category) {
                  return (
                    <li key={i}>
                      <label className="checkbox-item font-12 font-weight-400">
                        {items.category}
                        <input
                          value={items.category_slug}
                          type="checkbox"
                          checked={items.isChecked}
                          onChange={() =>
                            handleCheckboxChange(items.category_slug)
                          }
                        />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no font-12 font-weight-600">
                        {items.cnt}
                      </span>
                    </li>
                  );
                }
              })}
          </ul>

          {/* Price Filter Widget */}
          {/* <div className="widget--- ltn__price-filter-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border---">
              Filter by price
            </h4>
            <div className="price_filter">
              <div className="price_slider_amount">
                <input type="submit" defaultValue="Your range:" />
                <input
                  type="text"
                  className="amount"
                  name="price"
                  placeholder="Add Your Price"
                />
              </div>
              <div className="slider-range" />
            </div>
          </div> */}
        </div>
      </aside>
    </div>
  );
}

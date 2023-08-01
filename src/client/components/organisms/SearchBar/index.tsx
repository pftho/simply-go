import { Button, Select } from "antd";
import { useState } from "react";
import { HolidayTimeframeEnum } from "../../../types/trip/enums";
import { Trip } from "../../../types/trip/types";
import { budgetOptions, locationOptions } from "./formatters";
import "./styles.css";

const { Option } = Select;

const SearchBar = ({ trips }: { trips: Trip[] }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  console.log(budgetOptions(trips));

  const handleLocationChange = (selectedLocation: string) => {
    setSelectedLocation(selectedLocation);
  };

  const handleBudgetChange = (selectedBudget: string) => {
    setSelectedBudget(selectedBudget);
  };

  const handleDateChange = (selectedDate: string) => {
    setSelectedDate(selectedDate);
  };

  const handleSearch = () => {
    // Here you can perform your search logic using the selectedLocation, selectedBudget, and selectedDate
    // For example, you can send a request to your backend API with these parameters as query parameters
    console.log("Selected location:", selectedLocation);
    console.log("Selected budget:", selectedBudget);
    console.log("Selected date:", selectedDate);
  };

  return (
    <div className="searchBar">
      <Select
        mode="multiple"
        style={{ width: 200, marginRight: 16 }}
        placeholder="Select location"
        onChange={handleLocationChange}
        options={locationOptions(trips)}
        allowClear
      />
      <Select
        mode="multiple"
        style={{ width: 200, marginRight: 16 }}
        placeholder="Select budget"
        onChange={handleBudgetChange}
        options={budgetOptions(trips)}
        allowClear
      />

      <Select
        style={{ width: 150, marginRight: 16 }}
        onChange={handleDateChange}
        placeholder="Select period"
        allowClear
      >
        {Object.values(HolidayTimeframeEnum).map((timeframe) => (
          <Option key={timeframe} value={timeframe}>
            {timeframe}
          </Option>
        ))}
      </Select>

      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

import { Button, Select } from "antd";
import { useState } from "react";
import { HolidayTimeframeEnum } from "../../../types/trip/enums";
import { Trip } from "../../../types/trip/types";
import { budgetOptions, locationOptions } from "./formatters";
import "./styles.css";

const { Option } = Select;

const SearchBar = ({
  trips,
  setTripsToDisplay,
}: {
  trips: Trip[];
  setTripsToDisplay: React.Dispatch<React.SetStateAction<Trip[]>>;
}) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(0);
  const [selectedPeriod, setselectedPeriod] = useState("");

  const budgets = budgetOptions(trips);
  const locations = locationOptions(trips);

  const handleLocationChange = (selectedLocation: string) => {
    setSelectedName(selectedLocation);
  };

  const handleBudgetChange = (selectedBudget: number) => {
    setSelectedBudget(selectedBudget);
  };

  const handleDateChange = (selectedPeriod: string) => {
    setselectedPeriod(selectedPeriod);
  };

  const handleSearch = () => {
    const filteredTrips = trips.filter((trip) => {
      const nameMatches = selectedName ? trip.name === selectedName : true;
      const budgetMatches = selectedBudget
        ? trip.recommendedBudget === selectedBudget
        : true;
      const periodMatches = selectedPeriod
        ? trip.holidayTimeframe === selectedPeriod
        : true;
      return nameMatches && budgetMatches && periodMatches;
    });

    setTripsToDisplay(filteredTrips);
  };

  return (
    <div className="searchBar">
      <Select
        style={{ width: 200, marginRight: 16 }}
        placeholder="Select location"
        onChange={handleLocationChange}
        allowClear
      >
        {locations.map((location) => (
          <Option key={location.value} value={location.label}>
            {location.label}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: 200, marginRight: 16 }}
        placeholder="Select budget"
        onChange={handleBudgetChange}
        allowClear
      >
        {budgets.map((budget) => (
          <Option key={budget.value} value={budget.label}>
            {budget.label}
          </Option>
        ))}
      </Select>

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

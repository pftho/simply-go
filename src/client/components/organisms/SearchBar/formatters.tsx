import { Trip } from "../../../types/trip/types";

interface Option {
  value: string;
  label: string;
}

export const locationOptions = (trips: Trip[]) => {
  const locationWithDuplicates = trips.map((trip) => ({
    value: trip.id,
    label: trip.name,
  }));

  const uniqueLabels: { [key: string]: boolean } = {};
  const locationsWithoutDuplicated: Option[] = [];

  for (const option of locationWithDuplicates) {
    if (!uniqueLabels[option.label]) {
      uniqueLabels[option.label] = true;
      locationsWithoutDuplicated.push(option);
    }
  }

  return locationsWithoutDuplicated.sort((a, b) =>
    a.label.localeCompare(b.label)
  );
};

export const budgetOptions = (trips: Trip[]) => {
  const budgetsWithDuplicates: Option[] = trips.map((trip) => ({
    value: trip.id,
    label: `${trip.recommandedBudget}`,
  }));

  const uniqueLabels: { [key: string]: boolean } = {};
  const budgetsWithoutDuplicated: Option[] = [];

  for (const option of budgetsWithDuplicates) {
    if (!uniqueLabels[option.label]) {
      uniqueLabels[option.label] = true;
      budgetsWithoutDuplicated.push(option);
    }
  }

  budgetsWithoutDuplicated.sort((a, b) => a.label.localeCompare(b.label));

  return budgetsWithoutDuplicated;
};

import { activitiesBali } from "../activity/mocks";
import { maelyssArnaud, paulineThomas } from "../user/mocks";
import { Trip } from "./types";

export const japan: Trip = {
  _id: "612fd241b8d481234567890c",
  name: "Japan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: [],
  holidayTimeframe: "Spring",
  recommandedBudget: 4000,
  owner: paulineThomas,
  imageUrl:
    "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80",
};

export const morocco: Trip = {
  _id: "612fd241b8d481234567890d",
  name: "Morocco",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: [],
  holidayTimeframe: "Spring",
  recommandedBudget: 2000,
  owner: paulineThomas,
  imageUrl:
    "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80",
};

export const iceland: Trip = {
  _id: "612fd241b8d481234567890e",
  name: "Iceland",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: [],
  holidayTimeframe: "Winter",
  recommandedBudget: 6000,
  owner: paulineThomas,
  imageUrl:
    "https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
};

export const perpignan: Trip = {
  _id: "612fd241b8d481234567890f",
  name: "Perpignan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: [],
  holidayTimeframe: "Summer",
  recommandedBudget: 1000,
  owner: maelyssArnaud,
  imageUrl:
    "https://images.unsplash.com/photo-1635417709354-fcf07dadd917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
};

export const ireland: Trip = {
  _id: "612fd241b8d4812345678910",
  name: "Ireland",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: [],
  holidayTimeframe: "Winter",
  recommandedBudget: 1500,
  owner: maelyssArnaud,
  imageUrl:
    "https://images.unsplash.com/photo-1509384658642-3f88b1291b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
};

export const australia: Trip = {
  _id: "612fd241b8d4812345678911",
  name: "Australia",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: [],
  holidayTimeframe: "Winter",
  recommandedBudget: 5000,
  owner: paulineThomas,
  imageUrl:
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
};

export const bali: Trip = {
  _id: "612fd241b8d4812345678912",
  name: "Bali",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  activities: activitiesBali,
  holidayTimeframe: "Spring",
  recommandedBudget: 5000,
  owner: paulineThomas,
  imageUrl:
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
};

export const trips: Trip[] = [
  japan,
  morocco,
  iceland,
  perpignan,
  ireland,
  australia,
  bali,
];

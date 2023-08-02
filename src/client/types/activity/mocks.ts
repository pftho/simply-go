import { Activity } from "./types";
import { bali } from "./../trip/mocks";
import { ActivityTypeEnum } from "./enums";

export const yehPulu: Activity = {
  _id: "612fd241b8d4812345678913",
  name: "Yeh Pulus",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla nec lectus interdum malesuada. Nunc molestie tortor vitae lacus dapibus sodales id non mi. Morbi lacinia lobortis metus in viverra. Ut sollicitudin dignissim tincidunt. Nam porta dui id ornare fermentum. Proin varius auctor enim ac elementum. Nam eu ex pulvinar, blandit magna id, varius turpis. Vestibulum pellentesque urna eget pulvinar hendrerit. Proin porttitor et metus vel ultricies. Aenean posuere tellus ullamcorper velit scelerisque, eget finibus mi interdum. Praesent vel viverra purus. Pellentesque mauris diam, vehicula et neque et, rutrum efficitur mi. Vivamus venenatis justo fringilla faucibus vehicula. Donec ut eleifend arcu.",
  type: ActivityTypeEnum.CULTURE,
  trip: bali,
};

export const tirtaEmpul: Activity = {
  _id: "612fd241b8d4812345678914",
  name: "Tirta Empul",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla nec lectus interdum malesuada. Nunc molestie tortor vitae lacus dapibus sodales id non mi. Morbi lacinia lobortis metus in viverra. Ut sollicitudin dignissim tincidunt. Nam porta dui id ornare fermentum. Proin varius auctor enim ac elementum. Nam eu ex pulvinar, blandit magna id, varius turpis. Vestibulum pellentesque urna eget pulvinar hendrerit. Proin porttitor et metus vel ultricies. Aenean posuere tellus ullamcorper velit scelerisque, eget finibus mi interdum. Praesent vel viverra purus. Pellentesque mauris diam, vehicula et neque et, rutrum efficitur mi. Vivamus venenatis justo fringilla faucibus vehicula. Donec ut eleifend arcu.",
  type: ActivityTypeEnum.CULTURE,
  trip: bali,
};

export const drinks: Activity = {
  _id: "612fd241b8d4812345678915",
  name: "Tasting of Balinese drinks",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla nec lectus interdum malesuada. Nunc molestie tortor vitae lacus dapibus sodales id non mi. Morbi lacinia lobortis metus in viverra. Ut sollicitudin dignissim tincidunt. Nam porta dui id ornare fermentum. Proin varius auctor enim ac elementum. Nam eu ex pulvinar, blandit magna id, varius turpis. Vestibulum pellentesque urna eget pulvinar hendrerit. Proin porttitor et metus vel ultricies. Aenean posuere tellus ullamcorper velit scelerisque, eget finibus mi interdum. Praesent vel viverra purus. Pellentesque mauris diam, vehicula et neque et, rutrum efficitur mi. Vivamus venenatis justo fringilla faucibus vehicula. Donec ut eleifend arcu.",
  type: ActivityTypeEnum.GOINGOUT,
  trip: bali,
};

export const massage: Activity = {
  _id: "612fd241b8d4812345678916",
  name: "Massage at the hotel",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla nec lectus interdum malesuada. Nunc molestie tortor vitae lacus dapibus sodales id non mi. Morbi lacinia lobortis metus in viverra. Ut sollicitudin dignissim tincidunt. Nam porta dui id ornare fermentum. Proin varius auctor enim ac elementum. Nam eu ex pulvinar, blandit magna id, varius turpis. Vestibulum pellentesque urna eget pulvinar hendrerit. Proin porttitor et metus vel ultricies. Aenean posuere tellus ullamcorper velit scelerisque, eget finibus mi interdum. Praesent vel viverra purus. Pellentesque mauris diam, vehicula et neque et, rutrum efficitur mi. Vivamus venenatis justo fringilla faucibus vehicula. Donec ut eleifend arcu.",
  type: ActivityTypeEnum.RELAXING,
  trip: bali,
};

export const activitiesBali: Activity[] = [
  yehPulu,
  tirtaEmpul,
  drinks,
  massage,
];

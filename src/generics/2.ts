type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

//Приклад для перевіки
const topObject = { name: "Top", position: 1, color: "red", weight: 10 };
const bottomObject = { name: "Bottom", position: 2, color: "blue", weight: 20 };

const resultOfCompare = compare(topObject, bottomObject);
console.log(resultOfCompare);

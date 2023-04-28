// For a real auction, set this to false
export const isDemo = true;

// Specify item details
let items = [
  {
    primaryImage: "https://brandonthegamedev.com/wp-content/uploads/2019/10/Tapestry-Board-Game.jpg",
    title: "Tapestry",
    subtitle: "Som ny - brukt en gang",
    detail: "test test",
    secondaryImage: "https://brandonthegamedev.com/wp-content/uploads/2019/10/Tapestry-Board-Game.jpg",
    amount: 300,
    endTime: "2023-05-31T00:00:00+00:00",
  },
  {
    primaryImage: "https://d3ur8vwbngpbs7.cloudfront.net/assets/editorial/2020/02/parks-board-game-cover.jpg",
    title: "Parks",
    subtitle: "Ny i plastikk",
    detail: "test test",
    secondaryImage: "https://brandonthegamedev.com/wp-content/uploads/2019/10/Tapestry-Board-Game.jpg",
    amount: 250,
    endTime: "2023-05-31T00:00:00+00:00",
  },
  {
    primaryImage: "https://wheremeeplesmeet.files.wordpress.com/2019/02/img_4973.jpg?w=768",
    title: "Sea of clouds",
    subtitle: "Godt brukt",
    detail: "test test",
    secondaryImage: "https://brandonthegamedev.com/wp-content/uploads/2019/10/Tapestry-Board-Game.jpg",
      amount: 200,
      endTime: "2023-05-31T00:00:00+00:00",
  },
  {
    primaryImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6YurAKjuE7SVvcngTB8b-GS9aNn366uHIw&usqp=CAU",
    title: "Paladins of the West Kingdom",
    subtitle: "Som ny - brukt en gang",
    detail: "",
    secondaryImage: "https://brandonthegamedev.com/wp-content/uploads/2019/10/Tapestry-Board-Game.jpg",
    amount: 200,
    endTime: "2023-05-31T00:00:00+00:00",
  }
];

// Fill missing fields with random information
async function generateRandomItemData(items) {
  // Random cat names
  await $.getJSON(
    "https://random-data-api.com/api/name/random_name",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].title ||= elem.name;
      });
    }
  );
  // Random lorem ipsum cat descriptions
  await $.getJSON(
    "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].subtitle ||= elem.short_sentence;
        items[i].detail ||= elem.very_long_sentence;
      });
    }
  );
  // Random cat images
  for (let i = 0; i < items.length; i++) {
    items[i].primaryImage ||= "https://cataas.com/cat/cute?random=" + i;
    items[i].secondaryImage ||= "https://cataas.com/cat/cute?random=" + i;
  }
  return items;
}

export async function getItems() {
  items = isDemo ? await generateRandomItemData(items) : items;
  // Insert the index from the unsorted array as the item ID
  items.forEach((item, idx) => (item.id = idx));
  // Parse endTime from ISO 8601 string
  items.forEach((item) => (item.endTime = new Date(item.endTime)));
  // Sort items in ascending end time
  items.sort((a, b) => a["endTime"] - b["endTime"]);
  return items;
}

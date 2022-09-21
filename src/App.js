import React from "react";
import SteinStore from "stein-js-client";

function App() {
  const store = new SteinStore("https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4");

  React.useEffect(() => {
  store.read("list").then(data => {
    console.log(data);
  });
  }, []);

  const handleAdd = () => {
    store.append("Sheet1", [
          {
            title: "add",
            author: "Me!",
            content: "A brief summary",
            link: "blog.me.com/awesome-article"
          }
        ])
        .then(res => {
          console.log(res);
        });
  }

  const handleUpdate = () => {
      store
          .edit("Sheet1", {
              search: { author: "Me!" },
              set: { title: "Currently Unavailable" }
          })
          .then(res => {
              console.log(res);
          });
  }

  const handleDelete = () => {
      store
          .delete("Sheet1", {
              search: { author: "Me!" }
          })
          .then(res => {
              console.log(res);
          });
  }
  return (
    <div className="App">
      <button onClick={handleAdd}>add</button>
      <button onClick={handleUpdate}>update</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default App;

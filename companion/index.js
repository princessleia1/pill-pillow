import { settingsStorage } from "settings";
import { outbox } from "file-transfer";
import * as cbor from "cbor";

settingsStorage.onchange = function(evt) {
  console.log("onchange: " + JSON.stringify(evt));
  sendTodoItems();
};

function sendTodoItems() {
  var todoItems = settingsStorage.getItem("todo_items");
  let colorSchemeName = settingsStorage.getItem("color_scheme_name");
  colorSchemeName = colorSchemeName
    ? JSON.parse(colorSchemeName)
    : "dodgerblue";

  if (todoItems) {
    try {
      var date = new Date();
      var time = date.getTime();
      todoItems = {
        timestamp: time,
        todo: JSON.parse(todoItems),
        colorSchemeName: colorSchemeName
      };
      outbox
        .enqueue("todoItems.cbor", cbor.encode(todoItems))
        .then(ft => {
          console.log("todos sent");
        })
        .catch(error => {
          console.log("Error sending todos: " + error);
        });
    } catch (e) {
      console.log("error parsing setting value: " + e);
    }
  }
}
sendTodoItems();

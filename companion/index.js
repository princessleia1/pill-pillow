import { settingsStorage } from "settings";
import { outbox } from "file-transfer";
import * as cbor from "cbor";

settingsStorage.onchange = function(evt) {
  console.log("onchange: " + JSON.stringify(evt));
  sendmeditems();
};

function sendmeditems() {
  var meditems = settingsStorage.getItem("med_items");
  let colorSchemeName = settingsStorage.getItem("color_scheme_name");
  colorSchemeName = colorSchemeName
    ? JSON.parse(colorSchemeName)
    : "dodgerblue";

  if (meditems) {
    try {
      var date = new Date();
      var time = date.getTime();
      meditems = {
        timestamp: time,
        todo: JSON.parse(meditems),
        colorSchemeName: colorSchemeName
      };
      outbox
        .enqueue("meditems.cbor", cbor.encode(meditems))
        .then(ft => {
          console.log("Pill Sent");
        })
        .catch(error => {
          console.log("Error Sending Pills: " + error);
        });
    } catch (e) {
      console.log("Error Parsing Setting Value: " + e);
    }
  }
}
sendmeditems();
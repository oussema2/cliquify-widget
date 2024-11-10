// Widget.js
import { useEffect, useState } from "react";
import WidgetPopUp from "./Containers/widget-popup";
import WidgetStory from "./Containers/widget-story";
import WidgetWithModal from "./Containers/widget-with-modal";
import axios from "axios";
const Widget = () => {
  const options = window.WIDGET_PROPERTIES;
  const [widgetData, setwidgetData] = useState({});
  useEffect(() => {
    console.log("runned");
    const element = document.getElementById("widget-id");
    console.log(element);
    (async () => {
      const response = await axios.get(
        "http://localhost:4444/api/widgets/672f2b2e8935503c9c80dcc9"
      );
      if (response.data) {
        setwidgetData(response.data);
      }
    })();
  }, []);

  console.log(options);
  const Components = {
    modal: <WidgetWithModal options={widgetData} />,
    popup: <WidgetPopUp options={widgetData} />,
    story: <WidgetStory options={widgetData} />,
  };
  // return Components["story"];
  return <h1>Hello xxx</h1>;
};

export default Widget;

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
    const attribute = element.getAttribute("data-widget-id");
    (async () => {
      const response = await axios.get(
        `http://localhost:4444/api/widgets/${attribute}`
      );
      if (response.data) {
        setwidgetData(response.data);
      }
    })();
  }, []);

  console.log(options);
  const Components = {
    Modal: <WidgetWithModal options={widgetData} />,
    PopUp: <WidgetPopUp options={widgetData} />,
    Story: <WidgetStory options={widgetData} />,
  };
  if (!widgetData && !widgetData.videos) {
    return null;
  }
  if (!Components[widgetData.type]) {
    return null;
  }
  return Components[widgetData.type];
};

export default Widget;

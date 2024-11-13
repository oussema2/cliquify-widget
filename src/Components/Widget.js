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
    (async () => {
      const element = document.getElementById("widget-id");
      const attribute = element
        ? element.getAttribute("data-widget-id")
        : "67313bdc99d513fdc0ed1808";
      const response = await axios.get(
        `https://widget-backend.vercel.app/api/widgets/${attribute}`
      );
      if (response.data) {
        setwidgetData(response.data);
      }
    })();
  }, []);

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
  // return <h1>Hello</h1>;

  return Components[widgetData.type];
};

export default Widget;

// Widget.js
import { useEffect } from "react";
import WidgetPopUp from "./Containers/widget-popup";
import WidgetStory from "./Containers/widget-story";
import WidgetWithModal from "./Containers/widget-with-modal";
const Widget = () => {
  const options = window.WIDGET_PROPERTIES;
  useEffect(() => {
    console.log("runned");
    const element = document.getElementById("widget-id");
    console.log(element);
  }, []);

  console.log(options);
  const Components = {
    modal: <WidgetWithModal options={options} />,
    popup: <WidgetPopUp options={options} />,
    story: <WidgetStory />,
  };
  return Components["story"];
};

export default Widget;

// Widget.js
import WidgetPopUp from "./Containers/widget-popup";
import WidgetWithModal from "./Containers/widget-with-modal";
const Widget = () => {
  const options = window.WIDGET_PROPERTIES;
  console.log(options);
  const Components = {
    "widget-with-modal": <WidgetWithModal />,
    "widget-popup": <WidgetPopUp />,
  };
  return Components["widget-with-modal"];
};

export default Widget;

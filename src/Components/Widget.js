// Widget.js
import WidgetPopUp from "./Containers/widget-popup";
import WidgetWithModal from "./Containers/widget-with-modal";
const Widget = () => {
  const options = window.VIDEOASK_EMBED_CONFIG;
  const Components = {
    "widget-with-modal": <WidgetWithModal />,
    "widget-popup": <WidgetPopUp />,
  };
  return Components["widget-popup"];
};

export default Widget;

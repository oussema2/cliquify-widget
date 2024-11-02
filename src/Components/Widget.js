// Widget.js
import WidgetPopUp from "./Containers/widget-popup";
import WidgetWithModal from "./Containers/widget-with-modal";
const Widget = () => {
  const options = window.WIDGET_PROPERTIES;
  console.log(options);
  const Components = {
    modal: <WidgetWithModal options={options} />,
    popup: <WidgetPopUp options={options} />,
  };
  return Components[options.widgetType];
};

export default Widget;

import { NodeConfig } from "./nodeConfig";


const inputTextNodeConfig: NodeConfig = {
  nodeName: "Input",
  icon: "FaUserCircle",
  fields: [
    {
      type: "textarea",
      name: "inputText",
      //label: "Input",
      placeholder: 'InputPlaceholder',
    },
  ],
  outputType: "text",
  defaultHideOutput: true,
  section: 'input',
  helpMessage: 'inputHelp'
};

export default inputTextNodeConfig;

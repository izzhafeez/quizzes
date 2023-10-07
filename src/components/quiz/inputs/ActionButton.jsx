const ActionButton = ({ text, color, action, ...params }) => {
  return <button
    className={`bg-${color} hover:bg-${color}-light py-1 px-2 rounded-md text-light text-sm`}
    onClick={action(params)}>{text}</button>;
  };

export default ActionButton;
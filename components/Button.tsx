export const Button = (props: any) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded  ${props.className} `}
    >
      {props.children}
    </button>
  );
};



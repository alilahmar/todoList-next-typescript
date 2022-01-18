
// props will inserted when we use this component

export const TextField = (props: any) => {
  return (
    <div className={`relative mr-6 my-2 ${props.className}`}>
      <input
        type={props.type}
        className={`bg-purple-white shadow rounded border-0 p-3 w-full`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

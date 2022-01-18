import { DropDown, DropDownItem } from "./Drowpdown";

export const List = (props: any) => {
  return <ul className="flex flex-col list-style-none">{props.children}</ul>;
};

export const ListItem = (props: any) => {
  return (
    <li className="flex flex-row justify-between my-3">
      <span className="flex flex-col">
        <span className="text-xl capitalize">{props.title}</span>
        <span className="text-gray-500">{props.description}</span>
      </span>

      <span className="text-gray text-sm flex flex-col items-end cursor-pointer">
        <DropDown>
          <DropDownItem label="delete" onClick={props.onDelete} />
          <DropDownItem label="edit" onClick={props.onEdit} />
        </DropDown>
        <span>{props.state}</span>
      </span>
    </li>
  );
};

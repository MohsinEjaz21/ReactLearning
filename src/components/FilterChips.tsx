import { Card, Tag } from "antd";
import { CustomBtn } from "./CustomBtn";

export function FilterTag({ tags }) {

  function applyFilters() { }
  function handleTagClose(tag) {
    console.log("close filter called", tag)
  }

  return (<Card>
    {tags.map(tag =>
      <Tag color="magenta" key={`${tag.column}${tag.operator}${tag.value}`} closable
        onClose={() => handleTagClose(tag)}>
        {tag.column} {tag.operator} {tag.value}
      </Tag>
    )}
    <CustomBtn label='Apply Filter' handleClick={applyFilters} />
  </Card>);
}

import { Card, Tag } from "antd";
import { FilterSubmitBtn } from "./FilterSubmitBtn";

export function FilterChips({ props: { tags, setTags } }) {
  function applyFilters() { }

  function handleTagClose(tag) {
    setTags(tags.filter(t => t !== tag));
    console.log("close filter called", tag)
  }

  function renderTags() {
    if (!!tags.length) {
      return (
        <Card>
          {tags.map(tag =>
            <Tag color="magenta" key={`${tag.column}${tag.operator}${tag.value}`} closable
              onClose={() => handleTagClose(tag)}>
              {tag.column} {tag.operator} {tag.value}
            </Tag>
          )}
          {tags.length ? <FilterSubmitBtn label='Apply Filter' handleClick={applyFilters} /> : null}
        </Card>
      )
    }
    return null;
  }

  return (renderTags());
}

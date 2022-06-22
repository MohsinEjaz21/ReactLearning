import { Card, Tag } from "antd";
import { CustomBtn } from "./CustomBtn";

export function FilterTag({ props: { tags, setTags } }) {
  // const [tags, setTags] = useState(props.tags);
  // console.log(props.tags)

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
          {tags.length ? <CustomBtn label='Apply Filter' handleClick={applyFilters} /> : null}
        </Card>
      )
    }
    return null;
  }

  return (renderTags());
}

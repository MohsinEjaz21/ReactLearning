import { Card, Tag } from "antd";
import { FilterSubmitBtn } from "./FilterSubmitBtn";

export function FilterChips({ props: { tags, setTags, applyFilters } }) {

  function makeQuery() {
    const duplicateCols = findduplicateColumns();
    let param: { key: string, value: string }[] = [];
    let query1 = "", query2 = "";
    duplicateCols.forEach(col => { query2 += createQueryForDuplicates([col], param) })
    query1 = createQueryForNonDuplicates(duplicateCols, param) || "";
    const query = query1 + query2;
    applyFilters({ query, param });
  }

  function createQueryForNonDuplicates(duplicateCols, param) {
    let query = ""
    const nonDuplicates = tags.filter(({ column }) => !duplicateCols.includes(column));
    nonDuplicates.map((tag, index) => {
      if (index !== 0 && index !== nonDuplicates.length) {
        query += " AND ";
      }
      let tempColumn = tag.column.replace(".", "_");
      let key = `${tempColumn}_${index}`;
      query += `${tag.column} ${tag.operator} :${key}`;
      param.push({ key: key, value: tag.value })
    });
    if (!!query.length) {
      query = ` AND (${query})`;
    }
    return query;
  }


  function createQueryForDuplicates(duplicateCol, param) {
    let query = ""
    const duplicates = tags.filter(({ column }) => duplicateCol == column);
    duplicates.map((tag, index) => {
      if (index !== 0 && index !== duplicates.length) {
        query += " OR ";
      }
      let tempColumn = tag.column.replace(".", "_");
      let key = `${tempColumn}_${index}`;
      query += `${tag.column} ${tag.operator} :${key}`;
      param.push({ key: key, value: tag.value })

    });
    if (!!query.length) {
      query = ` AND (${query}) `;
    }
    return query;
  }

  function findduplicateColumns() {
    let columns = tags.map(tag => tag.column);
    const duplicateColumnSet = new Set();
    columns.map(column => {
      if (columnCountMoreThanOunce(column)) {
        duplicateColumnSet.add(column);
      }
    });
    return Array.from(duplicateColumnSet);
  }

  function columnCountMoreThanOunce(column) {
    let count = 0;
    tags.map(tag => {
      if (tag.column === column) count++;
    })
    return count > 1;
  }

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
          {tags.length ? <FilterSubmitBtn label='Apply Filter' handleClick={makeQuery} /> : null}
        </Card>
      )
    }
    return null;
  }

  return (renderTags());
}

import { DataTable } from '@src/components/widgets/DataTable';
import { FilterChips } from '@src/components/widgets/FilterChips';
import { Card } from 'antd';

export const UsersList = ({ props: { data, applyFilters, headerActions, columns, tags, setTags } }) => {
  return (
    <>
      <div className='container'>
        <Card title="Users" extra={headerActions} >
          <FilterChips props={{ tags, setTags, applyFilters }}></FilterChips>
          <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </>
  )
}

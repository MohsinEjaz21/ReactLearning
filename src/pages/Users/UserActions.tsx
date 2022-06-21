import { Button, FormInstance } from "antd"

export const UserActions = {
  filterFooterActions(handleCancel: Function, handleClear: Function, formRef: FormInstance) {
    return [
      handleCancel && <Button key="back" onClick={() => handleCancel(formRef)}> Cancel</Button>,
      handleClear && <Button key="clear" onClick={() => handleClear(formRef)}>Clear</Button>,
      formRef && <Button type="primary" htmlType="submit" onClick={() => { formRef.submit() }} >  Submit </Button>
    ]
  }
  // const filterFooterActions = UserActions.filterFooterActions(handleFilterCancel, handleResetFilterForm, filterFormRef)

}
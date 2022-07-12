import { notification } from "antd";
import { IFilterForm } from './../../interfaces/IFilterForm';

export class UtilsNotification {

  static filterTagExactlyMatch(tag: IFilterForm) {
    notification.info({
      message: `"${tag.column} ${tag.operator} ${tag.value}" already added`,
      placement: "topRight",
    });
  }

}
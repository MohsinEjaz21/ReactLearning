import { IApp } from "@src/interfaces";

export class OperatorUtils {
  // get operator based on datatypes
  static getOperator(dataType: IApp.EntityDataType) {
    switch (dataType) {
      case 'string':
        return [
          { value: "like", label: "contains" },
          { value: "=", label: "equals" },
          { value: "!=", label: "not equals" },
        ]
      case 'number':
        return [
          { value: ">", label: "greater than" },
          { value: ">=", label: "greater than equals" },
          { value: "<", label: "less than" },
          { value: "<=", label: "less than equals" },
          { value: "=", label: "equals" },
          { value: "!=", label: "not equals" }
        ]

      case 'date':
        return [
          { value: ">", label: "greater than" },
          { value: ">=", label: "greater than equals" },
          { value: "<", label: "less than" },
          { value: "<=", label: "less than equals" },
          { value: "=", label: "equals" },
          { value: "!=", label: "not equals" }
        ]

      case 'boolean':
        return [
          { value: "=", label: "equals" },
          { value: "!=", label: "not equals" }
        ]

      default:
        return []

    }
  }
  //  all possible datatypes interface

}


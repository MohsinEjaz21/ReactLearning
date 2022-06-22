
import { config } from "@src/config";
import axios from "axios";

export function GET(params: IGET) {
  const { data, url: routeTo, method = 'GET' } = params;
  console.log(`serverUrl is ${config.SERVER_URL}`);
  return (
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.token}`,
      },
      method: method,
      url: `${config.SERVER_URL}${routeTo}`,
    })
  )
}

interface IGET {
  data?: any
  url?: string
  method?: any,
  token?: string
}


import { Injectable } from "@nestjs/common";
import * as moment from "moment";

@Injectable()
export class Helpers {
  constructor() { }

  
  /**
   * Remove special character form string
   * @param str 
   * @returns 
   */
  removeSpecialCharacter(str: any) {
    return str.replace(/[^a-zA-Z ]/g, "");
  }

  /**
   * Check weahter string is empty or not
   * @param str 
   * @returns 
   */
  isEmpty(str: any) {
    return (!str || str.length === 0);
  }

  /**
   * Return current unix time
   * @returns 
   */
  async getCurrentUnixTime() {
    // moment.tz.setDefault("utc");
    return moment().unix();
  }


}

/* eslint-disable no-unused-vars */
import { Op } from 'sequelize';
import db from '@src/database/definitions/models';
import Util from '@src/core/utils';

const { Password } = Util;
abstract class BaseService {
  protected database: any;

  protected op: any;

  protected PAGE_SIZE = 10;

  protected Password = Password;

  constructor() {
    this.op = Op;
    this.database = db;
  }

  protected abstract transation(data?: any): Promise<void | any>;

  public async call(data?: any): Promise<void | any> {
    try {
      return await this.transation(data);
    } catch (err: any) {
      console.log(err);
      return null;
    }
  }

  protected cursor(to = 0): { offset: number; limit: number } {
    const offset = to * this.PAGE_SIZE;

    const limit = this.PAGE_SIZE;

    return { offset, limit };
  }
}

export default BaseService;

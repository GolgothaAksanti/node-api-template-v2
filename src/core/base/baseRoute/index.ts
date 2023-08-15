import { Request, Response } from 'express';
import Base from '@src/core/base/base';

class BaseRoute extends Base {
  req = Request;

  res = Response;
}

export default BaseRoute;

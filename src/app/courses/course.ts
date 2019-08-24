import { getUUID } from '../../utils/utils';
export interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export class Course implements ICourse {
  id: string;

  constructor(
    public title: string,
    public creationDate: Date,
    public duration: number,
    public description: string,
    public topRated: boolean
    ) {
    this.id = getUUID();
  }
}

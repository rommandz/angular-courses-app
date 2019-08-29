import { getUUID } from '../../utils/utils';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}
export interface ICourse {
  id: string;
  name: string;
  date: string;
  duration: number;
  description: string;
  isTopRated: boolean;
  authors?: Author[];
}

export class Course implements ICourse {
  id: string;

  constructor(
    public name: string,
    public date: string,
    public duration: number,
    public description: string,
    public isTopRated: boolean,
    public authors?: Author[]
    ) {
    this.id = getUUID();
  }
}

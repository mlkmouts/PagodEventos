import { IBanda } from "./ibanda";
import { ILocal } from "./ilocal";

export interface IEvento {
    id: number;
    banda: IBanda;
    local: ILocal;
    data: Date;
}

import { IEvento } from "./ievento";
import { ILocal } from "./ilocal";
import { IBanda } from "./ibanda";

export class Evento implements IEvento {
    id: number;
    banda: IBanda;
    local: ILocal;
    data: Date;

    constructor(id: number, banda: IBanda, local: ILocal, data: Date) {
        this.id = id;
        this.banda = banda;
        this.local = local;
        this.data = data;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getBanda(): IBanda {
        return this.banda
    }

    setBanda(banda: IBanda): void {
        this.banda = banda;
    }
    getLocal(): ILocal {
        return this.local;
    }

    setLocal(local: ILocal): void {
        this.local = local;
    }

    getData(): Date {
        return this.data;
    }

    setData(data: Date): void {
        this.data = data;
    }
}

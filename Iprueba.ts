export interface ISotfaware{
    id:number;
    name:string;
    price:number;
    detail:string;
    requerements: IRequirement[];
}
export interface IRequirement{
    id:number;
    description:string;
    cost:number;
    effort:number;
    softwareId:number;
}
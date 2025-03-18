
import { MenuListTypes } from "../types/DataTypes"
export interface responseCart{
    id: number,
    menu_id: number,
    jumlah:number,
    catatan:string,
    date_time:string,
    total_harga:number,
    menu:MenuListTypes,
}
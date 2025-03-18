export interface MenuListTypes{
    map(arg0: (MenuList: MenuListTypes, Index: number) => JSX.Element): import("react").ReactNode;
    id:number,
    menu_name:string,
    desc:string,
    price:number,
    photo_menu:string,
    category:string
}
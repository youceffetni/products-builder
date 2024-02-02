export interface IProduct{
    id?:string,
    title:string,
    description:string,
    thumbnail:string,
    price:string,
    colors:string[],
    category:{
        label:string,
        thumbanil:string
    }
}
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


export interface IFormInput{
    id:string,
    name:"title" |"thumbnail" | "description" | "price",
    label:string,
    type:string
}
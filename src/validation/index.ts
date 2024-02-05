/**
 * 
 * @param product product object you want to validate it 
 * @returns object of errors validations
 */


export const productValidation = (product:{title:string,description:string,thumbnail:string,price:string})=>{
    
    const errors:{title:string,description:string,thumbnail:string,price:string}={
        title:"",
        description:"",
        thumbnail:"",
        price:""
    };
    

    let {title,description,thumbnail,price}=product

    //First validation : to clean string from white space

     title=title.trim();
     description=description.trim();
     thumbnail=thumbnail.trim();
     price=price.trim();


    //Regular exprssion for url
    const validUrl=/^(http|https|ftp):\/\/[^\s/".$?#].[^\s]*$/i.test(thumbnail);

    if(title.length<6 || title.length > 15)
        errors.title="The title must be between 6 and 15 caracters";
    if(description.length<6 || description.length > 500)
         errors.description="The description must be between 6 and 80 caracters";
    if(!validUrl)
         errors.thumbnail="Please Type valid url image";
    if(isNaN(Number(price)) || Number(price)<=0)
         errors.price="Please enter valid price";

    return errors;


}
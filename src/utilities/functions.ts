
/**
 * 
 * @param {string} text The input text must be sliced 
 * @param {number} max  The max length of text before slicing
 * @returns The sliced text after operations ...
 */
export const textSlicer=(text:string,max:number=50)=>{

    if(text.length>=max) return `${text.slice(0,50)}...`;

    return text;

}
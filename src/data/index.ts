import { IFormInput, IProduct } from "../interfaces";


export const products:IProduct[]=[
    {
        id: "1",
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        price:"$ 549",
        colors:["#8e44ad","#2c3e50","#2980b9"],
        category:{
            label:"smartphones",
            thumbanil:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        }
    },
    {
        id: "2",
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        thumbnail:"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        price:"$899",
        colors:["#8244ad","#2d3e50","#2580b9"],
        category:{
            label:"smartphones",
            thumbanil:"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        }
    },{
        id: "3",
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        price:"$ 549",
        colors:["#8e44ad","#2c3e50","#2980b9"],
        category:{
            label:"smartphones",
            thumbanil:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        }
    },{
        id: "4",
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        thumbnail:"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        price:"$899",
        colors:["#8244ad","#2d3e50","#2580b9"],
        category:{
            label:"smartphones",
            thumbanil:"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        }
    },
    {
        id: "5",
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        price:"$ 549",
        colors:["#8e44ad","#2c3e50","#2980b9"],
        category:{
            label:"smartphones",
            thumbanil:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        }
    },
]



export const formInputList:IFormInput[]=[

    {
        id:"title",
        name:"title",
        label:"Product title",
        type:"text"
    },
    {
        id:"description",
        name:"description",
        label:"Description",
        type:"text"
    }
    ,
    {
        id:"image",
        name:"thumbnail",
        label:"Product image url",
        type:"text"
    },{
        id:"price",
        name:"price",
        label:"Price",
        type:"text"
    },
   
]
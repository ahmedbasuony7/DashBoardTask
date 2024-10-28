
//  import  image 

import { Avatar } from '@mui/material';
import { useMemo } from 'react';

import    image1  from '../assets/Images/ProductsImages/product-9-QjzjrKiB.png';
import    image2  from '../assets/Images/ProductsImages/product-8-Cf3SA-G6.png';
import    image3  from '../assets/Images/ProductsImages/product-4-DFgkpWuT.png';
import    image4  from '../assets/Images/ProductsImages/product-3-CZYi_qj2.png';
import    image5  from '../assets/Images/ProductsImages/product-5-DdJ9Fgv8.png';
import    image6  from '../assets/Images/ProductsImages/product-6-EwGW6MNT.png';
import    image7  from '../assets/Images/ProductsImages/product-7-f20dAlpx.png';
import    image11  from '../assets/Images/ProductsImages/product-11-g0eMNqQW.png';
import    image12  from '../assets/Images/ProductsImages/product-12-CJazjqwj.png';
import    image13  from '../assets/Images/ProductsImages/product-10-B5arZG0A.png';
import    image14  from '../assets/Images/ProductsImages/product-1-sYyoAFpb.png';
import    image15  from '../assets/Images/ProductsImages/product-2-DBAvePsR.png';

//  import  icons 
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


//  tablee rows & colums
export  const rows   = [
    {
        id : "1" , 
        img : image1 ,
        ItemName : "Apple iPad ProSilver " ,
        Price : "$1,399.00"	 ,
        stock : 48 ,
        Category : "Tablets" , 
        Rating :  "	4.6 out of 55 reviews",
        Actions  :  "View",
    } ,

    {
        id : "2" , 
        img : image2,
        ItemName : "Apple iPad Pro Space Gray " ,
        Price : "$ 1,399.00	"	 ,
        stock : 48 ,
        Category : "Tablets" , 
        Rating :  "4.3 out of 25 reviews",
        Actions  :  "View",
    } ,

    {
        id : "3" , 
        img :image3  ,
        ItemName : " Apple iPhone 15 Pro Max Blue Titanium " ,
        Price : "$ 1499.00	"	 ,
        stock : 38 ,
        Category : "Smartphones" , 
        Rating :  "4.6 out of 40 reviews" ,
        Actions  :  "View",
    } ,

    {
        id : "4" ,
        img : image4 ,
        ItemName : " Apple iPhone 15 Pro Max  Natural Titanium " ,
        Price : "$ 1499.00	"	 ,
        stock : 30 ,
        Category :  "Smartphones", 
        Rating : " 4.8  out of 50 reviews " ,
        Actions  :  "View",
    } ,

    {
        id : "5" , 
        img : image5  ,
        ItemName : "Apple iPhone 15 Pro Max  White Titanium" ,
        Price : "$ 1499.00	"	 ,
        stock : 45	 ,
        Category : "Smartphones" , 
        Rating :  " 4.9 out of 60 reviews " ,
        Actions  :  "View",
    } ,

    {
        id : "6" , 
        img : image6, 
        ItemName : "Apple MacBook Pro 16  Silver " ,
        Price : "$ 2,399.00	"	 ,
        stock : 55 ,
        Category : "Notebooks" , 
        Rating :  " 4.7  out of 45 reviews ",
        Actions  :  "View",
    } ,

    {
        id : "7" , 
        img : image7 , 
        ItemName : "Apple MacBook Pro 16 pace Black" ,
        Price : "$ 2,399.00"	 ,
        stock : 50 ,
        Category : "Notebooks" , 
        Rating : " 4.4 out of 30 reviews ",
        Actions  :  "View",
    } ,

    {
        id : "8" , 
        img : image11 , 
        ItemName : "   Apple Watch SE Midnight " ,
        Price : "$ 299.00	"	 ,
        stock : 49 ,
        Category : "Smartwatches" , 
        Rating : "4.7 out of 40 reviews" ,
        Actions  :  "View",
    } ,

    {
        id : "9" , 
        img : image12 , 
        ItemName : "Apple Watch SE Silver " ,
        Price : "$ 299.00"	 ,
        stock : 30 ,
        Category : "Smartwatches" , 
        Rating : "4.7 out of 40 reviews" ,
        Actions  :  "View",
    } ,
    {
        id : "10" , 
        img : image13  , 
        ItemName : "Apple Watch SE Starlight " ,
        Price : "$ 299.00	"	 ,
        stock : 54 ,
        Category : "Smartwatches" , 
        Rating : "4.5 out of 35 reviews" ,
        Actions  :  "View",
    } ,

    {
        id : "11" , 
        img : image14  ,   
        ItemName : " Apple Watch Series 9Midnight " ,
        Price : "$ 349.00"	 ,
        stock : 42 ,
        Category : 'Smartwatches' , 
        Rating : "4.2 out of 20 reviews" ,
        Actions  :  "View",
    } ,

    {
        id : "12" , 
        img : image15 , 
        ItemName : "Apple Watch Series 9 Starlight " ,
        Price : "$ 349.00	"	 ,
        stock : 54 ,
        Category : "Smartwatches" , 
        Rating : "4.5 out of 35 reviews" ,
        Actions  :  "View",
    } ,

];

let  productData = [
    {
        img : "../assets/Images/ProductsImages/product-9-QjzjrKiB.png ",
        ItemName : "Apple iPad ProSilver " ,
        Price : "$1,399.00"	 ,
        stock : 48 ,
        Category : "Tablets" , 
        Rating :  "	4.6 out of 55 reviews",
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-8-Cf3SA-G6.png" ,
        ItemName : "Apple iPad Pro Space Gray " ,
        Price : "$ 1,399.00	"	 ,
        stock : 48 ,
        Category : "Tablets" , 
        Rating :  "4.3 out of 25 reviews",
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-4-DFgkpWuT.png"  ,
        ItemName : " Apple iPhone 15 Pro Max Blue Titanium " ,
        Price : "$ 1499.00	"	 ,
        stock : 38 ,
        Category : "Smartphones" , 
        Rating :  "4.6 out of 40 reviews" ,
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-3-CZYi_qj2.png" ,
        ItemName : " Apple iPhone 15 Pro Max  Natural Titanium " ,
        Price : "$ 1499.00	"	 ,
        stock : 30 ,
        Category :  "Smartphones", 
        Rating : " 4.8  out of 50 reviews " ,
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-5-DdJ9Fgv8.png"  ,
        ItemName : "Apple iPhone 15 Pro Max  White Titanium" ,
        Price : "$ 1499.00	"	 ,
        stock : 45	 ,
        Category : "Smartphones" , 
        Rating :  " 4.9 out of 60 reviews " ,
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-6-EwGW6MNT.png", 
        ItemName : "Apple MacBook Pro 16  Silver " ,
        Price : "$ 2,399.00	"	 ,
        stock : 55 ,
        Category : "Notebooks" , 
        Rating :  " 4.7  out of 45 reviews ",
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-7-f20dAlpx.png ", 
        ItemName : "Apple MacBook Pro 16 pace Black" ,
        Price : "$ 2,399.00"	 ,
        stock : 50 ,
        Category : "Notebooks" , 
        Rating : " 4.4 out of 30 reviews ",
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-11-g0eMNqQW.png ", 
        ItemName : "   Apple Watch SE Midnight " ,
        Price : "$ 299.00	"	 ,
        stock : 49 ,
        Category : "Smartwatches" , 
        Rating : "4.7 out of 40 reviews" ,
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-12-CJazjqwj.png ", 
        ItemName : "Apple Watch SE Silver " ,
        Price : "$ 299.00"	 ,
        stock : 30 ,
        Category : "Smartwatches" , 
        Rating : "4.7 out of 40 reviews" ,
        Actions  :  "View",
    } ,
    {
        img : "../assets/Images/ProductsImages/product-11-g0eMNqQW.png ", 
        ItemName : "Apple Watch SE Starlight " ,
        Price : "$ 299.00	"	 ,
        stock : 54 ,
        Category : "Smartwatches" , 
        Rating : "4.5 out of 35 reviews" ,
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-1-sYyoAFpb.png ", 
        ItemName : " Apple Watch Series 9Midnight " ,
        Price : "$ 349.00"	 ,
        stock : 42 ,
        Category : 'Smartwatches' , 
        Rating : "4.2 out of 20 reviews" ,
        Actions  :  "View",
    } ,

    {
        img : "../assets/Images/ProductsImages/product-2-DBAvePsR.png ", 
        ItemName : "Apple Watch Series 9 Starlight " ,
        Price : "$ 349.00	"	 ,
        stock : 54 ,
        Category : "Smartwatches" , 
        Rating : "4.5 out of 35 reviews" ,
        Actions  :  "View",
    } ,

];


//   end  product  Page  //



//  start  customer  Page 










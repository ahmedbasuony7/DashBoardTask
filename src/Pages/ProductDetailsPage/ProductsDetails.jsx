

//  import  images 
import  img1   from  '../../assets/Images/ProdutDetailsImges/product-detail-1-1b1J-WZw.png';
import  img2   from  '../../assets/Images/ProdutDetailsImges/product-detail-2-Bjazwqyh.png';
import  img3   from  '../../assets/Images/ProdutDetailsImges/product-detail-3-CxOgHpT5.png';
import  img4   from  '../../assets/Images/ProdutDetailsImges/product-detail-4-Ba66yTmM.png';
import  img5   from  '../../assets/Images/ProdutDetailsImges/product-11-g0eMNqQW.png';

import  img6   from  '../../assets/Images/ProdutDetailsImges/product-3-CZYi_qj2.png';
import  img7   from  '../../assets/Images/ProdutDetailsImges/product-5-DdJ9Fgv8.png';
import  img8   from  '../../assets/Images/ProdutDetailsImges/product-7-f20dAlpx.png';
import  img9   from  '../../assets/Images/ProdutDetailsImges/product-9-QjzjrKiB.png';


//   import  material  icon 
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { RotateRight } from '@mui/icons-material';



function  ProductsDetails (  ) {
    return (
        <div className=" "  style={{backgroundColor:"#eee"}}>
            <div  className="container   p-5 "   style={{position:"relative"}} >

                <h4  className="" style={{fontSize:"22px" , fontWeight:"meduim"}}> Product Details  </h4>

                <div  className=" d-flex gap-3  flex-wrap  "  style={{backgroundColor:"white"}}>
                    <div  className="holderImages  gap-5  d-flex p-5  ">
                        <div  className='  block  '  >
                            <img className=' '  style={{width:"40px" , height:"60px"}}   src={img1} alt="" />
                            <br />
                            <img  className='mt-5 ' style={{width:"40px" , height:"60px"}}  src={img2} alt="" />
                            <br />
                            <img  className='mt-5 ' style={{width:"40px" , height:"60px"}}  src={img3} alt="" />
                            <br />
                            <img  className=' mt-5' style={{width:"40px" , height:"60px"}}   src={img4} alt="" />
                        </div>

                        <div  className=''>
                            <img  className=" "  style={{width:"400px"}}  src={img4} alt="" />
                        </div>
                    </div>

                    <div className="content  px-3  py-5  "  >
                        <div>
                            <span   style={{color:"rgb(63, 128, 234)"}} > Smartphones </span>
                            <p   className=' ' style={{color:"#495057"}}> Apple iPhone 15 Pro Max </p>

                            <span  className=' '   style={{}} > 
                                <span  style={{color:"yellow"}} > <StarOutlinedIcon /> </span>
                                <span  style={{color:"rgba(108, 117, 125, .75)"}}>
                                    4.6out of 40 reviews
                                </span>
                            </span>

                            <p  style={{color:"#495057"}}>  Price: $1499 USD  </p>
                            <p  style={{color:"rgba(108, 117, 125, .75)" , paddingRight:"45px" , width:"500px"}}> Introducing the Apple iPhone 15 Pro Max 256GB in Blue Titanium. Experience unparalleled performance with the lightning-fast A17 Pro chip, perfect for gaming and seamless multitasking. Capture stunning photos and videos with the triple-lens camera system, including standard, wide-angle, and telephoto lenses, complete with Night mode for low-light shots. </p>
                        </div>

                        <div>
                            <div  className=' d-flex  justify-content-between py-3   gap-5 '  style={{color:"rgba(108, 117, 125, .75)"}}>
                                <p> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database me-1"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>  
                                    Storage: 256 GB
                                </p>

                                <p  style={{marginRight:"70px"}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera me-1"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>            
                                    Megapixels: 48 MP
                                </p>
                            </div>

                            <div  className=' d-flex  justify-content-between    gap-5 '  style={{color:"rgba(108, 117, 125, .75)"}}>
                                <p> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-charging me-1"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12.667 8 10 12h4l-2.667 4"></path></svg>                             
                                    Battery: 29 hours
                                </p>

                                <p  style={{marginRight:"55px"}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog me-1"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>                                    
                                    Warranty: 24 Months
                                </p>
                            </div>
                        </div>

                        <div  className='buttonsHolder  d-flex  gap-2  '>
                            <button  className='btn   btn-primary  '  style={{fontSize:"14px"}} >  
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag me-1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                Buy Now
                            </button>

                            <button  className='btn     '  style={{fontSize:"14px" , color:"black" , backgroundColor:"#eee"}}>  
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart me-1"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                Add to cart 
                            </button>
                        </div>

                        <div className='pt-3  '>
                            <p> Color: </p>
                            <div  className='d-flex  gap-5'>
                                <div  className='mb-5'  style={{}}>
                                    <img  className='p-2  '   style={{width:"70px" ,border:"2px solid blue" , height:"80px"}}  src={img1} alt="" />
                                    <p  className='pt-1'   style={{color:"rgba(108, 117, 125, .75)" , textAlign:"center"}}>  Blue  </p>
                                </div>

                                <div  className='mt-2'>
                                    <img  className=''    style={{width:"50px" , height:"60px"}}  src={img6} alt="" />
                                    <p  className='pt-3'   style={{color:"rgba(108, 117, 125, .75)" , textAlign:"center"}}>  White  </p>
                                </div>

                                <div   className='mt-2'>
                                    <img  className=''    style={{width:"50px" , height:"60px"}}  src={img7} alt="" />
                                    <p  className='pt-3'   style={{color:"rgba(108, 117, 125, .75)" , textAlign:"center"}}>  Natural  </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <p  className=' mt-3 '  style={{fontSize:"18px"}}> Specifications </p>
                </div>

                <div  className=' mt-2  py-3  px-5'  style={{backgroundColor:"white"}}   >

                    <div className='tableHolder'>
                        <table class="table">

                            <tbody>
                                <tr>
                                    <th scope="row"  style={{color:"#6c757d"}}> Category</th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}>Smartphones</td>
                                    <th scope="row"  style={{color:"#6c757d"}}> Year introduced</th>
                                    <td   style={{color:"rgba(108, 117, 125, .75)"}} >2023</td>
                                </tr>

                                <tr>
                                    <th scope="row"  style={{color:"#6c757d"}}> Brand</th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}>Apple</td>
                                    <th scope="row"  style={{color:"#6c757d"}}> Operating system  </th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}> iOS </td>
                                </tr>

                                <tr>
                                    <th scope="row"  style={{color:"#6c757d"}}> Product number</th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}>935277</td>
                                    <th scope="row"  style={{color:"#6c757d"}}> Operating system when introduced  </th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}>  	iOS 17 </td>
                                </tr>

                                <tr>
                                    <th scope="row"  style={{color:"#6c757d"}}> Warranty </th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}>	24 Months</td>
                                    <th scope="row"  style={{color:"#6c757d"}}> Update frequency </th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}> 		Each quarter </td>
                                </tr>

                                <tr>
                                    <th scope="row"  style={{color:"#6c757d"}}> Color </th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}>	Blue  </td>
                                    <th scope="row"  style={{color:"#6c757d"}}>Date of last security update  </th>
                                    <td  style={{color:"rgba(108, 117, 125, .75)"}}> September 2028 </td>
                                </tr>

                                
                            </tbody>
                        </table>

                    </div>

                </div>

                <div  className='productsCard  mt-3 '>
                    <div  className='d-flex pt-3  flex-wrap   gap-4 '    >
                        <div  className='d-flex gap-5    py-4  px-5'  style={{backgroundColor:"white"}}>
                            <div>
                                <img  className=''  src={img9} style={{backgroundColor:"white" , width:"80px" , height:"80px"}}  alt="" />
                            </div>

                            <div>
                                <h6> Apple iPad Pro </h6>
                                <p style={{ color:"#6c757d" }}>
                                    <span  className=' '   style={{width:"50px" , height:"50px"  , color:"peru"}}>   
                                        <StarOutlinedIcon />
                                    </span>                                    
                                    4.6out of 55 reviews
                                </p>
                                <p> $1,399.00 </p>

                            </div>
                        </div>

                        <div  className='d-flex    gap-4   py-4  px-5'  style={{backgroundColor:"white"}}>
                            <div>
                                <img  className=''  src={img5} style={{width:"80px" , height:"80px"}}  alt="" />
                            </div>

                            <div>
                                <h6> Apple iPad Pro </h6>
                                <p style={{ color:"#6c757d" }}>
                                    <span  className=' '   style={{width:"50px" , height:"50px"  , color:"peru"}}>   
                                        <StarOutlinedIcon />
                                    </span>                                   
                                    4.6out of 55 reviews
                                </p>
                                <p> $1,399.00 </p>
                            </div>
                        </div>

                        <div  className='d-flex  gap-4  py-4  px-5   '  style={{backgroundColor:"white"}}>
                            <div>
                                <img  className=''  src={img8} style={{width:"80px" , height:"80px"}}  alt="" />
                            </div>

                            <div>
                                <h6> Apple iPad Pro </h6>
                                <p style={{ color:"#6c757d" }}>
                                    <span  className=' '   style={{width:"50px" , height:"50px"  , color:"peru"}}>   
                                        <StarOutlinedIcon />
                                    </span>                 
                                    4.6out of 55 reviews
                                </p>
                                <p> $1,399.00 </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* <div  style={{}}>
                <div  className='RigthBox p-2 '  style={{ position:"absolute"  , left:"96%" , top:"30%",  backgroundColor:"white", height:"180px" , textAlign:"center" , width:"60px" }}>
                    <button  className='p-2'  style={{   backgroundColor:"#eee"  , border:"none" }}>  
                        <span   className=''  style={{color:"#3F80Ea"}}>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-vertical lucide align-middle"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg> </span>
                        <span  className='mt-2 '  style={{writingMode:"vertical-rl" , color:"#3F80Ea"  }}>
                            Builder
                        </span>
                    </button>

                    <p  className='p-2   mt-2'   style={{backgroundColor:"#eee", width:"40px"}}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open lucide align-middle"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> 
                    </p>
                </div>
            </div> */}
            
        <div  className='footer  d-flex  flex-wrap  px-3  align-items-center   justify-content-between' style={{height:"50px" , marginTop:"69px", backgroundColor:"white" }} >
            <div  className='d-flex  align-items-center   ml-5   pt-3  gap-3 '>
                    <p> Support </p>
                    <p> Help Center </p>
                    <p> Privacy </p>
                    <p> Terms of Service </p>
            </div>

            <div  className='  pt-3  '>
                <p> © 2024 - AppStack </p>
            </div>
        </div>

            
        </div> 
    )
}

export  default  ProductsDetails;


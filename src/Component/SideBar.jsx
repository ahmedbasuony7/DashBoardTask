import { Link } from "react-router-dom";


function  SideBar  (  ) {
    return (
        <div  className=" overflow-y-scroll    "   
            style={{backgroundColor:"#293042"  , fontSize:"14px", height:"215vh" , width:"100%" 
            , padding: "1.5rem  1rem "   }}
        >       
            <div  className="logo  mt-2  d-flex  justify-content-center  gap-3    ">
                <p>  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" fill="#2871e7"><path fill="#84aef2" d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4     C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"></path><path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5     c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"></path><path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5     c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"></path></svg> </p>
                <p  className="fs-5 "  style={{color:"#fff"}}   > App Stack   </p>
            </div>

            <div  className="Links  fs-0  mt-4 "   style={{color:"#e2e8ee80"}}  >
                <div>
                    <p  className="fs-9"> Navigation  </p>
                    <div  className="d-flex   justify-content-between  ">
                        <div  className="d-flex   gap-3">
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-vertical lucide align-middle"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>  </p>
                            <p>  Dashboards </p>
                        </div>
                        <div>
                            <p  className="  fs-0 px-2 p-0  text-center    "  style={{backgroundColor:"#3f80ea" , color:"#fff" , padding:"0px"}} > 5 </p>                                  
                        </div>
                    </div>
                </div>

                <div>
                    <p  className="fs-9  mt-3"  style={{color:"#fff"}} > App  </p>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag lucide align-middle"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg> </p>
                                <p>  E-Commerce  </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li  className="d-flex   justify-content-between   "  style={{ color:"white"}}>  
                                    <Link  to="/ProductLayout"  className="link-underline-opacity-0" style={{color:"white" ,textDecoration:"none"}} > Products </Link>
                                    <p  className="btn  btn-primary   fs-0  px-2 p-0 text-center    " > New </p>
                                </li>
                                <li  className="d-flex    justify-content-between ">  
                                    <Link  to="/ProductDetailsLayout"  style={{ color:"white" ,textDecoration:"none"}}> Products Details </Link>
                                    <p  className="  fs-0 px-2 p-0  text-center    "  style={{backgroundColor:"#3f80ea" , color:"#fff" , padding:"0px"}} > New </p>                                  
                                </li>
                                <li  className="d-flex   justify-content-between ">  
                                    <Link  to="/OrderLayout"   style={{ color:"white" ,textDecoration:"none" }} > Orders </Link>
                                    <p  className="  fs-0 px-2 p-0  text-center    "  style={{backgroundColor:"#3f80ea" , color:"#fff" , padding:"0px"}} > New </p>                                  
                                </li>
                                <li> 
                                    <Link   to="/CustomersLayout"   style={{ color:"white" ,textDecoration:"none"}} > Customers </Link>
                                </li>
                                <li> 
                                    <p> invoice </p>
                                </li>
                                <li> 
                                    <p> Pricing </p>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9">   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left lucide align-middle"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>  </p>
                                <p>  Projects  </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p> Overview  </p>
                                </li>
                                <li> 
                                    <p> Details </p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>

                <div>
                    <div>
                        
                        <div class="  "  style={{backgroundColor:"#293042"  , cursor:"pointer"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  "   >
                                <p  className="fs-9">   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list lucide align-middle"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg> </p>
                                <p>  Chat  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div  className="d-flex   justify-content-between "> 
                        <div  className="d-flex   gap-4  "  >
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-files lucide align-middle"><path d="M20 7h-3a2 2 0 0 1-2-2V2"></path><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></path></svg> </p> 
                            <p> File Manager </p>
                        </div>

                        <p  className="btn  btn-primary  fs-0 px-2 p-0  text-center    " > New </p>
                    </div>
                </div>

                <div className=" d-flex   gap-4 "  >
                    <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar lucide align-middle"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> </p> 
                    <p> Calender  </p>
                </div>

                <div>
                    <div  className="d-flex   justify-content-between "> 
                        <div  className="d-flex   gap-4  "  >
                            <p   > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail lucide align-middle"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> </p> 
                            <p> Email </p>
                        </div>

                        <p  className="btn  btn-primary  fs-0 px-2 p-0  text-center    " > New </p>
                    </div>
                </div>

                <div>
                    <div>
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trello lucide align-middle"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><rect width="3" height="9" x="7" y="7"></rect><rect width="3" height="5" x="14" y="7"></rect></svg> </p>
                                <p>  Tasks   </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li  className="d-flex   justify-content-between  ">  
                                    <p  className="" style={{color:"#568fed"}} > List </p>
                                    <p  className="btn  btn-primary   fs-0  px-2 p-0 text-center    " > New </p>
                                </li>
                                <li> 
                                    <p> Kanbon </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <p  className="fs-9  mt-3"   style={{color:"#fff"}}   > Pages   </p>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left lucide align-middle"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> </p>
                                <p>  Pages  </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Profile </p>
                                </li>
                                <li> 
                                    <p> Settings </p>
                                </li>
                                <li> 
                                    <p> Blank Page  </p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>

                <div>
                    <div>
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users lucide align-middle"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> </p>
                                <p>  Auth  </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Sign in </p>
                                </li>
                                <li> 
                                    <p> Sign in Cover </p>
                                </li>
                                <li> 
                                    <p> Sign UP  </p>
                                </li>
                                <li> 
                                    <p> Sign UP Cover  </p>
                                </li>
                                <li> 
                                    <p> Reset Password   </p>
                                </li>
                                <li> 
                                    <p> Reset Password Cover </p>
                                </li>
                                <li> 
                                    <p> Local Screen   </p>
                                </li>
                                <li> 
                                    <p> Local Screen Cover </p>
                                </li>
                                <li> 
                                    <p> 2FA </p>
                                </li>
                                <li> 
                                    <p> 2FA Cover </p>
                                </li>
                                <li> 
                                    <p> 404 Page  </p>
                                </li>
                                <li> 
                                    <p> 500 Page </p>
                                </li>

                            </ul>
                        </div>


                    </div>

                </div>

                <div>
                    <div  className="d-flex   justify-content-between "> 
                        <div  className="d-flex   gap-4  "  >
                            <p   >  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-template lucide align-middle"><rect width="18" height="7" x="3" y="3" rx="1"></rect><rect width="9" height="7" x="3" y="14" rx="1"></rect><rect width="5" height="7" x="16" y="14" rx="1"></rect></svg>   </p> 
                            <p> Landing </p>
                        </div>

                        <p  className="btn  btn-primary  fs-0 px-2 p-0  text-center    " > New </p>
                    </div>
                </div>

                <div>
                    <div  className="d-flex   gap-4 "> 
                        <p   >  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open lucide align-middle"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>  </p> 
                        <p> Documentation </p>
                    </div>
                </div>

                <div>
                    <p  className="fs-9  mt-3"   style={{color:"#fff"}}  > Plugs & Addons   </p>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left lucide align-middle"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> </p>
                                <p> Form Plugins  </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Advanced Inputs </p>
                                </li>
                                <li  className=" d-flex   justify-content-between  "  > 
                                    <p> Formik  </p>
                                    <p  className="btn  btn-primary  fs-0 px-2 p-0  text-center    " > New </p>
                                </li>
                                <li> 
                                    <p> Editors  </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list lucide align-middle"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg> </p>
                                <p> Advanced Tables   </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Pagination  </p>
                                </li>
                                <li> 
                                    <p> Column Sorting  </p>
                                </li>
                                <li> 
                                    <p> Column Filtering    </p>
                                </li>
                                <li> 
                                    <p> Row Explanation  </p>
                                </li>
                                <li> 
                                    <p> Row Selection </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-0  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pie-chart lucide align-middle"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> </p>
                                <p> Charts   </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Pagination  </p>
                                </li>
                                <li> 
                                    <p> Column Sorting  </p>
                                </li>
                                <li> 
                                    <p> Column Filtering    </p>
                                </li>
                            </ul>
                        </div>
                </div>

                <div>
                    <div  className="d-flex   gap-4 "> 
                        <p   > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell lucide align-middle"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg> </p> 
                        <p> Notification  </p>
                    </div>
                </div>

                <div>
                    <div  className="d-flex   gap-4 "> 
                        <p   > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin lucide align-middle"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> </p> 
                        <p> Maps   </p>
                    </div>
                    <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>   Google  Maps   </p>
                                </li>
                                <li> 
                                    <p> Vectors Maps  </p>
                                </li>
                            </ul>
                </div>

                <div>
                    <p  className="fs-9  mt-3"  style={{color:"#fff"}}  > Tools & Components   </p>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3 lucide align-middle"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>  </p>
                                <p> Ui Elements  </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Allerts  </p>
                                </li>
                                <li  className=" d-flex   justify-content-between  "  > 
                                    <p> Buttons   </p>
                                    <p  className="btn  btn-primary  fs-0 px-2 p-0  text-center    " > New </p>
                                </li>
                                <li> 
                                    <p> Cards  </p>
                                </li>
                                <li> 
                                    <p> Carousel  </p>
                                </li>
                                <li> 
                                    <p> Embed Video   </p>
                                </li>
                                <li> 
                                    <p> General    </p>
                                </li>
                                <li> 
                                    <p> Grid    </p>
                                </li>
                                <li> 
                                    <p> Modals    </p>
                                </li>
                                <li> 
                                    <p> Offcanvas    </p>
                                </li>
                                <li> 
                                    <p> Tabs    </p>
                                </li>
                                <li> 
                                    <p> Typography    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div  className='d-flex   justify-content-between '>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart lucide align-middle"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>  </p>
                                <p> Icons  </p>
                                <p  className="  fs-0 px-2 p-0  text-center    "  style={{backgroundColor:"#3f80ea" , color:"#fff" , padding:"0px"}} > 1500 </p>

                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p> Lucide   </p>
                                </li>
                                <li> 
                                    <p> Fownt Awesome  </p>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="">
                            <p  className="  fs-0 px-2 p-0  text-center    "  style={{backgroundColor:"#3f80ea" , color:"#fff" , padding:"0px"}} > 1500 </p>
                        </div> */}

                    </div>
                </div>

                <div>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big lucide align-middle"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>   </p>
                                <p> Forms   </p>
                            </div>

                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Layouts  </p>
                                </li>
                                <li  className=" d-flex   justify-content-between  "  > 
                                    <p> Basic Inputs    </p>
                                    <p  className="btn  btn-primary  fs-0 px-2 p-0  text-center    " > New </p>
                                </li>
                                <li> 
                                    <p> Input Groups  </p>
                                </li>
                                <li> 
                                    <p> Flooating Labels  </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9">                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list lucide align-middle"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg> </p>
                                <p> Tables   </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        
                        <div class="dropdown  "  style={{backgroundColor:"#293042"}}  >
                            <div class="d-flex  gap-4  align-items-center  fs-7  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p  className="fs-9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share lucide align-middle"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>  </p>
                                <p> Multi  Level   </p>
                            </div>
                            <ul class="dropdown-menu  "   style={{backgroundColor:"#293042" , width:"220px" , padding:"10px" ,  color:"#fff" }}    >
                                <li> 
                                    <p>  Two levels   </p>
                                </li>
                                <li> 
                                    <p> Three levels   </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" d-flex   jujustify-content-center " >
                    <div  className=""  style={{backgroundColor:"#333b52" , text:"center" , padding :"10px"}} >
                        <p  className="fs-5" > Monthly Sales Report </p> 
                        <p  className="" > Your monthly sales report is ready for download!  </p> 
                        <button  className="btn  btn-primary  px-5 "    >  Download  </button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default   SideBar;

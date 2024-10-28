
//  import  images
import  img1   from  '../../assets/Images/CustomersIamges/av.jpg';
import  img2   from  '../../assets/Images/CustomersIamges/avatar-2-4fapEwlj.jpg';
import  img3   from  '../../assets/Images/CustomersIamges/avatar-3-D0EdbyaT.jpg';
import  img4   from  '../../assets/Images/CustomersIamges/avatar-4-CzTIGlzK.jpg';
import  img5   from  '../../assets/Images/CustomersIamges/avatar-5-5BXUJltV.jpg';




function  Customers ( ){
    return (
        <div  className=""   style={{  backgroundColor:"#eee"  , height:"206vh" , width:"100%"}}  >
            <div className="container"  style={{position:"relative"}} >
                <div  className="  "   style={{padding:"40px 0px 0px 40px" , fontWeight:"meduim" , fontSize:"22px"}}  >
                    <p> Customers </p> 
                </div>

                <div  className="content   d-flex     flex-wrap gap-4   "  style={{   margin:"0px  10px 0px 30px"  }}  >
                    <div  className=" p-4 "  style={{ backgroundColor:"white" }}>
                            <p  className=' mr-5 ' > Customers </p> 
                        <table class="table   "  style={{ width:"730px" ,  fontSize:"14px"  }}  >
                            <thead   class="   "  >
                                <tr  class=" p-3 "   style={{ }}  >
                                    <th scope="col-2">#</th>
                                    <th scope="col"> Name </th>
                                    <th scope="col"> Company </th>
                                    <th scope="col"> Email </th>
                                    <th scope="col"> Status </th>
                                </tr> 
                            </thead>
                            <tbody class="table-group-divider px-5"  style={{color:"#6c757d"}}>
                                <tr    style={{ alignItems:"center"}}>
                                    <th scope="row" className=' '  > <img src={img3} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className=' pt-3 w-full'>	Angelica Ramos</td>
                                    <td className=' pt-3'>The Wiz </td>
                                    <td className='  pt-3'>	angelica@ramos.com</td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img1} className='mt-1  ' style={{width:"30px" , borderRadius:"5px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Ashton Cox </td>
                                    <td className='pt-3'>  Levitz Furniture </td>
                                    <td className='pt-3'>	ashton@cox.com  </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img4} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Brenden Wagner  </td>
                                    <td className='pt-3'>  The Wiz  </td>
                                    <td className='pt-3'>	brenden@wagner.com </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#e5a54b"  , backgroundColor:"#e5a54b2d"  }}> Inactive </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img2} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Doris Wilder  </td>
                                    <td className='pt-3'>  Red Robin Stores  </td>
                                    <td className='pt-3'>		charde@marshall.com </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img3} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Fiona Green </td>
                                    <td className='pt-3'>   The Sample  </td>
                                    <td className='pt-3'>	 doris@wilder.com </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#e5a54b"  , backgroundColor:"#e5a54b2d"  }}> Inactive </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img4} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Brenden Wagner  </td>
                                    <td className='pt-3'>  The Wiz  </td>
                                    <td className='pt-3'>	fiona@green.com </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#e5a54b"  , backgroundColor:"#e5a54b2d"  }}> Inactive </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img1} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Garrett Winters   </td>
                                    <td className='pt-3'>   Good Guys </td>
                                    <td className='pt-3'>	garrett@winters.com  </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img5} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Gavin Cortez   </td>
                                    <td className='pt-3'>   Red Robin Stores  </td>
                                    <td className='pt-3'>	gavin@cortez.com   </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img2} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>   Haley Kennedy  </td>
                                    <td className='pt-3'>   Helping Hand  </td>
                                    <td className='pt-3'>	haley@kennedy.com   </td>
                                    <td className='pt-3  '  >	<span  className='px-1 '  style={{color:"#d9534f"  , backgroundColor:"#d9534f2d"  }}> Deleted </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img5} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Howard Hatfield  </td>
                                    <td className='pt-3'>  Price Savers  </td>
                                    <td className='pt-3'>	howard@hatfield.com   </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#e5a54b"  , backgroundColor:"#e5a54b2d"  }}> Inactive </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img1} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Jena Gaines  </td>
                                    <td className='pt-3'>   Helping Hand  </td>
                                    <td className='pt-3'>	jena@gaines.com   </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                </tr>

                                <tr  style={{padding:"5px" , alignItems:"center"}}>
                                    <th scope="row"> <img src={img4} className='mt-1' style={{width:"30px" , height:"30px" ,borderRadius:"50%"  }}   alt="" /> </th>
                                    <td className='pt-3'>	Jennifer Chang  </td>
                                    <td className='pt-3'>   Helping Hand  </td>
                                    <td className='pt-3'>	jennifer@chang.com   </td>
                                    <td className='pt-3   '   > 	<span  className='px-1 '  style={{color:"#e5a54b"  , backgroundColor:"#e5a54b2d"  }}> Inactive </span> </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div  className=" p-3    "  style={{    backgroundColor:"white" }} >
                        <div  className=''>
                            <p> Angelica Ramos </p> 
                        </div>

                        <div  className=' d-flex p-1  pt-3  gap-4    flex-wrap'  >
                            <div  className='  '  > 
                                <img className=''  style={{width:"60px" , height:"60px", borderRadius:"50%" }}   src={img3}   alt="" />
                            </div>

                            <div  className='  ' >
                                <h6> About me </h6>
                                <p  style={{fontSize:"14"}}> Lorem ipsum dolor sit amet,  <br />
                                    consectetur adipisicing elit, sed do  <br /> 
                                    eiusmod tempor  incididunt ut labore  <br /> 
                                    et dolore magna aliqua. 
                                </p>
                            </div>
                        </div>

                        <div>
                            <table class="table">

                                <tbody>
                                    <tr>
                                        <th scope="row"> Name</th>
                                        <td> Angelica Ramos </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">  Company  </th>
                                        <td>Jacob</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">  Email  </th>
                                        <td colspan="2">  angelica@ramos.com  </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">  Phone  </th>
                                        <td colspan="2">	+1234123123123  </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">  Status  </th>
                                        <td className='  '   > 	<span  className='px-1 '  style={{color:"#4bbf73"  , backgroundColor:"#4bbf732d"  }}> Active </span> </td>
                                    </tr>
                            
                                </tbody>
                            </table>

                            <hr  style={{fontSize:"2px"}} />  
                        </div>

                        <div  className='bulletes   '  style={{position:"relative"}}>
                            <p> Activity  </p>
                            <ul  className=''  style={{borderLeft:"1px solid  #ccc " , listStyle:"none"}}>
                                <li>
                                    <p  className="  "  style={{width:"10px"  , position:"absolute" , zIndex:"2222" , left:"-2.3%" ,height:"5px",  padding:"9px" ,  borderRadius:"50%" , border:"3px  solid  #3F80EA" , color:"#fff" , backgroundColor:"007bff"}} > . </p>
                                    <div  className='d-flex   gap-5 '>
                                        <span> Signed out </span>
                                        <span> 30m ago </span>
                                    </div>
                                    <span> Nam pretium turpis et arcu.     Duis <br />arcu tortor, suscipit... </span>
                                </li>

                                <li  className=" mt-4 " >
                                    <p  className="  "  style={{width:"10px"  , position:"absolute" , zIndex:"2222" , left:"-2.3%" ,height:"5px",  padding:"9px" ,  borderRadius:"50%" , border:"3px  solid  #3F80EA" , color:"#fff" , backgroundColor:"007bff"}} > . </p>
                                    <div  className='d-flex   gap-5  '>
                                        <span> Created invoice #1204  </span>
                                        <span> 2h ago </span>
                                    </div>
                                    <span> Sed aliquam ultrices mauris. <br /> Integer ante arcu... </span>
                                </li>

                                <li  className=" mt-4 " >
                                    <p  className="  "  style={{width:"10px"  , position:"absolute" , zIndex:"2222" , left:"-2.3%" ,height:"5px",  padding:"9px" ,  borderRadius:"50%" , border:"3px  solid  #3F80EA" , color:"#fff" , backgroundColor:"007bff"}} > . </p>
                                    <div  className='d-flex  gap-5  '>
                                        <span>  Discarded invoice #1147 </span>
                                        <span> 3h ago </span>
                                    </div>
                                    <span  style={{fontSize:"16px" , marginRight:"20px"}}> Nam pretium turpis et arcu. Duis arcu tortor, <br /> suscipit...  </span>
                                </li>

                                <li  className=" mt-4 " >
                                    <p  className=" pr-3 "  style={{width:"10px"  , position:"absolute" , zIndex:"2222" , left:"-2.3%" ,height:"5px",  padding:"9px" ,  borderRadius:"50%" , border:"3px  solid  #3F80EA" , color:"#fff" , backgroundColor:"007bff"}} > . </p>
                                    <div  className='d-flex   gap-5  '>
                                        <span> Signed in </span>
                                        <span> 3h ago </span>
                                    </div>
                                    <span> Curabitur ligula sapien, tincidunt non, <br /> euismod vitae... </span>
                                </li>

                                <li  className=" mt-4 " >
                                    <p  className="  "  style={{width:"10px"  , position:"absolute" , zIndex:"2222" , left:"-2.3%" ,height:"5px",  padding:"9px" ,  borderRadius:"50%" , border:"3px  solid  #3F80EA" , color:"#fff" , backgroundColor:"007bff"}} > . </p>
                                    <div  className='d-flex  gap-5  '>
                                        <span> Signed up  </span>
                                        <span> 2d ago  </span>
                                    </div>
                                    <span> Sed aliquam ultrices mauris. Integer ante arcu...</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            
            <div  style={{}}>
                <div  className='RigthBox p-2 '  style={{ position:"absolute"  , left:"95%" , top:"30%",  backgroundColor:"white", height:"180px" , textAlign:"center" , width:"60px" }}>
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
            </div>

            <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

        <div  className='footer  d-flex  flex-wrap  px-3  align-items-center   justify-content-between' style={{height:"50px" , marginTop:"100px", backgroundColor:"white" }} >
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


export default  Customers;



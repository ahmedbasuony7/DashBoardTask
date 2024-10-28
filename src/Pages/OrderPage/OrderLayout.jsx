

import Daashboaed from "../../Component/Daashboaed";
import SideBar from "../../Component/SideBar";
import Orders from "./Orders";



function  OrderLayout  (  ) {
    return (
        <>
            <div class="">
                <div class="d-flex  ">
                    <div class="col-3"   style={{width:"250px"}}>
                        <SideBar />
                    </div>

                    <div class="col-10  "   >
                        <Daashboaed />
                        <Orders    />
                    </div>
                </div>
            </div>
        
        </>
    )
}


export  default  OrderLayout;

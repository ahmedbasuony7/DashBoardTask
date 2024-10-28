import Daashboaed from "../../Component/Daashboaed";
import SideBar from "../../Component/SideBar";
import Products from "./Products";



function  ProductLayout ( ) {
    return  (
        <>
            <div class="">
                <div class="d-flex  ">
                    <div class="col-2"  >
                        <SideBar />
                    </div>

                    <div class="col-10"  >
                        <Daashboaed />
                        <Products />
                    </div>
                </div>
            </div>
        
        </>
    )
}

export  default  ProductLayout;



import Daashboaed from "../../Component/Daashboaed";
import SideBar from "../../Component/SideBar";
import ProductsDetails from "./ProductsDetails";



function  ProductDetailsLayout  (  ) {
    return (
        <>
            <div class="">
                <div class="d-flex  ">
                    <div class=""   style={{width:"250px"}}>
                        <SideBar />
                    </div>

                    <div class="">
                        <Daashboaed />
                        <ProductsDetails />
                    </div>
                </div>
            </div>
        
        </>
    )
}


export  default  ProductDetailsLayout;

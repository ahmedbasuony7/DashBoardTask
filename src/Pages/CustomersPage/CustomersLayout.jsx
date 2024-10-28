import Daashboaed from "../../Component/Daashboaed";
import SideBar from "../../Component/SideBar";
import Customers from './Customers';


function   CustomersLayout  (  )  {
    return  (
        <>
            <div class="">
                <div class="d-flex  ">
                    <div class=""   style={{width:"250px"}}>
                        <SideBar />
                    </div>

                    <div class="">
                        <Daashboaed />
                        <Customers />
                    </div>
                </div>
            </div>

        </>

    )
}

export  default  CustomersLayout;







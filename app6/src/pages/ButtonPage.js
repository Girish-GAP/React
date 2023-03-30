import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";

function ButtonPage(){

    const handelClick = ()=>{
        // console.log("YO");
    }
    
    return(
        <div>
            <div> 
                {/* if we want to pass true value eg. primary = {true} we pass only primary as a short hand*/}
                {/* onClick will be passed as rest */}
                <Button success rounded outline className = "mb-5" onClick = {handelClick}>
                    <GoBell className="mr-1"/>
                    Click me!!</Button>
            </div>

            <div> 
                <Button danger outline onMouseEnter = {handelClick}>
                    <GoCloudDownload className="mr-1"/>
                    Buy now!</Button>
            </div>

            <div> 
                <Button warning onMouseLeave = {handelClick}>
                    <GoDatabase className="mr-1"/>
                    See Deal !</Button>
            </div>

            <div> 
                <Button secondary outline>Something !</Button>
            </div>

            <div> 
                <Button primary rounded>Something !</Button>
            </div>
        </div>
    )  
}

export default ButtonPage;
import React, {FC} from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader: FC = () => <div style={{backgroundColor: 'white'}}>
    <img src={preloader}/>
</div>
export default Preloader;
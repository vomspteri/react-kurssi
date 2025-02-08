import { useState } from "react";

function ToggleText(){

    const [visible, setVisible] = useState(true);

    return(

        <div>
{visible && <p>Tämä teksti voidaan piilottaa!</p>}
<button onClick={() => setVisible(!visible)}>
{visible ? "Piilota teksti" : "Näytä teksti"}

</button>

        </div>
    );
}
export default ToggleText;
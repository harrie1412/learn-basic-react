import { useNavigate } from "react-router-dom";

function GoBack(){
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate(-1);
    }
    return (
        <>
            <button onClick={handleBack}>Trở lại</button>
        </>
    );
}
export default GoBack;
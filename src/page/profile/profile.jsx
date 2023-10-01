import { UserProfile, Products } from "../../components";
import Line from "../../html/line";

function Profile() {
    return ( 
        <>
            <UserProfile />
            <Line children={'News product'} />
            <Products children={'1, 8'} />
        </>
    );
}

export default Profile;
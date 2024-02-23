import Sidebar from "../../sidebar";
import { AdminLayoutStyled } from "./style";

const AdminLayout = ({children}) => {
    return (
        <AdminLayoutStyled>
            <Sidebar />
            <div className="adminLayout-right">
                {children}
            </div>
        </AdminLayoutStyled>
    )
}

export default AdminLayout;

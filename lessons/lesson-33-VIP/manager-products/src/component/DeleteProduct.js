import { useState } from 'react';
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { deleteProduct } from '../service/productsService';
function DeleteProduct(props){
    const {item, onReloadEdit} = props;
    const deleteItem = async () => {
        const result = await deleteProduct(item.id);
        if(result){
            onReloadEdit();
            Swal.fire({
                title: "Đã xóa!",
                text: "Bạn đã xóa thành công.",
                icon: "success"
            });
        }
    }
    const handleDelete = async () => {
        Swal.fire({
            title: "Bạn có chắc muốn xóa?",
            text: "Nếu bạn xóa sẽ không khôi phục lại được!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vẫn xóa!",
            cancelButtonText: "Hủy"
            }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();
            }
        });
    }
    return(
        <>
        <button onClick={handleDelete}>Xóa</button>
        </>
    );
}
export default DeleteProduct;
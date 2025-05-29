import { useState, useEffect } from "react";
import Modal from 'react-modal';
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { getListCategory } from "../service/categoryService";
import { createProduct } from "../service/productsService";

function CreateProduct(props){
  const {onReload} = props;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [dataCategory, setDataCategory] = useState([]);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)', 
    },
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    })
  }
  useEffect(()=>{
          const fetchApi = async () =>{
            const result = await getListCategory();
            setDataCategory(result);
          }
          fetchApi();
      },[])
  console.log(dataCategory);
  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct(data);
    if(result){
      setShowModal(false);
      onReload();
    }
    Swal.fire({
      icon: "success",
      title: "Tạo thêm sản phẩm thành công",
      showConfirmButton: false,
      timer: 2000
});
    // console.log(data);
  }
  return (
    <>
      <button onClick={openModal}>Tạo sản phẩm</button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Tiêu đề</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <select name="category" onChange={handleChange} required>
                      {dataCategory.map((item)=>(
                          <option key={item.id} value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              <tr>
                <td>Giá</td>
                <td>
                  <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input
                    type="text"
                    name="discountPercentage"
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input
                    type="text"
                    name="stock"
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input
                    type="text"
                    name="thumbnail"
                    onChange={handleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    rows={4}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Hủy</button>
                </td>
                <td>
                  <input type="submit" value="Tạo mới"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}
export default CreateProduct;
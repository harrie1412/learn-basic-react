import { useState, useEffect } from "react";
import Modal from 'react-modal';
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { editProduct } from "../service/productsService";

function EditProduct(props){
  const {item, onReloadEdit} = props;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(item);
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
//   console.log(item);
  useEffect(()=>{
          const fetchApi = async () =>{
              fetch(`http://localhost:3002/categories`)
              .then(res => res.json())
              .then(data => {
                  setDataCategory(data.reverse());
              })
          }
          fetchApi();
      },[]);
  const openModal = () => {
    console.log(item);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await editProduct(item.id, data);
    if(result){
        onReloadEdit();
        setShowModal(false);
    }
    Swal.fire({
      icon: "success",
      title: "Cập nhật sản phẩm thành công",
      showConfirmButton: false,
      timer: 2000
    });
  }
  return (
    <>
      <button onClick={openModal}>Chỉnh sửa</button>
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
                    value={data.title}
                  ></input>
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <select name="category" onChange={handleChange} required value={data.category}>
                      {dataCategory.map((item)=>(
                          <option key={item.id} value={item.id}>{item.name}</option>
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
                    value={data.price}
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
                    value={data.discountPercentage}
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
                    value={data.stock}
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
                    value={data.thumbnail}
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
                    value={data.description}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Hủy</button>
                </td>
                <td>
                  <input type="submit" value="Cập nhật"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}
export default EditProduct;
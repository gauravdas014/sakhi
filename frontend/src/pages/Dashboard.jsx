import React, { useContext, useState } from "react";
import image from "../images/delete.jpg";
import kit from "../images/kit.jpg";
import Product from "../components/Product.jsx";
import Input from "../components/Input.jsx";
import UploadFile from "../components/Upload";
import { GlobalContext } from "../Context/Global";
import Axios from "axios";
import { Select } from "antd";

const { Option, OptGroup } = Select;

export const Dashboard = () => {
  const { user } = useContext(GlobalContext);
  const [product, setProduct] = useState({});
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(cats[0]);

  React.useEffect(() => {
    Axios.get("/api/category")
      .then((res) => setCats(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    Axios.post(`/api/product/${selectedCat}`, {...product,creator_user_id: user._id}).then(res=> {
      alert("Product added Successfully");
    }).catch(err => {
      alert(err.message);
    })
  };

  function handleCatChange(value) {
    console.log(`selected ${value}`);
    // setProduct({...product, category})
    setSelectedCat(value);
  }

  return (
    <div className="product-page">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell large-12">
            <h1 style={{ marginBottom: "30px" }}>Dashboard</h1>
          </div>
          <div className="cell large-8">
            <div className="products-uploaded">
              <h3 className="products-uploaded__title">My products</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                porro consequatur recusandae. Nisi repellendus eveniet aperiam
                illum quia deleniti dolorum.
              </p>
              <div className="grid-x grid-margin-x">
                <div className="cell large-4">
                  <Product
                    name="Embroidery kit"
                    cost="500"
                    image={kit}
                    extra_class="small"
                  />
                </div>
                <div className="cell large-4">
                  <Product
                    name="Embroidery kit"
                    cost="500"
                    image={kit}
                    extra_class="small"
                  />
                </div>
                <div className="cell large-4">
                  <Product
                    name="Embroidery kit"
                    cost="500"
                    image={kit}
                    extra_class="small"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cell large-4">
            <div className="profile-card">
              <img src={image} alt="" className="profile-card__image" />
              <h3 className="profile-card__name">{user.name}</h3>
              <p className="profile-card__text">{user.specialized_in}</p>
              <p className="profile-card__text small">{user.address}</p>
              <p className="profile-card__text"></p>
              <p className="profile-card__text blue">{user.phone}</p>
              {/* This button is just for display */}
              <div className="button__small">Edit profile</div>
            </div>
          </div>
          <div className="cell large-6" style={{ marginTop: "30px" }}>
            <div className="products-uploaded">
              <h3 className="products-uploaded__title">Add products</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                porro consequatur recusandae. Nisi repellendus eveniet aperiam
                illum quia deleniti dolorum.
              </p>

              <form>
                <div className="grid-x grid-margin-x">
                  <div className="cell large-12">
                    <Input
                      type="text"
                      label="Product name"
                      placeholder=""
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="cell large-12">
                    <Input
                      type="text"
                      label="Description"
                      placeholder=""
                      onChange={(e) =>
                        setProduct({ ...product, description: e.target.value })
                      }
                    />
                  </div>
                  <div className="cell large-6">
                    <Input
                      type="number"
                      label="Cost"
                      placeholder=""
                      onChange={(e) =>
                        setProduct({ ...product, price: e.target.value })
                      }
                    />
                  </div>
                  <div className="cell large-6">
                    <Input
                      type="number"
                      label="Quantity"
                      placeholder=""
                      onChange={(e) =>
                        setProduct({ ...product, quantity: e.target.value })
                      }
                    />
                  </div>
                  <div className="cell">
                    <div className="form__element-container">
                      <label className="form__label required">
                        Select Category
                      </label>

                      <Select
                        defaultValue={cats[0]}
                        style={{ width: 200 }}
                        onChange={handleCatChange}
                      >
                        <OptGroup label="Categories">
                          {cats.map((c) => (
                            <Option value={c._id}> {c.name} </Option>
                          ))}
                        </OptGroup>
                      </Select>
                    </div>
                  </div>
                  <div className="cell large-6">
                    <div className="form__element-container">
                      <label className="form__label required">
                        Select Image
                      </label>
                      <UploadFile
                        handleB64img={(img) => setProduct({ ...product, img })}
                      /> 
                    </div>
                  </div>
                </div>
                <button
                  // type="submit"
                  className="button__small"
                  style={{ marginTop: "30px" }}
                  onClick={handleAddProduct}
                >
                  Add product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

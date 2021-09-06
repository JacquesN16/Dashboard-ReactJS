import"./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productsData } from "../../dummyData";
import { Publish } from "@material-ui/icons";


export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct"> 
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productsData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className="productInfoImg" src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?cs=srgb&dl=pexels-tuur-tisseghem-812264.jpg&fm=jpg" alt="product-img"  />
                        <span className="productName">Computer</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">999</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Stock:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">ProductName</label>
                        <input type="text" Placeholder="Computer"/>
                        <label htmlFor=""> In Stock </label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>  
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?cs=srgb&dl=pexels-tuur-tisseghem-812264.jpg&fm=jpg" alt="produc-pic" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

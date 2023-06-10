import './footer.css'
const Footer =( ) => {
    return (
        <>
        <div className="darazclone_footer">
            <div className="darazclone_footer-customercare">
                <div className="">
                <h3>Customer Care</h3>
                <ul>
                   
                <li><li>
                        <a href="#">Help center</a>
                        </li></li>
                        <li><li>
                        <a href="#">How to buy</a>
                        </li></li>
                        <li><li>
                        <a href="#">Refunds</a>
                        </li></li>
                        <li><li>
                        <a href="#">Contact Us</a>
                        </li></li>
                </ul>
                </div>
                <div className="">
                <h3>Earn With Daraz</h3>
                <ul>
                   
                <li><li>
                        <a href="#">Daraz University </a>
                        </li></li>
                        <li><li>
                        <a href="#">Sell with Daraz</a>
                        </li></li>
                        <li><li>
                        <a href="#">Code of Conduct</a>
                        </li></li>
                      
                </ul>
                </div>
               
            </div>
            <div className="darazclone_footer-aboutdaraz">
            <h3>Daraz</h3>
                <ul>
                   
                <li><li>
                        <a href="#">About Daraz </a>
                        </li></li>
                        <li><li>
                        <a href="#">Careers</a>
                        </li></li>
                        <li>
                            <li>
                        <a href="#">Blogs</a>
                        </li></li>
                        <li><li>
                        <a href="#">Privacy Policy</a>
                        </li></li>
                        <li><li>
                        <a href="#">Terms and Conditions</a>
                        </li></li>
                        <li><li>
                        <a href="#">Daraz Affliate Programs</a>
                        </li></li>
                      
                </ul>

            </div>
            <div className="darazclone_footer-images">
                <div className="qrcode">
                    <div className="qrimage">
                        
                        <img width={100} src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png" alt="qrcode" />
                    </div>
                    <div className="darazlogo">
                            <p>Happy Shopping </p>
                            <p>Download Apps</p>
                            <img src="https://icms-image.slatic.net/images/ims-web/a672d2c8-76a8-4661-8ec4-ebdbb114294e.png" width={42} alt="" />
                    </div>
                </div>
                <div className="download_gateway">
                    <div className="applestore">
                    <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" alt="applestore" />
                    </div>
                    <div className="googlestore">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJD_hzkCUVc2ew80cpQZ-VZhxOh09hGRxq9bi-i1khBq6VzvCwi_XmXywNUcgxQp1KyY&usqp=CAU" alt="googlestore" />
                    </div>
                    <div className="appgallery">
                        <img src="https://appgallery.huawei.com/?spm=a2a0e.11779170.footer_top.19.24492d2b6bIatL&scm=1003.4.icms-zebra-100024112-2877125.OTHER_5439623634_2540321#/app/C100948133" alt="appgallery" />
                    </div>
                </div>

            </div>

        </div>
        </>
    )

}
export default Footer
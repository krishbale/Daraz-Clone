import googleplay from '../src/assets/google-play-badge.png'
import pngstore from '../src/assets/pngwing.com.png'

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
                    <img width={150} src={pngstore} alt="applestore" />
                    </div>
                    <div className="googlestore">
                        <img width={150} src={googleplay} alt="googlestore" />
                    </div>
                    <div className="appgallery">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNfYWc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkI2MzYxIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRDNFNDUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iaWNfYWciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAuMTAwOTk5NSwwIEMyLjcwNTExMjc3LDAgMCwyLjcwNDY0MDk4IDAsMTAuMDk5MDI4NiBMMCwyNS45MDA5NzE0IEMwLDMzLjI5NTM1OSAyLjcwNTExMjc3LDM2IDEwLjEwMDk5OTUsMzYgTDI1Ljg5NDE4NiwzNiBDMzMuMjg5ODYzNCwzNiAzNiwzMy4yOTUzNTkgMzYsMjUuOTAwOTcxNCBMMzYsMTAuMDk5MDI4NiBDMzYsMi43MDQ2NDA5OCAzMy4yOTQ4ODcyLDAgMjUuODk5MDAwNSwwIEwxMC4xMDA5OTk1LDAgWiIgaWQ9IkZpbGwtMSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUuNzAzMDUxNSwyMC44NzkyNTEgTDE3LjE0ODMxOTIsMjAuODc5MjUxIEwxNi40MjMyMjYsMTkuMTkyOTYwNyBMMTUuNzAzMDUxNSwyMC44NzkyNTEgWiBNMTUuMzQ3MTU5OCwyMS43MjkwNTExIEwxNC45MTgzNTM2LDIyLjcxMDIxMjggTDEzLjk0MjExMDgsMjIuNzEwMjEyOCBMMTYuMDE4MTQ1OSwxOC4wMDAyODkzIEwxNi44NjE4Njk4LDE4LjAwMDI4OTMgTDE4LjkyOTUxNCwyMi43MTAyMTI4IEwxNy45MjcyMzAzLDIyLjcxMDIxMjggTDE3LjUwMzkyMTYsMjEuNzI5MDUxMSBMMTUuMzQ3MTU5OCwyMS43MjkwNTExIFogTTMxLjA1NjQ1MjksMjIuNzA2NzQwNyBMMzIsMjIuNzA2NzQwNyBMMzIsMTggTDMxLjA1NjQ1MjksMTggTDMxLjA1NjQ1MjksMjIuNzA2NzQwNyBaIE0yNy4zMDEwNzE2LDIwLjY4NDgxMjYgTDI5LjA0MDMxMTcsMjAuNjg0ODEyNiBMMjkuMDQwMzExNywxOS44MjY2MjE2IEwyNy4zMDEwNzE2LDE5LjgyNjYyMTYgTDI3LjMwMTA3MTYsMTguODYxOTUyNCBMMjkuODI1ODc3NiwxOC44NjE5NTI0IEwyOS44MjU4Nzc2LDE4LjAwMzQ3MjEgTDI2LjM1NzgxMzgsMTguMDAzNDcyMSBMMjYuMzU3ODEzOCwyMi43MDk5MjM0IEwyOS45MTY3MzEzLDIyLjcwOTkyMzQgTDI5LjkxNjczMTMsMjEuODUxNDQzMSBMMjcuMzAxMDcxNiwyMS44NTE0NDMxIEwyNy4zMDEwNzE2LDIwLjY4NDgxMjYgWiBNMjMuNTUyMDU1OSwyMS4yNDA5Mjk2IEwyMi40ODIzNTUzLDE4IEwyMS43MDE3MDgyLDE4IEwyMC42MzIwMDc1LDIxLjI0MDkyOTYgTDE5LjU5MDk1MTgsMTguMDAyNjA0MSBMMTguNTczMDQzNiwxOC4wMDI2MDQxIEwyMC4yMTU5MzI1LDIyLjcxMjgxNjkgTDIxLjAwNzI4NTIsMjIuNzEyODE2OSBMMjIuMDc4NzIxOSwxOS42MTg4NzM0IEwyMy4xNTAxNTg2LDIyLjcxMjgxNjkgTDIzLjk0ODQ1NTYsMjIuNzEyODE2OSBMMjUuNTg3MDA0NCwxOC4wMDI2MDQxIEwyNC41OTU0MjYzLDE4LjAwMjYwNDEgTDIzLjU1MjA1NTksMjEuMjQwOTI5NiBaIE0xMi41MDE3NjE5LDIwLjY5NzgzMyBDMTIuNTAxNzYxOSwyMS40NjQwMTMgMTIuMTIxMjc2LDIxLjg3MzQzMzIgMTEuNDMwMzI1MiwyMS44NzM0MzMyIEMxMC43MzU2MTI5LDIxLjg3MzQzMzIgMTAuMzUzMTAxNywyMS40NTIxNDk5IDEwLjM1MzEwMTcsMjAuNjY1MTM3MyBMMTAuMzUzMTAxNywxOC4wMDMxODI4IEw5LjM5NjgyMzQzLDE4LjAwMzE4MjggTDkuMzk2ODIzNDMsMjAuNjk3ODMzIEM5LjM5NjgyMzQzLDIyLjAyMzMxMjggMTAuMTMzNDkwNCwyMi43ODM0MTY1IDExLjQxNzMwNDgsMjIuNzgzNDE2NSBDMTIuNzEzODUwMiwyMi43ODM0MTY1IDEzLjQ1NzE3MjEsMjIuMDA4ODQ1NiAxMy40NTcxNzIxLDIwLjY1ODQ4MjQgTDEzLjQ1NzE3MjEsMTguMDAwMjg5MyBMMTIuNTAxNzYxOSwxOC4wMDAyODkzIEwxMi41MDE3NjE5LDIwLjY5NzgzMyBaIE03LjExNTM1NDgxLDE4LjAwMDI4OTMgTDguMDcxMDU0MzQsMTguMDAwMjg5MyBMOC4wNzEwNTQzNCwyMi43MTMxMDYyIEw3LjExNTM1NDgxLDIyLjcxMzEwNjIgTDcuMTE1MzU0ODEsMjAuNzk5MTAzIEw0Ljk1NjI3ODIyLDIwLjc5OTEwMyBMNC45NTYyNzgyMiwyMi43MTMxMDYyIEw0LDIyLjcxMzEwNjIgTDQsMTguMDAwMjg5MyBMNC45NTYyNzgyMiwxOC4wMDAyODkzIEw0Ljk1NjI3ODIyLDE5LjkwMTI3MjEgTDcuMTE1MzU0ODEsMTkuOTAxMjcyMSBMNy4xMTUzNTQ4MSwxOC4wMDAyODkzIFoiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LDEyIEMxNC42OTEyNjE2LDEyIDEyLDkuMzA4NDQ5MDcgMTIsNiBMMTIuODQ3NTExNiw2IEMxMi44NDc1MTE2LDguODQwODU2NDggMTUuMTU5MTQzNSwxMS4xNTIxOTkxIDE4LDExLjE1MjE5OTEgQzIwLjg0MDg1NjUsMTEuMTUyMTk5MSAyMy4xNTI0ODg0LDguODQwODU2NDggMjMuMTUyNDg4NCw2IEwyNCw2IEMyNCw5LjMwODQ0OTA3IDIxLjMwODQ0OTEsMTIgMTgsMTIiIGlkPSJGaWxsLTMiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="appgallery" />
                    </div>
                </div>

            </div>

        </div>
        </>
    )

}
export default Footer
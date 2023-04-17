class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header id="tg-header" class="tg-header tg-haslayout">
        <div class="tg-topbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="tg-addnav">
                            <li>
                                <a href="javascript:void(0);">
                                    <i class="icon-envelope"></i>
                                    <em>Contact</em>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <i class="icon-question-circle"></i>
                                    <em>Help</em>
                                </a>
                            </li>
                        </ul>
                        <div class="dropdown tg-themedropdown tg-currencydropdown">
                            <a href="javascript:void(0);" id="tg-currenty" class="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-earth"></i>
                                <span>Currency</span>
                            </a>
                            <ul class="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-currenty">
                                <li>
                                    <a href="javascript:void(0);">
                                        <i>£</i>
                                        <span>British Pound</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i>$</i>
                                        <span>Us Dollar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i>€</i>
                                        <span>Euro</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tg-userlogin">
                            <a href="login.html">Đăng nhập |</a>
                            <a href="signup.html">Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tg-middlecontainer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <strong class="tg-logo"><a href="index.html"><img src="assets/User/images/logo.png" alt="company name here"></a></strong>
                        <div class="tg-wishlistandcart">
                            <div class="dropdown tg-themedropdown tg-wishlistdropdown">
                                <a href="javascript:void(0);" id="tg-wishlisst" class="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="tg-themebadge">3</span>
                                    <i class="icon-heart"></i>
                                    <span>Wishlist</span>
                                </a>
                                <div class="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
                                    <div class="tg-description"><p>No products were added to the wishlist!</p></div>
                                </div>
                            </div>
                            <div class="dropdown tg-themedropdown tg-minicartdropdown">
                                <a href="javascript:void(0);" id="tg-minicart" class="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="tg-themebadge">3</span>
                                    <i class="icon-cart"></i>
                                    <span>$123.00</span>
                                </a>
                                <div class="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-minicart">
                                    <div class="tg-minicartbody">
                                        <div class="tg-minicarproduct">
                                            <figure>
                                                <img src="assets/User/images/products/img-01.jpg" alt="image description">
                                                
                                            </figure>
                                            <div class="tg-minicarproductdata">
                                                <h5><a href="javascript:void(0);">Our State Fair Is A Great Function</a></h5>
                                                <h6><a href="javascript:void(0);">$ 12.15</a></h6>
                                            </div>
                                        </div>
                                        <div class="tg-minicarproduct">
                                            <figure>
                                                <img src="assets/User/images/products/img-02.jpg" alt="image description">
                                                
                                            </figure>
                                            <div class="tg-minicarproductdata">
                                                <h5><a href="javascript:void(0);">Bring Me To Light</a></h5>
                                                <h6><a href="javascript:void(0);">$ 12.15</a></h6>
                                            </div>
                                        </div>
                                        <div class="tg-minicarproduct">
                                            <figure>
                                                <img src="assets/User/images/products/img-03.jpg" alt="image description">
                                                
                                            </figure>
                                            <div class="tg-minicarproductdata">
                                                <h5><a href="javascript:void(0);">Have Faith In Your Soul</a></h5>
                                                <h6><a href="javascript:void(0);">$ 12.15</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tg-minicartfoot">
                                        <a class="tg-btnemptycart" href="javascript:void(0);">
                                            <i class="fa fa-trash-o"></i>
                                            <span>Clear Your Cart</span>
                                        </a>
                                        <span class="tg-subtotal">Subtotal: <strong>35.78</strong></span>
                                        <div class="tg-btns">
                                            <a class="tg-btn tg-active" href="javascript:void(0);">View Cart</a>
                                            <a class="tg-btn" href="javascript:void(0);">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tg-searchbox">
                            <form class="tg-formtheme tg-formsearch">
                                <fieldset>
                                    <input type="text" name="search" class="typeahead form-control" placeholder="Search by title, author, keyword, ISBN...">
                                    <button type="submit"><i class="icon-magnifier"></i></button>
                                </fieldset>
                                <a href="javascript:void(0);">+  Advanced Search</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tg-navigationarea">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <nav id="tg-nav" class="tg-nav">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
                                <ul>
                                    <li class="menu-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="/">Authors</a>
                                    </li>
                                    <li class="menu-item"><a href="products.html">Products</a></li>
                                    <li class="menu-item">
                                        <a href="/">Latest News</a>
                                    </li>
                                    <li class="menu-item"><a href="contactus.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer id="tg-footer" class="tg-footer tg-haslayout">
        <div class="tg-footerarea">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="tg-clientservices">
                            <li class="tg-devlivery">
                                <span class="tg-clientserviceicon"><i class="icon-rocket"></i></span>
                                <div class="tg-titlesubtitle">
                                    <h3>Giao hàng nhanh</h3>
                                    <p>Ship toàn cầu</p>
                                </div>
                            </li>
                            <li class="tg-discount">
                                <span class="tg-clientserviceicon"><i class="icon-tag"></i></span>
                                <div class="tg-titlesubtitle">
                                    <h3>Giảm giá</h3>
                                    <p>Giảm giá mọi mặt hàng</p>
                                </div>
                            </li>
                            <li class="tg-quality">
                                <span class="tg-clientserviceicon"><i class="icon-leaf"></i></span>
                                <div class="tg-titlesubtitle">
                                    <h3>Chất lượng</h3>
                                    <p>Xuất bản sách hay</p>
                                </div>
                            </li>
                            <li class="tg-support">
                                <span class="tg-clientserviceicon"><i class="icon-heart"></i></span>
                                <div class="tg-titlesubtitle">
                                    <h3>Hỗ trợ 24/7</h3>
                                    <p>Phục vụ mọi lúc</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tg-threecolumns">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="tg-footercol">
                                <strong class="tg-logo"><a href="javascript:void(0);"><img src="assets/User/images/flogo.png" alt="image description"></a></strong>
                                <ul class="tg-contactinfo">
                                    <li>
                                        <i class="icon-apartment"></i>
                                        <address>Lô # 07,Tòa Rose world, Phố # 02, AT246T Hà Nội</address>
                                    </li>
                                    <li>
                                        <i class="icon-phone-handset"></i>
                                        <span>
                                            <em>0800 12345 - 678 - 89</em>
                                            <em>+4 1234 - 4567 - 67</em>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="icon-clock"></i>
                                        <span>Làm việc 7 ngày một tuần từ 9am - 5pm</span>
                                    </li>
                                    <li>
                                        <i class="icon-envelope"></i>
                                        <span>
                                            <em><a href="mailto:support@domain.com">support@domain.com</a></em>
                                            <em><a href="mailto:info@domain.com">info@domain.com</a></em>
                                        </span>
                                    </li>
                                </ul>
                                <ul class="tg-socialicons">
                                    <li class="tg-facebook"><a href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                                    <li class="tg-twitter"><a href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                                    <li class="tg-linkedin"><a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a></li>
                                    <li class="tg-googleplus"><a href="javascript:void(0);"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="tg-rss"><a href="javascript:void(0);"><i class="fa fa-rss"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="tg-footercol tg-widget tg-widgetnavigation">
                                <div class="tg-widgettitle">
                                    <h3>Thông tin hỗ trợ</h3>
                                </div>
                                <div class="tg-widgetcontent">
                                    <ul>
                                        <li><a href="javascript:void(0);">Chính sách sử dụng</a></li>
                                        <li><a href="javascript:void(0);">Chính sách giảm giá</a></li>
                                        <li><a href="javascript:void(0);">Trả hàng</a></li>
                                        <li><a href="javascript:void(0);">Quyền riêng tư</a></li>
                                        <li><a href="javascript:void(0);">Cookies</a></li>
                                        <li><a href="javascript:void(0);">Liên hệ</a></li>
                                        <li><a href="javascript:void(0);">Liên kết</a></li>
                                        <li><a href="javascript:void(0);">Mục tiêu</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="javascript:void(0);">Giới thiệu</a></li>
                                        <li><a href="javascript:void(0);">Đội</a></li>
                                        <li><a href="javascript:void(0);">FAQ</a></li>
                                        <li><a href="javascript:void(0);">Bằng cấp</a></li>
                                        <li><a href="javascript:void(0);">Tham gia ngay</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="tg-footercol tg-widget tg-widgettopsellingauthors">
                                <div class="tg-widgettitle">
                                    <h3>Tác giả nổi tiếng</h3>
                                </div>
                                <div class="tg-widgetcontent">
                                    <ul>
                                        <li>
                                            <figure><a href="javascript:void(0);"><img src="assets/User/images/author/img-09.jpg" alt="image description"></a></figure>
                                            <div class="tg-authornamebooks">
                                                <h4><a href="javascript:void(0);">Trang Hạ</a></h4>
                                                <p>21,658 Sách xuất bản</p>
                                            </div>
                                        </li>	
                                        <li>
                                            <figure><a href="javascript:void(0);"><img src="assets/User/images/author/img-10.jpg" alt="image description"></a></figure>
                                            <div class="tg-authornamebooks">
                                                <h4><a href="javascript:void(0);">Xuân Diệu</a></h4>
                                                <p>21,658 Sách xuất bản</p>
                                            </div>
                                        </li>	
                                        <li>
                                            <figure><a href="javascript:void(0);"><img src="assets/User/images/author/img-11.jpg" alt="image description"></a></figure>
                                            <div class="tg-authornamebooks">
                                                <h4><a href="javascript:void(0);">Lưu Hoằng Trí</a></h4>
                                                <p>21,658 Sách xuất bản</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tg-newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h4>Đăng ký!</h4>
                        <h5>Consectetur adipisicing elit sed do eiusmod tempor incididunt.</h5>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <form class="tg-formtheme tg-formnewsletter">
                            <fieldset>
                                <input type="email" name="email" class="form-control" placeholder="Email">
                                <button type="button"><i class="icon-envelope"></i></button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="tg-footerbar">
            <a id="tg-btnbacktotop" class="tg-btnbacktotop" href="javascript:void(0);"><i class="icon-chevron-up"></i></a>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <span class="tg-paymenttype"><img src="assets/User/images/paymenticon.png" alt="image description"></span>
                        <span class="tg-copyright">2017 All Rights Reserved By &copy; Book Library</span>
                    </div>
                </div>
            </div>
        </div>
        </footer>        
        `
    }
}

customElements.define('my-footer', MyFooter);

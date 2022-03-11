import React from 'react'
import Logo from './img/Logo.png'

function Footer() {
  return (
    <footer id="site-footer" class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                    <div class="widget-footer">
                        <img src={Logo} class="footer-logo" alt=""/>
                        <p>Nous offrons une gamme complète de design d'intérieur, de conception architecturale.</p>
                        <div class="footer-social list-social">
                            <ul>
                                <li><a href="https://www.facebook.com/lilobof" target="_self"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="http://twitter.com" target="_self"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/search/results/all/?keywords=leyla%20njim&origin=RICH_QUERY_SUGGESTION&position=0&searchId=288cc197-ad4f-451a-aa11-e28fc4773a2c&sid=tA_" target="_self"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.instagram.com/leyla_njim/?hl=fr" target="_self"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                    <div class="widget-footer">
                        <h6>Contacts</h6>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <span class="list-item-icon"><i class="ot-flaticon-place"></i></span>
                                <span class="list-item-text">IMM JANNET BUREAU 301 ROUTE DE LA PLAGE, HAMMEM SOUSSA</span>
                            </li>
                            <li class="footer-list-item">
                                <span class="list-item-icon"><i class="ot-flaticon-mail"></i></span>
                                <span class="list-item-text">NJIM.LEYLA@YAHOO.FR</span>
                            </li>
                            <li class="footer-list-item">
                                <span class="list-item-icon"><i class="ot-flaticon-phone-call"></i></span>
                                <span class="list-item-text">55 69 69 49</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                    
                </div>
                {/* <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div class="widget-footer footer-widget-subcribe">
                        <h6>Subscribe</h6>
                        <form class="mc4wp-form" method="post">
                            <div class="mc4wp-form-fields">
                                <div class="subscribe-inner-form">
                                    <input type="email" name="EMAIL" placeholder="YOUR EMAIL" required=""/>
                                    <button type="submit" class="subscribe-btn-icon"><i class="ot-flaticon-send"></i></button>
                                </div>
                            </div>
                        </form>
                        <p>Follow our newsletter to stay updated about agency.</p>
                    </div>
                </div> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer
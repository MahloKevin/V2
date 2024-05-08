function Footer() {
    return <footer className="footer_section">
        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-col">
                    <div className="footer_contact">
                        <h4>
                            Kontakt
                        </h4>
                        <div className="contact_link_box">
                            <a target="_blank" draggable="false" href="https://maps.app.goo.gl/VpUUqCL98Cg5eh3w7">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>Saal a.d. Donau</span>
                            </a>
                            <a target="_blank" draggable="false" href="tel: +499441601">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>Call +01 1234567890</span>
                            </a>
                            <a target="_blank" draggable="false" href="mailto: info@mahlo.com">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span>demo@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 footer-col">
                    <div className="footer_detail">
                        <a draggable="false" target="_blank" href="https://mahlo.com" className="footer-logo">
                            Mahlo </a>
                        <p>
                            Yada yada yada yada yada yada
                        </p>
                        <div className="footer_social">
                            <a draggable="false" target="_blank" href="https://www.facebook.com/MahloGmbh">
                                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a draggable="false" target="_blank" href="https://www.youtube.com/c/mahlogmbh">
                                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                            </a>
                            <a draggable="false" target="_blank" href="https://www.xing.com/pages/mahlogmbh-cokg">
                                <i className="fa-brands fa-xing" aria-hidden="true"></i>
                            </a>
                            <a draggable="false" target="_blank" href="https://www.linkedin.com/company/mahlo/">
                                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a draggable="false" target="_blank" href="https://www.instagram.com/mahlo_germany/">
                                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://www.tiktok.com/@mahlo_germany">
                                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 footer-col">
                    <h4>Öffnungszeiten</h4>
                    <div className="row">
                        <div className="col-6">
                            <p>Mo. - Do.</p>
                            <p>Fr.</p>
                        </div>
                        <div className="col-6">
                            <p>
                                9:00 Uhr - 9:15 Uhr <br/>
                                12:00 Uhr - 12:45 Uhr
                            </p>
                            <p>9:00 Uhr - 9:30 Uhr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <p>
                    &copy; <span id="displayYear"></span> Kevin Seitz
                </p>
            </div>
        </div>
    </footer>
}

export default Footer;
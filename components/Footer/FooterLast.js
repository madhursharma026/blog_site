import Link from 'next/link'

export default function FooterLast() {
    return (
        <div className='mt-4' style={{ background: "#222222" }}>
            <div className="container-lg">
                <div className="row py-5">
                    <div className="col-6">
                        <img src="https://uploads-ssl.webflow.com/62c7d2e1a99459e321a73eda/62c7d2e1a994597fa8a73f36_White_logo.svg" alt="#ImgNotFound" style={{ cursor: "pointer" }} />
                    </div>
                    <div className="col-6">
                        <h6 className='text-light pb-2'>
                            Connect with Us
                        </h6>
                        <div className="row">
                            <div className="col-6">
                                <h5 style={{ color: "white" }}><span style={{ cursor: "pointer" }}><i class="fa fa-twitter pb-3"></i> &ensp;<span className='social_media_icon_name'>Twitter</span></span></h5>
                            </div>
                            <div className="col-6">
                                <h5 style={{ color: "white" }}><span style={{ cursor: "pointer" }}><i class="fa fa-linkedin pb-3"></i> &ensp;<span className='social_media_icon_name'>Linkedin</span></span></h5>
                            </div>
                            <div className="col-6">
                                <h5 style={{ color: "white" }}><span style={{ cursor: "pointer" }}><i class="fa fa-instagram pb-3"></i> &ensp;<span className='social_media_icon_name'>Instagram</span></span></h5>
                            </div>
                            <div className="col-6">
                                <h5 style={{ color: "white" }}><span style={{ cursor: "pointer" }}><i class="fa fa-youtube-play pb-3"></i> &ensp;<span className='social_media_icon_name'>Youtube</span></span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "2px", background: "white" }} />
                <h5 className='text-light py-5'>© Copyright 2022 Questo Wellbeing Pvt. Ltd. <Link href="/"><a style={{ color: "white", textDecoration: "none" }}>&ensp;Privacy Policy</a></Link></h5>
            </div>
        </div>
    )

}

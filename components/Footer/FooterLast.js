import Link from 'next/link'
import Logo from '../../public/imgs/Logo.png'

export default function FooterLast() {
    return (
        <div className='mt-4' style={{ background: "#222222" }}>
            <div className="container-lg">
                <div className="row py-5">
                    <div className="col-6">
                        <img src={Logo.src} alt="#ImgNotFound" style={{ cursor: "pointer", background:"white" }} />
                    </div>
                    <div className="col-6">
                        <h6 className='text-light pb-2'>
                            Connect with Us
                        </h6>
                        <div className="row">
                            <div className="col-6">
                                <Link href="https://www.facebook.com/lapaasindia/"><a style={{ textDecoration: "none", color: "white" }}><h5><i class="fa fa-facebook pb-3"></i> &ensp;<span className='social_media_icon_name'>Facebook</span></h5></a></Link>
                            </div>
                            <div className="col-6">
                                <Link href="https://www.linkedin.com/company/lapaas-digital-marketing-institute-and-company/"><a style={{ textDecoration: "none", color: "white" }}><h5><i class="fa fa-linkedin pb-3"></i> &ensp;<span className='social_media_icon_name'>Linkedin</span></h5></a></Link>
                            </div>
                            <div className="col-6">
                                <Link href="https://www.instagram.com/intellectualindies/"><a style={{ textDecoration: "none", color: "white" }}><h5><i class="fa fa-instagram pb-3"></i> &ensp;<span className='social_media_icon_name'>Instagram</span></h5></a></Link>
                            </div>
                            <div className="col-6">
                                <Link href="https://www.youtube.com/channel/UC_s0g4QdprLkyyN2MDpef7Q"><a style={{ textDecoration: "none", color: "white" }}><h5><i class="fa fa-youtube-play pb-3"></i> &ensp;<span className='social_media_icon_name'>Youtube</span></h5></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "2px", background: "white" }} />
                <h5 className='text-light py-5'><i class="fa fa-copyright"></i> Copyright 2022 Lapaas. <Link href="/"><a style={{ color: "white", textDecoration: "none" }}>&ensp;Privacy Policy</a></Link></h5>
            </div>
        </div>
    )

}

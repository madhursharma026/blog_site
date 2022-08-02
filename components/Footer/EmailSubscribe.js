import Link from 'next/link'

export default function EmailSubscribe() {
    return (
        <div className="p-3">
            <hr style={{ height: "2px", background: "black" }} />
            <div className="text-center py-3">
                <i class="fa fa-envelope" style={{ color: "red", fontSize: "25px" }}></i>
            </div>
            <p className="para-data text-center" style={{ color: "#8C8F94" }}>
                <b><span className='text-dark'>Subscribe</span> to get new posts emailed to you, daily. No spam.</b>
            </p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter your email ID" aria-label="Enter your email ID" aria-describedby="footer_email_bar" style={{ height: "50px", borderRight: "0" }} />
                <span class="input-group-text" id="footer_email_bar" style={{ background: "white" }}><i class="fa fa-arrow-right" style={{ color: "#AB0000" }}></i></span>
            </div>
            <p className='email_description text-center'>2k+ business professionals act on our advice every day. You should too.</p>
        </div>
    )
}

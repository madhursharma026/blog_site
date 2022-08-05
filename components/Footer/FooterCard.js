import { useState, useEffect } from "react";
import ProgressBar from "react-progressbar-on-scroll";

export default function FooterCard() {
    return (
        <div className='fixed-bottom'>
            {/* <ProgressBar
                color="black"
                height={10}
                position="bottom"
            /> */}
            
            <div className="card" style={{ borderRadius: "0" }}>
                <h5 className="card-body container-lg">
                    Cost of Capital and why CRED matters
                </h5>
            </div>
        </div>
    )

}

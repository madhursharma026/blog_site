import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {

    const [postionSticky, setPostionSticky] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setPostionSticky(window.pageYOffset > 20)
            );
        }
    }, []);



    return (
        <>
            <div style={{ marginBottom: `${postionSticky ? "100px" : "0px"}` }}>
                <nav className={`navbar ${postionSticky ? "py-3" : "py-4"} ${postionSticky ? "fixed-top" : ""}`} style={{ backgroundColor: `${postionSticky ? "#F6EFE5" : "transparent"}`, borderBottom: `${postionSticky ? "1px solid rgba(0, 0, 0, 0.12)" : ""}` }}>
                    <div className="container-lg px-lg-5">
                        <Link href="/">
                            <img src="https://yt3.ggpht.com/BCGjvznyp0fyUKqcSMFGfqx0vRo7G5JQICJp5f5VgIfW7aYrNuwttvHlsgaM1ONvkr3hqmgpcQ=s900-c-k-c0x00ffffff-no-rj" alt="#ImgNotFound" style={{ cursor: "pointer" }} width="50px" height="50px" />
                        </Link>
                        <button type="button" className="btn btn-dark">
                            Stoa Program <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

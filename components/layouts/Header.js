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
                            <img src="https://uploads-ssl.webflow.com/62c7d2e1a99459e321a73eda/62c7d2e1a994593ed4a73f05_stoa_logo.svg" alt="#ImgNotFound" style={{ cursor: "pointer" }} />
                        </Link>
                        <button type="button" className="btn btn-danger">
                            Stoa Program <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

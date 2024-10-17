import React from 'react'
import book from "../Styles/book.module.css"

function BookComp() {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-3 gap-6 p-4 container">
            <div className={`${book.report_img}  mx-auto`}>
                <img className={book.image} src='https://extrapolate.b-cdn.net/Background/Report_Cover_Set_1.jpg' alt="Book1" />
                <p className={`${book.header} p-2`}>Cyber Security Market Price</p>
                <p className={`${book.ptag} mt-2`}>March 2021 | 250-pages</p>
            </div>
            <div className={`${book.report_img}  mx-auto`}>
                <img src='https://extrapolate.b-cdn.net/Background/Report_Cover_Set_2.jpg' alt="Book2" />
                <p className={`${book.header} p-2`}>Network Security Firewall Market</p>
                <p className={`${book.ptag} mt-2`}>March 2021 | 250-pages</p>
            </div>
            <div className={`${book.report_img}  mx-auto`}>
                <img src='https://extrapolate.b-cdn.net/Background/Report_Cover_Set_6.jpg' alt="Book3" />
                <p className={`${book.header} p-2`}>Global ngery Storage Systems</p>
                <p className={`${book.ptag} mt-2`}>March 2021 | 250-pages</p>
            </div>
            <div className={`${book.report_img}  mx-auto`}>
                <img src='https://extrapolate.b-cdn.net/Background/Report_Cover_Set_5.jpg' alt="Book4" />
                <p className={`${book.header} p-2`}>Business Intelligence</p>
                <p className={`${book.ptag} mt-2`}>March 2021 | 250-pages</p>
            </div>
            <div className={`${book.report_img}  mx-auto`}>
                <img src='https://extrapolate.b-cdn.net/Background/Report_Cover_Set_3.jpg' alt="Book5" />
                <p className={`${book.header} p-2`}>Renewable Energy Market by Source </p>
                <p className={`${book.ptag} mt-2`}>March 2021 | 250-pages</p>
            </div>
            <div className={`${book.report_img}  mx-auto`}>
                <img src='https://extrapolate.b-cdn.net/Background/Report_Cover_Set_2.jpg' alt="Book6" />
                <p className={`${book.header} p-2`}>Global fintech Market: By applications</p>
                <p className={`${book.ptag} mt-2`}>March 2021 | 250-pages</p>
            </div>

        </div>
    )
}

export default BookComp
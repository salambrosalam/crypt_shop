import React, {Component} from "react"
import header_style from "./HomePage.module.css"
import profile_1 from "../../Assets/HomePage/profile_1.png"
import anonymous from "../../Assets/HomePage/create_account_2_anonymous.png"
import manifier from "../../Assets/HomePage/manifier.png"
import success from "../../Assets/HomePage/success.jpg"

class HomePage extends Component{
    render() {
        return(
            <div>
                <main className={header_style.main}>
                    <div className={header_style.block_with_info}>
                        <span className={header_style.font_changer_main}>
                            Hi, this is a crypt_shop! Probably everyone would like to shopping in your favorite shops and use crypt now this is simple u can do this in 2 steps , other we will do for you
                        </span>
                    </div>
                    <div className={header_style.column_of_images}>
                        <div className={header_style.block_with_info} style={{display: "flex", flexDirection: "column"}}>
                            <img className={header_style.image_sizer} src={anonymous} alt={""}/>
                            <span className={header_style.font_changer_main}>Create account</span>
                        </div>
                        <div className={header_style.block_with_info} style={{display: "flex", flexDirection: "column"}}>
                            <img className={header_style.image_sizer} src={manifier} alt={""}/>
                            <span className={header_style.font_changer_main} style={{textAlign: "center"}}>Find shop</span>
                        </div>
                        <div className={header_style.block_with_info} style={{display: "flex", flexDirection: "column"}}>
                            <img className={header_style.image_sizer} src={success} alt={""}/>
                            <span className={header_style.font_changer_main} style={{textAlign: "center"}}>Buy it!!!</span>
                        </div>
                    </div>
                    <div className={header_style.under_images}>
                        <span className={header_style.font_changer_main}>
                            1.Create account
                        </span>
                        <span className={header_style.font_changer_main}>
                            2.Find your shop and choose your thing
                        </span>
                        <span className={header_style.font_changer_main}>
                            3.Deal transaction using our bot
                        </span>
                        <span className={header_style.font_changer_main}>
                            4.Bot will buy thing for you
                        </span>
                    </div>
                </main>
                <footer className={header_style.homePage}>
                    <div >
                        <img style={{width:"50px", height:"50px"}} src={profile_1} alt=""/>
                    </div>
                    <div >
                        <span>Copyright © 2020 crypt_shop, Inc.</span>
                    </div>
                    <div >
                        <span>support:crypt_shop@anonymous.com</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HomePage;
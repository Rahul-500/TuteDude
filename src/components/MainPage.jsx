import React from 'react'
import "./MainPage.css"
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import group from "./assets/group.png"
import wallet from "./assets/wallet.png"
import discount from "./assets/discount.png"
import refrral from "./assets/referral-code.png"

const Navbar = () => {
  return (
    <div>
        <div className='container'>
            <div className='header'>
                <img src="https://tutedude.com/refundassets/Tutedudelogo.png" alt="" />
                <h1 className='head'>TuteDude</h1>
            </div>

            <ul className="lists">
                <li className="list-items-1">
                    My Assignment
                </li>
                <li className="list-items-2">
                    Chat with Mentor
                </li>
                <li className="list-items-3">
                    <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="" />
                    ProfileName
                    <i class="arrow down"></i>
                </li>
            </ul>
        </div>
        <div className='mid-container'>
            <p className='mid'>UI/UX  Refer & Earn</p>
            <div className="Card-container">
                <Card className='Card-design' raised elevation={6}>
                    <ul className="lists-2">
                        <li className="lists-items-1">
                            Referral Earning
                            <div className="sub">&#8377; 2,500</div>
                        </li>
                        <li className="lists-items-2">
                            Total Referrals
                            <div className="sub">7</div>
                        </li>
                        <li className="lists-items-3">
                            Wallet Ballance
                            <div className="sub">&#8377; 500</div>
                        </li>
                    </ul>
                    <button className='button-design'>Withdrawal Balance</button>
                </Card>
                <div className="Card-2">
                <p className='Card-2-head'>Your Referral Code</p>
                    <Card className='Card-design-2'>
                        <ul className="ul-item">
                            <li className="li-item">E</li>
                            <li className="li-item">D</li>
                            <li className="li-item">C</li>
                            <li className="li-item">H</li>
                            <li className="li-item">5</li>
                            <li className="li-item-last">4</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
        <div className="end-container">
            <h2>How does it work ?</h2>
            <div className="end-main-cont">
                <div className="end-cont-1">
                    <div className="item-1">
                        <div className="item-1-1"><img src={group} alt="" /></div>
                        <div className="item-1-2">
                            <p className='sub-part-1'>Invite your Friends </p><br /><p className='sub-part-2'>Share the link tutedude.com with <br /> your friends </p>
                        </div>
                    </div>
                    <div className="item-1">
                        <div className="item-1-1"><div className="rupee">&#8377;</div></div>
                        <div className="item-1-2">
                            <p className='sub-part-1'>You get &#8377; 200 as referral money </p><br /><p className='sub-part-2'>On total purchase the friend <br /> makes, into your wallet </p>
                        </div>
                    </div>
                    <div className="item-1">
                        <div className="item-1-1"><img src={wallet} alt="" /></div>
                        <div className="item-1-2">
                            <p className='sub-part-1'>Transfer money from wallet</p><br /><p className='sub-part-2'>When the wallet balance reaches <br /> &#8377; 200 or more, you can withdraw it</p>
                        </div>
                    </div>
                </div>
                <div className="end-cont-2">
                    <div className="item-1">
                        <div className="item-1-1"><img src={refrral} alt="" /></div>
                        <div className="item-1-2">
                            <p className='sub-part-1'>Friend purchases any course</p><br /><p className='sub-part-2'>Using your REFERRAL CODE in the <br /> payment page </p>
                        </div>
                    </div>
                    <div className="item-1">
                        <div className="item-1-1"><img src={discount} alt="" /></div>
                        <div className="item-1-2">
                            <p className='sub-part-1'>Your friend gets &#8377; 200 off </p><br /><p className='sub-part-2'>On his overall fee on successful <br /> purchase using your referral code </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="foot">
            Friends Who Enrolled <br /> <br /> Terms & Conditions
        </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import logo1 from '../image/logo1.png'
import logo2 from '../image/logo2.png'
import logo3 from '../image/logo3.png'
import logo4 from '../image/logo4.png'


function Navbar() {
    const myStyle1={
        height:"96px",
        width: "595px",
        display: "flex",
        margin:"auto",
        
        backgroundColor:" #FAB5BD",
        


    };
    const myStyle2={
        width: "85px",
        height: "85px",
        margin_left: "10px"

    };
    const myStyle3={
        width: "113px",
        height: "64px"
        

    }
  return (
    <>
    <div >
    <div style={myStyle1}>
        <img style={myStyle2} src={logo1} alt="" />
        <div style={{margin:"auto"}}>
            <p style={{fontSize:"16px",fontWeight:"400"}}>Kitchen King</p>
            <p style={{fontSize:"10px"}}>Bargarh, Odisha 768040</p>
            <p style={{fontSize:"7px"}}>Phone: 7978655841 Email:sahusidharth4121@gmail.com</p>
        </div>
        <img style={myStyle3} src={logo2} alt="" />

    </div>
    <div style={{backgroundColor:"#F6F5F5",width:"595px",height:"684px"}}>
        <div style={{fontSize:"12px",fontWeight:"400",lineHeight:"14px"}} >
            <p >Order ID: 5955509077</p>
            <p >Order Date & Time:................................................</p>
            <p >Customer Name............................................................................. Mob No............................................... Delivery Address:....................................................................................................................... Delivery partner's Name:........................................................................................................</p>
            <hr/>
        </div>
        <div style={{display:"flex",position:"relative"}}>
        <img style={{rotate:"-31.6deg",width:"636px",height:"357px",opacity:"10%",marginTop:"78px",marginLeft:"-45px"}} src={logo2} alt="" />
            <div style={{position:"absolute"}}>
                <p style={{fontSize:"16px"}}>Order Details</p>
                <table style={{fontSize:"9px",lineHeight:"12px",marginLeft:"32px",width:"100%"}}>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit price</th>
                        <th>Total price</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item1</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item2</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item3</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item4</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item5</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item6</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item7</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item8</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item9</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                    <tr style={{width:"308px",height:"24px"}}>
                        <th>Item10</th>
                        <th>1</th>
                        <th>150</th>
                        <th>150</th>
                    </tr>
                </table>
            </div>
            <div style={{borderLeft:"1px solid black",height:"500px",marginLeft:"-320px"}}></div>
            <div style={{position:"absolute"}}>
                <p style={{fontSize:"16px",marginLeft:"200px"}}>Instructions</p>
                <ul style={{fontSize:"8px",width:"90%",textAlign:"initial",fontWeight:"400"}}>
                    <li style={{marginLeft:"250px"}}>"Lorem ipsum dolor sit amet, consectetur adipis"</li>
                    <li style={{marginLeft:"250px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id saepe dolorum eveniet? A, libero!</li>
                    <li style={{marginLeft:"250px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li style={{marginLeft:"250px"}}>Lorem ipsum dolor sit amet consectetur.</li>
                    <li style={{marginLeft:"250px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, velit.</li>
                </ul>
            </div>
            
        </div>

    </div>
    <div style={{backgroundColor:"#FAB5BD",width:"595px",height:"62px"}}>
        <div style={{display:"flex",margin:"auto"}}>
            <p style={{fontSize:"8px",fontWeight:"400",marginTop:"40px",marginLeft:"120px"}}>www.zomato.com || support@zomato.com</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginRight:"5px",marginTop:"2px"}}>
                <img style={{height:"17px",width:"17px"}} src={logo4} alt="" />
                <img style={{height:"57px",width:"57px"}} src={logo3} alt="" />

            </div>
        </div>

    </div>

    </div>
    <div>
        <button style={{width:"200px",backgroundColor:"green",marginTop:"10px",color:"white"}}>DOWNLOAD</button>
    </div>
    </>
    
  )
}

export default Navbar
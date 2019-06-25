import React from 'react'

function Footer(){
    return (
        <div className= "footer" >
            <img className= 'footimg' src = 'https://images.unsplash.com/photo-1503667663817-f57326084f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'></img>
            <h1> Our Locations</h1>
            <p>Feel free to come and experience any of our treatments from any of our beautiful facilities.</p>
            <div className= 'locationdiv'>
                <h2> Sheraton Hotel</h2>
                <h4>150 W 500 S, Salt Lake City, UT 84101</h4>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234098831546!2d-111.89789844861906!3d40.7593103425547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f51b0003c00d%3A0x3848c38225710a1!2s150+W+500+S%2C+Salt+Lake+City%2C+UT+84101!5e0!3m2!1sen!2sus!4v1561439509621!5m2!1sen!2sus" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            </div>

        </div>
    )
}


export default Footer
import React from "react";
import lul from './assets/img/lulu.jpg'
// import github from './Github Icon.png'
// import facebook from './Facebook Icon.png'
// import insta from './Instagram Icon.png'
// import tweet from './Twitter Icon.png'
    
export default function Card() {
    return (
        <div className="bod">
            <div className="card-left">
                <img src={lul} />
                <header>
                    <h1>Lulseged Admasu</h1>
                    <h3>CS Student</h3>
                    <div>lulsegedwork@gmail.com</div>
                    <div className="btns">
                        <a href="/" className="btn1">Email</a>
                        <a href="/" className="btn2">LinkedIn</a>
                    </div>
                </header>
                <main>
                    <div>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                        </p>
                    </div>
                    <div>
                        <h3>Interests</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                        </p>
                    </div>
                </main>
                <footer>
                    <a href="/"><i class="fa-brands fa-twitter"></i></a>
                    <a href="/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-github"></i></a>
                </footer>
            </div>
    
            <div className="card-right">
            <img src={lul} />
            <header>
                <h1>Lulseged Admasu</h1>
                <h3>CS Student</h3>
                <div>lulsegedwork@gmail.com</div>
                <div className="btns">
                    <a href="/" className="btn1">Email</a>
                    <a href="/" className="btn2">LinkedIn</a>
                </div>
            </header>
            <main>
                <div>
                    <h3>About</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                    </p>
                </div>
                <div>
                    <h3>Interests</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                    </p>
                </div>
            </main>
            <footer>
                <a href="/"><i class="fa-brands fa-twitter"></i></a>
                <a href="/"><i class="fa-brands fa-facebook"></i></a>
                <a href="/"><i class="fa-brands fa-instagram"></i></a>
                <a href="/"><i class="fa-brands fa-github"></i></a>
            </footer>
            </div>
        </div>
    )
}
import './../src/logo.svg'
import './ALX.jpg'
import './App.css';

export default function AboutPage() { 
    return(
        <>
        <div className='main'>
       <h1 className='bss'>GIT</h1>
                        <div className='container'>
                        <a href="#" className='buttons'>Main</a>
                        <a href="#">Talk</a>
                        <a href="#">Name</a>
                        <a href="#">Talk</a>
                        </div>
       </div>
        <div className="pager">
            <div className="background">
                <div className='aa'>
                    <h2 className='title_body'>TITLE BODDY </h2>
                <div className="line"></div>
                </div>
            </div>
        </div>
        <div className="column-list">
            <div className="wrapper_column">
                <div className="column-images">
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" className="images-column" />
                    </div>
                <div className='column-b'>
                <div className="column-title">Name</div>
                    <div className="column-body">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsum, reprehenderit.
                    </div>
                </div>
            </div>
            <div className="wrapper_column">
                <div className="column-images">
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" className="images-column" />
                    </div>
                <div className='column-b'>
                <div className="column-title">Name</div>
                    <div className="column-body">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsum, reprehenderit.
                    </div>
                </div>
            </div>
        </div>
        <div className="column-list">
              <div className="wrapper_column">
                <div className="column-images">
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" className="images-column" />
                    </div>
                <div className='column-b'>
                <div className="column-title">Name</div>
                    <div className="column-body">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsum, reprehenderit.
                    </div>
                </div>
            </div>
            <div className="wrapper_column">
                <div className="column-images">
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" className="images-column" />
                    </div>
                <div className='column-b'>
                <div className="column-title">Name</div>
                    <div className="column-body">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsum, reprehenderit.
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


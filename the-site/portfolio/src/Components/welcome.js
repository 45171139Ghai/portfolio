import './css/welcome.scss';
import '../index.scss'


function Message () {
    return (
        <div className="content-wrapper">
            <section>
                <h2 className="hello" style={{opacity: "74%"}}>Hello, I'm Thon</h2>
                <div className="message-container">
                    <p>A skilled junior web developer from Kingston Ontario. <br/> 
                    I build static sites to help small businesses reach their target customers. <br/> 
                    My weekends are spent in honing my css and javaScript skills.</p>
                </div>
                <button type="button" className="m-btn">Projects</button>
            </section>
        </div>
    );
}

export default Message;
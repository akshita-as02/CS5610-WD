export default function LabsMainCards() {
    return (
        <div className="d-flex justify-content-between flex-wrap">
            <div className="card" style={{ width: "18rem" }}>
                <img src="images/htmlcard.png" className="card-img-top" alt="Lab 1"/>
                <div className="card-body">
                    <h5 className="card-title">Lab 1</h5>
                    <p className="card-text"></p>
                    <a href="./#/Labs/Lab1" className="btn btn-primary">Click here</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="images/bootstrapcard.png" className="card-img-top" alt="Lab 2"/>
                <div className="card-body">
                    <h5 className="card-title">Lab 2</h5>
                    <p className="card-text"></p>
                    <a href="#/Labs/Lab2" className="btn btn-primary">Click here</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="images/lab3.png" className="card-img-top" alt="Lab 3"/>
                <div className="card-body">
                    <h5 className="card-title">Lab 3</h5>
                    <p className="card-text"></p>
                    <a href="#/Labs/Lab3" className="btn btn-primary">Click here</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="images/lab4.jpg" className="card-img-top" alt="Lab 4"/>
                <div className="card-body">
                    <h5 className="card-title">Lab 4</h5>
                    <p className="card-text"></p>
                    <a href="#/Labs/Lab4" className="btn btn-primary">Click here</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" , margin:"10px 0 0 0"}}>
                <img src="images/physical.jpeg" className="card-img-top" alt="Lab 5"/>
                <div className="card-body">
                    <h5 className="card-title">Lab 5</h5>
                    <p className="card-text"></p>
                    <a href="#/Labs/Lab4" className="btn btn-primary">Click here</a>
                </div>
            </div>
        </div>
    );
}

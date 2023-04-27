import vector from "../public/imgs/Vector.svg"

export default function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="cardDetails">
                    <img src={props.image} alt="" />
                    <div className="cardBody">
                        <h2>{props.title}</h2>
                        <h3><span><img src={vector} alt="" />
                        </span> {props.city}</h3>
                        <p>
                            {props.desc}
                        </p>
                        <a href="#" className='btn'>
                            Read more </a>
                    </div>
                </div>
            </div>
        </>
    )
}
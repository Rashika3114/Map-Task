function Book(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div class="box">
                <div class="innerbox">
                    <div class="image">
                        <div class="image-div">
                            <img src={props.pic} alt=""></img>
                        </div>
                        <div>
                            <h1>{props.name}</h1>
                            <p>{props.msg}</p>
                        </div>
                    </div>

                    <div style={{ padding: "20px" }}>
                        <p>{props.time}</p>
                        <p>⭐</p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Book
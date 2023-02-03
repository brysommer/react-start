
function Card(props) {
    const { cardData } = props;
    console.log(cardData);
    return (
        <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src={el.img} alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{el.productDetails.name}</h5>
                                    {el.productDetails.price}
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#anch">{el.buttonText}</a></div>
                            </div>
                        </div>
                    </div>
    )
}

export default Card;
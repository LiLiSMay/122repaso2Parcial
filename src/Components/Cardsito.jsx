import {
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardText

} from 'reactstrap';

const Cardsito = () => {
    return (
        <CardGroup>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Chicharon
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Descripcion
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Lechon
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        DEscripcion
                    </CardSubtitle>
                    <CardText>
                        This card has supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Picana
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Descripcion
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </CardGroup>
    )
}

export default Cardsito;
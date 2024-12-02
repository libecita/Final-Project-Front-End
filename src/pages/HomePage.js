import {Card, Container, Row} from "react-bootstrap";

export default function HomePage() {

    let posts = [
        {
          "picture": 'img100.png'
        }
    ];
    //hooks
    //helper functions
        function MyItem({item}) {
            return (
                <Card style={{ width: '9rem'}}>
                    <Card.Img variant="top" src={item.picture} />
                    <Card.Body>
                        <Card.Text>
                            T-shirt.
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        }

        return  (
            <div className="center">
                <h1>Posts</h1>
                <Container fluid>
                    <Row sm={2} lg={4} className='justify-content-evenly'>
                        {posts.map((item) =>
                            <MyItem item={item}/>
                        )}
                    </Row>
                </Container>
            </div>
    );
}
import React from "react";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  FormCheck,
} from "react-bootstrap";
import CheckboxForm from '/home/momochan/MoneraDash/src/SelectATB';
import SwitchAntibiotic from '/home/momochan/MoneraDash/src/antibiotic_list';
import ReturnMO from '/home/momochan/MoneraDash/src/SelectMO';
import AntibioticPanel from '/home/momochan/MoneraDash/src/MOPanel';

function AMRPR() {
  return (

    <Container fluid>
      <Row>
        <Col md='8'>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Antimicrobial Profile</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>

                  <Col className="BI-1" md="4">
                    <Form.Group>
                      <label>Guidelines</label> {/* Guidelines foi desabilitado pois o banco de dados ou API para conseguir os valores são inexistentes.*/}
                      <Form.Control
                        type="text"
                        placeholder="CLSI, EuCAST, BrCAST"
                        disabled
                        readOnly />
                    </Form.Group>
                  </Col>
{/* Todos os dados que são pegos agora automaticamente ficam "salvos" até que se encerre a anaĺise. Possivelmente uma opção de "Salvar parametros" será implementada.*/}
                  <Col className="BI-1" md="4">
                    <Form.Group>
                      <label>Experiment Name</label>
                      <Form.Control
                        type="text"
                        placeholder="ex: ISSUE 314"
                        defaultValue="New Expriment">
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col className="BI-1" md="4">
                    <Form.Group>
                      <label>Date</label>
                      <Form.Control type="date" name="date" className="form-control" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col className="BI-1" md="6">
                    <Form.Group>
                      <label>Microorganism</label>
                      <ReturnMO/>
                    </Form.Group>
                  </Col>

                  <Col className="BI-1" md="4">
                    <Form.Group>
                      <label>Test Method</label>
                      <select class="form-control" size='sm'>
                        <option>Disk Diffusion (DD)</option>
                        <option>Dilution test (MIC)</option>
                      </select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="BI-1" md="4">
                    <Form.Group>
                      <label>Drugs</label>
                        <SwitchAntibiotic/>
                      </Form.Group>
                  </Col>
                  <Col>
                  <AntibioticPanel/>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
class AMR_Profile extends React.Component {
  render(){
    AMRPR()
  };
};

export default AMRPR;

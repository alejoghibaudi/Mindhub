import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const ciudad = props.ciudad
    console.log(props)
    const actividades = props.actividades
    const ciudadfilt = actividades.filter(x => x.ciudad === ciudad);
    const cantacti = ciudadfilt.length;
    const titulo= props.titulo;
    const actfilt= actividades.filter(x => x.title === titulo);

    if (cantacti == 0) { return <h3>no hay nada</h3> } //meter un loading y qeu despues muestre lo que hay
    else {
        return (
            <div>
                 <Button
                        color="primary"
                        onClick={toggle}
                        style={{ marginBottom: '1rem' }}>
                        {props.titulo}
                  </Button>
                        {actfilt.map(partofact => {
                        if(partofact.title===titulo){
                        return (
                        <div>
                            <Collapse isOpen={isOpen}>
                                <Card>
                                <CardBody>
                                    <div style={{width:"20%", height:"100%", position:"relative",alignItems:"center"}}>
                                    <img src={partofact.img} style={{width:"100%", height:"100%",position:"relative",textAlign:"center"}}/>
                                    </div>
                                </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    )}else{
                        return(
                        <div>
                        <Collapse isOpen={isOpen}>
                        <Card>
                        <CardBody>
                          No hay actividades aun
                        </CardBody>
                        </Card>
                    </Collapse>
                    </div>
                        )
                    };
                })}
        </div >
        )}
	}
    
export default Example;
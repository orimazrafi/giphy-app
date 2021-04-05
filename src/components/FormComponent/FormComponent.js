import { Form, Row, Col } from "react-bootstrap";
import Input from "../Input/Input";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const FormComponent = ({ array, filters, handleChange, handleError, errors, submit, disabled }) => {
    return (
        <Form>
            <Row>
                {array.map(input => (
                    <Col xs={3} key={input.name}>
                        <Input
                            value={filters[input.name]}
                            onChange={handleChange}
                            name={input.name}
                            type={input.type}
                            validation={input.validation}
                            handleBlur={input.validation ? handleError : null}
                            errors={input.validation ? errors : null}
                        />
                    </Col>))}
                <Col>
                    <ButtonComponent name="Submit" submit={submit} disabled={disabled?.disabled && !disabled?.field} />
                </Col>
            </Row>
        </Form>
    )

}
export default FormComponent
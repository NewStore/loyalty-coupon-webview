import styled from 'styled-components';

const SubmitButtonContainer = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
`

const Button = styled.div`
    height: 50px;
    width: 100%;
    background-color: #EF1B53;
    transition: margin-bottom .8s ease;
`

const ButtonText = styled.p`
    text-align: center;
    color: ${props => props.theme.color.white};
    text-decoration: none;
    padding-top: ${props => props.theme.spacing16};
`

const Skirt = styled.div`
    position: fixed;
    height: ${props => props.theme.spacing32};
    width: 100%;
    background-color: ${props => props.theme.color.white};
    bottom: 0;
`

function SubmitButton(props) {
    const { handleSubmit, hidden } = props;

    return (
        <SubmitButtonContainer>
            <Button 
                onClick={handleSubmit}
                style={hidden ? {marginBottom: "-32px"} : {marginBottom: "30px"}}
            >
                <ButtonText>APPLY</ButtonText>
            </Button>
            <Skirt/>
        </SubmitButtonContainer>
    )
}

export default SubmitButton

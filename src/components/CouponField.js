import styled from 'styled-components';
import {FieldTitle, FieldValue} from '../App';

const CouponFieldContainer = styled.div`
    margin: ${props => props.theme.spacing16};
    color: black;
    background: white;
    border-radius: 8px;
    padding: ${props => props.theme.spacing16};
    box-shadow: 3px 2px 4px ${props => props.theme.color.gray200};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SelectedIndicator = styled.span`
    background-color: ${props => props.isSelected ? "#EF1B53" : props.theme.color.gray200};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    float: right;
`

const Button = styled.button`
    margin-top: ${props => props.theme.spacing4};
    margin-left: -2px;
    font-size: ${props => props.theme.fontSize.subhead};
`


function CouponField(props) {
    const { data, selectedCoupons, onSelect } = props;
    const isSelected = selectedCoupons.some(item => item.code === data.code)

    return (
        <CouponFieldContainer>
            <div>
                <FieldTitle>Coupon</FieldTitle>
                <FieldValue>{data.label}</FieldValue>
                <FieldValue>{data.code}</FieldValue>
                <Button onClick={() => onSelect(data)}>Use Coupon</Button>
            </div>
            <div>
                <SelectedIndicator isSelected={isSelected}/>
            </div>
        </CouponFieldContainer>
    )
}

export default CouponField
